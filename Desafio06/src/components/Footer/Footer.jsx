import './FooterStyle.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
      <footer>
        <section>
          <p>
            By{' '}
            <a
              href="https://www.linkedin.com/in/felipe-mascena"
              target="_blank"
            >
              <span>Felipe Mascena</span>
            </a>
             {' '}
             ©
          </p>
        </section>
        <figure>
          <a href="https://github.com/fmascena-dev" target="_blank">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/felipe-mascena" target="_blank">
            <FaLinkedin className="icon" />
          </a>
        </figure>
      </footer>
    );
};
