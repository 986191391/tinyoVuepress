<template>
  <div>
    <ActionBar
      ref="actionBarRef"
      :scaleValue="scaleValue"
      :bestView="bestView"
      :onReduceScale="onReduceScale"
      :onAddScale="onAddScale"
      :onSetVpAttrDefault="onSetVpAttrDefault"
      :onSwitchEditStatus="(able) => onSwitchEditStatus(able)"
      :onSwitchBestView="onSwitchBestView"
      :printResume="onPrintResume"
    />
    <div
      ref="containerRef"
      class="author-container"
      :style="{
        transform: `scale(${scaleValue})`,
        width: `${bestView ? '790px' : '100%'}`,
        margin: `${bestView ? '0 auto' : '0'}`,
      }"
    >
      <!-- // @click={(e) => this.onResumeClick(e)} -->
      <header>
        <!-- <SearchOutlined /> -->
        <i class="el-icon-search" />
        <span class="header-label">求职意向</span>
        <span class="header-value">Web前端工程师</span>
      </header>
      <section class="base-info">
        <div @click="onIconClick">
          <img
            :class="`author-img ${editStatus ? 'author-img-hover' : ''}`"
            :src="imgUrl"
            alt=""
            title="点击上传图片"
          />
        </div>
        <div class="author-info">
          <p class="author-name">杨泽锋</p>
          <p class="work-times">男 | 97年 | 三年半工作经验</p>
          <template v-for="(itm, idx) in info.authorBaseInfo">
            <div :key="`author-base-info-item${idx}`" class="info-item">{{itm.label}}: {{itm.value}}</div>
          </template>
        </div>
      </section>
      <template v-for="(itm, idx) in info.resumeInfo" >
        <!-- 分割线 -->
        <Divider :key="`divider${idx}`"/>
        <ResumeCard :key="`resumecard${idx}`" :title="itm.title">
          <!-- type = normal 正常显示 -->
          <div v-if="itm.main.type === 'normal'">{{itm.main.content}}</div>
          <!-- type = list 列表显示 -->
          <div v-else-if="itm.main.type === 'list'">
            <div
              v-for="(listItm, listIdx) in (itm.main.content || [])"
              :key="`card-itm-${listIdx}`"
              :style="{ lineHeight: '24px' }"
            >
              <template v-if="itm.main.id === 'assessment'">
                <span :style="{ color: '#64bef1', marginRight: '0.5rem' }">{{listItm.split(':')[0]}}:</span>
                <span>{{listItm.split(':')[1]}}</span>
              </template>
              <template v-else>{{listItm}}</template>
            </div>
          </div>
          <!-- type = nestlist 嵌套列表显示 -->
          <div v-else-if="itm.main.type === 'nestList'">
            <div
              v-for="(nestListItm, nestListIdx) in (itm.main.content || [])"
              :key="`nest-card-itm-${nestListIdx}`"
              :style="{ marginBottom: '0.5rem' }"
            >
              <div v-if="itm.main.id === 'job'" :style="{ marginBottom: '0.5rem' }">
                <span :style="{ marginRight: '0.5rem', fontSize: '0.9rem', color: '#aaa' }">{{nestListItm.time}}</span>
                <span :style="{ fontWeight: 'bold' }">{{nestListItm.company}}</span>
              </div>
              <div v-else-if="itm.main.id === 'project'" :style="{ marginBottom: '0.5rem' }">
                <span :style="{ color: '#13a3f6', fontSize: '1.1rem', marginRight: '1.5rem' }">{{nestListItm.label}}</span>
                <span :style="{ color: '#aaa', fontSize: '1rem' }">{{nestListItm.time}}</span>
              </div>
              <template v-else />
              <div
                v-for="(innerItm, innerIdx) in (nestListItm.list || [])"
                :key="`inner-itm-${innerIdx}`"
                :style="{ lineHeight: '25px' }"
              >
                <template v-if="itm.main.id === 'job'">
                  {{innerItm}}
                </template>
                <template v-else-if="itm.main.id === 'project'">
                  <span :style="{ color: '#64bef1', marginRight: '0.5rem' }">{{getListItemLabelValue(innerItm, 'label')}}:</span>
                  <span>{{getListItemLabelValue(innerItm, 'value')}}</span>
                </template>
              </div>
            </div>
          </div>
          <div v-else />
        </ResumeCard>
      </template>
    </div>
  </div> 
