import { useNavigate } from 'react-router-dom';
import Experience from '../Experience/Experience.jsx';
import './ExperienceList.css';

function ExperienceList({ experiences, type }) {
    const navigate = useNavigate();
    return (
        <div className="experience-list-flex">
            {experiences
                .filter(exp => exp.type === type)
                .map(exp => (
                    <div
                        key={exp.id}
                        style={{ cursor: "pointer", justifyContent: "center" }}
                        onClick={() => navigate(`/experiences/${exp.id}`)}
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
    );
}

export default ExperienceList;