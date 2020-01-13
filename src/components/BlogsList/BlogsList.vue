<template>
  <div class="page">
    <div class="blogs-list">
       <slot></slot> 
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Provide } from "vue-property-decorator";

@Component
export default class BlogsList extends Vue {}
</script>

<style lang='scss' scoped>

</style>
