pragma solidity ^0.8.7;

import { StakeManager } from "../staking/stakeManager/StakeManager.sol";
import { IValidatorShare } from "../staking/validatorShare/IValidatorShare.sol";

contract StakeManagerTestable is StakeManager {
    function advanceEpoch(uint256 delta) public {
        currentEpoch = currentEpoch.add(delta);
    }

    function testLockShareContract(uint256 validatorId, bool lock) public {
        if (lock) {
            IValidatorShare(validators[validatorId].contractAddress).lock();
        } else {
            IValidatorShare(validators[validatorId].contractAddress).unlock();
        }
    }

    function forceFinalizeCommit() public {
        _finalizeCommit();
    }

    function resetSignerUsed(address signer) public {
        signerToValidator[signer] = 0;
    }
}
