import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/image.jpg')}
          alt='Me sitting with a laptop'
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor icon' />
            <div className={styles.aboutItemText}>
              <h3>Aspiring Frontend Developer</h3>
              <p>
                I specialize in building responsive and interactive websites
                using HTML, CSS, JavaScript, and React. I'm always looking to
                improve my skills to create seamless user experiences and
                efficient frontend solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt='Server icon' />
            <div className={styles.aboutItemText}>
              <h3>🖥️ Backend & Data Enthusiast</h3>
              <p>
                I have a foundational understanding of backend concepts and
                working with databases such as SQL. Additionally, I have
                experience with Power BI for data visualization and analysis.
                I've also worked with Firebase to manage real-time data in
                projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt='UI icon' />
            <div className={styles.aboutItemText}>
              <h3>🎨 UI Designer & Mobile App Expierience </h3>
              <p>
                I have hands-on experience in designing intuitive and clean user
                interfaces with a focus on usability and user experience. I have
                also worked with Android Studio to develop mobile apps in
                University Project , including an employee shift management app.
                My skills include creating design systems, landing pages, and
                mobile interfaces that are both functional and visually
                appealing.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
