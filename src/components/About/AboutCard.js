import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
     <Card.Body>
  <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
  Hi Everyone, I am <span className="purple"> Harsh Raj </span> from{" "}
  <span className="purple"> Patna, India</span>. I currently work as a{" "}
  <span className="purple">Data Engineer at ZS Associates, Gurgaon</span> and have
  completed my <span className="purple">B.Tech in ECE</span> from{" "}
  <span className="purple">NIT Jamshedpur</span>.
  <br />
  <br />
  Some of my achievements are:
</p>
    <ul>
      <li className="about-activity">
        <FaStar /> Highest Rating of 1210 (Pupil) on{" "}
        <a
          className="purple"
          style={{ textDecoration: "none" }}
          href="https://codeforces.com/profile/harshr784"
          target={"_blank"}
          rel="noreferrer"
        >
          Codeforces
        </a>.
      </li>
      <li className="about-activity">
        <FaStar /> Global Rank 231 in CodeChef’s October Long Challenge 2022
        (Division 2).
      </li>

      <li className="about-activity">
        <FaStar /> Achieved Highest Rating of 1607 (3 Star) on{" "}
        <a
          className="purple"
          style={{ textDecoration: "none" }}
          href="https://www.codechef.com/users/only_harsh"
          target={"_blank"}
          rel="noreferrer"
        >
          CodeChef
        </a>.
      </li>

      <li className="about-activity">
        <FaStar /> Institute Rank – 395 out of 5000+ registered students at{" "}
        <a
          className="purple"
          style={{ textDecoration: "none" }}
          href="https://www.geeksforgeeks.org/user/only_harsh/"
          target={"_blank"}
          rel="noreferrer"
        >
          GeeksforGeeks
        </a>.
      </li>

      <li className="about-activity">
        <FaStar /> Rated 1582 on{" "}
        <a
          className="purple"
          style={{ textDecoration: "none" }}
          href="https://leetcode.com/only_harsh/"
          target={"_blank"}
          rel="noreferrer"
        >
          LeetCode
        </a>.
      </li>
    </ul>
  </blockquote>
</Card.Body>
    </Card>
  );
}

export default AboutCard;
