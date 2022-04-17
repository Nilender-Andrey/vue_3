<template>
  <div>
    <h1>Страница с постами</h1>

    <custom-input v-focus v-model="searchQuery" placeholder="Поиск..." />

    <div class="post__btns">
      <custom-button class="btn_create-post" @click="showDialog"
        >Создать пост</custom-button
      >

      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <custom-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </custom-dialog>

    <PostList
      v-if="!isPostsLoading"
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
    />

    <div v-else>Идет загрузка...</div>

    <div v-intersection="loadMorePosts" class="observer"></div>
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
    return {};
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
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          },
        );

        this.totalPage = Math.ceil(
          response.headers['x-total-count'] / this.limit,
        );

        this.posts = response.data;
      } catch (error) {
        alert('Ошибка');
      } finally {
        this.isPostsLoading = false;
      }
    },

    async loadMorePosts() {
      try {
        if (this.page <= this.totalPage) {
          this.page++;

          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            },
          );

          this.posts = [...this.posts, ...response.data];
        }
      } catch (error) {
        alert('Ошибка');
      }
    },
    /*     changePage(pageNumber) {
      this.page = pageNumber;
      this.fetchPosts();
    }, */
  },

  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      if (this.selectedSort && this.page <= this.totalPage) {
        return [...this.posts].sort((post1, post2) =>
          post1[this.selectedSort].localeCompare(post2[this.selectedSort]),
        );
      }
      return this.posts;
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase()),
      );
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
.post__btns {
  display: flex;
  justify-content: space-between;

  margin: 15px 0;
}

.page__wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.page {
  border: 1px solid teal;
  padding: 10px;

  cursor: pointer;
}

.current-page {
  border: 3px solid teal;
}

.observer {
  height: 30px;
  background-color: gold;
}
</style>
