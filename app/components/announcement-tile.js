import Ember from 'ember';

export default Ember.Component.extend({
    isAnnouncementShowing: false,
  actions: {
    announcementsShow: function() {
      this.set('isAnnouncementShowing', true);
    },
    announcementsHide: function() {
      this.set('isAnnouncementShowing', false);
    },
    delete(announcement) {
      if (confirm("are you sure you want to delete this announcement?")) {
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
