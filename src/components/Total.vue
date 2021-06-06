<template>
  <div class="content">
    <ul>
      <li >
        <div class="title" >月产量</div>
        <div class="middle" >
          <span class="big">120.99</span><span class="small">wt</span><span class="iconfont" :style="{color:'#6fff97'}">&#xe62b;</span>
        </div>
        <div class="bottom" >
          <span class="left">
            <ProgressBar/>
          </span>
          <span class="right">120.99%</span>
        </div>
      </li>
      <li v-for="i in 3" :key="i">
        <div class="title" style="background-color: #55a532">月产量</div>
        <div class="middle" style="background-color: #9a6e3a">
          <!--          <span class="big">120.99</span><span class="small">wt</span>-->
        </div>
        <div class="bottom" style="background-color: #55a532">c</div>
      </li>
<!--      <li>-->
<!--        <div class="box">-->
<!--          <ProgressBar width="100"/>-->
<!--        </div>-->
<!--      </li>-->
    </ul>
  </div>

</template>

<script>
import ProgressBar from "./common/selfEchars/ProgressBar";
export default {
name: "Total",
  data() {
    return {
    }
  },
  components: {
    ProgressBar
  }
}
</script>

<style lang="stylus" scoped>
.content
  box-sizing border-box
  padding 5px
  >ul
    box-sizing border-box
    display flex
    height 100%
    border 1px solid #cccccc
    border-radius 5px
    padding 8px 0
    li
      display flex
      flex-direction column
      flex 1
      position relative
      overflow hidden
      padding-left 10px
      font-size 12px
      color white

      &:not(:last-child):before
        content ''
        display inline-block
        position absolute
        right 0
        width 1px
        height 80%
        margin 8px 0 0
        background-color #464860
      //border-left 2px solid #cccccc
      //>div
      >div
        overflow hidden

      .title
        display flex
        justify-content flex-start
        align-items center
        height 25%
        font-size 10px
        color #0bced8
      .middle
        flex 1
        box-sizing border-box
        text-align center
      .bottom
        display flex
        height 18%

        span
          display inline-block
        .left
          width 65%
          //background-color #0bd4cf
        .right
          flex 1
          display flex
          justify-content flex-start
          align-items center
          //background-color #9a6e3a
          color #04d804
          font-size 10px
          line-height 10px
      .big
        font-size 27px
      .small
        font-size 10px
</style>
