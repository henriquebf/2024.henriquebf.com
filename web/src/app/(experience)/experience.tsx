"use client";

import Container from "@/components/layout/Container";
import ExperienceItem from "@/components/shared/ExperienceItem";
import { classNames } from "@/helpers/utilsHelper";
import styles from "./experience.module.css";

const experienceItems = [
  {
    time: `2024 - Now`,
    duration: `Current position`,
    title: `Neat Software B.V.`,
    location: `The Randstad, The Netherlands`,
    position: `Founder & Product Maker`,
    description: [
      `Neat was founded in June 2024 with the goal to collaborate in projects that require a generalist software engineering profile, in order to ship products in a short time period, delivering code quality for maintenance and reliability.`,
      `Lovemail is a native iOS app originated from the acquisition of Tempo, a startup I previously co-founded in 2020. I have contributed writing a complete email engine in Swift, as well the HTML renderer and parser, and other minor integrations. I have also conducted the security assessment necessary to guarantee the api usage.`,
      `Mineral Trade is a web platform that brings connectivity for services and supply chain in the mining business. I have fully contributed to the MVP specifications, designs, architecture and full-stack implementation using React and Typescript. Some automation workflow using AI was introduce in order to automatically generate translations for any added text during implementation.`,
    ],
    highlights: [`Lovemail`, `Mineral Trade`],
    bullets: ["Swift", "Typescript", "React", "Prisma ORM"],
    thumb: "experience-thumb-neat.svg",
    link: {
      text: `Visit Neat website`,
      url: `https://thisisneat.co`,
    },
  },
  {
    time: `2022 - 2024`,
    duration: `2 years`,
    title: `Framer B.V.`,
    location: `Amsterdam, The Netherlands (Remote)`,
    position: `Product Engineer`,
    description: [
      `Collaborated with product designers making sure to provide the best user experience on subscribing/upgrading plans, implementing upsells for new features, and improving flows to reduce customer support.`,
      `Iterated in both front and backend stack, taking full ownership of features like Project Permissions, allowing for more nuanced control over permissions for editors within each project.`,
    ],
    highlights: [
      `Project Permissions`,
      `Free Worskpace Plan`,
      `Upsells`,
      `Stripe Checkout`,
      `Tree Shaking`,
      `SSG`,
    ],
    bullets: ["Typescript", "React", "Microservices", "GOLANG"],
    thumb: "experience-thumb-framer.svg",
    link: {
      text: `Visit Framer website`,
      url: `https://framer.com`,
    },
  },
  {
    time: `2020 - 2021`,
    duration: `2 years`,
    title: `Tempo GmbH`,
    location: `Berlin, Germany`,
    position: `Co-founder & CTO`,
    description: [
      `Development of an Email client for OSX and mobile using Typescript (mostly). Designing the architecture from MVP state to production and leading a young and remote team of developers.`,
      `Beyond the technical duties, there was a lot of management for a multi-national business setup, accounting, investment contracts, payroll and last but not least, the business liquidation.`,
    ],
    bullets: ["Typescript", "React + Redux", "Electron", "React Native"],
    thumb: "experience-thumb-tempo.svg",
    link: {
      text: `Visit Tempo website`,
      url: `https://yourtempo.co`,
    },
  },
  {
    time: `2015 - 2019`,
    duration: `5 years`,
    title: `Pillar GmbH`,
    location: `Berlin, Germany`,
    position: `Co-founder & Fullstack Developer`,
    description: [
      `Co-founded a creative development studio with Onno Schwanen and implemented applications, websites and e-commerce solutions - aiming to deliver the best possible user experience.`,
      `Our portfolio includes projects for Google, Zalando, Hyper Island, several MVPs for startups and consultancy work for agencies in Europe and North America.`,
    ],
    highlights: [
      `Tempo (MVP/desktop application)`,
      `Diggsweep (MVP/web application)`,
      `Hyper Island (web survey)`,
      `Hakro (e-commerce)`,
      `Google Impact (kiosk)`,
      `Zalando (campaign website)`,
      `The Rivalry (website)`,
      `XU Berlin (web survey)`,
      `Fluxdrive (bespoke CMS)`,
    ],
    bullets: ["ES6+", "React + Redux", "Node", "MongoDB", "Docker"],
    thumb: "experience-thumb-pillar.svg",
    link: {
      text: `Visit Pillar website`,
      url: `https://pillarstudio.com`,
    },
  },
  {
    time: `2014`,
    duration: `5 months`,
    title: `Freelancer`,
    location: `Berlin, Germany`,
    position: `Fullstack Developer`,
    description: [
      `I was hired as a freelancer for a brazilian based agency. I also took the opportunity during this period to learn React and become an earlier adopter for future projects.`,
      `I have worked on the implementation of a MVP for an education multiplayer board game and the website front-end for Sabin, a holding company of one of largest laboratories in Brazil.`,
    ],
    highlights: [
      `Apice (MVP/educational game)`,
      `Sabin (website frontend)`,
      `Latin Travel (website)`,
    ],
    bullets: [`Angular`, `Rails`, `Node`, `Socket.IO`],
  },
  {
    time: `2013 - 2014`,
    duration: `8 months`,
    title: `Bacon de Czar GmbH`,
    location: `Berlin, Germany`,
    position: `Backend Developer`,
    description: [
      `Worked as backend developer and actively assisted the frontend functionalities for a small but ambitious creative studio based in Berlin: Building web applications, campaigns and websites.`,
      `Some of the clients I have collaborated were Nokia, the danish clothing brand Joha and the insurance companies ASE and Danica Pension. I have also implemented the MVP of Bacon de Czar's own product.`,
    ],
    highlights: [
      `Joha (website)`,
      `Nokia (campaign website)`,
      `ASE (web application)`,
      `Danica Pension (web application)`,
      `Chop Hub (MVP/web application)`,
    ],
    bullets: [`Angular`, `Node`, `CoffeeScript`, `Rails`, `PHP`],
  },
  {
    time: `2011 - 2013`,
    duration: `2 years`,
    title: `Made Tech Limited`,
    location: `London, United Kingdom`,
    position: `Fullstack Developer`,
    description: [
      `Being the first hire of the company, I have pushed my skills to new standards, taking a lot of ownership and delivering front- and backend for important projects.`,
      `The main highlights were the implementation of two e-commerce platforms: One for the swiss shoe brand On and a bespoke solution for the british company Surface View.`,
    ],
    highlights: [
      `On-Running (e-commerce)`,
      `Surface view (e-commerce)`,
      `Vertu (website frontend)`,
      `VGL (website frontend)`,
    ],
    bullets: [`Rails`, `Spree`, `Angular`, `JQuery`, `PHP`, `HTML5`],
  },
  {
    time: `2011`,
    duration: `5 months`,
    title: `Freelancer`,
    location: `London, United Kingdom`,
    position: `Fullstack Developer`,
    description: [
      `I have collaborated on a friend’s project by implementing a marketplace platform for mining sites and equipments, as an opportunity to showcase my work for new hires in the United Kingdom.`,
    ],
    highlights: [`Mineral trade (MVP/web app)`],
    bullets: [`PHP`, `Zend`, `MySQL`],
  },
  {
    time: `2002 - 2010`,
    duration: `9 years`,
    title: `Tasco Ltda.`,
    location: `Belo Horizonte, Brazil`,
    position: `Software Developer`,
    description: [
      `Working on a small and young team, I made a big contribution for most company’s products, by building very professional web based user interfaces.`,
    ],
    highlights: [
      `Noklink suite (desktop app)`,
      `Tracking box (web application)`,
      `Entertainment-to-Go (kiosk)`,
    ],
    bullets: [`Javascript`, `PHP`, `MySQL`, `SQLite`, `C++`],
  },
  {
    time: `2001 - 2002`,
    duration: `1 year`,
    title: `Versão Brasileira Ltda.`,
    location: `Belo Horizonte, Brazil`,
    position: `Intern`,
    description: [
      `Hired as an intern, I was able to play my first role as a developer of a catalogue CD-ROM for my city, having a great support from the database provider.`,
    ],
    bullets: [`Javascript`, `Lightbase`],
  },
  {
    time: `2000 - 2001`,
    duration: `1 year`,
    title: `Multiline Ltda.`,
    location: `Belo Horizonte, Brazil`,
    position: `Intern`,
    description: [
      `In my first internship, I assisted other engineers in some tasks, mainly related to a lightweight Linux distribution for Terminals and network setup for cisco routers.`,
    ],
    bullets: [`Linux`],
  },
  {
    time: `1998 - 2003`,
    duration: `6 years`,
    title: `Pontifícia Universidade Católica de Minas Gerais`,
    location: `Belo Horizonte, Brazil`,
    position: `Bachelor - Control and Automation Engineer`,
    description: [
      `In my graduation thesis I have developed an out-of-the-box implementation of the trajectory generation for a robot of type SCARA. It was visually simulated in a 3D robot plugin for Matlab.`,
    ],
    bullets: [`CIM`, `C++`, `Electronics`, `Robotics`, `PID`],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.experience}>
      <Container>
        <div className={styles.content}>
          <h2>Experience</h2>
          <p className={styles.text}>
            As a versatile software engineer, I specialise in creating
            high-quality products that prioritise exceptional user experience
            and optimal performance. My expertise spans the web, mobile, and
            desktop architectures, taking ownership of world-class software
            solutions. Alongside my technical skills, I bring valuable
            experience in business management and leading the growth of software
            engineering teams.
          </p>
          <div className={styles.experience_top}></div>
          <div className={styles.wrapper}>
            <div className={styles.experience_dummy} />
            <div
              className={classNames([styles.experience_center, styles.first])}
            />
            <div className={styles.experience_dummy} />
          </div>
          {experienceItems.map((item, i) => {
            if (i % 2 === 0) {
              return (
                <div key={i} className={styles.wrapper}>
                  <ExperienceItem item={item} direction="left" />
                  <div
                    className={classNames([
                      styles.experience_center,
                      styles.middle,
                    ])}
                  />
                  <div className={styles.experience_dummy} />
                </div>
              );
            } else {
              return (
                <div key={i} className={styles.wrapper}>
                  <div className={styles.experience_dummy} />
                  <div
                    className={classNames([
                      styles.experience_center,
                      styles.middle,
                    ])}
                  />
                  <ExperienceItem item={item} direction="right" />
                </div>
              );
            }
          })}
        </div>
      </Container>
    </section>
  );
}
