export default function CoreConcept({ image, title, description }) {
    // destructuring CORE_CONCEPTS object from data.js above as a parameter
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}