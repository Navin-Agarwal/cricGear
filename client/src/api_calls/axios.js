import axios from "axios";

const instance = axios.create({
  // baseURL: "https://cricgearnavin-dp3vzurw8-navin-agarwals-projects.vercel.app/",
  // baseURL: "http://localhost:5000/",
  baseURL: "https://cric-gear-oihj.vercel.app/",
  withCredentials: true, // Enable this for authentication
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
        return getData;

      case "POST":
        const { data: postData } = await instance.post(url, body);
        return postData;

      default:
        throw new Error("Invalid request type");
    }
  } catch (error) {
    console.error("API Error:", error);
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};

export default callServer;
