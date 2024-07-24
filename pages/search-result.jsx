import React, { useEffect, useState } from "react";
import Head from "next/head";
import SearchForm from "./components/shared/Searchform";
import NoResult from "./components/shared/NoResult";
import FlightBox from "./components/shared/FlightBox";
import Undercuttingbanner from "./components/shared/Undercuttingbanner";
import { useData } from "../utils/DataContext";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [searches, setSearches] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const { searchData, setUndercuttingBanner, newSearch } = useData();

  useEffect(() => {
    if (searches && searches?.data?.length && newSearch) {
      setTimeout(() => {
        setUndercuttingBanner(true);
      }, 7000);
    }
  }, [searches]);

  useEffect(() => {
    setSearches(searchData);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchData]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Set isMobileView based on viewport width
    };

    handleResize(); // Call handleResize initially to set isMobileView
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []);

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Head>
        <title>Search Result</title>
      </Head>
      {isMobileView ? (
        <Fab
          color="primary"
          aria-label="search"
          style={{ position: "fixed", bottom: 150, right: 16 }}
          sx={{ zIndex: 9999999999 }}
          onClick={handleDrawer}
        >
          <SearchIcon />
        </Fab>
      ) : (
        <SearchForm  backGroundImage={"/domestic-img.jpg"} />
      )}
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={handleDrawer}
        sx={{ zIndex: 1300 }}
      >
        <div
          style={{
            width: "100%",
            padding: 16,
            boxSizing: "border-box",
            backgroundColor: "#ccc",
          }}
        >
         <SearchForm onlyForm={true} />
        </div>
      </Drawer>
      {searches && searches?.data?.length ? (
        <div className="container">
          <FlightBox searches={searches} />
          {/* <Undercuttingbanner /> */}
          
        </div>
      ) : (
        <NoResult />
      )}
    </>
  );
};

export default Search;
