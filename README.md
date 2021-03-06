This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Game of life

[Coding Dojo](http://codingdojo.org/kata/GameOfLife/)

## Problem Description

This Kata is about calculating the next generation of Conway’s game of life, given any starting position. See [here](http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) for background.

You start with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When calcuating the next generation of the grid, follow these rules:

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.

## Getting started

- yarn
- yarn start
- go to http://localhost:3000/