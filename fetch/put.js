
   fetch('https://jsonplaceholder.typicode.com/users')
   .then((response) => response.json())
   .then((data) => 
   console.log(data[0].username, " ",data[1].username, " ",data[2].username, " ", data[3].username, " ", data[4].username, " ", data[5].username, " ", data[6].username, " ",data[7].username, " ", data[8].username, " ",data[9].username, ));



