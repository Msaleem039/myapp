import React from 'react'

const Nav = () => {
  return (
    <div><h1 className='text'>This is my Nav Component</h1>
   
    <div className="card" style={{width:"16rem"}}>
  <img src="/about.jpg" className="card-img-top img" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default Nav