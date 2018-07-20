import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView, StyleSheet, Text, TextInput, Image, AsyncStorage, Dimensions, Platform } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';
import { Input } from '../../../components/common/Input';
import { newWalletCreation, newWalletNameEntry } from '../../../actions/ActionCreator';
import provider from '../../../constants/Providers';
import LinearButton from '../../../components/LinearGradient/LinearButton';
import BackNavBar from '../../../components/navigation/BackNavBar';
const ethers = require('ethers');

/**
 * Initial setup screen used to allow the user to give their wallet a name after
 * the wallet has been recovered
 */
class CreateWalletName extends Component {

    /**
     * Method is used to navigate back to the recoverWallet screen.
     */
    navigate = () => {
        const navigateToPassphrase = NavigationActions.navigate({ routeName: "recoverWallet" });
        this.props.navigation.dispatch(navigateToPassphrase);
    };

    navigateBack = () => {
        const navigateBackToIndex = NavigationActions.navigate({
            routeName: "createOrRestore",
        });
        this.props.navigation.dispatch(navigateBackToIndex);
    }

    /**
     * Executes the action "newWalletNameEntry" with "name" as the parameter
     * in order to update the name of the wallet in the global state variable
     * @param {String} name 
     */
    getWalletName(name) {
        this.props.newWalletNameEntry(name);
    }

    /**
     * Main Component
     * Returns the form required for the user to set the name of their wallet
     */
    render() {
        return (
            <View style={styles.mainContainer}>   
             <BackNavBar onClickFunction={this.navigateBack }  />                
                <Text style={styles.textHeader} >Wallet Name</Text>                               
                <View style={styles.contentContainer} >
                    <Card containerStyle={{ 
                        width: '82%', 
                        height: '55%', 
                        borderRadius: 7.5, 
                        shadowOpacity: 0.5, 
                        shadowRadius: 1.3, 
                        shadowColor: '#dbdbdb',
                        shadowOffset: { width: 1, height: 2 },                    
                    }}> 
                        <Text style={styles.cardText}>
                            Create a name for your wallet, for example: My Wallet
                        </Text>
                        <FormInput
                            placeholder={"Ex. My Wallet"}
                            onChangeText={this.getWalletName.bind(this)}
                            inputStyle={{width:'100%', flexWrap: 'wrap', color:'#12c1a2'}}
                        /> 
                  </Card>
              </View>
            <View style={styles.btnContainer}>
                <LinearButton 
                    onClickFunction={this.navigate }
                    buttonText="Next"                                           
                />               
            </View>  
            <View style={{ alignItems:'center'}} >    
                <View style={{ alignItems:'center'}} >
                    <Text style={styles.textFooter} >Powered by ChainSafe </Text> 
                </View>  
            </View>   
        </View>
        );
    }
}

/**
 * Styles used in the "CreateWalletNameRecovery" screen
 */
const styles = StyleSheet.create({
      mainContainer: {
        flex: 1,
        paddingTop: '5%',   
        backgroundColor: "#fafbfe",
        width: '100%',
        height: '100%'
    }, 
    contentContainer : {
        alignItems: 'center',
        flex: 1
    },
    cardText : {
        paddingBottom: '20%',
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        fontFamily: "WorkSans-Light",  
        color: '#000000',
        fontSize: 16,
    },
    textHeader: {       
        fontFamily: "Cairo-Light",
        fontSize: 24,        
        paddingLeft: '10%', 
        paddingBottom: '3%',
        marginTop: '5%',
        color: '#1a1f3e'
    },
    btnContainer: {
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        width: '100%',      
    },
    footerContainer: {
        alignItems:"center",         
        alignItems:"center", 
        justifyContent:'flex-end',
        position: 'absolute', 
        bottom: '5%',       
    },
    textFooter : {
        fontFamily: "WorkSans-Regular",
        fontSize: 11,      
        marginTop: '3.5%', 
        color: '#c0c0c0'
    }
})

/**
 * This method is not being used here
 * @param {Object} param0 
 */
const mapStateToProps = ({ newWallet }) => {
    const { walletName } = newWallet;
    return { walletName }
}

export default connect(mapStateToProps, { newWalletNameEntry, newWalletCreation })(CreateWalletName);

