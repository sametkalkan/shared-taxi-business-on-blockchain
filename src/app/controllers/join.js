import Controller from '@ember/controller';
import {inject} from '@ember/controller';
import {alias} from '@ember/object/computed';


export default Controller.extend({
  applicationController: inject('application'),

  your_address: "",
  participationFee: 100,


  errorMessage: undefined,
  joinedMessage: undefined,

  actions: {

    join(){

      this.applicationController.send('setContractInstance');
      var fee = this.applicationController.get('contract_instance').getParticipationFee();

      try{
        this.applicationController.get('web3').eth.defaultAccount = this.get('your_address');
        this.applicationController.get('contract_instance').join({from: this.get('your_address'), gas: 3000000, value:fee});
      }catch (e) {
        this.set('errorMessage', e.toString() + " or You may already joined");
        this.set('joinedMessage', undefined);
        return;
      }
      this.set('errorMessage', undefined);

      this.set('joinedMessage', "Successfully joined the Contract");

    },

  }
});
