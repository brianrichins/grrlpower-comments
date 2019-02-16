(function(){let node=(tag)=>document.createElement(tag);function loadMoment(){var fileref=node('script');fileref.onload=createUI;fileref.setAttribute("type","text/javascript");fileref.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js");document.getElementsByTagName("head")[0].appendChild(fileref)}
function createUI(){let label=node('label'),saveBtn=node('a');saveBtn.innerText='Save';saveBtn.style.marginRight='4em';saveBtn.style.marginLeft='1em';saveBtn.onclick=()=>{setCookie(label)};let count=node('label');count.style.marginRight='1em';let prevBtn=node('a');prevBtn.innerText="Prev ▲"
prevBtn.onclick=prev;let nextBtn=node('a');nextBtn.innerText="▼ Next"
nextBtn.onclick=next;let nav=document.getElementsByClassName("navigation")[0];nav.className+=" comment";Object.assign(nav.style,{position:'fixed',top:0,width:'612px',marginLeft:'-5px',marginTop:'0',border:'2px solid'});let ol=nav.firstElementChild,li=node('li');li.style.float='right';li.append(label);li.append(saveBtn);li.append(count);li.append(prevBtn);li.append(nextBtn);ol.append(li);loadComments(label,count)}
let unread=[];function loadComments(label,count){let timestamps=document.getElementsByClassName('comment-time');var lastRead=getCookieTime();label.innerText=lastRead.fromNow();for(i=0;i<timestamps.length;i++){let stamp=timestamps.item(i),comment=evalComment(stamp,lastRead);if(!!comment)
unread.push(comment)};count.innerText=unread.length;scroll(0)}
let cookieKey="lastread";function getCookieTime(){var cookieTime=getCookie(cookieKey);cookieTime=cookieTime?moment(cookieTime):moment().add(-1,'d');return cookieTime}
function getCookie(){var c=document.cookie.match('(^|;)\\s*'+cookieKey+'\\s*=\\s*([^;]+)');return c?c.pop():''}
function setCookie(label){var currTime=moment();var val=currTime.toISOString();label.innerText=currTime.fromNow();var expDate=currTime.add(30,'d');var cookie_string=`${cookieKey}=${val}; path=/; expires=${expDate._d.toUTCString()}`;document.cookie=cookie_string}
function evalComment(stamp,lastReadTime){let stampDateTime=moment(stamp.title,"LLLL");return(stampDateTime._d>lastReadTime)?formatComment(stamp):!1}
function formatComment(stampNode){var comment=stampNode.parentElement.nextElementSibling;comment.style.backgroundColor="#ffcda3";return comment}
let curr=0;function next(){clear();curr=Math.min(curr+1,unread.length-1);scroll(curr)}
function prev(){clear();curr=Math.max(curr-1,0);scroll(curr)}
function clear(){unread[curr].style.outline=''}
function scroll(index){let el=unread[index];el.scrollIntoViewIfNeeded();unread[curr].style.outline='3px solid orange'}
loadMoment()})()
