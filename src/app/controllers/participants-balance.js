import Controller from '@ember/controller';
import {inject} from '@ember/controller';
import {alias} from '@ember/object/computed';


export default Controller.extend({
  applicationController: inject('application'),

  actions: {
    
    fetchParticipants: function () {


      this.applicationController.send('setContractInstance');

      let addresses = null;
      var participants = {};

      try{
        addresses = this.applicationController.get('contract_instance').getParticipantsAddresses();
      }
      catch (e) {
        this.applicationController.set('contractError', e.toString());
        return;
      }


      for(let i=0;i<addresses.length;i++){
        participants[addresses[i]] = this.applicationController.get('contract_instance').getBalance(addresses[i])['c'][0];
      }
      this.set('participants', participants);
      this.applicationController.set('contractError', undefined);
    }
  }
  
  
});
