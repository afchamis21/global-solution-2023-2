const VideoComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '32px',
        padding: '25px',
      }}
    >
      <h1>Apresentação Pitch</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zi3QInn_dzI?si=HZlsPsl27a80rVD-"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoComponent
