<template>
  <form class="form" @submit.prevent>
    <h4>Создание поста</h4>
    <input
      class="input"
      v-model="post.title"
      type="text"
      placeholder="Название"
    />
    <input
      class="input"
      v-model="post.body"
      type="text"
      placeholder="Описание"
    />
    <button class="btn" @click="createPost">Создать</button>
  </form>
</template>
<script>
export default {
  /* Данные */
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  /* Функции */
  methods: {
    createPost() {
      this.post.id = Date.now();
      /* Создаем событие (название, передаваемые данные) */
      this.$emit('create', this.post);

      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>
<style>
.form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin: 5px 0;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
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
