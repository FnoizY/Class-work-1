    // Name: Fares Bahamdan 
    // ID: 201943050
    
let camera, scene, renderer;

init();
animate();
document.getElementById('screen-saver').style.display = 'block';
function init() {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 1;

    scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const material = new THREE.MeshNormalMaterial();


    for (let i = 0; i < 50; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 2-1;
        mesh.position.y = Math.random() * 2-1;
        mesh.position.z = Math.random() * 2-1;
        scene.add(mesh);
    }

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('screen-saver').appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);

    scene.traverse(function (object) {
        if (object.isMesh) {
            object.rotation.x += 0.01;
            object.rotation.y += 0.02;
        }
    });

    renderer.render(scene, camera);
}

let timeout;
const resetTimer = () => {
    clearTimeout(timeout);
    timeout = setTimeout(showScreenSaver, 60000);
};

const showScreenSaver = () => {
    document.getElementById('screen-saver').style.display = 'block';
    window.scrollTo(0, 0);
};

const hideScreenSaver = () => {
    document.getElementById('screen-saver').style.display = 'none';
};

document.addEventListener('mousemove', resetTimer);
document.addEventListener('mousedown', resetTimer);
document.addEventListener('keypress', resetTimer);
document.addEventListener('touchstart', resetTimer);
document.addEventListener('touchmove', resetTimer);
document.addEventListener("scroll",resetTimer);

document.addEventListener('mousemove', hideScreenSaver);
document.addEventListener('mousedown', hideScreenSaver);
document.addEventListener('keypress', hideScreenSaver);
document.addEventListener('touchstart', hideScreenSaver);
document.addEventListener('touchmove', hideScreenSaver);
document.addEventListener("scroll",hideScreenSaver);

