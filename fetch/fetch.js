 const newUser = {
    name: "Agnes",
    job: "Developer"
 };
 fetch(`https://reqres.in/api/users`)
// .then(res =>{
//     console.log(res);
// })
.then(res =>res.json())

.then(data => {
    console.log(data);
    console.log(data.data[4].first_name, data.data[4].email, data.data[4].last_name);
})

