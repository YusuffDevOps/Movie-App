package Yusuff.s.Project.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    /*
       This method returns all the movies in the mongo database
     */
    public List<Movie> allMovies(){
        return movieRepository.findAll();
    }

    /*
       This method returns a single movie in the mongo database by it's unique ID
     */
    public Optional<Movie> singleMovie(String imbdId){
        return movieRepository.findMovieByImdbId(imbdId);
    }
}
