/*
 * @Author: your name
 * @Date: 2021-07-06 10:04:52
 * @LastEditTime: 2021-11-01 16:44:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blockchain_accounting2020d:\2021WebCode\blockChain_digitalCurrency1.0\src\components\page\student\work\json\json.js
 */
// 1、全部的点
const flowColorA = '#04FDFF';
const flowColorB = '#0FC5FF';
const flowColorC = '#FF3CFD';
const flowColorD = '#07FF7D';
const flowColorE = '#FF5D2C';
export const allPoint = {
	'OtherDepart01': {
		Org: 'N级供应商',
		OrgType: 'Org06',
		Depart: 'N级供应商',
		color: flowColorC,
		curveness: 0.9,
		value: [1735, 877]
	},
	'OtherDepart02': {
		Org: '税务局',
		OrgType: 'Org06',
		Depart: '税务局',
		color: flowColorB,
		curveness: 0.9,
		value: [1819, 383]
	},
	'OtherDepart03': {
		Org: '第三方仓储中心',
		OrgType: 'Org06',
		Indy: '仓储部',
		Depart: '第三方仓储中心',
		color: flowColorA,
		curveness: 0.9,
		value: [244, 580]
	},
	'OtherDepart04': {
		Org: '消费者',
		OrgType: 'Org06',
		Depart: '消费者',
		color: flowColorA,
		curveness: 0.9,
		value: [1025, 183]
	},
	// 'OtherDepart05': {
	// 	Org: '北京万联商贸有限公司',
	// 	OrgType: 'Org06',
	// 	Indy: '仓储部',
	// 	Depart: '新增（万联第三方仓储中心）',
	// 	color: flowColorB,
	// 	curveness: 0.9,
	// 	value: [1323, 67]
	// },
	'Org01Depart0104': {
		Org: '中国首钢集团',
		OrgType: 'Org06',
		Indy: '财务部',
		Depart: '合约中心',
		color: flowColorA,
		curveness: 0.9,
		value: [675, 776]
	},
	'Org02Depart0104': {
		Org: '北京万联商贸有限公司',
		OrgType: 'Org06',
		Indy: '财务部',
		Depart: '合约中心',
		color: flowColorB,
		curveness: 0.9,
		value: [1915, 597]
	},
	'Org03Depart0104': {
		Org: '北京华贸钢铁有限公司',
		OrgType: 'Org06',
		Indy: '财务部',
		Depart: '合约中心',
		color: flowColorC,
		curveness: 0.9,
		value: [1015, 814]
	},
	'Org04Depart0104': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org06',
		Indy: '财务部',
		Depart: '合约中心',
		color: flowColorD,
		curveness: 0.9,
		value: [1644, 213]
	},
	'Org01Depart0100': {
		Org: '中国首钢集团',
		OrgType: 'Org01',
		Depart: '财务部',
		color: flowColorA,
		curveness: 0.9,
		value: [378, 944]
	},
	'Org01Depart0101': {
		Org: '中国首钢集团',
		OrgType: 'Org01',
		Indy: '财务部',
		Depart: '票据中心',
		color: flowColorA,
		curveness: 0.9,
		value: [454, 902]
	},
	'Org01Depart0102': {
		Org: '中国首钢集团',
		OrgType: 'Org01',
		Indy: '财务部',
		Depart: '融资中心',
		color: flowColorA,
		curveness: 0.9,
		value: [528, 859]
	},
	'Org01Depart0103': {
		Org: '中国首钢集团',
		OrgType: 'Org01',
		Indy: '财务部',
		Depart: '理财中心',
		color: flowColorA,
		curveness: 0.9,
		value: [599, 818]
	},
	'Org01Depart0200': {
		Org: '中国首钢集团',
		OrgType: 'Org01',
		Indy: '仓储部',
		Depart: '仓储部',
		color: flowColorA,
		curveness: 0.9,
		value: [405, 780]
	},
	'Org01Depart0201': {
		Org: '中国首钢集团',
		OrgType: 'Org01',
		Indy: '仓储部',
		Depart: '原材料库存中心',
		color: flowColorA,
		curveness: 0.9,
		value: [474, 748]
	},
	'Org01Depart0202': {
		Org: '中国首钢集团',
		OrgType: 'Org01',
		Indy: '仓储部',
		Depart: '产成品库存中心',
		color: flowColorA,
		curveness: 0.9,
		value: [552, 705]
	},
	'Org01Depart0300': {
		Org: '中国首钢集团',
		OrgType: 'Org01',
		Depart: '采购部',
		color: flowColorA,
		curveness: 0.9,
		value: [355, 664]
	},
	'Org01Depart0301': {
		Org: '中国首钢集团',
		OrgType: 'Org01',
		Indy: '采购部',
		Depart: '票据中心',
		color: flowColorA,
		curveness: 0.9,
		value: [426, 631]
	},
	'Org01Depart0400': {
		Org: '中国首钢集团',
		OrgType: 'Org01',
		Depart: '销售部',
		color: flowColorA,
		curveness: 0.9,
		value: [609, 521]
	},
	'Org01Depart0401': {
		Org: '中国首钢集团',
		OrgType: 'Org01',
		Indy: '销售部',
		Depart: '票据中心',
		color: flowColorA,
		curveness: 0.9,
		value: [680, 493]
	},
	'Org01Depart0500': {
		Org: '中国首钢集团',
		OrgType: 'Org01',
		Depart: '生产部',
		color: flowColorA,
		curveness: 0.9,
		value: [731, 594]
	},
	'Org01Depart0501': {
		Org: '中国首钢集团',
		OrgType: 'Org01',
		Indy: '生产部',
		Depart: '生产车间',
		color: flowColorA,
		curveness: 0.9,
		value: [805, 560]
	},
	'Org02Depart0100': {
		Org: '北京万联商贸有限公司',
		OrgType: 'Org02',
		Indy: '财务部',
		Depart: '财务部',
		color: flowColorB,
		curveness: 0.9,
		value: [1613, 770]
	},
	'Org02Depart0101': {
		Org: '北京万联商贸有限公司',
		OrgType: 'Org02',
		Indy: '财务部',
		Depart: '票据中心',
		color: flowColorB,
		curveness: 0.9,
		value: [1686, 726]
	},
	'Org02Depart0102': {
		Org: '北京万联商贸有限公司',
		OrgType: 'Org02',
		Indy: '财务部',
		Depart: '融资中心',
		color: flowColorB,
		curveness: 0.9,
		value: [1767, 683]
	},
	'Org02Depart0103': {
		Org: '北京万联商贸有限公司',
		OrgType: 'Org02',
		Indy: '财务部',
		Depart: '理财中心',
		color: flowColorB,
		curveness: 0.9,
		value: [1838, 637]
	},
	'Org02Depart0200': {
		Org: '北京万联商贸有限公司',
		OrgType: 'Org02',
		Indy: '仓储部',
		Depart: '仓储部',
		color: flowColorB,
		curveness: 0.9,
		value: [1727, 559]
	},
	'Org02Depart0201': {
		Org: '北京万联商贸有限公司',
		OrgType: 'Org02',
		Indy: '仓储部',
		Depart: '原材料库存中心',
		color: flowColorB,
		curveness: 0.9,
		value: [1793, 522]
	},
	'Org02Depart0300': {
		Org: '北京万联商贸有限公司',
		OrgType: 'Org02',
		Indy: '采购部',
		Depart: '采购部',
		color: flowColorB,
		curveness: 0.9,
		value: [1493, 689]
	},
	'Org02Depart0400': {
		Org: '北京万联商贸有限公司',
		OrgType: 'Org02',
		Indy: '销售部',
		Depart: '销售部',
		color: flowColorB,
		curveness: 0.9,
		value: [1609, 487]
	},
	'Org02Depart0401': {
		Org: '北京万联商贸有限公司',
		OrgType: 'Org02',
		Indy: '销售部',
		Depart: '票据中心',
		color: flowColorB,
		curveness: 0.9,
		value: [1682, 451]
	},
	'Org03Depart0100': {
		Org: '北京华贸钢铁有限公司',
		OrgType: 'Org03',
		Indy: '财务部',
		Depart: '财务部',
		color: flowColorC,
		curveness: 0.9,
		value: [724, 982]
	},
	'Org03Depart0101': {
		Org: '北京华贸钢铁有限公司',
		OrgType: 'Org03',
		Indy: '财务部',
		Depart: '票据中心',
		color: flowColorC,
		curveness: 0.9,
		value: [794, 937]
	},
	'Org03Depart0102': {
		Org: '北京华贸钢铁有限公司',
		OrgType: 'Org03',
		Indy: '财务部',
		Depart: '融资中心',
		color: flowColorC,
		curveness: 0.9,
		value: [869, 892]
	},
	'Org03Depart0103': {
		Org: '北京华贸钢铁有限公司',
		OrgType: 'Org03',
		Indy: '财务部',
		Depart: '理财中心',
		color: flowColorC,
		curveness: 0.9,
		value: [940, 854]
	},
	'Org03Depart0200': {
		Org: '北京华贸钢铁有限公司',
		OrgType: 'Org03',
		Indy: '仓储部',
		Depart: '仓储部',
		color: flowColorC,
		curveness: 0.9,
		value: [1218, 859]
	},
	'Org03Depart0201': {
		Org: '北京华贸钢铁有限公司',
		OrgType: 'Org03',
		Indy: '仓储部',
		Depart: '原材料库存中心',
		color: flowColorC,
		curveness: 0.9,
		value: [1289, 827]
	},
	'Org03Depart0300': {
		Org: '北京华贸钢铁有限公司',
		OrgType: 'Org03',
		Indy: '采购部',
		Depart: '采购部',
		color: flowColorC,
		curveness: 0.9,
		value: [1453, 981]
	},
	'Org03Depart0301': {
		Org: '北京华贸钢铁有限公司',
		OrgType: 'Org03',
		Indy: '采购部',
		Depart: '票据中心',
		color: flowColorC,
		curveness: 0.9,
		value: [1520, 945]
	},
	'Org03Depart0400': {
		Org: '北京华贸钢铁有限公司',
		OrgType: 'Org03',
		Indy: '销售部',
		Depart: '销售部',
		color: flowColorC,
		curveness: 0.9,
		value: [1342, 921]
	},
	'Org03Depart0401': {
		Org: '北京华贸钢铁有限公司',
		OrgType: 'Org03',
		Indy: '销售部',
		Depart: '票据中心',
		color: flowColorC,
		curveness: 0.9,
		value: [1406, 884]
	},
	'Org04Depart0100': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org04',
		Depart: '财务部',
		color: flowColorD,
		curveness: 0.9,
		value: [1342, 387]
	},
	'Org04Depart0101': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org04',
		Indy: '财务部',
		Depart: '票据中心',
		color: flowColorD,
		curveness: 0.9,
		value: [1414, 345]
	},
	'Org04Depart0102': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org04',
		Indy: '财务部',
		Depart: '融资中心',
		color: flowColorD,
		curveness: 0.9,
		value: [1491, 297]
	},
	'Org04Depart0103': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org04',
		Indy: '财务部',
		Depart: '理财中心',
		color: flowColorD,
		curveness: 0.9,
		value: [1566, 253]
	},
	'Org04Depart0200': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org04',
		Indy: '仓储部',
		Depart: '仓储部',
		color: flowColorD,
		curveness: 0.9,
		value: [986, 423]
	},
	'Org04Depart0201': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org04',
		Indy: '仓储部',
		Depart: '原材料库存中心',
		color: flowColorD,
		curveness: 0.9,
		value: [1057, 386]
	},
	'Org04Depart0300': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org04',
		Indy: '采购部',
		Depart: '采购部',
		color: flowColorD,
		curveness: 0.9,
		value: [1123, 228]
	},
	'Org04Depart0301': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org04',
		Indy: '采购部',
		Depart: '票据中心',
		color: flowColorD,
		curveness: 0.9,
		value: [1204, 192]
	},
	'Org04Depart0400': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org04',
		Indy: '销售部',
		Depart: '销售部',
		color: flowColorD,
		curveness: 0.9,
		value: [1228, 297]
	},
	'Org04Depart0401': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org04',
		Indy: '销售部',
		Depart: '票据中心',
		color: flowColorD,
		curveness: 0.9,
		value: [1296, 265]
	},
	'Org04Depart0402': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org04',
		Indy: '销售部',
		Depart: '销售楼盘',
		color: flowColorD,
		curveness: 0.9,
		value: [1379, 220]
	},
	'Org04Depart0500': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org04',
		Indy: '建设部',
		Depart: '建设部',
		color: flowColorD,
		curveness: 0.9,
		value: [872, 358]
	},
	'Org04Depart0501': {
		Org: '北京建筑股份有限公司',
		OrgType: 'Org04',
		Indy: '建设部',
		Depart: '建筑工地',
		color: flowColorD,
		curveness: 0.9,
		value: [952, 323]
	},
	'Org05Depart0100': {
		Org: '中国银行股份有限公司',
		OrgType: 'Org05',
		Indy: '对公业务部',
		Depart: '对公业务部',
		color: flowColorE,
		curveness: 0.9,
		value: [77, 401]
	},
	'Org05Depart0101': {
		Org: '中国银行股份有限公司',
		OrgType: 'Org05',
		Indy: '对公业务部',
		Depart: '票据管理中心',
		color: flowColorE,
		curveness: 0.9,
		value: [155, 371]
	},
	'Org05Depart0102': {
		Org: '中国银行股份有限公司',
		OrgType: 'Org05',
		Indy: '对公业务部',
		Depart: '融资管理中心',
		color: flowColorE,
		curveness: 0.9,
		value: [230, 332]
	},
	'Org05Depart0103': {
		Org: '中国银行股份有限公司',
		OrgType: 'Org05',
		Indy: '对公业务部',
		Depart: '理财管理中心',
		color: flowColorE,
		curveness: 0.9,
		value: [302, 288]
	},
	'Org05Depart0200': {
		Org: '中国银行股份有限公司',
		OrgType: 'Org05',
		Indy: '合规审核部',
		Depart: '合规审核部',
		color: flowColorE,
		curveness: 0.9,
		value: [568, 131]
	},
	'Org05Depart0201': {
		Org: '中国银行股份有限公司',
		OrgType: 'Org05',
		Indy: '合规审核部',
		Depart: '资质管理中心',
		color: flowColorE,
		curveness: 0.9,
		value: [641, 90]
	},
	'Org05Depart0300': {
		Org: '中国银行股份有限公司',
		OrgType: 'Org05',
		Indy: '信贷评审部',
		Depart: '信贷评审部',
		color: flowColorE,
		curveness: 0.9,
		value: [697, 209]
	},
	'Org05Depart0301': {
		Org: '中国银行股份有限公司',
		OrgType: 'Org05',
		Indy: '信贷评审部',
		Depart: '风控管理中心',
		color: flowColorE,
		curveness: 0.9,
		value: [770, 169]
	},
	'Org05Depart0400': {
		Org: '中国银行股份有限公司',
		OrgType: 'Org05',
		Indy: '金融科技部',
		Depart: '金融科技部',
		color: flowColorE,
		curveness: 0.9,
		value: [276, 451]
	},
	'Org05Depart0401': {
		Org: '中国银行股份有限公司',
		OrgType: 'Org05',
		Indy: '金融科技部',
		Depart: '合约管理中心',
		color: flowColorE,
		curveness: 0.9,
		value: [347, 411]
	},
	'Org05Depart0402': {
		Org: '中国银行股份有限公司',
		OrgType: 'Org05',
		Indy: '金融科技部',
		Depart: '大数据管理中心',
		color: flowColorE,
		curveness: 0.9,
		value: [424, 364]
	}
};
