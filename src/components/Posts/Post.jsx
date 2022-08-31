import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './Post.module.scss';

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(responce => {
        const { data } = responce;
        setPosts(data);
      })
      .catch(error => {
        console.log(error.message);
      });

  }, []);



  return (
    <div className={styles.wrapper__content}>
      <div className={styles.title__content}>
        <h1>Посты</h1>
      </div>
      <ul className={styles.posts__list}>
        {posts.map((item, index) => (
          <li key={index} className={styles.post__item}>
            <div className="title__post">
              <h4>{item.title}</h4>
            </div>
            <div className="body__post">
              <p>{item.body}</p>
            </div>
            <a href="/">Читать полностью</a>
          </li>
        ))}

      </ul>
    </div>

  )
}

export default Post