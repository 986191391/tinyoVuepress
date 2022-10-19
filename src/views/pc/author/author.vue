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
    <!-- <div
      ref={this.containerRef}
      className="author-container"
      style={{
        transform: `scale(${scaleValue})`,
        width: `${bestView ? '790px' : '100%'}`,
        margin: `${bestView ? '0 auto' : '0'}`,
      }}
      // onClick={(e) => this.onResumeClick(e)}
    >
      <header>
        <SearchOutlined />
        <span className="header-label">求职意向</span>
        <span className="header-value">Web前端工程师</span>
      </header>
      <session className="base-info">
        <div onClick={() => this.onIconClick()}>
          <img
            className={`author-img ${editStatus ? 'author-img-hover' : ''}`}
            src={imgUrl}
            alt=""
            title="点击上传图片"
          />
        </div>
        <div className="author-info">
          <p className="author-name">杨泽锋</p>
          <p className="work-times">男 | 97年 | 三年工作经验</p>
          { baseInfoList.map(itm => (<div className="info-item">{itm.label} - {itm.value}</div>)) }
        </div>
      </session>
      {
        this.infoMap.map((itm, index) => (
          <Fragment>
            <Divider />
            <Card key={`infoTitle${index}`} title={itm.title}>
              { this.getInfoItmContent(itm.main) }
            </Card>
          </Fragment>
        ))
      }
    </div> -->
  </div> 
</template>

<script>
import ActionBar from './component/actionBar.vue'

export default {
  components: { ActionBar },
  data () {
    return {
      editStatus: false,
      scaleValue: 1,
      bestView: false
    }
  },
  methods: {
    onReduceScale () {
      if (this.scaleValue <= 0.1) return;
      this.scaleValue = this.scaleValue - 0.1
    },
    onAddScale () {
      if (this.scaleValue >= 1.5) return;
      this.scaleValue = this.scaleValue + 0.1
    },
    onSetVpAttrDefault () {
      this.scaleValue = 1
    },
    onSwitchEditStatus (able) {
      this.editStatus = able
      document.designMode = able ? 'on' : 'off';
      // this.containerRef.current.contentEditable = able ? 'true' : 'false';
    },
    onSwitchBestView () {
      this.bestView = !this.bestView
    },
    onPrintResume () {
      window.print();
    }
  }
}
</script>

<style scoped lang="scss">
</style>
