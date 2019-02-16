(function(){
    function node (tag){
        document.createElement(tag);//reduce wordiness  
    }
    
    // load moment.js and trigger a callback when ready
    function loadMoment(){  //https://stackoverflow.com/a/16743863/957950
        var fileref = node('script');
        fileref.onload = createUI;  //set callback
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js");

        document.getElementsByTagName("head")[0].appendChild(fileref);
    }   

    function createUI(){
        //create new elements
        var label = node('label'),
            saveBtn = node('a');
        saveBtn.innerText = 'Save';
        saveBtn.style.marginRight = '4em';
        saveBtn.style.marginLeft = '1em';
        saveBtn.onclick = function() { setCookie(label) };
        
        var count=node('label');
        count.style.marginRight = '1em';

        var prevBtn = node('a');
        prevBtn.innerText = "Prev ▲"
        prevBtn.onclick = prev;

        var nextBtn = node('a');
        nextBtn.innerText = "▼ Next"
        nextBtn.onclick = next;
        
        // update the nav styling
        var nav = document.getElementsByClassName("navigation")[0];
        nav.className += " comment";    //reuse existing styling
        Object.assign(nav.style, {
            position:'fixed', top: 0,
            width: '612px',
            marginLeft: '-5px', marginTop:'0',
            border: '2px solid'
        });

        // append new UI to nav
        var ol = nav.firstElementChild,
            li = node('li');
        li.style.float='right';
        li.append(label);
        li.append(saveBtn);
        li.append(count);
        li.append(prevBtn);
        li.append(nextBtn);
        
        ol.append(li);
        
        // trigger workflow
        loadComments(label, count);
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
        var cookie_string = `${cookieKey}=${val}; path=/; expires=${expDate._d.toUTCString()}`;
        // Create or update the cookie:
        document.cookie = cookie_string;
    }

    // see if a given comment timestamp is new enough to be 'unread'
    function evalComment(stamp, lastReadTime){    //http://momentjs.com/docs/#/parsing/string-format/
        var stampDateTime = moment(stamp.title,"LLLL");
        
        return (stampDateTime._d > lastReadTime) ? formatComment(stamp) : false;
    }

    function formatComment(stampNode){
        var comment = stampNode.parentElement.nextElementSibling;
        comment.style.backgroundColor = "#ffcda3";
        return comment;
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
