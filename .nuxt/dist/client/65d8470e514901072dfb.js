(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{174:function(t,e,r){var content=r(177);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("3e6c1ca6",content,!0,{sourceMap:!1})},175:function(t,e,r){t.exports=r.p+"img/68c8844.png"},176:function(t,e,r){"use strict";var o=r(174);r.n(o).a},177:function(t,e,r){(e=r(54)(!1)).push([t.i,".heart-loader[data-v-1a711d06]{transform:rotate(-22.5deg);width:15px;height:15px;overflow:visible;float:right;margin-top:1px}.heart-loader-path[data-v-1a711d06]{stroke:#49494f;fill:transparent;stroke-dasharray:308.522,308.522;stroke-dashoffset:0}.heart-loader-path-filled[data-v-1a711d06]{stroke:red;fill:#ff4500;stroke-dasharray:308.522,308.522;stroke-dashoffset:0}",""]),t.exports=e},178:function(t,e,r){var content=r(182);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("47590c1f",content,!0,{sourceMap:!1})},180:function(t,e,r){"use strict";var o={props:["title","imdbID","url","date","favorite"],data:function(){return{fav:this.favorite,id:this.imdbID}},methods:{setFavorite:function(){this.fav=!this.fav;var t=localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):{},e=t[this.id];this.fav&&!e?t[this.id]={favorite:this.fav,imdbID:this.imdbID,url:this.url,title:this.title,date:this.date}:!this.fav&&e&&(delete t[this.id],this.$emit("removeFromFavorites",this.id)),localStorage.setItem("favorites",JSON.stringify(t))}}},l=(r(176),r(19)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"item"},[o("h2",[t._v(t._s(t.title))]),t._v(" "),"N/A"!==t.url?o("img",{attrs:{src:t.url,width:"235",height:"300"}}):t._e(),t._v(" "),"N/A"===t.url?o("img",{attrs:{src:r(175),width:"235",height:"300"}}):t._e(),t._v(" "),o("div",{staticClass:"date"},[o("span",{staticClass:"quant-text"},[t._v("Year: "+t._s(t.date))])]),t._v(" "),o("button",{staticClass:"submit",on:{click:function(e){return t.setFavorite()}}},[o("span",{staticClass:"fav"},[t._v(t._s(t.fav?"Unfavorite":"Favorite"))]),t._v(" "),o("svg",{staticClass:"heart-loader",attrs:{"xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 90 90",version:"1.1"}},[o("g",{staticClass:"heart-loader"},[o("path",{class:{"heart-loader-path-filled":t.fav,"heart-loader-path":!t.fav},attrs:{"stroke-width":"2",d:"M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0"}})])])])])])}),[],!1,null,"1a711d06",null);e.a=component.exports},181:function(t,e,r){"use strict";var o=r(178);r.n(o).a},182:function(t,e,r){(e=r(54)(!1)).push([t.i,"h2[data-v-926a7468]{margin-bottom:40px}",""]),t.exports=e},191:function(t,e,r){"use strict";r.r(e);r(26),r(16),r(56);var o={components:{Movie:r(180).a},data:function(){return{movies:localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):{}}},methods:{notEmptyObject:function(t){return Object.keys(t).length},refreshFavorites:function(t){delete this.movies[t],this.$forceUpdate()}}},l=(r(181),r(19)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("div",{staticClass:"flexrow"},[t._l(t.movies,(function(e,o){return t.notEmptyObject(t.movies)?r("div",{key:o,staticClass:"unit"},[r("movie",{attrs:{title:e.title,url:e.url,imdbID:e.imdbID,date:e.date,favorite:e.favorite},on:{removeFromFavorites:t.refreshFavorites}})],1):t._e()})),t._v(" "),t.notEmptyObject(t.movies)?t._e():r("div",[r("h2",[t._v("No movies/series added to favorites yet!")])])],2)])}),[],!1,null,"926a7468",null);e.default=component.exports}}]);