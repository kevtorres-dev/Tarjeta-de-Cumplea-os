var confetti={maxCount:150,speed:2,frameInterval:15,alpha:1,gradient:!1,start:null,stop:null,toggle:null,pause:null,resume:null,togglePause:null,remove:null,isPaused:null,isRunning:null};!function(){confetti.start=u,confetti.stop=g,confetti.toggle=function(){n?g():u()},confetti.pause=s,confetti.resume=m,confetti.togglePause=function(){i?m():s()},confetti.isPaused=function(){return i},confetti.remove=function(){stop(),i=!1,r=[]},confetti.isRunning=function(){return n};var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,e=["rgba(30,144,255,","rgba(107,142,35,","rgba(255,215,0,","rgba(255,192,203,","rgba(106,90,205,","rgba(173,216,230,","rgba(238,130,238,","rgba(152,251,152,","rgba(70,130,180,","rgba(244,164,96,","rgba(210,105,30,","rgba(220,20,60,"],n=!1,i=!1,o=Date.now(),r=[],a=0,l=null;function d(t,n,i){return t.color=e[Math.random()*e.length|0]+(confetti.alpha+")"),t.color2=e[Math.random()*e.length|0]+(confetti.alpha+")"),t.x=Math.random()*n,t.y=Math.random()*i-i,t.diameter=10*Math.random()+5,t.tilt=10*Math.random()-10,t.tiltAngleIncrement=.07*Math.random()+.05,t.tiltAngle=Math.random()*Math.PI,t}function s(){i=!0}function m(){i=!1,c()}function c(){if(!i)if(0===r.length)l.clearRect(0,0,window.innerWidth,window.innerHeight);else{var e=Date.now(),s=e-o;(!t||s>confetti.frameInterval)&&(l.clearRect(0,0,window.innerWidth,window.innerHeight),function(){var t,e=window.innerWidth,i=window.innerHeight;a+=.01;for(var o=0;o<r.length;o++)t=r[o],!n&&t.y<-15?t.y=i+100:(t.tiltAngle+=t.tiltAngleIncrement,t.x+=Math.sin(a)-.5,t.y+=.5*(Math.cos(a)+t.diameter+confetti.speed),t.tilt=15*Math.sin(t.tiltAngle)),(t.x>e+20||t.x<-20||t.y>i)&&(n&&r.length<=confetti.maxCount?d(t,e,i):(r.splice(o,1),o--))}(),function(t){for(var e,n,i,o,a=0;a<r.length;a++){if(e=r[a],t.beginPath(),t.lineWidth=e.diameter,n=(i=e.x+e.tilt)+e.diameter/2,o=e.y+e.tilt+e.diameter/2,confetti.gradient){var l=t.createLinearGradient(n,e.y,i,o);l.addColorStop("0",e.color),l.addColorStop("1.0",e.color2),t.strokeStyle=l}else t.strokeStyle=e.color;t.moveTo(n,e.y),t.lineTo(i,o),t.stroke()}}(l),o=e-s%confetti.frameInterval),requestAnimationFrame(c)}}function u(t,e,o){var a=window.innerWidth,s=window.innerHeight;window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,confetti.frameInterval)};var m=document.getElementById("confetti-canvas");null===m?((m=document.createElement("canvas")).setAttribute("id","confetti-canvas"),m.setAttribute("style","display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),document.body.prepend(m),m.width=a,m.height=s,window.addEventListener("resize",(function(){m.width=window.innerWidth,m.height=window.innerHeight}),!0),l=m.getContext("2d")):null===l&&(l=m.getContext("2d"));var u=confetti.maxCount;if(e)if(o)if(e==o)u=r.length+o;else{if(e>o){var f=e;e=o,o=f}u=r.length+(Math.random()*(o-e)+e|0)}else u=r.length+e;else o&&(u=r.length+o);for(;r.length<u;)r.push(d({},a,s));n=!0,i=!1,c(),t&&window.setTimeout(g,t)}function g(){n=!1}}();const start=()=>{setTimeout((function(){confetti.start()}),1e3)},stop=()=>{setTimeout((function(){confetti.stop()}),2e4)};start(),stop();const pre=document.querySelector("pre");function rotateElement(t,e){const n=t.clientX,i=t.clientY,o=window.innerWidth/2,r=window.innerHeight/2,a=(n-o)/o*45,l=(i-r)/r*45;console.log(a,l),e.style.setProperty("--rotateX",-1*l+"deg"),e.style.setProperty("--rotateY",a+"deg")}document.addEventListener("mousemove",(t=>{rotateElement(t,pre)})),img=document.getElementById("myImg"),img.style.transform="scale(1.9)";