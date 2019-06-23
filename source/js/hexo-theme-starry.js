$(document).ready(function() {
  const MDCRipple = mdc.ripple.MDCRipple
  document.querySelectorAll('.mdc-ripple-surface').forEach(el => {
    MDCRipple.attachTo(el)
  })
  // mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'))
})