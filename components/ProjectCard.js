// components/ProjectCard.js
export default function ProjectCard({ title, description, image = '/images/placeholder.png', demoLink = '#', codeLink = '#', tech = [] }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm project-card">
        <div style={{height: 180, overflow: 'hidden'}}>
          <img src={image} className="card-img-top" alt={title} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted flex-grow-1">{description}</p>

          <div className="mb-2">
            {tech.map((t, i) => (
              <span key={i} className="badge bg-secondary me-1 small">{t}</span>
            ))}
          </div>

          <div className="mt-2">
            <a href={demoLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm me-2">Live Demo</a>
            <a href={codeLink} target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm">Code</a>
          </div>
        </div>
      </div>
    </div>
  )
}
