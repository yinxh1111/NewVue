import moviesService from "../service/moviesService.js"
export default {
    namespaced: true,
    state: {
        movies: [],
        current: 1,
        pageSize: 2,
        total: 0,
        isLoading: false
    },
    mutations: {
        //把state中的所以状态都设置了方法
        setState(state, payload = {}) {
            // state.movies = payload
            for (const prop in payload) {
                state[prop] = payload[prop];
            }
        }
    },
    actions: {
        fetch(context) {
            context.commit("setState", { isLoading: true })
            const res = moviesService.getMovies(context.state.current, context.state.pageSize)
            context.commit("setState", res)
            context.commit("setState", { isLoading: false })

        }
    }
}