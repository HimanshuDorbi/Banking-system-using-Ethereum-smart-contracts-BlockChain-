pragma solidity 0.4.25

contract bank{
    int bal;

    constructor() public
    {
        bal = 1;

    }
    function getbalance()  view public return(int)
    {
        return bal;
    }
    function withdraw(int amt) public
    {
        bal = bal-amt;
    }

    function deposit(int amt) public
    {
        bal = bal=amt;

    }
}