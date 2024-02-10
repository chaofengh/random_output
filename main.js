// to create a program that split out random output when user runs it

let arrayOfJoke = ['What do kids play when their mom is using the phone? Bored games.',
'What do you call an ant who fights crime? A vigilANTe!',
'Why are snails slow? Because they’re carrying a house on their back.',
'What’s the smartest insect? A spelling bee!',
'What does a storm cloud wear under his raincoat? Thunderwear.',
'What is fast, loud and crunchy? A rocket chip.',
'How does the ocean say hi? It waves!',
'Why did the teddy bear say no to dessert? Because she was stuffed.']

function randomJoke(){
    console.log(arrayOfJoke[Math.floor(Math.random()*arrayOfJoke.length)])
}

randomJoke()