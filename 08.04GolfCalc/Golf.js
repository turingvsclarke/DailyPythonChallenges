function calculateHandicap(scores, pars) {
  let diff=0;
  for(let i=0;i<scores.length;i++){
    diff+=scores[i]-pars[i];
  }
  return Math.round((diff/scores.length)*10)/10;
}