export default function addData(something) {
    console.log("something in fetch "+JSON.stringify(something));
    let data =     {
        name: something.name,
        info: something.info,
        cost: something.cost
      }
    return new Promise((resolve, reject) => {

        const url = `http://localhost:3001/products`
        fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
            //.then((response) => response.json())
            .then((response) => response.json())
            .then((res) => {
                //console.log(res)
                resolve(res);
                console.log(res)
            })
            .catch((error) => {
                reject(error);


                
            });
    });
}