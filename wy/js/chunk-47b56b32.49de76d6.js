(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47b56b32"],{"2ab2":function(t,e,i){},"3e17":function(t,e,i){},"4bdd":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{attrs:{id:"footer"}},[i("ul",[i("router-link",{attrs:{tag:"li",to:"/music","active-class":"myactive"}},[i("i",{staticClass:"iconfont icon-music"}),i("p",[t._v("音乐")])]),i("router-link",{attrs:{tag:"li",to:"/mv","active-class":"myactive"}},[i("i",{staticClass:"iconfont icon-shexiangji"}),i("p",[t._v("MV")])])],1),i("MusicPlayer")],1)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"player",attrs:{id:"player"}},[i("div",{attrs:{id:"song"},on:{click:t.jump}},[i("img",{key:t.$store.state.music.songId,attrs:{src:t.$store.state.music.songImg}})])])},o=[],c={name:"player",data:function(){return{Playshow:!1}},methods:{jump:function(){var t=this;setTimeout((function(){t.$router.push("/music/detail")}),300)}}},r=c,u=(i("ce10"),i("2877")),l=Object(u["a"])(r,n,o,!1,null,"f3af38a4",null),d=l.exports,m={name:"tabbar",components:{MusicPlayer:d}},h=m,v=(i("cd3b"),Object(u["a"])(h,s,a,!1,null,"0c847d2c",null));e["a"]=v.exports},"616d":function(t,e,i){"use strict";var s=i("3e17"),a=i.n(s);a.a},"6e42":function(t,e,i){"use strict";var s=i("ed00"),a=i.n(s);a.a},"8dad":function(t,e,i){},"9ec3":function(t,e,i){t.exports=i.p+"img/search.8825b03d.png"},cd3b:function(t,e,i){"use strict";var s=i("8dad"),a=i.n(s);a.a},ce10:function(t,e,i){"use strict";var s=i("2ab2"),a=i.n(s);a.a},d902:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{ref:"music",attrs:{id:"music"}},[i("Header"),i("div",{staticClass:"meum-list"},[i("router-link",{attrs:{tag:"div",to:"/music/hot","active-class":"myactive"}},[t._v(" 热门 ")]),i("router-link",{attrs:{tag:"div",to:"/music/Recommended","active-class":"myactive"}},[t._v(" 今日推荐 ")])],1),i("keep-alive",[i("router-view")],1)],1),i("TabBar",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]})],1)},a=[],n=i("4bdd"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",{attrs:{id:"header"}},[s("div",{staticClass:"search-text"},[s("img",{staticClass:"img",attrs:{src:i("9ec3"),alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],attrs:{type:"text",placeholder:t.message},domProps:{value:t.key},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.search(t.key):null},focusin:t.yes,focusout:t.wait,input:function(e){e.target.composing||(t.key=e.target.value)}}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"search-cancel",on:{click:function(e){t.isShow=!t.isShow}}},[t._v("取消")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"getdata"},[s("div",{staticStyle:{"border-bottom":"1px solid #ccc"}}),s("ul",{staticClass:"data"},[s("p",[t._v("热门推荐：")]),t._l(t.tuijian,(function(e){return s("li",{key:e.id},[s("span",{on:{click:function(i){return t.detail(e.id,e.album.picUrl)}}},[t._v(t._s(e.name))])])}))],2)])])])},c=[],r={name:"Header",data:function(){return{isShow:!1,tuijian:[],key:""}},props:{message:{type:String,default:"搜索/音乐/专辑/歌手"}},mounted:function(){var t=this;window.localStorage.getItem("hotmusic")?this.tuijian=JSON.parse(window.localStorage.getItem("hotmusic")):this.axios({url:"https://api.vvhan.com/api/rand.music?type=all&sort=%E7%83%AD%E6%AD%8C%E6%A6%9C"}).then((function(e){t.tuijian=e.data,window.localStorage.setItem("hotmusic",JSON.stringify(t.tuijian))}))},methods:{yes:function(){"/music/hot"!=this.$route.path&&"/music/Recommended"!=this.$route.path||(this.isShow=!this.isShow)},wait:function(){var t=this;setTimeout((function(){t.isShow=!1}),200)},detail:function(t,e){this.$store.commit("music/MUSIC_INFO",{songId:t,songImg:e}),window.localStorage.setItem("songId",t),window.localStorage.setItem("songImg",e),this.$router.push("./detail"),this.isShow=!this.isShow},search:function(t){var e=this;0!=t.length&&this.axios({url:"http://musicapi.leanapp.cn/search?keywords=".concat(t)}).then((function(t){e.key="";var i=t.data.result.songs;e.$store.commit("music/BACK_INFO",{backSong:i}),window.localStorage.setItem("Backsong",JSON.stringify(i))}))}}},u=r,l=(i("616d"),i("2877")),d=Object(l["a"])(u,o,c,!1,null,"34744042",null),m=d.exports,h=i("e820"),v={name:"music",data:function(){return{nothot:!0,show:!0}},components:{TabBar:n["a"],Header:m,player:h["a"]},mounted:function(){window.addEventListener("scroll",this.set,!0)},methods:{set:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.show=!(t>86)}}},p=v,f=(i("6e42"),Object(l["a"])(p,s,a,!1,null,"39046828",null));e["default"]=f.exports},ed00:function(t,e,i){}}]);
//# sourceMappingURL=chunk-47b56b32.49de76d6.js.map