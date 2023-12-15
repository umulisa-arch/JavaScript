// You can use this generated password for the signup process
function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor((Math.random() * charset.length));
      password += charset[randomIndex];
    }
    return password;
  }
  
  const generatedPassword = generatePassword(8); // You can change 8 to the desired password length
  console.log("Generated Password:", generatedPassword);
  