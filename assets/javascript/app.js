var portfolioItems = [
    {
        title: "Magical Harry Potter Trivia Game",
        image: "../images/hp-trivia.png",
        summary: "Harry Potter-themed trivia game created with JavaScript.",
        url: "https://nkclem.github.io/Magical_Harry_Potter_Trivia/"
    },
    {
        title: "Train Time",
        image: "../images/train-time.png",
        summary: "Train schedule app, using Firebase as the backend.",
        url: "https://nkclem.github.io/Train_Schedule_App/"
    },
    {
        title: "Eat. Dat. Burger!",
        image: "../images/burger-app.png",
        summary: "Burger creation/logging app, using MySQL as the back-end and HandlebarsJS as the front-end.",
        url: "https://sleepy-mesa-52132.herokuapp.com"
    }
]

function routePages(event) {
    var pageRoutes = event.target.dataset.content;

    switch(pageRoutes) {
        case "aboutMe":
            $('#aboutMeSection').removeClass('d-none');
            $('#portfolioSection').addClass('d-none');
            $('#contactMeSection').addClass('d-none');
            break;
        case "portfolio":
            $('#aboutMeSection').addClass('d-none');
            $('#contactMeSection').addClass('d-none');
            $('#portfolioSection').removeClass('d-none');
            break;
        case "contactMe":
            $('#portfolioSection').addClass('d-none');
            $('#aboutMeSection').addClass('d-none');
            $('#contactMeSection').removeClass('d-none');
            break;
        default:
            console.log("Error");
    }
}

$(document).ready(function() {
    
    $('.nav-link').click(routePages);

});