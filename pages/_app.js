import "./globals.css";
import { DataProvider } from "../utils/DataContext";
import SearchModal from "./components/shared/SearchModal";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import GoogleTag from "./components/GoogleTag";
import "./style/classSelection.css";
import "./style/autoCompleteInput.css";
import Popup from "./components/shared/Popup";
import Undercuttingbanner from "./components/shared/Undercuttingbanner";
import { getLanguage } from "@/getLang";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [langData, setLangData] = useState(null);

  useEffect(() => {
    const getLang = async () => {
      const { airline } = router.query;
      const lang = airline === "air-france" ? "es" : "en";
      const json = await getLanguage(lang);
      setLangData(json);
    };
    getLang();
  }, [router]);
  return (
    <DataProvider>
     <Header langData={langData} />
      <Popup langData={langData} />
      <Component {...pageProps} />
      <Footer langData={langData}/>
      {/* <Undercuttingbanner/> */}
      <SearchModal />
      <GoogleTag />
    </DataProvider>
  );
}

export default MyApp;
