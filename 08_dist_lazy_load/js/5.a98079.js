webpackJsonp([5],{247:function(t,e,s){"use strict";function n(t){r||s(280)}Object.defineProperty(e,"__esModule",{value:!0});var i=s(282),a=s.n(i),o=s(283),r=!1,l=s(4),c=n,u=l(a.a,o.a,c,"data-v-72b421a2",null);u.options.__file="src\\components\\news\\newsList.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] newsList.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},280:function(t,e,s){var n=s(281);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(3)("cb01a352",n,!1)},281:function(t,e,s){e=t.exports=s(2)(void 0),e.push([t.i,"\n.mui-media-body p[data-v-72b421a2] {\r\n    color: #0bb0f5;\n}\n.news-desc p[data-v-72b421a2]:nth-child(1) {\r\n    float: left;\n}\n.news-desc p[data-v-72b421a2]:nth-child(2) {\r\n    float: right;\n}\r\n",""])},282:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{newsList:[]}},created:function(){var t=this;this.$ajax.get("getnewslist").then(function(e){t.newsList=e.data.message}).catch(function(t){console.log(t)})}}},283:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tmpl"},[s("nav-bar",{attrs:{title:"新闻列表"}}),t._v(" "),s("ul",{staticClass:"mui-table-view"},t._l(t.newsList,function(e){return s("li",{key:e.id,staticClass:"mui-table-view-cell mui-media"},[s("router-link",{attrs:{to:{name:"news.detail",query:{id:e.id}}}},[s("img",{staticClass:"mui-media-object mui-pull-left",attrs:{src:e.img_url}}),t._v(" "),s("div",{staticClass:"mui-media-body"},[s("span",{domProps:{textContent:t._s(e.title)}}),t._v(" "),s("div",{staticClass:"news-desc"},[s("p",[t._v("点击数:"+t._s(e.click))]),t._v(" "),s("p",[t._v("发表时间:"+t._s(t._f("convertDate")(e.add_time)))])])])])],1)}))],1)},i=[];n._withStripped=!0;var a={render:n,staticRenderFns:i};e.a=a}});