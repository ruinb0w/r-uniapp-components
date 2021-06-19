<template>
  <view class="time-address-info">
    <view class="time">
      <view class="start-time">
        <image class="icon" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/time-fill.svg" />
        <view class="text">开始时间: {{detail.time}}</view>
      </view>
      <view class="duration">持续时间: {{detail.duration}}</view>
    </view>
    <view class="address" @tap="openLocation">
      <image class="icon" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/location-active.svg" />
      <view class="text">会议地点: {{detail.address}}</view>
    </view>
  </view>
</template>

<script src="./timeAddressInfo.js"></script>
<style lang="scss" scoped src="./timeAddressInfo.scss"></style>
