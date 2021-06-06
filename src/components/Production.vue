<template >
  <div ref="production" id="demo" >
    <component :is="barName" :width="width" :height="height"></component>
<!--    <DoubleArc :width="width" :height="height"></DoubleArc>-->
  </div>
</template>

<script>
import DoubleArc from "@/components/common/selfEchars/DoubleArc";
export default {
name: "Production",
  data() {
    return {
      barName:'',
      // width:100,
      // height:100
    }
  },
  components: {
    DoubleArc
  },
  computed: {
    // width() {
    //   return this.$refs.production ? this.$refs.production.offsetWidth : 0;
    // },
    // height() {
    //   return this.$refs.production ? this.$refs.production.offsetHeight : 0;
    // }
  },
  mounted() {
    this.width = this.$refs.production.offsetWidth;
    this.height = this.$refs.production.offsetHeight;
    this.barName = 'DoubleArc';

  }
}
</script>

<style lang="stylus" scoped>
#demo
  background-color #0086b3


</style>
