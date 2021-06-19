<template>
  <view class="search-bar">
    <view class="box" >
      <image class="search-icon" src="https://api.lcwmkj.cn/imgbed/sjzhxt/topBar/search-icon.png" />
      <input class="search-content" placeholder="请输入关键词" @input="setContent"/>
    </view>
    <view :class="['search-button', content.length > 0? 'active': '']" @tap="search">搜索</view>
  </view>
</template>

<script src="./searchBar.js"></script>
<style lang="scss" src="./searchBar.scss"></style>
