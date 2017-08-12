import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('foo');
  },

  setupController(controller, data) {
    this._super(controller, data);
    this.controllerFor('foo').set('type', 'baz');
  }
});
