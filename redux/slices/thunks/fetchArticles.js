import { createAsyncThunk } from '@reduxjs/toolkit'
import { ARTICLE_API } from '../../../constants/apis'
import { API_KEY } from '../../../constants/apiKey'
import { setArticles } from '../articleSlice';

export const fetchArticles = createAsyncThunk('article/fetchArticles', async (_, { dispatch, getState }) => {

    const sort = getState().filterSlice.sort
    const time = getState().filterSlice.time
    const search = getState().filterSlice.search

    const timeString = time.name === 'All time' ? '' : `&from=${time.from}&to=${time.to}`
    const searchString = search.length === 0 ? 'all' : search


    const response = await fetch(`${ARTICLE_API}?q=${searchString}${timeString}&sortBy=${sort}&apiKey=${API_KEY}`)
    const data = await response.json()

    console.log(data + "fdsfdsfdsfsd");



    dispatch(setArticles(data.articles))

});