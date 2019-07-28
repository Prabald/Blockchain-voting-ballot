import web3 from './web3';
const address="0x1551696fc1308f63dfd1ff97925bf17b1dac525d";
const abi=[
  {
    constant: true,
    inputs: [],
    name: "getBallot4",
    outputs: [{ name: "", type: "uint32[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "ballot4",
    outputs: [{ name: "", type: "uint32" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getBallot1",
    outputs: [{ name: "", type: "uint32[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "ballot2",
    outputs: [{ name: "", type: "uint32" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getBallot3",
    outputs: [{ name: "", type: "uint32[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "candidate", type: "uint256" },
      { name: "post", type: "uint256" }
    ],
    name: "totalCount",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "ballot1",
    outputs: [{ name: "", type: "uint32" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getBallot2",
    outputs: [{ name: "", type: "uint32[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "ballot5",
    outputs: [{ name: "", type: "uint32" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "votes", type: "uint32[]" },
      { name: "cand", type: "uint256" }
    ],
    name: "count",
    outputs: [{ name: "", type: "uint32" }],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getBallot5",
    outputs: [{ name: "", type: "uint32[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "v1", type: "uint32" },
      { name: "v2", type: "uint32" },
      { name: "v3", type: "uint32" },
      { name: "v4", type: "uint32" },
      { name: "v5", type: "uint32" }
    ],
    name: "vote",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "ballot3",
    outputs: [{ name: "", type: "uint32" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

export default new web3.eth.Contract(abi,address);
