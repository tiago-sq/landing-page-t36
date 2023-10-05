import { useEffect, useRef, useState } from 'react';
import WOW from 'wow.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'tiny-slider/dist/tiny-slider.css';
import './assets/css/animate.css';
import './assets/css/LineIcons.2.0.css';
import './assets/css/main.css';
import Header from './components/Header';
import Welcome from './components/Sections/Welcome';
import News from './components/Sections/News';
import Numbers from './components/Sections/Numbers';
import CourseDetails from './components/Sections/CourseDetails';
import CallToAction from './components/Sections/CallToAction';
import Team from './components/Sections/Team';
import Projects from './components/Sections/Projects';
import SectionRoot from './components/Sections/SectionRoot';
import SoftSkills from './components/Sections/SoftSkills';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const welcomeRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const courseDetailsRef = useRef<HTMLDivElement>(null);
  const callToActionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new WOW().init();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const sectionRefs = [
        {
          sectionId: '#home',
          sectionRef: welcomeRef.current,
        },
        {
          sectionId: '#team',
          sectionRef: teamRef.current,
        },
        {
          sectionId: '#news',
          sectionRef: newsRef.current,
        },
        {
          sectionId: '#numbers',
          sectionRef: numbersRef.current,
        },
        {
          sectionId: '#projects',
          sectionRef: projectsRef.current,
        },
        {
          sectionId: '#course-details',
          sectionRef: courseDetailsRef.current,
        },
        {
          sectionId: '#call-to-action',
          sectionRef: callToActionRef.current,
        },
      ];
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      sectionRefs.forEach((section) => {
        const { sectionId, sectionRef } = section;
        if (!sectionRef) return;
        const scrollTopMinus = scrollPos + 73;
        if (sectionRef.offsetTop <= scrollTopMinus && (sectionRef.offsetTop + sectionRef.offsetHeight > scrollTopMinus)) {
          setCurrentSection(sectionId.slice(1));
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <Header currentSection={ currentSection } />
      <SectionRoot
        sectionId="home"
        className="hero-area"
        refEl={ welcomeRef }
      >
        <Welcome />
      </SectionRoot>
      <SectionRoot
        sectionId="team"
        className="team section"
        refEl={ teamRef }
      >
        <Team />
      </SectionRoot>
      <SectionRoot
        sectionId="news"
        className="features section"
        refEl={ newsRef }
      >
        <News />
        <SoftSkills />
      </SectionRoot>
      <SectionRoot
        sectionId="numbers"
        className="our-achievement section"
        refEl={ numbersRef }
      >
        <Numbers />
      </SectionRoot>
      <SectionRoot
        sectionId="projects"
        className="app-info section"
        refEl={ projectsRef }
      >
        <Projects />
      </SectionRoot>
      <SectionRoot
        sectionId="course-details"
        className="course-details section"
        refEl={ courseDetailsRef }
      >
        <CourseDetails />
      </SectionRoot>
      <SectionRoot
        sectionId="call-action"
        className="section call-action"
        refEl={ callToActionRef }
      >
        <CallToAction />
      </SectionRoot>
      <a
        href="#"
        className="scroll-top"
      >
        <i className="lni lni-chevron-up" />
      </a>
    </>
  );
}

export default App;
