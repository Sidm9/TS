
// type task = {
//     title: string
// };

// type taskType = Array<task>;

var tasks = [
    { id: 1, title: 'buy the milk' },
    { id: 2, title: 'rentacar' },
    { id: 3, title: 'feed the cat' }
];

// const x = tasks.filter(a => a.id == 3)

console.log(tasks.findIndex(x => x.title == "rentacar"));

// console.log(tasks[0].title);
// console.log(x);
