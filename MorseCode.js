// In this project, we take in a proposed magic square and return the number that would make it a proper magic square 

function solveMagicSquare(grid) {

  // This function validates our grid, checking rows, columns, and diagonals to make sure they all sum to the same thing
  function validateGrid(grid){
    valid=true;
    let sum=grid[0][0]+grid[0][1]+grid[0][2];
    // Check the diagonals
    let diag1=grid[0][0]+grid[1][1]+grid[2][2];
    let diag2=grid[0][2]+grid[1][1]+grid[2][0];

    if(diag1!=sum || diag2!=sum){
      return false;
    }
    
    for(let i=0;i<3;i++){
      let row=grid[i][0]+grid[i][1]+grid[i][2];
      let col=grid[0][i]+grid[1][i]+grid[2][i];
      if(sum!=row || sum!=col){
        return false;
      }
    }
    return true;
  }

  // Go through each row looking for a zero, build a grid not having one
  var zPlace;
  var sum=0;
  for(let i=0;i<3;i++){
    let zIndex = grid[i].indexOf(0);
    if(zIndex>-1){
      zPlace=[i,zIndex];
    }else{
      sum=grid[i][0]+grid[i][1]+grid[i][2];
    }
  }

  // Put a number for the zero that would make the row have the same sum as the others
  grid[zPlace[0]][zPlace[1]]=sum-(grid[i][0]+grid[i][1]+grid[i][2]);

  if(validateGrid(grid)){
    return grid[zPlace[0]][zPlace[1]];
  }else{
    return "impossible";
  }
}