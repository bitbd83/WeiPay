import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text, Platform, Image } from "react-native";


class BackNavBar extends Component {

    render() {
        return (
            <View style={styles.headerBack}> 
                <TouchableOpacity
                    onPress={this.props.onClickFunction} >
                    <Image
                        source={require('../../assets/icons/back.png')}
                        style={{height:20, width:20}}
                    /> 
                </TouchableOpacity>
            </View>  
        );
    }
}

const styles = StyleSheet.create({
    headerBack: {
        marginTop: Platform.OS === 'ios' ? '7.5%' : '2%',
        ...Platform.select({
          ios: { backgroundColor: '#fafbfe'},
          android: { backgroundColor: '#fafbfe'}
        }),
        marginLeft: '9%',       
      },   
})
  

export default BackNavBar
