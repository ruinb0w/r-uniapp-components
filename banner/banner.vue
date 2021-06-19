<template name="banner">
  <view class="banner" >
    <swiper class="swiper">
      <swiper-item v-for="(item,index) in banner_list" :key="item.title">
        <navigator class="nav-box" :url="item.url">
          <image class="banner-img" :src="item.img_url" mode="aspectFill"/>
          <view class="banner-tip" >
            <view class="item-title" >{{item.title}}</view>
            <view class="item-index" >{{index+1}}/{{banner_list.length}}</view>
          </view>
        </navigator>
      </swiper-item>
    </swiper>
  </view>
</template>

<script src="./banner.js"></script>
<style lang="scss" src="./banner.scss"></style>
