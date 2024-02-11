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

const banners = await getBanners();
const {discount, largeText1, largeText2, saleTime, smallText, desc, midText, product, buttonText, image} = banners[0]

let imageURL = "https://cdn.sanity.io/images/63xf4beu/store/" + image.asset._ref.replace("-png", ".png").replace("-jpg", ".jpg").replace("image-", '')



const FooterBanner = () => {
  return (
    <div className='footer-banner-container'>
    <div className='banner-desc'>
      <div className='left'>
        <p>{discount}</p>
        <h3>{largeText1}</h3>
        <h3>{largeText2}</h3>
        <p>{saleTime}</p>
      </div>
      <div className='right'>
        <p>{smallText}</p>
        <h3>{midText}</h3>
        <p>{desc}</p>
        <a href={`/product/${product}`}><button type='button'>{buttonText}</button></a>
      </div>

      <img className='footer-banner-image' src={imageURL}></img>
    </div>
    </div>
  )
}

export default FooterBanner