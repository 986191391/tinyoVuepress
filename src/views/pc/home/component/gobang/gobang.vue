<template>
  <div class="gobang-wrapper">
    <div class="current-info">
      <div>轮到: {{currentPlayer ? '黑棋' : '白棋'}}</div>
      <div class="reload-btn" @click="reload" >重新开始</div>
    </div>
    <div class="board">
      <div class="gobang-board" @click="(e) => clickBoard(e)">
        <template v-for="(yItem) in y">
          <div :key="`y-pieces-${yItem}`" class="line-y">
            <template v-for="(xItem) in x">
              <div :key="`x-pieces-${xItem}`" class="item-x" :data-x="xItem" :data-y="yItem" >
                  <div
                    v-if="coordinates && coordinates.find((coordinatesItem) => coordinatesItem.x === xItem && coordinatesItem.y === yItem) && coordinates.find((coordinatesItem) => coordinatesItem.x === xItem && coordinatesItem.y === yItem).player !== null"
                    :class="coordinates.find((coordinatesItem) => coordinatesItem.x === xItem && coordinatesItem.y === yItem).player ? 'black' : 'white'"
                  />
              </div>
            </template>
          </div>
        </template>
      </div>
      <div class="gobang-board-bgline">
        <template v-for="(yItem) in bgline">
          <div :key="`yItemKey${yItem}`" class="line-y">
            <template v-for="(xItem) in bgline">
              <div :key="`xItemKey${xItem}`" class="item-x" :data-x="xItem" :data-y="yItem" />
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    onDynamicTips: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      currentPlayer: true, // true 为黑棋 , false 为白棋
      coordinates: [],
      x: [...Array(15)].map((item, index) => index + 1),
      y: [...Array(15)].map((item, index) => index + 1),
      bgline: [...Array(14)].map((item, index) => index + 1)
    }
  },
  beforeMount () {
    this.buildCoordinates()
  },
  methods: {
    clickBoard (e) {
      const x = Number(e.target.dataset.x);
      const y = Number(e.target.dataset.y);
      // 如果点的是棋子那个div 没有绑定dataset 所以xy都为空
      if(!x && !y) return this.onDynamicTips('这个位置已经下了,请换一个位置!');
      // 如果点击了棋子所在的格子 则有绑定dateset 需要判断一下是否已经下了
      const curCoordinatesItem = this.coordinates.find((item) => item.x === x && item.y === y);
      if (curCoordinatesItem.player !== null) return this.onDynamicTips('这个位置已经下了,请换一个位置!');

      // 记录
      const coordinatesItem = this.coordinates.find((coordinatesItem) => coordinatesItem.x === x && coordinatesItem.y === y);
      coordinatesItem.player = this.currentPlayer;
      this.currentPlayer = !this.currentPlayer

      // 检查游戏是否结束
      this.checkFinish(x, y);
    },
    checkFinish (x, y) {
      this.checkLineX(x, y);
      this.checkLineY(x, y);
      this.checkDeclivous(x, y);
      this.checkUptilt(x, y);
    },
    checkLineX (x, y) {
      // 拿到y相同的所有数据， 即为同一行的所有数据(落点的x轴)
      const xline = this.coordinates.filter((item) => item.y === y);
      // 再次过滤，过滤落点位置 +-5 范围内的数据
      const xlineEffective = xline.filter((item) => (item.x < x + 5) && (item.x > x - 5));
      // 把整理好的数据 循环判断是否有5个连续相同 有则胜利 无则继续
      this.checkWin(xlineEffective);
    },
    checkLineY (x, y) {
      const yline = this.coordinates.filter((item) => item.x === x);
      const ylineEffective = yline.filter((item) => (item.y < y + 5) && (item.y > y - 5));
      this.checkWin(ylineEffective);
    },
    checkDeclivous (x, y) {
      const declivousLine = this.coordinates.filter((item) => item.x - item.y === x - y);
      const declivousLineEffective = declivousLine.filter((item) => (item.x < x + 5) && (item.x > x - 5));
      this.checkWin(declivousLineEffective);
    },
    checkUptilt (x, y) {
      const uptiltLine = this.coordinates.filter((item) => item.x + item.y === y + x);
      const uptiltLineEffective = uptiltLine.filter((item) => (item.x < x + 5) && (item.x > x - 5));
      this.checkWin(uptiltLineEffective);
    },
    checkWin(checkArr) {
      const checkArrLength = checkArr.length;
      // 需要循环的次数为 数组长度-4
      const count = checkArrLength - 4;
      // 开始循环
      for (let num = 0; num < count; num++) {
        // 使用 slice 方法截取要判断的片段, 该方法不改变原数组, 传递的参数位置 含头不含尾
        const checkPart = checkArr.slice(num, num + 5);
        // 判断截取的 5个 的player是否为同一个人 是则返回true 不是则继续循环
        // 取出第一项 用后面循环的判断
        const firstPlayer = checkPart[0].player;
        const isWin = checkPart.some((item) => item.player !== firstPlayer);
        if (!isWin) return this.onDynamicTips(`${this.currentPlayer ? '白棋' : '黑棋'}获胜!`);
      }
    },
    reload () {
      this.buildCoordinates()
    },
    buildCoordinates() {
      const coordinates = [];
      for (let i = 1; i < 16; i++) {
        for (let j = 1; j < 16; j++) {
          coordinates.push({ x: i, y: j, player: null })
        }
      }
      this.currentPlayer = true
      this.coordinates = coordinates
    }
  }
}
</script>

