<template>
    <transition name="fade">
        <div class="mask-write10" :class="type" v-show="show">
            <div class="mask-content">
                <p class="mask-title">
                    <!-- 提示信息 -->
                </p>
                <p class="mask-icon center">
                    <i class="iconfont" :class="type === 'error' ? 'icon-error' : 'icon-shenhetongguo'"></i>
                </p>
                <p class="mask-text" v-html="text">
                    <!-- {{text}} -->
                </p>
                <div class="shan">
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
	name: 'login',
	data () {
		return {
		};
	},
	props: {
		type: {
			type: String,
			default: 'info',
			validator: val => ['info', 'success', 'warning', 'error'].includes(val)
		},
		text: {
			type: String,
			default: ''
		},
		show: {
			type: Boolean,
			default: false
		}
	},
	created () {
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active{
	transition: opacity .3s
}
.fade-enter,
.fade-leave-to{
	opacity: 0
}
.mask-content{
    min-height: 348px;
    width: 520px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    background: #fff;
    border: 1px solid #ebeef5;
    .shan{
        // position: absolute;
        // bottom: 0px;
        background: url('./img/shan.png') no-repeat bottom center;
        width: 100%;
        height: 125px;
        background-size: contain;
    }
    .mask-title{
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        i{
            font-size: 25px;
            cursor: pointer;
        }
    }
    .mask-text{
        text-align: center;
        margin-top: 54px;
        font-family: PingFangSC-Medium;
        font-size: 20px;
        color: #62A2F1;
        line-height: 28px;
    }
    .mask-icon{
        margin-top: 15px;
        i{
            font-size: 100px;
            &.icon-error{
                color: rgb(245, 108, 108);
            }
            &.icon-shenhetongguo{
                color: rgb(64, 158, 255);
            }
        }
    }
}
</style>
