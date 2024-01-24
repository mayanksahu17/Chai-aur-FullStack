import  express from "express";
const app = express();



app.get('/', (req, res) => {
   const  jokes =  [
        {
          "id": 1,
          "title": "Why did the scarecrow win an award?",
          "content": "Because he was outstanding in his field!"
        },
        {
          "id": 2,
          "title": "How do you organize a space party?",
          "content": "You 'planet'!"
        },
        {
          "id": 3,
          "title": "What did one wall say to the other wall?",
          "content": "I'll meet you at the corner!"
        },
        {
          "id": 4,
          "title": "Why don't scientists trust atoms?",
          "content": "Because they make up everything!"
        } ,
        {
          "id": 5,
          "title": "Dad Joke",
          "content": "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
          "id": 6,
          "title": "Pun Joke",
          "content": "I used to play piano by ear, but now I use my hands."
        },
        {
          "id": 7,
          "title": "Knock-Knock Joke",
          "content": "Knock, knock. Who’s there? Lettuce. Lettuce who? Lettuce in, it’s cold out here!"
        },
        {
          "id": 8,
          "title": "One-Liner Joke",
          "content": "I'm reading a book on anti-gravity. It's impossible to put down."
        },
        {
          "id": 9,
          "title": "Classic Joke",
          "content": "Why don't scientists trust atoms? Because they make up everything."
        }
      ]
    res.json(jokes)
});


const port = process.env.PORT || 8080 ;

app.listen(port,(req, res) => {
    console.log(`server is listening on ${port}`);
})
