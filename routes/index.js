var moviesJSON = require('../movies.json');

exports.home = function(req, res) {
    
    var movies = moviesJSON.movies;
    
    
    res.render('home', {
        title: "mgtfaq | Watch and learn your way to success",
        movies: movies
    });
};

exports.movie_single = function(req, res) { 
    var episode_number = req.params.episode_number;
    
    var movies = moviesJSON.movies;
    
    if (episode_number >= 1 && episode_number <= 25) {
        var movie = movies[episode_number - 1];

        var title = movie.title;
        
        var exercises = movie.exercises;
        
        var course_name = movie.course_name;

        res.render('movie_single', {
            movies: movies, 
            title: title,
            movie: movie,
            exercises: exercises,
            course_name : course_name
        }); 
    } else {
        res.send("This is not the page you are looking for!");
    }
    
   
};

exports.notFound = function(req, res) {
    res.render('notFound', {
        title: "mgtfaq | Watch and learn your way to success"
    });
};
