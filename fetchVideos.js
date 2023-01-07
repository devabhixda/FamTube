const request = require("request-promise");
const { MAX_SEARCH_LIMIT, SEARCH_FREQUENCY_MINUTES } = require('./constants/config');
const { ALTERNATE_API_KEYS } = require('./constants/keys');
const { searchUrl } = require('./constants/searchUrl');

function getTime() {
    // Current time - time when we last fetched the videos
    var timeNow = new Date();
    timeNow.setMinutes(timeNow.getMinutes() - SEARCH_FREQUENCY_MINUTES);
    return timeNow.toISOString();
}

async function fetchVideos() {
    var nextPageToken = ''
    var itemCount = 0
    var keyLimitExceed = false
    idx = 0
    var time = getTime()
    searchUrl.searchParams.delete('publishedAfter')
    searchUrl.searchParams.append('publishedAfter', time)
    while(nextPageToken != undefined && itemCount < MAX_SEARCH_LIMIT) {
        try {
            await request(searchUrl.href, function (error, response, body) {
                var parsedResponse = JSON.parse(body)
                if (!error && response.statusCode == 200) {
                    var videosInResponse = 0
                    // Update next page token
                    nextPageToken = parsedResponse.nextPageToken
                    searchUrl.searchParams.delete('pageToken')
                    searchUrl.searchParams.append('pageToken', nextPageToken)

                    // Iterate over the items in reponse
                    Array.from(parsedResponse.items).forEach(function(item) {
                        videosInResponse++
                        var id = item.id.videoId
                    });
                    itemCount += videosInResponse
                    console.log("Fetched %s videos in API call at %s", videosInResponse, time)
                } else {
                    // If the issue is with the Youtube API it'll result in the body with error info
                    if(parsedResponse != null) {
                        // Fetch error block from response
                        var error = parsedResponse.error

                        // Check if the issue is due to API quota being exceeded
                        if(error.errors[0].reason == "quotaExceeded") {
                            keyLimitExceed = true
                        }
                    } else {
                        // Log the client side error for debugging 
                        console.log(error)
                    }
                }
            })
        } catch {
            // Try alternate API key if limit exceeded 
            if(idx >= ALTERNATE_API_KEYS.length) {
                console.log("We have run out of available API keys")
                break
            } else if(keyLimitExceed) {
                console.log("Trying alternate API Key")
                searchUrl.searchParams.delete('key')
                searchUrl.searchParams.append('key', ALTERNATE_API_KEYS[idx])
                idx ++
            }
        }
    }

    // Start fetching again after the defined interval
    setTimeout(fetchVideos, SEARCH_FREQUENCY_MINUTES * 60 * 1000);
}

module.exports = {
    fetchVideos
}