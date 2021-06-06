<template>
  <div class="bar">
    <div class="bar-content"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props:['width'],
}
</script>

<style lang="stylus" scoped>
.bar
  overflow hidden
  height 100%;
  border-radius 5px
  background-color #444862
  .bar-content
    width 50%
    height 100%
    background-color orange
    border-radius 5px
</style>
