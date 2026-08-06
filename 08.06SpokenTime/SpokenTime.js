function getSpokenTime(hourAngle, minuteAngle) {
  let mins=Math.floor((minuteAngle/360)*60);
  let h=Math.floor((hourAngle/360)*12);

  switch(mins){
    case 0:
      return `${h} o'clock`
    case 15:
      return `quarter past ${h}`;
    case 30:
      return `half past ${h}`;
    case 45:
      return `quarter to ${h+1}`;
  }
  if(mins<30){
    return `${mins} minutes past ${h}`;
  }else{
    return `${60-mins} minutes to ${h+1}`;
  }
}