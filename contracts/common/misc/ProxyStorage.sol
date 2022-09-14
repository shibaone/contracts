pragma solidity ^0.8.7;
import {Ownable} from "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract ProxyStorage is Ownable {
    address internal proxyTo;
}
