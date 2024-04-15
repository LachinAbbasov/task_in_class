document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById("counter");
    const increaseBtn = document.getElementById("increaseBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");
  
    let count = JSON.parse(localStorage.getItem("Count")) || 0;
    
    counter.textContent = count;


  
    increaseBtn.addEventListener("click", function() {
      count++;
      counter.textContent = count;
      localStorage.setItem("Count",JSON.stringify(count));
      if (count > 0) {
        decreaseBtn.removeAttribute("disabled");
      }
    });
  
    decreaseBtn.addEventListener("click", function() {
      count--;
      counter.textContent = count;
      localStorage.setItem("Count",JSON.stringify(count));
      if (count === 0) {
        decreaseBtn.setAttribute("disabled", "true");
      }
    });
  
    resetBtn.addEventListener("click", function() {
      count = 0;
      counter.textContent = count;
      localStorage.setItem("Count",JSON.stringify(count));
      decreaseBtn.setAttribute("disabled", "true");
    });
  });
  