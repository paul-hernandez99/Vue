window.onload = function changePaddingBotton() {
  var bloque = document.getElementsByClassName('aux')[0];

  activate();

  function activate() {
    var activate = document.getElementsByClassName('btn btn-success btn-lg activate')[0];
    activate.onclick=function() {
      bloque.style.paddingBottom = "0px";
      deactivate();
    }
  }

  function deactivate() {
    var deactivate = document.getElementsByClassName('btn btn-success btn-lg deactivate')[0];
    deactivate.onclick=function() {
      bloque.style.paddingBottom = "80px";
      activate();
    }
  }
}
