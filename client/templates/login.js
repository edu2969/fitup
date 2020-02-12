Template.login.rendered = function() {
  UIUtils.toggleVisible('formulario', 'login');
}

Template.login.helpers({
});

Template.login.events({
  "click .formulario #btn-login"() {
    FlowRouter.go("/panel");
  },
  "click #link-registrame"() {
    UIUtils.toggleVisible('formulario', 'registrame');
  },
  "click #link-olvido"() {
    UIUtils.toggleVisible('formulario', 'olvido');
  },
  "click #link-login"() {
    UIUtils.toggleVisible('formulario', 'login');
  },
  "click .formulario #btn-enviar, click .formulario #btn-registrar"() {
    UIUtils.toggleVisible('formulario', 'login');
  }
});