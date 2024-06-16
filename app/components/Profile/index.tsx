import React, { CSSProperties } from "react";
import Image from "next/image";

const Profile = () => {
  const user = {
    profilePhoto:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the path to your photo
    username: "johndoe",
    bio: "A passionate developer with a love for coding.",
    skills: ["JavaScript", "React", "Next.js", "Node.js"],
    location: "San Francisco, CA",
  };

  const styles: { container: React.CSSProperties , profileHeader : React.CSSProperties , profilePhoto: CSSProperties , username : React.CSSProperties , bio : React.CSSProperties , details : React.CSSProperties , section : React.CSSProperties ,sectionTitle: React.CSSProperties ,
  skillsList: React.CSSProperties,
  skillItem:React.CSSProperties,
  location:React.CSSProperties  } = {
    container: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    profileHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
    },
    profilePhoto: {
      borderRadius: "50%",
      marginRight: "20px",
    },
    username: {
      fontSize: "2em",
      margin: 0,
    },
    bio: {
      fontStyle: "italic",
      marginBottom: "20px",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    section: {
      marginBottom: "10px",
    },
    sectionTitle: {
      fontSize: "1.5em",
      marginBottom: "10px",
    },
    skillsList: {
      listStyleType: "none",
      padding: 0,
    },
    skillItem: {
      background: "#f0f0f0",
      padding: "5px 10px",
      borderRadius: "5px",
      marginBottom: "5px",
      display: "inline-block",
    },
    location: {
      fontSize: "1.2em",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileHeader}>
        <Image
          src={user.profilePhoto}
          alt="Profile Photo"
          width={150}
          height={150}
          style={styles.profilePhoto}
        />
        <h1 style={styles.username}>{user.username}</h1>
      </div>
      <p style={styles.bio}>{user.bio}</p>
      <div style={styles.details}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <ul style={styles.skillsList}>
            {user.skills.map((skill, index) => (
              <li key={index} style={styles.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Location</h2>
          <p style={styles.location}>{user.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
