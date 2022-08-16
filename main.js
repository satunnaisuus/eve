(()=>{"use strict";var e,t={2500:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"armor.svg"},7308:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"chloroplast.svg"},4748:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"eye.svg"},1220:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"fin.svg"},7122:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"mouth.svg"},3552:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"oxidizer.svg"},8056:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"reproductor.svg"},4242:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"spine.svg"},4766:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.shuffle=void 0,t.shuffle=function(e){const t=e;for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}},4904:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AssertLessOrEqualThanError=t.AssertLessThanError=t.AssertGreaterOrEqualThanError=t.AssertGreaterThanError=t.AssertIntegerError=t.AssertError=t.assertLessOrEqualThan=t.assertLessThan=t.assertGreaterOrEqualThan=t.assertGreaterThan=t.assertInteger=void 0,t.assertInteger=function(e){if(!Number.isInteger(e))throw new n},t.assertGreaterThan=function(e,t){if(e<=t)throw new o},t.assertGreaterOrEqualThan=function(e,t){if(e<t)throw new i},t.assertLessThan=function(e,t){if(e>=t)throw new s},t.assertLessOrEqualThan=function(e,t){if(e>t)throw new a};class r extends Error{}t.AssertError=r;class n extends r{}t.AssertIntegerError=n;class o extends r{}t.AssertGreaterThanError=o;class i extends r{}t.AssertGreaterOrEqualThanError=i;class s extends r{}t.AssertLessThanError=s;class a extends r{}t.AssertLessOrEqualThanError=a},6469:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Color=void 0;const n=r(5629),o={};for(let e=0;e<256;e++)o[e]=e.toString(16),1===o[e].length&&(o[e]="0"+o[e]);class i{constructor(e,t,r){this.red=e,this.green=t,this.blue=r,e>255?this.red=255:e<0&&(this.red=0),t>255?this.green=255:t<0&&(this.green=0),r>255?this.blue=255:r<0&&(this.blue=0),this.hex="#"+o[this.red]+o[this.green]+o[this.blue]}getRed(){return this.red}getGreen(){return this.green}getBlue(){return this.blue}mix(e,t){return new i(Math.round(this.red*(1-t)+e.getRed()*t),Math.round(this.green*(1-t)+e.getGreen()*t),Math.round(this.blue*(1-t)+e.getBlue()*t))}toHexFormat(){return this.hex}equals(e){return this.blue===e.getBlue()&&this.red===e.getRed()&&this.green===e.getGreen()}toArray(){return[this.red,this.green,this.blue]}static random(){return new i((0,n.randomInt)(0,255),(0,n.randomInt)(0,255),(0,n.randomInt)(0,255))}static fromHex(e){return e.startsWith("#")&&(e=e.slice(1)),new i(parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16))}}t.Color=i},5629:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.randomInt=void 0,t.randomInt=function(e,t){const r=t-e+1;return Math.floor(Math.random()*r)+e}},2629:(e,t,r)=>{const n=r(7294),o=r(745),i=r(9378),s=r(2718),a=r(7698);(0,o.createRoot)(document.getElementById("root")).render(n.createElement(s.RootStoreContext.Provider,{value:new s.RootStore},n.createElement(a.GlobalStyle,null),n.createElement(i.App,null)))},5120:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Colors=void 0;const n=r(6469);t.Colors={organic:n.Color.fromHex("#F0E9D2"),wall:n.Color.fromHex("#575757"),organism:n.Color.fromHex("#2155CD"),lifetimeMin:n.Color.fromHex("#000000"),lifetimeMax:n.Color.fromHex("#ffffff"),energyMin:n.Color.fromHex("#000000"),energyMax:n.Color.fromHex("#F8CB2E"),aggressionMin:n.Color.fromHex("#000000"),aggressionMax:n.Color.fromHex("#ff0000"),childrenMin:n.Color.fromHex("#000000"),childrenMax:n.Color.fromHex("#f542c8"),stepMin:n.Color.fromHex("#000000"),stepMax:n.Color.fromHex("#f57b42"),actions:[n.Color.fromHex("#ffffff"),n.Color.fromHex("#03fcc2"),n.Color.fromHex("#03cafc"),n.Color.fromHex("#aaf200"),n.Color.fromHex("#a705f7"),n.Color.fromHex("#ff0000"),n.Color.fromHex("#ff00f2"),n.Color.fromHex("#ffffff"),n.Color.fromHex("#00ff00"),n.Color.fromHex("#0000ff")],supplyOrganic:n.Color.fromHex("#ff0000"),supplyPhotosynthesis:n.Color.fromHex("#00ff00"),supplyChemosynthesis:n.Color.fromHex("#0000ff")}},9408:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WorkerRenderer=void 0;const n=r(9273);t.WorkerRenderer=class{constructor(){this.listeners={},this.lastId=0,this.worker=new n.default,this.worker.addEventListener("message",(e=>{this.listeners[e.data.id](e.data.data),delete this.listeners[e.data.id]}))}render(e,t,r,n,o,i,s,a){const l=++this.lastId;this.listeners[l]=e,this.worker.postMessage({id:l,width:t,height:r,offsetX:n,offsetY:o,scale:i,mode:s,data:{width:a.getWidth(),height:a.getHeight(),payload:a.getPayload(),array:a.getArray()}},[a.getArray().buffer])}terminate(){this.worker.terminate()}}},4040:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractCell=t.CellType=void 0,(r=t.CellType||(t.CellType={}))[r.EMPTY=0]="EMPTY",r[r.ORGANISM=1]="ORGANISM",r[r.ORGANIC=2]="ORGANIC",r[r.WALL=3]="WALL",t.AbstractCell=class{isStatic(){return!0}isEmpty(){return!1}getId(){return 0}}},4591:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CellContext=void 0,t.CellContext=class{constructor(e,t,r,n,o){this.grid=e,this.x=t,this.y=r,this.factory=n,this.parameters=o}moveByOffest(e,t){const r=this.grid.getCell(this.x,this.y);return!!this.grid.getCell(this.x+e,this.y+t).isEmpty()&&(this.grid.delete(this.x,this.y),this.grid.insert(this.x+e,this.y+t,r),!0)}deleteByOffset(e,t){this.grid.delete(this.x+e,this.y+t)}getByOffest(e,t){return this.grid.getCell(this.x+e,this.y+t)}replace(e){this.grid.delete(this.x,this.y),this.grid.insert(this.x,this.y,e(this.factory))}getLightEnergy(){return Math.round(this.parameters.photosynthesisEnergy*this.grid.getLightLevel(this.x,this.y)/100)}getMineralsEnergy(){return Math.round(this.parameters.chemosynthesisEnergy*this.grid.getMineralsLevel(this.x,this.y)/100)}getSimulationParameters(){return this.parameters}}},4240:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CellFactory=void 0;const n=r(7816),o=r(1165),i=r(347),s=r(4730),a=r(59),l=r(1890),c=r(6469),u=r(9191),d=r(2841);t.CellFactory=class{constructor(){this.id=0}create(e,t){switch(e){case d.CellType.WALL:return this.createWall();case d.CellType.EMPTY:return this.createEmpty();case d.CellType.ORGANISM:return this.createOrganism(t.genome?new o.Genome(new u.Program(t.genome.program),c.Color.fromHex(t.genome.color),t.genome.organs):o.Genome.createRandom(),255,(0,l.randomDirection)(),new c.Color(255,255,255));case d.CellType.ORGANIC:return this.createOrganic(255)}}deserialize(e){switch(e.type){case d.CellType.EMPTY:return this.createEmpty();case d.CellType.ORGANIC:return this.createOrganic(e.energy);case d.CellType.WALL:return this.createWall();case d.CellType.ORGANISM:return new s.OrganismCell(e.id,new o.Genome(new u.Program(e.genome.program),c.Color.fromHex(e.genome.color),e.genome.organs),e.energy,e.direction,c.Color.fromHex(e.supplyColor),e.lifetime)}}createWall(){return this.wall?this.wall:this.wall=new a.WallCell}createEmpty(){return this.empty?this.empty:this.empty=new n.EmptyCell}createOrganism(e,t,r,n){return new s.OrganismCell(++this.id,e,t,r,n)}createOrganic(e){return new i.OrganicCell(e)}}},7816:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyCell=void 0;const n=r(4040);class o extends n.AbstractCell{update(){}getType(){return n.CellType.EMPTY}isEmpty(){return!0}serialize(){return{type:n.CellType.EMPTY}}}t.EmptyCell=o},347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OrganicCell=void 0;const n=r(4040);class o extends n.AbstractCell{constructor(e){super(),this.energy=e}update(){}getEnergy(){return this.energy}getType(){return n.CellType.ORGANIC}serialize(){return{type:n.CellType.ORGANIC,energy:this.energy}}}t.OrganicCell=o},4730:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OrganismCell=t.ORGANS_COUNT=t.MAX_ENERGY=void 0;const n=r(6469),o=r(4040),i=r(1890),s=r(1165),a=r(4766),l=r(9616),c=r(8132),u=r(3993),d=r(1297),h=r(6481),m=r(6871),g=r(3007),p=r(3560);t.MAX_ENERGY=255,t.ORGANS_COUNT=16;class f extends o.AbstractCell{constructor(e,t,r,n,o,i=0){super(),this.id=e,this.genome=t,this.energy=r,this.direction=n,this.supplyColor=o,this.lifetime=i,this.programCounter=0,this.organs=[],this.oxidizersCount=0,this.chloroplastsCount=0;for(const[e,r]of t.getOrgans().entries())switch(r){case s.Organ.NONE:this.organs.push(null);break;case s.Organ.EYE:this.organs.push(new u.Eye(this,e));break;case s.Organ.CHLOROPLAST:this.organs.push(new d.Chloroplast(this,e)),this.chloroplastsCount++;break;case s.Organ.OXIDIZER:this.organs.push(new h.Oxidizer(this,e)),this.oxidizersCount++;break;case s.Organ.REPRODUCTOR:this.organs.push(new p.Reproductor(this,e));break;case s.Organ.ARMOUR:this.organs.push(new l.Armour(this,e));break;case s.Organ.SPINE:this.organs.push(new c.Spine(this,e));break;case s.Organ.FIN:this.organs.push(new m.Fin(this,e));break;case s.Organ.MOUTH:this.organs.push(new g.Mouth(this,e))}}getId(){return this.id}getType(){return o.CellType.ORGANISM}getLifetime(){return this.lifetime}getEnergy(){return this.energy}getDirection(){return this.direction}getGenome(){return this.genome}update(e,t){0!==this.energy&&(this.genome.getProgram().execute(this,e),this.changeEnergy(-1),0!==this.energy?this.lifetime>=t.organismMaxLifetime?e.replace((e=>e.createOrganic(this.energy))):this.lifetime++:e.replace((e=>e.createEmpty())))}setDirection(e){this.direction=e}divide(e){if(this.changeEnergy(-20),this.energy>0)for(const t of(0,a.shuffle)((0,i.directionsList)())){const r=(0,i.getOffset)(t);if(e.getByOffest(r[0],r[1]).isEmpty()&&(e.moveByOffest(r[0],r[1]),this.changeEnergy(Math.floor(this.energy/-2)),this.energy>0))return void e.replace((t=>t.createOrganism(this.genome.clone(e.getSimulationParameters()),this.energy,(0,i.randomDirection)(),this.supplyColor)))}e.replace((e=>0===this.energy?e.createEmpty():e.createOrganic(this.energy)))}changeEnergy(e){const r=this.energy;return this.energy+=Math.round(e),this.energy>t.MAX_ENERGY?this.energy=t.MAX_ENERGY:this.energy<0&&(this.energy=0),this.energy-r}isStatic(){return!1}isSimilar(e){return this.genome.isSimilar(e.getGenome())}getColor(){return this.genome.getColor()}getProgramCounter(){return this.programCounter}setProgramCounter(e){this.genome.getProgramLength()>e?this.programCounter=e:this.programCounter=0}addProgramCounterRelative(e){this.setProgramCounter(this.programCounter+=e)}getSupplyColor(){return this.supplyColor}getOrgan(e){return this.organs[e]}getChloroplastsCount(){return this.chloroplastsCount}getOxidizersCount(){return this.oxidizersCount}onAttack(e,t,r){if(0===this.energy)return 0;const n=this.organs[8+(0,i.rotateOnOffset)(this.direction,r)];return null===n?this.changeEnergy(-e):n instanceof l.Armour?n.onAttack(e):n instanceof c.Spine?n.onAttack(e,t):0}makeMoreRed(e){this.supplyColor=new n.Color(this.supplyColor.getRed()+e,this.supplyColor.getGreen()-e,this.supplyColor.getBlue()-e)}makeMoreGreen(e){this.supplyColor=new n.Color(this.supplyColor.getRed()-e,this.supplyColor.getGreen()+e,this.supplyColor.getBlue()-e)}makeMoreBlue(e){this.supplyColor=new n.Color(this.supplyColor.getRed()-e,this.supplyColor.getGreen()-e,this.supplyColor.getBlue()+e)}serialize(){return{id:this.id,type:o.CellType.ORGANISM,lifetime:this.lifetime,energy:this.energy,direction:this.direction,genome:this.genome.serialize(),programCounter:this.programCounter,supplyColor:this.supplyColor.toHexFormat()}}}t.OrganismCell=f},2138:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractInstruction=void 0,t.AbstractInstruction=class{}},8503:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractOrgan=void 0,t.AbstractOrgan=class{constructor(e,t){this.organism=e,this.position=t}}},1890:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.reverseDirection=t.rotateOnOffset=t.rotateRight=t.rotateLeft=t.randomDirection=t.getOffset=t.directionsList=t.Direction=void 0;const n=r(5629);var o;function i(e,t){let r=e+t;return r<0&&(r-=8*Math.floor(r/8)),r%8}!function(e){e[e.NORTH=0]="NORTH",e[e.NORTH_EAST=1]="NORTH_EAST",e[e.EAST=2]="EAST",e[e.SOUTH_EAST=3]="SOUTH_EAST",e[e.SOUTH=4]="SOUTH",e[e.SOUTH_WEST=5]="SOUTH_WEST",e[e.WEST=6]="WEST",e[e.NORTH_WEST=7]="NORTH_WEST"}(o=t.Direction||(t.Direction={})),t.directionsList=function(){return[o.NORTH,o.NORTH_EAST,o.EAST,o.SOUTH_EAST,o.SOUTH,o.SOUTH_WEST,o.WEST,o.NORTH_WEST]},t.getOffset=function(e){switch(e){case o.NORTH:return[0,-1];case o.NORTH_EAST:return[1,-1];case o.NORTH_WEST:return[-1,-1];case o.SOUTH:return[0,1];case o.SOUTH_EAST:return[1,1];case o.SOUTH_WEST:return[-1,1];case o.EAST:return[1,0];case o.WEST:return[-1,0]}},t.randomDirection=function(){return(0,n.randomInt)(0,7)},t.rotateLeft=function(e){return e===o.NORTH?o.NORTH_WEST:e-1},t.rotateRight=function(e){return e===o.NORTH_WEST?o.NORTH:e+1},t.rotateOnOffset=i,t.reverseDirection=function(e){return i(e,4)}},1165:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Genome=t.CURRENT_VERSION=t.Organ=void 0;const n=r(5629),o=r(6469),i=r(9191),s=r(4766);var a;!function(e){e[e.NONE=0]="NONE",e[e.CHLOROPLAST=1]="CHLOROPLAST",e[e.OXIDIZER=2]="OXIDIZER",e[e.EYE=3]="EYE",e[e.REPRODUCTOR=4]="REPRODUCTOR",e[e.MOUTH=5]="MOUTH",e[e.ARMOUR=6]="ARMOUR",e[e.FIN=7]="FIN",e[e.SPINE=8]="SPINE"}(a=t.Organ||(t.Organ={}));const l=[a.NONE,a.CHLOROPLAST,a.OXIDIZER,a.REPRODUCTOR,a.EYE],c=[a.NONE,a.MOUTH,a.ARMOUR,a.FIN,a.SPINE],u=[a.EYE,a.CHLOROPLAST,a.NONE,a.NONE,a.REPRODUCTOR,a.NONE,a.NONE,a.NONE,a.MOUTH,a.NONE,a.NONE,a.NONE,a.FIN,a.NONE,a.NONE,a.NONE];t.CURRENT_VERSION=1;class d{constructor(e,t,r){this.program=e,this.color=t,this.organs=r}static createRandom(){return new d(i.Program.createPrimitive(16),o.Color.random(),u)}isSimilar(e){let t=0;const r=e.getOrgans();for(let e=0;e<16;e++)if(this.organs[e]!==r[e]&&t++,t>1)return!1;const n=e.getProgram().getInstructions(),o=this.getProgram().getInstructions();if(n.length!==o.length)return!1;e:for(let e=0;e<n.length;e++){if(t>1)return!1;const r=n[e],i=o[e];if(r.code!==i.code){t++;continue}const s=r.branches,a=i.branches,l=r.args,c=i.args;for(let e=0;e<l.length;e++)if(l[e]!==c[e]){t++;continue e}for(let e=0;e<s.length;e++)if(s[e]!==a[e]){t++;continue e}}return t<=1}getColor(){return this.color}getProgram(){return this.program}clone(e){let t=!1,r=this.color;const i=this.organs.slice(),a=this.program.clone();if(e.mutationBaseOrgansRate>=(0,n.randomInt)(1,100)&&(t=!0,i[(0,n.randomInt)(0,7)]=(0,s.shuffle)(l)[0]),e.mutationLimbOrgansRate>=(0,n.randomInt)(1,100)&&(t=!0,i[(0,n.randomInt)(8,15)]=(0,s.shuffle)(c)[0]),e.mutationProgramRate>=(0,n.randomInt)(1,100)){t=!0;const e=a.get((0,n.randomInt)(0,a.getLength()-1));let r=a.getHandler(e.code);switch((0,n.randomInt)(0,2)){case 0:if(e.code=(0,n.randomInt)(0,a.getHandlersCount()-1),r=a.getHandler(e.code),e.args.length>r.getArgsCount())e.args.splice(r.getArgsCount());else for(;e.args.length<r.getArgsCount();)e.args.push(Math.random());if(e.branches.length>r.getBranchesCount())e.branches.splice(r.getBranchesCount());else for(;e.branches.length<r.getBranchesCount();)e.branches.push((0,n.randomInt)(0,a.getLength()-1));break;case 1:e.args.length>0&&(e.args[(0,n.randomInt)(0,e.args.length-1)]=Math.random());break;case 2:e.branches.length>0&&(e.branches[(0,n.randomInt)(0,e.branches.length-1)]=(0,n.randomInt)(0,a.getLength()-1))}}return t&&(r=new o.Color(this.color.getRed()+(Math.random()>.5?1:-1)*(0,n.randomInt)(0,5),this.color.getGreen()+(Math.random()>.5?1:-1)*(0,n.randomInt)(0,5),this.color.getBlue()+(Math.random()>.5?1:-1)*(0,n.randomInt)(0,5))),new d(a,r,i)}getProgramLength(){return this.program.getLength()}getOrgans(){return this.organs}serialize(){return{color:this.color.toHexFormat(),program:this.program.serialize(),organs:this.organs,version:t.CURRENT_VERSION}}}t.Genome=d},458:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ActionInstruction=void 0;const n=r(4730),o=r(2138);class i extends o.AbstractInstruction{execute(e,t,r){const o=Math.floor(r[0]*n.ORGANS_COUNT),i=e.getOrgan(o);if(!i)return e.addProgramCounterRelative(1),!1;const s=i.use(r[1],t);return e.addProgramCounterRelative(1),s}getArgsCount(){return 2}getBranchesCount(){return 0}}t.ActionInstruction=i},8096:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EnergyGtInstruction=void 0;const n=r(4730),o=r(2138);class i extends o.AbstractInstruction{execute(e,t,r,o){return e.getEnergy()>n.MAX_ENERGY*r[0]?e.setProgramCounter(o[0]):e.addProgramCounterRelative(1),!1}getArgsCount(){return 1}getBranchesCount(){return 1}}t.EnergyGtInstruction=i},9537:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.JumpInstruction=void 0;const n=r(2138);class o extends n.AbstractInstruction{execute(e,t,r,n){return e.setProgramCounter(n[0]),!1}getArgsCount(){return 0}getBranchesCount(){return 1}}t.JumpInstruction=o},9496:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NothingInstruction=void 0;const n=r(2138);class o extends n.AbstractInstruction{execute(e){return e.addProgramCounterRelative(1),!1}getArgsCount(){return 0}getBranchesCount(){return 0}}t.NothingInstruction=o},2987:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SenseInstruction=void 0;const n=r(4730),o=r(2138);class i extends o.AbstractInstruction{execute(e,t,r,o){const i=Math.floor(r[0]*n.ORGANS_COUNT),s=e.getOrgan(i);return s?(s.sense(r[1],t)?e.setProgramCounter(o[0]):e.addProgramCounterRelative(1),!1):(e.addProgramCounterRelative(1),!1)}getArgsCount(){return 2}getBranchesCount(){return 1}}t.SenseInstruction=i},9616:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Armour=void 0;const n=r(8503);class o extends n.AbstractOrgan{onAttack(e){return this.organism.changeEnergy(-.5*e)}use(){return!0}sense(){return!1}}t.Armour=o},1297:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Chloroplast=void 0;const n=r(8503);class o extends n.AbstractOrgan{use(e,t){const r=this.organism.getChloroplastsCount();let n=0;for(let e=1;e<=r;e++)n+=t.getLightEnergy()/e;return this.organism.changeEnergy(n),n>0&&this.organism.makeMoreGreen(n),!0}sense(){return!1}}t.Chloroplast=o},3993:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Eye=void 0;const n=r(347),o=r(4730),i=r(59),s=r(8503),a=r(1890);var l;!function(e){e[e.EMPTY=0]="EMPTY",e[e.WALL=1]="WALL",e[e.ORGANIC=2]="ORGANIC",e[e.ORGANISM_SIMILAR=3]="ORGANISM_SIMILAR",e[e.ORGANISM_OTHER=4]="ORGANISM_OTHER"}(l||(l={}));const c=Object.keys(l).length/2+1;class u extends s.AbstractOrgan{use(){return!1}sense(e,t){const r=(0,a.getOffset)((0,a.rotateOnOffset)(this.organism.getDirection(),this.position)),n=t.getByOffest(r[0],r[1]);return this.getTargetType(n)===Math.floor(e*c)}getTargetType(e){return e instanceof i.WallCell?l.WALL:e instanceof n.OrganicCell?l.ORGANIC:e instanceof o.OrganismCell?this.organism.isSimilar(e)?l.ORGANISM_SIMILAR:l.ORGANISM_OTHER:l.EMPTY}}t.Eye=u},6871:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Fin=void 0;const n=r(8503),o=r(1890);class i extends n.AbstractOrgan{use(e,t){switch(Math.floor(3*e)){case 0:return this.organism.setDirection((0,o.rotateLeft)(this.organism.getDirection())),!1;case 1:return this.organism.setDirection((0,o.rotateRight)(this.organism.getDirection())),!1;case 2:return t.moveByOffest(...(0,o.getOffset)(this.organism.getDirection()))}return!1}sense(){return!1}}t.Fin=i},3007:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Mouth=void 0;const n=r(347),o=r(4730),i=r(8503),s=r(1890);class a extends i.AbstractOrgan{sense(){return!1}use(e,t){this.organism.changeEnergy(-2);const r=(0,s.rotateOnOffset)(this.organism.getDirection(),this.position),i=(0,s.getOffset)(r),a=t.getByOffest(i[0],i[1]);if(a instanceof n.OrganicCell){const e=a.getEnergy();return this.organism.changeEnergy(e),t.deleteByOffset(i[0],i[1]),e>0&&this.organism.makeMoreRed(e),!0}if(a instanceof o.OrganismCell){const e=-a.onAttack(50,this.organism,(0,s.reverseDirection)(r));return this.organism.changeEnergy(e),0===a.getEnergy()&&t.deleteByOffset(i[0],i[1]),e>0&&this.organism.makeMoreRed(e),!0}return!1}}t.Mouth=a},6481:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Oxidizer=void 0;const n=r(8503);class o extends n.AbstractOrgan{use(e,t){const r=this.organism.getOxidizersCount();let n=0;for(let e=1;e<=r;e++)n+=t.getMineralsEnergy()/e;return this.organism.changeEnergy(n),n>0&&this.organism.makeMoreBlue(n),!0}sense(){return!1}}t.Oxidizer=o},3560:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Reproductor=void 0;const n=r(8503);class o extends n.AbstractOrgan{use(e,t){return this.organism.divide(t),!0}sense(){return!1}}t.Reproductor=o},8132:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Spine=void 0;const n=r(8503);class o extends n.AbstractOrgan{onAttack(e,t){return t.changeEnergy(-20),this.organism.changeEnergy(-e)}use(){return!0}sense(){return!1}}t.Spine=o},9191:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Program=t.Command=void 0;const n=r(458),o=r(2987),i=r(9537),s=r(9496),a=r(8096),l=r(5629);var c;!function(e){e[e.NOTHING=0]="NOTHING",e[e.JUMP=1]="JUMP",e[e.SENSE=2]="SENSE",e[e.ACTION=3]="ACTION",e[e.ENERGY_GT=4]="ENERGY_GT"}(c=t.Command||(t.Command={}));const u={[c.NOTHING]:new s.NothingInstruction,[c.JUMP]:new i.JumpInstruction,[c.SENSE]:new o.SenseInstruction,[c.ACTION]:new n.ActionInstruction,[c.ENERGY_GT]:new a.EnergyGtInstruction};class d{constructor(e){this.instructions=e}static createPrimitive(e){const t=[{code:c.ENERGY_GT,args:[.5],branches:[3]},{code:c.ACTION,args:[.1,0],branches:[]},{code:c.JUMP,args:[],branches:[0]},{code:c.ACTION,args:[.3,0],branches:[]},{code:c.SENSE,args:[0,.4],branches:[6]},{code:c.JUMP,args:[],branches:[0]},{code:c.ACTION,args:[.5,0],branches:[]}];for(let r=t.length;r<e;r++)t.push({code:c.NOTHING,args:[],branches:[]});return new d(t)}execute(e,t){for(let r=0;r<16;r++){const r=this.instructions[e.getProgramCounter()],n=u[r.code];if(void 0!==n){if(n.execute(e,t,r.args,r.branches))break}else e.addProgramCounterRelative(1)}}getInstructions(){return this.instructions.slice()}addInstruction(e,t){e===this.getLength()?this.instructions.push(t):this.instructions.splice(e,0,t);for(let t=0;t<this.getLength();t++){const r=this.get(t).branches;for(let t=0;t<r.length;t++)r[t]>=e&&(r[t]=r[t]+1)}}removeInstruction(e){this.instructions.splice(e,1);for(let t=0;t<this.getLength();t++){const r=this.get(t).branches;for(let t=0;t<r.length;t++)r[t]>=e&&r[t]>0&&(r[t]=r[t]-1)}}get(e){return this.instructions[e]}getLength(){return this.instructions.length}getHandlersCount(){return 5}getHandler(e){return u[e]}clone(){return new d(this.instructions.map((e=>({code:e.code,args:e.args.slice(),branches:e.branches.slice()}))))}serialize(){return this.instructions}static createRandomInstruction(e){const t=[],r=[],n=(0,l.randomInt)(0,e.getHandlersCount()-1),o=u[n];for(let e=0;e<o.getArgsCount();e++)t.push(Math.random());for(let t=0;t<o.getBranchesCount();t++)r.push((0,l.randomInt)(0,e.getLength()-1));return{code:n,args:t,branches:r}}}t.Program=d},59:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WallCell=void 0;const n=r(4040);class o extends n.AbstractCell{update(){}getType(){return n.CellType.WALL}serialize(){return{type:n.CellType.WALL}}}t.WallCell=o},3170:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.CommonSimulation=void 0;const o=r(4766),i=r(6469),s=r(4591),a=r(4240),l=r(1890),c=r(1165),u=r(8158),d=r(8928),h=r(6567),m=r(2056),g=r(2841);class p extends h.Simulation{constructor(e,t){if(!e&&t&&(e=t.options),super(e),this.step=0,this.cellFactory=new a.CellFactory,this.parameters=new m.SimulationParameters,this.grid=new d.Grid(this.options,this.cellFactory),this.initResources(e),t){this.step=t.step,this.parameters=new m.SimulationParameters(t.parameters);for(let r=0;r<e.width;r++)for(let n=0;n<e.height;n++)this.grid.insert(r,n,this.cellFactory.deserialize(t.grid[r][n]))}else{const t=Math.ceil(e.width*e.height*e.population/100);this.spawnOrganisms(t,e.initialEnergy)}}static createFromDump(e){return new p(null,e)}static create(e){return new p(e)}makeStep(){return n(this,void 0,void 0,(function*(){const e=this.grid.toArray();for(let t=0;t<e.length;t++)for(let r=0;r<e[t].length;r++){const n=e[t][r];n.isStatic()||n.update(new s.CellContext(this.grid,t,r,this.cellFactory,this.parameters),this.parameters)}return this.step++}))}getState(e){return n(this,void 0,void 0,(function*(){const t=u.Data.create(this.grid,e);return{step:this.step,buffer:t.getArray().buffer,payload:e}}))}setParameter(e,t){return n(this,void 0,void 0,(function*(){return this.parameters[e]=t,this.parameters[e]}))}getOrganismsCount(){return n(this,void 0,void 0,(function*(){let e=0;for(let t=0;t<this.grid.getWidth();t++)for(let r=0;r<this.grid.getHeight();r++)this.grid.getCell(t,r).getType()===g.CellType.ORGANISM&&e++;return e}))}findCellById(e){return n(this,void 0,void 0,(function*(){const t=this.grid.find(e);return t?t.serialize():null}))}getCell(e,t){return n(this,void 0,void 0,(function*(){return this.grid.getCell(e,t).serialize()}))}replace(e,t,r,o){return n(this,void 0,void 0,(function*(){for(const[n,i]of e){const e=this.grid.getCell(n,i);r.includes(e.getType())||this.grid.insert(n,i,this.cellFactory.create(t,o))}}))}dump(){return n(this,void 0,void 0,(function*(){return{options:this.options,parameters:this.parameters.serialize(),step:this.step,grid:this.grid.serialize(),version:h.DUMP_VERSION}}))}getParameters(){return n(this,void 0,void 0,(function*(){return this.parameters.serialize()}))}spawnOrganisms(e,t){const r=[],n=this.grid.toArray();for(let e=0;e<n.length;e++)for(let t=0;t<n[e].length;t++)n[e][t].isEmpty()&&r.push([e,t]);for(const[n,s]of(0,o.shuffle)(r).slice(0,e))this.grid.insert(n,s,this.cellFactory.createOrganism(c.Genome.createRandom(),t,(0,l.randomDirection)(),new i.Color(0,255,0)))}initResources(e){const t=Math.round(e.height*e.lightDepth/100),r=Math.round(e.height*e.mineralsDepth/100),n=e.height-r;for(let o=0;o<e.width;o++)for(let i=0;i<e.height;i++){let s=100,a=100;i>=t?s=0:e.lightGradient&&(s=100-Math.round(100*i/t)),i<n?a=0:e.lightGradient&&(a=Math.ceil(100*(i-n)/r)),this.grid.setLightLevel(o,i,s),this.grid.setMineralsLevel(o,i,a)}}}t.CommonSimulation=p},8158:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Data=void 0;const n=r(4730),o=r(2841),i={energy:1,lifetime:1,genesis:3,supply:3};class s{constructor(e,t,r,n){this.array=e,this.payload=t,this.width=r,this.height=n,this.organismDataLength=this.payload?i[this.payload]+1:1}static create(e,t){const r=e.getWidth(),o=e.getHeight(),i=[];for(let s=0;s<r;s++)for(let r=0;r<o;r++){const o=e.getCell(s,r);if(i.push(o.getType()),o instanceof n.OrganismCell)switch(t){case"energy":i.push(o.getEnergy());break;case"lifetime":i.push(o.getLifetime());break;case"genesis":for(const e of o.getColor().toArray())i.push(e);break;case"supply":for(const e of o.getSupplyColor().toArray())i.push(e)}}return new s(new Uint8Array(i),t,r,o)}getArray(){return this.array}getPayload(){return this.payload}getWidth(){return this.width}getHeight(){return this.height}getItemLength(e){switch(e){case o.CellType.EMPTY:return 1;case o.CellType.ORGANISM:return this.organismDataLength;case o.CellType.ORGANIC:case o.CellType.WALL:return 1}throw new Error}}t.Data=s},1563:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.createSimulationFromDump=t.createSimulation=void 0;const o=r(3170),i=r(4403);t.createSimulation=function(e){return n(this,void 0,void 0,(function*(){return window.Worker?yield i.WorkerSimulation.create(e):o.CommonSimulation.create(e)}))},t.createSimulationFromDump=function(e){return n(this,void 0,void 0,(function*(){return window.Worker?yield i.WorkerSimulation.createFromDump(e):o.CommonSimulation.createFromDump(e)}))}},8928:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Grid=void 0;const n=r(4904),o=r(4282);t.Grid=class{constructor(e,t){this.options=e,this.cellFactory=t,this.cells=[],this.cellIdMap={},this.minerals=[],this.light=[],(0,n.assertGreaterThan)(e.width,0),(0,n.assertGreaterThan)(e.height,0);for(let r=0;r<e.width;r++){this.cells[r]=[],this.minerals[r]=[],this.light[r]=[];for(let n=0;n<e.height;n++)this.cells[r][n]=t.createEmpty(),this.minerals[r][n]=100,this.light[r][n]=100}}getLightLevel(e,t){return this.light[e][t]}getMineralsLevel(e,t){return this.minerals[e][t]}setLightLevel(e,t,r){this.light[e][t]=r}setMineralsLevel(e,t,r){this.minerals[e][t]=r}insert(e,t,r){const n=this.normalizeCoordinates(e,t);this.checkOutOfBounds(n[0],n[1])||(this.cells[n[0]][n[1]]=r,r.getId()&&(this.cellIdMap[r.getId()]=r))}delete(e,t){const r=this.normalizeCoordinates(e,t);if(this.checkOutOfBounds(r[0],r[1]))return;const n=this.cells[r[0]][r[1]];this.cells[r[0]][r[1]]=this.cellFactory.createEmpty(),delete this.cellIdMap[n.getId()]}getCell(e,t){const r=this.normalizeCoordinates(e,t);return this.checkOutOfBounds(r[0],r[1])?this.cellFactory.createWall():this.cells[r[0]][r[1]]}find(e){return this.cellIdMap[e]}getLoopMode(){return this.options.loop}getWidth(){return this.options.width}getHeight(){return this.options.height}toArray(){return this.cells.map((e=>e.slice()))}serialize(){return this.toArray().map((e=>e.map((e=>e.serialize()))))}normalizeCoordinates(e,t){const r=this.options.loop===o.GridLoopType.TORUS||this.options.loop===o.GridLoopType.HORIZONTAL,n=this.options.loop===o.GridLoopType.TORUS||this.options.loop===o.GridLoopType.VERTICAL;let i=e,s=t;if(r){for(;i<0;)i+=this.options.width;i>=this.options.width&&(i%=this.options.width)}if(n){for(;s<0;)s+=this.options.height;s>=this.options.height&&(s%=this.options.height)}return[i,s]}checkOutOfBounds(e,t){return e<0||e>=this.options.width||t<0||t>=this.options.height}}},2056:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SimulationParameters=void 0,t.SimulationParameters=class{constructor(e={}){this.organismMaxLifetimeValue=255,this.photosynthesisEnergyValue=5,this.chemosynthesisEnergyValue=5,this.mutationProgramRateValue=25,this.mutationBaseOrgansRateValue=10,this.mutationLimbOrgansRateValue=0,null!=e.photosynthesisEnergy&&(this.photosynthesisEnergy=e.photosynthesisEnergy),null!=e.chemosynthesisEnergy&&(this.chemosynthesisEnergy=e.chemosynthesisEnergy),null!=e.organismMaxLifetime&&(this.organismMaxLifetime=e.organismMaxLifetime),null!=e.mutationProgramRate&&(this.mutationProgramRate=e.mutationProgramRate),null!=e.mutationBaseOrgansRate&&(this.mutationBaseOrgansRate=e.mutationBaseOrgansRate),null!=e.mutationLimbOrgansRate&&(this.mutationLimbOrgansRate=e.mutationLimbOrgansRate)}set organismMaxLifetime(e){this.organismMaxLifetimeValue=this.converNumberValue(e,!0,1,255)}get organismMaxLifetime(){return this.organismMaxLifetimeValue}set photosynthesisEnergy(e){this.photosynthesisEnergyValue=this.converNumberValue(e,!1,0,255)}get photosynthesisEnergy(){return this.photosynthesisEnergyValue}set chemosynthesisEnergy(e){this.chemosynthesisEnergyValue=this.converNumberValue(e,!1,0,255)}get chemosynthesisEnergy(){return this.chemosynthesisEnergyValue}set mutationProgramRate(e){this.mutationProgramRateValue=this.converNumberValue(e,!1,0,100)}get mutationProgramRate(){return this.mutationProgramRateValue}set mutationBaseOrgansRate(e){this.mutationBaseOrgansRateValue=this.converNumberValue(e,!1,0,100)}get mutationBaseOrgansRate(){return this.mutationBaseOrgansRateValue}set mutationLimbOrgansRate(e){this.mutationLimbOrgansRateValue=this.converNumberValue(e,!1,0,100)}get mutationLimbOrgansRate(){return this.mutationLimbOrgansRateValue}serialize(){return{photosynthesisEnergy:this.photosynthesisEnergy,chemosynthesisEnergy:this.chemosynthesisEnergy,organismMaxLifetime:this.organismMaxLifetime,mutationProgramRate:this.mutationProgramRate,mutationBaseOrgansRate:this.mutationBaseOrgansRate,mutationLimbOrgansRate:this.mutationLimbOrgansRate}}converNumberValue(e,t=!0,r=null,n=null){return t&&(e=Math.trunc(e)),null==r&&(e=Math.max(r,e)),null==n&&(e=Math.min(n,e)),e}}},6567:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.Simulation=t.DUMP_VERSION=t.Parameter=t.StepData=void 0,t.StepData=class{constructor(e,t,r){this.step=e,this.buffer=t,this.payload=r}},(r=t.Parameter||(t.Parameter={})).photosynthesisEnergy="photosynthesisEnergy",r.chemosynthesisEnergy="chemosynthesisEnergy",r.organismMaxLifetime="organismMaxLifetime",r.mutationProgramRate="mutationProgramRate",r.mutationBaseOrgansRate="mutationBaseOrgansRate",r.mutationLimbOrgansRate="mutationLimbOrgansRate",t.DUMP_VERSION=1,t.Simulation=class{constructor(e){this.options=e}terminate(){}getOptions(){return this.options}}},2841:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GENOME_VERSION=t.Command=t.Direction=t.Organ=t.CellType=void 0;const n=r(1165);Object.defineProperty(t,"Organ",{enumerable:!0,get:function(){return n.Organ}}),Object.defineProperty(t,"GENOME_VERSION",{enumerable:!0,get:function(){return n.CURRENT_VERSION}});const o=r(1890);Object.defineProperty(t,"Direction",{enumerable:!0,get:function(){return o.Direction}});const i=r(9191);Object.defineProperty(t,"Command",{enumerable:!0,get:function(){return i.Command}});const s=r(4040);Object.defineProperty(t,"CellType",{enumerable:!0,get:function(){return s.CellType}})},4282:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.GridLoopType=void 0,(r=t.GridLoopType||(t.GridLoopType={})).NONE="NONE",r.TORUS="TORUS",r.VERTICAL="VERTICAL",r.HORIZONTAL="HORIZONTAL"},4403:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WorkerSimulation=void 0;const n=r(8365),o=r(6567);class i extends o.Simulation{constructor(e,t,r){super(t||r.options),this.lastRequestId=0,this.messageListeners={makeStep:{},state:{},setParameter:{},getOrganismsCount:{},getCell:{},findCellById:{},replace:{},dump:{},getParameters:{}},this.worker=new n.default,this.worker.postMessage({type:"init",options:t,dump:r}),this.worker.addEventListener("message",(t=>{switch(t.data.type){case"init":return e(this);case"makeStep":return this.messageListeners.makeStep[t.data.id](t.data.step),void delete this.messageListeners.makeStep[t.data.id];case"state":return this.messageListeners.state[t.data.id](new o.StepData(t.data.step,t.data.buffer,t.data.payload)),void delete this.messageListeners.state[t.data.id];case"setParameter":return this.messageListeners.setParameter[t.data.id](t.data.value),void delete this.messageListeners.setParameter[t.data.id];case"getOrganismsCount":return this.messageListeners.getOrganismsCount[t.data.id](t.data.count),void delete this.messageListeners.getOrganismsCount[t.data.id];case"getCell":return this.messageListeners.getCell[t.data.id](t.data.cell),void delete this.messageListeners.getCell[t.data.id];case"findCellById":return this.messageListeners.findCellById[t.data.id](t.data.cell),void delete this.messageListeners.findCellById[t.data.id];case"replace":return this.messageListeners.replace[t.data.id](),void delete this.messageListeners.replace[t.data.id];case"dump":return this.messageListeners.dump[t.data.id](t.data.dump),void delete this.messageListeners.dump[t.data.id];case"getParameters":return this.messageListeners.getParameters[t.data.id](t.data.parameters),void delete this.messageListeners.getParameters[t.data.id]}}))}static createFromDump(e){return new Promise((t=>{new i((e=>t(e)),null,e)}))}static create(e){return new Promise((t=>{new i((e=>t(e)),e,null)}))}terminate(){this.worker.terminate()}makeStep(){return new Promise((e=>{const t=this.nextId();this.messageListeners.makeStep[t]=e,this.worker.postMessage({id:t,type:"makeStep"})}))}getState(e){return new Promise((t=>{const r=this.nextId();this.messageListeners.state[r]=t,this.worker.postMessage({id:r,type:"requestState",payload:e})}))}setParameter(e,t){return new Promise((r=>{const n=this.nextId();this.messageListeners.setParameter[n]=r,this.worker.postMessage({id:n,type:"setParameter",parameter:e,value:t})}))}getOrganismsCount(){return new Promise((e=>{const t=this.nextId();this.messageListeners.getOrganismsCount[t]=e,this.worker.postMessage({id:t,type:"getOrganismsCount"})}))}findCellById(e){return new Promise((t=>{const r=this.nextId();this.messageListeners.findCellById[r]=t,this.worker.postMessage({id:r,type:"findCellById",cellId:e})}))}getCell(e,t){return new Promise((r=>{const n=this.nextId();this.messageListeners.getCell[n]=r,this.worker.postMessage({id:n,type:"getCell",x:e,y:t})}))}replace(e,t,r,n){return new Promise((o=>{const i=this.nextId();this.messageListeners.replace[i]=o,this.worker.postMessage({id:i,type:"replace",coords:e,cellType:t,ignore:r,options:n})}))}dump(){return new Promise((e=>{const t=this.nextId();this.messageListeners.dump[t]=e,this.worker.postMessage({id:t,type:"dump"})}))}getParameters(){return new Promise((e=>{const t=this.nextId();this.messageListeners.getParameters[t]=e,this.worker.postMessage({id:t,type:"getParameters"})}))}nextId(){return this.lastRequestId++}}t.WorkerSimulation=i},9378:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const n=r(2766),o=r(7294),i=r(7294),s=r(8804),a=r(7244),l=r(23),c=r(7366),u=r(2718),d=s.default.div`
    height: 100vh;
    background: #000;
    display: flex;
    color: #fff;
`,h=(0,n.observer)((()=>{const e=(0,i.useContext)(u.RootStoreContext).getSimulationStore();return e?o.createElement(a.Simulation,{simulation:e}):o.createElement(c.MainMenu,null)}));t.App=(0,n.observer)((()=>o.createElement(s.ThemeProvider,{theme:l.THEME},o.createElement(d,null,o.createElement(h,null)))))},8360:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OrganismCell=void 0;const n=r(7294),o=r(8804),i=r(8977),s=r(9323),a=r(2766),l=r(7294),c=r(5159),u=r(2841),d=r(5221),h=r(176),m=r(157),g=r(7625),p=r(7244),f=r(2718),v=o.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
`,y=o.default.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`,b=o.default.span`
    color: #ff0000;
`,E=o.default.span`
    color: #00ff00;
`,O=(0,o.default)(h.Button)`
    margin-bottom: 10px;
`,C=o.default.span`
    transform: rotate(${({value:e})=>45*e}deg);
`;t.OrganismCell=(0,a.observer)((()=>{const e=(0,l.useContext)(f.RootStoreContext),{ui:t,selectedCell:r}=(0,l.useContext)(p.SimulationContext),o=e.getGenomeStore(),a=r.getCell();if(a.type===u.CellType.ORGANISM)return n.createElement(n.Fragment,null,n.createElement(y,null,n.createElement("div",null,n.createElement(O,{apperance:"primary",width:"100%",onClick:()=>{o.addGenome(a.genome).then((()=>{t.setActiveTab(m.SidebarTab.GENOMES)}))}},n.createElement(g.FontAwesomeIcon,{icon:i.faFloppyDisk})," Save genome"),n.createElement(c.Visualization,{genome:a.genome}),n.createElement(v,null,n.createElement("span",null,"Status"),r.isAlive()?n.createElement(E,null,"Alive"):n.createElement(b,null,"Dead")),n.createElement(v,null,n.createElement("span",null,"Direction"),n.createElement(C,{value:a.direction},n.createElement(g.FontAwesomeIcon,{icon:s.faArrowUp}))),n.createElement(v,null,n.createElement("span",null,"Energy"),n.createElement("span",null,a.energy)),n.createElement(v,null,n.createElement("span",null,"Lifetime"),n.createElement("span",null,a.lifetime)),n.createElement(d.Program,{organism:a}))))}))},346:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Body=void 0;const n=r(7294),o=r(2766),i=r(8804).default.div`
    width: 120px;
    height: 120px;
    background: ${({color:e})=>e};
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    margin: auto; 
    border-radius: 100%;
    z-index: 2;
`;t.Body=(0,o.observer)((({color:e})=>n.createElement(i,{color:e})))},3798:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ArmorOrgan=void 0;const n=r(7294),o=r(8804),i=r(2500),s=r(2766),a=o.default.div`
    width: 56px;
    height: 12px;
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    margin: auto;
    padding-bottom: 130px;
    transform: rotate(${({direction:e})=>45*e}deg);
    z-index: 3;
`;t.ArmorOrgan=(0,s.observer)((({direction:e})=>n.createElement(a,{direction:e},n.createElement("img",{src:i.default}))))},6373:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ChloroplastOrgan=void 0;const n=r(7294),o=r(2766),i=r(8804),s=r(7308),a=i.default.div`
    width: 22px;
    height: 22px;
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    margin: auto;
    padding-bottom: 100px;
    transform: rotate(${({direction:e})=>45*e}deg);
    z-index: 3;
`;t.ChloroplastOrgan=(0,o.observer)((({direction:e})=>n.createElement(a,{direction:e},n.createElement("img",{src:s.default}))))},5160:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EyeOrgan=void 0;const n=r(7294),o=r(2766),i=r(8804),s=r(4748),a=i.default.div`
    width: 22px;
    height: 22px;
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    margin: auto;
    padding-bottom: 100px;
    transform: rotate(${({direction:e})=>45*e}deg);
    z-index: 3;
`;t.EyeOrgan=(0,o.observer)((({direction:e})=>n.createElement(a,{direction:e},n.createElement("img",{src:s.default}))))},2920:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FinOrgan=void 0;const n=r(7294),o=r(2766),i=r(8804),s=r(1220),a=i.default.div`
    width: 60px;
    height: 44px;
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    margin: auto;
    padding-bottom: 190px;
    transform: rotate(${({direction:e})=>45*e}deg);
    z-index: 1;
`;t.FinOrgan=(0,o.observer)((({direction:e})=>n.createElement(a,{direction:e},n.createElement("img",{src:s.default}))))},1098:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MouthOrgan=void 0;const n=r(7294),o=r(2766),i=r(8804),s=r(7122),a=i.default.div`
    width: 42px;
    height: 45px;
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    margin: auto;
    padding-bottom: 190px;
    transform: rotate(${({direction:e})=>45*e}deg);
    z-index: 1;
`;t.MouthOrgan=(0,o.observer)((({direction:e})=>n.createElement(a,{direction:e},n.createElement("img",{src:s.default}))))},5498:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OxidizerOrgan=void 0;const n=r(7294),o=r(2766),i=r(8804),s=r(3552),a=i.default.div`
    width: 22px;
    height: 22px;
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    margin: auto;
    padding-bottom: 100px;
    transform: rotate(${({direction:e})=>45*e}deg);
    z-index: 3;
`;t.OxidizerOrgan=(0,o.observer)((({direction:e})=>n.createElement(a,{direction:e},n.createElement("img",{src:s.default}))))},7386:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ReproductorOrgan=void 0;const n=r(7294),o=r(2766),i=r(8804),s=r(8056),a=i.default.div`
    width: 22px;
    height: 22px;
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    margin: auto;
    padding-bottom: 100px;
    transform: rotate(${({direction:e})=>45*e}deg);
    z-index: 3;
`;t.ReproductorOrgan=(0,o.observer)((({direction:e})=>n.createElement(a,{direction:e},n.createElement("img",{src:s.default}))))},7971:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SpineOrgan=void 0;const n=r(7294),o=r(2766),i=r(8804),s=r(4242),a=i.default.div`
    width: 46px;
    height: 32px;
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    margin: auto;
    padding-bottom: 170px;
    transform: rotate(${({direction:e})=>45*e}deg);
    z-index: 1;
`;t.SpineOrgan=(0,o.observer)((({direction:e})=>n.createElement(a,{direction:e},n.createElement("img",{src:s.default}))))},5221:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Program=void 0;const n=r(7294),o=r(2766),i=r(8804),s=r(2841),a=i.default.div`
margin: 20px 0;
`,l=i.default.div`
    margin-bottom: 10px;
`,c=i.default.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
`,u=i.default.div`
    display: contents;
    white-space: nowrap;
