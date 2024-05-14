function closeHandler() {
    Enabler.reportManualClose(); 
    Enabler.close();
  }
  
  document.getElementById('hamburguer').addEventListener('click', closeHandler, false);