export const CONFIG = {
  api: {
    hostname: '163.172.159.182',
    //hostname: '192.168.43.74',
    //hostname: '192.168.1.68',
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
