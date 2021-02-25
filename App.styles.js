import styled from 'styled-components/native';
import { Platform, StatusBar } from "react-native";

export const Container = styled.SafeAreaView`
    padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}
`


export const AppContainer = styled.ScrollView`
    padding: 5px;
    background: #FF5EDF ;
`