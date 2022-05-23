/*
 * @Author: zhangln
 * @LastEditors: Please set LastEditors
 * @Date: 2018-12-14 20:33:08
 * @LastEditTime: 2021-12-18 16:30:13
 */
import Vue from 'vue';
import moment from 'moment';
import { FunpageCode, FieldCodeArr } from '@/filter/ruleCodeArr';
import { formatSecond } from '_@/js/utils';

/**
 * 数字大写 格式化 1 => 一
 * 显示
 */

Vue.filter('numToCharacter', (value) => {
	let characterArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十'];
	return characterArr[value];
});

/**
 * iconfont
 * 显示
 */

Vue.filter('toIcon', (value) => {
	let icon = [
		'icon-huoyue1',
		'icon-daochuchengji',
		'icon-dati1',
		'icon-chengguo',
		'icon-cailizhi1',
		'icon-huoyuezhi',
		'icon-jiaoyichi',
		'icon-piliangpingfen'
	];
	return icon[value];
});

/**
 * 通过数值，产生加减乘除
 * 显示
 */
Vue.filter('filterNum', (value) => {
	let ruleCodeArr = {
		0: '+',
		1: '-',
		2: '*',
		3: '/'
	};
	return ruleCodeArr[value] || value;
});

/**
 * 通过合约类型，显示合约规则
 * 显示
 */

Vue.filter('typeTableName', (value) => {
	let ruleCodeArr = FunpageCode;
	return ruleCodeArr[value] || value;
});

/**
 * 通过合约类型，显示合约规则
 * 显示
 */

Vue.filter('fieldCode', (value, tableType, params, fieldCode) => {
	let fieldCodeArr = FieldCodeArr;
	let map = fieldCodeArr[tableType];
	if (params === 'fieldName') { // 展示横轴项目名称
		return (map[value] && map[value].fieldName) || value;
	}
	if (params === 'rowName') {
		return (map[fieldCode] && map[fieldCode][value]) || value;
	}
});

/**
 * 格式化时间
 */

Vue.filter('formatTime', (value, opera = '-') => {
	if (!value) {
		return false;
	}
	return new Date(value).getFullYear() + opera + (new Date(value).getMonth() + 1) + opera + new Date(value).getDate();
});

/**
 * 格式化时间
 */

Vue.filter('formatTime2', (value, opera = '-') => {
	if (!value) {
		return false;
	}
	return new Date(value).getTime();
});

/**
 * 格式化时间 月-日  时:分:秒
 */

Vue.filter('secondTime', (value) => {
	if (!value) {
		return 0;
	}
	return moment(value).format('MM-DD HH:mm:ss');
});
/**
 * 格式化时间 时:分:秒
 */
Vue.filter('secondTime3', (value) => {
	if (!value) {
		return 0;
	}
	return moment(value).format('HH:mm:ss');
});
/**
 * 格式化时间 年-月-日  时:分:秒
 */

Vue.filter('secondTime1', (value) => {
	if (!value) {
		return 0;
	}
	return moment(value).format('YYYY-MM-DD HH:mm:ss');
});

Vue.filter('datadddd', (value) => {
	if (!value) {
		return 0;
	}
	return moment(value).format('dddd');
});

/**
 * 格式化时间 年-月-日
 */

Vue.filter('secondTime2', (value) => {
	if (!value) {
		return 0;
	}
	return moment(value).format('YYYY-MM-DD');
});

Vue.filter('secondTime3', (value) => {
	if (!value) {
		return 0;
	}
	return moment(value).format('YYYY年MM月DD日');
});

/**
 * 将数值四舍五入后格式化.
 * @param num 数值(Number或者String)
 * @param cent 要保留的小数位(Number)
 * @param isThousand 是否需要千分位 0:不需要,1:需要  (数值类型);
 * @return 格式的字符串,如'1,234,567.45'
 * @type String
 */

