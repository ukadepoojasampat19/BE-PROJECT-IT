import React ,{createContext, useState} from "react";
import {all_events} from "../assets/all_events.jsx"
export const BookEventContext=createContext(null);
const getDefaultcart=()=>{
    let cart={};
    for(let index=0 ;index<all_events.length;index++)
    {
        cart[index]=0;
    }
    return cart;    
}
const BookEventContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState(getDefaultcart());
    const addtoCart=(ItemId)=>{
        setCartItem((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
    }
    const removeFromCart=(ItemId)=>{
        setCartItem((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
    }
    const getTotalCartAmount=()=>{
        let totalAmout=0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                let itemInfo=all_events.find((event)=>event.id===Number(item));
                totalAmout+=itemInfo.new_booking_price*cartItem[item]
            }
        }
        return totalAmout;
    }
    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                totalItem+=cartItem[item];
            }
        }
        return totalItem;
    }
    const contextValue={all_events,cartItem,removeFromCart,addtoCart,getTotalCartAmount,getTotalCartItems};

    return (
        <BookEventContext.Provider value={contextValue}>
            {props.children}
        </BookEventContext.Provider>
    )
}
export default BookEventContextProvider;