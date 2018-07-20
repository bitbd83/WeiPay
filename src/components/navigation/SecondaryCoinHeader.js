import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text, Platform, Image } from "react-native";

class SecondaryCoinHeader extends Component {

    render() {
        return (
            <View style={styles.tabHeader} >
                <TouchableOpacity 
                    style={styles.headerButton}
                    onPress={this.props.sendFunction} >
                    <Text style={styles.headerSend}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.headerButton}
                    onPress={this.props.activityFunction}>
                    <Text style={styles.headerActivity}>Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.headerButton}
                    onPress={this.props.receiveFunction}>
                    <Text style={styles.headerReceive} >Receive</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabHeader:{
        flexDirection:'row',  
        backgroundColor:'red', 
        width:'82%',
        justifyContent:'center',
        borderBottomWidth: 1,
        borderBottomColor: '#b3b3b3',
        paddingBottom: '2%',
        marginRight: '9%',
        marginLeft: '9%',
      },
      headerSend :{
        alignSelf:'flex-start',
        fontSize: 19,
        fontFamily: "Cairo-Light", 
        letterSpacing: 0.6,     
      },
      headerActivity: {
        alignSelf:'center',
        fontSize: 19,
        fontFamily: "Cairo-Light", 
        letterSpacing: 0.6, 
      },
      headerReceive: { 
        alignSelf:'flex-end',
        fontSize: 19,
        fontFamily: "Cairo-Light", 
        letterSpacing: 0.6, 
      },
      headerButton: {
        width: '33%'
      },
})

export default SecondaryCoinHeader
