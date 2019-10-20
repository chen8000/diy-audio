<template>
  <div id="app">
    <MyAudio :src="require('@/assets/audio/m.mp3')"/>
  </div>
</template>

<script>
import MyAudio from '@/components/MyAudio'
export default {
  name: 'app',
  components: {
    MyAudio
  }
}
</script>
<style lang="scss">
  #app {
    width: 500px;
    margin-top: 100px;
  }
</style>
