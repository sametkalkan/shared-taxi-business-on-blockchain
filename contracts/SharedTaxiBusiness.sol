pragma solidity ^0.4.18;

contract SharedTaxiBusiness{


    struct Account{
        address addr;
        uint balance;
        bool isVoted;
    }
    
    struct Car{
        uint carId;
        uint price;
        uint offerValidTime;
    }
    
    struct Purchase {
        uint carId;
        uint price;
        uint offerValidTime;
        uint approvalState;
    }
    
    struct TaxiDriver{
        address addr;
        uint balance;
        uint startTime;
        uint lastDateOfSalaryPaid;  // holds the last time of the salary paid
    }
    
    mapping(address => Account) participants;
    address[] participants_addresses;  // is required to iterate participants.
    uint maxParticipants;  // holds maximum #participants, for this project it is 100
    uint numberOfParticipant;  // holds total number of participants
    
    address manager;
    
    TaxiDriver taxiDriver;
    
    address carDealer;
    
    uint currentContractBalance;
    
    uint fixedExpenses;
    uint lastTimeOfMaintenance;
    
    uint lastTimeOfDividend;
    
    uint participationFee;
    
    uint ownedCar;
    
    Car proposedCar;
    Purchase proposedPurchase;
    
    
    function SharedTaxiBusiness() public{
        manager = msg.sender;
        maxParticipants = 100;
        numberOfParticipant = 0;
        currentContractBalance = 0;
        fixedExpenses = 10;
        lastTimeOfMaintenance = 0;
        lastTimeOfDividend = 0;
        participationFee = 100;
    }

    function join() isNotParticipantExist isParticipantEmpty public payable{
        require(msg.value>=100);
        participants[msg.sender] = Account(msg.sender, 0, false);
        participants_addresses.push(msg.sender);
        numberOfParticipant++;
        currentContractBalance += participationFee;
    }
    
    function setCarDealer(address _carDealer) isManager public {
        carDealer = _carDealer;
    }
    
    function carPropose(uint _carId, uint _price, uint _offerValidTime) isCarDealer public {
        proposedCar = Car(_carId, _price, _offerValidTime);
    }
    
    function purchaseCar() isManager public payable{
        require( now < proposedCar.offerValidTime );
        
        carDealer.transfer(proposedCar.price);
        currentContractBalance -= proposedCar.price;
    }
    
    function purchasePropose(uint _carId, uint _price, uint _offerValidTime, uint _approvalState) isCarDealer public{
        proposedPurchase = Purchase(_carId, _price, _offerValidTime, _approvalState);
    }
    
    function approveSellProposal() isParticipantExist isNotVoted public {
        proposedPurchase.approvalState++;
        participants[msg.sender].isVoted = true;
    }

    function sellCar() public isCarDealer doesMajorityApprove payable{
        require( now < proposedCar.offerValidTime );
        currentContractBalance += msg.value;
        for(uint32 i=0;i<numberOfParticipant;i++){
            participants[participants_addresses[i]].isVoted = false;
        }
    }

    function setDriver(address _taxiDriver) isManager public{
        taxiDriver.addr = _taxiDriver;
        taxiDriver.balance = 0;
        taxiDriver.lastDateOfSalaryPaid = 0;  
        taxiDriver.startTime = now;
    }
    
    function getCharge() public payable{
        currentContractBalance += msg.value;
    }

    function paySalary() isManager isNotPaidThisMonth public {
        taxiDriver.balance += 50;
        currentContractBalance -= 50;
        taxiDriver.lastDateOfSalaryPaid = now;
    }

    function getSalary() isTaxiDriver public{
        require(taxiDriver.balance>0);
        msg.sender.transfer(taxiDriver.balance);
        taxiDriver.balance = 0; 
    }

    function carExpenses() isManager public{
        require( (now-lastTimeOfMaintenance)>60*60*24*30*6 );  // if last maintenance is over 6 months.
        carDealer.transfer(fixedExpenses);
        currentContractBalance -= fixedExpenses;
        lastTimeOfMaintenance = now;
    }

    function payDividend() isManager public{
        require( (now - lastTimeOfDividend)>60*60*24*30*6 );
        require(numberOfParticipant>0);
        
        uint profitPerParticipant = currentContractBalance/numberOfParticipant;
        
        for(uint32 i=0;i<numberOfParticipant;i++){
            participants[participants_addresses[i]].balance += profitPerParticipant;
        }
        currentContractBalance = 0;
        lastTimeOfDividend = now;
    }
    
    function getDividend() isParticipantExist public{
        require(participants[msg.sender].balance>0);
        
        msg.sender.transfer(participants[msg.sender].balance);
        participants[msg.sender].balance = 0;
    }
    
    
    // functions after this line is essential to display for website 
    // and does not cost any to call them
    
    function getParticipantsAddresses() public constant returns(address[]) {
        return participants_addresses;
    }
    
    function getBalance(address _address) public constant returns(uint){
        return participants[_address].balance;
    }
    
    function getProposedCar() public constant returns(Car){
        return proposedCar;
    }
    
    function getMyBalance() isParticipantExist public constant returns(uint){
        return participants[msg.sender].balance;
    }
    
    function getContractBalance() public constant returns(uint){
        return currentContractBalance;
    }
    
    function getParticipantsNumber() public constant returns(uint){
        return numberOfParticipant;
    }
    
    function getParticipationFee() public constant returns(uint){
        return participationFee;
    }
    
    function getMaxParticipant() public constant returns(uint){
        return maxParticipants;
    }
    
    function getReports() public constant returns(uint, uint, uint) {
        return (fixedExpenses, lastTimeOfMaintenance, lastTimeOfDividend);
    }
    
    function getDriverInfo() isTaxiDriver public constant returns(uint, uint, uint){
        return (taxiDriver.balance, taxiDriver.startTime, taxiDriver.lastDateOfSalaryPaid);
    }
    
    function getManager() public constant returns(address){
        return manager;
    }



    // ----------- MODIFIERS ----------------
    modifier isNotPaidThisMonth(){  //checks if salary of the taxi driver was paid or not in last 1 month.
        require( (now-taxiDriver.lastDateOfSalaryPaid)>60*60*24*30 ); 
        _;
    }
    
    modifier doesMajorityApprove{
        require(proposedPurchase.approvalState>numberOfParticipant/2);
        _;
    }
    
    modifier isNotVoted(){
        require(!participants[msg.sender].isVoted);
        _;
    }
    
    modifier isTaxiDriver(){
        require(taxiDriver.addr == msg.sender );
        _;
    }    

    modifier isCarDealer(){
        require(carDealer==msg.sender);
        _;
    }
    
    modifier isManager(){
        require(manager==msg.sender);
        _;
    }
    
    // modifier isCarProposed(){
        // require(proposedCar != null);
        // _;
    // }
    
    
    modifier isParticipantExist(){
        require(participants[msg.sender].addr != address(0));
        _;
    }
    
    modifier isNotParticipantExist(){
        require(participants[msg.sender].addr == address(0));
        _;
    }
    
    modifier isParticipantEmpty(){
        require(numberOfParticipant<=maxParticipants);
        _;
    }
    
}










