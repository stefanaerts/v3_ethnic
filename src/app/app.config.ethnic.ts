
import { IAppConfig } from './app.config.interface';

export interface IEthnicConfig extends IAppConfig {
  test;
};

export const ETHNIC_CONFIG: IEthnicConfig = {
  // apiEndpoint: 'api.heroes.com',
  title: 'Ethnic',
  titleitalic: 'foods',
  subtitle: 'Votre traiteur',
  address: 'rue de la Croix de Fer, 14 à 1000 Bruxelles',
  phone: '+32 (0)2 218 34 13',
  phone2: '+32 (0)497 11 69 79',
  email: 'info@ethnicfoods.be',
  imageUrl: 'assets/test.jpg',
  test: 'test'
};
