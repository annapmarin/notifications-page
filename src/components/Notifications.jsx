import React, { useState } from "react";
import MarkWebber from '../assets/images/avatar-mark-webber.webp';
import AngelaGray from '../assets/images/avatar-angela-gray.webp';
import JacobThompson from '../assets/images/avatar-jacob-thompson.webp';
import KimberlySmith from '../assets/images/avatar-kimberly-smith.webp';
import NathanPeterson from '../assets/images/avatar-nathan-peterson.webp';
import RizkyHasanuddin from '../assets/images/avatar-rizky-hasanuddin.webp';
import AnnaKim from '../assets/images/avatar-anna-kim.webp';
import Chess from '../assets/images/image-chess.webp';


function Notifications() {
  const [read, setRead] = useState('container__info__notification__not-read');
  const [notifications, setNotifications] = useState(3);

  const handleNotifications = () => {
    setRead('');
    setNotifications(0)
  }

  const users = [
    {
      name: "Mark Webber",
      action: "reacted to your recent post",
      time: "1m ago",
      post: "My first tournament today!",
      notRead: "🔴",
      image: MarkWebber
    },
    {
      name: "Angela Gray",
      action: "followed you",
      time: "5m ago",
      post: "",
      notRead: "🔴",
      image: AngelaGray
    },
    {
      name: "Jacob Thompson",
      action: "has joined your group",
      time: "1 day ago",
      page: "Chess Club",
      notRead: "🔴",
      image: JacobThompson
    },
    {
      name: "Rizky Hasanuddin",
      action: "sent you a private message",
      time: "5 days ago",
      post: "",
      message:
        "Hellow, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      image: RizkyHasanuddin
    },
    {
      name: "Kimberly Smith",
      action: "commented on your picture",
      time: "1 week ago",
      image: KimberlySmith,
      image2: Chess
    },
    {
      name: "Nathan Peterson",
      action: "reacted to your recent post",
      time: "2 weeks ago",
      post: "5 end-game strategies to increase your win rate",
      image: NathanPeterson
    },
    {
      name: "Anna Kim",
      action: "left the group",
      time: "2 weeks ago",
      page: "Chess Club",
      image: AnnaKim
    },
  ];

  return (
    <div className="container">
      <header className="container__header">
        <div className="container__title">
          <h1>Notifications</h1>
          <span className="container__notifications">{notifications}</span>
        </div>
        <button 
          onClick={handleNotifications}
        >Mark all as read</button>
      </header>
      <section className="container__info">
        <ul>
          {users.map((user) => (
            <li
              className={user.notRead ? read : ''}
              key={user.name}
            >
              <div className="container__info__notification">
                <img
                  className="container__info__image"
                  src={user.image}
                />
                <div>
                  <p className="container__info__information">
                    <strong>{user.name}</strong> {user.action}{" "}
                    <b>{user.post}</b>
                    <a href="#">{user.page}</a> <span>{user.notRead}</span>
                  </p>
                  <p className="container__info__time">{user.time}</p>
                </div>
                <img className="container__info__post-image" src={user.image2 ? user.image2 : null} />
              </div>
              <p className={user.message ? "container__info__message" : null}>
                {user.message}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Notifications;
