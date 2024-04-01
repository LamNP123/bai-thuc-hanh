function event() {
    
    const username = document.getElementsById('login').value;
    const password = document.getElementsById('pass').value;
    const errorMessage = document.getElementsById('error').value
    
    if (username === 'NPC' && password === 'bro') {
      window.location.href = "https://en.wikipedia.org/wiki/Question_mark";
    } else {
      errorMessage.textContent = 'Tài khoản hoặc mật khẩu không chính xác';
    }
  }