<template>
  <view class="device-card">
    <view class="card-header">
      <text class="card-title">设备详情</text>
    </view>
    <view class="divider"></view>
    <view class="device-items">
      <!-- 设备品牌 -->
      <view class="device-item">
        <text class="item-name">设备品牌</text>
        <view class="item-value">
          <text class="value-text">{{ deviceBrand }}</text>
        </view>
      </view>
      <!-- 操作系统及版本 -->
      <view class="device-item">
        <text class="item-name">操作系统及版本</text>
        <view class="item-value">
          <text class="value-text">{{ osVersion }}</text>
        </view>
      </view>
      <!-- 设备型号 -->
      <view class="device-item">
        <text class="item-name">设备型号</text>
        <view class="item-value">
          <text class="value-text">{{ deviceModel }}</text>
        </view>
      </view>
      <!-- 客户端平台 -->
      <view class="device-item">
        <text class="item-name">客户端平台</text>
        <view class="item-value">
          <text class="value-text">{{ clientPlatform }}</text>
        </view>
      </view>
      <!-- 设备性能 -->
      <view class="device-item">
        <text class="item-name">设备性能</text>
        <view class="item-value">
          <text class="value-text">{{ devicePerformance }}</text>
        </view>
      </view>
      <!-- CPU -->
      <view class="device-item">
        <text class="item-name">CPU</text>
        <view class="item-value">
          <text class="value-text">{{ cpuModel }}</text>
        </view>
      </view>
      <!-- 设备内存 -->
      <view class="device-item">
        <text class="item-name">设备内存</text>
        <view class="item-value">
          <text class="value-text">{{ deviceMemory }}</text>
        </view>
      </view>
      <!-- WIFI开关 -->
      <view class="device-item">
        <text class="item-name">WIFI开关</text>
        <view class="item-value">
          <text class="value-text">{{ wifiStatus }}</text>
        </view>
      </view>
    </view>
    <view class="tip-container" v-if="showTip">
          <view class="tip-icon">
            <text class="icon-text">i</text>
          </view>
          <view class="tip-texts">
            <text class="tip-text">1. 受设备性能影响，可能较为卡顿</text>
            <text class="tip-text">2. 可能由于开启应用过多导致卡顿，请关闭其他应用再试试吧</text>
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
      deviceBrand: '小米',
      osVersion: 'Android11',
      deviceModel: 'M293003899AC',
      clientPlatform: 'Android',
      devicePerformance: '40',
      cpuModel: '骁龙888PLUS',
      deviceMemory: '12GB',
      wifiStatus: '关',
    };
  },
  watch: {
    showTip(newVal) {
      console.log('equire子组件接收到的showTip:', newVal);
    }
  }
};
</script>

<style scoped>
/* 设备卡片样式 */
.device-card {
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
  color:#333;
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
   background-color: transparent; /* 内部透明，无填充 */
  color:#ff7f00;
  border: 3rpx solid #ff7f00; /* 橙色外边框 */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10rpx;
  flex-shrink: 0; /* 防止图标被压缩 */
}
.icon-text {
  /* font-style: italic; */
  font-size: 16rpx;
  color: #ff7f00; /* 白色感叹号 */
   /* transform: skewX(10deg); */
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
