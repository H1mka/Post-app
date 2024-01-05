<template>
  <button>{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CustomButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  background-color: var(--dark-purple);
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 6px;
  width: 100px;
  border: 2px solid var(--dark-purple);
  color: #fff;

  &:hover {
    background-color: #fff;
    color: var(--dark-purple);
  }
}
</style>
