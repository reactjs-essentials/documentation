Forms

npm install formik@^2.2.9
npm install yup@^0.32.11
npm install react-select@^5.3.2


### LAB First Fprm _\*codeAlong_

_Starting point: movie-app-part-09_
_Ending point: movie-app-part-11_

```
===================   App           ===================
...
  <Route path="/new" element={<NewFilmForm />}></Route>
...

===================   style.css     ===================
h1,
p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.new-film-form {
  max-width: 500px;
}
.new-film-form label {
  display: block;
  margin-top: 10px;
}
.new-film-form h2 {
  color: #ff5800;
}
.new-film-form input,
.new-film-form textarea,
.new-film-form select {
  width: 400px;
  padding: 6px 10px;
  border: 1px solid #ddd;
  display: block;
}
.new-film-form button {
  background: #ff5800;
  margin-top: 10px;
  color: #fff;
  border: 0;
  padding: 8px;
  cursor: pointer;
}

.new-film-form select {
  width: 422px;
}

===================   NewFilmForm   ===================
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewFilmForm = () => {
  const [newFilm, setNewFilm] = useState({
    imdbID: "",
    title: "",
    year: "",
    gender: "",
    director: "",
    actors: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://apimocha.com/moviesapi/film/" + newFilm.imdbID, {
      method: "POST",
      body: JSON.stringify(newFilm),
    }).then(() => navigate("/"));
  };
  const navigate = useNavigate();

  return (
    <div className="new-film-form">
      <h2>Add new film</h2>
      <form onSubmit={handleSubmit}>
        <label>imdbID</label>
        <input
          type="text"
          required
          value={newFilm?.imdbID}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              imdbID: e.target.value,
            });
          }}
        ></input>
        <label>Title</label>
        <input
          type="text"
          required
          value={newFilm?.title}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              title: e.target.value,
            });
          }}
        ></input>
        <label>Year</label>
        <input
          type="number"
          required
          value={newFilm?.year}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              year: e.target.value,
            });
          }}
        ></input>
        <label>Gender</label>
        <select
          value={newFilm?.gender}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              gender: e.target.value,
            });
          }}
        >
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Biography">Biography</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
        </select>

        <label>Director</label>
        <input
          type="text"
          required
          value={newFilm?.director}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              director: e.target.value,
            });
          }}
        ></input>
        <label>Actors</label>
        <input
          type="text"
          required
          value={newFilm?.actors}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              actors: e.target.value,
            });
          }}
        ></input>
        <button type="submit">Add Film</button>
      </form>
    </div>
  );
};

export default NewFilmForm;


```

### LAB Custom Inputs _\*codeAlong_

_Starting point: movie-app-part-11_
_Ending point: movie-app-part-12_

- create custom select for gender
  - imports

```
  import { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import useFetch from "./useFetch";
  import Select from "./Select";


```

- Turn gender and actors array values

```
  const [newFilm, setNewFilm] = useState({
    imdbID: "",
    title: "",
    year: "",
    gender: [],
    director: "",
    actors: [],
  });
```

- fetch All genders using useFetch
- All genders endpoint url= "https://apimocha.com/moviesapi/gender"

```
  const {
    error,
    isLoading,
    data: allGenders,
  } = useFetch("https://apimocha.com/moviesapi/gender");


```

-CREATE NEW COMPENENT named Select

```
const Select = ({ collection, value, isMultiple, handleOnChange }) => {
  return (
    <>
      <select
        multiple={isMultiple}
        value={value}
        onChange={(e) => {
          handleOnChange([...e.target.selectedOptions].map((o) => o.value));
        }}
      >
        {collection.map((gender) => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
```

- swap genders html

```
        {allGenders && (
          <Select
            collection={allGenders}
            isMultiple={true}
            handleOnChange={handleGenderOnChange}
            value={newFilm?.gender}
          ></Select>
        )}
```

- handleGenderOnChange

```
 const handleGenderOnChange = (selectedOptions) => {
    setNewFilm({
      ...newFilm,
      gender: selectedOptions,
    });
  };
```

- create a input for actors based on react-select library
  - npm i react-select for actors
  - imports

```
  import CreatableSelect from "react-select/creatable";
```

- prop to grab selected

```
  const selectedActors = [];
```

- handle handleActorsOnChange

```const handleActorsOnChange = (values) => {
    const actors = values.map((item) => item.value);
    setNewFilm({
      ...newFilm,
      actors: actors,
    });
  };
```

- swap html for actors input

```
        <CreatableSelect
          className="label-input"
          isMulti
          onChange={handleActorsOnChange}
          options={selectedActors}
        />
```

## FULL NewFilmForm code

```import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import Select from "./Select";

import CreatableSelect from "react-select/creatable";

const NewFilmForm = () => {
  const [newFilm, setNewFilm] = useState({
    imdbID: "",
    title: "",
    year: "",
    gender: [],
    director: "",
    actors: [],
  });

  // const [allGenders, setAllGenders] = useState(null);
  const {
    error,
    isLoading,
    data: allGenders,
  } = useFetch("https://apimocha.com/moviesapi/gender");

  const selectedActors = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://apimocha.com/moviesapi/film/" + newFilm.imdbID, {
      method: "POST",
      body: JSON.stringify(newFilm),
    }).then(() => navigate("/"));
  };

  const handleGenderOnChange = (selectedOptions) => {
    setNewFilm({
      ...newFilm,
      gender: selectedOptions,
    });
  };

  const handleActorsOnChange = (values) => {
    const actors = values.map((item) => item.value);
    setNewFilm({
      ...newFilm,
      actors: actors,
    });
  };
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://apimocha.com/moviesapi/gender")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllGenders([...data]);
  //     });
  // }, []);

  return (
    <div className="new-film-form">
      <h2>Add new film</h2>
      <form onSubmit={handleSubmit}>
        <label>imdbID</label>
        <input
          type="text"
          required
          value={newFilm?.imdbID}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              imdbID: e.target.value,
            });
          }}
        ></input>
        <label>Title</label>
        <input
          type="text"
          required
          value={newFilm?.title}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              title: e.target.value,
            });
          }}
        ></input>
        <label>Year</label>
        <input
          type="number"
          required
          value={newFilm?.year}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              year: e.target.value,
            });
          }}
        ></input>
        <label>Gender</label>
        {allGenders && (
          <Select
            collection={allGenders}
            isMultiple={true}
            handleOnChange={handleGenderOnChange}
            value={newFilm?.gender}
          ></Select>
        )}
        <label>Director</label>
        <input
          type="text"
          required
          value={newFilm?.director}
          onChange={(e) => {
            console.log("1", newFilm);
            setNewFilm({
              ...newFilm,
              director: e.target.value,
            });
          }}
        ></input>
        <label>Actors</label>
        <CreatableSelect
          className="label-input"
          isMulti
          onChange={handleActorsOnChange}
          options={selectedActors}
        />
        <button type="submit">Add Film</button>
      </form>
    </div>
  );
};

export default NewFilmForm;

```

## LAB: Using with Formik Field for and data validation

Formik es una libraria que permite mantener e trackear os values do nosso form de forma "automatica sin ser nosotros a gerir este processo de gerir os form fields"

## YUP

https://www.youtube.com/watch?v=ftLy78R8xrg
