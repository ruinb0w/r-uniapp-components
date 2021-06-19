<template>
  <view class="image-grid">
    <image v-for="(item, index) in img_list" :key="item" class="img" :src="item" @tap="previewImage" 
      :data-index="index" mode="aspectFill"/>
  </view>
</template>

<script src="./imageGrid.js"></script>
<style lang="scss" scoped src="./imageGrid.scss"></style>
