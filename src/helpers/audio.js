let ctx = new AudioContext()
export let analyser = ctx.createAnalyser()
export let frequencyData = new Uint8Array([])

navigator.webkitGetUserMedia({ audio: true },

  stream => {
    ctx.createMediaStreamSource(stream).connect(analyser)
    frequencyData = new Uint8Array(analyser.frequencyBinCount)
  },

  err => {
    console.log(err)
  }
)
