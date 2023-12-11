import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";

const objects = []; //list-array
let raycaster; //raygun

let moveForward = false;
let moveBackwards = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now(); //curent time
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();

let camera, scene, controls, renderer;

init();
animate();
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.y = 4;

  controls = new PointerLockControls(camera, document.body);

  const blocker = document.getElementById("blocker");
  const instructions = document.getElementById("instructions");

  instructions.addEventListener("click", function () {
    controls.lock();
  });
  controls.addEventListener("lock", function () {
    instructions.style.display = "none";
    blocker.style.display = "none";
  });
  controls.addEventListener("unlock", function () {
    blocker.style.display = "block";
    instructions.style.display = "";
  });

  scene.add(controls.getObject());

  const onKeyDown = function (event) {
    switch (event.code) {
      case "KeyW":
        moveForward = true;
        break;
      case "KeyA":
        moveLeft = true;
        break;
      case "KeyS":
        moveBackwards = true;
        break;
      case "KeyD":
        moveRight = true;
        break;
      case "Space":
        if (canJump === true) velocity.y += 400;
        canJump = false;
        break;
    }
  };

  const onKeyUp = function (event) {
    switch (event.code) {
      case "KeyW":
        moveForward = false;
        break;
      case "KeyA":
        moveLeft = false;
        break;
      case "KeyS":
        moveBackwards = false;
        break;
      case "KeyD":
        moveRight = false;
        break;
    }
  };

  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);

  raycaster = new THREE.Raycaster(
    new THREE.Vector3(),
    new THREE.Vector3(0, -1, 0),
    0,
    10
  );

  const light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  const planeGeometry = new THREE.PlaneGeometry(87, 76, 64, 64);
  const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xb3d9ff });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotateX(-1.57);
  scene.add(plane);
  objects.push(plane);

const cubeGeometry = new THREE.BoxGeometry(5, 5, 5, 5);
const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x0080ff });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.rotateX(-1.57);
scene.add(cube);
objects.push(cube);
cube.position.y = 10;



const cube1Geometry = new THREE.BoxGeometry(5, 5, 5, 5);
const cube1Material = new THREE.MeshLambertMaterial({ color: 0x3399ff });
const cube1 = new THREE.Mesh(cube1Geometry, cube1Material);
cube.rotateX(-1.57);
scene.add(cube1);
objects.push(cube1);
cube1.position.y = 20
;

const cube2Geometry = new THREE.BoxGeometry(5, 5, 5, 5);
const cube2Material = new THREE.MeshLambertMaterial({ color: 0x3399ff });
const cube2 = new THREE.Mesh(cube2Geometry, cube2Material);
cube.rotateX(-1.57);
scene.add(cube2);
objects.push(cube2);
cube2.position.y = 30
;

const cube3Geometry = new THREE.BoxGeometry(5, 5, 5, 5);
const cube3Material = new THREE.MeshLambertMaterial({ color: 0x3399ff });
const cube3 = new THREE.Mesh(cube3Geometry, cube3Material);
cube.rotateX(-1.57);
scene.add(cube3);
objects.push(cube3);
cube3.position.y = 40

const cube4Geometry = new THREE.BoxGeometry(5, 5, 5, 5);
const cube4Material = new THREE.MeshLambertMaterial({ color: 0x3399ff });
const cube4 = new THREE.Mesh(cube4Geometry, cube4Material);
cube.rotateX(-1.57);
scene.add(cube4);
objects.push(cube4);
cube4.position.y = 50

const cube5Geometry = new THREE.BoxGeometry(5, 5, 5, 5);
const cube5Material = new THREE.MeshLambertMaterial({ color: 0x3399ff });
const cube5 = new THREE.Mesh(cube5Geometry, cube5Material);
cube.rotateX(-1.57);
scene.add(cube5);
objects.push(cube5);
cube5.position.y = 60

const cube6Geometry = new THREE.BoxGeometry(5, 5, 5, 5);
const cube6Material = new THREE.MeshLambertMaterial({ color: 0x3399ff });
const cube6 = new THREE.Mesh(cube6Geometry, cube6Material);
cube.rotateX(-1.57);
scene.add(cube6);
objects.push(cube6);
cube6.position.y = 70

const cube7Geometry = new THREE.BoxGeometry(5, 5, 5, 5);
const cube7Material = new THREE.MeshLambertMaterial({ color: 0x3399ff });
const cube7 = new THREE.Mesh(cube7Geometry, cube7Material);
cube.rotateX(-1.57);
scene.add(cube7);
objects.push(cube7);
cube7.position.y = 80

const cube8Geometry = new THREE.BoxGeometry(5, 5, 5, 5);
const cube8Material = new THREE.MeshLambertMaterial({ color: 0x3399ff });
const cube8 = new THREE.Mesh(cube8Geometry, cube8Material);
cube.rotateX(-1.57);
scene.add(cube8);
objects.push(cube8);
cube8.position.y = 90

const cube9Geometry = new THREE.BoxGeometry(5, 5, 5, 5);
const cube9Material = new THREE.MeshLambertMaterial({ color: 0x3399ff });
const cube9 = new THREE.Mesh(cube9Geometry, cube9Material);
cube.rotateX(-1.57);
scene.add(cube9);
objects.push(cube9);
cube9.position.y = 100

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize);
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  const time = performance.now();
  if (controls.isLocked === true) {
    raycaster.ray.origin.copy(controls.getObject().position);
    raycaster.ray.origin.y -= 1;

    const intersections = raycaster.intersectObjects(objects, false);
    const onObject = intersections.length > 0;
    const delta = (time - prevTime) / 1000;

    velocity.x -= velocity.x *10.0* delta
    velocity.z -= velocity.z *10.0* delta
    velocity.y -= 9.8 *100.0* delta

    direction.z = Number(moveForward) - Number(moveBackwards)
    direction.x = Number(moveRight) - Number(moveLeft)
    direction.normalize()

    if (moveForward || moveBackwards)   velocity.z -= direction.z *400.0* delta 
    if (moveLeft || moveRight)   velocity.x -= direction.x *400.0* delta 

    if(onObject === true){
      velocity.y = Math.max(0,velocity.y)
      canJump = true
    }
  controls.moveRight(-velocity.x*delta)
  controls.moveForward(-velocity.z*delta)
  controls.getObject().position.y += (velocity.y*delta)
  if(controls.getObject().position.y > 10){
    velocity.y = 0
    controls.getObject().position.y = 10
    canJump = true
  }
  }
  prevTime = time;
  renderer.render(scene, camera);
}



