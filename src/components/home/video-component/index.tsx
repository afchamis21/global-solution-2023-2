const VideoComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "25px",
      }}
    >
      <h1>
        Apresentação  Pitch
      </h1>
      <iframe
        width="771"
        height="435"
        src="https://www.youtube.com/embed/aqz-KE-bpKQ"
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
