(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{46:function(e,n,t){e.exports=t(81)},79:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),s=t(19),o=t.n(s),l=t(43),c=t(4),u=t(12),i=t(6),h=t(39),g=t.n(h),d=t(17),p=t.n(d),m="http://localhost:5000/api";function f(e){var n=p.a.post("".concat(m,"/login"),{username:e});return console.log("received from server-login: ",n),{type:"set_current_user",payload:n}}function v(e){console.log("about to logout user",e),e=e.toString();var n=p.a.post("".concat(m,"/logout"),{user_Id:e});return console.log("received from server-logout: ",n),{type:"logout_user",payload:n}}function y(e,n,t){e=e.toString(),n=n.toString();var a=p.a.post("".concat(m,"/channels/").concat(n,"/messages"),{user_Id:e,content:t});return console.log("received from server-send-message ",a),{type:"send_a_message",payload:a}}function b(){var e=p.a.get("".concat(m,"/channels"));return console.log("received from server-channels: ",e.data),{type:"fetch_channels",payload:e}}function C(){var e=p.a.get("".concat(m,"/users"));return console.log("received from server-users: ",e.data),{type:"fetch_users",payload:e}}function E(e){console.log("channel messages with: ".concat(m,"/channels/").concat(e,"/messages"));var n=p.a.get("".concat(m,"/channels/").concat(e,"/messages"));return console.log("received from channel messages: ",n.data),{type:"fetch_channel_messages",payload:n}}function I(e){return{type:"set_channel_id",payload:e}}var U={name:"Please Log In",user_Id:0,active:0},_=[],k=[],O={user_Id:null},j={message_Id:0,channel_Id:0,user_Id:0,content:""},M=[],w=Object(i.c)({loggedInUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0;switch(console.log("in reducer-user"),n.type){case"set_current_user":return console.log("setCurrentUser reducer has ",n.payload.data),{name:n.payload.data.username,user_Id:n.payload.data.user_Id,active:n.payload.data.active};default:return e}},availableChannels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0;switch(console.log("in reducer-fetch-channels"),n.type){case"fetch_channels":return console.log("fetchChannels reducer has ",n.payload.data),n.payload.data;default:return e}},onlineUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(console.log("in reducer-fetch-users"),n.type){case"fetch_users":return console.log("fetchUsers reducer has ",n.payload.data),n.payload.data;default:return e}},logoutUserStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(console.log("in reducer-user"),n.type){case"logout_user":return console.log("logoutUser reducer has ",n.payload.data),n.payload.data;default:return e}},sentMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"send_a_message":return console.log("---\x3e send message reducer has ",n.payload.data),n.payload.data;default:return e}},channelMessages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,n=arguments.length>1?arguments[1]:void 0;switch(console.log("in reducer-fetch-channel-messages"),console.log("channel message action packet",n),n.type){case"fetch_channel_messages":return console.log("fetch Channel Messages reducer has ",n.payload.data),n.payload.data;default:return e}},currentChannelId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:101,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"set_channel_id":return n.payload;default:return e}}}),L=t(13),N=t(14),S=t(16),x=t(15),A=t(83),G=t(84),T=t(82),B=t(86),D=t(87),J=t(88),K=t(85),R=function(e){Object(S.a)(t,e);var n=Object(x.a)(t);function t(){return Object(L.a)(this,t),n.apply(this,arguments)}return Object(N.a)(t,[{key:"componentDidMount",value:function(){console.log("something should log"),this.props.fetchChannels(),this.props.fetchUsers()}},{key:"renderChannelGroup",value:function(){return this.props.availableChannels.map((function(e){return r.a.createElement(K.a.Item,{action:!0},e.channelName)}))}},{key:"renderUserGroup",value:function(){return this.props.onlineUsers.map((function(e){return r.a.createElement(K.a.Item,{action:!0},e.username)}))}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(T.a,{sm:3},r.a.createElement("div",{className:"channels-list",style:{background:"azure",height:"auto"}},r.a.createElement(K.a,{variant:"flush"},r.a.createElement(K.a.Item,{variant:"success"},r.a.createElement("b",null,"Channels")),this.renderChannelGroup(),r.a.createElement(K.a.Item,null,"\xa0"))),r.a.createElement("div",{className:"users-list",style:{background:"antiquewhite",height:"auto"}},r.a.createElement(K.a,{variant:"flush"},r.a.createElement(K.a.Item,{variant:"info"},r.a.createElement("b",null,"Users")),this.renderUserGroup()))))}}]),t}(a.Component);var z=Object(u.b)((function(e){return{availableChannels:e.availableChannels,onlineUsers:e.onlineUsers}}),(function(e){return Object(i.b)({fetchChannels:b,fetchUsers:C},e)}))(R),F=function(e){Object(S.a)(t,e);var n=Object(x.a)(t);function t(){return Object(L.a)(this,t),n.apply(this,arguments)}return Object(N.a)(t,[{key:"componentDidMount",value:function(){console.log("component should mount"),this.props.fetchChannelMessages(this.props.currentChannelId)}},{key:"renderChannelMessages",value:function(){return console.log("props are",this.props),this.props.channelMessages.map((function(e){return r.a.createElement(K.a.Item,null,e.username,": ",e.content)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"chat-window",style:{background:"snow",height:"90%"}},r.a.createElement(K.a,{variant:"flush"},this.renderChannelMessages()))}}]),t}(a.Component);var P=Object(u.b)((function(e){return{channelMessages:e.channelMessages,currentChannelId:e.currentChannelId}}),(function(e){return Object(i.b)({fetchChannelMessages:E,setChannelId:I},e)}))(F),q=function(e){Object(S.a)(t,e);var n=Object(x.a)(t);function t(){var e;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=n.call.apply(n,[this].concat(r))).logoutClicked=function(n){console.log("logout button clicked for ",e.props.loggedInUser.user_Id),e.props.logoutUser(e.props.loggedInUser.user_Id),e.props.setCurrentUser(0),console.log("logout response is: ",e.props.logoutUserStatus),e.props.history.push("/login")},e.messageText=function(n){"Enter"===n.key&&(e.props.sendMessage(e.props.loggedInUser.user_Id,e.props.currentChannelId,n.target.value),console.log("the send message return",e.props.sentMessage),e.props.fetchChannelMessages(e.props.currentChannelId),n.target.value="")},e.refreshMessages=function(){e.props.fetchChannelMessages(e.props.currentChannelId)},e}return Object(N.a)(t,[{key:"componentDidMount",value:function(){0===this.props.loggedInUser.user_Id&&(console.log("yup, I actually went here"),this.props.history.push("/login")),this.props.fetchChannels(),this.props.fetchChannelMessages(this.props.currentChannelId),this.props.fetchUsers(),console.log("App.js props are ",this.props)}},{key:"render",value:function(){return r.a.createElement(A.a,{fluid:!0},r.a.createElement(G.a,null,"\xa0"),r.a.createElement(G.a,null,r.a.createElement(z,null),r.a.createElement(T.a,{sm:9},r.a.createElement(B.a,{variant:"outline-dark",size:"sm",className:"float-right",onClick:this.logoutClicked},r.a.createElement("b",null,"Logout")," ",this.props.loggedInUser.name),r.a.createElement("h4",null,"General Channel"),r.a.createElement(P,null),r.a.createElement("div",{className:"message-composer",style:{background:"silver",height:"auto"}},r.a.createElement(D.a,{onKeyUp:this.messageText},r.a.createElement(J.a,{name:"message",id:"messageId"}),r.a.createElement(D.a.Append,null,r.a.createElement(B.a,{onClick:this.refreshMessages},"Refresh Messages")))))))}}]),t}(a.Component);var H=Object(u.b)((function(e){return{loggedInUser:e.loggedInUser,availableChannels:e.availableChannels,onlineUsers:e.onlineUsers,logoutUserStatus:e.logoutUserStatus,sentMessage:e.sentMessage,channelMessages:e.channelMessages,currentChannelId:e.currentChannelId}}),(function(e){return Object(i.b)({fetchChannels:b,fetchUsers:C,logoutUser:v,sendMessage:y,fetchChannelMessages:E,setChannelId:I,setCurrentUser:f},e)}))(q),X=function(e){Object(S.a)(t,e);var n=Object(x.a)(t);function t(){var e;Object(L.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=n.call.apply(n,[this].concat(r))).submitLogin=function(n){console.log(n.target.value),"Enter"===n.key&&(e.props.setCurrentUser(n.target.value),setTimeout(e.props.history.push("/"),5e3))},e}return Object(N.a)(t,[{key:"submitLoginButton",value:function(){console.log("clicked it")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A.a,{fluid:!0},r.a.createElement(G.a,null,"\xa0"),r.a.createElement(G.a,null,r.a.createElement(T.a,null),r.a.createElement(T.a,{md:"auto"},r.a.createElement("h2",null,"PROJECT SLACK by COHORT X"),r.a.createElement("h3",null,"Enter your name to join:"),r.a.createElement(D.a,{className:"mb-3",onKeyUp:this.submitLogin,name:"login-form"},r.a.createElement(J.a,{placeholder:"Your name"})),r.a.createElement(B.a,{variant:"outline-dark",onClick:this.submitLoginButton,className:"float-right"},"Login")),r.a.createElement(T.a,null))))}}]),t}(a.Component);var Y=Object(u.b)((function(e){return{loggedInUser:e.loggedinUser}}),(function(e){return Object(i.b)({setCurrentUser:f},e)}))(X),Q=(t(78),t(79),Object(i.a)(g.a)(i.d));o.a.render(r.a.createElement(u.a,{store:Q(w)},r.a.createElement(l.a,null,r.a.createElement(a.Fragment,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:H}),r.a.createElement(c.a,{exact:!0,path:"/login",component:Y}))))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.99eee364.chunk.js.map