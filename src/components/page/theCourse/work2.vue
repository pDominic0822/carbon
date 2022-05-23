<!--
 * @Author: zhangln
 * @LastEditors: Please set LastEditors
 * @Description: 课程封皮页
 * @Date: 2019-02-21 11:09:58
 * @LastEditTime: 2021-12-30 15:15:21
 -->
<template>
	<div class="contentBox">
		<!-- 碳沙盘动效 -->
		<!-- 图形圆圈动效 -->
    <div class="loader">
    <div class="outer"></div>
    <div class="middle"></div>
    <div class="inner"></div>
    </div>
	<!-- 点击效果 -->
	<div class="bowen">
	<div class="ripple"></div>
	<div class="ripple" style="filter:hue-rotate(120deg)"></div>
	<div class="ripple" style="filter:grayscale()"></div>
	</div>
    </div>
</template>

<script>
export default {
	name: 'login',
	data () {
		return {
		};
	},
	components: {
	},
	created () {
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
.contentBox{
	width: 1000px;
	margin: 0 auto;
	height: 800px;
	background: black;
	// 圆圈动效
	.loader {
		position: relative;
		// margin-top: 100px;
		width: 100px;
		height: 100px;
		margin-bottom: 50px;
	}
	.outer,
	.middle,
	.inner {
		border: 3px solid transparent;
		border-top-color: #3cefff;
		border-right-color: #3cefff;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
	}
	.outer {
		width: 3.5em;
		height: 3.5em;
		margin-left: -1.75em;
		margin-top: -1.75em;
		animation: spin 2s linear infinite;
	}
	.middle {
		width: 2.1em;
		height: 2.1em;
		margin-left: -1.05em;
		margin-top: -1.05em;
		animation: spin 1.75s linear reverse infinite;
	}
	.inner {
		width: 0.8em;
		height: 0.8em;
		margin-left: -0.4em;
		margin-top: -0.4em;
		animation: spin 1.5s linear infinite;
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
	// 波纹
.bowen{
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 11rem;
}
.ripple {
  width: 5rem; /* control the size */
  background: #ff0; /* control the color here */
}
.ripple,
.ripple::before,
.ripple::after {
  content: "";
  display: grid;
  grid-area: 1/1;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 0 0 0 0 #ff03; /* and here, 3 is the transparency */
  animation: r 3s linear infinite var(--s,0s);
}
.ripple::before {--s: 1s}
.ripple::after  {--s: 2s}

@keyframes r {
  to {box-shadow: 0 0 0 6rem #0000}
}

  }
</style>
