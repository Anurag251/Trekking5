import React, { useEffect } from "react";

const TestPage = () => {
  useEffect(() => {
    const filterSections = document.querySelectorAll(".filter-section");
    const filterBtns = document.querySelectorAll(".filterBtns");

    const check = (id) => {
      filterSections.forEach((filterSection, idx) => {
        const dataId = filterSection.getAttribute("id");

        if (dataId === id) {
          filterSection.classList.add("active");
          filterBtns[idx].classList.add("active");
        } else {
          filterSection.classList.remove("active");
          filterBtns[idx].classList.remove("active");
        }
      });
    };

    filterBtns.forEach((filterBtn) => {
      filterBtn.addEventListener("click", (e) => {
        check(e.target.getAttribute("data-filter"));
      });
    });

    const filterTitles = document.querySelectorAll(".filterTitle");
    const filterDetails = document.querySelectorAll(".filterDetails");

    filterTitles.forEach((filterTitle, idx) => {
      filterTitle.addEventListener("click", () => {
        filterDetails[idx].classList.toggle("active");
      });
    });
  }, []);

  const bookNowFormPopup = document.querySelector(".book-now-form-popup");

  const inquireFormPopup = document.querySelector(".inquire-form-popup");

  const openBookNow = () => {
    bookNowFormPopup.classList.add("active");
  };

  const closeBookNow = () => {
    bookNowFormPopup.classList.remove("active");
  };

  const openInquire = () => {
    inquireFormPopup.classList.add("active");
  };

  const closeInquire = () => {
    inquireFormPopup.classList.remove("active");
  };

  return (
    <div className="test-pages">
      {/* <div
        className="TestPage"
        style={{
          backgroundImage:
            "url(https://alpenglowexpeditions.com/wp-content/themes/alpenglow/images/section-promo.jpg)",
        }}
      >
        <div
          className="background-image"
          style={{
            backgroundImage:
              "url(https://alpenglowexpeditions.com/wp-content/themes/alpenglow/images/mountains-parallax.png)",
          }}
        ></div>
        <div className="wrapper">
          <div className="itemsList">
            <div className="item">
              <div className="icon-sec">
                <img
                  src="https://alpenglowexpeditions.com/wp-content/uploads/2015/12/alpenglow-icon.svg"
                  alt=""
                />
              </div>
              <div className="content">
                <h4 className="item-title">HOW WE'RE DIFFERENT</h4>
                <p className="desc">
                  Rated one of the top guide companies in the world, we do
                  things a better way.
                </p>
                <button className="learn">Learn More</button>
              </div>
            </div>

            <div className="item">
              <div className="icon-sec">
                <img
                  src="https://alpenglowexpeditions.com/wp-content/uploads/2015/12/ico-rapid-ascent-1.svg"
                  alt=""
                />
              </div>
              <div className="content">
                <h4 className="item-title">RAPID ASCENT™</h4>
                <p className="desc">
                  A safer and more efficient way to climb mountains - exclusive
                  to us.
                </p>
                <button className="learn">Learn More</button>
              </div>
            </div>

            <div className="item">
              <div className="icon-sec">
                <img
                  src="https://alpenglowexpeditions.com/wp-content/uploads/2015/12/ico-custom-trip.svg"
                  alt=""
                />
              </div>
              <div className="content">
                <h4 className="item-title">CUSTOM TRIPS</h4>
                <p className="desc">
                  Anytime, anywhere with the best guides and logistics in the
                  world.
                </p>
                <button className="learn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="package-section">
        <div className="wrapper">
          <div className="list">
            <div className="item">
              <div className="top-item">
                <div className="image">
                  <img
                    src="https://alpenglowexpeditions.com/wp-content/uploads/2015/12/bg-featured-school.jpg"
                    alt=""
                  />
                </div>

                <div className="content">
                  <div className="package-title">School</div>
                  <h5>View All School Trips <i className="fas fa-angle-right"></i></h5>
                </div>

                <button className="create-button">
                  Create A Custom Trip <i className="fas fa-angle-right"></i>
                </button>
              </div>
              <div className="bottom-item">
                <div className="small-item">
                  <img
                    className="small-item-image"
                    src="https://alpenglowexpeditions.com/wp-content/uploads/2016/01/Featured-EcuadorSchool-800x600-c-default.jpg"
                    alt=""
                  />
                  <div className="content">
                    <h4 className="package-name">Ecuador Climbing School</h4>

                    <div className="small-item-footer">
                      <ul>
                        <li>
                          <img
                            src="https://alpenglowexpeditions.com/wp-content/themes/alpenglow/images/ico-place.svg"
                            alt=""
                          />

                          <div className="name">
                            LOCATION
                            <h6>Nepal</h6>
                          </div>
                        </li>

                        <li>
                          <img
                            src="https://alpenglowexpeditions.com/wp-content/themes/alpenglow/images/ico-skill.svg"
                            alt=""
                          />

                          <div className="name">
                            Skill level
                            <h6>Nepal</h6>
                          </div>
                        </li>

                        <li>
                          <img
                            src="https://alpenglowexpeditions.com/wp-content/themes/alpenglow/images/ico-duration.svg"
                            alt=""
                          />

                          <div className="name">
                            Duration <h6>9days</h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="small-item">
                  <img
                    className="small-item-image"
                    src="https://alpenglowexpeditions.com/wp-content/uploads/2016/05/TG_lead-800x600-c-default.jpg"
                    alt=""
                  />

                  <div className="content">
                    <h4 className="package-name">Learn To Lead Climb</h4>

                    <div className="small-item-footer">
                      <ul>
                        <li>
                          <img
                            src="https://alpenglowexpeditions.com/wp-content/themes/alpenglow/images/ico-place.svg"
                            alt=""
                          />

                          <div className="name">
                            LOCATION
                            <h6>Nepal</h6>
                          </div>
                        </li>

                        <li>
                          <img
                            src="https://alpenglowexpeditions.com/wp-content/themes/alpenglow/images/ico-skill.svg"
                            alt=""
                          />

                          <div className="name">
                            Skill level
                            <h6>Nepal</h6>
                          </div>
                        </li>

                        <li>
                          <img
                            src="https://alpenglowexpeditions.com/wp-content/themes/alpenglow/images/ico-duration.svg"
                            alt=""
                          />

                          <div className="name">
                            Duration <h6>9days</h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="small-item">
                  <img
                    className="small-item-image"
                    src="https://alpenglowexpeditions.com/wp-content/uploads/2016/03/DSC04407-copy-800x600-c-default.jpeg"
                    alt=""
                  />

                  <div className="content">
                    <h4 className="package-name">Lovers Leap Rock Climbing</h4>

                    <div className="small-item-footer">
                      <ul>
                        <li>
                          <img
                            src="https://alpenglowexpeditions.com/wp-content/themes/alpenglow/images/ico-place.svg"
                            alt=""
                          />

                          <div className="name">
                            LOCATION
                            <h6>Nepal</h6>
                          </div>
                        </li>

                        <li>
                          <img
                            src="https://alpenglowexpeditions.com/wp-content/themes/alpenglow/images/ico-skill.svg"
                            alt=""
                          />

                          <div className="name">
                            Skill level
                            <h6>Nepal</h6>
                          </div>
                        </li>

                        <li>
                          <img
                            src="https://alpenglowexpeditions.com/wp-content/themes/alpenglow/images/ico-duration.svg"
                            alt=""
                          />

                          <div className="name">
                            Duration <h6>9days</h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="book-now-form-popup">
        <div className="form-popup-bg" onClick={closeBookNow}></div>
        <div className="form-form-container">
          <div className="form-popup-close" onClick={closeBookNow}>
            <i className="fas fa-times"></i>
          </div>

          <div className="form-area">
            <div className="popup-form">
              <div className="contact-title">
                <div className="title-area">
                  <h2>Booking Form</h2>
                </div>
              </div>

              <form>
                <div className="form-inputs">
                  <div className="input-group">
                    <div className="group">
                      <label htmlFor="inputName">Name</label>
                      <input
                        type="text"
                        id="inputName"
                        name="name"
                        placeholder="John Deo"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="inputEmail">Email</label>
                      <input
                        type="email"
                        id="inputEmail"
                        name="email"
                        placeholder="example@name.com"
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <div className="group">
                      <label htmlFor="inputPhone">Contact Number</label>
                      <input
                        type="number"
                        id="inputPhone"
                        name="phone"
                        placeholder="XXX XXX XXXX"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="inputSubject">Subject</label>
                      <input
                        type="text"
                        id="inputSubject"
                        name="subject"
                        placeholder="example"
                      />
                    </div>
                  </div>

                  <div className="group message-box">
                    <label htmlFor="inputMessage">Message</label>

                    <textarea
                      name="message"
                      id="inputMessage"
                      cols="30"
                      rows="10"
                      placeholder="Your message to our hotel manager"
                    ></textarea>
                  </div>
                </div>

                <button className="submit-btn">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="inquire-form-popup">
        <div className="form-popup-bg" onClick={closeInquire}></div>
        <div className="form-form-container">
          <div className="form-popup-close" onClick={closeInquire}>
            <i className="fas fa-times"></i>
          </div>

          <div className="form-area">
            <div className="popup-form">
              <div className="contact-title">
                <div className="title-area">
                  <h2>Drop Us A Message</h2>
                </div>

                <p>
                  Our team is here to support you 24/7. Please feel free to
                  provide your queries. You will get response within few
                  minutes.
                </p>
              </div>

              <form>
                <div className="form-inputs">
                  <div className="input-group">
                    <div className="group">
                      <label htmlFor="inputName">Name</label>
                      <input
                        type="text"
                        id="inputName"
                        name="name"
                        placeholder="John Deo"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="inputEmail">Email</label>
                      <input
                        type="email"
                        id="inputEmail"
                        name="email"
                        placeholder="example@name.com"
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <div className="group">
                      <label htmlFor="inputPhone">Contact Number</label>
                      <input
                        type="number"
                        id="inputPhone"
                        name="phone"
                        placeholder="XXX XXX XXXX"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="inputSubject">Subject</label>
                      <input
                        type="text"
                        id="inputSubject"
                        name="subject"
                        placeholder="example"
                      />
                    </div>
                  </div>

                  <div className="group message-box">
                    <label htmlFor="inputCommentRemarks">Message</label>

                    <textarea
                      name="message"
                      id="inputCommentRemarks"
                      cols="30"
                      rows="10"
                      placeholder="Your message to our hotel manager"
                    ></textarea>
                  </div>
                </div>

                <button className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="package-details-pages">
          <div className="wrapper">
            <div className="package-title-area">
              <h1 className="package-title">
                PALISADES TAHOE BACKCOUNTRY TOURS
              </h1>

              <h4>
                1 DAY IN CALIFORNIA, LAKE TAHOE / (SKILL LEVEL: INTERMEDIATE)
              </h4>
            </div>

            <div className="package-details-section">
              <div className="image-area">
                <img
                  src="https://alpenglowexpeditions.com/wp-content/uploads/2023/02/TG_Shasta-400x260-c-default.jpg"
                  alt=""
                />
              </div>

              <div className="package-details-area">
                <div className="price-sec">
                  <div className="package-sec-title">PRICE PER PERSON</div>

                  <div className="price">$219</div>

                  <h5>Based on a group of 5 skiers</h5>
                </div>

                <div className="button-group">
                  <div className="button-area">
                    <a href="#">
                      <button id="bookNowButton" onClick={openBookNow}>
                        Book Now
                      </button>
                    </a>

                    <a href="#">
                      <button id="inquireButton" onClick={openInquire}>
                        Inquire
                      </button>
                    </a>
                  </div>
                </div>

                <div className="about-trip">
                  <div className="package-sec-title">ABOUT THIS TRIP</div>

                  <p className="description">
                    Ski and ride outside the ski area boundaries of Lake Tahoe’s
                    premier resort with Alpenglow’s AMGA certified guides.
                    Riding the lifts means less time hiking and more time skiing
                    and riding this incredible backcountry terrain. Now includes
                    the coveted terrain of National Geographic bowl outside of
                    Granite Chief.
                  </p>

                  <ul>
                    <li className="list-title">Full-Day Rates on Weekdays:</li>
                    <li>Single: $595</li>
                    <li>Group of 2: $360/person</li>
                    <li>Group of 3: $281/person</li>
                    <li>Group of 4: $242/person</li>
                    <li>Group of 5: $219/person</li>
                    <li>
                      Please contact the office to book groups of 5 or more
                    </li>
                  </ul>

                  <ul>
                    <li className="list-title"> Full-Day Rates on Weekends:</li>
                    <li> Single: $625</li>
                    <li> Group of 2: $375/person</li>
                    <li> Group of 3: $291/person</li>
                    <li> Group of 4: $250/person</li>
                    <li> Group of 5: $225/person</li>
                    <li>
                      Please contact the office to book groups of 5 or more
                    </li>

                    <li>
                      Please see the preparation section before booking your
                      trip.
                    </li>
                  </ul>
                </div>

                <div className="contact-info"></div>
              </div>
            </div>
          </div>
          <div className="package-main-details">
            <div className="package-details-bg-image">
              <img
                src="https://alpenglowexpeditions.com/wp-content/uploads/2016/09/BG_graniteview.jpg"
                alt=""
              />
            </div>

            <div className="package-all-details">
              <div className="overview">
                <div className="section-title-area">
                  <h2 className="section-title">OVERVIEW</h2>

                  <ul className="other-info">
                    <li>
                      <div className="icon">
                        <img
                          src="https://alpenglowexpeditions.com/wp-content/themes/alpenglow/images/ico-skill.svg"
                          alt=""
                        />
                      </div>
                      <div className="text">
                        <span>SKILL LEVEL</span>
                        <br />
                        Intermediate
                      </div>
                    </li>

                    <li>
                      <div className="icon">
                        <img
                          src="https://alpenglowexpeditions.com/wp-content/themes/alpenglow/images/ico-duration.svg"
                          alt=""
                        />
                      </div>
                      <div className="text">
                        <span>DURATION</span>
                        <br />1 day
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="descriptions">
                  By utilizing the extensive lift system of Palisades Tahoe Ski
                  Resort, we can quickly access incredible terrain and get more
                  skiing and riding in. In this program we ski in three distinct
                  zones: Tram Ridge, Nat Geo Bowl and Munchkins. For the first
                  time, this terrain can now be ridden with a guide, opening up
                  lift-accessed riding for skiers and snowboarders and requiring
                  less uphill travel than a normal day touring.
                </p>

                <p className="descriptions">
                  Each group is private with their own guide. This means you
                  know your group’s pace and skier or rider ability, and you
                  create your day.
                </p>
              </div>
            </div>
          </div>
          <div className="preparation">
            <section>
              <div className="wrapper">
                <div className="section-title-area">
                  <h2 className="section-title">PREPARATION</h2>
                </div>

                <div className="package-all-details">
                  <div className="technical-experience">
                    <div className="icon">
                      <img
                        src="https://alpenglowexpeditions.com/wp-content/uploads/2016/01/ico-ski.svg"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>TECHNICAL EXPERIENCE</h4>
                      <p>
                        Must be an advanced intermediate skier/rider that is
                        competent on and off-piste terrain in a variety of
                        conditions. Should feel comfortable on all blue runs and
                        most black diamond runs at a ski resort.
                      </p>
                    </div>
                  </div>

                  <div className="preparation-filter-buttons">
                    <button
                      className="filterBtns active"
                      data-filter="ITINERARY"
                    >
                      ITINERARY
                    </button>

                    <button className="filterBtns" data-filter="EQUIPMENT">
                      EQUIPMENT
                    </button>

                    <button className="filterBtns" data-filter="FAQS">
                      FAQS
                    </button>
                  </div>

                  <div className="filter-section active" id="ITINERARY">
                    <ul className="list">
                      <li className="filterDetails">
                        <div className="filter-title filterTitle">
                          <div className="icon rotate">
                            <i className="far fa-times-circle"></i>
                          </div>
                          <span>8:30 AM </span> — Meet and Greet
                        </div>

                        <div className="filter-details">
                          <div className="details">
                            To fit in a full day of skiing we start our day
                            early!
                          </div>
                        </div>
                      </li>

                      <li className="filterDetails">
                        <div className="filter-title filterTitle">
                          <div className="icon rotate">
                            <i className="far fa-times-circle"></i>
                          </div>
                          <span>8:30 AM </span> — Meet and Greet
                        </div>

                        <div className="filter-details">
                          <div className="details">
                            To fit in a full day of skiing we start our day
                            early!
                          </div>
                        </div>
                      </li>

                      <li className="filterDetails">
                        <div className="filter-title filterTitle">
                          <div className="icon rotate">
                            <i className="far fa-times-circle"></i>
                          </div>
                          <span>8:30 AM </span> — Meet and Greet
                        </div>

                        <div className="filter-details">
                          <div className="details">
                            To fit in a full day of skiing we start our day
                            early!
                          </div>
                        </div>
                      </li>

                      <li className="filterDetails">
                        <div className="filter-title filterTitle">
                          <div className="icon rotate">
                            <i className="far fa-times-circle"></i>
                          </div>
                          <span>8:30 AM </span> — Meet and Greet
                        </div>

                        <div className="filter-details">
                          <div className="details">
                            To fit in a full day of skiing we start our day
                            early!
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="filter-section" id="EQUIPMENT">
                    <ul className="list">
                      <li>
                        <div className="filter-title">
                          <div className="icon">
                            <i className="fas fa-check"></i>
                          </div>
                          International arrival and departure transfer in a
                          private vehicle
                        </div>
                      </li>

                      <li>
                        <div className="filter-title">
                          <div className="icon">
                            <i className="fas fa-check"></i>
                          </div>
                          International arrival and departure transfer in a
                          private vehicle
                        </div>
                      </li>

                      <li>
                        <div className="filter-title">
                          <div className="icon">
                            <i className="fas fa-check"></i>
                          </div>
                          International arrival and departure transfer in a
                          private vehicle
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="filter-section" id="FAQS">
                    <ul className="list">
                      <li>
                        <div className="filter-title">
                          <div className="icon">
                            <i className="fas fa-times"></i>
                          </div>
                          International arrival and departure transfer in a
                          private vehicle
                        </div>
                      </li>

                      <li>
                        <div className="filter-title">
                          <div className="icon">
                            <i className="fas fa-times"></i>
                          </div>
                          International arrival and departure transfer in a
                          private vehicle
                        </div>
                      </li>

                      <li>
                        <div className="filter-title">
                          <div className="icon">
                            <i className="fas fa-times"></i>
                          </div>
                          International arrival and departure transfer in a
                          private vehicle
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="gallery-section">
            <section>
              <div className="wrapper">
                <div className="gallery-area">
                  <h2 className="section-title-area">Gallery</h2>

                  <div className="images-list">
                    <div className="image">
                      <img
                        src="https://alpenglowexpeditions.com/wp-content/uploads/2023/02/TG_Shasta-800x530-c-default.jpg"
                        alt=""
                      />
                    </div>

                    <div className="image">
                      <img
                        src="https://alpenglowexpeditions.com/wp-content/uploads/2023/02/TG_Shasta-800x530-c-default.jpg"
                        alt=""
                      />
                    </div>

                    <div className="image">
                      <img
                        src="https://alpenglowexpeditions.com/wp-content/uploads/2023/02/TG_Shasta-800x530-c-default.jpg"
                        alt=""
                      />
                    </div>

                    <div className="image">
                      <img
                        src="https://alpenglowexpeditions.com/wp-content/uploads/2023/02/TG_Shasta-800x530-c-default.jpg"
                        alt=""
                      />
                    </div>

                    <div className="image">
                      <img
                        src="https://alpenglowexpeditions.com/wp-content/uploads/2023/02/TG_Shasta-800x530-c-default.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="popular-trips">
            <section>
              <div className="wrapper">
                <div className="popular-trips-area">
                  <h2 className="section-title-area">
                    YOU MAY LIKE TO SEE OTHER SIMILAR TREKS
                  </h2>

                  <div className="popular-trips-list">
                    <div>
                      <div className="item">
                        <div className="image">
                          <img
                            src="https://alpenglowexpeditions.com/wp-content/uploads/2023/02/TG_Shasta-800x530-c-default.jpg"
                            alt="trek-image"
                          />
                        </div>

                        <div className="content">
                          <h4 className="trip-title">
                            CLIMB MT. SHASTA WITH ALPENGLOW EXPEDITIONS
                          </h4>

                          <a href="#">
                            <button>View Details</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestPage;
