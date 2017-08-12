import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
        columns: [
          {
            propertyName: 'something',
            routeName: 'foo.bar',
            title: 'Goto Bar routes'
          },
          {
            propertyName: 'somewhere',
            routeName: 'foo.baz',
            title: 'Goto baz routes'
          }
        ],
        data: [
          {
            id: '1',
            something: 'Foo 1',
            somewhere: 'Bar 1'
          },
          {
            id: '2',
            something: 'Foo 2',
            somewhere: 'Bar 2'
          }
        ],
        customMessages: {}
    }
  }
});
