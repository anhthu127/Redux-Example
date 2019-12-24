export default function editData(products) {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/Products/' + products.id
        fetch(url, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(products)
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
