document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            // for(let i =0;i<data.length;i++)
            // Access the user's name from the fetched data
            const userName = data[1].username;

            // Display the user's name in the browser
            const userInfoDiv = document.getElementById('user-info');
           
            userInfoDiv.textContent = `Welcome, ${userName}!`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
