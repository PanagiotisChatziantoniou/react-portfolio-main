import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Panagiotis Chatziantoniou</h1>
        <p className={styles.description}>
          I'm a entry-level developer passionate about learning and creating.
          I’ve taken my first steps in web development by completing
          foundational courses on HTML, CSS, JavaScript, and React through
          Udemy, earning certifications that showcase my commitment to growth in
          this exciting field.!
        </p>
        <a
          href='mailto:panoschatziantoniou@gmail.com
'
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage.png')}
        alt='Hero image of me'
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
