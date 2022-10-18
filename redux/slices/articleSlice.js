import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    articles: [],
    status: null,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        setArticles: (state, action) => {
            state.articles = action.payload
        }
    },
})

export const { setArticles } = articleSlice.actions

export default articleSlice.reducer