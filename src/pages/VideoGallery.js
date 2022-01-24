import React from "react";
import NavbarThree from "../components/Layouts/NavbarTwo"
import { getYoutubeList } from "../apis/youtube";
import Seo from "../components/Seo"
import VideoSection from "../components/Youtube/VideoSection";

class VideoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
    this.setVideo(" CADVisionEngineers");
  }
  setVideo = async (text) => {
    const response = await getYoutubeList(text);
    const videos = await response.data.items;

    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    console.log(videos);
    const videoSectionProps = {
      videos,
      selectedVideo,
      onVideoSelect: this.onVideoSelect
    };
    return (
        <React.Fragment>
                <Seo/>
                <NavbarThree />
        <VideoSection {...videoSectionProps} />
        </React.Fragment>
    );
  }
}

export default VideoGallery;
