const express = require('express');
const fs = require('fs')

let films;
let filmsArr;
fs.readFile('films.json', (err, data) => {
    films = data.toString();
    filmsArr = JSON.parse(films)
})

const filmsRouter = express.Router();

filmsRouter.get('/', (req, res) => {
    filmsArr = filmsArr.sort(function (a, b) {
        return a.position - b.position;
    });
    res.send((filmsArr));
})

filmsRouter.get('/:id', (req, res) => {
    const { body, params } = req;
    let index;
    for (let i = 0; i < filmsArr.length; i++) {
        if (filmsArr[i].id == params.id) {
            index = i;
            break
        }
    }
    res.send((filmsArr[index]));
}
)

filmsRouter.post('/', (req, res) => {
    const { body } = req;
    let id = getID();
    const newFilm = {
        "id": id,
        "title": body.title,
        "rating": body.rating,
        "year": body.year,
        "budget": body.budget,
        "gross": body.gross,
        "poster": body.poster,
        "position": body.position
    }

    filmsArr.push(newFilm);
    res.status(201).send(newFilm)
})

filmsRouter.put('/:id', (req, res) => {
    const { body, params } = req;
    console.log(params)

    filmsArr = filmsArr.map(item => item.id != params.id ? item : {
        "id": item.id,
        "title": body.title || item.title,
        "rating": body.rating || item.rating,
        "year": body.year || item.year,
        "budget": body.budget || item.budget,
        "gross": body.gross || item.gross,
        "poster": body.poster || item.poster,
        "position": body.position || item.position
    });
   
    let index;
    for (let i = 0; i < filmsArr.length; i++) {
        if (filmsArr[i].id == params.id) {
            index = i;
            break
        }
    }
   
    res.send(filmsArr[index]);
}
)

filmsRouter.delete('/:id', (req, res) => {
    const { params } = req;
    let index;
    for (let i = 0; i < filmsArr.length; i++) {
        if (filmsArr[i].id == params.id) {
            index = i;
            break
        }
    }

    filmsArr.splice(index, 1)
    console.log(filmsArr)
    res.status(200).send('Removed');
})

function getID() {
    return 101
}
module.exports = filmsRouter;