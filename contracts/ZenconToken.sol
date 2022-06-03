//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZenconToken is ERC20 { // inherits from ERC20 token standard
    event Burn(address indexed from, uint256 value);

    constructor() ERC20("Hello ZENCON", "ZENCON") {
        _mint(msg.sender, 1e18 * 1e9); // generate initial tokens
    }
}
