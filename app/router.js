import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
// a comment
// branch comment
Router.map(function() {
});

export default Router;
