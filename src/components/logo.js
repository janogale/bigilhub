/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image, Text } from "theme-ui";
import { Link } from "components/link";
//import LogoSvg from 'components/icons/logo';
const logo = "/images/logo2.png";

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
     <Image src={logo} alt="Bigil Hub logo" width={200} height={200} />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
  },

  img: {
    height: "100px",
  },
};
