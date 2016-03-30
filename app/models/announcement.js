import DS from 'ember-data';

export default DS.Model.extend({
  announcement: DS.attr(),
  weather: DS.attr(),

});