<style scoped lang="scss">
.gobang-wrapper {
  min-width: 900px;
  position: relative;
  display: flex;
  flex-direction: column;

  * {
    box-sizing: border-box;
  }
  
  .board {
    margin-top: -15px;
    width: 750px;
    height: 750px;
    position: relative;

    .gobang-board {
      width: 675px;
      border: 1px solid rgb(98, 131, 239);
      box-sizing: border-box;
      position: absolute;
      top: 30px;
      left: 30px;
      cursor: pointer;
      z-index: 2;
  
      .line-y {
        display: flex;
  
        &:not(:last-child) {
          border-bottom: 1px solid transparent;
        }
  
        .item-x {
          width: 45px;
          height: 45px;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.5s;
          
          &:not(:last-child) {
            border-right: 1px solid transparent;
          }
  
          &:hover {
            background-color: #f2f2f2;
          }
  
          .black {
            width: 100%;
            height: 100%;
            background-color: #000;
            border-radius: 50%;
          }
  
          .white {
            width: 100%;
            height: 100%;
            background-color: #fff;
            border-radius: 50%;
            border: 1px solid #000;
          }
        }
      }
    }
  
    .gobang-board-bgline {
      width: 630px;
      border: 1px solid #ddd;
      box-sizing: border-box;
      position: absolute;
      top: calc(45px / 2 + 30px);
      left: calc(45px / 2 + 30px);
      z-index: 1;
  
      .line-y {
        display: flex;
  
        &:not(:last-child) {
          border-bottom: 1px solid #ddd;
        }
  
        .item-x {
          width: 45px;
          height: 45px;
          padding: 10px;
          
          &:not(:last-child) {
            border-right: 1px solid #ddd;
          }
        }
      }
    }
  }

  .current-info {
    // height: 100vh;
    padding: 15px 30px 0;
    display: flex;
    align-items: center;

    .reload-btn {
      margin-left: 20px;
      padding: 0 10px;
      max-width: 100px;
      height: 30px;
      line-height: 28px;
      text-align: center;
      border: 1px solid  rgb(98, 131, 239);
      background-color: #fff;
      transition: all 0.5s;
      cursor: pointer;

      &:hover {
        background-color: rgb(98, 131, 239);
        color: #fff;
      }
    }
  }
}
</style>
