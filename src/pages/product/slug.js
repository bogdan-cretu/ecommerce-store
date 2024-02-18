import React, {useState} from 'react'
import { createClient } from "@sanity/client";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import RelatedProducts from '../../Components/RelatedProducts';
import {useStateContext} from '../../context/StateContext.js'

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
  const currentSlug = window.location.pathname.replace("/product/", "")


  


const ProductDetails = () => {

  const filteredProduct = products.filter((produ)=> produ.slug.current === currentSlug)

      
      const [index, setIndex] = useState(0)
      const {image, name, details, price} = filteredProduct[0]
      const {decQty, incQty, qty, onAdd} = useStateContext()
      
      
      const imageSlug = "https://cdn.sanity.io/images/63xf4beu/store/" + filteredProduct[0].image[index].asset._ref.replace("-png", ".png").replace("-jpg", ".jpg").replace("image-", '');

     
      
      
      
      
      
  return (
    <div>
      <div className= "product-detail-container">
      <div>
          <div className='image-container'>
          <img src={imageSlug} className="product-detail-image" alt="" ></img>
          </div>
          <div className='small-images-container'>
            {image?.map((item, i)=>(
               <img alt=''  onMouseOver={()=> (setIndex(i))} className='small-image' key={i} src={"https://cdn.sanity.io/images/63xf4beu/store/" + item.asset._ref.replace("-png", ".png").replace("-jpg", ".jpg").replace("image-", '')}></img>
               )
            )}
          </div>
          </div>
          <div className='product-detail-desc'>
            <h1>{name}</h1>
            <div className='reviews'>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                (20)
              </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className='price'>${qty > 0 ? price * qty : price}</p>
          <div className='quantity'>
            <h3>Quantity</h3>
            <p className='quantity-desc'>
            <span className='minus' onClick={decQty}><AiOutlineMinus/></span>
            <span className='num' >{qty}</span>
            <span className='plus' onClick={incQty}><AiOutlinePlus/></span>
            </p>
          </div>
          <div className='buttons'>
            <button type='button' className='add-to-cart' onClick={()=> onAdd(filteredProduct[0], qty)}>Add to Cart</button>
          </div>
          
          </div>
          
      </div>
      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            <RelatedProducts 
              slug = {filteredProduct[0]}
            />
          </div>
        </div>
      </div>
    </div>
    
    )
  }
 


   


export default ProductDetails