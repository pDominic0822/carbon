<!--
 * @Author: zhangln
 * @Date: 2019-08-08 14:56:15
 * @Description: 表单集合
 -->
<template>
	<div class="pagetables">
		<!--  -->
		<table012 v-if="tableType === 'pagetrainTicket'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table012>
		<!-- 系统参数 -->
		<tableParameter v-if="tableType === 'pagetableParameter'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></tableParameter>
		<!-- 助教-技改市场 -->
		<tableTa v-if="tableType === 'pagetableTa'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></tableTa>
		<!-- 1、配额核定单 -->
		<table013 v-if="tableType === 'pagetable013'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table013>
		<!-- 绿贷发放单 -->
		<table014 v-if="tableType === 'pagetable014'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table014>
		<!-- 绿贷申请单 -->
		<table01402 v-if="tableType === 'pagetable01402'"  :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table01402>
		<!-- 碳汇购买单 -->
		<table015 v-if="tableType === 'pagetable015'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table015>
		<!-- 客户订单 -->
		<table016 v-if="tableType === 'pagetable016'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table016>
		<!-- 技改服务单 -->
		<table017 v-if="tableType === 'pagetable017'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table017>
		<!-- 物料采购单 -->
		<table018 v-if="tableType === 'pagetable018'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table018>
		<!-- 电力采购单 -->
		<table019 v-if="tableType === 'pagetable019'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table019>
		<!-- 配额交易单 -->
		<!--  -- table02012 -->
		<table02012 v-if="tableType === 'pagetable02012'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table02012>
			<!--  -- table02013 -->
		<table02013 v-if="tableType === 'pagetable02013'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table02013>
		<!-- 7、财务主管-损益权益 -- 02 -->
		<table0110 v-if="tableType === 'pagetable0110'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0110>
		<!--   -->
		<table0201 v-if="tableType === 'pagetable0201'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0201>
		<!--   -->
		<table0202 v-if="tableType === 'carbonSinkQuota'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0202>
		<!--   -->
		<table0203 v-if="tableType === 'stockElectricity'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0203>
		<!--   -->
		<table0204 v-if="tableType === 'technologyRetrofitRecord'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0204>
		<!--   -->
		<table0205 v-if="tableType === 'greenLoansCash'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0205>
		<!--   -->
		<table0206 v-if="tableType === 'ownCashBalance'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0206>
		<!--   -->
		<table0207 v-if="tableType === 'stockMaterials'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0207>
		<!-- 5、采购主管-物料余额 -->
		<table0208 v-if="tableType === 'productEmissionAccounting'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0208>
		<table1104 v-if="tableType === 'dataDisclosureSheet'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table1104>
		<!--6、电力主管-电力余额 -->
		<table0209 v-if="tableType === 'orderDeliverRecord'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0209>
		<!-- 7、财务主管-损益权益 -- 01 -->
		<table02010 v-if="tableType === 'pagetable02010'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table02010>
		<!-- 7、财务主管-损益权益 -- 02 -->
		<table02011 v-if="tableType === 'pagetable02011'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table02011>
		<!-- 碳汇采购申请-->
		<table0402 v-if="tableType === 'pagetable0402'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0402>
		<!-- 碳汇采购申请2-->
		<table0404 v-if="tableType === 'pagetable0404'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0404>
		<!-- 进行技改-->
		<table0602 v-if="tableType === 'pagetable0602'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0602>
		<!-- 物料采购-->
		<table0702 v-if="tableType === 'pagetable0702'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0702>
		<!-- 库存电力-->
		<table0803 v-if="tableType === 'pagetable0803'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0803>
		<!-- 进行生产-->
		<table0901 v-if="tableType === 'pagetable0901'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0901>
		<!-- 配额交易-->
		<table1201 v-if="tableType === 'pagetable1201'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table1201>
		<!-- 配额交易-->
		<table1203 v-if="tableType === 'carbonStockQuota'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table1203>
		<!-- 配额清缴-->
		<table1301 v-if="tableType === 'pagetable1301'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"></table1301>
		<!-- 确认进入经营年-->
		<table1501 v-if="tableType === 'pagetable1514'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"></table1501>
		<!-- 确认进入经营年-->
		<table0101 v-if="tableType === 'pagetable0101'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"></table0101>
		<!-- 确认进入经营年-->
		<table0102 v-if="tableType === 'pagetable0102'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"></table0102>
		<!-- 确认进入经营年-->
		<table0103 v-if="tableType === 'pagetable0103'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"></table0103>
		<!-- 确认进入经营年-->
		<table0104 v-if="tableType === 'pagetable0104'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"></table0104>
		<!-- 绿电证书-->
		<tableCertificate v-if="tableType === 'pagetableCertificate'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"></tableCertificate>
		<!-- 销售主管 = 决策-->
		<table1001 v-if="tableType === 'pagetable1001'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"></table1001>
		<!--  ================================================================================== -->
		<!-- 财务主管 = 进行数据披露 -->
		<table1101 v-if="tableType === 'pagetable1101'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"></table1101>
		<!-- ========================================================================================== -->
		<table130101 v-if="tableType === 'pagetable130101'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"></table130101>
		<table130102 v-if="tableType === 'pagetable130102'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"></table130102>
	</div>
