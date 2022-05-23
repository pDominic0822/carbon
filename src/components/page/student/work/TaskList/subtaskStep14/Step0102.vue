<template>
	<div class="stu">
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
			tableType: 'pagetable02012',
			tableJson: {},
			arrList: [],
			showInputMap: {
				value1: true,
				value2: true,
				value3: true,
				value4: true,
				value5: true,
				value6: true,
				value7: true,
				value8: true,
				value9: true,
				value10: true,
				value11: true,
				value12: true,
				value13: true
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
