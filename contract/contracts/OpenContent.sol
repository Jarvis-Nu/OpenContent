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
        bytes32 postId;
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

    struct BlogStuct {
        string nameOfPost;
        string postDescription;
        string thumbnailUrl;
        string postContent;
        string authorName;
        string authorThumbnail;
        string date;
    }

    struct AudioStruct {
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
    }

    struct VlogStruct {
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
    }

    mapping (bytes32 => NewAudioPost) public idToNewAudioPost;
    mapping (bytes32 => NewBlogPost) public idToNewBlogPost;
    mapping (bytes32 => NewVlogPost) public idToNewVlogPost;

    function createNewAudioPost(
        AudioStruct memory data
    ) external {
        bytes32 postId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                data.nameOfPost,
                data.postDescription,
                data.thumbnailUrl,
                data.postContent,
                data.date                
            )
        );
        
        idToNewAudioPost[postId] = NewAudioPost(
            postId,
            data.nameOfPost,
            data.postDescription,
            data.thumbnailUrl,
            data.postContent,
            data.date,
            data.audioTitle,
            data.audioUrl,
            data.audioThumbnail,
            data.authorName,
            data.authorThumbnail,
            msg.sender
        );

        emit AudioPost(postId, data.nameOfPost, data.postDescription, data.thumbnailUrl, data.postContent, data.date, data.audioTitle, data.audioUrl, 
        data.audioThumbnail, data.authorName, data.authorThumbnail, msg.sender);
    }

    function createNewBlogPost(
        BlogStuct memory data
    ) external {
        bytes32 postId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                data.nameOfPost,
                data.postDescription,
                data.thumbnailUrl,
                data.postContent,
                data.date                
            )
        );
        
        idToNewBlogPost[postId] = NewBlogPost(
            postId,
            data.nameOfPost,
            data.postDescription,
            data.thumbnailUrl,
            data.postContent,
            data.date,
            data.authorName,
            data.authorThumbnail,
            msg.sender
        );

        emit BlogPost(postId, data.nameOfPost, data.postDescription, data.thumbnailUrl, data.postContent, data.date, data.authorName, data.authorThumbnail, msg.sender);
    }

    function createNewVlogPost(
        VlogStruct memory data
    ) external {
        bytes32 postId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                data.nameOfPost,
                data.postDescription,
                data.thumbnailUrl,
                data.postContent,
                data.date                
            )
        );
        
        idToNewVlogPost[postId] = NewVlogPost(
            postId,
            data.nameOfPost,
            data.postDescription,
            data.thumbnailUrl,
            data.postContent,
            data.date,
            data.videoTitle,
            data.videoUrl,
            data.videoThumbnail,
            data.authorName,
            data.authorThumbnail,
            msg.sender
        );

        emit VlogPost(postId, data.nameOfPost, data.postDescription, data.thumbnailUrl, data.postContent, data.date, data.videoTitle, data.videoUrl, 
        data.videoThumbnail, data.authorName, data.authorThumbnail, msg.sender);
    }

}