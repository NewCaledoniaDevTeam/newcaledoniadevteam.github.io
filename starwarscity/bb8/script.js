/*

Read this codepen blog post:
https://blog.codepen.io/documentation/editor/adding-external-resources/
and learn how to use pens as external resources. So useful!

I learned this and the clever technique of dynamic injection
by studying this pen by @shshaw: https://codepen.io/shshaw/pen/epmrgO

Thanks for sharing, Shaw!

*/

;
(function() {

    var menu = {
        charPos: [288, 271, 241, 214, 184, 154, 118, 89, 58, 32, 0],
        init: function() {
            this.inject();
            this.cacheDOM();
            this.setStart();
            this.makeTimeline();
            this.bindEvents();
        },
        inject: function() {
            document.head.insertAdjacentHTML('beforeend', '<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">');
            document.body.insertAdjacentHTML('beforeend', '<div class="menu" data-menu="target" data-link="menu" style="position: absolute; top: 10px; left: 10px; opacity: 0; overflow: hidden; z-index: 9999"> <svg id="icon-menu" data-menu="svg" xmlns="http://www.w3.org/2000/svg" width="300" viewbox="0 0 340 397"> <g id="menu" fill="none" fill-rule="evenodd"> <g data-menu="boxes"> <g data-menu="boxes"> <g data-menu="boxes"> <g id="box-3" transform="translate(10 239)"> <path id="bg" fill="#0F1B23" d="M0 0h317v148c0 5.52-4.48 10-10 10H0V0z"></path> <g id="hearts" data-menu="hearts" fill-rule="nonzero"> <g transform="translate(134 109)"> <path id="Shape" fill="#83213E" d="M9.94 3.18C10.74 1.3 12.6 0 14.74 0c2.9 0 4.97 2.42 5.23 5.3 0 0 .14.72-.17 2-.43 1.76-1.42 3.3-2.76 4.5L9.94 18l-6.98-6.2C1.62 10.6.62 9.06.2 7.3c-.3-1.3-.17-2-.17-2C.3 2.42 2.37 0 5.26 0 7.4 0 9.13 1.3 9.94 3.18z"></path> <path id="Combined-Shape" fill="#6E1B34" d="M14 .05c-1.82.26-3.35 1.48-4.06 3.13-.18-.4-.4-.8-.67-1.15-.7.9-1.13 2.04-1.24 3.27 0 0-.14.7.17 2 .42 1.76 1.42 3.3 2.76 4.5l3 2.68 3.08-2.68c1.34-1.2 2.33-2.74 2.76-4.5.3-1.28.17-2 .17-2-.12-1.26-.58-2.42-1.3-3.34-.3.37-.54.78-.73 1.22C17.24 1.53 15.8.3 14 .05z"></path> <path id="Shape-Copy" fill="#AA2347" d="M19.44 3.18C20.24 1.3 22.1 0 24.24 0c2.9 0 4.97 2.42 5.23 5.3 0 0 .14.72-.17 2-.43 1.76-1.42 3.3-2.76 4.5l-7.1 6.2-6.98-6.2c-1.34-1.2-2.34-2.74-2.76-4.5-.3-1.3-.17-2-.17-2C9.8 2.42 11.87 0 14.76 0c2.15 0 3.87 1.3 4.68 3.18z"></path> <path id="Combined-Shape-Copy" fill="#8F1D3B" d="M23.5.05c-1.82.26-3.35 1.48-4.06 3.13-.18-.4-.4-.8-.67-1.15-.7.9-1.13 2.04-1.24 3.27 0 0-.14.7.17 2 .42 1.76 1.42 3.3 2.76 4.5l3 2.68 3.08-2.68c1.34-1.2 2.33-2.74 2.76-4.5.3-1.28.17-2 .17-2-.12-1.26-.58-2.42-1.3-3.34-.3.37-.54.78-.73 1.22C26.74 1.53 25.3.3 23.5.05z"></path> <path id="Shape-Copy-2" fill="#D12550" d="M28.74 3.18C29.54 1.3 31.4 0 33.54 0c2.9 0 4.97 2.42 5.23 5.3 0 0 .14.72-.17 2-.43 1.76-1.42 3.3-2.76 4.5l-7.1 6.2-6.98-6.2c-1.34-1.2-2.34-2.74-2.76-4.5-.3-1.3-.17-2-.17-2C19.1 2.42 21.17 0 24.06 0c2.15 0 3.87 1.3 4.68 3.18z"></path> </g> </g> <text id="message" data-menu="message" fill="#FFEECC" font-family="OpenSans-Light, Open Sans" font-size="14" font-weight="300" letter-spacing="1.2"> <tspan x="20" y="39">Under the MIT License &ndash;</tspan> <tspan x="204.5" y="39" font-family="OpenSans-Bold, Open Sans" font-weight="bold">take what</tspan> <tspan x="20" y="60" font-family="OpenSans-Bold, Open Sans" font-weight="bold">you want</tspan> <tspan x="94.79" y="60">. Thanks for hearting! </tspan> </text> <path id="Line" stroke="#0B141A" d="M1 12h277" stroke-linecap="square"></path> </g> </g> <g id="box-2" transform="translate(10 179)"> <path id="bg" fill="#0F1B23" d="M0 0h317v70H0z"></path> <g id="social" data-menu="social" transform="translate(29 20)"><a xlink:href="https://dribbble.com/Stromqvist" target="_blank"> <g id="dribbble" data-menu="dribbble" fill="#FFEECC" fill-rule="nonzero" transform="translate(55.765 .902)"> <path id="Shape" d="M17.32 14.77c-1.66-2.96-3.43-5.37-3.56-5.54-2.67 1.26-4.66 3.73-5.28 6.7.25.02 4.24.06 8.84-1.16z"></path> <path id="Shape" d="M15.55 8.6h-.03.03z"></path> <path id="Shape" d="M24.17 10.7c-1.7-1.48-3.9-2.4-6.33-2.4-.77 0-1.53.1-2.25.28.13.2 1.93 2.6 3.57 5.6 3.6-1.35 4.97-3.44 5-3.47z"></path> <path id="Shape" d="M19.48 19.5c-5.66 1.98-7.5 5.97-7.52 6 1.63 1.27 3.67 2.04 5.88 2.04 1.33 0 2.6-.27 3.74-.76-.14-.84-.7-3.8-2.04-7.3-.02 0-.04 0-.06.02z"></path> <path id="Shape" d="M18.5 18l.38-.12c-.24-.54-.5-1.1-.77-1.63-4.92 1.48-9.65 1.37-9.82 1.37v.3c0 2.47.92 4.72 2.44 6.43 0 0 2.62-4.67 7.8-6.35z"></path> <path id="Shape" d="M17.84 0C8 0 0 8.04 0 17.92c0 9.9 8 17.93 17.84 17.93S35.7 27.8 35.7 17.92C35.7 8.04 27.7 0 17.83 0zm11 20.2c-.16.72-.38 1.43-.67 2.1-.28.68-.62 1.32-1.03 1.92-.4.6-.86 1.16-1.37 1.67-.5.5-1.06.96-1.66 1.36-.58.4-1.23.76-1.9 1.04-.67.28-1.38.5-2.1.65-.73.16-1.5.23-2.25.23-.76 0-1.52-.07-2.26-.23-.73-.14-1.44-.37-2.12-.65-.66-.3-1.3-.63-1.9-1.04-.6-.4-1.15-.86-1.66-1.37-.5-.52-.97-1.08-1.37-1.68-.4-.6-.75-1.25-1.03-1.9-.3-.7-.5-1.4-.66-2.13-.15-.75-.22-1.5-.22-2.28 0-.76.07-1.52.22-2.26.15-.73.37-1.44.66-2.12.28-.67.63-1.3 1.03-1.9.4-.6.86-1.17 1.37-1.68.5-.5 1.06-.97 1.66-1.37.6-.42 1.24-.77 1.9-1.05.68-.3 1.4-.5 2.1-.66.75-.16 1.5-.23 2.27-.23.76 0 1.52.07 2.25.22.72.14 1.43.36 2.1.65.68.28 1.32.63 1.9 1.04.6.4 1.17.85 1.67 1.36.5.5.97 1.07 1.37 1.67.4.6.75 1.24 1.03 1.9.3.7.5 1.4.66 2.13.15.74.22 1.5.22 2.26 0 .77-.07 1.53-.22 2.27z"></path> <path id="Shape" d="M21.33 19.03c1.26 3.47 1.77 6.3 1.86 6.87 2.14-1.46 3.67-3.77 4.1-6.45-.2-.07-2.88-.9-5.97-.42z"></path> <path id="Shape" d="M19.9 15.62c.23.46.44.92.64 1.4l.2.5c3.3-.42 6.54.28 6.67.3 0-2.27-.82-4.37-2.16-6-.02.02-1.55 2.25-5.34 3.8z"></path> <circle data-link="dribbble" cx="18" cy="18" r="18" fill="#FFFFFF" opacity="0.01"></circle> </g></a><a xlink:href="https://github.com/nerdmanship" target="_blank"> <g id="github" data-menu="github" fill="#FFEECC" fill-rule="nonzero" transform="translate(223 1)"> <path id="Shape" d="M33.55 9.8c-1.6-2.76-3.78-4.94-6.53-6.55-2.75-1.6-5.75-2.42-9-2.42-3.27 0-6.27.8-9.02 2.42-2.75 1.6-4.93 3.8-6.53 6.54-1.6 2.75-2.4 5.76-2.4 9.02 0 3.92 1.13 7.45 3.4 10.58 2.3 3.13 5.25 5.3 8.86 6.5.42.08.73.02.94-.17.2-.18.3-.42.3-.7v-1.26c-.02-.8-.02-1.5-.02-2.1l-.54.1c-.33.07-.77.1-1.3.1-.5-.02-1.05-.07-1.6-.18-.57-.1-1.1-.34-1.58-.7-.48-.37-.82-.86-1.03-1.45L7.25 29c-.16-.35-.4-.74-.74-1.18-.33-.44-.67-.74-1-.9l-.18-.1c-.1-.1-.2-.18-.3-.3-.1-.1-.16-.2-.2-.32-.06-.1-.02-.2.1-.27.13-.07.36-.1.68-.1l.47.07c.3.06.7.25 1.15.56.46.3.83.72 1.13 1.22.36.64.8 1.13 1.3 1.46.5.34 1 .5 1.53.5.52 0 .97-.03 1.34-.1.38-.1.73-.2 1.05-.36.13-1.05.52-1.85 1.14-2.42-.9-.1-1.7-.23-2.4-.42-.7-.2-1.44-.5-2.2-.9-.75-.43-1.38-.96-1.88-1.58-.5-.63-.9-1.45-1.22-2.46-.32-1.02-.48-2.2-.48-3.5 0-1.9.6-3.5 1.84-4.84-.57-1.42-.52-3 .17-4.78.45-.14 1.12-.03 2 .32.9.35 1.55.65 1.96.9l1 .63c1.44-.4 2.94-.6 4.48-.6 1.55 0 3.05.2 4.5.6l.9-.56c.6-.37 1.3-.72 2.14-1.03.82-.3 1.45-.4 1.9-.26.7 1.77.75 3.36.18 4.78 1.23 1.33 1.84 2.94 1.84 4.83 0 1.3-.16 2.5-.47 3.5-.33 1.03-.75 1.85-1.25 2.47-.5.62-1.14 1.14-1.9 1.56-.75.42-1.48.72-2.2.9-.7.2-1.5.34-2.4.43.82.7 1.23 1.82 1.23 3.33v4.93c0 .28.1.52.3.7.18.2.5.25.9.17 3.63-1.2 6.58-3.37 8.86-6.5 2.28-3.13 3.42-6.66 3.42-10.58 0-3.26-.8-6.27-2.4-9.03z"></path> <circle data-link="github" cx="18" cy="18" r="18" fill="#FFFFFF" opacity="0.01"></circle> </g></a><a xlink:href="https://www.instagram.com/nerdmanship/" target="_blank"> <g id="instagram" data-menu="instagram" fill="#FFEECC" fill-rule="nonzero" transform="translate(111.53)"> <path id="Shape" d="M17.84 21.5c1.97 0 3.58-1.6 3.58-3.58 0-.78-.26-1.5-.68-2.1-.65-.9-1.7-1.48-2.9-1.48s-2.24.6-2.9 1.5c-.4.58-.67 1.3-.67 2.08 0 1.98 1.6 3.6 3.57 3.6z"></path> <path id="Shape" d="M25.65 13.53v-3.45H22.2l.02 3.47z"></path> <path id="Shape" d="M17.84 0C8 0 0 8.04 0 17.92c0 9.9 8 17.93 17.84 17.93S35.7 27.8 35.7 17.92C35.7 8.04 27.7 0 17.83 0zM28 15.83v8.35c0 2.17-1.77 3.94-3.93 3.94H11.62c-2.16 0-3.92-1.77-3.92-3.94V11.67c0-2.17 1.76-3.94 3.92-3.94h12.45c2.16 0 3.92 1.77 3.92 3.94v4.16z"></path> <path id="Shape" d="M23.4 17.92c0 3.08-2.5 5.58-5.56 5.58-3.06 0-5.55-2.5-5.55-5.58 0-.74.14-1.44.4-2.1H9.67v8.36c0 1.08.87 1.95 1.95 1.95h12.45c1.07 0 1.94-.87 1.94-1.95v-8.35H23c.27.65.42 1.35.42 2.1z"></path> <circle data-link="instagram" cx="18" cy="18" r="18" fill="#FFFFFF" opacity="0.01"></circle> </g></a><a xlink:href="https://www.linkedin.com/in/johanstromqvist" target="_blank"> <g id="linkedin" data-menu="linkedin" fill="#FFEECC" fill-rule="nonzero" transform="translate(167.295)"> <path id="Shape" d="M21.1 15.38c-1.53 0-2.2.84-2.6 1.43V15.6h-2.87c.04.82 0 8.7 0 8.7h2.88V19.4c0-.26.02-.52.1-.7.2-.53.68-1.07 1.48-1.07 1.04 0 1.45.8 1.45 1.97v4.65h2.88V19.3c0-2.68-1.4-3.92-3.3-3.92zm-2.6 1.46v-.03.04z"></path> <path id="Rectangle-path" d="M11.16 15.58h2.88v8.7h-2.88z"></path> <path id="Shape" d="M17.84 0C8 0 0 8.04 0 17.92c0 9.9 8 17.93 17.84 17.93S35.7 27.8 35.7 17.92C35.7 8.04 27.7 0 17.83 0zm9.47 26.03c0 .76-.62 1.38-1.4 1.38H9.67c-.78 0-1.4-.6-1.4-1.37V9.53c0-.75.62-1.37 1.4-1.37H25.9c.78 0 1.4.62 1.4 1.38v16.5z"></path> <path id="Shape" d="M12.62 11.4c-1 0-1.63.64-1.63 1.5 0 .83.6 1.5 1.58 1.5h.02c1 0 1.62-.67 1.62-1.5-.02-.86-.62-1.5-1.6-1.5z"></path> <circle data-link="linkedin" cx="18" cy="18" r="18" fill="#FFFFFF" opacity="0.01"></circle> </g></a><a xlink:href="https://twitter.com/Stromqvist" target="_blank"> <g id="twitter" data-menu="twitter" fill="#FFEECC" fill-rule="nonzero"> <path id="Shape" d="M17.84.9C8 .9 0 8.94 0 18.83c0 9.88 8 17.92 17.84 17.92S35.7 28.7 35.7 18.83C35.7 8.93 27.7.9 17.83.9zm7.97 13.82.02.54C25.82 20.7 21.7 27 14.12 27c-2.3 0-4.47-.7-6.3-1.86.34.04.66.06 1 .06 1.92 0 3.7-.66 5.1-1.77-1.8-.03-3.32-1.22-3.84-2.86.25.05.5.07.77.07.38 0 .74-.05 1.08-.14-1.88-.38-3.3-2.05-3.3-4.05v-.05c.56.3 1.2.5 1.87.52-1.1-.74-1.83-2-1.83-3.43 0-.77.2-1.48.56-2.1 2.02 2.5 5.05 4.15 8.46 4.32-.08-.3-.1-.6-.1-.94 0-2.28 1.83-4.12 4.1-4.12 1.18 0 2.24.5 3 1.3.93-.2 1.8-.53 2.6-1-.3.96-.96 1.77-1.8 2.28.83-.1 1.62-.32 2.35-.65-.55.82-1.24 1.54-2.04 2.12z"></path> <circle data-link="twitter" cx="18" cy="18" r="18" fill="#FFFFFF" opacity="0.01"></circle> </g></a></g> </g> </g> <g id="box-1" transform="translate(10 41)"> <path id="bg" fill="#0F1B23" d="M0 0h317v148H0z"></path> <path id="Line" stroke="#0B141A" d="M1 142h277" stroke-linecap="square"></path> <path id="shadow" fill="#0B1319" d="M0 0h317v16L0 10z"></path> <g id="links" data-menu="links" transform="translate(23 27)"><a xlink:href="https://www.facebook.com/nerdmanship" target="_blank"> <g id="link-3" fill="#FFEECC" transform="translate(0 73)"> <text id="Animation-on-Faceboo" data-menu="textLinks" font-family="OpenSans-Bold, Open Sans" font-size="18" font-weight="700" letter-spacing="1.2"> <tspan x="23" y="17">Animation on Facebook</tspan> </text> <path id="arrow" data-menu="arrows" fill-rule="nonzero" d="M14 11c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7zm-8.4 3.08c-.2-.2-.2-.48 0-.68l2.13-2.13L5.37 8.9c-.18-.18-.18-.5 0-.67l.22-.2c.18-.2.5-.2.68 0l3.25 3.24L6.5 14.3c-.2.2-.5.2-.68 0l-.23-.22z"></path> <rect data-link="facebook" x="0" y="0" width="250" height="20" fill="#FFFFFF" opacity="0.01"></rect> </g></a><a xlink:href="http://nerdmanship.com" target="_blank"> <g id="link-2" fill="#FFEECC" transform="translate(0 37)"> <text data-menu="textLinks" id="Nerdmanship.com" font-family="OpenSans-Bold, Open Sans" font-size="18" font-weight="700" letter-spacing="1.2"> <tspan x="23" y="17">Nerdmanship.com</tspan> </text> <path id="arrow" data-menu="arrows" fill-rule="nonzero" d="M14 11c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7zm-8.4 3.08c-.2-.2-.2-.48 0-.68l2.13-2.13L5.37 8.9c-.18-.18-.18-.5 0-.67l.22-.2c.18-.2.5-.2.68 0l3.25 3.24L6.5 14.3c-.2.2-.5.2-.68 0l-.23-.22z"></path> <rect data-link="website" x="0" y="0" width="250" height="20" fill="#FFFFFF" opacity="0.01"></rect> </g></a><a xlink:href="https://codepen.io/nerdmanship" target="_blank"> <g id="link-1" fill="#FFEECC"> <text id="Experimental-Pens" data-menu="textLinks" font-family="OpenSans-Bold, Open Sans" font-size="18" font-weight="700" letter-spacing="1.2"> <tspan x="23" y="17">Experimental Pens</tspan> </text> <path id="arrow" data-menu="arrows" fill-rule="nonzero" d="M14 11c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7zm-8.4 3.08c-.2-.2-.2-.48 0-.68l2.13-2.13L5.37 8.9c-.18-.18-.18-.5 0-.67l.22-.2c.18-.2.5-.2.68 0l3.25 3.24L6.5 14.3c-.2.2-.5.2-.68 0l-.23-.22z"></path> <rect data-link="codepen" x="0" y="0" width="250" height="20" fill="#FFFFFF" opacity="0.01"></rect> </g></a></g> </g> </g> <g id="title" transform="translate(1 1)"> <rect id="bg" data-menu="iconBox" width="337" height="50" fill="#192D3A" rx="8" stroke-width="2px"></rect> <g id="nerdmanship" fill="#F6C155" transform="translate(12.5 6.5)"> <g id="char-11" data-menu="chars" transform="translate(288)"> <path d="M13.8 27.15h-2.04c-.85 0-1.3.1-1.6.35-.4.4-.6 1-.6 1.55 0 .3.05.6.05.85.1 1.05.06 2.1.1 3.1.06.4.1.85.1 1.25 0 .75-.04 1.65-1.6 1.65-.5 0-2.64-.15-3.1-.15l-2 .15c-.2.05-.7.1-1.04.1-1.05 0-1.4-.75-1.4-1.95 0-.5.1-1 .1-1.45L.7 31.35c0-.2.06-.5.1-1.2.06-.25.1-.75.1-1.65 0-.6-.1-3.7-.1-4.45l.06-4.65c0-1.5-.05-3.05-.05-4.55 0-1.7.1-3.45.1-5.2C.9 8.7.7 3.9.7 2.8c0-1.25.86-1.8.96-1.9.4-.25.85-.35 1.75-.35L5.5.6C6.37.6 7.17.5 7.97.5c.3 0 1.7.1 2.05.1.36 0 2.1-.1 2.5-.1 4.4 0 6.36 1.45 7.1 2 .6.45 1.66 1.3 2.4 2.95.1.25.9 2.4 1 2.8.46 1.4.6 2.8.6 4.05 0 1.1-.2 3.3-.34 4.95-.15 1.25-.3 2.95-1.9 5.3-1.5 2.2-3.8 4.5-7.55 4.6zm-4.04-13.1v1.3c0 2.4 1.5 2.95 2.05 2.95.4 0 2.36-.35 2.36-2.9l-.05-1.5.06-1.6c0-2.6-1.55-3.4-2.4-3.4-1.8 0-1.95 1.85-2 2.9-.05.35 0 1.9 0 2.25z"></path> </g> <g id="char-10" data-menu="chars" transform="translate(271)"> <path d="M9.74 18.9c0-.5.1-2.65.1-3.05L9.8 12.1c0-5.15 0-5.7.04-6.9 0-.45.15-2.35.15-2.75C10 2.2 10 .6 8.8.6l-.86.05c-.6.05-1.2.05-1.8.05L3.04.65c-.95 0-1.2 0-1.5.15-.25.15-.8.55-.8 1.45 0 .35.15 2.05.15 2.4v3.4c0 .85-.16 4.6-.16 5.35v6.25c0 .8.15 4.4.15 5.15v3.65c0 .5-.16 2.7-.16 3.15 0 .45 0 3.05.05 3.25.24 1.1 1.54 1.1 1.84 1.1h.3c.5 0 2.9-.15 3.4-.15.35 0 1.8.1 2.1.1 1.2 0 1.55-.7 1.55-1.3 0-.65-.2-3.6-.2-4.2 0-.6.14-3.25.14-3.8 0-.85-.2-4.5-.2-5.25V18.9z"></path> </g> <g id="char-9" data-menu="chars" transform="translate(241)"> <path d="M.27 30.4c0 .6-.25 3.15-.25 3.65s0 2.05 1.9 2.05c.2 0 .75-.05 1.25-.1.5 0 1.05-.05 1.2-.05h.75c.7 0 1.35 0 2 .1.2.05.4.05.55.05.65 0 1.5-.55 1.5-1.5 0-.3-.1-1.45-.1-1.65 0-.5.1-2.6.1-3.05 0-.45-.1-2.55-.1-3 0-.8.05-1.3.2-2.65.15-1.4 1.15-1.6 1.75-1.6.35 0 1.4 0 1.7.1 1.1.4 1.25 1.7 1.25 2.9 0 .35-.1 1.75-.1 2.05-.05.75-.05 2.25-.05 3.05l.05 1.45c-.05.35-.2 1.8-.2 2.05 0 1.5 1.05 1.8 1.65 1.8.45 0 2.95-.2 3.5-.2.5 0 1.05.05 1.6.1.2 0 .45.05.65.05 1.4 0 1.7-1.2 1.7-2.05 0-.35-.15-1.85-.2-2.15V31l.05-3.1V27c-.05-1-.15-1.95-.2-2.95-.05-.75-.05-1.55-.05-2.35s.1-4.5.1-5.25c0-.7-.1-3.7-.1-4.35 0-.4.15-2.25.15-2.6l-.05-1.35c0-.5.1-2.7.1-3.45.05-.6.1-1.15.1-1.7 0-.8 0-1.05-.1-1.25 0-.05-.4-1.05-1.9-1.05-.15 0-.7.05-1.2.05-.5.05-1 .1-1.2.1-.7 0-1.45-.05-2.2-.1-.25-.05-.5-.05-.8-.05-1.45 0-1.8.95-1.8 1.65 0 .35.1 1.85.15 2.15v.35c0 .65-.05 1.3-.05 1.95 0 .5.15 2.65.15 3.05 0 .55-.1 2-.2 2.55-.2 1.35-1.2 1.4-2.05 1.4-1.4 0-2.45-.1-2.45-1.85l.05-3.55c0-.5-.1-2.75-.1-3.2 0-.4.25-2.35.25-2.75 0-.75-.2-1.75-1.8-1.75-.2 0-.35 0-1.35.1-.5.05-1 .05-1.5.05-.2 0-.8-.05-1.4-.05-.6-.05-1.2-.05-1.4-.05C.17.75.12 2.05.12 2.35c0 .5.15 2.75.15 3.2 0 .5-.1 2.85-.1 3.35 0 .4 0 2.45.1 4.4.05.7.1 1.65.1 2.1 0 .75-.2 4.15-.2 4.8 0 .95.2 5.05.2 5.9 0 .45-.1 2.5-.1 2.9v1.4z"></path> </g> <g id="char-8" data-menu="chars" transform="translate(214)"> <path d="M1.15 10.85c0 2.05 0 3.3 1.15 5.35.8 1.45 1.55 2.2 2.8 3.35.4.3 1.95 1.9 2.25 2.2 3.1 2.95 3.5 3.3 3.5 4.4C10.85 27.7 9.3 28 7.9 28c-1 0-1.95-.2-2.4-.5-.3-.2-.6-.5-.9-.75-.6-.5-1.1-.6-1.95-.6-1.8 0-1.8 1.65-1.8 2.25 0 .35.1 1.95.1 2.25 0 .5-.15 2.7-.15 3.15 0 .5 0 .95.85 1.55 1.05.75 4.3 1.15 6.45 1.15 1.55 0 4.2-.2 5.55-.55 1.1-.3 3.7-1.25 5.35-3.75 1.3-1.95 1.35-4.3 1.35-6.6 0-3.15-.7-5.2-4.05-8.45-.3-.3-.6-.55-.95-.85-.5-.45-1.3-1.25-1.85-1.75-2.15-1.95-2.95-2.65-2.95-4 0-1.75 1.6-1.8 2.2-1.8.4 0 1 0 1.75.2.7.2 1.35.45 2 .55h.35c1.7 0 1.9-1.35 1.9-1.9l-.05-1.75c0-.55.1-3.4.1-3.5C18.8.2 16 .2 11.85.2 10.1.2 8 .35 5.75 1.35c-1.7.8-3 2.3-3.75 4.05-.5 1.15-.85 2.7-.85 5.45z"></path> </g> <g id="char-7" data-menu="chars" transform="translate(184)"> <path d="M.28 27.4c.05.2.1 1.15.1 1.35 0 .25-.35 4.75-.35 5.65 0 .35 0 1.6 1.35 1.6.25 0 .45 0 .65-.05.6-.05 1.2-.1 1.8-.1.6 0 3.2.1 3.7.1.8 0 1.5-.35 1.5-1.4 0-.65-.25-3.65-.25-4.25 0-1.45.15-2.9.15-4.35 0-1.15-.2-3.5-.25-3.85-.05-.45-.15-1.05-.15-1.35 0-.2.1-.45.2-.45.2 0 .4.6 1 2.35.25.7.45 1.4.75 2.1.2.5.5 1.05.75 1.55.35.7.65 1.45.9 2.15.15.5.3 1 .5 1.55.3.75.75 1.6 1.15 2.4.25.6.55 1.2.7 1.8.2.65.55 1.65 1.4 1.65.5 0 2.95-.1 3.45-.1.4 0 2.1.1 2.5.1.85 0 .95 0 1.2-.15.65-.35.65-.9.65-1.05 0-.25-.15-1.35-.15-1.6-.05-.85-.1-1.7-.1-2.55 0-.9.25-4.95.25-5.75 0-.95-.2-5.2-.2-6.05 0-.75.05-1.5.05-2.25.05-1.65.1-3.3.1-4.35 0-.95-.15-5.05-.15-5.85 0-.45.1-3.05.2-3.55 0-.25.05-.45.05-.65 0-.75-.5-1.15-.7-1.25-.15-.1-.35-.1-.65-.1l-1.6.05c-.55 0-2.5 0-2.95-.05-.3 0-.6-.05-.85-.05-1.2 0-1.75.8-1.85 1-.2.4-.2 1.85-.2 2.3 0 .95.25 5 .25 5.85 0 .35-.1 1.85-.1 2.15 0 .1.05.6.1.9 0 .35.05.7.05 1.05 0 .45 0 1.95-.25 1.95-.1 0-.3-.2-.45-.75-.3-.85-.9-2.8-1.35-3.85-.15-.3-.35-.6-.45-.9l-.55-1.45c-.15-.35-.35-.7-.55-1.05-.05-.1-.95-2.1-.95-2.2-.1-.2-.15-.45-.25-.65-.45-1.3-1.5-3.35-1.7-3.65-.1-.2-.45-.7-1.25-.7-.25 0-2.45.15-2.9.15-.2 0-1.75 0-1.95-.05-.35 0-.65-.1-1-.1-1.15 0-1.4.95-1.4 1.4 0 .8.15 4.3.15 5 0 .35 0 1.2-.05 2.25-.05 1-.05 2-.05 3 0 .45 0 2.25.05 3.15 0 .25.1 1.85.1 1.95 0 .7-.05 1.4-.1 2.1-.05 1.15-.1 2.5-.1 3.7l.05 2.65v1.55z"></path> </g> <g id="char-6" data-menu="chars" transform="translate(154)"> <path d="M2.2 21.1c.2-1.5.56-3 .76-4.45.15-.9.2-1.75.35-2.65.2-1.25.56-2.5.8-3.8.4-1.95.5-3.95.9-5.9C5.8.8 6.3.55 8.4.55c.56 0 1.1.05 1.66.1 1 .05 2 .1 3 .1 1.25 0 2.5-.05 3.75-.1 1.9 0 2.4.45 2.76 2.3.15.6.7 3.35.75 3.85.1.6.5 3.8.6 4.5.2 1.2 1.36 6.9 1.6 8.25.26 1.35.3 1.6.5 4.1.2 2.1.6 4.2 1 6.3.2.8.36 1.65.56 2.45.1.5.15 1 .15 1.5 0 1.1-.64 2.1-1.54 2.1-.5 0-2.85-.15-3.4-.15-.35 0-2.2.15-2.6.15-1.6 0-1.65-1.25-1.65-1.8 0-.7-.1-1.45-.2-2.2-.1-1.1-.2-1.65-.74-1.9-.2-.1-1.2-.1-3.2-.1-1.05 0-1.45.1-1.7.5s-.4 3.05-.45 3.65C9.17 35.65 8.37 36 7.5 36c-.34 0-2-.15-2.4-.15l-3.04.05c-.4 0-.8 0-1.2-.1-.65-.2-.85-.9-.85-1.25 0-.25 1.1-6.5 1.16-6.9.1-.55.25-1.15.35-1.75.16-.7.56-4.05.7-4.8zm8.66-3.65c-.15.75-.3 1.5-.3 2.2 0 1.35.4 1.85 1.5 1.85.6 0 1.95 0 1.95-1.7 0 0 0-1.95-.3-3.8-.1-.8-.3-1.6-.4-2.4-.1-.65-.14-1.25-.24-1.85-.1-.8-.5-.95-.6-.95-.35 0-.55.85-.6 1.25-.1.6-.3 1.5-.45 2.05-.3 1.15-.34 2.25-.54 3.35z"></path> </g> <g id="char-5" data-menu="chars" transform="translate(118)"> <path d="M9.83 28.45c.05-.2.1-1.85.1-1.85 0-.7-.05-1.35-.05-2 0-.7.15-3.7.15-4.3 0-.25 0-.75.2-.75.45 0 1.55 2.8 1.8 3.2.15.3.35.6.55.9.35.5 1.55 2.8 1.85 3.25.4.55.6.65 1.5.65.8 0 1.15-.75 1.6-1.75.25-.65 1.5-3.4 1.7-4 .4-1.25.45-1.4.65-1.7.2-.35.35-.4.45-.4.2 0 .2.2.2.45l.05.75-.05 1.5c0 .5.15 2.65.15 3.05 0 .35-.2 1.75-.2 2 0 .45.05.85.05 1.25v2.55c0 .55 0 1.1-.1 1.65-.1.9-.1 1-.1 1.3 0 .65.1 1 .65 1.4.3.2.6.3 1.2.3.3 0 .65 0 .95-.05.55-.05 1.1-.05 1.65-.05.95 0 1.85.05 2.8.1.25.05.55.05.85.05 1.2 0 1.2-.85 1.2-2.2 0-.6-.2-3.05-.2-3.55 0-.95.15-5 .15-5.8 0-.85-.1-4.55-.1-5.35 0-1.35.1-7.45.1-8.65l-.05-3.45.2-3.45c.05-.35.1-1.45.1-1.75 0-.9-.65-1.3-1.15-1.3-.2 0-.35.05-.55.05-.1.05-2.25.1-2.45.1-.2 0-.75-.05-1.25-.05C23.88.5 23.38.5 23.18.5c-.15 0-1.55.1-1.7.15-.6.2-.9.9-1.25 1.65l-.9 1.8c-.4.95-.7 1.9-1.15 2.85-.25.55-1.45 2.95-1.7 3.45-.15.35-.6 1.45-1 1.45-.45 0-1.1-1.45-1.5-2.35-.15-.4-.35-.8-.6-1.2-.4-.7-.8-1.3-1.15-2-.95-1.7-1.4-2.75-1.8-3.8-.5-1.45-.95-1.95-2.1-1.95-.25 0-1.45.1-1.65.1-.65 0-3.45-.1-4-.1C2.03.55.88.55.88 2c0 .2 0 1.35.05 1.6 0 1 .2 2 .2 3 0 .5-.1 2.65-.1 3.05 0 1 .1 5.25.1 6.1 0 1.05-.15 5.8-.15 6.75 0 1.05.15 5.6.15 6.55 0 .8 0 1.9-.05 2.6 0 .45-.15 2.3-.15 2.7 0 1.55 1 1.65 1.8 1.65.2 0 .3 0 1.1-.05.35-.05.65-.05 2.15-.05l2.25.05c1.6 0 1.7-.95 1.7-1.8 0-.4-.05-.8-.05-1.2-.05-.8-.05-1.5-.05-2.75v-1.75z"></path> </g> <g id="char-4" data-menu="chars" transform="translate(89)"> <path d="M6.2.75C6.87.75 10 .6 10.7.6c2.16 0 4.36.2 6.2 1.3.6.35 3.66 2.35 5.26 6.15 1.45 3.55 1.7 8.65 1.7 10.7 0 1.05-.05 3.05-.7 5.7-.45 1.9-1.15 3.7-2.1 5.4-3.5 5.8-7.95 6-11 6-.4 0-2.25-.15-2.7-.15-.55 0-3.2.25-3.8.25-1.45 0-3.1 0-3.1-2.3 0-.35.05-.7.05-1.05.06-.4 0-.85.06-1.25 0-.35.15-2.15.15-2.55 0-.95-.1-1.9-.1-2.8-.1-1.45-.14-4.2-.14-5.05 0-.5.1-2.95.1-3.5 0-.7-.15-4.2-.15-5 0-.7.1-4 .1-4.75 0-.6-.14-3.5-.14-4.15C.36 2.6.36.7 2.56.7L6.2.75zm4.7 8.45c-1.7 0-1.7 1.75-1.7 2.4 0 .55.06 1.05.06 1.55.05.95.1 2.3.1 3.65l-.05 3.5c0 .35.1 2.1.16 2.5l-.05 2.15c0 .85.06 1.25.16 1.7.35 1.2 1.4 1.2 1.6 1.2.15 0 2 0 2.45-2.9.7-4.95.7-5.15.7-6.15 0-1.15-.1-2.25-.2-3.4-.14-1.9-.54-6.2-3.2-6.2z"></path> </g> <g id="char-3" data-menu="chars" transform="translate(58)"> <path d="M6.9.6c.9 0 5.34-.15 6.34-.15C20.14.45 22.1 3.9 23.3 7c.7 1.75.74 5.9.74 6.45 0 2.25-.3 4.35-1.5 6.7-.2.35-.95 1.85-2.3 2.95-.5.45-.75.65-.75 1.05 0 .75 2 4 2.3 4.75.2.45.34.9.5 1.3l.6 1.2c1.4 2.6 1.5 2.95 1.5 3.4 0 .6-.5 1.05-1.26 1.05-.4 0-2.2-.1-2.6-.1-.65 0-2.55.05-3.15.1-.3 0-.6.05-.96.05-.95 0-1.25-.3-1.55-.8-.16-.3-.8-1.9-.96-2.25-.4-.85-.95-1.7-1.35-2.6l-.46-1.05c-.5-1.2-1.1-2.45-1.6-2.45-.7 0-.7.85-.7 1.15 0 .35.1 2.3.1 2.75L9.9 32.7c0 .25.1 1.7.1 2 0 1.05-.9 1.25-1.2 1.25-.2 0-.36-.05-.56-.05-.45-.05-1.85-.1-2.35-.1-.46 0-3 .2-3.5.2-1 0-1.6-.8-1.6-1.7 0-.15 0-.35.04-.5.15-2.5.2-4 .2-4.85 0-1-.2-5.8-.2-6.9 0-.95.15-5.8.15-6.85 0-.65-.1-3.75-.1-4.45 0-.7.1-4.1.1-4.85C1 5.45.9 3.45.9 3 .9 1.25 2 .55 3.6.55L6.9.6zm4.94 8.2c-1.95 0-2 1.75-2 2.55 0 .45-.1 2.9-.1 3.45 0 1.05.7 2.35 2.1 2.35 1.45 0 2.15-.8 2.4-1.85.1-.45.2-2.4.2-2.9 0-1.85-.9-3.6-2.6-3.6z"></path> </g> <g id="char-2" data-menu="chars" transform="translate(32)"> <path d="M14.72.65c-.3 0-1.65.1-1.9.1-.65 0-3.6-.1-4.2-.1h-2.6c-.2 0-.85-.05-1.45-.1C3.92.55 3.32.5 3.07.5.52.5.52 1.9.52 4.35l.05 3.8c0 1.75-.1 3.55-.1 5.3 0 .75.1 4.15.1 4.8l-.05 4.3.05 2.3c0 .35-.15 2-.15 2.35l.05 3.1c0 .85 0 2.1-.1 3.15 0 .2-.05.4-.05.6 0 1.05.85 1.95 2.05 1.95l1.9-.05 3.1-.05 1.7.05 1.8-.05c1.05 0 2.1.1 3.15.1l1.7-.05c.25 0 1.5.1 1.75.1.6 0 1.8-.35 1.8-2l-.05-2.15c0-.35 0-.9.05-1.45.05-.3.05-.6.05-.9 0-1.4-1.2-1.8-1.85-1.8-.35 0-.65.05-1 .1s-.75.05-1.15.05c-.35 0-.7 0-1.05-.05-.45-.05-.95-.15-1.45-.2-.65 0-1.45 0-2-.15-1.25-.35-1.25-1.25-1.25-2.25 0-1.4 0-2.15.25-2.6.5-.9 1.55-.95 2.35-.95.6 0 3.5.2 4.05.2.75 0 1.5 0 2-1.15.1-.2.15-.45.15-.9 0-.35-.1-1.8-.1-2.1 0-.35.1-1.8.1-2.1 0-1.4-.45-2-1.95-2l-1.6.05c-.35 0-1.75-.1-2.05-.1-.25 0-1.3.1-1.5.1-1.75 0-1.75-1.95-1.75-2.45 0-1.4 0-1.55.2-1.85.3-.45.85-.85 2.75-.85.35 0 1.8.15 2.1.15.25 0 1.35-.1 1.55-.1.15 0 .7.05.85 0 1.7-.15 1.8-1.3 1.8-2l-.05-1.7c0-.45.15-2.35.15-2.75 0-.95-.6-1.55-1.5-1.55l-1.6.05h-1.05z"></path> </g> <g id="char-1" data-menu="chars"> <path d="M.9 27.4c.05.2.1 1.15.1 1.35C1 29 .65 33.5.65 34.4c0 .35 0 1.6 1.35 1.6.25 0 .45 0 .65-.05.6-.05 1.2-.1 1.8-.1.6 0 3.2.1 3.7.1.8 0 1.5-.35 1.5-1.4 0-.65-.25-3.65-.25-4.25 0-1.45.15-2.9.15-4.35 0-1.15-.2-3.5-.25-3.85-.05-.45-.15-1.05-.15-1.35 0-.2.1-.45.2-.45.2 0 .4.6 1 2.35.25.7.45 1.4.75 2.1.2.5.5 1.05.75 1.55.35.7.65 1.45.9 2.15.15.5.3 1 .5 1.55.3.75.75 1.6 1.15 2.4.25.6.55 1.2.7 1.8.2.65.55 1.65 1.4 1.65.5 0 2.95-.1 3.45-.1.4 0 2.1.1 2.5.1.85 0 .95 0 1.2-.15.65-.35.65-.9.65-1.05 0-.25-.15-1.35-.15-1.6-.05-.85-.1-1.7-.1-2.55 0-.9.25-4.95.25-5.75 0-.95-.2-5.2-.2-6.05 0-.75.05-1.5.05-2.25.05-1.65.1-3.3.1-4.35 0-.95-.15-5.05-.15-5.85 0-.45.1-3.05.2-3.55 0-.25.05-.45.05-.65 0-.75-.5-1.15-.7-1.25C23.5.7 23.3.7 23 .7l-1.6.05c-.55 0-2.5 0-2.95-.05-.3 0-.6-.05-.85-.05-1.2 0-1.75.8-1.85 1-.2.4-.2 1.85-.2 2.3 0 .95.25 5 .25 5.85 0 .35-.1 1.85-.1 2.15 0 .1.05.6.1.9 0 .35.05.7.05 1.05 0 .45 0 1.95-.25 1.95-.1 0-.3-.2-.45-.75-.3-.85-.9-2.8-1.35-3.85-.15-.3-.35-.6-.45-.9L12.8 8.9c-.15-.35-.35-.7-.55-1.05-.05-.1-.95-2.1-.95-2.2-.1-.2-.15-.45-.25-.65-.45-1.3-1.5-3.35-1.7-3.65-.1-.2-.45-.7-1.25-.7-.25 0-2.45.15-2.9.15C5 .8 3.45.8 3.25.75c-.35 0-.65-.1-1-.1-1.15 0-1.4.95-1.4 1.4 0 .8.15 4.3.15 5C1 7.4 1 8.25.95 9.3c-.05 1-.05 2-.05 3 0 .45 0 2.25.05 3.15 0 .25.1 1.85.1 1.95 0 .7-.05 1.4-.1 2.1-.05 1.15-.1 2.5-.1 3.7l.05 2.65v1.55z"></path> </g> <g id="char-0" data-menu="icon"> <path d="M.9 27.4c.05.2.1 1.15.1 1.35C1 29 .65 33.5.65 34.4c0 .35 0 1.6 1.35 1.6.25 0 .45 0 .65-.05.6-.05 1.2-.1 1.8-.1.6 0 3.2.1 3.7.1.8 0 1.5-.35 1.5-1.4 0-.65-.25-3.65-.25-4.25 0-1.45.15-2.9.15-4.35 0-1.15-.2-3.5-.25-3.85-.05-.45-.15-1.05-.15-1.35 0-.2.1-.45.2-.45.2 0 .4.6 1 2.35.25.7.45 1.4.75 2.1.2.5.5 1.05.75 1.55.35.7.65 1.45.9 2.15.15.5.3 1 .5 1.55.3.75.75 1.6 1.15 2.4.25.6.55 1.2.7 1.8.2.65.55 1.65 1.4 1.65.5 0 2.95-.1 3.45-.1.4 0 2.1.1 2.5.1.85 0 .95 0 1.2-.15.65-.35.65-.9.65-1.05 0-.25-.15-1.35-.15-1.6-.05-.85-.1-1.7-.1-2.55 0-.9.25-4.95.25-5.75 0-.95-.2-5.2-.2-6.05 0-.75.05-1.5.05-2.25.05-1.65.1-3.3.1-4.35 0-.95-.15-5.05-.15-5.85 0-.45.1-3.05.2-3.55 0-.25.05-.45.05-.65 0-.75-.5-1.15-.7-1.25C23.5.7 23.3.7 23 .7l-1.6.05c-.55 0-2.5 0-2.95-.05-.3 0-.6-.05-.85-.05-1.2 0-1.75.8-1.85 1-.2.4-.2 1.85-.2 2.3 0 .95.25 5 .25 5.85 0 .35-.1 1.85-.1 2.15 0 .1.05.6.1.9 0 .35.05.7.05 1.05 0 .45 0 1.95-.25 1.95-.1 0-.3-.2-.45-.75-.3-.85-.9-2.8-1.35-3.85-.15-.3-.35-.6-.45-.9L12.8 8.9c-.15-.35-.35-.7-.55-1.05-.05-.1-.95-2.1-.95-2.2-.1-.2-.15-.45-.25-.65-.45-1.3-1.5-3.35-1.7-3.65-.1-.2-.45-.7-1.25-.7-.25 0-2.45.15-2.9.15C5 .8 3.45.8 3.25.75c-.35 0-.65-.1-1-.1-1.15 0-1.4.95-1.4 1.4 0 .8.15 4.3.15 5C1 7.4 1 8.25.95 9.3c-.05 1-.05 2-.05 3 0 .45 0 2.25.05 3.15 0 .25.1 1.85.1 1.95 0 .7-.05 1.4-.1 2.1-.05 1.15-.1 2.5-.1 3.7l.05 2.65v1.55z"></path> </g> </g> <rect data-link="menu" data-menu="titleBox" width="50" height="50" fill="#FFFFFF" opacity="0.01" rx="8"></rect> </g> </g> </svg></div>');
        },
        cacheDOM: function() {
            this.target = document.querySelector("[data-menu=target]");
            this.svg = document.querySelector("[data-menu=svg]");
            this.singles = ["icon", "iconBox", "titleBox", "social", "links", "twitter", "dribbble", "instagram", "linkedin", "github", "message", "hearts"];
            this.multiples = ["chars", "boxes", "textLinks", "arrows"];
            this.s = {};
            this.m = {};
            for (var i = 0; i < this.singles.length; i++) {
                this.s[this.singles[i]] = this.svg.querySelector("[data-menu=" + this.singles[i] + "]");
            }
            for (var i = 0; i < this.multiples.length; i++) {
                this.m[this.multiples[i]] = this.svg.querySelectorAll("[data-menu=" + this.multiples[i] + "]");
            }
            this.social = [menu.s.twitter, menu.s.dribbble, menu.s.instagram, menu.s.linkedin, menu.s.github];
        },
        bindEvents: function() {
            this.target.addEventListener("mouseover", menu.show);
            this.target.addEventListener("mouseout", menu.hide);
            this.s.links.addEventListener("mouseover", function(e) { menu.animateLinkIn(e); });
            this.s.links.addEventListener("mouseout", function(e) { menu.animateLinkOut(e); });
            this.s.social.addEventListener("mouseover", function(e) { menu.animateSocialIn(e); });
            this.s.social.addEventListener("mouseout", function(e) { menu.animateSocialOut(e); });
            this.svg.addEventListener("click", function(e) { menu.trackEvent(e); });
        },
        setStart: function() {
            TweenMax.set(menu.target, { width: "55", height: "55" });
            TweenMax.set(menu.s.icon, { attr: { fill: "rgba(246, 193, 85, 0.7)" } });
            TweenMax.set(menu.s.iconBox, { attr: { fill: "rgba(25, 45, 58, 0.5)", stroke: "rgba(55, 95, 108, 0.5)", width: "50" } });
            TweenMax.set(menu.m.chars, { x: 0, autoAlpha: 0 });
            TweenMax.set(menu.m.textLinks, { x: -30, autoAlpha: 0 });
            TweenMax.set(menu.m.arrows, { x: -30, autoAlpha: 0 });
            TweenMax.set(menu.social, { y: -50 });
            TweenMax.set(menu.s.message, { y: -120 });
            TweenMax.set(menu.s.hearts, { y: -130 });
            TweenMax.set(menu.m.boxes[0], { y: -150, autoAlpha: 0 });
            TweenMax.set(menu.m.boxes[1], { y: -60 });
            TweenMax.set(menu.m.boxes[2], { y: -150 });
            TweenMax.to(menu.target, 1, { autoAlpha: 1, delay: 0 });
        },
        show: function() {
            menu.tl.play().timeScale(1);
        },
        hide: function() {
            menu.tl.reverse().timeScale(2);
        },
        animateLinkIn: function(e) {
            var group = e.target.parentNode;
            var arrow = group.querySelector("[data-menu=arrows]");
            var text = group.querySelector("[data-menu=textLinks]");

            TweenMax.to(arrow, 0.3, { x: 8, ease: Back.easeOut.config(2) });
            TweenMax.to(text, 0.3, { x: 5, ease: Back.easeOut.config(2), delay: 0.1 });
            TweenMax.to([arrow, text], 0.3, { attr: { fill: "#F6C155" } });
        },
        animateLinkOut: function(e) {
            var group = e.target.parentNode;
            var arrow = group.querySelector("[data-menu=arrows]");
            var text = group.querySelector("[data-menu=textLinks]");

            TweenMax.to(arrow, 0.3, { x: 0, ease: Back.easeOut.config(2) });
            TweenMax.to(text, 0.3, { x: 0, ease: Back.easeOut.config(2), delay: 0.1 });
            TweenMax.to([arrow, text], 0.3, { attr: { fill: "#FFEECC" } });
        },
        animateSocialIn: function(e) {
            var target = e.target.parentNode;
            var id = target.getAttribute("data-menu");
            var colors = {
                dribbble: "#EA4C89",
                twitter: "#1DA1F2",
                linkedin: "#1985BD",
                github: "#af49a9",
                instagram: "#F98C46"
            };

            var color = colors[id] ? colors[id] : "yellow";

            TweenMax.to(target, 0.3, { fill: color });
            TweenMax.to(target, 0.3, { scale: 1.2, transformOrigin: "center", ease: Back.easeOut.config(5) });
        },
        animateSocialOut: function(e) {
            var target = e.target.parentNode;

            TweenMax.to(target, 0.3, { fill: "#FFEECC", scale: 1, transformOrigin: "center" });
        },
        makeTimeline: function() {
            this.tl = new TimelineMax({ paused: true });

            this.tl.
            to(menu.target, 0.2, { width: "300", height: "360", ease: Power1.easeInOut }, 0).
            to(menu.s.iconBox, 0.2, { attr: { fill: "rgba(25, 45, 58, 1)", stroke: "rgba(25, 45, 58, 1)", width: "337" }, ease: Power1.easeInOut }, 0).
            staggerTo(menu.m.chars, 0.3, { cycle: { x: menu.charPos }, ease: Back.easeOut.config(1) }, 0.01, 0).
            staggerTo(menu.m.chars, 0.2, { autoAlpha: 1, ease: Back.easeOut.config(1) }, 0.01, 0.1).
            to(menu.m.boxes[0], 0.3, { y: 0, autoAlpha: 1, ease: Back.easeOut.config(1) }, 0.2).
            to(menu.m.boxes[1], 0.3, { y: 0, ease: Back.easeOut.config(1) }, 0.2).
            to(menu.m.boxes[2], 0.3, { y: 0, ease: Back.easeOut.config(1) }, 0.2).

            staggerTo(menu.m.textLinks, 0.3, { x: 0, autoAlpha: 1, ease: Back.easeOut.config(1) }, -0.1, 0.25).
            staggerTo(menu.m.arrows, 0.4, { x: 0, autoAlpha: 1, ease: Back.easeOut.config(1) }, -0.1, 0.25).

            staggerTo(menu.social, 0.3, { y: 0, ease: Back.easeOut.config(1) }, 0.05, 0.4).

            to(menu.s.message, 0.5, { y: 0, ease: Back.easeOut.config(1) }, 0.55).
            to(menu.s.hearts, 1, { y: 0, ease: Back.easeOut.config(1) }, 0.55).
            from(menu.s.hearts, 0.5, { autoAlpha: 0, ease: Back.easeOut.config(1) }, 0.75);

        },
        trackEvent: function(e) {
            var label = e.target.getAttribute("data-link");
            if (label) {
                ga('send', 'event', {
                    eventCategory: 'Menu links',
                    eventAction: 'clicked a link',
                    eventLabel: label,
                    transport: 'beacon'
                });

            }
        }
    };


    menu.init();

})();

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-91322471-1', 'auto');
ga('send', 'pageview');
/*

Read the description <3

*/

