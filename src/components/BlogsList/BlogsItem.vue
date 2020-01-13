<template>
  <div class="blogs-list-item">
    <div class="content">
      <div class="content-tool">
        <div class="tool-item cursor tool-adv" v-if="ItemData.advType === 1">广告</div>
        <div class="tool-item cursor tool-hot" v-if="ItemData.hot === 1">热门</div>
        <div class="tool-item cursor tool-post" v-if="ItemData.advType === 2">专栏</div>
        <div class="tool-item cursor tool-name blogs_hover">{{ItemData.name}}</div>
        <div class="tool-item cursor tool-time">{{ItemData.time}}</div>
        <div class="tool-item cursor tool-type blogs_hover">{{ItemData.type}}</div>
      </div>
      <div class="content-title cursor blogs_hiden">{{ItemData.title}}</div>
      <div class="content-lnt cursor blogs_hiden" v-if="ItemData.advType === 1">{{ItemData.advInt}}</div>
      <div class="content-menu" v-else-if="ItemData.advType === 2">
        <div class="menu-item cursor">
          <span>{{ItemData.like}}</span>
          <svg-icon icon-class="dz"></svg-icon>
        </div>
        <div class="menu-item cursor">
          <span>{{ItemData.comment}}</span>
          <svg-icon icon-class="pl"></svg-icon>
        </div>
        <div class="menu-item share cursor">
          <svg-icon icon-class="share"></svg-icon>
        </div>
      </div>
    </div>
    <div class="sidebar" v-if="ItemData.sidebarImg">
      <img
        :src="ItemData.sidebarImg"
        :title="ItemData.sidebarImgTitle"
        :alt="ItemData.sidebarImgTitle"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Provide } from "vue-property-decorator";

@Component
export default class BlogsItem extends Vue {
  @Prop({ require: true })
  ItemData: Object;
}
</script>

<style lang='scss' scoped>
.blogs-list-item {
  padding: 1.5rem;
  border-top: 1px solid hsla(0, 0%, 59.2%, 0.1);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: rgba(0, 0, 0, 0.01);
    .share {
      display: block !important;
    }
  }

  .content {
    .content-tool {
      display: flex;
      align-items: baseline;
      font-size: 1.2rem;
      color: #b2bac2;
      .tool-item {
        &:after {
          content: "·";
          color: rgb(178, 186, 194);
          margin: 0 0.4rem;
        }

        &:last-of-type {
          &:after {
            display: none;
          }
        }
      }
      .tool-adv {
        border: 1px solid #eee;
        padding: 0.1rem 0.2rem;
        margin-right: 1rem;

        &:after {
          display: none;
        }
      }

      .tool-hot {
        font-weight: 500;
        color: red;
      }

      .tool-post {
        font-weight: 500;
        color: #b71ed7;
      }

      .tool-name {
        // &:hover{

        // }
      }
    }

    .content-title {
      margin: 0.8rem 0 1rem;
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 1.2;
      color: #2e3135;
    }

    .content-lnt {
      font-size: 13px;
      color: #b2bac2;
    }

    .content-menu {
      display: flex;
      margin-top: 0.5rem;

      .menu-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 0.8rem;
        height: 2rem;
        border: 1px solid #eee;
        color: #b2bac2;

        &:hover {
          background-color: #f7f8fa;
        }

        span {
          margin-right: 0.4rem;
        }
      }

      .share {
        display: none;
      }
    }
  }

  .sidebar {
    img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
