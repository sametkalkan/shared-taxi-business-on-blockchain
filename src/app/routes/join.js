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

  balance: 0,
  address: 0,
  business: null,

  init(){

    let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
    // console.log(web3);
    var my_contract;
    var json = "../../../build/contracts/Migrations.json";


    var j = JSON.parse(this.abi);
    var contract = web3.eth.contract(j);
    web3.eth.defaultAccount = web3.eth.accounts[0];
    console.log(this.get('address'));
    var business = contract.at('0xf35886f850818d82c6990206585e1598295cc29c');


  },

  actions: {

    viewBalance(address){
      // console.log("-----------------", business.getParticipantsNumber(), "--------------------");
      this.set('address', address);
      console.log(address);
      console.log(this.get('address'));
      console.log(this.get('business'));
      var balance = this.get('business').getParticipantsNumber()['c'][0];

      console.log(balance);


    }

  }



});
