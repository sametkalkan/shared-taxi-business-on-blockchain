import Controller from '@ember/controller';
import {inject} from '@ember/controller';
import {alias} from '@ember/object/computed';

export default Controller.extend({
  applicationController: inject('application'),

  customer_address: '',
  ticket_fare: 0,

  addressError: undefined,

  actions: {

    pay(){

      this.applicationController.send('setContractInstance');
      this.applicationController.get('web3').eth.defaultAccount = this.get('customer_address');

      try{
        this.applicationController.get('contract_instance').getCharge({ from: this.get('customer_address'), gas: 3000000, value: this.get('ticket_fare')},
          function (err, res) {
            // console.log("----", err);
            // console.log("----", res);
          });

      }catch (e) {
        this.set('addressError', e.toString());
        return;
      }

      this.set('addressError', undefined);

    },

  }
});
