(function(t){function e(e){for(var o,i,r=e[0],c=e[1],u=e[2],l=0,d=[];l<r.length;l++)i=r[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);h&&h(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var r=n[i];0!==a[r]&&(o=!1)}o&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},a={app:0},s=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-231249d6":"c801d4ea","chunk-327b4d3a":"5021e580","chunk-3a77c175":"d3991c89","chunk-3c1adc74":"1a85e1ce","chunk-659ab601":"2a28d67d","chunk-795698dc":"873b86c5","chunk-b621d080":"12683845"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-231249d6":1,"chunk-327b4d3a":1,"chunk-3a77c175":1,"chunk-3c1adc74":1,"chunk-659ab601":1,"chunk-795698dc":1,"chunk-b621d080":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-231249d6":"25b46399","chunk-327b4d3a":"9e4bbb73","chunk-3a77c175":"1f526a43","chunk-3c1adc74":"2295a356","chunk-659ab601":"4f929bc9","chunk-795698dc":"34e4c026","chunk-b621d080":"3f854e57"}[t]+".css",a=c.p+o,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var u=s[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===o||l===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var o=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete i[t],h.parentNode.removeChild(h),n(s)},h.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){i[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}a[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var h=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4855:function(t,e,n){},"4c03":function(t,e,n){"use strict";var o=n("5994"),i=n.n(o);i.a},5294:function(t,e,n){"use strict";var o=n("4855"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("keep-alive",[n("router-view")],1),n("player",{directives:[{name:"show",rawName:"v-show",value:t.ispath,expression:"ispath"}],ref:"player"})],1)},a=[],s=n("e820"),r={data:function(){return{ispath:!0}},components:{player:s["a"]},watch:{$route:"path"},methods:{path:function(){"/mv"==this.$route.path||"/mv/mvdetail"==this.$route.path?(this.$refs.player.$el.firstChild.pause(),this.ispath=!1):this.ispath=!0}}},c=r,u=(n("5c0b"),n("2877")),l=Object(u["a"])(c,i,a,!1,null,null,null),d=l.exports,h=(n("d3b7"),n("8c4f"));n("c6d0");o["a"].use(h["a"]);var m=[{path:"/music",component:function(){return n.e("chunk-231249d6").then(n.bind(null,"d902"))},redirect:"/music/hot",children:[{path:"hot",component:function(){return Promise.resolve().then(n.bind(null,"c6d0"))}},{path:"recommended",component:function(){return n.e("chunk-3a77c175").then(n.bind(null,"44c5"))}},{path:"detail",component:function(){return n.e("chunk-327b4d3a").then(n.bind(null,"eda5"))}},{path:"songlist",component:function(){return n.e("chunk-659ab601").then(n.bind(null,"f692"))}}]},{path:"/mv",component:function(){return n.e("chunk-3c1adc74").then(n.bind(null,"476d"))}},{path:"/mv/mvdetail",component:function(){return n.e("chunk-b621d080").then(n.bind(null,"7d1b"))}},{path:"/userinfo",component:function(){return n.e("chunk-795698dc").then(n.bind(null,"079a"))}},{path:"*",redirect:"/music/hot"}],f=new h["a"]({mode:"hash",base:"",routes:m}),p=f,g=n("2f62"),v={songId:window.localStorage.getItem("songId")||"1297742167",songImg:window.localStorage.getItem("songImg")||"http://p4.music.126.net/7U5MdVq15v5wK3IA3IT8FQ==/109951165319863126.jpg",backSong:JSON.parse(window.localStorage.getItem("Backsong"))||[],MVID:window.localStorage.getItem("Mvid")||"",USERID:window.localStorage.getItem("userId")||"1311290730",URL:window.localStorage.getItem("musicurl")||"",TIME:window.localStorage.getItem("time"),totime:window.localStorage.getItem("totime"),duration:window.localStorage.getItem("duration")},w={},b={MUSIC_INFO:function(t,e){t.songId=e.songId,t.songImg=e.songImg},BACK_INFO:function(t,e){t.backSong=e.backSong},MV_INFO:function(t,e){t.MVID=e.MVID},USER_INFO:function(t,e){t.USERID=e.USERID},URL_INFO:function(t,e){t.URL=e.URL},TIME_INFO:function(t,e){t.TIME=e.TIME},TOTIME:function(t,e){t.totime=e.totime},Duration:function(t,e){t.duration=e.duration}},I={namespaced:!0,state:v,actions:w,mutations:b};o["a"].use(g["a"]);var k=new g["a"].Store({state:{},mutations:{},actions:{},modules:{music:I}}),y=n("bc3a"),S=n.n(y);o["a"].prototype.axios=S.a,o["a"].config.productionTip=!1,new o["a"]({router:p,store:k,render:function(t){return t(d)}}).$mount("#app")},5994:function(t,e,n){},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),i=n.n(o);i.a},7477:function(t,e,n){},"9c0c":function(t,e,n){},c6d0:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hot"},[n("Wy"),n("Backsong")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wy"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticStyle:{color:"pink",padding:"20px"}},[n("span",{on:{click:function(e){return t.to()}}},[t._v("查看作者主页")]),n("span",{staticStyle:{float:"right",color:"#000000",cursor:"pointer"},on:{click:t.cancel}},[t._v("X")])]),t.loading?n("div",{staticStyle:{"text-align":"center"}},[t._v("热门评论加载中...")]):n("div",{staticStyle:{width:"100%",height:"auto"}},[n("p",{staticClass:"header",on:{click:function(e){return t.pick(t.list.id,t.list.picUrl)}}},[t._v(t._s(t.list.name)+"("+t._s(t.list.auther)+")下的留言")]),n("p",{staticClass:"content",on:{click:t.bush}},[t._v(t._s(t.list.content))])])])},s=[],r={name:"wy",data:function(){return{list:[],loading:!0,show:!0}},mounted:function(){var t=this;this.axios({url:"https://api.vvhan.com/api/reping"}).then((function(e){t.list=e.data.data,t.loading=!1}))},methods:{pick:function(t,e){var n=this;this.$store.commit("music/MUSIC_INFO",{songId:t,songImg:e}),window.localStorage.setItem("songId",t),window.localStorage.setItem("songImg",e),setTimeout((function(){n.$router.push("./detail")}),300)},bush:function(){var t=this;this.axios({url:"https://api.vvhan.com/api/reping"}).then((function(e){t.list=e.data.data}))},cancel:function(){this.show=!1},to:function(){this.$router.push("/userinfo"),window.localStorage.setItem("userId",1311290730)}}},c=r,u=(n("4c03"),n("2877")),l=Object(u["a"])(c,a,s,!1,null,"1e263051",null),d=l.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"list"},[t._l(this.$store.state.music.backSong,(function(e){return n("li",{key:e.id,staticStyle:{display:"flex"}},[n("p",{on:{click:function(n){return t.set(e.id)}}},[t._v("歌手:"+t._s(e.artists[0].name))]),n("p",{on:{click:function(n){return t.set(e.id)}}},[t._v("歌曲:"+t._s(e.name))]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.mvid>0,expression:"n.mvid>0"}],staticClass:"MVINFO",on:{click:function(n){return t.tomv(e.mvid)}}},[t._v("MV")])])})),n("p",{staticStyle:{height:"67px","text-align":"center","line-height":"67px"},on:{click:t.close}},[t._v("我也是有底线的啊")])],2)])},m=[],f={name:"backsong",data:function(){return{hidden:!0}},methods:{set:function(t){var e=this;this.axios({url:"https://api.vvhan.com/api/music?id=".concat(t,"&type=song&media=netease")}).then((function(t){e.to(t.data.song_id,t.data.cover)}))},to:function(t,e){var n=this;this.$store.commit("music/MUSIC_INFO",{songId:t,songImg:e}),window.localStorage.setItem("songId",t),window.localStorage.setItem("songImg",e),setTimeout((function(){n.$router.push("./detail")}),200)},tomv:function(t){this.$store.commit("music/MV_INFO",{id:t}),window.localStorage.setItem("Mvid",t),this.$router.push("/mv/mvdetail")},close:function(){window.localStorage.removeItem("Backsong"),this.$store.state.music.backSong=null,this.hidden=!1}}},p=f,g=(n("ffbc"),Object(u["a"])(p,h,m,!1,null,"d1aafc5e",null)),v=g.exports,w={name:"hot",components:{Wy:d,Backsong:v}},b=w,I=Object(u["a"])(b,o,i,!1,null,"42b9be22",null);e["default"]=I.exports},e820:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("audio",{ref:"audio",staticStyle:{display:"none"},attrs:{loop:"",src:"https://music.163.com/song/media/outer/url?id="+this.$store.state.music.songId+".mp3"},on:{timeupdate:t.time}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.Playshow,expression:"Playshow"}],staticClass:"selcet"},[n("span",{on:{click:t.reloading}},[n("i",{staticClass:"iconfont icon-zhongxinjiazai"})]),n("span",{on:{click:t.stop}},[n("i",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"iconfont icon-zanting"}),n("i",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"iconfont icon-tingzhi"})])])])},i=[],a=(n("a9e3"),n("b680"),{name:"palyer",data:function(){return{Playshow:!0,flag:0,show:!1}},watch:{$route:"path","$store.state.music.totime":"to"},mounted:function(){this.set()},methods:{set:function(){var t=this,e=this.$refs.audio;e.ondurationchange=function(){window.localStorage.setItem("duration",Number(e.duration.toFixed(2)));var n=Number(e.duration.toFixed(2));t.$store.commit("music/Duration",{duration:n})}},stop:function(){0==this.flag?(this.$refs.audio.play(),this.flag=1,this.show=!0):(this.$refs.audio.pause(),this.flag=0,this.show=!1)},reloading:function(){this.$refs.audio.load(),this.flag=0,this.stop()},path:function(){"/music/detail"==this.$route.path&&(this.flag=0,this.stop(),this.$refs.audio.autoplay=!0),"/mv"!=this.$route.path&&"/mv/mvdetail"!=this.$route.path||(this.show=!1,this.flag=0)},time:function(){var t=this.$refs.audio.currentTime.toFixed(2);window.localStorage.setItem("time",t),this.$store.commit("music/TIME_INFO",{TIME:t})},to:function(){this.$refs.audio.currentTime=this.$store.state.music.totime}}}),s=a,r=(n("5294"),n("2877")),c=Object(r["a"])(s,o,i,!1,null,"1a14a50b",null);e["a"]=c.exports},ffbc:function(t,e,n){"use strict";var o=n("7477"),i=n.n(o);i.a}});
//# sourceMappingURL=app.2f775559.js.map