Vue.filter('formatNumber', (num) => {
	if (num === 0) {
		return 0.00;
	}
	if (!num && num !== 0) {
		return '';
	}
	let cent = 2;
	let isThousand = 1;
	num = parseFloat(num);
	num = num.toString().replace(/\$|,/g, '');
	// 检查传入数值为数值类型
	if (isNaN(num)) {
		num = '0';
	}

	// 获取符号(正/负数)
	let sign = (Number(num) === Number((num = Math.abs(num))));
	num = Math.floor(num * Math.pow(10, cent) + 0.50000000001); // 把指定的小数位先转换成整数.多余的小数位四舍五入
	let cents = num % Math.pow(10, cent); // 求出小数位数值
	num = Math.floor(num / Math.pow(10, cent)).toString(); // 求出整数位数值
	cents = cents.toString(); // 把小数位转换成字符串,以便求小数位长度

	// 补足小数位到指定的位数
	while (cents.length < cent) {
		cents = '0' + cents;
	}

	if (isThousand) {
		// 对整数部分进行千分位格式化.
		for (let i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
			num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
		}
	}

	if (cent > 0) {
		return (((sign) ? '' : '-') + num + '.' + cents);
	} else {
		return (((sign) ? '' : '-') + num);
	}
});

/**
 * 将人民币金额转换为大写 同时支持小数、负数
 * @param    {string}  price 金额小写，不带人民币符号
 * @return   {string} 转换后的大写人民币
 */

Vue.filter('convertPrice', (price) => {
	console.log(price);
	if (!price) {
		return;
	}
	if (isNaN(Math.abs(price))) {
		throw new Error('你确定你传递的是金额？');
	}
	let fraction = ['角', '分'];
	let digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
	let unit = [
		['元', '万', '亿'],
		['', '拾', '佰', '仟']
	];
	let head = price < 0 ? '欠' : '';
	price = Math.abs(price);
	let s = '';
	for (let i = 0; i < fraction.length; i++) {
		s += (digit[Math.floor(price * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
	}
	s = s || '整';
	price = Math.floor(price);
	for (let i = 0; i < unit[0].length && price > 0; i++) {
		let p = '';
		for (let j = 0; j < unit[1].length && price > 0; j++) {
			p = digit[price % 10] + unit[1][j] + p;
			price = Math.floor(price / 10);
		}
		s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
	}
	return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
});

/**
 * 手机号加 *
 */

Vue.filter('hiddenPhone', (value) => {
	if (!value) {
		return false;
	}
	return value.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
});

/**
 * 倒计时
 */

Vue.filter('countTimeDown', (t) => {
	t = parseFloat(t);
	return formatSecond(t);
});

/**
 * 单数变双数
 */

Vue.filter('ToEven', (value) => {
	if (!value) {
		return false;
	}
	return value > 9 ? value : '0' + value;
});

/**
 * 分数变为等级
 */

Vue.filter('toGrade', (value) => {
	let grade = '';
	if (value < 60) {
		grade = 'C';
	} else if (value < 80) {
		grade = 'B';
	} else {
		grade = 'A';
	}
	return grade;
});

Vue.filter('DateToNum', (time) => {
	var date = new Date(parseInt(time));
	let Y = date.getFullYear() + '-';
	let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	let D = date.getDate() + ' ';
	let h = date.getHours() + ':';
	let m = date.getMinutes() + ':';
	let s = date.getSeconds();
	return Y + M + D + h + m + s;
});

// 注册一个全局自定义指令 `v-drag`
Vue.directive('drag', {
	// 指令的定义
	bind: (el) => {
		// console.dir(Vue);
		Vue.nextTick(() => {
			var odiv = el; // 获取当前元素
			// console.dir(odiv);
			let parentNode = odiv.parentNode;
			// console.dir(parentNode);
			odiv.onmousedown = (e) => {
				// console.dir(e);
				// 算出鼠标相对元素的位置
				let disX = e.clientX - parentNode.offsetLeft;
				let disY = e.clientY - parentNode.offsetTop;
				document.onmousemove = (e) => {
					// 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
					let left = e.clientX - disX;
					let top = e.clientY - disY;
					// 绑定元素位置到positionX和positionY上面
					// 移动当前元素
					parentNode.style.left = left + 'px';
					parentNode.style.top = top + 'px';
				};
				document.onmouseup = (e) => {
					document.onmousemove = null;
					document.onmouseup = null;
				};
			};
		});
	}
});

// 注册一个全局自定义指令 `v-htmlNum`, 只能输入数字
Vue.directive('htmlNum', {
	// 指令的定义
	bind: (el, binding, vnode) => {
		console.log(el);
		console.log(binding);
		console.log(vnode);
	}
});

Vue.directive('focus', {
	// 当被绑定的元素插入到 DOM 中时……
	inserted: (el) => {
		// 聚焦元素
		// console.log(el);
		el.focus();
	}
});
