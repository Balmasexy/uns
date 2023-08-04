"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC721Mock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060408051602080820183526000808352835191820190935282815290916200003b8382620000f8565b5060016200004a8282620000f8565b505050620001c4565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200007e57607f821691505b6020821081036200009f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620000f357600081815260208120601f850160051c81016020861015620000ce5750805b601f850160051c820191505b81811015620000ef57828155600101620000da565b5050505b505050565b81516001600160401b0381111562000114576200011462000053565b6200012c8162000125845462000069565b84620000a5565b602080601f8311600181146200016457600084156200014b5750858301515b600019600386901b1c1916600185901b178555620000ef565b600085815260208120601f198616915b82811015620001955788860151825594840194600190910190840162000174565b5085821015620001b45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6112da80620001d46000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101e1578063b88d4fde146101f4578063c87b56dd14610207578063e985e9c51461021a57600080fd5b80636352211e146101a557806370a08231146101b857806395d89b41146101d957600080fd5b8063095ea7b3116100c8578063095ea7b31461015757806323b872dd1461016c57806340c10f191461017f57806342842e0e1461019257600080fd5b806301ffc9a7146100ef57806306fdde0314610117578063081812fc1461012c575b600080fd5b6101026100fd366004610e8f565b610256565b60405190151581526020015b60405180910390f35b61011f6102a8565b60405161010e9190610efc565b61013f61013a366004610f0f565b61033a565b6040516001600160a01b03909116815260200161010e565b61016a610165366004610f44565b610361565b005b61016a61017a366004610f6e565b61047b565b61016a61018d366004610f44565b6104ac565b61016a6101a0366004610f6e565b6104ba565b61013f6101b3366004610f0f565b6104d5565b6101cb6101c6366004610faa565b610535565b60405190815260200161010e565b61011f6105bb565b61016a6101ef366004610fc5565b6105ca565b61016a610202366004611017565b6105d5565b61011f610215366004610f0f565b61060d565b6101026102283660046110f3565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061028757506001600160e01b03198216635b5e139f60e01b145b806102a257506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102b790611126565b80601f01602080910402602001604051908101604052809291908181526020018280546102e390611126565b80156103305780601f1061030557610100808354040283529160200191610330565b820191906000526020600020905b81548152906001019060200180831161031357829003601f168201915b5050505050905090565b600061034582610681565b506000908152600460205260409020546001600160a01b031690565b600061036c826104d5565b9050806001600160a01b0316836001600160a01b0316036103de5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806103fa57506103fa8133610228565b61046c5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016103d5565b61047683836106e3565b505050565b6104853382610751565b6104a15760405162461bcd60e51b81526004016103d590611160565b6104768383836107d0565b6104b68282610934565b5050565b610476838383604051806020016040528060008152506105d5565b6000818152600260205260408120546001600160a01b0316806102a25760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103d5565b60006001600160a01b03821661059f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016103d5565b506001600160a01b031660009081526003602052604090205490565b6060600180546102b790611126565b6104b633838361094e565b6105df3383610751565b6105fb5760405162461bcd60e51b81526004016103d590611160565b61060784848484610a1c565b50505050565b606061061882610681565b600061062f60408051602081019091526000815290565b9050600081511161064f576040518060200160405280600081525061067a565b8061065984610a4f565b60405160200161066a9291906111ad565b6040516020818303038152906040525b9392505050565b6000818152600260205260409020546001600160a01b03166106e05760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103d5565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610718826104d5565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061075d836104d5565b9050806001600160a01b0316846001600160a01b031614806107a457506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806107c85750836001600160a01b03166107bd8461033a565b6001600160a01b0316145b949350505050565b826001600160a01b03166107e3826104d5565b6001600160a01b0316146108095760405162461bcd60e51b81526004016103d5906111dc565b6001600160a01b03821661086b5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103d5565b826001600160a01b031661087e826104d5565b6001600160a01b0316146108a45760405162461bcd60e51b81526004016103d5906111dc565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6104b6828260405180602001604052806000815250610ae2565b816001600160a01b0316836001600160a01b0316036109af5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103d5565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610a278484846107d0565b610a3384848484610b15565b6106075760405162461bcd60e51b81526004016103d590611221565b60606000610a5c83610c16565b600101905060008167ffffffffffffffff811115610a7c57610a7c611001565b6040519080825280601f01601f191660200182016040528015610aa6576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610ab057509392505050565b610aec8383610cee565b610af96000848484610b15565b6104765760405162461bcd60e51b81526004016103d590611221565b60006001600160a01b0384163b15610c0b57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610b59903390899088908890600401611273565b6020604051808303816000875af1925050508015610b94575060408051601f3d908101601f19168201909252610b91918101906112b0565b60015b610bf1573d808015610bc2576040519150601f19603f3d011682016040523d82523d6000602084013e610bc7565b606091505b508051600003610be95760405162461bcd60e51b81526004016103d590611221565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506107c8565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610c555772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610c81576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610c9f57662386f26fc10000830492506010015b6305f5e1008310610cb7576305f5e100830492506008015b6127108310610ccb57612710830492506004015b60648310610cdd576064830492506002015b600a83106102a25760010192915050565b6001600160a01b038216610d445760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103d5565b6000818152600260205260409020546001600160a01b031615610da95760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103d5565b6000818152600260205260409020546001600160a01b031615610e0e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103d5565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b0319811681146106e057600080fd5b600060208284031215610ea157600080fd5b813561067a81610e79565b60005b83811015610ec7578181015183820152602001610eaf565b50506000910152565b60008151808452610ee8816020860160208601610eac565b601f01601f19169290920160200192915050565b60208152600061067a6020830184610ed0565b600060208284031215610f2157600080fd5b5035919050565b80356001600160a01b0381168114610f3f57600080fd5b919050565b60008060408385031215610f5757600080fd5b610f6083610f28565b946020939093013593505050565b600080600060608486031215610f8357600080fd5b610f8c84610f28565b9250610f9a60208501610f28565b9150604084013590509250925092565b600060208284031215610fbc57600080fd5b61067a82610f28565b60008060408385031215610fd857600080fd5b610fe183610f28565b915060208301358015158114610ff657600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561102d57600080fd5b61103685610f28565b935061104460208601610f28565b925060408501359150606085013567ffffffffffffffff8082111561106857600080fd5b818701915087601f83011261107c57600080fd5b81358181111561108e5761108e611001565b604051601f8201601f19908116603f011681019083821181831017156110b6576110b6611001565b816040528281528a60208487010111156110cf57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561110657600080fd5b61110f83610f28565b915061111d60208401610f28565b90509250929050565b600181811c9082168061113a57607f821691505b60208210810361115a57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b600083516111bf818460208801610eac565b8351908301906111d3818360208801610eac565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906112a690830184610ed0565b9695505050505050565b6000602082840312156112c257600080fd5b815161067a81610e7956fea164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class ERC721Mock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ERC721Mock__factory = ERC721Mock__factory;
ERC721Mock__factory.bytecode = _bytecode;
ERC721Mock__factory.abi = _abi;
