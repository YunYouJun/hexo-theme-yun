function debounce(func, wait, immediate) {
  var timeout
  return function () {
    var context = this
    var args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

function throttle(func, wait, mustRun) {
  var timeout
  var startTime = new Date()

  return function () {
    var context = this
    var args = arguments
    var curTime = new Date()

    clearTimeout(timeout)
    if (curTime - startTime >= mustRun) {
      func.apply(context, args)
      startTime = curTime
    } else {
      timeout = setTimeout(func, wait)
    }
  }
}

Starry.utils = {
  /**
   * Transform embedded video to support responsive layout.
   * @see http://toddmotto.com/fluid-and-responsive-youtube-and-vimeo-videos-with-fluidvids-js/
   */
  embeddedVideoTransformer: function() {
    var $iframes = $('iframe');

    // Supported Players. Extend this if you need more players.
    var SUPPORTED_PLAYERS = [
      'www.youtube.com',
      'player.vimeo.com',
      'player.youku.com',
      'music.163.com',
      'www.tudou.com'
    ];
    var pattern = new RegExp(SUPPORTED_PLAYERS.join('|'));

    function getDimension($element) {
      return {
        width : $element.width(),
        height: $element.height()
      };
    }

    function getAspectRadio(width, height) {
      return height / width * 100;
    }

    $iframes.each(function() {
      var iframe = this;
      var $iframe = $(this);
      var oldDimension = getDimension($iframe);
      var newDimension;

      if (this.src.search(pattern) > 0) {

        // Calculate the video ratio based on the iframe's w/h dimensions
        var videoRatio = getAspectRadio(oldDimension.width, oldDimension.height);

        // Replace the iframe's dimensions and position the iframe absolute
        // This is the trick to emulate the video ratio
        $iframe.width('100%').height('100%')
          .css({
            position: 'absolute',
            top     : '0',
            left    : '0'
          });

        // Wrap the iframe in a new <div> which uses a dynamically fetched padding-top property
        // based on the video's w/h dimensions
        var wrap = document.createElement('div');
        wrap.className = 'fluid-vids';
        wrap.style.position = 'relative';
        wrap.style.marginBottom = '20px';
        wrap.style.width = '100%';
        wrap.style.paddingTop = videoRatio + '%';
        // Fix for appear inside tabs tag.
        (wrap.style.paddingTop === '') && (wrap.style.paddingTop = '50%');

        // Add the iframe inside our newly created <div>
        var iframeParent = iframe.parentNode;
        iframeParent.insertBefore(wrap, iframe);
        wrap.appendChild(iframe);

        // Additional adjustments for 163 Music
        if (this.src.search('music.163.com') > 0) {
          newDimension = getDimension($iframe);
          var shouldRecalculateAspect = newDimension.width > oldDimension.width
                                     || newDimension.height < oldDimension.height;

          // 163 Music Player has a fixed height, so we need to reset the aspect radio
          if (shouldRecalculateAspect) {
            wrap.style.paddingTop = getAspectRadio(newDimension.width, oldDimension.height) + '%';
          }
        }
      }
    });
  }
}

window.debounce = debounce
window.throttle = throttle