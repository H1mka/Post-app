<template>
  <div class="not-authorized-wrapper">
    <h1>401</h1>
    <h2>You need to be authorized</h2>
    <div>
      <CustomButton text="Log in" @click="$router.push('/login')" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style lang="scss" scoped>
.not-authorized-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 150px);
  gap: 30px;

  button {
    width: 200px;
  }
}
</style>
