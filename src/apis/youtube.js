import axios from "axios";

import {
  YOUTUBE_API_KEY,
  YOUTUBE_BASE_URL,
  YOUTUBE_SEARCH_URL
} from "../constants";

//https://developers.google.com/youtube/v3/docs/search/list

const youtube = axios.create({
  baseURL: YOUTUBE_BASE_URL
});

const getYoutubeList = text => {
  return youtube.get(YOUTUBE_SEARCH_URL, {
    params: {
      part: "snippet",
      maxResults: 5,
      key: YOUTUBE_API_KEY,
      q: text
    }
  });
};

export { youtube, getYoutubeList };
