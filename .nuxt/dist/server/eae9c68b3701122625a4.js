exports.ids=[2],exports.modules={22:function(t,e,r){var content=r(25);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(8).default;t.exports.__inject__=function(t){o("3e6c1ca6",content,!0,t)}},23:function(t,e,r){t.exports=r.p+"img/68c8844.png"},24:function(t,e,r){"use strict";r.r(e);var o=r(22),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,(function(){return o[t]}))}(l);e.default=n.a},25:function(t,e,r){(e=r(7)(!1)).push([t.i,".heart-loader[data-v-1a711d06]{transform:rotate(-22.5deg);width:15px;height:15px;overflow:visible;float:right;margin-top:1px}.heart-loader-path[data-v-1a711d06]{stroke:#49494f;fill:transparent;stroke-dasharray:308.522,308.522;stroke-dashoffset:0}.heart-loader-path-filled[data-v-1a711d06]{stroke:red;fill:#ff4500;stroke-dasharray:308.522,308.522;stroke-dashoffset:0}",""]),t.exports=e},27:function(t,e,r){var content=r(32);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(8).default;t.exports.__inject__=function(t){o("f45e5736",content,!0,t)}},28:function(t,e,r){"use strict";var o={props:["title","imdbID","url","date","favorite"],data(){return{fav:this.favorite,id:this.imdbID}},methods:{setFavorite:function(){this.fav=!this.fav;let t=localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):{};const e=t[this.id];this.fav&&!e?t[this.id]={favorite:this.fav,imdbID:this.imdbID,url:this.url,title:this.title,date:this.date}:!this.fav&&e&&(delete t[this.id],this.$emit("removeFromFavorites",this.id)),localStorage.setItem("favorites",JSON.stringify(t))}}},n=r(1);var component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode('<div class="item" data-v-1a711d06><h2 data-v-1a711d06>'+t._ssrEscape(t._s(t.title))+"</h2> "+("N/A"!==t.url?"<img"+t._ssrAttr("src",t.url)+' width="235" height="300" data-v-1a711d06>':"\x3c!----\x3e")+" "+("N/A"===t.url?"<img"+t._ssrAttr("src",r(23))+' width="235" height="300" data-v-1a711d06>':"\x3c!----\x3e")+' <div class="date" data-v-1a711d06><span class="quant-text" data-v-1a711d06>'+t._ssrEscape("Year: "+t._s(t.date))+'</span></div> <button class="submit" data-v-1a711d06><span class="fav" data-v-1a711d06>'+t._ssrEscape(t._s(t.fav?"Unfavorite":"Favorite"))+'</span> <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 90" version="1.1" class="heart-loader" data-v-1a711d06><g class="heart-loader" data-v-1a711d06><path stroke-width="2" d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0"'+t._ssrClass(null,{"heart-loader-path-filled":t.fav,"heart-loader-path":!t.fav})+" data-v-1a711d06></path></g></svg></button></div>")])}),[],!1,(function(t){var e=r(24);e.__inject__&&e.__inject__(t)}),"1a711d06","68081acc");e.a=component.exports},31:function(t,e,r){"use strict";r.r(e);var o=r(27),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,(function(){return o[t]}))}(l);e.default=n.a},32:function(t,e,r){var o=r(7),n=r(33),l=r(34);e=o(!1);var c=n(l);e.push([t.i,".loader-container[data-v-3be91cc3]{position:fixed;top:50%;left:50%;width:15em;height:15em;margin-top:-6em;margin-left:-8em;background:url("+c+") no-repeat}",""]),t.exports=e},33:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},34:function(t,e,r){t.exports=r.p+"img/ba787be.gif"},35:function(t,e,r){"use strict";r.r(e);var o=r(28),n={props:{maxVisibleButtons:{type:Number,required:!1,default:3},totalPages:{type:Number,required:!0},total:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:{startPage(){return 1===this.currentPage?1:this.currentPage===this.totalPages?this.totalPages-this.maxVisibleButtons+1:this.currentPage-1},endPage(){return Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages)},pages(){const t=[];for(let i=this.startPage;i<=this.endPage;i+=1)t.push({name:i,isDisabled:i===this.currentPage});return t},isInFirstPage(){return 1===this.currentPage},isInLastPage(){return this.currentPage===this.totalPages}},methods:{onClickFirstPage(){this.$emit("pagechanged",1)},onClickPreviousPage(){this.$emit("pagechanged",this.currentPage-1)},onClickPage(t){this.$emit("pagechanged",t)},onClickNextPage(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage(){this.$emit("pagechanged",this.totalPages)},isPageActive(t){return this.currentPage===t}}},l=r(1),c=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{staticClass:"pagination"},[t._ssrNode('<li class="pagination-item"><button type="button"'+t._ssrAttr("disabled",t.isInFirstPage)+' aria-label="Go to first page">\n      First\n    </button></li> <li class="pagination-item"><button type="button"'+t._ssrAttr("disabled",t.isInFirstPage)+' aria-label="Go to previous page">\n      Previous\n    </button></li> '+t._ssrList(t.pages,(function(e){return'<li class="pagination-item"><button type="button"'+t._ssrAttr("disabled",e.isDisabled)+t._ssrAttr("aria-label","Go to page number "+e.name)+t._ssrClass(null,{active:t.isPageActive(e.name)})+">"+t._ssrEscape("\n      "+t._s(e.name)+"\n    ")+"</button></li>"}))+' <li class="pagination-item"><button type="button"'+t._ssrAttr("disabled",t.isInLastPage)+' aria-label="Go to next page">\n      Next\n    </button></li> <li class="pagination-item"><button type="button"'+t._ssrAttr("disabled",t.isInLastPage)+' aria-label="Go to last page">\n      Last\n    </button></li>')])}),[],!1,null,null,"ef49b0c0").exports,d={data:()=>({})};var h=Object(l.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loader-container"},[])}),[],!1,(function(t){var e=r(31);e.__inject__&&e.__inject__(t)}),"3be91cc3","34dea299").exports,v=r(10),f=r.n(v),m={components:{Movie:o.a,Pagination:c,Loader:h},data:()=>({currentPage:1,totalResults:0,totalPages:0,search:{query:"",type:""},movies:[],loading:!1,error:!1}),methods:{getMovies:function(t){t&&(this.currentPage=1),this.loading=!0,this.error=!1,f.a.get("https://www.omdbapi.com/",{params:{apikey:"5e69291",s:this.search.query,page:this.currentPage,...this.search.type&&{type:this.search.type}}}).then(t=>{this.loading=!1,t.data.Search=this.setFavorites(t.data),this.movies=t.data,this.totalResults=parseInt(this.movies.totalResults),this.totalPages=parseInt(Math.ceil(parseInt(this.movies.totalResults)/10))}).catch(t=>{this.loading=!1,this.error=t})},setFavorites:function(data){if(data.Search){let t=data.Search,e=JSON.parse(localStorage.getItem("favorites"));return void 0===e||null==e||""===e?t:t.map(t=>(e[t.imdbID]?t.favorite=!0:t.favorite=!1,t))}return!1},onPageChange(t){console.log(t),this.currentPage=t,this.getMovies(!1)}}},_=Object(l.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[t.loading?t._e():t._ssrNode('<div class="flexrow">',"</div>",[t._ssrNode("<form>","</form>",[t._ssrNode('<div class="search-box">',"</div>",[t._ssrNode('<label><input type="text" placeholder="Search movies,series,episodes.." maxlength="30"'+t._ssrAttr("value",t.search.query)+' class="search-text"></label> '),r("select",{directives:[{name:"model",rawName:"v-model",value:t.search.type,expression:"search.type"}],staticClass:"select-type",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.search,"type",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:""}},[t._v("-- ALL --")]),t._v(" "),r("option",{attrs:{value:"movie"}},[t._v("Movies")]),t._v(" "),r("option",{attrs:{value:"series"}},[t._v("Series")]),t._v(" "),r("option",{attrs:{value:"episode"}},[t._v("Episodes")])]),t._ssrNode(' <button class="submit"><span>Search</span></button>')],2)])]),t._ssrNode(" "),t.loading?t._e():t._ssrNode('<div class="flexrow">',"</div>",[t._l(t.movies.Search,(function(e){return t.movies.Search&&"True"===t.movies.Response?t._ssrNode('<div class="unit">',"</div>",[r("movie",{attrs:{title:e.Title,url:e.Poster,imdbID:e.imdbID,date:e.Year,favorite:e.favorite}})],1):t._e()})),t._ssrNode(" "+("False"===t.movies.Response||t.error?"<div><h2>"+t._ssrEscape(t._s(t.movies.Error||t.error))+"</h2></div>":"\x3c!----\x3e"))],2),t._ssrNode(" "),t.loading?t._e():t._ssrNode('<div class="flexrow">',"</div>",[t.totalResults?r("pagination",{attrs:{"total-pages":t.totalPages,total:t.totalResults,"per-page":10,"current-page":t.currentPage},on:{pagechanged:t.onPageChange}}):t._e()],1),t._ssrNode(" "),t.loading?r("Loader"):t._e()],2)}),[],!1,null,null,"aff94358");e.default=_.exports}};