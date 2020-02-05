import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  let {firstName, lastName,active,imageUrl,gender,area} = props.obj

  let handleclick =  (evt) => {
    
    props.infoHandler(props.obj)
  }
  return(
    <Card
      className="host"
      
   onClick={handleclick}
   image={imageUrl}
      raised
    />
  )
}

export default Host
//  className="host selected" change it later