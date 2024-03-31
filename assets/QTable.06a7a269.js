import{m as N,l as n,K as ge,L as bt,Q as me,g as p,c,r as A,w as V,j as De,k as je,J as mt,I as St,a as Ee,G as Oe,A as Ae,au as yt,av as ht,a9 as _t,a8 as Fe,aH as be,aF as $e,aq as wt,n as Ne,aI as qt,ap as Q,Z as Y}from"./index.f50984da.js";import{Q as Ct}from"./typesFormatter.b2f74f68.js";import{Q as Pt}from"./QList.154f72b0.js";import{c as Se,e as ye,j as kt}from"./format.e4e80033.js";import{o as xt,p as Rt,l as Tt,m as Bt,n as Ot,q as Qe,Q as Ft}from"./index.fc4b5c32.js";var $t=N({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:r}){const v=p(),{proxy:{$q:o}}=v,g=u=>{r("click",u)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:g},ge(a.default));let u,s;const d=v.vnode.key;if(d){if(u=e.props.colsMap[d],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const l=u.align==="right"?"unshift":"push";s=bt(a.default,[]),s[l](n(me,{class:u.__iconClass,name:o.iconSet.table.arrowUp}))}else s=ge(a.default);const S={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:l=>{u.sortable===!0&&e.props.sort(u),g(l)}};return n("th",S,s)}}});const Lt=["horizontal","vertical","cell","none"];var Vt=N({name:"QMarkupTable",props:{...Se,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Lt.includes(e)}},setup(e,{slots:a}){const r=p(),v=ye(e,r.proxy.$q),o=c(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(v.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:o.value},[n("table",{class:"q-table"},ge(a.default))])}});function He(e,a){return n("div",e,[n("table",{class:"q-table"},a)])}const Mt={list:Pt,table:Vt},Dt=["list","table","__qtable"];var jt=N({name:"QVirtualScroll",props:{...xt,type:{type:String,default:"list",validator:e=>Dt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:r}){let v;const o=A(null),g=c(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:s,padVirtualScroll:d,onVirtualScrollEvt:S}=Rt({virtualScrollLength:g,getVirtualScrollTarget:C,getVirtualScrollEl:q}),l=c(()=>{if(g.value===0)return[];const O=(F,x)=>({index:u.value.from+x,item:F});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map(O):e.itemsFn(u.value.from,u.value.to-u.value.from).map(O)}),b=c(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=c(()=>e.scrollTarget!==void 0?{}:{tabindex:0});V(g,()=>{s()}),V(()=>e.scrollTarget,()=>{y(),_()});function q(){return o.value.$el||o.value}function C(){return v}function _(){v=kt(q(),e.scrollTarget),v.addEventListener("scroll",S,Oe.passive)}function y(){v!==void 0&&(v.removeEventListener("scroll",S,Oe.passive),v=void 0)}function B(){let O=d(e.type==="list"?"div":"tbody",l.value.map(a.default));return a.before!==void 0&&(O=a.before().concat(O)),Ae(a.after,O)}return De(()=>{s()}),je(()=>{_()}),mt(()=>{_()}),St(()=>{y()}),Ee(()=>{y()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?He({ref:o,class:"q-table__middle "+b.value},B()):n(Mt[e.type],{...r,ref:o,class:[r.class,b.value],...w.value},B)}}});const Et={xs:2,sm:4,md:6,lg:10,xl:14};function Le(e,a,r){return{transform:a===!0?`translateX(${r.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var At=N({name:"QLinearProgress",props:{...Se,...yt,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:r}=p(),v=ye(e,r.$q),o=ht(e,Et),g=c(()=>e.indeterminate===!0||e.query===!0),u=c(()=>e.reverse!==e.query),s=c(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),d=c(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),S=c(()=>Le(e.buffer!==void 0?e.buffer:1,u.value,r.$q)),l=c(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=c(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${l.value} q-linear-progress__track--${v.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=c(()=>Le(g.value===!0?1:e.value,u.value,r.$q)),q=c(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${l.value} q-linear-progress__model--${g.value===!0?"in":""}determinate`),C=c(()=>({width:`${e.value*100}%`})),_=c(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${l.value}`);return()=>{const y=[n("div",{class:b.value,style:S.value}),n("div",{class:q.value,style:w.value})];return e.stripe===!0&&g.value===!1&&y.push(n("div",{class:_.value,style:C.value})),n("div",{class:d.value,style:s.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ae(a.default,y))}}});const Nt=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var fe=N({name:"QCheckbox",props:Tt,emits:Bt,setup(e){function a(r,v){const o=c(()=>(r.value===!0?e.checkedIcon:v.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>o.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(me,{class:"q-checkbox__icon",name:o.value})])]:[Nt]}return Ot("checkbox",a)}});let H=0;const Qt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ht=["update:fullscreen","fullscreen"];function pt(){const e=p(),{props:a,emit:r,proxy:v}=e;let o,g,u;const s=A(!1);_t(e)===!0&&V(()=>v.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&l()}),V(()=>a.fullscreen,b=>{s.value!==b&&d()}),V(s,b=>{r("update:fullscreen",b),r("fullscreen",b)});function d(){s.value===!0?l():S()}function S(){s.value!==!0&&(s.value=!0,u=v.$el.parentNode,u.replaceChild(g,v.$el),document.body.appendChild(v.$el),H++,H===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:l},Fe.add(o))}function l(){s.value===!0&&(o!==void 0&&(Fe.remove(o),o=void 0),u.replaceChild(v.$el,g),s.value=!1,H=Math.max(0,H-1),H===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),v.$el.scrollIntoView!==void 0&&setTimeout(()=>{v.$el.scrollIntoView()})))}return De(()=>{g=document.createElement("span")}),je(()=>{a.fullscreen===!0&&S()}),Ee(l),Object.assign(v,{toggleFullscreen:d,setFullscreen:S,exitFullscreen:l}),{inFullscreen:s,toggleFullscreen:d}}function zt(e,a){return new Date(e)-new Date(a)}const It={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Ut(e,a,r,v){const o=c(()=>{const{sortBy:s}=a.value;return s&&r.value.find(d=>d.name===s)||null}),g=c(()=>e.sortMethod!==void 0?e.sortMethod:(s,d,S)=>{const l=r.value.find(q=>q.name===d);if(l===void 0||l.field===void 0)return s;const b=S===!0?-1:1,w=typeof l.field=="function"?q=>l.field(q):q=>q[l.field];return s.sort((q,C)=>{let _=w(q),y=w(C);return l.rawSort!==void 0?l.rawSort(_,y,q,C)*b:_==null?-1*b:y==null?1*b:l.sort!==void 0?l.sort(_,y,q,C)*b:be(_)===!0&&be(y)===!0?(_-y)*b:$e(_)===!0&&$e(y)===!0?zt(_,y)*b:typeof _=="boolean"&&typeof y=="boolean"?(_-y)*b:([_,y]=[_,y].map(B=>(B+"").toLocaleString().toLowerCase()),_<y?-1*b:_===y?0:b)})});function u(s){let d=e.columnSortOrder;if(wt(s)===!0)s.sortOrder&&(d=s.sortOrder),s=s.name;else{const b=r.value.find(w=>w.name===s);b!==void 0&&b.sortOrder&&(d=b.sortOrder)}let{sortBy:S,descending:l}=a.value;S!==s?(S=s,l=d==="da"):e.binaryStateSort===!0?l=!l:l===!0?d==="ad"?S=null:l=!1:d==="ad"?l=!0:S=null,v({sortBy:S,descending:l,page:1})}return{columnToSort:o,computedSortMethod:g,sort:u}}const Kt={filter:[String,Object],filterMethod:Function};function Gt(e,a){const r=c(()=>e.filterMethod!==void 0?e.filterMethod:(v,o,g,u)=>{const s=o?o.toLowerCase():"";return v.filter(d=>g.some(S=>{const l=u(S,d)+"";return(l==="undefined"||l==="null"?"":l.toLowerCase()).indexOf(s)!==-1}))});return V(()=>e.filter,()=>{Ne(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:r}}function Wt(e,a){for(const r in a)if(a[r]!==e[r])return!1;return!0}function Ve(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Jt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Xt(e,a){const{props:r,emit:v}=e,o=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:r.rowsPerPageOptions.length!==0?r.rowsPerPageOptions[0]:5},r.pagination)),g=c(()=>{const l=r["onUpdate:pagination"]!==void 0?{...o.value,...r.pagination}:o.value;return Ve(l)}),u=c(()=>g.value.rowsNumber!==void 0);function s(l){d({pagination:l,filter:r.filter})}function d(l={}){Ne(()=>{v("request",{pagination:l.pagination||g.value,filter:l.filter||r.filter,getCellValue:a})})}function S(l,b){const w=Ve({...g.value,...l});if(Wt(g.value,w)===!0){u.value===!0&&b===!0&&s(w);return}if(u.value===!0){s(w);return}r.pagination!==void 0&&r["onUpdate:pagination"]!==void 0?v("update:pagination",w):o.value=w}return{innerPagination:o,computedPagination:g,isServerSide:u,requestServerInteraction:d,setPagination:S}}function Zt(e,a,r,v,o,g){const{props:u,emit:s,proxy:{$q:d}}=e,S=c(()=>v.value===!0?r.value.rowsNumber||0:g.value),l=c(()=>{const{page:x,rowsPerPage:R}=r.value;return(x-1)*R}),b=c(()=>{const{page:x,rowsPerPage:R}=r.value;return x*R}),w=c(()=>r.value.page===1),q=c(()=>r.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/r.value.rowsPerPage))),C=c(()=>b.value===0?!0:r.value.page>=q.value),_=c(()=>(u.rowsPerPageOptions.includes(a.value.rowsPerPage)?u.rowsPerPageOptions:[a.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(R=>({label:R===0?d.lang.table.allRows:""+R,value:R})));V(q,(x,R)=>{if(x===R)return;const z=r.value.page;x&&!z?o({page:1}):x<z&&o({page:x})});function y(){o({page:1})}function B(){const{page:x}=r.value;x>1&&o({page:x-1})}function O(){const{page:x,rowsPerPage:R}=r.value;b.value>0&&x*R<S.value&&o({page:x+1})}function F(){o({page:q.value})}return u["onUpdate:pagination"]!==void 0&&s("update:pagination",{...r.value}),{firstRowIndex:l,lastRowIndex:b,isFirstPage:w,isLastPage:C,pagesNumber:q,computedRowsPerPageOptions:_,computedRowsNumber:S,firstPage:y,prevPage:B,nextPage:O,lastPage:F}}const Yt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},el=["update:selected","selection"];function tl(e,a,r,v){const o=c(()=>{const C={};return e.selected.map(v.value).forEach(_=>{C[_]=!0}),C}),g=c(()=>e.selection!=="none"),u=c(()=>e.selection==="single"),s=c(()=>e.selection==="multiple"),d=c(()=>r.value.length!==0&&r.value.every(C=>o.value[v.value(C)]===!0)),S=c(()=>d.value!==!0&&r.value.some(C=>o.value[v.value(C)]===!0)),l=c(()=>e.selected.length);function b(C){return o.value[C]===!0}function w(){a("update:selected",[])}function q(C,_,y,B){a("selection",{rows:_,added:y,keys:C,evt:B});const O=u.value===!0?y===!0?_:[]:y===!0?e.selected.concat(_):e.selected.filter(F=>C.includes(v.value(F))===!1);a("update:selected",O)}return{hasSelectionMode:g,singleSelection:u,multipleSelection:s,allRowsSelected:d,someRowsSelected:S,rowsSelectedNumber:l,isRowSelected:b,clearSelection:w,updateSelection:q}}function Me(e){return Array.isArray(e)?e.slice():[]}const ll={expanded:Array},al=["update:expanded"];function nl(e,a){const r=A(Me(e.expanded));V(()=>e.expanded,u=>{r.value=Me(u)});function v(u){return r.value.includes(u)}function o(u){e.expanded!==void 0?a("update:expanded",u):r.value=u}function g(u,s){const d=r.value.slice(),S=d.indexOf(u);s===!0?S===-1&&(d.push(u),o(d)):S!==-1&&(d.splice(S,1),o(d))}return{isRowExpanded:v,setExpanded:o,updateExpanded:g}}const rl={visibleColumns:Array};function ol(e,a,r){const v=c(()=>{if(e.columns!==void 0)return e.columns;const s=e.rows[0];return s!==void 0?Object.keys(s).map(d=>({name:d,label:d.toUpperCase(),field:d,align:be(s[d])?"right":"left",sortable:!0})):[]}),o=c(()=>{const{sortBy:s,descending:d}=a.value;return(e.visibleColumns!==void 0?v.value.filter(l=>l.required===!0||e.visibleColumns.includes(l.name)===!0):v.value).map(l=>{const b=l.align||"right",w=`text-${b}`;return{...l,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:w+(l.headerClasses!==void 0?" "+l.headerClasses:"")+(l.sortable===!0?" sortable":"")+(l.name===s?` sorted ${d===!0?"sort-desc":""}`:""),__tdStyle:l.style!==void 0?typeof l.style!="function"?()=>l.style:l.style:()=>null,__tdClass:l.classes!==void 0?typeof l.classes!="function"?()=>w+" "+l.classes:q=>w+" "+l.classes(q):()=>w}})}),g=c(()=>{const s={};return o.value.forEach(d=>{s[d.name]=d}),s}),u=c(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(r.value===!0?1:0));return{colList:v,computedCols:o,computedColsMap:g,computedColspan:u}}const ee="q-table__bottom row items-center",pe={};Qe.forEach(e=>{pe[e]={}});var vl=N({name:"QTable",props:{rows:{type:Array,required:!0},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...pe,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...Se,...Qt,...rl,...Kt,...Jt,...ll,...Yt,...It},emits:["request","virtualScroll",...Ht,...al,...el],setup(e,{slots:a,emit:r}){const v=p(),{proxy:{$q:o}}=v,g=ye(e,o),{inFullscreen:u,toggleFullscreen:s}=pt(),d=c(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=A(null),l=A(null),b=c(()=>e.grid!==!0&&e.virtualScroll===!0),w=c(()=>" q-table__card"+(g.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=c(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(g.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),C=c(()=>q.value+(e.loading===!0?" q-table--loading":""));V(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{b.value===!0&&l.value!==null&&l.value.reset()});const{innerPagination:_,computedPagination:y,isServerSide:B,requestServerInteraction:O,setPagination:F}=Xt(v,j),{computedFilterMethod:x}=Gt(e,F),{isRowExpanded:R,setExpanded:z,updateExpanded:ze}=nl(e,r),te=c(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:i,descending:f}=y.value;return e.filter&&(t=x.value(t,e.filter,$.value,j)),We.value!==null&&(t=Je.value(e.rows===t?t.slice():t,i,f)),t}),he=c(()=>te.value.length),M=c(()=>{let t=te.value;if(B.value===!0)return t;const{rowsPerPage:i}=y.value;return i!==0&&(U.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(U.value,K.value)),t}),{hasSelectionMode:D,singleSelection:Ie,multipleSelection:_e,allRowsSelected:Ue,someRowsSelected:we,rowsSelectedNumber:le,isRowSelected:ae,clearSelection:Ke,updateSelection:I}=tl(e,r,M,d),{colList:Ge,computedCols:$,computedColsMap:qe,computedColspan:Ce}=ol(e,y,D),{columnToSort:We,computedSortMethod:Je,sort:ne}=Ut(e,y,Ge,F),{firstRowIndex:U,lastRowIndex:K,isFirstPage:re,isLastPage:oe,pagesNumber:G,computedRowsPerPageOptions:Xe,computedRowsNumber:W,firstPage:ie,prevPage:ue,nextPage:se,lastPage:ce}=Zt(v,_,y,B,F,he),Ze=c(()=>M.value.length===0),Ye=c(()=>{const t={};return Qe.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function et(){b.value===!0&&l.value.reset()}function tt(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?Te:null;if(b.value===!0){const f=a["top-row"],m=a["bottom-row"],h={default:k=>ke(k.item,a.body,k.index)};if(f!==void 0){const k=n("tbody",f({cols:$.value}));h.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(h.before=t);return m!==void 0&&(h.after=()=>n("tbody",m({cols:$.value}))),n(jt,{ref:l,class:e.tableClass,style:e.tableStyle,...Ye.value,scrollTarget:e.virtualScrollTarget,items:M.value,type:"__qtable",tableColspan:Ce.value,onVirtualScroll:at},h)}const i=[nt()];return t!==null&&i.unshift(t()),He({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function lt(t,i){if(l.value!==null){l.value.scrollTo(t,i);return}t=parseInt(t,10);const f=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(f!==null){const m=S.value.querySelector(".q-table__middle.scroll"),h=f.offsetTop-e.virtualScrollStickySizeStart,k=h<m.scrollTop?"decrease":"increase";m.scrollTop=h,r("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:k})}}function at(t){r("virtualScroll",t)}function Pe(){return[n(At,{class:"q-table__linear-progress",color:e.color,dark:g.value,indeterminate:!0,trackColor:"transparent"})]}function ke(t,i,f){const m=d.value(t),h=ae(m);if(i!==void 0)return i(xe({key:m,row:t,pageIndex:f,__trClass:h?"selected":""}));const k=a["body-cell"],P=$.value.map(T=>{const X=a[`body-cell-${T.name}`],Z=X!==void 0?X:k;return Z!==void 0?Z(rt({key:m,row:t,pageIndex:f,col:T})):n("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},j(T,t))});if(D.value===!0){const T=a["body-selection"],X=T!==void 0?T(ot({key:m,row:t,pageIndex:f})):[n(fe,{modelValue:h,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(Z,gt)=>{I([m],[t],Z,gt)}})];P.unshift(n("td",{class:"q-table--col-auto-width"},X))}const L={key:m,class:{selected:h}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=T=>{r("RowClick",T,t,f)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=T=>{r("RowDblclick",T,t,f)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=T=>{r("RowContextmenu",T,t,f)}),n("tr",L,P)}function nt(){const t=a.body,i=a["top-row"],f=a["bottom-row"];let m=M.value.map((h,k)=>ke(h,t,k));return i!==void 0&&(m=i({cols:$.value}).concat(m)),f!==void 0&&(m=m.concat(f({cols:$.value}))),n("tbody",m)}function xe(t){return de(t),t.cols=t.cols.map(i=>Q({...i},"value",()=>j(i,t.row))),t}function rt(t){return de(t),Q(t,"value",()=>j(t.col,t.row)),t}function ot(t){return de(t),t}function de(t){Object.assign(t,{cols:$.value,colsMap:qe.value,sort:ne,rowIndex:U.value+t.pageIndex,color:e.color,dark:g.value,dense:e.dense}),D.value===!0&&Q(t,"selected",()=>ae(t.key),(i,f)=>{I([t.key],[t.row],i,f)}),Q(t,"expand",()=>R(t.key),i=>{ze(t.key,i)})}function j(t,i){const f=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(f,i):f}const E=c(()=>({pagination:y.value,pagesNumber:G.value,isFirstPage:re.value,isLastPage:oe.value,firstPage:ie,prevPage:ue,nextPage:se,lastPage:ce,inFullscreen:u.value,toggleFullscreen:s}));function it(){const t=a.top,i=a["top-left"],f=a["top-right"],m=a["top-selection"],h=D.value===!0&&m!==void 0&&le.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return n("div",{class:k},[t(E.value)]);let P;if(h===!0?P=m(E.value).slice():(P=[],i!==void 0?P.push(n("div",{class:"q-table__control"},[i(E.value)])):e.title&&P.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),f!==void 0&&(P.push(n("div",{class:"q-table__separator col"})),P.push(n("div",{class:"q-table__control"},[f(E.value)]))),P.length!==0)return n("div",{class:k},P)}const Re=c(()=>we.value===!0?null:Ue.value);function Te(){const t=ut();return e.loading===!0&&a.loading===void 0&&t.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:Ce.value},Pe())])),n("thead",t)}function ut(){const t=a.header,i=a["header-cell"];if(t!==void 0)return t(ve({header:!0})).slice();const f=$.value.map(m=>{const h=a[`header-cell-${m.name}`],k=h!==void 0?h:i,P=ve({col:m});return k!==void 0?k(P):n($t,{key:m.name,props:P},()=>m.label)});if(Ie.value===!0&&e.grid!==!0)f.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(_e.value===!0){const m=a["header-selection"],h=m!==void 0?m(ve({})):[n(fe,{color:e.color,modelValue:Re.value,dark:g.value,dense:e.dense,"onUpdate:modelValue":Be})];f.unshift(n("th",{class:"q-table--col-auto-width"},h))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},f)]}function ve(t){return Object.assign(t,{cols:$.value,sort:ne,colsMap:qe.value,color:e.color,dark:g.value,dense:e.dense}),_e.value===!0&&Q(t,"selected",()=>Re.value,Be),t}function Be(t){we.value===!0&&(t=!1),I(M.value.map(d.value),M.value,t)}const J=c(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function st(){if(e.hideBottom===!0)return;if(Ze.value===!0){if(e.hideNoData===!0)return;const f=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,m=a["no-data"],h=m!==void 0?[m({message:f,icon:o.iconSet.table.warning,filter:e.filter})]:[n(me,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),f];return n("div",{class:ee+" q-table__bottom--nodata"},h)}const t=a.bottom;if(t!==void 0)return n("div",{class:ee},[t(E.value)]);const i=e.hideSelectedBanner!==!0&&D.value===!0&&le.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(le.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:ee+" justify-end"},dt(i));if(i.length!==0)return n("div",{class:ee},i)}function ct(t){F({page:1,rowsPerPage:t.value})}function dt(t){let i;const{rowsPerPage:f}=y.value,m=e.paginationLabel||o.lang.table.pagination,h=a.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(n("div",{class:"q-table__separator col"})),k===!0&&t.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),n(Ft,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:f,options:Xe.value,displayValue:f===0?o.lang.table.allRows:f,dark:g.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ct})])),h!==void 0)i=h(E.value);else if(i=[n("span",f!==0?{class:"q-table__bottom-item"}:{},[f?m(U.value+1,Math.min(K.value,W.value),W.value):m(1,he.value,W.value)])],f!==0&&G.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),G.value>2&&i.push(n(Y,{key:"pgFirst",...P,icon:J.value[0],disable:re.value,onClick:ie})),i.push(n(Y,{key:"pgPrev",...P,icon:J.value[1],disable:re.value,onClick:ue}),n(Y,{key:"pgNext",...P,icon:J.value[2],disable:oe.value,onClick:se})),G.value>2&&i.push(n(Y,{key:"pgLast",...P,icon:J.value[3],disable:oe.value,onClick:ce}))}return t.push(n("div",{class:"q-table__control"},i)),t}function vt(){const t=e.gridHeader===!0?[n("table",{class:"q-table"},[Te()])]:e.loading===!0&&a.loading===void 0?Pe():void 0;return n("div",{class:"q-table__middle"},t)}function ft(){const t=a.item!==void 0?a.item:i=>{const f=i.cols.map(h=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[h.label]),n("div",{class:"q-table__grid-item-value"},[h.value])]));if(D.value===!0){const h=a["body-selection"],k=h!==void 0?h(i):[n(fe,{modelValue:i.selected,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(P,L)=>{I([i.key],[i.row],P,L)}})];f.unshift(n("div",{class:"q-table__grid-item-row"},k),n(Ct,{dark:g.value}))}const m={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(m.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(m.onClick=h=>{r("RowClick",h,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(m.onDblclick=h=>{r("RowDblclick",h,i.row,i.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[n("div",m,f)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},M.value.map((i,f)=>t(xe({key:d.value(i),row:i,pageIndex:f}))))}return Object.assign(v.proxy,{requestServerInteraction:O,setPagination:F,firstPage:ie,prevPage:ue,nextPage:se,lastPage:ce,isRowSelected:ae,clearSelection:Ke,isRowExpanded:R,setExpanded:z,sort:ne,resetVirtualScroll:et,scrollTo:lt,getCellValue:j}),qt(v.proxy,{filteredSortedRows:()=>te.value,computedRows:()=>M.value,computedRowsNumber:()=>W.value}),()=>{const t=[it()],i={ref:S,class:C.value};return e.grid===!0?t.push(vt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(tt(),st()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),n("div",i,t)}}});export{vl as Q};
