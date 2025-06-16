import './Experience.css';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { TbPoint } from "react-icons/tb";

function Experience({ name, organization, logo, location, startDate, endDate, points, tags }) {
    var present = endDate == "Present";
    var start = new Date(startDate);
    var end = present ? new Date(Date.now()) : new Date(endDate);
    var years = ((end - start) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
    // this is the string at the top right of the experience card - can be in years or months
    var length = years < 1 ? (Math.ceil(years*12)).toString() + 'mo' : years.toString() + 'y';

    // conditionally set the class for experiences that are active
    var cardClass = present ? "experience-card heartbeat-green" : "experience-card";
    var timeClass = present ? "experience-metadata green-bold-large" : "experience-metadata"

    return (
        <div className={cardClass}>
            <div className="experience-title-row">
                <h3>{name}</h3>
                <span className={present ? "green-bold-large":""}>{length}</span>
            </div>
            <div className="experience-metadata">
                <span className="experience-company">{organization}</span>
                {logo && (
                    <img src={logo} alt={`${organization} logo`} className="experience-logo" />
                )}
                
            </div>
            <div className="experience-metadata">
                <FaLocationCrosshairs />
                <span>{location}</span>
            </div>
            <div id="duration" className={timeClass}>
                
                <span><FaCalendarAlt /> {start.toLocaleString('default', { month: 'long' })} {start.getFullYear()} - 
                    {present
                    ? <span>Present</span>
                    : <span>{end.toLocaleString('default', { month: 'long' })} {end.getFullYear()}</span>
                }
                </span>
                
            </div>
            {points && points.length > 0 && (
                <ul className="experience-points">
                    {points.map((point, idx) => (
                        <li key={idx}>
                            <TbPoint className="experience-point-icon" />
                            {point}
                        </li>
                    ))}
                </ul>
            )}
            {tags && tags.length > 0 && (
                <div className="experience-tags">
                    {tags.sort().map(tag => (
                        <span className="tag-chip" key={tag}>{tag}</span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Experience;