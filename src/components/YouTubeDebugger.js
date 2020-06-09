// Code YouTubeDebugger Component Here

import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p",
      },
    },
  };

  changeBitrate = () => {
    this.setState((previousState) => {
      return {
        ...previousState,
        settings: {
          ...previousState.settings,
          bitrate: 12,
        },
      };
    });
  };

  changeVideoResolution = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p",
        },
      },
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>
          {this.state.settings.bitrate}
        </button>
        <button className="resolution" onClick={this.changeVideoResolution}>
          {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}
