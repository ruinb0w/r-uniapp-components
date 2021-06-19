<template>
  <view :class="['article-card', theme]" @tap="navigate">
    <view class="content-box" >
      <view class="title" >{{detail.title}}</view>
      <view class="brief" >{{detail.content}}</view>
      <view class="info-box" >
        <view class="info-item like" v-if="detail.like">
          <image class="item-icon" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/like.svg" />
          <view class="item-text" >{{detail.like}}</view>
        </view>
        <view class="info-item read" v-if="detail.read">
          <image class="item-icon" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/read.svg" />
          <view class="item-text" >{{detail.read}}</view>
        </view>
        <view class="info-item time" v-if="detail.time">
          <image class="item-icon" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/time.svg" />
          <view class="item-text" >{{detail.time}}</view>
        </view>
      </view>
    </view>
    <image class="pic" :src="detail.img" mode="aspectFill" v-if="detail.img"/>
  </view>
</template>

<script src="./articleCard.js"></script>
<style lang="scss" scoped src="./articleCard.scss"></style>
