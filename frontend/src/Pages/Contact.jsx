import React from 'react'
import Pageheader from '../Components/Contact/Pageheader'
import Contactdetail from '../Components/Contact/Contactdetail'
import Form from '../Components/Contact/Form'


export const Contact = () => {
  return (
    <div>
      <Pageheader/>
      <Contactdetail/>
      <Form/>
    </div>
  )
}

export default Contact