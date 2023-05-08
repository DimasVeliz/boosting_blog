import React, { useState,useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import api from '../service/api';

const Home = () => {

  const [topics, setTopics] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await api.getTopics();
        setTopics(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTopics();
  }, [cat]);


  return (
    <div className="home">
      <div className="posts">
        {topics.map((topic) => (
          <div className="post" key={topic.id}>
            <div className="img">
              <img src={topic.image} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${topic.id}`}>
                <h1>{topic.title}</h1>
                <p>{topic.description}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home