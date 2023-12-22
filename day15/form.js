const formE = document.querySelector('.form');
formE.addEventListener('submit', event=>{
    event.preventDefault();
    const formData new FormData(formE);
    const data = new URLSearchParams(formData);

    fetch('https://reqres.in/api/users',){
        
    }
})