<!--
 * @Author: liujiatian
 * @Date: 2019-02-25 20:45:37
 -->
<template>
	<div>
		<!-- 密码提示 -->
		<div class='passwordTips' v-if='isPasswordWarn'>
			<img src="./img/warningIcon.png" alt="" class='warnImg'>
			<span>亲爱的用户，您的密码过于简单，为了您的账号信息安全，请您尽快更改密码，否则后期将影响您的账号使用。</span>
			<b @click="$router.push({name: 'account-settings'})">点此更改</b>
			<i class='el-icon-close closeI' @click="isPasswordWarn = false;"></i>
		</div>
		<div v-if='isBindShow'>
			<!-- 微信扫码 -->
			<div class='wechatScanning'>
				<img src="./img/closeIcon.png" alt="" class='closeImg' @click='closeWindow()'>
				<div class='wechatCon'>
					<p class='titleDes'>扫描微信二维码，获取更多课程帮助</p>
					<div class='wechatImg'>
						<div>
							<img :src="wechatSrc" alt="" v-if='wechatSrc'>
							<p class='refresh' @mouseenter="onMouseenter()" v-if='invalid'>
								<i class='el-icon-refresh-right'></i>
							</p>
						</div>
						<p class='tips'>扫描二维码</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			wechatSrc: '',
			isBindShow: false,
			// 是否失效
			invalid: false,
			timer: null,
			// 检测密码
			isPasswordWarn: false
		};
	},
	watch: {
	},
	inject: ['reload'],
	components: {
	},
	created () {
		this._getDetectPassword();
		this.init();
	},
	methods: {
		_getDetectPassword () {
			if (this.$storage.get('updatePwd') === 'true') {
				this.isPasswordWarn = true;
			} else {
				this.isPasswordWarn = false;
			}
		},
		// 初始化判断是否扫码绑定
		init () {
			let user = this.$storage.get('User');
			if (user) {
				if (!JSON.parse(user).userOpenid) {
					this._getWechat();
				}
			}
		},
		/**
		 * @name: zhangln
		 * @msg: 拉取二维码
		 */
		_getWechat () {
			this.$ajax({
				method: 'post',
				url: '/wechatLoginController/qrcode'
			}).then(res => {
				let sceneId = res.data.sceneId || '';
				this.wechatSrc = res.data.url;
				this.hand_Socket(sceneId);
				this.isBindShow = true;
				// 定时失效
				this.invalid = false;
				this.timer = setTimeout(() => {
					this.invalid = true;
				}, 570000);
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 获取微信scoket链接
		 */
		hand_Socket (sceneId) {
			let userId = this.$storage.get('userId') || '';
			let socketIP = this.$storage.get('socketIP') || '';
			let SocketUrl = `${socketIP}?userId=${userId}&sceneId=${sceneId}`; // aili
			this.socketIo = window.io.connect(SocketUrl);
			this.socketIo.on('connect', () => {
			});
			this.socketIo.on('disconnect', () => {
			});
			this.socketIo.on('wechat', (data) => {
				if (data.loninType === 'success') { // 扫码成功
					this.$message({
						type: 'success',
						message: '扫码成功'
					});
				}
				this.isBindShow = false;
				let user = this.$storage.get('User');
				if (user) {
					user = JSON.parse(user);
					user.userOpenid = data.user.userOpenid;
					this.$storage.set('User', user);
				}
			});
		},
		// 移入刷新二维码
		onMouseenter () {
			this._getWechat();
		},
		// 关闭窗口
		closeWindow () {
			this.isBindShow = false;
			clearTimeout(this.timer);
		}
	},
	beforeDestroy () {
		clearTimeout(this.timer);
	}
};
</script>

<style lang="scss" scoped>
.wechatScanning{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.7);
	.closeImg{
		width: 22px;
		height: 22px;
		cursor: pointer;
		position: fixed;
		top: 15px;
		right: 15px;
	}
	.wechatCon{
		width: 420px;
		height: 500px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		-o-transform:translate(-50%, -50%);
		background: url('./img/qrCode.png') no-repeat center center;
		background-size: 100%;
		.titleDes{
			margin-top: 55px;
			text-align: center;
			line-height: 25px;
			font-size: 18px;
			color: #ffffff;
		}
		.wechatImg{
			text-align: center;
			margin-top: 109px;
			div{
				width: 200px;
				height: 200px;
				margin: 0 auto;
				background: rgba(198, 198, 198, 0.4);
				position: relative;
				img{
					width: 100%;
				}
				.refresh{
					height: 100%;
					width: 100%;
					position: absolute;
					top: 0;
					left: 0;
					background: rgba(0,0,0,0.4);
					i{
						text-align: center;
						color: #ffffff;
						font-size: 40px;
						margin-top: 80px;
					}
				}
			}
			.tips{
				margin-top: 19px;
				font-size: 16px;
				color: #222222;
				line-height: 22px;
			}
		}
	}
}
.passwordTips{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	line-height: 60px;
	background: #FFF6E9;
	border: 1px solid #F09100;
	text-align: center;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	.warnImg{
		height: 17px;
		margin-right: 8px;
		position: relative;
		top: 3px;
	}
	span{
		color: #222222;
		line-height: 60px;
		font-size: 16px;
	}
	b{
		font-weight: normal;
		color: #F09100;
		cursor: pointer;
		font-size: 16px;
	}
	.closeI{
		cursor: pointer;
		font-size: 24px;
		color: #666666;
		position: absolute;
		top: 16px;
		right: 15px;
	}
}
</style>
