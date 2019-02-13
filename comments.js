(function(){
    // load moment.js and trigger a callback when ready
    function loadMoment(){  //https://stackoverflow.com/a/16743863/957950
        var fileref = document.createElement('script');
        fileref.onload = loadComments;  //set callback
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js");

        if (typeof fileref !== "undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref);
    }   

    // find all comment nodes by timestamp class and process them
    function loadComments() {
        let timestamps = document.getElementsByClassName('comment-time');
        
        var lastRead = getCookieTime();
        //for (i=0; i < timestamps.length; i++) {
        for (i=0; i < timestamps.length; i++) { //temp for developing
            let stamp = timestamps.item(i);
            evalComment(stamp, lastRead);
        };
    } 

    // load a 'last read' cookie as a timestamp cutoff, set new value for next load
    function getCookieTime(){
        let cookieKey = "lastread";
        var cookieTime = getCookie(cookieKey);
        cookieTime = cookieTime ? new Date(cookieTime) : moment().add(-1,'d');
        setCookie(cookieKey);
        return cookieTime;  //it's always cookie time
    }
    function getCookie(key){    //https://stackoverflow.com/a/25490531/957950
        var c = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
        return c ? c.pop() : '';
    }
    function setCookie(key){
        var currTime = moment();
        var val = currTime.toISOString();
        var expDate = currTime.add(30,'d'); //keep for a month
        // set an expiration to persist after browser closes
        var cookie_string = `${key}=${val}; path=/; expires=${expDate._d.toUTCString()}`;
        // Create or update the cookie:
        document.cookie = cookie_string;
    }

    // see if a given comment timestamp is new enough to be 'unread'
    function evalComment(stamp, lastReadTime){    //http://momentjs.com/docs/#/parsing/string-format/
        let stampDateTime = moment(stamp.title,"LLLL");

        if (stampDateTime._d > lastReadTime){
            formatComment(stamp);
        }
    }

    function formatComment(stampNode){
        var comment = stampNode.parentElement.nextElementSibling;
        comment.style.backgroundColor = "#ffcda3";
    }

    loadMoment();
})(); //trigger IIFE

