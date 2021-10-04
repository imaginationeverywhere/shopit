(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{178:function(e,t,n){"use strict";var i=n(0),o=n(2);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return h(this,n)}}function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(e);if(0===t)return n;var i=n.match(/(.*?)([0-9]+)(.*)/),o=i?i[1]:"",r=i?i[3]:"",a=i?i[2]:n,s=a.length>=t?a:(d(Array(t)).map((function(){return"0"})).join("")+a).slice(-1*t);return"".concat(o).concat(s).concat(r)}var v={daysInHours:!1,zeroPadTime:2};function g(e,t){var n=e.days,i=e.hours,o=e.minutes,r=e.seconds,a=Object.assign(Object.assign({},v),t),s=a.daysInHours,l=a.zeroPadTime,u=a.zeroPadDays,c=void 0===u?l:u,h=Math.min(2,l),m=s?f(i+24*n,l):f(i,h);return{days:s?"":f(n,c),hours:m,minutes:f(o,h),seconds:f(r,h)}}var y=function(e){l(n,e);var t=m(n);function n(){var e;return r(this,n),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return s(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(i.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(i.Component);y.propTypes={count:o.number,children:o.element,onComplete:o.func};var b=function(e){l(n,e);var t=m(n);function n(e){var o;if(r(this,n),(o=t.call(this,e)).mounted=!1,o.initialTimestamp=o.calcOffsetStartTimestamp(),o.offsetStartTimestamp=o.props.autoStart?0:o.initialTimestamp,o.offsetTime=0,o.legacyMode=!1,o.legacyCountdownRef=Object(i.createRef)(),o.tick=function(){var e=o.calcTimeDelta(),t=e.completed&&!o.props.overtime?void 0:o.props.onTick;o.setTimeDeltaState(e,void 0,t)},o.start=function(){if(!o.isStarted()){var e=o.offsetStartTimestamp;o.offsetStartTimestamp=0,o.offsetTime+=e?o.calcOffsetStartTimestamp()-e:0;var t=o.calcTimeDelta();o.setTimeDeltaState(t,"STARTED",o.props.onStart),o.props.controlled||t.completed&&!o.props.overtime||(o.clearTimer(),o.interval=window.setInterval(o.tick,o.props.intervalDelay))}},o.pause=function(){o.isPaused()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.setTimeDeltaState(o.state.timeDelta,"PAUSED",o.props.onPause))},o.stop=function(){o.isStopped()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.offsetTime=o.offsetStartTimestamp-o.initialTimestamp,o.setTimeDeltaState(o.calcTimeDelta(),"STOPPED",o.props.onStop))},o.isStarted=function(){return o.isStatus("STARTED")},o.isPaused=function(){return o.isStatus("PAUSED")},o.isStopped=function(){return o.isStatus("STOPPED")},o.isCompleted=function(){return o.isStatus("COMPLETED")},o.handleOnComplete=function(e){o.props.onComplete&&o.props.onComplete(e)},e.date){var a=o.calcTimeDelta();o.state={timeDelta:a,status:a.completed?"COMPLETED":"STOPPED"}}else o.legacyMode=!0;return o}return s(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,n=e.now,i=e.precision,o=e.controlled,r=e.overtime;return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.now,o=void 0===i?Date.now:i,r=n.precision,a=void 0===r?0:r,s=n.controlled,l=n.offsetTime,u=void 0===l?0:l,c=n.overtime;t="string"===typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,s||(t+=u);var h=s?t:t-o(),m=Math.min(20,Math.max(0,a)),d=Math.round(1e3*parseFloat(((c?h:Math.max(0,h))/1e3).toFixed(m))),p=Math.abs(d)/1e3;return{total:d,days:Math.floor(p/86400),hours:Math.floor(p/3600%24),minutes:Math.floor(p/60%60),seconds:Math.floor(p%60),milliseconds:Number((p%1*1e3).toFixed()),completed:d<=0}}(t,{now:n,precision:i,controlled:o,offsetTime:this.offsetTime,overtime:r})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,n){var i=this;if(this.mounted){var o;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),o=this.handleOnComplete);return this.setState((function(n){var o=t||n.status;return e.completed&&!i.props.overtime?o="COMPLETED":t||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:e,status:o}}),(function(){n&&n(i.state.timeDelta),o&&o(i.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,n=e.zeroPadTime,i=e.zeroPadDays,o=this.state.timeDelta;return Object.assign(Object.assign({},o),{api:this.getApi(),props:this.props,formatted:g(o,{daysInHours:t,zeroPadTime:n,zeroPadDays:i})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,n=e.children,o=e.onComplete;return Object(i.createElement)(y,{ref:this.legacyCountdownRef,count:t,onComplete:o},n)}var r=this.props,a=r.className,s=r.overtime,l=r.children,u=r.renderer,c=this.getRenderProps();if(u)return u(c);if(l&&this.state.timeDelta.completed&&!s)return Object(i.cloneElement)(l,{countdown:c});var h=c.formatted,m=h.days,d=h.hours,p=h.minutes,f=h.seconds;return Object(i.createElement)("span",{className:a},c.total<0?"-":"",m,m?":":"",d,":",p,":",f)}}]),n}(i.Component);b.defaultProps=Object.assign(Object.assign({},v),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),b.propTypes={date:Object(o.oneOfType)([Object(o.instanceOf)(Date),o.string,o.number]),daysInHours:o.bool,zeroPadTime:o.number,zeroPadDays:o.number,controlled:o.bool,intervalDelay:o.number,precision:o.number,autoStart:o.bool,overtime:o.bool,className:o.string,children:o.element,renderer:o.func,now:o.func,onMount:o.func,onStart:o.func,onPause:o.func,onStop:o.func,onTick:o.func,onComplete:o.func},t.a=b},180:function(e,t,n){"use strict";(function(e){var i=n(0),o=n.n(i),r=n(2),a=n.n(r),s=n(171),l=n.n(s);function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){h(e,t,n[t])}))}return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(l){o=!0,r=l}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e)return"";var n=e;return t&&Object.keys(t).forEach((function(e){n=n.replace(e,t[e])})),n}function S(){return"undefined"!==typeof e.window?e.window.innerWidth:0}var w=27,k=37,T=39,M=function(t){function n(e){var t,i,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),i=this,(t=!(r=p(n).call(this,e))||"object"!==typeof r&&"function"!==typeof r?v(i):r).state={isClosing:!e.animationDisabled,shouldAnimate:!1,zoomLevel:0,offsetX:0,offsetY:0,loadErrorStatus:{}},t.outerEl=o.a.createRef(),t.zoomInBtn=o.a.createRef(),t.zoomOutBtn=o.a.createRef(),t.caption=o.a.createRef(),t.closeIfClickInner=t.closeIfClickInner.bind(v(v(t))),t.handleImageDoubleClick=t.handleImageDoubleClick.bind(v(v(t))),t.handleImageMouseWheel=t.handleImageMouseWheel.bind(v(v(t))),t.handleKeyInput=t.handleKeyInput.bind(v(v(t))),t.handleMouseUp=t.handleMouseUp.bind(v(v(t))),t.handleMouseDown=t.handleMouseDown.bind(v(v(t))),t.handleMouseMove=t.handleMouseMove.bind(v(v(t))),t.handleOuterMousewheel=t.handleOuterMousewheel.bind(v(v(t))),t.handleTouchStart=t.handleTouchStart.bind(v(v(t))),t.handleTouchMove=t.handleTouchMove.bind(v(v(t))),t.handleTouchEnd=t.handleTouchEnd.bind(v(v(t))),t.handlePointerEvent=t.handlePointerEvent.bind(v(v(t))),t.handleCaptionMousewheel=t.handleCaptionMousewheel.bind(v(v(t))),t.handleWindowResize=t.handleWindowResize.bind(v(v(t))),t.handleZoomInButtonClick=t.handleZoomInButtonClick.bind(v(v(t))),t.handleZoomOutButtonClick=t.handleZoomOutButtonClick.bind(v(v(t))),t.requestClose=t.requestClose.bind(v(v(t))),t.requestMoveNext=t.requestMoveNext.bind(v(v(t))),t.requestMovePrev=t.requestMovePrev.bind(v(v(t))),t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,t),c(n,null,[{key:"isTargetMatchImage",value:function(e){return e&&/ril-image-current/.test(e.className)}},{key:"parseMouseEvent",value:function(e){return{id:"mouse",source:1,x:parseInt(e.clientX,10),y:parseInt(e.clientY,10)}}},{key:"parseTouchPointer",value:function(e){return{id:e.identifier,source:2,x:parseInt(e.clientX,10),y:parseInt(e.clientY,10)}}},{key:"parsePointerEvent",value:function(e){return{id:e.pointerId,source:3,x:parseInt(e.clientX,10),y:parseInt(e.clientY,10)}}},{key:"getTransform",value:function(e){var t=e.x,n=void 0===t?0:t,i=e.y,o=void 0===i?0:i,r=e.zoom,a=void 0===r?1:r,s=e.width,l=e.targetWidth,u=n,c=S();s>c&&(u+=(c-s)/2);var h=a*(l/s);return{transform:"translate3d(".concat(u,"px,").concat(o,"px,0) scale3d(").concat(h,",").concat(h,",1)")}}}]),c(n,[{key:"componentWillMount",value:function(){this.timeouts=[],this.currentAction=0,this.eventsSource=0,this.pointerList=[],this.preventInnerClose=!1,this.preventInnerCloseTimeout=null,this.keyPressed=!1,this.imageCache={},this.lastKeyDownTime=0,this.resizeTimeout=null,this.wheelActionTimeout=null,this.resetScrollTimeout=null,this.scrollX=0,this.scrollY=0,this.moveStartX=0,this.moveStartY=0,this.moveStartOffsetX=0,this.moveStartOffsetY=0,this.swipeStartX=0,this.swipeStartY=0,this.swipeEndX=0,this.swipeEndY=0,this.pinchTouchList=null,this.pinchDistance=0,this.keyCounter=0,this.moveRequested=!1,this.props.animationDisabled||this.setState({isClosing:!1})}},{key:"componentDidMount",value:function(){var t=this;this.windowContext=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.window.self,i=n.document.referrer;if(n===e.window.top||!i)return n;var o=function(e){return e.match(/(.*\/\/.*?)(\/|$)/)[1]};return o(n.location.href)===o(i)?t(n.parent):n}(),this.listeners={resize:this.handleWindowResize,mouseup:this.handleMouseUp,touchend:this.handleTouchEnd,touchcancel:this.handleTouchEnd,pointerdown:this.handlePointerEvent,pointermove:this.handlePointerEvent,pointerup:this.handlePointerEvent,pointercancel:this.handlePointerEvent},Object.keys(this.listeners).forEach((function(e){t.windowContext.addEventListener(e,t.listeners[e])})),this.loadAllImages()}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=!1,i={},o={};this.getSrcTypes().forEach((function(r){t.props[r.name]!==e[r.name]&&(n=!0,i[t.props[r.name]]=!0,o[e[r.name]]=!0)})),(n||this.moveRequested)&&(Object.keys(i).forEach((function(e){!(e in o)&&e in t.imageCache&&(t.imageCache[e].loaded=!1)})),this.moveRequested=!1,this.loadAllImages(e))}},{key:"shouldComponentUpdate",value:function(){return!this.moveRequested}},{key:"componentWillUnmount",value:function(){var e=this;this.didUnmount=!0,Object.keys(this.listeners).forEach((function(t){e.windowContext.removeEventListener(t,e.listeners[t])})),this.timeouts.forEach((function(e){return clearTimeout(e)}))}},{key:"setTimeout",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){var n=this,i=setTimeout((function(){n.timeouts=n.timeouts.filter((function(e){return e!==i})),e()}),t);return this.timeouts.push(i),i}))},{key:"setPreventInnerClose",value:function(){var e=this;this.preventInnerCloseTimeout&&this.clearTimeout(this.preventInnerCloseTimeout),this.preventInnerClose=!0,this.preventInnerCloseTimeout=this.setTimeout((function(){e.preventInnerClose=!1,e.preventInnerCloseTimeout=null}),100)}},{key:"getBestImageForType",value:function(e){var t=this.props[e],n={};if(this.isImageLoaded(t))n=this.getFitSizes(this.imageCache[t].width,this.imageCache[t].height);else{if(!this.isImageLoaded(this.props["".concat(e,"Thumbnail")]))return null;t=this.props["".concat(e,"Thumbnail")],n=this.getFitSizes(this.imageCache[t].width,this.imageCache[t].height,!0)}return{src:t,height:this.imageCache[t].height,width:this.imageCache[t].width,targetHeight:n.height,targetWidth:n.width}}},{key:"getFitSizes",value:function(e,t,n){var i=this.getLightboxRect(),o=i.height-2*this.props.imagePadding,r=i.width-2*this.props.imagePadding;return n||(o=Math.min(o,t),r=Math.min(r,e)),r/o>e/t?{width:e*o/t,height:o}:{width:r,height:t*r/e}}},{key:"getMaxOffsets",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.zoomLevel,t=this.getBestImageForType("mainSrc");if(null===t)return{maxX:0,minX:0,maxY:0,minY:0};var n=this.getLightboxRect(),i=this.getZoomMultiplier(e),o=0,r=0;return{maxX:o=i*t.width-n.width<0?(n.width-i*t.width)/2:(i*t.width-n.width)/2,maxY:r=i*t.height-n.height<0?(n.height-i*t.height)/2:(i*t.height-n.height)/2,minX:-1*o,minY:-1*r}}},{key:"getSrcTypes",value:function(){return[{name:"mainSrc",keyEnding:"i".concat(this.keyCounter)},{name:"mainSrcThumbnail",keyEnding:"t".concat(this.keyCounter)},{name:"nextSrc",keyEnding:"i".concat(this.keyCounter+1)},{name:"nextSrcThumbnail",keyEnding:"t".concat(this.keyCounter+1)},{name:"prevSrc",keyEnding:"i".concat(this.keyCounter-1)},{name:"prevSrcThumbnail",keyEnding:"t".concat(this.keyCounter-1)}]}},{key:"getZoomMultiplier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.zoomLevel;return Math.pow(1.007,e)}},{key:"getLightboxRect",value:function(){return this.outerEl.current?this.outerEl.current.getBoundingClientRect():{width:S(),height:"undefined"!==typeof e.window?e.window.innerHeight:0,top:0,right:0,bottom:0,left:0}}},{key:"clearTimeout",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){this.timeouts=this.timeouts.filter((function(t){return t!==e})),clearTimeout(e)}))},{key:"changeZoom",value:function(e,t,n){if(this.props.enableZoom){var i=Math.max(0,Math.min(300,e));if(i!==this.state.zoomLevel)if(0!==i){var o=this.getBestImageForType("mainSrc");if(null!==o){var r=this.getZoomMultiplier(),a=this.getZoomMultiplier(i),s=this.getLightboxRect(),l="undefined"!==typeof t?t-s.left:s.width/2,u="undefined"!==typeof n?n-s.top:s.height/2,c=(s.width-o.width*r)/2,h=(s.height-o.height*r)/2,m=l-(l-(c-this.state.offsetX))/r*a,d=u-(u-(h-this.state.offsetY))/r*a,p=(s.width-o.width*a)/2-m,f=(s.height-o.height*a)/2-d;if(3!==this.currentAction){var v=this.getMaxOffsets();this.state.zoomLevel>i&&(p=Math.max(v.minX,Math.min(v.maxX,p)),f=Math.max(v.minY,Math.min(v.maxY,f)))}this.setState({zoomLevel:i,offsetX:p,offsetY:f})}}else this.setState({zoomLevel:i,offsetX:0,offsetY:0})}}},{key:"closeIfClickInner",value:function(e){!this.preventInnerClose&&e.target.className.search(/\bril-inner\b/)>-1&&this.requestClose(e)}},{key:"handleKeyInput",value:function(e){if(e.stopPropagation(),!this.isAnimating())if("keyup"!==e.type){var t=e.which||e.keyCode,n=new Date;if(!(n.getTime()-this.lastKeyDownTime<this.props.keyRepeatLimit&&t!==w))switch(this.lastKeyDownTime=n.getTime(),t){case w:e.preventDefault(),this.requestClose(e);break;case k:if(!this.props.prevSrc)return;e.preventDefault(),this.keyPressed=!0,this.requestMovePrev(e);break;case T:if(!this.props.nextSrc)return;e.preventDefault(),this.keyPressed=!0,this.requestMoveNext(e)}}else this.lastKeyDownTime-=this.props.keyRepeatKeyupBonus}},{key:"handleOuterMousewheel",value:function(e){var t=this;e.stopPropagation();var n=0;if(this.clearTimeout(this.resetScrollTimeout),this.resetScrollTimeout=this.setTimeout((function(){t.scrollX=0,t.scrollY=0}),300),null===this.wheelActionTimeout&&!this.isAnimating()){if(Math.abs(e.deltaY)<Math.abs(e.deltaX)){this.scrollY=0,this.scrollX+=e.deltaX;this.scrollX>=200||e.deltaX>=100?(this.requestMoveNext(e),n=500,this.scrollX=0):(this.scrollX<=-200||e.deltaX<=-100)&&(this.requestMovePrev(e),n=500,this.scrollX=0)}0!==n&&(this.wheelActionTimeout=this.setTimeout((function(){t.wheelActionTimeout=null}),n))}}},{key:"handleImageMouseWheel",value:function(e){if(Math.abs(e.deltaY)>=Math.abs(e.deltaX)){if(e.stopPropagation(),Math.abs(e.deltaY)<1)return;this.scrollX=0,this.scrollY+=e.deltaY,this.changeZoom(this.state.zoomLevel-e.deltaY,e.clientX,e.clientY)}}},{key:"handleImageDoubleClick",value:function(e){this.state.zoomLevel>0?this.changeZoom(0,e.clientX,e.clientY):this.changeZoom(this.state.zoomLevel+100,e.clientX,e.clientY)}},{key:"shouldHandleEvent",value:function(e){if(this.eventsSource===e)return!0;if(0===this.eventsSource)return this.eventsSource=e,!0;switch(e){case 1:return!1;case 2:return this.eventsSource=2,this.filterPointersBySource(),!0;case 3:return 1===this.eventsSource&&(this.eventsSource=3,this.filterPointersBySource(),!0);default:return!1}}},{key:"addPointer",value:function(e){this.pointerList.push(e)}},{key:"removePointer",value:function(e){this.pointerList=this.pointerList.filter((function(t){return t.id!==e.id}))}},{key:"filterPointersBySource",value:function(){var e=this;this.pointerList=this.pointerList.filter((function(t){return t.source===e.eventsSource}))}},{key:"handleMouseDown",value:function(e){this.shouldHandleEvent(1)&&n.isTargetMatchImage(e.target)&&(this.addPointer(n.parseMouseEvent(e)),this.multiPointerStart(e))}},{key:"handleMouseMove",value:function(e){this.shouldHandleEvent(1)&&this.multiPointerMove(e,[n.parseMouseEvent(e)])}},{key:"handleMouseUp",value:function(e){this.shouldHandleEvent(1)&&(this.removePointer(n.parseMouseEvent(e)),this.multiPointerEnd(e))}},{key:"handlePointerEvent",value:function(e){if(this.shouldHandleEvent(3))switch(e.type){case"pointerdown":n.isTargetMatchImage(e.target)&&(this.addPointer(n.parsePointerEvent(e)),this.multiPointerStart(e));break;case"pointermove":this.multiPointerMove(e,[n.parsePointerEvent(e)]);break;case"pointerup":case"pointercancel":this.removePointer(n.parsePointerEvent(e)),this.multiPointerEnd(e)}}},{key:"handleTouchStart",value:function(e){var t=this;this.shouldHandleEvent(2)&&n.isTargetMatchImage(e.target)&&([].forEach.call(e.changedTouches,(function(e){return t.addPointer(n.parseTouchPointer(e))})),this.multiPointerStart(e))}},{key:"handleTouchMove",value:function(e){this.shouldHandleEvent(2)&&this.multiPointerMove(e,[].map.call(e.changedTouches,(function(e){return n.parseTouchPointer(e)})))}},{key:"handleTouchEnd",value:function(e){var t=this;this.shouldHandleEvent(2)&&([].map.call(e.changedTouches,(function(e){return t.removePointer(n.parseTouchPointer(e))})),this.multiPointerEnd(e))}},{key:"decideMoveOrSwipe",value:function(e){this.state.zoomLevel<=0?this.handleSwipeStart(e):this.handleMoveStart(e)}},{key:"multiPointerStart",value:function(e){switch(this.handleEnd(null),this.pointerList.length){case 1:e.preventDefault(),this.decideMoveOrSwipe(this.pointerList[0]);break;case 2:e.preventDefault(),this.handlePinchStart(this.pointerList)}}},{key:"multiPointerMove",value:function(e,t){switch(this.currentAction){case 1:e.preventDefault(),this.handleMove(t[0]);break;case 2:e.preventDefault(),this.handleSwipe(t[0]);break;case 3:e.preventDefault(),this.handlePinch(t)}}},{key:"multiPointerEnd",value:function(e){switch(0!==this.currentAction&&(this.setPreventInnerClose(),this.handleEnd(e)),this.pointerList.length){case 0:this.eventsSource=0;break;case 1:e.preventDefault(),this.decideMoveOrSwipe(this.pointerList[0]);break;case 2:e.preventDefault(),this.handlePinchStart(this.pointerList)}}},{key:"handleEnd",value:function(e){switch(this.currentAction){case 1:this.handleMoveEnd(e);break;case 2:this.handleSwipeEnd(e);break;case 3:this.handlePinchEnd(e)}}},{key:"handleMoveStart",value:function(e){var t=e.x,n=e.y;this.props.enableZoom&&(this.currentAction=1,this.moveStartX=t,this.moveStartY=n,this.moveStartOffsetX=this.state.offsetX,this.moveStartOffsetY=this.state.offsetY)}},{key:"handleMove",value:function(e){var t=e.x,n=e.y,i=this.moveStartX-t+this.moveStartOffsetX,o=this.moveStartY-n+this.moveStartOffsetY;this.state.offsetX===i&&this.state.offsetY===o||this.setState({offsetX:i,offsetY:o})}},{key:"handleMoveEnd",value:function(){var e=this;this.currentAction=0,this.moveStartX=0,this.moveStartY=0,this.moveStartOffsetX=0,this.moveStartOffsetY=0;var t=this.getMaxOffsets(),n=Math.max(t.minX,Math.min(t.maxX,this.state.offsetX)),i=Math.max(t.minY,Math.min(t.maxY,this.state.offsetY));n===this.state.offsetX&&i===this.state.offsetY||(this.setState({offsetX:n,offsetY:i,shouldAnimate:!0}),this.setTimeout((function(){e.setState({shouldAnimate:!1})}),this.props.animationDuration))}},{key:"handleSwipeStart",value:function(e){var t=e.x,n=e.y;this.currentAction=2,this.swipeStartX=t,this.swipeStartY=n,this.swipeEndX=t,this.swipeEndY=n}},{key:"handleSwipe",value:function(e){var t=e.x,n=e.y;this.swipeEndX=t,this.swipeEndY=n}},{key:"handleSwipeEnd",value:function(e){var t=this.swipeEndX-this.swipeStartX,n=Math.abs(t),i=Math.abs(this.swipeEndY-this.swipeStartY);if(this.currentAction=0,this.swipeStartX=0,this.swipeStartY=0,this.swipeEndX=0,this.swipeEndY=0,!(!e||this.isAnimating()||n<1.5*i)){if(n<200)if(n<this.getLightboxRect().width/4)return;t>0&&this.props.prevSrc?(e.preventDefault(),this.requestMovePrev()):t<0&&this.props.nextSrc&&(e.preventDefault(),this.requestMoveNext())}}},{key:"calculatePinchDistance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pinchTouchList,t=g(e,2),n=t[0],i=t[1];return Math.sqrt(Math.pow(n.x-i.x,2)+Math.pow(n.y-i.y,2))}},{key:"calculatePinchCenter",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pinchTouchList,t=g(e,2),n=t[0],i=t[1];return{x:n.x-(n.x-i.x)/2,y:n.y-(n.y-i.y)/2}}},{key:"handlePinchStart",value:function(e){this.props.enableZoom&&(this.currentAction=3,this.pinchTouchList=e.map((function(e){return{id:e.id,x:e.x,y:e.y}})),this.pinchDistance=this.calculatePinchDistance())}},{key:"handlePinch",value:function(e){this.pinchTouchList=this.pinchTouchList.map((function(t){for(var n=0;n<e.length;n+=1)if(e[n].id===t.id)return e[n];return t}));var t=this.calculatePinchDistance(),n=this.state.zoomLevel+t-this.pinchDistance;this.pinchDistance=t;var i=this.calculatePinchCenter(this.pinchTouchList),o=i.x,r=i.y;this.changeZoom(n,o,r)}},{key:"handlePinchEnd",value:function(){this.currentAction=0,this.pinchTouchList=null,this.pinchDistance=0}},{key:"handleWindowResize",value:function(){this.clearTimeout(this.resizeTimeout),this.resizeTimeout=this.setTimeout(this.forceUpdate.bind(this),100)}},{key:"handleZoomInButtonClick",value:function(){var e=this.state.zoomLevel+100;this.changeZoom(e),300===e&&this.zoomOutBtn.current.focus()}},{key:"handleZoomOutButtonClick",value:function(){var e=this.state.zoomLevel-100;this.changeZoom(e),0===e&&this.zoomInBtn.current.focus()}},{key:"handleCaptionMousewheel",value:function(e){if(e.stopPropagation(),this.caption.current){var t=this.caption.current.getBoundingClientRect().height,n=this.caption.current,i=n.scrollHeight,o=n.scrollTop;(e.deltaY>0&&t+o>=i||e.deltaY<0&&o<=0)&&e.preventDefault()}}},{key:"isAnimating",value:function(){return this.state.shouldAnimate||this.state.isClosing}},{key:"isImageLoaded",value:function(e){return e&&e in this.imageCache&&this.imageCache[e].loaded}},{key:"loadImage",value:function(t,n,i){var o=this;if(this.isImageLoaded(n))this.setTimeout((function(){i()}),1);else{var r=new e.Image;this.props.imageCrossOrigin&&(r.crossOrigin=this.props.imageCrossOrigin),r.onerror=function(e){o.props.onImageLoadError(n,t,e),o.setState((function(e){return{loadErrorStatus:d({},e.loadErrorStatus,h({},t,!0))}})),i(e)},r.onload=function(){o.props.onImageLoad(n,t,r),o.imageCache[n]={loaded:!0,width:r.width,height:r.height},i()},r.src=n}}},{key:"loadAllImages",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=function(t,n){return function(i){i||e.props[t]!==n||e.didUnmount||e.forceUpdate()}};this.getSrcTypes().forEach((function(i){var o=i.name;t[o]&&e.state.loadErrorStatus[o]&&e.setState((function(e){return{loadErrorStatus:d({},e.loadErrorStatus,h({},o,!1))}})),t[o]&&!e.isImageLoaded(t[o])&&e.loadImage(o,t[o],n(o,t[o]))}))}},{key:"requestClose",value:function(e){var t=this,n=function(){return t.props.onCloseRequest(e)};this.props.animationDisabled||"keydown"===e.type&&!this.props.animationOnKeyInput?n():(this.setState({isClosing:!0}),this.setTimeout(n,this.props.animationDuration))}},{key:"requestMove",value:function(e,t){var n=this,i={zoomLevel:0,offsetX:0,offsetY:0};this.props.animationDisabled||this.keyPressed&&!this.props.animationOnKeyInput||(i.shouldAnimate=!0,this.setTimeout((function(){return n.setState({shouldAnimate:!1})}),this.props.animationDuration)),this.keyPressed=!1,this.moveRequested=!0,"prev"===e?(this.keyCounter-=1,this.setState(i),this.props.onMovePrevRequest(t)):(this.keyCounter+=1,this.setState(i),this.props.onMoveNextRequest(t))}},{key:"requestMoveNext",value:function(e){this.requestMove("next",e)}},{key:"requestMovePrev",value:function(e){this.requestMove("prev",e)}},{key:"render",value:function(){var t=this,i=this.props,r=i.animationDisabled,a=i.animationDuration,s=i.clickOutsideToClose,u=i.discourageDownloads,c=i.enableZoom,h=i.imageTitle,p=i.nextSrc,f=i.prevSrc,v=i.toolbarButtons,g=i.reactModalStyle,S=i.onAfterOpen,w=i.imageCrossOrigin,k=i.reactModalProps,T=this.state,M=T.zoomLevel,E=T.offsetX,C=T.offsetY,P=T.isClosing,_=T.loadErrorStatus,O=this.getLightboxRect(),D={};!r&&this.isAnimating()&&(D=d({},D,{transition:"transform ".concat(a,"ms")}));var I={};this.getSrcTypes().forEach((function(e){var t=e.name,n=e.keyEnding;I[t]=n}));var x=[],L=function(e,i,r){if(t.props[e]){var a=t.getBestImageForType(e),s=d({},D,n.getTransform(d({},r,a)));M>0&&(s.cursor="move");var l;if(null===a&&(l=_,Object.keys(l).some((function(e){return l[e]}))))x.push(o.a.createElement("div",{className:"".concat(i," ril__image ril-errored"),style:s,key:t.props[e]+I[e]},o.a.createElement("div",{className:"ril__errorContainer"},t.props.imageLoadErrorMessage)));else if(null!==a){var c=a.src;u?(s.backgroundImage="url('".concat(c,"')"),x.push(o.a.createElement("div",{className:"".concat(i," ril__image ril__imageDiscourager"),onDoubleClick:t.handleImageDoubleClick,onWheel:t.handleImageMouseWheel,style:s,key:c+I[e]},o.a.createElement("div",{className:"ril-download-blocker ril__downloadBlocker"})))):x.push(o.a.createElement("img",m({},w?{crossOrigin:w}:{},{className:"".concat(i," ril__image"),onDoubleClick:t.handleImageDoubleClick,onWheel:t.handleImageMouseWheel,onDragStart:function(e){return e.preventDefault()},style:s,src:c,key:c+I[e],alt:"string"===typeof h?h:b("Image"),draggable:!1})))}else{var p=o.a.createElement("div",{className:"ril-loading-circle ril__loadingCircle ril__loadingContainer__icon"},y(new Array(12)).map((function(e,t){return o.a.createElement("div",{key:t,className:"ril-loading-circle-point ril__loadingCirclePoint"})})));x.push(o.a.createElement("div",{className:"".concat(i," ril__image ril-not-loaded"),style:s,key:t.props[e]+I[e]},o.a.createElement("div",{className:"ril__loadingContainer"},p)))}}},A=this.getZoomMultiplier();L("nextSrc","ril-image-next ril__imageNext",{x:O.width}),L("mainSrc","ril-image-current",{x:-1*E,y:-1*C,zoom:A}),L("prevSrc","ril-image-prev ril__imagePrev",{x:-1*O.width});var z={overlay:d({zIndex:1e3,backgroundColor:"transparent"},g.overlay),content:d({backgroundColor:"transparent",overflow:"hidden",border:"none",borderRadius:0,padding:0,top:0,left:0,right:0,bottom:0},g.content)};return o.a.createElement(l.a,m({isOpen:!0,onRequestClose:s?this.requestClose:void 0,onAfterOpen:function(){t.outerEl.current&&t.outerEl.current.focus(),S()},style:z,contentLabel:b("Lightbox"),appElement:"undefined"!==typeof e.window?e.window.document.body:void 0},k),o.a.createElement("div",{className:"ril-outer ril__outer ril__outerAnimating ".concat(this.props.wrapperClassName," ").concat(P?"ril-closing ril__outerClosing":""),style:{transition:"opacity ".concat(a,"ms"),animationDuration:"".concat(a,"ms"),animationDirection:P?"normal":"reverse"},ref:this.outerEl,onWheel:this.handleOuterMousewheel,onMouseMove:this.handleMouseMove,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,tabIndex:"-1",onKeyDown:this.handleKeyInput,onKeyUp:this.handleKeyInput},o.a.createElement("div",{className:"ril-inner ril__inner",onClick:s?this.closeIfClickInner:void 0},x),f&&o.a.createElement("button",{type:"button",className:"ril-prev-button ril__navButtons ril__navButtonPrev",key:"prev","aria-label":this.props.prevLabel,onClick:this.isAnimating()?void 0:this.requestMovePrev}),p&&o.a.createElement("button",{type:"button",className:"ril-next-button ril__navButtons ril__navButtonNext",key:"next","aria-label":this.props.nextLabel,onClick:this.isAnimating()?void 0:this.requestMoveNext}),o.a.createElement("div",{className:"ril-toolbar ril__toolbar"},o.a.createElement("ul",{className:"ril-toolbar-left ril__toolbarSide ril__toolbarLeftSide"},o.a.createElement("li",{className:"ril-toolbar__item ril__toolbarItem"},o.a.createElement("span",{className:"ril-toolbar__item__child ril__toolbarItemChild"},h))),o.a.createElement("ul",{className:"ril-toolbar-right ril__toolbarSide ril__toolbarRightSide"},v&&v.map((function(e,t){return o.a.createElement("li",{key:"button_".concat(t+1),className:"ril-toolbar__item ril__toolbarItem"},e)})),c&&o.a.createElement("li",{className:"ril-toolbar__item ril__toolbarItem"},o.a.createElement("button",{type:"button",key:"zoom-in","aria-label":this.props.zoomInLabel,className:["ril-zoom-in","ril__toolbarItemChild","ril__builtinButton","ril__zoomInButton"].concat(y(300===M?["ril__builtinButtonDisabled"]:[])).join(" "),ref:this.zoomInBtn,disabled:this.isAnimating()||300===M,onClick:this.isAnimating()||300===M?void 0:this.handleZoomInButtonClick})),c&&o.a.createElement("li",{className:"ril-toolbar__item ril__toolbarItem"},o.a.createElement("button",{type:"button",key:"zoom-out","aria-label":this.props.zoomOutLabel,className:["ril-zoom-out","ril__toolbarItemChild","ril__builtinButton","ril__zoomOutButton"].concat(y(0===M?["ril__builtinButtonDisabled"]:[])).join(" "),ref:this.zoomOutBtn,disabled:this.isAnimating()||0===M,onClick:this.isAnimating()||0===M?void 0:this.handleZoomOutButtonClick})),o.a.createElement("li",{className:"ril-toolbar__item ril__toolbarItem"},o.a.createElement("button",{type:"button",key:"close","aria-label":this.props.closeLabel,className:"ril-close ril-toolbar__item__child ril__toolbarItemChild ril__builtinButton ril__closeButton",onClick:this.isAnimating()?void 0:this.requestClose})))),this.props.imageCaption&&o.a.createElement("div",{onWheel:this.handleCaptionMousewheel,onMouseDown:function(e){return e.stopPropagation()},className:"ril-caption ril__caption",ref:this.caption},o.a.createElement("div",{className:"ril-caption-content ril__captionContent"},this.props.imageCaption))))}}]),n}(i.Component);M.propTypes={mainSrc:a.a.string.isRequired,prevSrc:a.a.string,nextSrc:a.a.string,mainSrcThumbnail:a.a.string,prevSrcThumbnail:a.a.string,nextSrcThumbnail:a.a.string,onCloseRequest:a.a.func.isRequired,onMovePrevRequest:a.a.func,onMoveNextRequest:a.a.func,onImageLoadError:a.a.func,onImageLoad:a.a.func,onAfterOpen:a.a.func,discourageDownloads:a.a.bool,animationDisabled:a.a.bool,animationOnKeyInput:a.a.bool,animationDuration:a.a.number,keyRepeatLimit:a.a.number,keyRepeatKeyupBonus:a.a.number,imageTitle:a.a.node,imageCaption:a.a.node,imageCrossOrigin:a.a.string,reactModalStyle:a.a.shape({}),imagePadding:a.a.number,wrapperClassName:a.a.string,toolbarButtons:a.a.arrayOf(a.a.node),clickOutsideToClose:a.a.bool,enableZoom:a.a.bool,reactModalProps:a.a.shape({}),nextLabel:a.a.string,prevLabel:a.a.string,zoomInLabel:a.a.string,zoomOutLabel:a.a.string,closeLabel:a.a.string,imageLoadErrorMessage:a.a.node},M.defaultProps={imageTitle:null,imageCaption:null,toolbarButtons:null,reactModalProps:{},animationDisabled:!1,animationDuration:300,animationOnKeyInput:!1,clickOutsideToClose:!0,closeLabel:"Close lightbox",discourageDownloads:!1,enableZoom:!0,imagePadding:10,imageCrossOrigin:null,keyRepeatKeyupBonus:40,keyRepeatLimit:180,mainSrcThumbnail:null,nextLabel:"Next image",nextSrc:null,nextSrcThumbnail:null,onAfterOpen:function(){},onImageLoadError:function(){},onImageLoad:function(){},onMoveNextRequest:function(){},onMovePrevRequest:function(){},prevLabel:"Previous image",prevSrc:null,prevSrcThumbnail:null,reactModalStyle:{},wrapperClassName:"",zoomInLabel:"Zoom in",zoomOutLabel:"Zoom out",imageLoadErrorMessage:"This image failed to load"},t.a=M}).call(this,n(81))}}]);
//# sourceMappingURL=2.d597e756.chunk.js.map