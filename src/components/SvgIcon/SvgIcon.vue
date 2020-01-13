<template>
  <svg :class="svgClassName" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Provide } from "vue-property-decorator";

@Component
export default class SvgIcon extends Vue {
  name: "SvgIcon";
  // props
  @Prop({ default: "" })
  IconClass: String;
  @Prop({ default: "" })
  ClassName: String;

  // computed
  get iconName() {
    return "#icon-" + this.IconClass;
  }

  get svgClassName() {
    if (this.ClassName) return `svg-icon ${this.ClassName}`;
    else return `svg-icon`;
  }
}
</script>

<style lang='scss' scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
