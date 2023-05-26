import v from"./Header-e0134406.js";import{_ as M,r,o as l,c as p,a as d,b as e,w as f,F as I,G as g,J as W,I as m,p as j,e as y}from"./index-ca300ec5.js";import"./logo1-07e3e1a8.js";const N={components:{Header:v},name:"App",methods:{showInfoWindow(o){this.markers.forEach(i=>i.showInfoWindow=!1),o.showInfoWindow=!0},searchForMarker(){const i=document.querySelector("#userInput").value.split(",").map(t=>t.trim().toLowerCase());if(i.length===0)this.filteredMarkers=this.markers.slice();else{const t=this.markers.filter(w=>{const a=w.service.toLowerCase();for(const s of i)if(a.includes(s))return!0;return!1});this.filteredMarkers=t.slice()}}},created(){this.filteredMarkers=this.markers.slice()},data(){return{center:{lat:43.65107,lng:-79.347015},filteredMarkers:[],markers:[{id:"dfsldjl3r",position:{lat:43.65081,lng:-79.346949},info:"Marker 1 info window content",service:"plumbing",name:"Joe Blow",showInfoWindow:!1},{id:"dffdflksj",position:{lat:43.781564,lng:-79.312485},info:"New Marker 1 info window content",service:"plumbing",name:"Johnny Appleseed",showInfoWindow:!1},{id:"dfkldjsdf",position:{lat:43.884325,lng:-79.179215},info:"New Marker 2 info window content",service:"plumbing",name:"Tom Sawyer",showInfoWindow:!1},{id:"dffdflksj",position:{lat:43.982903,lng:-79.346674},info:"Marker 2 info window content",service:"electrician",name:"Saul Hudson",showInfoWindow:!1},{id:"dfldjsf84",position:{lat:43.875245,lng:-79.533089},info:"New Marker 1 info window content",service:"electrician",name:"Jimmy Page",showInfoWindow:!1},{id:"dfkldjsdf",position:{lat:43.778508,lng:-79.419578},info:"New Marker 2 info window content",service:"electrician",name:"Eric Clapton",showInfoWindow:!1},{id:"dfdj938df",position:{lat:43.681193,lng:-79.607079},info:"New Marker 3 info window content",service:"electrician",name:"Jimi Hendrix",showInfoWindow:!1},{id:"dfkldjsdf",position:{lat:44.126406,lng:-79.193745},info:"Marker 3 info window content",service:"toilets_exclusively",name:"Burt Kobain",showInfoWindow:!1},{id:"dflsdkfjk",position:{lat:44.01925,lng:-79.297792},info:"New Marker 1 info window content",service:"toilets_exclusively",name:"Elvis Potsley",showInfoWindow:!1},{id:"dfkdf9034",position:{lat:43.915346,lng:-79.401454},info:"New Marker 2 info window content",service:"toilets_exclusively",name:"John Flushman",showInfoWindow:!1},{id:"dsjfkl9i3",position:{lat:43.636645,lng:-79.495582},info:"Marker 6 info window content",service:"masseuse",name:"Perrell Laquarius Brown",showInfoWindow:!1},{id:"dsjfkl12i3",position:{lat:43.706413,lng:-79.544233},info:"New Marker 1 info window content",service:"masseuse",name:"Serenity Spa",showInfoWindow:!1},{id:"dsjfkl34i3",position:{lat:43.776006,lng:-79.592814},info:"New Marker 2 info window content",service:"masseuse",name:"Relaxation Retreat",showInfoWindow:!1},{id:"dsjfkl56i3",position:{lat:43.845431,lng:-79.641331},info:"New Marker 3 info window content",service:"masseuse",name:"Tranquil Touch",showInfoWindow:!1},{id:"dfdkljf83",position:{lat:43.65081,lng:-79.346949},info:"Marker 7 info window content",service:"landscaping",name:"Jamal Huggins",showInfoWindow:!1},{id:"dfdkljf12r",position:{lat:43.690332,lng:-79.307238},info:"New Marker 1 info window content",service:"landscaping",name:"Garden Guy",showInfoWindow:!1},{id:"dfdkljf56r",position:{lat:43.768357,lng:-79.22763},info:"New Marker 3 info window content",service:"landscaping",name:"Green Thumb",showInfoWindow:!1},{id:"dfdkljf78r",position:{lat:43.806874,lng:-79.187734},info:"New Marker 4 info window content",service:"landscaping",name:"Lush Landscapes",showInfoWindow:!1},{id:"dsfkldj38r",position:{lat:43.789606,lng:-79.655637},info:"Marker 8 info window content",service:"automobiles",name:"Illene Dover",showInfoWindow:!1},{id:"dsfkldj12r",position:{lat:43.846069,lng:-79.61993},info:"New Marker 1 info window content",service:"automobiles",name:"Auto Pro",showInfoWindow:!1},{id:"dsfkldj38r",position:{lat:43.789606,lng:-79.655637},info:"Marker 8 info window content",service:"automobiles",name:"Illene Dover",showInfoWindow:!1},{id:"dsfkldj12r",position:{lat:43.846069,lng:-79.61993},info:"New Marker 1 info window content",service:"automobiles",name:"Auto Pro",showInfoWindow:!1},{id:"dsfkldj34r",position:{lat:43.902202,lng:-79.58406},info:"New Marker 2 info window content",service:"automobiles",name:"Speedy Wheels",showInfoWindow:!1},{id:"dsfkldj56r",position:{lat:43.958013,lng:-79.548026},info:"New Marker 3 info window content",service:"automobiles",name:"Car Care Center",showInfoWindow:!1},{id:"dsfkldj78r",position:{lat:44.013511,lng:-79.511827},info:"New Marker 4 info window content",service:"automobiles",name:"Auto Repair Shop",showInfoWindow:!1}]}}},c=o=>(j("data-v-17a37967"),o=o(),y(),o),b={class:"container box",id:"body"},x={id:"search"},S=c(()=>e("div",{class:"field",id:"searchBar"},[e("div",{class:"control"},[e("input",{style:{"font-family":"Montserrat"},class:"input is-medium",id:"userInput",type:"text",placeholder:"Search locations..."})])],-1)),B={id:"searchBar"},C={id:"allMarkers"},G={class:"descriptionBox"},J=c(()=>e("br",null,null,-1)),A={id:"info"},F={class:"nameplusservice"},H={class:"name"},L=c(()=>e("br",null,null,-1));function P(o,i,t,w,a,s){const h=r("Header"),u=r("GMapInfoWindow"),k=r("GMapMarker"),_=r("GMapMap");return l(),p("body",null,[d(h),e("div",b,[e("div",x,[S,e("div",B,[e("button",{id:"searchButton",class:"button",onClick:i[0]||(i[0]=(...n)=>s.searchForMarker&&s.searchForMarker(...n))},"Search")])])]),d(_,{center:a.center,zoom:9.5,"map-type-id":"terrain",style:{width:"100vw",height:"900px"},class:"gm"},{default:f(()=>[e("div",C,[(l(!0),p(I,null,g(a.filteredMarkers,n=>(l(),W(k,{key:n.id,position:n.position,onClick:E=>s.showInfoWindow(n),id:"allMarkers"},{default:f(()=>[d(u,{options:{maxWidth:200},opened:n.showInfoWindow},{default:f(()=>[e("div",G,[J,e("div",A,[e("div",F,[e("p",H,"Name: "+m(n.name),1),L,e("p",null,"Service: "+m(n.service),1)])])])]),_:2},1032,["opened"])]),_:2},1032,["position","onClick"]))),128))])]),_:1},8,["center","zoom"])])}const R=M(N,[["render",P],["__scopeId","data-v-17a37967"]]);export{R as default};