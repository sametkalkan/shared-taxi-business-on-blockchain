import Route from '@ember/routing/route';

export default Route.extend({

  abi: "[\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"approveSellProposal\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": true,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"getParticipantsNumber\",\n" +
    "\t\t\"outputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"view\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"payDividend\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"getDividend\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_salary\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"name\": \"paySalary\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"purchaseCar\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": true,\n" +
    "\t\t\"stateMutability\": \"payable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_carId\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t},\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_price\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t},\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_offerValidTime\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"name\": \"carPropose\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"getSalary\",\n" +
    "\t\t\"outputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": true,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"getContractBalance\",\n" +
    "\t\t\"outputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"view\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_carDealer\",\n" +
    "\t\t\t\t\"type\": \"address\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"name\": \"setCarDealer\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"carExpenses\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"sellCar\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": true,\n" +
    "\t\t\"stateMutability\": \"payable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_carId\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t},\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_price\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t},\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_offerValidTime\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t},\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_approvalState\",\n" +
    "\t\t\t\t\"type\": \"uint256\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"name\": \"purchasePropose\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"getCharge\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": true,\n" +
    "\t\t\"stateMutability\": \"payable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"name\": \"join\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": true,\n" +
    "\t\t\"stateMutability\": \"payable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"constant\": false,\n" +
    "\t\t\"inputs\": [\n" +
    "\t\t\t{\n" +
    "\t\t\t\t\"name\": \"_taxiDriver\",\n" +
    "\t\t\t\t\"type\": \"address\"\n" +
    "\t\t\t}\n" +
    "\t\t],\n" +
    "\t\t\"name\": \"setDriver\",\n" +
    "\t\t\"outputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"function\"\n" +
    "\t},\n" +
    "\t{\n" +
    "\t\t\"inputs\": [],\n" +
    "\t\t\"payable\": false,\n" +
    "\t\t\"stateMutability\": \"nonpayable\",\n" +
    "\t\t\"type\": \"constructor\"\n" +
    "\t}\n" +
    "]",

  // address: 0,
  //
  // contractBalance: 0,
  // participantsNumber: 0,
  // maxParticipant: 100,
  // participationFee: 100,
  //
  // contract_instance: null,
  //
  // web3: null,
  // contract: null,

  // model(){
  //
  //   var contractAddress = '0xf3ec22e665e06303ccc7238ee93a50d50ffad0e2';
  //   this.set('address', contractAddress);
  //
  //   let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
  //   this.set('web3', web3);
  //
  //   var j = JSON.parse(this.abi);
  //   var contract = web3.eth.contract(j);
  //   this.set('contract', contract);
  //   web3.eth.defaultAccount = web3.eth.accounts[0];
  //   var contract_instance = contract.at(contractAddress);
  //   this.set('contract_instance', contract_instance);
  //
  //   return {
  //     contractBalance: this.get('contractBalance'),
  //     participantsNumber: this.get('participantsNumber'),
  //     maxParticipant: this.get('maxParticipant'),
  //     participationFee: this.get('participationFee'),
  //   };
  // },



});
