(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d9be00b"],{"00b3":function(t,s,a){},"5af6":function(t,s,a){"use strict";var i=a("00b3"),n=a.n(i);n.a},eda5:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"box slide-enter"},[a("p",{staticStyle:{"font-size":"20px",position:"absolute",left:"45%"}},[t._v("音乐")]),a("span",[a("i",{staticClass:"iconfont icon-fanhui",on:{click:t.back}})]),a("div",{staticClass:"song"},[a("img",{attrs:{src:t.$store.state.music.songImg,alt:""}}),a("p",[t._v(t._s(t.song.name))]),a("p",[t._v(t._s(t.song.author))])]),t.play?a("audio",{staticStyle:{width:"100%",height:"120px"},attrs:{controls:"",loop:""}},[a("source",{attrs:{src:t.url,type:"audio/mpeg"}}),t._v(" 您的浏览器不支持 audio 元素。 ")]):t._e()])},n=[],e={name:"musicbox",data:function(){return{song:[],url:"",play:!1}},activated:function(){var t=this;this.axios({url:"https://api.vvhan.com/api/music?id=".concat(this.$store.state.music.songId,"&type=song&media=netease")}).then((function(s){t.song=s.data})),this.play=!0;var s=window.localStorage.getItem("songId");this.url="https://api.itooi.cn/netease/url?id=".concat(s,"&quality=flac&isRedirect=1")},methods:{back:function(){this.$router.back(),this.url="",this.play=!1}}},o=e,c=(a("5af6"),a("2877")),u=Object(c["a"])(o,i,n,!1,null,"ac1fec3e",null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d9be00b.dd022a2a.js.map