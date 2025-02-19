import React from 'react';

const KontaktFormularPrivacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Datenschutzrichtlinien</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="mb-4">
          Diese Datenschutzrichtlinien erläutern, wie wir personenbezogene Daten, die über das Kontaktformular auf unserer Webseite erhoben werden, verarbeiten und schützen. Wir nehmen den Schutz deiner persönlichen Daten sehr ernst und behandeln diese gemäß der Datenschutz-Grundverordnung (DSGVO) sowie anderen relevanten Datenschutzgesetzen.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">1. Verantwortlicher für die Datenverarbeitung</h2>
        <p className="mb-4">
          Verantwortlich für die Datenverarbeitung im Zusammenhang mit dem Kontaktformular auf dieser Webseite ist:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>[Dein Name oder Firmenname]</li>
          <li>[Adresse]</li>
          <li>[E-Mail-Adresse]</li>
          <li>[Telefonnummer]</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p className="mb-4">
          Wenn du das Kontaktformular auf unserer Webseite nutzt, erheben wir die folgenden personenbezogenen Daten:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Vorname</li>
          <li>Nachname</li>
          <li>E-Mail-Adresse</li>
          <li>Nachricht</li>
        </ul>
        <p className="mb-4">
          Die Erhebung dieser Daten erfolgt, um auf deine Anfrage zu reagieren und dir die gewünschten Informationen zuzusenden. Wir speichern diese Daten ausschließlich für die Bearbeitung deiner Anfrage und zur weiteren Kommunikation mit dir, sofern keine anderweitigen rechtlichen Verpflichtungen bestehen.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">3. Rechtsgrundlage der Verarbeitung</h2>
        <p className="mb-4">
          Die Verarbeitung der personenbezogenen Daten erfolgt auf Grundlage der folgenden Rechtsgrundlagen:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)</strong>: Die Verarbeitung erfolgt, um deine Anfrage zu beantworten und, falls erforderlich, weitere Informationen zu senden.</li>
          <li><strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</strong>: Sofern du uns deine ausdrückliche Einwilligung zur Verarbeitung der Daten gegeben hast, z.B. durch das Absenden des Kontaktformulars.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">4. Speicherung und Aufbewahrung von Daten</h2>
        <p className="mb-4">
          Die über das Kontaktformular erhobenen personenbezogenen Daten werden so lange gespeichert, wie dies für die Bearbeitung deiner Anfrage erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">5. Weitergabe von Daten</h2>
        <p className="mb-4">
          Wir geben deine personenbezogenen Daten grundsätzlich nicht an Dritte weiter, es sei denn, dies ist zur Erfüllung deiner Anfrage erforderlich oder du hast in die Weitergabe eingewilligt. Eine Übermittlung der Daten an Dritte erfolgt ausschließlich im Rahmen der gesetzlichen Bestimmungen.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">6. Sicherheit der Daten</h2>
        <p className="mb-4">
          Wir treffen geeignete technische und organisatorische Maßnahmen, um deine personenbezogenen Daten vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen. Dennoch kann keine Internetübertragung oder elektronische Speicherung eine hundertprozentige Sicherheit garantieren.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">7. Deine Rechte</h2>
        <p className="mb-4">
          Du hast das Recht, jederzeit Auskunft über die bei uns gespeicherten personenbezogenen Daten zu erhalten und deren Berichtigung, Löschung oder Einschränkung der Verarbeitung zu verlangen. Darüber hinaus hast du das Recht, deine Einwilligung zur Verarbeitung deiner personenbezogenen Daten jederzeit mit Wirkung für die Zukunft zu widerrufen.
        </p>
        <p className="mb-4">
          Wenn du der Ansicht bist, dass die Verarbeitung deiner personenbezogenen Daten gegen geltendes Datenschutzrecht verstößt, hast du das Recht, bei einer Aufsichtsbehörde Beschwerde einzulegen.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">8. Kontakt</h2>
        <p className="mb-4">
          Für Fragen oder Anliegen zum Datenschutz kannst du uns über die folgenden Kontaktmöglichkeiten erreichen:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>[Dein Name oder Firmenname]</li>
          <li>[E-Mail-Adresse]</li>
          <li>[Telefonnummer]</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">9. Änderungen der Datenschutzrichtlinien</h2>
        <p className="mb-4">
          Wir behalten uns das Recht vor, diese Datenschutzrichtlinien bei Bedarf anzupassen. Die jeweils aktuelle Version ist auf dieser Seite veröffentlicht.
        </p>
      </div>
    </div>
  );
};

export default KontaktFormularPrivacy;
