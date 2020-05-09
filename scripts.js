$("#themeExpand").hide();
$('#themeSwitcher').click(function () {
    $('#themeExpand').animate({
        width: 'toggle',
    }, 300);
});

$("#robotCodeLink").click(function () {
    let robotCodeDetails = `<span class="titleFont">Robot Code 🤖</span>
    <br><br>
    <table id="robotCodeTable">
        <tr>
            <td>
                <iframe width="380" height="280" src="https://www.youtube.com/embed/nlQ2LHgbIDY"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            <td rowspan="2">
                I've spent the past four years as a programmer in FIRST Robotics Team 1325. From junior to
                lead programmer, I use <a target="_blank" href="https://docs.wpilib.org/en/stable/">FRC's
                    WPILIB libraries </a>to seamlessly connect robot sensors and motors
                to driver controls.
                <br><br>
                <b>Programmed in:</b> Java.
                <br><br>
                <a target="_blank" href="https://github.com/HannahGuo/2019RobotShow">2019 Code Repository
                    Link</a>
            </td>
        </tr>
        <tr>
            <td><em>Our team's 2019 robot reveal (with controls!)</em></td>
        </tr>
    </table>`;
    $("#detailsfillMe").html(robotCodeDetails);
});

$("#webDevLink").click(function () {
    let webDevDetails = `<span class="titleFont">Website Design/Development 🌐</span>
    <br><br>
    <span>I love designing and developing websites for various subjects. I built the website you're looking
        at
        right now! <br><br>Here are some of my other projects:</span>
    <br>
    
    <table id="webDevTable">
        <tr>
            <td><a target="_blank" href="https://equithon-9a961.firebaseapp.com/"><img class="webSS"
                        src="images/websiteSS/iSteem.png"></a></td>
            <td>PLACEHOLDER</td>
            <td>PLACEHOLDER</td>
        </tr>
        <tr>
            <td>I worked with my team during the <a target="_blank" href="https://equithon2018.devpost.com/">Equithon
                    2018</a> to create our project, <a target="_blank"
                    href="https://devpost.com/software/isteem-hxicsy">iSteem</a>. I
                specifically
                designed the dahsboard (which can be viewed upon logging in), and helped design the
                main website.</td>
            <td>PLACEHOLDER</td>
            <td>PLACEHOLDER</td>
        </tr>
        <tr>
            <td><b>Built with:</b> HTML, CSS, JS and Firebase</td>
            <td><b>Built with:</b> PLACEHOLDER</td>
            <td><b>Built with:</b> PLACEHOLDER</td>
        </tr>
    </table>`
    $("#detailsfillMe").html(webDevDetails);
});

$(".detailsLink").click(function () {
    $("#detailsWindow").css("z-index", "2");
    $('#detailsWindow').animate({
        opacity: 0.8,
    }, 500);

    $("#detailsWindowCenter").css("z-index", "3");
    $("#detailsWindowCenter").css("display", "block");
    $('#detailsWindowCenter').animate({
        opacity: 1
    }, 500);
});

$('#detailsWindowClose').click(function () {
    $('#detailsWindow').animate({
        opacity: 0
    }, 300);

    $('#detailsWindowCenter').animate({
        opacity: 0
    }, 300);

    setTimeout(
        function () {
            $("#detailsWindowCenter").css("display", "none");
            $("#detailsWindowCenter").css("z-index", "-3");
            $("#detailsWindow").css("z-index", "-2");
        }, 300);
});

function switchTheme(themeID) {
    switch (themeID) {
        case "night":
            document.documentElement.setAttribute('data-theme', 'nightTheme');
            document.getElementById("currentThemeIcon").innerHTML =
                '<i class="fa fa-moon-o" aria-hidden="true"></i>';
            break;
        default:
            document.documentElement.setAttribute('data-theme', 'skyTheme');
            document.getElementById("currentThemeIcon").innerHTML = '<i class="fa fa-cloud" aria-hidden="true">';
            break;
    }
}