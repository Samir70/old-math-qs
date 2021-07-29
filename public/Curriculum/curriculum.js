// keep imports in alphabetical order by import source
// import { algebra } from './algebra';
// import { data } from './data';
// import { number } from './number'
// these imports are now made in the dashboard.html 
// so I could get past the error where the local server only serves .js as type text/html

// topics contain a list of questions and are collected into courses.
const curriculum = [
    { courseName: 'Algebra', topics: algebra },
    { courseName: 'Data', topics: data },
    { courseName: 'Number', topics: number }
]