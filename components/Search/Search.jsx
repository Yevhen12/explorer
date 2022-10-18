import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/filterSlice';

const Search = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch()

    useEffect(() => {
        const subsriber = setTimeout(() => {
          dispatch(setSearch(text))
        }, 300)
    
        return () => clearTimeout(subsriber)
    
      }, [text, dispatch])

    return (
        <TextInput
            style={styles.input}
            value={text}
            onChangeText={text => setText(text)}
            placeholder='Search...'
        />
    );
};
const styles = StyleSheet.create({
    input: {
        marginTop: 15,
        fontSize:16,
        marginHorizontal: 20,
        height: 50,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
    },
})


export default Search;