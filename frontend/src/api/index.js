import axios from 'axios'
const API = axios.create({
  baseURL: 'http://localhost:5000/api'
})

export async function getUser(userToken) {
    try {
      const response = await API.get('/me', {
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