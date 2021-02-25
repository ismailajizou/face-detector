import React from "react";
import {Image} from 'react-native';
import { FaceField, BoundingBox } from './FaceDetection.styles'


const FaceDetection = ({box, imageUrl}) => {

  return (
      <FaceField>
        <Image source={{uri: imageUrl, width: 300, height: 300}} />
        {
          box.topRow ? 
          <BoundingBox
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
          /> : null
        }
      </FaceField>
  );
};

export default FaceDetection;
