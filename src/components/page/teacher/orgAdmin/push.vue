<template>
	<div class="mt30dddd containter">
		<div class="item-org" :class="{greenBorder: item.select}" v-for="(item, index) in orgArr" :key="index">
			<div class="top">
				{{item.orgName.substr(0, 1)}}
			</div>
			<p class="ellipsis">{{item.orgName}}</p>
			<p class="mt10">组织号码：{{item.invitationCode || '&nbsp;'}}</p>
			<p class="mt10">共{{item.recruitNumber}}个组员</p>
			<div class="pingjia" v-if="item.isOpen === 0" @click="selectOrg(index)">
				<span v-if="!item.select">选择</span>
				<span v-if="item.select">取消</span>
			</div>
			<div class="pingjia done" v-else>已推送</div>
			<div class="selest-tips iconfont icon-gou-" :class="{active: item.select}"></div>
		</div>
		<div class="mt30 center">
			<el-button @click="_handleClick()" type="primary">推 送</el-button>
		</div>
	</div>
</template>

<script>
import { encodeUnicode } from '_@/js/utils';
export default {
	name: 'stu-tooltip',
	data () {
		return {
			textarea: '',
			data_content: '',
			orgArr: [],
			checkList: [],
			checkedCities: '',
			booleans: false,
			value: '',
			value2: '',
			value3: ''
		};
	},
	created () {
		this.init();
	},
	methods: {
		selectOrg (index) {
			this.orgArr[index].select = !this.orgArr[index].select;
		},
		// 托送任务
		_handleClick () {
			this.orgArr.forEach((item, index) => {
				item.select && this.checkList.push(item.id);
			});
			if (this.checkList.length <= 0) {
				this.$message.error('请选择任意队伍');
				return false;
			};
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/openClazzOrg',
				params: {
					orgIdJson: encodeUnicode(JSON.stringify(this.checkList))
				}
			}).then(res => {
				if (res.success) {
					this.$emit('sendInIt');
					this.$message.success(res.message);
				} else {
					this.$message.error(res.message);
				}
				this.checkList = [];
				this.init();
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 获取组织
		init () {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/findClazzOrgByParam',
				params: {
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						res.data.forEach((item, index) => {
							item.select = false;
						});
						this.orgArr = res.data;
					} else {
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.mt30dddd{
	margin-top: 30px;
	width: 925px;
}

.item-org {
	width: 170px;
	height: 230px;
	border: 1px solid #ddd;
	background: #ecf5ff;
	border-radius: 2px;
	display: inline-block;
	text-align: center;
	margin-right: 14px;
	margin-bottom: 20px;
	position: relative;
	padding: 0 15px;
	// &:nth-of-type(6n) {
	// 	margin-right: 0;
	// }
	.top {
		background: #233b85;
		width: 50px;
		height: 50px;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #FFFFFF;
		border-radius: 50%;
		text-align: center;
		line-height: 50px;
		margin: 10px auto;
	}
	&.done {
		background: #FFFFFF;
		border: 1px solid #DDDDDD;
	}
	img {
		margin-top: 30px;
		width: 68px;
		height: 68px;
		border-radius: 50%;
	}
	p:nth-child(2) {
		margin-top: 5px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #404040;
		line-height: 32px;
	}
	p:nth-child(3) {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		line-height: 28px;
	}
	div.pingjia {
		background: #384797;
		box-shadow: 0 2px 4px 0 #384797;
		border-radius: 16px;
		width: 76px;
		height: 26px;
		line-height: 26px;
		margin: 20px auto 0;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #FFFFFF;
		text-shadow: 0 0 1px rgba(0,0,0,0.15);
		cursor: pointer;
		&.done {
			background: #CCCCCC;
			box-shadow: 0 2px 4px 0 rgba(204,204,204,0.50);
		}
	}
	div.selest-tips {
		position: absolute;
		width: 35px;
		height: 29px;
		background: url('../img/Rectangle3.png') no-repeat;
		top: 0;
		right: 0;
		text-align: center;
		color: #FFFFFF;
		padding-left: 10px;
		box-sizing: border-box;
		display: none;
		&.active {
			display: block;
		}
	}
}
.org-list{
	li{
		width: 180px;
		height: 250px;
		border: 1px solid #DDD;
	}
}
.greenBorder{
	border: 1px solid #508FF1 !important;
	background: #F6FAFF !important;
	.top{
		background: #508FF1 !important;
	}
	.pingjia{
		background: #508FF1 !important;
	}
}

</style>
