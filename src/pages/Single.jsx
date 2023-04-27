import React from 'react'
import { Link } from 'react-router-dom'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import Like from "../img/like.png"
import Menu from "../components/Menu"

const Single = () => {

  const handleDelete = () => {

  };

  const handleLike = () => {

  };

  return (
    <div className='single'>
      <div className="content">
        <img src="https://via.placeholder.com/1024x768.png?text=Bash+Image" alt="" />
        <div className="user">
          <img src="https://via.placeholder.com/100x100.png?text=Author+Image" alt="" />
          <div className="info">
            <span>Dimas</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="like">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="" />
            <img onClick={handleLike} src={Like} alt="" />

          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget enim id sem eleifend auctor. In eu efficitur magna, quis condimentum justo. Praesent dictum neque vitae erat volutpat aliquet. 
            <br />
            <br />
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget enim id sem eleifend auctor. In eu efficitur magna, quis condimentum justo. Praesent dictum neque vitae erat volutpat aliquet. Etiam fermentum blandit finibus. Integer ut bibendum nibh. Nullam vestibulum neque a laoreet auctor. Pellentesque molestie et lorem in efficitur. Nunc porta, ipsum eu egestas lobortis, turpis justo semper lectus, ac accumsan velit velit id quam. Duis dictum suscipit nisi, sed sodales dui malesuada vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            <br />
            <br />
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget enim id sem eleifend auctor. In eu efficitur magna, quis condimentum justo. Praesent dictum neque vitae erat volutpat aliquet. Etiam fermentum blandit finibus. Integer ut bibendum nibh. Nullam vestibulum neque a laoreet auctor. Pellentesque molestie et lorem in efficitur. Nunc porta, ipsum eu egestas lobortis, turpis justo semper lectus, ac accumsan velit velit id quam. Duis dictum suscipit nisi, sed sodales dui malesuada vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            <br />
            <br />
          </p>
        </p>
        <button>Previous</button>
        <button>Next</button>
      </div>
      <Menu />
    </div>
  )
}

export default Single