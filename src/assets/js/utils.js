/*
 * @Author: zhangln
 * @Date: 2019-07-24 15:36:40
 * @Description: 33
 */
/**
 * 使用utils ，在vue文件填写下面代码
 * import { isObject } from '_@/js/utils';
 */
let sha256 = require('js-sha256').sha256;
let md5 = require('js-md5');
// 判断目标是否为对象
export const isObject = target => Object.prototype.toString.call(target).slice(8, -1) === 'Object';
// 判断是否为字符串
export const isString = target => typeof target === 'string';
// 判断是否为数值
export const isNumber = target => typeof target === 'number';
// 判断是否为null
export const isNull = target => Object.prototype.toString.call(target).slice(8, -1) === 'Null';
// 判断是否为undefined
export const isUndefined = target => Object.prototype.toString.call(target).slice(8, -1) === 'Undefined';
// 判断是否为数组
export const isArray = target => Object.prototype.toString.call(target).slice(8, -1) === 'Array';
// 判断是否为布尔值
export const isBool = target => Object.prototype.toString.call(target).slice(8, -1) === 'Boolean';
// 判断一个对象是否为空对象（即无可枚举的属性）
export const isEmpty = target => {
	if (isNull(target)) {
		return true;
	}
	return !Object.keys(target).length;
};

export const md5Num = function (Num) {
	return md5(Num);
};

// 上链转码数据转码
export const buffJson = function (scoreJson) {
	let data = scoreJson;
	var d = JSON.stringify(data);
	var te = new TextEncoder();
	var dbuff = te.encode(d);
	var darr = [];
	dbuff.forEach(function (n) {
		return darr.push(String.fromCharCode(n));
	});
	return btoa(darr.join(''));
};

// 上链解码
export const formDecode = function (msg) {
	let b = atob(msg).split('').map(w => w.charCodeAt(0));
	let uint8Array = new Uint8Array(b);
	return new TextDecoder().decode(uint8Array);
};

export const _isObjNull = (obj) => {
	// if (!obj) {
	// 	return true;
	// }
	if (Object.prototype.toString.call(obj) !== '[object Object]') {
		return 'Type Error';
	}
	console.log(Object.keys(obj).length === 0);
	return Object.keys(obj).length === 0;
};

// encodeUnicode 编码
export const encodeUnicode = (str) => {
	let res = [];
	for (let i = 0; i < str.length; i++) {
		res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4);
	}
	return '\\u' + res.join('\\u');
};

/*
*	根据长度，随机获取相应字符串
*/
export const getLString = function (len) {
	len = len || 6;
	len = parseInt(len, 10);
	len = isNaN(len) ? 6 : len;
	var seed = 'abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ';
	var seedLen = seed.length - 1;
	var uuid = '';
	while (len--) {
		uuid += seed[Math.round(Math.random() * seedLen)];
	}
	return uuid;
};

/*
*	根据长度，随机获取相应字符串
*/
export const getSmallString = function (len) {
	len = len || 6;
	len = parseInt(len, 10);
	len = isNaN(len) ? 6 : len;
	var seed = 'abcdefghijklmnopqrstubwxyz';
	var seedLen = seed.length - 1;
	var uuid = '';
	while (len--) {
		uuid += seed[Math.round(Math.random() * seedLen)];
	}
	return uuid;
};

// 上传文件校验格式使用
export const validFileFormat = (file, formatList) => {
	if (!isArray(formatList)) {
		throw new Error('格式列表参数必须为数组');
	}
	let suffix = file.name.split('.')[file.name.split('.').length - 1].toLocaleLowerCase();
	if (formatList.indexOf(suffix) === -1) {
		return false;
	}
	return true;
};

// 使用localStorage
export const storage = {
	set: (key, value) => {
		if (isObject(value) || isArray(value)) {
			value = JSON.stringify(value);
		};
		localStorage.setItem(key, value);
	},
	get: (key) => {
		return localStorage.getItem(key) || '';
	},
	remove: (key) => {
		localStorage.removeItem(key);
	},
	clear: () => {
		localStorage.clear();
	},
	self: () => {
		return localStorage;
	}
};

