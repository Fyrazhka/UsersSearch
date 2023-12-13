import React from 'react';
import axios from "axios";
export default class PostService {
        static async getAll(query=10,imgNeed=false){
            try {
                const response = await axios.get(`https://randomuser.me/api/?results=${query}`);
                let formattedPosts=[{}]
                if(imgNeed)
                    formattedPosts = response.data.results.map(user => ({
                        id: user.login.uuid,
                        title: `${user.name.last} ${user.name.first} ${user.name.title}`,
                        body: user.email,
                        imageUrl: user.picture.large
                    }));
                else
                    formattedPosts = response.data.results.map(user => ({
                        id: user.login.uuid,
                        title: `${user.name.last} ${user.name.first} ${user.name.title}`,
                        body: user.email,
                    }));

                return formattedPosts



            } catch (error) {
                console.error('Error fetching posts:', error);
            }

        }
}

