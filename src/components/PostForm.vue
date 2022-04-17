<template>
  <form class="form" @submit.prevent>
    <h4>Создание поста</h4>
    <custom-input
      v-focus
      class="input_form"
      v-model="post.title"
      type="text"
      placeholder="Название"
    />
    <custom-input
      class="input_form"
      v-model="post.body"
      type="text"
      placeholder="Описание"
    />
    <custom-button class="btn_form" @click="createPost">Создать</custom-button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },

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

.input_form {
  margin: 5px 0;
}

.btn_form {
  align-self: flex-end;

  margin: 5px 17px 0 0;
}
</style>
