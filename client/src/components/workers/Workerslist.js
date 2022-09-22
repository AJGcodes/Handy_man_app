import { Link } from 'react-router-dom';
const WorkersList = () => (
    <>
    <h2>David Horne- </h2>
    <h4>Plumbing Specialist</h4>
    <Link to='/Davhorne'>
            <li>About David</li>
        </Link>
    <h2>Borja Kay- </h2>
    <h4>Carpentry Specialist</h4>
    <Link to='/Borjakay'>
            <li>About Borja</li>
        </Link>
    <h2>Greg Martos- </h2>
    <h4>RoofTop Specialist</h4>
    <Link to='/Gregmartos'>
            <li>About Greg</li>
        </Link>
    <h2>Maurice Martins- </h2>
    <h4>Appliance Specialist</h4>
    <Link to='/Mauricemartins'>
            <li>About Maurice</li>
        </Link>
    </>
)

export default WorkersList;