</template>

<script>
import tableParameter from './table/table-parameter.vue';
import tableTa from './table/table-ta.vue';
import table012 from './table/table012';
import table013 from './table/table013';
import table014 from './table/table014';
import table01402 from './table/table01402.vue';
import table015 from './table/table015';
import table016 from './table/table016';
import table017 from './table/table017';
import table018 from './table/table018';
import table019 from './table/table019';
import table0110 from './table/table0110';
import table0201 from './table/table0201';
import table0202 from './table/table0202';
import table0203 from './table/table0203';
import table0204 from './table/table0204';
import table0205 from './table/table0205';
import table0206 from './table/table0206';
import table0207 from './table/table0207';
// ======================================================
import table0101 from './table/table0101';
import table0102 from './table/table0102';
import table0103 from './table/table0103';
import table0104 from './table/table0104';
// ---------------------------------------------
import table0208 from './table/table0208';
import table0209 from './table/table0209';
import table02010 from './table/table02010';
import table02011 from './table/table02011';
import table02012 from './table/table02012';
import table02013 from './table/table02013';
import table0402 from './table/table0402';
import table0404 from './table/table0404';
import table0602 from './table/table0602';
import table0702 from './table/table0702';
import table0803 from './table/table0803';
import table0901 from './table/table0901';
import table1201 from './table/table1201';
import table1203 from './table/table1203';
import table1301 from './table/table1301';
import table1501 from './table/table1501';
import table1001 from './table/table1001';
import tableCertificate from './table/tableCertificate';
// =============================================================================
import table1101 from './table/table1101';
import table130101 from './table/table130101';
import table1104 from './table/table1104';
import table130102 from './table/table130102';
export default {
	name: 'login',
	components: {
		tableParameter,
		table1104,
		table0101,
		table0102,
		table0103,
		table0104,
		tableTa,
		table012,
		table013,
		table014,
		table01402,
		table015,
		table016,
		table017,
		table018,
		table019,
		table0110,
		// ---------------
		table0201,
		table0202,
		table0203,
		table0204,
		table0205,
		table0206,
		table0207,
		// ----------
		table0208,
		table0209,
		table02010,
		table02011,
		table02012,
		table02013,
		table0402,
		table0404,
		table0602,
		table0702,
		table0803,
		table0901,
		table1201,
		table1203,
		table1301,
		table1501,
		tableCertificate,
		table1001,
		table1101,
		table130101,
		table130102
	},
	data () {
		return {
			typeHandle: '',
			privateKey: '',
			formJson: '',
			InitiatorUserClient: null,
			initiatorOrg: null,
			acceptorOrg: null,
			acPackInvoiceRequest: null,
			acceptorUserClient: null
		};
	},
	props: ['tableType', 'tableJson', 'showInputMap', 'fromInfo'],
	created () {
	},
	watch: {
		tableType: {
			handler () {
				// console.log(this.tableType);
				// if (this.tableType) {
				// 	if (isObject(this.tableJson)) {
				// 		console.log(this.tableJson);
				// 		this.formJson = this.tableJson;
				// 		this.formJson.timer = new Date().getTime();
				// 	} else if (isArray(this.tableJson)) {
				// 		this.formJson = this.tableJson;
				// 	} else {
				// 		console.log(this.tableJson);
				// 		this.formJson = JSON.parse(this.tableJson);
				// 	}
				// }
			},
			deep: true,
			immediate: true
		}
	},
	methods: {
		/**
		 * @name: zhangln
		 * @msg: 获取table里里面的form数据
		 */
		getpageTableJson () {
			let json = this.$refs[this.tableType].fromInfo;
			return json;
		},
		/**
		 * @name: zhangln
		 * @msg: 回调出审核点
		 */
		getPoint (msg) {
			console.log(msg);
			this.$emit('sendToEngine', msg);
		}
	}
};
</script>

<style lang="scss" scoped>
.rres{
	color: cornflowerblue;;
}
.dadds{
	padding: 20px 30px;
}
.pagetables{
	position: relative;
	margin-top: 10px;
	// background: rgba(0,58,119,1);
	min-height: 220px;
	.maskd{
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		padding: 20px 30px;
		background: #f5f7fa;
	}
}
</style>
