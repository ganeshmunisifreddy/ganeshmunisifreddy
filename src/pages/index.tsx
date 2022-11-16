import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { Linkedin, Github, Codepen, Twitter } from 'mdi-material-ui';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ganesh Munisifreddy</title>
        <meta
          name="description"
          content="A Freelance Full-Stack Developer with 6+ years of experience in Web technologies and App development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="home" className={styles.home}>
        <section className={styles.hero}>
          <Image
            className={styles.heroImg}
            src="/images/gm.jpg"
            alt="Ganesh Munisifreddy"
            style={{ objectPosition: 'top' }}
            fill
          />
        </section>
        <section className={styles.right}>
          <div className={styles.content}>
            <p className={styles.greeting}>
              Hello <span className={styles.handEmoji}>👋</span>, I&apos;m
            </p>
            <p className={styles.name}>Ganesh Munisifreddy</p>
            <p className={styles.description}>
              A Freelance Full-Stack Developer with 6+ years of experience in
              Web technologies and App development.
            </p>
            <a href="mailto:hello@ganesh.pw" className={styles.letsTalkBtn}>
              Say Hello!
            </a>
            <div className={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/in/ganeshmunisifreddy/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className={styles.linkedin} />
              </a>
              <a
                href="https://github.com/ganeshmunisifreddy"
                target="_blank"
                rel="noreferrer"
              >
                <Github className={styles.github} />
              </a>
              <a
                href="https://codepen.io/ganeshmunisifreddy"
                target="_blank"
                rel="noreferrer"
              >
                <Codepen className={styles.codepen} />
              </a>
              {/* <a
                href="https://twitter.com/GaneshMunisif"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className={styles.twitter} />
              </a> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
