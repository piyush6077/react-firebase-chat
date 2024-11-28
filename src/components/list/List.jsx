import React from 'react'
import './list.css'
import UserInfo from './userInformation/UserInfo'
import ChatList from './ChatList/ChatList'

const List = () => {
  return (
    <div className='list'>
        <UserInfo/>
        <ChatList/>
    </div>
  )
}

export default List
