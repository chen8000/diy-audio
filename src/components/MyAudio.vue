<template>
  <div>
    <audio 
      ref="audio"
      v-show="false"
      :src="require('@/assets/audio/m.mp3')"
      @loadedmetadata="getTimeTotal"
      @ended="handleEnd"
      @timeupdate="updateProgress"
      controls ></audio>

    <!-- 自定义样式 -->
    <div class="audio-container">
      <el-button @click="handlePlay" type="primary">播放</el-button>
      <el-button @click="handlePause" type="success">暂停</el-button>
      <el-slider v-model="progress" @input="progressChange"></el-slider>
      <p>{{currentTimes}}/{{total}}</p>
      <br>
      <br>
      音量：{{(this.sound / 100).toFixed(1)}} <el-slider v-model="sound" @input="soundChange"></el-slider>
      
    </div>
  </div>
</template>

<script>
  import { transTime } from '@/tools'
  export default {
    data () {
      return {
        progress: 0, // 进度条当前的位置
        currentTimes: '00:00', // 当前播放的进度
        sound: 0, // 音量
        aObj: null, // audio 对象
        total: 0, // 总时长
      }
    },
    mounted () {
      this.aObj = this.$refs.audio
      this.getTimeTotal()
    },
    methods: {
      // 播放
      handlePlay () {
        this.aObj.play()
      },
      // 暂停
      handlePause () {
        this.aObj.pause()
      },
      // 获取总时长
      getTimeTotal () {
        this.total = transTime(this.aObj.duration)
      },
      // 更新进度条的位置
      updateProgress () {
        this.progress = Math.round((Math.floor(this.aObj.currentTime) / Math.floor(this.aObj.duration)) * 100, 0)
        this.currentTimes = transTime(this.aObj.currentTime)
      },
      // 拖动进度条触发  --播放进度
      progressChange () {
        if (this.aObj.duration) {
          this.aObj.currentTime = this.progress / 100 * this.aObj.duration
          this.currentTimes = transTime(this.aObj.currentTime)
        }
      },
      // 拖动进度条：--音量
      /*
        1.0 是最高音量（默认）
        0.5 是一半音量 （50%）
        0.0 是静音
      */
      // aduio.volume
      soundChange () {
        this.aObj.volume = (this.sound / 100).toFixed(1)
      },
      // 播放完成事件
      handleEnd () {
        this.aObj.currentTime = 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .audio-container {
    width: 50%;
    padding: 30px;
  }
</style>