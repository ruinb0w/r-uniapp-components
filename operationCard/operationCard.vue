<template>
  <view :class="['operation-card', theme]">
    <view class="title">{{title}}</view>
    <navigator class="item" v-for="item in list" :key="item.title" :url="item.url">
      <image class="icon" :src="item.icon" />
      <view class="text" >{{item.title}}</view>
    </navigator>
  </view>
</template>

<script src="./operationCard.js"></script>
<style lang="scss" scoped src="./operationCard.scss"></style>
