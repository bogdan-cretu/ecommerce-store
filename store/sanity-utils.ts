import { createClient } from "@sanity/client";

export async function getProducts(){
    const client = createClient({
        projectId: '63xf4beu',
        dataset: 'store',
        apiVersion: "2024-01-19",
    });

    return client.fetch(
        `*[_type == "product"]`
    )

}