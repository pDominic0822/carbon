<!--
 * @Date: 2019-10-14 10:09:07
 -->
<template>
	<div class="teacher-index2">
		<div class="index2-left">
			<p class="class-name">
				班级名称：{{className}}
			</p>
			<p class="class-name">
				班级邀请码：{{classCode}}
			</p>
			<p class="class-name">
				班级人数：{{classNumber}}
			</p>
			<div class="worklist">
				<ul>
					<li v-for="(item, index) in MoldListArr" :class="{'active' : workIndex === index}" @click="_handleWork(index)" :key="index">
						{{item.moldName}}
						<template v-if="item.workLink === 'teacher-mold'">
							<i slot="reference" @click="openMold(item)" :class="[item.isMoldOpen ? 'el-icon-unlock': 'el-icon-lock']"></i>
						</template>
					</li>
				</ul>
			</div>
		</div>
		<div class="index2-right">
			<router-view :key="workIndex"></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: 'login',
	components: {
	},
	data () {
		return {
			MoldListArr: [
			],
			workIndex: 0,
			classNumber: '',
			classCode: '',
			className: ''
		};
	},
	created () {
		this.getClassNumber();
		this.selectMold();
	},
	methods: {
		/**
		 * @name: zhangln
		 * @msg: 查询多少模块+讲
		 */
		selectMold (code) {
			this.$ajax({
				method: 'post',
				url: '/mold/getMoldInfo'
			}).then((res) => {
				if (res.success) {
					let array = res.data;
					for (let index = 0; index < array.length; index++) {
						const element = array[index];
						element.isMoldOpen = false;
						element.workLink = 'teacher-mold';
						if (element.isOpen + '' === '1') {
							element.isMoldOpen = true;
						}
					}
					array.unshift({
						moldName: '课程准备',
						workLink: 'teacher-ready'
					});
					this.MoldListArr = array;
					this._handleWork(0);
				}
			}).catch((err) => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 开启模块
		 */
		openMold (row) {
			this.$confirm(
				`是否${row.isMoldOpen ? '关闭' : '开启'}${row.moldName}`,
				'提示',
				{
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					center: true,
					showCancelButton: true,
					type: 'warning'
				}
			).then(() => {
				this.$ajax({
					method: 'post',
					url: '/stClazzMoldSwitch/saveStClazzMoldSwitchRecord',
					params: {
						moldId: row.moldId,
						isOpen: row.isMoldOpen ? 0 : 1
					}
				}).then((res) => {
					if (res.success) {
						// this.getTeacherMoldDoing();
						row.isMoldOpen = !row.isMoldOpen;
						this.moldVisibleState = false;
						this.$myMessage.success(res.message);
					}
				})
					.catch((err) => {
						throw new Error(err);
					});
			}).catch(() => {});
		},
		_handleWork (index) {
			this.workIndex = index;
			let item = this.MoldListArr[index];
			if (item.workLink === 'teacher-mold') {
				this.$router.push(
					{
						name: 'teacher-mold',
						query: {
							moldId: item.moldId
						}
					}
				);
				return false;
			}
			if (item.workLink === 'teacher-ready') {
				this.$router.push(
					{
						name: 'teacher-ready'
					}
				);
				return false;
			}
		},
		getClassNumber () { // 获取班级人数
			this.$ajax({
				method: 'post',
				url: 'clazz/findClazzToClazz'
			}).then(res => {
				if (res.success && res.data) {
					this.classNumber = res.data.number;
					this.classCode = res.data.inviteCode;
					this.className = res.data.name;
				}
			});
		}
	}

};
</script>

<style lang="scss" scoped>
.class-name {
	text-align: center;
	line-height: 28px;
	color: #fff;
}

.worklist{
	width: 200px;
	margin: 0 auto;
	margin-top: 40px;
	li{
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #fff;
		width: 100%;
		border-radius: 24px;
		cursor: pointer;
		&.active{
			background: #fff;
			color: #41b883;
		}
	}
}

.teacher-index2 {
	width: 100%;

	.index2-left {
		float: left;
		width: 250px;
		height: calc(100vh - 65px);
		padding-top: 30px;
		background: linear-gradient(122deg, #41b883 0, #8762e8 100%);
	}

	.index2-right {
		float: left;
		width: calc(100% - 250px);
		height: calc(100vh - 65px);
		overflow: auto;
	}
}
</style>
