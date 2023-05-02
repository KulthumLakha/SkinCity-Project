<?php
    if(isset($_POST) && isset($_POST["btnSubmit"]))
    {
        $secretKey = '6LfO-88lAAAAAEmL7c8uPGVk7RfV67onQcCojMal';
        $token = $_POST["g-token"];
        $ip = $_SERVER['REMOTE_ADDR'];

        $url = "https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$token."&remoteip=".$ip;
        $request = file_get_contents($url);
        $response = json_decode($request);

        if($response->success)
        {
          echo '<h1>Validation Success!</h1>';
        }
        else
        {
          echo '<h1>Validation Failed.</h1>';
        }
    }
  ?>