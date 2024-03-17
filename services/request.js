import axios from "axios";


const request = async (url, data = false, method = 'GET') => {
    try {
      const options = {
        method,
        url: process.env.EXPO_PUBLIC_API_URL + url,
        
      };

      if (data && method === 'POST') {
        options.data = data;
      }
  
      const response = await axios(options);
      return response.data
    } catch (error) {
      throw error;
    }
  };
  
  export const post = (url, data ) => request(url, data, 'POST');
  export const get = (url ) => request(url, false, 'GET');