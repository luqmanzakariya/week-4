function ubahHuruf(kata) {
  // you can only write your code here!
  //Cara 1
  
  var arr = [];
  for (var i=0; i<kata.length; i++){
      if (kata[i] == 'z'){
        arr[i] = ('`'.charCodeAt())+1;
      }
      else {
        arr[i] = (kata[i].charCodeAt())+1;
      }
  }
  var result = '';
  for (var j=0; j<arr.length; j++){
      result += String.fromCharCode(arr[j]);
  }
  return result;
  
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

