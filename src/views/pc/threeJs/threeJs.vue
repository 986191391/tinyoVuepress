<template>
  <div class="threejs-container">
    <el-button @click="onthreeclick">click</el-button>
    <div class="three-canvas"  ref="threeCanvas" @mousemove="onCanvasMouseMove"/>
  </div>
</template>

<script>
import CoolNav from '@/components/coolNav.vue'

export default {
  data () {
    return {
      T0: new Date(),
      scene: new THREE.Scene(),
      geometry: new THREE.BoxGeometry(100, 100, 100),
      material: new THREE.MeshLambertMaterial({
        color: 0xffffff
      }),
      mesh: {},
      point: {},
      camera: {},
      renderer: new THREE.WebGLRenderer()
    }
  },
  computed: {
    canvasWidth () {
      return this.$refs['threeCanvas'].clientWidth
    },
    canvasHeight () {
      return this.$refs['threeCanvas'].clientHeight
    },
    canvasWidthCenter () {
      return this.$refs['threeCanvas'].clientWidth / 2
    },
    canvasHeightCenter () {
      return this.$refs['threeCanvas'].clientHeight / 2
    }
  },
  methods: {
    canvasRender () {
      // let T1 = new Date();//本次时间
      // let t = T1 - this.T0;//时间差
      // this.T0 = T1;//把本次时间赋值给上次时间
      requestAnimationFrame(this.canvasRender);
      this.renderer.render(this.scene, this.camera);//执行渲染操作
      this.mesh.rotateY(0.001);//旋转角速度0.001弧度每毫秒
    },
    onthreeclick () {
      console.log('this.scene', this.scene.children[1])
      this.point.position.set(400, 200, 300)
      this.renderer.render(this.scene, this.camera)
    },
    onCanvasMouseMove (e) {
      const x = e.x - this.canvasWidthCenter
      const y = this.canvasHeightCenter - e.y
      const z = 300
      console.log(x, y, z)
      this.point.position.set(x, y, z); // 点光源位置
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted () {
    console.log('geometry', this.$refs)
    console.log('geometry', this.$refs['threeCanvas'].clientWidth)
    this.geometry.rotateY(-0.8)
    this.geometry.rotateX(0.6)
    console.log('mesh', this.mesh)
    // let scene = new THREE.Scene();
    /**
     * 创建网格模型
     */
    // let geometry = new THREE.SphereGeometry(60, 40, 40)
    // let geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    // let material = new THREE.MeshLambertMaterial({
    //   color: 0xffffff
    // }); //材质对象Material
    this.mesh = new THREE.Mesh(this.geometry, this.material); //网格模型对象Mesh
    this.scene.add(this.mesh); //网格模型添加到场景中

    /* 光源设置 */
    //点光源
    this.point = new THREE.PointLight(0xffffff);
    this.point.position.set(0, 0, 300); //点光源位置
    this.scene.add(this.point); //点光源添加到场景中
    //环境光
    let ambient = new THREE.AmbientLight(0x444444);
    this.scene.add(ambient);

    /**
     * 相机设置
     */
    let width = window.innerWidth; //窗口宽度
    let height = window.innerHeight; //窗口高度
    let k = width / height; //窗口宽高比
    let s = 400; //三维场景显示范围控制系数，系数越大，显示的范围越大

    //创建相机对象
    this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    this.camera.position.set(0, 0, 300); //设置相机位置
    this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    this.renderer.setSize(width, height);//设置渲染区域尺寸
    this.renderer.setClearColor(0x000000, 1); //设置背景颜色
    this.$refs['threeCanvas'].appendChild(this.renderer.domElement); //body元素中插入canvas对象

    // this.canvasRender();
    // this.mesh.rotateY(-0.8)
    // this.mesh.rotateX(0.1)
    this.renderer.render(this.scene, this.camera);//执行渲染操作


    // let objLoader = new THREE.OBJLoader();
    // objLoader.load('../../../assets/threejs.obj', (obj) => {
    //   console.log('objjjj', obj)
    // })
    // console.log('pasdas', objLoader)
  } 
}
</script>

<style scoped lang="scss">
  .threejs-container {
  }
</style>
