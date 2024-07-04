import React, { useEffect, useState } from 'react'
import { FaStar} from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { FaCartShopping} from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { cart, dec, inc } from '../Slice/CounterSlice';

function Single() {
    const [pro,setpro]=useState([])
    
    const dispatch=useDispatch()
    const params=useParams();
    const val=useSelector((state)=>(state.counter.value))
    useEffect(()=>{
        // fetch(`https://dummyjson.com/products/1`)
        fetch(`https://dummyjson.com/products/${params.id}`)
        .then(response=>response.json())
        .then(json=>setpro(json))
        
    })
  return (
    <>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4 d-grid col-md-6 col-sm-4">
              {/* <h1>{pro.id}</h1> */}
                <img src={pro.thumbnail} alt="" className='item_sec  w-100'/>
                <Link to={`/imgsec/`+pro.id}><img src={pro.images} alt="" className='w-50 item_sec mt-2'/></Link>
                {/* <img src={pro.images[1]} alt="" className='w-50 item_sec'/> */}
                {/* <img src={pro.images[2]} alt="" className='w-50 item_sec'/> */}
                {/* <img src={pro.images[3]} alt="" className='w-50 item_sec'/> */}

                  
                <div className='d-flex'>
                <button className='btn text-white fs-5 fw-bold btn_sec mt-3 me-3' onClick={()=>dispatch(cart(pro))}>< FaCartShopping className='me-2 fs-4'/>Add to Cart</button>
                <Link to='/login'><button className='btn text-white fs-5 fw-bold btn-primary mt-3'>Buy Now</button></Link>
                </div>
            </div>
            <div className="col-lg-8 pro_sec col-md-6">
                <p className='fs-4 fw-medium'>{pro.title}</p>
                <button className='d-flex align-items-center bg-success border-0 rounded p-1 text-white fw-bold fs-6'>{pro.rating}<FaStar className='ms-1 text-white'/></button>
                <p className='text-success fw-medium mt-1 fs-6'>Special price</p>
                <div className='d-flex'>
                <h3 className='fs-4'>₹{pro.price} </h3><span className='fs-5 ms-2 text-success fw-bold'>{pro.discountPercentage}%offer</span>
                </div>
                <p className='fs-6 fw-medium return ps-4'>{pro.returnPolicy}</p>
                
                <hr/>
                <h3>Product Details</h3>
                <div className='pro_det mt-4'>
                  <p className='fs-5 fw-medium'>Brand: <span className='fs-6 text-black ms-2'>{pro.brand}</span></p>
                  <p className='fs-5 fw-medium'>Category:<span className='fs-6 text-black ms-2'>{pro.category}</span></p>
                  <p className='fs-5 fw-medium'>Stock:<span className='fs-6 text-black ms-2'>{pro.stock}</span></p>
                  <p className='fs-5 fw-medium'>Tags:<span className='fs-6 text-black ms-2'>{pro.tags}</span></p>
                  <p className='fs-5 fw-medium'>Weight:<span className='fs-6 text-black ms-2'>{pro.weight}</span></p>
    
                  <p className='fs-5 fw-medium'>WarrantyInformation:<span className='fs-6 text-black ms-2'>{pro.warrantyInformation}</span></p>
                  <p className='fs-5 fw-medium'>ShippingInformation:<span className='fs-6 text-black ms-2'>{pro.shippingInformation}</span></p>
                  <p className='fs-5 fw-medium'>AvailabilityStatus:<span className='fs-6 text-black ms-2'>{pro.availabilityStatus}</span></p>

                  {/* <p className='fs-5 fw-medium'>AvailabilityStatus:<span className='fs-6 text-black ms-2'>{pro.meta.qrCode}</span></p> */}
                  {/* <img src={pro.meta.qrCode} alt="" /> */}
                </div>
                <div className='d-flex'>
                <h4 className='fw-medium'>Description:</h4>
                <span className='text-black text'>{pro.description}</span>

                
                </div>
                
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Single
