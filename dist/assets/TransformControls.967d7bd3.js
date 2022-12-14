import{c2 as gt,bK as a,c3 as x,c4 as et,c5 as vt,c6 as mt,c7 as ut,c8 as Et,c9 as f,ca as m,bP as ot,bQ as st,cb as i,cc as U,cd as I,ce as It,cf as q,cg as Qt,ch as Xt}from"./index.66975801.js";const A=new gt,w=new a,Q=new a,h=new x,at={X:new a(1,0,0),Y:new a(0,1,0),Z:new a(0,0,1)},$={type:"change"},rt={type:"mouseDown"},lt={type:"mouseUp",mode:null},ht={type:"objectChange"};class qt extends et{constructor(o,s){super(),s===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),s=document),this.isTransformControls=!0,this.visible=!1,this.domElement=s,this.domElement.style.touchAction="none";const n=new zt;this._gizmo=n,this.add(n);const e=new Dt;this._plane=e,this.add(e);const l=this;function t(d,_){let T=_;Object.defineProperty(l,d,{get:function(){return T!==void 0?T:_},set:function(Y){T!==Y&&(T=Y,e[d]=Y,n[d]=Y,l.dispatchEvent({type:d+"-changed",value:Y}),l.dispatchEvent($))}}),l[d]=_,e[d]=_,n[d]=_}t("camera",o),t("object",void 0),t("enabled",!0),t("axis",null),t("mode","translate"),t("translationSnap",null),t("rotationSnap",null),t("scaleSnap",null),t("space","world"),t("size",1),t("dragging",!1),t("showX",!0),t("showY",!0),t("showZ",!0);const c=new a,M=new a,X=new x,H=new x,D=new a,j=new x,it=new a,C=new a,g=new a,v=0,P=new a;t("worldPosition",c),t("worldPositionStart",M),t("worldQuaternion",X),t("worldQuaternionStart",H),t("cameraPosition",D),t("cameraQuaternion",j),t("pointStart",it),t("pointEnd",C),t("rotationAxis",g),t("rotationAngle",v),t("eye",P),this._offset=new a,this._startNorm=new a,this._endNorm=new a,this._cameraScale=new a,this._parentPosition=new a,this._parentQuaternion=new x,this._parentQuaternionInv=new x,this._parentScale=new a,this._worldScaleStart=new a,this._worldQuaternionInv=new x,this._worldScale=new a,this._positionStart=new a,this._quaternionStart=new x,this._scaleStart=new a,this._getPointer=Yt.bind(this),this._onPointerDown=Zt.bind(this),this._onPointerHover=At.bind(this),this._onPointerMove=Ht.bind(this),this._onPointerUp=Tt.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye):this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(o){if(this.object===void 0||this.dragging===!0)return;A.setFromCamera(o,this.camera);const s=tt(this._gizmo.picker[this.mode],A);s?this.axis=s.object.name:this.axis=null}pointerDown(o){if(!(this.object===void 0||this.dragging===!0||o.button!==0)&&this.axis!==null){A.setFromCamera(o,this.camera);const s=tt(this._plane,A,!0);s&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(s.point).sub(this.worldPositionStart)),this.dragging=!0,rt.mode=this.mode,this.dispatchEvent(rt)}}pointerMove(o){const s=this.axis,n=this.mode,e=this.object;let l=this.space;if(n==="scale"?l="local":(s==="E"||s==="XYZE"||s==="XYZ")&&(l="world"),e===void 0||s===null||this.dragging===!1||o.button!==-1)return;A.setFromCamera(o,this.camera);const t=tt(this._plane,A,!0);if(!!t){if(this.pointEnd.copy(t.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),l==="local"&&s!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),s.indexOf("X")===-1&&(this._offset.x=0),s.indexOf("Y")===-1&&(this._offset.y=0),s.indexOf("Z")===-1&&(this._offset.z=0),l==="local"&&s!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),e.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(l==="local"&&(e.position.applyQuaternion(h.copy(this._quaternionStart).invert()),s.search("X")!==-1&&(e.position.x=Math.round(e.position.x/this.translationSnap)*this.translationSnap),s.search("Y")!==-1&&(e.position.y=Math.round(e.position.y/this.translationSnap)*this.translationSnap),s.search("Z")!==-1&&(e.position.z=Math.round(e.position.z/this.translationSnap)*this.translationSnap),e.position.applyQuaternion(this._quaternionStart)),l==="world"&&(e.parent&&e.position.add(w.setFromMatrixPosition(e.parent.matrixWorld)),s.search("X")!==-1&&(e.position.x=Math.round(e.position.x/this.translationSnap)*this.translationSnap),s.search("Y")!==-1&&(e.position.y=Math.round(e.position.y/this.translationSnap)*this.translationSnap),s.search("Z")!==-1&&(e.position.z=Math.round(e.position.z/this.translationSnap)*this.translationSnap),e.parent&&e.position.sub(w.setFromMatrixPosition(e.parent.matrixWorld))));else if(n==="scale"){if(s.search("XYZ")!==-1){let c=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(c*=-1),Q.set(c,c,c)}else w.copy(this.pointStart),Q.copy(this.pointEnd),w.applyQuaternion(this._worldQuaternionInv),Q.applyQuaternion(this._worldQuaternionInv),Q.divide(w),s.search("X")===-1&&(Q.x=1),s.search("Y")===-1&&(Q.y=1),s.search("Z")===-1&&(Q.z=1);e.scale.copy(this._scaleStart).multiply(Q),this.scaleSnap&&(s.search("X")!==-1&&(e.scale.x=Math.round(e.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),s.search("Y")!==-1&&(e.scale.y=Math.round(e.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),s.search("Z")!==-1&&(e.scale.z=Math.round(e.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const c=20/this.worldPosition.distanceTo(w.setFromMatrixPosition(this.camera.matrixWorld));s==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):s==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(w.copy(this.rotationAxis).cross(this.eye))*c):(s==="X"||s==="Y"||s==="Z")&&(this.rotationAxis.copy(at[s]),w.copy(at[s]),l==="local"&&w.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(w.cross(this.eye).normalize())*c),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),l==="local"&&s!=="E"&&s!=="XYZE"?(e.quaternion.copy(this._quaternionStart),e.quaternion.multiply(h.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),e.quaternion.copy(h.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),e.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent($),this.dispatchEvent(ht)}}pointerUp(o){o.button===0&&(this.dragging&&this.axis!==null&&(lt.mode=this.mode,this.dispatchEvent(lt)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(o){o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()})}attach(o){return this.object=o,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent($),this.dispatchEvent(ht),this.pointStart.copy(this.pointEnd))}getRaycaster(){return A}getMode(){return this.mode}setMode(o){this.mode=o}setTranslationSnap(o){this.translationSnap=o}setRotationSnap(o){this.rotationSnap=o}setScaleSnap(o){this.scaleSnap=o}setSize(o){this.size=o}setSpace(o){this.space=o}}function Yt(p){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:p.button};{const o=this.domElement.getBoundingClientRect();return{x:(p.clientX-o.left)/o.width*2-1,y:-(p.clientY-o.top)/o.height*2+1,button:p.button}}}function At(p){if(!!this.enabled)switch(p.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(p));break}}function Zt(p){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(p.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(p)),this.pointerDown(this._getPointer(p)))}function Ht(p){!this.enabled||this.pointerMove(this._getPointer(p))}function Tt(p){!this.enabled||(this.domElement.releasePointerCapture(p.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(p)))}function tt(p,o,s){const n=o.intersectObject(p,!0);for(let e=0;e<n.length;e++)if(n[e].object.visible||s)return n[e];return!1}const N=new vt,r=new a(0,1,0),ct=new a(0,0,0),pt=new mt,V=new x,J=new x,S=new a,dt=new mt,O=new a(1,0,0),Z=new a(0,1,0),R=new a(0,0,1),K=new a,L=new a,k=new a;class zt extends et{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const o=new ut({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),s=new Et({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=o.clone();n.opacity=.15;const e=s.clone();e.opacity=.5;const l=o.clone();l.color.setHex(16711680);const t=o.clone();t.color.setHex(65280);const c=o.clone();c.color.setHex(255);const M=o.clone();M.color.setHex(16711680),M.opacity=.5;const X=o.clone();X.color.setHex(65280),X.opacity=.5;const H=o.clone();H.color.setHex(255),H.opacity=.5;const D=o.clone();D.opacity=.25;const j=o.clone();j.color.setHex(16776960),j.opacity=.25,o.clone().color.setHex(16776960);const C=o.clone();C.color.setHex(7895160);const g=new f(0,.04,.1,12);g.translate(0,.05,0);const v=new m(.08,.08,.08);v.translate(0,.04,0);const P=new ot;P.setAttribute("position",new st([0,0,0,1,0,0],3));const d=new f(.0075,.0075,.5,3);d.translate(0,.25,0);function _(y,W){const b=new q(y,.0075,3,64,W*Math.PI*2);return b.rotateY(Math.PI/2),b.rotateX(Math.PI/2),b}function T(){const y=new ot;return y.setAttribute("position",new st([0,0,0,1,1,1],3)),y}const Y={X:[[new i(g,l),[.5,0,0],[0,0,-Math.PI/2]],[new i(g,l),[-.5,0,0],[0,0,Math.PI/2]],[new i(d,l),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new i(g,t),[0,.5,0]],[new i(g,t),[0,-.5,0],[Math.PI,0,0]],[new i(d,t)]],Z:[[new i(g,c),[0,0,.5],[Math.PI/2,0,0]],[new i(g,c),[0,0,-.5],[-Math.PI/2,0,0]],[new i(d,c),null,[Math.PI/2,0,0]]],XYZ:[[new i(new U(.1,0),D.clone()),[0,0,0]]],XY:[[new i(new m(.15,.15,.01),H.clone()),[.15,.15,0]]],YZ:[[new i(new m(.15,.15,.01),M.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new i(new m(.15,.15,.01),X.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},ft={X:[[new i(new f(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new i(new f(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new i(new f(.2,0,.6,4),n),[0,.3,0]],[new i(new f(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new i(new f(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new i(new f(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new i(new U(.2,0),n)]],XY:[[new i(new m(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new i(new m(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new i(new m(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},wt={START:[[new i(new U(.01,2),e),null,null,null,"helper"]],END:[[new i(new U(.01,2),e),null,null,null,"helper"]],DELTA:[[new I(T(),e),null,null,null,"helper"]],X:[[new I(P,e.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new I(P,e.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new I(P,e.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},yt={XYZE:[[new i(_(.5,1),C),null,[0,Math.PI/2,0]]],X:[[new i(_(.5,.5),l)]],Y:[[new i(_(.5,.5),t),null,[0,0,-Math.PI/2]]],Z:[[new i(_(.5,.5),c),null,[0,Math.PI/2,0]]],E:[[new i(_(.75,1),j),null,[0,Math.PI/2,0]]]},_t={AXIS:[[new I(P,e.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},bt={XYZE:[[new i(new It(.25,10,8),n)]],X:[[new i(new q(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new i(new q(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new i(new q(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new i(new q(.75,.1,2,24),n)]]},Pt={X:[[new i(v,l),[.5,0,0],[0,0,-Math.PI/2]],[new i(d,l),[0,0,0],[0,0,-Math.PI/2]],[new i(v,l),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new i(v,t),[0,.5,0]],[new i(d,t)],[new i(v,t),[0,-.5,0],[0,0,Math.PI]]],Z:[[new i(v,c),[0,0,.5],[Math.PI/2,0,0]],[new i(d,c),[0,0,0],[Math.PI/2,0,0]],[new i(v,c),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new i(new m(.15,.15,.01),H),[.15,.15,0]]],YZ:[[new i(new m(.15,.15,.01),M),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new i(new m(.15,.15,.01),X),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new i(new m(.1,.1,.1),D.clone())]]},St={X:[[new i(new f(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new i(new f(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new i(new f(.2,0,.6,4),n),[0,.3,0]],[new i(new f(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new i(new f(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new i(new f(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new i(new m(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new i(new m(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new i(new m(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new i(new m(.2,.2,.2),n),[0,0,0]]]},xt={X:[[new I(P,e.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new I(P,e.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new I(P,e.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function E(y){const W=new et;for(const b in y)for(let z=y[b].length;z--;){const u=y[b][z][0].clone(),G=y[b][z][1],F=y[b][z][2],B=y[b][z][3],Mt=y[b][z][4];u.name=b,u.tag=Mt,G&&u.position.set(G[0],G[1],G[2]),F&&u.rotation.set(F[0],F[1],F[2]),B&&u.scale.set(B[0],B[1],B[2]),u.updateMatrix();const nt=u.geometry.clone();nt.applyMatrix4(u.matrix),u.geometry=nt,u.renderOrder=1/0,u.position.set(0,0,0),u.rotation.set(0,0,0),u.scale.set(1,1,1),W.add(u)}return W}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=E(Y)),this.add(this.gizmo.rotate=E(yt)),this.add(this.gizmo.scale=E(Pt)),this.add(this.picker.translate=E(ft)),this.add(this.picker.rotate=E(bt)),this.add(this.picker.scale=E(St)),this.add(this.helper.translate=E(wt)),this.add(this.helper.rotate=E(_t)),this.add(this.helper.scale=E(xt)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(o){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:J;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let e=[];e=e.concat(this.picker[this.mode].children),e=e.concat(this.gizmo[this.mode].children),e=e.concat(this.helper[this.mode].children);for(let l=0;l<e.length;l++){const t=e[l];t.visible=!0,t.rotation.set(0,0,0),t.position.copy(this.worldPosition);let c;if(this.camera.isOrthographicCamera?c=(this.camera.top-this.camera.bottom)/this.camera.zoom:c=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),t.scale.set(1,1,1).multiplyScalar(c*this.size/4),t.tag==="helper"){t.visible=!1,t.name==="AXIS"?(t.position.copy(this.worldPositionStart),t.visible=!!this.axis,this.axis==="X"&&(h.setFromEuler(N.set(0,0,0)),t.quaternion.copy(n).multiply(h),Math.abs(r.copy(O).applyQuaternion(n).dot(this.eye))>.9&&(t.visible=!1)),this.axis==="Y"&&(h.setFromEuler(N.set(0,0,Math.PI/2)),t.quaternion.copy(n).multiply(h),Math.abs(r.copy(Z).applyQuaternion(n).dot(this.eye))>.9&&(t.visible=!1)),this.axis==="Z"&&(h.setFromEuler(N.set(0,Math.PI/2,0)),t.quaternion.copy(n).multiply(h),Math.abs(r.copy(R).applyQuaternion(n).dot(this.eye))>.9&&(t.visible=!1)),this.axis==="XYZE"&&(h.setFromEuler(N.set(0,Math.PI/2,0)),r.copy(this.rotationAxis),t.quaternion.setFromRotationMatrix(pt.lookAt(ct,r,Z)),t.quaternion.multiply(h),t.visible=this.dragging),this.axis==="E"&&(t.visible=!1)):t.name==="START"?(t.position.copy(this.worldPositionStart),t.visible=this.dragging):t.name==="END"?(t.position.copy(this.worldPosition),t.visible=this.dragging):t.name==="DELTA"?(t.position.copy(this.worldPositionStart),t.quaternion.copy(this.worldQuaternionStart),w.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),w.applyQuaternion(this.worldQuaternionStart.clone().invert()),t.scale.copy(w),t.visible=this.dragging):(t.quaternion.copy(n),this.dragging?t.position.copy(this.worldPositionStart):t.position.copy(this.worldPosition),this.axis&&(t.visible=this.axis.search(t.name)!==-1));continue}t.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(t.name==="X"&&Math.abs(r.copy(O).applyQuaternion(n).dot(this.eye))>.99&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="Y"&&Math.abs(r.copy(Z).applyQuaternion(n).dot(this.eye))>.99&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="Z"&&Math.abs(r.copy(R).applyQuaternion(n).dot(this.eye))>.99&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="XY"&&Math.abs(r.copy(R).applyQuaternion(n).dot(this.eye))<.2&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="YZ"&&Math.abs(r.copy(O).applyQuaternion(n).dot(this.eye))<.2&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="XZ"&&Math.abs(r.copy(Z).applyQuaternion(n).dot(this.eye))<.2&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1)):this.mode==="rotate"&&(V.copy(n),r.copy(this.eye).applyQuaternion(h.copy(n).invert()),t.name.search("E")!==-1&&t.quaternion.setFromRotationMatrix(pt.lookAt(this.eye,ct,Z)),t.name==="X"&&(h.setFromAxisAngle(O,Math.atan2(-r.y,r.z)),h.multiplyQuaternions(V,h),t.quaternion.copy(h)),t.name==="Y"&&(h.setFromAxisAngle(Z,Math.atan2(r.x,r.z)),h.multiplyQuaternions(V,h),t.quaternion.copy(h)),t.name==="Z"&&(h.setFromAxisAngle(R,Math.atan2(r.y,r.x)),h.multiplyQuaternions(V,h),t.quaternion.copy(h))),t.visible=t.visible&&(t.name.indexOf("X")===-1||this.showX),t.visible=t.visible&&(t.name.indexOf("Y")===-1||this.showY),t.visible=t.visible&&(t.name.indexOf("Z")===-1||this.showZ),t.visible=t.visible&&(t.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),t.material._color=t.material._color||t.material.color.clone(),t.material._opacity=t.material._opacity||t.material.opacity,t.material.color.copy(t.material._color),t.material.opacity=t.material._opacity,this.enabled&&this.axis&&(t.name===this.axis||this.axis.split("").some(function(M){return t.name===M}))&&(t.material.color.setHex(16776960),t.material.opacity=1)}super.updateMatrixWorld(o)}}class Dt extends i{constructor(){super(new Qt(1e5,1e5,2,2),new ut({visible:!1,wireframe:!0,side:Xt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(o){let s=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(s="local"),K.copy(O).applyQuaternion(s==="local"?this.worldQuaternion:J),L.copy(Z).applyQuaternion(s==="local"?this.worldQuaternion:J),k.copy(R).applyQuaternion(s==="local"?this.worldQuaternion:J),r.copy(L),this.mode){case"translate":case"scale":switch(this.axis){case"X":r.copy(this.eye).cross(K),S.copy(K).cross(r);break;case"Y":r.copy(this.eye).cross(L),S.copy(L).cross(r);break;case"Z":r.copy(this.eye).cross(k),S.copy(k).cross(r);break;case"XY":S.copy(k);break;case"YZ":S.copy(K);break;case"XZ":r.copy(k),S.copy(L);break;case"XYZ":case"E":S.set(0,0,0);break}break;case"rotate":default:S.set(0,0,0)}S.length()===0?this.quaternion.copy(this.cameraQuaternion):(dt.lookAt(w.set(0,0,0),S,r),this.quaternion.setFromRotationMatrix(dt)),super.updateMatrixWorld(o)}}export{qt as TransformControls,zt as TransformControlsGizmo,Dt as TransformControlsPlane};
