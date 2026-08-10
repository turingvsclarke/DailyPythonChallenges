function mixPaint(bucket1, bucket2) {
  let c1=bucket1['color'];
  let f1=bucket1['fullness'];
  let c2=bucket2['color'];
  let f2=bucket2['fullness'];

  let mixed=[];

  for(let i=0;i<c1.length;i++){
    let color=(c1[i]*f1+c2[i]*f2)/(f1+f2);
    mixed.push(Math.round(color));
    
  }
  return mixed;
}