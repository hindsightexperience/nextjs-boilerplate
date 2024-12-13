import { useState } from "react";
import VaultAnimation from "../components/VaultAnimation";
import BitcoinConverter from "../components/BitcoinConverter";

const Home = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <>
      {!showMainContent ? (
        <VaultAnimation onAnimationEnd={() => setShowMainContent(true)} />
      ) : (
        <main>
          <h1>Bitcoin Vault App</h1>
          <BitcoinConverter />
        </main>
      )}
    </>
  );
};

export default Home;
