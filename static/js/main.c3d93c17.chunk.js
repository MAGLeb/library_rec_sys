(this["webpackJsonplibrary-app"]=this["webpackJsonplibrary-app"]||[]).push([[0],{117:function(e,t,n){e.exports={header:"header_header__2a52w",logo:"header_logo__2_787",logoText:"header_logoText__3folY",teamName:"header_teamName__2y4Bj"}},162:function(e,t,n){e.exports={carousel:"books-carousel_carousel__2qZ50",arrow:"books-carousel_arrow__2Z38V"}},164:function(e,t,n){e.exports={form:"user-select_form__PkcnS",input:"user-select_input__1XflJ",helpText:"user-select_helpText__wYKBL"}},172:function(e,t,n){e.exports={layout:"src_layout__73Zt4",contentWrapper:"src_contentWrapper__363N0"}},173:function(e,t,n){e.exports={content:"content-container_content__3fUXG",skeleton:"content-container_skeleton__24f93"}},175:function(e,t,n){e.exports={select:"target-select_select__2jREz"}},176:function(e,t,n){e.exports={helpIcon:"help-text_helpIcon__2IsqK",tooltip:"help-text_tooltip__3DN2U"}},195:function(e,t,n){e.exports={bookWrapper:"book-wrapper_bookWrapper__rCweB"}},196:function(e,t,n){e.exports={collapse:"target-container_collapse__3Dv3v",infoIcon:"target-container_infoIcon__3NrqM"}},219:function(e,t,n){},307:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"loadRecommendations",(function(){return Dn})),n.d(a,"finishLoadRecommendations",(function(){return Fn}));var c={};n.r(c),n.d(c,"initLoadPopular",(function(){return wn})),n.d(c,"loadPopular",(function(){return Pn}));var o={};n.r(o),n.d(o,"init",(function(){return In})),n.d(o,"loadBooks",(function(){return qn}));var r={};n.r(r),n.d(r,"loadTarget",(function(){return En})),n.d(r,"clearTarget",(function(){return Hn}));var i={};n.r(i),n.d(i,"init",(function(){return Qn})),n.d(i,"loadGenres",(function(){return Ln}));var s={};n.r(s),n.d(s,"loadFilteredBooks",(function(){return Mn}));var l={};n.r(l),n.d(l,"loadCreatedRecommendations",(function(){return Kn})),n.d(l,"clearCreatedRecommendations",(function(){return Yn}));var u=n(0),d=n.n(u),j=n(29),b=n.n(j),O=(n(219),n(328)),m=n(172),f=n.n(m),p=(n(220),n(59)),h=n(51),g=n(35),v=n(173),x=n.n(v),k=n(317),_=n(5),B=function(){return Object(_.jsx)(k.a.Title,{level:2,children:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0434\u043b\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438"})},A=n(31),y=n(25),C=n(24),N=function(e){return e.recommendations},T=Object(C.a)(N,(function(e){return e.recommendationsData})),S=Object(C.a)(N,(function(e){return e.historyData})),R=Object(C.a)(N,(function(e){return e.loading})),D=n(310),F=n(15),w=n(321),P=n(85),G=n(115),I=n(178),q=n(162),E=n.n(q),H=function(e){var t={dots:!0,infinite:!1,speed:500,nextArrow:Object(_.jsx)(Q,{}),prevArrow:Object(_.jsx)(L,{}),slidesToShow:e.slidesToShow||6,responsive:e.responsive||[{breakpoint:1200,settings:{slidesToShow:5}},{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]};return Object(_.jsx)(w.a,Object(F.a)(Object(F.a)({arrows:!0},t),{},{className:E.a.carousel,dots:!0,children:e.children}))};function Q(e){var t=e.className,n=e.style,a=e.onClick;return Object(_.jsx)("div",{className:"".concat(t," ").concat(E.a.arrow),style:n,children:Object(_.jsx)(P.a,{shape:"circle",onClick:a,icon:Object(_.jsx)(G.a,{})})})}function L(e){var t=e.className,n=e.style,a=e.onClick;return Object(_.jsx)("div",{className:"".concat(t," ").concat(E.a.arrow),style:n,children:Object(_.jsx)(P.a,{shape:"circle",onClick:a,icon:Object(_.jsx)(I.a,{})})})}var M,K,Y,J=n(333),U=n(329),V="NO_HISTORY";!function(e){e.red="red",e.green="green",e.orange="orange"}(Y||(Y={}));var W,z,X=(M={},Object(h.a)(M,Y.red,"linear-gradient(90deg,#f5222d -.01%,#fff1f0 1.99%,#ffccc7 3%,#ff4d4f 5%,transparent 6%,#ffccc7 7%,#ffa39e 100.01%)"),Object(h.a)(M,Y.orange,"linear-gradient(90deg,#fa8c16 -.01%,#fff7e6 1.99%,#ffe7ba 3%,#ffa940 5%,transparent 6%,#ffe7ba 7%,#ffd591 100.01%)"),Object(h.a)(M,Y.green,"linear-gradient(90deg,#13c2c2 -.01%,#e6fffb 1.99%,#b5f5ec 3%,#36cfc9 5%,transparent 6%,#b5f5ec 7%,#87e8de 100.01%)"),M),Z=(K={},Object(h.a)(K,Y.red,"#ff7875"),Object(h.a)(K,Y.orange,"#ff9c6e"),Object(h.a)(K,Y.green,"#36cfc9"),K),$="user",ee="http://localhost:5000",te=n(67),ne=n.n(te),ae=function(e){var t=e.book,n=t.id,a=t.title,c=t.author,o=(t.year,t.age_resctriction),r=e.color,i=a||"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e",s=c||"\u0410\u0432\u0442\u043e\u0440 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d",l=Object(_.jsxs)("span",{className:ne.a.itemImage,style:{background:X[r]},children:[Object(_.jsxs)("div",{className:ne.a.imageID,children:["ID-",n]}),Object(_.jsx)("span",{className:ne.a.imageTitle,children:i}),Object(_.jsxs)("span",{className:ne.a.imageAuthor,children:[" ",s]})]});return Object(_.jsxs)("div",{className:"".concat(ne.a.item," ").concat(ne.a.itemText," ").concat(ne.a.slickSlide),children:[o?Object(_.jsx)(U.a.Ribbon,{text:"".concat(o,"+"),color:Z[r],children:l}):l,Object(_.jsx)("span",{className:ne.a.itemTitle,children:i}),Object(_.jsx)("span",{className:ne.a.itemAuthor,children:s})]},n)},ce=n(332),oe=n(81),re=n.n(oe),ie=function(e){var t=e.book,n=e.color;return Object(_.jsxs)("div",{className:re.a.wrapper,children:[Object(_.jsx)(ae,{book:t,color:n}),Object(_.jsxs)("div",{className:re.a.description,children:[Object(_.jsx)("div",{className:re.a.annotation,children:t.annotation}),Object(_.jsx)("div",{className:re.a.age,children:t.year}),t.volume?Object(_.jsxs)("div",{className:re.a.volume,children:[t.volume," \u0441\u0442\u0440\u0430\u043d\u0438\u0446"]}):null,Object(_.jsx)("div",{className:re.a.tags,children:t.rubrics?Object(_.jsx)(ce.a,{className:re.a.tag,color:"blue",children:t.rubrics}):null})]})]})},se=n(195),le=n.n(se),ue=function(e){var t=e.book,n=e.popupPlacement,a=e.popupTrigger,c=Object(u.useState)(Y.orange),o=Object(g.a)(c,2),r=o[0],i=o[1];return Object(u.useEffect)((function(){var e=function(){var e=t.id%10,n=Y.orange;return[1,4,9].includes(e)&&(n=Y.red),[0,2,5].includes(e)&&(n=Y.green),n}();i(e)}),[]),Object(_.jsx)(J.a,{content:Object(_.jsx)(ie,{book:t,color:r}),trigger:a||"click",title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",placement:n,children:Object(_.jsx)("div",{className:le.a.bookWrapper,children:Object(_.jsx)(ae,{book:t,color:r})})})},de=function(e){var t=e.title,n=e.books,a=e.isTarget,c=e.popupPlacement;return Object(_.jsxs)("div",{style:{margin:a?"40px 0 0 0 ":"40px 0"},children:[a?null:Object(_.jsx)(D.a,{}),Object(_.jsx)(k.a.Title,{level:4,children:t}),Object(_.jsx)(H,{children:n.map((function(e,t){return Object(_.jsx)(d.a.Fragment,{children:Object(_.jsx)(ue,{book:e,popupPlacement:c})},t)}))})]})},je=function(){var e=Object(y.c)(T),t=Object(y.c)(S);return Object(_.jsxs)(d.a.Fragment,{children:[Object(_.jsx)(de,{title:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",books:e}),Object(_.jsx)(de,{title:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f",books:t})]})},be=function(e){return e.popular},Oe=Object(C.a)(be,(function(e){return e.monthData})),me=Object(C.a)(be,(function(e){return e.russianData})),fe=Object(C.a)(be,(function(e){return e.newData})),pe=Object(C.a)(be,(function(e){return e.loading})),he=Object(C.a)((function(e){return e.contentMode}),(function(e){return e.mode})),ge=Object(C.a)(R,pe,(function(e,t){return e||t}));!function(e){e.recommendations="recommendations",e.populdar="popular"}(W||(W={})),function(e){e.classic="classic",e.modern="modern"}(z||(z={}));var ve,xe=function(){var e=Object(y.c)(Oe),t=Object(y.c)(me),n=Object(y.c)(fe);return Object(_.jsxs)(d.a.Fragment,{children:[Object(_.jsx)(de,{title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446",books:e}),Object(_.jsx)(de,{title:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0420\u043e\u0441\u0441\u0438\u0438",books:t}),Object(_.jsx)(de,{title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043d\u043e\u0432\u044b\u0435 \u0438\u0437\u0434\u0430\u043d\u0438\u044f",books:n})]})},ke=n(36),_e=Object(ke.b)({name:"recommendations",initialState:{recommendationsData:[],historyData:[],loading:!1},reducers:{fetchRecommendationsFailure:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{loading:!1})},fetchRecommendationsRequest:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{recommendationsData:[],historyData:[],loading:!0})},fetchRecommendationsSuccess:function(e,t){var n,a;return Object(F.a)(Object(F.a)({},e),{},{loading:!1,recommendationsData:(null===(n=t.payload)||void 0===n?void 0:n.recommendations)||[],historyData:(null===(a=t.payload)||void 0===a?void 0:a.history)||[]})}}}),Be=_e.actions,Ae=Be.fetchRecommendationsFailure,ye=Be.fetchRecommendationsRequest,Ce=Be.fetchRecommendationsSuccess,Ne=Object(ke.b)({name:"popular",initialState:{monthData:[],russianData:[],newData:[],loading:!1},reducers:{fetchPopularFailure:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{loading:!1})},fetchPopularRequest:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{monthData:[],russianData:[],newData:[],loading:!0})},fetchPopularSuccess:function(e,t){var n,a,c;return Object(F.a)(Object(F.a)({},e),{},{loading:!1,monthData:(null===(n=t.payload)||void 0===n?void 0:n.month)||[],russianData:(null===(a=t.payload)||void 0===a?void 0:a.russian)||[],newData:(null===(c=t.payload)||void 0===c?void 0:c.new)||[]})}}}),Te=Ne.actions,Se=Te.fetchPopularFailure,Re=Te.fetchPopularRequest,De=Te.fetchPopularSuccess,Fe=Object(ke.b)({name:"contentMode",initialState:{mode:null},reducers:{setContentMode:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{mode:t.payload})}}}),we=Fe.actions.setContentMode,Pe=Object(ke.b)({name:"books",initialState:{ids:[],loading:!1},reducers:{fetchBooksFailure:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{loading:!1})},fetchBooksRequest:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{loading:!0})},fetchBooksSuccess:function(e,t){var n;return Object(F.a)(Object(F.a)({},e),{},{loading:!1,ids:(null===(n=t.payload)||void 0===n?void 0:n.ids)||[]})}}}),Ge=Pe.actions,Ie=Ge.fetchBooksFailure,qe=Ge.fetchBooksRequest,Ee=Ge.fetchBooksSuccess,He=Object(ke.b)({name:"target",initialState:{targetData:[],loading:!1},reducers:{fetchTargetFailure:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{loading:!1})},fetchTargetRequest:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{targetData:[],loading:!0})},fetchTargetSuccess:function(e,t){var n;return Object(F.a)(Object(F.a)({},e),{},{loading:!1,targetData:(null===(n=t.payload)||void 0===n?void 0:n.target)||[]})}}}),Qe=He.actions,Le=Qe.fetchTargetFailure,Me=Qe.fetchTargetRequest,Ke=Qe.fetchTargetSuccess,Ye=Object(ke.b)({name:"genres",initialState:{genresData:[],loading:!1},reducers:{fetchGenresFailure:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{loading:!1})},fetchGenresRequest:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{loading:!0})},fetchGenresSuccess:function(e,t){var n;return Object(F.a)(Object(F.a)({},e),{},{loading:!1,genresData:(null===(n=t.payload)||void 0===n?void 0:n.rubrics)||[]})}}}),Je=Ye.actions,Ue=Je.fetchGenresFailure,Ve=Je.fetchGenresRequest,We=Je.fetchGenresSuccess,ze=Object(ke.b)({name:"createdRecommendations",initialState:{createdRecommendationsData:[],createdRecommendationsHistory:[],loading:!1},reducers:{fetchCreatedRecommendationsFailure:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{loading:!1})},fetchCreatedRecommendationsRequest:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{createdRecommendationsData:[],createdRecommendationsHistory:[],loading:!0})},fetchCreatedRecommendationsSuccess:function(e,t){var n,a;return Object(F.a)(Object(F.a)({},e),{},{loading:!1,createdRecommendationsData:(null===(n=t.payload)||void 0===n?void 0:n.recommendations)||[],createdRecommendationsHistory:(null===(a=t.payload)||void 0===a?void 0:a.history)||[]})}}}),Xe=ze.actions,Ze=Xe.fetchCreatedRecommendationsFailure,$e=Xe.fetchCreatedRecommendationsRequest,et=Xe.fetchCreatedRecommendationsSuccess,tt=Object(ke.b)({name:"filteredBooks",initialState:{filteredBooksData:[],loading:!1},reducers:{fetchFilteredBooksFailure:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{loading:!1})},fetchFilteredBooksRequest:function(e,t){return Object(F.a)(Object(F.a)({},e),{},{filteredBooksData:[],loading:!0})},fetchFilteredBooksSuccess:function(e,t){var n;return Object(F.a)(Object(F.a)({},e),{},{loading:!1,filteredBooksData:(null===(n=t.payload)||void 0===n?void 0:n.books)||[]})}}}),nt=tt.actions,at=nt.fetchFilteredBooksFailure,ct=nt.fetchFilteredBooksRequest,ot=nt.fetchFilteredBooksSuccess,rt=n(322),it=n(325),st=function(e){return e.books},lt=Object(C.a)(st,(function(e){return e.ids})),ut=Object(C.a)(st,(function(e){return e.loading})),dt=function(e){return e.target},jt=Object(C.a)(dt,(function(e){return e.targetData})),bt=Object(C.a)(dt,(function(e){return e.loading})),Ot=n(196),mt=n.n(Ot),ft=n(316),pt=n(320),ht=n(175),gt=n.n(ht),vt="TARGET_SELECT",xt=function(e){var t=e.targetIds,n=e.isLoadingTargets,a=e.onSearch,c=ft.a.useForm(),o=Object(g.a)(c,1)[0],r=Object(u.useState)(!0),i=Object(g.a)(r,2),s=i[0],l=i[1];return Object(_.jsxs)(ft.a,{form:o,layout:"inline",className:gt.a.form,onFinish:function(e){return a(e.TARGET_SELECT)},children:[Object(_.jsx)(ft.a.Item,{name:vt,label:"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u043a\u043d\u0438\u0433",children:Object(_.jsx)(pt.a,{className:gt.a.select,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b...",loading:n,showSearch:!0,mode:"multiple",maxTagCount:5,allowClear:!0,onChange:function(e){Array.isArray(e)&&e.length?l(!1):l(!0)},children:t.map((function(e){return Object(_.jsx)(pt.a.Option,{value:e,children:e},e)}))})}),Object(_.jsx)(ft.a.Item,{children:Object(_.jsx)(P.a,{type:"primary",htmlType:"submit",disabled:s,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0438"})})]})},kt=n(79),_t=n(212),Bt=n(176),At=n.n(Bt),yt=function(){return Object(_.jsxs)("span",{children:["\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043b\u044f \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",Object(_.jsx)(kt.a,{title:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u043a\u043d\u0438\u0433\u0438 \u0438 \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u043e \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",overlayClassName:At.a.tooltip,children:Object(_.jsx)(_t.a,{className:At.a.helpIcon})})]})},Ct=function(){var e=Object(y.c)(bt),t=Object(y.c)(lt),n=Object(y.c)(ut),a=Object(y.c)(jt),c=Object(y.b)(),o=e?Object(_.jsx)(rt.a,{active:!0}):Object.values(a).length?Object(_.jsx)(de,{books:a,title:"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0432\u044b\u0431\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",isTarget:!0}):null;return Object(_.jsx)(it.a,{ghost:!0,className:mt.a.collapse,children:Object(_.jsx)(it.a.Panel,{header:Object(_.jsx)(yt,{}),children:Object(_.jsxs)(d.a.Fragment,{children:[Object(_.jsx)(xt,{targetIds:t,isLoadingTargets:n,onSearch:function(e){return c(Me(e))}}),o]})},1)})},Nt=n(324),Tt=n(164),St=n.n(Tt),Rt="USER_INPUT",Dt=function(e){var t=e.onPredict,n=e.value,a=ft.a.useForm(),c=Object(g.a)(a,1)[0];return Object(u.useEffect)((function(){c.setFieldsValue(Object(h.a)({},Rt,n))}),[n]),Object(_.jsxs)(ft.a,{form:c,layout:"inline",className:St.a.form,onFinish:function(e){return t(e.USER_INPUT)},children:[Object(_.jsx)("div",{className:St.a.helpText,children:"*\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d"}),Object(_.jsx)(ft.a.Item,{name:Rt,label:"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",rules:[{pattern:/^(?:\d*)$/,message:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c"}],children:Object(_.jsx)(Nt.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0439\u0434\u0438 \u0438\u043b\u0438 \u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043f\u0443\u0441\u0442\u044b\u043c...",className:St.a.input,allowClear:!0,autoComplete:"off"})}),Object(_.jsx)(ft.a.Item,{children:Object(_.jsx)(P.a,{type:"primary",htmlType:"submit",children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"})})]})},Ft=n(39),wt=n.n(Ft),Pt=n(323),Gt=n(327),It=n(334),qt=n.p+"static/media/reading.aad66751.png",Et=function(e){var t=e.onCancel,n=e.onNext;return Object(_.jsx)(Gt.a,{subTitle:"\u041f\u043e\u0445\u043e\u0436\u0435, \u0443 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u043a\u043d\u0438\u0433\u0430\u0445. \u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432, \u0438 \u043c\u044b \u043f\u043e\u0434\u0431\u0435\u0440\u0435\u043c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0432\u0430\u0441.",extra:Object(_.jsxs)(It.b,{children:[Object(_.jsx)(P.a,{onClick:t,children:"\u041d\u0435\u0442, \u0441\u043f\u0430\u0441\u0438\u0431\u043e"}),Object(_.jsxs)(P.a,{type:"primary",onClick:n,children:[" ","\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"]})]}),icon:Object(_.jsx)("img",{src:qt,alt:"",className:wt.a.askImg})})},Ht=n(318),Qt=n(326),Lt=function(e){var t=e.onSelect,n=e.currentType;return Object(_.jsxs)(Qt.a.Group,{value:n,onChange:function(e){return t(e.target.value)},size:"large",children:[Object(_.jsx)(Qt.a.Button,{value:z.classic,children:"\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0430\u044f"}),Object(_.jsx)(Qt.a.Button,{value:z.modern,children:"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f"})]})},Mt=function(e){var t=e.isLoadingGenres,n=e.genresData,a=e.selectedGenres,c=e.onChange,o=Object(u.useState)([]),r=Object(g.a)(o,2),i=r[0],s=r[1];return t?Object(_.jsx)(rt.a,{active:!0}):Object(_.jsxs)("div",{className:wt.a.genresContent,children:[Object(_.jsx)("div",{className:wt.a.helpText,children:"*\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u043e 7-\u043c\u0438 \u0436\u0430\u043d\u0440\u043e\u0432"}),Object(_.jsx)(pt.a,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0430\u043d\u0440\u044b...",onChange:function(e){s(e),c(e)},mode:"multiple",className:wt.a.genresSelect,loading:t,value:a,children:(null===n||void 0===n?void 0:n.length)?n.slice().sort((function(e,t){return e.localeCompare(t)})).map((function(e,t){return Object(_.jsx)(pt.a.Option,{value:e,disabled:i.length>6&&!i.includes(e),children:e},t)})):null})]})},Kt=[{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}],Yt=function(e){var t=e.isLoadingBooks,n=e.booksData,a=e.selectedBooks,c=e.onPick;return t?Object(_.jsx)(rt.a,{active:!0}):Object(_.jsx)(H,{responsive:Kt,slidesToShow:5,children:n.map((function(e,t){return Object(_.jsx)("div",{className:"".concat(wt.a.bookBlock," ").concat(a.includes(e.id)?wt.a.selectedBook:void 0),onClick:function(){return c(e.id)},children:Object(_.jsx)(ue,{book:e,popupPlacement:"right",popupTrigger:"hover"})},t)}))})},Jt=Ht.a.Step,Ut=function(e){var t=e.isLoadingGenres,n=e.genresData,a=e.isLoadingFilteredBooks,c=e.filteredBooksData,o=e.fetchFilteredBooks,r=e.isCreatingRecommendations,i=e.fetchCreatedRecommendations,s=Object(u.useState)(0),l=Object(g.a)(s,2),j=l[0],b=l[1],O=Object(u.useState)(void 0),m=Object(g.a)(O,2),f=m[0],h=m[1],v=Object(u.useState)([]),x=Object(g.a)(v,2),B=x[0],A=x[1],y=Object(u.useState)([]),C=Object(g.a)(y,2),N=C[0],T=C[1],S=[{title:"\u0422\u0438\u043f",content:Object(_.jsx)(Lt,{currentType:f,onSelect:function(e){return h(e)}}),header:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u044b"},{title:"\u0416\u0430\u043d\u0440\u044b",content:Object(_.jsx)(Mt,{isLoadingGenres:t,genresData:n,selectedGenres:B,onChange:function(e){A(e)}}),header:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u0436\u0430\u043d\u0440\u044b"},{title:"\u041a\u043d\u0438\u0433\u0438",content:Object(_.jsx)(Yt,{isLoadingBooks:a,booksData:c,onPick:function(e){var t;t=N.includes(e)?N.filter((function(t){return t!==e})):[].concat(Object(p.a)(N),[e]),T(t)},selectedBooks:N}),header:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043d\u0438\u0433\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u043c \u043d\u0440\u0430\u0432\u044f\u0442\u0441\u044f"}];return Object(_.jsxs)(d.a.Fragment,{children:[Object(_.jsx)(Ht.a,{current:j,progressDot:!0,children:S.map((function(e){return Object(_.jsx)(Jt,{title:e.title},e.title)}))}),Object(_.jsxs)("div",{className:wt.a.stepsContent,children:[Object(_.jsx)(k.a.Title,{level:4,className:wt.a.stepHeader,children:S[j].header}),S[j].content]}),Object(_.jsxs)("div",{className:wt.a.stepBtns,children:[j>0&&Object(_.jsx)(P.a,{onClick:function(){b(j-1)},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(_.jsx)(P.a,{type:"primary",onClick:function(){1===j&&(T([]),o(f,B)),2===j?i(N):b(j+1)},className:wt.a.stepBtnNext,disabled:0===j&&!f||1===j&&!B.length||2===j&&!N.length,loading:2===j&&r,children:j===S.length-1?"\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438":"\u0414\u0430\u043b\u0435\u0435"})]})]})};!function(e){e.steps="steps",e.ask="ask"}(ve||(ve={}));var Vt=function(e){var t=e.isOpen,n=e.onClose,a=e.isLoadingGenres,c=e.genresData,o=e.isLoadingFilteredBooks,r=e.filteredBooksData,i=e.fetchFilteredBooks,s=e.isCreatingRecommendations,l=e.fetchCreatedRecommendations,d=Object(u.useState)(ve.ask),j=Object(g.a)(d,2),b=j[0],O=j[1];return Object(_.jsx)(Pt.a,{visible:t,footer:null,onCancel:n,closable:!s,width:b===ve.steps?"80%":void 0,children:b===ve.ask?Object(_.jsx)(Et,{onCancel:function(){return n()},onNext:function(){return O(ve.steps)}}):Object(_.jsx)(Ut,{genresData:c,isLoadingGenres:a,isLoadingFilteredBooks:o,filteredBooksData:r,fetchFilteredBooks:i,isCreatingRecommendations:s,fetchCreatedRecommendations:l})})},Wt=function(e){var t=e.isLoadingGenres,n=e.genresData,a=e.isLoadingFilteredBooks,c=e.filteredBooksData,o=e.fetchFilteredBooks,r=e.isCreatingRecommendations,i=e.fetchCreatedRecommendations,s=Object(u.useState)(!0),l=Object(g.a)(s,2),j=l[0],b=l[1];var O=function(e){var t=Object(u.useRef)();return Object(u.useEffect)((function(){t.current=e})),t.current}(r);return Object(u.useEffect)((function(){O&&!r&&b(!1)}),[r]),Object(_.jsxs)(d.a.Fragment,{children:[Object(_.jsxs)(P.a,{onClick:function(){return b(!0)},className:wt.a.creatorBtn,type:"link",children:["\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",Object(_.jsx)("img",{src:"data:image/png;base64,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",className:wt.a.magicImg,alt:""})]}),j?Object(_.jsx)(Vt,{isOpen:j,onClose:function(){return b(!1)},genresData:n,isLoadingGenres:t,isLoadingFilteredBooks:a,filteredBooksData:c,fetchFilteredBooks:o,isCreatingRecommendations:r,fetchCreatedRecommendations:i}):null]})},zt=function(e){return e.genres},Xt=Object(C.a)(zt,(function(e){return e.genresData})),Zt=Object(C.a)(zt,(function(e){return e.loading})),$t=function(e){return e.filteredBooks},en=Object(C.a)($t,(function(e){return e.filteredBooksData})),tn=Object(C.a)($t,(function(e){return e.loading})),nn=function(e){return e.createdRecommendations},an=Object(C.a)(nn,(function(e){return e.loading})),cn=Object(C.a)(nn,(function(e){return e.createdRecommendationsData})),on=Object(C.a)(nn,(function(e){return e.createdRecommendationsHistory})),rn=function(){var e=Object(y.c)(Xt),t=Object(y.c)(Zt),n=Object(y.c)(tn),a=Object(y.c)(en),c=Object(y.c)(an),o=Object(y.c)(cn),r=Object(y.c)(on),i=Object(y.b)();return o.length?Object(_.jsxs)(d.a.Fragment,{children:[Object(_.jsx)(de,{books:o,title:"\u0412\u0430\u0448\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",popupPlacement:"right"}),Object(_.jsx)(de,{books:r,title:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u0432\u0430\u043c\u0438 \u043a\u043d\u0438\u0433"})]}):Object(_.jsx)(Wt,{genresData:e,isLoadingGenres:t,isLoadingFilteredBooks:n,filteredBooksData:a,fetchFilteredBooks:function(e,t){return i(ct({type:e,genres:t}))},isCreatingRecommendations:c,fetchCreatedRecommendations:function(e){return i($e(e))}})},sn=function(){var e=Object(y.c)(he),t=Object(y.c)(ge),n=Object(y.b)(),a=Object(A.f)(),c=Object(u.useState)(void 0),o=Object(g.a)(c,2),r=o[0],i=o[1],s=Object(A.e)();Object(u.useEffect)((function(){var e=new URLSearchParams(a.search).get($)||void 0;i(e?Number(e):e),n(ye(e||V))}),[a]);return Object(_.jsxs)("div",{className:x.a.content,children:[Object(_.jsx)(B,{}),Object(_.jsx)(Dt,{onPredict:function(e){if(e){var t=new URLSearchParams(Object(h.a)({},$,e.toString())).toString();s.push({search:t})}else{var n=new URLSearchParams(a.search);n.delete($),s.push({search:n.toString()})}},value:r}),t?Object(_.jsx)(d.a.Fragment,{children:Object(p.a)(Array(3).keys()).map((function(e,t){return Object(_.jsx)(rt.a,{active:!0,className:x.a.skeleton},t)}))}):e===W.populdar?Object(_.jsxs)(d.a.Fragment,{children:[Object(_.jsx)(rn,{}),Object(_.jsx)(xe,{})]}):e===W.recommendations?Object(_.jsxs)(d.a.Fragment,{children:[Object(_.jsx)(Ct,{}),Object(_.jsx)(je,{})]}):null]})},ln=n(117),un=n.n(ln),dn=n.p+"static/media/books.da7c06a2.png",jn=function(){return Object(_.jsxs)(O.a.Header,{className:un.a.header,children:[Object(_.jsx)("img",{src:dn,className:un.a.logo,alt:"logo"}),Object(_.jsx)(k.a.Title,{level:3,className:un.a.logoText,children:"Library app"}),Object(_.jsxs)("div",{className:un.a.teamName,children:[" ","Made by laugh-most-late-coat-not-deterministic"]})]})},bn=n(199),On=n(200),mn=n(210),fn=n(204),pn=n(206);function hn(){pn.b.error("\u041e\u0439, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.")}var gn=function(e){Object(mn.a)(n,e);var t=Object(fn.a)(n);function n(e){var a;return Object(bn.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(On.a)(n,[{key:"componentDidCatch",value:function(e,t){hn()}},{key:"render",value:function(){return this.state.hasError?null:this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(d.a.Component);var vn=function(){return Object(_.jsx)(gn,{children:Object(_.jsxs)(O.a,{className:f.a.layout,children:[Object(_.jsx)(jn,{}),Object(_.jsx)(O.a.Content,{className:f.a.contentWrapper,children:Object(_.jsx)(sn,{})})]})})},xn=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,335)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))},kn=n(66),_n=Object(kn.b)({recommendations:_e.reducer,popular:Ne.reducer,contentMode:Fe.reducer,books:Pe.reducer,target:He.reducer,genres:Ye.reducer,filteredBooks:tt.reducer,createdRecommendations:ze.reducer}),Bn=n(319),An=n(331),yn=n(311),Cn=n(312),Nn=n(314),Tn=n(153),Sn=n(313),Rn=n(330),Dn=function(e,t){return e.pipe(Object(yn.a)(ye.match),Object(Cn.a)((function(e){return e.payload===V?Object(Sn.a)(we(W.populdar)):Object(Rn.a)({url:"".concat(ee,"/recommendations?user_id=").concat(e.payload,"&model_name=item_similarity"),method:"GET",responseType:"text"}).pipe(Object(Cn.a)((function(e){var t,n=JSON.parse(null===e||void 0===e?void 0:e.response.replace(/\bNaN\b/g,"null"));return(null===n||void 0===n||null===(t=n.history)||void 0===t?void 0:t.length)?Object(Sn.a)(we(W.recommendations),Ce(n)):Object(Sn.a)(we(W.populdar))})),Object(Nn.a)((function(){return hn(),Object(Sn.a)(Ae())})))})))},Fn=function(e,t){return e.pipe(Object(yn.a)(Re.match),Object(Tn.a)((function(){return Ce({history:[],recommendations:[]})})))},wn=function(e,t){return e.pipe(Object(yn.a)(we.match),Object(yn.a)((function(e){return e.payload===W.populdar})),Object(Tn.a)((function(){return Re()})))},Pn=function(e,t){return e.pipe(Object(yn.a)(Re.match),Object(Cn.a)((function(e){return Object(Rn.a)({url:"".concat(ee,"/popular"),method:"GET",responseType:"text"}).pipe(Object(Tn.a)((function(e){return De(JSON.parse(null===e||void 0===e?void 0:e.response.replace(/\bNaN\b/g,"null")))})),Object(Nn.a)((function(){return hn(),Object(Sn.a)(Se())})))})))},Gn=n(315),In=function(e,t){return t.pipe(Object(Gn.a)(1),Object(Tn.a)((function(){return qe()})))},qn=function(e,t){return e.pipe(Object(yn.a)(qe.match),Object(Cn.a)((function(){return Rn.a.get("".concat(ee,"/books")).pipe(Object(Tn.a)((function(e){return Ee(null===e||void 0===e?void 0:e.response)})),Object(Nn.a)((function(){return hn(),Object(Sn.a)(Ie())})))})))},En=function(e,t){return e.pipe(Object(yn.a)(Me.match),Object(Cn.a)((function(e){return Object(Rn.a)({url:"".concat(ee,"/targets?target_ids=").concat(e.payload.join(",")),method:"GET",responseType:"text"}).pipe(Object(Tn.a)((function(e){return Ke(JSON.parse(null===e||void 0===e?void 0:e.response.replace(/\bNaN\b/g,"null")))})),Object(Nn.a)((function(){return hn(),Object(Sn.a)(Le())})))})))},Hn=function(e,t){return e.pipe(Object(yn.a)(ye.match),Object(Tn.a)((function(){return Ke({target:[]})})))},Qn=function(e,t){return t.pipe(Object(Gn.a)(1),Object(Tn.a)((function(){return Ve()})))},Ln=function(e,t){return e.pipe(Object(yn.a)(Ve.match),Object(Cn.a)((function(e){return Rn.a.get("".concat(ee,"/rubrics")).pipe(Object(Tn.a)((function(e){return We(null===e||void 0===e?void 0:e.response)})),Object(Nn.a)((function(){return hn(),Object(Sn.a)(Ue())})))})))},Mn=function(e,t){return e.pipe(Object(yn.a)(ct.match),Object(Cn.a)((function(e){var t=e.payload,n=t.type,a=t.genres;return Object(Rn.a)({url:"".concat(ee,"/books_filter?type=").concat(n,"&rubrics=").concat(a.join(",")),method:"GET",responseType:"text"}).pipe(Object(Tn.a)((function(e){return ot(JSON.parse(null===e||void 0===e?void 0:e.response.replace(/\bNaN\b/g,"null")))})),Object(Nn.a)((function(){return hn(),Object(Sn.a)(at())})))})))},Kn=function(e,t){return e.pipe(Object(yn.a)($e.match),Object(Cn.a)((function(e){return Object(Rn.a)({url:"".concat(ee,"/recommendations?book_ids=").concat(e.payload.join(","),"&model_name=item_similarity"),method:"GET",responseType:"text"}).pipe(Object(Tn.a)((function(e){return et(JSON.parse(null===e||void 0===e?void 0:e.response.replace(/\bNaN\b/g,"null")))})),Object(Nn.a)((function(){return hn(),Object(Sn.a)(Ze())})))})))},Yn=function(e,t){return e.pipe(Object(yn.a)(ye.match),Object(Tn.a)((function(){return et({recommendations:[],history:[]})})))},Jn=An.a.apply(void 0,Object(p.a)(Object.values(a)).concat(Object(p.a)(Object.values(c)),Object(p.a)(Object.values(o)),Object(p.a)(Object.values(r)),Object(p.a)(Object.values(i)),Object(p.a)(Object.values(s)),Object(p.a)(Object.values(l)))),Un=Object(Bn.a)(),Vn=Object(ke.a)({reducer:_n,middleware:[Un]});Un.run(Jn);var Wn=n(171);b.a.render(Object(_.jsx)(d.a.StrictMode,{children:Object(_.jsx)(y.a,{store:Vn,children:Object(_.jsx)(Wn.a,{children:Object(_.jsx)(A.a,{component:vn})})})}),document.getElementById("root")),xn()},39:function(e,t,n){e.exports={creatorBtn:"recommendations-creator_creatorBtn__3Uprf",magicImg:"recommendations-creator_magicImg__6kHvx",stepBtns:"recommendations-creator_stepBtns__1ne8O",stepBtnNext:"recommendations-creator_stepBtnNext__1TFNf",stepsContent:"recommendations-creator_stepsContent__2c12r",stepHeader:"recommendations-creator_stepHeader__3PMl8",genresContent:"recommendations-creator_genresContent__1uIzh",askImg:"recommendations-creator_askImg__OENr5",wideModal:"recommendations-creator_wideModal__3j0ra",bookBlock:"recommendations-creator_bookBlock__pq3gz",selectedBook:"recommendations-creator_selectedBook__3il4c",genresSelect:"recommendations-creator_genresSelect__1v_-3",helpText:"recommendations-creator_helpText__30wiP"}},67:function(e,t,n){e.exports={item:"book_item__RiWFx",itemText:"book_itemText__3cOaP",slickSlide:"book_slickSlide__1Lfgo",itemTitle:"book_itemTitle__klfLR",itemAuthor:"book_itemAuthor__3p4s2",itemImage:"book_itemImage__2-ItX",imageID:"book_imageID__314wO",imageTitle:"book_imageTitle__S5TcD",imageAuthor:"book_imageAuthor__2O5vg",imageYear:"book_imageYear__3Lwfm"}},81:function(e,t,n){e.exports={wrapper:"book-popover_wrapper__11qdo",age:"book-popover_age__1Hklc",annotation:"book-popover_annotation__3MbkA",tags:"book-popover_tags__IeQ8i",tag:"book-popover_tag__3e0xg",description:"book-popover_description__2Igw6"}}},[[307,1,2]]]);
//# sourceMappingURL=main.c3d93c17.chunk.js.map