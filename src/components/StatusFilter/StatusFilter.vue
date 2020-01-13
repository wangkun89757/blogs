<template>
  <div class="page">
    <div class="filter">
      <div
        class="filter-item cursor"
        v-for="(itme,index) in listText"
        @click="handleStatus(index)"
        :class="activeClass(index)"
      >{{itme}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from "vue-property-decorator";

@Component
export default class StatusFilter extends Vue {
  //  porp
  @Prop({ required: true })
  listText: Array;

  @Prop({ default:0 })
  currentIndex: Number;

  // data
  @Provide() currentIndex: Number = 0;

  // methods
  handleStatus(index) {
    this.$emit("change", index);
  }

  activeClass(index) {
    if (this.currentIndex === index) return "blogs_active";
    else return "";
  }

  // computed
}
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  align-items: center;
  padding: 0.9rem 0.5rem;
  font-size: 1.2rem;
  .filter-item {
    padding: 0 1rem;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      right: 0;
      width: 1px;
      height: 100%;
      background-color: #ddd;
    }

    &:last-of-type {
      &:after {
        display: none;
      }
    }
  }
}
</style>