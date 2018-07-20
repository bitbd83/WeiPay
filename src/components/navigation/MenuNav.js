import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text, Platform, Image } from "react-native";

class MenuNav extends Component {

    render() {
        return (
            <View style={styles.headerMenu}>               
                <TouchableOpacity
                    onPress={this.props.onClickFunction} >
                    <Image
                        source={require('../../assets/icons/menu.png')}
                        style={{height:13, width:22}}
                    /> 
                </TouchableOpacity>             
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerMenu: {
        marginTop: Platform.OS === 'ios' ? '7.5%' : '2%',
        ...Platform.select({
          ios: { backgroundColor: '#fafbfe'},
          android: { backgroundColor: '#fafbfe'}
        }),
        marginRight: '9%',  
        alignItems: 'flex-end'     
      },   
})
  
export default MenuNav
