function isValidNonogram(clue, cells) {
  cells=cells.map(x=>x==0?" ":x);
  cells=cells.join("");
  cells=cells.trim();
  cells=cells.split(/\s+/);
  if(cells.length!=clue.length){
    return false;
  }
  
  for(let i=0;i<clue.length;i++){
    if(clue[i]!=cells[i].length){
      return false;
    }
  }
  return true;

}