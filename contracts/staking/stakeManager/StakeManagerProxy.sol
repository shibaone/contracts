pragma solidity ^0.8.7;

import {UpgradableProxy} from "../../common/misc/UpgradableProxy.sol";

contract StakeManagerProxy is UpgradableProxy {
    constructor(address _proxyTo) public UpgradableProxy(_proxyTo) {}
}
