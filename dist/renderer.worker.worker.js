(()=>{"use strict";var e={766:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.shuffle=void 0,t.shuffle=function(e){const t=e;for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}},904:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AssertLessOrEqualThanError=t.AssertLessThanError=t.AssertGreaterOrEqualThanError=t.AssertGreaterThanError=t.AssertIntegerError=t.AssertError=t.assertLessOrEqualThan=t.assertLessThan=t.assertGreaterOrEqualThan=t.assertGreaterThan=t.assertInteger=void 0,t.assertInteger=function(e){if(!Number.isInteger(e))throw new n},t.assertGreaterThan=function(e,t){if(e<=t)throw new s},t.assertGreaterOrEqualThan=function(e,t){if(e<t)throw new i},t.assertLessThan=function(e,t){if(e>=t)throw new o},t.assertLessOrEqualThan=function(e,t){if(e>t)throw new a};class r extends Error{}t.AssertError=r;class n extends r{}t.AssertIntegerError=n;class s extends r{}t.AssertGreaterThanError=s;class i extends r{}t.AssertGreaterOrEqualThanError=i;class o extends r{}t.AssertLessThanError=o;class a extends r{}t.AssertLessOrEqualThanError=a},469:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Color=void 0;const n=r(904),s=r(629);class i{constructor(e,t,r){this.red=e,this.green=t,this.blue=r,e>255?e=255:e<0&&(e=0),t>255?t=255:t<0&&(t=0),r>255?r=255:r<0&&(r=0),(0,n.assertLessOrEqualThan)(e,255),(0,n.assertLessOrEqualThan)(t,255),(0,n.assertLessOrEqualThan)(r,255);const s=e=>1===e.length?"0"+e:e;this.hex="#"+s(this.red.toString(16))+s(this.green.toString(16))+s(this.blue.toString(16))}getRed(){return this.red}getGreen(){return this.green}getBlue(){return this.blue}mix(e,t){return new i(Math.round(this.red*(1-t)+e.getRed()*t),Math.round(this.green*(1-t)+e.getGreen()*t),Math.round(this.blue*(1-t)+e.getBlue()*t))}toHexFormat(){return this.hex}equals(e){return this.blue===e.getBlue()&&this.red===e.getRed()&&this.green===e.getGreen()}toArray(){return[this.red,this.green,this.blue]}static random(){return new i((0,s.randomInt)(0,255),(0,s.randomInt)(0,255),(0,s.randomInt)(0,255))}static fromHex(e){return e.startsWith("#")&&(e=e.slice(1)),new i(parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16))}}t.Color=i},629:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.randomInt=void 0,t.randomInt=function(e,t){const r=t-e+1;return Math.floor(Math.random()*r)+e}},415:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CommonRenderer=void 0;const n=r(469),s=n.Color.fromHex("#000000"),i=n.Color.fromHex("#ffffff"),o=n.Color.fromHex("#F8CB2E"),a=n.Color.fromHex("#2155CD"),h=n.Color.fromHex("#F0E9D2"),c=n.Color.fromHex("#575757"),g=n.Color.fromHex("#ff0000"),l=[n.Color.fromHex("#ffffff"),n.Color.fromHex("#03fcc2"),n.Color.fromHex("#03cafc"),n.Color.fromHex("#aaf200"),n.Color.fromHex("#a705f7"),n.Color.fromHex("#ff0000"),n.Color.fromHex("#ff00f2"),n.Color.fromHex("#ffffff"),n.Color.fromHex("#00ff00"),n.Color.fromHex("#0000ff")],u=(e,t,r)=>new n.Color(e,t,r),f=(e,t)=>s.mix(g,e/t),T=(e,t)=>s.mix(g,e/t),m=(e,t)=>s.mix(g,e/t);t.CommonRenderer=class{constructor(){}render(e,t,r,g,d,O,E,y){const S=y.getArray();this.empty&&this.empty.width===t&&this.empty.height===r||(this.empty=new ImageData(new Uint8ClampedArray(t*r*4).map(((e,t)=>t%4==3?255:0)),t,r));const A=new ImageData(new Uint8ClampedArray(this.empty.data),t,r),H=(e,r,n)=>{const s=[];let i=O,o=O;e<0&&(i+=e,e=0),r<0&&(o+=r,r=0),e+O>=A.width&&(i=A.width-e),r+O>=A.height&&(o=A.height-r);for(let e=0;e<i;e++)s.push(n.getRed(),n.getGreen(),n.getBlue(),255);const a=4*e,h=4*t;for(let e=0;e<o;e++)A.data.set(s,h*(r+e)+a)};let C=0,p=0;if("children"===E||"step"===E||"attack"===E||"lifetime"===E||"energy"===E)for(let e=0;e<y.getWidth();e++)for(let e=0;e<y.getHeight();e++)1===S[p]&&C<S[p+1]&&(C=S[p+1]),p+=y.getItemLength();p=0;for(let e=0;e<y.getWidth();e++)for(let t=0;t<y.getHeight();t++){const r=g+e*O;if(r+O<0||r>=A.width){p+=y.getItemLength();continue}const L=d+t*O;if(L+O<0||L>=A.height)p+=y.getItemLength();else{switch(S[p]){case 0:break;case 1:let e;e="energy"===E?(b=S[p+1],w=C,s.mix(o,b/w)):"lifetime"===E?(N=S[p+1],v=C,i.mix(s,N/v)):"genesis"===E?(R=S[p+1],I=S[p+2],x=S[p+3],new n.Color(R,I,x)):"supply"===E?u(S[p+1],S[p+2],S[p+3]):"action"===E?(_=S[p+1],l[_]):"children"===E?T(S[p+1],C):"attack"===E?f(S[p+1],C):"step"===E?m(S[p+1],C):a,H(r,L,e);break;case 2:H(r,L,h);break;case 3:H(r,L,c)}p+=y.getItemLength()}}var _,R,I,x,N,v,b,w;e(A)}}},40:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractCell=void 0,t.AbstractCell=class{update(e,t){}isStatic(){return!0}isEmpty(){return!1}getId(){return 0}}},347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OrganicCell=void 0;const n=r(40);class s extends n.AbstractCell{constructor(e){super(),this.energy=e}getEnergy(){return this.energy}getType(){return"organic"}serialize(){return{type:"organic",energy:this.energy}}}t.OrganicCell=s},730:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OrganismCell=void 0;const n=r(40),s=r(890),i=r(347),o=r(48),a=r(766);class h extends n.AbstractCell{constructor(e,t,r,n){super(),this.id=e,this.genome=t,this.energy=r,this.direction=n,this.lifetime=0,this.lastAction=null,this.energyFromPhotosynthesis=0,this.energyFromChemosynthesis=0,this.energyFromOrganic=0,this.energyBuffer=0,this.childrenCount=0,this.stepCount=0,this.attackCount=0}getId(){return this.id}getType(){return"organism"}getLifetime(){return this.lifetime}getEnergy(){return this.energy}getDirection(){return this.direction}getGenome(){return this.genome}update(e,t){if(this.energy<=0)return void(0===this.energyBuffer?e.replace((e=>e.createEmpty())):e.replace((e=>e.createOrganic(this.energyBuffer))));if(this.lifetime>=t.organismMaxLifetime)return void e.replace((e=>e.createOrganic(this.energy)));const r=(0,s.getOffset)(this.direction),n=e.getByOffest(r[0],r[1]),i=this.genome.getAction(this,n);i===o.OrganismAction.STEP?this.makeStep(e):i===o.OrganismAction.ROTATE_LEFT?this.rotateLeft():i===o.OrganismAction.ROTATE_RIGHT?this.rotateRight():i===o.OrganismAction.DIVIDE?this.divide(e):i===o.OrganismAction.ATTACK?this.attact(e):i===o.OrganismAction.EAT?this.eat(e):i===o.OrganismAction.PHOTOSYNTHESIS?this.photosynthesis(t.photosynthesisEnergy):i===o.OrganismAction.CHEMOSYNTHESIS&&this.chemosynthesis(t.chemosynthesisEnergy),this.lastAction=i,this.lifetime++}rotateLeft(){this.direction=(0,s.rotateLeft)(this.direction),this.changeEnergy(-1)}rotateRight(){this.direction=(0,s.rotateRight)(this.direction),this.changeEnergy(-1)}makeStep(e){const t=(0,s.getOffset)(this.direction);e.moveByOffest(t[0],t[1]),this.changeEnergy(-1),this.stepCount++}divide(e){this.changeEnergy(-5);for(const t of(0,a.shuffle)(Object.keys(s.Direction))){const r=(0,s.getOffset)(s.Direction[t]);if(e.getByOffest(r[0],r[1]).isEmpty())return e.moveByOffest(r[0],r[1]),this.changeEnergy(Math.floor(this.energy/-2)),void(this.energy>0&&(e.replace((e=>e.createOrganism(this.genome.clone(),this.energy,this.direction))),this.childrenCount++))}this.energy>50?e.replace((e=>e.createOrganism(this.genome.clone(),Math.floor(this.energy/2),(0,s.randomDirection)()))):this.energy=0}attact(e){const t=(0,s.getOffset)(this.direction),r=e.getByOffest(t[0],t[1]);r instanceof h&&r.kill(),this.attackCount++,this.changeEnergy(-1)}eat(e){const t=(0,s.getOffset)(this.direction),r=e.getByOffest(t[0],t[1]);r instanceof i.OrganicCell&&(e.deleteByOffset(t[0],t[1]),e.moveByOffest(t[0],t[1]),this.changeEnergy(r.getEnergy()),this.energyFromOrganic+=r.getEnergy()),this.changeEnergy(-1)}photosynthesis(e){this.energyFromPhotosynthesis+=e,this.changeEnergy(e)}chemosynthesis(e){this.energyFromChemosynthesis+=e,this.changeEnergy(e)}changeEnergy(e){this.energy+=e,this.energy>255?this.energy=255:this.energy<0&&(this.energy=0)}kill(){0!==this.energy&&(this.energyBuffer=this.energy,this.energy=0)}isStatic(){return!1}isSimilar(e){return this.genome.isSimilar(e.getGenome())}getColor(){return this.genome.getColor()}getEnergyFromOrganic(){return this.energyFromOrganic}getEnergyFromPhotosynthesis(){return this.energyFromPhotosynthesis}getEnergyFromChemosynthesis(){return this.energyFromChemosynthesis}getChildrenCount(){return this.childrenCount}getAttackCount(){return this.attackCount}getStepCount(){return this.stepCount}getLastAction(){return this.lastAction}serialize(){return{id:this.id,type:"organism",lifetime:this.lifetime,energy:this.energy,color:this.getColor().toHexFormat(),direction:this.direction.toString(),lastAction:this.lastAction,childrenCount:this.childrenCount,attackCount:this.attackCount,stepCount:this.stepCount}}}t.OrganismCell=h},48:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.randomAction=t.OrganismAction=void 0;const n=r(629);var s;!function(e){e.ROTATE_LEFT="ROTATE_LEFT",e.ROTATE_RIGHT="ROTATE_RIGHT",e.STEP="STEP",e.ATTACK="ATTACK",e.EAT="EAT",e.DIVIDE="DIVIDE",e.NOTHING="NOTHING",e.PHOTOSYNTHESIS="PHOTOSYNTHESIS",e.CHEMOSYNTHESIS="CHEMOSYNTHESIS"}(s=t.OrganismAction||(t.OrganismAction={})),t.randomAction=function(){const e=Object.keys(s);return s[e[(0,n.randomInt)(0,e.length-1)]]}},890:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.rotateRight=t.rotateLeft=t.randomDirection=t.getOffset=t.Direction=void 0;const n=r(629);var s;!function(e){e.NORTH="NORTH",e.NORTH_EAST="NORTH_EAST",e.NORTH_WEST="NORTH_WEST",e.SOUTH="SOUTH",e.SOUTH_EAST="SOUTH_EAST",e.SOUTH_WEST="SOUTH_WEST",e.EAST="EAST",e.WEST="WEST"}(s=t.Direction||(t.Direction={})),t.getOffset=function(e){switch(e){case s.NORTH:return[0,-1];case s.NORTH_EAST:return[1,-1];case s.NORTH_WEST:return[-1,-1];case s.SOUTH:return[0,1];case s.SOUTH_EAST:return[1,1];case s.SOUTH_WEST:return[-1,1];case s.EAST:return[1,0];case s.WEST:return[-1,0]}},t.randomDirection=function(){return s[Object.keys(s)[(0,n.randomInt)(0,7)]]},t.rotateLeft=function(e){switch(e){case s.NORTH:return s.NORTH_WEST;case s.NORTH_EAST:return s.NORTH;case s.NORTH_WEST:return s.WEST;case s.SOUTH:return s.SOUTH_EAST;case s.SOUTH_EAST:return s.EAST;case s.SOUTH_WEST:return s.SOUTH;case s.EAST:return s.NORTH_EAST;case s.WEST:return s.SOUTH_WEST}},t.rotateRight=function(e){switch(e){case s.NORTH:return s.NORTH_EAST;case s.NORTH_EAST:return s.EAST;case s.NORTH_WEST:return s.NORTH;case s.SOUTH:return s.SOUTH_WEST;case s.SOUTH_EAST:return s.SOUTH;case s.SOUTH_WEST:return s.WEST;case s.EAST:return s.SOUTH_EAST;case s.WEST:return s.NORTH_WEST}}},158:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Data=void 0;const n=r(730),s=r(48),i={empty:0,organism:1,organic:2,wall:3},o={direction:1,energy:1,lifetime:1,genesis:3,supply:3,attack:1,step:1,children:1,action:1},a={NORTH:0,NORTH_EAST:1,NORTH_WEST:2,SOUTH:3,SOUTH_EAST:4,SOUTH_WEST:5,EAST:6,WEST:7},h={[s.OrganismAction.ROTATE_LEFT]:1,[s.OrganismAction.ROTATE_RIGHT]:2,[s.OrganismAction.STEP]:3,[s.OrganismAction.ATTACK]:4,[s.OrganismAction.EAT]:5,[s.OrganismAction.DIVIDE]:6,[s.OrganismAction.NOTHING]:7,[s.OrganismAction.PHOTOSYNTHESIS]:8,[s.OrganismAction.CHEMOSYNTHESIS]:9};class c{constructor(e,t,r,n){this.array=e,this.payload=t,this.width=r,this.height=n,this.itemLength=this.payload?o[this.payload]+1:1}static create(e,t){const r=e.getGrid(),s=r.getWidth(),g=r.getHeight(),l=t?o[t]:0,u=new Uint8Array(s*g*(l+1));let f=0;for(let e=0;e<s;e++)for(let s=0;s<g;s++){const o=r.getCell(e,s);if(u[f++]=i[o.getType()],o instanceof n.OrganismCell)switch(t){case"direction":u[f]=a[o.getDirection()];break;case"energy":u[f]=o.getEnergy();break;case"lifetime":u[f]=o.getLifetime();break;case"genesis":const e=o.getColor().toArray();u[f]=e[0],u[f+1]=e[1],u[f+2]=e[2];break;case"supply":const t=o.getEnergyFromOrganic(),r=o.getEnergyFromPhotosynthesis(),n=o.getEnergyFromChemosynthesis(),s=Math.max(t,r,n);0===s?(u[f]=255,u[f+1]=255,u[f+2]=255):(u[f]=Math.trunc(255*t/s),u[f+1]=Math.trunc(255*r/s),u[f+2]=Math.trunc(255*n/s));break;case"attack":u[f]=o.getAttackCount();break;case"step":u[f]=o.getStepCount();break;case"children":u[f]=o.getChildrenCount();break;case"action":const i=o.getLastAction();u[f]=null===i?0:h[i]}f+=l}return new c(u,t,s,g)}getArray(){return this.array}getPayload(){return this.payload}getWidth(){return this.width}getHeight(){return this.height}getItemLength(){return this.itemLength}}t.Data=c}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(()=>{const e=r(158),t=r(415),n=self,s=new t.CommonRenderer;let i=[];setTimeout((function t(){if(i.length){const t=i.shift(),r=new e.Data(t.data.array,t.data.payload,t.data.width,t.data.height);s.render((e=>{n.postMessage({id:t.id,data:e},[e.data.buffer])}),t.width,t.height,t.offsetX,t.offsetY,t.scale,t.mode,r)}setTimeout(t,0)}),0),n.addEventListener("message",(e=>{i.push(e.data)}))})()})();