import { GetStaticProps } from 'next';
import { jsPDF } from 'jspdf';
import { NavigationItem, Page } from '@ncb/types/index';
import { fetchCreateMainNavigation } from '@ncb/modules/MainNavigation/helper';
import { fetchCreateFooterNavigation } from '@ncb/modules/FooterNavigation/helper';
import Layout from '@ncb/components/Layout';
import { Button } from '@ncb/modules/Cards/styles';

const path = require('path');

type PageProps = {
    pageData: Page;
    mainNavigation: NavigationItem[];
    footerNavigation: NavigationItem[];
};

const DynamicPage = ({ pageData, mainNavigation, footerNavigation }: PageProps) => {
    return (
        <>
            <Layout mainNavigation={mainNavigation} footerNavigation={footerNavigation}>
                <Button onClick={handleClick}>Anmelden</Button>
            </Layout>
        </>
    );
};

function handleClick() {
    const doc = new jsPDF();

    // Überschrift
    doc.setFontSize(18);
    doc.text('Antrag auf Mitgliedschaft', 105, 20);

    doc.setFontSize(12);
    doc.text('(Bitte vollständig und in Druckbuchstaben ausfüllen)', 105, 30);

    doc.setFontSize(10);
    doc.text('Hiermit beantrage ich im Kaizen – Verein für Kampfkunst e.V. (im Folgenden mit Kaizen e.V. bezeichnet)', 20, 50);
    doc.text('den Beitritt als Mitglied. Die Mitgliedschaft wird auf eine Mindestlaufzeit von 6 (sechs) Monaten', 20, 55);
    doc.text('verbindlich vereinbart. Diesen Vertrag kann ich nur schriftlich zum 30. Juni und 31. Dezember', 20, 60);
    doc.text('unter Einhaltung einer sechswöchigen Kündigungsfrist beim Vorstand (Anschrift siehe unten) kündigen.', 20, 65);

    doc.text('Neuanmeldung', 20, 75);
    doc.text('Änderung', 80, 75);

    // Angaben zum Mitglied
    doc.setFontSize(12);
    doc.text('Angaben zum Mitglied:', 20, 85);

    doc.setFontSize(10);
    doc.text('Vorname:', 20, 95);
    doc.text('______________________________', 60, 95);

    doc.text('Geburtsdatum:', 140, 95);
    doc.text('______________________________', 180, 95);

    doc.text('Name:', 20, 105);
    doc.text('______________________________', 60, 105);

    doc.text('Telefon:', 140, 105);
    doc.text('_______________________________________', 180, 105);

    doc.text('Strasse:', 20, 115);
    doc.text('______________________________', 60, 115);

    doc.text('Mobil:', 140, 115);
    doc.text('_______________________________________', 180, 115);

    doc.text('PLZ:', 20, 125);
    doc.text('__________', 60, 125);

    doc.text('Wohnort:', 80, 125);
    doc.text('______________________', 110, 125);

    doc.text('E-Mail:', 140, 125);
    doc.text('_______________________________________', 180, 125);

    // Angaben zum Erziehungsberechtigten
    doc.setFontSize(12);
    doc.text('Angaben zum Erziehungsberechtigten:', 20, 135);

    doc.setFontSize(10);
    doc.text('Nur bei minderjährigen Mitgliedern von obigen Angaben abweichende Einträge vornehmen.', 20, 140);

    doc.text('Vorname:', 20, 150);
    doc.text('______________________________', 60, 150);

    doc.text('Mobil:', 140, 150);
    doc.text('_______________________________________', 180, 150);

    doc.text('Name:', 20, 160);
    doc.text('______________________________', 60, 160);

    doc.text('E-Mail:', 140, 160);
    doc.text('_______________________________________', 180, 160);

    // Angaben zur Mitgliedschaft
    doc.setFontSize(12);
    doc.text('Angaben zur Mitgliedschaft:', 20, 170);

    doc.setFontSize(10);
    doc.text('Standort Schule: Lindlar', 20, 180);

    doc.text('Karate', 20, 190);
    doc.text('Aikido', 60, 190);
    doc.text('Fitness', 100, 190);

    doc.text('Ich verpflichte mich, dem Kaizen-Verein für Kampfkunst e.V. den Mitgliedsbeitrag in Höhe von', 20, 200);
    doc.text('monatlich 25,- € für Volljährige und 20,- € für Minderjährige per Lastschriftverfahren zu zahlen.', 20, 205);

    doc.text('Mit der Mitgliedschaft „Karate“ verbunden ist die Mitgliedschaft im Deutschen Karate Verband (DKV).', 20, 215);
    doc.text('Hierdurch entstehen pro Jahr weitere Kosten in Höhe von derzeit 18,- Euro bis zum 14. Lebensjahr', 20, 220);
    doc.text('und 23,- Euro ab Vollendung des 14. Lebensjahres.', 20, 225);

    doc.text('Zusätzlich wird im ersten Einzugsmonat eine einmalige Aufnahme- und Passgebühr in Höhe von', 20, 235);
    doc.text('20,- Euro erhoben.', 20, 240);

    doc.text('Bei Ausbleiben der Zahlungen bzw. fehlender Kontodeckung behält sich Kaizen e.V. die Einschaltung', 20, 250);
    doc.text('eines kostenpflichtigen Inkassounternehmens zu Lasten des säumigen Mitglieds und/oder die', 20, 255);
    doc.text('fristlose Kündigung der Mitgliedschaft vor.', 20, 260);

    doc.text('Mit meiner Unterschrift bestätige ich außerdem, dass ich mit der Veröffentlichung von Bildmaterial', 20, 270);
    doc.text('meiner Person/meines Kindes zu Vereinszwecken einverstanden bin.', 20, 275);

    doc.text('Ich erkenne die Vereinsbedingungen und die Beitragsordnung von Kaizen e.V. an und versichere,', 20, 285);
    doc.text('dass die gemachten Angaben der Wahrheit entsprechen.', 20, 290);

    doc.text('Ort / Datum:', 20, 300);
    doc.text('______________________________', 60, 300);

    doc.text('Unterschrift (unter 18 J. durch gesetzlichen Vertreter):', 140, 300);
    doc.text('______________________________', 210, 300);

    // Footer
    doc.text('Kaizen - Verein für Kampfkunst e.V.', 20, 310);
    doc.text('c/o Thomas Stein, Zur Zwergenhöhle 4, 51179 Lindlar', 20, 315);
    doc.text('Gläubiger-Identifikationsnummer: DE42ZZZ00000791800', 20, 320);

    doc.setFontSize(12);
    doc.text('SEPA-Lastschriftmandat', 105, 330);

    doc.setFontSize(10);
    doc.text('Mandatsreferenz: Setzt sich aus dem Namen des Vereinsmitgliedes wie folgt zusammen:', 20, 340);
    doc.text('KaizenNachnameVorname(n)', 20, 345);
    doc.text('Dabei werden Umlaute im Namen ersetzt (ä durch ae, usw.)', 20, 350);

    doc.text('Ich ermächtige den Zahlungsempfänger Kaizen – Verein für Kampfkunst e.V.', 20, 360);
    doc.text('Zahlungen von meinem Konto mittels Lastschrift einzuziehen.', 20, 365);
    doc.text('Zugleich weise ich mein Kreditinstitut an, die vom Zahlungsempfänger Kaizen - Verein für', 20, 370);
    doc.text('Kampfkunst e.V. auf mein Konto gezogenen Lastschriften einzulösen.', 20, 375);

    doc.text('Zahlungsart: Wiederkehrende Zahlung', 20, 385);

    doc.text('Name, Vorname (Kontoinhaber):', 20, 395);
    doc.text('______________________________', 80, 395);

    doc.text('Straße:', 20, 405);
    doc.text('______________________________', 80, 405);

    doc.text('PLZ, Ort:', 20, 415);
    doc.text('______________________________', 80, 415);

    doc.text('Kreditinstitut:', 20, 425);
    doc.text('______________________________', 80, 425);

    doc.text('IBAN:', 20, 435);
    doc.text('______________________________', 80, 435);

    doc.text('BIC:', 20, 445);
    doc.text('______________________________', 80, 445);

    doc.text('Ort:', 20, 455);
    doc.text('______________________________', 50, 455);

    doc.text('Datum:', 120, 455);
    doc.text('______________________________', 150, 455);

    doc.text('Unterschrift Kontoinhaber:', 20, 465);
    doc.text('______________________________', 80, 465);

    // Speichern des PDFs
    doc.save('Mitgliedschaftsantrag_Kaizen.pdf');
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            mainNavigation: await fetchCreateMainNavigation(),
            footerNavigation: await fetchCreateFooterNavigation(),
        },
    };
};

export default DynamicPage;
