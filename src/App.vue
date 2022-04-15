<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <custom-button @click="showDialog">Создать пост</custom-button>
    <custom-dialog v-model:show="dialogVisible">
      <!-- подписываемся на событие -->
      <PostForm @create="createPost" />
    </custom-dialog>

    <!-- v-bind - полная, : - коротка форма -->
    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Название_1',
          body: 'Описание_1',
        },
        {
          id: 2,
          title: 'Название_2',
          body: 'Описание_2',
        },
        {
          id: 3,
          title: 'Название_3',
          body: 'Описание_3',
        },
      ],
      dialogVisible: false,
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
