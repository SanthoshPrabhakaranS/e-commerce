import React from 'react'
import { Back } from "../../icons/icons";
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { removeProduct } from '@/features/cartSlice';
import toast, { Toaster } from "react-hot-toast";

const Cart = ({_toggleCart}) => {
  const cart = useSelector((state) => state.reducer.cart);
  const dispatch = useDispatch()

  const _removeProduct = (id) => {
    dispatch(removeProduct({id}))
    toast.success("Item removed successfully!")
  }

  return (
    <div className="w-[320px] h-screen flex flex-col gap-3 fixed top-0 right-0 border bg-white z-50 p-2 shadow-lg transition-all duration-1000">
        <Toaster position="top-right" reverseOrder={false} />
    <div onClick={_toggleCart} className='cursor-pointer'>
      <span className="flex items-center gap-1 text-[1rem]">{Back} close</span>
    </div>
    <div className='w-full flex justify-between items-center px-2 border-b border-gray-500 pb-2 text-[1.1rem] font-semibold'>Cart Items(s) <span>{cart.length}</span></div>
    <div className='px-2 flex flex-col gap-3 overflow-y-scroll'>
        { cart.length != 0 ? cart.map((item) => {
            return <div key={item.id} className='flex flex-row items-center gap-4 relative'>
                <Image src={item.productImage} alt='product-img' width={100} height={100} className='h-[90px] w-[90px] object-cover' />
                <div>
                    <h1 className='font-semibold'>{item.productName}</h1>
                    <p>{item.quantity} x {item.productPrice}</p>
                </div>
                <span onClick={() => _removeProduct(item.id)} className='h-5 w-5 flex justify-center items-center rounded-full bg-gray-500 absolute right-0 cursor-pointer text-gray-50 font-semibold'>x</span>
            </div>
        }) : <p className='font-semibold text-center'>No Items</p> }
    </div>
  </div>
  )
}

export default Cart