`,d=i.default.div`
    padding-right: 10px;
    color: ${({active:e})=>e?"#00ff00":"#808080"};
    margin-bottom: 3px;
`,h=i.default.div`
`,m=i.default.div`
    border-radius: 3px;
    display: inline-block;
    background: purple;
    padding: 0 3px;
    margin-left: 5px;
`,g=i.default.div`
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    max-width: 40px;
    vertical-align: middle;
    text-align: center;
`;t.Program=(0,o.observer)((({organism:e})=>n.createElement(a,null,n.createElement(l,null,"Program"),n.createElement(c,null,e.genome.program.map(((t,r)=>n.createElement(u,{key:r},n.createElement(d,{active:r===e.programCounter},r),n.createElement(h,null,s.Command[t.code],"(",t.args.map(((e,r)=>n.createElement("span",{key:r},n.createElement(g,{title:e.toString()},e),t.args.length-1===r?"":", "))),")",t.branches.map(((e,t)=>n.createElement(m,{key:t},e)))))))))))},5159:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Visualization=void 0;const n=r(7294),o=r(8804),i=r(2766),s=r(2841),a=r(346),l=r(3798),c=r(2920),u=r(1098),d=r(5498),h=r(7971),m=r(6373),g=r(5160),p=r(7386),f=o.default.div`
    width: 200px;
    height: 200px;
    position: relative;
    margin: 0 auto;
