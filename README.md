# Coordinate system converter

This repository contains Javascript code for converting coordinate system.

## Calculate transformation matrix based on points
Given two point sets, for example triplets, (**x1**, **x2**, **x3**) and (**y1**, **y2**, **y3**), calculate **A** transformation matrix.

You should be giving the input in the following format:

---
3\
x<sub>1,1</sub>;x<sub>1,2</sub>;x<sub>1,3</sub>\
x<sub>2,1</sub>;x<sub>2,2</sub>;x<sub>2,3</sub>\
x<sub>3,1</sub>;x<sub>3,2</sub>;x<sub>3,3</sub>\
x<sub>4,1</sub>;x<sub>4,2</sub>;x<sub>4,3</sub>\
y<sub>1,1</sub>;y<sub>1,2</sub>;y<sub>1,3</sub>\
y<sub>2,1</sub>;y<sub>2,2</sub>;y<sub>2,3</sub>\
y<sub>3,1</sub>;y<sub>3,2</sub>;y<sub>3,3</sub>\
y<sub>4,1</sub>;y<sub>4,2</sub>;y<sub>4,3</sub>

---