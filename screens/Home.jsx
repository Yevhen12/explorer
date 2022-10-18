import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { fetchArticles } from '../redux/slices/thunks/fetchArticles'
import { useDispatch } from 'react-redux'
import HomeMain from '../components/HomeComponents/HomeMain'
import { useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const sort = useSelector(state => state.filterSlice.sort)
  const time = useSelector(state => state.filterSlice.time)
  const search = useSelector(state => state.filterSlice.search)


  const getArticles = async () => {
    dispatch(await fetchArticles())
  }


  useEffect(() => {
    getArticles()
  }, [sort, time.name, search])

  useEffect(() => {
    getArticles()
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <HomeMain />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Home