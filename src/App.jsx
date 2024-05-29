import { useState } from "react"
import Content from "./components/Content"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import images1 from "./images/images1.jpg"
import Footer from "./components/Footer"

const data=[

  
  {
    id:1,
    isSale:false,
    image:images1,
    name:"Fancy Product",
    isStar:false,
    price1:40.00,
    price2:80.00,
    isButton:false,
    button1:"View Products",

    
    

  },  {
    id:2,
    isSale:true,
    image:images1,
    name:"Special Item",
    isStar:false,
    price1:20.00,
    price2:18.00,
    isButton:true,
    button1:"Add to cart"

  },  {
    id:3,
    isSale:true,
    image:images1,
    name:"Sale Item",
    isStar:false,
    price1:50.00,
    price2:25.00,
    button:"Add to cart"
  

  },  {
    id:4,
    isSale:false,
    image:images1,
    name:"Popular Item",
    isStar:true,
    price1:40.00,
    price2:70.00,
    button:"Add to cart"

  },  {
    id:5,
    isSale:true,
    image:images1,
    name:"Sale Item",
    isStar:false,
    price1:50.00,
    price2:25.00,
    button:"Add to cart"

  },  {
    id:6,
    isSale:false,
    image:images1,
    name:"Fancy Product",
    isStar:false,
    price1:120.00,
    price2:280.00,
    button:"View Products",
    

  },  {
    id:7,
    isSale:true,
    image:images1,
    name:"Special Item",
    isStar:true,
    price1:20.00,
    price2:18.00,
    button:"Add to cart"

  },  {
    id:8,
    isSale:false,
    image:images1,
    name:"Popular Item",
    isStar:true,
    price1:40.00,
    price2:30.00,
    button:"Add to cart"

  }
]

const App = () => {
  const[cart,setCart]=useState(0)
  
  
  return (
    <div>
       <Navbar cart={cart} />
    <Header /> 
    <section className="py-5">  
    <div className="container px-4 px-lg-5 mt-5 ">
        <div className="row gx-4 gx-lg-5 row-col-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    <div className="card-body d-flex flex-wrap justify-content-center">   {
       data.map((item,index)=>
      {
        return<Content product={item} key={index} setCart={setCart} cart={cart} />
      })
      }
      </div>
      </div>
      </div>
      </section>
      <Footer />
      </div>
      
  )
}

export default App