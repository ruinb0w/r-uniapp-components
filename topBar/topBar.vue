<template name="top-bar">
  <view class="top-bar" >
    <navigator class="search-bar" :url="search_url">
      <image class="search-icon" src="https://api.lcwmkj.cn/imgbed/sjzhxt/topBar/search-icon.png" />
      <view class="search-content" >搜索内容</view>
    </navigator>
    <navigator class="notification" :url="notice_url" >
      <image  class="img" src="https://api.lcwmkj.cn/imgbed/sjzhxt/topBar/notice.svg" />
    </navigator>
  </view>
</template>

<script src="./topBar.js"></script>
<style lang="scss" src="./topBar.scss"></style>
