<template>
  <view :class="['type-scroll-bar', {nourl: !url}]">
    <scroll-view class="type-list" :scroll-x="true" @scroll="scroll" :scroll-left="scroll_left" 
      :scroll-with-animation="true">
      <view :class="['item', 'item'+index, {active: current_index == index}]" 
        v-for="(item, index) in list" :key="item" @tap="switchType" :data-index="index">{{item}}</view>
    </scroll-view>
    <view class="more" v-if="url">更多</view>
  </view>
</template>

<script src="./typeScrollBar.js"></script>
<style lang="scss" src="./typeScrollBar.scss"></style>
