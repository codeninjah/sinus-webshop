import axios from 'axios'
const BASE_URL = 'http://localhost:5000/api/';
const REGISTER_URL = `${BASE_URL}register/`;

const LOGIN_URL = `${BASE_URL}auth/`;

const USER_URL = `${BASE_URL}me/`;


export {LOGIN_URL, REGISTER_URL, USER_URL};

const get = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;

  } catch (error) {
    console.log(error)
  }
}

export async function getUser(userToken) {
    try {
      const response = await BASE_URL.get('/me', {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })
  
      return response.data
    } catch (e) {
      console.log(e.message)
      return false
    }
  }

    
  const post = async (url, obj) => {
    try {
      const token = await axios.post(url, obj);
      console.log(token.data.token)
      return token;
  
    } catch (error) {
      console.log(error)
    }
  }


  const setToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  
  export { setToken};
  export { get, post};