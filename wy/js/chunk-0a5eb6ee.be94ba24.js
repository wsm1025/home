(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a5eb6ee"],{"0075":function(t,e,s){"use strict";var i=s("f8f6"),n=s.n(i);n.a},"011a":function(t,e,s){"use strict";var i=s("3c1b"),n=s.n(i);n.a},"1f35":function(t,e,s){"use strict";var i=s("4595"),n=s.n(i);n.a},"3c1b":function(t,e,s){},4595:function(t,e,s){},"476d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"mv",attrs:{id:"mv"}},[s("HeaderT",{directives:[{name:"show",rawName:"v-show",value:t.yes,expression:"yes"}]}),s("TabBar",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]})],1),s("keep-alive",[s("router-view")],1)],1)},n=[],a=s("4bdd"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header",{attrs:{id:"header"}},[i("div",{staticClass:"search-text"},[i("img",{staticClass:"img",attrs:{src:s("9ec3"),alt:""}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],attrs:{type:"text",placeholder:t.message},domProps:{value:t.key},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.search(t.key):null},focusin:function(e){t.isShow=!0},focusout:function(e){t.isShow=!t.isShow},input:function(e){e.target.composing||(t.key=e.target.value)}}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"search-cancel",on:{click:function(e){t.isShow=!1}}},[t._v("取消")])]),i("div",[i("p",[t._v("热门推荐")]),i("div",{staticClass:"hot"},[i("ul",{staticClass:"list"},t._l(t.mvhotlist,(function(e){return i("li",{key:e.id,on:{click:function(s){return t.to(e.id)}}},[i("p",[t._v(t._s(e.name))]),i("p",[t._v(t._s(e.artistName))]),i("img",{attrs:{src:e.cover,alt:""}})])})),0)])])])},r=[],c={name:"Header2",data:function(){return{isShow:!1,message:"搜索mv(输入ID)",key:"",mvhotlist:[]}},mounted:function(){var t=this;this.axios({url:"https://api.itooi.cn/netease/mv/top?pageSize=10&page=0"}).then((function(e){t.mvhotlist=e.data.data}))},methods:{search:function(t){0!=t.length&&(this.$store.commit("music/MV_INFO",{key:t}),window.localStorage.setItem("Mvid",t),this.$router.push("mv/mvdetail"),this.key="")},to:function(t){this.$store.commit("music/MV_INFO",{id:t}),window.localStorage.setItem("Mvid",t),this.$router.push("mv/mvdetail")}}},l=c,u=(s("1f35"),s("2877")),h=Object(u["a"])(l,o,r,!1,null,"744014a4",null),d=h.exports,m={name:"MV",data:function(){return{show:!0,yes:!0}},components:{TabBar:a["a"],HeaderT:d},mounted:function(){var t=window.screen.height;this.$refs.mv.style.height=t+"px",window.addEventListener("scroll",this.set,!0)},methods:{set:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.show=!(t>86)}}},v=m,f=(s("011a"),Object(u["a"])(v,i,n,!1,null,"62b3c866",null));e["default"]=f.exports},"4bdd":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{attrs:{id:"footer"}},[s("ul",[s("router-link",{attrs:{tag:"li",to:"/music","active-class":"myactive"}},[s("i",{staticClass:"iconfont icon-music"}),s("p",[t._v("音乐")])]),s("router-link",{attrs:{tag:"li",to:"/mv","active-class":"myactive"}},[s("i",{staticClass:"iconfont icon-shexiangji"}),s("p",[t._v("MV")])])],1),s("MusicPlayer")],1)},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"player",attrs:{id:"player"}},[s("div",{attrs:{id:"song"},on:{click:t.set}},[s("img",{key:t.$store.state.music.songId,attrs:{src:t.$store.state.music.songImg}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.Playshow,expression:"Playshow"}],staticClass:"selcet"},[t._m(0),t._m(1),t._m(2)])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"iconfont icon-shangyishou"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"iconfont icon-zanting"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"iconfont icon-xiayishou"})])}],r={name:"player",data:function(){return{Playshow:!1}},methods:{set:function(){this.Playshow?this.$refs.player.style.width="0":this.$refs.player.style.width="300px",this.$nextTick(),this.Playshow=!this.Playshow},jump:function(){this.$router.push("./detail")}}},c=r,l=(s("652d"),s("2877")),u=Object(l["a"])(c,a,o,!1,null,"3c3e8e50",null),h=u.exports,d={name:"tabbar",components:{MusicPlayer:h}},m=d,v=(s("0075"),Object(l["a"])(m,i,n,!1,null,"fa2840d4",null));e["a"]=v.exports},"652d":function(t,e,s){"use strict";var i=s("d6fe"),n=s.n(i);n.a},"9ec3":function(t,e,s){t.exports=s.p+"img/search.8825b03d.png"},d6fe:function(t,e,s){},f8f6:function(t,e,s){}}]);
//# sourceMappingURL=chunk-0a5eb6ee.be94ba24.js.map