import React from 'react';
import axios from "axios";
export default class PostService {
        static async getAll(query=10){
            const response = await axios.get(`https://randomuser.me/api/?results=${query}`);
            return response
        }
}

