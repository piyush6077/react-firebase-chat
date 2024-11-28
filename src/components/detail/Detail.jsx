import React from 'react'
import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem, ipsum dolor lorem</p>
      </div>
      
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photo</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
              <img src="./mic.png" alt="" />
              <span>photo2024.png</span>
            </div>
            <img src="./download.png" alt=""  className='icon'/>
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="./mic.png" alt="" />
              <span>photo2024.png</span>
            </div>
            <img src="./download.png" alt=""  className='icon' />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="./mic.png" alt="" />
              <span>photo2024.png</span>
            </div>
            <img src="./download.png" alt=""  className='icon' />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="./mic.png" alt="" />
              <span>photo2024.png</span>
            </div>
            <img src="./download.png" alt=""  className='icon'/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout'>Log out</button>
      </div>
    </div>
  )
}

export default Detail
