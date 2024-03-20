---
layout: default
---

<html lang="en">

<head>
    <title>New Caledonia Shader Downloads</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />

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

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="title" content="Shader Download - New Caledonia">
    <meta name="description" content="Download the New Caledonia BETA Shader Pack with DLC!">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link href="css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="css/colormode.css" />
    <script>
        // Do this before the body gets parsed
        if (localStorage.getItem('darkmode') === '1') {
            document.documentElement.classList.add('dark-mode');
        }
    </script>
    <style>
        .dark-mode body {
            background: black;
        }
        
        .dark-mode .light-only {
            display: none;
        }
        
        html:not(.dark-mode) .dark-only {
            display: none;
        }
    </style>
</head>

<body>
    <!-- Page Preloder -->
    <div id="preloder">
        <div class="loader"></div>
    </div>
    <table class="tableRoot">
        <tr>
            <td class="header">
                <!-- Title -->
                <span class="headerTitle">
                    <a href="#"><img class="bottom minecrafttitle" src="images/bottom.jpg" width="500px" height="100px" style="overflow:hidden;"></a>
                </span>
                <!-- Navigation -->
                <span class="headerNav">
                    <a href="#">Downloads</a>
                    <a href="dlc/">DLCs</a>
                    <!--<button id="darkToggle">Switch to<span class="dark-only">light</span><span class="light-only">dark</span> mode</button>-->
                <a href="https://github.com/NewCaledoniaDevTeam/" target="_blank">GitHub</a>
                </span>
            </td>
        </tr>
        <tr>
            <td class="content">
                <!-- Content -->
                <span class="downloads">
                    <script type='text/javascript'>
                        function showSpoiler(elemId, linkId, hideLink) {
                            var elem = document.getElementById(elemId);
                            var link = document.getElementById(linkId);
                            if (elem.style.position == 'absolute') {
                                elem.style.position = 'static';
                                elem.style.visibility = 'visible';
                                elem.style.opacity = '1';
                                link.innerHTML = link.innerHTML.replace("+", "-");
                            }
                            else {
                                elem.style.position = 'absolute';
                                elem.style.visibility = 'hidden';
                                elem.style.opacity = '0';
                                link.innerHTML = link.innerHTML.replace("-", "+");
                            }
                            if (hideLink)
                                link.innerHTML = ("");
                        }
                    </script>

                        <h2><span style="display: block; margin-left: auto; margin-right: auto; text-align: center;">Current Verions:</span></h2>


                <!--Current Version 1.5-->
                <h2>1.5.X New Caledonia Universal Shader Pack</h2>
                <!-- Previews -->
                <!--
                        <a class="spoilerLink" id="link.1.5" href="javascript:showSpoiler('preview.1.5', 'link.1.5');">+
                            Preview versions</a>
                        <div id="preview.1.5" style='position: absolute; visibility: hidden; opacity: 0; transition: opacity 0.5s;'>
                            <table class='downloadTable'>
                                <tr class='downloadLine downloadLinePreview'>
                                    <td class='colFile'>1.5.1 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.12" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.12/New.Caledonia.Universal.1.4.12.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#1412---2020-12-17" target="_blank">Changelog</a></td>
                                    <td class="colDate">12/17/20</td>
                                </tr>
                            </table>
                        </div>
                        -->
                <!-- Version -->
                <table class='downloadTable mainTable'>
                    <tr class='downloadLine downloadLineMain'>
                        <td class='colFile'>1.5.2 Universal Shader</td>
                        <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.5.2" target="_blank">Download</a></td>
                        <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.5.2/New.Caledonia.Universal.1.5.2.mcpack" target="_blank">mcpack</a></td>
                        <td class='colMedia'></td>
                        <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#152---2024-3-19" target="_blank">Changelog</a></td>
                        <td class="colDate">3/19/24</td>
                    </tr>
                </table>
                <!-- More Old -->
                <a class="spoilerLink" id="link.1.5.more" href="javascript:showSpoiler('more.1.5', 'link.1.5.more', 'true');">+ More</a>
                <div id="more.1.5" style='position: absolute; visibility: hidden; opacity: 0; transition: opacity 0.5s; overflow: hidden;'>
                    <table class='downloadTable'>
                        <tr class='downloadLine downloadLineMore'>
                            <td class='colFile'>1.5.1 Universal Shader</td>
                            <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.5.1" target="_blank">Download</a></td>
                            <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.5.1/New.Caledonia.Universal.1.5.1.mcpack" target="_blank">mcpack</a></td>
                            <td class='colMedia'></td>
                            <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#151---2021-1-5" target="_blank">Changelog</a></td>
                            <td class="colDate">1/5/21</td>
                        </tr>
                        <tr class='downloadLine downloadLineMore'>
                            <td class='colFile'>1.5.0 Universal Shader</td>
                            <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.5.0" target="_blank">Download</a></td>
                            <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.5.0/New.Caledonia.Universal.1.5.0.mcpack" target="_blank">mcpack</a></td>
                            <td class='colMedia'></td>
                            <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#150---2020-12-21" target="_blank">Changelog</a></td>
                            <td class="colDate">12/21/20</td>
                        </tr>
                    </table>
                </div>
                <br>
                <hr>
                <!--Current Version 1.4-Lite-->
                <h2>1.4.X New Caledonia Lite Shader Pack</h2>
                <!-- Version -->
                <table class='downloadTable mainTable'>
                    <tr class='downloadLine downloadLineMain'>
                        <td class='colFile'>1.4.0 Lite Shader</td>
                        <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/releases/tag/1.4.0" target="_blank">Download</a></td>
                        <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/releases/download/1.4.0/New.Caledonia.Lite.1.4.0.mcpack" target="_blank">mcpack</a></td>
                        <td class='colMedia'><a href="http://www.mediafire.com/file/01t55z3jfycm8z7/New_Caledonia_Lite_1.4.0.mcpack/file" target="_blank">(MediaFire)</a></td>
                        <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/blob/main/Changelog.md#140---2020-09-07" target="_blank">Changelog</a></td>
                        <td class="colDate">9/7/20</td>
                    </tr>
                </table>


                <!--Hider-->
                <p class="showAll">
                    <a class="showAll" id="link" href="javascript:showSpoiler('all', 'link', 'true');">Show all versions</a>
                </p>
                <div id="all" style='position: absolute; bottom: 100px; visibility: hidden; opacity: 0; transition: opacity 0.5s; overflow: hidden;'>

                    <hr>
                    <h2><span style="display: block; margin-left: auto; margin-right: auto; text-align: center;">Old Universal Verions:<img class="bottom minecrafttitle" src="images/bottom.jpg" width="500px" height="100px" style="overflow:hidden;display: block; margin-left: auto; margin-right: auto;"> </span></h2>
                        <br>

                        <!-- Old 1.4-->
                        <h2>1.4.X New Caledonia Universal Shader Pack</h2>
                        <!-- Previews -->
                        <a class="spoilerLink" id="link.1.4.preview" href="javascript:showSpoiler('preview.1.4', 'link.1.4.preview');">+
                            Preview versions</a>
                        <div id="preview.1.4" style='position: absolute; visibility: hidden; opacity: 0; transition: opacity 0.5s;'>
                            <table class='downloadTable'>
                                <tr class='downloadLine downloadLinePreview'>
                                    <td class='colFile'>1.4.12 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.12" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.12/New.Caledonia.Universal.1.4.12.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#1412---2020-12-17" target="_blank">Changelog</a></td>
                                    <td class="colDate">12/17/20</td>
                                </tr>
                                <tr class='downloadLine downloadLinePreview'>
                                    <td class='colFile'>1.4.11 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.11" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.11/New.Caledonia.Universal.1.4.11.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#1411---2020-12-12" target="_blank">Changelog</a></td>
                                    <td class="colDate">12/12/20</td>
                                </tr>
                                <tr class='downloadLine downloadLinePreview'>
                                    <td class='colFile'>1.4.10 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.10" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.10/New.Caledonia.Universal.1.4.10.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#1410---2020-12-12" target="_blank">Changelog</a></td>
                                    <td class="colDate">12/12/20</td>
                                </tr>
                            </table>
                        </div>
                        <!-- Version -->
                        <table class='downloadTable mainTable'>
                            <tr class='downloadLine downloadLineMain'>
                                <td class='colFile'>1.4.9 Universal Shader</td>
                                <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.9" target="_blank">Download</a></td>
                                <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.9/New.Caledonia.Universal.1.4.9.mcpack" target="_blank">mcpack</a></td>
                                <td class='colMedia'></td>
                                <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#149---2020-12-02" target="_blank">Changelog</a></td>
                                <td class="colDate">11/22/20</td>
                            </tr>
                        </table>

                        <!-- More Old -->
                        <a class="spoilerLink" id="link.1.4.more" href="javascript:showSpoiler('more.1.4', 'link.1.4.more', 'true');">+ More</a>
                        <div id="more.1.4" style='position: absolute; visibility: hidden; opacity: 0; transition: opacity 0.5s; overflow: hidden;'>
                            <table class='downloadTable'>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.4.8 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.8" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.8/New.Caledonia.Universal.1.4.8.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#148---2020-11-22" target="_blank">Changelog</a></td>
                                    <td class="colDate">11/22/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.4.7 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.7" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.7/New.Caledonia.Universal.1.4.7.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#147---2020-11-21" target="_blank">Changelog</a></td>
                                    <td class="colDate">11/21/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.4.6 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.6" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.6/New.Caledonia.Universal.1.4.6.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#146---2020-11-14" target="_blank">Changelog</a></td>
                                    <td class="colDate">11/14/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.4.5 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.5" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.5/New.Caledonia.Universal.1.4.5.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#145---2020-11-7" target="_blank">Changelog</a></td>
                                    <td class="colDate">11/7/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.4.4 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.4" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.4/New.Caledonia.Universal.1.4.4.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#144---2020-11-7" target="_blank">Changelog</a></td>
                                    <td class="colDate">11/7/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.4.3 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.3" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.3/New.Caledonia.Universal.1.4.3.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#143---2020-10-11" target="_blank">Changelog</a></td>
                                    <td class="colDate">10/11/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.4.2 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.2" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.2/New.Caledonia.Universal.1.4.2.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#142---2020-10-11" target="_blank">Changelog</a></td>
                                    <td class="colDate">10/11/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.4.1 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.1" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.1/New.Caledonia.Universal.1.4.1.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#141---2020-10-11" target="_blank">Changelog</a></td>
                                    <td class="colDate">10/11/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.4.0 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.4.0" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.4.0/New.Caledonia.Universal.1.4.0.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/cu7hdmgqxtt5rry/New_Caledonia_Universal_1.4.0.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#140---2020-09-07" target="_blank">Changelog</a></td>
                                    <td class="colDate">9/7/20</td>
                                </tr>
                            </table>
                        </div>
                        <br>
                        <!--end of 1.4.X-->

                        <!-- Old 1.3-->
                        <h2>1.3.X New Caledonia Universal Shader Pack</h2>
                        <!-- Previews -->
                        <!-- Version -->
                        <table class='downloadTable mainTable'>
                            <tr class='downloadLine downloadLineMain'>
                                <td class='colFile'>1.3.9 Universal Shader</td>
                                <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.3.9" target="_blank">Download</a></td>
                                <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.3.9/New.Caledonia.Universal.1.3.9.mcpack" target="_blank">mcpack</a></td>
                                <td class='colMedia'><a href="http://www.mediafire.com/file/fi0aj63ybnpfwfk/New_Caledonia_Universal_1.3.9.mcpack/file" target="_blank">(MediaFire)</a></td>
                                <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#139---2020-08-21" target="_blank">Changelog</a></td>
                                <td class="colDate">8/21/20</td>
                            </tr>
                        </table>

                        <!-- More Old -->
                        <a class="spoilerLink" id="link.1.3" href="javascript:showSpoiler('more.1.3', 'link.1.3', 'true');">+ More</a>
                        <div id="more.1.3" style='position: absolute; visibility: hidden; opacity: 0; transition: opacity 0.5s; overflow: hidden;'>
                            <table class='downloadTable'>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.3.8 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.3.8" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.3.8/New.Caledonia.Universal.1.3.8.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="https://www.mediafire.com/file/8d90w1v033thmz4/New+Caledonia+Universal+1.3.8.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#138---2020-08-03" target="_blank">Changelog</a></td>
                                    <td class="colDate">8/3/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.3.7 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.3.7" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.3.7/New.Caledonia.Universal.1.3.7.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="https://www.mediafire.com/file/hzvvsocwprdfewq/New_Caledonia_Universal_1.3.7.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#137---2020-07-27" target="_blank">Changelog</a></td>
                                    <td class="colDate">7/27/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.3.6 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.3.6" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.3.6/New.Caledonia.Universal.1.3.6.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/9nv8y98382euyd5/New_Caledonia_Universal_1.3.6.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/blob/main/Changelog.md#136---2020-07-19" target="_blank">Changelog</a></td>
                                    <td class="colDate">7/19/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.3.5 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.3.5" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.3.5/New.Caledonia.Universal.1.3.5.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/ich3xfk2c62u4bq/New_Caledonia_Universal_1.3.5.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/19/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.3.4 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.3.4" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.3.4/New.Caledonia.Universal.1.3.4.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/yaacfgo3tmqjvjq/New_Caledonia_Universal_1.3.4.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/19/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.3.3 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.3.3" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.3.3/New.Caledonia.Universal.1.3.3.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/zplyszi2ahuabbl/New_Caledonia_Universal_1.3.3.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/16/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.3.2 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.3.2" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.3.1/New.Caledonia.Universal.1.3.2.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/mekddwh4fkgo27t/New_Caledonia_Universal_1.3.2.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/16/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.3.1 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.3.1" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.3.1/New.Caledonia.Universal.1.3.1.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/pok0c7buc35vu28/New_Caledonia_Universal_1.3.1.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/16/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.3.0 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.3.0" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.3.0/New.Caledonia.Universal.1.3.0.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/5unwyt51228au8y/New_Caledonia_Universal_1.3.0.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/16/20</td>
                                </tr>
                            </table>
                        </div>
                        <br>
                        <!--end of 1.3.X-->

                        <!-- Old 1.2 -->
                        <h2>1.2.X New Caledonia Universal Shader Pack</h2>
                        <!-- Previews -->
                        <!-- Version -->
                        <table class='downloadTable mainTable'>
                            <tr class='downloadLine downloadLineMain'>
                                <td class='colFile'>1.2.12 Universal Shader</td>
                                <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.2.12" target="_blank">Download</a></td>
                                <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.2.12/New.Caledonia.Universal.1.2.12.mcpack" target="_blank">mcpack</a></td>
                                <td class='colMedia'><a href="http://www.mediafire.com/file/gk7q7wjy4ccn659/New_Caledonia_Universal_1.2.12.mcpack/file" target="_blank">(MediaFire)</a></td>
                                <td class="colChangelog"></td>
                                <td class="colDate">7/16/20</td>
                            </tr>
                        </table>

                        <!-- More Old -->
                        <a class="spoilerLink" id="link.1.2" href="javascript:showSpoiler('more.1.2', 'link.1.2', 'true');">+ More</a>
                        <div id="more.1.2" style='position: absolute; visibility: hidden; opacity: 0; transition: opacity 0.5s; overflow: hidden;'>
                            <table class='downloadTable'>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.2.11 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.2.11" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.2.11/New.Caledonia.Universal.1.2.11.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/4gy1h3p7f701m09/New_Caledonia_Universal_1.2.11.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/13/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.2.10 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.2.10" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.2.10/New.Caledonia.Universal.1.2.10.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/kmwigo1cikycn9w/New_Caledonia_Universal_1.2.9.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/13/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.2.9 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.2.9" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.2.9/New.Caledonia.Universal.1.2.9.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/omj2beg2xtyuhi8/New_Caledonia_Universal_1.2.8.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/12/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.2.8 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.2.8" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.2.8/New.Caledonia.Universal.1.2.8.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/omj2beg2xtyuhi8/New_Caledonia_Universal_1.2.8.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/12/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.2.7 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.2.7" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.2.7/New.Caledonia.Universal.1.2.7.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/ft1exparxhcmg2t/New_Caledonia_Universal_1.2.7.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/12/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.2.6 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.2.6" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.2.6/New.Caledonia.Universal.1.2.6.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/w63oicxosx7k5eo/New_Caledonia_Universal_1.2.6.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/11/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.2.5 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.2.5" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.2.5/New.Caledonia.Universal.1.2.5.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/24yuzezhcmdw6n2/New_Caledonia_Universal_1.2.5.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/11/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.2.4 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.2.4" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.2.4/New.Caledonia.Universal.1.2.4.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/avxmsz5k0nkvcb5/New_Caledonia_Universal_1.2.4.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/11/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.2.3 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.2.3" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.2.3/New.Caledonia.Universal.1.2.3.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/flogb7zucf6paju/New_Caledonia_Universal_1.2.3.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/11/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.2.2 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.2.2" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.2.2/New.Caledonia.Universal.1.2.2.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/dzijbeyyurqqbxa/New_Caledonia_Universal_1.2.2.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/11/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.2.1 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.2.1" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.2.1/New.Caledonia.Universal.1.2.1.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/i23g2glt4w872c9/New_Caledonia_Universal_1.2.1.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/11/20</td>
                                </tr>
                                <tr class='downloadLine downloadLineMore'>
                                    <td class='colFile'>1.2.0 Universal Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/tag/1.2.0" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/BETA_UniversalShaderPack/releases/download/1.2.0/New.Caledonia.Universal.1.2.0.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/dx2tcxzoshyet1i/New_Caledonia_Universal_1.2.0.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"></td>
                                    <td class="colDate">7/10/20</td>
                                </tr>
                            </table>
                        </div>
                        <br>
                        <!--end of 1.2.X-->

                        <hr>
                        <h2><span style="display: block; margin-left: auto; margin-right: auto; text-align: center;">Old Lite Verions:<img class="bottom minecrafttitle" src="images/bottom_2.jpg" width="500px" height="100px" style="overflow:hidden;display: block; margin-left: auto; margin-right: auto;"> </span></h2>
                            <br>

                            <!-- Old 1.3 lite-->
                            <h2>1.3.X New Caledonia Lite Shader Pack</h2>
                            <!-- Previews -->
                            <!-- Version -->
                            <table class='downloadTable mainTable'>
                                <tr class='downloadLine downloadLineMain'>
                                    <td class='colFile'>1.3.11 Lite Shader</td>
                                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/releases/tag/1.3.11" target="_blank">Download</a></td>
                                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/releases/download/1.3.11/New.Caledonia.lite.1.3.11.mcpack" target="_blank">mcpack</a></td>
                                    <td class='colMedia'><a href="http://www.mediafire.com/file/7i9zm9dufwnszgn/New_Caledonia_Lite_1.3.11.mcpack/file" target="_blank">(MediaFire)</a></td>
                                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/blob/main/Changelog.md#1311---2020-07-27" target="_blank">Changelog</a></td>
                                    <td class="colDate">7/27/20</td>
                                </tr>
                            </table>

                            <!-- More Old -->
                            <a class="spoilerLink" id="link.1.3.lite" href="javascript:showSpoiler('more.1.3.lite', 'link.1.3.lite', 'true');">+ More</a>
                            <div id="more.1.3.lite" style='position: absolute; visibility: hidden; opacity: 0; transition: opacity 0.5s; overflow: hidden;'>
                                <table class='downloadTable'>

                                    <tr class='downloadLine downloadLineMore'>
                                        <td class='colFile'>1.3.10 Lite Shader</td>
                                        <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/releases/tag/1.3.10" target="_blank">Download</a></td>
                                        <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/releases/download/1.3.10/New.Caledonia.lite.1.3.10.mcpack" target="_blank">mcpack</a></td>
                                        <td class='colMedia'><a href="https://www.mediafire.com/file/jzyidaquo7xvqa3/New_Caledonia_Lite_1.3.10.mcpack/file" target="_blank">(MediaFire)</a></td>
                                        <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/blob/main/Changelog.md#1310---2020-07-27" target="_blank">Changelog</a></td>
                                        <td class="colDate">7/27/20</td>
                                    </tr>
                                    <tr class='downloadLine downloadLineMore'>
                                        <td class='colFile'>1.3.9 Lite Shader</td>
                                        <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/releases/tag/1.3.9" target="_blank">Download</a></td>
                                        <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/releases/download/1.3.9/New.Caledonia.lite.1.3.9.mcpack" target="_blank">mcpack</a></td>
                                        <td class='colMedia'><a href="https://www.mediafire.com/file/g8tpiggyctcv70q/New_Caledonia_Lite_1.3.9.mcpack/file" target="_blank">(MediaFire)</a></td>
                                        <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/blob/main/Changelog.md#139---2020-07-27" target="_blank">Changelog</a></td>
                                        <td class="colDate">7/27/20</td>
                                    </tr>
                                    <tr class='downloadLine downloadLineMore'>
                                        <td class='colFile'>1.3.8 Lite Shader</td>
                                        <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/releases/tag/1.3.8" target="_blank">Download</a></td>
                                        <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/releases/download/1.3.8/New.Caledonia.lite.1.3.8.mcpack" target="_blank">mcpack</a></td>
                                        <td class='colMedia'><a href="https://www.mediafire.com/file/kcwrypsex2nz6vl/New_Caledonia_lite_1.3.8.mcpack/file" target="_blank">(MediaFire)</a></td>
                                        <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/LiteShaderPack/blob/main/Changelog.md#138---2020-07-27" target="_blank">Changelog</a></td>
                                        <td class="colDate">7/27/20</td>
                                    </tr>
                                </table>
                            </div>
                            <br>
                            <!--end of 1.3.lite-->

                            <hr>
                            <h2><span style="display: block; margin-left: auto; margin-right: auto; text-align: center;">Offical Verions:<img class="bottom minecrafttitle" src="images/bottom_3.png" width="500px" height="100px" style="overflow:hidden;display: block; margin-left: auto; margin-right: auto;"> </span></h2>
                                <br>

                                <!-- 0.0.x Offical-->
                                <h2>0.0.X New Caledonia Shader Pack</h2>
                                <!-- Previews -->
                                <!-- Version -->
                                <table class='downloadTable mainTable'>
                                    <tr class='downloadLine downloadLineMain'>
                                        <td class='colFile'>0.0.3 Offical Shader</td>
                                        <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/NewCaledoniaShader/releases/tag/0.0.3" target="_blank">Download</a></td>
                                        <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/NewCaledoniaShader/releases/download/0.0.3/New.Caledonia.Shader.0.0.3.mcpack" target="_blank">mcpack</a></td>
                                        <td class='colMedia'></td>
                                        <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/NewCaledoniaShader/blob/main/Changelog.md#003---2020-11-7" target="_blank">Changelog</a></td>
                                        <td class="colDate">11/7/20</td>
                                    </tr>
        </table>

        <!-- More Old -->
        <a class="spoilerLink" id="link.0.0.offical" href="javascript:showSpoiler('more.0.0.offical', 'link.0.0.offical', 'true');">+ More</a>
        <div id="more.0.0.offical" style='position: absolute; visibility: hidden; opacity: 0; transition: opacity 0.5s; overflow: hidden;'>
            <table class='downloadTable'>
                <tr class='downloadLine downloadLineMore'>
                    <td class='colFile'>0.0.2 Offical Shader</td>
                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/NewCaledoniaShader/releases/tag/0.0.2" target="_blank">Download</a></td>
                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/NewCaledoniaShader/releases/download/0.0.2/New.Caledonia.Shader.0.0.2.mcpack" target="_blank">mcpack</a></td>
                    <td class='colMedia'></td>
                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/NewCaledoniaShader/blob/main/Changelog.md#002---2020-11-7" target="_blank">Changelog</a></td>
                    <td class="colDate">11/7/20</td>
                </tr>
                <tr class='downloadLine downloadLineMore'>
                    <td class='colFile'>0.0.1 Offical Shader</td>
                    <td class='colDownload'><a href="https://github.com/NewCaledoniaDevTeam/NewCaledoniaShader/releases/tag/0.0.1" target="_blank">Download</a></td>
                    <td class='colMirror'><a href="https://github.com/NewCaledoniaDevTeam/NewCaledoniaShader/releases/download/0.0.1/New.Caledonia.Shader.0.0.1.mcpack" target="_blank">mcpack</a></td>
                    <td class='colMedia'></td>
                    <td class="colChangelog"><a href="https://github.com/NewCaledoniaDevTeam/NewCaledoniaShader/blob/main/Changelog.md#001---2020-11-7" target="_blank">Changelog</a></td>
                    <td class="colDate">11/7/20</td>
                </tr>
            </table>
        </div>
        <br>
        <!--end of 0.0.0 Offical-->

        <hr>
        <h2><span style="display: block; margin-left: auto; margin-right: auto; text-align: center;">Old Deprecated Verions:</span></h2>
            <br>

            <!-- Old 1.0 Phones-->
            <h2>New Caledonia Phones Shader Pack (deprecated)</h2>
            <!-- Previews -->
            <!-- Version -->
            <table class='downloadTable mainTable'>
                <tr class='downloadLine downloadLineMain'>
                    <td class='colFile'>1.2.0 Phones Shader</td>
                    <td class='colDownload'><a href="http://www.mediafire.com/file/98pzlsguns86bol/New_Caledonia_Phones_1.2.0.mcpack/file" target="_blank">MediaFire</a></td>
                    <td class='colMirror'></td>
                    <td class='colMedia'></td>
                    <td class="colChangelog"></td>
                    <td class="colDate">7/10/20</td>
                </tr>
            </table>

            <!-- More Old -->
            <a class="spoilerLink" id="link.1.0.phones" href="javascript:showSpoiler('more.1.0.phones', 'link.1.0.phones', 'true');">+ More</a>
            <div id="more.1.0.phones" style='position: absolute; visibility: hidden; opacity: 0; transition: opacity 0.5s; overflow: hidden;'>
                <table class='downloadTable'>
                    <tr class='downloadLine downloadLineMore'>
                        <td class='colFile'>1.1.1 Phones Shader</td>
                        <td class='colDownload'><a href="http://www.mediafire.com/file/3qkm3v6eb00z53r/New_Caledonia_Phones_1.1.1.mcpack/file" target="_blank">MediaFire</a></td>
                        <td class='colMirror'></td>
                        <td class='colMedia'></td>
                        <td class="colChangelog"></td>
                        <td class="colDate">7/10/20</td>
                    </tr>
                    <tr class='downloadLine downloadLineMore'>
                        <td class='colFile'>1.1.0 Phones Shader</td>
                        <td class='colDownload'><a href="http://www.mediafire.com/file/6xlqszs7sbr3ipt/New_Caledonia_Phones_1.1.0.mcpack/file" target="_blank">MediaFire</a></td>
                        <td class='colMirror'></td>
                        <td class='colMedia'></td>
                        <td class="colChangelog"></td>
                        <td class="colDate">7/1/20</td>
                    </tr>
                    <tr class='downloadLine downloadLineMore'>
                        <td class='colFile'>1.0 Phones Shader</td>
                        <td class='colDownload'><a href="http://www.mediafire.com/file/ybqkuez8sl07xua/New_Caledonia_Phones_1.0.mcpack/file" target="_blank">MediaFire</a></td>
                        <td class='colMirror'></td>
                        <td class='colMedia'></td>
                        <td class="colChangelog"></td>
                        <td class="colDate">6/28/20</td>
                    </tr>
                </table>
            </div>
            <br>
            <!--end of 1.0.phones-->

            <!--end of all-->
            <!--end of span downloads-->
            <!-- End of content -->
            <tr>
                <td class="footer">
                    <!-- Footer -->
                    <span class="footerText">
                    Made By Mountain Top
                </span>
                </td>
            </tr>
    <br>
    <br>
    <script>
        document.querySelector('#darkToggle').addEventListener('click', function() {
            var wasDarkMode = localStorage.getItem('darkmode') === '1';

            localStorage.setItem('darkmode', wasDarkMode ? '0' : '1');
            document.documentElement.classList[wasDarkMode ? 'remove' : 'add']('dark-mode');
        });
    </script>
