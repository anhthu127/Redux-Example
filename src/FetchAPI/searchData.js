export default function searchListData(text) {
    return new Promise((resolve, reject) => {
      
      const url = `http://localhost:3001/products?q=${text}`
      console.log("actionpayload" +text)
      fetch(url, {
        method: "GET"
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