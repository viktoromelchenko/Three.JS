let scene, camera, renderer;
let sosna = document.getElementById('sosna');
let dyb = document.getElementById('dyb');
let klen = document.getElementById('klen');
let lupa = document.getElementById('lupa');


    function init(){
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xdddddd);
 
            renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
            renderer.setSize(600,600);
            document.body.appendChild(renderer.domElement);


            window.addEventListener('resize', function(){
                var width = window.innerWidth;
                var heigth = window.innerHeight;
                renderer.setSize(width/heigth);
                renderer.render(scene,camera);
                camera.aspect = width/heigth;
                camera.updateProjectionMatrix();
            })

            camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
            camera.rotation.y = 45
            camera.position.x = 5;
            camera.position.y = 5;
            camera.position.z = 5;

            controls = new THREE.OrbitControls(camera, renderer.domElement);

            hlight = new THREE.AmbientLight(0xffffff,0.8);
            // scene.add(hlight);

            directionalLight = new THREE.DirectionalLight(0xffffff);
        
            directionalLight.castShadow = true;
            scene.add(directionalLight);
            light = new THREE.PointLight(0xdddddd);
            light.position.set(0,300,500);
            scene.add(light)

            // light2 = new THREE.PointLight(0xdddddd);
            // light2.position.set(500,100,500);
            // scene.add(light2)

            // light3 = new THREE.PointLight(0xdddddd);
            // light3.position.set(0,100,-500);
            // scene.add(light3)

            // light4 = new THREE.PointLight(0xdddddd);
            // light4.position.set(-500,300,0);
            // scene.add(light4);





            let loader = new THREE.GLTFLoader();
            loader.load('ProectChair.gltf', function(gltf){
                
                chair = gltf.scene.children[0];
                console.log(gltf)
                chair.material = new THREE.MeshLambertMaterial();
                var textureLoader = new THREE.TextureLoader();
                var textureS = textureLoader.load( 'Textures/Material_28_baseColor.jpg' );
                chair.material.map = textureS;

                sosna.addEventListener('click', function(){
                    var textureS = textureLoader.load( 'textures/1.jpg' );
                    textureS.flipY = false;
                    chair.traverse((child)=> {
                        if ( child.isMesh ){
                            child.material.map = textureS;
        
                        }
                    })
                })
                dyb.addEventListener('click', function(){
                    var textureS = textureLoader.load( 'textures/2.jpg' );
                    textureS.flipY = false;
                    chair.traverse((child)=> {
                        if ( child.isMesh ){
                            child.material.map = textureS
                        }
                    })
                })
                klen.addEventListener('click', function(){
                    var textureS = textureLoader.load( 'textures/3.jpg' );
                    textureS.flipY = false;
                    chair.traverse((child)=> {
                        if ( child.isMesh ){
                            child.material.map = textureS
                        }
                    })
                })
                lupa.addEventListener('click', function(){
                    var textureS = textureLoader.load( 'textures/4.jpg' );
                    textureS.flipY = false;
                    chair.traverse((child)=> {
                        if ( child.isMesh ){
                            child.material.map = textureS
                        }
                    })
                })
            //     console.log(gltf)
                // chair.scale.set(0.5,0.5,0.5);
                scene.add(chair);
                animate();
            });


            // var loader = new THREE.FileLoader()
            // loader.setPath( this.path );
            // texture.addEventListener('click', function(){
            //     loader.load(img, function(img) {
            //         material.map = img;
            // //         scene.add(obj3D)
            //     })
            // })

            
            }
    function animate() {
            renderer.render(scene,camera);
            requestAnimationFrame(animate);
    }
    init();





    //      {
    //     let blob = await new Promise(resolve => texture.toBlob(resolve, 'textures/jpg'));
    //     let response = await fetch('/article/fetch/post/image', {
    //       method: 'POST',
    //       body: blob
    //     });
  
    //     // сервер ответит подтверждением и размером изображения
    //     let result = await response.json();
    //     alert(result.message);
    //   }
