//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract CoolNumberContract {
    uint public coolNumber = 10;

    function setCoolNumber(uint _coolNumber) public {
        coolNumber = _coolNumber;
    }
}
