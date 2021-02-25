import React from 'react';
import {FormContainer, InputForm, CustomInput, CustomButton} from './ImageLinkForm.styles';
import CustomText from '../CustomText/CustomText.component'
import { StyleSheet } from 'react-native';

const ImageLinkForm = ({ onInputChange, onBtnSubmit }) => {
    return ( 
        <FormContainer>
            <CustomText style={textStyle.text}>
                This magic brain will detect faces in your pictures.
            </CustomText>
            <CustomText style={textStyle.text}>
                Give it a try !
            </CustomText>

            <InputForm>
                <CustomInput onChangeText={(txt) => onInputChange(txt)} placeholder="Enter the URI" />
                <CustomButton onPress={onBtnSubmit} title="Detect" color="blue" />
            </InputForm>
        </FormContainer>
     );
}
 
const textStyle = StyleSheet.create({
    text:{
        fontSize: 25,
        color: "white",
        textAlign: "center", 
        fontWeight: "700",
    }
    
});
export default ImageLinkForm;