Template.login.rendered = function() {
  UIUtils.toggleVisible('formulario', 'login');
}

Template.login.helpers({
});

Template.login.events({
  "click .formulario button"() {
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
  }
});