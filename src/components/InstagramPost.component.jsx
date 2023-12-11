import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstagramPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_ACCESS_TOKEN' with the access token obtained from Instagram
    const accessToken = 'YOUR_ACCESS_TOKEN';
    const userId = 'YOUR_INSTAGRAM_USER_ID';

    const apiUrl = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`;

    axios.get(apiUrl)
      .then(response => {
        setPosts(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching Instagram posts:', error);
      });
  }, []);

  return (
    <div>
      <h1>Instagram Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <img src={post.media_url} alt={post.caption} />
            <p>{post.caption}</p>
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">View on Instagram</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstagramPosts;
