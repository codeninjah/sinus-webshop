import axios from 'axios'
const BASE_URL = 'http://localhost:5000/api/';
const REGISTER_URL = `${BASE_URL}register/`;

const LOGIN_URL = `${BASE_URL}auth/`;

const USER_URL = `${BASE_URL}me/`;

const ORDER_URL = `${BASE_URL}orders/`;


export {LOGIN_URL, REGISTER_URL, USER_URL, ORDER_URL};

const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


export async function getOrders(token) {
  try {
    const response = await ORDER_URL.get('/orders', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (e) {
    return false
  }
}


const get = async (url) => {
  try {
    const response = await axios.get(url);
    
    const data = response.data;
    return data;

  } catch (error) {
    console.log(error)
  }
}

export async function getUser(token) {
    try {
      const response = await BASE_URL.get('/me', {
        headers: {
          Authorization: `Bearer ${token}`
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

  const placeNewOrder = async (ORDER_URL, items) => {
    try {
      const response = await axios.post(ORDER_URL, items);
      return response;
    } catch (error) {
      console.log(error)
    }
  }


  

  export { setToken, placeNewOrder};
  export { get, post};