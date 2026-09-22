const express = require('express');

const app = express();


app.use((req, res, next) => {

    console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);

    next();

});


app.use(express.json());


app.use(express.static('public'));



let tasks = [

    {
        id: 1,
        text: 'เรียน Node.js',
        done: false
    },

    {
        id: 2,
        text: 'ติดตั้ง VS Code',
        done: true
    }

];


let nextId = 3;



app.get('/', (req, res) => {

    res.send('Welcome to Home Page');

});



app.get('/api/tasks', (req, res) => {

    const { done } = req.query;


    if (done === undefined) {

        return res.json(tasks);

    }


    res.json(
        tasks.filter(
            task => String(task.done) === done
        )
    );

});



app.get('/api/tasks/:id', (req, res) => {

    const task = tasks.find(
        task => task.id === Number(req.params.id)
    );


    if (!task) {

        return res.status(404).json({

            error: 'ไม่พบรายการนี้'

        });

    }


    res.json(task);

});



app.post('/api/tasks', (req, res) => {

    const text = req.body.text;


    if (!text) {

        return res.status(400).json({

            error: 'ต้องระบุ text'

        });

    }


    const newTask = {

        id: nextId++,

        text: text,

        done: false

    };


    tasks.push(newTask);


    res.status(201).json(newTask);

});



app.patch('/api/tasks/:id', (req, res) => {

    const task = tasks.find(

        task => task.id === Number(req.params.id)

    );


    if (!task) {

        return res.status(404).json({

            error: 'ไม่พบรายการนี้'

        });

    }


    task.done = !task.done;


    res.json(task);

});



app.delete('/api/tasks/:id', (req, res) => {

    const id = Number(req.params.id);


    tasks = tasks.filter(

        task => task.id !== id

    );


    res.status(204).end();

});



const PORT = 3000;


app.listen(PORT, () => {

    console.log(`Server is running at http://localhost:${PORT}/`);

});
