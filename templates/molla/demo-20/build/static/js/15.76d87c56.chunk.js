(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{184:function(t,e,n){"use strict";function o(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,"a",(function(){return o}))},195:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(206),r=n.n(o),i=n(0),s=n.n(i),a=(n(2),n(208)),c=null;"undefined"!==typeof CSS&&CSS.supports&&(CSS.supports("position","sticky")?c="sticky":CSS.supports("position","-webkit-sticky")&&(c="-webkit-sticky"));var f=!1;try{var h=Object.defineProperty({},"passive",{get:function(){f={passive:!0}}});window.addEventListener("testPassive",null,h),window.removeEventListener("testPassive",null,h)}catch(u){}var l=function(t){function e(e){var n=t.call(this,e)||this;return n.addListener=function(t,e,o,r){t.addEventListener(e,o,r),n.unsubscribes.push((function(){return t.removeEventListener(e,o)}))},n.addResizeObserver=function(t,e){var o=new a.a(e);o.observe(t),n.unsubscribes.push((function(){return o.disconnect()}))},n.registerContainerRef=function(t){c&&(n.node=t,t?(n.scrollPane=function(t){for(var e=t;e=e.parentElement;){var n=getComputedStyle(e,null).getPropertyValue("overflow-y");if(e===document.body)return window;if("auto"===n||"scroll"===n)return e}return window}(n.node),n.latestScrollY=n.scrollPane===window?window.scrollY:n.scrollPane.scrollTop,n.addListener(n.scrollPane,"scroll",n.handleScroll,f),n.addListener(n.scrollPane,"mousewheel",n.handleScroll,f),n.scrollPane===window?(n.addListener(window,"resize",n.handleWindowResize),n.handleWindowResize()):(n.addResizeObserver(n.scrollPane,n.handleScrollPaneResize),n.handleScrollPaneResize()),n.addResizeObserver(n.node.parentNode,n.handleParentNodeResize),n.handleParentNodeResize(),n.addResizeObserver(n.node,n.handleNodeResize),n.handleNodeResize({initial:!0}),n.initial()):(n.unsubscribes.forEach((function(t){return t()})),n.unsubscribes=[],n.scrollPane=null))},n.getCurrentOffset=function(){if("relative"===n.mode)return n.offset;var t=n.props,e=t.offsetTop,o=t.offsetBottom;return"stickyTop"===n.mode?Math.max(0,n.scrollPaneOffset+n.latestScrollY-n.naturalTop+e):"stickyBottom"===n.mode?Math.max(0,n.scrollPaneOffset+n.latestScrollY+n.viewPortHeight-(n.naturalTop+n.nodeHeight+o)):void 0},n.handleWindowResize=function(){n.viewPortHeight=window.innerHeight,n.scrollPaneOffset=0,n.handleScroll()},n.handleScrollPaneResize=function(){n.viewPortHeight=n.scrollPane.offsetHeight,n.scrollPane.firstChild.offsetParent===n.scrollPane?n.scrollPaneOffset=n.scrollPane.getBoundingClientRect().top:n.scrollPaneOffset=0,n.handleScroll()},n.handleParentNodeResize=function(){var t=n.node.parentNode,e=getComputedStyle(t,null),o=parseInt(e.getPropertyValue("padding-top"),10),r=parseInt(e.getPropertyValue("padding-bottom"),10);n.naturalTop=function(t,e){var n=t,o=0;e.firstChild&&e.firstChild.offsetParent!==e&&(o+=t.offsetTop-e.offsetTop,e=t.offsetParent,o+=-t.offsetTop);do{o+=n.offsetTop,n=n.offsetParent}while(n&&n!==e);return o}(t,n.scrollPane)+o+n.scrollPaneOffset;var i=n.parentHeight;n.parentHeight=t.getBoundingClientRect().height-(o+r),"relative"===n.mode&&(n.props.bottom?n.changeMode("relative"):i>n.parentHeight&&n.changeToStickyBottomIfBoxTooLow(n.latestScrollY)),i!==n.parentHeight&&"relative"===n.mode&&(n.latestScrollY=Number.POSITIVE_INFINITY,n.handleScroll())},n.handleNodeResize=function(t){var e=(void 0===t?{}:t).initial,o=n.nodeHeight;if(n.nodeHeight=n.node.getBoundingClientRect().height,!e&&o!==n.nodeHeight){var r=n.props,i=r.offsetTop,s=r.offsetBottom,a=r.bottom;if(n.nodeHeight+i+s<=n.viewPortHeight)n.mode=void 0,n.initial();else{var c=o-n.nodeHeight,f=n.parentHeight-n.nodeHeight,h=Math.min(f,n.getCurrentOffset()+(a?c:0));n.offset=Math.max(0,h),a&&"stickyBottom"===n.mode||n.changeMode("relative")}}},n.handleScroll=function(){var t=n.props,e=t.offsetTop,o=t.offsetBottom,r=n.scrollPane===window?window.scrollY:n.scrollPane.scrollTop;if(r!==n.latestScrollY){if(n.nodeHeight+e+o<=n.viewPortHeight)return n.initial(),void(n.latestScrollY=r);var i=r-n.latestScrollY;n.offset=n.getCurrentOffset(),i>0?"stickyTop"===n.mode?r+n.scrollPaneOffset+e>n.naturalTop&&(r+n.scrollPaneOffset+n.viewPortHeight<=n.naturalTop+n.nodeHeight+n.offset+o?n.changeMode("relative"):n.changeMode("stickyBottom")):"relative"===n.mode&&n.changeToStickyBottomIfBoxTooLow(r):"stickyBottom"===n.mode?n.scrollPaneOffset+r+n.viewPortHeight<n.naturalTop+n.parentHeight+o&&(n.scrollPaneOffset+r+e>=n.naturalTop+n.offset?n.changeMode("relative"):n.changeMode("stickyTop")):"relative"===n.mode&&n.scrollPaneOffset+r+e<n.naturalTop+n.offset&&n.changeMode("stickyTop"),n.latestScrollY=r}},e.offset,n.unsubscribes=[],n}r()(e,t);var n=e.prototype;return n.changeMode=function(t){var e=this.props,n=e.onChangeMode,o=e.offsetTop,r=e.offsetBottom,i=e.bottom;if(this.mode!==t&&n(this.mode,t),this.mode=t,"relative"===t)if(this.node.style.position="relative",i){var s=Math.max(0,this.parentHeight-this.nodeHeight-this.offset);this.node.style.bottom=s+"px"}else this.node.style.top=this.offset+"px";else this.node.style.position=c,"stickyBottom"===t?i?this.node.style.bottom=r+"px":this.node.style.top=this.viewPortHeight-this.nodeHeight-r+"px":i?this.node.style.bottom=this.viewPortHeight-this.nodeHeight-r+"px":this.node.style.top=o+"px";this.offset=this.getCurrentOffset()},n.initial=function(){this.props.bottom?"stickyBottom"!==this.mode&&this.changeMode("stickyBottom"):"stickyTop"!==this.mode&&this.changeMode("stickyTop")},n.changeToStickyBottomIfBoxTooLow=function(t){var e=this.props.offsetBottom;t+this.scrollPaneOffset+this.viewPortHeight>=this.naturalTop+this.nodeHeight+this.offset+e&&this.changeMode("stickyBottom")},n.render=function(){var t=this.props,e=t.children,n=t.className,o=t.style;return s.a.createElement("div",{className:n,style:o,ref:this.registerContainerRef},e)},e}(s.a.Component);l.defaultProps={onChangeMode:function(){},offsetTop:0,offsetBottom:0}},206:function(t,e,n){var o=n(207);t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)},t.exports.default=t.exports,t.exports.__esModule=!0},207:function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},t.exports.default=t.exports,t.exports.__esModule=!0,n(e,o)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},208:function(t,e,n){"use strict";(function(t){var n=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,o){return t[0]===e&&(n=o,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),o=this.__entries__[n];return o&&o[1]},e.prototype.set=function(e,n){var o=t(this.__entries__,e);~o?this.__entries__[o][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,o=t(n,e);~o&&n.splice(o,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,o=this.__entries__;n<o.length;n++){var r=o[n];t.call(e,r[1],r[0])}},e}()}(),o="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,r="undefined"!==typeof t&&t.Math===Math?t:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),i="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(r):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],a="undefined"!==typeof MutationObserver,c=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,o=!1,r=0;function s(){n&&(n=!1,t()),o&&c()}function a(){i(s)}function c(){var t=Date.now();if(n){if(t-r<2)return;o=!0}else n=!0,o=!1,setTimeout(a,e);r=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),a?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;s.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,e){for(var n=0,o=Object.keys(e);n<o.length;n++){var r=o[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},h=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||r},l=b(0,0,0,0);function u(t){return parseFloat(t)||0}function d(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+u(t["border-"+n+"-width"])}),0)}function p(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return l;var o=h(t).getComputedStyle(t),r=function(t){for(var e={},n=0,o=["top","right","bottom","left"];n<o.length;n++){var r=o[n],i=t["padding-"+r];e[r]=u(i)}return e}(o),i=r.left+r.right,s=r.top+r.bottom,a=u(o.width),c=u(o.height);if("border-box"===o.boxSizing&&(Math.round(a+i)!==e&&(a-=d(o,"left","right")+i),Math.round(c+s)!==n&&(c-=d(o,"top","bottom")+s)),!function(t){return t===h(t).document.documentElement}(t)){var f=Math.round(a+i)-e,p=Math.round(c+s)-n;1!==Math.abs(f)&&(a-=f),1!==Math.abs(p)&&(c-=p)}return b(r.left,r.top,a,c)}var v="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof h(t).SVGGraphicsElement}:function(t){return t instanceof h(t).SVGElement&&"function"===typeof t.getBBox};function m(t){return o?v(t)?function(t){var e=t.getBBox();return b(0,0,e.width,e.height)}(t):p(t):l}function b(t,e,n,o){return{x:t,y:e,width:n,height:o}}var g=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=m(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),y=function(t,e){var n=function(t){var e=t.x,n=t.y,o=t.width,r=t.height,i="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(i.prototype);return f(s,{x:e,y:n,width:o,height:r,top:n,right:e+o,bottom:r+n,left:e}),s}(e);f(this,{target:t,contentRect:n})},_=function(){function t(t,e,o){if(this.activeObservations_=[],this.observations_=new n,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=o}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new g(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new y(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),w="undefined"!==typeof WeakMap?new WeakMap:new n,O=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),o=new _(e,n,this);w.set(this,o)};["observe","unobserve","disconnect"].forEach((function(t){O.prototype[t]=function(){var e;return(e=w.get(this))[t].apply(e,arguments)}}));var P="undefined"!==typeof r.ResizeObserver?r.ResizeObserver:O;e.a=P}).call(this,n(81))}}]);
//# sourceMappingURL=15.76d87c56.chunk.js.map