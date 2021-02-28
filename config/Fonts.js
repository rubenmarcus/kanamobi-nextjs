const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = '/static/fonts/TTCommons-Regular.woff'
  link.rel = 'stylesheet'


  const italic = document.createElement('link');
  const bold = document.createElement('link');
  const medium = document.createElement('link');
  italic.href = '/static/fonts/TTCommons-Italic.woff'
  medium.href = '/static/fonts/TTCommons-Medium.woff'
  bold.href = '/static/fonts/TTCommons-Bold.woff'

  document.head.appendChild(link)
  document.head.appendChild(bold)
  document.head.appendChild(medium)
  document.head.appendChild(italic)


  const ttcommons = new FontFaceObserver('TT Commons')

  ttcommons.load().then(() => {
    document.documentElement.className += " fonts-loaded";
  })
}

export default Fonts