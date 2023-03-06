import {
  AudioPost as AudioPostEvent,
  BlogPost as BlogPostEvent,
  VideoPost as VideoPostEvent
} from "../generated/OpenContent/OpenContent"
import { AudioPost, BlogPost, VideoPost } from "../generated/schema"

export function handleAudioPost(event: AudioPostEvent): void {
  let entity = new AudioPost(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nameOfPost = event.params.data[0]
  entity.postDescription = event.params.data[1]
  entity.thumbnailUrl = event.params.data[2]
  entity.postContent = event.params.data[3]
  entity.date = event.params.data[4]
  entity.audioTitle = event.params.data[5]
  entity.audioUrl = event.params.data[6]
  entity.audioThumbnail = event.params.data[7]
  entity.authorName = event.params.data[8]
  entity.authorThumbnail = event.params.data[9]
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
  entity.nameOfPost = event.params.data[0]
  entity.postDescription = event.params.data[1]
  entity.thumbnailUrl = event.params.data[2]
  entity.postContent = event.params.data[3]
  entity.date = event.params.data[4]
  entity.authorName = event.params.data[5]
  entity.authorThumbnail = event.params.data[6]
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVlogPost(event: VideoPostEvent): void {
  let entity = new VideoPost(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nameOfPost = event.params.data[0]
  entity.postDescription = event.params.data[1]
  entity.thumbnailUrl = event.params.data[2]
  entity.postContent = event.params.data[3]
  entity.date = event.params.data[4]
  entity.videoTitle = event.params.data[5]
  entity.videoUrl = event.params.data[6]
  entity.videoThumbnail = event.params.data[7]
  entity.authorName = event.params.data[8]
  entity.authorThumbnail = event.params.data[9]
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
