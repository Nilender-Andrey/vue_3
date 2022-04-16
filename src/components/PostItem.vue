<template>
  <div class="post">
    <div>
      <div><strong> Название: </strong>{{ post.title }}</div>
      <div><strong> Описание: </strong>{{ post.body }}</div>
    </div>

    <div class="post__btns">
      <custom-button @click="$router.push(`/posts/${post.id}`)"
        >Открыть</custom-button
      >
      <custom-button @click="$emit('remove', post)">Удалить</custom-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

.post__btns {
  display: flex;
  gap: 10px;
}
</style>
