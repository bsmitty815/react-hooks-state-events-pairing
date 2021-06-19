//we will set up the video here

function Videos({ embed, createdAt, title, views}) {

  
    return (
      <div className="App">
        <iframe
          width="919"
          height="525"
          src={embed}
          title={title}
        />
        <h1>{title}</h1>
        <span>{views} Views </span><span>| Uploaded {createdAt}</span>
      </div>
    );
  }

export default Videos;