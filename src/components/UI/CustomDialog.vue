<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
  name: 'custom-dialog',
  mixins: [toggleMixin],
};
</script>
<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);
}
.dialog__content {
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid teal;
  background: #fff;
}
</style>
