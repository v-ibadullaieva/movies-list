const express = require("express");
var bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

const moviesApi = express();
moviesApi.use(cors());
// moviesApi.use(bodyParser.urlencoded({ extended: false }));
moviesApi.use(bodyParser.json());

moviesApi.get("/", (req, res) => {
	fs.readFile("database/movies.json", (err, contents) => {
		if (err) {
			res.status(500).json({ error: err });
		} else {
			const movies = JSON.parse(contents);
			res.json(Object.values(movies));
		}
	});
});

moviesApi.get("/:id", (req, res) => {
	fs.readFile("database/movies.json", (err, contents) => {
		if (err) {
			res.status(500).json({ error: err });
		} else {
			const movie = JSON.parse(contents)[req.params.id];
			if (movie) {
				res.json(movie);
			} else {
				res.status(404).json({ error: "Not found" });
			}
		}
	});
});

// read()
// JSON.parse
// movies[id] = newMoview
// JSON.stringify
// write()

moviesApi.post("/", (req, res) => {
	fs.readFile("database/movies.json", (err, contents) => {
		if (err) {
			res.status(500).json({ error: err });
		} else {
			const movies = JSON.parse(contents);
			const id = Math.round(Math.random() * 100000);
			const movie = { id, ...req.body };
			movies[id] = movie;

			fs.writeFile("database/movies.json", JSON.stringify(movies), err => {
				if (err) {
					res.status(500).json({ error: err });
				} else {
					res.json(movie);
				}
			});
		}
	});
});

moviesApi.delete("/:id", (req, res) => {
	const movie = MOVIES.find(
		movie => movie.id === Number.parseInt(req.params.id)
	);

	if (movie) {
		res.json(null);
	} else {
		res.status(404).json({ error: "Not found" });
	}
});

const app = express();
app.use("/api/movies", moviesApi);
app.listen(8080, () => console.log("listening on port 8080"));
