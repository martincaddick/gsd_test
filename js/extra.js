    $("#news-iframe-1").on("load", function() {
        $(this).contents().find("head").css("display", "none");
        $(this).contents().find("header").css("display", "none");
        $(this).contents().find("footer").css("display", "none");
        $(this).contents().find("a[data-md-component='top']").css("display", "none");
        $(this).contents().find("div[class='md-main__inner md-grid']").css("margin-top", "0px");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("margin", "0 0 0 0");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("font-weight", "300");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("font-size", "1.9em");
        $("#loading-news-1").css("display", "none");
        $(this).show();
        
    });
    $("#news-iframe-2").on("load", function() {
        $(this).contents().find("head").css("display", "none");
        $(this).contents().find("header").css("display", "none");
        $(this).contents().find("footer").css("display", "none");
        $(this).contents().find("a[data-md-component='top']").css("display", "none");
        $(this).contents().find("div[class='md-main__inner md-grid']").css("margin-top", "0px");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("margin", "0 0 0 0");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("font-weight", "300");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("font-size", "1.9em");
        $("#loading-news-2").css("display", "none");
        $(this).show();
    });   
    $("#news-iframe-3").on("load", function() {
        $(this).contents().find("head").css("display", "none");
        $(this).contents().find("header").css("display", "none");
        $(this).contents().find("footer").css("display", "none");
        $(this).contents().find("a[data-md-component='top']").css("display", "none");
        $(this).contents().find("div[class='md-main__inner md-grid']").css("margin-top", "0px");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("margin", "0 0 0 0");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("font-weight", "300");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("font-size", "1.9em");
        $("#loading-news-3").css("display", "none");
        $(this).show();
    });
    $(".products-container").html(function(){
        $("#ms").css("background-image", "url(img/oobe-Textured-1920x1080_Energy_Blue03.jpg)");
        $("#p365").css("background-image", "url(img/oobe-Textured-1920x1080_Energy_Blue07.jpg)");
        $(".ms__img").fadeIn(2000);
        $(".p365__img").fadeIn(2000);       
        $("#ms .triangle").fadeIn(2000);
        $("#ms .triangle img").fadeIn(1000);        
        $("#p365 .triangle").fadeIn(2000);
        $("#p365 .triangle img").fadeIn(1000);
        $("#cs .triangle").fadeIn(2000);
        $("#cs .triangle img").fadeIn(1000);
        $("#loading-macro").fadeOut(1000);
        $("#loading-p365").fadeOut(1000);
        $("#loading-cs").fadeOut(1000);
        $("#cs-span").fadeIn(4000);
    });
    /* Mobile navbar toggle */
    function mobileToggle() {
        var btn = document.getElementById("mobile-navbar-collapse");
        if ( btn.style.display === "block" ) {
            btn.style.display = "none";
            $("#mobile-container-collapse").hide();
            $("#menuToggle .bar:first-child").css("top","0");
            $("#menuToggle .bar:first-child").css("transform","rotate(0deg)");
            $("#menuToggle .bar:nth-child(2)").css("top","10px");
            $("#menuToggle .bar:nth-child(2)").css("opacity","1");
            $("#menuToggle .bar:nth-child(2)").css("right","0");
            $("#menuToggle .bar:last-child").css("transform","rotate(0deg)");
            $("#menuToggle .bar:last-child").css("top","20px");
            $("#menuToggle .bar:last-child").css("margin","0");
            $("#mobile-search").show();
            $(".md-typeset table:not([class])").css("background-color","var(--md-default-bg-color)")
            $(".md-top.md-icon").show();
        } else {
            btn.style.display = "block";
            $("#mobile-container-collapse").show();
            $("#menuToggle .bar:first-child").css("transform","rotate(135deg)");
            $("#menuToggle .bar:first-child").css("top","10px");
            $("#menuToggle .bar:nth-child(2)").css("opacity","0");
            $("#menuToggle .bar:nth-child(2)").css("right","-10px");
            $("#menuToggle .bar:last-child").css("transform","rotate(-135deg)");
            $("#menuToggle .bar:last-child").css("top","10px");
            $("#menuToggle .bar:last-child").css("margin","0");
            $("#mobile-search").hide();
            $(".md-typeset table:not([class])").css("background-color","transparent");
            $(".md-top.md-icon").hide();
        }
    } 
    $("#mobile-navbar-collapse li a").on("click", function(){
        $("#mobile-navbar-collapse").hide();
        $("#mobile-container-collapse").hide();
        $("#menuToggle .bar:first-child").css("top","0");
        $("#menuToggle .bar:first-child").css("transform","rotate(0deg)");
        $("#menuToggle .bar:nth-child(2)").css("top","10px");
        $("#menuToggle .bar:nth-child(2)").css("opacity","1");
        $("#menuToggle .bar:nth-child(2)").css("right","0");
        $("#menuToggle .bar:last-child").css("transform","rotate(0deg)");
        $("#menuToggle .bar:last-child").css("top","20px");
        $("#menuToggle .bar:last-child").css("margin","0");
        $("#mobile-search").show();
        $(".md-top.md-icon").show();
    }); 
    /** Mobile Search Box **/
    $("#mobile-search").on("click",function(){
            $(this).hide();
            $(".mobile-tabs").hide();
    });
    $("#mobile-btn").on("click",function(){
        $("#mobile-search").show();
        $('.mobile-tabs').show();
    });
    $(".md-header__button").on("click",function(){
        $("#mobile-search").show();
        $(".mobile-tabs").show();
    });



    
    