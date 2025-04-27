import { Platform } from "react-native";

export const BASE_URL = Platform.OS === 'android' ? 
    'http://localhost:3000' :
    'http://192.168.151.148:3000'

export const SOCKET_URL = Platform.OS === 'android' ? 
    'ws://localhost:3000' :
    'ws://192.168.151.148:3000';

//USE YOUR NETWORK IP OR HOSTED URL
//export const BASE_URL = 'http://192.168.29.236:3000'

//export const SOCKET_URL = Platform.OS === 'android' ?
//      'ws:http://192.168.29.236:3000' :
//      'http://10.0.2.2:3000'