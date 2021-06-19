<template >
  <view :class="['post-card', {sub: detail.title?false: true}]">
    <view class="title-box" v-if="detail.title">
      <view class="title" >{{detail.title}}</view>
      <image class="operation" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/dots.svg" />
    </view>
    <view class="user-info">
      <image class="avatar" :src="detail.avatar" />
      <view class="right-box">
        <view class="nickname">{{detail.nickname}}</view>
        <view class="time">{{detail.time}}</view>
      </view>
      <image v-if="!detail.title" class="operation" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/dots.svg" />
    </view>
    <view class="content">{{detail.content}}</view>
    <view class="operation-bar">
      <view class="operation-item" v-for="item in detail.operation_list" :key="item.icon"
      @tap="emitHandler(item)">
        <image class="icon" :src="item.icon" />
        <view class="count">{{item.num}}</view>
      </view>
    </view>
  </view>
</template>

<script src="./postCard.js"></script>
<style lang="scss" src="./postCard.scss"></style>
