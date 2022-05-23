/*
 * @Author: zhangln
 * @Date: 2019-08-27 15:26:11
 * @Description: 描述
 */
export const FunpageCode = {
	positionBudget: '部门采购预算',
	greenLoansCash: '绿贷现金金额表',
	carbonStockQuota: '库存碳配额',
	ownCashBalance: '自有现金余额',
	shipmentsVoucher: '商品发货单'
};

export const pageFun = (value) => {
	let ruleCodeArr = FunpageCode;
	// console.log(value);
	return ruleCodeArr[value] || value;
};

export const FieldCodeArr = {
	dataDisclosureSheet: {
		// 技改投入资金（元）
		'retrofit_cost_money': {
			fieldName: '技改投入资金（元）',
			countValue: ''
		},
		// 技改剩余绿贷资金（元）
		'retrofit_remaining_green_loan_money': {
			fieldName: '技改剩余绿贷资金（元）',
			countValue: ''
		},
		// 节能技改减少耗电（度）
		'energy_saving_reduce_power': {
			fieldName: '节能技改减少耗电（度）',
			countValue: ''
		},
		// 节能技改减少排放（kg）
		'energy_saving_reduce_emission': {
			fieldName: '节能技改减少排放（kg）',
			countValue: ''
		},
		// 减排技改减少排放（kg）
		'emission_reduction_reduce_emission': {
			fieldName: '减排技改减少排放（kg）',
			countValue: ''
		},
		// 合计技改减排量（kg）
		'total_reduce_emission': {
			fieldName: '合计技改减排量（kg）',
			countValue: ''
		},
		// 年度产品碳标签（kg/个）
		'year_produce_label': {
			fieldName: '年度产品碳标签（kg/个）',
			countValue: ''
		},
		// 年度产品碳成本（元/个）
		'year_produce_carbon_cost': {
			fieldName: '年度产品碳成本（元/个）',
			countValue: ''
		},
		// 年度还贷金额（元）
		'year_repay_loan_money': {
			fieldName: '年度还贷金额（元）',
			countValue: ''
		}
	},
	productEmissionAccounting: {
		// 生产过程排放量（kg）
		'produce_emission': {
			fieldName: '生产过程排放量（kg）',
			countValue: '碳排放( kg )'
		},
		// 耗电（度-绿电）减排量（kg）
		'green_electricity_emission': {
			fieldName: '耗电（度-绿电）减排量（kg）',
			countValue: '碳排放( kg )'
		},
		// 耗电（度-煤电）排放量（kg）
		'coal_electricity_emission': {
			fieldName: '耗电（度-煤电）排放量（kg）',
			countValue: '碳排放( kg )'
		},
		// 耗料（包）排放量（kg）
		'material_electricity_emission': {
			fieldName: '耗料（包）排放量（kg）',
			countValue: '碳排放( kg )'
		},
		// 合计碳排放量（kg）
		'total_emission_value': {
			fieldName: '合计碳排放量（kg）',
			countValue: '碳排放( kg )'
		}
	},
	orderDeliverRecord: {
		// 订单数量（个）
		'order_count': {
			fieldName: '订单数量（个）',
			countValue: '数值'
		},
		// 交付数量（个）
		'deliver_count': {
			fieldName: '交付数量（个）',
			countValue: '数值'
		},
		// 获得订单收入（元）
		'order_income': {
			fieldName: '获得订单收入（元）',
			countValue: '数值'
		},
		// 违约罚款（元）
		'default_penalty': {
			fieldName: '违约罚款（元）',
			countValue: '数值'
		},
		// 消耗碳汇碳资产(kg)
		'consume_carbon_sink': {
			fieldName: '消耗碳汇碳资产(kg)',
			countValue: '数值'
		},
		// 产品碳标签（kg/个）
		'product_label': {
			fieldName: '产品碳标签（kg/个）',
			countValue: '数值'
		}
	},
	stockMaterials: {
		// 期初库存
		'begin_period_stock': {
			fieldName: '期初库存',
			countChange: '变化-数量(包)',
			emissionChange: '变化-排放(Kg)',
			valueChange: '变化-价值（元）',
			countRemain: '余额数-数量(包)',
			emissionRemain: '余额数-排放(Kg)',
			valueRemain: '价值（元）'
		},
		// 期中采购
		'midterm_purchase_material': {
			fieldName: '期中采购',
			countChange: '变化-数量(包)',
			emissionChange: '变化-排放(Kg)',
			valueChange: '变化-价值（元）',
			countRemain: '余额数-数量(包)',
			emissionRemain: '余额数-排放(Kg)',
			valueRemain: '价值（元）'
		},
		// 消耗合计数量
		'total_midterm_consume': {
			fieldName: '消耗合计数量',
			countChange: '变化-数量(包)',
			emissionChange: '变化-排放(Kg)',
			valueChange: '变化-价值（元）',
			countRemain: '余额数-数量(包)',
			emissionRemain: '余额数-排放(Kg)',
			valueRemain: '价值（元）'
		},
		// 期初消耗
		'begin_period_midterm_consume': {
			fieldName: '期初消耗',
			countChange: '变化-数量(包)',
			emissionChange: '变化-排放(Kg)',
			valueChange: '变化-价值（元）',
			countRemain: '余额数-数量(包)',
			emissionRemain: '余额数-排放(Kg)',
			valueRemain: '价值（元）'
		},
		// 采购消耗
		'purchase_midterm_consume': {
			fieldName: '采购消耗',
			countChange: '变化-数量(包)',
			emissionChange: '变化-排放(Kg)',
			valueChange: '变化-价值（元）',
			countRemain: '余额数-数量(包)',
			emissionRemain: '余额数-排放(Kg)',
			valueRemain: '价值（元）'
		},
		// 期末库存
		'end_period_stock': {
			fieldName: '期末库存',
			countChange: '变化-数量(包)',
			emissionChange: '变化-排放(Kg)',
			valueChange: '变化-价值（元）',
			countRemain: '余额数-数量(包)',
			emissionRemain: '余额数-排放(Kg)',
			valueRemain: '价值（元）'
		}
	},
	stockElectricity: {
		// 期初库存
		'begin_green_electricity': {
			fieldName: '期初库存-绿电',
			countChange: '变化-数量(度)',
			valueChange: '变化-价值（元）',
			emissionChange: '变化-碳排放(Kg)',
			countRemain: '余额数-数量(度))',
			valueRemain: '余额数-价值（元）',
			emissionRemain: '余额数-碳排放(Kg)'
		},
		// 煤电
		'begin_coal_electricity': {
			fieldName: '期初库存-煤电',
			countChange: '变化-数量(度)',
			valueChange: '变化-价值（元）',
			emissionChange: '变化-碳排放(Kg)',
			countRemain: '余额数-数量(度))',
			valueRemain: '余额数-价值（元）',
			emissionRemain: '余额数-碳排放(Kg)'
		},
		// 合计数量
		'purchase_total': {
			fieldName: '期中采购-合计数量',
			countChange: '变化-数量(度)',
			valueChange: '变化-价值（元）',
			emissionChange: '变化-碳排放(Kg)',
			countRemain: '余额数-数量(度))',
			valueRemain: '余额数-价值（元）',
			emissionRemain: '余额数-碳排放(Kg)'
		},
		// 绿电
		'purchase_green_electricity': {
			fieldName: '期中采购-绿电',
			countChange: '变化-数量(度)',
			valueChange: '变化-价值（元）',
			emissionChange: '变化-碳排放(Kg)',
			countRemain: '余额数-数量(度))',
			valueRemain: '余额数-价值（元）',
			emissionRemain: '余额数-碳排放(Kg)'
		},
		// 煤电
		'purchase_coal_electricity': {
			fieldName: '期中采购-煤电',
			countChange: '变化-数量(度)',
			valueChange: '变化-价值（元）',
			emissionChange: '变化-碳排放(Kg)',
			countRemain: '余额数-数量(度))',
			valueRemain: '余额数-价值（元）',
			emissionRemain: '余额数-碳排放(Kg)'
		},
		// 期初绿电
		'consume_begin_green_electricity': {
			fieldName: '期中消耗-期初绿电',
			countChange: '变化-数量(度)',
			valueChange: '变化-价值（元）',
			emissionChange: '变化-碳排放(Kg)',
			countRemain: '余额数-数量(度))',
			valueRemain: '余额数-价值（元）',
			emissionRemain: '余额数-碳排放(Kg)'
		},
		// 采购绿电
		'consume_purchase_green_electricity': {
			fieldName: '期中消耗-采购绿电',
			countChange: '变化-数量(度)',
			valueChange: '变化-价值（元）',
			emissionChange: '变化-碳排放(Kg)',
			countRemain: '余额数-数量(度))',
			valueRemain: '余额数-价值（元）',
			emissionRemain: '余额数-碳排放(Kg)'
		},
		// 期初煤电
		'consume_begin_coal_electricity': {
			fieldName: '期中消耗-期初煤电',
			countChange: '变化-数量(度)',
			valueChange: '变化-价值（元）',
			emissionChange: '变化-碳排放(Kg)',
			countRemain: '余额数-数量(度))',
			valueRemain: '余额数-价值（元）',
			emissionRemain: '余额数-碳排放(Kg)'
		},
		// 采购煤电
		'consume_purchase_coal_electricity': {
			fieldName: '期中消耗-采购煤电',
			countChange: '变化-数量(度)',
			valueChange: '变化-价值（元）',
			emissionChange: '变化-碳排放(Kg)',
			countRemain: '余额数-数量(度))',
			valueRemain: '余额数-价值（元）',
			emissionRemain: '余额数-碳排放(Kg)'
		},
		// 采购煤电
		'consumer_total_count': {
			fieldName: '期中消耗-合计数量',
			countChange: '变化-数量(度)',
			valueChange: '变化-价值（元）',
			emissionChange: '变化-碳排放(Kg)',
			countRemain: '余额数-数量(度))',
			valueRemain: '余额数-价值（元）',
			emissionRemain: '余额数-碳排放(Kg)'
		},
		// 绿电
		'end_green_electricity': {
			fieldName: '期末库存-绿电',
			countChange: '变化-数量(度)',
			valueChange: '变化-价值（元）',
			emissionChange: '变化-碳排放(Kg)',
			countRemain: '余额数-数量(度))',
			valueRemain: '余额数-价值（元）',
			emissionRemain: '余额数-碳排放(Kg)'
		},
		// 煤电
		'end_coal_electricity': {
			fieldName: '期末库存-煤电',
			countChange: '变化-数量(度)',
			valueChange: '变化-价值（元）',
			emissionChange: '变化-碳排放(Kg)',
			countRemain: '余额数-数量(度))',
			valueRemain: '余额数-价值（元）',
			emissionRemain: '余额数-碳排放(Kg)'
		}
	},
	// 绿贷现金金额表
	greenLoansCash: {
		first_year_green_loans: {
			fieldName: '首年绿贷（万）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		technological_transformation: {
			fieldName: '技术改造（万）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		years_repay_debt: {
			fieldName: '年度还债（万）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		end_year_balance: {
			fieldName: '年底绿贷余额',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		}
	},
	ownCashBalance: {
		// 年初余额（元）
		'beginning_balance': {
			fieldName: '年初余额（元）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		// 碳汇竞购（元）
		'carbon_sink_bid': {
			fieldName: '碳汇竞购（元）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		// 技术改造（元）（无绿贷时）
		'technological_transformation': {
			fieldName: '技术改造（元）（无绿贷时）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		// 物料采购（元）
		'materials_purchase': {
			fieldName: '物料采购（元）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		// 煤电采购（元）
		'coal_power_purchase': {
			fieldName: '煤电采购（元）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		// 绿电采购（元）
		'green_power_purchase': {
			fieldName: '绿电采购（元）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		// 销售收入（元）
		'sales_revenue': {
			fieldName: '销售收入（元）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		// 订单违约罚款（元）
		'order_violation_penalty': {
			fieldName: '订单违约罚款（元）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		// 绿贷还款（元）（无绿贷时）
		'green_loan_repayment': {
			fieldName: '绿贷还款（元）（无绿贷时）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		// 配额场外交易收入（元）
		'quota_off_field_trade_income': {
			fieldName: '配额场外交易收入（元）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		// 配额场内卖出收入（元）
		'quota_on_field_sell_income': {
			fieldName: '配额场内卖出收入（元）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		// 配额清缴超排罚款（元）
		'quota_super_row_fine': {
			fieldName: '配额清缴超排罚款（元）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		// 年度固定成本（元）
		'year_fixed_cost': {
			fieldName: '年度固定成本（元）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		},
		// 年底现金余额（元）
		'end_cash_balance': {
			fieldName: '年底现金余额（元）',
			incomeAmount: '收入(元)',
			expenditureAmount: '支出(元)',
			balanceAmount: '余额(元)'
		}
	},
	carbonSinkQuota: {
		// 期初碳汇库存
		'initial_stock': {
			fieldName: '期初碳汇库存',
			worthValue: '数量（Kg）',
			countValue: '价值（元）'
		},
		// 期中碳汇采购
		'midterm_purchase_count': {
			fieldName: '期中碳汇采购',
			worthValue: '数量（Kg）',
			countValue: '价值（元）'
		},
		// 消耗合计数量
		'consume_total': {
			fieldName: '消耗合计数量',
			worthValue: '数量（Kg）',
			countValue: '价值（元）'
		},
		// 期初库存碳汇
		'initial_consume': {
			fieldName: '期初库存碳汇',
			worthValue: '数量（Kg）',
			countValue: '价值（元）'
		},
		// 期中采购碳汇
		'midterm_consume': {
			fieldName: '期中采购碳汇',
			worthValue: '数量（Kg）',
			countValue: '价值（元）'
		},
		// 期末碳汇库存
		'end_period_stock': {
			fieldName: '期末碳汇库存',
			worthValue: '数量（Kg）',
			countValue: '价值（元）'
		}
	},
	technologyRetrofitRecord: {
		'begin_production_electricity': {
			fieldName: '期初-生产线耗电（度/季度）',
			countValue: '数值'
		},
		'begin_production_emission': {
			fieldName: '期初-生产线排放（kg/季度）',
			countValue: '数值'
		},
		'electricity_reduce': {
			fieldName: '技改-能耗降低（度/季度）',
			countValue: '数值'
		},
		'emission_reduce': {
			fieldName: '技改-排放减少（kg/季度）',
			countValue: '数值'
		},
		'end_production_electricity': {
			fieldName: '期末-生产线耗电（度/季度）',
			countValue: '数值'
		},
		'end_production_emission': {
			fieldName: '期末-生产线排放（kg/季度）',
			countValue: '数值'
		}
	},
	carbonStockQuota: {
		initial_quota: {
			fieldName: '期初库存',
			countValue: '数值（kg）',
			worthValue: '价值（元）'
		},
		amount_approved: {
			fieldName: '额度核定',
			countValue: '数值（kg）',
			worthValue: '价值（元）'
		},
		actual_emission: {
			fieldName: '实际排放',
			countValue: '数值（kg）',
			worthValue: '价值（元）'
		},
		off_field_sell: {
			fieldName: '场外交易卖出',
			countValue: '数值（kg）',
			worthValue: '价值（元）'
		},
		off_field_buy: {
			fieldName: '场外交易买入',
			countValue: '数值（kg）',
			worthValue: '价值（元）'
		},
		on_field_sell: {
			fieldName: '场内交易卖出',
			countValue: '数值（kg）',
			worthValue: '价值（元）'
		},
		exceed_emissions_punish: {
			countValue: '数值（kg）',
			fieldName: '清缴超排处罚',
			worthValue: '价值（元）'
		},
		year_end_quota: {
			fieldName: '年末库存',
			countValue: '数值（kg）',
			worthValue: '价值（元）'
		}
	}
};
