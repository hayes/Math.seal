;(function () {
  var url = './seal.mp3'
  if (Math.seal) return

  Math.seal = function seal (n, node) {
    if (context) playSeal(context)
    return 5341
  }

  function playSeal (node) {
    var request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.responseType = 'arraybuffer'

    request.onload = function() {
      context.decodeAudioData(request.response, function (buffer) {
        var source = context.createBufferSource()
        source.buffer = buffer
        source.connect(node)
        source.start(0)                    
      }, console.error.bind(console))
    }

    request.send()
  }
})();
