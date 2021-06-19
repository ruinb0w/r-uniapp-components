<template >
  <navigator :class="['address-card', theme]" :url="detail.url">
    <view class="content">
      <!-- 标题 -->
      <view class="title">{{detail.title}}</view>

      <view class="item-list">
        <view class="item" @tap="openLocation" v-for="item in detail.item_list" :key="item.content">
          <image class="icon" v-if="item.icon" :src="item.icon" />
          <view class="title" v-if="item.title">{{item.title}}</view>
          <view class="content">{{item.content}}</view>
        </view>
      </view>
    </view>

    <image class="icon" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/arrow-right.svg" />
  </navigator>
</template>

<script src="./addressCard.js"></script>
<style lang="scss" src="./addressCard.scss"></style>
