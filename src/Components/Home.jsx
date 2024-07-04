import React, { useEffect, useState } from 'react'
import { FaStar} from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CounterSlice, { cart } from '../Slice/CounterSlice';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Home() {
    // const [list,setlist]=useState([])
    const [datas,setdatas]=useState([])
    const [category,setcategory]=useState([])
    const [search,setsearch]=useState('')
    const dispatch=useDispatch()
    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        
            .then(response=>response.json())
            .then(json=>setcategory(json))


            fetch('https://dummyjson.com/products')
        .then(response=>response.json())
        .then(dataapi=>setdatas(dataapi.products))
        
    },[])

    
  const searchdata=(e)=>{
    setsearch(e.target.value)
    fetch(`https://dummyjson.com/products/search?q=${search}`)
    .then(res => res.json())
    .then(response=>setdatas(response.products));
  }

   const pro=(items)=>{
    fetch(`https://dummyjson.com/products/category/${items.slug}`)
            .then(response => response.json())
            .then(response=>setdatas(response.products));
            

   }

   
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex">
                    <div className="col-xl-2 list_sec pt-1 fs-5">
                        <h3 className='text-center mt-3'>Category</h3>

                        <Form className="d-flex justify-content-between">
            <Form.Control
              type="search"
              placeholder="Search Product"
              className="mt-3 mb-3 search_pro fw-medium" 
              aria-label="Search"
              onChange={searchdata}
              value={search}
            />
            </Form>
                    {
                category.map((items)=>{
                    return(
                        <>
                        {/* <a href="" onClick={pro}>{item}</a> */}
                            {/* <ul>
                                <li><a href="" onClick={()=>pro(items)}>{items.name}</a></li>
                            </ul> */}

                        <div className='cate_sec'>
                                         <a href="#" className='text-decoration-none text-dark cate_sec' style={{ fontSize: '18px'}} onClick={() =>pro(items)}>{items.name}</a>
                            </div>
                         </>
                    )

                })
            }
                         </div>
            
                        
                        <div className="col-xl-10 col-md-12">
                            <div className="row">
                                {
                                    datas.map((items)=>{
                                        return(
                                            <div className="col-lg-4 gy-4 gx-5 col-md-6">
                                                    <div className='item_sec p-4'>
                                                        <Link to={`detail/`+items.id}><img src={items.thumbnail} alt="" className='w-100'/></Link>
                                                        
                                                        <p className='fs-6 fw-medium mt-2 text-uppercase'>{items.title}</p>
                                                        <h5>₹{items.price} <span className='fs-6 text-success fw-bold'> ₹{items.discountPercentage}%offer</span></h5>
                                                        <p className='fs-6 fw-medium mt-2 text-black return ps-3'>{items.returnPolicy}</p>
                                                        <div className='d-flex'>
                                                            {/* <FaStar className='me-1'/><FaStar className='me-1'/><FaStar className='me-1'/><FaStar className='me-1'/><FaStar /> */}
                                                            <button className='d-flex align-items-center border-0 bg-success text-white fw-bold star'>{items.rating}<FaStar className='ms-1'/></button>

                                                           
                                                            <button className='ms-5 p-2 btn btn_sec text-white fs-5 fw-bold' onClick={()=>dispatch(cart(items))}>Add to Cart</button>
                                                            <ToastContainer 
                                                                position="top-center"
                                                                autoClose={3000}
                                                                hideProgressBar={false}
                                                                newestOnTop={false}
                                                                closeOnClick
                                                                rtl={false}
                                                                pauseOnFocusLoss
                                                                draggable
                                                                pauseOnHover
                                                                theme="dark"
                                                                // transition= 'Zoom'
                                                                type='success'
                                                            />
                                                        </div>
                                                    </div>
                                            </div> 
                                        )
                                    })
                                }
                                {/* <div className="col-lg-4">
                                    
                                    
                                </div>
                                <div className="col-lg-4">
                                <img src={require('../1.webp')} alt="" className='w-100'/>
                                </div>
                                <div className="col-lg-4">
                                <img src={require('../1.webp')} alt="" className='w-100'/>
                                </div> */}
                             </div>
                        </div>
                         {/*  */}
                       
                    
                
            
            
            
        </div>
      </div>

      
    </>
  )
}

export default Home
