import styled from "styled-components/native";

export const FaceField = styled.View`
    display: flex;
    align-items: center;
`

export const DetectedImage = styled.Image`
    width: 500px;
    height: auto;
`
export const BoundingBox = styled.View`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
    border: 3px;
    border-color: #149df2;
`