`;t.Visualization=(0,i.observer)((({genome:e})=>n.createElement(f,null,n.createElement(a.Body,{color:e.color}),e.organs.map(((e,t)=>{switch(e){case s.Organ.ARMOUR:return n.createElement(l.ArmorOrgan,{key:t,direction:t});case s.Organ.FIN:return n.createElement(c.FinOrgan,{key:t,direction:t});case s.Organ.MOUTH:return n.createElement(u.MouthOrgan,{key:t,direction:t});case s.Organ.OXIDIZER:return n.createElement(d.OxidizerOrgan,{key:t,direction:t});case s.Organ.REPRODUCTOR:return n.createElement(p.ReproductorOrgan,{key:t,direction:t});case s.Organ.SPINE:return n.createElement(h.SpineOrgan,{key:t,direction:t});case s.Organ.CHLOROPLAST:return n.createElement(m.ChloroplastOrgan,{key:t,direction:t});case s.Organ.EYE:return n.createElement(g.EyeOrgan,{key:t,direction:t})}})))))},8005:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UnselectedCell=void 0;const n=r(7294),o=r(2766);t.UnselectedCell=(0,o.observer)((()=>n.createElement(n.Fragment,null,"Select a cell on the map")))},1752:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ContextMenu=t.ContextMenuItem=void 0;const n=r(7294),o=r(8804),i=o.default.div`
    display: flex;
    flex-direction: column;
    background: #202c3c;
    margin-top: 10px;
    border-radius: 5px;
    padding: 10px 15px;
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`,s=o.default.div`
    width: 100%;
    background: transparent;
    color: #fff;
    border: none;
    padding: 5px 20px;
    text-align: left;
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 14px;

    &:hover {
        background: rgba(0, 0, 0, .3);
    }
