<template >
  <view class="select-location">
      <view class="title-sub">{{title || '位置'}}</view>
      <view class="locate" @tap="setLocation">
        <input class="input" :value="address_name" type="text" placeholder="请选择事件发生地点" disabled/>
        <image class="icon" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/location.svg" />
      </view>
  </view>
</template>

<script src="./selectLocation.js"></script>
<style lang="scss" src="./selectLocation.scss"></style>
