(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-585acc76"],{"007e":function(t,s,i){"use strict";var a=i("ab5b"),n=i.n(a);n.a},ab5b:function(t,s,i){},eda5:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"box slide-enter"},[i("p",{staticStyle:{"font-size":"20px",position:"absolute",left:"45%"}},[t._v("音乐")]),i("span",{staticClass:"back"},[i("i",{staticClass:"iconfont icon-fanhui",on:{click:t.back}})]),i("div",{staticClass:"song"},[i("img",{attrs:{src:t.$store.state.music.songImg,alt:""}}),i("p",[t._v(t._s(t.song.name))]),i("p",[t._v(t._s(t.song.author))])])])},n=[],c={name:"musicbox",data:function(){return{song:[],list:[],list1:[]}},activated:function(){var t=this;this.axios({url:"https://api.vvhan.com/api/music?id=".concat(this.$store.state.music.songId,"&type=song&media=netease")}).then((function(s){t.song=s.data})),this.play=!0;var s=window.localStorage.getItem("songId"),i="https://api.itooi.cn/netease/url?id=".concat(s,"&quality=flac&isRedirect=1");window.localStorage.setItem("musicurl",i),this.music(i)},methods:{back:function(){this.$router.back()},music:function(t){this.$store.commit("music/URL_INFO",{URL:t})}}},o=c,e=(i("007e"),i("2877")),u=Object(e["a"])(o,a,n,!1,null,"62f55214",null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-585acc76.a980c968.js.map