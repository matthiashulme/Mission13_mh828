import { useState } from 'react';
import data from './MovieData.json';

const mds = data.MovieDataList;

// MovieList function
function MovieList() {
  const [listOfMovies] = useState(mds);

  return (
    <>
      <div>
        {/* Table Set Up */}
        <table className="Table">
          {/* Table Header */}
          <thead>
            <tr>
              <th className="col-3">Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
