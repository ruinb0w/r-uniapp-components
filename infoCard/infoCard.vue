<template>
  <view class="info-card">
    <view class="title">{{title}}</view>
    <view class="content">
      <slot />
    </view>
  </view>
</template>

<script src="./infoCard.js"></script>
<style lang="scss" scoped src="./infoCard.scss"></style>
