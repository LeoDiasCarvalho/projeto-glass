function calcTotal(){
    let quant = parseInt(document.getElementById("idQuant").value);
    let total = quant * 1500;

    document.getElementById("idTotal").value = total;
}