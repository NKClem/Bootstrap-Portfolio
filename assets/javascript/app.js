var portfolioItems = [
    {
        title: "Magical Harry Potter Trivia Game",
        image: "./assets/images/hp-trivia.png",
        summary: "Harry Potter-themed trivia game created with JavaScript.",
        url: "https://nkclem.github.io/Magical_Harry_Potter_Trivia/"
    },
    {
        title: "Train Time",
        image: "./assets/images/train-time.png",
        summary: "Train schedule app, using Firebase as the backend.",
        url: "https://nkclem.github.io/Train_Schedule_App/"
    },
    {
        title: "Eat. Dat. Burger!",
        image: "./assets/images/burger-app.png",
        summary: "Burger creation/logging app, using MySQL as the back-end and HandlebarsJS as the front-end.",
        url: "https://sleepy-mesa-52132.herokuapp.com"
    }
]

function buildPortfolio() {
    portfolioItems.forEach(function(element) {
        $('#portfolioItems').append('<div class="card"><img src=" '+element.image+' "/><div class="card-body"><h5 class="card-title">' + element.title + '</h5><p class="card-text">' +element.summary+ '</p><a href=" '+element.url+' " target="_blank">See App</a></div></div>');
    });
}

function routePages(event) {
    var pageRoutes = event.target.dataset.content;

    switch(pageRoutes) {
        case "aboutMe":
            $('#jumboHeading').text("About Me");
            $('#aboutMeSection').removeClass('d-none');
            $('#portfolioSection').addClass('d-none');
            $('#contactMeSection').addClass('d-none');
            break;
        case "portfolio":
            $('#jumboHeading').text("Portfolio");
            $('#aboutMeSection').addClass('d-none');
            $('#contactMeSection').addClass('d-none');
            $('#portfolioSection').removeClass('d-none');
            buildPortfolio();
            break;
        case "contactMe":
            $('#jumboHeading').text("Contact Me");
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