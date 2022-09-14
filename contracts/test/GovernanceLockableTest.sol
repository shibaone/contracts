pragma solidity ^0.8.7;

import { GovernanceLockable } from "../common/mixin/GovernanceLockable.sol";

contract GovernanceLockableTest is GovernanceLockable {
    constructor(address governance) public GovernanceLockable(governance) {}
}
