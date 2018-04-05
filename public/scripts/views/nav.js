'use strict';

var app = app || {};

(function(module){
  var pageView = {};

  pageView.about = () => {
    $('.tab-content').hide();
    $('.about').show();
  };

  pageView.home = () => {
    //TODO fill with jquery hides and shows related to classes
    $('.tab-content').hide();
    $('.home').show();
  };

  pageView.resume = () => {
    //TODO fill with jquery hides and shows related to classes
    $('.tab-content').hide();
    $('.resume').show();
  };

  pageView.portfolio = () => {
    //TODO fill with jquery hides and shows related to classes
    $('.tab-content').hide();
    $('.portfolio').show();
  };

  pageView.contact = () => {
    //TODO fill with jquery hides and shows related to classes
    $('.tab-content').hide();
    $('.contact').show();
  };
  module.pageView = pageView;
}(app));
