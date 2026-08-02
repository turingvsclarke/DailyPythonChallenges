function getFoodChain(pairs) {
  // Find the apex
  var pDict={};
  pairs.forEach(p=>pDict[p[0]]=p[1]);
  let pred=Object.keys(pDict).filter(p=>!Object.values(pDict).includes(p))[0];

  console.log(pred);

  var chain=[];
  chain.push(pred);
  while(pDict[pred]){
    chain.push(pDict[pred])
    pred=pDict[pred];
  }

  return chain;
}