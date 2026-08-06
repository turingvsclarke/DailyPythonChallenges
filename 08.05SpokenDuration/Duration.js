function getSpokenDuration(seconds) {
  let hours=Math.floor(seconds/3600);
  seconds=seconds%3600;
  let minutes=Math.floor(seconds/60);
  seconds=seconds%60;
  let hString=hours>0?`${hours} hour${hours==1?"":"s"}`:"";
  let mString=minutes>0?`${minutes} minute${minutes==1?"":"s"}`:"";
  let sString=seconds>0?`${seconds} second${seconds==1?"":"s"}`:"";

  if(hString!=""&&mString!=""&&sString!=""){
    return hString+", "+mString+" and "+sString;
  }
  let strings=[hString,mString,sString];

  for(let i=0;i<3;i++){
    if(strings[i]!=""){
      for(let j=i+1;j<3;j++){
        if(strings[j]!=""){
          return strings[i]+" and "+strings[j];
        }
      }
      return strings[i];
    }
  }
}