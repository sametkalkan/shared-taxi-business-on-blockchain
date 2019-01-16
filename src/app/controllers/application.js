import Controller from '@ember/controller';
import config from 'src/config/environment';

export default Controller.extend({

  // abi: config.ABI.abi,

  contract_address: "", //"0x44ff56a9e57b3b8628ccb4927c7e3a96f9041f41",
  contractError: undefined,

  abi: config.ABI.abi,

  your_address: '',
  balance: 0,

  contract_instance: null,

  web3: null,
  contract: null,

  init(){

    let web3 = new Web3(new Web3.providers.HttpProvider(config.CONTRACT.host + config.CONTRACT.port));
    this.set('web3', web3);

    var j = JSON.parse(this.abi);
    var contract = web3.eth.contract(j);
    this.set('contract', contract);
    //
    web3.eth.defaultAccount = web3.eth.accounts[0];

  },

  actions: {
    setContractInstance: function() {
      this.set('contract_instance', this.get('contract').at(this.get('contract_address')));
    }
  }

});
