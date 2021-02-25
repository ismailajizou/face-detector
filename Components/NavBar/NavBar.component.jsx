import React from 'react';
import { NavContainer, Profile} from './NavBar.styles';
import CustomText from '../CustomText/CustomText.component'


const NavBar = () => {
    return (
        <NavContainer>
            <CustomText 
            style={{fontSize: 30, fontWeight: "700", color: "white"}}
            >Face Detector</CustomText>
            <Profile 
            source={require("../../assets/favicon.png")} 
            />
        </NavContainer>
    );
}

export default NavBar;