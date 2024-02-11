import React from 'react'
import { createClient } from "@sanity/client";


async function getBanners(){
    const client = createClient({
        projectId: '63xf4beu',
        dataset: 'store',
        apiVersion: "2024-01-19",
        useCdn: true,
    });

    return client.fetch(
        `*[_type == "banner"]`
    )
}

const banner = await getBanners();

let imageLink = "https://cdn.sanity.io/images/63xf4beu/store/" + banner[0].image.asset._ref.replace("-png", ".png").replace("-jpg", ".jpg").replace("image-", '')


const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
    <div>
      <p className='beats-solo'>{banner[0].smallText}</p>
      <h3>{banner[0].midText}</h3>
      <h1>{banner[0].largeText1}</h1>
      <img src={imageLink} alt="headphones" className='hero-banner-image'/>
      <div>
        <a href={`/product/${banner[0].product}`}><button type='button'> {banner[0].buttonText}</button></a>
        <div className='desc'>
        <h5>{banner[0].midText}</h5>
        <p>{banner[0].desc}</p>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default HeroBanner