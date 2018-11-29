<?php 
    include_once '../inc/_header.php';
    
    
    if($_SERVER['REQUEST_METHOD']){
        include_once 'inc/user.login.php';
    } 
    
?>

<script>
    
</script>

<body>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin" action="inc/user.login.php" method="POST" >
              <div class="form-label-group">
                <input name="uid" type="email" id="userEmail" class="form-control" placeholder="Email address" required autofocus>
                <label for="userEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input name="pwd" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <label for="inputPassword">Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <div class="row">
                  <div class="col-md-4">
                      <button name="submit" class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                  </div>
                  <div class="col-md-8"></div>
              </div>
              
                  <hr class="my-4">
              
              <!--<button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>-->
              <!--<button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>-->
            </form>
            <a href="admin.page.signup.php">
                <button name="submit" class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign Up</button>
            </a>  
            
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

<?php 
    include_once '../inc/_footer.php';
?>