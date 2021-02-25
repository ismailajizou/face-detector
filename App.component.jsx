import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './Components/Home/Home.component';
import {AppContainer, Container} from "./App.styles"
import Particles from "react-particles-js";

const particlesParams = {
    particles: {
      number: { value: 120, density: { enable: true, value_area: 700 } },
    },
  };

export default function App() {
    return (
      <Container style={{flex: 1}}>
        <AppContainer style={{flex: 1}}>
          <Particles 
            style={{position: "fixed",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: -1
            }}
            params={particlesParams} />
            <StatusBar style="auto" />
            <Home />
        </AppContainer>
      </Container>
    );
}