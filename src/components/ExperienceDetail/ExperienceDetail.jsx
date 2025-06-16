import { useParams } from 'react-router-dom';
import './ExperienceDetail.css';
import { FaCalendarAlt } from "react-icons/fa";

function ExperienceDetail({ experiences }) {
    const { id } = useParams();
    const exp = experiences.find(e => e.id === id);
    
    // check to see if the experience exists
    if (!exp) {
        return <div style={{ padding: "2rem" }}>Experience not found.</div>;
    }

    // parse dates and convert end date to present day if necessary
    var present = exp.endDate == "Present";
    var start = new Date(exp.startDate);
    var end = present ? new Date(Date.now()) : new Date(exp.endDate);

    return (
        <div className="experience-detail-card">
            {exp.detailPhoto && (
                <img
                    src={exp.detailPhoto}
                    alt={`${exp.organization} detail`}
                    className="experience-detail-photo"
                />
            )}
            <div className="experience-detail-header">
                <h2>{exp.name}</h2>
                <span className="experience-detail-org">
                    {exp.organization}
                    {exp.logo && (
                        <img src={exp.logo} alt={exp.organization + " logo"} className="experience-detail-logo" />
                    )}
                </span>
            </div>
            <div className="experience-detail-meta">
                <FaCalendarAlt />
                <span>{start.toLocaleString('default', { month: 'long' })} {start.getFullYear()} -
                    {present
                    ? <span> Present</span>
                    : <span> {end.toLocaleString('default', { month: 'long' })} {end.getFullYear()}</span>
                }
                </span>
                
            </div>
            <div>
                <strong>Description:</strong>
                <p>{exp.description}</p>
            </div>
            {exp.tags && exp.tags.length > 0 && (
                <div className="experience-detail-tags">
                    {exp.tags.sort().map(tag => (
                        <span className="tag-chip" key={tag}>{tag}</span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ExperienceDetail;