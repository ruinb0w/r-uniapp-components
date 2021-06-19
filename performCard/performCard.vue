<template>
  <view class="perform-card" >
    <view class="desc">{{detail.content}}</view>
    <view class="pic-list">
      <image class="pic" v-for="(item, index) in detail.pic_list" :key="item" 
        :src="item" mode="aspectFill" @tap="previewImage" :data-index="index" />
    </view>
    <view class="name" >{{detail.from}}</view>
    <view class="time-box" >
      <view class="time" >{{title1}}: {{detail.time1 ? detail.time1 : detail.time2}}</view>
      <view class="time" >{{title2}}: {{detail.time2}}</view>
    </view>
    <view :class="['operation-box', {'no-operation': operation_list.length == 0}]">
      <view class="button" v-for="(item, index) in operation_list" :key="item.title" @tap="handleOperation" 
        :data-index="index" :style="item.color ? 'color:'+item.color : ''">
        {{item.title}}
      </view>
      <!-- <navigator class="go-detail" :url="url" >查看详情 &gt;</navigator> -->
    </view>
  </view>
</template>

<script src="./performCard.js"></script>
<style lang="scss" scoped src="./performCard.scss"></style>
