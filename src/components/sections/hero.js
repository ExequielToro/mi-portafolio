import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = (
    <h1>🖐️ ¡Hola! No soy un robot… 🤖todavía. Pero te quiero contar un poco sobre mí;</h1>
  );
  const two = <h2 className="big-heading">Pablo Toro</h2>;
  const three = <h3 className="big-heading">&quot;Ingeniero en Informática&quot;</h3>;
  const four = (
    <>
      <p>
        Ingeniero en Informática y constructor de ideas que cobran vida en la web. Me dedico a crear
        experiencias digitales que no solo funcionan, sino que sorprenden. 💡 Desde una API bien
        pensada hasta una interfaz que enamora, combino backend y frontend para desarrollar
        soluciones modernas, escalables y centradas en las personas. ¿Mi meta? Que cada línea de
        código tenga un propósito y que cada proyecto hable por sí solo. ¿Café en mano y hablamos de
        tecnología?{' '}
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://github.com/ExequielToro?tab=repositories"
      target="_blank"
      rel="noreferrer">
      Mira mí proyecto de microservicios!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
