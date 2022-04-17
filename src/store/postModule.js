export const postModule = {
  state: () => ({
    posts: [],

    isPostsLoading: false,
    selectedSort: '',
    searchQuery: '',
    page: 1,
    limit: 10,
    totalPage: 0,
    sortOptions: [
      { value: 'title', name: 'По названию' },
      { value: 'body', name: 'По содержимому' },
    ],
  }),
  getters: {
    sortedPosts(state) {
      if (state.selectedSort && state.page <= state.totalPage) {
        return [...state.posts].sort((post1, post2) =>
          post1[state.selectedSort].localeCompare(post2[state.selectedSort]),
        );
      }
      return state.posts;
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase()),
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPage(state, totalPage) {
      state.totalPage = totalPage;
    },

    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setLoading', true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          },
        );

        const totalPage = Math.ceil(
          response.headers['x-total-count'] / state.limit,
        );
        commit('setTotalPage', totalPage);

        commit('setPosts', response.data);
      } catch (error) {
        alert('Ошибка');
      } finally {
        commit('setLoading', false);
      }
    },

    async loadMorePosts({ state, commit }) {
      try {
        if (state.page <= state.totalPage) {
          commit('setPage', state.page++);

          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
            {
              params: {
                _page: state.page,
                _limit: state.limit,
              },
            },
          );

          commit('setPosts', [...state.posts, ...response.data]);
        }
      } catch (error) {
        alert('Ошибка');
      }
    },
  },
};
