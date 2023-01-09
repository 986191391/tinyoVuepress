<template>
  <div class="board-container">
    <CoolNav />
    <main class="board-main">
      <h2>项目进度看板</h2>
      <div class="board-list">
        <template v-if="this.boardDataObj">
          <div
            v-for="(objKey) in Object.keys(this.boardDataObj)"
            :key="`boardListItem${objKey}`"
            class="board-list-item"
          >
            <div class="tast-title">{{taskTitleEnum[objKey]}}</div>
            <div
              class="tast-list"
              @dragover="(e) => onTaskCardDragOver(e)"
              @drop="(e) => onTaskCardDrop(e, objKey)"
            >
              <template v-for="(itm) in boardDataObj[objKey]">
                <div
                  :key="itm.id"
                  class="task-card"
                  draggable
                  @dragstart="(e) => onTaskCardDragStart(e, itm)"
                  @dragend="(e) => onTaskCardDragEnd(e)"
                >
                  <img class="task-icon" :src="itm.icon" alt="" />
                  <div class="task-code">{{itm.code}}</div>
                  <div>{{itm.title}}</div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </main>
  </div>
</template>

<script>
import CoolNav from '@/components/coolNav.vue'
import icon from '@/assets/stamp2.jpg';
import icon2 from '@/assets/logo.png';

export default {
  components: { CoolNav },
  data () {
    return {
      boardDataObj: null,
      isDrag: false,
      dragCardDetail: null,
      taskTitleEnum: {
        0: '需求及方案',
        1: '代办',
        2: '处理中',
        3: '完成',
      }
    }
  },
  mounted () {
    this.getBoardListData()
  },
  methods: {
    getBoardListData () {
      const mockData = [{ id: '001', code: 'EDUC-341', title: '源计划页面优化方案设计', icon, status: 0 }, { id: '003', code: 'EDUC-345', title: 'xxx', icon: icon2, status: 1 }, { id: '002', code: 'EDUC-1432', title: '啊hi的我计划', icon, status: 2 }, { id: '007', code: 'EDUC-245', title: '大王山计划', icon: icon2, status: 2 }, { id: '005', code: 'EDUC-934', title: '明天发财计划', icon, status: 3 }]
      const obj = {}
      mockData.forEach((item) => {
        obj[item.status] = obj[item.status] ? [...obj[item.status], item] : [item]
      })
      this.boardDataObj = obj
    },
    onTaskCardDragStart(e, cardDetail) {
      this.isDrag = true
      this.dragCardDetail = cardDetail
    },
    onTaskCardDragOver(e) {
      e.preventDefault();
    },
    onTaskCardDrop(e, listKey) {
      console.log('listKey', listKey);
      // 想要响应这个事件，必须绑定onDragOver事件，并且在该事件中取消默认事件
      // 完成以上即可响应该事件，且自动取消了弹回去的动画

      // 先把原来的移除
      const newDataObj = { ...this.boardDataObj };
      newDataObj[this.dragCardDetail.status] = newDataObj[this.dragCardDetail.status].filter(itm => itm.id !== this.dragCardDetail.id);
      // 先将卡片对应状态修改, 再移入到新位置
      const newCardDetail = { ...this.dragCardDetail };
      newCardDetail.status = listKey;
      newDataObj[listKey].push(newCardDetail);

      this.isDrag = false
      this.boardDataObj = newDataObj
      this.dragCardDetail = null
    },
    onTaskCardDragEnd(e) {
    }
  }
}
</script>

<style scoped lang="scss">
  .board-container {
    min-height: 100vh;
    .board-main {
      padding: 1rem;
      margin: 0 auto;
      width: 1050px;
      height: calc(100vh - 80px);
      display: flex;
      flex-direction: column;

      & > h2 {
        padding: .5rem 1rem;
        color: #666;
        border-bottom: 1px solid #ddd;
      }

      .board-list {
        flex: 1;
        display: flex;
        justify-content: space-between;
        overflow: hidden;

        .board-list-item {
          flex: 1;
          padding: 0 .5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          .tast-title {
            padding: .5rem;
            color: #888;
          }
          
          .tast-list {
            flex: 1;
            padding: .5rem;
            display: flex;
            flex-direction: column;
            background-color: #f2f2f2;
            overflow: scroll;
            scrollbar-width: none; // 清除firefox滚动条

            .task-card {
              height: 120px;
              padding: .5rem;
              border-radius: 2px;
              box-shadow: 0 0 1px 0 rgba(9, 30, 66, 0.31), 0 2px 4px -1px rgba(9, 30, 66, 0.25);
              margin-bottom: .5rem;
              background-color: #fff;
              transition: all 0.5s;
              position: relative;
              cursor: pointer;

              &:hover {
                background-color: #ddd;
              }

              .task-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                position: absolute;
                top: 10px;
                right: 10px;
              }

              .task-code {
                margin-bottom: 5px;
                font-size: 12px;
                color: #666;
              }
            }
          }
        }

        // & > :not(:last-child) {
        //   border-right: 1px solid #ddd;
        // }
      }
    }
  }
</style>
