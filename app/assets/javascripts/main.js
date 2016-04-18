var ready;
ready = function() {
/* ######################" TEST CIRCLE PROGESS JS 1er CIRCLE #################*/
$(function(){
  var $ppc = $('.progress-pie-chart'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/100;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents span').html(percent+'%');
});
});
$(document).ready(ready);
$(document).on('page:load', ready);
/* ######################## 2nd pourcentage CIRCLE PROGRESS ########################*/
$(function(){
  var $ppc = $('.progress-pie-chart2'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/100;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $('.ppc-progress-fill2').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents2 span.deux').html(percent+'%');
});
/* #################### THIRD pourcentage CIRCLE PROGRESS ####################*/
$(function(){
  var $ppc = $('.progress-pie-chart3'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/100;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $('.ppc-progress-fill3').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents3 span.trois').html(percent+'%');
});

/*   ###################  FOUR pourcentage CIRCLE PROGRESS  ###################*/
$(function(){
  var $ppc = $('.progress-pie-chart4'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/100;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $('.ppc-progress-fill4').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents4 span.quatre').html(percent+'%');
});

/* ######################## 5ième pourcentage CIRCLE PROGRESS ########################*/
$(function(){
  var $ppc = $('.progress-pie-chart5'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/100;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $('.ppc-progress-fill5').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents5 span.cinq').html(percent+'%');
});

/* ######################## 6ième pourcentage CIRCLE PROGRESS ########################*/
$(function(){
  var $ppc = $('.progress-pie-chart6'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/100;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $('.ppc-progress-fill6').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents6 span.six').html(percent+'%');
});

/* ######################## 7ième pourcentage CIRCLE PROGRESS ########################*/
$(function(){
  var $ppc = $('.progress-pie-chart7'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/100;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $('.ppc-progress-fill7').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents7 span.sept').html(percent+'%');
});

/* ######################## BUTTON SCROLLTOP #################################*/
$(document).ready( function () {
    //	Add return on top button
    $('body').append('<div id="returnOnTop" title="Retour en haut">&nbsp;</div>');

    //	On button click, let's scroll up to top
    $('#returnOnTop').click( function() {
	$('html,body').animate({scrollTop: 0}, 'slow');
    });
});

$(window).scroll(function() {
    //	If on top fade the bouton out, else fade it in
    if ( $(window).scrollTop() == 0 )
	$('#returnOnTop').fadeOut();
    else
	$('#returnOnTop').fadeIn();
});
