(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e8aec31"],{"1dde":function(t,e,n){var i=n("d039"),o=n("b622"),r=n("2d00"),a=o("species");t.exports=function(t){return r>=51||!i((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"35ed":function(t,e,n){"use strict";var i=n("409b"),o=n.n(i);o.a},"409b":function(t,e,n){},"44c5":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",{staticStyle:{"text-align":"center"}},[t._v("等待加载")]):n("div",[n("div",[n("el-carousel",{attrs:{interval:5e3,height:"200px",arrow:"always","indicator-position":"none"}},t._l(t.imglist,(function(t,e){return n("el-carousel-item",{key:e},[n("img",{staticClass:"img",attrs:{src:t.picUrl,alt:""}})])})),1)],1),n("div",[n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticStyle:{overflow:"inherit"},attrs:{"infinite-scroll-distance":"60","infinite-scroll-immediate-check":"false"}},t._l(t.recommendedlist,(function(e){return n("li",{key:e.id,staticClass:"list",on:{click:function(n){return t.getId(e.id)}}},[n("img",{staticClass:"liimg",attrs:{src:e.coverImgUrl,alt:""}}),n("p",{staticClass:"des"},[t._v(t._s(e.name))]),n("p",{staticClass:"play"},[n("span",[t._v(t._s(t._f("playCount")(e.playCount)))]),t._v("万人次播放")])])})),0),n("p",{directives:[{name:"show",rawName:"v-show",value:t.ok,expression:"ok"}],staticStyle:{"text-align":"center"}},[t._v("等待响应。。。")]),n("p",{directives:[{name:"show",rawName:"v-show",value:t.out,expression:"out"}],staticStyle:{"text-align":"center"}},[t._v("到底啦")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.up,expression:"up"}],staticClass:"up"},[n("i",{staticClass:"iconfont icon-xiangshang",on:{click:t.toup}})])])])},o=[],r=(n("4de4"),n("2b0e")),a=n("76a0");r["default"].use(a["InfiniteScroll"]),r["default"].filter("playCount",(function(t){return Math.floor(t/1e4)}));var s={name:"recommended",data:function(){return{loading:!0,imglist:[],recommendedlist:[],page:6,ok:!0,out:!1,up:!1}},mounted:function(){var t=this;this.axios({url:"https://api.itooi.cn/netease/banner"}).then((function(e){t.imglist=e.data.data,t.loading=!1})),this.axios({url:"https://api.itooi.cn/netease/songList/highQuality?cat=%E5%85%A8%E9%83%A8&pageSize=".concat(this.page)}).then((function(e){t.recommendedlist=e.data.data,t.ok=!0})),window.addEventListener("scroll",this.hup,!0)},methods:{load:function(){var t=this;setTimeout((function(){if(t.page>32)return t.ok=!1,t.out=!0,0;t.page+=6,t.recommendedlist.length>=36||t.axios({url:"https://api.itooi.cn/netease/songList/highQuality?cat=%E5%85%A8%E9%83%A8&pageSize=".concat(t.page)}).then((function(e){t.recommendedlist=e.data.data}))}),3e3)},hup:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.up=t>140},toup:function(){document.documentElement.scrollTop=document.body.scrollTop=0},getId:function(t){this.$router.push("./songlist"),window.localStorage.setItem("listId",t)}}},c=s,l=(n("35ed"),n("2877")),u=Object(l["a"])(c,i,o,!1,null,"c3161d1e",null);e["default"]=u.exports},"4de4":function(t,e,n){"use strict";var i=n("23e7"),o=n("b727").filter,r=n("1dde"),a=n("ae40"),s=r("filter"),c=a("filter");i({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,n){var i=n("861d"),o=n("e8b5"),r=n("b622"),a=r("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},ae40:function(t,e,n){var i=n("83ab"),o=n("d039"),r=n("5135"),a=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(r(s,t))return s[t];e||(e={});var n=[][t],l=!!r(e,"ACCESSORS")&&e.ACCESSORS,u=r(e,0)?e[0]:c,d=r(e,1)?e[1]:void 0;return s[t]=!!n&&!o((function(){if(l&&!i)return!0;var t={length:-1};l?a(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,u,d)}))}},b727:function(t,e,n){var i=n("0366"),o=n("44ad"),r=n("7b0b"),a=n("50c4"),s=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(p,v,m,h){for(var g,w,y=r(p),b=o(y),x=i(v,m,3),C=a(b.length),S=0,k=h||s,_=e?k(p,C):n?k(p,0):void 0;C>S;S++)if((f||S in b)&&(g=b[S],w=x(g,S,y),t))if(e)_[S]=w;else if(w)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:c.call(_,g)}else if(u)return!1;return d?-1:l||u?u:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=chunk-4e8aec31.1ce92cae.js.map