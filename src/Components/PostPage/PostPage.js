import { useState, useEffect } from "react"
import styles from './post.module.css';

export default function Post({routerProps}){

    const [post, setPost] = useState({})

    const getPost = async () => {
        try {
            const res = await fetch(`https://eatincolorado-api.herokuapp.com/posts?_id=${routerProps.match.params.id}`);
            const data = await res.json();
            setPost(data[0]);
          } catch (error) {
            console.error(error);
          }
    }

    useEffect(() => {
        getPost();
    },[])

    return(
        <div className={styles.postpagebody}>
            <header>
                <h1>{post.title}</h1>
                <img className={styles.cover} src={post.imageURL} alt={post.dish}></img>
                <p>Cuisine: {post.cuisine}</p>
                <p>Dish: {post.dish}</p>
            </header>
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.body}}>
            </div>
        </div>
    )
}