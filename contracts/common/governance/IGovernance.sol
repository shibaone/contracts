pragma solidity ^0.8.7;

interface IGovernance {
    function update(address target, bytes calldata data) external;
}
