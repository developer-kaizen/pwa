import { jsPDF } from 'jspdf';

export default function generateRegistrationPdf() {
    const doc = new jsPDF();

    const leftSpace = 15;

    const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

    const toCenterX = pageWidth / 2;
    const h1Size = 16;

    // Überschrift
    doc.setFontSize(h1Size);
    doc.text('Antrag auf Mitgliedschaft', toCenterX, 15, {
        align: 'center',
    });

    doc.setFontSize(12);
    doc.text('(Bitte vollständig und in Druckbuchstaben ausfüllen)', toCenterX, 25, {
        align: 'center',
    });

    doc.setFontSize(10);
    doc.text('Hiermit beantrage ich im Kaizen – Verein für Kampfkunst e.V. (im Folgenden mit Kaizen e.V. bezeichnet)', leftSpace, 35);
    doc.text('den Beitritt als Mitglied. Die Mitgliedschaft wird auf eine Mindestlaufzeit von 6 (sechs) Monaten', leftSpace, 40);
    doc.text('verbindlich vereinbart. Diesen Vertrag kann ich nur schriftlich zum 30. Juni und 31. Dezember', leftSpace, 45);
    doc.text('unter Einhaltung einer sechswöchigen Kündigungsfrist beim Vorstand (Anschrift siehe unten) kündigen.', leftSpace, 50);

    doc.text('Neuanmeldung', leftSpace, 65);
    doc.rect(40, 62, 4, 4);
    doc.text('Änderung', 75, 65);
    doc.rect(92, 62, 4, 4);

    // Angaben zum Mitglied
    doc.setFontSize(12);
    doc.text('Angaben zum Mitglied:', leftSpace, 85);

    doc.setFontSize(10);
    doc.text('Vorname:', leftSpace, 95);
    doc.text('______________________________', 60, 95);

    doc.text('Geburtsdatum:', 140, 95);
    doc.text('______________________________', 180, 95);

    doc.text('Name:', leftSpace, 105);
    doc.text('______________________________', 60, 105);

    doc.text('Telefon:', 140, 105);
    doc.text('_______________________________________', 180, 105);

    doc.text('Strasse:', leftSpace, 115);
    doc.text('______________________________', 60, 115);

    doc.text('Mobil:', 140, 115);
    doc.text('_______________________________________', 180, 115);

    doc.text('PLZ:', leftSpace, 125);
    doc.text('__________', 60, 125);

    doc.text('Wohnort:', 80, 125);
    doc.text('______________________', 110, 125);

    doc.text('E-Mail:', 140, 125);
    doc.text('_______________________________________', 180, 125);

    // Angaben zum Erziehungsberechtigten
    doc.setFontSize(12);
    doc.text('Angaben zum Erziehungsberechtigten:', leftSpace, 135);

    doc.setFontSize(10);
    doc.text('Nur bei minderjährigen Mitgliedern von obigen Angaben abweichende Einträge vornehmen.', leftSpace, 140);

    doc.text('Vorname:', leftSpace, 150);
    doc.text('______________________________', 60, 150);

    doc.text('Mobil:', 140, 150);
    doc.text('_______________________________________', 180, 150);

    doc.text('Name:', leftSpace, 160);
    doc.text('______________________________', 60, 160);

    doc.text('E-Mail:', 140, 160);
    doc.text('_______________________________________', 180, 160);

    // Angaben zur Mitgliedschaft
    doc.setFontSize(12);
    doc.text('Angaben zur Mitgliedschaft:', leftSpace, 170);

    doc.setFontSize(10);
    doc.text('Standort Schule: Lindlar', leftSpace, 180);

    doc.text('Karate', leftSpace, 190);
    doc.text('Aikido', 60, 190);
    doc.text('Fitness', 100, 190);

    doc.text('Ich verpflichte mich, dem Kaizen-Verein für Kampfkunst e.V. den Mitgliedsbeitrag in Höhe von', leftSpace, 200);
    doc.text('monatlich 25,- € für Volljährige und leftSpace,- € für Minderjährige per Lastschriftverfahren zu zahlen.', leftSpace, 205);

    doc.text('Mit der Mitgliedschaft „Karate“ verbunden ist die Mitgliedschaft im Deutschen Karate Verband (DKV).', leftSpace, 215);
    doc.text('Hierdurch entstehen pro Jahr weitere Kosten in Höhe von derzeit 18,- Euro bis zum 14. Lebensjahr', leftSpace, 220);
    doc.text('und 23,- Euro ab Vollendung des 14. Lebensjahres.', leftSpace, 225);

    doc.text('Zusätzlich wird im ersten Einzugsmonat eine einmalige Aufnahme- und Passgebühr in Höhe von', leftSpace, 235);
    doc.text('leftSpace,- Euro erhoben.', leftSpace, 240);

    doc.text('Bei Ausbleiben der Zahlungen bzw. fehlender Kontodeckung behält sich Kaizen e.V. die Einschaltung', leftSpace, 250);
    doc.text('eines kostenpflichtigen Inkassounternehmens zu Lasten des säumigen Mitglieds und/oder die', leftSpace, 255);
    doc.text('fristlose Kündigung der Mitgliedschaft vor.', leftSpace, 260);

    doc.text('Mit meiner Unterschrift bestätige ich außerdem, dass ich mit der Veröffentlichung von Bildmaterial', leftSpace, 270);
    doc.text('meiner Person/meines Kindes zu Vereinszwecken einverstanden bin.', leftSpace, 275);

    doc.text('Ich erkenne die Vereinsbedingungen und die Beitragsordnung von Kaizen e.V. an und versichere,', leftSpace, 285);
    doc.text('dass die gemachten Angaben der Wahrheit entsprechen.', leftSpace, 290);

    doc.addPage();

    doc.text('Ort / Datum:', leftSpace, 300);
    doc.text('______________________________', 60, 300);

    doc.text('Unterschrift (unter 18 J. durch gesetzlichen Vertreter):', 140, 300);
    doc.text('______________________________', 210, 300);

    // Footer
    doc.text('Kaizen - Verein für Kampfkunst e.V.', leftSpace, 310);
    doc.text('c/o Thomas Stein, Zur Zwergenhöhle 4, 51179 Lindlar', leftSpace, 315);
    doc.text('Gläubiger-Identifikationsnummer: DE42ZZZ00000791800', leftSpace, 320);

    doc.setFontSize(12);
    doc.text('SEPA-Lastschriftmandat', 105, 330);

    doc.setFontSize(10);
    doc.text('Mandatsreferenz: Setzt sich aus dem Namen des Vereinsmitgliedes wie folgt zusammen:', leftSpace, 340);
    doc.text('KaizenNachnameVorname(n)', leftSpace, 345);
    doc.text('Dabei werden Umlaute im Namen ersetzt (ä durch ae, usw.)', leftSpace, 350);

    doc.text('Ich ermächtige den Zahlungsempfänger Kaizen – Verein für Kampfkunst e.V.', leftSpace, 360);
    doc.text('Zahlungen von meinem Konto mittels Lastschrift einzuziehen.', leftSpace, 365);
    doc.text('Zugleich weise ich mein Kreditinstitut an, die vom Zahlungsempfänger Kaizen - Verein für', leftSpace, 370);
    doc.text('Kampfkunst e.V. auf mein Konto gezogenen Lastschriften einzulösen.', leftSpace, 375);

    doc.text('Zahlungsart: Wiederkehrende Zahlung', leftSpace, 385);

    doc.text('Name, Vorname (Kontoinhaber):', leftSpace, 395);
    doc.text('______________________________', 80, 395);

    doc.text('Straße:', leftSpace, 405);
    doc.text('______________________________', 80, 405);

    doc.text('PLZ, Ort:', leftSpace, 415);
    doc.text('______________________________', 80, 415);

    doc.text('Kreditinstitut:', leftSpace, 425);
    doc.text('______________________________', 80, 425);

    doc.text('IBAN:', leftSpace, 435);
    doc.text('______________________________', 80, 435);

    doc.text('BIC:', leftSpace, 445);
    doc.text('______________________________', 80, 445);

    doc.text('Ort:', leftSpace, 455);
    doc.text('______________________________', 50, 455);

    doc.text('Datum:', 120, 455);
    doc.text('______________________________', 150, 455);

    doc.text('Unterschrift Kontoinhaber:', leftSpace, 465);
    doc.text('______________________________', 80, 465);

    // Speichern des PDFs
    doc.save('Mitgliedschaftsantrag_Kaizen.pdf');
}
