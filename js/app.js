(function(){"use strict";var n={6108:function(n,t,e){var o=e(9242),r=e(3396),i=e(7139);const a={class:"header"},c={class:"header__wrapper"},u=(0,r._)("div",{class:"header__logo"},"logo",-1),s={class:"header__nav"},f={class:"container"},l=(0,r.uE)('<footer class="footer"><div class="footer__wrapper"><div class="footer__logo">Footer logo</div><nav class="footer__nav"><div class="footer__item">Item 1</div><div class="footer__item">Item 2</div><div class="footer__item">Item 3</div></nav></div></footer>',1);function v(n,t,e,o,v,d){const m=(0,r.up)("router-link"),p=(0,r.up)("router-view"),_=(0,r.up)("app-main");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",a,[(0,r._)("div",c,[u,(0,r._)("nav",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(v.menu,(n=>((0,r.wg)(),(0,r.iD)("div",{class:"header__item",key:n.route,onClick:t[0]||(t[0]=(...n)=>d.itemClick&&d.itemClick(...n))},[(0,r.Wm)(m,{to:{name:n.route},"exact-path":""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(n.text),1)])),_:2},1032,["to"])])))),128))])])]),(0,r._)("main",null,[(0,r._)("div",f,[1==v.showContent?((0,r.wg)(),(0,r.j4)(p,{key:0})):((0,r.wg)(),(0,r.j4)(_,{key:1}))])]),l],64)}const d=(0,r._)("section",null,"Section 1",-1),m=(0,r._)("section",null,"Section 2",-1);function p(n,t,e,o,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[d,m],64)}var _={},h=e(89);const w=(0,h.Z)(_,[["render",p]]);var g=w,b={components:{AppMain:g},data(){return{menu:[{route:"main",text:"Main"},{route:"info",text:"Info"},{route:"form",text:"Form"}],showContent:!1}},computed:{itemClick(){this.showContent=!0}}};const k=(0,h.Z)(b,[["render",v]]);var y=k,O=e(2483);const x={class:"formPage"},C=(0,r._)("div",{class:"formPage__container"},"form",-1),j=[C];function D(n,t,e,o,i,a){return(0,r.wg)(),(0,r.iD)("div",x,j)}var P={};const I=(0,h.Z)(P,[["render",D]]);var M=I;const Z={class:"info"},F=(0,r._)("div",{class:"info__container"},"info",-1),H=[F];function T(n,t,e,o,i,a){return(0,r.wg)(),(0,r.iD)("div",Z,H)}var Y={};const E=(0,h.Z)(Y,[["render",T]]);var S=E;const z=[{name:"main",path:"/",component:g},{name:"info",path:"/info",component:S},{name:"form",path:"/form",component:M}];var A=(0,O.p7)({routes:z,history:(0,O.PO)(),publicPath:!0}),K=e(65),U=(0,K.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(y).use(U).use(A).mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,i){if(!o){var a=1/0;for(f=0;f<n.length;f++){o=n[f][0],r=n[f][1],i=n[f][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(e.O).every((function(n){return e.O[n](o[u])}))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){n.splice(f--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[o,r,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,i,a=o[0],c=o[1],u=o[2],s=0;if(a.some((function(t){return 0!==n[t]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(u)var f=u(e)}for(t&&t(o);s<a.length;s++)i=a[s],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(f)},o=self["webpackChunkstafweb"]=self["webpackChunkstafweb"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(6108)}));o=e.O(o)})();