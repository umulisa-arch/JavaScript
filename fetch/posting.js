
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if(!response.ok){
                console.log("problem");
                return;
            }
            return response.json();

        })
        .then (data =>{
            for(let i = 0; i<data.length;i++){
                console.log(data[i].name)
            }
            
        })
        
        
            
