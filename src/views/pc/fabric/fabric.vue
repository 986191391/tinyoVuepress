<template>
  <div class="fabric-page">
    <CoolNav />
    <main>
      <div class="canvas-container">
        <canvas id="canvas" />
      </div>
      <aside>
        <h2>画板设置</h2>
        <div class="action-container">
          <div class="action-items">
            <span class="action-items-label">背景颜色:</span>
            <div class="action-items-value">
              <el-color-picker v-model="backgroundColor" size="mini" @change="onBackgroundColorChange" />
              <span class="background-color">{{backgroundColor}}</span>
            </div>
          </div>
          <div class="action-items">
            <span class="action-items-label">画布尺寸(像素):</span>
            <div class="action-items-value action-items-width-height">
              <span class="width-height-label">宽:</span><el-input v-model="canvasWidth" @change="(e) => onWidthHeightChange(e, 'width')" placeholder="宽度" />
              <span class="width-height-label">高:</span><el-input v-model="canvasHeight" @change="(e) => onWidthHeightChange(e, 'height')" placeholder="高度" />
            </div>
          </div>
          <div class="action-items">
            <span class="action-items-label">插入文字:</span>
            <div class="action-items-value action-items-input-text">
              <el-input v-model="inputText" placeholder="文字描述" />
              <el-button type="primary" size="mini" @click="onTextConfirm">确定</el-button>
            </div>
          </div>
          <!-- <div class="action-items">
            <span class="action-items-label">插入图片:</span>
            <div class="action-items-value action-items-insert-image">
              <el-button type="ghost" size="mini" @click="onInsertImage">点击插入图片</el-button>
            </div>
          </div> -->
          <div class="action-items">
            <span class="action-items-label">上传图片:</span>
            <div class="action-items-value action-items-upload-image">
              <el-upload
                action=""
                list-type="picture-card"
                :file-list="defaultFileList"
                :on-change="onImageUpload"
                :on-remove="onImageRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
            </div>
          </div>
          <div class="action-items">
            <span class="action-items-label">生成图片:</span>
            <div class="action-items-value action-items-insert-image">
              <el-button type="ghost" size="mini" @click="() => canvasToImage('png')">导出PNG</el-button>
              <el-button type="ghost" size="mini" @click="() => canvasToImage('jpg')">导出JPG</el-button>
            </div>
          </div>
          <div class="action-items">
            <span class="action-items-label">清空画布:</span>
            <div class="action-items-value action-items-insert-image">
              <el-button type="ghost" size="mini" @click="clearCanvas">点击清空画布</el-button>
            </div>
          </div>
        </div>
      </aside>
    </main>
    <!-- <canvas width='800' height='800' /> -->
  </div>
</template>

<script>
import CoolNav from '@/components/coolNav.vue'
import { fabric } from 'fabric'
import monkey from '@/assets/fabric/monkey.png'
import cap from '@/assets/fabric/cap.png'

