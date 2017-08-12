import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      fooId: params.fooId
    };
  },

  actions: {
    onCreateClick(type) {
      Ember.assert('`type` should be defined', (type !== undefined));
      this.transitionTo(`parent.create-${type}`);
    }
  }
});
