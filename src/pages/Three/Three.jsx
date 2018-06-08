import React, {Component} from 'react';
import * as THREE from 'three';
import './Three.less'

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
        let camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 500 );
        camera.position.set( 0, 0, 100 );
        camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
        // 场景
        let scene = new THREE.Scene();

        // load a texture, set wrap mode to repeat
        // var texture = new THREE.TextureLoader().load( "cover_4.jpg" );
        // texture.wrapS = THREE.RepeatWrapping;
        // texture.wrapT = THREE.RepeatWrapping;
        // texture.repeat.set( 4, 4 );

        let geometry = new THREE.TextGeometry( 'Hello three.js!', {
            size: 20,
            font:THREE.Font
        } );
        scene.add( geometry );

        // 渲染
        renderer.render( scene, camera );
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