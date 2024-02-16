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


 

const SearchBar = () => {

    const [search, setSearch] = useState('')

    function captureChange(event){
        const searchQuery = event.target.value
        if (searchQuery.length >=2){
            setSearch(searchQuery)
            
        } else{
            setSearch('')
        }
        
     }
    

     const searchItems = products.map((item)=>{
        if (search.length >= 2 && item.name.toLowerCase().includes(search)){
                return <a className='search-product-result' href={`/product/${item.slug.current}`}>
                <div className='product-thumbnail-search'>
                <div className='search-image-holder'>
                    <img className='thumbnail-pic' alt='' src={"https://cdn.sanity.io/images/63xf4beu/store/" + item.image[0].asset._ref.replace("-png", ".png").replace("-jpg", ".jpg").replace("image-", '')} />
                </div>
                    <p className='product-search-name'>{item.name}</p>
                </div>
                </a>
        }
        
        
     })
     
return <div className='search-bar'>
    <input type="input" className='search' placeholder='Search...' onChange={captureChange} ></input>
    <div className='search-results'>
    {searchItems}
    
    </div>
    
</div>
}
export default SearchBar
