import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native';
import React from 'react'

export default function SearchBar() {
    return (
        <View style={{...styles.searchBar, flexDirection: 'row', height:50}} >
            <TextInput placeholder="Search" placeholderTextColor="grey" style={{flex:10}}/>
            <TouchableOpacity style={{flex:1,width:30,height:30}} >
                <Image style={{flex:1,width:30,height:30}}
                     source = {require('../../assets/icons/search.png')}>
                </Image>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    searchBar: {
        marginTop: 10,
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
       
    },
});