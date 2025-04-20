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
              <img src="/images/pub1.jpg" alt="Publication 1 thumbnail" />
            </div>
            <h2>Investigating Work Companion Robot Interactions to Enhance Work-from-Home Productivity and Experience
            </h2>
            <p className="authors">
              <span className="author-highlight">Heeji Kim</span>, Bokyung Lee
            </p>
            <p className="venue">
              Archives of Design Research (AoDR Vol. 37, No. 4)
            </p>
            <div className="publication-links">
              <a href="https://aodr.org/xml/41676/41676.pdf" target="_blank" rel="noreferrer">PDF</a>
              <span className="link-separator">·</span>
              <a href="https://doi.org/10.15187/adr.2024.08.37.4.43" target="_blank" rel="noreferrer">DOI</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Publications
