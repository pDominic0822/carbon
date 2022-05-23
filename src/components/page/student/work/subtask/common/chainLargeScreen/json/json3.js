/*
 * @Author: your name
 * @Date: 2021-07-06 10:04:52
 * @LastEditTime: 2021-11-01 18:46:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blockchain_accounting2020d:\2021WebCode\blockChain_digitalCurrency1.0\src\components\page\student\work\json\json.js
 */

/***
 * =============
flowA 商流
flowB 资金流
flowC 信息流
flowD 物流
 */

// const flowColorA = '#04FDFF';
// const flowColorB = '#0FC5FF';
// const flowColorC = '#FF3CFD';
// const flowColorD = '#07FF7D';
export const flowOTaskLine = {
	// 现金采购
	'orderA1': [
	// ----1、首钢起草合同-华茂签署合同（商流 信息流）
		{
			taskName: '1.首钢起草合同-华茂签署合同', // 业务名称
			fromPoint: 'Org01Depart0300', // 应该放到哪个点
			pointList: [
				{
					lineName: '1-1.起草合同', // 线的标题，跟业务相关
					namePoint: [732, 117],
					source: 'Org01Depart0300', // 起点
					target: 'Org03Depart0400', // 终点

					flowType: ['flowA', 'flowc'], // 属于那个流类型
					curveness: 0.2 // 线的弧度
				},
				{
					lineName: '1-2.签署合同', // 线的标题，跟业务相关
					namePoint: [1361, 83],
					source: 'Org03Depart0400', // 起点
					target: 'Org03Depart0401', // 终点

					flowType: ['flowA', 'flowc'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-3.合同上链', // 线的标题，跟业务相关
					namePoint: [1016, 398],
					source: 'Org03Depart0401', // 起点
					target: 'Org01Depart0301', // 终点

					flowType: ['flowA', 'flowc'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		//  ---2、首钢理财（资金流）
		{
			taskName: '2.首钢理财', // 业务名称
			fromPoint: 'Org01Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '2-1.购买理财', // 线的标题，跟业务相关
					namePoint: [291, 356],
					source: 'Org01Depart0100', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-2.理财回单', // 线的标题，跟业务相关
					namePoint: [211, 281],
					source: 'Org05Depart0100', // 起点
					target: 'Org01Depart0103', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-3.理财赎回', // 线的标题，跟业务相关
					namePoint: [454, 416],
					source: 'Org01Depart0103', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-4.理财到账', // 线的标题，跟业务相关
					namePoint: [93, 224],
					source: 'Org05Depart0100', // 起点
					target: 'Org01Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// ---3、华茂订单融资（资金流）
		{
			taskName: '3.华茂订单融资', // 业务名称
			fromPoint: 'Org03Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '3-1.融资申请', // 线的标题，跟业务相关
					namePoint: [619, 337],
					source: 'Org03Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-2.融资初审', // 线的标题，跟业务相关
					namePoint: [426, 701],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-5.还款合约', // 线的标题，跟业务相关
					namePoint: [243, 590],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-6.开立账户', // 线的标题，跟业务相关
					namePoint: [98, 623],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-7.融资放款', // 线的标题，跟业务相关
					namePoint: [169, 301],
					source: 'Org05Depart0100', // 起点
					target: 'Org03Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-8.预警规则', // 线的标题，跟业务相关
					namePoint: [561, 526],
					source: 'Org03Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-9.贷中监控', // 线的标题，跟业务相关
					namePoint: [297, 681],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-10.贷后催收', // 线的标题，跟业务相关
					namePoint: [325, 221],
					source: 'Org05Depart0102', // 起点
					target: 'Org03Depart0100', // 终点
					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		//  ---4、华贸采购原材料（物流）
		{
			taskName: '4.华贸采购原材料', // 业务名称
			fromPoint: 'Org03Depart0300', // 应该放到哪个点
			pointList: [
				{
					lineName: '4-1.原料采购', // 线的标题，跟业务相关
					namePoint: [1595, 18],
					source: 'Org03Depart0300', // 起点
					target: 'OtherDepart01', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-2.原料入库', // 线的标题，跟业务相关
					namePoint: [1370, 221],
					source: 'OtherDepart01', // 起点
					target: 'Org03Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		//  ---5、华贸发货-首钢收货（物流）
		{
			taskName: '5.华贸发货-首钢收货', // 业务名称
			fromPoint: 'Org03Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '5-1.原料出库', // 线的标题，跟业务相关
					namePoint: [1233, 128],
					source: 'Org03Depart0200', // 起点
					target: 'Org03Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-2.物流运输', // 线的标题，跟业务相关
					namePoint: [986, 338],
					source: 'Org03Depart0201', // 起点
					target: 'Org01Depart0200', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-3.原料入库', // 线的标题，跟业务相关
					namePoint: [424, 207],
					source: 'Org01Depart0200', // 起点
					target: 'Org01Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 6、首钢信用贷款（资金流）
		{
			taskName: '6.首钢信用贷款', // 业务名称
			fromPoint: 'Org01Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '6-1.融资申请', // 线的标题，跟业务相关
					namePoint: [393, 428],
					source: 'Org01Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-2.融资初审', // 线的标题，跟业务相关
					namePoint: [432, 695],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-5.还款合约', // 线的标题，跟业务相关
					namePoint: [247, 611],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-6.开立账户', // 线的标题，跟业务相关
					namePoint: [153, 638],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-7.融资放款', // 线的标题，跟业务相关
					namePoint: [83, 265],
					source: 'Org05Depart0100', // 起点
					target: 'Org01Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-8.预警规则', // 线的标题，跟业务相关
					namePoint: [483, 367],
					source: 'Org01Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-9.贷中监控', // 线的标题，跟业务相关
					namePoint: [299, 680],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-10.贷后催收', // 线的标题，跟业务相关
					namePoint: [154, 354],
					source: 'Org05Depart0102', // 起点
					target: 'Org01Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 7、首钢付款-华茂收款（资金流）
		{
			taskName: '首钢付款-华茂收款', // 业务名称
			fromPoint: 'Org01Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '7-1.付款合约', // 线的标题，跟业务相关
					namePoint: [428, 224],
					source: 'Org01Depart0200', // 起点
					target: 'Org01Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '7-2.自动付款', // 线的标题，跟业务相关
					namePoint: [376, 428],
					source: 'Org01Depart0201', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '7-3.付款回单', // 线的标题，跟业务相关
					namePoint: [102, 604],
					source: 'Org05Depart0100', // 起点
					target: 'Org05Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '7-4.付款回单', // 线的标题，跟业务相关
					namePoint: [137, 344],
					source: 'Org05Depart0101', // 起点
					target: 'Org01Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '7-5.货款到账', // 线的标题，跟业务相关
					namePoint: [181, 153],
					source: 'Org05Depart0100', // 起点
					target: 'Org03Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.5 // 线的弧度
				},
				{
					lineName: '7-6.融资还款', // 线的标题，跟业务相关
					namePoint: [564, 359],
					source: 'Org03Depart0100', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// ---8、首钢生产（物流）
		{
			taskName: '8.首钢生产', // 业务名称
			fromPoint: 'Org01Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '8-1.原料出库', // 线的标题，跟业务相关
					namePoint: [432, 191],
					source: 'Org01Depart0200', // 起点
					target: 'Org01Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-2.生产加工', // 线的标题，跟业务相关
					namePoint: [652, 267],
					source: 'Org01Depart0201', // 起点
					target: 'Org01Depart0501', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 9、首钢入库（物流）
		{
			taskName: '9.首钢入库', // 业务名称
			fromPoint: 'Org01Depart0501', // 应该放到哪个点
			pointList: [
				{
					lineName: '9-1.成品入库', // 线的标题，跟业务相关
					namePoint: [575, 373],
					source: 'Org01Depart0501', // 起点
					target: 'Org01Depart0202', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-2.成品入库', // 线的标题，跟业务相关
					namePoint: [362, 497],
					source: 'Org01Depart0501', // 起点
					target: 'OtherDepart03', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 10、华茂开票-首钢收票（信息流）
		{
			taskName: '10.华茂开票-首钢收票', // 业务名称
			fromPoint: 'Org03Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '10-1.开具发票', // 线的标题，跟业务相关
					namePoint: [1395, 200],
					source: 'Org03Depart0100', // 起点
					target: 'OtherDepart02', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.3// 线的弧度
				},
				{
					lineName: '10-2.开票成功', // 线的标题，跟业务相关
					namePoint: [1010, 433],
					source: 'OtherDepart02', // 起点
					target: 'Org03Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '10-3.接收发票', // 线的标题，跟业务相关
					namePoint: [784, 502],
					source: 'OtherDepart02', // 起点
					target: 'Org01Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		}
	],
	// 区块链应收款采购
	'orderA2': [
	// ----1、首钢起草合同-华茂签署合同（商流 信息流）
		{
			taskName: '1.首钢起草合同-华茂签署合同', // 业务名称
			fromPoint: 'Org01Depart0300', // 应该放到哪个点
			pointList: [
				{
					lineName: '1-1.起草合同', // 线的标题，跟业务相关
					namePoint: [732, 117],
					source: 'Org01Depart0300', // 起点
					target: 'Org03Depart0400', // 终点

					flowType: ['flowA', 'flowc'], // 属于那个流类型
					curveness: 0.2 // 线的弧度
				},
				{
					lineName: '1-2.签署合同', // 线的标题，跟业务相关
					namePoint: [1361, 83],
					source: 'Org03Depart0400', // 起点
					target: 'Org03Depart0401', // 终点

					flowType: ['flowA', 'flowc'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-3.合同上链', // 线的标题，跟业务相关
					namePoint: [1016, 398],
					source: 'Org03Depart0401', // 起点
					target: 'Org01Depart0301', // 终点

					flowType: ['flowA', 'flowc'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		//  ---2、首钢理财（资金流）
		{
			taskName: '2.首钢理财', // 业务名称
			fromPoint: 'Org01Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '2-1.购买理财', // 线的标题，跟业务相关
					namePoint: [291, 356],
					source: 'Org01Depart0100', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-2.理财回单', // 线的标题，跟业务相关
					namePoint: [211, 281],
					source: 'Org05Depart0100', // 起点
					target: 'Org01Depart0103', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-3.理财赎回', // 线的标题，跟业务相关
					namePoint: [454, 416],
					source: 'Org01Depart0103', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-4.理财到账', // 线的标题，跟业务相关
					namePoint: [93, 224],
					source: 'Org05Depart0100', // 起点
					target: 'Org01Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// ---3、华茂订单融资（资金流）
		{
			taskName: '3.华茂订单融资', // 业务名称
			fromPoint: 'Org03Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '3-1.融资申请', // 线的标题，跟业务相关
					namePoint: [619, 337],
					source: 'Org03Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-2.融资初审', // 线的标题，跟业务相关
					namePoint: [426, 701],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-5.还款合约', // 线的标题，跟业务相关
					namePoint: [243, 590],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-6.开立账户', // 线的标题，跟业务相关
					namePoint: [98, 623],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-7.融资放款', // 线的标题，跟业务相关
					namePoint: [169, 301],
					source: 'Org05Depart0100', // 起点
					target: 'Org03Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-8.预警规则', // 线的标题，跟业务相关
					namePoint: [561, 526],
					source: 'Org03Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-9.贷中监控', // 线的标题，跟业务相关
					namePoint: [297, 681],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-10.贷后催收', // 线的标题，跟业务相关
					namePoint: [325, 221],
					source: 'Org05Depart0102', // 起点
					target: 'Org03Depart0100', // 终点
					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		//  ---4、华贸采购原材料（物流）
		{
			taskName: '4.华贸采购原材料', // 业务名称
			fromPoint: 'Org03Depart0300', // 应该放到哪个点
			pointList: [
				{
					lineName: '4-1.原料采购', // 线的标题，跟业务相关
					namePoint: [1595, 18],
					source: 'Org03Depart0300', // 起点
					target: 'OtherDepart01', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-2.原料入库', // 线的标题，跟业务相关
					namePoint: [1370, 221],
					source: 'OtherDepart01', // 起点
					target: 'Org03Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		//  ---5、华贸发货-首钢收货（物流）
		{
			taskName: '5.华贸发货-首钢收货', // 业务名称
			fromPoint: 'Org03Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '5-1.原料出库', // 线的标题，跟业务相关
					namePoint: [1233, 128],
					source: 'Org03Depart0200', // 起点
					target: 'Org03Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-2.物流运输', // 线的标题，跟业务相关
					namePoint: [986, 338],
					source: 'Org03Depart0201', // 起点
					target: 'Org01Depart0200', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-3.原料入库', // 线的标题，跟业务相关
					namePoint: [424, 207],
					source: 'Org01Depart0200', // 起点
					target: 'Org01Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// ---6、首钢签发凭证（信息流）
		{
			taskName: '6.首钢签发凭证', // 业务名称
			fromPoint: 'Org01Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '6-1.付款合约', // 线的标题，跟业务相关
					namePoint: [520, 72],
					source: 'Org01Depart0100', // 起点
					target: 'Org01Depart0104', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-2.签发凭证', // 线的标题，跟业务相关
					namePoint: [474, 163],
					source: 'Org01Depart0104', // 起点
					target: 'Org01Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-3.凭证上链', // 线的标题，跟业务相关
					namePoint: [561, 14],
					source: 'Org01Depart0101', // 起点
					target: 'Org03Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 7、首钢生产（物流）
		{
			taskName: '7.首钢付款-华茂收款', // 业务名称
			fromPoint: 'Org01Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '7-1.原料出库', // 线的标题，跟业务相关
					namePoint: [393, 196],
					source: 'Org01Depart0200', // 起点
					target: 'Org01Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '7-2.生产加工', // 线的标题，跟业务相关
					namePoint: [652, 267],
					source: 'Org01Depart0201', // 起点
					target: 'Org01Depart0501', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 8、首钢入库（物流）
		{
			taskName: '8.首钢入库', // 业务名称
			fromPoint: 'Org01Depart0501', // 应该放到哪个点
			pointList: [
				{
					lineName: '8-1.成品入库', // 线的标题，跟业务相关
					namePoint: [571, 369],
					source: 'Org01Depart0501', // 起点
					target: 'Org01Depart0202', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-2.成品入库', // 线的标题，跟业务相关
					namePoint: [382, 513],
					source: 'Org01Depart0501', // 起点
					target: 'OtherDepart03', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// ---9、华茂应收融资（资金流）
		{
			taskName: '9.华茂应收融资', // 业务名称
			fromPoint: 'Org03Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '9-1.融资申请', // 线的标题，跟业务相关
					namePoint: [634, 293],
					source: 'Org03Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-2.融资初审', // 线的标题，跟业务相关
					namePoint: [451, 732],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-5.还款合约', // 线的标题，跟业务相关
					namePoint: [247, 611],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-6.开立账户', // 线的标题，跟业务相关
					namePoint: [92, 629],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-7.融资放款', // 线的标题，跟业务相关
					namePoint: [147, 298],
					source: 'Org05Depart0100', // 起点
					target: 'Org03Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-8.预警规则', // 线的标题，跟业务相关
					namePoint: [561, 526],
					source: 'Org03Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-9.贷中监控', // 线的标题，跟业务相关
					namePoint: [352, 660],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-10.贷后催收', // 线的标题，跟业务相关
					namePoint: [306, 256],
					source: 'Org05Depart0102', // 起点
					target: 'Org03Depart0100', // 终点
					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 10、首钢付款-华茂收款（资金流)
		{
			taskName: '10.首钢入库首钢付款-华茂收款', // 业务名称
			fromPoint: 'Org01Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '10-1.付款合约', // 线的标题，跟业务相关
					namePoint: [428, 224],
					source: 'Org01Depart0200', // 起点
					target: 'Org01Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '10-2.自动付款', // 线的标题，跟业务相关
					namePoint: [376, 428],
					source: 'Org01Depart0201', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '10-3.付款回单', // 线的标题，跟业务相关
					namePoint: [102, 604],
					source: 'Org05Depart0100', // 起点
					target: 'Org05Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '10-4.付款回单', // 线的标题，跟业务相关
					namePoint: [137, 344],
					source: 'Org05Depart0101', // 起点
					target: 'Org01Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '10-5.货款到账', // 线的标题，跟业务相关
					namePoint: [181, 153],
					source: 'Org05Depart0100', // 起点
					target: 'Org03Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.5 // 线的弧度
				},
				{
					lineName: '10-6.融资还款', // 线的标题，跟业务相关
					namePoint: [564, 359],
					source: 'Org03Depart0100', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 11、华茂开票-首钢收票（信息流）
		{
			taskName: '11.华茂开票-首钢收票', // 业务名称
			fromPoint: 'Org03Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '11-1.开具发票', // 线的标题，跟业务相关
					namePoint: [1082, 110],
					source: 'Org03Depart0100', // 起点
					target: 'OtherDepart02', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.2 // 线的弧度
				},
				{
					lineName: '11-2.开票成功', // 线的标题，跟业务相关
					namePoint: [979, 410],
					source: 'OtherDepart02', // 起点
					target: 'Org03Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '11-3.接收发票', // 线的标题，跟业务相关
					namePoint: [771, 505],
					source: 'OtherDepart02', // 起点
					target: 'Org01Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		}
	],
	// 直接收款（首钢-万联）
	'orderB1': [
		// 1、首钢起草合同-万联签署合同（商流、信息流）
		{
			taskName: '1.首钢起草合同-万联签署合同', // 业务名称
			fromPoint: 'Org01Depart0400', // 应该放到哪个点
			pointList: [
				{
					lineName: '1-1.起草合同', // 线的标题，跟业务相关
					namePoint: [780, 155],
					source: 'Org01Depart0400', // 起点
					target: 'Org03Depart0300', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-2.签署合同', // 线的标题，跟业务相关
					namePoint: [1471, 23],
					source: 'Org03Depart0300', // 起点
					target: 'Org03Depart0301', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-3.合同上链', // 线的标题，跟业务相关
					namePoint: [1209, 408],
					source: 'Org03Depart0301', // 起点
					target: 'Org01Depart0401', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// ---2、万联理财（资金流）
		{
			taskName: '2.万联理财', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '2-1.购买理财', // 线的标题，跟业务相关
					namePoint: [1232, 561],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-2.理财回单', // 线的标题，跟业务相关
					namePoint: [827, 119],
					source: 'Org05Depart0100', // 起点
					target: 'Org02Depart0103', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-3.理财赎回', // 线的标题，跟业务相关
					namePoint: [1055, 810],
					source: 'Org02Depart0103', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-4.理财到账', // 线的标题，跟业务相关
					namePoint: [671, 104],
					source: 'Org05Depart0100', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 3、首钢发货-万联收货（物流）
		{
			taskName: '3.首钢发货-万联收货', // 业务名称
			fromPoint: 'Org01Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '3-1.成品出库', // 线的标题，跟业务相关
					namePoint: [325, 340],
					source: 'Org01Depart0200', // 起点
					target: 'OtherDepart03', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-2.成品出库', // 线的标题，跟业务相关
					namePoint: [475, 242],
					source: 'Org01Depart0200', // 起点
					target: 'Org01Depart0202', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-3.成品入库', // 线的标题，跟业务相关
					namePoint: [476, 361],
					source: 'Org01Depart0202', // 起点
					target: 'OtherDepart03', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-4.成品入库', // 线的标题，跟业务相关
					namePoint: [817, 158],
					source: 'Org01Depart0202', // 起点
					target: 'Org02Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 4、万联付款-首钢收款（资金流）
		{
			taskName: '4.万联付款-首钢收款', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '4-1.付款合约', // 线的标题，跟业务相关
					namePoint: [1764, 255],
					source: 'Org02Depart0100', // 起点
					target: 'Org02Depart0104', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-2.自动付款', // 线的标题，跟业务相关
					namePoint: [1271, 794],
					source: 'Org02Depart0104', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-3.付款回单', // 线的标题，跟业务相关
					namePoint: [99, 598],
					source: 'Org05Depart0100', // 起点
					target: 'Org05Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-4.付款回单', // 线的标题，跟业务相关
					namePoint: [224, 230],
					source: 'Org05Depart0101', // 起点
					target: 'Org01Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-5.货款到账', // 线的标题，跟业务相关
					namePoint: [692, 114],
					source: 'Org05Depart0100', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 5、首钢开票-首钢收票（信息流）
		{
			taskName: '5.首钢开票-首钢收票', // 业务名称
			fromPoint: 'Org01Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '5-1.开具发票', // 线的标题，跟业务相关
					namePoint: [1081, 176],
					source: 'Org01Depart0100', // 起点
					target: 'OtherDepart02', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.2 // 线的弧度
				},
				{
					lineName: '5-2.开票成功', // 线的标题，跟业务相关
					namePoint: [786, 507],
					source: 'OtherDepart02', // 起点
					target: 'Org01Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-3.接收发票', // 线的标题，跟业务相关
					namePoint: [1650, 376],
					source: 'OtherDepart02', // 起点
					target: 'Org02Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		}
	],
	// 预收全款（首钢-万联）
	'orderB2': [
	// 1、首钢起草合同-万联签署合同（商流、信息流）
		{
			taskName: '1.首钢起草合同-万联签署合同', // 业务名称
			fromPoint: 'Org01Depart0400', // 应该放到哪个点
			pointList: [
				{
					lineName: '1-1.起草合同', // 线的标题，跟业务相关
					namePoint: [795, 157],
					source: 'Org01Depart0400', // 起点
					target: 'Org03Depart0300', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-2.签署合同', // 线的标题，跟业务相关
					namePoint: [1477, 25],
					source: 'Org03Depart0300', // 起点
					target: 'Org03Depart0301', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-3.合同上链', // 线的标题，跟业务相关
					namePoint: [1238, 400],
					source: 'Org03Depart0301', // 起点
					target: 'Org01Depart0401', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 2、万联保兑仓融资（资金流）
		{
			taskName: '2.万联保兑仓融资', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '2-1.融资申请', // 线的标题，跟业务相关
					namePoint: [879, 735],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-2.融资初审', // 线的标题，跟业务相关
					namePoint: [451, 732],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-5.还款合约', // 线的标题，跟业务相关
					namePoint: [247, 611],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-6.开立账户', // 线的标题，跟业务相关
					namePoint: [92, 629],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-7.融资放款', // 线的标题，跟业务相关
					namePoint: [675, 106],
					source: 'Org05Depart0100', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-8.预警规则', // 线的标题，跟业务相关
					namePoint: [766, 693],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-9.贷中监控', // 线的标题，跟业务相关
					namePoint: [352, 660],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-10.贷后催收', // 线的标题，跟业务相关
					namePoint: [768, 174],
					source: 'Org05Depart0102', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 3、万联付全款-首钢收全款（资金流）
		{
			taskName: '3.万联付全款-首钢收全款', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '3-1.付款合约', // 线的标题，跟业务相关
					namePoint: [1764, 255],
					source: 'Org02Depart0100', // 起点
					target: 'Org02Depart0104', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-2.自动付款', // 线的标题，跟业务相关
					namePoint: [1271, 794],
					source: 'Org02Depart0104', // 起点
					target: 'Org05Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-3.付款回单', // 线的标题，跟业务相关
					namePoint: [99, 598],
					source: 'Org05Depart0100', // 起点
					target: 'Org05Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-4.付款回单', // 线的标题，跟业务相关
					namePoint: [785, 144],
					source: 'Org05Depart0101', // 起点
					target: 'Org02Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-5.货款到账', // 线的标题，跟业务相关
					namePoint: [128, 211],
					source: 'Org05Depart0100', // 起点
					target: 'Org01Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 4、首钢发货-万联收货（物流）
		{
			taskName: '4.首钢发货-万联收货', // 业务名称
			fromPoint: 'Org01Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '4-1.成品出库', // 线的标题，跟业务相关
					namePoint: [325, 340],
					source: 'Org01Depart0200', // 起点
					target: 'OtherDepart03', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-2.成品出库', // 线的标题，跟业务相关
					namePoint: [475, 242],
					source: 'Org01Depart0200', // 起点
					target: 'Org01Depart0202', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-3.成品入库', // 线的标题，跟业务相关
					namePoint: [476, 361],
					source: 'Org01Depart0202', // 起点
					target: 'OtherDepart03', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-4.成品入库', // 线的标题，跟业务相关
					namePoint: [817, 158],
					source: 'Org01Depart0202', // 起点
					target: 'Org02Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 5、万联存货融资（资金流）
		{
			taskName: '5、万联存货融资', // 业务名称
			fromPoint: 'Org01Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '5-1.融资申请', // 线的标题，跟业务相关
					namePoint: [879, 735],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-2.融资初审', // 线的标题，跟业务相关
					namePoint: [451, 732],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-5.还款合约', // 线的标题，跟业务相关
					namePoint: [247, 611],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-6.开立账户', // 线的标题，跟业务相关
					namePoint: [92, 629],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-7.融资放款', // 线的标题，跟业务相关
					namePoint: [675, 106],
					source: 'Org05Depart0100', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-8.融资还款', // 线的标题，跟业务相关
					namePoint: [919, 788],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.5 // 线的弧度
				},
				{
					lineName: '5-9.预警规则', // 线的标题，跟业务相关
					namePoint: [766, 693],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-10.贷中监控', // 线的标题，跟业务相关
					namePoint: [352, 660],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-11.贷后催收', // 线的标题，跟业务相关
					namePoint: [768, 174],
					source: 'Org05Depart0102', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 6、首钢开票-首钢收票（信息流）
		{
			taskName: '6.首钢开票-首钢收票', // 业务名称
			fromPoint: 'Org01Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '6-1.开具发票', // 线的标题，跟业务相关
					namePoint: [1081, 176],
					source: 'Org01Depart0100', // 起点
					target: 'OtherDepart02', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.2 // 线的弧度
				},
				{
					lineName: '6-2.开票成功', // 线的标题，跟业务相关
					namePoint: [786, 507],
					source: 'OtherDepart02', // 起点
					target: 'Org01Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-3.接收发票', // 线的标题，跟业务相关
					namePoint: [1650, 376],
					source: 'OtherDepart02', // 起点
					target: 'Org02Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		}
	],
	// 预收定金（首钢-万联）
	'orderB3': [
		// 1、首钢起草合同-万联签署合同（商流、信息流）
		{
			taskName: '1.首钢起草合同-万联签署合同', // 业务名称
			fromPoint: 'Org01Depart0400', // 应该放到哪个点
			pointList: [
				{
					lineName: '1-1.起草合同', // 线的标题，跟业务相关
					namePoint: [795, 157],
					source: 'Org01Depart0400', // 起点
					target: 'Org03Depart0300', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-2.签署合同', // 线的标题，跟业务相关
					namePoint: [1477, 25],
					source: 'Org03Depart0300', // 起点
					target: 'Org03Depart0301', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-3.合同上链', // 线的标题，跟业务相关
					namePoint: [1238, 400],
					source: 'Org03Depart0301', // 起点
					target: 'Org01Depart0401', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 2、万联保兑仓融资（资金流）
		{
			taskName: '2.万联保兑仓融资', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '2-1.融资申请', // 线的标题，跟业务相关
					namePoint: [879, 735],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-2.融资初审', // 线的标题，跟业务相关
					namePoint: [451, 732],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-5.还款合约', // 线的标题，跟业务相关
					namePoint: [247, 611],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-6.开立账户', // 线的标题，跟业务相关
					namePoint: [92, 629],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-7.融资放款', // 线的标题，跟业务相关
					namePoint: [675, 106],
					source: 'Org05Depart0100', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-8.预警规则', // 线的标题，跟业务相关
					namePoint: [766, 693],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-9.贷中监控', // 线的标题，跟业务相关
					namePoint: [352, 660],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-10.贷后催收', // 线的标题，跟业务相关
					namePoint: [768, 174],
					source: 'Org05Depart0102', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 3、万联付全款-首钢收全款（资金流）
		{
			taskName: '3.万联付全款-首钢收全款', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '3-1.付款合约', // 线的标题，跟业务相关
					namePoint: [1764, 255],
					source: 'Org02Depart0100', // 起点
					target: 'Org02Depart0104', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-2.自动付款', // 线的标题，跟业务相关
					namePoint: [1271, 794],
					source: 'Org02Depart0104', // 起点
					target: 'Org05Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-3.付款回单', // 线的标题，跟业务相关
					namePoint: [99, 598],
					source: 'Org05Depart0100', // 起点
					target: 'Org05Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-4.付款回单', // 线的标题，跟业务相关
					namePoint: [785, 144],
					source: 'Org05Depart0101', // 起点
					target: 'Org02Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-5.货款到账', // 线的标题，跟业务相关
					namePoint: [128, 211],
					source: 'Org05Depart0100', // 起点
					target: 'Org01Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 4、首钢开票-首钢收票（信息流）
		{
			taskName: '4.首钢开票-首钢收票', // 业务名称
			fromPoint: 'Org01Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '4-1.开具发票', // 线的标题，跟业务相关
					namePoint: [1081, 176],
					source: 'Org01Depart0100', // 起点
					target: 'OtherDepart02', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.2 // 线的弧度
				},
				{
					lineName: '4-2.开票成功', // 线的标题，跟业务相关
					namePoint: [786, 507],
					source: 'OtherDepart02', // 起点
					target: 'Org01Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-3.接收发票', // 线的标题，跟业务相关
					namePoint: [1650, 376],
					source: 'OtherDepart02', // 起点
					target: 'Org02Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 5、首钢发货-万联收货（物流）
		{
			taskName: '5.首钢发货-万联收货', // 业务名称
			fromPoint: 'Org01Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '5-1.成品出库', // 线的标题，跟业务相关
					namePoint: [325, 340],
					source: 'Org01Depart0200', // 起点
					target: 'OtherDepart03', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-2.成品出库', // 线的标题，跟业务相关
					namePoint: [475, 242],
					source: 'Org01Depart0200', // 起点
					target: 'Org01Depart0202', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-3.成品入库', // 线的标题，跟业务相关
					namePoint: [476, 361],
					source: 'Org01Depart0202', // 起点
					target: 'OtherDepart03', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-4.成品入库', // 线的标题，跟业务相关
					namePoint: [817, 158],
					source: 'Org01Depart0202', // 起点
					target: 'Org02Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 6、万联存货融资（资金流）
		{
			taskName: '6.万联存货融资', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '6-1.融资申请', // 线的标题，跟业务相关
					namePoint: [879, 735],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-2.融资初审', // 线的标题，跟业务相关
					namePoint: [451, 732],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-5.还款合约', // 线的标题，跟业务相关
					namePoint: [247, 611],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-6.开立账户', // 线的标题，跟业务相关
					namePoint: [92, 629],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-7.融资放款', // 线的标题，跟业务相关
					namePoint: [675, 106],
					source: 'Org05Depart0100', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-8.融资还款', // 线的标题，跟业务相关
					namePoint: [919, 788],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.5 // 线的弧度
				},
				{
					lineName: '6-9.预警规则', // 线的标题，跟业务相关
					namePoint: [766, 693],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-10.贷中监控', // 线的标题，跟业务相关
					namePoint: [352, 660],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-11.贷后催收', // 线的标题，跟业务相关
					namePoint: [768, 174],
					source: 'Org05Depart0102', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 7、万联付尾款-首钢收尾款（资金流）
		{
			taskName: '7.万联付尾款-首钢收尾款', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '7-1.付款合约', // 线的标题，跟业务相关
					namePoint: [1764, 255],
					source: 'Org02Depart0100', // 起点
					target: 'Org02Depart0104', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '7-2.自动付款', // 线的标题，跟业务相关
					namePoint: [1271, 794],
					source: 'Org02Depart0104', // 起点
					target: 'Org05Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '7-3.付款回单', // 线的标题，跟业务相关
					namePoint: [99, 598],
					source: 'Org05Depart0100', // 起点
					target: 'Org05Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '7-4.付款回单', // 线的标题，跟业务相关
					namePoint: [785, 144],
					source: 'Org05Depart0101', // 起点
					target: 'Org02Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '7-5.货款到账', // 线的标题，跟业务相关
					namePoint: [128, 211],
					source: 'Org05Depart0100', // 起点
					target: 'Org01Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 8、首钢开票-首钢收票（信息流）
		{
			taskName: '8.首钢开票-首钢收票', // 业务名称
			fromPoint: 'Org01Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '4-1.开具发票', // 线的标题，跟业务相关
					namePoint: [1081, 176],
					source: 'Org01Depart0100', // 起点
					target: 'OtherDepart02', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.2 // 线的弧度
				},
				{
					lineName: '4-2.开票成功', // 线的标题，跟业务相关
					namePoint: [786, 507],
					source: 'OtherDepart02', // 起点
					target: 'Org01Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-3.接收发票', // 线的标题，跟业务相关
					namePoint: [1650, 376],
					source: 'OtherDepart02', // 起点
					target: 'Org02Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		}
	],
	// 现金采购（建筑-万联）
	'orderC1': [
		// 1、建筑起草合同-万联签署合同（商流、信息流）
		{
			taskName: '1.建筑起草合同-万联签署合同', // 业务名称
			fromPoint: 'Org04Depart0300', // 应该放到哪个点
			pointList: [
				{
					lineName: '1-1.起草合同', // 线的标题，跟业务相关
					namePoint: [1254, 560],
					source: 'Org04Depart0300', // 起点
					target: 'Org02Depart0400', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-2.签署合同', // 线的标题，跟业务相关
					namePoint: [1636, 514],
					source: 'Org02Depart0400', // 起点
					target: 'Org02Depart0401', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-3.合同上链', // 线的标题，跟业务相关
					namePoint: [1458, 758],
					source: 'Org02Depart0401', // 起点
					target: 'Org04Depart0301', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// ---2、万联理财（资金流）
		{
			taskName: '2.万联理财', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '2-1.购买理财', // 线的标题，跟业务相关
					namePoint: [1261, 520],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0103', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.3 // 线的弧度
				},
				{
					lineName: '2-2.理财回单', // 线的标题，跟业务相关
					namePoint: [666, 312],
					source: 'Org05Depart0103', // 起点
					target: 'Org02Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-3.理财赎回', // 线的标题，跟业务相关
					namePoint: [1062, 699],
					source: 'Org02Depart0101', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-4.理财到账', // 线的标题，跟业务相关
					namePoint: [674, 111],
					source: 'Org05Depart0100', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 3、万联订单融资（资金流）
		{
			taskName: '3.万联订单融资', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '3-1.融资申请', // 线的标题，跟业务相关
					namePoint: [879, 735],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-2.融资初审', // 线的标题，跟业务相关
					namePoint: [477, 716],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-5.还款合约', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-6.开立账户', // 线的标题，跟业务相关
					namePoint: [92, 629],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-7.融资放款', // 线的标题，跟业务相关
					namePoint: [675, 106],
					source: 'Org05Depart0100', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-8.预警规则', // 线的标题，跟业务相关
					namePoint: [766, 693],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-9.贷中监控', // 线的标题，跟业务相关
					namePoint: [303, 679],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-10.贷后催收', // 线的标题，跟业务相关
					namePoint: [768, 174],
					source: 'Org05Depart0102', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 4、万联发货-建筑收货（物流）
		{
			taskName: '4.万联发货-建筑收货', // 业务名称
			fromPoint: 'Org02Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '4-1.原料出库', // 线的标题，跟业务相关
					namePoint: [864, 697],
					source: 'Org02Depart0200', // 起点
					target: 'OtherDepart03', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-2.原料出库', // 线的标题，跟业务相关
					namePoint: [1750, 437],
					source: 'Org02Depart0200', // 起点
					target: 'Org02Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-3.原料入库', // 线的标题，跟业务相关
					namePoint: [751, 379],
					source: 'OtherDepart03', // 起点
					target: 'Org04Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-4.原料入库', // 线的标题，跟业务相关
					namePoint: [1564, 641],
					source: 'Org02Depart0201', // 起点
					target: 'Org04Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 5、建筑信用贷款（资金流）
		{
			taskName: '5.建筑信用贷款', // 业务名称
			fromPoint: 'Org04Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '5-1.融资申请', // 线的标题，跟业务相关
					namePoint: [360, 735],
					source: 'Org04Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.3// 线的弧度
				},
				{
					lineName: '5-2.融资初审', // 线的标题，跟业务相关
					namePoint: [477, 716],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-5.还款合约', // 线的标题，跟业务相关
					namePoint: [492, 465],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-6.开立账户', // 线的标题，跟业务相关
					namePoint: [92, 629],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-7.融资放款', // 线的标题，跟业务相关
					namePoint: [527, 361],
					source: 'Org05Depart0100', // 起点
					target: 'Org04Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-8.付款合约', // 线的标题，跟业务相关
					namePoint: [164, 703],
					source: 'Org04Depart0100', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-9.预警规则', // 线的标题，跟业务相关
					namePoint: [597, 751],
					source: 'Org04Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-10.贷中监控', // 线的标题，跟业务相关
					namePoint: [303, 679],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-11.贷后催收', // 线的标题，跟业务相关
					namePoint: [540, 620],
					source: 'Org05Depart0102', // 起点
					target: 'Org04Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 6、建筑付款-万联收款（资金流）
		{
			taskName: '6.建筑付款-万联收款', // 业务名称
			fromPoint: 'Org04Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '6-1.付款合约', // 线的标题，跟业务相关
					namePoint: [1487, 634],
					source: 'Org04Depart0100', // 起点
					target: 'Org04Depart0104', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-2.自动付款', // 线的标题，跟业务相关
					namePoint: [898, 921],
					source: 'Org04Depart0104', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.3 // 线的弧度
				},
				{
					lineName: '6-3.付款回单', // 线的标题，跟业务相关
					namePoint: [111, 597],
					source: 'Org05Depart0100', // 起点
					target: 'Org05Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-4.付款回单', // 线的标题，跟业务相关
					namePoint: [679, 388],
					source: 'Org05Depart0101', // 起点
					target: 'Org04Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-5.货款到账', // 线的标题，跟业务相关
					namePoint: [686, 114],
					source: 'Org05Depart0100', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-6.融资还款', // 线的标题，跟业务相关
					namePoint: [1138, 632],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 7、建筑建设（物流）
		{
			taskName: '7.建筑建设', // 业务名称
			fromPoint: 'Org04Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '7-1.原料出库', // 线的标题，跟业务相关
					namePoint: [1007, 578],
					source: 'Org04Depart0200', // 起点
					target: 'Org04Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '7-2.施工建设', // 线的标题，跟业务相关
					namePoint: [1000, 658],
					source: 'Org04Depart0201', // 起点
					target: 'Org04Depart0501', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 8、建筑抵押贷款（资金流）
		{
			taskName: '8.建筑抵押贷款', // 业务名称
			fromPoint: 'Org04Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '8-1.融资申请', // 线的标题，跟业务相关
					namePoint: [360, 735],
					source: 'Org04Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-2.融资初审', // 线的标题，跟业务相关
					namePoint: [477, 716],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-5.还款合约', // 线的标题，跟业务相关
					namePoint: [263, 598],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-6.开立账户', // 线的标题，跟业务相关
					namePoint: [92, 629],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-7.融资放款', // 线的标题，跟业务相关
					namePoint: [595, 345],
					source: 'Org05Depart0100', // 起点
					target: 'Org04Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-8.融资还款', // 线的标题，跟业务相关
					namePoint: [803, 721],
					source: 'Org04Depart0100', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.2 // 线的弧度
				},
				{
					lineName: '8-9.预警规则', // 线的标题，跟业务相关
					namePoint: [597, 751],
					source: 'Org04Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-10.贷中监控', // 线的标题，跟业务相关
					namePoint: [303, 679],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-11.贷后催收', // 线的标题，跟业务相关
					namePoint: [492, 465],
					source: 'Org05Depart0102', // 起点
					target: 'Org04Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 9、万联开票-建筑收票（信息流）
		{
			taskName: '9.万联开票-建筑收票', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '9-1.开具发票', // 线的标题，跟业务相关
					namePoint: [1739, 329],
					source: 'Org02Depart0100', // 起点
					target: 'OtherDepart02', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-2.开票成功', // 线的标题，跟业务相关
					namePoint: [1647, 393],
					source: 'OtherDepart02', // 起点
					target: 'Org02Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-3.接收发票', // 线的标题，跟业务相关
					namePoint: [1641, 701],
					source: 'OtherDepart02', // 起点
					target: 'Org04Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		}
	],
	// 区块链应收款采购（建筑-万联）
	'orderC2': [
		// 1、建筑起草合同-万联签署合同（商流、信息流）
		{
			taskName: '1.建筑起草合同-万联签署合同', // 业务名称
			fromPoint: 'Org04Depart0300', // 应该放到哪个点
			pointList: [
				{
					lineName: '1-1.起草合同', // 线的标题，跟业务相关
					namePoint: [1254, 560],
					source: 'Org04Depart0300', // 起点
					target: 'Org02Depart0400', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-2.签署合同', // 线的标题，跟业务相关
					namePoint: [1636, 514],
					source: 'Org02Depart0400', // 起点
					target: 'Org02Depart0401', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-3.合同上链', // 线的标题，跟业务相关
					namePoint: [1458, 758],
					source: 'Org02Depart0401', // 起点
					target: 'Org04Depart0301', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// ---2、建筑理财（资金流）
		{
			taskName: '2.建筑理财', // 业务名称
			fromPoint: 'Org04Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '2-1.购买理财', // 线的标题，跟业务相关
					namePoint: [814, 837],
					source: 'Org04Depart0100', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-2.理财回单', // 线的标题，跟业务相关
					namePoint: [767, 484],
					source: 'Org05Depart0100', // 起点
					target: 'Org04Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.2 // 线的弧度
				},
				{
					lineName: '2-3.理财赎回', // 线的标题，跟业务相关
					namePoint: [811, 742],
					source: 'Org04Depart0101', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.2 // 线的弧度
				},
				{
					lineName: '2-4.理财到账', // 线的标题，跟业务相关
					namePoint: [640, 342],
					source: 'Org05Depart0100', // 起点
					target: 'Org04Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 3、万联订单融资（资金流）
		{
			taskName: '3.万联订单融资', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '3-1.融资申请', // 线的标题，跟业务相关
					namePoint: [879, 735],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-2.融资初审', // 线的标题，跟业务相关
					namePoint: [477, 716],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-5.还款合约', // 线的标题，跟业务相关
					namePoint: [252, 602],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-6.开立账户', // 线的标题，跟业务相关
					namePoint: [92, 629],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-7.融资放款', // 线的标题，跟业务相关
					namePoint: [675, 106],
					source: 'Org05Depart0100', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-8.预警规则', // 线的标题，跟业务相关
					namePoint: [766, 693],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-9.贷中监控', // 线的标题，跟业务相关
					namePoint: [303, 679],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '3-10.贷后催收', // 线的标题，跟业务相关
					namePoint: [768, 174],
					source: 'Org05Depart0102', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 4、万联发货-建筑收货（物流）
		{
			taskName: '4.万联发货-建筑收货', // 业务名称
			fromPoint: 'Org02Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '4-1.原料出库', // 线的标题，跟业务相关
					namePoint: [864, 697],
					source: 'Org02Depart0200', // 起点
					target: 'OtherDepart03', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-2.原料出库', // 线的标题，跟业务相关
					namePoint: [1750, 437],
					source: 'Org02Depart0200', // 起点
					target: 'Org02Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-3.原料入库', // 线的标题，跟业务相关
					namePoint: [751, 379],
					source: 'OtherDepart03', // 起点
					target: 'Org04Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '4-4.原料入库', // 线的标题，跟业务相关
					namePoint: [1564, 641],
					source: 'Org02Depart0201', // 起点
					target: 'Org04Depart0201', // 终点

					flowType: ['flowD'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 5、建筑签发凭证（信息流）
		{
			taskName: '5.建筑签发凭证', // 业务名称
			fromPoint: 'Org04Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '5-1.付款合约', // 线的标题，跟业务相关
					namePoint: [1504, 642],
					source: 'Org04Depart0100', // 起点
					target: 'Org04Depart0104', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-2.签发凭证', // 线的标题，跟业务相关
					namePoint: [1454, 734],
					source: 'Org04Depart0104', // 起点
					target: 'Org04Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '5-3.凭证上链', // 线的标题，跟业务相关
					namePoint: [1431, 457],
					source: 'Org04Depart0101', // 起点
					target: 'Org02Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 6、万联应收融资（资金流）
		{
			taskName: '6、万联应收融资', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '6-1.融资申请', // 线的标题，跟业务相关
					namePoint: [879, 735],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-2.融资初审', // 线的标题，跟业务相关
					namePoint: [477, 716],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-5.还款合约', // 线的标题，跟业务相关
					namePoint: [252, 602],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-6.开立账户', // 线的标题，跟业务相关
					namePoint: [92, 629],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-7.融资放款', // 线的标题，跟业务相关
					namePoint: [675, 106],
					source: 'Org05Depart0100', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-8.预警规则', // 线的标题，跟业务相关
					namePoint: [766, 693],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-9.贷中监控', // 线的标题，跟业务相关
					namePoint: [303, 679],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '6-10.贷后催收', // 线的标题，跟业务相关
					namePoint: [768, 174],
					source: 'Org05Depart0102', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 7、建筑建设（物流）
		{
			taskName: '7.建筑建设', // 业务名称
			fromPoint: 'Org04Depart0200', // 应该放到哪个点
			pointList: [
				{
					lineName: '7-1.原料出库', // 线的标题，跟业务相关
					namePoint: [1007, 578],
					source: 'Org04Depart0200', // 起点
					target: 'Org04Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '7-2.施工建设', // 线的标题，跟业务相关
					namePoint: [1000, 658],
					source: 'Org04Depart0201', // 起点
					target: 'Org04Depart0501', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 8、建筑抵押贷款（资金流）
		{
			taskName: '8.建筑抵押贷款', // 业务名称
			fromPoint: 'Org04Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '8-1.融资申请', // 线的标题，跟业务相关
					namePoint: [360, 735],
					source: 'Org04Depart0100', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-2.融资初审', // 线的标题，跟业务相关
					namePoint: [477, 716],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0201', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-3.融资终审', // 线的标题，跟业务相关
					namePoint: [657, 833],
					source: 'Org05Depart0201', // 起点
					target: 'Org05Depart0301', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-4.融资合同', // 线的标题，跟业务相关
					namePoint: [355, 823],
					source: 'Org05Depart0301', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-5.还款合约', // 线的标题，跟业务相关
					namePoint: [263, 598],
					source: 'Org05Depart0102', // 起点
					target: 'Org05Depart0401', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-6.开立账户', // 线的标题，跟业务相关
					namePoint: [92, 629],
					source: 'Org05Depart0401', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-7.融资放款', // 线的标题，跟业务相关
					namePoint: [595, 345],
					source: 'Org05Depart0100', // 起点
					target: 'Org04Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-8.预警规则', // 线的标题，跟业务相关
					namePoint: [597, 751],
					source: 'Org04Depart0100', // 起点
					target: 'Org05Depart0402', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-9.贷中监控', // 线的标题，跟业务相关
					namePoint: [303, 679],
					source: 'Org05Depart0402', // 起点
					target: 'Org05Depart0102', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '8-10.贷后催收', // 线的标题，跟业务相关
					namePoint: [492, 465],
					source: 'Org05Depart0102', // 起点
					target: 'Org04Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 9、建筑付款-万联收款（资金流）
		{
			taskName: '9.建筑付款-万联收款', // 业务名称
			fromPoint: 'Org04Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '9-1.付款合约', // 线的标题，跟业务相关
					namePoint: [1487, 634],
					source: 'Org04Depart0100', // 起点
					target: 'Org04Depart0104', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-2.自动付款', // 线的标题，跟业务相关
					namePoint: [898, 921],
					source: 'Org04Depart0104', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.3 // 线的弧度
				},
				{
					lineName: '9-3.付款回单', // 线的标题，跟业务相关
					namePoint: [111, 597],
					source: 'Org05Depart0100', // 起点
					target: 'Org05Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-4.付款回单', // 线的标题，跟业务相关
					namePoint: [679, 388],
					source: 'Org05Depart0101', // 起点
					target: 'Org04Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-5.货款到账', // 线的标题，跟业务相关
					namePoint: [686, 114],
					source: 'Org05Depart0100', // 起点
					target: 'Org02Depart0100', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '9-6.融资还款', // 线的标题，跟业务相关
					namePoint: [1138, 632],
					source: 'Org02Depart0100', // 起点
					target: 'Org05Depart0101', // 终点

					flowType: ['flowB'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 10、万联开票-建筑收票（信息流）
		{
			taskName: '10.万联开票-建筑收票', // 业务名称
			fromPoint: 'Org02Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '10-1.开具发票', // 线的标题，跟业务相关
					namePoint: [1739, 329],
					source: 'Org02Depart0100', // 起点
					target: 'OtherDepart02', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '10-2.开票成功', // 线的标题，跟业务相关
					namePoint: [1647, 393],
					source: 'OtherDepart02', // 起点
					target: 'Org02Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '10-3.接收发票', // 线的标题，跟业务相关
					namePoint: [1641, 701],
					source: 'OtherDepart02', // 起点
					target: 'Org04Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		}
	],
	// 直接收款（建筑-万联）
	'orderD1': [
	// 1、建筑销售商品房（商流、信息流）
		{
			taskName: '1.建筑销售商品房', // 业务名称
			fromPoint: 'Org04Depart0401', // 应该放到哪个点
			pointList: [
				{
					lineName: '1-1.销售商品房', // 线的标题，跟业务相关
					namePoint: [1326, 742],
					source: 'Org04Depart0401', // 起点
					target: 'Org04Depart0402', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-2.房产过户', // 线的标题，跟业务相关
					namePoint: [1222, 852],
					source: 'Org04Depart0402', // 起点
					target: 'OtherDepart04', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-3.支付房款', // 线的标题，跟业务相关
					namePoint: [443, 866],
					source: 'OtherDepart04', // 起点
					target: 'Org05Depart0100', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '1-4.销售入账', // 线的标题，跟业务相关
					namePoint: [590, 349],
					source: 'Org05Depart0100', // 起点
					target: 'Org04Depart0100', // 终点

					flowType: ['flowA', 'flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		},
		// 2、建筑开票-消费者收票（信息流）
		{
			taskName: '2.建筑开票-消费者收票', // 业务名称
			fromPoint: 'Org04Depart0100', // 应该放到哪个点
			pointList: [
				{
					lineName: '2-1.开具发票', // 线的标题，跟业务相关
					namePoint: [1534, 513],
					source: 'Org04Depart0100', // 起点
					target: 'OtherDepart02', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-2.开票成功', // 线的标题，跟业务相关
					namePoint: [1472, 701],
					source: 'OtherDepart02', // 起点
					target: 'Org04Depart0101', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				},
				{
					lineName: '2-3.接收发票', // 线的标题，跟业务相关
					namePoint: [1334, 886],
					source: 'OtherDepart02', // 起点
					target: 'OtherDepart04', // 终点

					flowType: ['flowC'], // 属于那个流类型
					curveness: 0.4 // 线的弧度
				}
			]
		}
	]
};
