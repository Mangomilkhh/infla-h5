import{n as t,o as e,c as a,w as i,i as r,a as s,d as o,r as l,e as n,b as d,t as g,m as h,F as m,g as p,h as c,j as u}from"./index-055ed3de.js";import{_ as b,a as _}from"./uni-grid.df31d81d.js";import{r as x}from"./uni-app.es.b77e4fc4.js";import{_ as f}from"./？.42aee0d1.js";import{_ as w}from"./_plugin-vue_export-helper.1b428a4d.js";const v=w({components:{},data:()=>({list:[{url:"/static/recommend/r1.png",text:"谷薯类",badge:"0",type:"primary",height:95,width:95,top:5,navigator:"grains",table_title:"谷薯类及制品"},{url:"/static/recommend/r2.png",text:"蔬菜类",badge:"1",type:"success",height:100,width:95,top:0,navigator:"vegetables",table_title:"蔬菜类及制品"},{url:"/static/recommend/r3.png",text:"水果类",badge:"99",type:"warning",height:80,width:95,top:20,navigator:"fruits",table_title:"水果类及制品"},{url:"/static/recommend/r4.png",text:"畜肉类",badge:"2",type:"error",height:85,width:100,top:15,navigator:"meat",table_title:"畜肉类及制品"},{url:"/static/recommend/r5.png",text:"蛋类",height:95,width:100,top:5,navigator:"eggs",table_title:"蛋类及制品"},{url:"/static/recommend/r6.png",text:"乳类",height:100,width:105,top:0,navigator:"milks",table_title:"乳类及制品"},{url:"/static/recommend/r7.png",text:"禽肉类",height:85,width:115,top:15,navigator:"poultry",table_title:"禽肉类及制品"},{url:"/static/recommend/r8.png",text:"坚果类",height:100,width:100,top:0,navigator:"nuts",table_title:"坚果类"},{url:"/static/recommend/r9.png",text:"油脂类",height:100,width:65,top:0,navigator:"oils",table_title:"油脂类"}]}),methods:{toTable(e){t({url:"/pages/recommend/table/table?data="+encodeURIComponent(JSON.stringify(e))})},toQuestion(){t({url:"/pages/recommend/question/question"})}}},[["render",function(t,w,v,y,j,k){const C=p,q=c,I=r,Q=x(u("uni-grid-item"),b),T=x(u("uni-grid"),_);return e(),a(I,{class:"recommend-bg"},{default:i((()=>[s(T,{column:3,"show-border":!1,square:!1},{default:i((()=>[(e(!0),o(m,null,l(j.list,((t,r)=>(e(),a(Q,{index:r,key:r},{default:i((()=>[s(I,{class:"grid-item-box",onClick:e=>k.toTable(t)},{default:i((()=>[s(C,{style:n({"margin-top":t.top+"rpx",width:t.width+"rpx",height:t.height+"rpx"}),src:t.url},null,8,["style","src"]),s(q,{class:"text"},{default:i((()=>[d(g(t.text),1)])),_:2},1024),t.badge?(e(),a(I,{key:0,class:"grid-dot"})):h("",!0)])),_:2},1032,["onClick"])])),_:2},1032,["index"])))),128))])),_:1}),s(T,{column:1,highlight:!0,onChange:k.toQuestion,"show-border":!1},{default:i((()=>[s(Q,null,{default:i((()=>[s(I,{class:"grid-item-box"},{default:i((()=>[s(C,{class:"what",style:{width:"70rpx",height:"90rpx"},src:f}),s(q,{class:"text"},{default:i((()=>[d("说明")])),_:1})])),_:1})])),_:1})])),_:1},8,["onChange"])])),_:1})}],["__scopeId","data-v-225e5227"]]);export{v as default};
