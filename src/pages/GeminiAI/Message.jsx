import React from 'react'
import UserMessage from './UserMessage'
import AIMessage from './AIMessage'

const Message = ({type, message}) => {
  if(type == "user"){
    return<UserMessage message={message}/>
  }else{
    return<AIMessage message={message}/>
  }
}

export default Message