var btn = document.getElementById("addBtn");

btn.addEventListener("click", addToTable);

grandtotalArray =new Array();
let grandTotal = 0;
    
function addToTable(){

    var product = document.getElementById("product").value;
    var price = document.getElementById("price").value;
    var qty = document.getElementById("qty").value;
    var table = document.getElementById("table2") ;

    var total = price * qty;
    
    if(product=="" || price=="" || qty==""){
        alert("plz dont left the text field empty");
    }
    else{
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = product;
        cell2.innerHTML = qty;
        cell3.innerHTML = price;
        cell4.innerHTML = total;

        grandtotalArray.push(total)

        document.getElementById("product").value = "";
        document.getElementById("price").value="";
        document.getElementById("qty").value="";
        console.log(grandtotalArray);
        
    }


}

    
document.getElementById("grandBtn").addEventListener("click",grandT);

    function grandT(){

      var table= document.getElementById("table2");

        for (var x in grandtotalArray){
            grandTotal = grandTotal + grandtotalArray[x];
            console.log(x + grandtotalArray[x])
        }
   

        document.getElementById("grandText").innerHTML = grandTotal;
        grandTotal = 0
    }
   


