<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td>序号</td>
				<td>业务名称</td>
				<td>利率</td>
				<td>年限 / 年</td>
				<td>小组名称</td>
				<td>申请金额</td>
				<td>操作</td>
				<td>数据披露</td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>

				</td>
				<td @click="_handDialog()">
					披露
				</td>
			</tr>
		</table>
		<el-dialog
			title="数据披露单"
			append-to-body
			:visible.sync="isDialog"
			width="80%"
			center>
			<table class="demo-table">
				<tr>
					<td>模拟经营年</td>
					<td></td>
					<td>组号</td>
					<td></td>
				</tr>
				<tr>
					<td>技改投入资金 ( 元 )</td>
					<td :class="{'inputClass' : showInputMap.value1}">
						<el-input-number :readonly="!showInputMap.value1" controls-position="right" size="mini"
						:controls="false" v-model="fromInfo.value1" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</td>
					<td>剩余绿贷资金 ( 元 )</td>
					<td :class="{'inputClass' : showInputMap.value2}">
						<el-input-number :readonly="!showInputMap.value2" controls-position="right" size="mini"
						:controls="false" v-model="fromInfo.value2" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</td>
				</tr>
				<tr>
					<td>节能技改减少耗电 ( 度 )</td>
					<td :class="{'inputClass' : showInputMap.value3}">
						<el-input-number :readonly="!showInputMap.value3" controls-position="right" size="mini"
						:controls="false" v-model="fromInfo.value3" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</td>
					<td>节能技改减少排放 ( Kg )</td>
					<td :class="{'inputClass' : showInputMap.value4}">
						<el-input-number :readonly="!showInputMap.value4" controls-position="right" size="mini"
						:controls="false" v-model="fromInfo.value4" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</td>
				</tr>
				<tr>
					<td>减排技改减少排放 ( Kg )</td>
					<td :class="{'inputClass' : showInputMap.value5}">
						<el-input-number :readonly="!showInputMap.value5" controls-position="right" size="mini"
						:controls="false" v-model="fromInfo.value5" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</td>
					<td>合计技改减排量 ( Kg )</td>
					<td :class="{'inputClass' : showInputMap.value6}">
						<el-input-number :readonly="!showInputMap.value6" controls-position="right" size="mini"
						:controls="false" v-model="fromInfo.value6" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</td>
				</tr>
				<tr>
					<td>年度产品碳标签 ( Kg / 个 )</td>
					<td :class="{'inputClass' : showInputMap.value7}">
						<el-input-number :readonly="!showInputMap.value7" controls-position="right" size="mini"
						:controls="false" v-model="fromInfo.value7" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</td>
					<td>年度产品碳成本 ( 元 / 个 )</td>
					<td :class="{'inputClass' : showInputMap.value8}">
						<el-input-number :readonly="!showInputMap.value8" controls-position="right" size="mini"
						:controls="false" v-model="fromInfo.value8" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</td>
				</tr>
				<tr>
					<td>年度还贷金额</td>
					<td colspan="3" :class="{'inputClass' : showInputMap.value9}">
						<el-input-number :readonly="!showInputMap.value9" controls-position="right" size="mini"
						:controls="false" v-model="fromInfo.value9" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</td>
				</tr>
			</table>
			<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
				{{!isSaveData ? '保存' : '已经保存'}}
			</el-button>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			trList: [],
			isDialog: false,
			isSaveData: false
		};
	},
	props: [
		'fromInfo',
		'showInputMap'
	],
	watch: {
	},
	created () {
	},
	methods: {
		_handDialog () {
			this.isDialog = true;
		}
	},
	mounted () {
	}
};
</script>

<style lang="scss" scoped>
.contentBox{
	width: 100%;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
