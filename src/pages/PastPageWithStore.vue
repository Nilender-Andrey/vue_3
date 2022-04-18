<template>
  <div>
    <h1>Страница с постами</h1>

    <custom-input
      v-focus
      v-model="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск..."
    />

    <div class="post__btns">
      <custom-button class="btn_create-post" @click="showDialog"
        >Создать пост</custom-button
      >

      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      dialogVisible: false,
    };
  },

  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
      removePost: 'post/removePost',
    }),

    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),

    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },

    showDialog() {
      this.dialogVisible = true;
    },
  },

  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPage: (state) => state.post.totalPage,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    }),
  },
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
