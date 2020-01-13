import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

// iview框架
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
// 全局样式
import './assets/css/reset.scss';
// 媒体查询布局
import './assets/css/media.scss';
import "./assets/css/index.scss"
// 全局组件svg-iocn
import "@/icon";


// moke数据
import Jsons from './moke/Json.js';

// 模拟请求数据工具函数
const json = type => {
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Jsons[type]);
		}, 500)
	})
}

// 防抖
import {debounce} from '@/utils/index.js';

Vue.prototype.$api = json;
Vue.prototype.$debounce = debounce;




new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
