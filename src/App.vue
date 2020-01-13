<template>
  <div id="app" class="page">
    <div class="blogs-nav-container">
      <div class="blogs-nav blogs-container">
        <Row type="flex" align="middle">
          <Col :md="16" :xs="14">
            <Row>
              <Col span="4">
                <div class="blogs-nav-logo">
                  logo
                  <!-- <img src="../../assets/logo.png" alt=""> -->
                </div>
              </Col>
              <Col :xl="20" :xs="0">
                <div class="blogs-nav-menu">
                  <div
                    class="blogs-nav-menu-item"
                    :class="{'nav-active':$route.path.includes('/index')}"
                  >
                    <router-link :to="{ path: '/'}">首页</router-link>
                  </div>
                  <div
                    class="blogs-nav-menu-item"
                    :class="{'nav-active':$route.path.includes('/point')}"
                  >
                    <router-link :to="{ path: '/point'}">沸点</router-link>
                  </div>
                  <div
                    class="blogs-nav-menu-item"
                    :class="{'nav-active':$route.path.includes('/topic')}"
                  >
                    <router-link :to="{ path: '/topic'}">话题</router-link>
                  </div>
                  <div
                    class="blogs-nav-menu-item"
                    :class="{'nav-active':$route.path.includes('/booklet')}"
                  >
                    <router-link :to="{ path: '/booklet'}">小册</router-link>
                  </div>
                  <div
                    class="blogs-nav-menu-item"
                    :class="{'nav-active':$route.path.includes('/activity')}"
                  >
                    <router-link :to="{ path: '/activity'}">活动</router-link>
                  </div>
                  <div
                    class="blogs-nav-menu-item"
                    :class="{'nav-active':$route.path.includes('/other')}"
                  >
                    <router-link :to="{ path: '/other'}">其他</router-link>
                  </div>
                </div>
              </Col>
              <Col :xl="0" :lg="4">
                <div class="blogs-nav-samll">
                  <Dropdown trigger="click" style="margin-left: 20px;left: 90px;" :transfer="true">
                    <Button type="default">
                      <div class="nav-active samll-menu">
                        首页
                        <Icon type="ios-arrow-down"></Icon>
                      </div>
                    </Button>
                    <DropdownMenu slot="list">
                      <DropdownItem>首页</DropdownItem>
                      <DropdownItem>沸点</DropdownItem>
                      <DropdownItem>话题</DropdownItem>
                      <DropdownItem>小册</DropdownItem>
                      <DropdownItem>活动</DropdownItem>
                      <DropdownItem>其他</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </Col>
          <Col :md="8" :xs="10">
            <Row type="flex" align="middle">
              <Col :xl="10" :xs="14">
                <div class="blogs-nav-search" :class="{active:searchActive}">
                  <input
                    class="search-input"
                    @focus="searchActive = true"
                    @blur="searchActive = false"
                    type="text"
                    v-model="search"
                    placeholder="请输入搜索内容"
                  />
                  <i class="iconfont iconsearch"></i>
                </div>
              </Col>
              <Col :xl="7" :xs="0">
                <div class="blogs-nav-article">
                  <i class="iconfont iconnavicon-wzgl"></i>
                  写文章
                </div>
              </Col>
              <Col :xl="7" :xs="10">
                <div class="blogs-nav-login">
                  <div class="login">登录</div>
                  <span class="element">.</span>
                  <div class="registered">注册</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from "vue-property-decorator";

@Component
export default class App extends Vue {
  // data
  private search: string = "";
  private searchActive: boolean = false;

  private navList: string[] = ["首页", "沸点", "话题", "小册", "活动", "其他"];
  // mounted

  mounted() {}
}
</script>



<style scoped lang="scss">
@import "@/assets/css/commen.scss";

.blogs-nav-container {
  height: $nheight;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 12px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;

  .blogs-nav {
    height: $nheight;
    .ivu-row-flex {
      height: $nheight;
    }

    .blogs-nav-logo {
      width: 100%;
      height: $nheight;
      background-color: #f6f6f6;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .blogs-nav-menu {
      height: $nheight;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .blogs-nav-menu-item {
        cursor: pointer;

        a {
          color: #909090;
          &:hover {
            color: #007fff;
          }
        }
      }
    }

    .blogs-nav-samll {
      height: $nheight;
      display: flex;
      align-items: center;

      .ivu-btn {
        border-color: transparent;
        font-size: 1.5rem;
        color: #909090;
      }
      .ivu-btn:hover {
        color: #007fff;
      }

      .ivu-btn:active {
        color: #007fff;
      }
      .ivu-btn:focus {
        box-shadow: 0 0 0 2px rgba(45, 140, 240, 0);
      }

      .samll-menu {
        display: flex;
        align-items: center;
      }
    }

    .blogs-nav-search {
      width: 100%;
      height: 34px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      border: 1px solid hsla(0, 0%, 59.2%, 0.2);
      background-color: rgba(227, 231, 236, 0.2);
      border-radius: 2px;
      padding: 0 8px;
      &.active {
        border: 1px solid #007ff0;
        background-color: #fff;
      }
      .search-input {
        width: 100%;
        height: 100%;
        font-size: 1rem;
        background: transparent;
      }
    }
    .blogs-nav-article,
    .blogs-nav-login {
      font-size: 1.5rem;
      color: #007fff;
      height: $nheight;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .blogs-nav-article {
      position: relative;
      i {
        margin: -4px 5px 0 5px;
      }
      &::before {
        content: "|";
        position: absolute;
        right: -5px;
        top: 19px;
      }
    }

    .blogs-nav-login {
      justify-content: flex-end;
      .element {
        margin: -15px 4px 0;
        font-size: 2.5rem;
      }
    }
  }
}

.router-view{
  padding-top: $nheight;
}
</style>
