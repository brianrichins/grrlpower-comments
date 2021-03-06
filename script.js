(function(){    
    // load moment.js and trigger a callback when ready
    function loadMoment(){  //https://stackoverflow.com/a/16743863/957950
        var existId = 'grrlCommentsLoaded';
        var existingScript = document.getElementById(existId);
        if (!!existingScript)   //quit if already run
            return;

        var fileref = document.createElement('script');
        fileref.id = existId;
        fileref.onload = createUI;  //set callback
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js");

        document.getElementsByTagName("head")[0].appendChild(fileref);
    }   

    function createUI(){
        // update the nav styling
        var nav = document.getElementById("paginav") || createNav();
        nav.attributes.grrlCommentsLoaded = true;
        nav.className += " comment";    //reuse existing styling
        nav.style.position ='fixed'; 
        nav.style.top = 0;
        nav.style.width = '752px';
        nav.style.marginLeft = '-10px'; 
        nav.style.marginTop ='0';
        nav.style.border = '2px solid';

        //create new elements & append to nav bar
        var ol = nav.firstElementChild;
        
        var saveLabel = getLI('');
        var save = getLI('Save', function() { setCookie(saveLabel) });
        saveLabel.style.float = save.style.float = '';
        
        ol.appendChild(saveLabel);        
        ol.appendChild(save);
        
        var count = getLI('');
        ol.appendChild(getLI("▼ Next", next));
        ol.appendChild(getLI("Prev ▲", prev));
        ol.appendChild(count);
        
        // trigger workflow
        loadComments(saveLabel, count);
    }
    function createNav() {
        var nav = document.createElement('div');
        nav.id = 'paginav';
        nav.appendChild(document.createElement('ul'));
        
        var container = document.getElementById('comment-wrapper');
        container.append(nav);

        return nav;
    }


    function getLI(text, callback) {
        var li = document.createElement('li');
        li.style.float = 'right';

        if (!!callback) {
            var a = document.createElement('a');
            a.innerText = text;
            a.style.cursor = 'pointer';
            a.onclick = callback;
            li.appendChild(a);
        } else {
            li.innerText = text;
        }
        
        return li;
    }

    // find all comment nodes by timestamp class and process them
    var unread=[];
    function loadComments(label, count) {
        var timestamps = document.getElementsByClassName('comment-time');
        
        var lastRead = getCookieTime();
        label.innerText = lastRead.fromNow();
        //for (i=0; i < timestamps.length; i++) {
        for (i=0; i < timestamps.length; i++) { //temp for developing
            var stamp = timestamps.item(i),
                comment = evalComment(stamp, lastRead);
            if (!!comment)
                unread.push(comment);
        };
        count.innerText = unread.length;
        scroll(0);
    } 

    // load a 'last read' cookie as a timestamp cutoff, set new value for next load
    var cookieKey = "lastread";
    function getCookieTime(){
        var cookieTime = getCookie(cookieKey);
        cookieTime = cookieTime ? moment(cookieTime) : moment().add(-1,'d');
        return cookieTime;  //it's always cookie time
    }
    function getCookie(){    //https://stackoverflow.com/a/25490531/957950
        var c = document.cookie.match('(^|;)\\s*' + cookieKey + '\\s*=\\s*([^;]+)');
        return c ? c.pop() : '';
    }
    function setCookie(label){
        var currTime = moment();
        var val = currTime.toISOString();
        label.innerText = currTime.fromNow();
        var expDate = currTime.add(30,'d'); //keep for a month
        // set an expiration to persist after browser closes
        var cookie_string = cookieKey+'='+val+'; path=/; expires='+expDate._d.toUTCString();
        // Create or update the cookie:
        document.cookie = cookie_string;
    }

    // see if a given comment timestamp is new enough to be 'unread'
    function formatComment(stampNode){
        var comment = stampNode.parentElement.nextElementSibling;
        comment.style.backgroundColor = "#ffcda3";
        return comment;
    }

    function evalComment(stamp, lastReadTime){    //http://momentjs.com/docs/#/parsing/string-format/
//         var stampDateTime = moment(stamp.title,"LLLL");
        var stampDateTime = moment(stamp.innerText.trim());
        
        return (stampDateTime._d > lastReadTime) ? formatComment(stamp) : false;
    }

    // track location
    var curr=0;
    function next(){
        clear();
        curr = Math.min(curr+1, unread.length-1);
        scroll(curr);
    }
    function prev(){
        clear();
        curr = Math.max(curr-1, 0);
        scroll(curr);
    }
    function clear(){
        unread[curr].style.outline = '';
    }
    function scroll(index){
        var el = unread[index];
        if (el) {
            el.scrollIntoView({behavior:'smooth',block:'center'})
            unread[curr].style.outline = '3px solid orange';
        }
    }

    loadMoment();  //trigger the process
})(); //trigger IIFE
