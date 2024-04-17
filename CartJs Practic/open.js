const api_link = "https://fakestoreapi.com/products";
id = new URLSearchParams(window.location.search).get("id");
fetch(api_link + `/${id}`)
.then((res) => res.json())
.then((data)=>console.log(data.title)



);
