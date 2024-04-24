String.prototype.replaceAll = function(search, replacement ){ 
    var target = this; 
    return target.replace(new RegExp(search,'g'),replacement); 
}; 
function lotindan_kirilga(text){ 
    var lotin = text 
    .replaceAll("A", "A") 
    .replaceAll("B", "Б") 
    .replaceAll("D", "Д") 
    .replaceAll("E", "Э") 
    .replaceAll("F", "Ф") 
    .replaceAll("G", "Г") 
    .replaceAll("H", "Ҳ") 
    .replaceAll("I", "И") 
    .replaceAll("J", "Ж") 
    .replaceAll("K", "К") 
    .replaceAll("L", "Л") 
    .replaceAll("M", "М") 
    .replaceAll("N", "Н") 
    .replaceAll("O", "О") 
    .replaceAll("P", "П") 
    .replaceAll("Q", "Қ") 
    .replaceAll("R", "Р") 
    .replaceAll("S", "С") 
    .replaceAll("T", "Т") 
    .replaceAll("U", "У") 
    .replaceAll("V", "В") 
    .replaceAll("X", "X") 
    .replaceAll("Y", "Е") 
    .replaceAll("Z", "З") 
    .replaceAll("O'", "Ў") 
    .replaceAll("G'", "Ҳ") 
    .replaceAll("Sh", "Ш") 
    .replaceAll("Ch", "Ч") 
 
    .replaceAll("a","a") 
    .replaceAll("b","б") 
    .replaceAll("d","д") 
    .replaceAll("e","э") 
    .replaceAll("f","ф") 
    .replaceAll("g","г") 
    .replaceAll("h","ҳ") 
    .replaceAll("i","и") 
    .replaceAll("j","ж") 
    .replaceAll("k","к") 
    .replaceAll("l","л") 
    .replaceAll("m","м") 
    .replaceAll("n","н") 
    .replaceAll("o","o") 
    .replaceAll("p","п") 
    .replaceAll("q","қ") 
    .replaceAll("r","р")       
    .replaceAll("s","с") 
    .replaceAll("t","т") 
    .replaceAll("u","у") 
    .replaceAll("v","в") 
    .replaceAll("x","x") 
    .replaceAll("y","й") 
    .replaceAll("z","з") 
    .replaceAll("o'","ў") 
    .replaceAll("g'","ғ") 
    .replaceAll("sh","ш") 
    .replaceAll("ch","ч") 
return lotin; 
} 
function tarjima(){ 
    var input = document.getElementById("lotinmatn").value; 
    var output = document.getElementById("kirilmatn").innerHTML = lotindan_kirilga(input); 
}
