import React from 'react';
import { Text } from "react-native";
import { useFonts } from 'expo-font';
import styled from 'styled-components/native';

const CustomText = ({style, children}) => {
    const [loaded] = useFonts({
        Courrier: require('../../assets/fonts/Courrier.ttf'),
      });
        
  if (!loaded) {
    return null;
  }
    return ( 
        <StyledText style={style}>{children}</StyledText>
     );
}
const StyledText = styled.Text`
  font-family: "Courrier";
`
 
export default CustomText;