function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if (arrPenumpang.length == 0){
        return [];
    }
    else {
        var result = [];        
        var bayar = 0;
        for (var i=0; i<arrPenumpang.length; i++){
            var obj = {};
            for (var j=0; j<rute.length; j++){
                if (arrPenumpang[i][1] == rute[j]){
                    var mulai = j;
                }
                else if (arrPenumpang[i][2] == rute[j]){
                    var sampe = j;
                }
            }
            bayar = (sampe - mulai)*2000;
            obj.penumpang = arrPenumpang[i][0];
            obj.naikDari = arrPenumpang[i][1];
            obj.tujuan = arrPenumpang[i][2];
            obj.bayar = bayar;
            result.push(obj);
        }
        return result;
    }
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]