`;t.ContextMenuItem=e=>n.createElement(s,Object.assign({},e),e.children),t.ContextMenu=e=>n.createElement(i,Object.assign({},e),e.children)},8042:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CreateSimulationForm=void 0;const n=r(7294),o=r(7294),i=r(4282),s=r(2718),a=r(176),l=r(3540),c=r(3229),u=r(9906),d=r(1139),h=r(4579),m=[{label:"None",value:i.GridLoopType.NONE},{label:"Torus",value:i.GridLoopType.TORUS},{label:"Horizontal",value:i.GridLoopType.HORIZONTAL},{label:"Vertical",value:i.GridLoopType.VERTICAL}];t.CreateSimulationForm=({options:e})=>{const t=(0,o.useContext)(s.RootStoreContext),[r,i]=(0,o.useState)(e.loop),[g,p]=(0,o.useState)(e.width),[f,v]=(0,o.useState)(e.height),[y,b]=(0,o.useState)(e.initialEnergy),[E,O]=(0,o.useState)(e.population),[C,x]=(0,o.useState)(e.lightDepth),[S,w]=(0,o.useState)(e.lightGradient),[R,M]=(0,o.useState)(e.mineralsDepth),[I,P]=(0,o.useState)(e.mineralsGradient);return n.createElement(n.Fragment,null,n.createElement(l.FormRow,{label:"Grid width"},n.createElement(c.NumberInput,{min:0,onChange:e=>p(e),value:g})),n.createElement(l.FormRow,{label:"Grid height"},n.createElement(c.NumberInput,{min:0,onChange:e=>v(e),value:f})),n.createElement(l.FormRow,{label:"Loop"},n.createElement(d.Select,{onSelect:e=>i(e),options:m,value:r})),n.createElement(u.RangeRow,{label:"Population",postfix:"%",min:0,max:100,step:.1,onChange:e=>O(e),value:E}),n.createElement(u.RangeRow,{label:"Initial energy",min:0,max:100,step:1,onChange:e=>b(e),value:y}),n.createElement(u.RangeRow,{label:"Light depth",postfix:"%",min:0,max:100,step:.1,onChange:e=>x(e),value:C}),n.createElement(h.Switch,{label:"Light gradient",value:S,onChange:e=>w(e)}),n.createElement(u.RangeRow,{label:"Minerals depth",postfix:"%",min:0,max:100,step:.1,onChange:e=>M(e),value:R}),n.createElement(h.Switch,{label:"Minerals gradient",value:I,onChange:e=>P(e)}),n.createElement(a.Button,{apperance:"primary",width:"100%",onClick:()=>{t.newSimulation({loop:r,width:g,height:f,initialEnergy:y,population:E,lightDepth:C,lightGradient:S,mineralsDepth:R,mineralsGradient:I})}},"Create"))}},176:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const n=r(2766),o=r(7294),i=r(8804),s=r(23),a={primary:{backgroundColor:s.THEME.primary,boderColor:s.THEME.primary,textColor:s.THEME.color},success:{backgroundColor:s.THEME.success,boderColor:s.THEME.success,textColor:s.THEME.color},secondary:{backgroundColor:s.THEME.secondary,boderColor:s.THEME.secondary,textColor:s.THEME.color}},l=i.default.button`
    border: 1px solid;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px 16px;
    ${({width:e})=>e&&`width: ${e};`}
    ${({apperance:e})=>{const t=a[e||"secondary"];return`border-color: ${t.boderColor};background-color: ${t.backgroundColor};color: ${t.textColor};`}}
`;t.Button=(0,n.observer)((e=>o.createElement(l,Object.assign({},e),e.children)))},6989:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Checkbox=void 0;const n=r(8055),o=r(7625),i=r(7294),s=r(8804),a=s.default.div`
    display: flex;
    padding: 3px 0;
`,l=s.default.div`
    width: 20px;
`;t.Checkbox=({label:e,checked:t,onChange:r})=>i.createElement(a,{onClick:()=>r(!t)},i.createElement(l,null,t&&i.createElement(o.FontAwesomeIcon,{icon:n.faCheck})),e)},3540:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FormRow=void 0;const n=r(7294),o=r(8804),i=o.default.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
`,s=o.default.label`
    margin-bottom: 5px;
    display: block;
    width: 100%;
    color: ${e=>e.theme.color};
`;t.FormRow=e=>n.createElement(i,null,e.label&&n.createElement(s,null,e.label),e.children)},3229:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NumberInput=void 0;const n=r(7294),o=r(8804),i=r(6767),s=r(98),a=r(7625),l=o.default.input`
    width: 100%;
    background: ${e=>e.theme.secondary};
    border: 2px solid ${e=>e.theme.secondary};
    padding: 10px 60px 10px 10px;
    border-radius: 10px;
    color: ${e=>e.theme.color};
`,c=o.default.button`
    width: 20px;
    height: 20px;
    background: ${e=>e.theme.secondary};
    border: 2px solid ${e=>e.theme.secondary};
    border-radius: 100%;
    color: ${e=>e.theme.color};
    padding: 0;
    font-size: 14px;
    line-height: 1;
    margin-left: 5px;
`,u=(0,o.default)(c)`
    opacity: 0.5;
    cursor: default;
`,d=o.default.div`
    position: relative;
`,h=o.default.div`
    position: absolute;
    top: 11px;
    right: 10px;
`;t.NumberInput=e=>{const[t,r]=n.useState(e.value||0),o=t=>{void 0!==e.min&&t<e.min&&(t=e.min),void 0!==e.max&&t>e.max&&(t=e.max),r(t),e.onChange(t)};let m=n.createElement(c,{onClick:()=>o(t-1)},n.createElement(a.FontAwesomeIcon,{icon:i.faMinus})),g=n.createElement(c,{onClick:()=>o(t+1)},n.createElement(a.FontAwesomeIcon,{icon:s.faPlus}));return void 0!==e.min&&e.value<=e.min&&(m=n.createElement(u,null,n.createElement(a.FontAwesomeIcon,{icon:i.faMinus}))),void 0!==e.max&&e.value>=e.max&&(g=n.createElement(u,null,n.createElement(a.FontAwesomeIcon,{icon:s.faPlus}))),n.createElement(d,null,n.createElement(l,{type:"text",value:t,onChange:e=>(e=>{const t=Number(e);o(Number.isSafeInteger(t)?t:0)})(e.target.value)}),n.createElement(h,null,m,g))}},1522:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RadioGroup=void 0;const n=r(8055),o=r(7625),i=r(7294),s=r(8804),a=s.default.div`
    
`,l=s.default.div`
    display: flex;
    padding: 3px 0;
`,c=s.default.div`
    width: 20px;
`;t.RadioGroup=({choices:e,value:t,onChange:r})=>i.createElement(a,null,e.map(((e,s)=>i.createElement(l,{key:s,onClick:()=>r(e.value)},i.createElement(c,null,t===e.value&&i.createElement(o.FontAwesomeIcon,{icon:n.faCheck})),e.label))))},8863:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RangeInput=void 0;const n=r(7294),o=r(8804).default.input`
    width: 100%;
    -webkit-appearance: none;
    background: transparent;
    height: 12px;
    display: block;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: #fff;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        margin-top: -5px;
    }

    &::-moz-range-thumb {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: #fff;
        border: none;
    }

    &::-webkit-slider-runnable-track  {
        -webkit-appearance: none;
        height: 2px;
        background: #fff;
        width: 100%;
    }

    &::-moz-range-track {
        width: 100%;
        height: 2px;
        background: #fff;
    }
`;t.RangeInput=e=>n.createElement(o,{type:"range",min:e.min,max:e.max,step:e.step,value:e.value,onChange:t=>e.onChange(Number(t.target.value))})},9906:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RangeRow=void 0;const n=r(7294),o=r(8804),i=r(3540),s=r(8863),a=o.default.div`
    font-size: 12px;
    line-height: 1;
    text-align: right;
    min-width: 40px;
    margin-left: 5px;
    font-weight: bold;
`,l=o.default.div`
    display: flex;
`;t.RangeRow=({label:e,postfix:t,min:r,max:o,step:c,value:u,onChange:d})=>n.createElement(i.FormRow,{label:e},n.createElement(l,null,n.createElement(s.RangeInput,{min:r,max:o,step:c,onChange:d,value:u}),n.createElement(a,null,u,t)))},1139:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Select=void 0;const n=r(7294),o=r(8804).default.select`
    background: ${e=>e.theme.secondary};
    border: 1px solid ${e=>e.theme.secondary};
    padding: 10px 10px;
    border-radius: 10px;
    color: ${e=>e.theme.color};
`;t.Select=e=>n.createElement(o,{onChange:t=>e.onSelect(t.target.value),value:e.value},e.options.map((({value:e,label:t},r)=>n.createElement("option",{value:e,key:r},t))))},4579:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Switch=void 0;const n=r(7294),o=r(8804),i=o.default.label`
    position: relative;
    display: flex;
    width: 100%;
    cursor: pointer;
    margin-bottom: 15px;
    align-items: center;
`,s=o.default.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + div {
        background-color: ${e=>e.theme.primary};
    }

    &:checked + div:before {
        transform: translateX(18px);
    }
