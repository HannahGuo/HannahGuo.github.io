$("#themeExpand").hide();
$('#themeSwitcher').click(function () {
    $('#themeExpand').animate({
        width: 'toggle',
    }, 300);
});

$("#programmingContestsLink").click(function () {
    let programmingContestsDetails = `<span class="titleFont">Programming Contests 🏅</span>
    <br><br>
    <span>Apart from hackathons, I enjoy testing my programming skills in various contests.</span>
    <br><br>
    <div id="programmingContestsTable">
        <div>
            <div><a target="_blank" href="https://codein.withgoogle.com/#winners"><img class="webSS"
                        src="images/googleCodeIn.png"></a>
            </div>
            <div>I placed as a Runner-up during the open source code Google Code-In 2019 challenge for the
                Terasology Foundation.</div>
            <div><b>Skills Used:</b> Java</div>
        </div>
        <div>
            <div><a target="_blank" href="https://picoctf.com/"><img class="webSS" src="images/pico-ctf-logo-4-c.svg"></a>
            </div>
            <div>I competed in the cybersecurity capture the flag picoCTF contest in both 2018 and 2019. I
                placed top 10 nationally both times.</div>
            <div><b>Skills Used: </b>Cryptography, Steganography, Web/Binary Exploitation</div>
        </div>
        <div>
            <div>PLACEHOLDER</div>
            <div>PLACEHOLDER</div>
            <div>PLACEHOLDER</div>
        </div>
    </div>`;
    $("#detailsfillMe").html(programmingContestsDetails);
});

$("#robotCodeLink").click(function () {
    let robotCodeDetails = `<span class="titleFont">Robot Code 🤖</span>
    <br><br>
    <div id="robotCodeTable">
    <div>
        <iframe src="https://www.youtube.com/embed/nlQ2LHgbIDY" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <em>Our team's 2019 robot reveal (with controls!)</em>
    </div>
    <div>
        I've spent the past four years as a programmer in FIRST Robotics Team 1325. From junior to
        lead programmer, I use <a target="_blank" href="https://docs.wpilib.org/en/stable/">FRC's
            WPILIB libraries </a>to seamlessly connect robot sensors and motors
        to driver condivols.
        <br><br>
        <b>Programmed in:</b> Java.
        <br><br>
        <a target="_blank" href="https://github.com/HannahGuo/2019RobotShow">2019 Code Repository
            Link</a>
    </div>
</div>`;
    $("#detailsfillMe").html(robotCodeDetails);
});

$("#webDevLink").click(function () {
    let webDevDetails = `<span class="titleFont">Web Design/Development 🌐</span>
    <br><br>
    <span>I love designing and developing websites for various subjects. I built the website you're looking
        at
        right now! <br><br>Here are some of my other projects:</span>
    <br>
    
    <div id="webDevTable">
        <div>
            <div><a target="_blank" href="https://equithon-9a961.firebaseapp.com/"><img class="webSS"
                        src="images/websiteSS/iSteem.png"></a></div>
            <div>I worked with my team during the <a target="_blank" href="https://equithon2018.devpost.com/">Equithon
                    2018</a> to create our project, <a target="_blank"
                    href="https://devpost.com/software/isteem-hxicsy">iSteem</a>. I
                specifically
                designed the dahsboard (which can be viewed upon logging in), and helped design the
                main website.</div>
            <div><b>Built with:</b> HTML, CSS, JS and Firebase</div>
        </div>
        <div>
            <div>PLACEHOLDER</div>
            <div>PLACEHOLDER</div>
            <div>PLACEHOLDER</div>
        </div>
        <div>
            <div>PLACEHOLDER</div>
            <div>PLACEHOLDER</div>
            <div>PLACEHOLDER</div>
        </div>
    </div>`
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
                '<i class="fa fa-moon-o" aria-hidden="divue"></i>';
            break;
        default:
            document.documentElement.setAttribute('data-theme', 'skyTheme');
            document.getElementById("currentThemeIcon").innerHTML = '<i class="fa fa-cloud" aria-hidden="divue">';
            break;
    }
}