import React, { Component, lazy, Suspense } from "react";
import { Router } from "@reach/router";
// Styling
import "../utilities.css";
import "./App.css";
import Heart from "@bit/joshk.react-spinners-css.heart";
// Providers
import UserProvider from "../providers/UserProvider";
// Pages
const NotFound = lazy(()=>import("./pages/NotFound.js"));
const Homepage = lazy(()=>import("./pages/Homepage.js"));
const SignIn = lazy(()=>import("./pages/SignIn.js"));
const Register = lazy(()=>import("./pages/Register.js"));
const Resources = lazy(()=>import("./pages/Resources.js"));
const SpeakerSeries = lazy(()=>import("./pages/SpeakerSeries.js"));
const FAQ = lazy(()=>import("./pages/FAQ.js"));
const WhoWeAre = lazy(()=>import("./pages/WhoWeAre.js"));
const Contact = lazy(()=>import("./pages/Contact.js"));
const FindAMentor = lazy(()=>import("./pages/FindAMentor.js"));
const Profile = lazy(()=>import("./pages/Profile.js"));
const ProtectedPage = lazy(()=>import("./modules/ProtectedPage.js"));
const NavBar = lazy(()=> import("./modules/NavBar.js"));
const Footer = lazy(()=> import("./modules/Footer.js"));
const TermsConditions = lazy(()=> import("./pages/TermsConditions.js"));
const Privacy = lazy(()=> import("./pages/Privacy.js"));
const MentorGuidelines = lazy(()=> import("./pages/MentorGuidelines.js"));
const ParentAcknowledgement = lazy(()=> import("./pages/ParentAcknowledgement.js"));
const Event = lazy(() => import("./pages/Event.js"));
const AnnouncementHeader = lazy( () => import("./modules/AnnouncementHeader.js"));
const ResetPassword = lazy(() => import("./pages/ResetPassword.js"));
const About = lazy(() => import("./pages/About.js"));

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component

  render() {
    const loading_component =
      (<table id="wrapper">
        <tbody>

          <tr>
            <td><Heart color={"#F2BE32"} /></td>
          </tr>
        </tbody>
      </table>)
    return (
      <div className="App Fade">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <UserProvider>
          <Suspense fallback={<div/>}>
            <AnnouncementHeader />
            <NavBar />
          </Suspense>
           {/* "primary={false}" breaks an accessibility feature of reach router that allows screen readers to work
           https://stackoverflow.com/questions/53058110/stop-reach-router-scrolling-down-the-page-after-navigating-to-new-page*/}
           <div className="contentWrap">
            <Suspense fallback={loading_component}>
              <Router primary={false} basepath="/">
                <Homepage path="/"/>
                <Resources path="/resources" />
                <SpeakerSeries path="/speakerseries" />
                <SignIn path="/auth" />
                <ResetPassword path="/reset-password-request" />
                <Register path="/register" />
                <FAQ path="/faq" />
                <ProtectedPage path="/findamentor" component={FindAMentor}/>
                <ProtectedPage path="/profile" component={Profile}/>
                <TermsConditions path="/termsconditions" />
                <Privacy path="/privacy" />
                <MentorGuidelines path="/mentorguidelines" />
                <ParentAcknowledgement path="/parentacknowledgement" />
                <Event path="/event"/>
                <About path="/about" />
                <NotFound default/>
              </Router>
            </Suspense>
           </div>
           <div className="footer">
            <Suspense className="footer" fallback={<div/>}>
              <Footer />
            </Suspense>
           </div>
        </UserProvider>
      </div>
    );
  }
}

export default App;
