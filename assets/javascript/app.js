var portfolioItems = [
    {
        title: "Magical Harry Potter Trivia Game",
        image: "./assets/images/hp-trivia.png",
        summary: "Harry Potter-themed trivia game, created with JavaScript.",
        url: "https://nkclem.github.io/Magical_Harry_Potter_Trivia/"
    },
    {
        title: "Train Time",
        image: "./assets/images/train-time.png",
        summary: "Train schedule app, using Firebase for the backend.",
        url: "https://nkclem.github.io/Train_Schedule_App/"
    },
    {
        title: "Eat. Dat. Burger!",
        image: "./assets/images/burger-app.png",
        summary: "Burger creation/logging app, using MySQL for the back-end and HandlebarsJS for the front-end.",
        url: "https://sleepy-mesa-52132.herokuapp.com"
    },
    {
        title: "RVA Mag Scraper",
        image: "./assets/images/rva_scrape.jpg",
        summary: "Current news taken from RVA Magazine's website, using MongoDB for the back-end.",
        url: "https://damp-island-70228.herokuapp.com/articles"
    }
]

function buildPortfolio() {
    $('#portfolioItems').empty();
    portfolioItems.forEach(function(element) {
        $('#portfolioItems').append('<div class="card portfolioCard"><img class="img-fluid" src=" '+element.image+' "/><div class="card-body"><h5 class="card-title">' + element.title + '</h5><p class="card-text">' +element.summary+ '</p><a href=" '+element.url+' " target="_blank">See App</a></div></div>');
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