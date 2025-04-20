import { Link } from 'react-router-dom'

function Publications() {
  return (
    <>
      <div className="title">
        Publications
      </div>

      <div className="publications-list">
        <div className="publication-item">
          <div className="publication-year">2024</div>
          <div className="publication-content">
            <div className="publication-image">
              <img src="/images/pub1.png" alt="Publication 1 thumbnail" />
            </div>
            <h2>Title of Publication 1</h2>
            <p className="authors">
              <span className="author-highlight">Heeji Kim</span>, Author Two, Author Three
            </p>
            <p className="venue">
              Conference or Journal Name (ACRONYM'24)
            </p>
            <div className="publication-links">
              <a href="#" target="_blank" rel="noreferrer">PDF</a>
              <span className="link-separator">·</span>
              <a href="#" target="_blank" rel="noreferrer">DOI</a>
              <span className="link-separator">·</span>
              <a href="#" target="_blank" rel="noreferrer">Video</a>
            </div>
          </div>
        </div>

        <div className="publication-item">
          <div className="publication-year">2023</div>
          <div className="publication-content">
            <div className="publication-image">
              <img src="/images/pub2.png" alt="Publication 2 thumbnail" />
            </div>
            <h2>Title of Publication 2</h2>
            <p className="authors">
              Author One, <span className="author-highlight">Heeji Kim</span>, Author Three
            </p>
            <p className="venue">
              Another Conference (CONF'23)
            </p>
            <div className="publication-links">
              <a href="#" target="_blank" rel="noreferrer">PDF</a>
              <span className="link-separator">·</span>
              <a href="#" target="_blank" rel="noreferrer">DOI</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Publications
