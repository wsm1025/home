(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-101a7f93"],{"011a":function(t,e,s){"use strict";var i=s("3c1b"),a=s.n(i);a.a},"1b77":function(t,e,s){"use strict";var i=s("5669"),a=s.n(i);a.a},"2ab2":function(t,e,s){},"3c1b":function(t,e,s){},"476d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"mv",attrs:{id:"mv"}},[s("HeaderT",{directives:[{name:"show",rawName:"v-show",value:t.yes,expression:"yes"}]}),s("TabBar",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]})],1),s("keep-alive",[s("router-view")],1)],1)},a=[],n=s("4bdd"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header",{attrs:{id:"header"}},[i("div",{staticClass:"search-text"},[i("img",{staticClass:"img",attrs:{src:s("9ec3"),alt:""}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],attrs:{type:"text",placeholder:t.message},domProps:{value:t.key},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.search(t.key):null},focusin:function(e){t.isShow=!0},focusout:function(e){t.isShow=!t.isShow},input:function(e){e.target.composing||(t.key=e.target.value)}}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"search-cancel",on:{click:function(e){t.isShow=!1}}},[t._v("取消")])]),i("div",[i("p",[t._v("热门推荐")]),i("div",{staticClass:"hot"},[i("ul",{staticClass:"list"},t._l(t.mvhotlist,(function(e){return i("li",{key:e.id,on:{click:function(s){return t.to(e.id)}}},[i("p",[t._v(t._s(e.name))]),i("p",[t._v(t._s(e.artistName))]),i("img",{attrs:{src:e.cover,alt:""}})])})),0)])])])},c=[],r={name:"Header2",data:function(){return{isShow:!1,message:"搜索mv(输入ID)",key:"",mvhotlist:[]}},mounted:function(){var t=this;this.axios({url:"https://api.itooi.cn/netease/mv/top?pageSize=10&page=0"}).then((function(e){t.mvhotlist=e.data.data}))},methods:{search:function(t){0!=t.length&&(this.$store.commit("music/MV_INFO",{key:t}),window.localStorage.setItem("Mvid",t),this.$router.push("mv/mvdetail"),this.key="")},to:function(t){this.$store.commit("music/MV_INFO",{id:t}),window.localStorage.setItem("Mvid",t),this.$router.push("mv/mvdetail")}}},u=r,l=(s("1b77"),s("2877")),d=Object(l["a"])(u,o,c,!1,null,"0092f52e",null),m=d.exports,v={name:"MV",data:function(){return{show:!0,yes:!0}},components:{TabBar:n["a"],HeaderT:m},mounted:function(){var t=window.screen.height;this.$refs.mv.style.height=t+"px",window.addEventListener("scroll",this.set,!0)},methods:{set:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.show=!(t>86)}}},h=v,f=(s("011a"),Object(l["a"])(h,i,a,!1,null,"62b3c866",null));e["default"]=f.exports},"4bdd":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{attrs:{id:"footer"}},[s("ul",[s("router-link",{attrs:{tag:"li",to:"/music","active-class":"myactive"}},[s("i",{staticClass:"iconfont icon-music"}),s("p",[t._v("音乐")])]),s("router-link",{attrs:{tag:"li",to:"/mv","active-class":"myactive"}},[s("i",{staticClass:"iconfont icon-shexiangji"}),s("p",[t._v("MV")])])],1),s("MusicPlayer")],1)},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"player",attrs:{id:"player"}},[s("div",{attrs:{id:"song"},on:{click:t.jump}},[s("img",{key:t.$store.state.music.songId,attrs:{src:t.$store.state.music.songImg}})])])},o=[],c={name:"player",data:function(){return{Playshow:!1}},methods:{jump:function(){var t=this;setTimeout((function(){t.$router.push("/music/detail")}),300)}}},r=c,u=(s("ce10"),s("2877")),l=Object(u["a"])(r,n,o,!1,null,"f3af38a4",null),d=l.exports,m={name:"tabbar",components:{MusicPlayer:d}},v=m,h=(s("cd3b"),Object(u["a"])(v,i,a,!1,null,"0c847d2c",null));e["a"]=h.exports},5669:function(t,e,s){},"8dad":function(t,e,s){},"9ec3":function(t,e,s){t.exports=s.p+"img/search.8825b03d.png"},cd3b:function(t,e,s){"use strict";var i=s("8dad"),a=s.n(i);a.a},ce10:function(t,e,s){"use strict";var i=s("2ab2"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-101a7f93.d8357700.js.map