export default {
  components: { CoolNav },
  data () {
    return {
      onresizeTips: _.debounce(() => {
        this.msgInfo('浏览器尺寸改变，请刷新页面！')
      }, 500),
      canvasContainer: null,
      backgroundColor: '#f2f2f2',
      canvasWidth: window.innerWidth - 350,
      canvasHeight: window.innerHeight - 80,
      inputText: '',
      defaultFileList: [{ name: 'monkey.jpg', url: monkey, uid: 'img1' }, { name: 'cap.jpg', url: cap, uid: 'img2' }]
    }
  },
  mounted () {
    window.onresize = () => this.onresizeTips()
    this.canvasContainer = new fabric.Canvas('canvas', {
      width: window.innerWidth - 350,
      height: window.innerHeight - 80,
      // fireRightClick: true, // 启用右键，button的数字为3
      stopContextMenu: true, // 禁止默认右键菜单
      fill: 'red', // 填充的颜色
      backgroundColor: '#f2f2f2'
    })
    // const rect = new fabric.Rect({
    //   left: 300, // 距离画布左侧的距离，单位是像素
    //   top: 300, // 距离画布上边的距离
    //   width: 30, // 方形的宽度
    //   height: 30 // 方形的高度
    // })

    Promise.all([this.buildImageCanvas(monkey, { left: 350, top: 150 }, 'img1'), this.buildImageCanvas(cap, { left: 450, top: 200 }, 'img2')])
      .then((result) => {
        this.canvasContainer.add(...result)
      })
      .catch((error) => {
      })

    // 按下鼠标
    this.canvasContainer.on('mouse:down', (e) => {
      console.log('111', this.canvasContainer)
    })

    const canvasDom = document.getElementById('canvas')
    canvasDom.toDataURL = () => alert('检测到使用非正常手段下载图片，图片备份已删除，已记录ip地址！')
    // 以下代码为百度 canvas导出图片的方法之一，出于安全性，将关键方法删除(设置为null),中端用户非正常手段下载图片
    // https://blog.csdn.net/workhard0905/article/details/123133152
    // const imageData = canvasDom.toDataURL('image/png') //返回base64的URL
    // const elink = document.createElement('a')
    // elink.download = '图片'
    // elink.style.display = 'none'
    // elink.href = imageData
    // document.body.appendChild(elink)
    // elink.click()

    canvasDom.toBlob = () => alert('检测到使用非正常手段下载图片，图片备份已删除，已记录ip地址！')
    // 以下代码为百度 canvas导出图片的方法之一，出于安全性，将关键方法删除(设置为null),中端用户非正常手段下载图片
    // https://blog.csdn.net/weixin_43826681/article/details/120591158
    // canvasDom.toBlob((blob) => {
    //   const timestamp = Date.now().toString()
    //   const a = document.createElement('a')
    //   document.body.append(a)
    //   a.download = `${timestamp}.png`
    //   a.href = URL.createObjectURL(blob)
    //   a.click()
    //   a.remove()
    // })

    // const imgElement = document.getElementById('img') // 声明我们的图片
    // const imgInstance = new fabric.Image(imgElement, { // 设置图片位置和样子
    //   left: 0,
    //   top: 0,
    //   width: 1000,
    //   height: 1000
    // })
    // canvas.add(rect, imgInstance)

    // // const img = document.getElementById('img')
    // const imgInstance = new fabric.Image(imgElement, { // 设置图片位置和样子
    //   left: 210,
    //   top: 10,
    //   width: 200,
    //   height: 100,
    //   angle: 30 // 设置图形顺时针旋转角度
    // })

    // const group = new fabric.Group([imgInstance, rect], {
    //   left: 150,
    //   top: 100
    //   // angle: 10
    // })
    // canvas.add(imgInstance)
    // canvas.add(rect, imgInstance) // 加入到canvas中
  },
  methods: {
    canvasOnMouseDown (e) {
    },
    // 初始化插入猴子默认照片
    buildImageCanvas (imgSrc, positionInfo, dataKey) {
      return new Promise((resolve) => {
        const imgElement = document.createElement('img') // 声明我们的图片
        imgElement.src = imgSrc

        imgElement.onload = () => {
          this[dataKey] = new fabric.Image(imgElement, { // 设置图片位置和样子
            ...positionInfo,
            evented: true,
            selectable: true
          })
          resolve(this[dataKey])
        }
      })
    },
    onBackgroundColorChange (newColor) {
      this.canvasContainer.backgroundColor = newColor
      this.canvasContainer.renderAll()
    },
    onWidthHeightChange (value, key) {
      if (key === 'width') this.canvasContainer.setWidth(value)
      if (key === 'height') this.canvasContainer.setHeight(value)
    },
    onTextConfirm () {
      const text = new fabric.IText(this.inputText, { 
        fontSize: 26,
        evented: true,
        selectable: true
      })
      this.canvasContainer.add(text)
      this.inputText = ''
    },
    // onInsertImage () {
    //   const uploadInput = document.createElement('input')
    //   uploadInput.setAttribute('type', 'file')
    //   uploadInput.setAttribute('accept', 'image/*')
    //   uploadInput.setAttribute('name', 'fujian')
    //   uploadInput.click()
    //   uploadInput.onchange = () => {
    //     const file = uploadInput.files[0]
    //     const reader = new FileReader()
    //     reader.readAsDataURL(file)
    //     reader.onload = e => this.addImgToCanvas(e)
    //     uploadInput.remove()
    //   }
    // },
    onImageUpload (file, fileList) {
      if (file.status !== 'success') return
      
      const imgElement = document.createElement('img') // 声明我们的图片
      imgElement.src = file.url
      
      imgElement.onload = () => {
        this[file.uid] = new fabric.Image(imgElement, { // 设置图片位置和样子
          evented: true,
          selectable: true
        })
        this.canvasContainer.add(this[file.uid])
      }
    },
    onImageRemove (file) {
      this.canvasContainer.fxRemove(this[file.uid], {
        onChange() {
          console.log('在动画的每一步调用')
        },
        onComplete() {
          console.log('删除成功后调用')
        }
      })
    },
    canvasToImage (format) {
      const dataURL = this.canvasContainer.toDataURL({
        width: this.canvasWidth,
        height: this.canvasHeight,
        format: format,
      });
      const link = document.createElement('a');
      link.download = `画板.${format}`;
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    clearCanvas () {
      this.canvasContainer.clear()
      this.backgroundColor = '#fff'
    },
  }
}
</script>

<style scoped lang="scss">
  .fabric-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    // background-color: #f2f2f2;
    
    & > main {
      height: calc(100vh - 80px);
      display: flex;

      .canvas-container {
        width: calc(100% - 350px);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      & > aside {
        width: 350px;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: #eee;
        border-left: 1px solid #000;
        text-align: left;

        h2 {
          margin: 0;
          padding: 10px 20px;
          border-bottom: 1px solid #000;
        }

        .action-container {
          padding: 10px 0;
          .action-items {
            padding: 0 10px;
            width: 100%;
            min-height: 40px;
            display: flex;
            align-items: center;

            .action-items-label {
              width: 100px;
              text-align: right;
              font-size: 14px;
            }

            .action-items-value {
              padding-left: 10px;
              display: flex;
              align-items: center;

              .background-color {
                margin-left: 10px;
                font-size: 13px;
              }

              &.action-items-width-height {
                .el-input {
                  width: 50px;
                  height: 30px;
                  ::v-deep .el-input__inner {
                    padding: 0;
                    height: 30px;
                    text-align: center;
                  }
                }
                .width-height-label {
                  margin: 0 5px;
                }
              }

              &.action-items-input-text {
                .el-input {
                  width: 150px;
                  height: 30px;
                  ::v-deep .el-input__inner {
                    padding: 0;
                    height: 30px;
                    text-align: center;
                  }
                }
                
                .el-button {
                  margin-left: 10px;
                }
              }

              &.action-items-insert-image {

              }

              &.action-items-upload-image {
                & > div {
                  display: flex;
                  flex-wrap: wrap;
                  width: 250px;
                }
                ::v-deep .el-upload-list {
                  .el-upload-list__item {
                    width: 50px;
                    height: 50px;
                  }
                }
                ::v-deep .el-upload--picture-card {
                  width: 50px;
                  height: 50px;
                  line-height: auto;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
            }

          }
        }

      }
    }
  }

</style>
