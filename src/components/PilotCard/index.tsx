import type { Pilot } from '../Cards'

const PilotCard: React.FC<Pilot> = ({
    name,
    phoneNumber,
    email,
    distance
}) => {

    return(
        <div className="border shadow-lg h-52 w-80 flex flex-col justify-center  p-6" >
            <p>name: {name}</p>
            <p>phone number: {phoneNumber}</p>
            <p>email: {email}</p>
            <p>distance: {distance}</p>
        </div>
    );
};

export default PilotCard;