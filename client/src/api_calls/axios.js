import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // baseURL: "http://localhost:5000/",
  // withCredentials: true,  // Add this if using credentials
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
  },
});

const callServer = async ({ url, type, body }) => {
  try {
    switch (type) {
      case "GET":
        const { data: getData } = await instance.get(url);

        if (getData.success) {
          return getData;
        }
        break;
      case "POST":
        const { data: postData } = await instance.post(url, body);
        console.log("Post Data",postData)
        if (postData.success) {
          return postData;
        }
        break;
      default:
        break;
    }
  } catch (error) {
    return error;
  }
};
export default callServer;
