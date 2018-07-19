import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text, Platform, Image } from "react-native";


class MenuNav extends Component {

    render() {
        return (
            <View style={styles.headerMenu}> 
               {/* <View style={[styles.boxContainer, styles.boxOne]}> */}
                    <TouchableOpacity
                        onPress={this.props.onClickFunction} >
                        <Image
                            source={require('../../assets/icons/menu.png')}
                            style={{height:13, width:22}}
                        /> 
                    </TouchableOpacity>
                {/* </View>   */}
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
    // container: {
    //     flex:1,
    //     flexDirection: 'row',
    //     marginTop: Platform.OS === 'ios' ? '10%' : '10%',
    //     ...Platform.select({
    //       ios: { backgroundColor: '#fafbfe'},
    //       android: { backgroundColor: '#fafbfe'}
    //     }),
    //     marginRight: '9%',     
    //     marginLeft: '9%'  
    // },  
    //   boxContainer:{
    //     flex:1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: "blue"
    // },
    // boxOne: {
    //     backgroundColor: 'blue',
    //     alignItems:'flex-end'
    // }, 
})
  

export default MenuNav
