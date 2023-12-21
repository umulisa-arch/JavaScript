const btnEl = document.querySelector("..btn");

const newUser = {
   name: 'RUKUNDO',
   job: 'IT'
};
const clickHandler = async () =>{
try {
    const res = await fetch('https://reqres.in/api/users',{
        method: 'POST',
        headers:{
            'content-Type': 'application'
    }

    });
    const data = await res.json();
    console.log(data);
}catch (error){
    console.log(error);
}
}


