const express= require('express');
const bodyParser= require('body-parser');
const messagesController= require(__dirname+'/controllers/messages_controller');

const app= express();
const port= 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname+'/../public/build'));

app.post('/api/messages', messagesController.create);
app.get('/api/messages', messagesController.read);
app.put('/api/messages/:id', messagesController.update);
app.delete('/api/messages/:id', messagesController.delete);

app.listen(port, ()=>{
  console.log(`We live baby! on port: ${port}`);
});
