import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  AudioPost,
  BlogPost,
  VlogPost
} from "../generated/OpenContent/OpenContent"

export function createAudioPostEvent(
  postId: Bytes,
  nameOfPost: string,
  postDescription: string,
  thumbnailUrl: string,
  postContent: string,
  date: string,
  audioTitle: string,
  audioUrl: string,
  audioThumbnail: string,
  owner: Address
): AudioPost {
  let audioPostEvent = changetype<AudioPost>(newMockEvent())

  audioPostEvent.parameters = new Array()

  audioPostEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromFixedBytes(postId))
  )
  audioPostEvent.parameters.push(
    new ethereum.EventParam("nameOfPost", ethereum.Value.fromString(nameOfPost))
  )
  audioPostEvent.parameters.push(
    new ethereum.EventParam(
      "postDescription",
      ethereum.Value.fromString(postDescription)
    )
  )
  audioPostEvent.parameters.push(
    new ethereum.EventParam(
      "thumbnailUrl",
      ethereum.Value.fromString(thumbnailUrl)
    )
  )
  audioPostEvent.parameters.push(
    new ethereum.EventParam(
      "postContent",
      ethereum.Value.fromString(postContent)
    )
  )
  audioPostEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromString(date))
  )
  audioPostEvent.parameters.push(
    new ethereum.EventParam("audioTitle", ethereum.Value.fromString(audioTitle))
  )
  audioPostEvent.parameters.push(
    new ethereum.EventParam("audioUrl", ethereum.Value.fromString(audioUrl))
  )
  audioPostEvent.parameters.push(
    new ethereum.EventParam(
      "audioThumbnail",
      ethereum.Value.fromString(audioThumbnail)
    )
  )
  audioPostEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return audioPostEvent
}

export function createBlogPostEvent(
  postId: Bytes,
  nameOfPost: string,
  postDescription: string,
  thumbnailUrl: string,
  postContent: string,
  date: string,
  owner: Address
): BlogPost {
  let blogPostEvent = changetype<BlogPost>(newMockEvent())

  blogPostEvent.parameters = new Array()

  blogPostEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromFixedBytes(postId))
  )
  blogPostEvent.parameters.push(
    new ethereum.EventParam("nameOfPost", ethereum.Value.fromString(nameOfPost))
  )
  blogPostEvent.parameters.push(
    new ethereum.EventParam(
      "postDescription",
      ethereum.Value.fromString(postDescription)
    )
  )
  blogPostEvent.parameters.push(
    new ethereum.EventParam(
      "thumbnailUrl",
      ethereum.Value.fromString(thumbnailUrl)
    )
  )
  blogPostEvent.parameters.push(
    new ethereum.EventParam(
      "postContent",
      ethereum.Value.fromString(postContent)
    )
  )
  blogPostEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromString(date))
  )
  blogPostEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return blogPostEvent
}

export function createVlogPostEvent(
  postId: Bytes,
  nameOfPost: string,
  postDescription: string,
  thumbnailUrl: string,
  postContent: string,
  date: string,
  videoTitle: string,
  videoUrl: string,
  videoThumbnail: string,
  owner: Address
): VlogPost {
  let vlogPostEvent = changetype<VlogPost>(newMockEvent())

  vlogPostEvent.parameters = new Array()

  vlogPostEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromFixedBytes(postId))
  )
  vlogPostEvent.parameters.push(
    new ethereum.EventParam("nameOfPost", ethereum.Value.fromString(nameOfPost))
  )
  vlogPostEvent.parameters.push(
    new ethereum.EventParam(
      "postDescription",
      ethereum.Value.fromString(postDescription)
    )
  )
  vlogPostEvent.parameters.push(
    new ethereum.EventParam(
      "thumbnailUrl",
      ethereum.Value.fromString(thumbnailUrl)
    )
  )
  vlogPostEvent.parameters.push(
    new ethereum.EventParam(
      "postContent",
      ethereum.Value.fromString(postContent)
    )
  )
  vlogPostEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromString(date))
  )
  vlogPostEvent.parameters.push(
    new ethereum.EventParam("videoTitle", ethereum.Value.fromString(videoTitle))
  )
  vlogPostEvent.parameters.push(
    new ethereum.EventParam("videoUrl", ethereum.Value.fromString(videoUrl))
  )
  vlogPostEvent.parameters.push(
    new ethereum.EventParam(
      "videoThumbnail",
      ethereum.Value.fromString(videoThumbnail)
    )
  )
  vlogPostEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return vlogPostEvent
}