`,a=o.default.div`
    cursor: pointer;
    width: 40px;
    height: 22px;
    background-color: ${e=>e.theme.secondary};
    border-radius: 34px;
    position: relative;
    margin-right: 10px;

    &:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 3px;
        bottom: 3px;
        background: #fff;
        transition: .4s;
        border-radius: 50%;
    }
`,l=o.default.span`
    flex: 1;
`;t.Switch=e=>n.createElement(i,null,n.createElement(s,{type:"checkbox",checked:e.value,onChange:t=>e.onChange(t.target.checked)}),n.createElement(a,null),n.createElement(l,null,e.label))},4070:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=void 0;const n=r(7294),o=r(8804).default.textarea`
    width: 100% !important;
    background: ${e=>e.theme.secondary};
    border: 2px solid ${e=>e.theme.secondary};
    padding: 10px;
    border-radius: 10px;
    color: ${e=>e.theme.color};
`;t.Textarea=({value:e,onChange:t,placeholder:r})=>n.createElement(o,{onChange:e=>t(e.target.value),value:e,placeholder:r})},617:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Genomes=t.Item=void 0;const n=r(7294),o=r(2766),i=r(7294),s=r(767),a=r(2619),l=r(4227),c=r(7608),u=r(2723),d=r(8804),h=r(7625),m=r(5159),g=r(176),p=r(4070),f=r(1065),v=r(2841),y=r(2718),b=d.default.div`
    display: flex;
    margin-bottom: 10px;
    gap: 5px;
`,E=d.default.div`
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    background: #10161e;
`,O=d.default.div`
    cursor: pointer;
    white-space: pre-wrap;
`,C=d.default.div`
    font-style: italic;
    color: grey;
    cursor: pointer;
`,x=d.default.div`
    display: flex;
`,S=d.default.div`
    flex-grow: 1;
`,w=d.default.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,R=(0,d.default)(g.Button)`
    padding: 8px 10px;
`,M=(0,d.default)(g.Button)`
    flex-grow: 1;
`,I=d.default.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,P=d.default.div`
    display: flex;
    gap: 5px;
`,T=(0,o.observer)((({item:e})=>{const[t,r]=(0,i.useState)(!1),o=(0,i.useContext)(y.RootStoreContext).getGenomeStore();if(t){const t=t=>{e.setName(t),o.put(e),r(!1)};return n.createElement(_,{value:e.getName(),onSave:t,onCancel:()=>r(!1)})}return e.getName().length>0?n.createElement(O,{onClick:()=>r(!0)},e.getName()):n.createElement(C,{onClick:()=>r(!0)},"No description.")})),_=(0,o.observer)((({value:e,onSave:t,onCancel:r})=>{const[o,s]=(0,i.useState)(e);return n.createElement(I,null,n.createElement(p.Textarea,{value:o,onChange:e=>s(e),placeholder:"Short description of this genome"}),n.createElement(P,null,n.createElement(g.Button,{width:"100%",apperance:"primary",onClick:()=>t(o)},"Save"),n.createElement(g.Button,{width:"100%",apperance:"secondary",onClick:()=>r()},"Cancel")))}));t.Item=(0,o.observer)((({item:e})=>{const t=(0,i.useContext)(y.RootStoreContext),r=t.getGenomeStore(),o=t.getSimulationStore().getRendererStore().getPaintMode();return n.createElement(E,null,n.createElement(x,null,n.createElement(S,null,n.createElement(m.Visualization,{genome:e.getGenome()})),n.createElement(w,null,n.createElement(R,{onClick:()=>{o.setClipboard(e.getGenome()),o.setType(v.CellType.ORGANISM),o.setEnabled(!0)}},n.createElement(h.FontAwesomeIcon,{icon:l.faEyeDropper})),n.createElement(R,{onClick:()=>{!function(e){const t=document.createElement("a"),r=window.URL.createObjectURL(new Blob([JSON.stringify(e.serialize())],{type:"octet/stream"}));t.href=r,t.setAttribute("download",e.getId()+".genome"),t.click(),window.URL.revokeObjectURL(r)}(e)}},n.createElement(h.FontAwesomeIcon,{icon:s.faDownload})),n.createElement(R,{onClick:()=>{r.delete(e)}},n.createElement(h.FontAwesomeIcon,{icon:a.faTrash})))),n.createElement(T,{item:e}))})),t.Genomes=(0,o.observer)((()=>{const e=(0,i.useContext)(y.RootStoreContext).getGenomeStore();return n.createElement(n.Fragment,null,n.createElement(b,null,n.createElement(M,{apperance:"primary",onClick:()=>(()=>{const t=document.createElement("input");t.type="file",t.addEventListener("change",(()=>{for(const r of t.files)r.text().then((t=>{try{const r=JSON.parse(t);e.put(new f.GenomeItem(r.name,r.id,r.genome,+Date.now()))}catch(e){alert("File parsing error")}}))})),t.click()})()},n.createElement(h.FontAwesomeIcon,{icon:u.faUpload})," Import"),n.createElement(g.Button,{onClick:()=>e.refresh()},n.createElement(h.FontAwesomeIcon,{icon:c.faRotate}))),n.createElement(n.Fragment,null,e.getItems().map((e=>n.createElement(t.Item,{item:e,key:e.getId()})))))}))},4485:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Info=void 0;const n=r(7294),o=r(2766),i=r(7294),s=r(8804),a=r(6724),l=r(7244),c=s.default.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
`;t.Info=(0,o.observer)((()=>{const{simulation:e}=(0,i.useContext)(l.SimulationContext);return n.createElement(n.Fragment,null,n.createElement(c,null,n.createElement("span",null,"Size"),n.createElement("span",null,e.getWidth(),"×",e.getHeight())),n.createElement(c,null,n.createElement("span",null,"Step"),n.createElement("span",null,e.getCurrentStep())),n.createElement(c,null,n.createElement("span",null,"Step time"),n.createElement("span",null,e.getStepTime()," ms")),n.createElement(c,null,n.createElement("span",null,"Render time"),n.createElement("span",null,e.getRendererStore().getRenderTime()," ms")),n.createElement(c,null,n.createElement("span",null,"Organisms count"),n.createElement("span",null,e.getOrganismsCount())),n.createElement(a.Legend,null))}))},6724:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Legend=void 0;const n=r(7294),o=r(8804),i=r(2766),s=r(7294),a=r(5120),l=r(7244),c=o.default.div`
    display: flex;
    margin-bottom: 6px;
`,u=o.default.div`
    margin-bottom: 10px;
    font-weight: bold;
    margin-top: 15px;
`,d=o.default.div`
    height: 15px;
    width: 15px;
    border: 2px solid #fff;
    background: ${({bg:e})=>e.toHexFormat()};
    margin-right: 10px;
`,h={default:[{label:"Organism",color:a.Colors.organism}],lifetime:[{label:"Older",color:a.Colors.lifetimeMin},{label:"Younger",color:a.Colors.lifetimeMax}],energy:[{label:"Less energy",color:a.Colors.energyMin},{label:"More energy",color:a.Colors.energyMax}],supply:[{label:"Uses organic",color:a.Colors.supplyOrganic},{label:"Uses photosynthesis",color:a.Colors.supplyPhotosynthesis},{label:"Uses chemosynthesis",color:a.Colors.supplyChemosynthesis}],genesis:[]};t.Legend=(0,i.observer)((()=>{const{renderer:e}=(0,s.useContext)(l.SimulationContext),t=e.getRenderMode();return n.createElement(n.Fragment,null,n.createElement(u,null,"Legend"),n.createElement(c,null,n.createElement(d,{bg:a.Colors.wall}),n.createElement("span",null,"Wall")),n.createElement(c,null,n.createElement(d,{bg:a.Colors.organic}),n.createElement("span",null,"Organic")),h[t].map(((e,t)=>n.createElement(c,{key:t},n.createElement(d,{bg:e.color}),n.createElement("span",null,e.label)))))}))},7366:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MainMenu=void 0;const n=r(2766),o=r(7294),i=r(7294),s=r(8804),a=r(711),l=r(8042),c=r(2821),u=s.default.div`
    display: flex;
    max-width: 900px;
    max-height: 600px;
    margin: auto;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: #1d2531;
    overflow: hidden;

    @media (max-width: 900px) {
        flex-direction: column;
        max-height: none;
        border-radius: 0;
    }
`,d=s.default.div`
    width: 300px;
    background: #151d2b;

    @media (max-width: 900px) {
        width: 100%;
    }
`,h=s.default.div`
    height: 100%;
    overflow-y: auto;
    flex-grow: 1;
    padding: 15px;
`,m=s.default.button`
    display: block;
    width: 100%;
    padding: 10px;
    text-align: center;
    background: ${({active:e,theme:t})=>e?t.primary:"transparent"};
    color: #fff;
    border: none;
`;t.MainMenu=(0,n.observer)((()=>{const[e,t]=(0,i.useState)("new");return o.createElement(u,null,o.createElement(d,null,o.createElement(m,{active:"new"===e,onClick:()=>t("new")},"New simulation"),o.createElement(m,{active:"load"===e,onClick:()=>t("load")},"Load simulation")),o.createElement(h,null,"new"===e&&o.createElement(l.CreateSimulationForm,{options:(0,a.loadOptions)()}),"load"===e&&o.createElement(c.Saves,null)))}))},5912:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Overflow=void 0;const n=r(7294),o=r(7294),i=r(8804).default.div`
    position: fixed;
`;t.Overflow=({root:e,children:t,onLoseFocus:r})=>{const[s,a]=(0,o.useState)(0),[l,c]=(0,o.useState)(0),[u,d]=(0,o.useState)(!1),h=(0,o.useRef)();return(0,o.useEffect)((()=>{if(e&&h.current){const t=e.getBoundingClientRect();c(t.top+t.height),t.left+h.current.getBoundingClientRect().width>window.innerWidth?a(Math.max(0,window.innerWidth-h.current.getBoundingClientRect().width)):a(Math.max(0,t.left)),d(!0)}const t=t=>{e.contains(t.target)||r&&r()};return window.addEventListener("mousedown",t),()=>{window.removeEventListener("mousedown",t)}})),n.createElement(i,{style:{left:s,top:l,display:u?null:"none"},ref:h},t)}},6852:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;const n=r(7294),o=r(8804),i=r(2766),s=r(1936),a=r(7294),l=r(4485),c=r(8477),u=r(157),d=r(617),h=r(2821),m=r(7244),g=o.default.div`
    position: absolute;
    top: 50px;
    left: 0;
    bottom: 0;
    pointer-events: none;
    width: 100%;
`,p=o.default.div`
    border-radius: 6px;
    background: rgba(16, 22, 30, 0.9);
    padding: 16px;
    width: 240px;
    position: absolute;
    top: 10px;
    right: 10px;
    pointer-events: all;
    max-height: 100%;
    overflow-y: auto;
`,f=o.default.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    pointer-events: all;
    padding: 16px;
    background: rgb(29, 37, 49);
    width: 320px;
`;t.Overlay=(0,i.observer)((()=>{const{ui:e}=(0,a.useContext)(m.SimulationContext);return n.createElement(g,null,e.isInfoOpened()&&n.createElement(p,null,n.createElement(l.Info,null)),e.isTabActive(u.SidebarTab.PARAMERS)&&n.createElement(f,null,n.createElement(s.Parameters,null)),e.isTabActive(u.SidebarTab.CELL)&&n.createElement(f,null,n.createElement(c.SelectedCell,null)),e.isTabActive(u.SidebarTab.GENOMES)&&n.createElement(f,null,n.createElement(d.Genomes,null)),e.isTabActive(u.SidebarTab.SAVES)&&n.createElement(f,null,n.createElement(h.Saves,null)))}))},1936:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Parameters=void 0;const n=r(7294),o=r(2766),i=r(7294),s=r(9906),a=r(7244);t.Parameters=(0,o.observer)((()=>{const{parameters:e}=(0,i.useContext)(a.SimulationContext);return n.createElement(n.Fragment,null,n.createElement(s.RangeRow,{label:"Lifetime limit",min:1,max:255,step:1,onChange:t=>e.setOrganismMaxLifetime(t),value:e.getOrganismMaxLifetime()}),n.createElement(s.RangeRow,{label:"Photosynthesis energy",min:0,max:255,step:1,onChange:t=>e.setPhotosynthesisEnergy(t),value:e.getPhotosynthesisEnergy()}),n.createElement(s.RangeRow,{label:"Chemosynthesis energy",min:0,max:255,step:1,onChange:t=>e.setChemosynthesisEnergy(t),value:e.getChemosynthesisEnergy()}),n.createElement(s.RangeRow,{label:"Mutation program rate",min:0,max:100,step:1,onChange:t=>e.setMutationProgramRate(t),value:e.getMutationProgramRate()}),n.createElement(s.RangeRow,{label:"Mutation base organs",min:0,max:100,step:1,onChange:t=>e.setMutationBaseOrgansRate(t),value:e.getMutationBaseOrgansRate()}),n.createElement(s.RangeRow,{label:"Mutation limb organs",min:0,max:100,step:1,onChange:t=>e.setMutationLimbOrgansRate(t),value:e.getMutationLimbOrgansRate()}))}))},2821:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Saves=t.Item=void 0;const o=r(7294),i=r(8804),s=r(2766),a=r(7294),l=r(767),c=r(2619),u=r(7608),d=r(2723),h=r(7625),m=r(176),g=r(4025),p=r(2718),f=i.default.div`
    display: flex;
    margin-bottom: 10px;
    gap: 5px;
`,v=i.default.div`
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    background: #10161e;
    display: flex;
`,y=i.default.button`
    display: block;
    flex-grow: 1;
    padding: 0;
    background: none;
    border: none;
    text-align: left;
    color: #fff;
`,b=i.default.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,E=(0,i.default)(m.Button)`
    padding: 8px 10px;
`,O=(0,i.default)(m.Button)`
    flex-grow: 1;
