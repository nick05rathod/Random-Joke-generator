

function generate(){
const jokes = ['What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.'
,'Why did the teddy bear say no to dessert? Because she was stuffed.'
,'Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands.'
,'Name the kind of tree you can hold in your hand? A palm tree!']



let jokeDisplay = document.getElementById('joke');
let randomJokes = Math.floor(Math.random('jokes') *4);

joke.innerHTML = ` "${jokes[randomJokes]}"`;
}


