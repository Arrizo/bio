<!--
 * @Author: chenzechao
 * @Date: 2024-06-29 16:12:31
 * @LastEditTime: 2024-06-30 21:48:07
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /bio/src/views/home/index.vue
-->
<template>
  <div class="asdfa">
    <section class="sadf">
      <span> asd fa ds </span>
      <i :key="tabName" :name="tabName"> asdfasd</i>
    </section>
  </div>
</template>
<script setup lang="ts" name="home">
  import { dfad, getNAme } from '@/api/name';
  import { reactive, ref } from 'vue';
  const state = reactive({
    name: '2323',
    key: 'asdfasdfadad'
  });
  console.log(getNAme());
  const gg = '';
  dfad();
  gg = 10;
  const tabName = ref<any>('');

  tabName.value = 10;

  tabName.value.toString();
  const keybod = (a, b, b) => {
    try {
    } catch (error) {}
  };
</script>
<style lang="scss" scoped>
  .main {
    width: 100px;
    height: 300px;
    display: none;
  }
</style>