// 使用sessionStorage
export const store = {
	set: (key, value) => {
		if (isObject(value) || isArray(value)) {
			value = JSON.stringify(value);
		};
		sessionStorage.setItem(key, value);
	},
	get: (key) => {
		return sessionStorage.getItem(key);
	},
	remove: (key) => {
		sessionStorage.removeItem(key);
	},
	clear: () => {
		sessionStorage.clear();
	},
	self: () => {
		return sessionStorage;
	}
};

/**
 * 将数值四舍五入后格式化.
 * @param num 数值(Number或者String)
 * @param cent 要保留的小数位(Number)
 * @param isThousand 是否需要千分位 0:不需要,1:需要  (数值类型);
 * @return 格式的字符串,如'1,234,567.45'
 * @type String
 */
export const formatNumber = (num, cent, isThousand) => {
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
};

/**
 * @type String
 * 去除千分位/字符串类型转化为数字类型.
 * 如'1,234,567.45' 转化为 ‘1234567.45’
 * 如'1213444,444' 转化为 1213444,444’
 * @return 格式的数字类型,
 */
export const delcommafy = (num) => {
	if ((num + '').trim() === '') {
		return '';
	}
	return parseFloat(num.replace(/,/gi, ''));
};

/**
 * 补位字符串
 * @param {string}  str 需要补位的字符串
 * @param {number}  len 补位后字符串的长度（即你想补位后的字符串的长度，不是需要补位的长度）
 *                     比如 a -> aaaaa，补了4个a，但是len值应该为5，而不是4
 * @param {string}  location 在什么地方补位（前 或 后） before | after , 如果不传递默认在字符串后补位
 * @param {string}  value 用什么来补位字符串
 * @return {string}  补位后的字符串
 */
export const fillString = (str, len, value, location = 'after') => {
	if (!isString(str)) {
		str = String(str);
	}
	if (!len || !isNumber(len)) {
		throw new Error('补位后字符串的长度没有传递或类型不正确');
	}
	if (!isString(value)) {
		throw new Error('补位的字符必须是字符串类型');
	}
	if (location === 'after') {
		return str.padEnd(len, value);
	} else {
		return str.padStart(len, value);
	}
};

/**
 * 浮点值的运算-加法
 */
