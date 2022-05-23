/*
 * @Author: zhangln
 * @LastEditors: Please set LastEditors
 * @Description: 项目URL
 * @Date: 2018-12-14 20:33:08
 * @LastEditTime: 2021-10-20 14:32:30
 */

import baseUrl from './env';
import { storage } from '_@/js/utils';
// const modelatlasUrl = storage.get('modelUrl');
// const commonFunction = storage.get('commonFunction');
// const modelatlasUrl = 'http://192.168.0.54:8067';
// const commonFunction = 'http://192.168.0.78:8080';
const modelatlasUrl = () => {
	return storage.get('modelUrl');
};
// const commonFunction = storage.get('commonFunction');
const commonFunction = () => {
	return storage.get('commonFunction');
};
export {
	baseUrl,
	commonFunction,
	modelatlasUrl
};
