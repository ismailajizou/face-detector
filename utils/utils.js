export const apiURL = "https://vast-bastion-34313.herokuapp.com";

export const calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const width = 300;
  const height = 300;
  return {
    leftCol : clarifaiFace.left_col * width,
    topRow : clarifaiFace.top_row * height,
    rightCol : width - (clarifaiFace.right_col *width),
    bottomRow : height - (clarifaiFace.bottom_row * height)
  }
}