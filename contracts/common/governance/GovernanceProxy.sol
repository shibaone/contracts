pragma solidity ^0.8.7;

import {Proxy} from "../misc/Proxy.sol";

contract GovernanceProxy is Proxy {
    constructor(address _proxyTo) public Proxy(_proxyTo) {}
}
