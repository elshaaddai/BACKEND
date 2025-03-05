fetch("http://localhost:3000/about", { method: "PUT" })
  .then((res) => res.json())
  .then((json) => console.log(json));
