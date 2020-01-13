<template>
  <div class="page">
    <!-- 筛选 -->
    <status-filter :list-text="list" :current-index="currentIndex" @change="handleChange"></status-filter>
    <!-- 列表 -->
    <blogs-list>
        <blogs-item v-for="item in blogsList" :key="item.id" :item-data="item"></blogs-item>
    </blogs-list>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from "vue-property-decorator";
import StatusFilter from "@/components/StatusFilter/StatusFilter";
import BlogsList from "@/components/BlogsList/BlogsList";
import BlogsItem from "@/components/BlogsList/BlogsItem";
@Component({
  components: {
    StatusFilter,
    BlogsList,
    BlogsItem
  }
})
export default class Recommend extends Vue {
  // data
  @Provide() list: Array = ["热门", "最新", "热榜"];
  @Provide() currentIndex: Number = 0;
  @Provide() blogsList: Array = [];

  // methods
  handleChange(index) {
    this.currentIndex = index;
  }

  async getData(){
    const blogsList = await this.$api('List');
    this.blogsList = blogsList;
  }
  // mounted
  mounted () {

    this.getData();
     
     
  }
}
</script>

<style scoped lang="scss">

</style>