function random(min, max) {
    if (max === null) {
        max = min;
        min = 0;
    }
    return Math.random() * (max - min) + min;
}

function chanceRoll(chance) {
    if (chance === null) {
        chance = 50;
    }
    return chance > 0 && Math.random() * 100 <= chance;
}

var o = {
    // Timeline related
    isIntro: true,
    isRollingLeft: false,
    currentTl: [],
    currentGravelTl: [],
    gravelProgress: [],
    prevGravelProgress: [],
    // SlowMotion
    slowMoFactor: 1,
    slowMoFactorBody: 1,
    // Head light status on/off
    lightsOnOff: [0, 0],
    // Wiggle head
    wiggleFrame: 0,
    allTheTime: 0,
    nowAndThen: 0,
    ranDur: 0,
    ranPos: 0,
    moveAmount: 0,
    // Null object to parallax head components
    headNull: { value: 0 },

    init: function init() {
        this.cacheDOM();
        this.setStart();
        this.startTicker();
        this.animate();
    },
    cacheDOM: function cacheDOM() {
        this.svg = document.querySelector("[data-bb8=svg]");
        this.gravelGroup = this.svg.querySelector("[data-bb8=gravelGroup]");
        this.gravel = this.svg.querySelectorAll("[data-bb8=gravel]");
        this.largeMask = this.svg.querySelector("[data-bb8=largeMask]");
        this.animElems = ["bb8", "unit", "bodyShadow", "bodySurface", "rotatingHead", "headShadowBig", "headShadowSmall", "bouncingHead", "antennaLong", "antennaShort", "headSurface", "upperLight", "lowerLight", "littleEye", "bigEye", "eyeHighlight", "pupilGroup", "pupil1", "pupil2", "pupil3", "pupil4"];
        this.bb8 = {};
        for (var i = 0; i < this.animElems.length; i++) {
            this.bb8[this.animElems[i]] = this.svg.querySelector("[data-bb8=" + this.animElems[i] + "]");
        }
    },
    bindEvents: function bindEvents() {
        //this.bb8.bb8.addEventListener("mouseup", this.animate.bind(this));
        this.bb8.bb8.addEventListener("mouseover", function() {
            o.slowMotion(1);
        });
        this.bb8.bb8.addEventListener("mouseout", function() {
            o.slowMotion(0);
        });
    },
    setStart: function setStart() {
        TweenMax.set(this.svg, { autoAlpha: 1 });
        TweenMax.set(this.largeMask, { scale: 0, transformOrigin: "center" });
        TweenMax.set(this.bb8.bb8, { y: 3500, x: 2900, scale: 2.5, transformOrigin: "center bottom" });
        TweenMax.set(this.bb8.rotatingHead, { rotation: 20, transformOrigin: "center" });
        o.spreadGravel();
    },
    startTicker: function startTicker() {
        TweenMax.ticker.addEventListener("tick", o.wiggleHead);
        TweenMax.ticker.addEventListener("tick", o.blinkLights);
        TweenMax.ticker.addEventListener("tick", o.connectHeadToNull);
    },
    spreadGravel: function spreadGravel() {
        TweenMax.set(o.gravelGroup, { x: -50 });

        for (var i = 0; i < o.gravel.length; i++) {
            TweenMax.set(o.gravel[i], { x: 0, y: random(100, 800) });
        }
        o.getGravelAnims("right");
    },
    getRollAnims: function getRollAnims(direction) {
        var tls = o.getGravelAnims(direction);
        var spinDir;

        if (direction === "left") {
            spinDir = "-=360";
        } else {
            spinDir = "+=360";
        }
        var tl = new TimelineMax({});

        // Roll animation
        tl.to(this.bb8.bodySurface, 0.5, { rotation: spinDir, transformOrigin: "center", ease: Linear.easeNone, repeat: 1000 }, 0).to(this.bb8.bb8, 2, { x: 500, ease: Back.easeOut }, 0).to(this.bb8.bb8, 1, { y: 500, scale: 1.05, transformOrigin: "center bottom", ease: Power1.easeInOut }, 0).to(this.bb8.bodySurface, 1, { y: -400, ease: Power1.easeInOut }, 0).to(this.bb8.bodySurface, 2, { x: -600, ease: Power1.easeInOut }, 0).to(this.bb8.unit, 0.05, { y: 0, ease: Power1.easeInOut }, 0).to(this.bb8.bouncingHead, 0.05, { y: 0, ease: Power1.easeInOut }, 0).to(this.bb8.bodyShadow, 0.05, { scale: 1, transformOrigin: "center", ease: Power1.easeInOut }, 0).to(this.bb8.bb8, 5, { x: "-=300", ease: Power1.easeInOut, repeat: 500, yoyo: true }, 2).to(this.bb8.bb8, 0.5, { y: "-=100", scale: 1, transformOrigin: "center bottom", ease: Power1.easeInOut, repeat: 1000, yoyo: true }, 1).to(this.bb8.bodySurface, 0.5, { y: "-=250", ease: Power1.easeInOut, repeat: 1000, yoyo: true }, 1).to(this.bb8.bodySurface, 5, { x: "+=200", ease: Power1.easeInOut, repeat: 500, yoyo: true }, 2).to(this.bb8.unit, 0.05, { y: "-=20", ease: Power1.easeInOut, repeat: 20000, yoyo: true }, 0.05).to(this.bb8.bodyShadow, 0.05, { scale: 1.03, transformOrigin: "center", ease: Power1.easeInOut, repeat: 20000, yoyo: true }, 0.05).to(this.bb8.bouncingHead, 0.05, { y: "-=30", ease: Power1.easeInOut, repeat: 20000, yoyo: true }, 0.08).to(this.bb8.rotatingHead, 10, { bezier: [{ rotation: -20 }, { rotation: 10 }, { rotation: 0 }], ease: Linear.easeNone, repeat: 100 }, 0);

        tls[tls.length] = tl;
        return tls;
    },
    getIntroAnim: function getIntroAnim() {
        var tl = new TimelineMax();

        tl.to(this.largeMask, 1.5, { scale: 0.95, ease: Back.easeInOut.config(1) }).add("bb8-in").to(this.bb8.bb8, 4.5, { x: 2000, y: 4300, scale: 3, ease: Elastic.easeOut.config(10) }, "bb8-in").to(this.bb8.bodySurface, 4.5, { rotation: -30, transformOrigin: "center", ease: Elastic.easeOut.config(10) }, "bb8-in").to(this.bb8.rotatingHead, 0.1, { rotation: -20, transformOrigin: "center" }, "bb8-in =+0.3").to(this.bb8.rotatingHead, 0.1, { rotation: 20, transformOrigin: "center" }, "bb8-in =+1").to(this.bb8.rotatingHead, 3, { rotation: -15, transformOrigin: "center", ease: Elastic.easeOut.config(0.5) }, "bb8-in =+1.5").to(this.bb8.bouncingHead, 0.2, { y: "-=10", ease: Power3.easeInOut, repeat: 2, yoyo: true, repeatDelay: 0.4 }, "bb8-in =+1").to(this.bb8.bouncingHead, 0.35, { y: "+=15", ease: Power1.easeInOut, repeat: 2, yoyo: true, repeatDelay: 0.2 }, "bb8-in =+2.4").to(this.bb8.bouncingHead, 0.275, { y: "-=5", repeat: 1, yoyo: true, repeatDelay: 0.1, ease: Power4.easeInOut }, "bb8-in =+3.85").add("bb8-distress").staggerTo([this.bb8.pupil1, this.bb8.pupil2, this.bb8.pupil3, this.bb8.pupil4], 0.2, { scale: 1.5, transformOrigin: "center", repeat: 3, yoyo: true }, 0.1, "bb8-in =+2.5").add("bb8-out").to(this.bb8.bb8, 1, { x: 4500, ease: Back.easeIn.config(2) }, "bb8-out").to(this.bb8.bodySurface, 1, { rotation: 30, ease: Back.easeIn.config(2) }, "bb8-out").to(this.bb8.rotatingHead, 1.2, { rotation: -30, transformOrigin: "center", ease: Back.easeInOut.config(2) }, "bb8-out").set(this.bb8.bb8, { y: 600, scale: 1, transformOrigin: "center bottom" }).set(this.bb8.rotatingHead, { rotation: 0, transformOrigin: "center" }).add(o.animate);
        return tl;
    },
    getGravelAnims: function getGravelAnims(direction) {
        // Make an array for timelines
        var tls = [];

        // Iterate thru gravel array, create unique timelines for each and add them to timelines array
        for (var i = 0; i < o.gravel.length; i++) {
            // Values for all timelines all times
            var speed = 0.5;
            var fromX = direction === "left" ? 0 : 2935;
            var toX = direction === "left" ? 2935 : 0;

            // Generate seamless progress values
            if (o.prevGravelProgress.length != o.gravel.length) {
                // If prev array not full of values, then give each gravel a randomize progress value
                o.gravelProgress[i] = random(0, 1);
                // ...and push it into the prev array
                o.prevGravelProgress[i] = o.gravelProgress[i];
            } else {
                // If prev array is full of values, then inverse each value
                o.gravelProgress[i] = 1 - o.prevGravelProgress[i];
            }

            // Create an individual timeline
            var tl = new TimelineMax({ repeat: 2000 });

            // Define the tween and set the playhead at correct progress
            tl.fromTo(o.gravel[i], speed, { x: fromX }, { x: toX, ease: Linear.easeNone }).progress(o.gravelProgress[i]).paused(true);

            // Add the timeline to the array
            tls[i] = tl;
        }
        // Spit out the array
        return tls;
    },
    animate: function animate() {
        if (this.isIntro) {
            o.playIntro();
        } else {
            o.stopPlayNext();
        }
    },
    playIntro: function playIntro() {
        o.isIntro = false;
        o.currentTl[0] = o.getIntroAnim();
        o.currentTl[0].play();
    },
    stopPlayNext: function stopPlayNext() {
        var direction;
        if (o.isRollingLeft) {
            o.isRollingLeft = false;
            direction = "right";
        } else {
            o.isRollingLeft = true;
            direction = "left";
        }

        TweenMax.to(o.currentTl, 0.5 / o.slowMoFactor, { timeScale: 0, onComplete: o.roll, onCompleteParams: [direction] });
    },
    roll: function roll(direction) {

        if (o.currentTl.length === 1) {
            // Make art interactive first time roll is called
            o.bindEvents();
        } else {
            // Record progress of gravel timelines, except first time roll is called
            o.recordProgress();
        }

        // Record the progress value where each gravel stopped
        var tls = o.getRollAnims(direction);

        for (var i = 0; i < o.currentTl.length; i++) {
            o.currentTl[i].kill();
        }

        for (var j = 0; j < tls.length; j++) {

            o.currentTl[j] = tls[j];

            o.currentTl[j].play().timeScale(0);

            TweenMax.to(o.currentTl[j], 1 / o.slowMoFactor, { timeScale: o.slowMoFactorBody });
        }
    },
    recordProgress: function recordProgress() {
        for (var i = 0; i < o.gravel.length; i++) {
            o.prevGravelProgress[i] = o.currentTl[i].progress();
        }
    },
    slowMotion: function slowMotion(val) {
        if (val === 1) {
            o.slowMoFactor = 0.1;
            o.slowMoFactorBody = 0.05;
        } else {
            o.wiggleFrame = 0;
            o.allTheTime = 0;
            o.slowMoFactor = 1;
            o.slowMoFactorBody = 1;
        }

        for (var i = 0; i < o.currentTl.length; i++) {
            TweenMax.to(o.currentTl[i], 0.1, { timeScale: o.slowMoFactorBody });
        }
    },
    connectHeadToNull: function connectHeadToNull() {
        if (!val) {
            var val, headSurfacePos, bigEyePos, littleEyePos, antennaShortPos, antennaLongPos, pupilGroupPos, eyeHighlightPos;
            var headSurfaceCenter = -50;
            var bigEyeCenter = 217 + headSurfaceCenter;
            var littleEyeCenter = 385 + headSurfaceCenter;
            var antennaShortCenter = -50;
            var antennaLongCenter = -50;
            var pupilGroupCenter = 20;
            var eyeHighlightCenter = 10;
        }
        // Update value
        val = o.headNull.value;

        // null value (+/-1) * range/2
        headSurfacePos = val * 150;
        bigEyePos = val * 150;
        pupilGroupPos = val * 20;
        eyeHighlightPos = val * 10;
        littleEyePos = val * 150;
        antennaShortPos = -val * 120;
        antennaLongPos = -val * 70;

        TweenMax.set(o.bb8.headSurface, { x: headSurfaceCenter + headSurfacePos });

        TweenMax.set(o.bb8.bigEye, { x: bigEyeCenter + bigEyePos });
        TweenMax.set(o.bb8.pupilGroup, { x: pupilGroupCenter + pupilGroupPos });
        TweenMax.set(o.bb8.eyeHighlight, { x: eyeHighlightCenter + eyeHighlightPos });
        TweenMax.set(o.bb8.littleEye, { x: littleEyeCenter + littleEyePos });
        TweenMax.set(o.bb8.antennaShort, { x: antennaShortCenter + antennaShortPos });
        TweenMax.set(o.bb8.antennaLong, { x: antennaLongCenter + antennaLongPos });
    },
    wiggleHead: function wiggleHead() {

        if (o.wiggleFrame === o.allTheTime) {

            o.allTheTime = Math.floor(random(15, 30) / o.slowMoFactor); // How often does it wiggle

            o.ranDur = o.allTheTime / 60; // How fast does it wiggle

            o.ranPos = random(0.05, 0.3); // How much does it wiggle
            o.nowAndThen = chanceRoll(50); // How often does the head move
            o.moveAmount = random(-1, 1); // Takes random place on its range

            // Wiggle or move the head
            if (o.nowAndThen) {
                TweenMax.to(o.headNull, o.ranDur, { value: o.moveAmount, ease: Power3.easeInOut });
            } else {
                TweenMax.to(o.headNull, o.ranDur / 2, { value: "+=" + o.ranPos, ease: Power2.easeInOut, repeat: 1, yoyo: true });
            }

            o.wiggleFrame = 0; // Reset wiggleFrame count
        }

        o.wiggleFrame++;
    },
    blinkLights: function blinkLights() {

        // One in 10 there is a change
        if (chanceRoll(10 * o.slowMoFactor)) {

            for (var i = 0; i < 2; i++) {
                if (chanceRoll(50)) {
                    o.lightsOnOff[i] = 1;
                } else {
                    o.lightsOnOff[i] = 0;
                }
            }
        }

        TweenMax.set(o.bb8.upperLight, { autoAlpha: o.lightsOnOff[0] });
        TweenMax.set(o.bb8.lowerLight, { autoAlpha: o.lightsOnOff[1] });
    }
};


o.init();