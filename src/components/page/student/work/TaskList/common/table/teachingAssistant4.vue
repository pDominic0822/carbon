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
				<td>组名</td>
				<td>单价（元）</td>
				<td>采购数量（个）</td>
				<td>采购金额</td>
			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">
				<td>
					{{trIndex + 1}}
				</td>
				<td>
					{{trItem.value1}}
				</td>
				<td>
					{{trItem.value2}}
				</td>
				<td>
					{{trItem.value3}}
				</td>
				<td>
					{{trItem.value4}}
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
			trList: [
				{
					value1: 'xxx',
					value2: '1',
					value3: '1',
					value4: '20'
				},
				{
					value1: 'xxx',
					value2: '1',
					value3: '1',
					value4: '20'
				},
				{
					value1: 'xxx',
					value2: '1',
					value3: '1',
					value4: '20'
				}
			]
		};
	},
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
