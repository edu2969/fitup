FlowRouter.route('/', {
  action() {
    BlazeLayout.render('app', { main: 'login' });
  }
});

FlowRouter.route('/panel', {
  action() {
    BlazeLayout.render('app', { main: 'panel' });
  }
});


