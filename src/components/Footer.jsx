import { FaDiscord, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
        <a
          href="https://discord.gg/y34k5gzJwx"
          target="_blank"
          className="social-link"
        >
          <FaDiscord size={36} />
        </a>
        <a
          href="https://github.com/Kirill-Bokov"
          target="_blank"
          rel="me"
          className="social-link"
        >
          <FaGithub size={34} />
        </a>
        <p>© Kirill-Bokov 2025</p>
    </div>
  );
}

export default Footer;
