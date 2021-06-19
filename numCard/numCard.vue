<template>
  <view class="brief-info" >
    <view class="title" >{{title}}</view>
    <view class="brief-box" >
      <navigator class="item" v-for="item in list" :key="item.title" :url="item.url">
        <view class="value">{{item.value}}</view>
        <view class="title">{{item.title}}</view>
      </navigator>
    </view>
  </view>
</template>

<script src="./numCard.js"></script>
<style scoped lang="scss" src="./numCard.scss"></style>
