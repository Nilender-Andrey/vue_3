<template>
  <div class="post">
    <div><strong> Название: </strong>{{ post.title }}</div>
    <div><strong> Описание: </strong>{{ post.body }}</div>
  </div>
</template>
<script>
export default {
  /* Получаем пропсы */
  props: {
    post: {
      type: Object, // тип
      required: true, // обязательно
    },
  },
};
</script>
<style>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
