
<template>
	<div class="stu">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'my-course',
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
.stu{
    width: 100%;
	height: 100%;
	min-width: 1200px;
	position: relative;
	// padding-top: 64px;
}
</style>
