// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract OpenContent {

    event AudioPost(
        string[] data,
        address owner
    );

    event BlogPost(
        string[] data,
        address owner
    );

    event VideoPost(
        string[] data,
        address owner
    );

    function createNewAudioPost(
        string[] calldata data
    ) external {
        emit AudioPost(data, msg.sender);
    }

    function createNewBlogPost(
        string[] calldata data
    ) external {
        emit BlogPost(data, msg.sender);
    }

    function createNewVlogPost(
        string[] calldata data
    ) external {
        emit VideoPost(data, msg.sender);
    }

}