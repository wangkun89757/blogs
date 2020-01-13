import Vue from "vue";
import Router from "vue-router";

// 一级路由
import Index from "@/views/index/index.vue";
import Point from "@/views/point/point.vue";
import Topic from "@/views/topic/topic.vue";
import Booklet from "@/views/booklet/booklet.vue";
import Activity from "@/views/activity/activity.vue";
import Other from "@/views/other/other.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/index",
      name: "index",
      component: Index,
      children: [
        {
          path: "recommend",
          component: () =>
            import("@/views/index/child_page/recommend/recommend.vue")
        },
        {
          path: "android",
          component: () =>
            import("@/views/index/child_page/android_page/android.vue")
        },
        {
          path: "code",
          component: () => import("@/views/index/child_page/code/code.vue")
        },
        {
          path: "front",
          component: () =>
            import("@/views/index/child_page/front_end/front.vue")
        },
        {
          path: "intelligent",
          component: () =>
            import("@/views/index/child_page/intelligent/intelligent.vue")
        },
        {
          path: "ios",
          component: () => import("@/views/index/child_page/ios_page/ios.vue")
        },
        {
          path: "read",
          component: () => import("@/views/index/child_page/read/read.vue")
        },
        {
          path: "rear",
          component: () => import("@/views/index/child_page/rear_end/rear.vue")
        },
        {
          path: "tool",
          component: () => import("@/views/index/child_page/tool/tool.vue")
        },
        {
          path: "/index",
          redirect: "/index/recommend"
        }
      ]
    },
    {
      path: "/point",
      name: "point",
      component: Point,
      children: [
        {
          path: "recommend",
          component: () =>
            import("@/views/point/child_page/recommend/recommend.vue")
        },
        {
          path: "/point",
          redirect: "/point/recommend"
        }
      ]
    },
    {
      path: "/topic",
      name: "topic",
      component: Topic
    },
    {
      path: "/booklet",
      name: "booklet",
      component: Booklet
    },
    {
      path: "/activity",
      name: "activity",
      component: Activity
    },
    {
      path: "/other",
      name: "other",
      component: Other
    },
    {
      path: "/",
      redirect: "/index"
    }
  ]
});
