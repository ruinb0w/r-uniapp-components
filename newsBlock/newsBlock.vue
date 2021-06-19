<template name="news-block">
  <view class="news" >
    <type-scroll-bar @switch="switchNewsType" :list="tab_list"/>
    <article-card v-for="item in news_list[current_news_index].list" :key="item.title" :detail="item"/>
    <empty v-if="!news_list[current_news_index] || news_list[current_news_index].list.length == 0"/>
  </view>
</template>

<script src="./newsBlock.js"></script>
<style lang="scss" src="./newsBlock.scss"></style>
