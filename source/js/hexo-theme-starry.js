$(document).ready(function() {
  const MDCRipple = mdc.ripple.MDCRipple
  document.querySelectorAll('.mdc-ripple-surface, .mdc-button').forEach(el => {
    MDCRipple.attachTo(el)
  })
})