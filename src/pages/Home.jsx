import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Bash",
      desc: "Bash is a powerful shell language that is commonly used in Unix-based systems. Learning Bash can help you automate repetitive tasks, work more efficiently with command-line interfaces, and become a more effective developer or system administrator.",
      image: "https://via.placeholder.com/300x200.png?text=Bash+Image",
    },
    {
      id: 2,
      title: "C++",
      desc: "C++ is a fantastic programming language that is widely used in the development of high-performance software applications, such as operating systems, game engines, and scientific simulations. Learning C++ can help you become a more skilled and versatile software developer, and opens up many opportunities in the tech industry.",
      image: "https://via.placeholder.com/300x200.png?text=C%2B%2B+Image",
    },
    {
      id: 3,
      title: "Python",
      desc: "Python is a popular high-level programming language that is widely used in scientific computing, data analysis, machine learning, and web development. Learning Python can help you become a more effective and efficient programmer, and opens up many opportunities in the tech industry, particularly in the fields of data science and machine learning.",
      image: "https://via.placeholder.com/300x200.png?text=Python+Image",
    },
    {
      id: 4,
      title: "C#",
      desc: "C# is a modern object-oriented programming language that is widely used in the development of Windows applications, web applications, and video games. Learning C# can help you become a skilled software developer, and opens up many opportunities in the tech industry.",
      image: "https://via.placeholder.com/300x200.png?text=C%23+Image",
    },
    {
      id: 5,
      title: "Coding",
      desc: "Learning to code is a valuable skill in today's digital age, with applications in fields ranging from web development to data science to machine learning. Developing coding skills can help you become a more effective problem solver, a more efficient and productive worker, and open up many opportunities in the tech industry and beyond.",
      image: "https://via.placeholder.com/300x200.png?text=Coding+Image",
    }
  ]
  
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.image} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
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