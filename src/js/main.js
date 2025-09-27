$(document).ready(function() {

    document.getElementById("step_id_1").innerHTML = 'WARNING!';
    document.getElementById("step_id_2").innerHTML = '<p>You will see nude photos of horny MILFs.</p>\n' +
        '                <p>Please be discreet.</p>';
    document.getElementById("step_id_3").innerHTML = 'IMPORTANT!';
    document.getElementById("step_id_4").innerHTML = 'Before we can show you a list and photos of local MILFs who are online and ready to &nbsp;have\n' +
        '                sex right now &nbsp;, we need to ask a few quick questions.';
    document.getElementById("step_id_5").innerHTML = 'Question 1/4';
    document.getElementById("step_id_6").innerHTML = 'Many of these women are desperate single moms and cheating wives or girlfriends looking\n' +
        '                for some fun. They could be your neighbors or someone you know. Do you agree to keep the identity of\n' +
        '                these women a secret?';
    document.getElementById("step_id_7").innerHTML = 'Question 2/4';
    document.getElementById("step_id_8").innerHTML = 'These women have asked us to not allow men that are seeking a "relationship". They only\n' +
        '                desire sex with no strings attached. Not dating. Do you agree to this request?';
    document.getElementById("step_id_9").innerHTML = 'Question 3/4';
    document.getElementById("step_id_10").innerHTML = 'Do you agree to use a condom when having sex with a partner you meet on our site if asked\n' +
        '                to do so?';
    document.getElementById("step_id_11").innerHTML = 'Question 4/4';
    document.getElementById("step_id_12").innerHTML = 'Each day that you check your account you will likely have multiple sex requests from\n' +
        '                MILFs on our site, will you be comfortable with this?';
    document.getElementById("step_id_13").innerHTML = '<div class="step-title">What type of body turns you on?</div>\n' +
        '\t\t\t<div class="step-subtitle">(You can choose more than 1 answer)</div>\n' +
        '\t\t\t<div class="checkbox-block">\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Skinny</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Curvy</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Regular</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Big Boobs</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Small Boobs</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Big Round Ass</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Tight Small Ass</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">MILF</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Other</div>\n' +
        '\t\t\t</div>';
    document.getElementById("step_id_14").innerHTML = '<div class="step-title">What age of women fits you best?</div>\n' +
        '\t\t\t<div class="step-subtitle">(You can choose more than 1 answer)</div>\n' +
        '\t\t\t<div class="checkbox-block">\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">18 - 25</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">25 - 32</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">32 - 37</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">37 - 54</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">55 and above</div>\n' +
        '\t\t\t</div>';
    document.getElementById("step_id_15").innerHTML = '<div class="step-title">What type of relationship are you looking for?</div>\n' +
        '\t\t\t<div class="step-subtitle">(You can choose more than 1 answer)</div>\n' +
        '\t\t\t<div class="checkbox-block">\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">One Night Stand</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Fuck Buddy</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Discreet Affair</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Dating</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Marriage</div>\n' +
        '\t\t\t</div>';
    document.getElementById("step_id_16").innerHTML = '<div class="step-title">How far are you willing to travel for sex?</div>\n' +
        '\t\t\t<div class="step-subtitle">(You can choose more than 1 answer)</div>\n' +
        '\t\t\t<div class="checkbox-block">\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Within walking distance</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Within 2-10 Miles</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Within 10-50 Miles</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Same State</div>\n' +
        '\t\t\t\t<div class="checkbox-item tr-option">Doesn\'t matter</div>\n' +
        '\t\t\t</div>';
    document.getElementById("step_id_17").innerHTML = '<div class="step-title">\n' +
        '\t\t\t\t<h3>Thank You.</h3>\n' +
        '\t\t\t</div>\n' +
        '\t\t\t<div class="step-content">\n' +
        '\t\t\t\t<p>You may now see our list and photos of women who are online and ready to chat in your area. Again, please keep their identity a secret.</p>\n' +
        '\t\t\t\t<p>Click on the "Continue" button bellow to join our site and begin chatting to MILFs who live near you.</p>\n' +
        '\t\t\t</div>';


    function t() {
        $(".slider-item.active").removeClass("active").next().addClass("active")
        $(".slider-item.preload").next().addClass("preload")
    }
    var i = 0
        , s = $(".step-item");
    s.length;
    $(".step-btn").not(".submit-btn").on("click", function() {
        i++
        $(".step-block").removeClass("first-step")
        $(".step-item:visible").hide().next().fadeIn()

        i < 3 ? t() : 6 === i ? t() : 10 === i && t()
    })
    $(".checkbox-item").on("click", function() {
        $(this).toggleClass("checked tr-selected")
    })
});