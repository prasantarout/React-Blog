import "./write.css";

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="/images/image.jpg" alt="" />
          <form className="writeFrom">
              <div className="writeformGroup">
                  <label htmlFor="fileinput">
                  <i className="writeIcon fas fa-plus"></i>
                  </label>
                  <input type="file" id="fileinput" style={{display:"none"}} />
                  <input type="text" placeholder="Title" className="writeInput" autofocus={true} />
              </div>
              <div className="writeformGroup">
             <textarea placeholder="tell your story.."type="text" className="writeInput writeText"></textarea>
              </div>
              <button className="writeSubmit">Publish</button>
          </form>
        </div>
    )
}
