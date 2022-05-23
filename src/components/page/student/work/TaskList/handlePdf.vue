<!--
 * @Author: zhangln
 * @Date: 2019-07-24 15:36:28
 * @Description: 33
 -->
<template>
	<div class="task-work">
		<el-tabs type="card" @tab-click="handleClick">
			<el-tab-pane v-for="(item,index) in resourceAll" :key="index" :label="item.resourceName">
				<template>
				</template>
			</el-tab-pane>
		</el-tabs>
		<top-res :dataSrc = dataSrc></top-res>
	</div>
</template>

<script>
import axios from 'axios';
import { Cookie } from '_@/js/one';
import { modelatlasUrl } from '@/config';
export default {
	name: 'login',
	data () {
		return {
			resourceAll: [],
			dataSrc: '',
			isClick: true,
			setTimeout1: ''
		};
	},
	created () {
		this.getWord();
	},
	watch: {
		'$route': 'getWord'
	},
	methods: {
		// 加学习值
		addStil (taskResourceId) {
			axios
				.post(`${modelatlasUrl()}/modelatlas/atlasScore/insertUserResourceRecord`, {
					sessionId: Cookie.get('sessionId'),
					moldId: this.$route.params.moldId,
					taskResourceId: taskResourceId,
					taskId: this.$route.query.taskId,
					chapterId: this.$route.query.chapterId,
					subtaskId: this.$route.query.subtaskId
				})
				.then(response => {
					this.$store.commit('accomplishTaskRests', '');
				}).catch(error => {
					console.log(error);
				});
		},
		/**
		 * @msg: 学习答案
		 */
		getWord () {
			this.$ajax({
				method: 'post',
				url: '/taskResource/findTaskResourceByParam',
				params: {
					resourceCode: 'demo03',
					taskId: this.$route.query.taskId // 任务id
				}
			}).then(res => {
				if (res.success && res.data.length > 0) {
					this.resourceAll = res.data;
					this.dataSrc = res.data[0];
					// 学习满20s
					this.setTimeout1 = setTimeout(() => {
						this.addStil(this.dataSrc.id);
					}, 20000);
				} else {
					this.dataSrc = '';
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		handleClick (tab, event) {
			this.dataSrc = {};
			console.log(tab.index);
			let index = tab.index;
			this.dataSrc = this.resourceAll[index];
			console.log(this.dataSrc);
			this.addStil(this.dataSrc.id);
		}
	},
	destroyed () {
		clearTimeout(this.setTimeout1);
	}
};
</script>

<style lang="scss" scoped>
.task-work{
	// height: 100%;
	height: 500px;
	height: calc(100vh - 240px);
	// margin-top: 30px;
}
</style>
