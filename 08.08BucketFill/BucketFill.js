function bucketFill(grid, targetColor) {

  // Begin looping through the array, find the first non-target colored cell
  let count=0;
  for(let i=0;i<grid[0].length;i++){
    for(let j=0;j<grid.length;j++){
      // Circle through and find things
      if(grid[i,j]!=targetColor){
        // Add on the target color
        // Do a fill click on this one
        fillClick([i,j]);
        count+=1;
      }
    }
  }

  function fillClick([i,j]){
    let currentColor=grid[i,j];
    // Initialize a stack for filling neighbors
    let toVisit=[[i,j]];

    while(toVisit.length>0){
      // Remove the next one in the queue
      let x=toVisit.pop();
      // Change the color of the current one
      grid[x[0],x[1]]=targetColor;
      // Add on any neighbors that are the current color
      for(const y of [[i-1,j],[i+1,j],[i,j+1],[i,j-1]]){
        if(grid[y[0],y[1]]==currentColor){
          toVisit.push(x);
        }
      }
    } 
  }

  return count;
}