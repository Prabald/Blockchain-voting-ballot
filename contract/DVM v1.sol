//The very first basic working prototype of a Digital voting smart contract 

pragma solidity ^0.4.17;
contract DVM{
    uint32[] public ballot1;
    uint32[] public ballot2;
    uint32[] public ballot3;
    uint32[] public ballot4;
    uint32[] public ballot5;
    
    function vote(uint32 v1,uint32 v2,uint32 v3,uint32 v4,uint32 v5) public{
        ballot1.push(v1);
        ballot2.push(v2);
        ballot3.push(v3);
        ballot4.push(v4);
        ballot5.push(v5);
    }
    function getBallot1() public view returns (uint32[]){
        return ballot1;
    }
    function getBallot2() public view returns (uint32[]){
        return ballot2;
    }
    function getBallot3() public view returns (uint32[]){
        return ballot3;
    }
    function getBallot41() public view returns (uint32[]){
        return ballot4;
    }
    function getBallot5() public view returns (uint32[]){
        return ballot5;
    }
}