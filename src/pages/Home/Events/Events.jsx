
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import EventCard from './EventCard';

const Events = () => {

    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const {data:events=[], isLoading: isEventLoading} = useQuery({
        queryKey:['events', user?.email],
        queryFn: async()=>{
            const result = await axiosSecure.get('/events');
            return result.data
        }
    })
    console.log(events)

    return (
        <div className='parent-container bg-info bg-opacity-5'>
            <h1 className="text-5xl font-bold my-4 text-center">
        Upcoming Events
      </h1>
            <div>
                {
                   events && events.map(event => <EventCard key={event.id} event={event}></EventCard>)
                }
                </div>            
        </div>
    );
};

export default Events;