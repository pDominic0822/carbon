<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td>订单数量 ( 个 )</td>
				<td>
					{{fromInfo.value1}}
				</td>
				<td>订单单价 ( 元 )</td>
				<td>
					{{fromInfo.value2}}
				</td>
			</tr>
			<tr>
				<td>交付数量 ( 个 )</td>
				<td :class="{'inputClass' : showInputMap.value3}">
					<el-input-number :readonly="!showInputMap.value3" controls-position="right" size="mini"
					:controls="false" v-model="fromInfo.value3" :precision="2" :step="0.1" :max="100000000"></el-input-number>
				</td>
				<td>违约罚款 ( 元 )</td>
				<td>
					{{fromInfo.value4}}
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
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
