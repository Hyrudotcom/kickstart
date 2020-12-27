import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x7f3051A0029a0c52C949F2B9F6b9dd23e2372737'
);

export default instance;