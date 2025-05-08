// import LandingHero from "../components/landing-hero";

import LandingHeros from "../components/Landing-Heros";
import LandingFooter from "../components/landing-footer";
import LandingHeader from "../components/landing-header";


export default function Home() {
  return (
    <div className=" flex mx-auto min-h-screen flex-col">
     <LandingHeader />
      <main className="flex-1">
        <LandingHeros/>

      </main>
      {/* <LandingFooter /> */}
      <LandingFooter />
    </div>
  )
}
