import React from 'react'
import { createClient } from "@sanity/client";
import { useState } from 'react';

async function getProducts(){
    const client = createClient({
        projectId: '63xf4beu',
        dataset: 'store',
        apiVersion: "2024-01-19",
        useCdn: true,
    });

    return client.fetch(
        `*[_type == "product"]`
    )
}
  const products = await getProducts();

  const uniqueCategories = [...new Set(products.map(item => item.category))]
  const productsByCategoryList = []
 

const ProductCategories = () => {

    

    const [viewProducts, setViewProducts] = useState('Phones')
    

    function view(){
        window.onclick = e => { 
            if (e.target.className.includes("category") === true){
                setViewProducts(e.target.innerText)
                productsByCategoryList.length = 0
            }
                
          
        } 
    }

    const categoryItems = uniqueCategories.map((category)=>{

        

        productsByCategoryList.push(products.filter(item => item.category === category))
        return <div key={category._id} >
            <div className={`category ${category}` } onClick={view}>{category}</div>
            
        </div>
    })

    const individualProductsByCategory = productsByCategoryList.map((productList)=>{
        
        return <div >
        {productList.map((filteredProduct) => {
            return <div className={`product-thumbnail ${filteredProduct.category}`} style={{display: filteredProduct.category === viewProducts ? "flex": "none"}}>
                <div className='cart-image-holder'>
                <img alt='' className='thumbnail-pic' src={"https://cdn.sanity.io/images/63xf4beu/store/" + filteredProduct.image[0].asset._ref.replace("-png", ".png").replace("-jpg", ".jpg").replace("image-", '')}/>
                </div>
                <div className='product-desc'>
                <p className='product-thumbnail-title'>{filteredProduct.name}</p>
                <div className='prodct-desc-holder'>
                <p>${filteredProduct.price}</p>
                <a href={`/product/${filteredProduct.slug.current}`}> <button className='button'> View details</button></a>
                </div>
                </div>
                </div>
            
        })}
        </div>
    })
 
    
  return (
    
       <div className="categ-holder">
        <div className='left-section'>{categoryItems}</div>
        <div className='right-section'>
        <div className='categ-content'>
            {individualProductsByCategory} 
            </div>
        </div>
      </div>
  )}
  


export default ProductCategories