import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ProxyReader, ProxyReaderInterface } from "../../contracts/ProxyReader";
declare type ProxyReaderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ProxyReader__factory extends ContractFactory {
    constructor(...args: ProxyReaderConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ProxyReader>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ProxyReader;
    connect(signer: Signer): ProxyReader__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50613fe4806100206000396000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c80638da5cb5b11610125578063bebec6b4116100ad578063e985e9c51161007c578063e985e9c514610540578063f059235914610553578063f2fde38b14610566578063ffa1ad7414610579578063ffad6f551461059d57600080fd5b8063bebec6b4146104e7578063bfc5429b146104fa578063c15ae7cf1461050d578063c87b56dd1461052d57600080fd5b8063a81ce6f9116100f4578063a81ce6f91461046d578063ac9650d814610480578063b3f9e4cb146104a0578063b85afd28146104b3578063b98b3526146104d457600080fd5b80638da5cb5b146103f157806391015f6b146103f9578063933c051d1461041b578063a3f4df7e1461043d57600080fd5b80634bd79ed0116101a857806370a082311161017757806370a082311461038d578063715018a6146103a05780637e37479e146103a857806383caffbe146103bb578063869b8884146103ce57600080fd5b80634bd79ed0146103335780634f558e79146103465780636352211e14610359578063672b9f811461036c57600080fd5b80631bd8cc1a116101ef5780631bd8cc1a146102ac5780631be5e7ed146102cc578063276fabb1146102ec578063430c20811461030d578063485cc9551461032057600080fd5b806301ffc9a7146102215780630328075514610249578063081812fc1461026c57806313af403514610297575b600080fd5b61023461022f366004613549565b6105b0565b60405190151581526020015b60405180910390f35b61025c61025736600461344e565b610638565b6040516102409493929190613a62565b61027f61027a3660046136e7565b61065b565b6040516001600160a01b039091168152602001610240565b6102aa6102a53660046132b0565b61077e565b005b6102bf6102ba36600461344e565b6107ef565b6040516102409190613bdc565b6102df6102da36600461362a565b61080e565b6040516102409190613c9f565b6102ff6102fa36600461334b565b61095b565b604051908152602001610240565b61023461031b366004613320565b6109de565b6102aa61032e366004613571565b610b0f565b6102aa61034136600461338a565b610c62565b6102346103543660046136e7565b610f1e565b61027f6103673660046136e7565b610f29565b61037f61037a366004613717565b610f34565b604051610240929190613cb2565b6102ff61039b3660046132b0565b611086565b6102aa6111a2565b6102ff6103b63660046132b0565b6111b6565b6102bf6103c9366004613583565b611234565b6103e16103dc36600461338a565b611661565b6040516102409493929190613af6565b61027f6118d5565b61040c61040736600461344e565b611903565b60405161024093929190613a36565b61042e61042936600461338a565b611923565b60405161024093929190613ab3565b6102df604051806040016040528060118152602001702aa7299d10283937bc3c902932b0b232b960791b81525081565b61027f61047b3660046136e7565b611b0e565b61049361048e36600461334b565b611beb565b6040516102409190613b43565b61027f6104ae3660046136e7565b611d09565b6104c66104c136600461344e565b611d8f565b604051610240929190613bef565b6102df6104e23660046135ba565b611fa9565b6102df6104f53660046132b0565b611fc3565b6102df6105083660046135ba565b612046565b61052061051b36600461334b565b612060565b6040516102409190613aa0565b6102df61053b3660046136e7565b612138565b61023461054e3660046132e8565b612219565b6102aa61056136600461338a565b612264565b6102aa6105743660046132b0565b612344565b6102df604051806040016040528060058152602001640302e352e360dc1b81525081565b6102aa6105ab3660046133f2565b6123b1565b60006001600160e01b031982166362526e6360e01b14806105e157506001600160e01b03198216636fa624af60e11b145b806105fc57506001600160e01b031982166308da864d60e31b145b8061061757506001600160e01b03198216638584880360e01b145b8061063257506301ffc9a760e01b6001600160e01b03198316145b92915050565b600080606080610649878787612412565b93509350935093505b93509350935093565b6000610666826126c1565b61067257506000919050565b61067b82612768565b6107015760665460405163020604bf60e21b8152600481018490526001600160a01b039091169063081812fc906024015b60206040518083038186803b1580156106c457600080fd5b505afa1580156106d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fc91906132cc565b610632565b60655460405163020604bf60e21b8152600481018490526001600160a01b039091169063081812fc906024015b60206040518083038186803b15801561074657600080fd5b505afa15801561075a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063291906132cc565b60006107886118d5565b6001600160a01b0316146107e35760405162461bcd60e51b815260206004820152601e60248201527f50726f78795265616465723a204f574e45525f414c52454144595f534554000060448201526064015b60405180910390fd5b6107ec816127af565b50565b60606108046107fe8486613e3f565b8361282b565b90505b9392505050565b606061081982612768565b156108ad57606554604051631be5e7ed60e01b81526001600160a01b0390911690631be5e7ed9061085290879087908790600401613c8b565b60006040518083038186803b15801561086a57600080fd5b505afa15801561087e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108a6919081019061365f565b9050610807565b60006108b8836129d5565b90506001600160a01b0381163b1561095357604051631be5e7ed60e01b81526001600160a01b03821690631be5e7ed906108fa90889088908890600401613c8b565b60006040518083038186803b15801561091257600080fd5b505afa92505050801561094757506040513d6000823e601f3d908101601f19168201604052610944919081019061365f565b60015b61095057610953565b91505b509392505050565b60655460405163276fabb160e01b81526000916001600160a01b03169063276fabb19061098e9086908690600401613ba4565b60206040518083038186803b1580156109a657600080fd5b505afa1580156109ba573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080791906136ff565b60006109e9826126c1565b6109f557506000610632565b6109fe82612768565b610a8b5760665460405163430c208160e01b81526001600160a01b038581166004830152602482018590529091169063430c20819060440160206040518083038186803b158015610a4e57600080fd5b505afa158015610a62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a869190613529565b610807565b60655460405163430c208160e01b81526001600160a01b038581166004830152602482018590529091169063430c20819060440160206040518083038186803b158015610ad757600080fd5b505afa158015610aeb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108079190613529565b600054610100900460ff1615808015610b2f5750600054600160ff909116105b80610b495750303b158015610b49575060005460ff166001145b610bac5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016107da565b6000805460ff191660011790558015610bcf576000805461ff0019166101001790555b606580546001600160a01b038086166001600160a01b0319928316179092556066805492851692909116919091179055610c07612a57565b610c0f612a57565b610c17612a7e565b8015610c5d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b610c6a612aae565b828114610cb95760405162461bcd60e51b815260206004820152601d60248201527f50726f78795265616465723a204c454e4754485f4e4f545f455155414c00000060448201526064016107da565b60005b83811015610f175760006068868684818110610ce857634e487b7160e01b600052603260045260246000fd5b9050602002810190610cfa9190613d69565b604051610d08929190613906565b908152604051908190036020019020541115610d7a576068858583818110610d4057634e487b7160e01b600052603260045260246000fd5b9050602002810190610d529190613d69565b604051610d60929190613906565b90815260200160405180910390206000610d7a919061304d565b60005b838383818110610d9d57634e487b7160e01b600052603260045260246000fd5b9050602002810190610daf9190613d22565b9050811015610e9b576068868684818110610dda57634e487b7160e01b600052603260045260246000fd5b9050602002810190610dec9190613d69565b604051610dfa929190613906565b9081526020016040518091039020848484818110610e2857634e487b7160e01b600052603260045260246000fd5b9050602002810190610e3a9190613d22565b83818110610e5857634e487b7160e01b600052603260045260246000fd5b9050602002810190610e6a9190613d69565b825460018101845560009384526020909320610e889301919061306b565b5080610e9381613f54565b915050610d7d565b507fb2b57b54285120d17f49f2490a39ef791441fd0ad1e6b6818c23262bf91f061c858583818110610edd57634e487b7160e01b600052603260045260246000fd5b9050602002810190610eef9190613d69565b604051610efd929190613c77565b60405180910390a180610f0f81613f54565b915050610cbc565b5050505050565b6000610632826126c1565b600061063282612b0d565b606080610f4083612768565b15610fd55760655460405163672b9f8160e01b815260048101869052602481018590526001600160a01b039091169063672b9f819060440160006040518083038186803b158015610f9057600080fd5b505afa158015610fa4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610fcc9190810190613691565b9150915061107f565b6000610fe0846129d5565b90506001600160a01b0381163b1561107d5760405163672b9f8160e01b815260048101869052602481018590526001600160a01b0382169063672b9f819060440160006040518083038186803b15801561103957600080fd5b505afa92505050801561106e57506040513d6000823e601f3d908101601f1916820160405261106b9190810190613691565b60015b6110775761107d565b90935091505b505b9250929050565b6065546040516370a0823160e01b81526001600160a01b03838116600483015260009283929116906370a082319060240160206040518083038186803b1580156110cf57600080fd5b505afa1580156110e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110791906136ff565b6066549091506001600160a01b031615610632576066546040516370a0823160e01b81526001600160a01b038581166004830152909116906370a082319060240160206040518083038186803b15801561116057600080fd5b505afa158015611174573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119891906136ff565b6108079082613e27565b6111aa612aae565b6111b460006127af565b565b606554604051633f1ba3cf60e11b81526001600160a01b0383811660048301526000921690637e37479e9060240160206040518083038186803b1580156111fc57600080fd5b505afa158015611210573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063291906136ff565b606060006067868660405161124a929190613906565b9081526020016040518091039020805461126390613f19565b80601f016020809104026020016040519081016040528092919081815260200182805461128f90613f19565b80156112dc5780601f106112b1576101008083540402835291602001916112dc565b820191906000526020600020905b8154815290600101906020018083116112bf57829003601f168201915b505050505090508051600014156112f35750611659565b6000604051806040016040528060068152602001653a37b5b2b71760d11b81525090506000604051806040016040528060088152602001672e6164647265737360c01b81525090506000604051806040016040528060018152602001601760f91b815250905060008385838c8c868d8d8a60405160200161137c999897969594939291906139b9565b6040516020818303038152906040529050600060688260405161139f91906138ea565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b828210156114795783829060005260206000200180546113ec90613f19565b80601f016020809104026020016040519081016040528092919081815260200182805461141890613f19565b80156114655780601f1061143a57610100808354040283529160200191611465565b820191906000526020600020905b81548152906001019060200180831161144857829003601f168201915b5050505050815260200190600101906113cd565b5050505090508051600361148d9190613e27565b6001600160401b038111156114b257634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156114e557816020015b60608152602001906001900390816114d05790505b509650818760008151811061150a57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060005b81518110156115935781818151811061154157634e487b7160e01b600052603260045260246000fd5b6020026020010151888260016115579190613e27565b8151811061157557634e487b7160e01b600052603260045260246000fd5b6020026020010181905250808061158b90613f54565b915050611518565b508486848d8d886040516020016115af96959493929190613959565b60405160208183030381529060405287825160016115cd9190613e27565b815181106115eb57634e487b7160e01b600052603260045260246000fd5b602002602001018190525084868560405160200161160b93929190613916565b60405160208183030381529060405287825160026116299190613e27565b8151811061164757634e487b7160e01b600052603260045260246000fd5b60200260200101819052505050505050505b949350505050565b6060808080846001600160401b0381111561168c57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156116b5578160200160208202803683370190505b509350846001600160401b038111156116de57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611707578160200160208202803683370190505b509250846001600160401b0381111561173057634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561176357816020015b606081526020019060019003908161174e5790505b509150846001600160401b0381111561178c57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156117bf57816020015b60608152602001906001900390816117aa5790505b50905060005b858110156118c9576117fe89898989858181106117f257634e487b7160e01b600052603260045260246000fd5b90506020020135612412565b88858151811061181e57634e487b7160e01b600052603260045260246000fd5b6020026020010188868151811061184557634e487b7160e01b600052603260045260246000fd5b6020026020010188878151811061186c57634e487b7160e01b600052603260045260246000fd5b6020026020010188888151811061189357634e487b7160e01b600052603260045260246000fd5b6020908102919091010193909352929091526001600160a01b0392831690915291169052806118c181613f54565b9150506117c5565b50945094509450949050565b7fe1b9c5b9c6f25fc6c03fdb76829a7257b1cdb10ff4bc4f62e0a94358c8121905546001600160a01b031690565b6000806060611913868686612b2e565b9250925092505b93509350939050565b60608080836001600160401b0381111561194d57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611976578160200160208202803683370190505b509250836001600160401b0381111561199f57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156119c8578160200160208202803683370190505b509150836001600160401b038111156119f157634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611a2457816020015b6060815260200190600190039081611a0f5790505b50905060005b84811015611b0357611a638888888885818110611a5757634e487b7160e01b600052603260045260246000fd5b90506020020135612b2e565b868481518110611a8357634e487b7160e01b600052603260045260246000fd5b60200260200101868581518110611aaa57634e487b7160e01b600052603260045260246000fd5b60200260200101868681518110611ad157634e487b7160e01b600052603260045260246000fd5b60209081029190910101929092526001600160a01b039283169091529116905280611afb81613f54565b915050611a2a565b509450945094915050565b606554604051634f558e7960e01b8152600481018390526000916001600160a01b031690634f558e799060240160206040518083038186803b158015611b5357600080fd5b505afa158015611b67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b8b9190613529565b15611ba15750506065546001600160a01b031690565b6066546001600160a01b031615801590611bcd57506000611bc183612d78565b6001600160a01b031614155b15611be35750506066546001600160a01b031690565b506000919050565b6060816001600160401b03811115611c1357634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611c4657816020015b6060815260200190600190039081611c315790505b50905060005b82811015611d0257611cc430858584818110611c7857634e487b7160e01b600052603260045260246000fd5b9050602002810190611c8a9190613d69565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612daa92505050565b828281518110611ce457634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080611cfa90613f54565b915050611c4c565b5092915050565b6000611d14826126c1565b611d2057506000919050565b611d2982612768565b611d5e5760665460405163b3f9e4cb60e01b8152600481018490526001600160a01b039091169063b3f9e4cb906024016106ac565b60655460405163b3f9e4cb60e01b8152600481018490526001600160a01b039091169063b3f9e4cb9060240161072e565b606080836001600160401b03811115611db857634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611deb57816020015b6060815260200190600190039081611dd65790505b509150836001600160401b03811115611e1457634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611e4757816020015b6060815260200190600190039081611e325790505b509050611e5383612768565b15611ee95760655460405163170b5fa560e31b81526001600160a01b039091169063b85afd2890611e8c90889088908890600401613c36565b60006040518083038186803b158015611ea457600080fd5b505afa158015611eb8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611ee091908101906134c9565b91509150611fa1565b6000611ef4846129d5565b90506001600160a01b0381163b15158015611f0e57508415155b15611f9f5760405163170b5fa560e31b81526001600160a01b0382169063b85afd2890611f4390899089908990600401613c36565b60006040518083038186803b158015611f5b57600080fd5b505afa925050508015611f9057506040513d6000823e601f3d908101601f19168201604052611f8d91908101906134c9565b60015b611f9957611f9f565b90935091505b505b935093915050565b6060611fb88686868686612e9e565b979650505050505050565b606554604051632fafb1ad60e21b81526001600160a01b038381166004830152606092169063bebec6b4906024015b60006040518083038186803b15801561200a57600080fd5b505afa15801561201e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610632919081019061365f565b60606120558686868686612e9e565b509695505050505050565b6060816001600160401b0381111561208857634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156120b1578160200160208202803683370190505b50905060005b82811015611d02576120ee8484838181106120e257634e487b7160e01b600052603260045260246000fd5b90506020020135612b0d565b82828151811061210e57634e487b7160e01b600052603260045260246000fd5b6001600160a01b03909216602092830291909101909101528061213081613f54565b9150506120b7565b6060612143826126c1565b61215b57505060408051602081019091526000815290565b61216482612768565b6121e85760665460405163c87b56dd60e01b8152600481018490526001600160a01b039091169063c87b56dd9060240160006040518083038186803b1580156121ac57600080fd5b505afa1580156121c0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106fc919081019061365f565b60655460405163c87b56dd60e01b8152600481018490526001600160a01b039091169063c87b56dd90602401611ff2565b60405162461bcd60e51b815260206004820152601f60248201527f50726f78795265616465723a20554e535550504f525445445f4d4554484f440060448201526000906064016107da565b61226c612aae565b8281146122bb5760405162461bcd60e51b815260206004820152601d60248201527f50726f78795265616465723a204c454e4754485f4e4f545f455155414c00000060448201526064016107da565b60005b83811015610f17576123328585838181106122e957634e487b7160e01b600052603260045260246000fd5b90506020028101906122fb9190613d69565b85858581811061231b57634e487b7160e01b600052603260045260246000fd5b905060200281019061232d9190613d69565b612f74565b8061233c81613f54565b9150506122be565b61234c612aae565b6001600160a01b0381166107e35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016107da565b6123b9612aae565b60005b83811015610f17576124008585838181106123e757634e487b7160e01b600052603260045260246000fd5b90506020028101906123f99190613d69565b8585612f74565b8061240a81613f54565b9150506123bc565b600080606080856001600160401b0381111561243e57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561247157816020015b606081526020019060019003908161245c5790505b509150856001600160401b0381111561249a57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156124cd57816020015b60608152602001906001900390816124b85790505b5090506124d985612768565b156125f85760655460405163b3f9e4cb60e01b8152600481018790526001600160a01b039091169063b3f9e4cb9060240160206040518083038186803b15801561252257600080fd5b505afa158015612536573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061255a91906132cc565b935061256585612fe2565b60655460405163170b5fa560e31b81529194506001600160a01b03169063b85afd289061259a908a908a908a90600401613c36565b60006040518083038186803b1580156125b257600080fd5b505afa1580156125c6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526125ee91908101906134c9565b9092509050610652565b612601856129d5565b935061260c85612d78565b92506001600160a01b0384163b15158015612628575060008251115b156106525760405163170b5fa560e31b81526001600160a01b0385169063b85afd289061265d908a908a908a90600401613c36565b60006040518083038186803b15801561267557600080fd5b505afa9250505080156126aa57506040513d6000823e601f3d908101601f191682016040526126a791908101906134c9565b60015b6126b357610652565b909250905093509350935093565b60006126cc82612768565b6126eb5760006126db83612d78565b6001600160a01b03161415610632565b606554604051634f558e7960e01b8152600481018490526001600160a01b0390911690634f558e79906024015b60206040518083038186803b15801561273057600080fd5b505afa158015612744573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106329190613529565b6066546000906001600160a01b031615806106325750606554604051634f558e7960e01b8152600481018490526001600160a01b0390911690634f558e7990602401612718565b60006127b96118d5565b9050817fe1b9c5b9c6f25fc6c03fdb76829a7257b1cdb10ff4bc4f62e0a94358c812190580546001600160a01b0319166001600160a01b03928316179055604051838216918316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b606082516001600160401b0381111561285457634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561288757816020015b60608152602001906001900390816128725790505b50905061289382612768565b1561292557606554604051630dec660d60e11b81526001600160a01b0390911690631bd8cc1a906128ca9086908690600401613c14565b60006040518083038186803b1580156128e257600080fd5b505afa1580156128f6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261291e9190810190613497565b9050610632565b6000612930836129d5565b90506001600160a01b0381163b1515801561294c575060008451115b15611d0257604051630dec660d60e11b81526001600160a01b03821690631bd8cc1a9061297f9087908790600401613c14565b60006040518083038186803b15801561299757600080fd5b505afa9250505080156129cc57506040513d6000823e601f3d908101601f191682016040526129c99190810190613497565b60015b61165957611d02565b60665460405163b3f9e4cb60e01b8152600481018390526000916001600160a01b03169063b3f9e4cb906024015b60206040518083038186803b158015612a1b57600080fd5b505afa925050508015612a4b575060408051601f3d908101601f19168201909252612a48918101906132cc565b60015b61063257506000919050565b600054610100900460ff166111b45760405162461bcd60e51b81526004016107da90613cd7565b600054610100900460ff16612aa55760405162461bcd60e51b81526004016107da90613cd7565b6111b4336127af565b33612ab76118d5565b6001600160a01b0316146111b45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107da565b6000612b1882612768565b612b25576106fc82612d78565b61063282612fe2565b6000806060846001600160401b03811115612b5957634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015612b8c57816020015b6060815260200190600190039081612b775790505b509050612b9884612768565b15612cb45760655460405163b3f9e4cb60e01b8152600481018690526001600160a01b039091169063b3f9e4cb9060240160206040518083038186803b158015612be157600080fd5b505afa158015612bf5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c1991906132cc565b9250612c2484612fe2565b606554604051630dec660d60e11b81529193506001600160a01b031690631bd8cc1a90612c5990899089908990600401613bb8565b60006040518083038186803b158015612c7157600080fd5b505afa158015612c85573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612cad9190810190613497565b905061191a565b612cbd846129d5565b9250612cc884612d78565b91506001600160a01b0383163b15158015612ce257508415155b1561191a57604051630dec660d60e11b81526001600160a01b03841690631bd8cc1a90612d1790899089908990600401613bb8565b60006040518083038186803b158015612d2f57600080fd5b505afa925050508015612d6457506040513d6000823e601f3d908101601f19168201604052612d619190810190613497565b60015b612d6d5761191a565b905093509350939050565b6066546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e90602401612a03565b60606001600160a01b0383163b612e125760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016107da565b600080846001600160a01b031684604051612e2d91906138ea565b600060405180830381855af49150503d8060008114612e68576040519150601f19603f3d011682016040523d82523d6000602084013e612e6d565b606091505b5091509150612e958282604051806060016040528060278152602001613fb160279139613014565b95945050505050565b6060806000612eaf88888888611234565b90506000612ebd828661282b565b905060005b8151811015612f67576000828281518110612eed57634e487b7160e01b600052603260045260246000fd5b6020026020010151511115612f5557828181518110612f1c57634e487b7160e01b600052603260045260246000fd5b60200260200101519350818181518110612f4657634e487b7160e01b600052603260045260246000fd5b60200260200101519450612f67565b80612f5f81613f54565b915050612ec2565b5050509550959350505050565b818160678686604051612f88929190613906565b908152604051908190036020019020612fa292909161306b565b507f0bf4b04a0f6d7d0800284e1abb0f58f795c0a25b9088634b6ab847be51001dec8484604051612fd4929190613c77565b60405180910390a150505050565b6065546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e90602401612a03565b60608315613023575081610807565b8251156130335782518084602001fd5b8160405162461bcd60e51b81526004016107da9190613c9f565b50805460008255906000526020600020908101906107ec91906130ef565b82805461307790613f19565b90600052602060002090601f01602090048101928261309957600085556130df565b82601f106130b25782800160ff198235161785556130df565b828001600101855582156130df579182015b828111156130df5782358255916020019190600101906130c4565b506130eb92915061310c565b5090565b808211156130eb5760006131038282613121565b506001016130ef565b5b808211156130eb576000815560010161310d565b50805461312d90613f19565b6000825580601f1061313d575050565b601f0160209004906000526020600020908101906107ec919061310c565b60008083601f84011261316c578182fd5b5081356001600160401b03811115613182578182fd5b6020830191508360208260051b850101111561107f57600080fd5b600082601f8301126131ad578081fd5b815160206131c26131bd83613ddd565b613dad565b80838252828201915082860187848660051b89010111156131e1578586fd5b855b858110156132215781516001600160401b03811115613200578788fd5b61320e8a87838c010161326d565b85525092840192908401906001016131e3565b5090979650505050505050565b60008083601f84011261323f578182fd5b5081356001600160401b03811115613255578182fd5b60208301915083602082850101111561107f57600080fd5b600082601f83011261327d578081fd5b815161328b6131bd82613e00565b81815284602083860101111561329f578283fd5b611659826020830160208701613ee9565b6000602082840312156132c1578081fd5b813561080781613f9b565b6000602082840312156132dd578081fd5b815161080781613f9b565b600080604083850312156132fa578081fd5b823561330581613f9b565b9150602083013561331581613f9b565b809150509250929050565b60008060408385031215613332578182fd5b823561333d81613f9b565b946020939093013593505050565b6000806020838503121561335d578182fd5b82356001600160401b03811115613372578283fd5b61337e8582860161315b565b90969095509350505050565b6000806000806040858703121561339f578182fd5b84356001600160401b03808211156133b5578384fd5b6133c18883890161315b565b909650945060208701359150808211156133d9578384fd5b506133e68782880161315b565b95989497509550505050565b60008060008060408587031215613407578182fd5b84356001600160401b038082111561341d578384fd5b6134298883890161315b565b90965094506020870135915080821115613441578384fd5b506133e68782880161322e565b600080600060408486031215613462578081fd5b83356001600160401b03811115613477578182fd5b6134838682870161315b565b909790965060209590950135949350505050565b6000602082840312156134a8578081fd5b81516001600160401b038111156134bd578182fd5b6116598482850161319d565b600080604083850312156134db578182fd5b82516001600160401b03808211156134f1578384fd5b6134fd8683870161319d565b93506020850151915080821115613512578283fd5b5061351f8582860161319d565b9150509250929050565b60006020828403121561353a578081fd5b81518015158114610807578182fd5b60006020828403121561355a578081fd5b81356001600160e01b031981168114610807578182fd5b600080604083850312156132fa578182fd5b60008060008060408587031215613598578182fd5b84356001600160401b03808211156135ae578384fd5b6134298883890161322e565b6000806000806000606086880312156135d1578283fd5b85356001600160401b03808211156135e7578485fd5b6135f389838a0161322e565b9097509550602088013591508082111561360b578485fd5b506136188882890161322e565b96999598509660400135949350505050565b60008060006040848603121561363e578081fd5b83356001600160401b03811115613653578182fd5b6134838682870161322e565b600060208284031215613670578081fd5b81516001600160401b03811115613685578182fd5b6116598482850161326d565b600080604083850312156136a3578182fd5b82516001600160401b03808211156136b9578384fd5b6136c58683870161326d565b935060208501519150808211156136da578283fd5b5061351f8582860161326d565b6000602082840312156136f8578081fd5b5035919050565b600060208284031215613710578081fd5b5051919050565b60008060408385031215613729578182fd5b50508035926020909101359150565b6000815180845260208085019450808401835b838110156137705781516001600160a01b03168752958201959082019060010161374b565b509495945050505050565b600081518084526020808501808196508360051b81019150828601855b858110156137c25782840389526137b084835161384e565b98850198935090840190600101613798565b5091979650505050505050565b81835260006020808501808196508560051b8101915084845b878110156137c25782840389528135601e19883603018112613808578687fd5b870180356001600160401b0381111561381f578788fd5b80360389131561382d578788fd5b61383a86828985016138c1565b9a87019a95505050908401906001016137e8565b600081518084526020808501808196508360051b81019150828601855b858110156137c2578284038952613883848351613895565b9885019893509084019060010161386b565b600081518084526138ad816020860160208601613ee9565b601f01601f19169290920160200192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600082516138fc818460208701613ee9565b9190910192915050565b8183823760009101908152919050565b60008451613928818460208901613ee9565b84519083019061393c818360208901613ee9565b845191019061394f818360208801613ee9565b0195945050505050565b6000875161396b818460208c01613ee9565b87519083019061397f818360208c01613ee9565b8751910190613992818360208b01613ee9565b0184868237840181815283516139ac818360208801613ee9565b0198975050505050505050565b60008a516139cb818460208f01613ee9565b8a51908301906139df818360208f01613ee9565b8a519101906139f2818360208e01613ee9565b018789823787018181528651613a0c818360208b01613ee9565b018486823784018181528351613a26818360208801613ee9565b019b9a5050505050505050505050565b6001600160a01b03848116825283166020820152606060408201819052600090612e959083018461384e565b6001600160a01b03858116825284166020820152608060408201819052600090613a8e9083018561384e565b8281036060840152611fb8818561384e565b6020815260006108076020830184613738565b606081526000613ac66060830186613738565b8281036020840152613ad88186613738565b90508281036040840152613aec818561377b565b9695505050505050565b608081526000613b096080830187613738565b8281036020840152613b1b8187613738565b90508281036040840152613b2f818661377b565b90508281036060840152611fb8818561377b565b6000602080830181845280855180835260408601915060408160051b8701019250838701855b82811015613b9757603f19888603018452613b85858351613895565b94509285019290850190600101613b69565b5092979650505050505050565b6020815260006108046020830184866137cf565b604081526000613bcc6040830185876137cf565b9050826020830152949350505050565b602081526000610807602083018461384e565b604081526000613c02604083018561384e565b8281036020840152612e95818561384e565b604081526000613c27604083018561384e565b90508260208301529392505050565b6040808252810183905260006001600160fb1b03841115613c55578081fd5b8360051b80866060850137820160600190815260209091019190915292915050565b6020815260006108046020830184866138c1565b604081526000613bcc6040830185876138c1565b6020815260006108076020830184613895565b604081526000613cc56040830185613895565b8281036020840152612e958185613895565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000808335601e19843603018112613d38578283fd5b8301803591506001600160401b03821115613d51578283fd5b6020019150600581901b360382131561107f57600080fd5b6000808335601e19843603018112613d7f578283fd5b8301803591506001600160401b03821115613d98578283fd5b60200191503681900382131561107f57600080fd5b604051601f8201601f191681016001600160401b0381118282101715613dd557613dd5613f85565b604052919050565b60006001600160401b03821115613df657613df6613f85565b5060051b60200190565b60006001600160401b03821115613e1957613e19613f85565b50601f01601f191660200190565b60008219821115613e3a57613e3a613f6f565b500190565b6000613e4d6131bd84613ddd565b808482526020808301925084368760051b87011115613e6a578485fd5b845b87811015613edd5781356001600160401b03811115613e89578687fd5b870136601f820112613e99578687fd5b8035613ea76131bd82613e00565b8181523686838501011115613eba578889fd5b818684018783013790810185018890528652509382019390820190600101613e6c565b50919695505050505050565b60005b83811015613f04578181015183820152602001613eec565b83811115613f13576000848401525b50505050565b600181811c90821680613f2d57607f821691505b60208210811415613f4e57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415613f6857613f68613f6f565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146107ec57600080fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000804000a";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ProxyReaderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ProxyReader;
}
export {};
//# sourceMappingURL=ProxyReader__factory.d.ts.map