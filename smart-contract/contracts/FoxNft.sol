// SPDX-License-Identifier: MIT

pragma solidity >=0.8.9 <0.9.0;

import "erc721a/contracts/extensions/ERC721AQueryable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// ERC721A was created by Azuki team resulting in low gas costs for minters,
// while minimizing network disruption for the wider ecosystem as well.

// Ownable provides a basic access control mechanism, where there is an account (an owner)
// that can be granted exclusive access to specific functions.
// By default, the owner account will be the one that deploys the contract. This can
// later be changed with transferOwnership().

// Inheriting from ReentrancyGuard will make the nonReentrant modifier available,
// which can be applied to functions to make sure there are no nested (reentrant) calls to them.

contract FoxNft is ERC721AQueryable, Ownable, ReentrancyGuard {
    // uint256 can be easily converted into a string. value.toString() enabled
    using Strings for uint256;

    // Merkletree used for whitelist. track addressed that already claimed whitelist nfts
    bytes32 public merkleRoot;
    mapping(address => bool) public whitelistClaimed;

    // URI is the file we point to that has all the json information to get to image
    string public uriPrefix = "";
    string public uriSuffix = ".json";
    string public hiddenMetadataUri;

    // Constants that will be set by config
    uint256 public cost;
    uint256 public maxSupply;
    uint256 public maxMintAmountPerTx;

    // Bools to control contract
    bool public paused = true;
    bool public whitelistMintEnabled = false;
    bool public revealed = false;

    constructor(
        string memory _tokenName,
        string memory _tokenSymbol,
        uint256 _cost,
        uint256 _maxSupply,
        uint256 _maxMintAmountPerTx,
        string memory _hiddenMetadataUri
    ) ERC721A(_tokenName, _tokenSymbol) {
        setCost(_cost);
        maxSupply = _maxSupply;
        setMaxMintAmountPerTx(_maxMintAmountPerTx);
        setHiddenMetadataUri(_hiddenMetadataUri);
    }

    // make sure amount minted falls in tx range and supply
    modifier mintCompliance(uint256 _mintAmount) {
        require(
            _mintAmount > 0 && _mintAmount <= maxMintAmountPerTx,
            "Invalid mint amount!"
        );
        require(
            totalSupply() + _mintAmount <= maxSupply,
            "Max supply exceeded!"
        );
        _;
    }

    // make sure they send enough money
    modifier mintPriceCompliance(uint256 _mintAmount) {
        require(msg.value >= cost * _mintAmount, "Insufficient funds!");
        _;
    }

    // white list minting will use a merkle tree
    function whitelistMint(uint256 _mintAmount, bytes32[] calldata _merkleProof)
        public
        payable
        mintCompliance(_mintAmount)
        mintPriceCompliance(_mintAmount)
    {
        // Verify whitelist requirements
        require(whitelistMintEnabled, "The whitelist sale is not enabled!");
        require(!whitelistClaimed[_msgSender()], "Address already claimed!");

        // Leaf used, keccak256 built into solidity for cryptographic functionality
        // gives 32 byte hash of this address
        bytes32 leaf = keccak256(abi.encodePacked(_msgSender()));
        require(
            // Returns true if a leaf can be proved to be a part of a Merkle tree defined by root.
            // For this, a proof must be provided, containing sibling hashes on the branch from the
            // leaf to the root of the tree.
            MerkleProof.verify(_merkleProof, merkleRoot, leaf),
            "Invalid proof!"
        );

        // Update the mapping, prob should emit something and mint away
        whitelistClaimed[_msgSender()] = true;
        _safeMint(_msgSender(), _mintAmount);
    }

    // normal minting function when not dealing with whitelist
    function mint(uint256 _mintAmount)
        public
        payable
        mintCompliance(_mintAmount)
        mintPriceCompliance(_mintAmount)
    {
        require(!paused, "The contract is paused!");
        _safeMint(_msgSender(), _mintAmount);
    }

    // Send certain amount of nfts to address passed in
    function mintForAddress(uint256 _mintAmount, address _receiver)
        public
        mintCompliance(_mintAmount)
        onlyOwner
    {
        _safeMint(_receiver, _mintAmount);
    }

    // force token id to start at 1
    function _startTokenId() internal view virtual override returns (uint256) {
        return 1;
    }

    // Returns the Uniform Resource Identifier (URI) for tokenId token
    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        // TODO: Look into this
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        // if we havnt revealed the nft, return hidden metadata for now
        if (revealed == false) {
            return hiddenMetadataUri;
        }

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        _tokenId.toString(),
                        uriSuffix
                    )
                )
                : "";
    }

    // Setter functions below
    function setRevealed(bool _state) public onlyOwner {
        revealed = _state;
    }

    function setCost(uint256 _cost) public onlyOwner {
        cost = _cost;
    }

    function setMaxMintAmountPerTx(uint256 _maxMintAmountPerTx)
        public
        onlyOwner
    {
        maxMintAmountPerTx = _maxMintAmountPerTx;
    }

    function setHiddenMetadataUri(string memory _hiddenMetadataUri)
        public
        onlyOwner
    {
        hiddenMetadataUri = _hiddenMetadataUri;
    }

    function setUriPrefix(string memory _uriPrefix) public onlyOwner {
        uriPrefix = _uriPrefix;
    }

    function setUriSuffix(string memory _uriSuffix) public onlyOwner {
        uriSuffix = _uriSuffix;
    }

    function setPaused(bool _state) public onlyOwner {
        paused = _state;
    }

    function setMerkleRoot(bytes32 _merkleRoot) public onlyOwner {
        merkleRoot = _merkleRoot;
    }

    function setWhitelistMintEnabled(bool _state) public onlyOwner {
        whitelistMintEnabled = _state;
    }

    function withdraw() public onlyOwner nonReentrant {
        // This will transfer the remaining contract balance to the owner.
        // Do not remove this otherwise you will not be able to withdraw the funds.
        // =============================================================================
        (bool os, ) = payable(owner()).call{value: address(this).balance}("");
        require(os);
        // =============================================================================
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return uriPrefix;
    }
}
