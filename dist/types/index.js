"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAddressReader__factory = exports.UNSRegistryV07__factory = exports.ProxyReaderV04__factory = exports.IUNSRegistryV07__factory = exports.DotCoinBurner__factory = exports.IURIPrefixController__factory = exports.IResolver__factory = exports.IMintingController__factory = exports.ICNSRegistry__factory = exports.ChildRegistry__factory = exports.SimpleCheckpointManager__factory = exports.IRootChain__factory = exports.RootChainManagerStorage__factory = exports.RootChainManager__factory = exports.NativeMetaTransaction__factory = exports.ICheckpointManager__factory = exports.EIP712Base__factory = exports.MintableERC721Predicate__factory = exports.ITokenPredicate__factory = exports.AccessControlMixin__factory = exports.AccessControl__factory = exports.IStateSender__factory = exports.DummyStateSender__factory = exports.IRootChainManager__factory = exports.IMintableERC721__factory = exports.IChildToken__factory = exports.IERC721Receiver__factory = exports.IERC721Metadata__factory = exports.IERC721__factory = exports.ERC721Burnable__factory = exports.ERC721__factory = exports.IERC165__factory = exports.ERC165__factory = exports.WhitelistedRole__factory = exports.WhitelistAdminRole__factory = exports.MinterRole__factory = exports.MulticallUpgradeable__factory = exports.IERC165Upgradeable__factory = exports.ERC165Upgradeable__factory = exports.ContextUpgradeable__factory = exports.IERC721Upgradeable__factory = exports.IERC721ReceiverUpgradeable__factory = exports.IERC721MetadataUpgradeable__factory = exports.ERC721Upgradeable__factory = exports.Initializable__factory = exports.IERC1271Upgradeable__factory = exports.OwnableUpgradeable__factory = exports.IAccessControlUpgradeable__factory = exports.AccessControlUpgradeable__factory = exports.factories = void 0;
exports.FreeMinter__factory = exports.ControllerRole__factory = exports.BulkWhitelistedRole__factory = exports.Resolver__factory = exports.IResolverReader__factory = exports.URIPrefixController__factory = exports.SignatureController__factory = exports.MintingController__factory = exports.ISignatureController__factory = exports.DomainZoneController__factory = exports.CNSRegistry__factory = exports.Pausable__factory = exports.Ownable__factory = exports.MultiSend__factory = exports.ERC1271SimpleWallet__factory = exports.Blocklist__factory = exports.UNSRegistry__factory = exports.UNSOperator__factory = exports.RootRegistry__factory = exports.RecordStorage__factory = exports.ProxyReader__factory = exports.UNSRegistryMock__factory = exports.UNSRegistryForwarderMock__factory = exports.MintingManagerMock__factory = exports.MinterRoleMock__factory = exports.ERC721ReceiverMock__factory = exports.ERC2771RegistryContextMock__factory = exports.ERC2771ContextMock__factory = exports.BaseRoutingForwarderMock__factory = exports.BaseForwarderMock__factory = exports.MintingManager__factory = exports.UNSRegistryForwarder__factory = exports.ResolverForwarder__factory = exports.MintingManagerForwarder__factory = exports.IForwarder__factory = exports.ERC2771RegistryContext__factory = exports.ERC2771Context__factory = exports.CNSRegistryForwarder__factory = exports.BaseRoutingForwarder__factory = exports.BaseForwarder__factory = exports.KeyStorage__factory = exports.IUNSRegistry__factory = exports.IRootRegistry__factory = exports.IReverseRegistry__factory = exports.IRegistryReader__factory = exports.IRecordStorage__factory = exports.IRecordReader__factory = exports.IMintingManager__factory = exports.IERC1967__factory = exports.IDataReader__factory = void 0;
exports.SignatureUtil__factory = void 0;
exports.factories = __importStar(require("./factories"));
var AccessControlUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable__factory");
Object.defineProperty(exports, "AccessControlUpgradeable__factory", { enumerable: true, get: function () { return AccessControlUpgradeable__factory_1.AccessControlUpgradeable__factory; } });
var IAccessControlUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/access/IAccessControlUpgradeable__factory");
Object.defineProperty(exports, "IAccessControlUpgradeable__factory", { enumerable: true, get: function () { return IAccessControlUpgradeable__factory_1.IAccessControlUpgradeable__factory; } });
var OwnableUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable__factory");
Object.defineProperty(exports, "OwnableUpgradeable__factory", { enumerable: true, get: function () { return OwnableUpgradeable__factory_1.OwnableUpgradeable__factory; } });
var IERC1271Upgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/interfaces/IERC1271Upgradeable__factory");
Object.defineProperty(exports, "IERC1271Upgradeable__factory", { enumerable: true, get: function () { return IERC1271Upgradeable__factory_1.IERC1271Upgradeable__factory; } });
var Initializable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable__factory");
Object.defineProperty(exports, "Initializable__factory", { enumerable: true, get: function () { return Initializable__factory_1.Initializable__factory; } });
var ERC721Upgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable__factory");
Object.defineProperty(exports, "ERC721Upgradeable__factory", { enumerable: true, get: function () { return ERC721Upgradeable__factory_1.ERC721Upgradeable__factory; } });
var IERC721MetadataUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/token/ERC721/extensions/IERC721MetadataUpgradeable__factory");
Object.defineProperty(exports, "IERC721MetadataUpgradeable__factory", { enumerable: true, get: function () { return IERC721MetadataUpgradeable__factory_1.IERC721MetadataUpgradeable__factory; } });
var IERC721ReceiverUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/token/ERC721/IERC721ReceiverUpgradeable__factory");
Object.defineProperty(exports, "IERC721ReceiverUpgradeable__factory", { enumerable: true, get: function () { return IERC721ReceiverUpgradeable__factory_1.IERC721ReceiverUpgradeable__factory; } });
var IERC721Upgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/token/ERC721/IERC721Upgradeable__factory");
Object.defineProperty(exports, "IERC721Upgradeable__factory", { enumerable: true, get: function () { return IERC721Upgradeable__factory_1.IERC721Upgradeable__factory; } });
var ContextUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable__factory");
Object.defineProperty(exports, "ContextUpgradeable__factory", { enumerable: true, get: function () { return ContextUpgradeable__factory_1.ContextUpgradeable__factory; } });
var ERC165Upgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable__factory");
Object.defineProperty(exports, "ERC165Upgradeable__factory", { enumerable: true, get: function () { return ERC165Upgradeable__factory_1.ERC165Upgradeable__factory; } });
var IERC165Upgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/utils/introspection/IERC165Upgradeable__factory");
Object.defineProperty(exports, "IERC165Upgradeable__factory", { enumerable: true, get: function () { return IERC165Upgradeable__factory_1.IERC165Upgradeable__factory; } });
var MulticallUpgradeable__factory_1 = require("./factories/@openzeppelin/contracts-upgradeable/utils/MulticallUpgradeable__factory");
Object.defineProperty(exports, "MulticallUpgradeable__factory", { enumerable: true, get: function () { return MulticallUpgradeable__factory_1.MulticallUpgradeable__factory; } });
var MinterRole__factory_1 = require("./factories/@openzeppelin/contracts/access/roles/MinterRole__factory");
Object.defineProperty(exports, "MinterRole__factory", { enumerable: true, get: function () { return MinterRole__factory_1.MinterRole__factory; } });
var WhitelistAdminRole__factory_1 = require("./factories/@openzeppelin/contracts/access/roles/WhitelistAdminRole__factory");
Object.defineProperty(exports, "WhitelistAdminRole__factory", { enumerable: true, get: function () { return WhitelistAdminRole__factory_1.WhitelistAdminRole__factory; } });
var WhitelistedRole__factory_1 = require("./factories/@openzeppelin/contracts/access/roles/WhitelistedRole__factory");
Object.defineProperty(exports, "WhitelistedRole__factory", { enumerable: true, get: function () { return WhitelistedRole__factory_1.WhitelistedRole__factory; } });
var ERC165__factory_1 = require("./factories/@openzeppelin/contracts/introspection/ERC165__factory");
Object.defineProperty(exports, "ERC165__factory", { enumerable: true, get: function () { return ERC165__factory_1.ERC165__factory; } });
var IERC165__factory_1 = require("./factories/@openzeppelin/contracts/introspection/IERC165__factory");
Object.defineProperty(exports, "IERC165__factory", { enumerable: true, get: function () { return IERC165__factory_1.IERC165__factory; } });
var ERC721__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC721/ERC721__factory");
Object.defineProperty(exports, "ERC721__factory", { enumerable: true, get: function () { return ERC721__factory_1.ERC721__factory; } });
var ERC721Burnable__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC721/ERC721Burnable__factory");
Object.defineProperty(exports, "ERC721Burnable__factory", { enumerable: true, get: function () { return ERC721Burnable__factory_1.ERC721Burnable__factory; } });
var IERC721__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC721/IERC721__factory");
Object.defineProperty(exports, "IERC721__factory", { enumerable: true, get: function () { return IERC721__factory_1.IERC721__factory; } });
var IERC721Metadata__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC721/IERC721Metadata__factory");
Object.defineProperty(exports, "IERC721Metadata__factory", { enumerable: true, get: function () { return IERC721Metadata__factory_1.IERC721Metadata__factory; } });
var IERC721Receiver__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC721/IERC721Receiver__factory");
Object.defineProperty(exports, "IERC721Receiver__factory", { enumerable: true, get: function () { return IERC721Receiver__factory_1.IERC721Receiver__factory; } });
var IChildToken__factory_1 = require("./factories/contracts/@maticnetwork/IChildToken__factory");
Object.defineProperty(exports, "IChildToken__factory", { enumerable: true, get: function () { return IChildToken__factory_1.IChildToken__factory; } });
var IMintableERC721__factory_1 = require("./factories/contracts/@maticnetwork/IMintableERC721__factory");
Object.defineProperty(exports, "IMintableERC721__factory", { enumerable: true, get: function () { return IMintableERC721__factory_1.IMintableERC721__factory; } });
var IRootChainManager__factory_1 = require("./factories/contracts/@maticnetwork/IRootChainManager__factory");
Object.defineProperty(exports, "IRootChainManager__factory", { enumerable: true, get: function () { return IRootChainManager__factory_1.IRootChainManager__factory; } });
var DummyStateSender__factory_1 = require("./factories/contracts/@maticnetwork/pos-portal/DummyStateSender.sol/DummyStateSender__factory");
Object.defineProperty(exports, "DummyStateSender__factory", { enumerable: true, get: function () { return DummyStateSender__factory_1.DummyStateSender__factory; } });
var IStateSender__factory_1 = require("./factories/contracts/@maticnetwork/pos-portal/DummyStateSender.sol/IStateSender__factory");
Object.defineProperty(exports, "IStateSender__factory", { enumerable: true, get: function () { return IStateSender__factory_1.IStateSender__factory; } });
var AccessControl__factory_1 = require("./factories/contracts/@maticnetwork/pos-portal/MintableERC721Predicate.sol/AccessControl__factory");
Object.defineProperty(exports, "AccessControl__factory", { enumerable: true, get: function () { return AccessControl__factory_1.AccessControl__factory; } });
var AccessControlMixin__factory_1 = require("./factories/contracts/@maticnetwork/pos-portal/MintableERC721Predicate.sol/AccessControlMixin__factory");
Object.defineProperty(exports, "AccessControlMixin__factory", { enumerable: true, get: function () { return AccessControlMixin__factory_1.AccessControlMixin__factory; } });
var ITokenPredicate__factory_1 = require("./factories/contracts/@maticnetwork/pos-portal/MintableERC721Predicate.sol/ITokenPredicate__factory");
Object.defineProperty(exports, "ITokenPredicate__factory", { enumerable: true, get: function () { return ITokenPredicate__factory_1.ITokenPredicate__factory; } });
var MintableERC721Predicate__factory_1 = require("./factories/contracts/@maticnetwork/pos-portal/MintableERC721Predicate.sol/MintableERC721Predicate__factory");
Object.defineProperty(exports, "MintableERC721Predicate__factory", { enumerable: true, get: function () { return MintableERC721Predicate__factory_1.MintableERC721Predicate__factory; } });
var EIP712Base__factory_1 = require("./factories/contracts/@maticnetwork/pos-portal/RootChainManager.sol/EIP712Base__factory");
Object.defineProperty(exports, "EIP712Base__factory", { enumerable: true, get: function () { return EIP712Base__factory_1.EIP712Base__factory; } });
var ICheckpointManager__factory_1 = require("./factories/contracts/@maticnetwork/pos-portal/RootChainManager.sol/ICheckpointManager__factory");
Object.defineProperty(exports, "ICheckpointManager__factory", { enumerable: true, get: function () { return ICheckpointManager__factory_1.ICheckpointManager__factory; } });
var NativeMetaTransaction__factory_1 = require("./factories/contracts/@maticnetwork/pos-portal/RootChainManager.sol/NativeMetaTransaction__factory");
Object.defineProperty(exports, "NativeMetaTransaction__factory", { enumerable: true, get: function () { return NativeMetaTransaction__factory_1.NativeMetaTransaction__factory; } });
var RootChainManager__factory_1 = require("./factories/contracts/@maticnetwork/pos-portal/RootChainManager.sol/RootChainManager__factory");
Object.defineProperty(exports, "RootChainManager__factory", { enumerable: true, get: function () { return RootChainManager__factory_1.RootChainManager__factory; } });
var RootChainManagerStorage__factory_1 = require("./factories/contracts/@maticnetwork/pos-portal/RootChainManager.sol/RootChainManagerStorage__factory");
Object.defineProperty(exports, "RootChainManagerStorage__factory", { enumerable: true, get: function () { return RootChainManagerStorage__factory_1.RootChainManagerStorage__factory; } });
var IRootChain__factory_1 = require("./factories/contracts/@maticnetwork/pos-portal/SimpleCheckpointManager.sol/IRootChain__factory");
Object.defineProperty(exports, "IRootChain__factory", { enumerable: true, get: function () { return IRootChain__factory_1.IRootChain__factory; } });
var SimpleCheckpointManager__factory_1 = require("./factories/contracts/@maticnetwork/pos-portal/SimpleCheckpointManager.sol/SimpleCheckpointManager__factory");
Object.defineProperty(exports, "SimpleCheckpointManager__factory", { enumerable: true, get: function () { return SimpleCheckpointManager__factory_1.SimpleCheckpointManager__factory; } });
var ChildRegistry__factory_1 = require("./factories/contracts/ChildRegistry__factory");
Object.defineProperty(exports, "ChildRegistry__factory", { enumerable: true, get: function () { return ChildRegistry__factory_1.ChildRegistry__factory; } });
var ICNSRegistry__factory_1 = require("./factories/contracts/cns/ICNSRegistry__factory");
Object.defineProperty(exports, "ICNSRegistry__factory", { enumerable: true, get: function () { return ICNSRegistry__factory_1.ICNSRegistry__factory; } });
var IMintingController__factory_1 = require("./factories/contracts/cns/IMintingController__factory");
Object.defineProperty(exports, "IMintingController__factory", { enumerable: true, get: function () { return IMintingController__factory_1.IMintingController__factory; } });
var IResolver__factory_1 = require("./factories/contracts/cns/IResolver__factory");
Object.defineProperty(exports, "IResolver__factory", { enumerable: true, get: function () { return IResolver__factory_1.IResolver__factory; } });
var IURIPrefixController__factory_1 = require("./factories/contracts/cns/IURIPrefixController__factory");
Object.defineProperty(exports, "IURIPrefixController__factory", { enumerable: true, get: function () { return IURIPrefixController__factory_1.IURIPrefixController__factory; } });
var DotCoinBurner__factory_1 = require("./factories/contracts/DotCoinBurner__factory");
Object.defineProperty(exports, "DotCoinBurner__factory", { enumerable: true, get: function () { return DotCoinBurner__factory_1.DotCoinBurner__factory; } });
var IUNSRegistryV07__factory_1 = require("./factories/contracts/history/IUNSRegistryV07__factory");
Object.defineProperty(exports, "IUNSRegistryV07__factory", { enumerable: true, get: function () { return IUNSRegistryV07__factory_1.IUNSRegistryV07__factory; } });
var ProxyReaderV04__factory_1 = require("./factories/contracts/history/ProxyReaderV04__factory");
Object.defineProperty(exports, "ProxyReaderV04__factory", { enumerable: true, get: function () { return ProxyReaderV04__factory_1.ProxyReaderV04__factory; } });
var UNSRegistryV07__factory_1 = require("./factories/contracts/history/UNSRegistryV07__factory");
Object.defineProperty(exports, "UNSRegistryV07__factory", { enumerable: true, get: function () { return UNSRegistryV07__factory_1.UNSRegistryV07__factory; } });
var IAddressReader__factory_1 = require("./factories/contracts/IAddressReader__factory");
Object.defineProperty(exports, "IAddressReader__factory", { enumerable: true, get: function () { return IAddressReader__factory_1.IAddressReader__factory; } });
var IDataReader__factory_1 = require("./factories/contracts/IDataReader__factory");
Object.defineProperty(exports, "IDataReader__factory", { enumerable: true, get: function () { return IDataReader__factory_1.IDataReader__factory; } });
var IERC1967__factory_1 = require("./factories/contracts/IERC1967__factory");
Object.defineProperty(exports, "IERC1967__factory", { enumerable: true, get: function () { return IERC1967__factory_1.IERC1967__factory; } });
var IMintingManager__factory_1 = require("./factories/contracts/IMintingManager__factory");
Object.defineProperty(exports, "IMintingManager__factory", { enumerable: true, get: function () { return IMintingManager__factory_1.IMintingManager__factory; } });
var IRecordReader__factory_1 = require("./factories/contracts/IRecordReader__factory");
Object.defineProperty(exports, "IRecordReader__factory", { enumerable: true, get: function () { return IRecordReader__factory_1.IRecordReader__factory; } });
var IRecordStorage__factory_1 = require("./factories/contracts/IRecordStorage__factory");
Object.defineProperty(exports, "IRecordStorage__factory", { enumerable: true, get: function () { return IRecordStorage__factory_1.IRecordStorage__factory; } });
var IRegistryReader__factory_1 = require("./factories/contracts/IRegistryReader__factory");
Object.defineProperty(exports, "IRegistryReader__factory", { enumerable: true, get: function () { return IRegistryReader__factory_1.IRegistryReader__factory; } });
var IReverseRegistry__factory_1 = require("./factories/contracts/IReverseRegistry__factory");
Object.defineProperty(exports, "IReverseRegistry__factory", { enumerable: true, get: function () { return IReverseRegistry__factory_1.IReverseRegistry__factory; } });
var IRootRegistry__factory_1 = require("./factories/contracts/IRootRegistry__factory");
Object.defineProperty(exports, "IRootRegistry__factory", { enumerable: true, get: function () { return IRootRegistry__factory_1.IRootRegistry__factory; } });
var IUNSRegistry__factory_1 = require("./factories/contracts/IUNSRegistry__factory");
Object.defineProperty(exports, "IUNSRegistry__factory", { enumerable: true, get: function () { return IUNSRegistry__factory_1.IUNSRegistry__factory; } });
var KeyStorage__factory_1 = require("./factories/contracts/KeyStorage__factory");
Object.defineProperty(exports, "KeyStorage__factory", { enumerable: true, get: function () { return KeyStorage__factory_1.KeyStorage__factory; } });
var BaseForwarder__factory_1 = require("./factories/contracts/metatx/BaseForwarder__factory");
Object.defineProperty(exports, "BaseForwarder__factory", { enumerable: true, get: function () { return BaseForwarder__factory_1.BaseForwarder__factory; } });
var BaseRoutingForwarder__factory_1 = require("./factories/contracts/metatx/BaseRoutingForwarder__factory");
Object.defineProperty(exports, "BaseRoutingForwarder__factory", { enumerable: true, get: function () { return BaseRoutingForwarder__factory_1.BaseRoutingForwarder__factory; } });
var CNSRegistryForwarder__factory_1 = require("./factories/contracts/metatx/CNSRegistryForwarder__factory");
Object.defineProperty(exports, "CNSRegistryForwarder__factory", { enumerable: true, get: function () { return CNSRegistryForwarder__factory_1.CNSRegistryForwarder__factory; } });
var ERC2771Context__factory_1 = require("./factories/contracts/metatx/ERC2771Context__factory");
Object.defineProperty(exports, "ERC2771Context__factory", { enumerable: true, get: function () { return ERC2771Context__factory_1.ERC2771Context__factory; } });
var ERC2771RegistryContext__factory_1 = require("./factories/contracts/metatx/ERC2771RegistryContext__factory");
Object.defineProperty(exports, "ERC2771RegistryContext__factory", { enumerable: true, get: function () { return ERC2771RegistryContext__factory_1.ERC2771RegistryContext__factory; } });
var IForwarder__factory_1 = require("./factories/contracts/metatx/IForwarder__factory");
Object.defineProperty(exports, "IForwarder__factory", { enumerable: true, get: function () { return IForwarder__factory_1.IForwarder__factory; } });
var MintingManagerForwarder__factory_1 = require("./factories/contracts/metatx/MintingManagerForwarder__factory");
Object.defineProperty(exports, "MintingManagerForwarder__factory", { enumerable: true, get: function () { return MintingManagerForwarder__factory_1.MintingManagerForwarder__factory; } });
var ResolverForwarder__factory_1 = require("./factories/contracts/metatx/ResolverForwarder__factory");
Object.defineProperty(exports, "ResolverForwarder__factory", { enumerable: true, get: function () { return ResolverForwarder__factory_1.ResolverForwarder__factory; } });
var UNSRegistryForwarder__factory_1 = require("./factories/contracts/metatx/UNSRegistryForwarder__factory");
Object.defineProperty(exports, "UNSRegistryForwarder__factory", { enumerable: true, get: function () { return UNSRegistryForwarder__factory_1.UNSRegistryForwarder__factory; } });
var MintingManager__factory_1 = require("./factories/contracts/MintingManager__factory");
Object.defineProperty(exports, "MintingManager__factory", { enumerable: true, get: function () { return MintingManager__factory_1.MintingManager__factory; } });
var BaseForwarderMock__factory_1 = require("./factories/contracts/mocks/BaseForwarderMock__factory");
Object.defineProperty(exports, "BaseForwarderMock__factory", { enumerable: true, get: function () { return BaseForwarderMock__factory_1.BaseForwarderMock__factory; } });
var BaseRoutingForwarderMock__factory_1 = require("./factories/contracts/mocks/BaseRoutingForwarderMock__factory");
Object.defineProperty(exports, "BaseRoutingForwarderMock__factory", { enumerable: true, get: function () { return BaseRoutingForwarderMock__factory_1.BaseRoutingForwarderMock__factory; } });
var ERC2771ContextMock__factory_1 = require("./factories/contracts/mocks/ERC2771ContextMock__factory");
Object.defineProperty(exports, "ERC2771ContextMock__factory", { enumerable: true, get: function () { return ERC2771ContextMock__factory_1.ERC2771ContextMock__factory; } });
var ERC2771RegistryContextMock__factory_1 = require("./factories/contracts/mocks/ERC2771RegistryContextMock__factory");
Object.defineProperty(exports, "ERC2771RegistryContextMock__factory", { enumerable: true, get: function () { return ERC2771RegistryContextMock__factory_1.ERC2771RegistryContextMock__factory; } });
var ERC721ReceiverMock__factory_1 = require("./factories/contracts/mocks/ERC721ReceiverMock__factory");
Object.defineProperty(exports, "ERC721ReceiverMock__factory", { enumerable: true, get: function () { return ERC721ReceiverMock__factory_1.ERC721ReceiverMock__factory; } });
var MinterRoleMock__factory_1 = require("./factories/contracts/mocks/MinterRoleMock__factory");
Object.defineProperty(exports, "MinterRoleMock__factory", { enumerable: true, get: function () { return MinterRoleMock__factory_1.MinterRoleMock__factory; } });
var MintingManagerMock__factory_1 = require("./factories/contracts/mocks/MintingManagerMock__factory");
Object.defineProperty(exports, "MintingManagerMock__factory", { enumerable: true, get: function () { return MintingManagerMock__factory_1.MintingManagerMock__factory; } });
var UNSRegistryForwarderMock__factory_1 = require("./factories/contracts/mocks/UNSRegistryForwarderMock__factory");
Object.defineProperty(exports, "UNSRegistryForwarderMock__factory", { enumerable: true, get: function () { return UNSRegistryForwarderMock__factory_1.UNSRegistryForwarderMock__factory; } });
var UNSRegistryMock__factory_1 = require("./factories/contracts/mocks/UNSRegistryMock__factory");
Object.defineProperty(exports, "UNSRegistryMock__factory", { enumerable: true, get: function () { return UNSRegistryMock__factory_1.UNSRegistryMock__factory; } });
var ProxyReader__factory_1 = require("./factories/contracts/ProxyReader__factory");
Object.defineProperty(exports, "ProxyReader__factory", { enumerable: true, get: function () { return ProxyReader__factory_1.ProxyReader__factory; } });
var RecordStorage__factory_1 = require("./factories/contracts/RecordStorage__factory");
Object.defineProperty(exports, "RecordStorage__factory", { enumerable: true, get: function () { return RecordStorage__factory_1.RecordStorage__factory; } });
var RootRegistry__factory_1 = require("./factories/contracts/RootRegistry__factory");
Object.defineProperty(exports, "RootRegistry__factory", { enumerable: true, get: function () { return RootRegistry__factory_1.RootRegistry__factory; } });
var UNSOperator__factory_1 = require("./factories/contracts/UNSOperator__factory");
Object.defineProperty(exports, "UNSOperator__factory", { enumerable: true, get: function () { return UNSOperator__factory_1.UNSOperator__factory; } });
var UNSRegistry__factory_1 = require("./factories/contracts/UNSRegistry__factory");
Object.defineProperty(exports, "UNSRegistry__factory", { enumerable: true, get: function () { return UNSRegistry__factory_1.UNSRegistry__factory; } });
var Blocklist__factory_1 = require("./factories/contracts/utils/Blocklist__factory");
Object.defineProperty(exports, "Blocklist__factory", { enumerable: true, get: function () { return Blocklist__factory_1.Blocklist__factory; } });
var ERC1271SimpleWallet__factory_1 = require("./factories/contracts/utils/ERC1271SimpleWallet__factory");
Object.defineProperty(exports, "ERC1271SimpleWallet__factory", { enumerable: true, get: function () { return ERC1271SimpleWallet__factory_1.ERC1271SimpleWallet__factory; } });
var MultiSend__factory_1 = require("./factories/contracts/utils/MultiSend__factory");
Object.defineProperty(exports, "MultiSend__factory", { enumerable: true, get: function () { return MultiSend__factory_1.MultiSend__factory; } });
var Ownable__factory_1 = require("./factories/contracts/utils/Ownable__factory");
Object.defineProperty(exports, "Ownable__factory", { enumerable: true, get: function () { return Ownable__factory_1.Ownable__factory; } });
var Pausable__factory_1 = require("./factories/contracts/utils/Pausable__factory");
Object.defineProperty(exports, "Pausable__factory", { enumerable: true, get: function () { return Pausable__factory_1.Pausable__factory; } });
var CNSRegistry__factory_1 = require("./factories/dot-crypto/contracts/CNSRegistry__factory");
Object.defineProperty(exports, "CNSRegistry__factory", { enumerable: true, get: function () { return CNSRegistry__factory_1.CNSRegistry__factory; } });
var DomainZoneController__factory_1 = require("./factories/dot-crypto/contracts/controllers/DomainZoneController__factory");
Object.defineProperty(exports, "DomainZoneController__factory", { enumerable: true, get: function () { return DomainZoneController__factory_1.DomainZoneController__factory; } });
var ISignatureController__factory_1 = require("./factories/dot-crypto/contracts/controllers/ISignatureController__factory");
Object.defineProperty(exports, "ISignatureController__factory", { enumerable: true, get: function () { return ISignatureController__factory_1.ISignatureController__factory; } });
var MintingController__factory_1 = require("./factories/dot-crypto/contracts/controllers/MintingController__factory");
Object.defineProperty(exports, "MintingController__factory", { enumerable: true, get: function () { return MintingController__factory_1.MintingController__factory; } });
var SignatureController__factory_1 = require("./factories/dot-crypto/contracts/controllers/SignatureController__factory");
Object.defineProperty(exports, "SignatureController__factory", { enumerable: true, get: function () { return SignatureController__factory_1.SignatureController__factory; } });
var URIPrefixController__factory_1 = require("./factories/dot-crypto/contracts/controllers/URIPrefixController__factory");
Object.defineProperty(exports, "URIPrefixController__factory", { enumerable: true, get: function () { return URIPrefixController__factory_1.URIPrefixController__factory; } });
var IResolverReader__factory_1 = require("./factories/dot-crypto/contracts/IResolverReader__factory");
Object.defineProperty(exports, "IResolverReader__factory", { enumerable: true, get: function () { return IResolverReader__factory_1.IResolverReader__factory; } });
var Resolver__factory_1 = require("./factories/dot-crypto/contracts/Resolver__factory");
Object.defineProperty(exports, "Resolver__factory", { enumerable: true, get: function () { return Resolver__factory_1.Resolver__factory; } });
var BulkWhitelistedRole__factory_1 = require("./factories/dot-crypto/contracts/util/BulkWhitelistedRole__factory");
Object.defineProperty(exports, "BulkWhitelistedRole__factory", { enumerable: true, get: function () { return BulkWhitelistedRole__factory_1.BulkWhitelistedRole__factory; } });
var ControllerRole__factory_1 = require("./factories/dot-crypto/contracts/util/ControllerRole__factory");
Object.defineProperty(exports, "ControllerRole__factory", { enumerable: true, get: function () { return ControllerRole__factory_1.ControllerRole__factory; } });
var FreeMinter__factory_1 = require("./factories/dot-crypto/contracts/util/FreeMinter__factory");
Object.defineProperty(exports, "FreeMinter__factory", { enumerable: true, get: function () { return FreeMinter__factory_1.FreeMinter__factory; } });
var SignatureUtil__factory_1 = require("./factories/dot-crypto/contracts/util/SignatureUtil__factory");
Object.defineProperty(exports, "SignatureUtil__factory", { enumerable: true, get: function () { return SignatureUtil__factory_1.SignatureUtil__factory; } });
