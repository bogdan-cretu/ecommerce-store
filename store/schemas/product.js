export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type:'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            initialValue: {
                title: "Headphones"
            },
            options: {
                list: [
                    {title: "Headphones", value: "Headphones"},
                    {title: "TVs", value: "TVs"},
                    {title: "Phones", value: "Phones"},
                ]
            }
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'bestSelling',
            title: 'Best Selling',
            type: 'string',
            initialValue: {
                title: "No"
            },
            options: {
                list: [
                    {title: "Yes", value: "Yes"},
                    {title: "No", value: "No"},
                ]
            }
        }
    ]
}