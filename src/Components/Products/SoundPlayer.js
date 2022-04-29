import React, { Component } from "react";
import { withSoundCloudAudio } from "react-soundplayer/addons";
import { PlayButton, Timer, VolumeControl } from "react-soundplayer/components";

const SoundPlayer = (props) => {
  const { soundCloudAudio, playing, track } = props;
  const play = () => {
    if (playing) {
      soundCloudAudio.pause();
    } else {
      soundCloudAudio.play();
    }
  };

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{track.title}</h2>
      <h3>{track.user.username}</h3>
      <button onClick={() => play()}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default withSoundCloudAudio(SoundPlayer);
