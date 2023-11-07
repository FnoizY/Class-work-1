const { stdin, stdout } = require('process');


function chat (){ 
    console.log('Ask me a question or type "exit" to quit: ');

    stdin.on("data",(data) => {
        const input = data.toString().trim().toLowerCase();
        if(input === "hello"){
            console.log("hello how can i help you?")
            chat()
        }
        else if(input === "tell me a joke"){
            console.log("Did you hear about the claustrophobic astronaut?")
            console.log("He just needed a little space")
            chat()
        }
        else if(input === "what is your name"){
            console.log("My name is chatbot nice meeting you")
            chat()
        }
        else if(input === "exit"){
            console.log("Goodbye!")
            process.exit();
        }
        else{
            console.log("I did not understand you can you ask me something else?")
            chat()
        }
      })
    }

chat()