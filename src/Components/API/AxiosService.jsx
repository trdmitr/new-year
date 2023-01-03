import axios from 'axios'
// import React from 'react'

export default class AxiosServise {
    static async getCavers() {
        const config = {
            headers: {
                'X-Access-Key': '$2b$10$uNKdqlNveTZfgBvIJNkSsedScM0e6eJ8wDkF8HSnAQOVtOZFHdDz.'
            },
        };
       
const response = await  axios.get("https://api.jsonbin.io/v3/b/63b4278c15ab31599e2b3846", config)
      return response.data 
}  
static async getPlayers() {
    const config = {
        headers: {
            'X-Access-Key': '$2b$10$uNKdqlNveTZfgBvIJNkSsedScM0e6eJ8wDkF8HSnAQOVtOZFHdDz.'
        },
    };
   
const response = await  axios.get("https://api.jsonbin.io/v3/b/63b4506e15ab31599e2b594b", config)
  return response.data 
}  
}