import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const Menu = ({cat}) => {
    const [posts, setPosts] = useState([]);



  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`/api/posts/?cat=${cat}`);
        setPosts(res.data)
      }catch(err){
        console.log(err)
      }
    };
    fetchData();
  },[cat]);

    // const posts = [
    //     {
    //         id: 1,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         img: "https://picsum.photos/400/300?random=1"
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         img: "https://picsum.photos/400/300?random=2"
    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         img: "https://picsum.photos/400/300?random=3"
    //     },
    //     {
    //         id: 4,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         img: "https://picsum.photos/400/300?random=4"
    //     },
    // ];

    return (
        <div className='menu'>
            <h1>Other posts you may like</h1>

            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={`../upload/${post?.img}`} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read more</button>
                </div>
            ))}
        </div>
    );
};

export default Menu;