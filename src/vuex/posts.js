import appService from "../app.service";
const state = {
  posts: [],
  categoryId: 0
};

const getters = {
  posts: state => state.posts
};

const actions = {
  udpateCategory(context, categoryId) {
    appService.getPosts(categoryId).then(data => {
      context.commit("udpateCategory", { categoryId, posts: data });
    });
  }
};

const mutations = {
  udpateCategory(state, category) {
    state.categoryId = category.categoryId;
    state.posts = category.posts;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
