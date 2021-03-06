import { AsyncStorage } from 'react-native';
import * as actions from '../../actions/ActionTypes';
import data from '../../constants/data/json/coins.json';

const INITIAL_STATE = {
  newWallet: false,
  walletName: '',
  tokens: [],
  wallet: null,
  backupPassphrase: '',
  coinData: data,
  QrData: '',
  QrScannerInvoker: '',
  current_token: {},
  debugMode: false,
};

/**
 * Reducer used to handle all actions occuring during the process of creating a wallet.
 *
 * Also handles the action invoked by using the QrScanner Component
 */

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.QRSCANNER_DATA:
      return { ...state, QrData: action.payload };
    case actions.CREATING_NEW_WALLET:      
      return { ...state, newWallet: true, wallet: action.payload };
    case actions.NEW_WALLET_NAME:
      return { ...state, walletName: action.payload };
    case actions.ADD_TOKEN_SETUP:
      const current = state.tokens;
      let newTokens = [];
      const index = current.map(token => token.id).indexOf(action.payload.id);
      if (index === -1) {      
        newTokens = [...current, action.payload];
      } else { 
        newTokens = [...current.slice(0, index), ...current.slice(index + 1)];     
      }    
      return { ...state, tokens: newTokens };
    case actions.ADD_TOKEN_INFO:
      return { ...state, current_token: action.payload };
    case actions.DEBUG_MODE:
      return { ...state, debugMode: true };
    default:
      return state;
  }
};
