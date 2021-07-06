fetch("https://api.bedrockinfo.com/v1/status?server=play.newcaledonia.us&port=19132")
    .then(res => res.json())
    .then(json => {
    
    
        if(json["message"] == "No Response"){
            
            var status = document.getElementById("status");
            status.innerHTML = "Server is <span style='color:#e84118;'><strong>offline!</strong></span>";

            var version = document.getElementById("version");
            version.innerHTML = version.innerHTML.replace(`Version: placeholder`, ``);

            var players = document.getElementById("players");
            players.innerHTML = players.innerHTML.replace(`Players: placeholder`, ``);

            var gamemode = document.getElementById("gamemode");
            gamemode.innerHTML = gamemode.innerHTML.replace(`Game Mode: placeholder`, ``);

            var hostname = document.getElementById("hostname");
            hostname.innerHTML = hostname.innerHTML.replace(`Server IP: placeholder`, ``);

            var time = document.getElementById("time");
            time.innerHTML = time.innerHTML.replace(`Last Updated: placeholder`, ``);
        } else {
            
            var status = document.getElementById("status");
            status.innerHTML = json["ServerName"] + " Status is <span style='color:#2ecc71;'><strong>online!</strong></span>";

            var version = document.getElementById("version");
            version.innerHTML = version.innerHTML.replace(`placeholder`, json["Version"]);

            var players = document.getElementById("players");
            players.innerHTML = players.innerHTML.replace(`placeholder`, json["Players"] + " / " + json["MaxPlayers"]);

            var gamemode = document.getElementById("gamemode");
            gamemode.innerHTML = gamemode.innerHTML.replace(`placeholder`, json["GameMode"]);

            var hostname = document.getElementById("hostname");
            hostname.innerHTML = hostname.innerHTML.replace(`placeholder`, json["HostName"]);


            var time = document.getElementById("time");
            const unixTimestamp = json["CheckTimestamp"]
            const milliseconds = unixTimestamp * 1000;
            const dateObject = new Date(milliseconds);
            var formattedTime = dateObject.toLocaleString("en-US", { timeZoneName: "short" }).replaceAll(`/`, `.`).replace(`, `, `-`);
            time.innerHTML = time.innerHTML.replace(`placeholder`, formattedTime);
            //console.log(formattedTime);
        }

    }).catch(error => {
        var status = document.getElementById("status");
        status.innerHTML = "Server is <span style='color:#e84118;'><strong>offline!</strong></span>";

        var version = document.getElementById("version");
        version.innerHTML = version.innerHTML.replace(`Version: placeholder`, ``);

        var players = document.getElementById("players");
        players.innerHTML = players.innerHTML.replace(`Players: placeholder`, ``);

        var gamemode = document.getElementById("gamemode");
        gamemode.innerHTML = gamemode.innerHTML.replace(`Game Mode: placeholder`, ``);

        var hostname = document.getElementById("hostname");
        hostname.innerHTML = hostname.innerHTML.replace(`Server IP: placeholder`, ``);

        var time = document.getElementById("time");
        time.innerHTML = time.innerHTML.replace(`Last Updated: placeholder`, ``);


        console.log(error);
    });
