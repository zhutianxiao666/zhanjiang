<template>
  <svg :width="width" :height="height"  viewBox="0 0 800 500" class="doubleArc">
    <g>
      <path d="M250,50 a200,200 0,1,0 200,200" fill="none" stroke="#2d3192" stroke-width="25" stroke-linecap="round"></path>
      <path d="M250,120 a130,130 0,1,0 130,130" fill="none" stroke="#2d3192" stroke-width="25" stroke-linecap="round"></path>
    </g>
    <g>
      <path d="M250,50 a200,200 0,0,0 -200,200" fill="none" stroke="#20d12d" stroke-width="25" stroke-linecap="round"></path>
      <path d="M250,120 a130,130 0,0,0 -130,130" fill="none" stroke="#20d12d" stroke-width="25" stroke-linecap="round"></path>

    </g>
    <g>
      <text x="300" y="70" font-size="50">
        <tspan fill="white">666</tspan>
        <tspan font-size="80" fill="#08e3e7">&nbsp;40.89%</tspan>
      </text>
      <text x="300" y="140" font-size="50">
        <tspan fill="white">666</tspan>
        <tspan font-size="80" fill="#08e3e7">&nbsp;40.89%</tspan>
      </text>
    </g>
  </svg>
</template>

<script>
export default {
name: "DoubleArc",
  props:['width','height'],

}
</script>

<style scoped>

</style>
