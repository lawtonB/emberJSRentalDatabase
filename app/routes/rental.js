import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
    delete(rental) {
      if (confirm('are you sure you want to delete this rental?')){
          rental.destroyRecord();
          this.transitionTo('index');
        }
      },

      update(rental, params){
        Object.keys(params).forEach(function(key){
          if(params[key]!==undefined) {
            rental.set(key,params[key]);
          }
        });
        rental.save();
        // this.transitionTo('index');
      }
    }
});
