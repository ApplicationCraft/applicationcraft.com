#= require_tree ./lib
#= require referrals


$ ->

  $(':not(.nofade) > a').hover(
    ->
      $(this).animate opacity: 0.6, 200
    ->
      $(this).animate opacity: 1.0, 200
  )


$ ->
  $(document).pjax 'a[data-pjax]'

