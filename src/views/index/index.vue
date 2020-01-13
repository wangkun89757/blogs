<template>
  <div class="page">
    <!-- 二级导航 -->
    <div class="nav-secondary-container">
      <div class="nav-secondary-menu blogs-container">
        <div
          class="nav-secondary-item"
          :class="{'nav-active':currentIndex===index}"
          v-for="(navList,index) in items"
          @click="currentIndex = index"
           @mouseover="mouseOver"
         
        >
          <router-link :to="{path:'/index'+navList.path,}" tag="span">{{navList.name}}</router-link>
        </div>
      </div>
    </div>
    <div class="blogs-container blogs-secondary">
      <Row>
        <Col :xl="18">
          <!-- 二级路由 -->
          <div class="blogs-secondary-content">
            <router-view></router-view>
          </div>
        </Col>
        <Col :xl="6">
          <!-- 侧边栏 -->
          <div class="blogs-secondary-sidebar">
            <!-- login -->
            <div class="sidebar-login">
              <div class="title">这是一个社区社区社区</div>
              <div class="lnt">简介简介简介简介</div>
              <div class="form">
                <input type="text" autocomplete="off" placeholder="用户名" class="username" />
                <input
                  type="number"
                  autocomplete="off"
                  placeholder="手机号"
                  maxlength="11"
                  class="userphone"
                />
                <input type="password" autocomplete="off" placeholder="密码" class="userpassword" />
                <button>立即注册</button>
              </div>
              <div class="third-party">
                <span>第三方登录</span>
                <div class="item">
                  <img
                    title="Git"
                    alt="Git"
                    src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg"
                    class="oauth-btn"
                  />
                </div>
                <div class="item">
                  <img
                    title="微博"
                    alt="微博"
                    src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg"
                  />
                </div>
                <div class="item">
                  <img
                    title="微信"
                    alt="微信"
                    src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg"
                  />
                </div>
              </div>
            </div>
            <!-- 标签 -->
            <div class="sidebar-label">
              <div class="label-title">
                <div class="content">热门标签</div>
                <div class="all">查看全部</div>
              </div>
              <div class="label-content">
                <div class="item">架构</div>
                <div class="item">github</div>
                <div class="item">开源</div>
                <div class="item">算法</div>
                <div class="item">面试</div>
                <div class="item">产品</div>
                <div class="item">翻译计划</div>
              </div>
            </div>

            <!-- 列表 -->
            <div class="sidebar-list">
              <div class="item">
                <div class="avatar">
                  <img src="../../assets/img/index/list1.png" alt />
                </div>
                <div class="text">收藏级</div>
              </div>
              <div class="item">
                <div class="avatar">
                  <img src="../../assets/img/index/list2.png" alt />
                </div>
                <div class="text">翻译计划</div>
              </div>
              <div class="item">
                <div class="avatar">
                  <img src="../../assets/img/index/list3.png" alt />
                </div>
                <div class="text">软件插件</div>
              </div>
              <div class="item">
                <div class="avatar">
                  <img src="../../assets/img/index/list4.png" alt />
                </div>
                <div class="text">社区指南</div>
              </div>
              <div class="item">
                <div class="avatar">
                  <img src="../../assets/img/index/list5.png" alt />
                </div>
                <div class="text">合作伙伴</div>
              </div>
            </div>

            <!-- 关于我们 -->
            <div class="sidebar-us">
              <div class="title">关于我们</div>
              <div class="mode">
                <div class="item">微信</div>
                <div class="item">微博</div>
                <div class="item">知乎</div>
                <div class="item">简书</div>
              </div>
              <div class="lnt">
                <a>关于</a>
                <a>招聘</a>
                <a>商务合作</a>
                <a>友情链接</a>
              </div>

              <div class="text">©2019 掘金</div>
              <div class="text">Powered by QingCloud</div>
              <div class="text">津ICP备15003202号-2</div>
              <div class="text">京公网安备11010802026719号</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from "vue-property-decorator";

