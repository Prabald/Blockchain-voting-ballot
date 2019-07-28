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
    function getBallot4() public view returns (uint32[]){
        return ballot4;
    }
    function getBallot5() public view returns (uint32[]){
        return ballot5;
    }
    function totalCount(uint candidate,uint post) public view returns (uint)
    {
     if(post==1){
         return count(ballot1,candidate);
     }
     if(post==2){
         return count(ballot2,candidate);
     }
     else if(post==3){
         return count(ballot3,candidate);
     }
    else if(post==4){
         return count(ballot4,candidate);
     }
     else if(post==5){
         return count(ballot5,candidate);
     }
    }
    function count(uint32[] votes,uint cand) public pure returns (uint32){

        uint32 counter=0;
        for(uint i=0;i<votes.length;i++){
            if(votes[i]==cand)
            {counter++; }
        }
        return counter;
    }

}
