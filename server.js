// 1. Express import
const express = require('express');

// 2. App banana
const app = express();

// 3. JSON middleware
app.use(express.json());

// 4. Users ka data
let users = [
    { id: 1, name: 'Ali', email: 'ali@example.com', age: 22 },
    { id: 2, name: 'Sara', email: 'sara@example.com', age: 24 }
];

// 5. GET — saare users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// 6. GET — ek user ID se
//one by one user
app.get('/api/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
});

// 7. POST — yahan naya user add karne ka code aayega
app.post('/api/users', (req,res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});


// 8. PUT — yahan user update karne ka code aayega

app.put('/api/users/:id', (req, res) => {
const userId= Number(req.params.id);
const user= users.find((u)=> u.id=== userId);

if(!user){
    return res.status(404).json({message: 'User not found'});
}
user.name= req.body.name|| user.name;
user.email= req.body.email|| user.email;
user.age= req.body.age|| user.age;

res.json(user);

});



// 9. DELETE — yahan user delete karne ka code aayega


/* 9. DELETE — user delete karna */
app.delete('/api/users/:id', (req, res) => {
    const userId = Number(req.params.id);

    const index = users.findIndex((u) => u.id === userId);

    if (index === -1) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    const deletedUser = users.splice(index, 1);

    res.json({
        message: 'User deleted successfully',
        user: deletedUser[0]
    });
});



// 10. Welcome route
app.get('/', (req, res) => {
    res.send('Welcome to Users API');
});

// 11. Server start — hamesha aakhir mein
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});