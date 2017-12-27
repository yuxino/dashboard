<template>
  <div class="maps">
    <el-amap vid="amap" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-info-window :key="index" 
                            v-for="(window,index) in windows" 
                            :position="window.position" 
                            :content="window.content" 
                            :visible="window.visible"
                            :events="window.events">
      </el-amap-info-window>
    </el-amap>
  </div>
</template>

<script>
import Vue from 'vue'
import amap from 'vue-amap'

Vue.use(amap)

amap.initAMapApiLoader({
  key: 'dc6b4360ec60782aed4987d7081ea879',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})

export default {
  name: 'Maps',
  data () {
    return {
      zoom: 14,
      center: [121.5273285, 31.21515044],
      windows: [
        {
          position: [121.5273285, 31.21515044],
          content: 'Hi! I am here!',
          visible: true
        }
      ]
    }
  }
}
</script>