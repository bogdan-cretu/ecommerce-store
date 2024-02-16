import React from 'react'
import { createClient } from "@sanity/client";

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

  
 


const RelatedProducts = (props) => {

  return (
    products.map((product)=>{
      let image = "https://cdn.sanity.io/images/63xf4beu/store/" + product.image[0].asset._ref.replace("-png", ".png").replace("-jpg", ".jpg").replace("image-", '')

    if (product.category === props.slug.category){
      return <div key={product._id} className="product-card">  
      <a href={`/product/${product.slug.current}`}>
      <img alt='' src={image} className="product-image"></img>
      <p className='product-name'>{product.name}</p>
      <div className='product-price'>${product.price}</div>
      <div className='product-details'>{product.details}</div>
      </a>
      </div>
    } 
  return null}) 
  )
}

export default RelatedProducts