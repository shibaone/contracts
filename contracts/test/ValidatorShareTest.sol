pragma solidity ^0.8.7;
import {ValidatorShare} from "../staking/validatorShare/ValidatorShare.sol";

contract ValidatorShareTest is ValidatorShare {
    function amountStaked(address user) public view returns(uint256) {
        (uint256 totalStaked, ) = getTotalStake(user);
        return totalStaked;
    }
}
