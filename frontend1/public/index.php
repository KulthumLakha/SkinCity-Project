<!DOCTYPE html>
<html lang="en">

  
  <script src="https://www.google.com/recaptcha/api.js?render=6LfO-88lAAAAADALGEx5DwEBu_YfNm5z9Aw3XBkW"></script>
  
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

  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css"
    />
    <title>React App</title>
  </head>
  <body>
    <input type="hidden" id="g-token" name="g-token" />
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
    <script>
      function onClick(e) {
        e.preventDefault();
        grecaptcha.ready(function() {
          grecaptcha.execute('6LfO-88lAAAAADALGEx5DwEBu_YfNm5z9Aw3XBkW', {action: 'submit'}).then(function(token) {
              document.getElementById("g-token").value = token;
          });
        });
      }
  </script>

  </body>
</html>