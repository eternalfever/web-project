import Activity from "./Activity";
import Artists from "./Artists";
import Intro from "./Intro";
import Faq from "./Faq";
/**
 * основной контент лендинга без Header и Footer
 */
export default function MainContent() {
  return (
    <main className="content">
      <Intro />
      <Activity />
      <Artists />
      <Faq />
    </main>
  );
}