`;t.Item=(0,s.observer)((({item:e})=>{const t=(0,a.useContext)(p.RootStoreContext),r=t.getSaveStore();return o.createElement(v,null,o.createElement(y,{onClick:()=>n(void 0,void 0,void 0,(function*(){t.loadSimulation(yield r.getDump(e),e.getRenderMode())}))},o.createElement("div",null,new Date(e.getCreatedAt()).toLocaleString()),o.createElement("div",null,"Step: ",e.getStep())),o.createElement(b,null,o.createElement(E,{onClick:()=>{!function(e,t){n(this,void 0,void 0,(function*(){const r=document.createElement("a"),n=window.URL.createObjectURL(new Blob([JSON.stringify(yield t.serialize(e))],{type:"octet/stream"}));r.href=n,r.setAttribute("download",e.getId()+".save"),r.click(),window.URL.revokeObjectURL(n)}))}(e,r)}},o.createElement(h.FontAwesomeIcon,{icon:l.faDownload})),o.createElement(E,{onClick:()=>{r.delete(e)}},o.createElement(h.FontAwesomeIcon,{icon:c.faTrash}))))})),t.Saves=(0,s.observer)((()=>{const e=(0,a.useContext)(p.RootStoreContext),r=e.getSaveStore(),n=e.getSimulationStore(),i=()=>{const e=document.createElement("input");e.type="file",e.addEventListener("change",(()=>{for(const t of e.files)t.text().then((e=>{try{const t=JSON.parse(e);r.addSave(new g.SaveItem(t.id,+Date.now(),t.step,t.renderMode,t.version),t.dump)}catch(e){alert("File parsing error")}}))})),e.click()};return o.createElement(o.Fragment,null,o.createElement(f,null,!e.getSimulationStore()&&o.createElement(o.Fragment,null,o.createElement(O,{apperance:"primary",onClick:()=>i()},o.createElement(h.FontAwesomeIcon,{icon:d.faUpload})," Import")),e.getSimulationStore()&&o.createElement(o.Fragment,null,o.createElement(O,{apperance:"primary",onClick:()=>n.save()},"Save"),o.createElement(m.Button,{onClick:()=>i()},o.createElement(h.FontAwesomeIcon,{icon:d.faUpload}))),o.createElement(m.Button,{onClick:()=>r.refresh()},o.createElement(h.FontAwesomeIcon,{icon:u.faRotate}))),o.createElement(o.Fragment,null,r.getItems().map((e=>o.createElement(t.Item,{item:e,key:e.getId()})))))}))},8477:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SelectedCell=void 0;const n=r(7294),o=r(2766),i=r(7294),s=r(8360),a=r(8005),l=r(2841),c=r(7244);t.SelectedCell=(0,o.observer)((()=>{const{selectedCell:e}=(0,i.useContext)(c.SimulationContext),t=e.getCell();return t&&t.type===l.CellType.ORGANISM?n.createElement(s.OrganismCell,null):n.createElement(a.UnselectedCell,null)}))},7244:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Simulation=t.SimulationContext=void 0;const n=r(7294),o=r(8804),i=r(2766),s=r(4924),a=r(6852),l=r(7999),c=r(7294),u=o.default.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;t.SimulationContext=(0,c.createContext)({simulation:null,ui:null,renderer:null,selectedCell:null,parameters:null}),t.Simulation=(0,i.observer)((({simulation:e})=>{const r={simulation:e,ui:e.getUI(),renderer:e.getRendererStore(),selectedCell:e.getSelectedCell(),parameters:e.getParameters()};return n.createElement(t.SimulationContext.Provider,{value:r},e.isReady()&&n.createElement(u,null,n.createElement(l.Toolbar,null),n.createElement(a.Overlay,null),n.createElement(s.Viewport,null)))}))},7999:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Toolbar=void 0;const n=r(7294),o=r(8804),i=r(2766),s=r(6700),a=r(9008),l=r(2384),c=r(7099),u=r(7382),d=r(2742),h=r(9073),m=r(9697),g=r(2722),p=r(7726),f=o.default.div`
    display: flex;
    align-items: stretch;
    width: 100%;
    overflow-x: auto;
    background: ${e=>e.theme.background};
    height: 50px;
    position: relative;
    z-index: 1;
    user-select: none;
    box-shadow: 0 0 14px 0 #00000066;
`,v=o.default.div`
    display: flex;
    align-items: stretch;
    height: 100%;
    z-index: 1;
    flex-grow: 1;
    justify-content: ${e=>e.justify};
`;t.Toolbar=(0,i.observer)((()=>n.createElement(f,null,n.createElement(v,{justify:"flex-start"},n.createElement(d.ParametersItem,null),n.createElement(m.CellItem,null),n.createElement(g.GenomesItem,null),n.createElement(p.SavesItem,null)),n.createElement(v,{justify:"center"},n.createElement(s.StartPauseItem,null),n.createElement(a.StepItem,null),n.createElement(c.NewSimulationItem,null)),n.createElement(v,{justify:"flex-end"},n.createElement(l.RenderModeItem,null),n.createElement(u.PaintModeItem,null),n.createElement(h.InfoItem,null)))))},9697:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CellItem=void 0;const n=r(7294),o=r(2766),i=r(7294),s=r(2922),a=r(7625),l=r(8421),c=r(157),u=r(7244);t.CellItem=(0,o.observer)((()=>{const{ui:e}=(0,i.useContext)(u.SimulationContext);return n.createElement(l.ToolbarItem,{onClick:()=>e.toggleTab(c.SidebarTab.CELL),enabled:e.isTabActive(c.SidebarTab.CELL)},n.createElement(a.FontAwesomeIcon,{icon:s.faMicroscope}))}))},2722:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GenomesItem=void 0;const n=r(7294),o=r(2766),i=r(7294),s=r(7093),a=r(7625),l=r(8421),c=r(157),u=r(7244);t.GenomesItem=(0,o.observer)((()=>{const{ui:e}=(0,i.useContext)(u.SimulationContext);return n.createElement(l.ToolbarItem,{onClick:()=>e.toggleTab(c.SidebarTab.GENOMES),enabled:e.isTabActive(c.SidebarTab.GENOMES)},n.createElement(a.FontAwesomeIcon,{icon:s.faDna}))}))},9073:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InfoItem=void 0;const n=r(7294),o=r(2766),i=r(7294),s=r(8099),a=r(7625),l=r(8421),c=r(7244);t.InfoItem=(0,o.observer)((()=>{const{ui:e}=(0,i.useContext)(c.SimulationContext);return n.createElement(l.ToolbarItem,{onClick:()=>e.setInfoOpened(!e.isInfoOpened()),enabled:e.isInfoOpened()},n.createElement(a.FontAwesomeIcon,{icon:s.faInfo}))}))},8421:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ToolbarItem=void 0;const n=r(7294),o=r(2766),i=r(8804).default.div`
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    gap: 5px;
    min-width: 50px;
    height: 100%;
    ${({focused:e})=>e&&"background: #07090d;"}
    ${({enabled:e,theme:t})=>e&&`background: ${t.primary};`}
    ${({disabled:e})=>e&&"opacity: 0.5; pointer-events: none;"}
    
    &:hover {
        ${({enabled:e})=>!e&&"background: #07090d;"}
    }
`;t.ToolbarItem=(0,o.observer)((e=>n.createElement(i,Object.assign({},e))))},7099:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NewSimulationItem=void 0;const n=r(7294),o=r(2766),i=r(7294),s=r(3208),a=r(7625),l=r(8421),c=r(2718);t.NewSimulationItem=(0,o.observer)((()=>{const e=(0,i.useContext)(c.RootStoreContext);return n.createElement(l.ToolbarItem,{onClick:()=>e.closeSimulation()},n.createElement(a.FontAwesomeIcon,{icon:s.faRotateRight}))}))},7382:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PaintModeItem=void 0;const n=r(7294),o=r(8804),i=r(2766),s=r(7294),a=r(869),l=r(7625),c=r(8421),u=r(1421),d=r(5912),h=r(1752),m=r(1522),g=r(3540),p=r(9906),f=r(6989),v=r(176),y=r(2841),b=r(7822),E=r(7244),O=o.default.div`
    display: flex;
    align-items: center;
    padding: 0 5px;

    &:hover {
        background: rgba(0, 0, 0, 0.3);
    }
`,C=o.default.div`
    margin-left: 5px;
    display: flex;
    align-items: center;
    padding: 0 5px;
`,x=(0,o.default)(c.ToolbarItem)`
    align-items: stretch;
    padding: 0;
    gap: 0;
`,S=[{label:"Square",value:b.BrushType.SQUARE},{label:"Circle",value:b.BrushType.CIRCLE}],w=[{label:"Empty",value:y.CellType.EMPTY},{label:"Wall",value:y.CellType.WALL},{label:"Organic",value:y.CellType.ORGANIC},{label:"Organism",value:y.CellType.ORGANISM}];t.PaintModeItem=(0,i.observer)((()=>{const{renderer:e}=(0,s.useContext)(E.SimulationContext),t=e.getPaintMode(),[r,o]=(0,s.useState)(!1),i=(0,s.useRef)();return n.createElement("div",{ref:i},n.createElement(x,{focused:r,enabled:t.isEnabled()},n.createElement(C,{onClick:()=>t.setEnabled(!t.isEnabled())},n.createElement(l.FontAwesomeIcon,{icon:a.faPaintbrush})),n.createElement(O,{onClick:()=>{o(!r),!t.isEnabled()&&t.setEnabled(!0)}},n.createElement(l.FontAwesomeIcon,{icon:u.faCaretDown}))),r&&n.createElement(d.Overflow,{root:i.current,onLoseFocus:()=>o(!1)},n.createElement(h.ContextMenu,null,n.createElement(g.FormRow,{label:"Type of paint"},n.createElement(m.RadioGroup,{choices:w,value:t.getType(),onChange:e=>t.setType(e)})),n.createElement(g.FormRow,{label:"Brush shape"},n.createElement(m.RadioGroup,{choices:S,value:t.getBrush(),onChange:e=>t.setBrush(e)})),n.createElement(g.FormRow,{label:"Ignore"},w.map(((e,r)=>n.createElement(f.Checkbox,{key:r,label:e.label,checked:t.isIgnore(e.value),onChange:r=>r?t.addIgnore(e.value):t.removeIgnore(e.value)})))),n.createElement(p.RangeRow,{label:"Brush size",min:1,max:20,step:1,onChange:e=>t.setSize(e),value:t.getSize()}),n.createElement(v.Button,{onClick:()=>t.clearClipboard()},"Reset clipboard"))))}))},2742:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ParametersItem=void 0;const n=r(7294),o=r(2766),i=r(7294),s=r(7810),a=r(7625),l=r(8421),c=r(157),u=r(7244);t.ParametersItem=(0,o.observer)((()=>{const{ui:e}=(0,i.useContext)(u.SimulationContext);return n.createElement(l.ToolbarItem,{onClick:()=>e.toggleTab(c.SidebarTab.PARAMERS),enabled:e.isTabActive(c.SidebarTab.PARAMERS)},n.createElement(a.FontAwesomeIcon,{icon:s.faCogs}))}))},2384:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RenderModeItem=void 0;const n=r(7294),o=r(8804),i=r(2766),s=r(7294),a=r(446),l=r(7625),c=r(8421),u=r(1421),d=r(5912),h=r(1752),m=r(1522),g=r(7244),p=o.default.div`
    margin-left: 5px;
`,f=[{label:"Default",value:"default"},{label:"Energy",value:"energy"},{label:"Lifetime",value:"lifetime"},{label:"Genesis",value:"genesis"},{label:"Supply",value:"supply"}];t.RenderModeItem=(0,i.observer)((()=>{const{renderer:e}=(0,s.useContext)(g.SimulationContext),[t,r]=(0,s.useState)(!1),o=(0,s.useRef)();return n.createElement("div",{ref:o},n.createElement(c.ToolbarItem,{focused:t,onClick:()=>r(!t)},n.createElement(l.FontAwesomeIcon,{icon:a.faEye}),n.createElement(p,null,n.createElement(l.FontAwesomeIcon,{icon:u.faCaretDown}))),t&&n.createElement(d.Overflow,{root:o.current,onLoseFocus:()=>r(!1)},n.createElement(h.ContextMenu,null,n.createElement(m.RadioGroup,{choices:f,value:e.getRenderMode(),onChange:t=>e.setRenderMode(t)}))))}))},7726:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SavesItem=void 0;const n=r(7294),o=r(2766),i=r(7294),s=r(9182),a=r(7625),l=r(8421),c=r(157),u=r(7244);t.SavesItem=(0,o.observer)((()=>{const{ui:e}=(0,i.useContext)(u.SimulationContext);return n.createElement(l.ToolbarItem,{onClick:()=>e.toggleTab(c.SidebarTab.SAVES),enabled:e.isTabActive(c.SidebarTab.SAVES)},n.createElement(a.FontAwesomeIcon,{icon:s.faSdCard}))}))},6700:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StartPauseItem=void 0;const n=r(7294),o=r(2766),i=r(7294),s=r(753),a=r(6043),l=r(7625),c=r(8421),u=r(7244);t.StartPauseItem=(0,o.observer)((()=>{const{simulation:e}=(0,i.useContext)(u.SimulationContext);return e.isPaused()?n.createElement(c.ToolbarItem,{onClick:()=>e.start()},n.createElement(l.FontAwesomeIcon,{icon:s.faPlay})):n.createElement(c.ToolbarItem,{onClick:()=>e.pause()},n.createElement(l.FontAwesomeIcon,{icon:a.faPause}))}))},9008:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StepItem=void 0;const n=r(7294),o=r(2766),i=r(7294),s=r(9596),a=r(7625),l=r(8421),c=r(7244);t.StepItem=(0,o.observer)((()=>{const{simulation:e}=(0,i.useContext)(c.SimulationContext);return n.createElement(l.ToolbarItem,{disabled:!e.isPaused(),onClick:()=>e.makeStep()},n.createElement(a.FontAwesomeIcon,{icon:s.faForwardStep}))}))},4924:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Viewport=void 0;const n=r(7294),o=r(7294),i=r(2766),s=r(5560),a=r(8804),l=r(7244),c=a.default.div`
    overflow: hidden;
    flex-grow: 1;
