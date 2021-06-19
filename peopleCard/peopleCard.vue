<template>
  <view :class="['people-card', {shadow: shadow}]">
    <image class="avatar" :src="detail.avatar" />
    <view class="info-box">
      <view class="name">{{detail.name}}</view>
      <view class="unit">{{detail.unit}}</view>
      <view class="position">{{detail.position}}</view>
    </view>
    <view class="operation-list">
      <view class="operation" v-for="item in operation_list" :key="item.id">{{item.title}}</view>
    </view>
  </view>
</template>

<script src="./peopleCard.js"></script>
<style lang="scss" scoped src="./peopleCard.scss"></style>
