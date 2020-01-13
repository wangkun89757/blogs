<template>
  <div class="blogs-container point-container mt">
    <nav class="sidebar-nav">
      <div class="item">推荐</div>
      <div class="item">热门</div>
      <div class="item">关注</div>
      <div class="item">开源推荐</div>
      <div class="item">内推招聘</div>
      <div class="item">掘金相亲</div>
      <div class="item">上班摸鱼</div>
      <div class="item">应用安利</div>
      <div class="item">开发工具</div>
      <div class="item">New资讯</div>
    </nav>
    <section class="router-view">
      <router-view></router-view>
    </section>
    <aside class="point-hot">
      <p class="hot-title">沸点推荐</p>
      <div class="hot-item">
        <div class="item-content">
          <div class="text tn2">
            【沸点福利】05期：云加社区来给大家送福利啦！ 各位
            掘友萌，大家好！这里是云加社区，腾讯云官方开发者社区。看腾
            讯技术，学云计算知识，就关注我们哦～！未来，我们将一如既往为开发者
            们带来优质技术和实践干货，更有一大波线上线下技术活动强势来袭，2020，期
            待与你相遇～ 话不多说，开始揭晓奖品福利： 🎁奖品信息：腾讯云开发板x30
            📖参与方式：关注「云加社区」掘金账号，并在此沸点下留言，评论感兴趣的技术
            话题+对云加社区的期待。 🚦抽奖规则：我们会在此条沸点评论中，抽取符合规则的
            掘友们（所以赶快关注+评论起来吧）直接送出开发板。 ⏱截止时间：2020-1-13 12:00
            📣领奖方式：截止时间的后一个工作日内在掘金沸点公布获奖名单（请获奖掘友三天内通
            过微信联系我们） 📱联系方式：微信公众号：云加社区 拿到开发板的同学还可以参与「腾讯
            云IoT应用创新大赛」，5万元的腾讯云代金券+深度合作计划等你来！更多信息请在「云加社区」
            公众号回复「沸点」了解更多。 腾讯云loT应用创新大赛报名链接：https://wj.qq.com/s2/5243233/def6
          </div>
          <div class="ele">27 赞 · 244 评论</div>
        </div>
        <div class="item-photo">
          <img src="../../assets/img/index/14@2x.png" alt />
        </div>
      </div>
      <div class="hot-item">
        <div class="item-content">
          <div class="text tn2">
            【沸点福利】05期：云加社区来给大家送福利啦！ 各位
            掘友萌，大家好！这里是云加社区，腾讯云官方开发者社区。看腾
            讯技术，学云计算知识，就关注我们哦～！未来，我们将一如既往为开发者
            们带来优质技术和实践干货，更有一大波线上线下技术活动强势来袭，2020，期
            待与你相遇～ 话不多说，开始揭晓奖品福利： 🎁奖品信息：腾讯云开发板x30
            📖参与方式：关注「云加社区」掘金账号，并在此沸点下留言，评论感兴趣的技术
            话题+对云加社区的期待。 🚦抽奖规则：我们会在此条沸点评论中，抽取符合规则的
            掘友们（所以赶快关注+评论起来吧）直接送出开发板。 ⏱截止时间：2020-1-13 12:00
            📣领奖方式：截止时间的后一个工作日内在掘金沸点公布获奖名单（请获奖掘友三天内通
            过微信联系我们） 📱联系方式：微信公众号：云加社区 拿到开发板的同学还可以参与「腾讯
            云IoT应用创新大赛」，5万元的腾讯云代金券+深度合作计划等你来！更多信息请在「云加社区」
            公众号回复「沸点」了解更多。 腾讯云loT应用创新大赛报名链接：https://wj.qq.com/s2/5243233/def6
          </div>
          <div class="ele">27 赞 · 244 评论</div>
        </div>
        <div class="item-photo">
          <img src="../../assets/img/index/14@2x.png" alt />
        </div>
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Point extends Vue {}
</script>
