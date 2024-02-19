$(document).ready(function() {

    //this is just used to draw and move all the elements

    for (i = 1; i <= 10; i++) {
        $('#star').append('<div class="latitude_line" id="lat_' + i + '_n"></div');
        $('#star').append('<div class="latitude_line" id="lat_' + i + '_s"></div');

        // Radius of latitude line based on distance from "equator". That's the Pythagorean Theorem, son.
        c = (Math.sqrt((250 * 250) - ((25 * i) * (25 * i))));

        // Width and height of line for offset
        width = c * 2;
        height = c * 2;
        dif = (500 - (c * 2)) / 2;

        // Place & translate
        $('#lat_' + i + '_n').width(parseInt(c * 2));
        $('#lat_' + i + '_n').height(parseInt(c * 2));
        $('#lat_' + i + '_n').css("top", dif + "px");
        $('#lat_' + i + '_n').css("left", dif + "px");
        $('#lat_' + i + '_n').css("-webkit-transform", "translate3d(0,0," + (i * 25) + "px) ");
        $('#lat_' + i + '_n').css("-moz-transform", "translate3d(0,0," + (i * 25) + "px) ");
        $('#lat_' + i + '_n').css("transform", "translate3d(0,0," + (i * 25) + "px) ");
        $('#lat_' + i + '_s').width(parseInt(c * 2));
        $('#lat_' + i + '_s').height(parseInt(c * 2));
        $('#lat_' + i + '_s').css("top", dif + "px");
        $('#lat_' + i + '_s').css("left", dif + "px");
        $('#lat_' + i + '_s').css("-webkit-transform", "translate3d(0,0," + -(i * 25) + "px) ");
        $('#lat_' + i + '_s').css("-moz-transform", "translate3d(0,0," + -(i * 25) + "px) ");
        $('#lat_' + i + '_s').css("transform", "translate3d(0,0," + -(i * 25) + "px) ");

        if (i == 10) {
            $('#lat_' + i + '_n').width(parseInt(c * 2) + 40);
            $('#lat_' + i + '_n').height(parseInt(c * 2) + 40);
            $('#lat_' + i + '_n').css("top", dif - 20 + "px");
            $('#lat_' + i + '_n').css("left", dif - 20 + "px");
            $('#lat_' + i + '_n').css("-webkit-transform", "translate3d(0,0," + (i * 24) + "px) ");
            $('#lat_' + i + '_n').css("-moz-transform", "translate3d(0,0," + (i * 24) + "px) ");
            $('#lat_' + i + '_n').css("transform", "translate3d(0,0," + (i * 24) + "px) ");
            $('#lat_' + i + '_s').width(parseInt(c * 2) + 40);
            $('#lat_' + i + '_s').height(parseInt(c * 2) + 40);
            $('#lat_' + i + '_s').css("top", dif - 20 + "px");
            $('#lat_' + i + '_s').css("left", dif - 20 + "px");
            $('#lat_' + i + '_s').css("-webkit-transform", "translate3d(0,0," + -(i * 24) + "px) ");
            $('#lat_' + i + '_s').css("-moz-transform", "translate3d(0,0," + -(i * 24) + "px) ");
            $('#lat_' + i + '_s').css("transform", "translate3d(0,0," + -(i * 24) + "px) ");
        }

    }

    // Death Star Cannon
    // Was going to do this with math, but currently just doing it manually

    // Outer ring
    $('#star').append('<div class="gun_line" id="gun_' + i + '_n"></div');
    c = 85;
    width = c * 2;
    height = c * 2;
    dif = (500 - (c * 2)) / 2;
    $('#gun_' + i + '_n').width(parseInt(c * 2));
    $('#gun_' + i + '_n').height(parseInt(c * 2));
    $('#gun_' + i + '_n').css("top", dif + "px");
    $('#gun_' + i + '_n').css("left", dif + "px");
    $('#gun_' + i + '_n').css("-webkit-transform", "rotateX(-58deg) translate3d(0,0," + 245 + "px) ");
    $('#gun_' + i + '_n').css("-moz-transform", "rotateX(-58deg) translate3d(0,0," + 245 + "px) ");
    $('#gun_' + i + '_n').css("transform", "rotateX(-58deg) translate3d(0,0," + 245 + "px) ");

    // Middle Ring
    $('#star').append('<div class="gun_line" id="gun_2_n"></div');
    c = 31;
    width = c * 2;
    height = c * 2;
    dif = (500 - (c * 2)) / 2;
    $('#gun_2_n').width(parseInt(c * 2));
    $('#gun_2_n').height(parseInt(c * 2));
    $('#gun_2_n').css("top", dif + "px");
    $('#gun_2_n').css("left", dif + "px");
    $('#gun_2_n').css("-webkit-transform", "rotateX(-58deg) translate3d(0,0," + 238 + "px) ");
    $('#gun_2_n').css("-moz-transform", "rotateX(-58deg) translate3d(0,0," + 238 + "px) ");
    $('#gun_2_n').css("transform", "rotateX(-58deg) translate3d(0,0," + 238 + "px) ");

    // Inner Ring
    $('#star').append('<div class="gun_line" id="gun_3_n"></div');
    c = 10;
    width = c * 2;
    height = c * 2;
    dif = (500 - (c * 2)) / 2;
    $('#gun_3_n').width(parseInt(c * 2));
    $('#gun_3_n').height(parseInt(c * 2));
    $('#gun_3_n').css("top", dif + "px");
    $('#gun_3_n').css("left", dif + "px");
    $('#gun_3_n').css("-webkit-transform", "rotateX(-58deg) translate3d(0,0," + 236 + "px) ");
    $('#gun_3_n').css("-moz-transform", "rotateX(-58deg) translate3d(0,0," + 236 + "px) ");
    $('#gun_3_n').css("transform", "rotateX(-58deg) translate3d(0,0," + 236 + "px) ");


});