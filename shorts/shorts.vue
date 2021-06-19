<template name="shorts">
  <view :class="['shorts', {shadow}]" >
    <view class="decorate-dot" ></view>
    <view class="shorts-list" >
      <navigator class="shorts-item" v-for="item in shorts_list" :key="item.title"  :url="item.url" >
        <image class="item-icon" :src="item.icon" />
        <view class="item-title">{{item.title}}</view>
      </navigator>
    </view>
  </view>
</template>

<script src="./shorts.js"></script>
<style lang="scss" src="./shorts.scss"></style>
