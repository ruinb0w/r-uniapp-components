<template >
  <navigator :class="['address-card', {shadow}]" :url="detail.url">
    <view class="content">
      <!-- 标题 -->
      <view class="title">{{detail.title}}</view>

      <!-- 位置 -->
      <view class="location" @tap="openLocation">
        <image class="icon" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/location-active.svg" />
        <view class="text">{{detail.address}}</view>
      </view>

      <!-- 时间 -->
      <view class="time">
        <image class="icon" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/time-fill.svg" />
        <view class="text">{{detail.time}}</view>
      </view>
    </view>

    <image class="icon" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/arrow-right.svg" />
  </navigator>
</template>

<script src="./addressCard.js"></script>
<style lang="scss" src="./addressCard.scss"></style>
