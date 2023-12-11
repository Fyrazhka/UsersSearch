import React from 'react';
import axios from "axios";
export default class PostService {
        static async getAll(query=10){
            try {
                const response = await axios.get('https://randomuser.me/api/?results=20');
                const formattedPosts = response.data.results.map(user => ({
                    id: user.login.uuid,
                    title: `${user.name.last} ${user.name.first} ${user.name.title}`,
                    body: user.email,
                    //imageUrl: user.picture.large
                }));
                return formattedPosts

            } catch (error) {
                console.error('Error fetching posts:', error);
            }

        }
}

