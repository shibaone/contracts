pragma solidity ^0.8.7;

import {Initializable} from "../../common/mixin/Initializable.sol";

contract ProxyTestImplStorageLayoutChange is Initializable {
    uint256 public b;
    uint256 public a;
}
