# Bucket Fill Challenge

We will go through and visit each member of the grid and its neighbors in turn. When we are at a member of the grid, we add any neighbors to a stack. We visit the next neighbor and check all valid neighbors of IT. This is a depth first search. 

Visit a. Get a list of all a's neighbors, go to a neighbor and list each of its neighbors, EVENTUALLY go back and visit the remaining neighbors of a. 