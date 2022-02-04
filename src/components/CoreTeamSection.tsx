import React from 'react';

interface ITeamIcon {
  img?: string;
  name?: string;
  position?: string;
}

const TeamIcon = (props: ITeamIcon) => {
  const { img, name, position } = props;

  return (
    <div className="item d-flex flex-column">
      <div className="img-con">
        <img src={img} alt="team member" />
      </div>
      <p>{name}</p>
      <h5>{position}</h5>
    </div>
  );
};

const CoreTeamSection = () => {
  return (
    <div className="app-container">
      <div className="inux-core-team-section py-4">
        {/* <div className="d-flex justify-content-center btn-con">
          <button
            type="button"
            className="btn btn-primary py-2 px-4 d-flex justify-content-center align-items-center
            bg-transparent"
          >
            <img src="./img/small_button_icon.png" alt="icon" />
            About Lorem
          </button>
        </div> */}

        {/* <div className="title py-1 my-1 py-md-4 my-md-4">
          <h2 className="text-center">Lorem ipsum</h2>
          <p className="text-center">
            consectetur adipiscing elit. Ut in justo iaculis, molestie lectus id, posuere tortor Ut
            in justo iaculis, molestie lectus id, posuere tortor. Pellentesque nisi nisl, auctor
            quis molestie dictum, pharetra et magna. In tincidunt nunc
          </p>
        </div> */}

        <div className="core-team-con my-4 my-md-5 py-md-4">
          <h3 className="text-center">MEET THE TEAM</h3>
          {/* <div className="first-con mt-3 mt-md-5 pt-3 pt-md-5">
            <div className="first-grid-con">
              <TeamIcon img="./img/team_icon_1.png" />
              <TeamIcon img="./img/team_icon_2.png" />
              <TeamIcon img="./img/team_icon_3.png" />
            </div>
          </div> */}
          <div className="second-con mt-5 pt-4">
            <div className="second-grid-con">
              <TeamIcon
                name="Jörgen Håkansson"
                position="Chief Executive Officer (CEO)"
                img="./img/team_icon_4.png"
              />
              <TeamIcon
                name="Stefan Medstrand"
                position="Chief Technology Officer (CTO)"
                img="./img/team_icon_3.png"
              />

              {/* <TeamIcon img="./img/team_icon_6.png" /> */}
            </div>
          </div>

          <div className="second-con mt-5 pt-4">
            <div className="second-grid-con">
              <TeamIcon
                name="Simon Frick"
                position="Chief Marketing Officer (CMO)"
                img="./img/team_icon_1.png"
              />
              <TeamIcon
                name="Robin Westerberg"
                position="Chief Financial Officer (CFO)"
                img="./img/team_icon_3.png"
              />
              <TeamIcon
                name="Olle Kartal"
                position="Business Advisor"
                img="./img/team_icon_4.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTeamSection;
