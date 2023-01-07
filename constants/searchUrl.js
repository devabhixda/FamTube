const { YOUTUBE_API_KEY } = require('./keys');

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
const SEARCH_PART = 'snippet'
const SEARCH_TYPE = 'video'
const SEARCH_TOPIC = 'vlog'
const SEARCH_ORDER = 'date'
const VIDEO_LANGUAGE = 'en'

var searchUrl = new URL(SEARCH_URL);
searchUrl.searchParams.append('part', SEARCH_PART)
searchUrl.searchParams.append('q', SEARCH_TOPIC)
searchUrl.searchParams.append('type', SEARCH_TYPE)
searchUrl.searchParams.append('order', SEARCH_ORDER)
searchUrl.searchParams.append('relevanceLanguage', VIDEO_LANGUAGE)
searchUrl.searchParams.append('key', YOUTUBE_API_KEY)

module.exports = {
    searchUrl
}