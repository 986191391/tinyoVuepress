<template>
  <div class="viewport-container">
    <CoolNav />
    <main>
      <el-tree
        :data="treeData"
        node-key="id"
        default-expand-all
      >
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <div><span class="tree-node-type">{{ data.type }}</span><span class="tree-node-id">{{ data.id }}</span></div>
          <!-- <span>
            <el-button
              type="text"
              size="mini"
            >
              Append
            </el-button>
          </span> -->
        </div>
      </el-tree>
      <!-- <Tree
        ref={this.treeRef}
        class="tree"
        treeData={this.treeData}
        blockNode
        selectedKeys={selectedKeys}
        // defaultExpandedKeys={expandKeys}
        autoExpandParent
        defaultExpandAll
        onSelect={(e) => this.onTreeSelect(e)}
        // onExpand={(e) => this.onTreeExpand(e)}
      /> -->
      <div
        class="board-wrapper"
        @mousedown="(e) => onViewportMouseDown(e)"
        @mousemove="(e) => onViewportMouseMove(e)"
        @mouseup="(e) => onViewportMouseUp(e)"
      >
        <div class="action-wrapper">
          <i class="el-icon-remove-outline" title="缩小" @click="onReduceScale" />
          <!-- <MinusCircleOutlined class="reduce-btn" title="缩小" @click={() => this.onReduceScale()} /> -->
          <div class="scale-value">{{(scaleValue * 100).toFixed(0)}}%</div>
          
          <i class="el-icon-circle-plus-outline" title="放大" @click="onAddScale" />
          <!-- <PlusCircleOutlined class="add-btn" title="放大" @click={() => this.onAddScale()} /> -->
          <i class="el-icon-crop" title="恢复默认" @click="onSetVpAttrDefault" />
          <!-- <BorderOuterOutlined class="default-position-btn" title="恢复默认" @click={() => this.onSetVpAttrDefault()} /> -->
        </div>
        <div class="viewport-wrapper">
          <div
            class="viewport"
            ref="highlightWrapperRef"
            :id="vData.__id"
            :data-nodeid="vData.__id"
            :style="{ 
                position: 'relative', 
                width: `${vData.frame.width}px`, 
                height: `${vData.frame.height}px`, 
                outline: '1px solid #ccc',
                backgroundColor: '#fff',
                zIndex: vData.zIndex,
                boxShadow: '0 0 8px 0 rgb(0 0 0 / 50%)',
                cursor: 'pointer',
                transform: `matrix(1, 0, 0, 1, ${translateX}, ${translateY}) scale(${scaleValue})`,
                transition: 'none 0s ease 0s',
            }"
            @focus="() => {}"
            @blur="() => {}"
            @mouseover="(e) => onMouseOver(e)"
            @mouseleave="(e) => onMouseLeave(e)"
            @mouseout="(e) => onMouseOut(e)"
            @click="(e) => onNodeClick(e)"
          >
            <div class="hover-highlightline-wrapper">
              <template v-for="itm in hoverHighLightLines">
                <div :key="`hover-${itm.id}`" :style="itm.style">
                  <div :style="itm.labelStyle">{{itm.labelInnerHtml}}</div>
                </div>
              </template>
            </div>
            <div class="focus-highlightline-wrapper" ref={this.focushighlightlineRef}>
              <template v-for="itm in focusHighLightLines">
                <div :key="`active-${itm.id}`" :style="itm.style">
                  <div :style="itm.labelStyle">{{itm.labelInnerHtml}}</div>
                </div>
              </template>
            </div>
            <template v-for="(childData) in vData.children">
              <BuildChildren :childData="childData" :key="`child-data-${childData.__id}`" />
            </template>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CoolNav from '@/components/coolNav.vue'
import BuildChildren from './buildChildren.vue'
import vData from './viewportJSON/ReGroup.json'

