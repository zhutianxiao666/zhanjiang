<template>
  <div id="app">
    <Header class="box" style="grid-area: header"></Header>
<!--    <div class="box" style="grid-area: header">头部</div>-->
    <Total class="box" style="grid-area: total"></Total>
<!--    <div class="box" style="grid-area: total">汇总</div>-->
    <div class="box" style="grid-area: message">信息</div>
    <Production class="box" style="grid-area: production"/>
<!--    <div class="box" style="grid-area: production">生成指标</div>-->
    <div class="box" style="grid-area: ranking">排名</div>
    <div class="box" style="grid-area: zhibiao">精益指标</div>
    <div class="box" style="grid-area: quality">质量</div>
<!--    <Header></Header>-->
<!--    <p>aaa</p>-->
<!--    <router-view></router-view>-->

  </div>
</template>

<script>

import Header from './components/Header';
import Total from "@/components/Total";
import Production from "@/components/Production";
export default {
  name: 'app',
  components: {
    Header,
    Total,
    Production
  }
}
</script>

<style lang="stylus" scoped>
#app
  display: grid;
  grid-template-columns: 46.7% 1fr 29%;
  grid-template-rows: 8.5% 18% 26.75% 17.7% 1fr;
  grid-template-areas: 'header    header  header' 'total      total   message' 'production ranking message' 'production zhibiao message' 'quality    zhibiao message';
  height 100%
  width 100%
  //background-image url("../test/img/bg2.png")
  background-color #24284d
  background-size 100% 100%
  .box
    border 1px solid black

</style>
