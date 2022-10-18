import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sort: 'publishedAt',
    time: {
        name: 'All time'
    },
    search: 'all',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setTime: (state, action) => {
            state.time = action.payload
        },
        setSearch:(state, action) => {
            state.search = action.payload
        }
    },
})

export const { setSort, setTime, setSearch } = filterSlice.actions

export default filterSlice.reducer