export default {
  components: { CoolNav, BuildChildren },
  data () {
    return {
      vData,
      treeData: [],
      hoverHighLightLines: [],
      focusHighLightLines: [],
      selectedKeys: [],
      mouseDown: false,
      mousePositionX: 0,
      mousePositionY: 0,
      translateX: 0,
      translateY: 50,
      defaultPositionX: 0,
      defaultPositionY: 50,
      scaleValue: 1
    }
  },
  mounted () {
    this.treeData = [{
      id: this.vData.__id,
      type: this.vData.type,
      label: this.vData.type,
      key: this.vData.__id,
      children: this.buildTreeData(this.vData.children),
    }];
  },
  methods: {
    onMouseOver(e) {
      this.hoverHighLightLines = this.getLines(e, 99)
    },
    onMouseLeave(e) {
      this.hoverHighLightLines = []
    },
    onMouseOut() {
    },
    onNodeClick(e) {
      const noidId = e.target.dataset.nodeid
      const lines = e.shiftKey ? [...this.focusHighLightLines, ...this.getLines(e, 97)] : this.getLines(e, 97)
      this.focusHighLightLines = lines
      this.selectedKeys = [noidId]
    },
    onViewportMouseDown (e) {
      console.log('onViewportMouseDown', e)
      this.mouseDown = true
      this.mousePositionX = e.clientX
      this.mousePositionY = e.clientY
      this.defaultPositionX = this.translateX
      this.defaultPositionY = this.translateY
    },
    onViewportMouseMove (e) {
      if (!this.mouseDown) return;
      const newTranslateX = this.defaultPositionX + e.clientX - this.mousePositionX
      const newTranslateY = this.defaultPositionY + e.clientY - this.mousePositionY
      this.translateX = newTranslateX
      this.translateY = newTranslateY
    },
    onViewportMouseUp (e) {
      console.log('onViewportMouseUp', e)
      this.mouseDown = false
    },
    onAddScale() {
      this.scaleValue = this.scaleValue <= 2.9 ? this.scaleValue + 0.1 : 3
    },
    onReduceScale() {
      this.scaleValue = this.scaleValue >= 0.2 ? this.scaleValue - 0.1 : 0.1
    },
    onSetVpAttrDefault() {
      this.scaleValue = 1
      this.translateX = 0
      this.translateY = 50
    },
    buildTreeData(children) {
      return (
        children.map((child) => {
          if (child.type === 'Text' || child.type === 'Image') {
            return {
              id: child.__id,
              type: child.type,
              label: child.type,
              key: child.__id,
            };
          }
          const retObj = {
            id: child.__id,
            type: child.type,
            label: child.type,
            key: child.__id,
          };
          if (child.children) retObj.children = this.buildTreeData(child.children);
          return retObj;
        })
      );
    },
    getLines(e, zIndex) {
      e.stopPropagation();
      const highlightWrapperTop = this.$refs['highlightWrapperRef'].getBoundingClientRect().top;
      const highlightWrapperLeft = this.$refs['highlightWrapperRef'].getBoundingClientRect().left;
      const eTop = e.target.getBoundingClientRect().top;
      const eLeft = e.target.getBoundingClientRect().left;
      const isBorder = e.target.style.border;
      const width = e.target.clientWidth + (isBorder ? Number(isBorder.slice(0, 1)) * 2 : 0);
      const height = e.target.clientHeight + (isBorder ? Number(isBorder.slice(0, 1)) * 2 : 0);

      return [{
        id: e.target.dataset.nodeid,
        style: {
          width: `${width}px`,
          height: `${height}px`,
          position: 'absolute',
          left: `${eLeft - highlightWrapperLeft}px`,
          top: `${eTop - highlightWrapperTop}px`,
          border: '1px solid red',
          zIndex,
          pointerEvents: 'none',
        },
        labelStyle: {
          position: 'absolute',
          height: '25px',
          top: '-25px',
          left: '-1px',
          padding: '5px',
          background: 'red',
          color: '#fff',
          display: 'inline-block',
          whiteSpace: 'noWrap',
          fontSize: '10px',
          zIndex: zIndex + 1,
        },
        labelInnerHtml: `${width}px * ${height}px`,
      }];
    }
  }
}
</script>

<style scoped lang="scss">
  .viewport-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    user-select: none;

    & > main {
      flex: 1;
      display: flex;
      overflow: hidden;

      .el-tree {
        padding: 10px 0px 10px 10px;
        width: 300px;
        height: calc(100vh - 80px);
        overflow: scroll;
        scrollbar-width: none; // 清除firefox滚动条
        border-right: 1px solid #f2f2f2;

        ::v-deep .el-tree-node {
           .el-tree-node__content {
            height: auto;
          }
        }
        
        .custom-tree-node {
          padding: 6px 0;
          flex: 1;
          display: flex;

          .tree-node-type {
            font-size: 16px;
            color: #46a6ff;
          }
          .tree-node-id {
            margin-left: 7px;
            font-size: 10px;
          }
        }
      }

      .board-wrapper {
        flex: 1;
        background-color: #f2f2f2;

        .action-wrapper {
          width: 100%;
          height: 40px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          background-color: #fff;
          border-bottom: 1px solid #ddd;
          color: #666;
          user-select: none;

          .el-icon-remove-outline, .el-icon-circle-plus-outline, .el-icon-crop {
            height: 100%;
            padding: 10px;
            display: flex;
            align-items: center;
            font-size: 18px;
            cursor: pointer;

            &:hover {
              background-color: #f2f2f2;
            }
          }

          .scale-value {
            padding: 0 5px;
            font-size: 12px;
          }
        }
      }
    } 

    .viewport-wrapper {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      overflow: hidden;
    }

    .ant-tree {
      height: 100%;
      width: 250px;
      border-left: 1px solid #ddd;
      overflow-y: scroll;
      overflow-x: hidden;
      
      .ant-tree-list .ant-tree-list-holder .ant-tree-list-holder-inner {
        .ant-tree-treenode {
          transition: all 0.2s;
          &:hover {
            background-color: #f2f2f2;
          }

          .ant-tree-node-content-wrapper {
            transition: none;

            .class-name {
              color: #ccc;
              font-size: 12px;
              margin-left: 5px;
            }
          }
        }

        // 选中状态 修改下颜色
        .ant-tree-treenode-selected {
          background-color: #026eff;
          color: #fff;

          .ant-tree-node-content-wrapper {
            &.ant-tree-node-selected{
              background-color: transparent;
            }

            .class-name {
              color: #fff;
            }
          }

          &:hover {
            background-color: #026eff;
            color: #fff;

            .ant-tree-node-content-wrapper .class-name {
              color: #fff;
            }
          }

        }
      }

      .ant-tree-node-content-wrapper:hover {
        background-color: transparent;
      }
    }

    .hover-highlightline-wrapper, .focus-highlightline-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
