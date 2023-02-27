import {
  AudioPost as AudioPostEvent,
  BlogPost as BlogPostEvent,
  VlogPost as VlogPostEvent
} from "../generated/OpenContent/OpenContent"
import { AudioPost, BlogPost, VlogPost } from "../generated/schema"

export function handleAudioPost(event: AudioPostEvent): void {
  let entity = new AudioPost(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.postId = event.params.postId
  entity.nameOfPost = event.params.nameOfPost
  entity.postDescription = event.params.postDescription
  entity.thumbnailUrl = event.params.thumbnailUrl
  entity.postContent = event.params.postContent
  entity.date = event.params.date
  entity.audioTitle = event.params.audioTitle
  entity.audioUrl = event.params.audioUrl
  entity.audioThumbnail = event.params.audioThumbnail
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlogPost(event: BlogPostEvent): void {
  let entity = new BlogPost(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.postId = event.params.postId
  entity.nameOfPost = event.params.nameOfPost
  entity.postDescription = event.params.postDescription
  entity.thumbnailUrl = event.params.thumbnailUrl
  entity.postContent = event.params.postContent
  entity.date = event.params.date
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVlogPost(event: VlogPostEvent): void {
  let entity = new VlogPost(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.postId = event.params.postId
  entity.nameOfPost = event.params.nameOfPost
  entity.postDescription = event.params.postDescription
  entity.thumbnailUrl = event.params.thumbnailUrl
  entity.postContent = event.params.postContent
  entity.date = event.params.date
  entity.videoTitle = event.params.videoTitle
  entity.videoUrl = event.params.videoUrl
  entity.videoThumbnail = event.params.videoThumbnail
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
