import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xe2562e835B37b67Aea2297d468B32765F63B6ED5"
);

export default instance;
