pragma solidity ^0.5.1;

// import "./User.sol";
import "./Manufacturer.sol";
import "./Vendor.sol";
import "./ServiceCenter.sol";



contract Main {
    enum ContractType {NON_AUTHORIZED, ITEM, USER, MANUFACTURER, VENDOR, SERVICE_CENTER}
    mapping (address => ContractType) contractType;
    function getContractType (address a) view public returns (ContractType) { return contractType[a]; }

//    function registerUser (address ownerID) public returns (address) {
//        User newUser = new User(ownerID);
//        contractType[address(newUser)] = ContractType.USER;
//        return address(newUser);
//    }

    function registerManufacturer (address ownerID, string memory _name, string memory _physicalAddress, string memory _registrationNumber) public returns (address) {
        Manufacturer newManufacturer = new Manufacturer(ownerID, _name, _physicalAddress, _registrationNumber);
        contractType[address(newManufacturer)] = ContractType.MANUFACTURER;
        return address(newManufacturer);
    }

    function registerVendor (address ownerID, string memory _name, string memory _physicalAddress, string memory _registrationNumber) public returns (address) {
        Vendor newVendor = new Vendor(ownerID, _name, _physicalAddress, _registrationNumber);
        contractType[address(newVendor)] = ContractType.VENDOR;
        return address(newVendor);
    }

    function registerServiceCenter (address ownerID, string memory _name, string memory _physicalAddress, string memory _registrationNumber) public returns (address) {
        ServiceCenter newServiceCenter = new ServiceCenter(ownerID, _name, _physicalAddress, _registrationNumber);
        contractType[address(newServiceCenter)] = ContractType.SERVICE_CENTER;
        return address(newServiceCenter);
    }
}