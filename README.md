# Moment 2 - Uppgift 2

Denna webbapplikation är en fristående frontend-lösning skapad i kursen Backend-baserad webbutveckling. Applikationen konsumerar ett REST API byggt i en separat backend-del och visar samt hanterar arbetserfarenheter.

Syftet med uppgiften är att förstå hur frontend och backend kommunicerar via REST API:er med hjälp av Fetch API.

## Syfte
- Bekanta dig med begreppet webbtjänster och förstå hur man kan använda dessa för att skapa moderna och plattformsoberoende applikationer.
- Kunna skapa en REST-baserad webbtjänst som använder en relationsbaserad databasserver för lagring.
- Kunna använda Fetch API för att konsumera en webbtjänst.

## Funktioner
- Hämtar arbetserfarenheter från API (GET)
- Lägger till nya arbetserfarenheter (POST)
- Raderar arbetserfarenheter (DELETE)
- Klientvalidering av formulärdata innan skickning
- Visning av data i dynamisk lista

Applikationen kommunicerar med ett REST API byggt med Node.js och Express.
API:t använder en MySQL-databas för lagring av data.

Tabellen **workexperience** innehåller följande fält:

- id (PK, auto increment)
- companyname
- jobtitle
- location
- startdate
- enddate
- description

Kom igång:
1. Klona repot
2. Öppna projektet i VS Code
3. Installera beroenden (om Vite används):
npm install
4. Starta utvecklingsserver:
npm run dev
5. Kontrollera att backend körs på:
http://localhost:3000