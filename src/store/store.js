import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        news: [],
        isAuthenticated: false,
        ScrollDetail: [
            {
                header: 'Politics',
                image: 'political1.png',
                description: 'We support responsible political advertising, and expect all political ads and destinations to comply with local legal requirements.This includes campaign and election laws and mandated election silence periods for any geographic areas they target.'
            },
            {
                header: 'Politics',
                image: 'political1.png',
                description: 'We support responsible political advertising, and expect all political ads and destinations to comply with local legal requirements.This includes campaign and election laws and mandated election silence periods for any geographic areas they target.'
            },
            {
                header: 'Politics',
                image: 'political1.png',
                description: 'We support responsible political advertising, and expect all political ads and destinations to comply with local legal requirements.This includes campaign and election laws and mandated election silence periods for any geographic areas they target.'
            },
            {
                header: 'Politics',
                image: 'political1.png',
                description: 'We support responsible political advertising, and expect all political ads and destinations to comply with local legal requirements.This includes campaign and election laws and mandated election silence periods for any geographic areas they target.'
            },
            {
                header: 'Politics',
                image: 'political1.png',
                description: 'We support responsible political advertising, and expect all political ads and destinations to comply with local legal requirements.This includes campaign and election laws and mandated election silence periods for any geographic areas they target.'
            },
            {
                header: 'Politics',
                image: 'political1.png',
                description: 'We support responsible political advertising, and expect all political ads and destinations to comply with local legal requirements.This includes campaign and election laws and mandated election silence periods for any geographic areas they target.'
            },
            {
                header: 'Politics',
                image: 'political1.png',
                description: 'We support responsible political advertising, and expect all political ads and destinations to comply with local legal requirements.This includes campaign and election laws and mandated election silence periods for any geographic areas they target.'
            }
        ]
    },
    getters: {
        allNews: (state) => state.news,
        isAuthenticated: (state) => state.isAuthenticated,
        Scrolldetails:(state)=>state.ScrollDetail
    },
    actions: {
        async NewsData({ commit }) {
            const response = await axios.get(' https://newsapi.org/v2/top-headlines?country=us&apiKey=1d13311f35404387b2fa0daf701678ad');
            commit('setNews', response.data.articles)
        }
    },
    mutations: {
        setNews(state, news) {
            state.news = news
        },
        setAuth(state, payload) {
            state.isAuthenticated = payload;
        }
    }
})