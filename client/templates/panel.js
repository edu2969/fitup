Template.panel.rendered = function () {
  UIUtils.toggleVisible('area', 'agenda');
}

Template.panel.events({
  "click .accion"(e) {
    var item = e.currentTarget.classList[1];
    UIUtils.toggleClass('accion', item, 'activo');
    UIUtils.toggleVisible('area', item);
    if (item == "logros") {
      var width = window.innerWidth;
      var arreglo = [{
        selector: "calorias",
        color: "green",
        valor: 20
  }, {
        selector: "horas",
        color: "red",
        valor: 67
  }, {
        selector: "kilos",
        color: "yellow",
        valor: 40
  }];
      arreglo.forEach(function (item) {
        new DashTimer('.graficos .' + item.selector).init({
          height: width / 3 - 16,
          width: width / 3 - 16,
          start: {
            fill: "white"
          },
          finish: {
            fill: item.color
          },
          values: {
            classes: 'texto-central'
          }
        }).setData([{
          immediate: {
            angle: true
          },
          start: {
            angle: 1,
            fill: item.color
          },
          finish: {
            angle: item.valor,
            fill: item.color
          }
    }, {
          values: {
            show: true
          }
    }]).start(1000, 0, item.valor / 100);
      });
    }
  },
  "click .menu, click .cruz"() {
    document.querySelector(".contenedor-menu").classList.toggle("activo");
  }
});