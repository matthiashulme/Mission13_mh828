import { useEffect, useState } from 'react';
import { Movie } from '../src/types/movie';

// MovieList function
function MovieList() {
  const [listOfMovies, setMovieData] = useState<Movie[]>([]);

  // Using Effect to get the movie data once and extract the information for use later
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div>
        {/* Table Set Up */}
        <table className="table">
          {/* Table Header */}
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.category}</td>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
