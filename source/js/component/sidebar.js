const sidebarWidth = '320px'
$(function () {
  $('.hamburger').on('click', function() {
    let isOpen = $(this).hasClass('is-active')
    isOpen ? $(this).removeClass('is-active') : $(this).addClass('is-active')
    if (isOpen) {
      // close
      $('#sidebar').velocity('stop').velocity({
        translateX: '0px'
      }, {
        duration: 400,
        easing: 'easeInOutQuint'
      })
      if (!isSmall()) {
        $('.sidebar-translate').velocity('stop').velocity({
          paddingLeft: '0px'
        }, {
          duration: 400,
          easing: 'easeInOutQuint'
        })
      }
    } else {
      // open
      $('#sidebar').velocity('stop').velocity({
        translateX: sidebarWidth
      }, {
        duration: 400,
        easing: 'easeInOutQuint'
      })
      if (!isSmall()) {
        $('.sidebar-translate').velocity('stop').velocity({
          paddingLeft: sidebarWidth
        }, {
          duration: 400,
          easing: 'easeInOutQuint'
        })
      }
    }
  })
  if ($('#sidebar').hasClass('is-post')) {
    if (!isSmall()) {
      $('.hamburger').trigger('click')
    }
  }
  // click sidebar nav
  $('.sidebar-nav li').on('click', function() {
    var item = $(this)
    var activeTabClassName = 'sidebar-nav-active'
    var activePanelClassName = 'sidebar-panel-active'
    if (item.hasClass(activeTabClassName)) return
    var currentTarget = $('.' + activePanelClassName)
    var target = $('.' + item.data('target'))
    // currentTarget.hide()
    currentTarget.removeClass(activePanelClassName)
    // target.show()
    target.addClass(activePanelClassName)
    item.siblings().removeClass(activeTabClassName)
    item.addClass(activeTabClassName)
  })
})