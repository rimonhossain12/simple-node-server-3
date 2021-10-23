const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


const users = [

    { id: '0', name: 'Rimon Hossain', age: '19',education:'diploma in engineering' },
    { id: '1', name: 'Rabbil Hasan', age: '29',education:'bsc in engineering' },
    { id: '2', name: 'Hasan Mahmud', age: '25',education:'diploma in computer' },
    { id: '3', name: 'Rizaj Hossain', age: '21', education:'diploma in mechatronics' },
    { id: '4', name: 'Hasbi', age: '19',education:'diploma in computer' },
    { id: '5', name: 'Subeen ', age: '19', education:'Engineering manager grab ' },
    { id: '6', name: 'Hasan Hossain', age: '19',education:'Vocational in engineering' },
    { id: '7', name: 'Hasan mahbud', age: '19',education:'diploma in computer' },
]




app.get('/',(req,res) => {
    res.send('I am learn node and express I am so excited to learning node js and express');
});

// using dynamic route and how to it use

app.get('/users',(req,res) => {
   res.send(users);
})


// using dynamic route and parameter
app.get('/users/:id',(req,res) => {
    const id = req.params.id;
    res.send(users[id]);
})


app.listen(port,() => {
    console.log('Hello port',port);
})



