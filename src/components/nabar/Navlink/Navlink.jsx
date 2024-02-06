import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import styles from "../navbar.module.css";


const navLink = {
  color :'black',
}
const Navlink = () => {
  return (
    <>
      <Box className={styles.navItem}>
        <Box className={styles.ulItem}>
          <Link style ={navLink} href="/about" className={styles.navlink}>
            About
          </Link>
          <Link style ={navLink} href="/contact" className={styles.navlink}>
            Contact
          </Link>
          <Link style ={navLink} href="/projects" className={styles.navlink}>
            Projects
          </Link>
          <Link style ={navLink} href="/services" className={styles.navlink}>
            Services
          </Link>
        </Box>
   
        <button className={styles.button}>
           <Link href='/about' className={styles.buttonText}>Let's Connect</Link>
        </button>
      </Box>
    </>
  );
};

export default Navlink;
