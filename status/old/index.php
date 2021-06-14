<!DOCTYPE>
<html lang="en">

<head>
  <meta charset="utf-8">
  <link rel="apple-touch-icon" sizes="180x180" href="../images/apple-touch-icon.png?v=XByRJyRMlz">
  <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png?v=XByRJyRMlz">
  <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon-16x16.png?v=XByRJyRMlz">
  <link rel="manifest" href="../images/site.webmanifest?v=XByRJyRMlz">
  <link rel="mask-icon" href="../images/safari-pinned-tab.svg?v=XByRJyRMlz" color="#249bbd">
  <link rel="shortcut icon" href="../images/favicon.ico?v=XByRJyRMlz">
  <meta name="msapplication-TileColor" content="#000000">
  <meta name="msapplication-TileImage" content="../images/mstile-144x144.png?v=XByRJyRMlz">
  <meta name="msapplication-config" content="../images/browserconfig.xml?v=XByRJyRMlz">
  <meta name="theme-color" content="#ffffff">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="title" content="New Caledonia">
  <meta name="description" content="New Caledonia is a new, ambitious nation that is run entirely in Minecraft. It is a republic run entirely by youth. On this web page, you will find the New Caledonia Times, future public works projects, laws, sports events, and everything you need to know about New Caledonia.">
  <title>Server Status</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
  <style type="text/css">
    * {
      text-align: center;
      font-family: 'Roboto', sans-serif !IMPORTANT;
      font-size: xx-large;
    }

    .in-middle {
      background-color: rgb(0, 0, 0);
      /* Fallback color */
      background-color: rgba(0, 0, 0, 0.4);
      /* Black w/opacity/see-through */
      color: white;
      font-weight: 500;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      width: 80%;
      padding: 20px;
      text-align: center;
    }

    .bg-image {
      /* The image used */
      background-image: url("bg.png");

      /* Add the blur effect */
      filter: blur(8px);
      -webkit-filter: blur(8px);

      /* Full height */
      height: 100%;

      /* Center and scale the image nicely */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    footer {
      font-size: small;
      background-color: rgb(0, 0, 0);
      /* Fallback color */
      background-color: rgba(0, 0, 0, 0.4);
      /* Black w/opacity/see-through */
      color: white;
      position: absolute;
      bottom: 00%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      width: 30%;
      padding: 10px;
      text-align: center;
    }

    @media only screen and (max-width: 600px) {
      footer {
        bottom: -25;
      }
    }
  </style>
</head>

<body>
  <div class="bg-image"></div>
  <div class="in-middle">
    <?php

    $ch = curl_init();
    // IMPORTANT: the below line is a security risk, read https://paragonie.com/blog/2017/10/certainty-automated-cacert-pem-management-for-php-software
    // in most cases, you should set it to true
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, 'https://api.bedrockinfo.com/v1/status?server=ServerNewCal.ml&port=19132');
    $result = curl_exec($ch);
    curl_close($ch);

    $data = json_decode($result); //because of true, it's in an array

    if ($data->message != "No Response") {
      echo $data->ServerName;
      echo " Status is <span style='color:#2ecc71;'><strong>online!</strong></span>";

      echo "<br> Version: ";
      echo $data->Version;

      echo "<br>Players: ";
      echo $data->Players;
      echo " / ";
      echo $data->MaxPlayers;

      echo "<br>Game Mode: ";
      echo $data->GameMode;

      echo "<br>Server IP: ";
      echo $data->HostName;

      //echo "<br>Server IP: unavailable (check Discord)";
      //echo $data->IPAddress;
      //echo ":";
      //echo $data->IPv4Port;

      echo "<span style='font-size: medium;'><br>Last Updated: ";
      $time = $data->CheckTimestamp; // Current time in unix timestamp
      $timezone = new DateTimeZone('US/Central');  // Desired timezone
      $datetime = new DateTime();
      $datetime->setTimezone($timezone);
      $datetime->setTimestamp($time);
      echo $datetime->format('Y.m.d-H:i:s T');
      echo "</span>";
    } else if ($data->message = "No Response") {
      echo " Server is <span style='color:#e84118;'><strong>offline!</strong></span>";
    } else {
      echo "Website Down Call Mountain Top";
    }

    ?>
  </div>
  <!--end of in-middle-->
  <footer>
    Made by Mountain Top
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
</body>

</html>