import styles from '../styles/Home.module.css'

const Home = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1>Hey, my name's Jack.</h1>
      <p>
        I'm a sophomore CS major at Georgia Tech with concentrations
        in intelligence and info-internetworks.
      </p>
      <p>
        Currently, I'm interested in quantitative analysis of the financial markets, as well as AI and machine learning. I also have a few MERN stack web development projects.
      </p>
      <p>
        My projects can be found on <a href="https://github.com/jackpalaia" target="_blank" className={styles.link}>GitHub</a>. Some of my recent ones include a stock trading backtesting platform, a Naive Bayes classifier for Reddit comments, and an intelligent flashcard system.
      </p>
      <p>
        Some of my interests outside of programming include trading, tennis, golf, and drumming.
      </p>
      <p>
        Contact me at <a href="mailto:jack@jackpalaia.com" target="_blank" className={styles.link}>jack@jackpalaia.com</a>, or find me on <a href="https://www.linkedin.com/in/jackpalaia/" target="_blank" className={styles.link}>LinkedIn.</a>
      </p>
      <p>
        Here is a link to my current <a href="/resume.pdf" target="_blank" className={styles.link}>resume</a>.
      </p>
    </main>
  </div>
)

export default Home