import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"
import DestinationData from "./DestinationData";
import "./DestinationStyles.css"

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you opportunity to see a lot, within a time frame.</p>

      <DestinationData
       className="first-des"
       heading="Taal Volcano, Batangas"
       text="One of the most iconic views in Luzon,Mt. Taal boast a volcano
                        inside a lake inside a island. If you close a fancy a clooser look,
                        hike up to the crater is a mere 45 minutes, and is easy enough for
                        the bignners. Guides will assist you most of the way, and you will
                        see the peculiar environment fount on an active volcano rocks and
                        steam vents. The hike can be dusty and hot, so plan for an early
                        morning trip, and then unwind with some bulalo before heading back
                        home!"
        img1={Mountain1}
        img2={Mountain2}                
      />

<DestinationData
       className="first-des-reverse"
       heading="Mt. Daguldul, Batangas"
       text="One of the most iconic views in Luzon,Mt. Taal boast a volcano
          inside a lake inside a island. If you close a fancy a clooser look,
          hike up to the crater is a mere 45 minutes, and is easy enough for
          the bignners. Guides will assist you most of the way, and you will
          see the peculiar environment fount on an active volcano rocks and
          steam vents. The hike can be dusty and hot, so plan for an early
          morning trip, and then unwind with some bulalo before heading back
          home!"
        img1={Mountain3}
        img2={Mountain4}                
      />

      
    </div>
  );
};

export default Destination;
