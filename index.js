let tony = require("./information.js");
const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: `Hello I'm ${tony.name} from ${tony.campus}`,
  })
);
