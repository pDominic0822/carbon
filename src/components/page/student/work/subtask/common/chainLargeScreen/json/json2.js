/*
 * @Author: your name
 * @Date: 2021-07-06 10:04:52
 * @LastEditTime: 2021-11-01 18:25:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blockchain_accounting2020d:\2021WebCode\blockChain_digitalCurrency1.0\src\components\page\student\work\json\json.js
 */

// 1、全部的点
const flowColorA = '#04FDFF';
const flowColorB = '#0FC5FF';
const flowColorC = '#FF3CFD';
const flowColorD = '#07FF7D';
export const flowOrderLine = {
	'orderA1': {
		// 商流
		'flowA': [
			// 现金采购
			// ----1、首钢起草合同-华茂签署合同（商流 信息流）
			{
				lineName: '起草合同', // 线的标题，跟业务相关
				namePoint: [20, 20],
				source: 'Org01Depart0300', // 起点
				target: 'Org03Depart0400', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '签署合同', // 线的标题，跟业务相关
				namePoint: [340, 220],
				source: 'Org03Depart0400', // 起点
				target: 'Org03Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '合同上链', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0401', // 起点
				target: 'Org01Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---2、首钢理财（资金流）
			{
				lineName: '购买理财', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0100', // 起点
				target: 'Org05Depart0103', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财回单', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0103', // 起点
				target: 'Org01Depart0103', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财赎回', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0103', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财到账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org01Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---3、华茂订单融资（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org03Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org03Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---4、华贸采购原材料（物流）
			{
				lineName: '原料采购', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0300', // 起点
				target: 'OtherDepart01', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '原料入库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart01', // 起点
				target: 'Org03Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---5、华贸发货-首钢收货（物流）
			{
				lineName: '原料出库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0200', // 起点
				target: 'Org03Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '物流运输', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0201', // 起点
				target: 'Org01Depart0200', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '原料入库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0200', // 起点
				target: 'Org01Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 6、首钢信用贷款（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org01Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org01Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 7、首钢付款-华茂收款（资金流）
			{
				lineName: '付款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0200', // 起点
				target: 'Org01Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '自动付款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0201', // 起点
				target: 'Org05Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '付款回单', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org01Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '货款到账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org03Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资还款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0100', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---8、首钢生产（物流）
			{
				lineName: '原料出库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0200', // 起点
				target: 'Org01Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '生产加工', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0201', // 起点
				target: 'Org01Depart0501', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 9、首钢入库（物流）
			{
				lineName: '成品入库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0501', // 起点
				target: 'Org01Depart0202', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '成品入库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0501', // 起点
				target: 'OtherDepart03', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 10、华茂开票-首钢收票（信息流）
			{
				lineName: '开具发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0100', // 起点
				target: 'OtherDepart02', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开票成功', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org03Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '接收发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org01Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// -------------区块链应收款采购
			// ----1、首钢起草合同-华茂签署合同（商流 信息流）
			{
				lineName: '起草合同', // 线的标题，跟业务相关
				namePoint: [20, 20],
				source: 'Org01Depart0300', // 起点
				target: 'Org03Depart0400', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '签署合同', // 线的标题，跟业务相关
				namePoint: [340, 220],
				source: 'Org03Depart0400', // 起点
				target: 'Org03Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '合同上链', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0401', // 起点
				target: 'Org01Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---2、首钢理财（资金流）
			{
				lineName: '购买理财', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0100', // 起点
				target: 'Org05Depart0103', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财回单', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0103', // 起点
				target: 'Org01Depart0103', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财赎回', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0103', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财到账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org01Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---3、华茂订单融资（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org03Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org03Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---4、华贸采购原材料（物流）
			{
				lineName: '原料采购', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0300', // 起点
				target: 'OtherDepart01', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '原料入库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart01', // 起点
				target: 'Org03Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---5、华贸发货-首钢收货（物流）
			{
				lineName: '原料出库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0200', // 起点
				target: 'Org03Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '物流运输', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0201', // 起点
				target: 'Org01Depart0200', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '原料入库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0200', // 起点
				target: 'Org01Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---6、首钢签发凭证（信息流）
			{
				lineName: '付款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0100', // 起点
				target: 'Org01Depart0104', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '签发凭证', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0104', // 起点
				target: 'Org01Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '凭证上链', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0101', // 起点
				target: 'Org03Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---7、首钢生产（物流）
			{
				lineName: '原料出库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0200', // 起点
				target: 'Org01Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '生产加工', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0201', // 起点
				target: 'Org01Depart0501', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 8、首钢入库（物流）
			{
				lineName: '成品入库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0501', // 起点
				target: 'Org01Depart0202', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '成品入库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0501', // 起点
				target: 'OtherDepart03', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---9、华茂应收融资（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org03Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org03Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 10、首钢付款-华茂收款（资金流）
			{
				lineName: '付款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0200', // 起点
				target: 'Org01Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '自动付款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0201', // 起点
				target: 'Org05Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '付款回单', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org01Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '货款到账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org03Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资还款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0100', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 11、华茂开票-首钢收票（信息流）
			{
				lineName: '开具发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0100', // 起点
				target: 'OtherDepart02', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开票成功', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org03Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '接收发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org01Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 直接收款（首钢-万联）
			// 1、首钢起草合同-万联签署合同（商流、信息流）
			{
				lineName: '起草合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0400', // 起点
				target: 'Org03Depart0300', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '签署合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0300', // 起点
				target: 'Org03Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '合同上链', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0301', // 起点
				target: 'Org01Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---2、万联理财（资金流）
			{
				lineName: '购买理财', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0103', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财回单', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0103', // 起点
				target: 'Org02Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财赎回', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0101', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财到账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 3、首钢发货-万联收货（物流）
			{
				lineName: '成品出库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0200', // 起点
				target: 'OtherDepart03', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '成品入库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart03', // 起点
				target: 'OtherDepart05', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 4、万联付款-首钢收款（资金流）
			{
				lineName: '付款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org02Depart0104', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '自动付款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0104', // 起点
				target: 'Org05Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '付款回单', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org01Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '货款到账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 5、首钢开票-首钢收票（信息流）
			{
				lineName: '开具发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0100', // 起点
				target: 'OtherDepart02', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开票成功', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org01Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '接收发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org02Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 预收全款（首钢-万联）
			// 1、首钢起草合同-万联签署合同（商流、信息流）
			{
				lineName: '起草合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0400', // 起点
				target: 'Org03Depart0300', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '签署合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0300', // 起点
				target: 'Org03Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '合同上链', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0301', // 起点
				target: 'Org01Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 2、万联保兑仓融资（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 3、万联付全款-首钢收全款（资金流）
			{
				lineName: '付款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org02Depart0104', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '自动付款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0104', // 起点
				target: 'Org05Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '付款回单', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org02Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '货款到账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org01Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 4、首钢发货-万联收货（物流）
			{
				lineName: '成品出库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0200', // 起点
				target: 'OtherDepart03', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '成品入库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart03', // 起点
				target: 'OtherDepart05', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 5、万联存货融资（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资还款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 6、首钢开票-首钢收票（信息流）
			{
				lineName: '开具发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0100', // 起点
				target: 'OtherDepart02', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开票成功', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org01Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '接收发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org02Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 预收定金（首钢-万联）
			// 1、首钢起草合同-万联签署合同（商流、信息流）
			{
				lineName: '起草合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0400', // 起点
				target: 'Org03Depart0300', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '签署合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0300', // 起点
				target: 'Org03Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '合同上链', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org03Depart0301', // 起点
				target: 'Org01Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 2、万联保兑仓融资（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 3、万联付订金-首钢收订金（资金流）
			{
				lineName: '付款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org02Depart0104', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '自动付款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0104', // 起点
				target: 'Org05Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '付款回单', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org02Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '货款到账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org01Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 4、首钢开票-首钢收票（信息流）
			{
				lineName: '开具发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0100', // 起点
				target: 'OtherDepart02', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开票成功', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org01Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '接收发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org02Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 5、首钢发货-万联收货（物流）
			{
				lineName: '成品出库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0200', // 起点
				target: 'OtherDepart03', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '成品入库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart03', // 起点
				target: 'OtherDepart05', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 6、万联存货融资（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资还款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 7、万联付尾款-首钢收尾款（资金流）
			{
				lineName: '付款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org02Depart0104', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '自动付款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0104', // 起点
				target: 'Org05Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '付款回单', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org02Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '货款到账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org01Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 8、首钢开票-首钢收票（信息流）
			{
				lineName: '开具发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org01Depart0100', // 起点
				target: 'OtherDepart02', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开票成功', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org01Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '接收发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org02Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 现金采购（建筑-万联）
			// 1、建筑起草合同-万联签署合同（商流、信息流）
			{
				lineName: '起草合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0300', // 起点
				target: 'Org02Depart0400', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '签署合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0400', // 起点
				target: 'Org02Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '合同上链', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0401', // 起点
				target: 'Org04Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---2、万联理财（资金流）
			{
				lineName: '购买理财', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0103', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财回单', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0103', // 起点
				target: 'Org02Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财赎回', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0101', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财到账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 3、万联订单融资（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 4、万联发货-建筑收货（物流）
			{
				lineName: '原料出库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0200', // 起点
				target: 'OtherDepart05', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '原料入库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart05', // 起点
				target: 'Org04Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 5、建筑信用贷款（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org04Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '付款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0100', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org04Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 6、建筑付款-万联收款（资金流）
			{
				lineName: '付款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0100', // 起点
				target: 'Org04Depart0104', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '自动付款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0104', // 起点
				target: 'Org05Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '付款回单', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org04Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '货款到账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资还款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 7、建筑建设（物流）
			{
				lineName: '原料出库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0200', // 起点
				target: 'Org04Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '施工建设', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0201', // 起点
				target: 'Org04Depart0501', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 8、建筑抵押贷款（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org04Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资还款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0100', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org04Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 9、万联开票-建筑收票（信息流）
			{
				lineName: '开具发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'OtherDepart02', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开票成功', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org02Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '接收发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org04Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 区块链应收款采购（建筑-万联）
			// 1、建筑起草合同-万联签署合同（商流、信息流）
			{
				lineName: '起草合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0300', // 起点
				target: 'Org02Depart0400', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '签署合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0400', // 起点
				target: 'Org02Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '合同上链', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0401', // 起点
				target: 'Org04Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// ---2、建筑理财（资金流）
			{
				lineName: '购买理财', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0100', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财回单', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org04Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财赎回', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0101', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '理财到账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org04Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 3、万联订单融资（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 4、万联发货-建筑收货（物流）
			{
				lineName: '原料出库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0200', // 起点
				target: 'OtherDepart05', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '原料入库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart05', // 起点
				target: 'Org04Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 5、建筑签发凭证（信息流）
			{
				lineName: '付款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0100', // 起点
				target: 'Org04Depart0104', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '签发凭证', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0104', // 起点
				target: 'Org04Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '凭证上链', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0101', // 起点
				target: 'Org02Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 6、万联应收融资（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 7、建筑建设（物流）
			{
				lineName: '原料出库', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0200', // 起点
				target: 'Org04Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '施工建设', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0201', // 起点
				target: 'Org04Depart0501', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 8、建筑抵押贷款（资金流）
			{
				lineName: '融资申请', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0100', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资初审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0201', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资终审', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0201', // 起点
				target: 'Org05Depart0301', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资合同', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0301', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '还款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org05Depart0401', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开立账户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0401', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资放款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org04Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '预警规则', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0100', // 起点
				target: 'Org05Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷中监控', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0402', // 起点
				target: 'Org05Depart0102', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '贷后催收', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0102', // 起点
				target: 'Org04Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 9、建筑付款-万联收款（资金流）
			{
				lineName: '付款合约', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0100', // 起点
				target: 'Org04Depart0104', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '自动付款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0104', // 起点
				target: 'Org05Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '付款回单', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org04Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '货款到账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0101', // 起点
				target: 'Org02Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '融资还款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'Org05Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 10、万联开票-建筑收票（信息流）
			{
				lineName: '开具发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org02Depart0100', // 起点
				target: 'OtherDepart02', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开票成功', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org02Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '接收发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org04Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 直接收款（建筑-万联）
			// 1、建筑销售商品房（商流、信息流）
			{
				lineName: '销售商品房', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0401', // 起点
				target: 'Org04Depart0402', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '房产过户', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0402', // 起点
				target: 'OtherDepart04', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '支付房款', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart04', // 起点
				target: 'Org05Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '销售入账', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org05Depart0100', // 起点
				target: 'Org04Depart0100', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			// 2、建筑开票-消费者收票（信息流）
			{
				lineName: '开具发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'Org04Depart0100', // 起点
				target: 'OtherDepart02', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '开票成功', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'Org04Depart0101', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			},
			{
				lineName: '接收发票', // 线的标题，跟业务相关
				namePoint: [540, 620],
				source: 'OtherDepart02', // 起点
				target: 'OtherDepart04', // 终点
				color: flowColorA, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			}
		],
		// 资金流
		'flowB': [
			{
				lineName: '购买原材料1', // 线的标题，跟业务相关
				namePoint: [440, 910],
				source: 'Org03Depart0300', // 起点
				target: 'Org01Depart0200', // 终点
				color: flowColorB, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			}
		],
		// 信息流
		'flowC': [
			{
				lineName: '购买原材料1', // 线的标题，跟业务相关
				namePoint: [430, 530],
				source: 'Org02Depart0400', // 起点
				target: 'Org01Depart0101', // 终点
				color: flowColorC, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			}
		],
		// 物流
		'flowD': [
			{
				lineName: '购买原材料2', // 线的标题，跟业务相关
				namePoint: [44, 420],
				source: 'Org01Depart0102', // 起点
				target: 'Org02Depart0401', // 终点
				color: flowColorD, // 线的颜色
				flowType: ['flowA'], // 属于那个流类型
				curveness: 0.4 // 线的弧度
			}
		]
	},
	'orderA2': {
		'flowA': [
		]
	}
};
