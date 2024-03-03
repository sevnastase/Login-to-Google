function validateForm() {
    let x = document.forms["myForm"]["uname"].value;
    let y = document.forms["myForm"]["psw"].value;
    if (x == "") 
    {
      alert("Name must be filled out");
      return false;
    }
    let c;
    if (y.indexOf(x) > -1)
    {
        alert("Password cannot contain username");
        return false;
    }
    if (!/[a-z]/.test(y)) 
    {
        alert("Password must contain small letters");
        return false;
    }
    if (!/[A-Z]/.test(y)) 
    {
        alert("Password must contain capital letters");
        return false;
    }
    if (!/[0-9]/.test(y)) {
        alert("Password must contain numbers");
        return false;
    }
    return true;
  }

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form from submitting
    }
  });