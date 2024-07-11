import React, { useState } from 'react'
import './AddProduct.css'

const AddProduct = () => {
  const [image,setImage] = useState(false);
  const [productDetails,setProductDetais] = useState({
    name: "",
    image: "",
    catagory:"women",
    new_price:"",
    old_price:""
  })
  const imageHandler = (e)=>{
    setImage(e.target.files[0]);
  }
  const changeHandler = (e)=>{
    setProductDetais({...productDetails,[e.target.name]:e.target.value})
  }
  const Add_Product = async()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append('product',image);
    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data)=>{responseData=data});
    if(responseData.success){
      product.image = responseData.image_url;
      // console.log(product);
      await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        if(data.success){
          alert('Product Added');
        }
        else{
          alert('Failed');
        }
      })
    }
  }
  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" id="" placeholder='Type here'/>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" id="" placeholder='type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" id="" placeholder='type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Catagory</p>
        <select value={productDetails.catagory} onChange={changeHandler} name="catagory" className='add-product-selector'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
        {image?<img className='addproduct-thumbnail-img'  src={URL.createObjectURL(image)} />:<i  className='far fa-upload addproduct-thumbnail-img'></i>}
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
      </div>
      <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct