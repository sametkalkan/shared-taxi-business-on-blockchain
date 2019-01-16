import Controller from '@ember/controller';
import {inject} from '@ember/controller';
import {alias} from '@ember/object/computed';

export default Controller.extend({

  applicationController: inject('application'),

  // address: alias('applicationController.address'),//"aaa",//alias('applicationController.address'),

  manager_address: '',
  carDealerAddress: '',
  taxiDriverAddress: '',

  contractBalance: 0,
  participantsNumber: 0,
  maxParticipant: 100,
  participationFee: 100,

  maintenancePrice:0,
  lastMaintenance:0,
  lastDividend:0,
  lastSalaryPaid:0,
  salary:1000,


  managerError: undefined,
  salaryError: undefined,
  maintainError: undefined,

  contractError: undefined,
  carDealerError: undefined,
  taxiDriverError: undefined,

  actions: {

    viewContract(){

      this.applicationController.send('setContractInstance');
      this.applicationController.get('web3').eth.defaultAccount = this.get('your_address');

      try {
        // console.log(this.get('contract_instance'));
        var contractBalance = this.applicationController.get('contract_instance').getContractBalance();
        var participantsNumber = this.applicationController.get('contract_instance').getParticipantsNumber()['c'][0];
        var maxParticipant = this.applicationController.get('contract_instance').getMaxParticipant();
        var participationFee = this.applicationController.get('contract_instance').getParticipationFee();
        var report = this.applicationController.get('contract_instance').getReports();
      }
      catch (e){
        this.applicationController.set('contractError', e.toString());
        return;
      }


      var maintenancePrice = report[0];
      var lastMaintenance = report[1];
      var lastDividend = report[2];


      this.set('contractBalance', contractBalance);
      this.set('participantsNumber', participantsNumber);
      this.set('maxParticipant', maxParticipant);
      this.set('participationFee', participationFee);

      this.set('maintenancePrice', maintenancePrice);
      if(lastMaintenance['c'][0]===0)
        this.set('lastMaintenance', "Not maintained yet");
      else
        this.set('lastMaintenance', new Date(lastMaintenance*1000));

      if(lastDividend['c'][0]===0)
        this.set('lastDividend', 'Not divided yet');
      else
        this.set('lastDividend', new Date(lastDividend*1000));



      this.applicationController.set('contractError', undefined);

    },

    payDividend(){

      this.applicationController.send('setContractInstance');
      this.applicationController.get('web3').eth.defaultAccount = this.get('manager_address');

      try{
        this.applicationController.get('contract_instance').payDividend({from: this.get('manager_address'), gas: 3000000, value:0});
      }catch (e) {
        this.set('managerError', e.toString() + ". You must be the manager or last dividend must be 6 months ago.");
        return;
      }
      this.set('managerError', undefined);

    },

    paySalaryOfTaxiDriver(){

      this.applicationController.send('setContractInstance');
      this.applicationController.get('web3').eth.defaultAccount = this.get('manager_address');

      try{
        this.applicationController.get('contract_instance').paySalary({from: this.get('manager_address'), gas: 3000000, value:0});
      }catch (e) {
        this.set('salaryError', e.toString() + ". You must be the manager or last pay must be 1 months ago.");
        return;
      }
      this.set('salaryError', undefined);

    },

    maintain(){
      this.applicationController.send('setContractInstance');
      this.applicationController.get('web3').eth.defaultAccount = this.get('manager_address');

      try{
        this.applicationController.get('contract_instance').carExpenses({from: this.get('manager_address'), gas: 3000000, value:0});
      }catch (e) {
        this.set('maintainError', e.toString() + ". You must be the manager or last maintenance must be 6 months ago.");
        return;
      }
      this.set('maintainError', undefined);


    },

    setCarDealer(){

      this.applicationController.send('setContractInstance');
      this.applicationController.get('web3').eth.defaultAccount = this.get('manager_address');

      try{
        this.applicationController.get('contract_instance').setCarDealer(this.get('carDealerAddress'), {from: this.get('manager_address'), gas: 3000000, value:0});
      }catch (e) {
        this.set('carDealerError', e.toString() + ". You must be the manager or dealer address is invalid");

        return;
      }
      this.set('carDealerError', undefined);

    },

    setTaxiDriver(){

      this.applicationController.send('setContractInstance');
      this.applicationController.get('web3').eth.defaultAccount = this.get('manager_address');

      try{
        this.applicationController.get('contract_instance').setDriver(this.get('taxiDriverAddress'), {from: this.get('manager_address'), gas: 3000000, value:0});
      }catch (e) {
        this.set('taxiDriverError', e.toString() + ". You must be the manager or driver address is invalid");
        return;
      }
      this.set('taxiDriverError', undefined);

    }


  }


});
