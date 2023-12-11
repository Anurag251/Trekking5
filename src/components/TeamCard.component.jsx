/* eslint-disable react/prop-types */

const TeamCardComponent = ({ data }) => {
  return (
    <div className="TeamCardComponent">
      <div className="image">
        <img src={data} alt="" />
      </div>

      <div className="content">
        <h4 className="name">Andy Moore</h4>
        <h6>Founder, CEO & Head Yeti</h6>

        <p className="desc">
          Andy set up EverTrek after a trip to Nepal and returned to Wales eager
          to not only help the country by supporting local trade but also open
          up opportunities for avid adventurers to get out of their comfort zone
          and test their physical limits in the Himalayas and beyond. His
          obvious love and passion for the mountains and outdoors feeds down to
          the tight knit EverTrekker community and the day to day running of the
          business. His goal is to inspire people to not only reach the summits
          of mountains or trek to places like Everest Base Camp but also love
          the journey along the way, as he put's it 'It's all about the
          journey'.
        </p>
      </div>
    </div>
  );
};

export default TeamCardComponent;
