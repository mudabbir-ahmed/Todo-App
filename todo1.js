
// declearing global variables
var array1 = [];
var tr;
var index;
//a function for inserting values in array
function todo() {
var inputData = document.getElementById("input").value;
if(inputData == "" || inputData ==" ")
{
    alert ('enter name');
}
else
{
    array1.push(inputData);
}
showtbl();
document.getElementById("input").focus();
};
//a function for showing our table data
function showtbl()
{
var data = "";
for(var i = 0; i < array1.length; i++)
{
    data += "<tr><td>"+ (i+1) +"</td>"+"<td>"+ array1[i] +"</td><td><a href='javascript:void(0);'"+
    "onClick='remove(this)'>"+
    "<i class='fa fa-trash' aria-hidden='true'></i></a></td></tr>" ;
    document.getElementById("list").innerHTML= data;
}


data = "";
document.getElementById("input").value = ""; 

};
//a function for deleting a row
function remove(row)
{  
    tr = row.parentElement.parentElement;
    index = tr.rowIndex-1;
    array1.splice(index,1);
     tr.parentElement.removeChild(tr);
     showtbl();  
};

