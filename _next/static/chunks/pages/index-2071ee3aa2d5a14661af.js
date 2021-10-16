(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7364:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(266),i=n(809),a=n.n(i),o=n(7294),s=function(){var e=(0,o.useState)(),t=e[0],n=e[1];return(0,o.useEffect)((function(){var e=function(){n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t},u=n(8216),c=n(5997),l=n(2809),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,r=n.text(),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e,t,n){var r=e.createShader(t);if(r){if(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))return r;console.log("[SHADER ERROR] ".concat(e.getShaderInfoLog(r)))}throw e.deleteShader(r),"Could not create shader"},h=function(e,t){return new Promise((function(n,r){var i=e.createTexture();if(i){var a=new Image;a.onload=function(){n(m(e,i,a))},a.src=t}}))},m=function(e,t,n){return e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.bindTexture(e.TEXTURE_2D,null),t},v=function(){function e(t,n,r){(0,u.Z)(this,e),(0,l.Z)(this,"gl",void 0),(0,l.Z)(this,"prog",void 0),this.gl=t;var i=new Uint8Array([0,1,2,2,1,3]),a=new Float32Array([-1,-1,1,-1,-1,1,1,1]),o=f(this.gl,t.VERTEX_SHADER,n),s=f(this.gl,t.FRAGMENT_SHADER,r);this.prog=function(e,t,n){var r=e.createProgram();if(r){if(e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS))return r;console.log(e.getProgramInfoLog(r))}throw e.deleteProgram(r),"Could not create Program"}(this.gl,o,s),t.useProgram(this.prog);var c=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,c),t.bufferData(t.ARRAY_BUFFER,a,t.STATIC_DRAW);var d=t.createBuffer();t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,d),t.bufferData(t.ELEMENT_ARRAY_BUFFER,i,t.STATIC_DRAW);var h=t.getAttribLocation(this.prog,"pos"),m=t.createVertexArray();t.bindVertexArray(m),t.enableVertexAttribArray(h),t.vertexAttribPointer(h,2,t.FLOAT,!1,0,0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,d)}return(0,c.Z)(e,[{key:"uniformLoc",value:function(e){return this.gl.getUniformLocation(this.prog,e)}},{key:"setFloat",value:function(e,t){var n=this.gl,r=this.uniformLoc(e);n.uniform1f(r,t)}},{key:"setInt",value:function(e,t){var n=this.gl,r=this.uniformLoc(e);n.uniform1i(r,t)}},{key:"setVec2",value:function(e,t){var n=this.gl,r=this.uniformLoc(e);n.uniform2f(r,t[0],t[1])}},{key:"setVec3",value:function(e,t){var n=this.gl,r=this.uniformLoc(e);n.uniform3f(r,t[0],t[1],t[2])}},{key:"setVec4",value:function(e,t){var n=this.gl,r=this.uniformLoc(e);n.uniform4f(r,t[0],t[1],t[2],t[3])}},{key:"quad",value:function(){var e=this.gl;e.drawElements(e.TRIANGLES,6,e.UNSIGNED_BYTE,0)}}]),e}(),x=n(1664),g=(n(6049),n(5893)),E=function(){return(0,g.jsx)("div",{className:"text-white bg-gray-900 bg-opacity-50 p-3 flex justify-center",children:(0,g.jsx)("div",{className:"container mx-2 lg:mx-auto",children:(0,g.jsxs)("div",{className:"flex justify-between",children:[(0,g.jsx)("span",{children:(0,g.jsx)(x.default,{passHref:!0,href:"/",children:(0,g.jsx)("div",{className:"btn btn-effect flex align-middle items-center py-1",children:(0,g.jsx)("h1",{className:"text-xl",children:"Mandelbrot set visualization"})})})}),(0,g.jsx)("div",{className:"flex gap-x-3",children:(0,g.jsx)("span",{className:"inline-block",children:(0,g.jsx)(x.default,{passHref:!0,href:"https://github.com/SushiWaUmai/Mandelbrot-Visualization",children:(0,g.jsx)("div",{className:"btn btn-effect flex align-middle items-center py-1",children:(0,g.jsx)("p",{className:"text-bold",children:"Github"})})})})})]})})})},p=function(){var e=(0,o.useRef)(null),t=(0,o.useState)(),n=t[0],i=t[1],u=(0,o.useState)(),c=u[0],l=u[1],f=(0,o.useState)(1),m=f[0],x=f[1],p=(0,o.useState)(80),b=p[0],w=p[1],T=(0,o.useState)(!1),R=T[0],_=T[1],j=(0,o.useState)([0,0]),N=j[0],A=j[1],y=s(),L=function(){null===c||void 0===c||c.quad()},S=function(){if(e.current){var t=window.innerWidth,r=window.innerHeight;e.current.width=t,e.current.height=r,null===n||void 0===n||n.viewport(0,0,t,r),null===c||void 0===c||c.setVec2("_screenSize",[t,r])}};(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(a().mark((function t(){var n,r,o,s,u;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.current){t.next=22;break}if(n=e.current.getContext("webgl2",{preserveDrawingBuffer:!0})){t.next=5;break}return console.log("No WebGL2 avaiable"),t.abrupt("return");case 5:return t.next=7,h(n,"gradient.png");case 7:return r=t.sent,n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,r),t.next=12,d("shaders/mandelbrot.vert");case 12:return o=t.sent,t.next=15,d("shaders/mandelbrot.frag");case 15:s=t.sent,(u=new v(n,o,s)).setInt("_tex",0),l(u),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),i(n);case 22:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();S(),t(),L()}),[]),(0,o.useEffect)((function(){var t,n=function(e){var t=window.innerWidth,n=window.innerHeight,r=e.deltaY>0?1:-1,i=Math.exp(.2*r),a=m*i-m,o=N[0]-function(e){return 2*(e/n-.5)-(t-n)/n}(e.pageX)*a,s=N[1]+function(e){return 2*(e/n-.5)}(e.pageY)*a;x(m*i),A([o,s])};return null===(t=e.current)||void 0===t||t.addEventListener("wheel",n),function(){var t;null===(t=e.current)||void 0===t||t.removeEventListener("wheel",n)}}),[e,m,N]),(0,o.useEffect)((function(){window.innerWidth;var t,n,r,i=window.innerHeight,a=function(){_(!0)},o=function(e){R&&A((function(t){return[t[0]-2*e.movementX/i*m,t[1]+2*e.movementY/i*m]}))},s=function(){_(!1)};return null===(t=e.current)||void 0===t||t.addEventListener("mousedown",a),null===(n=e.current)||void 0===n||n.addEventListener("mousemove",o),null===(r=e.current)||void 0===r||r.addEventListener("mouseup",s),function(){var t,n,r;null===(t=e.current)||void 0===t||t.removeEventListener("mousedown",a),null===(n=e.current)||void 0===n||n.removeEventListener("mousemove",o),null===(r=e.current)||void 0===r||r.removeEventListener("mouseup",s)}}),[R,N,m]),(0,o.useEffect)((function(){null===c||void 0===c||c.setFloat("_scale",m),null===c||void 0===c||c.setVec2("_center",N),L()}),[N,c]),(0,o.useEffect)((function(){null===c||void 0===c||c.setFloat("_iterations",b),L()}),[b,c]),(0,o.useEffect)((function(){S(),L()}),[c,y]);return(0,g.jsxs)("main",{children:[(0,g.jsx)("canvas",{className:"block absolute top-0 left-0 right-0 bottom-0",ref:e}),(0,g.jsxs)("div",{className:"absolute top-0 left-0 right-0",children:[(0,g.jsx)(E,{}),(0,g.jsx)("div",{className:"bg-gray-800 bg-opacity-50 flex justify-center",children:(0,g.jsxs)("div",{className:"flex justify-between container",children:[(0,g.jsxs)("div",{className:"flex align-middle items-center mx-3 gap-x-3",children:[(0,g.jsx)("label",{htmlFor:"Iterations",className:"text-white",children:"Iterations"}),(0,g.jsx)("input",{type:"range",min:1,max:500,value:b,onChange:function(e){return w(parseInt(e.target.value))}})]}),(0,g.jsxs)("div",{className:"flex flex-row-reverse mx-3 gap-x-3",children:[(0,g.jsx)("div",{className:"bg-blue-400 rounded px-3 py-2 my-2",children:(0,g.jsx)("button",{onClick:function(){if(e.current){var t=document.createElement("a");t.download="Mandelbrot.png",t.href=e.current.toDataURL("img/png"),t.click()}},children:(0,g.jsx)("p",{className:"text-bold",children:"Download"})})}),(0,g.jsx)("div",{className:"bg-green-400 rounded px-3 py-2 my-2",children:(0,g.jsx)("button",{onClick:function(){A([0,0]),_(!1),x(1),w(80)},children:(0,g.jsx)("p",{className:"text-bold",children:"Reset"})})})]})]})})]})]})},b=n(9008),w=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(b.default,{children:[(0,g.jsx)("title",{children:"Mandelbrot set visualization"}),(0,g.jsx)("meta",{property:"og:title",content:"Mandelbrot set visualization"}),(0,g.jsx)("meta",{name:"description",property:"og:description",content:"See the mandelbrot set in real time!"}),(0,g.jsx)("meta",{name:"keywords",content:"mandelbrot visualization interactive realtime webgl"}),(0,g.jsx)("meta",{property:"og:image",itemProp:"image",content:"screenshot.png"})]}),(0,g.jsx)(p,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7364)}])}},function(e){e.O(0,[831,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);