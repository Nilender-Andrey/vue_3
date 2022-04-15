<template>
  <div>
    <h5>Список пользователей</h5>
    <PostItem v-for="post in posts" :post="post" />
  </div>
</template>
<script>
import PostItem from '@/components/PostItem';
export default {
  components: { PostItem },

  props: {
    posts: {
      type: Array, // тип
      required: true, // обязательно
    },
  },
};
</script>
<style></style>
