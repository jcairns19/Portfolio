import { useNavigate } from 'react-router-dom';
import './FeaturedSection.css';
import Experience from '../Experience/Experience.jsx';

function FeaturedSection({ experiences }) {
    const navigate = useNavigate();
    return (
        <section className="featured-section">
            <h2 className="featured-title">Featured Experiences</h2>
            <div className="featured-cards">
                {experiences
                // filter the experiences to include only the ones that have featured = true
                    .filter(exp => exp.feature === true)
                    .map((exp) => (
                        <div
                            key={exp.id}
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate(`/Portfolio/experiences/${exp.id}`)}
                        >
                            <Experience
                                name={exp.name}
                                organization={exp.organization}
                                logo={exp.logo}
                                location={exp.location}
                                startDate={exp.startDate}
                                endDate={exp.endDate}
                                points={exp.points}
                                tags={exp.tags}
                            />
                        </div>
                    ))}
            </div>
        </section>
    );
}

export default FeaturedSection;