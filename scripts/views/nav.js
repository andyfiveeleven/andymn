'use strict';

var app = app || {};

(function(module){
  var pageView = {};

  pageView.about = () => {
    $('.tab-content').hide();
    $('.about').show();
    $('html,body').scrollTop(0);
  };

  pageView.home = () => {
    //TODO fill with jquery hides and shows related to classes
    $('.tab-content').hide();
    $('.home').show();
    $('html,body').scrollTop(0);
  };

  pageView.resume = () => {
    //TODO fill with jquery hides and shows related to classes
    $('.tab-content').hide();
    $('.resume').show();
    $('html,body').scrollTop(0);
  };

  pageView.portfolio = () => {
    //TODO fill with jquery hides and shows related to classes
    $('.tab-content').hide();
    $('.portfolio').show();
    $('html,body').scrollTop(0);
  };

  pageView.contact = () => {
    //TODO fill with jquery hides and shows related to classes
    $('.tab-content').hide();
    $('.contact').show();
    $('html,body').scrollTop(0);
  };
  module.pageView = pageView;
}(app));
