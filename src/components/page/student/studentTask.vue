<!--
 * @Date: 2019-10-14 10:09:07
 -->
<template>
	<div class="student-mold">
        <router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'login',
	data () {
		return {
		};
	},
	created () {
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
.student-mold{
	height: 100%;
	// background: #000;
	// background: url('./img/bj2.jpg') no-repeat center center;
	background-size: cover;
}
</style>
