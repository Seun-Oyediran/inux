import React from 'react';

interface ITeamIcon {
  img?: string;
}

const TeamIcon = (props: ITeamIcon) => {
  const { img } = props;

  return (
    <div className="item d-flex flex-column">
      <div className="img-con">
        <img src={img} alt="team member" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <h5>Adipiscing elit. Morbi.</h5>
    </div>
  );
};

const CoreTeamSection = () => {
  return (
    <div className="app-container">
      <div className="inux-core-team-section py-4">
        <div className="d-flex justify-content-center btn-con">
          <button
            type="button"
            className="btn btn-primary py-2 px-4 d-flex justify-content-center align-items-center bg-transparent"
          >
            <img src="./img/small_button_icon.png" alt="icon" />
            About Lorem
          </button>
        </div>

        <div className="title py-4 my-4">
          <h2 className="text-center">Lorem ipsum</h2>
          <p className="text-center">
            consectetur adipiscing elit. Ut in justo iaculis, molestie lectus id, posuere tortor Ut
            in justo iaculis, molestie lectus id, posuere tortor. Pellentesque nisi nisl, auctor
            quis molestie dictum, pharetra et magna. In tincidunt nunc
          </p>
        </div>

        <div className="core-team-con my-5 py-4">
          <h3 className="text-center">CORE TEAM</h3>
          <div className="first-con  mt-5 pt-5">
            <div className="first-grid-con">
              <TeamIcon img="./img/team_icon_1.png" />
              <TeamIcon img="./img/team_icon_2.png" />
              <TeamIcon img="./img/team_icon_3.png" />
            </div>
          </div>
          <div className="second-con mt-5 pt-4">
            <div className="second-grid-con">
              <TeamIcon img="./img/team_icon_4.png" />
              <TeamIcon img="./img/team_icon_5.png" />
              <TeamIcon img="./img/team_icon_6.png" />
              <TeamIcon img="./img/team_icon_7.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTeamSection;
