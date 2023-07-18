import { View, Text, TouchableOpacity, Image } from 'react-native'


import React from 'react'

export default function TopBar({Title}) {
    return (
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: 1, alignItems: "flex-start", marginTop: 10 }}>
                <Image style={{height:30,width:30,marginTop:7}} source={require('../../assets/icons/arrow.png')} />
            </TouchableOpacity>
            <Text style={{ flex: 2, textAlign: "center", marginTop: 10, fontSize: 25 }}>{Title}</Text>
            <TouchableOpacity style={{ flex: 1, alignItems: "flex-end", marginTop: 10 }}>
                <Image style={{height:30,width:30,marginTop:7}} source={require('../../assets/icons/3dots.png')} />
            </TouchableOpacity>
        </View>
    )
}


