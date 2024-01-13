<template>
  <select name="select" id="" @change="onChange">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IPost, ISortOptions } from '../../types';

export default defineComponent({
  name: 'CustomSelect',
  props: {
    options: {
      type: Array as PropType<ISortOptions[]>,
      default: () => [],
      required: true,
    },
    modelValue: {
      type: String as PropType<keyof IPost>,
      required: false,
    },
  },
  methods: {
    onChange(event: Event) {
      if (event.target instanceof HTMLSelectElement)
        this.$emit('update:modelValue', event.target.value);
    },
  },
});
</script>

<style lang="scss" scoped>
select {
  padding: 10px 0px;
  outline: none;
  border: 2px solid var(--dark-purple);
}
</style>
