# Notes on decisions and progress

![Screenshot](https://raw.githubusercontent.com/nordhagen/scorecard-experiment/master/assets/screenshot.png)

## How to run the project

If you have Node installed, run `npm start` from the repository root and open your web browser at the address provided in the command line readout.

If you don't care to install Node, just cd to the dist directory, run a simple HTTP server and visit the address/port combo in the readout.

```
$ cd dist
$ python -m SimpleHTTPServer
```

## Notes

### Tech choices

Given the need to focus on getting up and running quickly I chose to go with the project structure I am most familiar with, which is JavaScript with React+Redux. I did decide that I would take the opportunity to use TypeScript, which I am familiar with, but haven't used in a project until now.

### Architecture

The separation between containers and components will be a hybrid one. Components will be stateless and unaware of the architecture of the rest of the app, whereas the containers will be stateful and connected to the state management system. Where it will differ from accepted best practices is in that containers and their corresponding component rendering code will be put together into one class file.

Needless to say this code base is going to be more elaborate than needed for this simple example. I will imagine this as being the start of a fully featured app where the architecture choices would need to take into account this being part of a larger DOM and state tree.

### Bonus Logic

Since the atomic state is the count of the various score items, the score and bonuses are derived from this. I therefore chose to implement the bonus and score logic with memoized selectors (/src/selectors/index).

### Score config

Although strictly not necessary in this case, the configurarion of the score items with corresponding unit values and bonus has been implemented as a separate part of the state tree. The task description mentioned that the stated configuration was for "this week", which led me to believe that this is likely to change and as such the configuration should be passed as state. I did not implement a mechanism for updating the config since I deemed it unnecessary for the challenge, although with this architecture it would be trivial to implement it.

Obviously the handling of game score should be implemented server side to avoid tampering, but that's another story.
