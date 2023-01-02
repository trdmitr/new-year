import axios from 'axios'
// import React from 'react'

export default class AxiosServise {
    static async getCavers() {
        const config = {
            headers: {
                'X-Access-Key': '$2b$10$uNKdqlNveTZfgBvIJNkSsedScM0e6eJ8wDkF8HSnAQOVtOZFHdDz.'
            },
        };
       
const response = await  axios.get("https://api.jsonbin.io/v3/b/639c448d01a72b59f2321459", config)
      return response.data 
}  
}