<template>
  <input :value="modelValue" @input="handleChange" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomInput',
  props: {
    modelValue: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    handleChange(event: Event): void {
      if (event.target instanceof HTMLInputElement) {
        this.$emit('update:modelValue', event.target.value);
      }
    },
  },
});
</script>

<style lang="scss">
input {
  width: 100%;
  padding: 6px 12px;
  outline: none;
  border: 2px solid var(--light-purple);
  border-radius: 6px;
  box-sizing: border-box;
}

.input-error {
  border: 2px solid var(--red);
}
</style>
