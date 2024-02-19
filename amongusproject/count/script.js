var gen_arr = []
var should_press = 1
var completed = new Audio("../audio/taskComplete.mp3")
var wintune = new Audio("../audio/win.mp3")
var wrong = new Audio("../audio/wrong.ogg")
var tap = new Audio("../audio/tapsound.ogg")
var playing

// Making random array
function create_game() {
    gen_arr = []
    while (gen_arr.length != 10) {
        rand = Math.floor(Math.random() * 10) + 1;
        if (!gen_arr.includes(rand))
            gen_arr.push(rand)
    }

    $(".eachbox p").each(function(index, eachbox_p) {
        $(eachbox_p).text(gen_arr[index])
        $(eachbox_p).attr("onclick", "pressed(this," + gen_arr[index] + ")")
    })
}


function pressed(obj, number) {
    if (number == should_press) {
        should_press = should_press + 1
        tap.play()
        $(obj).addClass("correct")
        if (should_press == 11)
            win()
    } else {
        gameover()
    }
}

function gameover() {
    function animate_gameover() {
        $(".eachbox p").each(function(index, eachbox_p) {
            $(eachbox_p).removeClass("correct")
            $(eachbox_p).addClass("wrong")
        })

        setTimeout(function() {
            $(".eachbox p").each(function(index, eachbox_p) {
                $(eachbox_p).removeClass("correct")
                $(eachbox_p).removeClass("wrong")
            })

        }, 300)
    }

    animate_gameover()
    setTimeout(function() {
        animate_gameover()
    }, 500)
    should_press = 1
    wrong.play()

}

function win() {
    completed.play()
    $(".task_comp p").css("display", "block")
    $(".task_comp p").addClass("animate__animated animate__fadeInUp")
    setTimeout(function() {
        wintune.play()
        clearInterval(playing);
    }, 1000)
}

function animate_playing() {
    playing = setInterval(function() {
        $("#speaker").css("visibility", "hidden")
        setTimeout(function() {
            $("#speaker").css("visibility", "visible")
        }, 500)
    }, 1000)
}

function restart() {
    should_press = 1
    $(".task_comp p").css("display", "none")
    $(".task_comp p").removeClass("animate__animated animate__fadeInUp")
    $(".eachbox p").each(function(index, eachbox_p) {
        $(eachbox_p).removeClass("correct")
        $(eachbox_p).removeClass("wrong")
    })
    create_game()
}
create_game()