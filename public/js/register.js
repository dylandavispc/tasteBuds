$(document).ready(function() {

    $(document).on("submit", "#reg", function() {
      event.preventDefault();

      const postUser = (userdata) =>{
        $.post("/api/user", userdata)
        .then(getUser)
    };


    const getUser = () => {
      $.get("/api/user", function(data) {
          for (let i = 0; i < data.length; i++) {
    
            if (email === data[i].email && password === data[i].password) {
    
              userId = data[i].id;
    
              login(userId);
    
            }
          }
        })
    };

      // Grabs email & password from login page
      let name = $("#name").val().trim();
      let email = $("#email").val().trim();
      let location = $("#location").val().trim();
      let password = $("#password").val().trim();

      // POST Method
      postUser({
        name,
        email,
        location,
        password
      });



    
    });
    
  });
  
  
  const login = (userId) => {
    location.href = "/home?user_id=" + userId;
  }