

const emojis = [
  ':simple_smile:',
  ':heart:',
  ':joy:',
  ':grinning:',
  ':sunglasses:',
  ':smile_cat:',
  ':alien:',
  ':santa:'
]
function get() {
  return emojis[Math.floor(Math.random()*emojis.length)]
}

// Export the functions for others to use
module.exports = get;
