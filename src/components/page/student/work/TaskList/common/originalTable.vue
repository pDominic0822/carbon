<!--
 * @Author: zhangln
 * @Date: 2019-08-08 14:56:15
 * @Description: 表单集合
 -->
<template>
	<div class="pagetables">
		<table0208 v-if="tableType === 'productEmissionAccounting'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0208>
		<table0203 v-if="tableType === 'stockElectricity'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0203>
		<table0202 v-if="tableType === 'carbonSinkQuota'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0202>
		<table0207 v-if="tableType === 'stockMaterials'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0207>
		<table1203 v-if="tableType === 'carbonStockQuota'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table1203>
		<table0209 v-if="tableType === 'orderDeliverRecord'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0209>
		<table0205 v-if="tableType === 'greenLoansCash'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0205>
		<table0206 v-if="tableType === 'ownCashBalance'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0206>
		<table0204 v-if="tableType === 'technologyRetrofitRecord'" :fromInfo="fromInfo" :class="tableType" :ref="tableType" :showInputMap="showInputMap"  ></table0204>
	</div>
</template>

<script>

import table0203 from './orgginalTable/table0203';
import table0202 from './orgginalTable/table0202';
import table1203 from './orgginalTable/table1203';
import table0205 from './orgginalTable/table0205';
import table0207 from './orgginalTable/table0207';
import table0208 from './orgginalTable/table0208';
import table0209 from './orgginalTable/table0209';
import table0206 from './orgginalTable/table0206';
import table0204 from './orgginalTable/table0204';
export default {
	name: 'login',
	components: {
		table0203,
		table0204,
		table0206,
		table0202,
		table0207,
		table0208,
		table0209,
		table0205,
		table1203
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
