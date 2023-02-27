import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address } from "@graphprotocol/graph-ts"
import { AudioPost } from "../generated/schema"
import { AudioPost as AudioPostEvent } from "../generated/OpenContent/OpenContent"
import { handleAudioPost } from "../src/open-content"
import { createAudioPostEvent } from "./open-content-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let postId = Bytes.fromI32(1234567890)
    let nameOfPost = "Example string value"
    let postDescription = "Example string value"
    let thumbnailUrl = "Example string value"
    let postContent = "Example string value"
    let date = "Example string value"
    let audioTitle = "Example string value"
    let audioUrl = "Example string value"
    let audioThumbnail = "Example string value"
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let newAudioPostEvent = createAudioPostEvent(
      postId,
      nameOfPost,
      postDescription,
      thumbnailUrl,
      postContent,
      date,
      audioTitle,
      audioUrl,
      audioThumbnail,
      owner
    )
    handleAudioPost(newAudioPostEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AudioPost created and stored", () => {
    assert.entityCount("AudioPost", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AudioPost",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "postId",
      "1234567890"
    )
    assert.fieldEquals(
      "AudioPost",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nameOfPost",
      "Example string value"
    )
    assert.fieldEquals(
      "AudioPost",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "postDescription",
      "Example string value"
    )
    assert.fieldEquals(
      "AudioPost",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "thumbnailUrl",
      "Example string value"
    )
    assert.fieldEquals(
      "AudioPost",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "postContent",
      "Example string value"
    )
    assert.fieldEquals(
      "AudioPost",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "date",
      "Example string value"
    )
    assert.fieldEquals(
      "AudioPost",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "audioTitle",
      "Example string value"
    )
    assert.fieldEquals(
      "AudioPost",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "audioUrl",
      "Example string value"
    )
    assert.fieldEquals(
      "AudioPost",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "audioThumbnail",
      "Example string value"
    )
    assert.fieldEquals(
      "AudioPost",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
