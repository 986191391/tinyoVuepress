<template>
  <div>
    <div v-if="childData.type === 'Text'" :id="childData.__id" :data-nodeid="childData.__id" :style="getStyle(childData)">
      {{childData.text}}
    </div>
    <img v-if="childData.type === 'Image'" :id="childData.__id" :data-nodeid="childData.__id" :src="childData.src" alt="" :style="getStyle(childData)" />
    <div v-else :id="childData.__id" :data-nodeid="childData.__id" :style="getStyle(childData)" @focus="() => {}">
      <template v-if="childData.children">
        <BuildChildren v-for="(child) in childData.children" :childData="child" :key="`child-data-${child.__id}`" />
      </template>
    </div>
  </div>
</template>

<script>
import dividerImg from '@/assets/author/divider.png'

export default {
  name: 'BuildChildren',
  components: { },
  props: {
    childData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      dividerImg
    }
  },
  methods: {
    getStyle(child) {
      let retObj = {
        height: `${child.frame.height}px`,
        zIndex: child.zIndex,
        boxSizing: 'border-box',
        // wordBreak: 'keep-all',
        // whiteSpace: 'nowrap'
      };
      if (Object.keys(child.style).length) {
        const styleObj = child.style;
        retObj = { ...retObj, ...styleObj };      
      }
      if (child.type === 'View') {
        const layoutObj = {
          position: 'absolute', 
          left: `${child.frame.left}px`, 
          top: `${child.frame.top}px`,  
          width: `${child.frame.width}px`, 
        };
        retObj = { ...retObj, ...layoutObj };
      }

      if (child.type !== 'View') {
        // 只要frame中有一项不为0，则进行绝对定位
        const isAbs = Object.values(child.frame).some((item) => item !== 0);
        if (isAbs) {
          const layoutObj = {
            position: 'absolute', 
            left: `${child.frame.left}px`, 
            top: `${child.frame.top}px`,  
          };
          retObj = { ...retObj, ...layoutObj };
        }
      }
      return retObj;
    }
  }
}
</script>

<style scoped lang="scss">
  .divider {
    width: 100%;
    height: 5px;
  }
</style>
