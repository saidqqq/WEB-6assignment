
$(document).ready(function() {
    console.log("jQuery is ready!");


    $("p").css("line-height", "1.7");
    $("#main-heading").text("Welcome to my webpage!");0
    $(".intro").css("color", "#a96385");

    //light
    $("#light-theme").click(function() {
        $("body").removeClass("dark");
    });

    //dark
    $("#dark-theme").click(function() {
        $("body").addClass("dark");
    });

    $("#change-heading").click(function() {
        $("#main-heading").text("You deserve a little break");
    });

    //hide, show and toggle
    $("#hide").click(function() {
        $("#about-info").hide();
    });
    $("#show").click(function() {
        $("#about-info").show();
    });
    $("#toggle-info").click(function() {
    $("#about-info").toggle();
    });

    $("#fade-in").click(function() {
        $(".gallery-img").stop(true, true).fadeIn();
    });
    $("#fade-out").click(function() {
        $(".gallery-img").stop(true, true).fadeOut();
    });
    $("#fade-toggle").click(function() {
    $(".gallery-img").stop(true, true).fadeToggle();
    });


    //slide effects
    $(".favorite-heading").click(function() {
        $(this).next(".panel").stop(true, true).slideToggle();
    });

    $("#open-panel").click(function() {
        $(".panel").stop(true, true).slideDown();
    });
    $("#close-panel").click(function() {
        $(".panel").stop(true, true).slideUp();
    });



    //add ideas
    $("#add-skill").click(function() {
        let action = $("#action-input").val().trim();
        if (action !== "") {
            $("#actions").append(
                $("<li>").text(action)
            );
            $("#action-input").val("");
        }
    });

    $("#prepend-skill").click(function() {
        let action = $("#action-input").val().trim();
        if (action !== "") {
            $("#actions").prepend(
                $("<li>").text(action)
            );
            $("#action-input").val("");
        }
    });

    $("#remove-skill").click(function() {
        $("#actions li").last().remove();
    });


    $("#action-input").keydown(function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            $("#add-skill").click();
        }
    });


    //change link
    $("#change-link").click(function() {
        let link = $("#social-link");
        if (link.attr("href") === "https://www.outlook.com") {
            link.attr("href", "https://mail.google.com/");
            link.text("message me through Gmail! ↗");
        } else {
            link.attr("href", "https://www.outlook.com");
            link.text("message me through Outlook! ↗");
        }
    });


    //form
    $("#name-input").on("input", function() {
        let name = $(this).val();
        if (name.trim() === "") {
            $("#name-output").text("Your name will appear here.");
        } else {
            $("#name-output").text("Name: " + name);
        }
    });

    $("#email-input").on("input", function() {
        let email = $(this).val();
        if (email.trim() === "") {
            $("#email-output").text("Your email will appear here.");
        } else {
            $("#email-output").text("Email: " + email);
        }
    });


    //prevent the form from reloading the page
    $("#contact-form").submit(function(event) {
        event.preventDefault();
    });

    //graphs
    let skillsAnimated = false;
    $("#animate-skills").click(function() {
        if (skillsAnimated === false) {
            $("#html-bar").stop().animate({ width: "85%" }, 1000);
            $("#css-bar").stop().animate({ width: "70%" }, 1000);
            $("#js-bar").stop().animate({ width: "55%" }, 1000);
            skillsAnimated = true;
        } else {
            $(".skill-fill").stop().animate({ width: "0%" }, 1000);
            skillsAnimated = false;
        }
    });

});
