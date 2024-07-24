import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Drawer, IconButton, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import {
  callIcon,
  logoMobileImage,
  phoneNumber,
} from "@/constant/headerConstant";
import LazyImage from "../ui/LazyImage";
import MobileSection from "./MobileHeader";

const Header = ({ langData }) => {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { query } = router;

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>

    <div className="top-header">
      <div className="container">
        
        <div className="phone"><Link href={`tel:${langData?.phoneNumber}`}><i class="fa-solid fa-phone-volume"></i>  {phoneNumber}</Link></div>
        <div className="email"><i class="fa-solid fa-at"></i> info@unityfare.com</div>
      </div>
    </div>



      <div style={{ display: `${width > 767 || !query?.airline ? "none" : "block"}` }}>
        <MobileSection langData={langData} />
      </div>
      <header style={{ display: `${width > 767 || !query?.airline ? "block" : "none"}` }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-white" aria-label="Eleventh navbar example">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <LazyImage
                src={`/${logoMobileImage}.png`}
                className="img-fluid"
                alt="Logo"
                imageSizes={32}
                width={200}
                height={55}
              />
            </Link>
            {width <= 767 && (
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            )}
            <div className={`collapse navbar-collapse flex-grow-1 text-right ${isDrawerOpen ? "collapse" : ""}`} id="navbarsExample09">
              <ul className="navbar-nav ms-auto flex-nowrap">
                <li className="nav-item">
                  <Link className={`nav-link ${router.pathname === "/" && "active"}`} aria-current="page" href={"/"} >
                  <i class="fa-solid fa-house font_icon"></i> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${router.pathname === "/about-us" && "active"}`} href={"about-us"}>
                  <i class="fa-solid fa-suitcase font_icon"></i> About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${router.pathname === "/privacy-policy" && "active"}`} href={"privacy-policy"} >
                  <i class="fa-solid fa-shield-halved font_icon"></i> Privacy Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${router.pathname === "/contact-us" && "active"}`} href={"contact-us"} >
                  <i class="fa-solid fa-address-book font_icon"></i> Contact Us
                  </Link>
                </li>
              </ul>
              <div className="pull-right phone-number d-lg-block">
                <ul>
                  {/* <li>
                    <LazyImage width={50} height={50} imageSizes={16} src={callIcon} />
                  </li> */}
                  <li>
                    {/* <p>Call for 24/7 Support</p> */}
                    <h5 className="m-0 p-0">
                      <Link href={`tel:${langData?.phoneNumber}`}>{langData?.phoneNumber}</Link>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} PaperProps={{ sx: { width: "100%"} }} sx={{ zIndex: 99999 }}>
        <Box display="flex" justifyContent="flex-end" p={2}>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List className="resp">
          <ListItem className="mb-4"><LazyImage
                src={`/${logoMobileImage}.png`}
                className="img-fluid"
                alt="Logo"
                imageSizes={32}
                width={200}
                height={55}
              /></ListItem>
        
          <ListItem button component={Link} href="/" onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} href="/about-us" onClick={toggleDrawer}>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button component={Link} href="/privacy-policy" onClick={toggleDrawer}>
            <ListItemText primary="Privacy Policy" />
          </ListItem>
          <ListItem button component={Link} href="/contact-us" onClick={toggleDrawer}>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
