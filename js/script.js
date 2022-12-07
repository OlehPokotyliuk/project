let numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "3");


const personalMoviesDb = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};


const a = prompt('ОДин из последних просмотренных фильмов', "");
const b = prompt('На сколько оцените его?', "");
const c = prompt('ОДин из последних просмотренных фильмов', "");
const d = prompt('На сколько оцените его?', "");

personalMoviesDb.movies[a] = b;
personalMoviesDb.movies[c] = d;

console.log(personalMoviesDb);