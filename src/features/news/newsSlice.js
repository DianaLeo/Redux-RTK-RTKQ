import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[]
}

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    try {
        const res = await fetch('https://newsapi.org/v2/top-headlines?apiKey=549ee6eebb9f4f26b1c705374588091a&country=au')
        const data = await res.json()
        return data.articles
    } catch (error) {
        console.error(error)
    }
})

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchNews.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.value = action.payload
        })
    }
})

export const selectNews = state=>state.news.value

export default newsSlice.reducer