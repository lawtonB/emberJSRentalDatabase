import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcement'),
      cities: this.store.findAll('city')
    });

  },

  actions: {

    // save3(params) {
    //   var newRental = this.store.createRecord('rental', params);
    //   newRental.save();
    //   this.transitionTo('index');
    // },

    // update(rental, params){
    //   Object.keys(params).forEach(function(key){
    //     if(params[key]!==undefined) {
    //       rental.set(key,params[key]);
    //     }
    //   });
    //   rental.save();
    //   this.transitionTo('index');
    // },
    saveAnnouncement3(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('index');
    },
    destroyAnnouncement(announcement){
      announcement.destroyRecord();
      this.transitionTo('index');
    },
    saveCity(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    }
  }
});
