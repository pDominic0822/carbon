
<template>
	<div class="stu">
		<!-- 库存电力 -->
		<pageTable ref="pageTable" :tableType="tableType" :tableJson="tableJson" :showInputMap="showInputMap"></pageTable>
		<div class="mt20 center">
			<el-button type="success" @click="getPageJson()">保存</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			tableType: 'technologyRetrofitRecord',
			tableJson: {},
			arrList: [],
			showInputMap: {
				numerical: true,
				numerical2: true,
				value3: false,
				value4: false,
				value5: false,
				value6: false
			}
		};
	},
	created () {
	},
	methods: {
		getPageJson () {
			let json = this.$refs.pageTable.getpageTableJson();
			console.log(json);
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
