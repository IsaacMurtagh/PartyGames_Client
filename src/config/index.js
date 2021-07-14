import configDev from './config-dev.json';
import configProd from './config-prod.json';

const getConfig = () => {
  switch(window.location.origin) {
    case 'https://admiradoco.com':
      return configProd;
    default:
      return configDev;
  }
}

export default getConfig();