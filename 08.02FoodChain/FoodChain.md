# Food Chain

The instructions for this assignment is to construct a food chain based upon the given array of predator/prey pairs. We start by creating a dictionary with predators as keys and their prey as values. We then find the apex by sorting out what has no prey, and begin pushing these predators onto a new array until there are no predators left.