/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AllDataContext } from "../context/AllData.context";
import { Link } from "react-router-dom";

const HelpfulYetisComponent = ({ title, subTitle }) => {
  const { teamDatas } = useContext(AllDataContext);

  const [selectedTeam, setSelectedTeam] = useState(null);

  const [isTeamPopup, setIsTeamPopup] = useState(false);

  return (
    <section className="bg-color">
      <div className="HelpfulYetis">
        <div className={`teams-popup ${isTeamPopup ? "active" : ""}`}>
          <div className="popup-bg" onClick={() => setIsTeamPopup(false)}></div>
          <div className="popup-box">
            <div className="popup-close" onClick={() => setIsTeamPopup(false)}>
              <i className="fas fa-times"></i>
            </div>

            <div className="popup-container">
              <div className="team-image">
                <img src={selectedTeam?.image} alt={selectedTeam?.name} />
              </div>

              <div className="details">
                <div className="name">{selectedTeam?.name}</div>
                <div className="designation">{selectedTeam?.designation}</div>
                <ul className="social-media">
                  {selectedTeam?.linkedin !== null ? (
                    <li>
                      <Link to={selectedTeam?.linkedin} target="blank">
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>
                  ) : null}

                  {selectedTeam?.instagram !== null ? (
                    <li>
                      <Link to={selectedTeam?.instagram} target="blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  ) : null}

                  {selectedTeam?.facebook !== null ? (
                    <li>
                      <Link to={selectedTeam?.facebook} target="blank">
                        <i className="fab fa-facebook"></i>
                      </Link>
                    </li>
                  ) : null}

                  {selectedTeam?.email !== null ? (
                    <li>
                      <Link to={`mailto:${selectedTeam?.email}`}>
                        <i className="fas fa-envelope"></i>
                      </Link>
                    </li>
                  ) : null}
                </ul>
                <p className="desc">{selectedTeam?.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="title-part">
            <div className="name">{title}</div>
            <h5>{subTitle}</h5>
          </div>

          <div className="list">
            {teamDatas &&
              teamDatas
                .filter((data, idx) => idx < 5)
                .map((data, idx) => (
                  <div
                    className="item"
                    key={idx}
                    onClick={() => {
                      setSelectedTeam(data);
                      setIsTeamPopup(true);
                    }}
                  >
                    <div className="image-area">
                      <img src={data.image} alt={data.name} />
                    </div>

                    <div className="content">
                      <ul>
                        <li className="phone">{data.designation}</li>
                      </ul>
                      <div className="name">{data.name}</div>

                      {/*  <ul className="social-media">
                        {data.linkedin !== null ? (
                          <li>
                            <Link to={data.linkedin} target="blank">
                              <i className="fab fa-linkedin"></i>
                            </Link>
                          </li>
                        ) : null}

                        {data.instagram !== null ? (
                          <li>
                            <Link to={data.instagram} target="blank">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                        ) : null}

                        {data.facebook !== null ? (
                          <li>
                            <Link to={data.facebook} target="blank">
                              <i className="fab fa-facebook"></i>
                            </Link>
                          </li>
                        ) : null}

                        {data.email !== null ? (
                          <li>
                            <Link to={`mailto:${data.email}`}>
                              <i className="fas fa-envelope"></i>
                            </Link>
                          </li>
                        ) : null}
                      </ul> */}
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpfulYetisComponent;
