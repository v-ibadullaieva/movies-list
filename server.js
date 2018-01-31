const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { extractMovies, matches } = require("./utils");

const DATABASE_FILE = "database/movies.json";

const moviesApi = express();
moviesApi.use(cors());
moviesApi.use(bodyParser.json());

readData = func =>
  fs.readFile(DATABASE_FILE, (err, contents) => {
    if (err) {
      func(err);
    } else {
      func(null, JSON.parse(contents));
    }
  });

writeData = (data, func) =>
  fs.writeFile(DATABASE_FILE, JSON.stringify(data), err => {
    if (err) {
      func(err);
    } else {
      func(null);
    }
  });

moviesApi.get("/", (req, res) => {
  readData((err, movies) => {
    if (err) {
      res.status(500).json(null);
    } else {
      res.json(
        Object.values(movies).filter(
          movie =>
            matches(movie.title, req.query.title) &&
            movie.actors.some(actor => matches(actor.name, req.query.actor))
        )
      );
    }
  });
});

moviesApi.get("/:id", (req, res) => {
  readData((err, movies) => {
    if (err) {
      res.status(500).json(null);
    } else {
      const movie = JSON.parse(contents)[req.params.id];
      if (movie) {
        res.json(movie);
      } else {
        res.status(404).json(null);
      }
    }
  });
});

moviesApi.post("/", (req, res) => {
  readData((err, movies) => {
    if (err) {
      res.status(500).json(null);
    } else {
      const id = Math.round(Math.random() * 1000000);
      const movie = { id, ...req.body };
      movies[id] = movie;

      writeData(movies, err => {
        if (err) {
          res.status(500).json(null);
        } else {
          res.json(movie);
        }
      });
    }
  });
});

moviesApi.post("/import", upload.single("file"), (req, res) => {
  fs.readFile(req.file.path, "utf-8", (err, contents) => {
    if (err) {
      res.status(500).json(null);
    } else {
      const extractedMovies = extractMovies(contents);
      readData((err, movies) => {
        if (err) {
          res.status(500).json(null);
        } else {
          extractedMovies.forEach(movie => {
            const id = Math.round(Math.random() * 1000000);
            movies[id] = { id, ...movie };
          });
          writeData(movies, err => {
            if (err) {
              res.status(500).json(null);
            } else {
              res.json(null);
            }
          });
        }
      });
    }
  });
});

moviesApi.delete("/:id", (req, res) => {
  readData((err, movies) => {
    if (err) {
      res.status(404).json(null);
    } else {
      delete movies[req.params.id];
      writeData(movies, err => {
        if (err) {
          res.status(500).json(null);
        } else {
          res.json(null);
        }
      });
    }
  });
});

const app = express();
app.use("/api/movies", moviesApi);
app.listen(8080, () => console.log("listening on port 8080"));
