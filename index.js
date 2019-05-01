function add(a,b){
    return a+b;
  }
  console.log=add(3,4);
  
  function multiply(c,d){
    return c*d;
  } 
  console.log=multiply(2,3);
  
  function power(e,f){
    return e**f;
  }
  power(3,4);
  
  function factorial(n){
    if (n===0){
      return 1;
    }
    return n * factorial(n - 1);
  }
  console.log=factorial(4);
  
  function fibonacci(g){
   let fibarr = [0,1,1,2];
   for(let i = 3; i < g; i++) {
     fibarr.push(fibarr[i - 1] + fibarr[i])
     
   }
   return fibarr[g]
  }
  fibonacci(8);