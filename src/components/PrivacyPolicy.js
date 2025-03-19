import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo-white.png";

const PrivacyPolicy = () => {
  return (
    <>
      <Header logo={logo} />
      <div className="terms-service">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="terms-content mt-4 mb-5 p-4">
                <h1 className="text-center mb-4">Personvernerklæring</h1>
                <p className="version-info text-center mb-4">
                  <strong>Versjon 2.0</strong><br />
                  Sist oppdatert 2. juni 2024
                </p>

                <p><strong>meistersocial</strong> (vi, oss, vår) som driver som <strong>meistersocial</strong> opererer det sosiale tilbudet som er tilgjengelig via <a href="http://www.meistersocial.com" target="_blank" rel="noreferrer">www.meistersocial.com</a> og alle underdomener, inkludert spillene, innholdet, funksjonene, verktøyene og tjenestene som tilbys der og på våre tilknyttede sosiale mediesider.</p>

                <p>Vi tar våre personvern- og sikkerhetsforpliktelser når det gjelder din personlige informasjon svært alvorlig og er forpliktet til å overholde alle gjeldende personvernlover, inkludert <strong>General Data Protection Regulation (GDPR)</strong> og andre relevante norske personvernlover.</p>

                <p>Denne personvernerklæringen beskriver hvilke typer personopplysninger vi samler inn om brukere av vår plattform (Brukere, du, din), hvordan vi bruker dem, hvem vi deler dem med, hvordan vi holder dem trygge, og hvordan du kan kontrollere dem. Vennligst gjennomgå denne personvernerklæringen nøye og send oss en e-post til <a href="mailto:dataprivacy@meistersocial.com">dataprivacy@meistersocial.com</a> hvis du har spørsmål.</p>

                <p>Denne personvernerklæringen bør leses sammen med, og danner en del av, <strong>meistersocial Terms of Service</strong>. Ethvert stortavledd begrep i denne personvernerklæringen som ikke er definert her har den betydningen som er gitt i våre vilkår.</p>

                <p>I denne personvernerklæringen er termen <strong>Personlige opplysninger</strong> enhver informasjon om deg, enten den er sann eller ikke, som kan brukes til å identifisere deg eller gjøre deg gjenkjennbart.</p>

                <p>Vi vil publisere eventuelle oppdateringer til denne personvernerklæringen på vår hjemmeside, og disse endringene vil gjelde umiddelbart. Hvis vi oppdaterer denne personvernerklæringen på en måte som påvirker dine rettigheter eller forpliktelser, vil vi varsle deg når du næste besøker vår hjemmeside, og du må godta den oppdaterte personvernerklæringen. Hvis, ved noen tidspunkt, du ikke godtar noen oppdaterte personvernerklæringer, må du slutte å bruke vår hjemmeside.</p>

                <h3 className="mt-5 mb-3">Kategorier av personopplysninger vi samler inn</h3>

                <p>Vi kan samle inn følgende kategorier av personopplysninger via plattformen:</p>

                <ol>
                  <li><strong>Personlige data</strong>: Ditt navn, alder, kjønn, e-postadresse, bostedsadresse, telefonnumre og annen informasjon som kan brukes til å identifisere deg direkte.</li>
                  <li><strong>Enhetsdata</strong>: Informasjon om de elektroniske enhetene du bruker for å få tilgang til plattformen, som enhetsidentifikatorer, informasjon om nettleseren din og operativsystemet, IP-adressen din og enhetsinnstillinger.</li>
                  <li><strong>Bruksdata</strong>: Informasjon om hvordan du bruker plattformen, som hvilke sider du besøker, hvor ofte du besøker dem, hvor lenge du blir på dem, og hvordan du navigerer rundt på plattformen.</li>
                  <li><strong>Transaksjonsdata</strong>: Informasjon du oppgir når du foretar et kjøp fra oss, ber om innløsning, fullfører verifisering eller på annen måte bruker plattformen vår.</li>
                  <li><strong>Posisjonsdata</strong>: Informasjon om din omtrentlige posisjon fra en elektronisk enhet du bruker for å få tilgang til plattformen.</li>
                </ol>

                <p>Vi kan også samle inn <strong>aggregerte data</strong> om deg, som er informasjon om alle eller en begrenset gruppe våre brukere som ikke direkte eller indirekte identifiserer deg eller noen annen person.</p>

                <p>Vi kan også samle inn <strong>anonyme data</strong> om deg, som er informasjon om deg som ikke direkte eller indirekte identifiserer deg eller noen annen person.</p>

                <h3 className="mt-5 mb-3">Hvordan vi bruker personopplysningene vi samler inn</h3>

                <p>Vi vil bruke personopplysningene dine i følgende tilfeller:</p>
                <ul>
                  <li>For å drive plattformen og levere våre tilbud og tjenester til deg.</li>
                  <li>For å tilrettelegge for finansielle transaksjoner du ber om.</li>
                  <li>For å svare på dine henvendelser og klager.</li>
                  <li>I samsvar med ditt samtykke eller etter din forespørsel.</li>
                  <li>For å oppfylle en kontraktsmessig forpliktelse overfor deg.</li>
                  <li>Der det er nødvendig for våre legitime interesser (eller tredjeparters interesser), forutsatt at dine grunnleggende rettigheter ikke overstyrer disse interessene.</li>
                  <li>For å overholde våre juridiske eller regulatoriske forpliktelser.</li>
                </ul>

                <p>Vi deler personopplysningene dine med tredjeparter i følgende tilfeller:</p>
                <ol>
                  <li><strong>Våre tilknyttede selskap</strong>: Vi kan dele personopplysningene med andre selskap i <strong>Jackpot Group</strong>, inkludert enhver betalingsadministrasjonagent for å behandle betalinger til/fra deg på vår vegne.</li>
                  <li><strong>Vår hjemmeside</strong>: Personopplysninger kan deles med våre upstream hostingleverandører som hoster vår hjemmeside.</li>
                  <li><strong>Til å levere tjenester gjennom vår hjemmeside</strong>: Vi kan samarbeide med tredjeparter for databasebehandling, direkte markedsføring, svindelforebygging, teknisk og kundesupport.</li>
                  <li><strong>Krav og klager</strong>: Vi kan dele personopplysninger med våre forsikringer og advokater.</li>
                  <li><strong>Markedsføring</strong>: Vi kan dele personopplysninger med e-post, markedsføring og nyhetsbrevleverandører for å sende nyhetsbrev og markedsføringsmaterialer.</li>
                  <li><strong>Profesjonell rådgivning</strong>: Gi informasjon til våre juridiske, regnskaps- og finansielle rådgivere for rådgivning, representasjon og/eller gjeldsamling.</li>
                  <li><strong>Forretningssal eller fusjon</strong>: Del personopplysninger med kjøper eller fusjonsentiteten i tilfelle forretningsaktivitet eller deling av aksje, eller fusjon.</li>
                  <li><strong>Finansiell kriminalitetsforebygging</strong>: Vi bruker eksterne tredjeparter for dokumentverifisering og kontroller knyttet til finansiell kriminalitetsforebygging.</li>
                  <li><strong>Juridisk overholdelse</strong>: Vi vil samarbeide med lovgivende eller reguleringsmyndigheter, beskytte plattformen mot misbruk og sikre overholdelse av våre juridiske forpliktelser.</li>
                  <li><strong>Publisering på plattformen</strong>: Med ditt samtykke kan vi publisere navn og bilde på deg på plattformen for markedsføringsformål.</li>
                </ol>

                <p>Når vi deler personopplysninger med tredjeparter, vil vi ta rimelige tiltak for å sikre at personopplysningene er beskyttet til en standard som er sammenlignbar med vår egen. Vi begrenser tredjeparter fra å bruke personopplysningene til andre formål enn de som er spesifisert av oss eller kreves av lov.</p>

                <h3 className="mt-5 mb-3">Hvor lenge vi beholder personopplysningene dine</h3>

                <p>Vi vil beholde personopplysningene dine i minimumsperioden som er nødvendig for å oppnå de hensikter som er utpekt i denne personvernerklæringen (<strong>Retention Policy</strong>), som vil bli bestemt basert på:</p>
                <ul>
                  <li>Tiden som er nødvendig for å oppnå de hensikter som er utpekt for informasjonen.</li>
                  <li>Våre juridiske, regulatoriske, finansielle, regnskaps- og rapporteringsforpliktelser knyttet til informasjonen.</li>
                  <li>Operasjonelle krav knyttet til informasjonen.</li>
                  <li>Behovet for å beholde informasjonen for nåværende eller forventede juridiske krav, undersøkelser og/eller tvister.</li>
                </ul>

                <p>Vi vil ta rimelige trinn for å irretrievably slette eller irreversibelt anonymisere personopplysninger i henhold til vår Retention Policy.</p>

                <h3 className="mt-5 mb-3">Datasikkerhet</h3>

                <p>Vi tar våre forpliktelser om datavern svært alvorlig og behandler kun personopplysninger på en måte som sikrer deres sikkerhet. Dette innebærer å beskytte personopplysningene mot uautorisert eller ulovlig behandling og beskytte dem mot utilsiktet tap, ødeleggelse eller skade ved å iverksette passende tekniske og organisatoriske tiltak.</p>

                <p>Desverre, selv med våre beste innsatser, er det ikke alltid mulig å sikkerstille dataoverføringer over Internett. Mens vi implementerer rimelige tiltak for å holde personopplysninger som du overfører til plattformen sikre, er enhver overføring av personopplysninger på din egen risiko. Vi kan ikke garantere at informasjonen ikke vil bli interceptert av tredjeparter, og vi er ikke ansvarlig for sikkerhetsbrudd i forhold til personopplysninger som er utenfor vår rimelige kontroll.</p>

                <h3 className="mt-5 mb-3">Lenker til tredjeparter</h3>

                <p>Plattformen kan inneholde lenker til nettsteder, plug-ins og applikasjoner som drives av tredjeparter (<strong>Third-Party Links</strong>). Klikkende på Third-Party Links kan aktivere disse tredjepartene å samle eller dele data om deg. Vi kontrollerer ikke eller godtar disse Third-Party Links, og vi er ikke ansvarlig for deres personvernpraksis.</p>

                <p>Vi anbefaler å gå gjennom personvernpolicyene til disse tredjepartene for å forstå hvordan de kan samle og behandle personopplysninger. Disse personvernpolicyene kan være vesentlig forskjellig fra våre, og vi kontrollerer ikke operasjonene til disse nettstedene eller appar eller hvordan de samler, lagrer eller behandler data.</p>

                <p>Hvis du bruker et tredjepartssnettsted eller applikasjon (f.eks., Facebook eller Google) for å få tilgang til plattformen, er dine aktiviteter på disse tredjepartssnettstedene eller appar er underlagt personvernpolicyene til disse nettstedene eller appar.</p>

                <h3 className="mt-5 mb-3">Dine rettigheter angående personopplysninger</h3>

                <p>I henhold til loven kan du ha visse rettigheter angående personopplysningene vi samler inn og lagrer. Hvis du ønsker å utøve noen av disse rettighetene, vennligst kontakt oss på <a href="mailto:dataprivacy@meistersocial.com">dataprivacy@meistersocial.com</a>.</p>

                <p>Du har rett til å:</p>
                <ul>
                  <li>Få tilgang til personopplysningene vi har om deg.</li>
                  <li>Protestere mot behandlingen av dine personopplysninger.</li>
                  <li>Trekke tilbake ethvert samtykke gitt via denne personvernerklæringen.</li>
                </ul>

                <h3 className="mt-5 mb-3">Kontakt oss</h3>

                <p>Hvis du har spørsmål om dine personopplysninger, hvordan vi samler inn eller bruker dem, eller du ønsker å utøve dine rettigheter med hensyn til personopplysninger, vennligst kontakt vår personvernansvarlig via e-post på <a href="mailto:dataprivacy@meistersocial.com">dataprivacy@meistersocial.com</a>.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;