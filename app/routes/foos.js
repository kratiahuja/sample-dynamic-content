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
            something: 'Bar 1',
            somewhere: 'Baz 1'
          },
          {
            id: '2',
            something: 'Bar 2',
            somewhere: 'Baz 2'
          }
        ],
        customMessages: {}
    }
  }
});
