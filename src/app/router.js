import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/');
  this.route('books');
  this.route('index');
  this.route('addbook');
  this.route('viewbook', { path: "viewbook/:id" });
  this.route('update', { path: "update/:id" });
  this.route('home');
  this.route('contact');
  this.route('about');
  this.route('viewBalance');
  this.route('join');
  this.route('report');
  this.route('participants-balance');
  this.route('customer-payment');
  this.route('driver-panel');
  this.route('cardealer-panel');
});

export default Router;
