#= require_tree ./lib
#= require referrals


$ ->

  $('a:not(.nofade)').hover(
    ->
      $(this).animate opacity: 0.5, 200
    ->
      $(this).animate opacity: 1.0, 200
  )