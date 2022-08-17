(()=>{"use strict";var e={766:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.shuffle=void 0,t.shuffle=function(e){const t=e;for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}},469:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Color=void 0;const n=r(629),s={};for(let e=0;e<256;e++)s[e]=e.toString(16),1===s[e].length&&(s[e]="0"+s[e]);class o{constructor(e,t,r){this.red=e,this.green=t,this.blue=r,e>255?this.red=255:e<0&&(this.red=0),t>255?this.green=255:t<0&&(this.green=0),r>255?this.blue=255:r<0&&(this.blue=0),this.hex="#"+s[this.red]+s[this.green]+s[this.blue]}getRed(){return this.red}getGreen(){return this.green}getBlue(){return this.blue}mix(e,t){return new o(Math.round(this.red*(1-t)+e.getRed()*t),Math.round(this.green*(1-t)+e.getGreen()*t),Math.round(this.blue*(1-t)+e.getBlue()*t))}toHexFormat(){return this.hex}equals(e){return this.blue===e.getBlue()&&this.red===e.getRed()&&this.green===e.getGreen()}toArray(){return[this.red,this.green,this.blue]}static random(){return new o((0,n.randomInt)(0,255),(0,n.randomInt)(0,255),(0,n.randomInt)(0,255))}static fromHex(e){return e.startsWith("#")&&(e=e.slice(1)),new o(parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16))}}t.Color=o},629:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.randomInt=void 0,t.randomInt=function(e,t){const r=t-e+1;return Math.floor(Math.random()*r)+e}},120:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Colors=void 0;const n=r(469);t.Colors={organic:n.Color.fromHex("#F0E9D2"),wall:n.Color.fromHex("#575757"),organism:n.Color.fromHex("#2155CD"),lifetimeMin:n.Color.fromHex("#000000"),lifetimeMax:n.Color.fromHex("#ffffff"),energyMin:n.Color.fromHex("#000000"),energyMax:n.Color.fromHex("#F8CB2E"),aggressionMin:n.Color.fromHex("#000000"),aggressionMax:n.Color.fromHex("#ff0000"),childrenMin:n.Color.fromHex("#000000"),childrenMax:n.Color.fromHex("#f542c8"),stepMin:n.Color.fromHex("#000000"),stepMax:n.Color.fromHex("#f57b42"),actions:[n.Color.fromHex("#ffffff"),n.Color.fromHex("#03fcc2"),n.Color.fromHex("#03cafc"),n.Color.fromHex("#aaf200"),n.Color.fromHex("#a705f7"),n.Color.fromHex("#ff0000"),n.Color.fromHex("#ff00f2"),n.Color.fromHex("#ffffff"),n.Color.fromHex("#00ff00"),n.Color.fromHex("#0000ff")],supplyOrganic:n.Color.fromHex("#ff0000"),supplyPhotosynthesis:n.Color.fromHex("#00ff00"),supplyChemosynthesis:n.Color.fromHex("#0000ff")}},415:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CommonRenderer=void 0;const n=r(469),s=r(841),o=r(120),i=(e,t)=>o.Colors.lifetimeMax.mix(o.Colors.lifetimeMin,e/t),a=(e,t,r)=>new n.Color(e,t,r);t.CommonRenderer=class{render(e,t,r,g,c,l,u,h){this.empty&&this.empty.width===t&&this.empty.height===r||this.createEmpty(t,r);const d=new ImageData(new Uint8ClampedArray(this.empty.data),t,r),f=(e,r,n)=>{const s=[];let o=l,i=l;e<0&&(o+=e,e=0),r<0&&(i+=r,r=0),e+l>=d.width&&(o=d.width-e),r+l>=d.height&&(i=d.height-r);for(let e=0;e<o;e++)s.push(n.getRed(),n.getGreen(),n.getBlue(),255);const a=4*e,g=4*t;for(let e=0;e<i;e++)d.data.set(s,g*(r+e)+a)},m=h.getArray();let O=0,C=0;if("lifetime"===u||"energy"===u)for(let e=0;e<h.getWidth();e++)for(let e=0;e<h.getHeight();e++)1===m[C]&&O<m[C+1]&&(O=m[C+1]),C+=h.getItemLength(m[C]);C=0;for(let e=0;e<h.getWidth();e++)for(let t=0;t<h.getHeight();t++){const r=g+e*l;if(r+l<0||r>=d.width){C+=h.getItemLength(m[C]);continue}const N=c+t*l;if(N+l<0||N>=d.height)C+=h.getItemLength(m[C]);else{switch(m[C]){case s.CellType.EMPTY:break;case s.CellType.ORGANISM:f(r,N,"energy"===u?(R=m[C+1],T=O,o.Colors.energyMin.mix(o.Colors.energyMax,R/T)):"lifetime"===u?i(m[C+1],O):"genesis"===u?(p=m[C+1],y=m[C+2],E=m[C+3],new n.Color(p,y,E)):"supply"===u?a(m[C+1],m[C+2],m[C+3]):o.Colors.organism);break;case s.CellType.ORGANIC:f(r,N,o.Colors.organic);break;case s.CellType.WALL:f(r,N,o.Colors.wall)}C+=h.getItemLength(m[C])}}var p,y,E,R,T;e(d)}createEmpty(e,t){this.empty=new ImageData(new Uint8ClampedArray(e*t*4).map(((e,t)=>t%4==3?255:0)),e,t)}}},40:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractCell=t.CellType=void 0,(r=t.CellType||(t.CellType={}))[r.EMPTY=0]="EMPTY",r[r.ORGANISM=1]="ORGANISM",r[r.ORGANIC=2]="ORGANIC",r[r.WALL=3]="WALL",t.AbstractCell=class{isStatic(){return!0}isEmpty(){return!1}getId(){return 0}}},347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OrganicCell=void 0;const n=r(40);class s extends n.AbstractCell{constructor(e){super(),this.energy=e}update(){}getEnergy(){return this.energy}getType(){return n.CellType.ORGANIC}serialize(){return{type:n.CellType.ORGANIC,energy:this.energy}}}t.OrganicCell=s},730:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OrganismCell=t.ORGANS_COUNT=t.MAX_ENERGY=void 0;const n=r(469),s=r(40),o=r(890),i=r(165),a=r(766),g=r(616),c=r(132),l=r(993),u=r(297),h=r(481),d=r(871),f=r(7),m=r(560);t.MAX_ENERGY=255,t.ORGANS_COUNT=16;class O extends s.AbstractCell{constructor(e,t,r,n,s,o=0){super(),this.id=e,this.genome=t,this.energy=r,this.direction=n,this.supplyColor=s,this.lifetime=o,this.programCounter=0,this.organs=[],this.oxidizersCount=0,this.chloroplastsCount=0,this.mouthsCount=0;for(const[e,r]of t.getOrgans().entries())switch(r){case i.Organ.NONE:this.organs.push(null);break;case i.Organ.EYE:this.organs.push(new l.Eye(this,e));break;case i.Organ.CHLOROPLAST:this.organs.push(new u.Chloroplast(this,e)),this.chloroplastsCount++;break;case i.Organ.OXIDIZER:this.organs.push(new h.Oxidizer(this,e)),this.oxidizersCount++;break;case i.Organ.REPRODUCTOR:this.organs.push(new m.Reproductor(this,e));break;case i.Organ.ARMOUR:this.organs.push(new g.Armour(this,e));break;case i.Organ.SPINE:this.organs.push(new c.Spine(this,e));break;case i.Organ.FIN:this.organs.push(new d.Fin(this,e));break;case i.Organ.MOUTH:this.organs.push(new f.Mouth(this,e)),this.mouthsCount++}}getId(){return this.id}getType(){return s.CellType.ORGANISM}getLifetime(){return this.lifetime}getEnergy(){return this.energy}getDirection(){return this.direction}getGenome(){return this.genome}update(e,t){0!==this.energy&&(this.genome.getProgram().execute(this,e),this.changeEnergy(-1),0!==this.energy?this.lifetime>=t.organismMaxLifetime?e.replace((e=>e.createOrganic(this.energy))):this.lifetime++:e.replace((e=>e.createEmpty())))}setDirection(e){this.direction=e}divide(e){if(this.changeEnergy(-20),this.energy>0)for(const t of(0,a.shuffle)((0,o.directionsList)())){const r=(0,o.getOffset)(t);if(e.getByOffest(r[0],r[1]).isEmpty()&&(e.moveByOffest(r[0],r[1]),this.changeEnergy(Math.floor(this.energy/-2)),this.energy>0))return void e.replace((t=>t.createOrganism(this.genome.clone(e.getSimulationParameters()),this.energy,(0,o.randomDirection)(),this.supplyColor)))}e.replace((e=>0===this.energy?e.createEmpty():e.createOrganic(this.energy)))}changeEnergy(e){const r=this.energy;return this.energy+=Math.round(e),this.energy>t.MAX_ENERGY?this.energy=t.MAX_ENERGY:this.energy<0&&(this.energy=0),this.energy-r}isStatic(){return!1}isSimilar(e){return this.genome.isSimilar(e.getGenome())}getColor(){return this.genome.getColor()}getProgramCounter(){return this.programCounter}setProgramCounter(e){this.genome.getProgramLength()>e?this.programCounter=e:this.programCounter=0}addProgramCounterRelative(e){this.setProgramCounter(this.programCounter+=e)}getSupplyColor(){return this.supplyColor}getOrgan(e){return this.organs[e]}getChloroplastsCount(){return this.chloroplastsCount}getOxidizersCount(){return this.oxidizersCount}getMouthsCount(){return this.mouthsCount}onAttack(e,t,r){if(0===this.energy)return 0;const n=this.organs[8+(0,o.rotateOnOffset)(this.direction,r)];return null===n?this.changeEnergy(-e):n instanceof g.Armour?n.onAttack(e):n instanceof c.Spine?n.onAttack(e,t):0}makeMoreRed(e){this.supplyColor=new n.Color(this.supplyColor.getRed()+e,this.supplyColor.getGreen()-e,this.supplyColor.getBlue()-e)}makeMoreGreen(e){this.supplyColor=new n.Color(this.supplyColor.getRed()-e,this.supplyColor.getGreen()+e,this.supplyColor.getBlue()-e)}makeMoreBlue(e){this.supplyColor=new n.Color(this.supplyColor.getRed()-e,this.supplyColor.getGreen()-e,this.supplyColor.getBlue()+e)}serialize(){return{id:this.id,type:s.CellType.ORGANISM,lifetime:this.lifetime,energy:this.energy,direction:this.direction,genome:this.genome.serialize(),programCounter:this.programCounter,supplyColor:this.supplyColor.toHexFormat()}}}t.OrganismCell=O},138:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractInstruction=void 0,t.AbstractInstruction=class{}},503:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractOrgan=void 0,t.AbstractOrgan=class{constructor(e,t){this.organism=e,this.position=t}}},890:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.reverseDirection=t.rotateOnOffset=t.rotateRight=t.rotateLeft=t.randomDirection=t.getOffset=t.directionsList=t.Direction=void 0;const n=r(629);var s;function o(e,t){let r=e+t;return r<0&&(r-=8*Math.floor(r/8)),r%8}!function(e){e[e.NORTH=0]="NORTH",e[e.NORTH_EAST=1]="NORTH_EAST",e[e.EAST=2]="EAST",e[e.SOUTH_EAST=3]="SOUTH_EAST",e[e.SOUTH=4]="SOUTH",e[e.SOUTH_WEST=5]="SOUTH_WEST",e[e.WEST=6]="WEST",e[e.NORTH_WEST=7]="NORTH_WEST"}(s=t.Direction||(t.Direction={})),t.directionsList=function(){return[s.NORTH,s.NORTH_EAST,s.EAST,s.SOUTH_EAST,s.SOUTH,s.SOUTH_WEST,s.WEST,s.NORTH_WEST]},t.getOffset=function(e){switch(e){case s.NORTH:return[0,-1];case s.NORTH_EAST:return[1,-1];case s.NORTH_WEST:return[-1,-1];case s.SOUTH:return[0,1];case s.SOUTH_EAST:return[1,1];case s.SOUTH_WEST:return[-1,1];case s.EAST:return[1,0];case s.WEST:return[-1,0]}},t.randomDirection=function(){return(0,n.randomInt)(0,7)},t.rotateLeft=function(e){return e===s.NORTH?s.NORTH_WEST:e-1},t.rotateRight=function(e){return e===s.NORTH_WEST?s.NORTH:e+1},t.rotateOnOffset=o,t.reverseDirection=function(e){return o(e,4)}},165:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Genome=t.CURRENT_VERSION=t.Organ=void 0;const n=r(629),s=r(469),o=r(191),i=r(766);var a;!function(e){e[e.NONE=0]="NONE",e[e.CHLOROPLAST=1]="CHLOROPLAST",e[e.OXIDIZER=2]="OXIDIZER",e[e.EYE=3]="EYE",e[e.REPRODUCTOR=4]="REPRODUCTOR",e[e.MOUTH=5]="MOUTH",e[e.ARMOUR=6]="ARMOUR",e[e.FIN=7]="FIN",e[e.SPINE=8]="SPINE"}(a=t.Organ||(t.Organ={}));const g=[a.NONE,a.CHLOROPLAST,a.OXIDIZER,a.REPRODUCTOR,a.EYE],c=[a.NONE,a.MOUTH,a.ARMOUR,a.FIN,a.SPINE],l=[a.EYE,a.CHLOROPLAST,a.NONE,a.NONE,a.REPRODUCTOR,a.NONE,a.NONE,a.NONE,a.MOUTH,a.NONE,a.NONE,a.NONE,a.FIN,a.NONE,a.NONE,a.NONE];t.CURRENT_VERSION=1;class u{constructor(e,t,r){this.program=e,this.color=t,this.organs=r}static createRandom(){return new u(o.Program.createPrimitive(16),s.Color.random(),l)}isSimilar(e){let t=0;const r=e.getOrgans();for(let e=0;e<16;e++)if(this.organs[e]!==r[e]&&t++,t>1)return!1;const n=e.getProgram().getInstructions(),s=this.getProgram().getInstructions();if(n.length!==s.length)return!1;e:for(let e=0;e<n.length;e++){if(t>1)return!1;const r=n[e],o=s[e];if(r.code!==o.code){t++;continue}const i=r.branches,a=o.branches,g=r.args,c=o.args;for(let e=0;e<g.length;e++)if(g[e]!==c[e]){t++;continue e}for(let e=0;e<i.length;e++)if(i[e]!==a[e]){t++;continue e}}return t<=1}getColor(){return this.color}getProgram(){return this.program}clone(e){let t=!1,r=this.color;const o=this.organs.slice(),a=this.program.clone();if(e.mutationBaseOrgansRate>=(0,n.randomInt)(1,100)&&(t=!0,o[(0,n.randomInt)(0,7)]=(0,i.shuffle)(g)[0]),e.mutationLimbOrgansRate>=(0,n.randomInt)(1,100)&&(t=!0,o[(0,n.randomInt)(8,15)]=(0,i.shuffle)(c)[0]),e.mutationProgramRate>=(0,n.randomInt)(1,100)){t=!0;const e=a.get((0,n.randomInt)(0,a.getLength()-1));let r=a.getHandler(e.code);switch((0,n.randomInt)(0,2)){case 0:if(e.code=(0,n.randomInt)(0,a.getHandlersCount()-1),r=a.getHandler(e.code),e.args.length>r.getArgsCount())e.args.splice(r.getArgsCount());else for(;e.args.length<r.getArgsCount();)e.args.push(Math.random());if(e.branches.length>r.getBranchesCount())e.branches.splice(r.getBranchesCount());else for(;e.branches.length<r.getBranchesCount();)e.branches.push((0,n.randomInt)(0,a.getLength()-1));break;case 1:e.args.length>0&&(e.args[(0,n.randomInt)(0,e.args.length-1)]=Math.random());break;case 2:e.branches.length>0&&(e.branches[(0,n.randomInt)(0,e.branches.length-1)]=(0,n.randomInt)(0,a.getLength()-1))}}return t&&(r=new s.Color(this.color.getRed()+(Math.random()>.5?1:-1)*(0,n.randomInt)(0,5),this.color.getGreen()+(Math.random()>.5?1:-1)*(0,n.randomInt)(0,5),this.color.getBlue()+(Math.random()>.5?1:-1)*(0,n.randomInt)(0,5))),new u(a,r,o)}getProgramLength(){return this.program.getLength()}getOrgans(){return this.organs}serialize(){return{color:this.color.toHexFormat(),program:this.program.serialize(),organs:this.organs,version:t.CURRENT_VERSION}}}t.Genome=u},458:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ActionInstruction=void 0;const n=r(730),s=r(138);class o extends s.AbstractInstruction{execute(e,t,r){const s=Math.floor(r[0]*n.ORGANS_COUNT),o=e.getOrgan(s);if(!o)return e.addProgramCounterRelative(1),!1;const i=o.use(r[1],t);return e.addProgramCounterRelative(1),i}getArgsCount(){return 2}getBranchesCount(){return 0}}t.ActionInstruction=o},96:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EnergyGtInstruction=void 0;const n=r(730),s=r(138);class o extends s.AbstractInstruction{execute(e,t,r,s){return e.getEnergy()>n.MAX_ENERGY*r[0]?e.setProgramCounter(s[0]):e.addProgramCounterRelative(1),!1}getArgsCount(){return 1}getBranchesCount(){return 1}}t.EnergyGtInstruction=o},537:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.JumpInstruction=void 0;const n=r(138);class s extends n.AbstractInstruction{execute(e,t,r,n){return e.setProgramCounter(n[0]),!1}getArgsCount(){return 0}getBranchesCount(){return 1}}t.JumpInstruction=s},496:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NothingInstruction=void 0;const n=r(138);class s extends n.AbstractInstruction{execute(e){return e.addProgramCounterRelative(1),!1}getArgsCount(){return 0}getBranchesCount(){return 0}}t.NothingInstruction=s},987:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SenseInstruction=void 0;const n=r(730),s=r(138);class o extends s.AbstractInstruction{execute(e,t,r,s){const o=Math.floor(r[0]*n.ORGANS_COUNT),i=e.getOrgan(o);return i?(i.sense(r[1],t)?e.setProgramCounter(s[0]):e.addProgramCounterRelative(1),!1):(e.addProgramCounterRelative(1),!1)}getArgsCount(){return 2}getBranchesCount(){return 1}}t.SenseInstruction=o},616:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Armour=void 0;const n=r(503);class s extends n.AbstractOrgan{onAttack(e){return this.organism.changeEnergy(-.5*e)}use(){return!0}sense(){return!1}}t.Armour=s},297:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Chloroplast=void 0;const n=r(503);class s extends n.AbstractOrgan{use(e,t){const r=this.organism.getChloroplastsCount();let n=0;for(let e=1;e<=r;e++)n+=t.getLightEnergy()/e;return this.organism.changeEnergy(n),n>0&&this.organism.makeMoreGreen(n),!0}sense(){return!1}}t.Chloroplast=s},993:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Eye=void 0;const n=r(347),s=r(730),o=r(59),i=r(503),a=r(890);var g;!function(e){e[e.EMPTY=0]="EMPTY",e[e.WALL=1]="WALL",e[e.ORGANIC=2]="ORGANIC",e[e.ORGANISM_SIMILAR=3]="ORGANISM_SIMILAR",e[e.ORGANISM_OTHER=4]="ORGANISM_OTHER"}(g||(g={}));const c=Object.keys(g).length/2+1;class l extends i.AbstractOrgan{use(){return!1}sense(e,t){const r=(0,a.getOffset)((0,a.rotateOnOffset)(this.organism.getDirection(),this.position)),n=t.getByOffest(r[0],r[1]);return this.getTargetType(n)===Math.floor(e*c)}getTargetType(e){return e instanceof o.WallCell?g.WALL:e instanceof n.OrganicCell?g.ORGANIC:e instanceof s.OrganismCell?this.organism.isSimilar(e)?g.ORGANISM_SIMILAR:g.ORGANISM_OTHER:g.EMPTY}}t.Eye=l},871:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Fin=void 0;const n=r(503),s=r(890);class o extends n.AbstractOrgan{use(e,t){switch(Math.floor(3*e)){case 0:return this.organism.setDirection((0,s.rotateLeft)(this.organism.getDirection())),!1;case 1:return this.organism.setDirection((0,s.rotateRight)(this.organism.getDirection())),!1;case 2:return t.moveByOffest(...(0,s.getOffset)(this.organism.getDirection()))}return!1}sense(){return!1}}t.Fin=o},7:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Mouth=void 0;const n=r(347),s=r(730),o=r(503),i=r(890);class a extends o.AbstractOrgan{sense(){return!1}use(e,t){const r=64*(this.organism.getMouthsCount()-1),o=t.getSimulationParameters().eatCost;this.organism.changeEnergy(-o-r);const a=(0,i.rotateOnOffset)(this.organism.getDirection(),this.position),g=(0,i.getOffset)(a),c=t.getByOffest(g[0],g[1]);if(c instanceof n.OrganicCell){const e=c.getEnergy();return this.organism.changeEnergy(e),t.deleteByOffset(g[0],g[1]),e>0&&this.organism.makeMoreRed(e),!0}if(c instanceof s.OrganismCell){const e=-c.onAttack(50,this.organism,(0,i.reverseDirection)(a));return this.organism.changeEnergy(e),0===c.getEnergy()&&t.deleteByOffset(g[0],g[1]),e>0&&this.organism.makeMoreRed(e),!0}return!1}}t.Mouth=a},481:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Oxidizer=void 0;const n=r(503);class s extends n.AbstractOrgan{use(e,t){const r=this.organism.getOxidizersCount();let n=0;for(let e=1;e<=r;e++)n+=t.getMineralsEnergy()/e;return this.organism.changeEnergy(n),n>0&&this.organism.makeMoreBlue(n),!0}sense(){return!1}}t.Oxidizer=s},560:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Reproductor=void 0;const n=r(503);class s extends n.AbstractOrgan{use(e,t){return this.organism.divide(t),!0}sense(){return!1}}t.Reproductor=s},132:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Spine=void 0;const n=r(503);class s extends n.AbstractOrgan{onAttack(e,t){return t.changeEnergy(-20),this.organism.changeEnergy(-e)}use(){return!0}sense(){return!1}}t.Spine=s},191:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Program=t.Command=void 0;const n=r(458),s=r(987),o=r(537),i=r(496),a=r(96),g=r(629);var c;!function(e){e[e.NOTHING=0]="NOTHING",e[e.JUMP=1]="JUMP",e[e.SENSE=2]="SENSE",e[e.ACTION=3]="ACTION",e[e.ENERGY_GT=4]="ENERGY_GT"}(c=t.Command||(t.Command={}));const l={[c.NOTHING]:new i.NothingInstruction,[c.JUMP]:new o.JumpInstruction,[c.SENSE]:new s.SenseInstruction,[c.ACTION]:new n.ActionInstruction,[c.ENERGY_GT]:new a.EnergyGtInstruction};class u{constructor(e){this.instructions=e}static createPrimitive(e){const t=[{code:c.ENERGY_GT,args:[.5],branches:[3]},{code:c.ACTION,args:[.1,0],branches:[]},{code:c.JUMP,args:[],branches:[0]},{code:c.ACTION,args:[.3,0],branches:[]},{code:c.SENSE,args:[0,.4],branches:[6]},{code:c.JUMP,args:[],branches:[0]},{code:c.ACTION,args:[.5,0],branches:[]}];for(let r=t.length;r<e;r++)t.push({code:c.NOTHING,args:[],branches:[]});return new u(t)}execute(e,t){for(let r=0;r<16;r++){const r=this.instructions[e.getProgramCounter()],n=l[r.code];if(void 0!==n){if(n.execute(e,t,r.args,r.branches))break}else e.addProgramCounterRelative(1)}}getInstructions(){return this.instructions.slice()}addInstruction(e,t){e===this.getLength()?this.instructions.push(t):this.instructions.splice(e,0,t);for(let t=0;t<this.getLength();t++){const r=this.get(t).branches;for(let t=0;t<r.length;t++)r[t]>=e&&(r[t]=r[t]+1)}}removeInstruction(e){this.instructions.splice(e,1);for(let t=0;t<this.getLength();t++){const r=this.get(t).branches;for(let t=0;t<r.length;t++)r[t]>=e&&r[t]>0&&(r[t]=r[t]-1)}}get(e){return this.instructions[e]}getLength(){return this.instructions.length}getHandlersCount(){return 5}getHandler(e){return l[e]}clone(){return new u(this.instructions.map((e=>({code:e.code,args:e.args.slice(),branches:e.branches.slice()}))))}serialize(){return this.instructions}static createRandomInstruction(e){const t=[],r=[],n=(0,g.randomInt)(0,e.getHandlersCount()-1),s=l[n];for(let e=0;e<s.getArgsCount();e++)t.push(Math.random());for(let t=0;t<s.getBranchesCount();t++)r.push((0,g.randomInt)(0,e.getLength()-1));return{code:n,args:t,branches:r}}}t.Program=u},59:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WallCell=void 0;const n=r(40);class s extends n.AbstractCell{update(){}getType(){return n.CellType.WALL}serialize(){return{type:n.CellType.WALL}}}t.WallCell=s},158:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Data=void 0;const n=r(730),s=r(841),o={energy:1,lifetime:1,genesis:3,supply:3};class i{constructor(e,t,r,n){this.array=e,this.payload=t,this.width=r,this.height=n,this.organismDataLength=this.payload?o[this.payload]+1:1}static create(e,t){const r=e.getWidth(),s=e.getHeight(),o=[];for(let i=0;i<r;i++)for(let r=0;r<s;r++){const s=e.getCell(i,r);if(o.push(s.getType()),s instanceof n.OrganismCell)switch(t){case"energy":o.push(s.getEnergy());break;case"lifetime":o.push(s.getLifetime());break;case"genesis":for(const e of s.getColor().toArray())o.push(e);break;case"supply":for(const e of s.getSupplyColor().toArray())o.push(e)}}return new i(new Uint8Array(o),t,r,s)}getArray(){return this.array}getPayload(){return this.payload}getWidth(){return this.width}getHeight(){return this.height}getItemLength(e){switch(e){case s.CellType.EMPTY:return 1;case s.CellType.ORGANISM:return this.organismDataLength;case s.CellType.ORGANIC:case s.CellType.WALL:return 1}throw new Error}}t.Data=i},841:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GENOME_VERSION=t.Command=t.Direction=t.Organ=t.CellType=void 0;const n=r(165);Object.defineProperty(t,"Organ",{enumerable:!0,get:function(){return n.Organ}}),Object.defineProperty(t,"GENOME_VERSION",{enumerable:!0,get:function(){return n.CURRENT_VERSION}});const s=r(890);Object.defineProperty(t,"Direction",{enumerable:!0,get:function(){return s.Direction}});const o=r(191);Object.defineProperty(t,"Command",{enumerable:!0,get:function(){return o.Command}});const i=r(40);Object.defineProperty(t,"CellType",{enumerable:!0,get:function(){return i.CellType}})}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(()=>{const e=r(158),t=r(415),n=self,s=new t.CommonRenderer,o=[];setTimeout((function t(){if(o.length){const t=o.shift(),r=new e.Data(t.data.array,t.data.payload,t.data.width,t.data.height);s.render((e=>{n.postMessage({id:t.id,data:e},[e.data.buffer])}),t.width,t.height,t.offsetX,t.offsetY,t.scale,t.mode,r)}setTimeout(t,0)}),0),n.addEventListener("message",(e=>{o.push(e.data)}))})()})();