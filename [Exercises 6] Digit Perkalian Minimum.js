function digitPerkalianMinimum(angka) {
    // you can only write your code here! 
    var temp = [];
    var pembagi;
    for (var i=0; i<=angka; i++){
      for (var j=0; j<=angka; j++){
        if (i * j == angka){
          pembagi = String(i)+String(j);
          temp.push(pembagi);
        }
      }
    }
    
    var temp2 = [];
    for (var i=0; i<temp.length; i++){
      temp2.push(temp[i].length);
    }
    return Math.min.apply(Math,temp2);  
  }



 
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2