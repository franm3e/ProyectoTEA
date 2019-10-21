function check(event) {
   event.preventDefault();
   var url = document.location.href;
   var newurl = url.substring(0, url.lastIndexOf('/')+1);

   if ($("#userEmail").val() == 'profesional'){
      newurl = newurl + "usuariosP.html";
      location.assign(newurl);
   }
   if ($("#userEmail").val() == 'familiar'){
      newurl = newurl + "panelControlF.html";
      location.assign(newurl);
   }
};
