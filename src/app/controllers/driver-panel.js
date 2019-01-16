import Controller from '@ember/controller';
import {inject} from '@ember/controller';
import {alias} from '@ember/object/computed';


export default Controller.extend({
  applicationController: inject('application'),

  your_address: '',
  balance: 0,
  startTime: 0,
  lastTimeOfSalaryPaid: 0,

  driverError: undefined,

  actions: {

    viewBalance(){

      this.applicationController.send('setContractInstance');
      this.applicationController.get('web3').eth.defaultAccount = this.get('your_address');

      try{
        var info = this.applicationController.get('contract_instance').getDriverInfo();
      }catch (e) {
        let error = e.toString();
        if (e.toString().length>30)
          error = e.toString() + ". Make sure you are the driver and contract address is valid!";
        this.set('driverError', error);
        return;
      }

      this.set('balance', info[0]);
      this.set('startTime', new Date(info[1]*1000));
      this.set('driverError', undefined);
      if(info[2]['c'][0]===0)
        this.set('lastTimeOfSalaryPaid', "Not paid yet");
      else
        this.set('lastTimeOfSalaryPaid', new Date(info[2]*1000));

    },

    withdraw(){
      this.applicationController.get('contract_instance').getSalary();
      this.set('balance', 0);

    }

  }
});
