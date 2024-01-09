<template>
  <div class="dialog-wrapper" v-if="show" @click="closeModal">
    <div class="dialog-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CustomDialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      console.log(1);
      this.$emit('update:show', false);
    },
  },
});
</script>

<style lang="scss">
.dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0a0a0a69;

  display: flex;
  justify-content: center;
  align-items: center;

  .dialog-content {
    background-color: #fff;
    padding: 20px;
    // flex-basis: 50%;
    width: 600px;
  }
}
</style>
