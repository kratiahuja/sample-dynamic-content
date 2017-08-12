import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('parent', {path: '/', resetNamespace: true}, function() {
    this.route('foos', {path: 'foos', resetNamespace: true});
    this.route('foo', { path: 'foo/:fooId', resetNamespace: true }, function() {
      this.route('bar');
      this.route('baz');
    });
    this.route('create-bar');
    this.route('create-baz');
  });
});

export default Router;
