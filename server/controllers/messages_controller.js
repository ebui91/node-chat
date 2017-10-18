let messages= [];
let id= 0;

module.exports= {
    create(req,res){
      // const text= req.body.text;
      // const time= req.body.time;
      const{text,time}= req.body;
      messages.push({id, text, time});
      id++;
      res.status(200).send(messages);
    },

    read(req,res){
      res.status(200).send(messages);
    },

  update(req,res){
    //grab ID of message to be updated using request body object
    const { text } = req.body;
    const updateID= req.params.id;
    //Because of object destructuring, text = req.body.text //However, I find this confusing, so I just type out req.body.text
    const messageIndex= messages.findIndex(message=>message.id==updateID);
    //reassign message to equal the previous message. This is what lets us update a post
    let message= messages[messageIndex];

    messages[messageIndex]={
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    res.status(200).send(messages);
  },

  delete(req,res){
    const deleteID= req.params.id;
    messageIndex= messages.findIndex(message=>{
      message.id==deleteID;
    });
    messages.splice(messageIndex,1);
    res.status(200).send(messages);
  }
};
