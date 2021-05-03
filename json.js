// JSON is a format for storing and transporting data.
// create JSON

var myJson = '{"name": "arun","age": "27","company": "sedin technology","profession": "software developer"}';

var parsedJson = JSON.parse(myJson)
console.log(myJson);
console.log(parsedJson);

console.log(JSON.stringify(parsedJson))

