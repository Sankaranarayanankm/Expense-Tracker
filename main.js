let form=document.getElementById("form");
let items=document.getElementById("items");


// adding submit event 
form.addEventListener("submit" ,onSubmit);
// adding delete event  
items.addEventListener("click",deleteExpense);
// adding edit event 
items.addEventListener("click", editExpense);

// onsubmit function 
function onSubmit(e){
    e.preventDefault();
    // getting the input values
  let expenseAmount=document.getElementById("amount").value+ " ";
  let dis=document.getElementById("text").value + " ";
  let category=document.getElementById("category").value + " ";
 
  // creating the li node
  let li=document.createElement("li");
  li.className="itemlist";

   //  adding delete expense button
    let btn=document.createElement("button");
    btn.className="deletebutton";
    // adding text node 
    buttonName=document.createTextNode("delete Expense");
    btn.append(buttonName);

    // adding edit button 
    let editbtn=document.createElement("button");
    editbtn.className="editbutton";

    // adding text node to edit button 
    editbtnName=document.createTextNode("edit button");
    editbtn.append(editbtnName);

  // creating text node
  let expenseNode=document.createTextNode(expenseAmount);
  let disNode=document.createTextNode(dis);
  let categoryNode=document.createTextNode(category);

  //   adding to local storage 
  let obj={
    "Amount":expenseAmount,
    "Discription":dis,
    "Catagory":category,
  }
  obj_serialize=JSON.stringify(obj);

  localStorage.setItem(category,obj_serialize);


  li.append(expenseNode ,disNode,categoryNode,btn, editbtn);
  items.append(li);

}



// function delteteExpense
function deleteExpense(e){
    // console.log(1);
    if(e.target.classList.contains("deletebutton")){
        let li=e.target.parentElement;
        items.removeChild(li);
        let itemName=li.childNodes[2].textContent
        localStorage.removeItem(itemName);
    }
    }


// function edit expense 
function editExpense(e){
    if(e.target.classList.contains("editbutton")){
        let li=e.target.parentElement;
        items.removeChild(li);

        // let itemName = li.childNodes[0].textContent;
        let expenseAmount = document.getElementById('amount');
        let dis = document.getElementById('text');
        let category = document.getElementById('category');

       
     
        expenseAmount.value= li.childNodes[0].textContent;
        dis.value=li.childNodes[1].textContent;
        category.value=li.childNodes[2].textContent;

        let itemName=li.childNodes[2].textContent
        localStorage.removeItem(itemName);

    }
}