</template>

<script>
import ActionBar from './component/actionBar.vue'
import ResumeCard from './component/resumeCard.vue'
import imgUrl from '@/assets/author/author.jpeg'
import Divider from './component/divider.vue'
import info from './info'

export default {
  components: { ActionBar, Divider, ResumeCard },
  data () {
    return {
      info,
      imgUrl,
      editStatus: false,
      scaleValue: 1,
      bestView: true
    }
  },
  mounted () {
    console.log('refs', this.$refs)
    window.onbeforeprint = () => {
      this.$refs.actionBarRef.$refs.actionBar.style.display = 'none'
      // this.actionBarRef.current.style.display = 'none'
    }

    window.onafterprint = () => {
      this.$refs.actionBarRef.$refs.actionBar.style.display = 'flex'
      // this.actionBarRef.current.style.display = 'flex'
    }
  },
  methods: {
    onReduceScale () {
      if (this.scaleValue <= 0.1) return
      this.scaleValue = this.scaleValue - 0.1
    },
    onAddScale () {
      if (this.scaleValue >= 1.5) return
      this.scaleValue = this.scaleValue + 0.1
    },
    onSetVpAttrDefault () {
      this.scaleValue = 1
    },
    onSwitchEditStatus (able) {
      console.log('able', able)
      this.editStatus = able
      document.designMode = able ? 'on' : 'off'
      // this.containerRef.current.contentEditable = able ? 'true' : 'false'
    },
    onSwitchBestView () {
      this.bestView = !this.bestView
    },
    onPrintResume () {
      window.print()
    },
    onIconClick () {
      if (!this.editStatus) return
      const uploadInput = document.createElement('input')
      uploadInput.setAttribute('type', 'file')
      uploadInput.setAttribute('accept', 'image/*')
      uploadInput.setAttribute('name', 'fujian')
      uploadInput.click()
      uploadInput.onchange = () => {
        const file = uploadInput.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = e => this.imgUrl = e.target.result
        uploadInput.remove()
      }
    },
    getListItemLabelValue (str, key) {
      const splitIndex = str.indexOf(':')
      if (splitIndex === -1) return
      if (key === 'label') return str.slice(0, splitIndex)
      return str.slice(splitIndex + 1)
    }
  }
}
</script>

<style scoped lang="scss">
  .action-bar-container {
    position: sticky;
    top: 0;
    left: 0;
    margin-bottom: 0.5rem;
    width: 100%;
    height: 50px;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'PingFang SC';
    border-bottom: 1px solid #eee;
    background-color: #fff;
    z-index: 1;
    user-select: none;

    .edit-action {
      font-size: 13px;
      .ant-select .anticon {
        width: auto;
        height: auto;
      }
    }

    .bar-right {
      display: flex;
      align-items: center;

      .scale-value {
        font-size: 0.8rem;
        color: #666;
      }
    }

    .anticon {
      height: 50px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      color: #a1a1a1;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        background-color: #eee;
      }
    }
  }

  .author-container {
    padding: 2rem 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    font-family: 'PingFang SC';
    font-size: 14px;

    & > header {
      width: 90%;
      padding: 0.5rem;
      text-align: center;
      border-top: 1px solid #71a9f3;
      border-bottom: 1px solid #71a9f3;
      border-right: 1px solid #71a9f3;
      border-left: 1px solid #71a9f3;

      .header-label {
        padding: 0 0.5rem;
        color: #a1a1a1;
      }

      .header-value {
        color: #46a6ff;
      }
    }

    .base-info {
      width: 100%;
      margin: 0.5rem 0;
      padding: 0.5rem 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-align: left;

      .author-img {
        width: 110px;
        height: 140px;
        margin-left: 1rem;
        margin-right: 2rem;
        border: 1px solid transparent;
      }

      .author-img-hover {
        cursor: pointer;

        &:hover {
          border: 1px solid #46a6ff;
        }
      }

      .author-info {
        .author-name {
          font-size: 1.8rem;
          margin: 0;
          color: #46a6ff;
        }
    
        .work-times {
          margin: 0;
          font-weight: bold;
        }

        .info-item {
          // padding: 0.15rem 0;
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
</style>
