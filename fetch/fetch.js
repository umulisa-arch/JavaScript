 const btnEl = document.querySelector("..btn");

 const newUser = {
    name: 'RUKUNDO',
    job: 'IT'
 };
 const clickHandler = async()=>{
    console.log("welcome in database");
 }
 btnEl.addEventListener('click', clickHandler);
   fetch('https://reqres.in/api/users',{
    method: 'POST',
    headers:{
'Content-Type': 'application/json'
    },body: JSON.stringify(newUser)
})
.then(res =>{
    if(!res.ok){
        console.log("Problem occured");
        return;
    }
    return res.json()
})

.then(data => {
    console.log("success");
    // console.log(data.data[4].first_name, data.data[4].email, data.data[4].last_name);
}).catch(error=>{
    console.log(error);
})

