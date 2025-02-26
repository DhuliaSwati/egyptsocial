import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo-white.png";

const ResponsiblePlay = () => {
  return (
    <>
      <Header logo={logo} />
      <div className="terms-service">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="terms-content mt-4 mb-5 p-4">
                <h1 className="text-center mb-4">Responsible Social Play Policy</h1>
                <p className="version-info text-center mb-4">
                  <strong>Effective as of 1st June 2023</strong>
                </p>

                <p>The <strong>Social Casino</strong> platform and <strong>Jackpot Limited</strong> are committed to the protection of our players and promoting responsible social gameplay as a policy of customer care and social responsibility. We recognize that our games are fun and, like many other forms of entertainment, should be consumed in a responsible manner.</p>

                <h3 className="mt-5 mb-3">GENERAL</h3>
                <p>This Responsible Social Gameplay Policy ("RSGP") describes the various tools and resources available to our players to ensure responsible gameplay.</p>
                <p>We reserve the right to modify our policies at any time, with such changes becoming effective immediately.</p>
                <p>The RSGP is integrated into the Terms of Service and is a part of such Terms of Service as if fully restated therein.</p>

                <h3 className="mt-5 mb-3">RSGP CONTROL TOOLS</h3>
                <ul>
                  <li><strong>Active Reminders</strong></li>
                  <li><strong>Account History</strong></li>
                  <li><strong>Various Self-Limitation Options</strong></li>
                </ul>

                <h3 className="mt-5 mb-3">RSG CONTROL TOOLS ACCESS</h3>
                <p>The access control tools described below are available if your gameplay may have become, or is at risk of becoming, problematic. You may take advantage of these tools by contacting us:</p>
                <ul>
                  <li><strong>Taking a Break</strong>: Please contact us with your request and for options.</li>
                  <li><strong>Self-Exclusion</strong>: Please contact us with your request and for options.</li>
                  <li><strong>Permanent Closure</strong>: Please contact us with your request.</li>
                </ul>

                <h3 className="mt-5 mb-3">SELF-EVALUATION AND ASSESSMENT</h3>
                <p>If you suspect that your video game play or the play of someone else may be problematic, we encourage you to take an assessment. One such assessment is available at <a href="https://www.video-game-addiction-test.com" target="_blank" rel="noreferrer">Video Game Addiction Test for Gamers</a>.</p>

                <h3 className="mt-5 mb-3">SUPPORT</h3>
                <p>Please consider one of the following resources if your gaming activities have had a negative impact on your mental and emotional health, as well as a detrimental financial impact. We are not affiliated with any of these organizations:</p>
                <ul>
                  <li><strong>Gaming Addicts Anonymous (GAA)</strong>: A fellowship of people who support each other in recovering from the problems resulting from excessive game playing.</li>
                  <li><strong>Financial Counseling Association of Norway (FCAN)</strong>: A professional association of financial counseling agencies that assist consumers with financial counseling services of all kinds, as well as debt management plans for the repayment of unsecured debts.</li>
                  <li><strong>National Foundation for Credit Counseling (NFCC)</strong>: One of the oldest networks of non-profit financial counseling agencies. The NFCC helps people to defeat their debt and look forward with confidence.</li>
                </ul>

                <h3 className="mt-5 mb-3">EDUCATIONAL RESOURCES</h3>
                
                <h4 className="mb-3">Principles of Gameplay:</h4>
                <ul>
                  <li><strong>Randomness</strong>: Winners of games are determined at random.</li>
                  <li><strong>Outcomes cannot be predicted by past results or outcomes.</strong></li>
                </ul>

                <h4 className="mb-3">Common Misconceptions:</h4>
                <ul>
                  <li>Thinking "I'm due for a win" is a fallacy since all outcomes in games of chance are random and cannot be predicted.</li>
                  <li>Believing that a lucky charm or pre-game ritual affects your chances of winning is a misconception, as these factors have no impact on the random outcomes of the game.</li>
                  <li>Assuming that playing a game for a longer time increases your chances of winning is incorrect, as the probability of winning remains the same for each game round regardless of how much time is spent playing.</li>
                </ul>

                <h3 className="mt-5 mb-3">TIPS FOR SAFE GAMEPLAY:</h3>
                <ul>
                  <li>Avoid playing games when you are angry, sad, or otherwise emotional.</li>
                  <li>Take frequent and regular breaks during gameplay sessions.</li>
                  <li>Do not play games when you are under the influence of drugs or alcohol.</li>
                  <li>Video games are just one form of entertainment, and there are other options available.</li>
                  <li>If you do make an optional purchase, make sure it is with money that you can afford to spend.</li>
                  <li>Set a time for play.</li>
                  <li>Understand how the games work and that winners are random.</li>
                  <li>Do not allow game playing to impact your employment, relationships, health, or social obligations or other commitments.</li>
                </ul>

                <h3 className="mt-5 mb-3">PROTECTING PLAYERS</h3>
                <p>We do not recommend playing if you:</p>
                <ul>
                  <li>Have a history of addiction or dependency, or are currently undergoing treatment for such conditions.</li>
                  <li>Are under the influence of substances that may impair your judgment.</li>
                  <li>Are experiencing financial issues or stressful or traumatic life events.</li>
                  <li>Do not understand the rules and gameplay mechanics of the games.</li>
                  <li>Have any mental health issues (actual or suspected), mental impairments, or physical brain trauma.</li>
                </ul>

                <h3 className="mt-5 mb-3">PROTECTION OF MINORS</h3>
                <p>We have various system and identity checks in place to prevent underage gameplay. If you share your devices with minors, we recommend restricting their access to our platform using various internet blocking and monitoring software.</p>

                <h3 className="mt-5 mb-3">GOVERNING LAW</h3>
                <p>This Responsible Social Gameplay Policy is governed by the laws of <strong>Norway</strong>. Any disputes arising from or related to this policy shall be resolved in accordance with Norwegian law.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ResponsiblePlay;