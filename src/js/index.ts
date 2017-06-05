import {Point} from "./modulesAreSingleTons";
import * as THREE from "three"

new THREE.Vector3();

console.log("Modules are Singletons, yeah");
const p1 = Point();
const p2 = Point();

console.log(`p1 is now at (${p1.getX()}, ${p1.getY()})`);
console.log(`p2 is now at (${p2.getX()}, ${p2.getY()})`);

p1.moveX(3);

console.log(`p1 is now at (${p1.getX()}, ${p1.getY()})`);
console.log(`p2 is now at (${p2.getX()}, ${p2.getY()})`);


console.log("done")
