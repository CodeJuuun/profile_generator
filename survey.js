const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What do you think of Node.js? ", (answer) => {
  rl.question("What's your name? ", (name) => {
    rl.question("What's an activity you like doing? ", (activity) => {
      rl.question("What do you listen to while doing that? ", (music) => {
        rl.question("Which meal is your favourite? ", (meal) => {
          rl.question("What's your favourite thing to eat for that meal? ", (food) => {
            rl.question("Which sport is your favourite? ", (sport) => {
              rl.question("What is your superpower? ", (power) => {

                const profile = `${answer}, my name is ${name} and I like to listen to ${music} while ${activity}. ${meal} is my favourite and I like to have ${food}. My prefered sport is ${sport} and I think I'm pretty decent at ${power}.`;

                console.log(profile);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});
