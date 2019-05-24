alert("conn")
         var rIndex,
         table=document.getElementById("table");
         //check the empty input
         function checkEmptyInput()
         {
            var isEmpty = false,
            sn=document.getElementById("sn").value,
            explain=document.getElementById("explain").value,
            debit=document.getElementById("debit").value,
            credit=document.getElementById("credit").value,
            balance=document.getElementById("balance").value;

            if(sn === ""){
               alert("sn can't be empty");
               isEmpty=true;
            }
            else if(explain===""){
               alert("Explanations can't be empty");
               isEmpty=true;
            }
            else if(credit=="$"&&debit=="$"){
               alert("credit or debit cannot be empty any one should be given");
               isEmpty=true;

            }
            else if(balance===""){
               alert("balance can't be empty");
               isEmpty=true;
            }
            return isEmpty;
         }

         function addHtml(){
            if(!checkEmptyInput()){
               var newRow=table.insertRow(table.length),
               r0=newRow.insertCell(0),
               r1=newRow.insertCell(1),
               r2=newRow.insertCell(2),
               r3=newRow.insertCell(3),
               r4=newRow.insertCell(4),
            
               sn=document.getElementById("sn").value,
               explain=document.getElementById('explain').value,
               debit=document.getElementById("debit").value,
               credit=document.getElementById("credit").value,
               balance=document.getElementById("balance").value;

            r0.innerHTML=sn;
            r1.innerHTML=explain;
            r2.innerHTML=debit;
            r3.innerHTML=credit;
            r4.innerHTML=balance;

            selectedRowToModal();
            }
         }
         function selectedRowToModal()
         {
            for(var i=1;i<table.rows.length; i++)
            {
            table.rows[i].onclick=function()
               {
            /*   $(document).ready(function(){
               $("add-btn").click(function(){
               $("#exampleModalCenter").modal();
               });
               });*/
               rIndex=this.rowIndex;
               document.getElementById("sn").value=this.cell[0].innerHTML;
               document.getElementById("explain").value.cell(1).innerHTML;
               document.getElementById("debit").value.cell(2).innerHTML;
               document.getElementById("credit").value.cell(3).innerHTML;
               document.getElementById("balance").value.cell(4).innerHTML;
            };

            }
         }
         selectedRowToModal();

         function editHtml()
         {
            var sn=document.getElementById("sn").value,
            explain=document.getElementById("explain").value,
            debit=document.getElementById("debit").value,
            credit=document.getElementById("credit").value,
            balance=document.getElementById("balance").value;
            if(!checkEmptyInput()){
               table.rows[rIndex].cell[0].innerHTML=sn;
               table.rows[rIndex].cell[1].innerHTML=explain;
               table.rows[rIndex].cell[2].innerHTML=debit;
               table.rows[rIndex].cell[3].innerHTML=credit;
               table.rows[rIndex].cell[4].innerHTML=balance;
            }
         }
         function removeRow()
         {
            table.deleteRow(rIndex);
            document.getElementById("sn").value="";
            document.getElementById("explain").value="";
            document.getElementById("debit").value="";
            document.getElementById("credit").value="";
            document.getElementById("balance").value="";
         }