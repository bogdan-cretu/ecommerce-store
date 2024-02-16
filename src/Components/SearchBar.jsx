import React, { useState, useEffect } from 'react';
import { createClient } from "@sanity/client";

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const client = createClient({
                projectId: '63xf4beu',
                dataset: 'store',
                apiVersion: "2024-01-19",
                useCdn: true,
            });

            const productsData = await client.fetch(`*[_type == "product"]`);
            setProducts(productsData);
        }

        fetchProducts();
    }, []);

    function captureChange(event) {
        const searchQuery = event.target.value;
        setSearch(searchQuery);
    }

    const searchItems = products.map((item) => {
        if (search.length >= 2 && item.name.toLowerCase().includes(search)) {
            return (
                <a className='search-product-result' href={`/product/${item.slug.current}`}>
                    <div className='product-thumbnail-search'>
                        <div className='search-image-holder'>
                            <img className='thumbnail-pic' alt='' src={`https://cdn.sanity.io/images/63xf4beu/store/${item.image[0].asset._ref.replace("-png", ".png").replace("-jpg", ".jpg").replace("image-", '')}`} />
                        </div>
                        <p style={{padding:"10px"}}>{item.name}</p>
                    </div>
                </a>
            );
        }
        return null;
    });

    return (
        <div className='search-bar'>
            <input type="text" className='search' placeholder='Search...' onChange={captureChange} />
            <div className='search-results'>{searchItems}</div>
        </div>
    );
}

export default SearchBar;
