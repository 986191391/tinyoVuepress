<template>
  <div class="threejs-container">
    <div class="three-canvas"  ref="threeCanvas" @mousemove="onCanvasMouseMove"/>
  </div>
</template>

<script>
import CoolNav from '@/components/coolNav.vue'

export default {
  data () {
    return {
      scene: new THREE.Scene(),
      // geometry: new THREE.BoxGeometry(0, 0, 0),
      // material: new THREE.MeshLambertMaterial({
      //   color: 0xffffff
      // }),
      // mesh: {},
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
      requestAnimationFrame(this.canvasRender);
      this.renderer.render(this.scene, this.camera);//执行渲染操作
      this.mesh.rotateY(0.001);//旋转角速度0.001弧度每毫秒
    },
    onCanvasMouseMove (e) {
      const x = e.x - this.canvasWidthCenter
      const y = this.canvasHeightCenter - e.y
      const z = 300
      this.point.position.set(x, y, z); // 点光源位置
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted () {
    // scene：创建的场景

    /* 光源设置 */
    //点光源
    this.point = new THREE.PointLight(0x999999);
    this.point.position.set(0, 0, 300); //点光源位置
    this.scene.add(this.point); //点光源添加到场景中
    //环境光
    let ambient = new THREE.AmbientLight(0x444444);
    this.scene.add(ambient);

    /* 相机设置 */
    let width = window.innerWidth; //窗口宽度
    let height = window.innerHeight; //窗口高度
    let k = width / height; //窗口宽高比
    let s = 400; //三维场景显示范围控制系数，系数越大，显示的范围越大

    // 创建相机对象
    this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    this.camera.position.set(0, 0, 300); // 设置相机位置
    this.camera.lookAt(this.scene.position); // 设置相机方向(指向的场景对象)
    /* 创建渲染器对象 */
    this.renderer.setSize(width, height);//设 置渲染区域尺寸
    this.renderer.setClearColor(0x000000, 1); // 设置背景颜色
    this.$refs['threeCanvas'].appendChild(this.renderer.domElement); // body元素中插入canvas对象

    let objLoader = new THREE.OBJLoader();
    objLoader.load('https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/scorerule/xdd.obj', (obj) => {
      obj.position.x = -150
      obj.position.y = -280
      obj.position.z = -300
      obj.rotateX(-70.6)
      obj.scale.set(3.7, 3.7, 3.7)
      this.scene.add(obj)
      setTimeout(this.renderer.render(this.scene, this.camera), 400)
    }), () => {}, (err) => {
      console.log('errr', err)
    }
  } 
}
</script>

<style scoped lang="scss">
  .threejs-container {
  }
</style>
