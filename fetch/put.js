
   fetch('https://jsonplaceholder.typicode.com/users')
   .then((response) => response.json())
   .then((data) =>{
    for(let i=0;i<data.length;i++)
   console.log(data[i].username)});
    

