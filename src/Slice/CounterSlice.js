import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
  product: [],
  value:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    cart:((state,actions)=>{
      state.product.push(actions.payload)
      console.log(state.product);
      // alert('Add item successfully')
      toast('Your Item successfully Add To Cart!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        type:'success'
        // transition: 'Zoom',
        });
    }),
    inc:((state)=>{
      state.value+=1
    }),
    dec:((state)=>{
      state.value-=1
    })
  },
})

// Action creators are generated for each case reducer function
export const { cart,inc ,dec} = counterSlice.actions

export default counterSlice.reducer