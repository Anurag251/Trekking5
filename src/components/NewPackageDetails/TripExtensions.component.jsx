/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const TripExtensionsComponent = ({ data }) => {
  // const { detailsPageNav } = useContext(AllDataContext);

  // return (
  //   <div
  //     className={`TripExtensionsComponent ${
  //       detailsPageNav === "TripExtensions" ? "active" : ""
  //     }`}
  //   >
  //     <section>
  //       <div className="wrapper">
  //         <div className="main-title">
  //           tRip exteNsions
  //           <i className="fas fa-angle-down"></i>
  //         </div>

  //         <div className="main-container">
  //           <div className="trip-extensions-list">
  //             <section>
  //               <div className="trip-extensions-item">
  //                 <div className="image-area">
  //                   <img
  //                     src="https://i.assetzen.net/i/Y9j0gnTKxSBR/w:415/h:262/q:70.webp"
  //                     alt="trip-extensions-image"
  //                   />
  //                 </div>

  //                 <div className="content">
  //                   <div className="trip-extensions-title">
  //                     <h4>Chitwan Extension - Jungle Safari</h4>
  //                     <div className="price">£ 695</div>
  //                   </div>

  //                   <p>
  //                     Chitwan National Park. Once your trek is finished, why not
  //                     relax and explore a rarely visited part of Nepal on our 3
  //                     Night tour of Chitwan national park.
  //                   </p>
  //                   <p>
  //                     The Itinerary which includes the awesome Jungle Safari
  //                     covers all of the major activities in the national park
  //                     with relaxing accommodation on a full board basis.
  //                   </p>

  //                   <ul>
  //                     <li> A unique trip designed by EverTrek.</li>
  //                     <li>
  //                       See animals in their natural environment like Tigers,
  //                       Rhinos and Crocodiles
  //                     </li>
  //                     <li> You stay in a comfortable lodge & Hotel</li>
  //                     <li>
  //                       Prices include a Jungle guide during the jungle safari
  //                     </li>
  //                   </ul>

  //                   <div className="days-instructions">
  //                     <div className="days-item">
  //                       <div className="item-title">
  //                         Day 1 - Drive to Chitwan
  //                       </div>
  //                       <div className="item-body">
  //                         <p>
  //                           The journey to Chitwan begins at around 7:00 am in
  //                           the morning. Leaving the Kathmandu Valley behind,
  //                           you will head south-west along the Privthvi highway
  //                           towards Chitwan. The Prithvi Highway is one of the
  //                           most scenic highways in Nepal and is surrounded by
  //                           beautiful green hills on one side and the Trisuli
  //                           River on the other. You will stop for breakfast and
  //                           then continue for a 5 hour drive. You will then
  //                           transfer to the hotel just outside the National Park
  //                           and grab some lunch. After lunch, there is some free
  //                           time for you to explore and visit the Tharu Village
  //                           and the museum. You will spend the night having some
  //                           food at the local hotel.
  //                         </p>
  //                       </div>
  //                     </div>

  //                     <div className="days-item">
  //                       <div className="item-title">
  //                         Day 1 - Drive to Chitwan
  //                       </div>
  //                       <div className="item-body">
  //                         <p>
  //                           The journey to Chitwan begins at around 7:00 am in
  //                           the morning. Leaving the Kathmandu Valley behind,
  //                           you will head south-west along the Privthvi highway
  //                           towards Chitwan. The Prithvi Highway is one of the
  //                           most scenic highways in Nepal and is surrounded by
  //                           beautiful green hills on one side and the Trisuli
  //                           River on the other. You will stop for breakfast and
  //                           then continue for a 5 hour drive. You will then
  //                           transfer to the hotel just outside the National Park
  //                           and grab some lunch. After lunch, there is some free
  //                           time for you to explore and visit the Tharu Village
  //                           and the museum. You will spend the night having some
  //                           food at the local hotel.
  //                         </p>
  //                       </div>
  //                     </div>

  //                     <div className="days-item">
  //                       <div className="item-title">
  //                         Day 1 - Drive to Chitwan
  //                       </div>
  //                       <div className="item-body">
  //                         <p>
  //                           The journey to Chitwan begins at around 7:00 am in
  //                           the morning. Leaving the Kathmandu Valley behind,
  //                           you will head south-west along the Privthvi highway
  //                           towards Chitwan. The Prithvi Highway is one of the
  //                           most scenic highways in Nepal and is surrounded by
  //                           beautiful green hills on one side and the Trisuli
  //                           River on the other. You will stop for breakfast and
  //                           then continue for a 5 hour drive. You will then
  //                           transfer to the hotel just outside the National Park
  //                           and grab some lunch. After lunch, there is some free
  //                           time for you to explore and visit the Tharu Village
  //                           and the museum. You will spend the night having some
  //                           food at the local hotel.
  //                         </p>
  //                       </div>
  //                     </div>

  //                     <div className="days-item">
  //                       <div className="item-title">
  //                         Day 1 - Drive to Chitwan
  //                       </div>
  //                       <div className="item-body">
  //                         <p>
  //                           The journey to Chitwan begins at around 7:00 am in
  //                           the morning. Leaving the Kathmandu Valley behind,
  //                           you will head south-west along the Privthvi highway
  //                           towards Chitwan. The Prithvi Highway is one of the
  //                           most scenic highways in Nepal and is surrounded by
  //                           beautiful green hills on one side and the Trisuli
  //                           River on the other. You will stop for breakfast and
  //                           then continue for a 5 hour drive. You will then
  //                           transfer to the hotel just outside the National Park
  //                           and grab some lunch. After lunch, there is some free
  //                           time for you to explore and visit the Tharu Village
  //                           and the museum. You will spend the night having some
  //                           food at the local hotel.
  //                         </p>
  //                       </div>
  //                     </div>

  //                     <div className="days-item">
  //                       <div className="item-title">
  //                         Day 1 - Drive to Chitwan
  //                       </div>
  //                       <div className="item-body">
  //                         <p>
  //                           The journey to Chitwan begins at around 7:00 am in
  //                           the morning. Leaving the Kathmandu Valley behind,
  //                           you will head south-west along the Privthvi highway
  //                           towards Chitwan. The Prithvi Highway is one of the
  //                           most scenic highways in Nepal and is surrounded by
  //                           beautiful green hills on one side and the Trisuli
  //                           River on the other. You will stop for breakfast and
  //                           then continue for a 5 hour drive. You will then
  //                           transfer to the hotel just outside the National Park
  //                           and grab some lunch. After lunch, there is some free
  //                           time for you to explore and visit the Tharu Village
  //                           and the museum. You will spend the night having some
  //                           food at the local hotel.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </section>

  //             <section>
  //               <div className="trip-extensions-item">
  //                 <div className="image-area">
  //                   <img
  //                     src="https://i.assetzen.net/i/GLPQlmKciUVh/w:415/h:262/q:70.webp"
  //                     alt="trip-extensions-image"
  //                   />
  //                 </div>

  //                 <div className="content">
  //                   <div className="trip-extensions-title">
  //                     <h4>Yoga Retreat In Pokhora</h4>
  //                     <div className="price">£ 1000</div>
  //                   </div>

  //                   <p>
  //                     When you return from your adventure in the Himalayas there
  //                     is no better way to relax and rejuvenate than to spend 4
  //                     days in Pokhara at our yoga retreat.
  //                   </p>
  //                   <p>
  //                     Enjoy a few days of relaxing after your trek with some
  //                     yoga at a residential retreat in Pokhara. Whether you are
  //                     looking to begin your new yoga adventure, deepen your
  //                     existing yoga practice or just rest, relax and enjoy this
  //                     tranquil yogic environment, this experience is the perfect
  //                     place for you
  //                   </p>

  //                   <ul>
  //                     <li> A unique trip designed by EverTrek.</li>
  //                     <li>
  //                       See animals in their natural environment like Tigers,
  //                       Rhinos and Crocodiles
  //                     </li>
  //                     <li> You stay in a comfortable lodge & Hotel</li>
  //                     <li>
  //                       Prices include a Jungle guide during the jungle safari
  //                     </li>
  //                   </ul>
  //                 </div>
  //               </div>
  //             </section>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );

  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);

  return (
    <div
      className={`MoreInfoSection ${
        detailsPageNav === "Trip Notes" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div
            className={`inner-details-button ${
              detailsPageNav === "Trip Notes" ? "show-details" : ""
            }`}
          >
            <div
              className="main-title"
              onClick={() => {
                window.scroll(0, 370);
                setDetailsPageNav("Trip Notes");
              }}
            >
              Trip Notes <i className="fas fa-angle-down"></i>
            </div>

            <div className="inner-details">
              <div className="main-container">
                <div className="TripOverviewMainContent">
                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: data?.equipments,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripExtensionsComponent;
