(function(){function loadMoment(){var fileref=document.createElement('script');fileref.onload=loadComments;fileref.setAttribute("type","text/javascript");fileref.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js");if(typeof fileref!=="undefined")
document.getElementsByTagName("head")[0].appendChild(fileref)}
function loadComments(){let timestamps=document.getElementsByClassName('comment-time');var lastRead=getCookieTime();for(i=0;i<timestamps.length;i++){let stamp=timestamps.item(i);evalComment(stamp,lastRead)}}
function getCookieTime(){let cookieKey="lastread";var cookieTime=getCookie(cookieKey);cookieTime=cookieTime?new Date(cookieTime):moment().add(-1,'d');setCookie(cookieKey);return cookieTime}
function getCookie(key){var c=document.cookie.match('(^|;)\\s*'+key+'\\s*=\\s*([^;]+)');return c?c.pop():''}
function setCookie(key){var currTime=moment();var val=currTime.toISOString();var expDate=currTime.add(30,'d');var cookie_string=`${key}=${val}; path=/; expires=${expDate._d.toUTCString()}`;document.cookie=cookie_string}
function evalComment(stamp,lastReadTime){let stampDateTime=moment(stamp.title,"LLLL");if(stampDateTime._d>lastReadTime){formatComment(stamp)}}
function formatComment(stampNode){var comment=stampNode.parentElement.nextElementSibling;comment.style.backgroundColor="#ffcda3"}
loadMoment()})()
