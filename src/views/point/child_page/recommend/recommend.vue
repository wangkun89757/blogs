<template>
  <div class="page">
    <!-- 列表 -->

    <div class="point-list">
      <div class="list-container">
        <img src="../../../../assets/img/index/img.webp" class="user-avatar" alt />
        <div class="list-user">
          <div class="user-info">
            <div class="item">
              <div class="name">林_小猫</div>
              <div class="job">测试工程师@深圳· 1小时前</div>
            </div>
            <div class="btn">
              <Button type="success" ghost>关注</Button>
            </div>
          </div>
          <div class="list-content">
            <div class="content-lnt">我要和这妹子结婚</div>
            <div class="contetn-text">
              <img src="../../../../assets/img/index/img1.webp" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="list-ele"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Recommend extends Vue {}
</script>

<style scoped lang="scss">
</style>
