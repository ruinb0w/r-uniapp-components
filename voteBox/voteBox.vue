<template>
  <view class="vote-box">
    <view class="vote-type">{{type == 'radio' ? '单选': '多选'}}</view>
    <view class="item-list">
      <view :class="['item', {active: item.active}]" v-for="(item, index) in list_to_show" :key="item.title" @tap='select(index)'>{{item.title}}</view>
    </view>
  </view>
</template>

<script src="./voteBox.js"></script>
<style lang="scss" src="./voteBox.scss" scoped></style>
