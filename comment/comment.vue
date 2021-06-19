<template>
  <view class="comment">
    <view class="comment-bar" @tap="toggleComment">
      <view class="fake-input"></view>
      <view class="submit">评论</view>
    </view>
    <view class="shadow" v-if="show_comment"></view>
    <view class="comment-window" v-if="show_comment">
      <view class="close" @tap="toggleComment">取消</view>
      <instruction>
        <view class="p">请文明发言</view>
      </instruction>
      <mtextarea title="讨论内容"/>
      <select-image />
      <submit />
    </view>
  </view>
</template>

<script src="./comment.js"></script>
<style lang="scss" src="./comment.scss"></style>
