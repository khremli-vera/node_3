const express = require('express');
const fs = require('fs')

let films;
let filmsArr;
fs.readFile('films.json', (err, data) => {
    films = data.toString();
    filmsArr = JSON.parse(films)
})

const filmsRouter = express.Router();

filmsRouter.get('/films', (req, res) => {
    filmsArr = filmsArr.sort(function (a, b) {
        return a.position - b.position;
    });
    res.send((filmsArr));
})

filmsRouter.get('/films/:id', (req, res) => {
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

filmsRouter.post('/films', (req, res) => {
    const { body } = req;
    let id = getID();
    let position;

    // check position
    if (isPositionExist(body.position)) {
        position = body.position;
        shiftDown(filmsArr, position, filmsArr.length)
    } else {
        position = filmsArr.length + 1;
    }

    const newFilm = {
        "id": id,
        "title": body.title,
        "rating": body.rating,
        "year": body.year,
        "budget": body.budget,
        "gross": body.gross,
        "poster": body.poster,
        "position": position
    }

    filmsArr.push(newFilm);
    filmsArr = filmsArr.sort(function (a, b) {
        return a.position - b.position;
    });

    res.status(201).send(newFilm)
})

filmsRouter.put('/films/:id', (req, res) => {
    const { body, params } = req;
    let position;
    let prevPosition;
    if (body.position) {
        for (let i = 0; i < filmsArr.length; i++) {
            if (filmsArr[i].id == params.id) {
                prevPosition = filmsArr[i].position;
                break
            }
        }
        if (isPositionExist(body.position)) {
            position = body.position;
        } else {
            position = filmsArr.length;
        }
    }
  
    if (position < prevPosition) {
        shiftDown(filmsArr, position, prevPosition-1)
    } else if (position > prevPosition && position <= filmsArr.length) {
        shiftUp (filmsArr, prevPosition-1, position)
    } else if (position > prevPosition && position > filmsArr.length) {
        shiftUp (filmsArr, prevPosition-1, filmsArr.length)
    }

    filmsArr = filmsArr.map(item => item.id != params.id ? item : {
        "id": item.id,
        "title": body.title || item.title,
        "rating": body.rating || item.rating,
        "year": body.year || item.year,
        "budget": body.budget || item.budget,
        "gross": body.gross || item.gross,
        "poster": body.poster || item.poster,
        "position": position || item.position
    });

    filmsArr = filmsArr.sort(function (a, b) {
        return a.position - b.position;
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

filmsRouter.delete('/films/:id', (req, res) => {
    const { params } = req;
    let index;
    for (let i = 0; i < filmsArr.length; i++) {
        if (filmsArr[i].id == params.id) {
            index = i;
            break
        }
    }
    const position = filmsArr[index].position
    filmsArr.splice(index, 1);
    shiftUp(filmsArr, position, filmsArr.length);
    res.status(200).send('Removed');
})

function getID() {
    const ids = filmsArr.map(item => item.id)
    let i = 1;
    while (ids.includes(i)) {
        i++
      }
    return i
}

function isPositionExist(pos) {
    const positions = filmsArr.map(item => item.position)
    return positions.includes(pos)
}

function shiftDown(arr, pos, posNext) {
    for (let i = pos - 1; i < posNext; i++) {
        arr[i].position = arr[i].position + 1
    }
}

function shiftUp(arr, pos, posNext) {
    for (let i = pos - 1; i < posNext; i++) {
        arr[i].position = arr[i].position - 1
    }
}

module.exports = filmsRouter;