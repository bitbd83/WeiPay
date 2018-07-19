import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text, Platform, Image } from "react-native";

class BackNavWithMenu extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.boxContainer, styles.boxOne]}>
                    <TouchableOpacity
                        onPress={this.props.backFunction} >
                        <Image
                            source={require('../../assets/icons/back.png')}
                            style={{height:20, width:20}}
                        /> 
                    </TouchableOpacity>
                </View>
                <View style={[styles.boxContainer, styles.boxTwo]}>
                    <TouchableOpacity
                         onPress={this.props.menuFunction} >
                         <Image
                             source={require('../../assets/icons/menu.png')}
                             style={{height:13, width:22}}
                         /> 
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{ 
        flexDirection: 'row',
        marginTop: Platform.OS === 'ios' ? '5%' : '2%',
        marginRight: '9%',
        marginLeft: '9%',
        height: Platform.OS === 'ios' ? 40 : 40,
        backgroundColor: 'purple',
        justifyContent:'center'
    },
     boxContainer:{
         flex:1,
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: "blue"
     },
     boxOne: {
         backgroundColor: 'blue',
         alignItems:'flex-start'
     },
     boxTwo: {
        backgroundColor: 'green',
        alignItems:'flex-end',
        zIndex: 100
    }
})
  

export default BackNavWithMenu
