module.exports = {
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\js$': 'babel-jest',
  },
}