import cors from 'cors';
import express from 'express';
const app = express()

const port = 3000


type task = {
  id: number
  title: string
};

type taskType = Array<task>;

var tasks: taskType = [
  { id: 1, title: 'buy the milk' },
  { id: 2, title: 'rent a car' },
  { id: 3, title: 'feedthecat' }
];
app.use(express.urlencoded({ extended: true }))


app.use(cors({
  credentials: true,
}));

app.get("/", (req, res): void => {
  console.log("woeking");
  res.send(JSON.stringify(tasks));
})

app.post("/newtask", (req, res) => {
  const id_obj: number = tasks.length + 1
  var data: string = req.body;
  console.log("res", data);
  const newTask: task = { id: id_obj, title: data }
  tasks.push(newTask);
  console.log(tasks);

  res.send("OK")
})

app.put('/editTask/:id', (req, res) => {
  res.send(`Got a PUT request at ${req.params.id}`)
  console.log("Put Request");

  const task_id: number = parseInt(req.params.id);
  console.log("task_id :", task_id);

  // const updateIndex: number = tasks.findIndex(x => x.id+1 == task_id);
  // console.log(updateIndex);
  console.log(req.body);
  
  tasks[task_id-1].title = req.body.title

  // console.log(tasks[updateIndex].title);

  // tasks[updateIndex].title = req.body;
  // console.log(tasks[editTask]);
})

app.delete('/:id', (req, res): void => {
  console.log("run");
  const ax: string = req.params.id
  res.send(`Got a DELETE request at ${ax}`)
  const dalla: taskType = tasks.filter(x => x.id != parseInt(ax));
  console.log(dalla);
  tasks = [...dalla]
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

