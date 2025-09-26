<template>
  <!-- 连通性测试卡片，作为唯一根元素 -->
  <view class="test-card">
    <view class="card-header">
      <text class="card-title">连通性测试</text>
      <view class="right-group">
        <text class="retry-btn" @click="handleRefreshClick">点击重测</text>
        <image
          class="refresh"
          src="/static/refresh.png"
          @click="handleRefreshClick"
        ></image>
      </view>
    </view>
    <!-- 新增的横线 -->
    <view class="divider"></view>
    <!-- 测试项，v-if 控制显示 -->
    <view class="test-items" v-if="!isRefreshing">
      <!-- 文件预览 -->
      <view class="test-item">
        <text class="item-name">文件预览</text>
        <view class="item-info">
          <text class="time">{{ filePreviewTime }}ms</text>
          <text class="status" :class="statusMap[filePreviewStatus].className">
            {{ statusMap[filePreviewStatus].text }}
          </text>
          <!-- 非良好状态显示tooltip -->
          <tooltip
            v-if="filePreviewStatus !== 0"
            tipText="文件预览请求超时，可能是文件过大或网络不稳定"
          ></tooltip>
        </view>
        <view class="item-code">
          <text class="code-label">状态码:</text>
          <text class="code-value">403</text>
          <text class="code-expect">预期:403</text>
        </view>
      </view>
      <!-- 文件上传 -->
      <view class="test-item">
        <text class="item-name">文件上传</text>
        <view class="item-info">
          <text class="time">{{ fileUploadTime }}ms</text>
          <text class="status" :class="statusMap[fileUploadStatus].className">
            {{ statusMap[fileUploadStatus].text }}
          </text>
          <tooltip
            v-if="fileUploadStatus !== 0"
            tipText="文件预览请求超时，可能是文件过大或网络不稳定"
          ></tooltip>
        </view>
        <view class="item-code">
          <text class="code-label">状态码:</text>
          <text class="code-value">403</text>
          <text class="code-expect">预期:403</text>
        </view>
      </view>
      <!-- 医生端 -->
      <view class="test-item">
        <text class="item-name">医生端</text>
        <view class="item-info">
          <text class="time">{{ doctorTime }}ms</text>
          <text class="status" :class="statusMap[doctorStatus].className">
            {{ statusMap[doctorStatus].text }}
          </text>
          <tooltip
            v-if="doctorStatus !== 0"
            tipText="文件预览请求超时，可能是文件过大或网络不稳定"
          ></tooltip>
        </view>
        <view class="item-code">
          <text class="code-label">状态码:</text>
          <text class="code-value">403</text>
          <text class="code-expect">预期:403</text>
        </view>
      </view>
      <!-- 客户端 -->
      <view class="test-item">
        <text class="item-name">客户端</text>
        <view class="item-info">
          <text class="time">{{ clientTime }}ms</text>
          <text class="status" :class="statusMap[clientStatus].className">
            {{ statusMap[clientStatus].text }}
          </text>
          <tooltip
            v-if="clientStatus !== 0"
            tipText="文件预览请求超时，可能是文件过大或网络不稳定"
          ></tooltip>
        </view>
        <view class="item-code">
          <text class="code-label">状态码:</text>
          <text class="code-value">403</text>
          <text class="code-expect">预期:403</text>
        </view>
      </view>
      <view class="test-item">
        <text class="item-name">微信</text>
        <view class="item-info">
          <text class="time">{{ wechatTime }}ms</text>
          <text class="status" :class="statusMap[wechatStatus].className">
            {{ statusMap[wechatStatus].text }}
          </text>
          <tooltip
            v-if="wechatStatus !== 0"
            tipText="客户端请求格式错误或请求参数不正确"
          ></tooltip>
        </view>
        <view class="item-code">
          <text class="code-label">状态码:</text>
          <text class="code-value error">403</text>
          <text class="code-expect">预期:403</text>
        </view>
      </view>
    </view>
    <!-- 测试等待视图，v-else 与上面的 v-if 对应 -->
    <view class="test-wait" v-else>
      <image
        class="wait"
        src="/static/testcontact.png"
      ></image>
      <text>正在进行监测，大约需要{{countdown}}S,请稍等</text>
    </view>
  </view>
</template>

<script>
  // import { log } from 'console';
