"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNSRegistryMock__factory = void 0;
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getTokenName",
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
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
            },
        ],
        name: "upgradeAll",
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
const _bytecode = "0x608060405234801561001057600080fd5b50614e8e806100206000396000f3fe608060405234801561001057600080fd5b50600436106103995760003560e01c80637e37479e116101e9578063ba5d40b71161010f578063e985e9c5116100ad578063f5c1f76e1161007c578063f5c1f76e14610855578063f7df5c6014610868578063f8c8765e1461087b578063ffa1ad741461088e57600080fd5b8063e985e9c5146107f7578063ebf0c71714610833578063ec129eea1461083a578063f25eb5c11461084d57600080fd5b8063c87b56dd116100e9578063c87b56dd146107ab578063ce92b33e146107be578063cf2c52cb146107d1578063dbe16c07146107e457600080fd5b8063ba5d40b714610772578063bb5b27e114610785578063bebec6b41461079857600080fd5b8063a3f4df7e11610187578063ae31844a11610156578063ae31844a14610718578063b3f9e4cb1461072b578063b85afd281461073e578063b88d4fde1461075f57600080fd5b8063a3f4df7e146106be578063a4247400146106ea578063ab0dff61146106fd578063ab3b87fe1461070557600080fd5b80639559c0bd116101c35780639559c0bd1461068857806395d89b411461069057806399e0dd7c14610698578063a22cb465146106ab57600080fd5b80637e37479e1461064f57806394d008ef146106625780639508b1c41461067557600080fd5b806342842e0e116102ce578063509602391161026c578063663f7b2a1161023b578063663f7b2a146105e7578063672b9f81146105fa5780636ccbae5f1461061b57806370a082311461063c57600080fd5b80635096023914610592578063572b6c05146105a55780636352211e146105c1578063638e5c78146105d457600080fd5b806347c81699116102a857806347c81699146105465780634a72584d146105595780634f558e791461056c57806350382c1a1461057f57600080fd5b806342842e0e1461050d57806342966c6814610520578063430c20811461053357600080fd5b80631bf7e13e1161033b578063276fabb111610315578063276fabb1146104b357806327f18975146104d4578063310bd74b146104e757806340c10f19146104fa57600080fd5b80631bf7e13e1461047a5780631f71be061461048d57806323b872dd146104a057600080fd5b8063095ea7b311610377578063095ea7b314610406578063150b7a021461041b5780631bd8cc1a146104475780631be5e7ed1461046757600080fd5b806301ffc9a71461039e57806306fdde03146103c6578063081812fc146103db575b600080fd5b6103b16103ac36600461450d565b6108b2565b60405190151581526020015b60405180910390f35b6103ce6108c3565b6040516103bd9190614a37565b6103ee6103e936600461473b565b610955565b6040516001600160a01b0390911681526020016103bd565b610419610414366004614288565b61097c565b005b61042e61042936600461407a565b610995565b6040516001600160e01b031990911681526020016103bd565b61045a6104553660046143bb565b610af0565b6040516103bd91906149d2565b6103ce610475366004614675565b610c10565b6103ce6104883660046146dc565b610c5b565b61041961049b366004614153565b610d66565b6104196104ae36600461403a565b610e0d565b6104c66104c136600461430c565b610e60565b6040519081526020016103bd565b6104196104e236600461434b565b610e6f565b6104196104f536600461473b565b610eb7565b610419610508366004614288565b610ef2565b61041961051b36600461403a565b610f3f565b61041961052e36600461473b565b610f5a565b6103b1610541366004614288565b610f9e565b610419610554366004614617565b610faa565b610419610567366004614783565b610fe9565b6103b161057a36600461473b565b61102f565b61041961058d3660046146aa565b61104e565b6104196105a0366004613f6f565b611084565b6103b16105b3366004613f6f565b6001600160a01b0316301490565b6103ee6105cf36600461473b565b6110e4565b6104196105e236600461473b565b611144565b6104196105f5366004614404565b61118f565b61060d6106083660046147d3565b6111c8565b6040516103bd929190614a4a565b6104c661062936600461473b565b6000908152610100602052604090205490565b6104c661064a366004613f6f565b6111e0565b6104c661065d366004613f6f565b611266565b6104196106703660046142b3565b611297565b610419610683366004614545565b6112e6565b6104c6601481565b6103ce61136d565b6104196106a63660046145e4565b61137c565b6104196106b936600461420b565b611402565b6103ce6040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b6103b16106f83660046146dc565b611414565b61041961145f565b610419610713366004614288565b6114ed565b61041961072636600461430c565b611532565b6103ee61073936600461473b565b6115de565b61075161074c3660046143bb565b611608565b6040516103bd9291906149e5565b61041961076d3660046140ea565b611770565b610419610780366004614153565b6117b7565b6103ce61079336600461473b565b611828565b6103ce6107a6366004613f6f565b6118ca565b6103ce6107b936600461473b565b611994565b6104196107cc36600461434b565b6119fa565b6104196107df366004614236565b611a39565b6103ce6107f236600461473b565b611b16565b6103b1610805366004613fa7565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006104c6565b61041961084836600461434b565b611b34565b610419611b73565b61045a61086336600461430c565b611bf9565b610419610876366004614753565b611cd6565b610419610889366004613fdf565b611d67565b6103ce6040518060400160405280600581526020016418171b971960d91b81525081565b60006108bd82611f3d565b92915050565b6060606580546108d290614d90565b80601f01602080910402602001604051908101604052809291908181526020018280546108fe90614d90565b801561094b5780601f106109205761010080835404028352916020019161094b565b820191906000526020600020905b81548152906001019060200180831161092e57829003601f168201915b5050505050905090565b600061096082611f8d565b506000908152606960205260409020546001600160a01b031690565b8061098681611fec565b6109908383612053565b505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b03166109ca612176565b6001600160a01b03161415610a8c576109e1612176565b6001600160a01b03166342966c68856040518263ffffffff1660e01b8152600401610a0e91815260200190565b600060405180830381600087803b158015610a2857600080fd5b505af1158015610a3c573d6000803e3d6000fd5b505050821580159150610a565750610a56828401846144db565b15610a7457610a653085612185565b610a6f85856122d3565b610a7e565b610a7e8585612185565b50630a85bd0160e11b610ae7565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b60648201526084015b60405180910390fd5b95945050505050565b6060826001600160401b03811115610b1857634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610b4b57816020015b6060815260200190600190039081610b365790505b50905060005b83811015610c0857610bca858583818110610b7c57634e487b7160e01b600052603260045260246000fd5b9050602002810190610b8e9190614bde565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525087925061237e915050565b828281518110610bea57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610c0090614dc5565b915050610b51565b509392505050565b6060610c5384848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525086925061237e915050565b949350505050565b606060005a9050610c6d858585611414565b610cc95760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b6064820152608401610ade565b610d5b610cd96020870187613f6f565b30604088013584610ced60608b018b614bde565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b90819084018382808284376000920191909152506123b392505050565b9150505b9392505050565b610134546001600160a01b0316610d7b612176565b6001600160a01b031614610da15760405162461bcd60e51b8152600401610ade90614b0a565b6000610db5610db0888a614cb8565b6124a2565b9050610dc0816124ff565b610dd3610dcc826110e4565b8a8361256c565b610de08686868685612713565b8115610e0257610e028982610dfd610df88b8d614cb8565b61279d565b61283a565b505050505050505050565b80610e1f610e19612176565b8261287c565b610e3b5760405162461bcd60e51b8152600401610ade90614a6f565b81610e4581611fec565b610e4e836124ff565b610e5985858561256c565b5050505050565b6000610d5f610db08385614cb8565b80610e7b610e19612176565b610e975760405162461bcd60e51b8152600401610ade90614a6f565b81610ea181611fec565b610eae87878787876128fa565b50505050505050565b80610ec3610e19612176565b610edf5760405162461bcd60e51b8152600401610ade90614a6f565b81610ee981611fec565b610990836124ff565b610efa612979565b6001600160a01b0316610f0b612176565b6001600160a01b031614610f315760405162461bcd60e51b8152600401610ade90614b9c565b610f3b8282612185565b5050565b61099083838360405180602001604052806000815250611770565b80610f66610e19612176565b610f825760405162461bcd60e51b8152600401610ade90614a6f565b81610f8c81611fec565b610f95836124ff565b61099083612a8c565b6000610d5f838361287c565b80610fb6610e19612176565b610fd25760405162461bcd60e51b8152600401610ade90614a6f565b81610fdc81611fec565b610eae8787878787612b33565b80610ff5610e19612176565b6110115760405162461bcd60e51b8152600401610ade90614a6f565b8161101b81611fec565b61102786868686612c12565b505050505050565b6000818152606760205260408120546001600160a01b031615156108bd565b61108181604051602001611062919061489d565b6040516020818303038152906040528051906020012060001c82612cb2565b50565b610134546001600160a01b0316611099612176565b6001600160a01b0316146110bf5760405162461bcd60e51b8152600401610ade90614b0a565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b6000818152606760205260408120546001600160a01b0316806108bd5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610ade565b80611150610e19612176565b61116c5760405162461bcd60e51b8152600401610ade90614a6f565b61117e611177612176565b308461256c565b610f3b611189612176565b836122d3565b600061119a826124a2565b90506111a581612cde565b6111ae81611fec565b610f3b6111b9612176565b826111c38561279d565b612d4e565b6060806111d58484612ddb565b909590945092505050565b60006001600160a01b03821661124a5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610ade565b506001600160a01b031660009081526068602052604090205490565b6001600160a01b0381166000908152610135602052604081205461128981612dfc565b611291578091505b50919050565b61129f612979565b6001600160a01b03166112b0612176565b6001600160a01b0316146112d65760405162461bcd60e51b8152600401610ade90614b9c565b6112e08484612185565b50505050565b6112f08787612e46565b6112f8612176565b6001600160a01b031661130a866110e4565b6001600160a01b0316146113605760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610ade565b610eae8484848489612713565b6060606680546108d290614d90565b610134546001600160a01b0316611391612176565b6001600160a01b0316146113b75760405162461bcd60e51b8152600401610ade90614b0a565b6113c46101338383613ce7565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b82826040516113f6929190614a23565b60405180910390a15050565b610f3b61140d612176565b8383612eb5565b6000610c5361142285614cc5565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612f8492505050565b6040805160608101825230815273049aba7510f45ba5b64ea9e658e342f904db358d602082015273d1e5b0ff1287aa9f9a268759062e4ab08b9dacbe9181019190915260005b6003811015610f3b576114db8282600381106114d157634e487b7160e01b600052603260045260246000fd5b60200201516130dc565b806114e581614dc5565b9150506114a5565b806114f9610e19612176565b6115155760405162461bcd60e51b8152600401610ade90614a6f565b8161151f81611fec565b6112e061152b846110e4565b858561256c565b610134546001600160a01b0316611547612176565b6001600160a01b03161461156d5760405162461bcd60e51b8152600401610ade90614b0a565b60005b81811015610990576001610137600085858581811061159f57634e487b7160e01b600052603260045260246000fd5b90506020020135815260200190815260200160002060006101000a81548160ff02191690831515021790555080806115d690614dc5565b915050611570565b6000818152606760205260408120546001600160a01b03166116015760006108bd565b3092915050565b606080836001600160401b0381111561163157634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561166457816020015b606081526020019060019003908161164f5790505b509150836001600160401b0381111561168d57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156116c057816020015b60608152602001906001900390816116ab5790505b50905060005b84811015611767576116fe8686838181106116f157634e487b7160e01b600052603260045260246000fd5b9050602002013585612ddb565b84838151811061171e57634e487b7160e01b600052603260045260246000fd5b6020026020010184848151811061174557634e487b7160e01b600052603260045260246000fd5b602002602001018290528290525050808061175f90614dc5565b9150506116c6565b50935093915050565b8161177c610e19612176565b6117985760405162461bcd60e51b8152600401610ade90614a6f565b826117a281611fec565b6117ab846124ff565b61102786868686613121565b610134546001600160a01b03166117cc612176565b6001600160a01b0316146117f25760405162461bcd60e51b8152600401610ade90614b0a565b6000611801610db0888a614cb8565b905061181b8982611815610df88b8d614cb8565b85613154565b610e028686868685612713565b600081815260c96020526040902080546060919061184590614d90565b80601f016020809104026020016040519081016040528092919081815260200182805461187190614d90565b80156118be5780601f10611893576101008083540402835291602001916118be565b820191906000526020600020905b8154815290600101906020018083116118a157829003601f168201915b50505050509050919050565b6001600160a01b038116600090815261013560205260409020546060906118f081612dfc565b61129157600081815261013860205260409020805461190e90614d90565b80601f016020809104026020016040519081016040528092919081815260200182805461193a90614d90565b80156119875780601f1061195c57610100808354040283529160200191611987565b820191906000526020600020905b81548152906001019060200180831161196a57829003601f168201915b5050505050915050919050565b606061199f82611f8d565b60006119a96131a7565b905060008151116119c95760405180602001604052806000815250610d5f565b806119d3846131b7565b6040516020016119e4929190614944565b6040516020818303038152906040529392505050565b80611a06610e19612176565b611a225760405162461bcd60e51b8152600401610ade90614a6f565b81611a2c81611fec565b610eae8787878787612713565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b0316611a6c612176565b6001600160a01b031614611a925760405162461bcd60e51b8152600401610ade90614b9c565b6020811415611ab5576000611aa98284018461473b565b90506112e08482612185565b6000611ac382840184614449565b805190915060005b8181101561102757611b0486848381518110611af757634e487b7160e01b600052603260045260246000fd5b6020026020010151612185565b80611b0e81614dc5565b915050611acb565b60008181526101386020526040902080546060919061184590614d90565b80611b40610e19612176565b611b5c5760405162461bcd60e51b8152600401610ade90614a6f565b81611b6681611fec565b610eae87878787876132d0565b6000611b7d612176565b6001600160a01b03811660009081526101356020526040902054909150611bf05760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b6064820152608401610ade565b611081816130dc565b6060816001600160401b03811115611c2157634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611c5457816020015b6060815260200190600190039081611c3f5790505b50905060005b82811015611ccf57611c91848483818110611c8557634e487b7160e01b600052603260045260246000fd5b90506020020135611828565b828281518110611cb157634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080611cc790614dc5565b915050611c5a565b5092915050565b610134546001600160a01b0316611ceb612176565b6001600160a01b031614611d115760405162461bcd60e51b8152600401610ade90614b0a565b61013454611d28906001600160a01b031684612185565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611d5a929190614a23565b60405180910390a2505050565b600054610100900460ff1615808015611d875750600054600160ff909116105b80611da15750303b158015611da1575060005460ff166001145b611e045760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610ade565b6000805460ff191660011790558015611e27576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b90830152611ecf916132e6565b611ed7613334565b611edf613334565b611ee88361335d565b611ef18261338d565b8015610e59576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b1480611f6e57506001600160e01b03198216635b5e139f60e01b145b806108bd57506301ffc9a760e01b6001600160e01b03198316146108bd565b6000818152606760205260409020546001600160a01b03166110815760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610ade565b3033141561204a57611ffc6133bd565b81146110815760405162461bcd60e51b815260206004820152601760248201527f52656769737472793a20544f4b454e5f494e56414c49440000000000000000006044820152606401610ade565b611081816133d2565b600061205e826110e4565b9050806001600160a01b0316836001600160a01b031614156120cc5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610ade565b806001600160a01b03166120de612176565b6001600160a01b031614806120fa57506120fa81610805612176565b61216c5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610ade565b6109908383613400565b600061218061346e565b905090565b6001600160a01b0382166121db5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610ade565b6000818152606760205260409020546001600160a01b0316156122405760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610ade565b61224c6000838361348a565b6001600160a01b0382166000908152606860205260408120805460019290612275908490614c75565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006122dd612979565b90506122e98183613400565b600080516020614e6283398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb91612346918891309190604401614973565b600060405180830381600087803b15801561236057600080fd5b505af1158015612374573d6000803e3d6000fd5b5050505050505050565b6060610d5f83604051602001612394919061489d565b6040516020818303038152906040528051906020012060001c83613527565b60606123be856133d2565b600080876001600160a01b0316866123d88b8a8989613609565b6040516123e5919061489d565b60006040518083038160008787f1925050503d8060008114612423576040519150601f19603f3d011682016040523d82523d6000602084013e612428565b606091505b509092509050612439603f87614c8d565b5a1161245557634e487b7160e01b600052600160045260246000fd5b61249582826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c4544000000000000815250613639565b9998505050505050505050565b805160009081905b8015611ccf576124eb82856124c0600185614ca1565b815181106124de57634e487b7160e01b600052603260045260246000fd5b6020026020010151613672565b9150806124f781614d79565b9150506124aa565b6125088161371f565b60405160200161251a91815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b031661257f826110e4565b6001600160a01b0316146125e35760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610ade565b6001600160a01b0382166126455760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610ade565b61265083838361348a565b61265b600082613400565b6001600160a01b0383166000908152606860205260408120805460019290612684908490614ca1565b90915550506001600160a01b03821660009081526068602052604081208054600192906126b2908490614c75565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60005b848110156110275761278b86868381811061274157634e487b7160e01b600052603260045260246000fd5b90506020028101906127539190614bde565b86868581811061277357634e487b7160e01b600052603260045260246000fd5b90506020028101906127859190614bde565b86612b33565b8061279581614dc5565b915050612716565b60606000826000815181106127c257634e487b7160e01b600052603260045260246000fd5b602002602001015190506000600190505b8351811015611ccf57818482815181106127fd57634e487b7160e01b600052603260045260246000fd5b60200260200101516040516020016128169291906148f8565b6040516020818303038152906040529150808061283290614dc5565b9150506127d3565b61dead6001600160a01b0384161480159061286c57506001600160a01b03831660009081526101356020526040902054155b1561099057610990838383612d4e565b600080612888836110e4565b9050806001600160a01b0316846001600160a01b031614806128cf57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610c535750836001600160a01b03166128e884610955565b6001600160a01b031614949350505050565b60005b848110156110275761296786868381811061292857634e487b7160e01b600052603260045260246000fd5b9050602002013585858481811061294f57634e487b7160e01b600052603260045260246000fd5b90506020028101906129619190614bde565b85612c12565b8061297181614dc5565b9150506128fd565b600080600080516020614e628339815191525460405163721804d360e11b81523060048201526001600160a01b039091169150600090829063e43009a69060240160206040518083038186803b1580156129d257600080fd5b505afa1580156129e6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a0a91906144f5565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f96039060240160206040518083038186803b158015612a4d57600080fd5b505afa158015612a61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a859190613f8b565b9250505090565b6000612a97826110e4565b9050612aa58160008461348a565b612ab0600083613400565b6001600160a01b0381166000908152606860205260408120805460019290612ad9908490614ca1565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008585604051602001612b48929190614934565b60408051601f198184030181528282528051602091820120601f8901829004820284018201909252878352909250612b9c9183918990899081908401838280828437600092019190915250612cb292505050565b6110278187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b01819004810282018101909252898152925089915088908190840183828082843760009201919091525088925061374b915050565b612c1b84613886565b612c675760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e44000000006044820152606401610ade565b6112e084612c7486611828565b85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525087925061374b915050565b612cbb82613886565b610f3b57600082815260c960209081526040909120825161099092840190613d67565b612ce6612176565b6001600160a01b0316612cf8826110e4565b6001600160a01b0316146110815760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610ade565b6000828152610138602052604090208054612d6890614d90565b15159050612d92576000828152610138602090815260409091208251612d9092840190613d67565b505b6001600160a01b03831660008181526101356020526040808220859055518492917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a3505050565b606080612de784611828565b9150612df38484613527565b90509250929050565b6000818152610137602052604081205460ff1680156108bd57506101366000612e23612176565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b600080516020614e6283398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f90612e879086908690600401614a23565b600060405180830381600087803b158015612ea157600080fd5b505af1158015610eae573d6000803e3d6000fd5b816001600160a01b0316836001600160a01b03161415612f175760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610ade565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f9060240160206040518083038186803b158015612fc657600080fd5b505afa158015612fda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ffe91906144f5565b905060006130ac86606001518051906020012086886020015160405160200161304c9392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b90508186602001511480156130d2575085516130d2906001600160a01b031682866138ac565b9695505050505050565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b61312c84848461256c565b613138848484846139fc565b6112e05760405162461bcd60e51b8152600401610ade90614ab8565b61315e8484612185565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528360405161318e9190614a37565b60405180910390a280156112e0576112e084848461283a565b606061013380546108d290614d90565b6060816131db5750506040805180820190915260018152600360fc1b602082015290565b8160005b811561320557806131ef81614dc5565b91506131fe9050600a83614c8d565b91506131df565b6000816001600160401b0381111561322d57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015613257576020820181803683370190505b5090505b8415610c535761326c600183614ca1565b9150613279600a86614de0565b613284906030614c75565b60f81b8183815181106132a757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506132c9600a86614c8d565b945061325b565b6132d9816124ff565b610e598585858585612713565b600054610100900460ff1661330d5760405162461bcd60e51b8152600401610ade90614b51565b8151613320906065906020850190613d67565b508051610990906066906020840190613d67565b600054610100900460ff1661335b5760405162461bcd60e51b8152600401610ade90614b51565b565b600054610100900460ff166133845760405162461bcd60e51b8152600401610ade90614b51565b61108181613b0d565b600054610100900460ff166133b45760405162461bcd60e51b8152600401610ade90614b51565b61108181613b66565b6000303314156133cf5750601f193601355b90565b600081815261010060205260409020546133ed906001614c75565b6000918252610100602052604090912055565b600081815260696020526040902080546001600160a01b0319166001600160a01b0384169081179091558190613435826110e4565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600030331415613485575060331936013560601c90565b503390565b6000818152610137602052604090205460ff1615806134b157506001600160a01b03821615155b6134fd5760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f555047524144454400000000000000006044820152606401610ade565b6001600160a01b0383166000908152610135602052604090205481141561099057610990836130dc565b606061353282612dfc565b1561354c57506040805160208101909152600081526108bd565b60ca60006135598461371f565b81526020019081526020016000206000848152602001908152602001600020805461358390614d90565b80601f01602080910402602001604051908101604052809291908181526020018280546135af90614d90565b80156135fc5780601f106135d1576101008083540402835291602001916135fc565b820191906000526020600020905b8154815290600101906020018083116135df57829003601f168201915b5050505050905092915050565b6060828585604051602001613620939291906148b9565b6040516020818303038152906040529050949350505050565b60608315613648575081610d5f565b8251156136585782518084602001fd5b8160405162461bcd60e51b8152600401610ade9190614a37565b60008151600014156136be5760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b6044820152606401610ade565b82826040516020016136d0919061489d565b60405160208183030381529060405280519060200120604051602001613700929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b600081815260cb60205260408120541561374757600082815260cb60205260409020546108bd565b5090565b60ca60006137588361371f565b81526020019081526020016000206000858152602001908152602001600020805461378290614d90565b151590506137d95782604051613798919061489d565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f86856040516137d09190614a37565b60405180910390a35b8160ca60006137e78461371f565b815260200190815260200160002060008681526020019081526020016000209080519060200190613819929190613d67565b5081604051613828919061489d565b60405180910390208360405161383e919061489d565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d928686604051613878929190614a4a565b60405180910390a450505050565b600081815260c96020526040812080548291906138a290614d90565b9050119050919050565b60008060006138bb8585613bb4565b909250905060008160048111156138e257634e487b7160e01b600052602160045260246000fd5b1480156139005750856001600160a01b0316826001600160a01b0316145b1561391057600192505050610d5f565b600080876001600160a01b0316631626ba7e60e01b8888604051602401613938929190614a0a565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051613976919061489d565b600060405180830381855afa9150503d80600081146139b1576040519150601f19603f3d011682016040523d82523d6000602084013e6139b6565b606091505b50915091508180156139c9575080516020145b80156139f057508051630b135d3f60e11b906139ee90830160209081019084016144f5565b145b98975050505050505050565b60006001600160a01b0384163b15613b0557836001600160a01b031663150b7a02613a25612176565b8786866040518563ffffffff1660e01b8152600401613a47949392919061499f565b602060405180830381600087803b158015613a6157600080fd5b505af1925050508015613a91575060408051601f3d908101601f19168201909252613a8e91810190614529565b60015b613aeb573d808015613abf576040519150601f19603f3d011682016040523d82523d6000602084013e613ac4565b606091505b508051613ae35760405162461bcd60e51b8152600401610ade90614ab8565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c53565b506001610c53565b600054610100900460ff16613b345760405162461bcd60e51b8152600401610ade90614b51565b80600080516020614e628339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff16613b8d5760405162461bcd60e51b8152600401610ade90614b51565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613b45565b600080825160411415613beb5760208301516040840151606085015160001a613bdf87828585613bfa565b94509450505050613bf3565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613c315750600090506003613cde565b8460ff16601b14158015613c4957508460ff16601c14155b15613c5a5750600090506004613cde565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613cae573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613cd757600060019250925050613cde565b9150600090505b94509492505050565b828054613cf390614d90565b90600052602060002090601f016020900481019282613d155760008555613d5b565b82601f10613d2e5782800160ff19823516178555613d5b565b82800160010185558215613d5b579182015b82811115613d5b578235825591602001919060010190613d40565b50613747929150613ddb565b828054613d7390614d90565b90600052602060002090601f016020900481019282613d955760008555613d5b565b82601f10613dae57805160ff1916838001178555613d5b565b82800160010185558215613d5b579182015b82811115613d5b578251825591602001919060010190613dc0565b5b808211156137475760008155600101613ddc565b6000613e03613dfe84614c52565b614c22565b9050808382526020808301915083868660051b86011115613e2357600080fd5b6000805b87811015613e635782356001600160401b03811115613e44578283fd5b613e508a828a01613f05565b8652509383019391830191600101613e27565b50505050509392505050565b60008083601f840112613e80578182fd5b5081356001600160401b03811115613e96578182fd5b6020830191508360208260051b8501011115613bf357600080fd5b80358015158114613ec157600080fd5b919050565b60008083601f840112613ed7578182fd5b5081356001600160401b03811115613eed578182fd5b602083019150836020828501011115613bf357600080fd5b600082601f830112613f15578081fd5b81356001600160401b03811115613f2e57613f2e614e20565b613f41601f8201601f1916602001614c22565b818152846020838601011115613f55578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215613f80578081fd5b8135610d5f81614e36565b600060208284031215613f9c578081fd5b8151610d5f81614e36565b60008060408385031215613fb9578081fd5b8235613fc481614e36565b91506020830135613fd481614e36565b809150509250929050565b60008060008060808587031215613ff4578182fd5b8435613fff81614e36565b9350602085013561400f81614e36565b9250604085013561401f81614e36565b9150606085013561402f81614e36565b939692955090935050565b60008060006060848603121561404e578081fd5b833561405981614e36565b9250602084013561406981614e36565b929592945050506040919091013590565b600080600080600060808688031215614091578283fd5b853561409c81614e36565b945060208601356140ac81614e36565b93506040860135925060608601356001600160401b038111156140cd578182fd5b6140d988828901613ec6565b969995985093965092949392505050565b600080600080608085870312156140ff578182fd5b843561410a81614e36565b9350602085013561411a81614e36565b92506040850135915060608501356001600160401b0381111561413b578182fd5b61414787828801613f05565b91505092959194509250565b60008060008060008060008060a0898b03121561416e578586fd5b883561417981614e36565b975060208901356001600160401b0380821115614194578788fd5b6141a08c838d01613e6f565b909950975060408b01359150808211156141b8578485fd5b6141c48c838d01613e6f565b909750955060608b01359150808211156141dc578485fd5b506141e98b828c01613e6f565b90945092506141fc905060808a01613eb1565b90509295985092959890939650565b6000806040838503121561421d578182fd5b823561422881614e36565b9150612df360208401613eb1565b60008060006040848603121561424a578081fd5b833561425581614e36565b925060208401356001600160401b0381111561426f578182fd5b61427b86828701613ec6565b9497909650939450505050565b6000806040838503121561429a578182fd5b82356142a581614e36565b946020939093013593505050565b600080600080606085870312156142c8578182fd5b84356142d381614e36565b93506020850135925060408501356001600160401b038111156142f4578283fd5b61430087828801613ec6565b95989497509550505050565b6000806020838503121561431e578182fd5b82356001600160401b03811115614333578283fd5b61433f85828601613e6f565b90969095509350505050565b600080600080600060608688031215614362578283fd5b85356001600160401b0380821115614378578485fd5b61438489838a01613e6f565b9097509550602088013591508082111561439c578485fd5b506143a988828901613e6f565b96999598509660400135949350505050565b6000806000604084860312156143cf578081fd5b83356001600160401b038111156143e4578182fd5b6143f086828701613e6f565b909790965060209590950135949350505050565b600060208284031215614415578081fd5b81356001600160401b0381111561442a578182fd5b8201601f8101841361443a578182fd5b610c5384823560208401613df0565b6000602080838503121561445b578182fd5b82356001600160401b03811115614470578283fd5b8301601f81018513614480578283fd5b803561448e613dfe82614c52565b80828252848201915084840188868560051b87010111156144ad578687fd5b8694505b838510156144cf5780358352600194909401939185019185016144b1565b50979650505050505050565b6000602082840312156144ec578081fd5b610d5f82613eb1565b600060208284031215614506578081fd5b5051919050565b60006020828403121561451e578081fd5b8135610d5f81614e4b565b60006020828403121561453a578081fd5b8151610d5f81614e4b565b60008060008060008060006080888a03121561455f578081fd5b87356001600160401b0380821115614575578283fd5b6145818b838c01613ec6565b909950975060208a0135965060408a01359150808211156145a0578283fd5b6145ac8b838c01613e6f565b909650945060608a01359150808211156145c4578283fd5b506145d18a828b01613e6f565b989b979a50959850939692959293505050565b600080602083850312156145f6578182fd5b82356001600160401b0381111561460b578283fd5b61433f85828601613ec6565b60008060008060006060868803121561462e578283fd5b85356001600160401b0380821115614644578485fd5b61465089838a01613ec6565b90975095506020880135915080821115614668578485fd5b506143a988828901613ec6565b600080600060408486031215614689578081fd5b83356001600160401b0381111561469e578182fd5b6143f086828701613ec6565b6000602082840312156146bb578081fd5b81356001600160401b038111156146d0578182fd5b610c5384828501613f05565b6000806000604084860312156146f0578081fd5b83356001600160401b0380821115614706578283fd5b9085019060808288031215614719578283fd5b9093506020850135908082111561472e578283fd5b5061427b86828701613ec6565b60006020828403121561474c578081fd5b5035919050565b600080600060408486031215614767578081fd5b8335925060208401356001600160401b0381111561426f578182fd5b60008060008060608587031215614798578182fd5b8435935060208501356001600160401b038111156147b4578283fd5b6147c087828801613ec6565b9598909750949560400135949350505050565b600080604083850312156147e5578182fd5b50508035926020909101359150565b600081518084526020808501808196508360051b81019150828601855b8581101561483b578284038952614829848351614871565b98850198935090840190600101614811565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008151808452614889816020860160208601614d4d565b601f01601f19169290920160200192915050565b600082516148af818460208701614d4d565b9190910192915050565b600084516148cb818460208901614d4d565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b6000835161490a818460208801614d4d565b601760f91b9083019081528351614928816001840160208801614d4d565b01600101949350505050565b8183823760009101908152919050565b60008351614956818460208801614d4d565b83519083019061496a818360208801614d4d565b01949350505050565b6001600160a01b03848116825283166020820152606060408201819052600090610ae790830184614871565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906130d290830184614871565b602081526000610d5f60208301846147f4565b6040815260006149f860408301856147f4565b8281036020840152610d5b81856147f4565b828152604060208201526000610c536040830184614871565b602081526000610c53602083018486614848565b602081526000610d5f6020830184614871565b604081526000614a5d6040830185614871565b8281036020840152610d5b8185614871565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b6000808335601e19843603018112614bf4578283fd5b8301803591506001600160401b03821115614c0d578283fd5b602001915036819003821315613bf357600080fd5b604051601f8201601f191681016001600160401b0381118282101715614c4a57614c4a614e20565b604052919050565b60006001600160401b03821115614c6b57614c6b614e20565b5060051b60200190565b60008219821115614c8857614c88614df4565b500190565b600082614c9c57614c9c614e0a565b500490565b600082821015614cb357614cb3614df4565b500390565b6000610d5f368484613df0565b600060808236031215614cd6578081fd5b604051608081016001600160401b038282108183111715614cf957614cf9614e20565b8160405284359150614d0a82614e36565b81835260208501356020840152604085013560408401526060850135915080821115614d34578384fd5b50614d4136828601613f05565b60608301525092915050565b60005b83811015614d68578181015183820152602001614d50565b838111156112e05750506000910152565b600081614d8857614d88614df4565b506000190190565b600181811c90821680614da457607f821691505b6020821081141561129157634e487b7160e01b600052602260045260246000fd5b6000600019821415614dd957614dd9614df4565b5060010190565b600082614def57614def614e0a565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461108157600080fd5b6001600160e01b03198116811461108157600080fdfebe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafea164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class UNSRegistryMock__factory extends ethers_1.ContractFactory {
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
exports.UNSRegistryMock__factory = UNSRegistryMock__factory;
UNSRegistryMock__factory.bytecode = _bytecode;
UNSRegistryMock__factory.abi = _abi;
