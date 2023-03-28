/**
 * https://codepen.io/juliangarnier/pen/gmOwJX
 * custom by hexo-theme-yun @YunYouJun
 */

interface MinMax {
  min: number
  max: number
}

interface FireworksConfig {
  colors: string[]
  numberOfParticles: number
  orbitRadius: MinMax
  circleRadius: MinMax
  diffuseRadius: MinMax
  animeDuration: MinMax
}

/**
 * 创建烟花
 * @param config
 */
function createFireworks(config: Partial<FireworksConfig>) {
  const defaultColors = ['102, 167, 221', '62, 131, 225', '33, 78, 194']
  const defaultConfig: FireworksConfig = {
    colors: defaultColors,
    numberOfParticles: 20,
    orbitRadius: {
      min: 50,
      max: 100,
    },
    circleRadius: {
      min: 10,
      max: 20,
    },
    diffuseRadius: {
      min: 50,
      max: 100,
    },
    animeDuration: {
      min: 900,
      max: 1500,
    },
  }
  config = Object.assign(defaultConfig, config)

  let pointerX = 0
  let pointerY = 0

  // sky blue
  const colors = config.colors || defaultColors

  const canvasEl = document.querySelector('.fireworks') as HTMLCanvasElement
  const ctx = canvasEl.getContext('2d')

  /**
   * 设置画布尺寸
   */
  function setCanvasSize(canvasEl) {
    canvasEl.width = window.innerWidth
    canvasEl.height = window.innerHeight
    canvasEl.style.width = `${window.innerWidth}px`
    canvasEl.style.height = `${window.innerHeight}px`
  }

  /**
   * update pointer
   * @param {TouchEvent} e
   */
  function updateCoords(e) {
    pointerX
      = e.clientX
      || (e.touches[0] ? e.touches[0].clientX : e.changedTouches[0].clientX)
    pointerY
      = e.clientY
      || (e.touches[0] ? e.touches[0].clientY : e.changedTouches[0].clientY)
  }

  function setParticleDirection(p) {
    const angle = (window.anime.random(0, 360) * Math.PI) / 180
    const value = window.anime.random(
      config.diffuseRadius.min,
      config.diffuseRadius.max,
    )
    const radius = [-1, 1][window.anime.random(0, 1)] * value
    return {
      x: p.x + radius * Math.cos(angle),
      y: p.y + radius * Math.sin(angle),
    }
  }

  /**
   * 在指定位置创建粒子
   * @param {number} x
   * @param {number} y
   * @returns
   */
  function createParticle(x: number, y: number) {
    const p = {
      x,
      y,
      color: `rgba(${
        colors[window.anime.random(0, colors.length - 1)]
      },${
        window.anime.random(0.2, 0.8)
      })`,
      radius: window.anime.random(config.circleRadius.min, config.circleRadius.max),
      endPos: null,
      draw() {},
    }
    p.endPos = setParticleDirection(p)
    p.draw = function () {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true)
      ctx.fillStyle = p.color
      ctx.fill()
    }
    return p
  }

  function createCircle(x: number, y: number) {
    const p = {
      x,
      y,
      color: '#000',
      radius: 0.1,
      alpha: 0.5,
      lineWidth: 6,
      draw() {},
    }
    p.draw = function () {
      ctx.globalAlpha = p.alpha
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true)
      ctx.lineWidth = p.lineWidth
      ctx.strokeStyle = p.color
      ctx.stroke()
      ctx.globalAlpha = 1
    }
    return p
  }

  function renderParticle(anim) {
    for (let i = 0; i < anim.animatables.length; i++)
      anim.animatables[i].target.draw()
  }

  function animateParticles(x, y) {
    const circle = createCircle(x, y)
    const particles = []
    for (let i = 0; i < config.numberOfParticles; i++)
      particles.push(createParticle(x, y))

    window.anime
      .timeline()
      .add({
        targets: particles,
        x(p) {
          return p.endPos.x
        },
        y(p) {
          return p.endPos.y
        },
        radius: 0.1,
        duration: window.anime.random(
          config.animeDuration.min,
          config.animeDuration.max,
        ),
        easing: 'easeOutExpo',
        update: renderParticle,
      })
      .add(
        {
          targets: circle,
          radius: window.anime.random(config.orbitRadius.min, config.orbitRadius.max),
          lineWidth: 0,
          alpha: {
            value: 0,
            easing: 'linear',
            duration: window.anime.random(600, 800),
          },
          duration: window.anime.random(1200, 1800),
          easing: 'easeOutExpo',
          update: renderParticle,
        },
        0,
      )
  }

  const render = window.anime({
    duration: Infinity,
    update: () => {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
    },
  })

  document.addEventListener(
    'mousedown',
    (e) => {
      render.play()
      updateCoords(e)
      animateParticles(pointerX, pointerY)
    },
    false,
  )

  setCanvasSize(canvasEl)
  window.addEventListener(
    'resize',
    () => {
      setCanvasSize(canvasEl)
    },
    false,
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const fireworksConfig: Partial<FireworksConfig> = {}
  if (window.CONFIG.fireworks.colors)
    fireworksConfig.colors = window.CONFIG.fireworks.colors

  createFireworks(fireworksConfig)
})
