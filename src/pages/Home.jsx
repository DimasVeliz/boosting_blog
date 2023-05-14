import React, { useState,useEffect,useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import api from '../service/api';
import { AuthContext } from '../context/authContext';

const Home = () => {

  const [topics, setTopics] = useState([]);

  const cat = useLocation().search
  const navigate = useNavigate();

  const { currentUser} = useContext(AuthContext)

  useEffect(() => {

    if(currentUser){

      const fetchTopics = async () => {
        try {
          const res = await api.getTopics();
          setTopics(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchTopics();
    }
    else{
      navigate("/login");
    }
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