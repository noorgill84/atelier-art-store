"use client";
import React,{createContext,useContext,useEffect,useState} from "react";
import type {Product} from "./products";
type Ctx={cart:string[];add:(id:string)=>void;remove:(id:string)=>void;clear:()=>void};
const Context=createContext<Ctx|null>(null);
export function StoreProvider({children}:{children:React.ReactNode}){const[cart,setCart]=useState<string[]>([]);useEffect(()=>{try{setCart(JSON.parse(localStorage.getItem("atelier-cart")||"[]"))}catch{}},[]);useEffect(()=>localStorage.setItem("atelier-cart",JSON.stringify(cart)),[cart]);const add=(id:string)=>setCart(c=>[...c,id]);const remove=(id:string)=>setCart(c=>{const i=c.indexOf(id);return i<0?c:c.filter((_,x)=>x!==i)});return <Context.Provider value={{cart,add,remove,clear:()=>setCart([])}}>{children}</Context.Provider>}
export function useStore(){const c=useContext(Context);if(!c)throw Error("StoreProvider missing");return c}
