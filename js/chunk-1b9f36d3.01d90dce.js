(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b9f36d3"],{"0a16":function(t,e,s){t.exports=s.p+"img/noti.4133ba32.svg"},"80a8":function(t,e,s){t.exports=s.p+"img/message.6ca0b849.svg"},"97d2":function(t,e,s){t.exports=s.p+"img/add-image.dbeba7b8.svg"},c66d:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"profile__container row flex-nowrap"},[e("div",{staticClass:"profile__container__main"},[t.isLoading?e("Spinner"):[e("Info",{attrs:{user:t.user,"is-current-user":t.currentUser.id===t.user.id,"initial-is-followed":t.isFollowed}}),e("UserAction")]],2)])])},r=[],a=(s("d9e2"),s("4cce")),n=s("2f62"),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"info__container"},[e("div",{staticClass:"info__container__title d-flex"},[e("img",{staticClass:"info__container__title__img cursor-pointer",attrs:{src:s("c9a6"),alt:""},on:{click:function(e){return t.$router.back()}}}),e("div",{staticClass:"info__container__title__box d-flex flex-column"},[e("h5",[t._v(t._s(t.user.name))]),e("div",{staticClass:"info__container__title__box__content"},[t._v(" "+t._s(t.userTweetCount)+" 推文 ")])])]),e("div",{staticClass:"info__container__user d-flex flex-column"},[e("div",{staticClass:"info__container__user__cover-img"},[e("img",{attrs:{src:t._f("emptyCover")(t.user.cover),alt:""}})]),e("EditModal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],on:{close:function(e){t.showModal=!1}}}),e("div",{staticClass:"info__container__user__btn-panel d-flex justify-content-between"},[e("div",{staticClass:"info__container__user__btn-panel__img"},[e("img",{attrs:{src:t._f("emptyImage")(t.user.avatar),alt:""}})]),t.isCurrentUser?e("div",{staticClass:"info__container__user__btn-panel__btn"},[e("button",{staticClass:"info__container__user__btn-panel__btn__self",on:{click:function(e){t.showModal=!0}}},[t._v(" 編輯個人資料 ")])]):e("div",{staticClass:"info__container__user__btn-panel__btn d-flex"},[t._m(0),t._m(1),t.isFollowed?e("button",{staticClass:"info__container__user__btn-panel__btn__other-following",attrs:{disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFollowing(t.user.id)}}},[t._v(" 正在跟隨 ")]):e("button",{staticClass:"info__container__user__btn-panel__btn__other-follow",attrs:{disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFollowing(t.user.id)}}},[t._v(" 跟隨 ")])])]),e("div",{staticClass:"info__container__user__profile d-flex flex-column"},[e("h5",{staticClass:"info__container__user__profile__name"},[t._v(t._s(t.user.name))]),e("div",{staticClass:"info__container__user__profile__account"},[t._v(" "+t._s(t._f("atAccount")(t.user.account))+" ")]),e("div",{staticClass:"info__container__user__profile__introduction"},[t._v(" "+t._s(t.user.introduction)+" ")]),e("div",{staticClass:"info__container__user__profile__follow"},[e("router-link",{staticClass:"info__container__user__profile__follow__num none",attrs:{to:{name:"follow",params:{id:t.user.id},query:{followType:"2"}}}},[t._v(t._s(t.user.followingCount)+" 個")]),e("span",{staticClass:"info__container__user__profile__follow__unit"},[t._v(" 跟隨中")]),e("router-link",{staticClass:"info__container__user__profile__follow__num none",attrs:{to:{name:"follow",params:{id:t.user.id},query:{followType:"1"}}}},[t._v(t._s(t.user.followerCount)+" 位")]),e("span",{staticClass:"info__container__user__profile__follow__unit"},[t._v(" 跟隨者")])],1)])],1)])},c=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"info__container__user__btn-panel__btn__other-icon"},[e("img",{attrs:{src:s("80a8"),alt:""}})])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"info__container__user__btn-panel__btn__other-icon"},[e("img",{attrs:{src:s("0a16"),alt:""}})])}],l=s("8845"),_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"edit-modal__overlay"},[e("div",{staticClass:"edit-modal__container d-flex flex-column"},[e("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.updateProfile.apply(null,arguments)}}},[e("div",{staticClass:"edit-modal__container__top d-flex align-items-center"},[e("div",{staticClass:"edit-modal__container__top__close cursor-pointer",on:{click:function(e){return t.$emit("close")}}},[e("img",{staticClass:"edit-modal__container__top__close__img",attrs:{src:s("2930"),alt:""}})]),e("h5",{staticClass:"edit-modal__container__top__title"},[t._v("編輯個人資料")]),e("button",{staticClass:"edit-modal__container__top__save",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" "+t._s(t.isProcessing?"處理中":"儲存")+" ")])]),e("div",{staticClass:"edit-modal__container__cover"},[e("input",{staticClass:"d-none",attrs:{type:"file",id:"cover-input",name:"cover",accept:"image/*"},on:{change:t.handleCoverChange}}),e("label",{attrs:{for:"cover-input"}},[e("img",{staticClass:"edit-modal__container__cover__img",attrs:{src:t._f("emptyCover")(t.profile.cover),alt:""}})]),e("div",{staticClass:"edit-modal__container__cover__icon d-flex"},[t._m(0),e("div",{staticClass:"edit-modal__container__cover__icon__close cursor-pointer",on:{click:t.initializeCover}},[e("img",{attrs:{src:s("2930"),alt:""}})])]),e("div",{staticClass:"edit-modal__container__avatar"},[e("label",{attrs:{for:"avatar-input"}},[e("img",{staticClass:"edit-modal__container__avatar__img",attrs:{src:t._f("emptyImage")(t.profile.avatar),alt:""}}),e("img",{staticClass:"edit-modal__container__avatar__icon align-center",attrs:{src:s("97d2"),alt:""}})]),e("input",{staticClass:"d-none",attrs:{type:"file",id:"avatar-input",name:"avatar",accept:"image/*"},on:{change:t.handleAvatarChange}})]),e("div",{staticClass:"edit-modal__container__form"},[e("div",{staticClass:"edit-modal__container__form__name d-flex flex-column"},[e("label",{attrs:{for:"name"}},[t._v("名稱")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.profile.name,expression:"profile.name"}],class:[{error:!t.profile.name||t.profile.name.length>50}],attrs:{type:"text",id:"name",name:"name"},domProps:{value:t.profile.name},on:{input:function(e){e.target.composing||t.$set(t.profile,"name",e.target.value)}}})]),e("div",{staticClass:"d-flex"},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.profile.name,expression:"!profile.name"}],staticClass:"edit-modal__container__edit__error"},[t._v("名稱不可為空白")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.profile.name.length>50,expression:"profile.name.length > 50"}],staticClass:"edit-modal__container__edit__error"},[t._v("名稱不可超過 50 字")]),e("span",{staticClass:"edit-modal__container__edit__letter-count"},[t._v(t._s(t.profile.name.length)+"/50")])]),e("div",{staticClass:"edit-modal__container__form__textarea d-flex flex-column"},[e("label",{attrs:{for:"introduction"}},[t._v("自我介紹")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.profile.introduction,expression:"profile.introduction"}],staticClass:"scrollbar",class:{error:t.profile.introduction.length>160},attrs:{type:"text",name:"introduction"},domProps:{value:t.profile.introduction},on:{input:function(e){e.target.composing||t.$set(t.profile,"introduction",e.target.value)}}})]),e("div",{staticClass:"d-flex"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.profile.introduction.length>160,expression:"profile.introduction.length > 160"}],staticClass:"edit-modal__container__edit__error"},[t._v("自我介紹不可超過 160 字")]),e("span",{staticClass:"edit-modal__container__edit__letter-count"},[t._v(t._s(t.profile.introduction.length)+"/160")])])])])])])])},d=[function(){var t=this,e=t._self._c;return e("label",{staticClass:"edit-modal__container__cover__icon__add",attrs:{for:"cover-input"}},[e("img",{attrs:{src:s("97d2"),alt:""}})])}],u=s("2708"),f=s("2fa3"),w={name:"EditModal",mixins:[u["b"]],data(){return{profile:{},isProcessing:!1}},created(){this.getProfile()},methods:{getProfile(){this.profile={id:this.currentUser.id,name:this.currentUser.name,avatar:this.currentUser.avatar||"",cover:this.currentUser.cover||"",introduction:this.currentUser.introduction||""}},handleCoverChange(t){const{files:e}=t.target;if(!e.length)return this.profile.cover;const s=window.URL.createObjectURL(e[0]);this.profile.cover=s},handleAvatarChange(t){const{files:e}=t.target;if(!e.length)return this.profile.avatar;const s=window.URL.createObjectURL(e[0]);this.profile.avatar=s},async updateProfile(t){try{if(!this.profile.name)return void f["a"].fire({icon:"warning",title:"名稱不可為空白"});const e=t.target,s=new FormData(e);this.isProcessing=!0;const{data:i}=await a["a"].update({id:this.profile.id,formData:s});if("error"===i.status)throw new Error(i.message);f["a"].fire({icon:"success",title:"已更新個人資料"}),this.$store.commit("triggerPopularUsersRender"),this.$store.commit("triggerUserActionRender"),this.$store.dispatch("fetchCurrentUser"),this.$emit("close"),this.$parent.$parent.fetchUsers(this.profile.id),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e);const t=e.response.data.message;"Please upload an image."===t?f["a"].fire({icon:"error",title:"請確認上傳檔案格式是圖片"}):f["a"].fire({icon:"error",title:"無法更新資料，請稍後再試"})}},initializeCover(){document.querySelector("#cover-input").value="",this.profile.cover=this.currentUser.cover}},computed:{...Object(n["b"])(["currentUser"])}},p=w,h=s("2877"),m=Object(h["a"])(p,_,d,!1,null,null,null),v=m.exports,g={name:"Info",mixins:[u["b"],u["c"],u["a"]],components:{EditModal:v},props:{user:{type:Object,required:!0},isCurrentUser:{type:Boolean,required:!0},initialIsFollowed:{type:Boolean,required:!0}},data(){return{userTweetCount:0,isFollowed:this.initialIsFollowed,isProcessing:!1,showModal:!1}},created(){const{id:t}=this.$route.params;this.fetchUserTweets(t)},methods:{async fetchUserTweets(t){try{const{data:e}=await a["a"].get.tweets({id:t});if("error"===e.status)throw new Error(e.message);this.userTweetCount=e.length}catch(e){console.log(e),f["a"].fire({icon:"error",title:"無法取得推文資料，請稍後再試"})}},async addFollowing(t){try{this.isProcessing=!0;const{data:e}=await l["a"].addFollowing({id:t});if("error"===e.status)throw new Error(e.message);this.isFollowed=!0,this.user.followerCount+=1,f["a"].fire({icon:"success",title:"追蹤成功！"}),this.$store.commit("triggerPopularUsersRender"),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e),f["a"].fire({icon:"error",title:"無法追蹤，請稍後再試"})}},async deleteFollowing(t){try{this.isProcessing=!0;const{data:e}=await l["a"].deleteFollowing({id:t});if("error"===e.status)throw new Error(e.message);this.isFollowed=!1,this.user.followerCount-=1,f["a"].fire({icon:"success",title:"取消追蹤成功！"}),this.$store.commit("triggerPopularUsersRender"),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e),f["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"})}}},computed:{...Object(n["b"])(["currentUser","renderUserTweets"])},watch:{initialIsFollowed(t){this.isFollowed=t},user(t){this.user=t},renderUserTweets:{handler:function(){const{id:t}=this.$route.params;this.fetchUserTweets(t)},deep:!0}}},C=g,k=Object(h["a"])(C,o,c,!1,null,null,null),b=k.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"user__action__container"},[e("div",{staticClass:"nav-tab__container d-flex"},t._l(t.tabs,(function(s){return e("div",{key:s.id,staticClass:"nav-tab__container__tab"},[e("button",{staticClass:"nav-tab__container__tab__btn",class:{active:s.id===t.currentTab},on:{click:function(e){return t.toggleTab(s.id)}}},[t._v(" "+t._s(s.title)+" ")])])})),0),e("div",[1===t.currentTab?e("UserTweet"):t._e(),2===t.currentTab?e("UserReply"):t._e(),3===t.currentTab?e("UserLike"):t._e()],1)])},T=[],x=function(){var t=this,e=t._self._c;return t.isLoading?e("Spinner"):e("div",{staticClass:"user-like__container scrollbar"},[0===this.likeTweets.length?e("div",{staticClass:"user-like__container__no__content text-center"},[t._v(" 尚無喜歡的推文 ")]):t._l(t.likeTweets,(function(i){return e("div",{key:i.id,staticClass:"user-like__container__tweet d-flex"},[e("router-link",{attrs:{to:{name:"profile",params:{id:i.userId}}}},[e("img",{staticClass:"user-like__container__img",attrs:{src:t._f("emptyImage")(i.avatar),alt:""}})]),e("div",{staticClass:"user-like__container__text"},[e("div",{staticClass:"user-like__container__content d-flex justify-content-between"},[e("div",[e("router-link",{staticClass:"user-like__container__name none",attrs:{to:{name:"profile",params:{id:i.userId}}}},[t._v(t._s(i.name))]),e("span",{staticClass:"user-like__container__account"},[t._v(" "+t._s(t._f("atAccount")(i.account))+" ")]),e("span",{staticClass:"user-like__container__dot"},[t._v("‧")]),e("span",{staticClass:"user-like__container__createdAt"},[t._v(" "+t._s(t._f("fromNow")(i.createdAt))+" ")])],1),e("button",{directives:[{name:"show",rawName:"v-show",value:t.currentUser.id===i.userId,expression:"currentUser.id === likeTweet.userId"}],staticClass:"user-like__container__delete",attrs:{disabled:t.isProcessing},on:{click:function(e){return t.deleteTweet(i.tweetId)}}},[t._v(" × ")])]),e("div",{staticClass:"user-like__container__description cursor-pointer",on:{click:function(e){return t.leadToTweetDetail(i.tweetId)}}},[t._v(" "+t._s(i.description)+" ")]),e("div",{staticClass:"user-like__container__action d-flex"},[e("div",{staticClass:"user-like__container__action__reply"},[e("button",{on:{click:function(e){return t.fetchTweet(i.tweetId)}}},[e("img",{staticClass:"user-like__container__action__reply__button",attrs:{src:s("c718"),alt:""}})]),e("span",{staticClass:"user-like__container__action__reply__count num-font"},[t._v(t._s(i.replyCount))])]),e("div",{staticClass:"user-like__container__action__like"},[i.isLiked?e("button",{attrs:{disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteLike(i.tweetId)}}},[e("img",{staticClass:"user-like__container__action__like__button",attrs:{src:s("9f80"),alt:""}})]):e("button",{attrs:{disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLike(i.tweetId)}}},[e("img",{staticClass:"user-like__container__action__unlike__button",attrs:{src:s("c4d2"),alt:""}})]),e("span",{staticClass:"user-like__container__action__like__count num-font"},[t._v(t._s(i.likeCount))])])])])],1)})),t.isLoading?e("Spinner"):e("ReplyModal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],attrs:{"reply-tweet":t.replyTweet},on:{"close-modal":function(e){t.showModal=!1}}})],2)},U=[],P=(s("14d9"),s("6783")),L=s("2375"),$=s("2797"),I=s("3d20"),A=s.n(I),R={name:"UserLike",mixins:[u["b"],u["a"],u["c"]],components:{Spinner:L["a"],ReplyModal:$["a"]},data(){return{likeTweets:[],replyTweet:{id:0,description:"",createdAt:"",replyCount:0,likeCount:0,isLiked:0,User:{id:0,name:"",account:"",avatar:""}},showModal:!1,isLoading:!1,isProcessing:!1}},created(){const{id:t}=this.$route.params;this.fetchLikeTweets(t)},methods:{async fetchLikeTweets(t){try{this.isLoading=!0;const{data:e}=await a["a"].get.likes({id:t});if("error"===e.status)throw new Error(e.message);this.likeTweets=e.map(t=>({id:t.id,tweetId:t.TweetId,userId:t.Tweet.User.id,createdAt:t.createdAt,name:t.Tweet.User.name,account:t.Tweet.User.account,avatar:t.Tweet.User.avatar,description:t.Tweet.description,replyCount:t.Tweet.replyCount,likeCount:t.Tweet.likeCount,isLiked:t.Tweet.isLiked})),this.isLoading=!1}catch(e){this.isLoading=!1,console.log(e),f["a"].fire({icon:"error",title:"無法載入喜歡的推文，請稍後再試"})}},async addLike(t){try{this.isProcessing=!0;const{data:e}=await a["a"].like({id:t});if("error"===e.status)throw new Error(e.message);this.likeTweets=this.likeTweets.map(e=>e.tweetId!==t?e:{...e,isLiked:1,likeCount:e.likeCount+1}),f["a"].fire({icon:"success",title:"按讚成功！你真是個好人～"}),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e),f["a"].fire({icon:"error",title:"無法按讚，請稍後再試"})}},async deleteLike(t){try{this.isProcessing=!0;const{data:e}=await a["a"].unlike({id:t});if("error"===e.status)throw new Error(e.message);this.currentUser.id.toString()===this.$route.params.id.toString()&&(this.likeTweets=this.likeTweets.filter(e=>e.tweetId!==t)),this.likeTweets=this.likeTweets.map(e=>e.tweetId!==t?e:{...e,isLiked:0,likeCount:e.likeCount-1}),f["a"].fire({icon:"success",title:"不要取消嘛～～～"}),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e),f["a"].fire({icon:"error",title:"無法取消讚，請稍後再試"})}},async fetchTweet(t){try{this.isLoading=!0,this.showModal=!0;const{data:e}=await P["a"].getTweet({id:t});if("error"===e.status)throw new Error(e.message);this.replyTweet=e,this.isLoading=!1}catch(e){this.isLoading=!1,console.log(e),f["a"].fire({icon:"error",title:"無法取得推文資料，請稍後再試"})}},async deleteTweet(t){try{this.isProcessing=!0;const e=await A.a.fire({icon:"warning",title:"刪除無法復原，確認刪除？",showCancelButton:!0,cancelButtonColor:"#50b5ff",cancelButtonText:"取消",confirmButtonColor:"#fc5a5a",confirmButtonText:"確認"});if(!e.isConfirmed)return void(this.isProcessing=!1);const{data:s}=await P["a"].delete({id:t});if("error"===s.status)throw new Error(s.message);this.likeTweets=this.likeTweets.filter(e=>e.tweetId!==t),f["a"].fire({icon:"success",title:"成功刪除推文"}),this.$store.commit("triggerUserTweetsRender"),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e),f["a"].fire({icon:"error",title:"無法刪除推文，請稍後再試"})}},leadToTweetDetail(t){this.$router.push({name:"tweets",params:{id:t}})}},computed:{...Object(n["b"])(["currentUser","renderUserAction"])},watch:{renderUserAction:{handler:function(){const{id:t}=this.$route.params;this.fetchLikeTweets(t)},deep:!0},$route:{handler:function(){const{id:t}=this.$route.params;this.fetchLikeTweets(t)},deep:!0}}},F=R,M=Object(h["a"])(F,x,U,!1,null,null,null),j=M.exports,E=function(){var t=this,e=t._self._c;return t.isLoading?e("Spinner"):e("div",[0===t.repliedTweets.length?e("div",{staticClass:"home-tweet__container__tweet-list__blank"},[t._v(" 目前沒有回覆 ")]):e("div",{staticClass:"user-reply__container d-flex flex-column"},[e("div",{staticClass:"user-reply__container__reply-list scrollbar"},t._l(t.repliedTweets,(function(s){return e("div",{key:s.id,staticClass:"user-reply__container__reply-list__tweet d-flex"},[e("div",[e("img",{staticClass:"user-reply__container__reply-list__tweet__avatar",attrs:{src:t._f("emptyImage")(s.User.avatar),alt:""}})]),e("div",{staticClass:"user-reply__container__reply-list__tweet__text d-flex flex-column"},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"reply-list__tweet__title d-flex"},[e("div",{staticClass:"reply-list__tweet__title__name none"},[t._v(" "+t._s(s.User.name)+" ")]),e("div",{staticClass:"reply-list__tweet__title__account"},[t._v(" "+t._s(t._f("atAccount")(s.User.account))+" ")]),e("span",{staticClass:"reply-list__tweet__title__separator"},[t._v("・")]),e("div",{staticClass:"reply-list__tweet__title__createdAt"},[t._v(" "+t._s(t._f("fromNow")(s.createdAt))+" ")])]),t.currentUser.id===s.User.id?e("button",{staticClass:"user-tweet__container__tweet-list__tweet__delete",attrs:{disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteReply(s.Tweet.id,s.id)}}},[t._v(" × ")]):t._e()]),e("div",{staticClass:"user-reply__container__reply-list__tweet__text__reply d-flex"},[e("span",{staticClass:"reply-list__tweet__reply"},[t._v("回覆")]),e("router-link",{attrs:{to:{name:"tweets",params:{id:s.Tweet.id}}}},[e("span",{staticClass:"reply-list__tweet__reply-to"},[t._v(t._s(t._f("atAccount")(s.Tweet.User.account)))])])],1),e("div",{staticClass:"user-reply__container__reply-list__tweet__text__description"},[t._v(" "+t._s(s.comment)+" ")])])])})),0)])])},B=[],O={name:"UserReply",mixins:[u["b"],u["c"],u["a"]],components:{Spinner:L["a"]},data(){return{isProcessing:!1,isLoading:!0,repliedTweets:[]}},created(){const{id:t}=this.$route.params;this.fetchRepliedTweets(t)},methods:{async fetchRepliedTweets(t){try{this.isLoading=!0;const{data:e}=await a["a"].get.replied({id:t});this.repliedTweets=e,this.isLoading=!1}catch(e){this.isProcessing=!1,console.log(e),f["a"].fire({icon:"error",title:"無法取得回覆資料"})}},async deleteReply(t,e){try{this.isProcessing=!0;const s=await A.a.fire({icon:"warning",title:"刪除無法復原，確認刪除？",showCancelButton:!0,cancelButtonColor:"#50b5ff",cancelButtonText:"取消",confirmButtonColor:"#fc5a5a",confirmButtonText:"確認"});if(!s.isConfirmed)return void(this.isProcessing=!1);const{data:i}=await P["a"].deleteReply({tweet_id:t,id:e});if("error"===i.status)throw new Error(i.message);this.repliedTweets=this.repliedTweets.filter(t=>t.id!==e),f["a"].fire({icon:"success",title:"成功刪除回覆"}),this.isProcessing=!1}catch(s){this.isProcessing=!1,console.log(s),f["a"].fire({icon:"error",title:"無法刪除回覆，請稍後再試"})}}},computed:{...Object(n["b"])(["currentUser","renderUserAction"])},watch:{renderUserAction:{handler:function(){const{id:t}=this.$route.params;this.fetchRepliedTweets(t)},deep:!0},$route:{handler:function(){const{id:t}=this.$route.params;this.fetchRepliedTweets(t)},deep:!0}}},N=O,S=Object(h["a"])(N,E,B,!1,null,null,null),D=S.exports,q=function(){var t=this,e=t._self._c;return t.isLoading?e("Spinner"):e("div",{staticClass:"user-tweet__container"},[e("div",{staticClass:"user-tweet__container__tweet-list scrollbar"},[0===t.tweets.length?e("div",{staticClass:"home-tweet__container__tweet-list__blank"},[t._v(" 目前沒有推文 ")]):t._l(t.tweets,(function(i){return e("div",{key:i.id,staticClass:"user-tweet__container__tweet-list__tweet d-flex"},[e("div",[e("img",{staticClass:"user-tweet__container__tweet-list__tweet__avatar",attrs:{src:t._f("emptyImage")(i.User.avatar),alt:""}})]),e("div",{staticClass:"user-tweet__container__tweet-list__tweet__text d-flex flex-column"},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"tweet-list__tweet__title d-flex"},[e("div",{staticClass:"tweet-list__tweet__title__name"},[e("div",[t._v(" "+t._s(i.User.name)+" ")])]),e("div",{staticClass:"tweet-list__tweet__title__account"},[t._v(" "+t._s(t._f("atAccount")(i.User.account))+" ")]),e("span",{staticClass:"tweet-list__tweet__title__separator"},[t._v("・")]),e("div",{staticClass:"tweet-list__tweet__title__createdAt"},[t._v(" "+t._s(t._f("fromNow")(i.createdAt))+" ")])]),e("button",{directives:[{name:"show",rawName:"v-show",value:t.currentUser.id===i.User.id,expression:"currentUser.id === tweet.User.id"}],staticClass:"user-tweet__container__tweet-list__tweet__delete",attrs:{disabled:t.isProcessing},on:{click:function(e){return t.deleteTweet(i.id)}}},[t._v(" × ")])]),e("div",{staticClass:"user-tweet__container__tweet-list__tweet__text__description cursor-pointer",on:{click:function(e){return t.checkTweetReplies(i.id)}}},[t._v(" "+t._s(i.description)+" ")]),e("div",{staticClass:"tweet-list__tweet__action d-flex"},[e("div",{staticClass:"tweet-list__tweet__action__reply d-flex"},[e("img",{staticClass:"tweet-list__tweet__action__reply__icon cursor-pointer",attrs:{src:s("c718"),alt:""},on:{click:function(e){return t.fetchTweet(i.id)}}}),e("div",{staticClass:"tweet-list__tweet__action__reply__count num-font"},[t._v(" "+t._s(i.replyCount)+" ")])]),e("div",{staticClass:"tweet-list__tweet__action__like d-flex"},[i.isLiked?e("button",{attrs:{disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.unlike(i.id)}}},[e("img",{staticClass:"tweet-list__tweet__action__like__icon cursor-pointer",attrs:{src:s("9f80"),alt:""}})]):e("button",{attrs:{disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.like(i.id)}}},[e("img",{staticClass:"tweet-list__tweet__action__like__icon cursor-pointer",attrs:{src:s("c4d2"),alt:""}})]),e("div",{staticClass:"tweet-list__tweet__action__like__count num-font"},[t._v(" "+t._s(i.likeCount)+" ")])])])])])}))],2),t.isLoading?e("Spinner"):e("ReplyModal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],attrs:{"reply-tweet":t.replyTweet},on:{"close-modal":function(e){t.showModal=!1}}})],1)},z=[],J={name:"UserTweet",mixins:[u["b"],u["c"],u["a"]],components:{ReplyModal:$["a"],Spinner:L["a"]},data(){return{tweets:[],replyTweet:{id:0,description:"",createdAt:"",replyCount:0,likeCount:0,isLiked:0,User:{id:0,name:"",account:"",avatar:""}},showModal:!1,isLoading:!1,isProcessing:!1}},created(){const{id:t}=this.$route.params;this.fetchUserTweets(t)},methods:{checkTweetReplies(t){this.$router.push({name:"tweets",params:{id:t}})},async fetchUserTweets(t){try{this.isLoading=!0;const{data:e}=await a["a"].get.tweets({id:t});if("error"===e.status)throw new Error(e.message);this.tweets=e,this.isLoading=!1}catch(e){this.isLoading=!1,console.log(e),f["a"].fire({icon:"error",title:"無法取得推文資料，請稍後再試"})}},async fetchTweet(t){try{this.isLoading=!0,this.showModal=!0;const{data:e}=await P["a"].getTweet({id:t});if("error"===e.status)throw new Error(e.message);this.replyTweet=e,this.isLoading=!1}catch(e){this.isLoading=!1,console.log(e),f["a"].fire({icon:"error",title:"無法取得推文資料，請稍後再試"})}},async like(t){try{this.isProcessing=!0;const{data:e}=await a["a"].like({id:t});if("error"===e.status)throw new Error(e.message);this.tweets=this.tweets.map(e=>e.id!==t?e:{...e,isLiked:!0,likeCount:e.likeCount+1}),f["a"].fire({icon:"success",title:"按讚成功！你真是個好人～"}),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e),f["a"].fire({icon:"error",title:"無法按讚，請稍後再試"})}},async unlike(t){try{this.isProcessing=!0;const{data:e}=await a["a"].unlike({id:t});if("error"===e.status)throw new Error(e.message);this.tweets=this.tweets.map(e=>e.id!==t?e:{...e,isLiked:!1,likeCount:e.likeCount-1}),f["a"].fire({icon:"success",title:"不要取消嘛～～～"}),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e),f["a"].fire({icon:"error",title:"無法取消喜歡，請稍後再試"})}},async deleteTweet(t){try{this.isProcessing=!0;const e=await A.a.fire({icon:"warning",title:"刪除無法復原，確認刪除？",showCancelButton:!0,cancelButtonColor:"#50b5ff",cancelButtonText:"取消",confirmButtonColor:"#fc5a5a",confirmButtonText:"確認"});if(!e.isConfirmed)return void(this.isProcessing=!1);const{data:s}=await P["a"].delete({id:t});if("error"===s.status)throw new Error(s.message);this.tweets=this.tweets.filter(e=>e.id!==t),f["a"].fire({icon:"success",title:"成功刪除推文"}),this.$store.commit("triggerUserTweetsRender"),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e),f["a"].fire({icon:"error",title:"無法刪除推文，請稍後再試"})}}},computed:{...Object(n["b"])(["currentUser","renderUserAction"])},watch:{renderUserAction:{handler:function(){const{id:t}=this.$route.params;this.fetchUserTweets(t)},deep:!0},$route:{handler:function(){const{id:t}=this.$route.params;this.fetchUserTweets(t)},deep:!0}}},G=J,H=Object(h["a"])(G,q,z,!1,null,null,null),K=H.exports,Q={name:"UserAction",components:{UserTweet:K,UserLike:j,UserReply:D},data(){return{tabs:[{id:1,title:"推文"},{id:2,title:"回覆"},{id:3,title:"喜歡的內容"}],currentTab:1}},methods:{toggleTab(t){this.currentTab=t}}},V=Q,W=Object(h["a"])(V,y,T,!1,null,null,null),X=W.exports,Y={name:"Profile",components:{Info:b,UserAction:X,Spinner:L["a"]},data(){return{user:{id:0,name:"",account:"",avatar:"",cover:"",introduction:"",followerCount:"",followingCount:""},isFollowed:!1,isLoading:!0}},created(){const{id:t}=this.$route.params;this.fetchUsers(t),this.fetchFollowers(t)},beforeRouteUpdate(t,e,s){const{id:i}=t.params;this.fetchUsers(i),this.fetchFollowers(i),s()},methods:{async fetchUsers(t){try{const{data:e}=await a["a"].get.profile({id:t});if("error"===e.status)return new Error(e.message);this.user=e,this.user.id=e.id,this.isLoading=!1}catch(e){this.isLoading=!1,console.log(e),f["a"].fire({icon:"error",title:"無法取得使用者資料"})}},async fetchFollowers(t){try{const{data:e}=await a["a"].get.followers({id:t});this.isFollowed=e.some(t=>this.currentUser.id===t.followerId)}catch(e){console.log(e),f["a"].fire({icon:"error",title:"無法取得跟隨您的使用者資料"})}}},computed:{...Object(n["b"])(["currentUser","renderProfile"])},watch:{renderProfile:{handler:function(){const{id:t}=this.$route.params;this.fetchFollowers(t),this.fetchUsers(t)},deep:!0}}},Z=Y,tt=Object(h["a"])(Z,i,r,!1,null,null,null);e["default"]=tt.exports},c9a6:function(t,e,s){t.exports=s.p+"img/back.3406615e.svg"}}]);
//# sourceMappingURL=chunk-1b9f36d3.01d90dce.js.map