@Component
export default class Index extends Vue {
  // data
  @Provide() items: object[] = [
    { name: "推荐", path: "/recommend" },
    { name: "前端", path: "/front" },
    { name: "后端", path: "/rear" },
    { name: "Android", path: "/android" },
    { name: "IOS", path: "/ios" },
    { name: "人工智能", path: "/intelligent" },
    { name: "开发工具", path: "/tool" },
    { name: "代码人生", path: "/code" },
    { name: "阅读", path: "/read" }
  ];
  @Provide() currentIndex: number = 0;

  // methods
  mouseOver(){
    this.$debounce(deTest,1000,true);
    function deTest() {
      console.log(11);
    }
  }
}
</script>

<style scoped lang="scss">
.nav-secondary-container {
  width: 100%;
  min-width: 520px;
  height: 46px;
  font-size: 1.4rem;
  color: #71777c;
  background-color: #fff;
  margin-bottom: 15px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  position: fixed;
  left: 0;
  top: 61px;
  z-index: 99;

  .nav-secondary-menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .nav-secondary-item {
      padding: 0 10px;
      cursor: pointer;
      &:first-of-type {
        padding-left: 0;
      }
      &:last-of-type {
        padding-right: 0;
      }
      &:hover {
        color: #007fff;
      }
    }
  }
}

.blogs-secondary {
  display: flex;
  justify-content: space-between;

  .blogs-secondary-content {
    background: #fff;
    margin-top: 61px;
  }

  .blogs-secondary-sidebar {
    margin-top: 61px;
    margin-left:15px;

    .sidebar-login {
      background: #fff;
      margin-bottom: 20px;
      padding: 10px;
      border-radius: 2px;

      .title {
        font-weight: 600;
      }

      .lnt {
        font-size: 0.8em;
        margin-top: 5px;
      }

      .form {
        margin-top: 10px;

        input {
          width: 100%;
          height: 35px;
          padding-left: 10px;
          font-size: 1em;
          background-color: #fbfbfb;
          border: 1px solid #f4f4f4;
          margin-bottom: 10px;
          outline: none;
          box-sizing: border-box;
        }
      }

      button {
        -webkit-appearance: none;
        appearance: none;
        background-color: #007fff;
        color: #fff;
        border-radius: 2px;
        border: none;
        outline: none;
        transition: background-color 0.3s, color 0.3s;
        font-size: 1em;
        width: 100%;
        cursor: pointer;
        height: 35px;
        line-height: 35px;
        margin-bottom: 5px;
      }

      .third-party {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
        color: #999;
        font-size: 0.8em;
        img {
          width: 22px;
          height: 22px;
          margin-left: 10px;
        }
      }
    }

    .sidebar-label {
      background: #fff;
      padding: 0 10px;
      font-size: 1em;
      .label-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 45px;
        border-bottom: 1px solid #f6f6f6;
      }

      .label-content {
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;
        .item {
          margin-right: 12px;
          margin-bottom: 12px;
          background-color: #f3f6f3;
          cursor: pointer;
          height: 30px;
          color: inherit;
          line-height: 30px;
          padding-left: 22px;
          padding-right: 22px;
          border-radius: 30px;
          font-size: 0.8em;
          &:hover {
            color: #fff;
            background-color: #0c0;
          }
        }
      }
    }

    .sidebar-list {
      background: #fff;
      margin-top: 20px;
      .item {
        padding: 0 10px;
        display: flex;
        align-items: center;
        height: 60px;
        font-size: 1em;
        .avatar img {
          width: 36px;
          height: 36px;
          margin-right: 10px;
        }
        &:hover {
          background-color: hsla(0, 0%, 84.7%, 0.1);
        }
      }
    }

    .sidebar-us {
      margin-top: 20px;
      text-align: center;

      .title {
        margin-bottom: 5px;
      }

      .mode {
        display: flex;
        justify-content: center;
        font-size: 1em;
        margin-bottom: 5px;
        .item {
          margin-right: 10px;
        }
      }

      .lnt {
        margin-bottom: 5px;
        a {
          margin: 0 4px;
        }
      }
    }
  }
}
</style>
