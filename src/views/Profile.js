import LayoutBase from "../components/layout";
import AvatarNeutro from "../assets/img/avatar.png";
import styled from "styled-components";
import { getAllUsers } from "../services/userService";
import React, { useEffect, useState } from 'react'

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineGoogle,
  AiOutlineCheck,
} from "react-icons/ai";
import { IoLogoTwitch } from "react-icons/io";

const BreadCrumb = ["Home", "Perfil"];

const Profile = (props) => {
  const [names, setNames ] = useState([])

  const getName = async () => {
    try{
     const names = await getAllUsers()
     setNames(names.data)
    }catch(err){
     console.log('error', err)
    }
 }

 const mountName = () => names.map((user) => (
    <div className="title">{user.name}</div>
))

 useEffect(() => {
 getName()
}, [])

  const Actions = "";
  const newTabSocial = (url) => window.open(url, "_blank");

  const SocialMedia = (
    <>
      <AiFillFacebook onClick={() => newTabSocial("https://fb.com")} />
      <AiFillInstagram onClick={() => newTabSocial("https://instagram.com")} />
      <AiFillYoutube onClick={() => newTabSocial("https://youtube.com")} />
      <AiFillLinkedin onClick={() => newTabSocial("https://linkedin.com")} />
      <AiOutlineTwitter onClick={() => newTabSocial("https://twitter.com")} />
      <AiFillGithub onClick={() => newTabSocial("https://gihub.com")} />
      <AiOutlineGoogle onClick={() => newTabSocial("https://google.com")} />
      <IoLogoTwitch onClick={() => newTabSocial("https://twitch.com")} />
    </>
  );

  return (
    <LayoutBase breadcrumb={BreadCrumb} title="Perfil" actions={Actions}>
      <SliceTop>
        <div className="avatar">
          <img src={AvatarNeutro} alt="" />
        </div>
          {mountName()}
        <div className="subTitle"></div>

        <div className="socialMedia">{SocialMedia}</div>
      </SliceTop>
      <SliceMiddle>
        <div className="description">
          <div className="title">Biografia</div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
          doloremque nesciunt, repellendus nostrum deleniti recusandae nobis
          neque modi perspiciatis similique.
        </div>
        <div className="skills">
          <div className="title">Skills</div>

          <ul>
            <li>
              <AiOutlineCheck />
              PHP
            </li>
            <li>
              <AiOutlineCheck />
              JavaScript
            </li>
            <li>
              <AiOutlineCheck />
              Python
            </li>
            <li>
              <AiOutlineCheck />
              Go Lang
            </li>
            <li>
              <AiOutlineCheck />
              AWS
            </li>
            <li>
              <AiOutlineCheck />
              GOOGLE CLOUD
            </li>
          </ul>
        </div>
      </SliceMiddle>
    </LayoutBase>
  );
};

export default Profile;

const SliceTop = styled.div`
  width: 60%;
  border: solid thin #eee;
  background-color: #2e5871;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  color: #fff;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  .avatar {
    width: 200px;
    height: 200px;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 100%;
    overflow: hidden;
    border: 2px solid #fff;
    img {
      max-width: 220px;
    }
  }
  .title {
    font-size: 28px;
    font-weight: 600;
    margin: 2px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
  }

  .socialMedia {
    padding: 10px;
    width: 100%;
    margin-top: 20px;
    font-size: 30px;
    text-align: center;
    svg {
      margin: 5px;
      :hover {
        color: #011529;
        transition: 0.4s;
        cursor: pointer;
        vertical-align: baseline;
      }
    }
  }
`;

const SliceMiddle = styled(SliceTop)`
  min-height: auto;
  border: solid thin #eee;
  background-color: #f8f8f8;
  color: #011529;

  .description {
    min-height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
  .skills {
    flex-direction: column;
    border-top: solid thin #eee;
    width: 100%;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      li {
        margin: 5px;
        padding: 5px;
        svg {
          color: green;
          margin: -5px 2px 0;
        }
      }
    }
  }
`;
