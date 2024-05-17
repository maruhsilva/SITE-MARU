function closeHandler() {
    Enabler.reportManualClose(".hamburguer"); 
    Enabler.close(".hamburguer");
  }
  
  document.getElementById(".hamburguer").addEventListener("click", closeHandler, false);