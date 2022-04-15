<template>
  <div class="app">
    <!-- подписываемся на событие -->
    <PostForm @create="createPost" />

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

  /* Данные */
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
    };
  },
  /* Функции */
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
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
