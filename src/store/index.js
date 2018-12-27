import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // header menu
    body_leftBar_state: false,
    // body popView
    body_popView_state: false,
    // popView article
    body_popView_article: {
      title: '',
      author: '',
      id: '',
      edit_times: 0,
      reply: 0,
      liked: 1
    },
    // body popPub
    body_popPub_state: false
  },
  mutations: {
    // header menu
    change_body_leftBar_state (state, bool) {
      state.body_leftBar_state = bool
    },
    // body popView
    change_body_popView_state (state, bool) {
      state.body_popView_state = bool
    },
    change_body_popView_article (state, obj) {
      state.body_popView_article = obj
    },
    // body popPub
    change_body_popPub_state (state, bool) {
      state.body_popPub_state = bool
    }
  },
  actions: {
    // header menu
    set_body_leftBar_state (context, bool) {
      context.commit('change_body_leftBar_state', bool)
    },
    // body popView
    set_body_popView_state (context, bool) {
      context.commit('change_body_popView_state', bool)
    },
    set_body_popView_article (context, obj) {
      context.commit('change_body_popView_article', obj)
    },
    // body popPub
    set_body_popPub_state (context, bool) {
      context.commit('change_body_popPub_state', bool)
    }
  }
})
