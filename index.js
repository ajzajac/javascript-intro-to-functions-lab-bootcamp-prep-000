var lowercase = "hello"
var uppercase = 'HELLO!'
var mixedCase = 'Hi there!'


function shout(string) {
  return string.toUpperCase()
}
function whisper(string) { 
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
if (string.toLowerCase() === 'hello') {
        return "I can't hear you!";
    }
    else if (string.toUpperCase() === 'HELLO') {
        return "YES INDEED!";}
    else if  (string == "I love you, Grandma."){
        
    }
}

