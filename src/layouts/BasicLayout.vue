<script setup lang="ts">
  import {useRouter} from "vue-router";

  const router = useRouter()

  const onClickRight = () => {
    router.push('/search')
  }
</script>

<template>
  <van-nav-bar
      title="Title"
      left-arrow
      @click-left="() => router.back()"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>

  <div id="content">
    <router-view></router-view>
  </div>
  
  <router-link to="/">Go to Home</router-link>
  <router-link to="/team">Go to Team</router-link>

  <van-tabbar route>
    <van-tabbar-item to="/" icon="home-o" name="index">Home</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">Team</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">Me</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>

</style>