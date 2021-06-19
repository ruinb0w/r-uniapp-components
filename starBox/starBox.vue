<template>
  <view :class="['star-box', theme]">
    <view class="title">{{title||'评分'}}: {{star_text}}</view>
    <view class="star-line">
      <view class="star" v-for="(item, index) in star_list" :key="index" @tap="setStar(index)">
        <image class="icon" v-if="item" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/star-active.svg" />
        <image class="icon" v-else src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/star.svg" />
      </view>
    </view>
    <view class="submit" @tap="submit">评分</view>
  </view>
</template>

<script src="./starBox.js"></script>
<style lang="scss" src="./starBox.scss" scoped></style>
