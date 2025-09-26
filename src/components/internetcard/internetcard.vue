<template>
  <view class="internet-card">
    <view class="card-header">
      <text class="card-title">网络情况</text>
    </view>
    <view class="divider"></view>
    <view class="device-items">
      <!-- 网络类型 -->
      <view class="device-item">
        <text class="item-name">网络类型</text>
        <view class="item-value">
          <text class="value-text">{{ networkType }}</text>
        </view>
      </view>
      <!-- 是否使用代理 -->
      <view class="device-item">
        <text class="item-name">是否使用代理</text>
        <view class="item-value">
          <text class="value-text">{{ isUseProxy }}</text>
        </view>
      </view>
      <!-- 信号强度 -->
      <view class="device-item">
        <text class="item-name">信号强度</text>
        <view class="item-value">
          <text class="value-text">{{ signalStrength }}</text>
          <text class="signal-status" v-if="showTip" >{{ signalStatus }}</text>
          <text class="value-text" v-else >({{ signalStatus }})</text>
        </view>
      </view>
      <!-- 是否是弱网环境 -->
      <view class="device-item">
        <text class="item-name">是否弱网环境</text>
        <view class="item-value">
          <text class="value-text">{{ isWeakNetwork }}</text>
        </view>
      </view>
    </view>
    <view class="tip-container" v-if="showTip">
      <view class="tip-icon">
        <text class="icon-text">i</text>
      </view>
      <view class="tip-texts">
        <text class="tip-text">1. 信号强度较低，换个信号好的地方再试试吧</text>
        <text class="tip-text">2. 可能使用境外代理，关闭代理后再试试吧</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props:{
    showTip:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      networkType: 'WIFI',
      isUseProxy: '否',
      signalStrength: '-614dbm',
      signalStatus: '良好',
      isWeakNetwork: '否',
    };
  },
  // watch: {
  //   showTip(newVal) {
  //     console.log('子组件接收到的showTip:', newVal);
  //   }
  // }
};
</script>

<style scoped>
/* 设备卡片样式 */
.internet-card {
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
.divider {
  height: 1rpx;
  background-color: #e5e5e5;
  margin-bottom: 20rpx;
}

/* 设备项布局 */
.device-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.device-item {
  width: 48%;
  margin-bottom: 20rpx;
  box-sizing: border-box;
}

/* 设备项内部样式 */
.item-name {
  font-size: 20rpx;
  color: #999;
  margin-bottom: 12rpx;
  display: block;
}
.item-value {
  display: flex;
  align-items: center;
}
.value-text {
  font-size: 18rpx;
  color: #333;
}

/* 信号状态样式 */
.signal-status {
  margin-left: 8rpx;
  background-color: #ff5722;
  color: #fff;
  font-size: 11rpx;
  border-radius: 10%;
  padding: 2rpx 8rpx;
  border-radius: 4rpx;
}

/* 提示文本样式 */
.tip-container {
  background-color: #fff9e6;
  border-radius: 8rpx;
  padding: 15rpx;
  margin-top: 10rpx;
  display: flex;
  align-items: flex-start;
}
/* 提示图标样式 */
.tip-icon {
  width: 24rpx;
  height: 24rpx;
  background-color: transparent;
  color: #ff7f00;
  border: 2rpx solid #ff7f00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10rpx;
  flex-shrink: 0;
}
.icon-text {
  font-size: 16rpx;
  color: #ff7f00;
  font-weight: bold;
}
.tip-texts {
  display: flex;
  flex-direction: column;
}
.tip-text {
  font-size: 18rpx;
  color: #ff7f00;
  display: block;
  margin-bottom: 8rpx;
}
.tip-text:last-child {
  margin-bottom: 0;
}
</style>
