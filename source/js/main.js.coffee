#= require_tree ./lib
#= require referrals


$ ->

  $(':not(.nofade) > a').hover(
    ->
      $(this).animate opacity: 0.5, 200
    ->
      $(this).animate opacity: 1.0, 200
  )