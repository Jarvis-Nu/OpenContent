// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract OpenContent {

    event AudioPost(
        bytes32 postId,
        string nameOfPost,
        string postDescription,
        string thumbnailUrl,
        string postContent,
        string date,
        string audioTitle,
        string audioUrl,
        string audioThumbnail,
        string authorName,
        string authorThumbnail,
        address owner
    );

    event BlogPost(
        bytes32 postId,
        string nameOfPost,
        string postDescription,
        string thumbnailUrl,
        string postContent,
        string date,
        string authorName,
        string authorThumbnail,
        address owner
    );

    event VlogPost(
        bytes32 postId,
        string nameOfPost,
        string postDescription,
        string thumbnailUrl,
        string postContent,
        string date,
        string videoTitle,
        string videoUrl,
        string videoThumbnail,
        string authorName,
        string authorThumbnail,
        address owner
    );

    struct NewAudioPost {
        bytes32 postId;
        string nameOfPost;
        string postDescription;
        string thumbnailUrl;
        string postContent;
        string date;
        string audioTitle;
        string audioUrl;
        string audioThumbnail;
        string authorName;
        string authorThumbnail;
        address owner;
    }

    struct NewBlogPost {
        bytes32 postId;
        string nameOfPost;
        string postDescription;
        string thumbnailUrl;
        string postContent;
        string date;
        string authorName;
        string authorThumbnail;
        address owner;
    }

    struct NewVlogPost {
        string nameOfPost;
        string postDescription;
        string thumbnailUrl;
        string postContent;
        string date;
        string videoTitle;
        string videoUrl;
        string videoThumbnail;
        string authorName;
        string authorThumbnail;
        address owner;
    }

    mapping (bytes32 => NewAudioPost) public idToNewAudioPost;
    mapping (bytes32 => NewBlogPost) public idToNewBlogPost;
    mapping (bytes32 => NewVlogPost) public idToNewVlogPost;

    function createNewAudioPost(
        string calldata nameOfPost,
        string calldata postDescription,
        string calldata thumbnailUrl,
        string calldata postContent,
        string calldata date,
        string calldata authorName,
        string calldata authorThumbnail,
        string calldata audioTitle,
        string calldata audioUrl,
        string calldata audioThumbnail
    ) internal {
        bytes32 postId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                nameOfPost,
                postDescription,
                thumbnailUrl,
                postContent,
                date                
            )
        );
        
        idToNewAudioPost[postId] = NewAudioPost(
            postId,
            nameOfPost,
            postDescription,
            thumbnailUrl,
            postContent,
            date,
            audioTitle,
            audioUrl,
            audioThumbnail,
            authorName,
            authorThumbnail,
            msg.sender
        );

        emit AudioPost(postId, nameOfPost, postDescription, thumbnailUrl, postContent, date, audioTitle, audioUrl, audioThumbnail, authorName, authorThumbnail, msg.sender);
    }

    function createNewBlogPost(
        string calldata nameOfPost,
        string calldata postDescription,
        string calldata thumbnailUrl,
        string calldata postContent,
        string calldata authorName,
        string calldata authorThumbnail,
        string calldata date
    ) internal {
        bytes32 postId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                nameOfPost,
                postDescription,
                thumbnailUrl,
                postContent,
                date                
            )
        );
        
        idToNewBlogPost[postId] = NewBlogPost(
            postId,
            nameOfPost,
            postDescription,
            thumbnailUrl,
            postContent,
            date,
            authorName,
            authorThumbnail,
            msg.sender
        );

        emit BlogPost(postId, nameOfPost, postDescription, thumbnailUrl, postContent, date, authorName, authorThumbnail, msg.sender);
    }

    function createNewVlogPost(
        string calldata nameOfPost,
        string calldata postDescription,
        string calldata thumbnailUrl,
        string calldata postContent,
        string calldata date,
        string calldata videoTitle,
        string calldata videoUrl,
        string calldata videoThumbnail,
        string calldata authorName,
        string calldata authorThumbnail
    ) internal {
        bytes32 postId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                nameOfPost,
                postDescription,
                thumbnailUrl,
                postContent,
                date                
            )
        );
        
        idToNewVlogPost[postId] = NewVlogPost(
            nameOfPost,
            postDescription,
            thumbnailUrl,
            postContent,
            date,
            videoTitle,
            videoUrl,
            videoThumbnail,
            authorName,
            authorThumbnail,
            msg.sender
        );

        emit VlogPost(postId, nameOfPost, postDescription, thumbnailUrl, postContent, date, videoTitle, videoUrl, videoThumbnail, authorName, authorThumbnail, msg.sender);
    }

}