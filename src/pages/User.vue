<script setup lang="ts">
  import type {UserType} from "../models/user";
  import {useRouter} from "vue-router";

  const user: UserType = {
    id: 1,
    username: "admin",
    userAccount: "admin",
    avatarUrl: "https://avatars.githubusercontent.com/u/10263808?v=4",
    gender: 0,
    phone: "12345678901",
    email: "admin@admin.com",
    planetCode: "12345678"
  }
  const router = useRouter()
  const toEdit = (editKey: string, editName: string, currentValue?: string) => {
    router.push({
      path: '/user/edit',
      query: {
        editKey,
        currentValue,
        editName
      }
    })
  }
</script>

<template>
  <van-cell-group>
    <van-cell title="username" is-link to="/user/edit" :value="user.username" @click="toEdit('username', 'username', user.username)"/>
    <van-cell title="userAccount" :value="user.userAccount" />
    <van-cell title="avatarUrl" is-link to="/user/edit" :value="user.avatarUrl" @click="toEdit('avatarUrl', 'avatarUrl', user.avatarUrl)">
      <img style="height: 68px" :src="user.avatarUrl" alt="">
    </van-cell>
    <van-cell title="gender" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender', 'gender', user.gender.toString())" />
    <van-cell title="phone" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone', 'phone', user.phone)"/>
    <van-cell title="email" is-link to="/user/edit" :value="user.email" @click="toEdit('email', 'email', user.email)"/>
    <van-cell title="planetCode" :value="user.planetCode" />

  </van-cell-group>
fawesfwaef
</template>

<style scoped>

</style>