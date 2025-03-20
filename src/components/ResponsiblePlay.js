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
                <h1 className="text-center mb-4">Retningslinjer for Ansvarlig Sosialt Spill</h1>
                <p className="version-info text-center mb-4">
                  <strong>Gjelder fra 1. juni 2023</strong>
                </p>

                <p><strong>meistersocial</strong>-plattformen og <strong>meistersocial</strong> er forpliktet til å beskytte våre spillere og fremme ansvarlig sosialt spill som en del av vår kundeservice og sosiale ansvar. Vi erkjenner at spillene våre er underholdende og, som mange andre former for underholdning, bør brukes på en ansvarlig måte.</p>

                <h3 className="mt-5 mb-3">GENERELT</h3>
                <p>Disse retningslinjene for ansvarlig sosialt spill ("RSGP") beskriver de ulike verktøyene og ressursene som er tilgjengelige for våre spillere for å sikre ansvarlig spilling.</p>
                <p>Vi forbeholder oss retten til å endre våre retningslinjer når som helst, og endringene trer i kraft umiddelbart.</p>
                <p>RSGP er integrert i Tjenestevilkårene og er en del av disse Tjenestevilkårene som om de var fullstendig gjengitt her.</p>

                <h3 className="mt-5 mb-3">RSGP KONTROLLVERKTØY</h3>
                <ul>
                  <li><strong>Aktive Påminnelser</strong></li>
                  <li><strong>Kontohistorikk</strong></li>
                  <li><strong>Ulike Selvbegrensningsalternativer</strong></li>
                </ul>

                <h3 className="mt-5 mb-3">TILGANG TIL RSG-KONTROLLVERKTØY</h3>
                <p>Kontrollverktøyene beskrevet nedenfor er tilgjengelige hvis spillingen din kan ha blitt, eller står i fare for å bli, problematisk. Du kan benytte deg av disse verktøyene ved å kontakte oss:</p>
                <ul>
                  <li><strong>Ta en Pause</strong>: Vennligst kontakt oss med din forespørsel og for alternativer.</li>
                  <li><strong>Selvekskludering</strong>: Vennligst kontakt oss med din forespørsel og for alternativer.</li>
                  <li><strong>Permanent Stenging</strong>: Vennligst kontakt oss med din forespørsel.</li>
                </ul>

                <h3 className="mt-5 mb-3">SELVEVALUERING OG VURDERING</h3>
                <p>Hvis du mistenker at din eller andres videospilling kan være problematisk, oppfordrer vi deg til å ta en vurderingstest. En slik test er tilgjengelig på Spillavhengighetstest for Spillere.</p>

                <h3 className="mt-5 mb-3">STØTTE</h3>
                <p>Vennligst vurder en av følgende ressurser hvis spillaktivitetene dine har hatt en negativ innvirkning på din mentale og emosjonelle helse, samt økonomiske konsekvenser. Vi er ikke tilknyttet noen av disse organisasjonene:</p>
                <ul>
                  <li><strong>Spillavhengige Anonyme (GAA)</strong>: Et fellesskap av mennesker som støtter hverandre i å komme seg over problemer som følge av overdreven spilling.</li>
                  <li><strong>Finansrådgivningsforeningen i Norge (FCAN)</strong>: En profesjonell forening av finansrådgivningsbyråer som hjelper forbrukere med finansiell rådgivning av alle slag, samt gjeldsordninger for tilbakebetaling av usikret gjeld.</li>
                  <li><strong>Nasjonal Stiftelse for Kredittråd (NFCC)</strong>: Et av de eldste nettverkene av ideelle finansrådgivningsbyråer. NFCC hjelper mennesker med å overvinne gjeld og se fremover med tillit.</li>
                </ul>

                <h3 className="mt-5 mb-3">OPPLÆRINGSRESSURSER</h3>
                
                <h4 className="mb-3">Spillprinsipper:</h4>
                <ul>
                  <li><strong>Tilfeldighet</strong>: Vinnere av spill blir bestemt tilfeldig.</li>
                  <li><strong>Utfall kan ikke forutsies av tidligere resultater.</strong></li>
                </ul>

                <h4 className="mb-3">Vanlige Misforståelser:</h4>
                <ul>
                  <li>Å tro at "jeg er due for en seier" er en feilslutning siden alle utfall i tilfeldighetsspill er tilfeldige og ikke kan forutsies.</li>
                  <li>Å tro at en lykkebringer eller før-spill ritual påvirker dine vinnersjanser er en misforståelse, da disse faktorene ikke har noen innvirkning på spillets tilfeldige utfall.</li>
                  <li>Å anta at å spille et spill over lengre tid øker dine vinnersjanser er feil, da sannsynligheten for å vinne forblir den samme for hver spillrunde uavhengig av hvor mye tid som brukes på å spille.</li>
                </ul>

                <h3 className="mt-5 mb-3">TIPS FOR TRYGT SPILL:</h3>
                <ul>
                  <li>Unngå å spille når du er sint, trist eller følelsesmessig påvirket.</li>
                  <li>Ta hyppige og regelmessige pauser under spilløktene.</li>
                  <li>Ikke spill når du er påvirket av rusmidler eller alkohol.</li>
                  <li>Videospill er bare én form for underholdning, og det finnes andre alternativer.</li>
                  <li>Hvis du gjør et valgfritt kjøp, sørg for at det er med penger du har råd til å bruke.</li>
                  <li>Sett en tidsramme for spilling.</li>
                  <li>Forstå hvordan spillene fungerer og at vinnere er tilfeldige.</li>
                  <li>Ikke la spilling påvirke din jobb, relasjoner, helse eller sosiale forpliktelser eller andre forpliktelser.</li>
                </ul>

                <h3 className="mt-5 mb-3">BESKYTTELSE AV SPILLERE</h3>
                <p>Vi anbefaler ikke spilling hvis du:</p>
                <ul>
                  <li>Har en historie med avhengighet eller avhengighetsproblemer, eller for tiden er under behandling for slike tilstander.</li>
                  <li>Er påvirket av stoffer som kan svekke dømmekraften din.</li>
                  <li>Opplever økonomiske problemer eller stressende eller traumatiske livshendelser.</li>
                  <li>Ikke forstår reglene og spillmekanikkene i spillene.</li>
                  <li>Har psykiske helseproblemer (faktiske eller mistenkte), mentale svekkelser eller fysisk hjerneskade.</li>
                </ul>

                <h3 className="mt-5 mb-3">BESKYTTELSE AV MINDREÅRIGE</h3>
                <p>Vi har ulike system- og identitetskontroller på plass for å forhindre mindreårig spilling. Hvis du deler enhetene dine med mindreårige, anbefaler vi å begrense deres tilgang til vår plattform ved hjelp av ulik internettblokkering og overvåkingsprogramvare.</p>

                <h3 className="mt-5 mb-3">GJELDENDE LOV</h3>
                <p>Disse retningslinjene for ansvarlig sosialt spill er underlagt norsk lov. Eventuelle tvister som oppstår fra eller er relatert til disse retningslinjene skal løses i henhold til norsk lov.</p>
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