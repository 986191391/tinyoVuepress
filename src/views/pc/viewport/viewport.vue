<template>
  <div className="viewport-container">
    <CoolNav />
    <main>
      <Tree
        ref={this.treeRef}
        className="tree"
        treeData={this.treeData}
        blockNode
        selectedKeys={selectedKeys}
        // defaultExpandedKeys={expandKeys}
        autoExpandParent
        defaultExpandAll
        onSelect={(e) => this.onTreeSelect(e)}
        // onExpand={(e) => this.onTreeExpand(e)}
      />
      <div
        className="board-wrapper"
        onMouseDown={(e) => this.onViewportMouseDown(e)}
        onMouseMove={(e) => _.throttle(this.onViewportMouseMove.call(this, e), 100)}
        onMouseUp={(e) => this.onViewportMouseUp(e)}
      >
        <div className="action-wrapper">
          <MinusCircleOutlined className="reduce-btn" title="缩小" onClick={() => this.onReduceScale()} />
          <div className="scale-value">{(scaleValue * 100).toFixed(0)}%</div>
          <PlusCircleOutlined className="add-btn" title="放大" onClick={() => this.onAddScale()} />
          <BorderOuterOutlined className="default-position-btn" title="恢复默认" onClick={() => this.onSetVpAttrDefault()} />
        </div>
        <div className="viewport-wrapper">
          <div
            className="viewport"
            ref={this.highlightWrapperRef}
            id={this.vData.__id}
            data-nodeid={this.vData.__id}
            style={{ 
              position: 'relative', 
              width: `${this.vData.frame.width}px`, 
              height: `${this.vData.frame.height}px`, 
              outline: '1px solid #ccc',
              backgroundColor: '#fff',
              zIndex: this.vData.zIndex,
              boxShadow: '0 0 8px 0 rgb(0 0 0 / 50%)',
              cursor: 'pointer',
              transform: `matrix(1, 0, 0, 1, ${translateX}, ${translateY}) scale(${scaleValue})`,
              transition: 'none 0s ease 0s',
            }}
            onFocus={() => {}}
            onBlur={() => {}}
            onMouseOver={(e) => this.onMouseOver(e)}
            onMouseLeave={(e) => this.onMouseLeave(e)}
            onMouseOut={(e) => this.onMouseOut(e)}
            onClick={(e) => this.onNodeClick(e)}
          >
            <div className="hover-highlightline-wrapper">
              {
                hoverHighLightLines.map(itm => (
                  <div key={itm.id} style={itm.style}><div style={itm.labelStyle}>{itm.labelInnerHtml}</div></div>
                ))
              }
            </div>
            <div className="focus-highlightline-wrapper" ref={this.focushighlightlineRef}>
              {
                focusHighLightLines.map(itm => (
                  <div key={itm.id} style={itm.style}><div style={itm.labelStyle}>{itm.labelInnerHtml}</div></div>
                ))
              }
            </div>
            {
              this.buildChildren(this.vData.children)
            }
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CoolNav from '@/components/coolNav.vue'
import YuanFooter from '@/components/YuanFooter.vue'

export default {
  components: { CoolNav, YuanFooter },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
  .home-main {
    padding: 20px;

    .slogan-wrapper {
      padding: 64px 0;
      display: flex;

      .slogan-left {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 72px;
        font-weight: bold;

        .learn {
          color: #ff7900;
        }

        .desc {
          margin: 44px 0 10px 0;
          font-size: 22px;
          font-weight: normal;
        }

        .more {
          padding: 5px 10px;
          font-size: 22px;
          border-radius: 4px;
          font-weight: normal;
          cursor: pointer;

          &:hover {
            background: #f2f2f2;
          }
        }
      }

      .slogan-right {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .demo-wrapper {
      width: 100%;
      padding: 0 20px;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .demo-title {
        font-size: 48px;
        font-weight: 600;
      }

      .demo-desc {
        font-size: 20px;
        margin-bottom: 20px;
        font-weight: 350;
      }

      .show-wrapper {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
    
        .show-aside {
          width: 180px;
        }
    
        .show-main {
          width: calc(100% - 180px);
          height: 100vh;
          overflow: scroll;
        }
      }
    }

    .desc-wrapper {
      width: 100%;
      padding: 0 20px;
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .desc-title {
        font-size: 42px;
        font-weight: 600;
      }

      .desc-desc {
        font-size: 20px;
        margin-bottom: 20px;
        font-weight: 350;
      }

      .desc-main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
</style>
