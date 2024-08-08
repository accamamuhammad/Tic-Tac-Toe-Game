## Tic Tac Toe app

# How it works

- This is a simple game of tic tac toe
- This is a two player game, player one & player two

# Guide

1. create game board
   if i = 1; border top & left = none;
   if i = 2; border top = none;
   if i = 3; border top & right = none;
   if i = 4; border left = none;
   if i = 5; border = intact;
   if i = 6; border right = none;
   if i = 7; border bottom & left = none;
   if i = 8; border bottom = none;
   if i = 9; border bottom & right = none;

# Logic for removing unwanted borders

if (x >= 1 && x <= 3){
tile.style.borderTop = none;
} else if (x >= 7 && <= 9) {
tile.style.borderBottom = none;
}
if (x = 1 || x = 7){
tile.style.borderLeft = none;
} else if (x = 3 || x = 9){
title.style.borderRight = noe
}

## check score

let boardState = [
["", "", ""],
["", "", ""],
["", "", ""],
];

//c1 r1 console.log(boardState[0][0]);
//c2 r1 console.log(boardState[0][1]);
//c3 r1 console.log(boardState[0][2]);
//c1 r2 console.log(boardState[1][0]);
//c2 r2 console.log(boardState[1][1]);
//c3 r2 console.log(boardState[1][2]);
//c1 r3 console.log(boardState[2][0]);
//c2 r3 console.log(boardState[2][1]);
//c3 r3 console.log(boardState[2][2]);

# check win

1,2,3
4,5,6
7,8,9
1,5,9
3,5,7
1,4,7
2,5,8
3,6,9
