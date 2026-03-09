import { Link } from "react-router-dom";

function DirectorCard({ director }) {

  return (
    <Link to={`/director/${director._id}`} className="card">
      {director.photo ? (
        <img src={director.photo} alt={director.name} className="card-image" />
      ) : (
        <div className="card-placeholder">
          <span>🎬</span>
        </div>
      )}
      <div className="card-content">
        <h2>{director.name}</h2>
        <p>📍 {director.country}</p>
        {director.birthYear && <p>🎂 {director.birthYear}</p>}
      </div>
    </Link>
  );
}

export default DirectorCard;