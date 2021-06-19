<template>
  <view class="user-card" >
    <!-- <image class="avatar" :src="!is_login? '/static/icons/people.png': avatarUrl" mode="aspectFill"/> -->
    <image class="avatar" :src="'/static/icons/people.png'" mode="aspectFill"/>
    <view class="decorate d1" ></view>
    <view class="decorate d2" ></view>
    <view class="name-position" >
      <block>
        <navigator class="name" url="/pages/user/login/login" >请先登录</navigator>
        <!-- <view class="name" else >{{nickName}}</view> -->
      </block>
      <!-- <view class="position" >{{!is_login? '未登录': info.position}}</view> -->
      <view class="position" >{{'未登录'}}</view>
    </view>
  </view>
</template>

<script src="./userCard.js"></script>
<style scoped lang="scss" src="./userCard.scss"></style>
