
import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

//Application configuration
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route configuration
app.use(usersRoute);

app.use(statusRoute);


//Server initialization
app.listen(3000, () => {
    console.log('Application executing on port 3000');
});

