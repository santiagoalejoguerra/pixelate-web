(this["webpackJsonppixelate-web"]=this["webpackJsonppixelate-web"]||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/britta.65342444.png"},13:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(18),a(19),a(9)),l=a(1),s=a(2),h=a(4),u=a(3),p=a(5),m=a.n(p),d=a(10),g=a(11),f=a.n(g),v=(a(21),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={crop:{unit:"%",width:100,height:100}},n.onCropChange=function(e,t){n.setState({crop:e})},n.onCropComplete=function(e){n.makeClientCrop(e)},n.onImageLoaded=function(e){n.imageRef=e},console.log("Paso el constructor"),n}return Object(s.a)(a,[{key:"makeClientCrop",value:function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.imageRef&&t.width&&t.height&&this.props.callbackImgCropped({image:this.imageRef,crop:t});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCroppedImg",value:function(e,t,a){var n=this,r=document.createElement("canvas"),c=e.naturalWidth/e.width,i=e.naturalHeight/e.height;return r.width=t.width,r.height=t.height,r.getContext("2d").drawImage(e,t.x*c,t.y*i,t.width*c,t.height*i,0,0,t.width,t.height),new Promise((function(e,t){r.toBlob((function(t){t?(t.name=a,window.URL.revokeObjectURL(n.fileUrl),n.fileUrl=window.URL.createObjectURL(t),e(n.fileUrl)):console.error("Canvas is empty")}),"image/jpeg")}))}},{key:"render",value:function(){var e=this.props.src,t=this.state,a=t.crop;t.croppedImageUrl;return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{src:e,ruleOfThirds:!0,onComplete:this.onCropComplete,onImageLoaded:this.onImageLoaded,crop:a,onChange:this.onCropChange}))}}]),a}(n.PureComponent)),C=a(6),b=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.distance,n=e.color;return r.a.createElement("div",{className:"pixelateItem "+t,style:{marginLeft:a,backgroundColor:n}})}}]),a}(n.Component),y=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).image=new Image,n.arrayColors=[],n.counts={},n.state={distance:1,palette:e.paletteSelected},n}return Object(s.a)(a,[{key:"createImage",value:function(e){this.image=e||new Image,this.image.height=1|this.image.height,this.image.width=1|this.image.width}},{key:"render",value:function(){var e=this;this.createImage(this.props.image);var t=this.props,a=t.withPalette,n=t.type,c=t.distance,i=t.pixelsToConvert,o=t.paletteSelected,l=t.crop,s=l?l.width:this.image.width,h=l?l.height:this.image.height,u=Object(C.a)(Array(Math.floor(h*i/s)+1).keys()),p=Object(C.a)(Array(i).keys());this.arrayColors=[],this.arrayColors=function(e,t,a,n,r){var c,i,o=[],l=document.createElement("canvas"),s=l.getContext("2d"),h=r?r.width:e.width,u=r?r.height:e.height;l.width=e.width,l.height=e.height;var p=r?r.y:0,m=r?r.x:0,d=h/(t-1)+1e-10;if(s.drawImage(e,0,0,e.width,e.height),!isNaN(d)&&d>0)for(var g=u+d+p,f=h+d+m,v=p;v<g;v+=d)for(var C=m;C<f;C+=d){c=C,i=v,C>=h+m&&(c=C-(d-h%d/2)+1),v>=u&&(i=v-(d-u%d/2)+1);var b=s.getImageData(c,i,1,1).data;n&&a.length>0&&(b=k(b,a)),o.push(b)}return o}(this.image,i,o,a,l),this.counts={};var m={};this.arrayColors.forEach((function(t,a){e.counts[t]=e.counts[t]+1||1,m[a]=[[Math.floor(a/i),a%i],[t[0],t[1],t[2]]]}));var d=function(e,t,a,n,c){var i,o=0;return e.map((function(e){return r.a.createElement("div",{width:"100%",key:e,style:{margin:n-8,display:"block ruby"}},i=c&&c[o]?t.map((function(t){return i=c&&c[o]?c[o++]:"black",r.a.createElement(b,{key:e+""+t,type:a,distance:n,color:"rgba(".concat(i[0],",").concat(i[1],",").concat(i[2],",",255,")")})})):r.a.createElement("div",null))}))}(u,p,n,c,this.arrayColors),g=this.counts;return r.a.createElement("div",{className:"pixeled"},r.a.createElement("div",{style:{backgroundColor:"gray"}},d),r.a.createElement("h1",null,"Quantity of different colors"),r.a.createElement("div",null,Object.keys(this.counts).map((function(e){return r.a.createElement("div",{key:e}," ",e+" - "+g[e])}))),r.a.createElement("h1",null,"Dictionary"),r.a.createElement("div",null,JSON.stringify(m)))}}]),a}(r.a.Component);function w(e,t){var a,n=0;for(a=0;a<3;a++)n+=(e[a]-t[a])*(e[a]-t[a]);return Math.sqrt(n)}function k(e,t){var a=[],n=w(e,t[0]);return t.forEach((function(t){w(e,t)<=n&&(a=t,n=w(e,t))})),a}var E=function(e){var t=new Image;return t.src=e,t},I=a(12),O={withPalette:!0,square:!1,distance:1,pixelsToConvert:5,paletteSelected:[[140,143,174],[88,69,99],[62,33,55],[154,99,72],[215,155,125],[245,237,186],[192,199,65],[100,125,52],[228,148,58],[157,48,59],[210,100,113],[112,55,127],[126,196,193],[52,133,157],[23,67,75],[31,14,28],[0,0,0],[255,255,255]],image:E(a.n(I).a),crop:{aspect:16/9}},j=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).palette=O.paletteSelected,e.state=O,e.handleInputChange=function(t){var a=t.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;e.setState(Object(o.a)({},r,n))},e.handleInputChangeFile=function(t){var a=t.target,n=URL.createObjectURL(a.files[0]),r=E(n);r.onload=function(){e.setState({image:r})}},e.handleInputChangePalette=function(t){var a=t.target,n=a.checked,r=a.name.split(","),c=[Number(r[0]),Number(r[1]),Number(r[2])];if(console.log(c),n){var i=e.state.paletteSelected;i.push(c),e.setState({paletteSelected:i})}else{var o=e.state.paletteSelected;e.setState({paletteSelected:o.filter((function(e){return console.log(e,c,e.includes(c),e.every((function(e){return c.includes(e)}))),!e.every((function(e){return c.includes(e)}))}))})}},e.callbackImgCropped=function(t){e.setState({imgCropped:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.withPalette,n=t.square,c=t.distance,i=t.pixelsToConvert,o=t.file,l=t.image,s=t.imgCropped;return console.log("Img cropped:",s?s.crop:""),r.a.createElement("div",null,r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"App-img"},r.a.createElement(v,{src:l.src,callbackImgCropped:this.callbackImgCropped})),r.a.createElement("div",{className:"parameters"},r.a.createElement("div",null,"Load image ",r.a.createElement("br",null),r.a.createElement("input",{name:"file",type:"file",checked:o,accept:"image/*",onChange:this.handleInputChangeFile})),r.a.createElement("div",null,"With limited palette?",r.a.createElement("input",{name:"withPalette",type:"checkbox",checked:a,onChange:this.handleInputChange})),r.a.createElement("div",null,"Square?",r.a.createElement("input",{name:"square",type:"checkbox",checked:n,onChange:this.handleInputChange})),r.a.createElement("div",null,"Pixels throughout:",r.a.createElement("input",{name:"pixelsToConvert",type:"number",defaultValue:this.state.pixelsToConvert,checked:i,onChange:this.handleInputChange}))),r.a.createElement("div",{className:"parameters"},r.a.createElement("div",null,"Select palette colors",this.palette.map((function(t,a){return r.a.createElement("div",{key:t,style:{backgroundColor:"rgba(".concat(t[0],",").concat(t[1],",").concat(t[2],",",255,")"),color:"rgba(".concat(255-t[0],",").concat(255-t[1],",").concat(255-t[2],",",255,")")}},r.a.createElement("input",{name:t,type:"checkbox",checked:e.state.paletteSelected.find((function(e){return e===t})),onChange:e.handleInputChangePalette}),r.a.createElement("label",null,t[0]+" "+t[1]+" "+t[2]))}))))),r.a.createElement(y,{image:s&&s.image,crop:s&&s.crop,withPalette:a,type:n?"square":"circle",distance:c,paletteSelected:this.state.paletteSelected,pixelsToConvert:Number(i)}))}}]),a}(n.Component);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.3a58a31a.chunk.js.map