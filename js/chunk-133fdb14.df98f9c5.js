(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-133fdb14"],{"6f1a":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"home__container row flex-nowrap"},[e("TweetDetail",{attrs:{"is-loading":t.isLoading,tweet:t.tweet,replies:t.replies},on:{"after-delete-reply":t.afterDeleteReply,"after-like-tweet":t.afterLikeTweet,"after-unlike-tweet":t.afterUnlikeTweet}})],1)])},a=[],r=(i("d9e2"),i("6783")),o=i("2f62"),n=(i("14d9"),function(){var t=this,e=t._self._c;return t.isLoading?e("Spinner"):e("div",{staticClass:"home-tweet__container d-flex flex-column"},[e("div",{staticClass:"home-tweet__container__title d-flex"},[e("img",{staticClass:"home-tweet__container__title__img cursor-pointer",attrs:{src:i("c9a6"),alt:""},on:{click:function(e){return t.$router.push("/home")}}}),e("h4",[t._v("推文")])]),e("div",{staticClass:"scrollbar"},[e("div",{staticClass:"home-tweet__container__tweet d-flex flex-column"},[e("div",{staticClass:"home-tweet__container__tweet__title d-flex"},[e("router-link",{attrs:{to:{name:"profile",params:{id:t.tweet.user.id}}}},[e("img",{staticClass:"home-tweet__container__tweet__title__img",attrs:{src:t._f("emptyImage")(t.tweet.user.avatar),alt:""}})]),e("div",{staticClass:"home-tweet__container__tweet__title__box"},[e("router-link",{staticClass:"home-tweet__container__tweet__title__box__name none",attrs:{to:{name:"profile",params:{id:t.tweet.user.id}}}},[t._v(" "+t._s(t.tweet.user.name)+" ")]),e("div",{staticClass:"home-tweet__container__tweet__title__box__account"},[t._v(" "+t._s(t._f("atAccount")(t.tweet.user.account))+" ")])],1)],1),e("div",{staticClass:"home-tweet__container__tweet__description"},[t._v(" "+t._s(t.tweet.description)+" ")]),e("div",{staticClass:"home-tweet__container__tweet__createdAt"},[t._v(" "+t._s(t._f("time")(t.tweet.createdAt))+"・"+t._s(t._f("date")(t.tweet.createdAt))+" ")])]),e("div",{staticClass:"home-tweet__container__tweet__num d-flex"},[e("div",{staticClass:"home-tweet__container__tweet__num__box"},[e("span",{staticClass:"home-tweet__container__tweet__num__box__count num-font"},[t._v(t._s(t.tweet.replyCount))]),e("span",{staticClass:"home-tweet__container__tweet__num__box__unit"},[t._v("回覆")])]),e("div",{staticClass:"home-tweet__container__tweet__num__box"},[e("span",{staticClass:"home-tweet__container__tweet__num__box__count num-font"},[t._v(t._s(t.tweet.likeCount))]),e("span",{staticClass:"home-tweet__container__tweet__num__box__unit"},[t._v("喜歡次數")])])]),e("div",{staticClass:"home-tweet__container__tweet d-flex"},[e("button",{staticClass:"home-tweet__container__tweet__icon"},[e("img",{attrs:{src:i("c718"),alt:""},on:{click:function(e){return t.fetchTweet(t.tweet.id)}}})]),t.tweet.isLiked?e("button",{staticClass:"home-tweet__container__tweet__icon",attrs:{disabled:t.isProcessing},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.unlike(t.tweet.id)}}},[e("img",{attrs:{src:i("9f80"),alt:""}})]):e("button",{staticClass:"home-tweet__container__tweet__icon",attrs:{disabled:t.isProcessing},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.like(t.tweet.id)}}},[e("img",{attrs:{src:i("c4d2"),alt:""}})])]),e("div",{staticClass:"home-tweet__container__reply-list"},[t.replies.length?t._l(t.replies,(function(i){return e("div",{key:i.id,staticClass:"home-tweet__container__tweet-list__tweet d-flex"},[e("router-link",{attrs:{to:{name:"profile",params:{id:i.User.id}}}},[e("img",{staticClass:"home-tweet__container__tweet-list__tweet__avatar",attrs:{src:t._f("emptyImage")(i.User.avatar),alt:""}})]),e("div",{staticClass:"home-tweet__container__tweet-list__tweet__text d-flex flex-column"},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"tweet-list__tweet__title d-flex"},[e("router-link",{staticClass:"tweet-list__tweet__title__name none",attrs:{to:{name:"profile",params:{id:i.User.id}}}},[t._v(" "+t._s(i.User.name)+" ")]),e("div",{staticClass:"tweet-list__tweet__title__account"},[t._v(" "+t._s(t._f("atAccount")(i.User.account))+" ")]),e("span",{staticClass:"tweet-list__tweet__title__separator"},[t._v("・")]),e("div",{staticClass:"tweet-list__tweet__title__createdAt"},[t._v(" "+t._s(t._f("fromNow")(i.createdAt))+" ")])],1),e("button",{directives:[{name:"show",rawName:"v-show",value:t.currentUser.id===i.User.id,expression:"currentUser.id === reply.User.id"}],staticClass:"home-tweet__container__tweet-list__tweet__delete__reply",attrs:{disabled:t.isProcessing},on:{click:function(e){return t.deleteReply(t.tweet.id,i.id)}}},[t._v(" × ")])]),e("div",{staticClass:"home-tweet__container__tweet-list__tweet__text__reply d-flex"},[e("span",{staticClass:"tweet-list__tweet__reply"},[t._v("回覆")]),e("router-link",{attrs:{to:{name:"profile",params:{id:i.Tweet.User.id}}}},[e("span",{staticClass:"tweet-list__tweet__reply-to"},[t._v(t._s(t._f("atAccount")(i.Tweet.User.account)))])])],1),e("div",{staticClass:"home-tweet__container__tweet-list__tweet__text__reply__description"},[t._v(" "+t._s(i.comment)+" ")])])],1)})):e("div",{staticClass:"home-tweet__container__tweet-list__blank"},[t._v(" 目前沒有回覆 ")])],2)]),t.modalIsLoading?e("Spinner"):e("ReplyModal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],attrs:{"reply-tweet":t.replyTweet},on:{"close-modal":function(e){t.showModal=!1}}})],1)}),_=[],c=i("4cce"),l=i("2375"),w=i("2797"),d=i("2708"),u=i("2fa3"),h=i("3d20"),m=i.n(h),p={name:"TweetDetail",mixins:[d["b"],d["c"],d["a"]],components:{ReplyModal:w["a"],Spinner:l["a"]},props:{tweet:{type:Object,required:!0},replies:{type:Array,required:!0},isLoading:{type:Boolean,required:!0}},data(){return{isLiked:this.tweet.isLiked,isProcessing:!1,modalIsLoading:!1,showModal:!1,replyTweet:{id:0,description:"",createdAt:"",replyCount:0,likeCount:0,isLiked:0,User:{id:0,name:"",account:"",avatar:""}}}},methods:{async fetchTweet(t){try{this.modalIsLoading=!0,this.showModal=!0;const{data:e}=await r["a"].getTweet({id:t});if("error"===e.status)throw new Error(e.message);this.replyTweet=e,this.modalIsLoading=!1}catch(e){this.modalIsLoading=!1,console.log(e),u["a"].fire({icon:"error",title:"無法取得推文資料，請稍後再試"})}},async like(t){try{this.isProcessing=!0;const{data:e}=await c["a"].like({id:t});if("error"===e.status)throw new Error(e.message);this.$emit("after-like-tweet",t),u["a"].fire({icon:"success",title:"按讚成功！你真是個好人～"}),this.$parent.fetchTweet(t),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e),u["a"].fire({icon:"error",title:"無法按讚，請稍後再試"})}},async unlike(t){try{this.isProcessing=!0;const{data:e}=await c["a"].unlike({id:t});if("error"===e.status)throw new Error(e.message);this.$emit("after-unlike-tweet",t),u["a"].fire({icon:"success",title:"不要取消嘛～～～"}),this.$parent.fetchTweet(t),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e),u["a"].fire({icon:"error",title:"無法取消喜歡，請稍後再試"})}},async deleteReply(t,e){try{this.isProcessing=!0;const i=await m.a.fire({icon:"warning",title:"刪除無法復原，確認刪除？",showCancelButton:!0,cancelButtonColor:"#50b5ff",cancelButtonText:"取消",confirmButtonColor:"#fc5a5a",confirmButtonText:"確認"});if(!i.isConfirmed)return void(this.isProcessing=!1);const{data:s}=await r["a"].deleteReply({tweet_id:t,id:e});if("error"===s.status)throw new Error(s.message);u["a"].fire({icon:"success",title:"成功刪除回覆"}),this.$emit("after-delete-reply",e),this.$parent.fetchTweet(t),this.isProcessing=!1}catch(i){this.isProcessing=!1,console.log(i),u["a"].fire({icon:"error",title:"無法刪除回覆，請稍後再試"})}}},computed:{...Object(o["b"])(["currentUser"])}},f=p,v=i("2877"),g=Object(v["a"])(f,n,_,!1,null,null,null),C=g.exports,y={name:"Home",components:{TweetDetail:C},data(){return{tweet:{id:0,description:"",createdAt:"",replyCount:0,likeCount:0,isLiked:0,user:{}},replies:[],isLoading:!1}},created(){const{id:t}=this.$route.params;this.fetchTweet(t),this.fetchTweetReplies(t)},beforeRouteUpdate(t,e,i){const{id:s}=t.params;this.fetchTweet(s),this.fetchTweetReplies(s),i()},methods:{async fetchTweet(t){try{const{data:e}=await r["a"].getTweet({id:t});if("error"===e.status)throw new Error(e.message);this.tweet.id=e.id,this.tweet.createdAt=e.createdAt,this.tweet.description=e.description,this.tweet.likeCount=e.likeCount,this.tweet.replyCount=e.replyCount,this.tweet.isLiked=e.isLiked,this.tweet.user=e.User}catch(e){console.log(e),u["a"].fire({icon:"error",title:"無法取得貼文，請稍後再試"})}},async fetchTweetReplies(t){try{this.isLoading=!0;const{data:e}=await r["a"].getReplies({tweet_id:t});if("error"===e.status)throw new Error(e.message);this.replies=e,this.isLoading=!1}catch(e){this.isLoading=!1,console.log(e),u["a"].fire({icon:"error",title:"無法取得回覆，請稍後再試"})}},afterDeleteReply(t){this.replies=this.replies.filter(e=>e.id!==t)},afterLikeTweet(t){this.tweet.id===t&&(this.tweet={...this.tweet,isLiked:!0})},afterUnlikeTweet(t){this.tweet.id===t&&(this.tweet={...this.tweet,isLiked:!1})}},computed:{...Object(o["b"])(["currentUser"])}},k=y,x=Object(v["a"])(k,s,a,!1,null,null,null);e["default"]=x.exports},c9a6:function(t,e,i){t.exports=i.p+"img/back.3406615e.svg"}}]);
//# sourceMappingURL=chunk-133fdb14.df98f9c5.js.map