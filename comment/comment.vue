<template>
  <view class="comment">
    <view class="comment-bar" @tap="toggleComment">
      <view class="fake-input"></view>
      <view class="submit">评论</view>
    </view>
    <view class="shadow" v-if="show_comment" @tap="toggleComment"></view>
    <view :class="['comment-window', comment_anime]" v-if="show_comment">
      <view class="close" @tap="toggleComment">取消</view>
      <scroll-view :scroll-y="true" style="max-height: 90vh">
        <instruction>
          <view class="p">请文明发言</view>
        </instruction>
        <mtextarea title="讨论内容"/>
        <select-image v-if="!disableimage"/>
        <submit />
      </scroll-view>
    </view>
  </view>
</template>

<script src="./comment.js"></script>
<style lang="scss" src="./comment.scss"></style>
