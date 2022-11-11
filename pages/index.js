import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

export default function Home() {
  const { t, lang } = useTranslation("common");
  console.log(lang, "");
  // const example = t("description");
  const changeLanguage = async () => {
    if (lang == "fr") {
      await setLanguage("en");
    } else {
      await setLanguage("fr");
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{t("description")}</div>
      <div>{t("title")}</div>
      <button onClick={changeLanguage}>EN</button>
    </div>
  );
}