<template>
  <div v-if="posts.length > 0">
    <h4>Список пользователей</h4>

    <PostItem
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else style="color: red">Список постов пуст</h2>
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
