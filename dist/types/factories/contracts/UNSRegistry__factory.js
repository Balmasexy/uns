"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNSRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
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
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "NewKey",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "NewURI",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "NewURIPrefix",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "RemoveReverse",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ResetRecords",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: true,
                internalType: "string",
                name: "valueIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        name: "Set",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "SetReverse",
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
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "BATCH_LIMIT",
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
        inputs: [],
        name: "NAME",
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
        inputs: [],
        name: "VERSION",
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
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "addKey",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "addProxyReader",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "cleanReverseFromUDContracts",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "depositData",
                type: "bytes",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "depositToPolygon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
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
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
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
        name: "exists",
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
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "get",
        outputs: [
            {
                internalType: "string",
                name: "value",
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
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getByHash",
        outputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
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
                name: "keyHash",
                type: "uint256",
            },
        ],
        name: "getKey",
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
                internalType: "uint256[]",
                name: "hashes",
                type: "uint256[]",
            },
        ],
        name: "getKeys",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getMany",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getManyByHash",
        outputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "mintingManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "cnsRegistry",
                type: "address",
            },
            {
                internalType: "address",
                name: "rootChainManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "childChainManager",
                type: "address",
            },
        ],
        name: "initialize",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "isApprovedOrOwner",
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
                name: "forwarder",
                type: "address",
            },
        ],
        name: "isTrustedForwarder",
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
                name: "user",
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
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "mintTLD",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "mintWithRecords",
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
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
        ],
        name: "namehash",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
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
        name: "nonceOf",
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
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
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
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
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
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "reconfigure",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "removeReverse",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "reset",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "resolverOf",
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
                name: "addr",
                type: "address",
            },
        ],
        name: "reverseNameOf",
        outputs: [
            {
                internalType: "string",
                name: "reverseUri",
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
                name: "addr",
                type: "address",
            },
        ],
        name: "reverseOf",
        outputs: [
            {
                internalType: "uint256",
                name: "reverse",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "root",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
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
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "set",
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
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setByHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setMany",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setManyByHash",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "setOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
        ],
        name: "setReverse",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "setTokenURIPrefix",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "unlockWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
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
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "verify",
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
                internalType: "bytes",
                name: "inputData",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        name: "withdrawFromPolygon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50614d88806100206000396000f3fe608060405234801561001057600080fd5b50600436106103835760003560e01c806370a08231116101de578063b88d4fde1161010f578063e985e9c5116100ad578063f5c1f76e1161007c578063f5c1f76e14610819578063f7df5c601461082c578063f8c8765e1461083f578063ffa1ad741461085257600080fd5b8063e985e9c5146107bb578063ebf0c717146107f7578063ec129eea146107fe578063f25eb5c11461081157600080fd5b8063bebec6b4116100e9578063bebec6b41461076f578063c87b56dd14610782578063ce92b33e14610795578063cf2c52cb146107a857600080fd5b8063b88d4fde14610736578063ba5d40b714610749578063bb5b27e11461075c57600080fd5b8063a22cb4651161017c578063ab0dff6111610156578063ab0dff61146106e7578063ab3b87fe146106ef578063b3f9e4cb14610702578063b85afd281461071557600080fd5b8063a22cb46514610695578063a3f4df7e146106a8578063a4247400146106d457600080fd5b80639508b1c4116101b85780639508b1c41461065f5780639559c0bd1461067257806395d89b411461067a57806399e0dd7c1461068257600080fd5b806370a08231146106265780637e37479e1461063957806394d008ef1461064c57600080fd5b806342842e0e116102b85780635096023911610256578063638e5c7811610230578063638e5c78146105be578063663f7b2a146105d1578063672b9f81146105e45780636ccbae5f1461060557600080fd5b8063509602391461057c578063572b6c051461058f5780636352211e146105ab57600080fd5b806347c816991161029257806347c81699146105305780634a72584d146105435780634f558e791461055657806350382c1a1461056957600080fd5b806342842e0e146104f757806342966c681461050a578063430c20811461051d57600080fd5b80631bf7e13e11610325578063276fabb1116102ff578063276fabb11461049d57806327f18975146104be578063310bd74b146104d157806340c10f19146104e457600080fd5b80631bf7e13e146104645780631f71be061461047757806323b872dd1461048a57600080fd5b8063095ea7b311610361578063095ea7b3146103f0578063150b7a02146104055780631bd8cc1a146104315780631be5e7ed1461045157600080fd5b806301ffc9a71461038857806306fdde03146103b0578063081812fc146103c5575b600080fd5b61039b610396366004614407565b610876565b60405190151581526020015b60405180910390f35b6103b8610887565b6040516103a79190614931565b6103d86103d3366004614635565b610919565b6040516001600160a01b0390911681526020016103a7565b6104036103fe366004614182565b610940565b005b610418610413366004613f74565b610959565b6040516001600160e01b031990911681526020016103a7565b61044461043f3660046142b5565b610ab4565b6040516103a791906148cc565b6103b861045f36600461456f565b610bd4565b6103b86104723660046145d6565b610c1f565b61040361048536600461404d565b610d2a565b610403610498366004613f34565b610dd1565b6104b06104ab366004614206565b610e24565b6040519081526020016103a7565b6104036104cc366004614245565b610e33565b6104036104df366004614635565b610e7b565b6104036104f2366004614182565b610eb6565b610403610505366004613f34565b610f03565b610403610518366004614635565b610f1e565b61039b61052b366004614182565b610f62565b61040361053e366004614511565b610f6e565b61040361055136600461467d565b610fad565b61039b610564366004614635565b610ff3565b6104036105773660046145a4565b611012565b61040361058a366004613e69565b611048565b61039b61059d366004613e69565b6001600160a01b0316301490565b6103d86105b9366004614635565b6110a8565b6104036105cc366004614635565b611108565b6104036105df3660046142fe565b611153565b6105f76105f23660046146cd565b61118c565b6040516103a7929190614944565b6104b0610613366004614635565b6000908152610100602052604090205490565b6104b0610634366004613e69565b6111a4565b6104b0610647366004613e69565b61122a565b61040361065a3660046141ad565b61125b565b61040361066d36600461443f565b6112aa565b6104b0601481565b6103b8611331565b6104036106903660046144de565b611340565b6104036106a3366004614105565b6113c6565b6103b86040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b61039b6106e23660046145d6565b6113d8565b610403611423565b6104036106fd366004614182565b6114b1565b6103d8610710366004614635565b6114f6565b6107286107233660046142b5565b611520565b6040516103a79291906148df565b610403610744366004613fe4565b611688565b61040361075736600461404d565b6116cf565b6103b861076a366004614635565b611740565b6103b861077d366004613e69565b6117e2565b6103b8610790366004614635565b6118ac565b6104036107a3366004614245565b611912565b6104036107b6366004614130565b611951565b61039b6107c9366004613ea1565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006104b0565b61040361080c366004614245565b611a2e565b610403611a6d565b610444610827366004614206565b611af3565b61040361083a36600461464d565b611bd0565b61040361084d366004613ed9565b611c61565b6103b86040518060400160405280600581526020016418171b971960d91b81525081565b600061088182611e37565b92915050565b60606065805461089690614c8a565b80601f01602080910402602001604051908101604052809291908181526020018280546108c290614c8a565b801561090f5780601f106108e45761010080835404028352916020019161090f565b820191906000526020600020905b8154815290600101906020018083116108f257829003601f168201915b5050505050905090565b600061092482611e87565b506000908152606960205260409020546001600160a01b031690565b8061094a81611ee6565b6109548383611f4d565b505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b031661098e612070565b6001600160a01b03161415610a50576109a5612070565b6001600160a01b03166342966c68856040518263ffffffff1660e01b81526004016109d291815260200190565b600060405180830381600087803b1580156109ec57600080fd5b505af1158015610a00573d6000803e3d6000fd5b505050821580159150610a1a5750610a1a828401846143d5565b15610a3857610a29308561207f565b610a3385856121cd565b610a42565b610a42858561207f565b50630a85bd0160e11b610aab565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b60648201526084015b60405180910390fd5b95945050505050565b6060826001600160401b03811115610adc57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610b0f57816020015b6060815260200190600190039081610afa5790505b50905060005b83811015610bcc57610b8e858583818110610b4057634e487b7160e01b600052603260045260246000fd5b9050602002810190610b529190614ad8565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250612278915050565b828281518110610bae57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610bc490614cbf565b915050610b15565b509392505050565b6060610c1784848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250869250612278915050565b949350505050565b606060005a9050610c318585856113d8565b610c8d5760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b6064820152608401610aa2565b610d1f610c9d6020870187613e69565b30604088013584610cb160608b018b614ad8565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b90819084018382808284376000920191909152506122ad92505050565b9150505b9392505050565b610134546001600160a01b0316610d3f612070565b6001600160a01b031614610d655760405162461bcd60e51b8152600401610aa290614a04565b6000610d79610d74888a614bb2565b61239c565b9050610d84816123f9565b610d97610d90826110a8565b8a83612466565b610da4868686868561260d565b8115610dc657610dc68982610dc1610dbc8b8d614bb2565b612697565b612734565b505050505050505050565b80610de3610ddd612070565b82612776565b610dff5760405162461bcd60e51b8152600401610aa290614969565b81610e0981611ee6565b610e12836123f9565b610e1d858585612466565b5050505050565b6000610d23610d748385614bb2565b80610e3f610ddd612070565b610e5b5760405162461bcd60e51b8152600401610aa290614969565b81610e6581611ee6565b610e7287878787876127f4565b50505050505050565b80610e87610ddd612070565b610ea35760405162461bcd60e51b8152600401610aa290614969565b81610ead81611ee6565b610954836123f9565b610ebe612873565b6001600160a01b0316610ecf612070565b6001600160a01b031614610ef55760405162461bcd60e51b8152600401610aa290614a96565b610eff828261207f565b5050565b61095483838360405180602001604052806000815250611688565b80610f2a610ddd612070565b610f465760405162461bcd60e51b8152600401610aa290614969565b81610f5081611ee6565b610f59836123f9565b61095483612986565b6000610d238383612776565b80610f7a610ddd612070565b610f965760405162461bcd60e51b8152600401610aa290614969565b81610fa081611ee6565b610e728787878787612a2d565b80610fb9610ddd612070565b610fd55760405162461bcd60e51b8152600401610aa290614969565b81610fdf81611ee6565b610feb86868686612b0c565b505050505050565b6000818152606760205260408120546001600160a01b03161515610881565b611045816040516020016110269190614797565b6040516020818303038152906040528051906020012060001c82612bac565b50565b610134546001600160a01b031661105d612070565b6001600160a01b0316146110835760405162461bcd60e51b8152600401610aa290614a04565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b6000818152606760205260408120546001600160a01b0316806108815760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610aa2565b80611114610ddd612070565b6111305760405162461bcd60e51b8152600401610aa290614969565b61114261113b612070565b3084612466565b610eff61114d612070565b836121cd565b600061115e8261239c565b905061116981612bd8565b61117281611ee6565b610eff61117d612070565b8261118785612697565b612c48565b6060806111998484612cd5565b909590945092505050565b60006001600160a01b03821661120e5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610aa2565b506001600160a01b031660009081526068602052604090205490565b6001600160a01b0381166000908152610135602052604081205461124d81612cf6565b611255578091505b50919050565b611263612873565b6001600160a01b0316611274612070565b6001600160a01b03161461129a5760405162461bcd60e51b8152600401610aa290614a96565b6112a4848461207f565b50505050565b6112b48787612d40565b6112bc612070565b6001600160a01b03166112ce866110a8565b6001600160a01b0316146113245760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610aa2565b610e72848484848961260d565b60606066805461089690614c8a565b610134546001600160a01b0316611355612070565b6001600160a01b03161461137b5760405162461bcd60e51b8152600401610aa290614a04565b6113886101338383613be1565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b82826040516113ba92919061491d565b60405180910390a15050565b610eff6113d1612070565b8383612daf565b6000610c176113e685614bbf565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612e7e92505050565b6040805160608101825230815273049aba7510f45ba5b64ea9e658e342f904db358d602082015273d1e5b0ff1287aa9f9a268759062e4ab08b9dacbe9181019190915260005b6003811015610eff5761149f82826003811061149557634e487b7160e01b600052603260045260246000fd5b6020020151612fd6565b806114a981614cbf565b915050611469565b806114bd610ddd612070565b6114d95760405162461bcd60e51b8152600401610aa290614969565b816114e381611ee6565b6112a46114ef846110a8565b8585612466565b6000818152606760205260408120546001600160a01b0316611519576000610881565b3092915050565b606080836001600160401b0381111561154957634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561157c57816020015b60608152602001906001900390816115675790505b509150836001600160401b038111156115a557634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156115d857816020015b60608152602001906001900390816115c35790505b50905060005b8481101561167f5761161686868381811061160957634e487b7160e01b600052603260045260246000fd5b9050602002013585612cd5565b84838151811061163657634e487b7160e01b600052603260045260246000fd5b6020026020010184848151811061165d57634e487b7160e01b600052603260045260246000fd5b602002602001018290528290525050808061167790614cbf565b9150506115de565b50935093915050565b81611694610ddd612070565b6116b05760405162461bcd60e51b8152600401610aa290614969565b826116ba81611ee6565b6116c3846123f9565b610feb8686868661301b565b610134546001600160a01b03166116e4612070565b6001600160a01b03161461170a5760405162461bcd60e51b8152600401610aa290614a04565b6000611719610d74888a614bb2565b9050611733898261172d610dbc8b8d614bb2565b8561304e565b610dc6868686868561260d565b600081815260c96020526040902080546060919061175d90614c8a565b80601f016020809104026020016040519081016040528092919081815260200182805461178990614c8a565b80156117d65780601f106117ab576101008083540402835291602001916117d6565b820191906000526020600020905b8154815290600101906020018083116117b957829003601f168201915b50505050509050919050565b6001600160a01b0381166000908152610135602052604090205460609061180881612cf6565b61125557600081815261013860205260409020805461182690614c8a565b80601f016020809104026020016040519081016040528092919081815260200182805461185290614c8a565b801561189f5780601f106118745761010080835404028352916020019161189f565b820191906000526020600020905b81548152906001019060200180831161188257829003601f168201915b5050505050915050919050565b60606118b782611e87565b60006118c16130a1565b905060008151116118e15760405180602001604052806000815250610d23565b806118eb846130b1565b6040516020016118fc92919061483e565b6040516020818303038152906040529392505050565b8061191e610ddd612070565b61193a5760405162461bcd60e51b8152600401610aa290614969565b8161194481611ee6565b610e72878787878761260d565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b0316611984612070565b6001600160a01b0316146119aa5760405162461bcd60e51b8152600401610aa290614a96565b60208114156119cd5760006119c182840184614635565b90506112a4848261207f565b60006119db82840184614343565b805190915060005b81811015610feb57611a1c86848381518110611a0f57634e487b7160e01b600052603260045260246000fd5b602002602001015161207f565b80611a2681614cbf565b9150506119e3565b80611a3a610ddd612070565b611a565760405162461bcd60e51b8152600401610aa290614969565b81611a6081611ee6565b610e7287878787876131ca565b6000611a77612070565b6001600160a01b03811660009081526101356020526040902054909150611aea5760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b6064820152608401610aa2565b61104581612fd6565b6060816001600160401b03811115611b1b57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611b4e57816020015b6060815260200190600190039081611b395790505b50905060005b82811015611bc957611b8b848483818110611b7f57634e487b7160e01b600052603260045260246000fd5b90506020020135611740565b828281518110611bab57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080611bc190614cbf565b915050611b54565b5092915050565b610134546001600160a01b0316611be5612070565b6001600160a01b031614611c0b5760405162461bcd60e51b8152600401610aa290614a04565b61013454611c22906001600160a01b03168461207f565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611c5492919061491d565b60405180910390a2505050565b600054610100900460ff1615808015611c815750600054600160ff909116105b80611c9b5750303b158015611c9b575060005460ff166001145b611cfe5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610aa2565b6000805460ff191660011790558015611d21576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b90830152611dc9916131e0565b611dd161322e565b611dd961322e565b611de283613257565b611deb82613287565b8015610e1d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b1480611e6857506001600160e01b03198216635b5e139f60e01b145b8061088157506301ffc9a760e01b6001600160e01b0319831614610881565b6000818152606760205260409020546001600160a01b03166110455760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610aa2565b30331415611f4457611ef66132b7565b81146110455760405162461bcd60e51b815260206004820152601760248201527f52656769737472793a20544f4b454e5f494e56414c49440000000000000000006044820152606401610aa2565b611045816132cc565b6000611f58826110a8565b9050806001600160a01b0316836001600160a01b03161415611fc65760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610aa2565b806001600160a01b0316611fd8612070565b6001600160a01b03161480611ff45750611ff4816107c9612070565b6120665760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610aa2565b61095483836132fa565b600061207a613368565b905090565b6001600160a01b0382166120d55760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610aa2565b6000818152606760205260409020546001600160a01b03161561213a5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610aa2565b61214660008383613384565b6001600160a01b038216600090815260686020526040812080546001929061216f908490614b6f565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006121d7612873565b90506121e381836132fa565b600080516020614d5c83398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb9161224091889130919060440161486d565b600060405180830381600087803b15801561225a57600080fd5b505af115801561226e573d6000803e3d6000fd5b5050505050505050565b6060610d238360405160200161228e9190614797565b6040516020818303038152906040528051906020012060001c83613421565b60606122b8856132cc565b600080876001600160a01b0316866122d28b8a8989613503565b6040516122df9190614797565b60006040518083038160008787f1925050503d806000811461231d576040519150601f19603f3d011682016040523d82523d6000602084013e612322565b606091505b509092509050612333603f87614b87565b5a1161234f57634e487b7160e01b600052600160045260246000fd5b61238f82826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c4544000000000000815250613533565b9998505050505050505050565b805160009081905b8015611bc9576123e582856123ba600185614b9b565b815181106123d857634e487b7160e01b600052603260045260246000fd5b602002602001015161356c565b9150806123f181614c73565b9150506123a4565b61240281613619565b60405160200161241491815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b0316612479826110a8565b6001600160a01b0316146124dd5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610aa2565b6001600160a01b03821661253f5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610aa2565b61254a838383613384565b6125556000826132fa565b6001600160a01b038316600090815260686020526040812080546001929061257e908490614b9b565b90915550506001600160a01b03821660009081526068602052604081208054600192906125ac908490614b6f565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60005b84811015610feb5761268586868381811061263b57634e487b7160e01b600052603260045260246000fd5b905060200281019061264d9190614ad8565b86868581811061266d57634e487b7160e01b600052603260045260246000fd5b905060200281019061267f9190614ad8565b86612a2d565b8061268f81614cbf565b915050612610565b60606000826000815181106126bc57634e487b7160e01b600052603260045260246000fd5b602002602001015190506000600190505b8351811015611bc957818482815181106126f757634e487b7160e01b600052603260045260246000fd5b60200260200101516040516020016127109291906147f2565b6040516020818303038152906040529150808061272c90614cbf565b9150506126cd565b61dead6001600160a01b0384161480159061276657506001600160a01b03831660009081526101356020526040902054155b1561095457610954838383612c48565b600080612782836110a8565b9050806001600160a01b0316846001600160a01b031614806127c957506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610c175750836001600160a01b03166127e284610919565b6001600160a01b031614949350505050565b60005b84811015610feb5761286186868381811061282257634e487b7160e01b600052603260045260246000fd5b9050602002013585858481811061284957634e487b7160e01b600052603260045260246000fd5b905060200281019061285b9190614ad8565b85612b0c565b8061286b81614cbf565b9150506127f7565b600080600080516020614d5c8339815191525460405163721804d360e11b81523060048201526001600160a01b039091169150600090829063e43009a69060240160206040518083038186803b1580156128cc57600080fd5b505afa1580156128e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061290491906143ef565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f96039060240160206040518083038186803b15801561294757600080fd5b505afa15801561295b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061297f9190613e85565b9250505090565b6000612991826110a8565b905061299f81600084613384565b6129aa6000836132fa565b6001600160a01b03811660009081526068602052604081208054600192906129d3908490614b9b565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008585604051602001612a4292919061482e565b60408051601f198184030181528282528051602091820120601f8901829004820284018201909252878352909250612a969183918990899081908401838280828437600092019190915250612bac92505050565b610feb8187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b018190048102820181019092528981529250899150889081908401838280828437600092019190915250889250613645915050565b612b1584613780565b612b615760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e44000000006044820152606401610aa2565b6112a484612b6e86611740565b85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250613645915050565b612bb582613780565b610eff57600082815260c960209081526040909120825161095492840190613c61565b612be0612070565b6001600160a01b0316612bf2826110a8565b6001600160a01b0316146110455760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610aa2565b6000828152610138602052604090208054612c6290614c8a565b15159050612c8c576000828152610138602090815260409091208251612c8a92840190613c61565b505b6001600160a01b03831660008181526101356020526040808220859055518492917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a3505050565b606080612ce184611740565b9150612ced8484613421565b90509250929050565b6000818152610137602052604081205460ff16801561088157506101366000612d1d612070565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b600080516020614d5c83398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f90612d81908690869060040161491d565b600060405180830381600087803b158015612d9b57600080fd5b505af1158015610e72573d6000803e3d6000fd5b816001600160a01b0316836001600160a01b03161415612e115760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610aa2565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f9060240160206040518083038186803b158015612ec057600080fd5b505afa158015612ed4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ef891906143ef565b90506000612fa6866060015180519060200120868860200151604051602001612f469392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b9050818660200151148015612fcc57508551612fcc906001600160a01b031682866137a6565b9695505050505050565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b613026848484612466565b613032848484846138f6565b6112a45760405162461bcd60e51b8152600401610aa2906149b2565b613058848461207f565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c3952836040516130889190614931565b60405180910390a280156112a4576112a4848484612734565b6060610133805461089690614c8a565b6060816130d55750506040805180820190915260018152600360fc1b602082015290565b8160005b81156130ff57806130e981614cbf565b91506130f89050600a83614b87565b91506130d9565b6000816001600160401b0381111561312757634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015613151576020820181803683370190505b5090505b8415610c1757613166600183614b9b565b9150613173600a86614cda565b61317e906030614b6f565b60f81b8183815181106131a157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506131c3600a86614b87565b9450613155565b6131d3816123f9565b610e1d858585858561260d565b600054610100900460ff166132075760405162461bcd60e51b8152600401610aa290614a4b565b815161321a906065906020850190613c61565b508051610954906066906020840190613c61565b600054610100900460ff166132555760405162461bcd60e51b8152600401610aa290614a4b565b565b600054610100900460ff1661327e5760405162461bcd60e51b8152600401610aa290614a4b565b61104581613a07565b600054610100900460ff166132ae5760405162461bcd60e51b8152600401610aa290614a4b565b61104581613a60565b6000303314156132c95750601f193601355b90565b600081815261010060205260409020546132e7906001614b6f565b6000918252610100602052604090912055565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061332f826110a8565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60003033141561337f575060331936013560601c90565b503390565b6000818152610137602052604090205460ff1615806133ab57506001600160a01b03821615155b6133f75760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f555047524144454400000000000000006044820152606401610aa2565b6001600160a01b038316600090815261013560205260409020548114156109545761095483612fd6565b606061342c82612cf6565b156134465750604080516020810190915260008152610881565b60ca600061345384613619565b81526020019081526020016000206000848152602001908152602001600020805461347d90614c8a565b80601f01602080910402602001604051908101604052809291908181526020018280546134a990614c8a565b80156134f65780601f106134cb576101008083540402835291602001916134f6565b820191906000526020600020905b8154815290600101906020018083116134d957829003601f168201915b5050505050905092915050565b606082858560405160200161351a939291906147b3565b6040516020818303038152906040529050949350505050565b60608315613542575081610d23565b8251156135525782518084602001fd5b8160405162461bcd60e51b8152600401610aa29190614931565b60008151600014156135b85760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b6044820152606401610aa2565b82826040516020016135ca9190614797565b604051602081830303815290604052805190602001206040516020016135fa929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b600081815260cb60205260408120541561364157600082815260cb6020526040902054610881565b5090565b60ca600061365283613619565b81526020019081526020016000206000858152602001908152602001600020805461367c90614c8a565b151590506136d357826040516136929190614797565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f86856040516136ca9190614931565b60405180910390a35b8160ca60006136e184613619565b815260200190815260200160002060008681526020019081526020016000209080519060200190613713929190613c61565b50816040516137229190614797565b6040518091039020836040516137389190614797565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d928686604051613772929190614944565b60405180910390a450505050565b600081815260c960205260408120805482919061379c90614c8a565b9050119050919050565b60008060006137b58585613aae565b909250905060008160048111156137dc57634e487b7160e01b600052602160045260246000fd5b1480156137fa5750856001600160a01b0316826001600160a01b0316145b1561380a57600192505050610d23565b600080876001600160a01b0316631626ba7e60e01b8888604051602401613832929190614904565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516138709190614797565b600060405180830381855afa9150503d80600081146138ab576040519150601f19603f3d011682016040523d82523d6000602084013e6138b0565b606091505b50915091508180156138c3575080516020145b80156138ea57508051630b135d3f60e11b906138e890830160209081019084016143ef565b145b98975050505050505050565b60006001600160a01b0384163b156139ff57836001600160a01b031663150b7a0261391f612070565b8786866040518563ffffffff1660e01b81526004016139419493929190614899565b602060405180830381600087803b15801561395b57600080fd5b505af192505050801561398b575060408051601f3d908101601f1916820190925261398891810190614423565b60015b6139e5573d8080156139b9576040519150601f19603f3d011682016040523d82523d6000602084013e6139be565b606091505b5080516139dd5760405162461bcd60e51b8152600401610aa2906149b2565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c17565b506001610c17565b600054610100900460ff16613a2e5760405162461bcd60e51b8152600401610aa290614a4b565b80600080516020614d5c8339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff16613a875760405162461bcd60e51b8152600401610aa290614a4b565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613a3f565b600080825160411415613ae55760208301516040840151606085015160001a613ad987828585613af4565b94509450505050613aed565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613b2b5750600090506003613bd8565b8460ff16601b14158015613b4357508460ff16601c14155b15613b545750600090506004613bd8565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613ba8573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613bd157600060019250925050613bd8565b9150600090505b94509492505050565b828054613bed90614c8a565b90600052602060002090601f016020900481019282613c0f5760008555613c55565b82601f10613c285782800160ff19823516178555613c55565b82800160010185558215613c55579182015b82811115613c55578235825591602001919060010190613c3a565b50613641929150613cd5565b828054613c6d90614c8a565b90600052602060002090601f016020900481019282613c8f5760008555613c55565b82601f10613ca857805160ff1916838001178555613c55565b82800160010185558215613c55579182015b82811115613c55578251825591602001919060010190613cba565b5b808211156136415760008155600101613cd6565b6000613cfd613cf884614b4c565b614b1c565b9050808382526020808301915083868660051b86011115613d1d57600080fd5b6000805b87811015613d5d5782356001600160401b03811115613d3e578283fd5b613d4a8a828a01613dff565b8652509383019391830191600101613d21565b50505050509392505050565b60008083601f840112613d7a578182fd5b5081356001600160401b03811115613d90578182fd5b6020830191508360208260051b8501011115613aed57600080fd5b80358015158114613dbb57600080fd5b919050565b60008083601f840112613dd1578182fd5b5081356001600160401b03811115613de7578182fd5b602083019150836020828501011115613aed57600080fd5b600082601f830112613e0f578081fd5b81356001600160401b03811115613e2857613e28614d1a565b613e3b601f8201601f1916602001614b1c565b818152846020838601011115613e4f578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215613e7a578081fd5b8135610d2381614d30565b600060208284031215613e96578081fd5b8151610d2381614d30565b60008060408385031215613eb3578081fd5b8235613ebe81614d30565b91506020830135613ece81614d30565b809150509250929050565b60008060008060808587031215613eee578182fd5b8435613ef981614d30565b93506020850135613f0981614d30565b92506040850135613f1981614d30565b91506060850135613f2981614d30565b939692955090935050565b600080600060608486031215613f48578081fd5b8335613f5381614d30565b92506020840135613f6381614d30565b929592945050506040919091013590565b600080600080600060808688031215613f8b578283fd5b8535613f9681614d30565b94506020860135613fa681614d30565b93506040860135925060608601356001600160401b03811115613fc7578182fd5b613fd388828901613dc0565b969995985093965092949392505050565b60008060008060808587031215613ff9578182fd5b843561400481614d30565b9350602085013561401481614d30565b92506040850135915060608501356001600160401b03811115614035578182fd5b61404187828801613dff565b91505092959194509250565b60008060008060008060008060a0898b031215614068578586fd5b883561407381614d30565b975060208901356001600160401b038082111561408e578788fd5b61409a8c838d01613d69565b909950975060408b01359150808211156140b2578485fd5b6140be8c838d01613d69565b909750955060608b01359150808211156140d6578485fd5b506140e38b828c01613d69565b90945092506140f6905060808a01613dab565b90509295985092959890939650565b60008060408385031215614117578182fd5b823561412281614d30565b9150612ced60208401613dab565b600080600060408486031215614144578081fd5b833561414f81614d30565b925060208401356001600160401b03811115614169578182fd5b61417586828701613dc0565b9497909650939450505050565b60008060408385031215614194578182fd5b823561419f81614d30565b946020939093013593505050565b600080600080606085870312156141c2578182fd5b84356141cd81614d30565b93506020850135925060408501356001600160401b038111156141ee578283fd5b6141fa87828801613dc0565b95989497509550505050565b60008060208385031215614218578182fd5b82356001600160401b0381111561422d578283fd5b61423985828601613d69565b90969095509350505050565b60008060008060006060868803121561425c578283fd5b85356001600160401b0380821115614272578485fd5b61427e89838a01613d69565b90975095506020880135915080821115614296578485fd5b506142a388828901613d69565b96999598509660400135949350505050565b6000806000604084860312156142c9578081fd5b83356001600160401b038111156142de578182fd5b6142ea86828701613d69565b909790965060209590950135949350505050565b60006020828403121561430f578081fd5b81356001600160401b03811115614324578182fd5b8201601f81018413614334578182fd5b610c1784823560208401613cea565b60006020808385031215614355578182fd5b82356001600160401b0381111561436a578283fd5b8301601f8101851361437a578283fd5b8035614388613cf882614b4c565b80828252848201915084840188868560051b87010111156143a7578687fd5b8694505b838510156143c95780358352600194909401939185019185016143ab565b50979650505050505050565b6000602082840312156143e6578081fd5b610d2382613dab565b600060208284031215614400578081fd5b5051919050565b600060208284031215614418578081fd5b8135610d2381614d45565b600060208284031215614434578081fd5b8151610d2381614d45565b60008060008060008060006080888a031215614459578081fd5b87356001600160401b038082111561446f578283fd5b61447b8b838c01613dc0565b909950975060208a0135965060408a013591508082111561449a578283fd5b6144a68b838c01613d69565b909650945060608a01359150808211156144be578283fd5b506144cb8a828b01613d69565b989b979a50959850939692959293505050565b600080602083850312156144f0578182fd5b82356001600160401b03811115614505578283fd5b61423985828601613dc0565b600080600080600060608688031215614528578283fd5b85356001600160401b038082111561453e578485fd5b61454a89838a01613dc0565b90975095506020880135915080821115614562578485fd5b506142a388828901613dc0565b600080600060408486031215614583578081fd5b83356001600160401b03811115614598578182fd5b6142ea86828701613dc0565b6000602082840312156145b5578081fd5b81356001600160401b038111156145ca578182fd5b610c1784828501613dff565b6000806000604084860312156145ea578081fd5b83356001600160401b0380821115614600578283fd5b9085019060808288031215614613578283fd5b90935060208501359080821115614628578283fd5b5061417586828701613dc0565b600060208284031215614646578081fd5b5035919050565b600080600060408486031215614661578081fd5b8335925060208401356001600160401b03811115614169578182fd5b60008060008060608587031215614692578182fd5b8435935060208501356001600160401b038111156146ae578283fd5b6146ba87828801613dc0565b9598909750949560400135949350505050565b600080604083850312156146df578182fd5b50508035926020909101359150565b600081518084526020808501808196508360051b81019150828601855b8581101561473557828403895261472384835161476b565b9885019893509084019060010161470b565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008151808452614783816020860160208601614c47565b601f01601f19169290920160200192915050565b600082516147a9818460208701614c47565b9190910192915050565b600084516147c5818460208901614c47565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b60008351614804818460208801614c47565b601760f91b9083019081528351614822816001840160208801614c47565b01600101949350505050565b8183823760009101908152919050565b60008351614850818460208801614c47565b835190830190614864818360208801614c47565b01949350505050565b6001600160a01b03848116825283166020820152606060408201819052600090610aab9083018461476b565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612fcc9083018461476b565b602081526000610d2360208301846146ee565b6040815260006148f260408301856146ee565b8281036020840152610d1f81856146ee565b828152604060208201526000610c17604083018461476b565b602081526000610c17602083018486614742565b602081526000610d23602083018461476b565b604081526000614957604083018561476b565b8281036020840152610d1f818561476b565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b6000808335601e19843603018112614aee578283fd5b8301803591506001600160401b03821115614b07578283fd5b602001915036819003821315613aed57600080fd5b604051601f8201601f191681016001600160401b0381118282101715614b4457614b44614d1a565b604052919050565b60006001600160401b03821115614b6557614b65614d1a565b5060051b60200190565b60008219821115614b8257614b82614cee565b500190565b600082614b9657614b96614d04565b500490565b600082821015614bad57614bad614cee565b500390565b6000610d23368484613cea565b600060808236031215614bd0578081fd5b604051608081016001600160401b038282108183111715614bf357614bf3614d1a565b8160405284359150614c0482614d30565b81835260208501356020840152604085013560408401526060850135915080821115614c2e578384fd5b50614c3b36828601613dff565b60608301525092915050565b60005b83811015614c62578181015183820152602001614c4a565b838111156112a45750506000910152565b600081614c8257614c82614cee565b506000190190565b600181811c90821680614c9e57607f821691505b6020821081141561125557634e487b7160e01b600052602260045260246000fd5b6000600019821415614cd357614cd3614cee565b5060010190565b600082614ce957614ce9614d04565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461104557600080fd5b6001600160e01b03198116811461104557600080fdfebe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafea164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class UNSRegistry__factory extends ethers_1.ContractFactory {
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
exports.UNSRegistry__factory = UNSRegistry__factory;
UNSRegistry__factory.bytecode = _bytecode;
UNSRegistry__factory.abi = _abi;