import tooltip from '../tooltip.vue'
	export default {
    components:{
      tooltip,
    },
		data() {
			return {
        isRefreshing:false,
        countdown: 5,
				statusMap: {
				        0: { text: '良好', className: 'status-good' },
				        1: { text: '缓慢', className: 'status-slow' },
				        2: { text: '超时', className: 'status-timeout' }
				      },
				filePreviewTime: 10228,
				fileUploadTime: 8808,
				doctorTime: 108,
        clientTime: 108,
				wechatTime: 10218,
				      // 测试项状态值（对应statusMap的key）
				filePreviewStatus: 2,   // 超时（红）
				fileUploadStatus: 1,    // 缓慢（蓝）
				doctorStatus: 0,        // 良好（绿）
				clientStatus: 0,        // 良好（绿）
        wechatStatus: 2        // 超时（红）
			}
		},
		methods: {
      handleRefreshClick(){
        // 清除可能存在的旧定时器，防止多个定时器同时运行
                if (this.timer) {
                  clearInterval(this.timer);
                }
        this.isRefreshing = true;
        this.countdown = 5
          // 向父组件传递“正在刷新”的状态（true）
          this.$emit('trigger-retry', true);
           this.timer = setInterval(() =>{
            this.countdown --;
            if(this.countdown <= 0){
              clearInterval(this.timer);
              this.isRefreshing = false
              this.$emit('trigger-retry', false);
            }
          },1000);

      },
      beforeDestroy() {
            if (this.timer) {
              clearInterval(this.timer);
            }
          }
		},
    // watch:{
    //   isRefreshing(newVal){
    //   log('刷新状态变化',newVal)
    //   }
    // }
	}
</script>

<style scoped>

/* 测试卡片样式 */
.test-item .item-info {
  display: flex;
  align-items: center; /* 让时间、状态、tooltip垂直居中 */
  margin-bottom: 12rpx;
}
.test-card {
  background-color: #fff;
  border-radius: 12rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
  margin: 20rpx;
  padding: 20rpx;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15rpx;
}
.card-title {
  font-size: 24rpx;
  font-weight: bold;
  color: #333;
}
.right-group {
  display: flex;
  align-items: center;
}
.retry-btn {
  font-size: 20rpx;
  color: #00E0D6;
  margin-right: 10rpx;
  cursor:pointer
}
.refresh{
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  cursor:pointer
}
.divider {
  height: 1rpx;
  background-color: #e5e5e5;
  margin-bottom: 20rpx;
}

/* 测试项布局（一行两个） */
.test-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.test-item {
  width: 48%;
  margin-bottom: 20rpx;
  padding: 15rpx;
  /* background-color: #f9f9f9; */
  border-radius: 8rpx;
  box-sizing: border-box;
}

/* 测试项内部样式 */
.item-name {
  font-size: 20rpx;
  color: #333;
  margin-bottom: 12rpx;
  display: block;
}
.item-info {
  display: flex;
  align-items: center;
  margin-bottom: 12rpx;
}
.time {
  font-size: 20rpx;
  color: #333;
  margin-right: 10rpx;
}

/* 状态标签颜色（核心调整） */
.status {
  font-size: 11rpx;
  padding: 3rpx 10rpx;
  border-radius: 4rpx;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
}
.status-good {
  background-color: #00E0D6; /* 良好-绿色 */
}
.status-slow {
  background-color: #2196f3; /* 缓慢-蓝色 */
}
.status-timeout {
  background-color: #ff5722; /* 超时-红色 */
}

/* Tooltip样式 */
.tooltip {
  font-size: 16rpx;
  background-color: #ccc;
  color: #fff;
  width: 24rpx;
  height: 24rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10rpx;
}

/* 状态码样式 */
.item-code {
  display: flex;
  align-items: center;
}
.code-label {
  font-size: 16rpx;
  color: #999;
  margin-right: 6rpx;
}
.code-value {
  font-size: 16rpx;
  color: #999;
}
.error {
  color: #ff5722;
}
.code-expect {
  font-size: 16rpx;
  color: #999;
  margin-left: 6rpx;
}

/* 提示文本样式 */
.tip {
  font-size: 18rpx;
  color: #333;
  background-color: #f5f5f5;
  padding: 10rpx;
  border-radius: 8rpx;
  margin-top: 10rpx;
  display: block;
}
.test-wait {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300rpx; /* 保证有一定高度，居中更美观 */
}
.wait {
  width: 100rpx;
  height: 100rpx;
  margin-bottom: 10rpx;
}
.test-wait text {
  font-size: 20rpx;
  color: #666;
}
</style>
