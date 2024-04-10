# Marisa's Abstract Art Memory Game

<div align="center">
  
[Live Demo](https://abstract-memory-game.vercel.app/)

![App Preview](https://github.com/mrzamin/memory-game/assets/142754418/49a6af0c-0814-4df2-a46a-367a2459877d)


</div>
  
## About This Project

Built with React, the main goal of this project was to implement the concepts of React hooks to manage and utilize state for a memory card game.

### Requirements

The requirements for this project are listed [here](https://www.theodinproject.com/lessons/node-path-react-new-memory-card), however, I did decide to deviate from them a bit in order to implement a more familiar version of a memory card game. In my iteration, the player's objective is to try to remember the position of each card to create perfect matches.

My memory game

- keeps track of player's turns
- keeps track of player's best score
- shuffles cards at the start of each round
- flips cards to reveal their contents
- highlights perfect matches
- allows player to restart the game

## Lessons Learned

- I wanted to build my own iteration of the memory game which had a slightly different objective and a fixed number of game cards rather than an infinite number, so I deviated a bit from the project requirements and implemented my own card art. Because of that choice I did not fetch and use data from an external API, so I didn't practice using the Effect hook for synchronization with external systems. Instead, I used the Effect hook to run some code after specific renders. There was quite a lot of debugging to do around those implementations (I did run into the beginner's accidental infinite loop once or twice!).

- There are several instances in this project where I'm using state, but believe the problem could be better solved with other React hooks that I just haven't learned yet. I tried my best to avoid using hooks when they aren't necessary, for example, for calculations that could be done at render time.

- While I am still feeling my way around React, I have a good grasp now on the use cases of the State and Effect hooks after completing this project. I look forward to going deeper with React.

## What I'd Like to Work On in the Future

- Refactor the code with more appropriate/advanced hooks
- Add player's best score to local/session storage
- Add sound effects
- Improve animation performance

## Credits

Color palette from [Tailwind CSS](https://tailwindcss.com/)

Art from [Adobe Express](https://www.adobe.com/express/)

Fonts from [Google Fonts](https://fonts.google.com/)

## License

© 2024 mrzamin

Licensed under the [MIT License](#)
