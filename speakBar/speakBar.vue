<template>
  <view class="speak-bar">
    <input class="input" @input="setValue" @blur="setValue" />
    <image class="img" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/add-img.svg" @tap="selectImg"/>
    <view class="submit" >发送</view>
  </view>
</template>

<script src="./speakBar.js"></script>
<style lang="scss" src="./speakBar.scss"></style>
