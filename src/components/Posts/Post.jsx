import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './Post.module.scss';

import usePagination from '../../hooks/usePagination';

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

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    totalPages
  } = usePagination({
    contentPerPage: 10,
    count: posts.length,
  });

  return (
    <div className={styles.wrapper__content}>
      <div className={styles.title__content}>
        <h1>Посты</h1>
      </div>
      <ul className={styles.posts__list}>
        {posts
        .slice(firstContentIndex, lastContentIndex)
        .map((item, index) => (
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
      <div className={styles.pagination}>
        <span className={styles.count__page}>{page}/{totalPages}</span>
        <div className={styles.bullets__page}>
          <button
          onClick={() => prevPage()}
          className={styles.prev__page}
          >prev</button>
          {[...Array(totalPages).keys()].map((num) => (
              <span className={`${styles.bullet} ${(num + 1) === page ? styles.bullet__active : " "}`}>{num + 1}</span>
          ))}
          <button 
          className={styles.next__page}
          onClick={() => nextPage()}
          >next</button>
        </div>
      </div>
    </div>

  )
}

export default Post