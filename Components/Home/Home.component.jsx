import React from 'react';
import axios from 'axios';
import FaceDetection from '../FaceDetection/FaceDetection.component';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm.component';
import NavBar from '../NavBar/NavBar.component';
import { HomeContainer } from './Home.styles';
import {calculateFaceLocation, apiURL } from '../../utils/utils'
import { Alert } from 'react-native';


class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            prevInput: '',
            input: '',
            imageUrl: '',
            box: {}
        }
    }
    displayFaceBox = (box) => {
        this.setState({box: box});
    }

    onBtnSubmit = () =>{
        const { input, prevInput }= this.state;
        this.setState({imageUrl: input});
        if(input !== prevInput && input){
          this.setState({prevInput: input});
            axios
            .post(`${apiURL}/imageurl`, { input })
            .then(response => {
            this.displayFaceBox(calculateFaceLocation(response.data));
            })
            .catch(err => {
                alert('An error occured while communcating with the server');
                Alert.alert("Error occured", 'An error occured while communcating with the server', [
                    {text: "Ok", onPress: () => this.setState({input: ""})}
                ]);
            });
        }
    }

    onInputChange = (text) => {
        this.setState({input: text});
    }
    render(){
        const {imageUrl, box} = this.state;
        return (
            <HomeContainer>
                <NavBar />
                <ImageLinkForm 
                    onInputChange={(txt) => this.onInputChange(txt)}
                    onBtnSubmit={this.onBtnSubmit}
                />
                <FaceDetection imageUrl={imageUrl} box={box}/>
            </HomeContainer>
        );
    }
}
export default Home;