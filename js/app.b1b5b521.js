(function(e){function t(t){for(var r,a,o=t[0],c=t[1],l=t[2],_=0,u=[];_<o.length;_++)a=o[_],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],r=!0,a=1;a<s.length;a++){var c=s[a];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},n={app:0},i=[];function a(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-11d51b16":"a1a048e5","chunk-133fdb14":"df98f9c5","chunk-1b9f36d3":"01d90dce","chunk-218dfef0":"6d9aa8bc","chunk-2d0b3289":"a64b56c1","chunk-62746101":"46e900ca","chunk-6349f8fc":"2fbfc9c7","chunk-6b95aea4":"4d3719bb","chunk-d191a782":"6f19e305"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(e){var t=[],s=n[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,r){s=n[e]=[t,r]}));t.push(s[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=a(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(_);var s=n[e];if(0!==s){if(s){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,s[1](l)}n[e]=void 0}};var _=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/simple-twitter/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var _=0;_<c.length;_++)t(c[_]);var d=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},2375:function(e,t,s){"use strict";var r=function(){var e=this;e._self._c;return e._m(0)},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"spinner"},[t("div",{staticClass:"bouncing-loader d-flex justify-content-center"},[t("div"),t("div"),t("div")])])}],i={name:"Spinner"},a=i,o=s("2877"),c=Object(o["a"])(a,r,n,!1,null,null,null);t["a"]=c.exports},2708:function(e,t,s){"use strict";s.d(t,"c",(function(){return i})),s.d(t,"b",(function(){return a})),s.d(t,"a",(function(){return o}));var r=s("c1df"),n=s.n(r);const i={filters:{fromNow(e){return n.a.locale("zh-tw"),e?n()(e).fromNow():"-"},date(e){return n.a.locale("zh-tw"),e?n()(e).format("LL"):"-"},time(e){return n.a.locale("zh-tw"),e?n()(e).format("ALT"):"-"}}},a={filters:{emptyImage(e){return e||s("a692")},emptyCover(e){return e||s("a342")}}},o={filters:{atAccount(e){return"@"+e}}}},2797:function(e,t,s){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"reply__modal__overlay"},[t("div",{staticClass:"reply__modal"},[t("div",{staticClass:"reply__modal__close"},[t("button",{staticClass:"reply__modal__close__button",on:{click:function(t){return e.$emit("close-modal")}}},[t("img",{staticClass:"reply__modal__close__button__img",attrs:{src:s("2930"),alt:""}})])]),t("div",{staticClass:"reply__modal__container"},[t("div",{staticClass:"reply__modal__container__tweet d-flex"},[t("div",[t("img",{staticClass:"reply__modal__container__tweet__img",attrs:{src:e._f("emptyImage")(e.replyTweet.User.avatar),alt:""}}),t("div",{staticClass:"reply__modal__container__tweet__line"})]),t("div",[t("div",[t("span",{staticClass:"reply__modal__container__tweet__name"},[e._v(e._s(e.replyTweet.User.name))]),t("span",{staticClass:"reply__modal__container__tweet__account"},[e._v(e._s(e._f("atAccount")(e.replyTweet.User.account)))]),t("span",{staticClass:"reply__modal__container__tweet__dot"},[e._v("‧")]),t("span",{staticClass:"reply__modal__container__tweet__createdAt"},[e._v(e._s(e._f("fromNow")(e.replyTweet.createdAt)))])]),t("div",{staticClass:"reply__modal__container__tweet__description scrollbar"},[e._v(" "+e._s(e.replyTweet.description)+" ")]),t("div",[t("span",{staticClass:"reply__modal__container__tweet__reply__title"},[e._v(" 回覆給 ")]),t("span",{staticClass:"reply__modal__container__tweet__reply__target"},[e._v(" "+e._s(e._f("atAccount")(e.replyTweet.User.name))+" ")])])])]),t("form",{staticClass:"reply__modal__container__reply d-flex",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit()}}},[t("img",{staticClass:"reply__modal__container__reply__img",attrs:{src:e._f("emptyImage")(e.currentUser.avatar),alt:""}}),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"comment"}],staticClass:"reply__modal__container__reply__textarea scrollbar",attrs:{name:"comment",placeholder:"推你的回覆"},domProps:{value:e.comment},on:{input:function(t){t.target.composing||(e.comment=t.target.value)}}}),t("span",{staticClass:"reply__modal__container__reply__length"},[e._v(e._s(e.comment.length)+"/140")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.comment.length>140,expression:"comment.length > 140"}],staticClass:"reply__modal__container__reply__notice"},[e._v("字數不可超過 140 字")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.comment.length,expression:"!comment.length"}],staticClass:"reply__modal__container__reply__notice"},[e._v("內容不可空白")]),t("button",{staticClass:"reply__modal__container__reply__button",attrs:{disabled:e.isProcessing}},[e._v(" 回覆 ")])])])])])},n=[],i=(s("d9e2"),s("14d9"),s("6783")),a=s("2f62"),o=s("2708"),c=s("2fa3"),l={name:"ReplyModal",mixins:[o["b"],o["c"],o["a"]],props:{replyTweet:{type:Object,require:!0}},data(){return{comment:"",isProcessing:!1}},methods:{async handleSubmit(){try{if(this.isProcessing=!0,this.comment=this.comment.trim(),!this.comment||this.comment.length>140)return c["a"].fire({icon:"warning",title:"請檢查內容是否填寫正確"}),void(this.isProcessing=!1);const{data:e}=await i["a"].reply({tweet_id:this.replyTweet.id,comment:this.comment});if("error"===e.status)throw new Error(e.message);this.comment="",c["a"].fire({icon:"success",title:"成功建立回覆"}),this.$emit("close-modal"),this.isProcessing=!1,"tweets"!==this.$route.name?this.$router.push({name:"tweets",params:{id:this.replyTweet.id}}):(this.$parent.$parent.fetchTweetReplies(this.replyTweet.id),this.$parent.$parent.fetchTweet(this.replyTweet.id))}catch(e){this.isProcessing=!1,console.log(e);const t=e.response.data.message;"The tweet you want to reply does not exist."===t?c["a"].fire({icon:"warning",title:"欲回覆的推文不存在"}):c["a"].fire({icon:"error",title:"無法新增回覆，請稍後再試"})}}},computed:{...Object(a["b"])(["currentUser"])}},_=l,d=s("2877"),u=Object(d["a"])(_,r,n,!1,null,null,null);t["a"]=u.exports},2930:function(e,t,s){e.exports=s.p+"img/close.0f8e9d47.svg"},"2fa3":function(e,t,s){"use strict";s.d(t,"b",(function(){return l})),s.d(t,"a",(function(){return _}));var r=s("bc3a"),n=s.n(r),i=s("3d20"),a=s.n(i);const o="https://simpletwapi.click/api",c=n.a.create({baseURL:o});c.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers["Authorization"]="Bearer "+t),e},e=>Promise.reject(e));const l=c,_=a.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,customClass:{icon:"icon-right"}})},"2fb4":function(e,t,s){},4488:function(e,t,s){e.exports=s.p+"img/logout.e870cf23.svg"},4678:function(e,t,s){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=i(e);return s(t)}function i(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id="4678"},"4cce":function(e,t,s){"use strict";var r=s("2fa3");t["a"]={currentUser(){return r["b"].get("/current_user")},update({id:e,formData:t}){return r["b"].put("/users/"+e,t)},topFollowers(){return r["b"].get("/users/top_followers")},setProfile({userId:e,account:t,name:s,email:n,password:i,checkPassword:a}){return r["b"].put(`/users/${e}/setting`,{account:t,name:s,email:n,password:i,checkPassword:a})},like({id:e}){return r["b"].post(`/tweets/${e}/like`)},unlike({id:e}){return r["b"].post(`/tweets/${e}/unlike`)},get:{profile({id:e}){return r["b"].get("/users/"+e)},tweets({id:e}){return r["b"].get(`/users/${e}/tweets`)},replied({id:e}){return r["b"].get(`/users/${e}/replied_tweets`)},likes({id:e}){return r["b"].get(`/users/${e}/likes`)},followings({id:e}){return r["b"].get(`/users/${e}/followings`)},followers({id:e}){return r["b"].get(`/users/${e}/followers`)}}}},"56d7":function(e,t,s){"use strict";s.r(t);var r=s("2b0e"),n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container",attrs:{id:"app"}},[t("div",{staticClass:"app__container row flex-nowrap"},[e.isAuthenticated&&"not-found"!==e.$route.name?t("Sidebar",{staticClass:"col-2"}):e._e(),"admin"===e.currentUser.role?t("router-view",{staticClass:"col-10"}):e._e(),e.isAuthenticated?e._e():t("router-view"),"user"===e.currentUser.role?t("router-view",{staticClass:"col-7"}):e._e(),"user"===e.currentUser.role&&"not-found"!==e.$route.name&&"settings"!==e.$route.name?t("PopularUsers",{staticClass:"col-3"}):e._e()],1)])},i=[],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar__container"},[e._m(0),t("div",{staticClass:"sidebar__container__buttons d-flex flex-column justify-content-between"},["user"===e.currentUser.role?t("ul",[t("li",{staticClass:"sidebar__container__buttons__list"},[t("router-link",{staticClass:"d-flex",attrs:{to:"/home"}},[t("span",[t("img",{staticClass:"sidebar__container__buttons__list__img",attrs:{src:s("c6c2"),alt:""}})]),t("span",{staticClass:"sidebar__container__buttons__list__name"},[e._v("首頁")])])],1),t("li",{staticClass:"sidebar__container__buttons__list"},[t("router-link",{staticClass:"d-flex",attrs:{to:{name:"profile",params:{id:e.currentUser.id}}}},[t("span",[t("img",{staticClass:"sidebar__container__buttons__list__img",attrs:{src:s("c768"),alt:""}})]),t("span",{staticClass:"sidebar__container__buttons__list__name"},[e._v(" 個人資料")])])],1),t("li",{staticClass:"sidebar__container__buttons__list"},[t("router-link",{staticClass:"d-flex",attrs:{to:{name:"settings",params:{id:e.currentUser.id}}}},[t("span",[t("img",{staticClass:"sidebar__container__buttons__list__img",attrs:{src:s("6fdd"),alt:""}})]),t("span",{staticClass:"sidebar__container__buttons__list__name"},[e._v("設定")])])],1),t("button",{staticClass:"sidebar__container__buttons__list__tweet",on:{click:function(t){e.showModal=!0}}},[e._v(" 推文 ")]),t("TweetModal",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],on:{"close-modal":function(t){e.showModal=!1}}})],1):t("ul",e._l(e.adminTabs,(function(s){return t("li",{key:s.id,staticClass:"sidebar__container__buttons__list"},[t("router-link",{staticClass:"d-flex",attrs:{to:s.path}},[t("span",[t("img",{staticClass:"sidebar__container__buttons__list__img",attrs:{src:s.image,alt:""}})]),t("span",{staticClass:"sidebar__container__buttons__list__name"},[e._v(e._s(s.title))])])],1)})),0),t("div",[t("button",{staticClass:"sidebar__container__buttons__logout",on:{click:e.logout}},[t("router-link",{staticClass:"d-flex",attrs:{to:"/users/signin"}},[t("span",[t("img",{staticClass:"sidebar__container__buttons__logout__img",attrs:{src:s("4488"),alt:""}})]),t("span",{staticClass:"sidebar__container__buttons__logout__name"},[e._v("登出")])])],1)])])])},o=[function(){var e=this,t=e._self._c;return t("div",[t("img",{staticClass:"sidebar__container__logo",attrs:{src:s("e255"),alt:""}})])}],c=(s("14d9"),s("2f62")),l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tweet__modal__overlay"},[t("div",{staticClass:"tweet__modal"},[t("div",{staticClass:"tweet__modal__close"},[t("button",{staticClass:"tweet__modal__close__button",on:{click:function(t){return e.$emit("close-modal")}}},[t("img",{staticClass:"tweet__modal__close__button__img",attrs:{src:s("2930"),alt:""}})])]),t("form",{staticClass:"tweet__modal__content d-flex",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("img",{staticClass:"tweet__modal__content__img",attrs:{src:e._f("emptyImage")(e.currentUser.avatar),alt:""}}),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"tweet__modal__content__textarea scrollbar",attrs:{name:"description",placeholder:"有什麼新鮮事 ?"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),t("span",{staticClass:"tweet__modal__content__length"},[e._v(e._s(e.description.length)+"/140")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.description.length>140,expression:"description.length > 140"}],staticClass:"tweet__modal__content__notice"},[e._v("字數不可超過 140 字")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.description.length,expression:"!description.length"}],staticClass:"tweet__modal__content__notice"},[e._v("內容不可空白")]),t("button",{staticClass:"tweet__modal__content__button",attrs:{disabled:e.isProcessing}},[e._v(" 推文 ")])])])])},_=[],d=(s("d9e2"),s("6783")),u=s("2708"),m=s("2fa3"),p={name:"TweetModal",mixins:[u["b"]],data(){return{description:"",isProcessing:!1}},methods:{async handleSubmit(){try{if(this.isProcessing=!0,this.description=this.description.trim(),!this.description||this.description.length>140)return m["a"].fire({icon:"warning",title:"請檢查內容是否填寫正確"}),void(this.isProcessing=!1);const{data:e}=await d["a"].create({description:this.description});if("error"===e.status)throw new Error(e.message);this.description="",m["a"].fire({icon:"success",title:"成功建立推文"}),this.$emit("close-modal"),"home"===this.$route.name?this.$store.commit("triggerRender"):this.$router.push({name:"home"}),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e),m["a"].fire({icon:"error",title:"無法新增推文，請稍後再試"})}}},computed:{...Object(c["b"])(["currentUser"])}},f=p,h=s("2877"),w=Object(h["a"])(f,l,_,!1,null,null,null),b=w.exports,g={name:"Sidebar",components:{TweetModal:b},data(){return{adminTabs:[{id:1,title:"推文清單",image:s("c6c2"),path:"/admin/tweets"},{id:2,title:"使用者列表",image:s("c768"),path:"/admin/users"}],showModal:!1}},methods:{logout(){this.$store.commit("revokeAuthentication"),"admin-tweets"===this.$route.name?this.$router.push("/admin/signin"):this.$router.push("/users/signin")}},computed:{...Object(c["b"])(["currentUser","isAuthenticated"])}},v=g,j=Object(h["a"])(v,a,o,!1,null,null,null),y=j.exports,C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"popular__users__container scrollbar"},[t("div",{staticClass:"popular__users__container__title"},[e._v("推薦跟隨")]),e.isLoading?t("Spinner"):e._l(e.topFollowers,(function(s){return t("div",{key:s.id,staticClass:"popular__users__container__top__user d-flex"},[t("router-link",{attrs:{to:{name:"profile",params:{id:s.id}}}},[t("img",{staticClass:"popular__users__container__top__user__img",attrs:{src:e._f("emptyImage")(s.avatar),alt:""}})]),t("div",{staticClass:"popular__users__container__top__user__description__button d-flex justify-content-between"},[t("div",{staticClass:"popular__users__container__top__user__description"},[t("router-link",{staticClass:"popular__users__container__top__user__description__name none",attrs:{to:{name:"profile",params:{id:s.id}}}},[e._v(" "+e._s(s.name)+" ")]),t("div",{staticClass:"popular__users__container__top__user__description__account"},[e._v(" "+e._s(e._f("atAccount")(s.account))+" ")])],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.currentUser.id!==s.id,expression:"currentUser.id !== topFollower.id"}],staticClass:"popular__users__container__top__user__button"},[0===s.isFollowed?t("button",{staticClass:"popular__users__container__top__user__button__follow",attrs:{disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowing(s.id)}}},[e._v(" 跟隨 ")]):t("button",{staticClass:"popular__users__container__top__user__button__following",attrs:{disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFollowing(s.id)}}},[e._v(" 正在跟隨 ")])])])],1)}))],2)},k=[],x=s("4cce"),P=s("8845"),U=s("2375"),T={name:"PopularUsers",mixins:[u["b"],u["a"]],components:{Spinner:U["a"]},data(){return{topFollowers:[],isLoading:!0,isProcessing:!1}},created(){this.fetchTopFollowers()},methods:{async fetchTopFollowers(){try{const{data:e}=await x["a"].topFollowers();if("error"===e.status)throw new Error(e.message);this.topFollowers=e,this.isLoading=!1}catch(e){this.isLoading=!1,console.log(e),m["a"].fire({icon:"error",title:"無法取得使用者資料，請稍後再試"})}},async addFollowing(e){try{this.isProcessing=!0;const{data:t}=await P["a"].addFollowing({id:e});if("error"===t.status)throw new Error(t.message);this.topFollowers=this.topFollowers.map(t=>t.id!==e?t:{...t,isFollowed:1}),m["a"].fire({icon:"success",title:"追蹤成功！"}),this.$store.commit("triggerProfileRender"),this.$store.commit("triggerFollowRender"),this.isProcessing=!1}catch(t){this.isProcessing=!1,console.log(t),m["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"})}},async deleteFollowing(e){try{this.isProcessing=!0;const{data:t}=await P["a"].deleteFollowing({id:e});if("error"===t.status)throw new Error(t.message);this.topFollowers=this.topFollowers.map(t=>t.id!==e?t:{...t,isFollowed:0}),m["a"].fire({icon:"success",title:"取消追蹤成功！"}),this.$store.commit("triggerProfileRender"),this.$store.commit("triggerFollowRender"),this.isProcessing=!1}catch(t){this.isProcessing=!1,console.log(t),m["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"})}}},computed:{...Object(c["b"])(["currentUser","renderPopularUsers"])},watch:{renderPopularUsers:{handler:function(){this.fetchTopFollowers()},deep:!0}}},$=T,O=Object(h["a"])($,C,k,!1,null,null,null),F=O.exports,A=(s("2f88"),{name:"App",components:{Sidebar:y,PopularUsers:F},computed:{...Object(c["b"])(["currentUser","isAuthenticated"])}}),z=A,E=Object(h["a"])(z,n,i,!1,null,null,null),S=E.exports,M=s("8c4f"),N=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"home__container row flex-nowrap"},[t("HomeTweet")],1)])},R=[],L=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home-tweet__container"},[t("h4",{staticClass:"home-tweet__container__title"},[e._v("首頁")]),t("form",{staticClass:"home-tweet__container__tweet-box d-flex justify-content-between",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("img",{staticClass:"home-tweet__container__tweet-box__img",attrs:{src:e._f("emptyImage")(e.currentUser.avatar),alt:""}}),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"home-tweet__container__tweet-box__input scrollbar",attrs:{type:"text",name:"post-tweet",placeholder:"有什麼新鮮事？"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),e._v(" "),t("div",{staticClass:"home-tweet__container__tweet-box__span d-flex flex-column align-items-end justify-content-end"},[t("span",{staticClass:"home-tweet__container__tweet-box__input__length"},[e._v(e._s(e.description.length)+"/140")]),t("button",{staticClass:"home-tweet__container__tweet-box__btn",attrs:{disabled:e.isProcessing}},[e._v(" 推文 ")])])]),t("div",{staticClass:"home-tweet__container__tweet-list scrollbar"},[e.isLoading?t("Spinner"):e._l(e.tweets,(function(s){return t("HomeDetail",{key:s.id,attrs:{"initial-tweet":s},on:{"after-delete-tweet":e.afterDeleteTweet}})}))],2)])},D=[],I=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home-tweet__container__tweet-list__tweet d-flex"},[t("router-link",{attrs:{to:{name:"profile",params:{id:e.tweet.User.id}}}},[t("img",{staticClass:"home-tweet__container__tweet-list__tweet__avatar",attrs:{src:e._f("emptyImage")(e.tweet.User.avatar),alt:""}})]),t("div",{staticClass:"home-tweet__container__tweet-list__tweet__text d-flex flex-column"},[t("div",{staticClass:"d-flex justify-content-between"},[t("div",{staticClass:"tweet-list__tweet__title d-flex"},[t("div",{staticClass:"tweet-list__tweet__title__name"},[t("router-link",{attrs:{to:{name:"profile",params:{id:e.tweet.User.id}}}},[e._v(e._s(e.tweet.User.name))])],1),t("div",{staticClass:"tweet-list__tweet__title__account"},[e._v(" "+e._s(e._f("atAccount")(e.tweet.User.account))+" ")]),t("span",{staticClass:"tweet-list__tweet__title__separator"},[e._v("・")]),t("div",{staticClass:"tweet-list__tweet__title__createdAt"},[e._v(" "+e._s(e._f("fromNow")(e.tweet.createdAt))+" ")])]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.currentUser.id===e.tweet.User.id,expression:"currentUser.id === tweet.User.id"}],staticClass:"home-tweet__container__tweet-list__tweet__delete",attrs:{disabled:e.isProcessing},on:{click:function(t){return e.deleteTweet(e.tweet.id)}}},[e._v(" × ")])]),t("div",{staticClass:"home-tweet__container__tweet-list__tweet__text__description cursor-pointer",on:{click:function(t){return e.checkTweetReplies(e.tweet.id)}}},[e._v(" "+e._s(e.tweet.description)+" ")]),t("div",{staticClass:"tweet-list__tweet__action d-flex"},[t("div",{staticClass:"tweet-list__tweet__action__reply d-flex"},[t("img",{staticClass:"tweet-list__tweet__action__reply__icon cursor-pointer",attrs:{src:s("c718"),alt:""},on:{click:function(t){e.showModal=!0}}}),t("div",{staticClass:"tweet-list__tweet__action__reply__count num-font"},[e._v(" "+e._s(e.tweet.replyCount)+" ")])]),t("div",{staticClass:"tweet-list__tweet__action__like d-flex"},[e.tweet.isLiked?t("button",{attrs:{disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.unlike(e.tweet.id)}}},[t("img",{staticClass:"tweet-list__tweet__action__like__icon cursor-pointer",attrs:{src:s("9f80"),alt:""}})]):t("button",{attrs:{disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.like(e.tweet.id)}}},[t("img",{staticClass:"tweet-list__tweet__action__like__icon cursor-pointer",attrs:{src:s("c4d2"),alt:""}})]),t("div",{staticClass:"tweet-list__tweet__action__like__count num-font"},[e._v(" "+e._s(e.tweet.likeCount)+" ")])])])]),t("ReplyModal",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],attrs:{"reply-tweet":e.tweet},on:{"close-modal":function(t){e.showModal=!1}}})],1)},B=[],H=s("2797"),q=s("3d20"),J=s.n(q),G={name:"HomeDetail",mixins:[u["b"],u["c"],u["a"]],components:{ReplyModal:H["a"]},props:{initialTweet:{type:Object,required:!0}},data(){return{tweet:this.initialTweet,showModal:!1,isProcessing:!1}},methods:{checkTweetReplies(e){this.$router.push({name:"tweets",params:{id:e}})},async like(e){try{this.isProcessing=!0;const{data:t}=await x["a"].like({id:e});if("error"===t.status)throw new Error(t.message);this.tweet.isLiked=!0,this.tweet.likeCount+=1,m["a"].fire({icon:"success",title:"按讚成功！你真是個好人～"}),this.isProcessing=!1}catch(t){this.isProcessing=!1,console.log(t),m["a"].fire({icon:"error",title:"無法按讚，請稍後再試"})}},async unlike(e){try{this.isProcessing=!0;const{data:t}=await x["a"].unlike({id:e});if("error"===t.status)throw new Error(t.message);this.tweet.isLiked=!1,this.tweet.likeCount-=1,m["a"].fire({icon:"success",title:"不要取消嘛～～～"}),this.isProcessing=!1}catch(t){this.isProcessing=!1,console.log(t),m["a"].fire({icon:"error",title:"無法取消讚，請稍後再試"})}},async deleteTweet(e){try{this.isProcessing=!0;const t=await J.a.fire({icon:"warning",title:"刪除無法復原，確認刪除？",showCancelButton:!0,cancelButtonColor:"#50b5ff",cancelButtonText:"取消",confirmButtonColor:"#fc5a5a",confirmButtonText:"確認"});if(!t.isConfirmed)return void(this.isProcessing=!1);const{data:s}=await d["a"].delete({id:e});if("error"===s.status)throw new Error(s.message);m["a"].fire({icon:"success",title:"成功刪除推文"}),this.$emit("after-delete-tweet",e),this.isProcessing=!1}catch(t){this.isProcessing=!1,console.log(t),m["a"].fire({icon:"error",title:"無法刪除推文，請稍後再試"})}}},computed:{...Object(c["b"])(["currentUser"])}},K=G,Q=Object(h["a"])(K,I,B,!1,null,null,null),V=Q.exports,W={name:"HomeTweet",mixins:[u["b"]],components:{HomeDetail:V,Spinner:U["a"]},data(){return{tweets:[],description:"",isLoading:!1,isProcessing:!1}},created(){this.fetchTweets()},methods:{async fetchTweets(){try{this.isLoading=!0;const{data:e}=await d["a"].getAll();if("error"===e.status)throw new Error(e.message);this.tweets=e,this.isLoading=!1}catch(e){this.isLoading=!1,console.log(e),m["a"].fire({icon:"error",title:"無法取得推文資料，請稍後再試"})}},async handleSubmit(){try{if(this.isProcessing=!0,this.description=this.description.trim(),!this.description)return m["a"].fire({icon:"warning",title:"推文內容不可空白"}),void(this.isProcessing=!1);if(this.description.length>140)return m["a"].fire({icon:"warning",title:"推文字數不可超過 140 字"}),void(this.isProcessing=!1);const{data:e}=await d["a"].create({description:this.description});if("error"===e.status)throw new Error(e.message);this.description="",m["a"].fire({icon:"success",title:"成功建立推文"}),this.fetchTweets(),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e),m["a"].fire({icon:"error",title:"無法新增推文，請稍後再試"})}},afterDeleteTweet(e){this.tweets=this.tweets.filter(t=>t.id!==e)}},computed:{...Object(c["b"])(["currentUser","renderTweet"])},watch:{renderTweet:{handler:function(){this.fetchTweets()},deep:!0}}},X=W,Y=Object(h["a"])(X,L,D,!1,null,null,null),Z=Y.exports,ee={name:"Home",components:{HomeTweet:Z}},te=ee,se=Object(h["a"])(te,N,R,!1,null,null,null),re=se.exports,ne=function(){var e=this;e._self._c;return e._m(0)},ie=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"not-found__container not-found"},[t("div",{staticClass:"not-found__container__title"},[e._v("404")]),t("img",{attrs:{src:s("c159"),alt:""}}),t("h3",{staticClass:"not-found__container__content"},[e._v("PAGE NOT FOUND")])])}],ae={name:"NotFound"},oe=ae,ce=Object(h["a"])(oe,ne,ie,!1,null,null,null),le=ce.exports;r["a"].use(c["a"]);var _e=new c["a"].Store({state:{currentUser:{id:0,name:"",account:"",email:"",avatar:"",cover:"",introduction:"",role:""},isAuthenticated:!1,token:"",renderTweet:!1,renderPopularUsers:!1,renderFollow:!1,renderProfile:!1,renderUserTweets:!1,renderUserAction:!1},mutations:{setCurrentUser(e,t){e.currentUser={...e.currentUser,...t},e.isAuthenticated=!0,e.token=localStorage.getItem("token")},revokeAuthentication(e){e.currentUser={},e.isAuthenticated=!1,e.token="",localStorage.removeItem("token")},triggerRender(e){e.renderTweet=!e.renderTweet},triggerPopularUsersRender(e){e.renderPopularUsers=!e.renderPopularUsers},triggerFollowRender(e){e.renderFollow=!e.renderFollow},triggerProfileRender(e){e.renderProfile=!e.renderProfile},triggerUserTweetsRender(e){e.renderUserTweets=!e.renderUserTweets},triggerUserActionRender(e){e.renderUserAction=!e.renderUserAction}},actions:{async fetchCurrentUser({commit:e}){try{const{data:t}=await x["a"].currentUser(),{id:s,name:r,account:n,email:i,avatar:a,cover:o,introduction:c,role:l}=t;return e("setCurrentUser",{id:s,name:r,account:n,email:i,avatar:a,cover:o,introduction:c,role:l}),!0}catch(t){return console.log(t),e("revokeAuthentication"),!1}}},modules:{}});r["a"].use(M["a"]);const de=(e,t,s)=>{const r=_e.state.currentUser;r&&"admin"!==r.role?s("/not-found"):s()},ue=(e,t,s)=>{const r=_e.state.currentUser;r&&"user"!==r.role?s("/not-found"):s()},me=[{path:"/",name:"root",redirect:"/users/signin"},{path:"/home",name:"home",component:re,beforeEnter:ue},{path:"/settings/:id",name:"settings",component:()=>s.e("chunk-2d0b3289").then(s.bind(null,"26d3")),beforeEnter:ue},{path:"/tweets/:id",name:"tweets",component:()=>s.e("chunk-133fdb14").then(s.bind(null,"6f1a")),beforeEnter:ue},{path:"/users/signin",name:"user-signin",component:()=>s.e("chunk-11d51b16").then(s.bind(null,"98b3"))},{path:"/users/signup",name:"user-signup",component:()=>s.e("chunk-6349f8fc").then(s.bind(null,"35cd"))},{path:"/users/:id/follow",name:"follow",component:()=>s.e("chunk-62746101").then(s.bind(null,"99b5")),beforeEnter:ue},{path:"/users/:id",name:"profile",component:()=>s.e("chunk-1b9f36d3").then(s.bind(null,"c66d")),beforeEnter:ue},{path:"/admin/signin",name:"admin-signin",component:()=>s.e("chunk-6b95aea4").then(s.bind(null,"d946"))},{path:"/admin/tweets",name:"admin-tweets",component:()=>s.e("chunk-d191a782").then(s.bind(null,"e02a")),beforeEnter:de},{path:"/admin/users",name:"admin-users",component:()=>s.e("chunk-218dfef0").then(s.bind(null,"355a")),beforeEnter:de},{path:"*",name:"not-found",component:le}],pe=new M["a"]({linkExactActiveClass:"active",routes:me});pe.beforeEach(async(e,t,s)=>{const r=localStorage.getItem("token"),n=_e.state.token;let i=_e.state.isAuthenticated;const a=["user-signin","admin-signin","user-signup"];if(r&&r!==n&&(i=await _e.dispatch("fetchCurrentUser")),i||a.includes(e.name)){if(i&&a.includes(e.name)){const e=_e.state.currentUser.role;if("user"===e)return void s("/home");if("admin"===e)return void s("/admin/tweets")}s()}else s("/users/signin")});var fe=pe;s("2fb4");r["a"].config.productionTip=!1,new r["a"]({router:fe,store:_e,render:e=>e(S)}).$mount("#app")},6783:function(e,t,s){"use strict";var r=s("2fa3");t["a"]={create({description:e}){return r["b"].post("/tweets",{description:e})},delete({id:e}){return r["b"].delete("/tweets/"+e)},getAll(){return r["b"].get("/tweets")},getTweet({id:e}){return r["b"].get("/tweets/"+e)},getReplies({tweet_id:e}){return r["b"].get(`/tweets/${e}/replies`)},reply({tweet_id:e,comment:t}){return r["b"].post(`/tweets/${e}/replies`,{comment:t})},deleteReply({tweet_id:e,id:t}){return r["b"].delete(`/tweets/${e}/replies/${t}`)}}},"6fdd":function(e,t,s){e.exports=s.p+"img/setting.759f70ab.svg"},8845:function(e,t,s){"use strict";var r=s("2fa3");t["a"]={addFollowing({id:e}){return r["b"].post("/followships",{id:e})},deleteFollowing({id:e}){return r["b"].delete("/followships/"+e)}}},"9f80":function(e,t,s){e.exports=s.p+"img/like.af4a9149.svg"},a342:function(e,t,s){e.exports=s.p+"img/cover-img.c8d80e36.jpg"},a692:function(e,t,s){e.exports=s.p+"img/avatar.c8c0a825.svg"},c159:function(e,t,s){e.exports=s.p+"img/not-found.120efbeb.svg"},c4d2:function(e,t,s){e.exports=s.p+"img/unlike.b18874f3.svg"},c6c2:function(e,t,s){e.exports=s.p+"img/home.b63425e2.svg"},c718:function(e,t,s){e.exports=s.p+"img/reply.a62cdded.svg"},c768:function(e,t,s){e.exports=s.p+"img/profile.5a642548.svg"},e255:function(e,t,s){e.exports=s.p+"img/ac-logo.e89ab8af.svg"}});
//# sourceMappingURL=app.b1b5b521.js.map