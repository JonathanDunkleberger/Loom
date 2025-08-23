import React from "react";
import styles from "./styles.module.scss";

function Footer2() {
  return (
    <div className="bg-black p-2">
      <footer className={styles.footer}>
        <div className={styles.containerFooter}>
          <div className={styles.icons}></div>
          <ul className={styles.details}>
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Contact</li>
            <li>About Loom</li>
            <li>Roadmap</li>
            <li>Status</li>
            <li>Developers</li>
            <li>Changelog</li>
            <li>Guides</li>
            <li>iOS (coming soon)</li>
            <li>Android (coming soon)</li>
          </ul>
          <div className={styles.security}>
            <div>English</div>
            <span>© 2025 Loom, Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer2;
