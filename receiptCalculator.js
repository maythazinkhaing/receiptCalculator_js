var btn = document.getElementById("addBtn");

btn.addEventListener("click", addToTable);

grandtotalArray =new Array();
let grandTotal = 0;
var no = 0;

var row =[];
//var height=100;
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
        
        no++;
        var newRow = table.insertRow(table.rows.length);
        row.push(newRow);
        console.log("row"+row);
        var cell0 = newRow.insertCell(0);
        var cell1 = newRow.insertCell(1);
        var cell2 = newRow.insertCell(2);
        var cell3 = newRow.insertCell(3);
        var cell4 = newRow.insertCell(4);

        cell0.innerHTML = no+".";
        cell1.innerHTML = product;
        cell2.innerHTML = qty;
        cell3.innerHTML = price;
        cell4.innerHTML = total;
        
        if(row.length > 0){
           cell4.style.textAlign= "right";
           cell4.style.paddingRight= "40px";
      }
        grandtotalArray.push(total)

        document.getElementById("product").value = "";
        document.getElementById("price").value="";
        document.getElementById("qty").value="";
        console.log(grandtotalArray);
     
        if(row.length > 8){
          var  h = document.getElementById("con").style.height= "auto";
    }
        
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
   


