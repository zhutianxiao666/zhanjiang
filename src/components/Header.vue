<template>
    <header>
      <ul>
        <li v-for="item in list" :key="item" >{{item}}</li>
      </ul>
      <div></div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                list: ['操作空间','智能分析','生产管理','设备管理','品质管理','厂务管理','文档知识','友情链接']
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import "../css/mixins.styl"
header
  display flex
  ul
    display flex
    flex 1
    clearfix()
    padding 10px
    color white
    li
      flex 1
      float: left;

      list-style-type none
  div
    width 29%
    background-color white




</style>