`;t.Viewport=(0,i.observer)((()=>{const{simulation:e}=(0,o.useContext)(l.SimulationContext),t=(0,o.useRef)(),[r,i,a]=(0,s.useSize)();return(0,o.useEffect)((()=>{e.getRendererStore().setElement(t.current)}),[t.current]),(0,o.useEffect)((()=>{e.getRendererStore().requestRedraw()}),[r,i]),n.createElement(c,{ref:a},n.createElement("canvas",{width:r,height:i,ref:t}))}))},5560:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useSize=void 0;const n=r(7294);t.useSize=function(){const[e,t]=(0,n.useState)(0),[r,o]=(0,n.useState)(0),[i,s]=(0,n.useState)(),a=(0,n.useCallback)((e=>{if(e){t(Math.trunc(e.getBoundingClientRect().width)),o(Math.trunc(e.getBoundingClientRect().height));const r=new ResizeObserver((e=>{for(const r of e){t(Math.trunc(r.contentRect.width)),o(Math.trunc(r.contentRect.height));break}}));r.observe(e),s((()=>()=>r.disconnect()))}}),[]);return(0,n.useEffect)((()=>i),[i]),[e,r,a]}},2575:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initMouseInteractions=void 0,t.initMouseInteractions=function(e,t){let r=!1,n=!1;const o=e=>{e.preventDefault(),r=!0,n=!1},i=e=>{e.preventDefault(),n||t.click(e.offsetX,e.offsetY)},s=e=>{e.preventDefault()};let a=0;const l=r=>{if(r.preventDefault(),a+=r.deltaY,Math.abs(a)<40)return;a=0;const[n,o]=t.getOffset(),i=e.getBoundingClientRect(),s=r.clientX-Math.trunc(i.left),l=r.clientY-Math.trunc(i.top),c=(s-n)/t.getScale(),u=(l-o)/t.getScale();r.deltaY<0?t.scaleUp(!1):t.scaleDown(!1),t.setOffset(s-c*t.getScale(),l-u*t.getScale())},c=o=>{if(r)if(n=!0,t.getPaintMode().isEnabled()&&1===o.buttons){const r=e.getBoundingClientRect();t.paint(o.clientX-r.x,o.clientY-r.y)}else{const[e,r]=t.getOffset();t.setOffset(e+o.movementX,r+o.movementY)}},u=()=>{r=!1,n=!1};return e.addEventListener("wheel",l),e.addEventListener("mousedown",o),e.addEventListener("mouseup",i),e.addEventListener("mousemove",s),document.body.addEventListener("mousemove",c),document.body.addEventListener("mouseup",u),()=>{e.removeEventListener("wheel",l),e.removeEventListener("mousedown",o),e.removeEventListener("mouseup",i),e.removeEventListener("mousemove",s),document.body.removeEventListener("mousemove",c),document.body.removeEventListener("mouseup",u)}}},3629:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initTouchInteractions=void 0,t.initTouchInteractions=function(e,t){let r={},n=0,o=!1;const i=()=>2===Object.keys(r).length,s=t=>{const r=e.getBoundingClientRect();return[Math.trunc(t.clientX)-Math.trunc(r.left),Math.trunc(t.clientY)-Math.trunc(r.top)]},a=e=>{e.preventDefault();for(const t of e.changedTouches)i()||(r[t.identifier]=s(t));e.touches.length>1&&(o=!0)},l=e=>{for(const t of e.changedTouches)delete r[t.identifier];o||t.click(...s(e.changedTouches[0])),0===Object.keys(r).length&&(o=!1),n=0},c=e=>{for(const t of e.changedTouches)delete r[t.identifier];0===Object.keys(r).length&&(o=!1),n=0},u=e=>{e.preventDefault(),o=!0;const a=Object.assign({},r),[l,c]=t.getOffset();for(const n of e.changedTouches)r[n.identifier]&&(a[n.identifier]=s(n),1===e.changedTouches.length&&t.getPaintMode().isEnabled()?t.paint(...a[n.identifier]):t.setOffset(l+(a[n.identifier][0]-r[n.identifier][0]),c+(a[n.identifier][1]-r[n.identifier][1])));if(i()){const[e,t]=Object.keys(r),o=Math.abs(Math.hypot(r[e][0]-r[t][0],r[e][1]-r[t][1])),i=Math.abs(Math.hypot(a[e][0]-a[t][0],a[e][1]-a[t][1]));o>i?n-=o-i:n+=i-o}if(Math.abs(n)>=20){const[e,o]=t.getOffset(),[i,s]=Object.keys(r),a=(r[i][0]+r[s][0])/2,l=(r[i][1]+r[s][1])/2,c=Math.round((a-e)/t.getScale()),u=Math.round((l-o)/t.getScale());n>0?t.setScale(Math.ceil(1.5*t.getScale()),!1):t.setScale(Math.floor(t.getScale()/1.5),!1),t.setOffset(a-c*t.getScale(),l-u*t.getScale()),n=0}r=a};return e.addEventListener("touchstart",a,{passive:!1}),e.addEventListener("touchend",l),e.addEventListener("touchcancel",c),e.addEventListener("touchmove",u,{passive:!1}),()=>{e.removeEventListener("touchstart",a),e.removeEventListener("touchend",l),e.removeEventListener("touchcancel",c),e.removeEventListener("touchmove",u)}}},4942:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.IndexedBdGenomeRepository=void 0;const o=r(2841),i=r(1065),s=r(9396);class a extends s.IndexedBdRepository{constructor(){super("genomes")}findAll(){return n(this,void 0,void 0,(function*(){const e=yield this.getStore("readonly");return(yield e.getAll()).filter((e=>e.genome.version===o.GENOME_VERSION)).map((e=>new i.GenomeItem(e.name,e.id,e.genome,e.createdAt)))}))}put(e){return n(this,void 0,void 0,(function*(){const t=yield this.getStore("readwrite");yield t.put(e.serialize())}))}delete(e){return n(this,void 0,void 0,(function*(){const t=yield this.getStore("readwrite");yield t.delete(e.getId())}))}}t.IndexedBdGenomeRepository=a},9396:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.IndexedBdRepository=void 0;const n={1:function(e){e.createObjectStore("genomes",{keyPath:"id"})},2:function(e){e.createObjectStore("save",{keyPath:"id"}),e.createObjectStore("save_dump",{keyPath:"id"})}};t.IndexedBdRepository=class{constructor(e){this.storeName=e,this.openRequest=indexedDB.open("eve",2),this.openRequest.addEventListener("upgradeneeded",(e=>{const t=this.openRequest.result;for(let r=e.oldVersion+1;r<=e.newVersion;r++)n[r](t)})),this.openRequest.addEventListener("error",(()=>{console.error("Error",this.openRequest.error)})),this.openRequest.addEventListener("success",(()=>{this.db=this.openRequest.result}))}getStore(e="readonly"){return r(this,void 0,void 0,(function*(){const t=(yield this.getDB()).transaction(this.storeName,e);return new o(t.objectStore(this.storeName))}))}getDB(){return new Promise((e=>{this.db?e(this.db):this.openRequest.addEventListener("success",(()=>e(this.openRequest.result)))}))}};class o{constructor(e){this.store=e}add(e,t){return new Promise(((r,n)=>{const o=this.store.add(e,t);o.onsuccess=()=>r(),o.onerror=()=>n()}))}delete(e){return new Promise(((t,r)=>{const n=this.store.delete(e);n.onsuccess=()=>t(),n.onerror=()=>r()}))}get(e){return new Promise(((t,r)=>{const n=this.store.get(e);n.onsuccess=()=>t(n.result),n.onerror=()=>r()}))}getAll(e,t){return new Promise(((r,n)=>{const o=this.store.getAll(e,t);o.onsuccess=()=>r(o.result),o.onerror=()=>n()}))}put(e,t){return new Promise(((r,n)=>{const o=this.store.put(e,t);o.onsuccess=()=>r(),o.onerror=()=>n()}))}}},5759:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.IndexedBdSaveDumpRepository=void 0;const o=r(9396);class i extends o.IndexedBdRepository{constructor(){super("save_dump")}find(e){return n(this,void 0,void 0,(function*(){const t=yield this.getStore("readonly");return(yield t.get(e)).dump}))}add(e,t){return n(this,void 0,void 0,(function*(){const r=yield this.getStore("readwrite");yield r.put({id:e,dump:t})}))}delete(e){return n(this,void 0,void 0,(function*(){const t=yield this.getStore("readwrite");yield t.delete(e)}))}}t.IndexedBdSaveDumpRepository=i},8984:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.IndexedBdSaveRepository=void 0;const o=r(6567),i=r(4025),s=r(9396),a=r(5759);class l extends s.IndexedBdRepository{constructor(){super("save"),this.dataRepository=new a.IndexedBdSaveDumpRepository}add(e,t){return n(this,void 0,void 0,(function*(){const r=yield this.getStore("readwrite");yield r.put(e.serialize()),yield this.dataRepository.add(e.getId(),t)}))}findAll(){return n(this,void 0,void 0,(function*(){const e=yield this.getStore("readonly");return(yield e.getAll()).filter((e=>e.version===o.DUMP_VERSION)).map((e=>new i.SaveItem(e.id,e.createdAt,e.step,e.renderMode,e.version)))}))}delete(e){return n(this,void 0,void 0,(function*(){const t=yield this.getStore("readwrite");yield t.delete(e.getId()),yield this.dataRepository.delete(e.getId())}))}getDump(e){return this.dataRepository.find(e.getId())}}t.IndexedBdSaveRepository=l},711:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveOptions=t.loadOptions=void 0;const n=r(4282);t.loadOptions=function(){return Object.assign({width:200,height:100,loop:n.GridLoopType.NONE,population:5,initialEnergy:70,lightDepth:100,lightGradient:!1,mineralsDepth:100,mineralsGradient:!1},function(e){const t=localStorage.getItem("evo_simulation_options");let r={};if("string"==typeof t){const e=JSON.parse(t);"object"==typeof e&&(r=e)}return r}())},t.saveOptions=function(e){var t;t=e,localStorage.setItem("evo_simulation_options",JSON.stringify(t))}},1065:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.GenomeItem=void 0;const o=r(8949),i=r(2841);class s{constructor(e,t,r,n){if(this.id=t,this.genome=r,this.createdAt=n,(0,o.makeObservable)(this),r.version!==i.GENOME_VERSION)throw new Error("Bad genome version");this.name=e}getId(){return this.id}getName(){return this.name}setName(e){this.name=e}getGenome(){return this.genome}getCreatedAt(){return this.createdAt}equals(e){return this.id===e.getId()}serialize(){return{id:this.id,name:this.name,createdAt:this.createdAt,genome:(0,o.toJS)(this.genome)}}}n([o.observable],s.prototype,"name",void 0),t.GenomeItem=s},7287:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.GenomeStore=void 0;const i=r(8949),s=r(1065);class a{constructor(e){this.repository=e,this.items=[],(0,i.makeObservable)(this),this.refresh()}addGenome(e,t=""){return this.put(new s.GenomeItem(t,this.generateId(),e,+Date.now()))}getItems(){return this.items.slice().sort(((e,t)=>t.getCreatedAt()-e.getCreatedAt()))}refresh(){this.repository.findAll().then((e=>{(0,i.runInAction)((()=>this.items=e))}))}put(e){return o(this,void 0,void 0,(function*(){yield this.repository.put(e),(0,i.runInAction)((()=>{const t=this.items.findIndex((t=>t.equals(e)));-1===t?this.items.push(e):this.items[t]=e}))}))}delete(e){return o(this,void 0,void 0,(function*(){yield this.repository.delete(e),(0,i.runInAction)((()=>this.items=this.items.filter((t=>!t.equals(e)))))}))}generateId(){return crypto.randomUUID()}}n([i.observable],a.prototype,"items",void 0),t.GenomeStore=a},7822:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.PaintMode=t.BrushType=void 0;const o=r(8949),i=r(2841);var s;!function(e){e.SQUARE="SQUARE",e.CIRCLE="CIRCLE"}(s=t.BrushType||(t.BrushType={}));class a{constructor(e,t){this.simulation=e,this.canvasRenderer=t,this.enabled=!1,this.type=i.CellType.ORGANIC,this.brush=s.SQUARE,this.size=1,this.ignore=[],this.genome=null,this.lastPainted={},(0,o.makeObservable)(this)}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}getType(){return this.type}setType(e){this.type=e}getBrush(){return this.brush}setBrush(e){this.brush=e}getSize(){return this.size}setSize(e){this.size=e}getIgnore(){return this.ignore}addIgnore(e){this.ignore.push(e)}removeIgnore(e){this.ignore=this.ignore.filter((t=>t!==e))}setClipboard(e){this.genome=e}clearClipboard(){this.genome=null}isIgnore(e){return this.ignore.includes(e)}paint(e,t){this.clearPaintHistory();const r=this.simulation.getOptions().width,n=this.simulation.getOptions().height,i=this.getSize()-1,a=[],l=+Date.now(),c=(e,t)=>{if(e<0||t<0||e>=r||t>=n)return;const o=e+":"+t;this.lastPainted[o]||a.push([e,t]),this.lastPainted[o]=l};if(this.getBrush()===s.SQUARE)for(let r=0;r<1+2*i;r++)for(let n=0;n<1+2*i;n++)c(e-i+r,t-i+n);else if(this.getBrush()===s.CIRCLE){let r=2*i-3,n=-6,o=4*i-10,s=0,a=i;for(;a>=s;){for(let r=i-s;r<=i+s;r++)c(r+e-i,t+a),c(r+e-i,t-a);for(let r=i-a;r<=i+a;r++)c(r+e-i,t+s),c(r+e-i,t-s);r<0?(r+=o,o-=8,a-=1):(r+=n,o-=4),n-=4,s+=1}}if(0===a.length)return;const u={};this.genome&&(u.genome=(0,o.toJS)(this.genome)),this.simulation.replace(a,this.getType(),(0,o.toJS)(this.ignore),u).then((()=>{this.canvasRenderer.update()}))}clearPaintHistory(){const e=+Date.now();for(const t in this.lastPainted)this.lastPainted[t]+1e3<e&&delete this.lastPainted[t]}}n([o.observable],a.prototype,"enabled",void 0),n([o.observable],a.prototype,"type",void 0),n([o.observable],a.prototype,"brush",void 0),n([o.observable],a.prototype,"size",void 0),n([o.observable],a.prototype,"ignore",void 0),n([o.observable],a.prototype,"genome",void 0),n([o.action],a.prototype,"setEnabled",null),n([o.action],a.prototype,"setType",null),n([o.action],a.prototype,"setBrush",null),n([o.action],a.prototype,"setSize",null),n([o.action],a.prototype,"addIgnore",null),n([o.action],a.prototype,"removeIgnore",null),n([o.action],a.prototype,"setClipboard",null),n([o.action],a.prototype,"clearClipboard",null),t.PaintMode=a},3857:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.RendererStore=void 0;const o=r(8949),i=r(9408),s=r(8158),a=r(2575),l=r(3629),c=r(7822),u={default:null,energy:"energy",lifetime:"lifetime",supply:"supply",genesis:"genesis"};class d{constructor(e){this.simulation=e,this.renderMode="default",this.renderTime=0,this.scale=1,this.offset=[0,0],this.canvasDestroyListeners=[],this.needRender=!1,this.rendering=!1,this.updatingState=!1,this.updateListeners=[],this.needUpdate=!1,this.renderer=new i.WorkerRenderer,this.paintMode=new c.PaintMode(e,this),(0,o.makeObservable)(this)}setElement(e){this.element&&this.canvasDestroyListeners.forEach((e=>e())),this.element=e,this.context=e.getContext("2d",{alpha:!1}),this.canvasDestroyListeners.push((0,a.initMouseInteractions)(e,this)),this.canvasDestroyListeners.push((0,l.initTouchInteractions)(e,this)),this.fitCenter()}requestRedraw(){if(this.rendering)return void(this.needRender=!0);const e=+Date.now();this.render((t=>{this.redrawId&&cancelAnimationFrame(this.redrawId),this.redrawId=requestAnimationFrame((()=>{this.context.putImageData(t,0,0),(0,o.runInAction)((()=>{this.renderTime=+Date.now()-e})),this.redrawId=null,this.rendering=!1,this.needRender&&(this.needRender=!1,this.requestRedraw())}))}))}setRenderMode(e){this.renderMode=e,this.update(null,e)}update(e,t=this.renderMode){if(this.updatingState)return this.needUpdate=!0,void(e&&this.updateListeners.push(e));const r=this.updateListeners;this.updateListeners=[],this.updatingState=!0,this.simulation.getState(u[t]).then((t=>{this.setState(t),this.updatingState=!1,this.requestRedraw(),r.map((e=>e())),e&&e(),this.needUpdate&&(this.needUpdate=!1,this.update())}))}getRenderMode(){return this.renderMode}getScale(){return this.scale}setScale(e,t=!0){this.scale=e<1?1:e>64?64:Math.round(e),t&&this.requestRedraw()}scaleUp(e=!0){this.setScale(2*this.getScale(),e)}scaleDown(e=!0){this.setScale(this.getScale()/2,e)}getOffset(){return this.offset}setOffset(e,t){this.offset=[Math.round(e),Math.round(t)],this.requestRedraw()}fitCenter(){if(!this.element)return;const e=this.element.width,t=this.element.height,r=this.simulation.getOptions().width,n=this.simulation.getOptions().height,o=r/n,i=e/t,s=o>=i?e:t,a=o>=i?r:n;for(let e=1;e<=64;e++)if(s<e*a){this.scale=1===e?1:e-1;break}this.setOffset(Math.ceil((e-this.scale*r)/2),Math.ceil((t-this.scale*n)/2))}setState(e){this.state=e}terminate(){this.renderer.terminate()}getRenderTime(){return this.renderTime}click(e,t){if(this.paintMode.isEnabled())return void this.paint(e,t);const r=Math.ceil((e-this.offset[0])/this.scale)-1;if(r<0||r>=this.simulation.getOptions().width)return;const n=Math.ceil((t-this.offset[1])/this.scale)-1;n<0||n>=this.simulation.getOptions().height||this.simulation.getSelectedCell().select(r,n)}paint(e,t){this.paintMode.paint(Math.ceil((e-this.offset[0])/this.scale)-1,Math.ceil((t-this.offset[1])/this.scale)-1)}getPaintMode(){return this.paintMode}render(e){this.element&&this.state&&this.element.width&&this.element.height&&u[this.renderMode]===this.state.payload&&(this.rendering=!0,this.renderer.render(e,Math.trunc(this.element.width),Math.trunc(this.element.height),this.offset[0],this.offset[1],this.scale,this.renderMode,new s.Data(new Uint8Array(this.state.buffer.slice(0)),this.state.payload,this.simulation.getOptions().width,this.simulation.getOptions().height)))}}n([o.observable],d.prototype,"renderMode",void 0),n([o.observable],d.prototype,"renderTime",void 0),n([o.action],d.prototype,"setRenderMode",null),t.RendererStore=d},2718:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.RootStore=t.RootStoreContext=void 0;const o=r(8949),i=r(7294),s=r(1563),a=r(4942),l=r(8984),c=r(711),u=r(7287),d=r(9599),h=r(1548);t.RootStoreContext=(0,i.createContext)(null);class m{constructor(){this.simulationStore=null,(0,o.makeObservable)(this),this.saveStore=new d.SaveStore(this,new l.IndexedBdSaveRepository),this.genomeStore=new u.GenomeStore(new a.IndexedBdGenomeRepository)}newSimulation(e){(0,s.createSimulation)(e).then((t=>{(0,o.runInAction)((()=>{this.closeSimulation(),this.simulationStore=new h.SimulationStore(t,this.saveStore),(0,c.saveOptions)(e)}))}))}loadSimulation(e,t="default"){(0,s.createSimulationFromDump)(e).then((e=>{(0,o.runInAction)((()=>{this.closeSimulation(),this.simulationStore=new h.SimulationStore(e,this.saveStore),this.simulationStore.getRendererStore().setRenderMode(t)}))}))}closeSimulation(){this.simulationStore&&this.simulationStore.terminate(),this.simulationStore=null}getSaveStore(){return this.saveStore}getGenomeStore(){return this.genomeStore}getSimulationStore(){return this.simulationStore}}n([o.observable],m.prototype,"simulationStore",void 0),n([o.action],m.prototype,"newSimulation",null),n([o.action],m.prototype,"loadSimulation",null),n([o.action],m.prototype,"closeSimulation",null),t.RootStore=m},9599:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SaveStore=void 0;const i=r(8949),s=r(4025);class a{constructor(e,t){this.store=e,this.repository=t,this.items=[],(0,i.makeObservable)(this),this.refresh()}addSave(e,t){return this.items.push(e),this.repository.add(e,t)}getItems(){return this.items.slice().sort(((e,t)=>t.getCreatedAt()-e.getCreatedAt()))}refresh(){this.repository.findAll().then((e=>{(0,i.runInAction)((()=>this.items=e))}))}delete(e){return o(this,void 0,void 0,(function*(){yield this.repository.delete(e),(0,i.runInAction)((()=>this.items=this.items.filter((t=>!t.equals(e)))))}))}serialize(e){return o(this,void 0,void 0,(function*(){return e.serialize(yield this.repository.getDump(e))}))}getDump(e){return o(this,void 0,void 0,(function*(){return yield this.repository.getDump(e)}))}createItem(e){return new s.SaveItem(this.generateId(),+Date.now(),e.step,this.store.getSimulationStore().getRendererStore().getRenderMode(),e.version)}generateId(){return crypto.randomUUID()}}n([i.observable],a.prototype,"items",void 0),n([i.action],a.prototype,"addSave",null),t.SaveStore=a},4025:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SaveItem=void 0,t.SaveItem=class{constructor(e,t,r,n,o){this.id=e,this.createdAt=t,this.step=r,this.renderMode=n,this.version=o}getId(){return this.id}getStep(){return this.step}getCreatedAt(){return this.createdAt}getRenderMode(){return this.renderMode}equals(e){return this.id===e.getId()}serialize(e=null){return{id:this.id,createdAt:this.createdAt,step:this.step,renderMode:this.renderMode,dump:e,version:this.version}}}},2133:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.SelectedCell=void 0;const o=r(8949),i=r(2841),s=r(157);class a{constructor(e){this.simulation=e,this.coords=null,this.cell=null,this.alive=!0,(0,o.makeObservable)(this)}select(e,t){this.alive=!0,this.coords=[e,t],this.simulation.getCell(e,t).then((e=>{(0,o.runInAction)((()=>{e&&e.type===i.CellType.ORGANISM?(0,o.runInAction)((()=>this.cell=e)):(0,o.runInAction)((()=>this.cell=null))})),this.simulation.getUI().setActiveTab(s.SidebarTab.CELL)}))}update(){this.cell&&this.alive&&this.cell.type===i.CellType.ORGANISM&&this.simulation.findCellById(this.cell.id).then((e=>{e&&e.type===i.CellType.ORGANISM?(0,o.runInAction)((()=>this.cell=e)):(0,o.runInAction)((()=>this.alive=!1))}))}getCoords(){return this.coords}getCell(){return this.cell}isAlive(){return this.alive}}n([o.observable],a.prototype,"coords",void 0),n([o.observable],a.prototype,"cell",void 0),n([o.observable],a.prototype,"alive",void 0),n([o.action],a.prototype,"select",null),t.SelectedCell=a},8374:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.SimulationParametersStore=void 0;const o=r(8949),i=r(6567);class s{constructor(e){this.store=e,this.organismMaxLifetime=100,this.photosynthesisEnergy=5,this.chemosynthesisEnergy=5,this.mutationProgramRate=25,this.mutationBaseOrgansRate=25,this.mutationLimbOrgansRate=0,(0,o.makeObservable)(this)}init(e){this.organismMaxLifetime=e.organismMaxLifetime,this.photosynthesisEnergy=e.photosynthesisEnergy,this.chemosynthesisEnergy=e.chemosynthesisEnergy,this.mutationProgramRate=e.mutationProgramRate,this.mutationBaseOrgansRate=e.mutationBaseOrgansRate,this.mutationLimbOrgansRate=e.mutationLimbOrgansRate}setOrganismMaxLifetime(e){this.store.getSimulation().setParameter(i.Parameter.organismMaxLifetime,e).then((e=>{(0,o.runInAction)((()=>{this.organismMaxLifetime=e}))}))}setPhotosynthesisEnergy(e){this.store.getSimulation().setParameter(i.Parameter.photosynthesisEnergy,e).then((e=>{(0,o.runInAction)((()=>{this.photosynthesisEnergy=e}))}))}setChemosynthesisEnergy(e){this.store.getSimulation().setParameter(i.Parameter.chemosynthesisEnergy,e).then((e=>{(0,o.runInAction)((()=>{this.chemosynthesisEnergy=e}))}))}setMutationProgramRate(e){this.store.getSimulation().setParameter(i.Parameter.mutationProgramRate,e).then((e=>{(0,o.runInAction)((()=>{this.mutationProgramRate=e}))}))}setMutationBaseOrgansRate(e){this.store.getSimulation().setParameter(i.Parameter.mutationBaseOrgansRate,e).then((e=>{(0,o.runInAction)((()=>{this.mutationBaseOrgansRate=e}))}))}setMutationLimbOrgansRate(e){this.store.getSimulation().setParameter(i.Parameter.mutationLimbOrgansRate,e).then((e=>{(0,o.runInAction)((()=>{this.mutationLimbOrgansRate=e}))}))}getOrganismMaxLifetime(){return this.organismMaxLifetime}getPhotosynthesisEnergy(){return this.photosynthesisEnergy}getChemosynthesisEnergy(){return this.chemosynthesisEnergy}getMutationProgramRate(){return this.mutationProgramRate}getMutationBaseOrgansRate(){return this.mutationBaseOrgansRate}getMutationLimbOrgansRate(){return this.mutationLimbOrgansRate}}n([o.observable],s.prototype,"organismMaxLifetime",void 0),n([o.observable],s.prototype,"photosynthesisEnergy",void 0),n([o.observable],s.prototype,"chemosynthesisEnergy",void 0),n([o.observable],s.prototype,"mutationProgramRate",void 0),n([o.observable],s.prototype,"mutationBaseOrgansRate",void 0),n([o.observable],s.prototype,"mutationLimbOrgansRate",void 0),n([o.action],s.prototype,"init",null),n([o.action],s.prototype,"setOrganismMaxLifetime",null),n([o.action],s.prototype,"setPhotosynthesisEnergy",null),n([o.action],s.prototype,"setChemosynthesisEnergy",null),n([o.action],s.prototype,"setMutationProgramRate",null),n([o.action],s.prototype,"setMutationBaseOrgansRate",null),n([o.action],s.prototype,"setMutationLimbOrgansRate",null),t.SimulationParametersStore=s},1548:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SimulationStore=void 0;const i=r(8949),s=r(3857),a=r(2133),l=r(8374),c=r(157);class u{constructor(e,t){this.simulation=e,this.saveStore=t,this.paused=!0,this.ready=!1,this.currentStep=0,this.stepTime=0,this.organismsCount=0,(0,i.makeObservable)(this),this.options=this.simulation.getOptions(),this.rendererStore=new s.RendererStore(this),this.parameters=new l.SimulationParametersStore(this),this.ui=new c.SimulationUIStore,this.selectedCell=new a.SelectedCell(this),e.getParameters().then((e=>{this.parameters.init(e)})),this.rendererStore.update((()=>{(0,i.runInAction)((()=>this.ready=!0))})),this.simulation.getOrganismsCount().then((e=>{(0,i.runInAction)((()=>this.organismsCount=e))}))}pause(){this.paused=!0}start(){this.paused=!1;const e=()=>{this.step().then((()=>{this.rendererStore.update((()=>{this.paused||e()}))}))};e()}isPaused(){return this.paused}isReady(){return this.ready}makeStep(){this.step().then((()=>{this.rendererStore.update()}))}getState(e){return this.simulation.getState(e)}getOptions(){return this.options}getRendererStore(){return this.rendererStore}terminate(){this.simulation&&this.simulation.terminate(),this.rendererStore&&this.rendererStore.terminate()}getParameters(){return this.parameters}getSimulation(){return this.simulation}getUI(){return this.ui}getCurrentStep(){return this.currentStep}getStepTime(){return this.stepTime}getOrganismsCount(){return this.organismsCount}getWidth(){return this.simulation.getOptions().width}getHeight(){return this.simulation.getOptions().height}getCell(e,t){return this.simulation.getCell(e,t)}findCellById(e){return this.simulation.findCellById(e)}getSelectedCell(){return this.selectedCell}replace(e,t,r,n){return this.simulation.replace(e,t,r,n)}save(){return o(this,void 0,void 0,(function*(){const e=yield this.simulation.dump();yield this.saveStore.addSave(this.saveStore.createItem(e),e)}))}step(){return o(this,void 0,void 0,(function*(){const e=Date.now(),t=yield this.simulation.makeStep(),r=yield this.simulation.getOrganismsCount();this.selectedCell.update(),(0,i.runInAction)((()=>{this.stepTime=Date.now()-e,this.currentStep=t,this.organismsCount=r}))}))}}n([i.observable],u.prototype,"paused",void 0),n([i.observable],u.prototype,"ready",void 0),n([i.observable],u.prototype,"currentStep",void 0),n([i.observable],u.prototype,"stepTime",void 0),n([i.observable],u.prototype,"organismsCount",void 0),n([i.action],u.prototype,"pause",null),n([i.action],u.prototype,"start",null),t.SimulationStore=u},157:function(e,t,r){var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.SimulationUIStore=t.SidebarTab=void 0;const o=r(8949);var i;(i=t.SidebarTab||(t.SidebarTab={})).CELL="CELL",i.PARAMERS="PARAMETERS",i.GENOMES="GENOMES",i.SAVES="SAVES";class s{constructor(){this.activeTab=null,this.infoOpened=!1,(0,o.makeObservable)(this)}getActiveTab(){return this.activeTab}isTabActive(e){return this.activeTab===e}toggleTab(e){this.activeTab===e?this.activeTab=null:this.activeTab=e}setActiveTab(e){this.activeTab=e}closeTab(){this.activeTab=null}isInfoOpened(){return this.infoOpened}setInfoOpened(e){this.infoOpened=e}}n([o.observable],s.prototype,"activeTab",void 0),n([o.observable],s.prototype,"infoOpened",void 0),n([o.action],s.prototype,"toggleTab",null),n([o.action],s.prototype,"setActiveTab",null),n([o.action],s.prototype,"closeTab",null),n([o.action],s.prototype,"setInfoOpened",null),t.SimulationUIStore=s},7698:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalStyle=void 0;const n=r(8804);t.GlobalStyle=n.createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: monospace;
        font-size: 16px;
    }

    input,
    button,
    select,
    optgroup,
    textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    button {
        cursor: pointer;
    }

    canvas {
        display: block;
    }

    * {
        scrollbar-width: auto;
        scrollbar-color: #ffffff transparent;
    }

    *::-webkit-scrollbar {
        width: 8px;
        height: 3px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #ffffff;
        border-radius: 10px;
    }
`},23:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.THEME=void 0,t.THEME={background:"#10161e",color:"#f8f2ec",primary:"#0E49B5",success:"#069A8E",secondary:"#393E46"}},9273:(e,t,r)=>{function n(){return new Worker(r.p+"renderer.worker.worker.js")}r.r(t),r.d(t,{default:()=>n})},8365:(e,t,r)=>{function n(){return new Worker(r.p+"simulation.worker.worker.js")}r.r(t),r.d(t,{default:()=>n})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var s=1/0;for(u=0;u<e.length;u++){for(var[r,o,i]=e[u],a=!0,l=0;l<r.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[s,a,l]=r,c=0;if(s.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var u=l(n)}for(t&&t(r);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self.webpackChunkeve=self.webpackChunkeve||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[736],(()=>n(2629)));o=n.O(o)})();