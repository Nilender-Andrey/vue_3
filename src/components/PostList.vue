<template>
  <div v-if="posts.length > 0">
    <h4 class="title-posts-list">Список пользователей</h4>

    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
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

<style scope>
.title-posts-list {
  margin-top: 20px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform 0.4s ease;
}
</style>
