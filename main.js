
let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach(span => {

  span.addEventListener("click", (e) => {

    if (e.target.classList.contains("check-item")) {

      checkItem();

    }

    if (e.target.classList.contains("add-item")) {

      addItem();

    }

    if (e.target.classList.contains("delete-item")) {

      deleteItem();

    }

    if (e.target.classList.contains("show-items")) {

      showItems();

    }

  })

});

function showMessage() {

  results.innerHTML = 'Input Cant Be Empty';

}

function checkItem() { 

  if (theInput.value !== "") {

    if (localStorage.getItem(theInput.value)) {

      results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;

    } else {

      results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;

    }

  } else {

    showMessage();

  }

}



function addItem() { 

    if (theInput.value !== "") {
  
      localStorage.setItem(theInput.value , "test")
  
        results.innerHTML = ` local Storage Item now have <span>${theInput.value}</span>`;
        theInput.value = ""
    
  
    } else {
  
      showMessage();
  
    }
  
  }



  function deleteItem() { 

    if (theInput.value !== "") {

        if (localStorage.getItem(theInput.value)) {
            localStorage.removeItem(theInput.value)
            results.innerHTML = `Local Storage Item Called <span>${theInput.value}</span> deleted`;
            theInput.value = ""
        } else {
    
          results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;
    
        }
    
      } else {
    
        showMessage();
    
      }
  
  }




  function showItems() { 
  if(localStorage.length){
    results.innerHTML = ""

    for (const [key, value] of Object.entries(localStorage)) {
        results.innerHTML += `<span class="keys">${key}</span> ` 
    }
  }
else{
results.innerHTML = "local stoarge is empty"

}
  }