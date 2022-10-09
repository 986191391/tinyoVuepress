<template>
  <div class="sign-wrapper">
    <div class="sign-hint">此页面为拖动签章到图片进行盖章的功能</div>
    <div 
      class="sign-content"
      @mousemove="(e) => onCustomSignMouseMove(e)"
      @mouseup="(e) => onCustomSignMoveUp(e)"
    >
      <div class="file-wrapper">
        <img class="file" src="@/assets/bg.jpg" @dragstart.prevent />
        <template v-for="(listItem, index) in stampList">
          <div 
            :key="`stamp-${index}`"
            class="custom-sign" 
            :style="{ top: `${listItem.top}px`, left: `${listItem.left}px` }" 
            @mousedown="(e) => onCustomSignMouseDown(e, index)"
          >
            <img :src="listItem.imgUrl" />
          </div>
        </template>
      </div>
      <div class="stamp-wrapper">
        <div>
          <el-select v-model="stamp" placeholder="请选择印章" @change="(value) => stampSelectChange(value)">
            <el-option label="蜡笔小新印章" value="0" />
            <el-option label="二维码印章" value="1" />
          </el-select>
        </div>
        <div class="stamp-img"> 
          <img :src="stamp === '0' ? require('@/assets/stamp2.jpg') : require('@/assets/stamp1.jpg')" /> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stampFirst from '@/assets/stamp1.jpg'
import stampSecond from '@/assets/stamp2.jpg'
export default {
  name: 'sign',
  data () {
    return {
      stamp: '0',
      stampIndex: 0,
      stampList: [],
      isDrag: false,
      currentSelfX: 0,
      currentSelfY: 0
    }
  },
  mounted () {
    if (!this.stampList.length) {
      const newStampList = this.stampList
      newStampList.push({
        custom: true,
        top: 62,
        left: 548,
        imgUrl: stampSecond
      })
      this.stampList = newStampList
      console.log('this.stampList', newStampList)
    }
  },
  methods: {
    stampSelectChange (value) {
      console.log('value', value)

      const imgUrl = value === '0' ? stampSecond : stampFirst
      const newStampList = this.stampList.map((item) => {
        if (!item.custom) return item
        item.imgUrl = imgUrl
        return item
      })
      this.stamp = value
      this.stampList = newStampList
    },
    onCustomSignMouseDown (e, index) {
      console.log('down', e, index)
      e.preventDefault()
      
      // 获取并记录 基于拖拽图片左上角 的 X Y值
      let currentSelfX = e.clientX - this.stampList[index].left - 210
      let currentSelfY = e.clientY - this.stampList[index].top - 129
      console.log('currentSelfX', currentSelfX)
      console.log('currentSelfY', currentSelfY)
      this.isDrag = true
      this.stampIndex = index
      this.currentSelfX = currentSelfX
      this.currentSelfY = currentSelfY
    },
    onCustomSignMouseMove (e) {
      if (!this.isDrag) return
      console.log('move')
      const newStampList = this.stampList
      let newLeft = e.clientX - 210 - this.currentSelfX
      let newTop = e.clientY - 129 - this.currentSelfY
      if(newLeft < 0) newLeft = 0
      if(newLeft > 377.5) newLeft = 377.5
      if(newTop < 0) newTop = 0
      if(newTop > 550) newTop = 550
      
      newStampList[this.stampIndex].left = newLeft
      newStampList[this.stampIndex].top = newTop
      this.stampList = newStampList
    },
    onCustomSignMoveUp (e) {
      console.log('up')
      if (!this.isDrag) return
      this.isDrag = false
      console.log('onCustomSignMoveUp', e)

      let newLeft = e.clientX - 210 - this.currentSelfX
      let newTop = e.clientY - 129 - this.currentSelfY

      // 鼠标松开，如果是在区域内，则新增一个自定义的签章
      if(newLeft > 0 && newLeft <= 377.5 && newTop > 0 && newTop <= 550) {
        const newStampList = this.stampList
        newStampList[this.stampIndex].custom = false
        newStampList.push({
          custom: true,
          top: 62,
          left: 548,
          imgUrl: this.stamp === '0' ? stampSecond : stampFirst
        })
        this.stampList = newStampList
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .sign-wrapper {
    padding: 30px;
    font-size: 30px;

    .sign-hint {
      margin-bottom: 50px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .sign-content {
      display: flex;
      align-items: center;
      height: 690px;

      .file-wrapper {
        width: 517.5px;
        height: 690px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #ddd;
        position: relative;

        .file {
          width: 517.5px;
          height: 690px;
        }

        .custom-sign {
          width: 140px;
          height: 140px;
          position: absolute;

          img {
            width: 140px;
            height: 140px;
            cursor: pointer;
          }
        }
      }

      .stamp-wrapper {
        width: 200px;
        height: 690px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .stamp-img {
          margin-top: 10px;

          & > img {
            width: 140px;
            height: 140px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
