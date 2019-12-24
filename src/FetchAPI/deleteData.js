export default function deleteData(products) {
    console.log("hihi"+products);
    
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/Products/'  +products
        fetch(url, {
            method: "DELETE",
            // headers: { "Content-type": "application/json" },
            // body: JSON.stringify(products)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
                console.log(res)
            })
            .catch((error) => {
                reject(error);
            });
    });
}
