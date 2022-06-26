(()=>{"use strict";var e={766:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.shuffle=void 0,t.shuffle=function(e){const t=e;for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}},904:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AssertLessOrEqualThanError=t.AssertLessThanError=t.AssertGreaterOrEqualThanError=t.AssertGreaterThanError=t.AssertIntegerError=t.AssertError=t.assertLessOrEqualThan=t.assertLessThan=t.assertGreaterOrEqualThan=t.assertGreaterThan=t.assertInteger=void 0,t.assertInteger=function(e){if(!Number.isInteger(e))throw new s},t.assertGreaterThan=function(e,t){if(e<=t)throw new n},t.assertGreaterOrEqualThan=function(e,t){if(e<t)throw new i},t.assertLessThan=function(e,t){if(e>=t)throw new a},t.assertLessOrEqualThan=function(e,t){if(e>t)throw new o};class r extends Error{}t.AssertError=r;class s extends r{}t.AssertIntegerError=s;class n extends r{}t.AssertGreaterThanError=n;class i extends r{}t.AssertGreaterOrEqualThanError=i;class a extends r{}t.AssertLessThanError=a;class o extends r{}t.AssertLessOrEqualThanError=o},469:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Color=void 0;const s=r(904),n=r(629);class i{constructor(e,t,r){this.red=e,this.green=t,this.blue=r,e>255?e=255:e<0&&(e=0),t>255?t=255:t<0&&(t=0),r>255?r=255:r<0&&(r=0),(0,s.assertLessOrEqualThan)(e,255),(0,s.assertLessOrEqualThan)(t,255),(0,s.assertLessOrEqualThan)(r,255);const n=e=>1===e.length?"0"+e:e;this.hex="#"+n(this.red.toString(16))+n(this.green.toString(16))+n(this.blue.toString(16))}getRed(){return this.red}getGreen(){return this.green}getBlue(){return this.blue}mix(e,t){return new i(Math.round(this.red*t+e.getRed()*(1-t)),Math.round(this.green*t+e.getGreen()*(1-t)),Math.round(this.blue*t+e.getBlue()*(1-t)))}toHexFormat(){return this.hex}equals(e){return this.blue===e.getBlue()&&this.red===e.getRed()&&this.green===e.getGreen()}toArray(){return[this.red,this.green,this.blue]}static random(){return new i((0,n.randomInt)(0,255),(0,n.randomInt)(0,255),(0,n.randomInt)(0,255))}static fromHex(e){return e.startsWith("#")&&(e=e.slice(1)),new i(parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16))}}t.Color=i},629:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.randomInt=void 0,t.randomInt=function(e,t){const r=t-e+1;return Math.floor(Math.random()*r)+e}},415:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CommonRenderer=void 0;const s=r(469),n=s.Color.fromHex("#000000"),i=s.Color.fromHex("#ffffff"),a=s.Color.fromHex("#F8CB2E"),o=s.Color.fromHex("#2155CD"),c=s.Color.fromHex("#F0E9D2");t.CommonRenderer=class{constructor(){}render(e,t,r,h,g,T,l,u){const d=u.getArray();this.empty&&this.empty.width===t&&this.empty.height===r||(this.empty=new ImageData(new Uint8ClampedArray(t*r*4).map(((e,t)=>t%4==3?255:0)),t,r));const f=new ImageData(new Uint8ClampedArray(this.empty.data),t,r),O=(e,r,s)=>{const n=[];let i=T,a=T;e<0&&(i+=e,e=0),r<0&&(a+=r,r=0),e+T>=f.width&&(i=f.width-e),r+T>=f.height&&(a=f.height-r);for(let e=0;e<i;e++)n.push(s[0],s[1],s[2],255);const o=4*e,c=4*t;for(let e=0;e<a;e++)f.data.set(n,c*(r+e)+o)};let E=0;for(let e=0;e<u.getWidth();e++)for(let t=0;t<u.getHeight();t++){const r=h+e*T;if(r+T<0||r>=f.width){E+=u.getItemLength();continue}const p=g+t*T;if(p+T<0||p>=f.height)E+=u.getItemLength();else{switch(d[E]){case 0:case 3:break;case 1:let e;e="energy"===l?(_=d[E+1],a.mix(n,_/255)):"lifetime"===l?(A=d[E+1],H=255,n.mix(i,A/H)):"genesis"===l?(m=d[E+1],S=d[E+2],y=d[E+3],new s.Color(m,S,y)):o,O(r,p,e.toArray());break;case 2:O(r,p,c.toArray())}E+=u.getItemLength()}}var m,S,y,A,H,_;e(f)}}},40:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractCell=void 0,t.AbstractCell=class{update(e,t){}isStatic(){return!0}isEmpty(){return!1}}},347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OrganicCell=void 0;const s=r(40);class n extends s.AbstractCell{getType(){return"organic"}serialize(){return{type:"organic"}}}t.OrganicCell=n},730:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OrganismCell=void 0;const s=r(40),n=r(890),i=r(347),a=r(48),o=r(766);class c extends s.AbstractCell{constructor(e,t){super(),this.genome=e,this.energy=t,this.lifetime=0,this.direction=(0,n.randomDirection)()}getType(){return"organism"}getLifetime(){return this.lifetime}getEnergy(){return this.energy}getDirection(){return this.direction}getGenome(){return this.genome}update(e,t){if(0!==t.organismMaxLifetime&&this.lifetime>t.organismMaxLifetime||this.energy<=0)return void e.replace((e=>e.createOrganic()));const r=(0,n.getOffset)(this.direction),s=e.getByOffest(r[0],r[1]),i=this.genome.getAction(this,s);i===a.OrganismAction.STEP?this.makeStep(e):i===a.OrganismAction.ROTATE_LEFT?this.rotateLeft():i===a.OrganismAction.ROTATE_RIGHT?this.rotateRight():i===a.OrganismAction.DIVIDE?this.divide(e):i===a.OrganismAction.ATTACK?this.attact(e):i===a.OrganismAction.EAT?this.eat(e,t):i===a.OrganismAction.PHOTOSYNTHESIS&&this.photosynthesis(t.photosynthesisEnergy),this.lifetime++}rotateLeft(){this.direction=(0,n.rotateLeft)(this.direction),this.changeEnergy(-1)}rotateRight(){this.direction=(0,n.rotateRight)(this.direction),this.changeEnergy(-1)}makeStep(e){const t=(0,n.getOffset)(this.direction);e.moveByOffest(t[0],t[1]),this.changeEnergy(-1)}divide(e){for(const t of(0,o.shuffle)(Object.keys(n.Direction))){const r=(0,n.getOffset)(n.Direction[t]);if(e.getByOffest(r[0],r[1]).isEmpty())return e.moveByOffest(r[0],r[1]),this.changeEnergy(Math.floor(this.energy/-2)),void e.replace((e=>e.createOrganism(this.genome.clone(),this.energy)))}}attact(e){const t=(0,n.getOffset)(this.direction),r=e.getByOffest(t[0],t[1]);r instanceof c&&(r.kill(),this.changeEnergy(-1))}eat(e,t){const r=(0,n.getOffset)(this.direction);e.getByOffest(r[0],r[1])instanceof i.OrganicCell&&(e.deleteByOffset(r[0],r[1]),e.moveByOffest(r[0],r[1]),this.changeEnergy(t.organicEnergy))}photosynthesis(e){this.changeEnergy(e)}changeEnergy(e){this.energy+=e,this.energy>255?this.energy=255:this.energy<0&&(this.energy=0)}kill(){this.energy=0}isStatic(){return!1}isSimilar(e){return this.genome.isSimilar(e.getGenome())}getColor(){return this.genome.getColor()}serialize(){return{type:"organism",lifetime:this.lifetime,energy:this.energy,color:this.getColor().toHexFormat(),direction:this.direction.toString()}}}t.OrganismCell=c},48:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.randomAction=t.OrganismAction=void 0;const s=r(629);var n;!function(e){e.ROTATE_LEFT="ROTATE_LEFT",e.ROTATE_RIGHT="ROTATE_RIGHT",e.STEP="STEP",e.ATTACK="ATTACK",e.EAT="EAT",e.DIVIDE="DIVIDE",e.NOTHING="NOTHING",e.PHOTOSYNTHESIS="PHOTOSYNTHESIS"}(n=t.OrganismAction||(t.OrganismAction={})),t.randomAction=function(){const e=Object.keys(n);return n[e[(0,s.randomInt)(0,e.length-1)]]}},890:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.rotateRight=t.rotateLeft=t.randomDirection=t.getOffset=t.Direction=void 0;const s=r(629);var n;!function(e){e.NORTH="NORTH",e.NORTH_EAST="NORTH_EAST",e.NORTH_WEST="NORTH_WEST",e.SOUTH="SOUTH",e.SOUTH_EAST="SOUTH_EAST",e.SOUTH_WEST="SOUTH_WEST",e.EAST="EAST",e.WEST="WEST"}(n=t.Direction||(t.Direction={})),t.getOffset=function(e){switch(e){case n.NORTH:return[0,-1];case n.NORTH_EAST:return[1,-1];case n.NORTH_WEST:return[-1,-1];case n.SOUTH:return[0,1];case n.SOUTH_EAST:return[1,1];case n.SOUTH_WEST:return[-1,1];case n.EAST:return[1,0];case n.WEST:return[-1,0]}},t.randomDirection=function(){return n[Object.keys(n)[(0,s.randomInt)(0,7)]]},t.rotateLeft=function(e){switch(e){case n.NORTH:return n.NORTH_WEST;case n.NORTH_EAST:return n.NORTH;case n.NORTH_WEST:return n.WEST;case n.SOUTH:return n.SOUTH_EAST;case n.SOUTH_EAST:return n.EAST;case n.SOUTH_WEST:return n.SOUTH;case n.EAST:return n.NORTH_EAST;case n.WEST:return n.SOUTH_WEST}},t.rotateRight=function(e){switch(e){case n.NORTH:return n.NORTH_EAST;case n.NORTH_EAST:return n.EAST;case n.NORTH_WEST:return n.NORTH;case n.SOUTH:return n.SOUTH_WEST;case n.SOUTH_EAST:return n.SOUTH;case n.SOUTH_WEST:return n.WEST;case n.EAST:return n.SOUTH_EAST;case n.WEST:return n.NORTH_WEST}}},158:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Data=void 0;const s=r(730),n={empty:0,organism:1,organic:2,wall:3},i={direction:1,energy:1,lifetime:1,genesis:3},a={NORTH:0,NORTH_EAST:1,NORTH_WEST:2,SOUTH:3,SOUTH_EAST:4,SOUTH_WEST:5,EAST:6,WEST:7};class o{constructor(e,t,r,s){this.array=e,this.payload=t,this.width=r,this.height=s,this.itemLength=this.payload?i[this.payload]+1:1}static create(e,t){const r=e.getGrid(),c=r.getWidth(),h=r.getHeight(),g=t?i[t]:0,T=new Uint8Array(c*h*(g+1));let l=0;for(let e=0;e<c;e++)for(let i=0;i<h;i++){const o=r.getCell(e,i);if(T[l++]=n[o.getType()],o instanceof s.OrganismCell)switch(t){case"direction":T[l]=a[o.getDirection()];break;case"energy":T[l]=o.getEnergy();break;case"lifetime":T[l]=o.getLifetime();break;case"genesis":const e=o.getColor().toArray();T[l]=e[0],T[l+1]=e[1],T[l+2]=e[2]}l+=g}return new o(T,t,c,h)}getArray(){return this.array}getPayload(){return this.payload}getWidth(){return this.width}getHeight(){return this.height}getItemLength(){return this.itemLength}}t.Data=o}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,r),i.exports}(()=>{const e=r(158),t=r(415),s=self,n=new t.CommonRenderer;let i=[];setTimeout((function t(){if(i.length){const t=i.shift(),r=new e.Data(t.data.array,t.data.payload,t.data.width,t.data.height);n.render((e=>{s.postMessage({id:t.id,data:e},[e.data.buffer])}),t.width,t.height,t.offsetX,t.offsetY,t.scale,t.mode,r)}setTimeout(t,0)}),0),s.addEventListener("message",(e=>{i.push(e.data)}))})()})();