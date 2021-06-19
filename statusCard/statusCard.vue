<template >
  <view class="status-card">
    <view :class="['stat', {err: detail.status.code == 3}, {wait: detail.status.code == 1}]">
      {{detail.status.text}}
    </view>
    <view class="item address" v-for="item in detail.item_list" :key="item.title">
      <view class="title">{{item.title}}</view>
      <view class="value">{{item.content}}</view>
    </view>
    <view class="reason" v-if="detail.comment">{{detail.comment.title}}: {{detail.comment.content}}</view>
  </view>
</template>

<script src="./statusCard.js"></script>
<style lang="scss" src="./statusCard.scss" ></style>
