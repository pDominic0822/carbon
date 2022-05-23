// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import '_@/styles/reset.css';
import '_@/styles/common.css';
import '_@/styles/task.scss';

import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ajax from '_@/js/ajax';
import { storage, shaNum } from '_@/js/utils';
import { addRecordTimes } from '_@/js/api';
import { Cookie } from '_@/js/one';
import { store } from './store/index';
import './filter/filter'; // 自定义过滤器
import 'codemirror/lib/codemirror.css';
import eduHeader from '#/common/edu-header'; // header导航
import topRes from '#/common/TopRes';
import footer from '#/common/Footer';

import myMessage from './components/Message/message';
import pageTable from '#/page/student/work/TaskList/common/pageTable';
import returnMap from '#/page/student/work/TaskList/common/returnMap/returnMap';
import htmlToPdf from '#/utils/htmlToPdf';

Vue.component('pageTable', pageTable);
Vue.component('returnMap', returnMap);
Vue.component('Footer', footer);

Vue.component('edu-header', eduHeader);
Vue.component('top-res', topRes);

Vue.prototype.$ajax = ajax;
Vue.prototype.$storage = storage;
Vue.prototype.$shaNum = shaNum;
Vue.prototype.$addRecordTimes = addRecordTimes;
Vue.prototype.$store = store;
Vue.prototype.$axios = axios;
Vue.prototype.$Cookie = Cookie;

Vue.use(myMessage);

Vue.use(ElementUI);
Vue.use(htmlToPdf);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
});
