import React, {Component} from 'react';
import * as THREE from 'three';
import './Three.less';
// import mapImg from './map.jpg'
// import myfont from './fonts/helvetiker_regular.typeface.json'

// var loader = new THREE.FontLoader();
// const fileload = new Promise(function(resolve,reject){
//     loader.load( './fonts/helvetiker_regular.typeface.json', function ( font ) {
//         // initTextThree( font );
//             // animate();
//             // console.log(font)
//     });
// })
function draw() {
    cube.rotation.y = (cube.rotation.y + 0.01) % (Math.PI * 2);
    renderer.render(scene, camera);
}

export default class Home extends Component {
    
    initLineThree(){
        // 渲染器
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize( 500, 300 );
        document.getElementById('three_line').appendChild( renderer.domElement );
        // 相机
        let camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 500 );
        camera.position.set( 0, 0, 100 );
        camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
        // 场景
        let scene = new THREE.Scene();

        //定义材质
        let material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

        let geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
        geometry.vertices.push(new THREE.Vector3( -5, 0, 0) );
        geometry.vertices.push(new THREE.Vector3( -5, 5, 0) );
        geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
        geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
        geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );
        geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
        let line = new THREE.Line( geometry, material );
        scene.add( line );
        renderer.render( scene, camera );
    }
    initTextThree(){
        // 渲染器
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize( 500, 300 );
        document.getElementById('three_text').appendChild( renderer.domElement );
        // 相机
        let camera = new THREE.PerspectiveCamera( 85, window.innerWidth / window.innerHeight, 1, 1000 );
        // 该那边相机位置
        camera.position.set(-2, -4, 5);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        // 场景
        let scene = new THREE.Scene();

        // load a texture, set wrap mode to repeat
        // var texture = new THREE.TextureLoader().load( "cover_4.jpg" );
        // texture.wrapS = THREE.RepeatWrapping;
        // texture.wrapT = THREE.RepeatWrapping;
        // texture.repeat.set( 4, 4 );

        // let geometry = new THREE.TextGeometry( 'Hello three.js!', {
        //     font: myfont,
		// 	size: 80,
		// 	height: 20,
		// 	curveSegments: 2
        // } );
        // scene.add( geometry );

        // 绘制长方形
        // var cube = new THREE.Mesh(new THREE.CubeGeometry(2,2,2),
        //     new THREE.MeshBasicMaterial({
        //         color: 0xff0000,
        //         wireframe: true
        //     })
        // );
        //添加球体 ,  红色   这里的三个参数是(半径、经度上的切片数，纬度上的切片数)。经纬度数据越大圆越是精细(共7个参数)
        var cube = new THREE.Mesh(
            new THREE.SphereGeometry(3, 20, 30),
                new THREE.MeshBasicMaterial({
                    // color: 0xff0000,
                    // wireframe: true,
                    map:THREE.ImageUtils.loadTexture('/static/img/map.jpg'),
                })
        );
        scene.add(cube);

        //定义了场景中的物体，设置好的照相机之后，渲染
        setInterval(function(){
            cube.rotation.y = (cube.rotation.y + 0.01) % (Math.PI * 2);
            renderer.render(scene, camera);
         }, 20);
        // 渲染
        // renderer.render( scene, camera );
    }
    componentDidMount(){
        this.initLineThree();
        this.initTextThree();
    }
    render() {
        
        return (
            <div>
                <h3>绘线图</h3>
                <div id='three_line'></div>
                <h3>创建文本</h3>
                <div id='three_text'></div>
            </div>
        )
    }
}