export const accAdd = (arg1, arg2) => {
	var r1, r2, m;
	try {
		r1 = arg1.toString().split('.')[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = arg2.toString().split('.')[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	return (arg1 * m + arg2 * m) / m;
};

/**
 * 浮点值的运算-减法
 */
export const accSub = (arg1, arg2) => {
	var r1, r2, m, n;
	try {
		r1 = arg1.toString().split('.')[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = arg2.toString().split('.')[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	// last modify by deeka
	// 动态控制精度长度
	n = (r1 >= r2) ? r1 : r2;
	return ((arg1 * m - arg2 * m) / m).toFixed(n);
};

/**
 * 浮点值的运算-乘法
 */

export const accMul = (arg1, arg2) => {
	var m = 0;
	var s1 = arg1.toString();
	var s2 = arg2.toString();
	try {
		m += s1.split('.')[1].length;
	} catch (e) { }
	try {
		m += s2.split('.')[1].length;
	} catch (e) { }
	return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
};

/**
 * 浮点值的运算-除法
 */

export const accDiv = (arg1, arg2) => {
	var t1 = 0;
	var t2 = 0;
	var r1, r2;
	try {
		t1 = arg1.toString().split('.')[1].length;
	} catch (e) { }
	try {
		t2 = arg2.toString().split('.')[1].length;
	} catch (e) { }
	r1 = Number(arg1.toString().replace('.', ''));
	r2 = Number(arg2.toString().replace('.', ''));
	return (r1 / r2) * Math.pow(10, t2 - t1);
};

/**
 * 将一个字符串转换为千分位格式
 * @param {string} str 需要转换的字符串
 * @param {string}  currency 货币符号，默认为空
 * @return   {string}     转换后的值
 */

export const toThousand = (str, currency = '') => {
	if (!isString(str)) {
		throw new Error('需要转换的对象必须是字符串类型');
	}
	let reg = /(?=(?!(\b))(\d{3})+$)/g;
	str = currency + str.replace(reg, ',');
	return str;
};

/**
 * 将一个时间戳转换为可读的日期方式
 * @param    {number}  date 时间戳
 * @param    {string} type 默认既包含日期也包含时间 date_time, date, time
 * @param {string} character 格式化间隔符号 [-, /, false]如果传递false则返回xxxx年xx月xx日
 * @return   {string}       格式化后的日期  2018-01-31 15:01:02 || 2018-01-31 || 15:01:02
 */

export const formatDate = (timeStamp, type = 'date_time', character = '-') => {
	// if (!isNumber(timeStamp) && String(timeStamp).length !== 13) {
	// 	throw new Error('值不是一个正确的时间戳');
	// }
	// if ((['-', '/', false].indexOf(character) === -1)) {
	// 	throw new Error('间隔符号不支持');
	// }
	let group = {
		y: new Date(timeStamp).getFullYear(),
		m: fillString(new Date(timeStamp).getMonth() + 1, 2, '0', 'before'),
		d: fillString(new Date(timeStamp).getDate(), 2, '0', 'before'),
		h: fillString(new Date(timeStamp).getHours(), 2, '0', 'before'),
		mi: fillString(new Date(timeStamp).getMinutes(), 2, '0', 'before'),
		s: fillString(new Date(timeStamp).getSeconds(), 2, '0', 'before')
	};
	if (type === 'date_time') {
		return character ? `${group.y}${character}${group.m}${character}${group.d} ${group.h}:${group.mi}:${group.s}` : `${group.y}年${group.m}月${group.d}日 ${group.h}:${group.mi}:${group.s}`;
	} else if (type === 'date') {
		return character ? `${group.y}${character}${group.m}${character}${group.d}` : `${group.y}年${group.m}月${group.d}日`;
	} else if (type === 'time') {
		return `${group.h}:${group.mi}:${group.s}`;
	}
};

/**
 * 将手机号码中间替换为星号 *
 * @param    {string} phoneNumber 手机号码字符串
 * @return   {string} 替换后的手机号码
 */

export const formatPhone = phoneNumber => {
	// phoneNumber = phoneNumber.toString().trim();
	// let phone = Number(phoneNumber);
	// if (isNaN(phone) || phoneNumber.length !== 11) {
	// 	throw new Error('不是手机号码');
	// }
	return String(phoneNumber).replace(/(\d{3})\d{4}(\d{3})/, '$1****$2');
};

/**
 * 将人民币金额转换为大写 同时支持小数、负数
 * @param    {string}  price 金额小写，不带人民币符号
 * @return   {string} 转换后的大写人民币
 */

export const convertPrice = price => {
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
};

/**
 * 设置 cookie 值的函数
 */

export const setCookie = (cname, cvalue, exdays) => {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = 'expires=' + d.toGMTString();
	document.cookie = cname + '=' + encodeURIComponent(cvalue) + '; ' + expires;
};

/**
 * 获取 cookie 值的函数
 */
export const getCookie = (cname) => {
	var name = cname + '=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) === 0) return decodeURIComponent(c.substring(name.length, c.length));
	}
	return '';
};

// 将秒转换为时分秒
export const formatSecond = (second) => {
	let s = parseInt(second); // 秒
	let m = 0; // 分
	let h = 0; // 小时
	if (s > 60) {
		m = parseInt(s / 60);
		s = parseInt(s % 60);
		if (m > 60) {
			h = parseInt(m / 60);
			m = parseInt(m % 60);
		}
	}
	m = m < 10 ? `0${m}` : m;
	s = s < 10 ? `0${s}` : s;
	h = h < 10 ? `0${h}` : h;
	let result = h + ':' + m + ':' + s;
	return result;
};

// 结算时间
export const upDataTime = (t) => {
	let dateBegin = new Date(t);
	let dateEnd = new Date();
	let dateDiff = dateBegin.getTime() - dateEnd.getTime();
	let leave1 = dateDiff % (24 * 3600 * 1000);
	let leave2 = leave1 % (3600 * 1000);
	let minutes = Math.floor(leave2 / (60 * 1000));
	if (minutes >= 1) {
		minutes = 1;
	}
	let leave3 = leave2 % (60 * 1000);
	let seconds = Math.round(leave3 / 1000);
	return `${minutes} : ${seconds}`;
};

// 当前日期到选择的日期的天数
export const upDataTimeDay = (t) => {
	if (!t) {
		return '';
	}
	let dateBegin = new Date(t);
	let dateEnd = new Date();
	let dateDiff = dateBegin.getTime() - dateEnd.getTime();
	console.log(dateDiff / (1000 * 60 * 60 * 24));
	let leave1 = parseInt(dateDiff / (1000 * 60 * 60 * 24) + 1);
	return `${leave1}`;
};

export const everyFuntion = (val) => {
	if (isArray(val)) {
		return val.length > 0;
	};
	if (isObject(val)) {
		let everyArr = [];
		if (JSON.stringify(val) === '{}') {
			return false;
		} else {
			for (let i in val) {
				if (!val[i]) {
					everyArr.push(0);
				} else {
					everyArr.push(1);
				}
			};
			let Result = everyArr.includes(0);
			return !Result;
		}
	}
};
export const shaNum = function (Num) {
	Num = Num + '';
	console.log(Num);
	return sha256(Num);
};

/*
	len 生成随机字符+数字的 = 字符长度。
	如：len = 5 ,生成kskf2
*/
export const getUUID = function (len) {
	len = len || 6;
	len = parseInt(len, 10);
	len = isNaN(len) ? 6 : len;
	var seed = '0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ';
	var seedLen = seed.length - 1;
	var uuid = '';
	while (len--) {
		uuid += seed[Math.round(Math.random() * seedLen)];
	}
	return new Date().getTime() + uuid + new Date().getTime();
};

/*
	len 生成随机字符+数字的 = 字符长度。
	如：len = 5 ,生成kskf2
*/
export const getRandom = function (len) {
	len = len || 6;
	len = parseInt(len, 10);
	len = isNaN(len) ? 6 : len;
	var seed = '0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ';
	var seedLen = seed.length - 1;
	var uuid = '';
	while (len--) {
		uuid += seed[Math.round(Math.random() * seedLen)];
	}
	return uuid;
};

/*
* icon 索引
*/
export const iconIndex = function (value) {
	let icon = {
		0: 'icon-icon-test4',
		1: 'icon-icon-test3',
		2: 'icon-icon-test2',
		3: 'icon-jinrongkeji1',
		4: 'icon-icon-test1',
		5: 'icon-jinrongkeji',
		6: 'icon-rengongzhineng1',
		7: 'icon-huobifuhao',
		8: 'icon-baasqukuailianfuwu',
		9: 'icon-jingjizengjiazhi',
		10: 'icon-rengongzhineng',
		11: 'icon-yunpan',
		12: 'icon-icon-',
		13: 'icon-chengxuxinxi',
		14: 'icon-huaxiangfenxi',
		15: 'icon-neishenjihua',
		16: 'icon-jiankong',
		17: 'icon-text09',
		18: 'icon-zhuanxierizhi',
		19: 'icon-text08',
		20: 'icon-chuantongshouyi'
	};
	return icon[value] || 'icon-text08';
};

/*
* icon 索引
*/
export const iconIndex2 = function (value) {
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
	return icon[value] || 'icon-text08';
};

let _debounceTimeout = null;
export const debounce = (fn, delay = 500) => {
	clearTimeout(_debounceTimeout);
	_debounceTimeout = setTimeout(() => {
		fn();
	}, delay);
};

let _throttleRunning = false;
export const throttle = (fn, delay = 500) => {
	if (_throttleRunning) {
		return;
	}
	_throttleRunning = true;
	fn();
	setTimeout(() => {
		_throttleRunning = false;
	}, delay);
};
