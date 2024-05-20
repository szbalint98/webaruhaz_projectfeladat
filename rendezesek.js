export function rendezArszerint(lista,irany){
   lista.sort(function(a,b){return irany * (a.ar-b.ar)})   
} 

 export function rendezNevszerint(lista){
   lista.sort(function(a, b) {
      if (a.nev < b.nev) return -1; 
      if (a.nev > b.nev) return 1; 
      return 0; 
   });}


  
   

    

  