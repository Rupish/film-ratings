(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(t,e,r){var content=r(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("2f26fbda",content,!0,{sourceMap:!1})},178:function(t,e,r){var content=r(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("f45e5736",content,!0,{sourceMap:!1})},179:function(t,e,r){t.exports=r.p+"img/68c8844.png"},180:function(t,e,r){"use strict";var n=r(177);r.n(n).a},181:function(t,e,r){(e=r(54)(!1)).push([t.i,".heart-loader[data-v-15d86bf8]{transform:rotate(-22.5deg);width:15px;height:15px;overflow:visible;float:right;margin-top:1px}.heart-loader-path[data-v-15d86bf8]{stroke:#49494f;fill:transparent;stroke-dasharray:308.522,308.522;stroke-dashoffset:0}.heart-loader-path-filled[data-v-15d86bf8]{stroke:red;fill:#ff4500;stroke-dasharray:308.522,308.522;stroke-dashoffset:0}",""]),t.exports=e},183:function(t,e,r){"use strict";var n=r(178);r.n(n).a},184:function(t,e,r){var n=r(54),o=r(185),c=r(186);e=n(!1);var l=o(c);e.push([t.i,".loader-container[data-v-3be91cc3]{position:fixed;top:50%;left:50%;width:15em;height:15em;margin-top:-6em;margin-left:-8em;background:url("+l+") no-repeat}",""]),t.exports=e},185:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},186:function(t,e,r){t.exports=r.p+"img/ba787be.gif"},188:function(t,e,r){"use strict";var n={computed:{favorites:function(){return this.$store.state.favorites}},props:["title","imdbID","url","date","favorite"],data:function(){return{fav:this.favorite,id:this.imdbID}},methods:{setFavorite:function(){this.fav=!this.fav;var t=this.favorites[this.id];this.fav&&!t?this.$store.commit("add",{favorite:this.fav,imdbID:this.imdbID,url:this.url,title:this.title,date:this.date}):!this.fav&&t&&this.$store.commit("remove",this.id)}}},o=(r(180),r(19)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nuxt-link",{attrs:{to:{path:"/film/"+t.id}}},[n("div",{staticClass:"item"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),"N/A"!==t.url?n("img",{attrs:{src:t.url,width:"235",height:"300"}}):t._e(),t._v(" "),"N/A"===t.url?n("img",{attrs:{src:r(179),width:"235",height:"300"}}):t._e(),t._v(" "),n("div",{staticClass:"date"},[n("span",{staticClass:"quant-text"},[t._v("Year: "+t._s(t.date))])]),t._v(" "),n("button",{staticClass:"submit",on:{click:function(e){return t.setFavorite()}}},[n("span",{staticClass:"fav"},[t._v(t._s(t.fav?"Unfavorite":"Favorite"))]),t._v(" "),n("svg",{staticClass:"heart-loader",attrs:{"xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 90 90",version:"1.1"}},[n("g",{staticClass:"heart-loader"},[n("path",{class:{"heart-loader-path-filled":t.fav,"heart-loader-path":!t.fav},attrs:{"stroke-width":"2",d:"M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0"}})])])])])])],1)}),[],!1,null,"15d86bf8",null);e.a=component.exports},189:function(t,e,r){"use strict";var n={data:function(){return{}}},o=(r(183),r(19)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loader-container"})}),[],!1,null,"3be91cc3",null);e.a=component.exports},195:function(t,e,r){"use strict";var n=r(3),o=r(17),c=r(21),l=r(110),h=r(57),f=r(10),v=r(38).f,d=r(58).f,m=r(9).f,P=r(196).trim,_=n.Number,y=_,x=_.prototype,w="Number"==c(r(72)(x)),C="trim"in String.prototype,I=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=C?e.trim():P(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(w?f((function(){x.valueOf.call(r)})):"Number"!=c(r))?l(new y(I(e)),r,_):I(e)};for(var k,N=r(8)?v(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;N.length>O;O++)o(y,k=N[O])&&!o(_,k)&&m(_,k,d(y,k));_.prototype=x,x.constructor=_,r(11)(n,"Number",_)}},196:function(t,e,r){var n=r(7),o=r(20),c=r(10),l=r(197),h="["+l+"]",f=RegExp("^"+h+h+"*"),v=RegExp(h+h+"*$"),d=function(t,e,r){var o={},h=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=h?e(m):l[t];r&&(o[r]=f),n(n.P+n.F*h,"String",o)},m=d.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=d},197:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},198:function(t,e,r){"use strict";r.r(e);r(73),r(37),r(27),r(16),r(56);var n=r(49),o=(r(111),r(188)),c=(r(195),{props:{maxVisibleButtons:{type:Number,required:!1,default:3},totalPages:{type:Number,required:!0},total:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:{startPage:function(){return 1===this.currentPage?1:this.currentPage===this.totalPages?this.totalPages-this.maxVisibleButtons+1:this.currentPage-1},endPage:function(){return Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages)},pages:function(){for(var t=[],i=this.startPage;i<=this.endPage;i+=1)t.push({name:i,isDisabled:i===this.currentPage});return t},isInFirstPage:function(){return 1===this.currentPage},isInLastPage:function(){return this.currentPage===this.totalPages}},methods:{onClickFirstPage:function(){this.$emit("pagechanged",1)},onClickPreviousPage:function(){this.$emit("pagechanged",this.currentPage-1)},onClickPage:function(t){this.$emit("pagechanged",t)},onClickNextPage:function(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage:function(){this.$emit("pagechanged",this.totalPages)},isPageActive:function(t){return this.currentPage===t}}}),l=r(19),h=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"pagination"},[r("li",{staticClass:"pagination-item"},[r("button",{attrs:{type:"button",disabled:t.isInFirstPage,"aria-label":"Go to first page"},on:{click:t.onClickFirstPage}},[t._v("\n      First\n    ")])]),t._v(" "),r("li",{staticClass:"pagination-item"},[r("button",{attrs:{type:"button",disabled:t.isInFirstPage,"aria-label":"Go to previous page"},on:{click:t.onClickPreviousPage}},[t._v("\n      Previous\n    ")])]),t._v(" "),t._l(t.pages,(function(e){return r("li",{staticClass:"pagination-item"},[r("button",{class:{active:t.isPageActive(e.name)},attrs:{type:"button",disabled:e.isDisabled,"aria-label":"Go to page number "+e.name},on:{click:function(r){return t.onClickPage(e.name)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])])})),t._v(" "),r("li",{staticClass:"pagination-item"},[r("button",{attrs:{type:"button",disabled:t.isInLastPage,"aria-label":"Go to next page"},on:{click:t.onClickNextPage}},[t._v("\n      Next\n    ")])]),t._v(" "),r("li",{staticClass:"pagination-item"},[r("button",{attrs:{type:"button",disabled:t.isInLastPage,"aria-label":"Go to last page"},on:{click:t.onClickLastPage}},[t._v("\n      Last\n    ")])])],2)}),[],!1,null,null,null).exports,f=r(189),v=r(98),d=r.n(v);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{Movie:o.a,Pagination:h,Loader:f.a},data:function(){return{currentPage:1,totalResults:0,totalPages:0,search:{query:"",type:""},movies:[],loading:!1,error:!1}},computed:{favorites:function(){return this.$store.state.favorites}},mounted:function(){this.$store.commit("setFavs"),console.log("mounted"),this.currentPage=parseInt(this.$route.query.page),this.search.query=this.$route.query.query,this.getMovies()},methods:{getMovies:function(t){var e=this;t&&(this.currentPage=1),this.loading=!0,this.error=!1,d.a.get("https://www.omdbapi.com/",{params:P({apikey:"5e69291",s:this.search.query||"a",page:this.currentPage},this.search.type&&{type:this.search.type})}).then((function(t){e.$router.push({path:"/",query:{query:e.search.query,page:e.currentPage}}),e.loading=!1,t.data.Search=e.setFavorites(t.data),e.movies=t.data,e.totalResults=parseInt(e.movies.totalResults),e.totalPages=parseInt(Math.ceil(parseInt(e.movies.totalResults)/10))})).catch((function(t){e.loading=!1,e.error=t}))},setFavorites:function(data){if(data.Search){var t=data.Search,e=this.favorites;return void 0===e||null==e||""===e?t:t.map((function(t){return e[t.imdbID]?t.favorite=!0:t.favorite=!1,t}))}return!1},onPageChange:function(t){console.log(t),this.currentPage=t,this.getMovies(!1)}}},y=Object(l.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[t.loading?t._e():r("div",{staticClass:"flexrow"},[r("form",{on:{submit:function(t){t.preventDefault()}}},[r("div",{staticClass:"search-box"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search.query,expression:"search.query"}],staticClass:"search-text",attrs:{type:"text",placeholder:"Search movies,series,episodes..",maxlength:"30"},domProps:{value:t.search.query},on:{input:function(e){e.target.composing||t.$set(t.search,"query",e.target.value)}}})]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.search.type,expression:"search.type"}],staticClass:"select-type",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.search,"type",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:""}},[t._v("-- ALL --")]),t._v(" "),r("option",{attrs:{value:"movie"}},[t._v("Movies")]),t._v(" "),r("option",{attrs:{value:"series"}},[t._v("Series")]),t._v(" "),r("option",{attrs:{value:"episode"}},[t._v("Episodes")])]),t._v(" "),r("button",{staticClass:"submit",on:{click:function(e){return t.getMovies(!0)}}},[r("span",[t._v("Search")])])])])]),t._v(" "),t.loading?t._e():r("div",{staticClass:"flexrow"},[t._l(t.movies.Search,(function(e){return t.movies.Search&&"True"===t.movies.Response?r("div",{key:e.imdbID,staticClass:"unit"},[r("movie",{attrs:{title:e.Title,url:e.Poster,imdbID:e.imdbID,date:e.Year,favorite:e.favorite}})],1):t._e()})),t._v(" "),"False"===t.movies.Response||t.error?r("div",[r("h2",[t._v(t._s(t.movies.Error||t.error))])]):t._e()],2),t._v(" "),t.loading?t._e():r("div",{staticClass:"flexrow"},[t.totalResults?r("pagination",{attrs:{"total-pages":t.totalPages,total:t.totalResults,"per-page":10,"current-page":t.currentPage},on:{pagechanged:t.onPageChange}}):t._e()],1),t._v(" "),t.loading?r("Loader"):t._e()],1)}),[],!1,null,null,null);e.default=y.exports}}]);