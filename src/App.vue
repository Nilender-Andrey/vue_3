<template>
  <div class="app">
    <h1>Страница с постами</h1>

    <div class="app__btns">
      <custom-button class="btn_create-post" @click="showDialog"
        >Создать пост</custom-button
      >

      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <custom-dialog v-model:show="dialogVisible">
      <!-- подписываемся на событие -->
      <PostForm @create="createPost" />
    </custom-dialog>

    <!-- v-bind - полная, : - коротка форма -->
    <PostList
      v-if="!isPostsLoading"
      :posts="sortedPosts"
      @remove="removePost"
    />

    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import axios from 'axios';

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
      ],
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

    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10',
        );
        this.posts = response.data;
      } catch (error) {
        alert('Ошибка');
      } finally {
        this.isPostsLoading = false;
      }
    },
  },

  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      if (this.selectedSort) {
        return [...this.posts].sort((post1, post2) =>
          post1[this.selectedSort].localeCompare(post2[this.selectedSort]),
        );
      }
      return this.posts;
    },
  },

  /*  watch: {
    selectedSort(newValue) {
      this.posts.sort((post1, post2) =>
        post1[newValue].localeCompare(post2[newValue]),
      );
    },
  }, */
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

.app__btns {
  display: flex;
  justify-content: space-between;

  margin: 15px 0;
}
</style>
