<template>
  <view class="float-window" v-if="display">
    <view class="shadow" @tap="hide"></view>
    <view class="slot-box">
      <slot />
      <image class="close" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/close.svg" @tap="hide"/>
    </view>
  </view>
</template>

<script src="./floatWindow.js"></script>
<style lang="scss" src="./floatWindow.scss" scoped></style>
