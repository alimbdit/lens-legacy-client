const EventCard = ({ event }) => {
  console.log(event);
  return (
    <div>
      <div>
        <img src={event?.image} alt="" />
        <div>
          <div>
            <h3>{event?.date}</h3>
            <div className="divider horizontal"></div>
            <div>
              <p>
                {event?.startTime} - {event?.endTime}
              </p>
              <p>{event?.location}</p>
            </div>
          </div>
          <p>{event?.description.split(' ').slice(0,  15).join(' ')}...</p>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
