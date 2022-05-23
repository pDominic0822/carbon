<template>
	<div class="conmentBox">
		<!-- is -->
		<component :is="taskCode" :moldId="moldId" :subtaskId ="subtaskId" :clazzYearsPushId ="clazzYearsPushId "                                                                                            ></component>
	</div>
</template>

<script>
import teacherChild0101 from './teacherChild/teacherChild0101';
import teacherChild0102 from './teacherChild/teacherChild0102';
import teacherChild0103 from './teacherChild/teacherChild0103';
import teacherChild0104 from './teacherChild/teacherChild0104';
import teacherChild0105 from './teacherChild/teacherChild0105';
import teacherChild0106 from './teacherChild/teacherChild0106';
import teacherChild0107 from './teacherChild/teacherChild0107';
import teacherChild0108 from './teacherChild/teacherChild0108';
import teacherChild0109 from './teacherChild/teacherChild0109';
import teacherChild0110 from './teacherChild/teacherChild0110';
import teacherChild0111 from './teacherChild/teacherChild0111';
import teacherChild0112 from './teacherChild/teacherChild0112';
import teacherChild0113 from './teacherChild/teacherChild0113';
import teacherChild0114 from './teacherChild/teacherChild0114';
export default {
	components: {
		teacherChild0101,
		teacherChild0102,
		teacherChild0103,
		teacherChild0104,
		teacherChild0105,
		teacherChild0106,
		teacherChild0107,
		teacherChild0108,
		teacherChild0109,
		teacherChild0110,
		teacherChild0111,
		teacherChild0112,
		teacherChild0113,
		teacherChild0114
	},
	name: 'login',
	data () {
		return {
		};
	},
	props: [
		'taskCode', 'moldId', 'subtaskId', 'clazzYearsPushId'
	],
	created () {
	},
	methods: {

	}
};
</script>

<style lang="scss" scoped>

</style>
