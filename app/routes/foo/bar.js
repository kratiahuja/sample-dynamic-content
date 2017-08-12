import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let fooModel = this.modelFor('foo');
    return fooModel;
  },

  setupController(controller, data) {
    this._super(controller, data);
    this.controllerFor('foo').set('type', 'bar');
  }
});
