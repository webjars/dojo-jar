/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.charting.themes.Electric"]){
dojo._hasResource["dojox.charting.themes.Electric"]=true;
dojo.provide("dojox.charting.themes.Electric");
dojo.require("dojox.gfx.gradutils");
dojo.require("dojox.charting.Theme");
(function(){
var dc=dojox.charting,_1=dc.themes,_2=dc.Theme,g=_2.generateGradient,_3={type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:75};
_1.Electric=new dc.Theme({chart:{fill:"#252525",stroke:{color:"#252525"},pageStyle:{backgroundColor:"#252525",backgroundImage:"none",color:"#ccc"}},plotarea:{fill:"#252525"},axis:{stroke:{color:"#aaa",width:1},tick:{color:"#777",position:"center",font:"normal normal normal 7pt Helvetica, Arial, sans-serif",fontColor:"#777"}},series:{stroke:{width:2,color:"#ccc"},outline:null,font:"normal normal normal 8pt Helvetica, Arial, sans-serif",fontColor:"#ccc"},marker:{stroke:{width:3,color:"#ccc"},outline:null,font:"normal normal normal 8pt Helvetica, Arial, sans-serif",fontColor:"#ccc"},seriesThemes:[{fill:g(_3,"#004cbf","#06f")},{fill:g(_3,"#bf004c","#f06")},{fill:g(_3,"#43bf00","#6f0")},{fill:g(_3,"#7300bf","#90f")},{fill:g(_3,"#bf7300","#f90")},{fill:g(_3,"#00bf73","#0f9")}],markerThemes:[{fill:"#06f",stroke:{color:"#06f"}},{fill:"#f06",stroke:{color:"#f06"}},{fill:"#6f0",stroke:{color:"#6f0"}},{fill:"#90f",stroke:{color:"#90f"}},{fill:"#f90",stroke:{color:"#f90"}},{fill:"#0f9",stroke:{color:"#0f9"}}]});
_1.Electric.next=function(_4,_5,_6){
var _7=_4=="line";
if(_7||_4=="area"){
var s=this.seriesThemes[this._current%this.seriesThemes.length];
s.fill.space="plot";
if(_7){
s.stroke={width:2.5,color:s.fill.colors[1].color};
}
if(_4=="area"){
s.fill.y2=90;
}
var _8=_2.prototype.next.apply(this,arguments);
delete s.stroke;
s.fill.y2=75;
s.fill.space="shape";
return _8;
}
return _2.prototype.next.apply(this,arguments);
};
_1.Electric.post=function(_9,_a){
_9=_2.prototype.post.apply(this,arguments);
if((_a=="slice"||_a=="circle")&&_9.series.fill&&_9.series.fill.type=="radial"){
_9.series.fill=dojox.gfx.gradutils.reverse(_9.series.fill);
}
return _9;
};
})();
}
