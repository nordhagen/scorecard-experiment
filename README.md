# Notes on decisions and progress

![Screenshot](/assets/screenshot.png)

## How to run the project

I have deployed the app to a free dyno on Heroku (might need to give it a couple of seconds to spin up): https://scorecard-experiment.herokuapp.com/

If you have Node installed, run `npm start` from the repository root and open your web browser at the address provided in the command line readout.

If you don't care to install Node, just cd to the dist directory, run a simple HTTP server and visit the address/port combo in the readout.

```
$ cd dist
$ python -m SimpleHTTPServer
```

## Notes

### Tech choices

I chose to go with the project structure I am most familiar with, which is JavaScript with React+Redux. I did decide that I would take the opportunity to use TypeScript, which I am familiar with, but haven't used in a project until now.

### Architecture

The separation between containers and components will be a hybrid one. Components will be stateless and unaware of the architecture of the rest of the app, whereas the containers will be stateful and connected to the state management system. Where it will differ from accepted best practices is in that containers and their corresponding component rendering code will be put together into one class file.

### Bonus Logic

Since the atomic state is the count of the various score items, the score and bonuses are derived from this. I therefore chose to implement the bonus and score logic with memoized selectors (/src/selectors/index).

### Score config

Although strictly not necessary in this case, the configurarion of the score items with corresponding unit values and bonus has been implemented as a separate part of the state tree.

Obviously the handling of game score should be implemented server side to avoid tampering, but that's another story.
