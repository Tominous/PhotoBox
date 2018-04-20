const { PhotoCommand } = require('photobox')
const { Util } = require('photobox-core')

module.exports = class FaceDebug extends PhotoCommand {
  get name() { return 'facedebug' }
  get aliases() { return ['facedetect','facetest'] }

  get helpMeta() { return {
    category: 'Face Detection',
    description: 'This command visualizes what OpenCV sees in a face.',
    usage: '[url]'
  } }
}