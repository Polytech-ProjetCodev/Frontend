export const CONFIG = {
  api: {
    hostname: '192.168.43.74',
    port: 8000,
    secure: false,
    base: '/api/',
    url: () => {
      return (CONFIG.api.secure ? 'https' : 'http')
        + '://' + CONFIG.api.hostname
        + (CONFIG.api.port == 80 ? '' : ':' + CONFIG.api.port)
        + CONFIG.api.base
    }
  }
}
