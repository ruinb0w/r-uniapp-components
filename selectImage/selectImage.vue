<template>
  <view class="my-addImage" >
    <view class="title" >{{title || '添加图片'}}<text class="must" v-if="is_must">*</text></view>
    <view class="pic-box" >
      <image class="pic-item" v-for="(item, index) in pic_list" :key="item" :src="item"  
        @tap="delPic" :data-index="index" mode="aspectFill"/>
      <image class="pic-item add" @tap="addPic" v-if="pic_list.length < component_max" 
        src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/add.svg" mode="aspectFill"/>
    </view>
  </view>
</template>

<script src="./selectImage.js"></script>
<style lang="scss" scoped src="./selectImage.scss"></style>
