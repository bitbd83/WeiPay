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
        // flex:1,
        flexDirection: 'row',
        marginTop: Platform.OS === 'ios' ? '10%' : '10%',
        marginRight: '9%',
        marginLeft: '9%'
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
        marginTop: '1%',
        zIndex: 100
    }
    // header: {
    //     marginTop: Platform.OS === 'ios' ? '5%' : '5%',
    //     ...Platform.select({
    //       ios: { backgroundColor: '#fafbfe'},
    //       android: { backgroundColor: '#fafbfe'}
    //     }),
    //     // marginLeft: '9%',   
    //     justifyContent:'center',
    //     backgroundColor:"blue" ,
    //     flexDirection: 'row',
    //     alignItems:"stretch",
    //     width:"100%",
    //     // flex:1    
    // },
    // iconLeft: {
    //     alignSelf:'flex-start', 
    //     // justifyContent:'center', 
    //     backgroundColor:"pink", 
    //     width: '40%',
    //     // marginLeft: '9%',
    //     // marginTop: '5%'
    //     left: '9%'
    // }, 
    // iconRight: {
    //     right: '9%',
    //     alignSelf:'flex-end', 
    //     width: '40%',
    //     backgroundColor: 'red'
    //     // justifyContent:'center', 
    //     // backgroundColor:"pink", 
    //     // marginRight: '9%'
    // }
})
  

export default BackNavWithMenu
