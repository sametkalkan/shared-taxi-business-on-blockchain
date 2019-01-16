import Controller from '@ember/controller';
import {inject} from '@ember/controller';
import {alias} from '@ember/object/computed';

export default Controller.extend({
  applicationController: inject('application'),

  your_address: '',
  balance: 0,

  addressError: undefined,


  actions: {

    viewBalance(){

      // console.log(this.get('contract_instance'));
      this.applicationController.send('setContractInstance');
      this.applicationController.get('web3').eth.defaultAccount = this.get('your_address');

      try{
        var balance = this.applicationController.get('contract_instance').getMyBalance();
      }
      catch (e) {
        this.set('addressError', e.toString());
        return;
      }

      this.set('balance', balance['c'][0]);
      this.set('addressError', undefined);

    },

    withdraw(){

      this.applicationController.send('setContractInstance');
      this.applicationController.get('web3').eth.defaultAccount = this.get('your_address');


      try{
        this.applicationController.get('contract_instance').getDividend();
      }
      catch (e) {
        this.set('addressError', e.toString());
        return;
      }
      this.set('addressError', undefined);
      this.set('balance', 0);

    }

  }
});
