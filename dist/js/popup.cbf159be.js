(function(t){function e(e){for(var r,a,o=e[0],c=e[1],_=e[2],l=0,m=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,_||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],r=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=a(a.s=i[0]))}return t}var r={},s={popup:0},n=[];function a(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=r,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var _=0;_<o.length;_++)e(o[_]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("0a3d")},"0a3d":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"bar"}},[r("h1",[t._v("Priority Score")]),r("p",[t._v(" メリット量: "+t._s(t.getScore())+"     "),r("button",{on:{click:function(e){t.writeToClipboard(t.formatedAsMarkdown())}}},[r("img",{attrs:{alt:"Vue logo",src:i("78a3")}})])]),r("div",{staticClass:"full-width",attrs:{id:"tabs"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.isActiveTab,expression:"isActiveTab"}],attrs:{type:"radio",value:"1",id:"tab1"},domProps:{checked:t._q(t.isActiveTab,"1")},on:{change:function(e){t.isActiveTab="1"}}}),r("label",{attrs:{for:"tab1"}},[t._v("バグ改修")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.isActiveTab,expression:"isActiveTab"}],attrs:{type:"radio",value:"2",id:"tab2"},domProps:{checked:t._q(t.isActiveTab,"2")},on:{change:function(e){t.isActiveTab="2"}}}),r("label",{attrs:{for:"tab2"}},[t._v("機能改善")])])]),r("div",{staticClass:"page"}),r("ul",{attrs:{id:"contents"}},[r("div",{staticClass:"margin"},["1"==t.isActiveTab?r("li",[r("div",{staticClass:"block"},[r("h4",[t._v(t._s(t.r_facilities_count.title))]),r("vue-slider",{attrs:{adsorb:!0,min:1,max:5,interval:2,marks:t.r_facilities_count.options},model:{value:t.r_facilities_count.num,callback:function(e){t.$set(t.r_facilities_count,"num",e)},expression:"r_facilities_count.num"}})],1),r("div",{staticClass:"block"},[r("h4",[t._v(t._s(t.r_frequency.title))]),r("vue-slider",{attrs:{adsorb:!0,min:1,max:5,interval:1,marks:t.r_frequency.options},model:{value:t.r_frequency.num,callback:function(e){t.$set(t.r_frequency,"num",e)},expression:"r_frequency.num"}})],1),r("div",{staticClass:"block"},[r("h4",[t._v(" "+t._s(t.r_corporate_insider.title)+" : "+t._s(t.r_corporate_insider.csp_title)+" ")]),r("vue-slider",{attrs:{adsorb:!0,data:t.involved_ppl_object,"data-value":"id","data-label":"name"},model:{value:t.r_corporate_insider.csp_num,callback:function(e){t.$set(t.r_corporate_insider,"csp_num",e)},expression:"r_corporate_insider.csp_num"}})],1),r("div",{staticClass:"block"},[r("h4",[t._v(" "+t._s(t.r_corporate_insider.title)+" : "+t._s(t.r_corporate_insider.dev_title)+" ")]),r("vue-slider",{attrs:{adsorb:!0,data:t.involved_ppl_object,"data-value":"id","data-label":"name"},model:{value:t.r_corporate_insider.dev_num,callback:function(e){t.$set(t.r_corporate_insider,"dev_num",e)},expression:"r_corporate_insider.dev_num"}})],1),r("div",{staticClass:"block"},[r("h4",[t._v(t._s(t.i_user_spread_degrees.title))]),r("vue-slider",{attrs:{adsorb:!0,min:1,max:5,interval:2,marks:t.i_user_spread_degrees.options},model:{value:t.i_user_spread_degrees.num,callback:function(e){t.$set(t.i_user_spread_degrees,"num",e)},expression:"i_user_spread_degrees.num"}})],1),r("div",{staticClass:"block"},[r("h4",[t._v(t._s(t.i_after_actions.title))]),r("vue-slider",{attrs:{adsorb:!0,min:1,max:5,interval:2,marks:t.i_after_actions.options},model:{value:t.i_after_actions.num,callback:function(e){t.$set(t.i_after_actions,"num",e)},expression:"i_after_actions.num"}})],1),r("div",{staticClass:"block"},[r("h4",[t._v(t._s(t.i_commit.title))]),r("vue-slider",{attrs:{adsorb:!0,min:0,max:25,interval:25,marks:t.i_commit.options},model:{value:t.i_commit.num,callback:function(e){t.$set(t.i_commit,"num",e)},expression:"i_commit.num"}})],1),r("div",{staticClass:"block"},[r("h4",[t._v(t._s(t.i_strategy.title))]),r("vue-slider",{attrs:{adsorb:!0,min:0,max:10,interval:5,marks:t.i_strategy.options},model:{value:t.i_strategy.num,callback:function(e){t.$set(t.i_strategy,"num",e)},expression:"i_strategy.num"}})],1)]):"2"==t.isActiveTab?r("li",[r("div",{staticClass:"block"},[r("h4",[t._v(t._s(t.r_facilities_count.title))]),r("vue-slider",{attrs:{adsorb:!0,min:1,max:5,interval:2,marks:t.r_facilities_count.options},model:{value:t.r_facilities_count.num,callback:function(e){t.$set(t.r_facilities_count,"num",e)},expression:"r_facilities_count.num"}})],1),r("div",{staticClass:"block"},[r("h4",[t._v(t._s(t.r_frequency.title))]),r("vue-slider",{attrs:{adsorb:!0,min:1,max:5,interval:1,marks:t.r_frequency.options},model:{value:t.r_frequency.num,callback:function(e){t.$set(t.r_frequency,"num",e)},expression:"r_frequency.num"}})],1),r("div",{staticClass:"block"},[r("h4",[t._v(" "+t._s(t.r_corporate_insider.title)+" : "+t._s(t.r_corporate_insider.csc_title)+" ")]),r("div",[r("vue-slider",{attrs:{adsorb:!0,data:t.involved_ppl_object,"data-value":"id","data-label":"name"},model:{value:t.r_corporate_insider.csc_num,callback:function(e){t.$set(t.r_corporate_insider,"csc_num",e)},expression:"r_corporate_insider.csc_num"}})],1)]),r("div",{staticClass:"block"},[r("h4",[t._v(" "+t._s(t.r_corporate_insider.title)+" : "+t._s(t.r_corporate_insider.dev_title)+" ")]),r("vue-slider",{attrs:{adsorb:!0,data:t.involved_ppl_object,"data-value":"id","data-label":"name"},model:{value:t.r_corporate_insider.dev_num,callback:function(e){t.$set(t.r_corporate_insider,"dev_num",e)},expression:"r_corporate_insider.dev_num"}})],1),r("div",{staticClass:"block"},[r("h4",[t._v(t._s(t.i_affected_users_type.title))]),r("vue-slider",{attrs:{adsorb:!0,min:1,max:5,interval:2,marks:t.i_affected_users_type.options},model:{value:t.i_affected_users_type.num,callback:function(e){t.$set(t.i_affected_users_type,"num",e)},expression:"i_affected_users_type.num"}})],1),r("div",{staticClass:"block"},[r("h4",[t._v(t._s(t.i_emotion_change.title))]),r("vue-slider",{attrs:{adsorb:!0,min:1,max:5,interval:2,marks:t.i_emotion_change.options},model:{value:t.i_emotion_change.num,callback:function(e){t.$set(t.i_emotion_change,"num",e)},expression:"i_emotion_change.num"}})],1),r("div",{staticClass:"block"},[r("h4",[t._v(t._s(t.i_commit.title))]),r("vue-slider",{attrs:{adsorb:!0,min:0,max:25,interval:25,marks:t.i_commit.options},model:{value:t.i_commit.num,callback:function(e){t.$set(t.i_commit,"num",e)},expression:"i_commit.num"}})],1),r("div",{staticClass:"block"},[r("h4",[t._v(t._s(t.i_strategy.title))]),r("vue-slider",{attrs:{adsorb:!0,min:0,max:10,interval:5,marks:t.i_strategy.options},model:{value:t.i_strategy.num,callback:function(e){t.$set(t.i_strategy,"num",e)},expression:"i_strategy.num"}})],1)]):t._e()])])])},n=[],a=(i("159b"),i("4971")),o=i.n(a),c=(i("3e39"),[[0,1,2],[1,3,4],[2,4,5]]),_={name:"PriorityScore",components:{VueSlider:o.a},data:function(){return{isActiveTab:"1",r_facilities_count:{title:"既存施設アカウント数",num:1,options:{1:"全施設の3割未満",3:"3〜6割",5:"6割以上"}},r_frequency:{title:"頻度",num:1,options:{1:"1度きり",2:"年に1回以上",3:"月に1~3回",4:"週1回以上",5:"毎日"}},r_corporate_insider:{title:"社内関係者",csp_num:0,csp_title:"サポート",dev_num:0,dev_title:"開発",csc_num:0,csc_title:"サクセス"},involved_ppl_object:[{id:0,name:"影響小"},{id:1,name:"そこそこ"},{id:2,name:"影響大"}],i_user_spread_degrees:{title:"ユーザー波及度",num:1,options:{1:"職員1人で完結",3:"他の職員に波及",5:"保護者まで届く"}},i_after_actions:{title:"その後の行動",num:1,options:{1:"無視/問い合わせ",3:"運用回避/丹念に説明",5:"運用回避不可/解約"}},i_commit:{title:"社外コミット",num:0,options:{0:"コミットなし",25:"コミットあり"}},i_strategy:{title:"事業戦略的観点",num:0,options:{0:"なし",5:"小",10:"大"}},i_affected_users_type:{title:"影響あるユーザーの種類（管理職/事務、一般職員、保護者/子ども）",num:1,options:{1:"1組",3:"2組",5:"3組"}},i_emotion_change:{title:"感情の変化",num:1,options:{1:"まぁ嬉しい",3:"そこそこ嬉しい",5:"とても嬉しい"}}}},methods:{getScore:function(){var t=0;return"1"===this.isActiveTab?t=(this.r_facilities_count.num*this.r_frequency.num+this.getCorporateInsiderNum(this.r_corporate_insider.csp_num,this.r_corporate_insider.dev_num))*(this.i_user_spread_degrees.num*this.i_after_actions.num+this.i_commit.num+this.i_strategy.num):"2"===this.isActiveTab&&(t=(this.r_facilities_count.num*this.r_frequency.num+this.getCorporateInsiderNum(this.r_corporate_insider.csc_num,this.r_corporate_insider.dev_num))*(this.i_affected_users_type.num*this.i_emotion_change.num+this.i_commit.num+this.i_strategy.num)),t},getCorporateInsiderNum:function(t,e){return c[t][e]},formatedAsMarkdown:function(){var t=this.getResultTitleAndNum(),e="";return e+="## メリット量\n",e+="\n",e+="| name | value |\n",e+="| ---- | ---- |\n",t.forEach((function(t){e+="| "+t.title+" | "+t.num+" |\n"})),e+="| **total** | **"+this.getScore()+"** |\n",e},getResultTitleAndNum:function(){var t=[];return"1"===this.isActiveTab?t=[{title:this.r_facilities_count.title,num:this.r_facilities_count.num},{title:this.r_frequency.title,num:this.r_frequency.num},{title:this.r_corporate_insider.title,num:this.getCorporateInsiderNum(this.r_corporate_insider.csp_num,this.r_corporate_insider.dev_num)},{title:this.i_affected_users.title,num:this.i_affected_users.num},{title:this.i_after_actions.title,num:this.i_after_actions.num},{title:this.i_commit.title,num:this.i_commit.num},{title:this.i_strategy.title,num:this.i_strategy.num}]:"2"===this.isActiveTab&&(t=[{title:this.r_facilities_count.title,num:this.r_facilities_count.num},{title:this.r_frequency.title,num:this.r_frequency.num},{title:this.r_corporate_insider.title,num:this.getCorporateInsiderNum(this.r_corporate_insider.csc_num,this.r_corporate_insider.dev_num)},{title:this.i_affected_users_type.title,num:this.i_affected_users_type.num},{title:this.i_emotion_change.title,num:this.i_emotion_change.num},{title:this.i_commit.title,num:this.i_commit.num},{title:this.i_strategy.title,num:this.i_strategy.num}]),t},writeToClipboard:function(t){navigator.clipboard&&navigator.clipboard.writeText(t).catch((function(t){console.error(t)}))}}},u=_,l=(i("b170"),i("2877")),m=Object(l["a"])(u,s,n,!1,null,null,null),d=m.exports;new r["default"]({el:"#app",render:function(t){return t(d)}})},"57e9":function(t,e,i){},"78a3":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLklEQVQ4T62RMUrEQBiF3z8BwUbwAqKFFmrnAWTBZuZvBFHQThH2FKLnEOxEYTthXlJYWO4FxEKvoCjYT2RDsmTHycbCVPkned+8/z1B9KjqIYBLAFvxNwD3JE/a59IeavEIwBfJ5QS8JDmjmQ6NePKDqr6RXE8BRGQQQtiduMnz/LUCqOoegMeG7pwbZ1l2HkIY1pAVkvuqWjmw1m4aY0YktxtACeAbwDuADxGh9/4KQNtu2QDqS59IDhpANajqjogsJMKD937cC3DOHYjIYgpA8rYXkBJGLU1bUNXkCmcAbmpRDsDV7w/tEDsz+BcHIrLWEeJFbwbW2iVjTNYR4uc8wHMI4agoipd5a3QCnHMbAI77MhCRVZKnv0KMqqrq6YPN1BgB7v7iBsA1yeEPneTTEdH/vYgAAAAASUVORK5CYII="},b170:function(t,e,i){"use strict";i("57e9")}});
//# sourceMappingURL=popup.cbf159be.js.map