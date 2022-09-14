pragma solidity ^0.8.7;

import {MRC20} from "../child/MRC20.sol";

contract TestMRC20 is MRC20 {
    function() external payable {}
}
