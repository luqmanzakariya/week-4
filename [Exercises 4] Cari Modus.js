function cariModus(arr) {
  // you can only write your code here!
  var angka = [];
  var jumlah = [];
  arr.sort(function(a,b){return a-b});
  for (var i=0; i<arr.length; i++){
      if (i == 0){
          angka.push(arr[i]);
          jumlah.push(1);
      } else{
          if (arr[i] == arr[i-1]){
              jumlah[jumlah.length- 1]++;
          } else {
              angka.push(arr[i]);
              jumlah.push(1);
          }
      }
  }
  if (angka.length == arr.length){
      return -1;
  } else if (angka.length == 1){
      return -1;
  } else {
      var terbanyak = Math.max.apply(Math,jumlah);
      var indexTerbanyak = jumlah.indexOf(terbanyak);
      return angka[indexTerbanyak];
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1