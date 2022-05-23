
<template>
	<div class="stu">
		<Step0101></Step0101>
	</div>
</template>

<script>
import Step0101 from './../subtaskStep02/Step0101.vue';
export default {
	name: 'my-course',
	data () {
		return {
			arrList: []
		};
	},
	components: {
		Step0101
	},
	created () {
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>

</style>
