import React from 'react';

/**
 * @return {void}
 */
export default function Movie() {
  const handleSubmit = (event) => {
    const movieInfo = 'https://api.themoviedb.org/3/search/movie?' +
    'api_key=d334dbf7dfa49ff0acc99b0ede6f1f19&query=scream';

    fetch(movieInfo)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleSubmit}></button>
    </div>
  );
}

