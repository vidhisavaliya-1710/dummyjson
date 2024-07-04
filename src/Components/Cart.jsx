import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function Cart() {
    
    
    const data=useSelector((state)=>(state.counter.product))
    // console.log(data);
    
    const subtotal=data.reduce((total,item)=>total+(item.price - item.discountPercentage),0)
    const taxRate = 0.13; 
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    const distotal=data.reduce((total,item)=>total+(item.discountPercentage),0);
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-lg-8 mt-4">
            <h3>Product Details</h3>
                {
                  data.map((item)=>{
                    return(
                      <>
                       
                <div className='cart_sec mt-4'>
                <div className='d-flex  p-3'>
                <img src={item.thumbnail} alt="" className='w-25'/>
                <div className='ms-3'>
                <h5>{item.title}</h5>
                <div className='d-flex'>
                <p className='fs-5 fw-normal'>₹{item.price}</p>
                <span className='fs-5 ms-2 text-success fw-medium'>{item.discountPercentage}%offer</span>
                </div>
                <p className='fs-5 fw-medium'>{item.brand}</p>
                
                
                </div>
                
                </div>
                <hr/>
                <h5 className='ms-5'>Free Delivery</h5>
                </div>
                      </>
                    )
                  })
                }

            </div>
            <div className="col-lg-4 mt-4">
                <h3>Price Details</h3>
                <div className=''>
                <div className='price_sec p-4'>
                  <table className='table'>
                    <thead>
                        <th>Item Title</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Amount</th>
                        
                    </thead>
                    <tbody>
                      {
                        
                          data.map((item)=>{
                            return(
                              <>
                               
                                <tr>
                                  <td>{item.title}</td>
                                  <td>₹{item.price}</td>
                                  <td>{item.discountPercentage}%</td>
                                  <td>₹{parseInt(item.price - item.discountPercentage)}</td>
                                </tr>
                              </>
                            )
                          })
                        
                      }
                      <tr>
                      <th colSpan={3}><h5 className='text-end'>Subtotal</h5></th>
                      <td align='center'><h6>₹{parseInt(subtotal)}.00</h6></td>
                      </tr>
                      <tr>
                      <th colSpan={3}><h5 className='text-end'>Tax</h5></th>
                      <td align='center'><h6>₹{parseInt(tax)}.00</h6></td>
                      </tr>
                      <tr>
                      <th colSpan={3}><h5 className='text-end'>Total</h5></th>
                      <td align='center'><h6>₹{parseInt(total)}.00</h6></td>
                      </tr>

                      
                    </tbody>
                  </table>
                  <p className='fs-5 fw-medium text-success'>You will save ₹{parseInt(distotal)} on this order</p>
                </div>
                </div>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Cart
