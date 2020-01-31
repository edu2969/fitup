Template.camara.events({
  "click .marco-controles i"(e) {
    var item = e.currentTarget.classList[1];    
    UIUtils.toggleClass('marco-controles i', item, 'activo');
    switch(item) {
      case "pause": console.log("Pause"); break;
      case "atras": console.log("<<"); break;
      case "adelante": console.log(">>"); break;
      case "play": console.log("Play"); break;
    }
  }
})