const sidebarWidth = '320px'
$(function () {
  let isSmall = $(window).width() < 768
  $('.hamburger').on('click', function() {
    let isOpen = $(this).hasClass('is-active')
    isOpen ? $(this).removeClass('is-active') : $(this).addClass('is-active')
    if (isOpen) {
      $('#sidebar').velocity('stop').velocity({
        translateX: '0px'
      }, {
        duration: 200
      })
      if (!isSmall) {
        $('body').velocity('stop').velocity({
          paddingLeft: '0px'
        }, {
          duration: 200
        })
      }
    } else {
      $('#sidebar').velocity('stop').velocity({
        translateX: sidebarWidth
      }, {
        duration: 200
      })
      if (!isSmall) {
        $('body').velocity('stop').velocity({
          paddingLeft: sidebarWidth
        }, {
          duration: 200
        })
      }
    }
  })
  if ($('#sidebar').hasClass('is-post')) {
    if (!isSmall) {
      $('.hamburger').trigger('click')
    }
  }
})