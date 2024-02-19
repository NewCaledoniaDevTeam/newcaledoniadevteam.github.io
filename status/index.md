---
layout: default
---

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!--Favicon Information-->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ "/favicon/apple-touch-icon.png?v=21722" | absolute_url }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ "/favicon/favicon-32x32.png?v=21722" | absolute_url }}">
    <link rel="icon" type="image/png" sizes="194x194" href="{{ "/favicon/favicon-194x194.png?v=21722" | absolute_url }}">
    <link rel="icon" type="image/png" sizes="192x192" href="{{ "/favicon/android-chrome-192x192.png?v=21722" | absolute_url }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ "/favicon/favicon-16x16.png?v=21722" | absolute_url }}">
    <link rel="manifest" href="{{ "/favicon/site.webmanifest?v=21722" | absolute_url }}">
    <link rel="mask-icon" href="{{ "/favicon/safari-pinned-tab.svg?v=21722" | absolute_url }}" color="#ca5a4f">
    <link rel="shortcut icon" href="{{ "/favicon/favicon.ico?v=21722" | absolute_url }}">
    <meta name="msapplication-TileColor" content="#000000">
    <meta name="msapplication-TileImage" content="{{ "/favicon/mstile-144x144.png?v=21722" | absolute_url }}">
    <meta name="msapplication-config" content="{{ "/favicon/browserconfig.xml?v=21722" | absolute_url }}">
    <meta name="theme-color" content="#ca5a4f">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">

    <!-- Primary Meta Tags -->
    <title>New Caledonia - Server Status</title>
    <meta name="title" content="New Caledonia - Server Status">
    <meta name="description" content="New Caledonia is a new, ambitious nation that is run entirely in Minecraft. It is a republic run entirely by youth. On this web page, you will find the New Caledonia Times, future public works projects, laws, sports events, and everything you need to know about New Caledonia.">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://newcaledonia.us/status/">
    <meta property="og:title" content="New Caledonia - Server Status">
    <meta property="og:description" content="New Caledonia is a new, ambitious nation that is run entirely in Minecraft. It is a republic run entirely by youth. On this web page, you will find the New Caledonia Times, future public works projects, laws, sports events, and everything you need to know about New Caledonia.">
    <meta property="og:image" content="https://dash.newcaledonia.us/assets/images/projects/status.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://newcaledonia.us/status/">
    <meta property="twitter:title" content="New Caledonia - Server Status">
    <meta property="twitter:description" content="New Caledonia is a new, ambitious nation that is run entirely in Minecraft. It is a republic run entirely by youth. On this web page, you will find the New Caledonia Times, future public works projects, laws, sports events, and everything you need to know about New Caledonia.">
    <meta property="twitter:image" content="https://dash.newcaledonia.us/assets/images/projects/status.png">
</head>

<body>
    <div class="bg-image">
        <div class="blur"></div>
    </div>

    <div class="in-middle">
        <p id="status"></p>
        <p id="version">Version: placeholder</p>
        <p id="players">Players: placeholder</p>
        <p id="gamemode">Game Mode: placeholder</p>
        <p id="hostname">Server IP: placeholder</p>
        <p id="time" style='font-size: medium;'>Last Updated: placeholder</p>
        <p id="lastseen" style='font-size: medium;'>Last Seen Online: placeholder</p>
    </div>
    <footer>
        Maintain by <a href="https://newcaledoniadevteam.github.io/mountaintop/" style="font-size: small;">Mountain Top</a>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    <script src="index.js"></script>
</body>

</html>
