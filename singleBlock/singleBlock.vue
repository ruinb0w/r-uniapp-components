<template>
  <view :class="['block', {shadow}, {touch}]" @tap="handleOperation">
    <image class="icon" :src="detail.icon" />
    <view class="title">{{detail.title}}</view>
    <view class="decoration-dot"></view>
  </view>
</template>

<script src="./singleBlock.js"></script>
<style lang="scss" src="./singleBlock.scss" scoped></style>
