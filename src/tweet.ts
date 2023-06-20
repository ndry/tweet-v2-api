import Twitter, {TweetV2PostTweetResult} from 'twitter-api-v2'

export async function tweet(
  status: string,
  mediaIds: string[] = [],
  inReplyToStatusId = ''
): Promise<TweetV2PostTweetResult> {
  const appKey = process.env.CONSUMER_API_KEY as string
  const appSecret = process.env.CONSUMER_API_SECRET_KEY as string
  const accessToken = process.env.ACCESS_TOKEN as string
  const accessSecret = process.env.ACCESS_TOKEN_SECRET as string

  const client = new Twitter({
    appKey,
    appSecret,
    accessToken,
    accessSecret
  }).v2

  const parameters = {
    media: {
      media_ids: mediaIds
    },
    quote_tweet_id: inReplyToStatusId !== '' ? inReplyToStatusId : undefined
  }
  return await client.tweet(status, parameters)
}
