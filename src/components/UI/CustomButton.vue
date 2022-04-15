<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'custom-button',
};
</script>
<style>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;

  cursor: pointer;

  transition: all 200ms;
}

.btn:hover {
  background: teal;
  color: #fff;
}

.btn:active {
  transform: scale(0.97);
}
</style>
