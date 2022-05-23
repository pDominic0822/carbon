
<template>
	<div class="stu">
		<Step0101></Step0101>
	</div>
</template>

<script>
import Step0101 from './../subtaskStep02/Step0101.vue';
export default {
	name: 'my-course',
	components: {
		Step0101
	},
	data () {
		return {
			arrList: []
		};
	},
	created () {
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>

</style>
