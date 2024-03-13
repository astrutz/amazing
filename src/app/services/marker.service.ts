import { Injectable } from '@angular/core';
import { Marker as AmazingMarker } from '../types/marker.type';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {

  constructor() {
  }

  private _markers: AmazingMarker[] = [
    {
      id: 'sdfggdfssgd',
      name: 'Schlossberg Freiburg',
      description: 'Oben am Geländer vom Turm',
      lat: 47.994178,
      lng: 7.859474,
    },
    {
      id: 'shdsdhfhsdfhsdhs',
      name: 'Palmetum Teneriffa',
      description: 'Auf der Rückseite vom Eingangsschild',
      lat: 28.454120,
      lng: -16.256980,
    },
    {
      id: 'sdfggsdfdfssgd',
      name: 'babiel GmbH',
      description: 'An verschiedenen Stellen im Office',
      lat: 51.219570,
      lng: 6.814330,
    },
    {
      id: 'sdfsdf',
      name: 'Koi Sushi',
      description: 'Das weiß nur Philipp Müller',
      lat: 51.225630,
      lng: 6.791980,
    },
    {
      id: 'ssdsgd',
      name: 'Restaurante El Meson Teneriffe',
      description: 'Unter einigen Tellern und auf der Herrentoilette',
      lat: 28.239220,
      lng: -16.839540,
    },
    {
      id: 'uksdjhgj',
      name: 'Kettwiger Straße U-Bahn',
      description: 'Am Eingang und an der Rolltreppe',
      lat: 51.220847,
      lng: 6.809221,
    },
    {
      id: 'uksdj345hgj',
      name: 'Ingolstadt Hauptbahnhof',
      description: 'Unter einer Bank bei den Bussen',
      lat: 48.7445760,
      lng: 11.4362583,
    },
    {
      id: 'asdasdasd',
      name: 'KiTa Bayerseich Egelsbach',
      description: 'Laterne bei den Fahrradständern',
      lat: 49.955935,
      lng: 8.669356,
    },
    {
      id: 'sdfsdfsdf',
      name: 'Erkrather Straße',
      description: 'Auf einem Stromkasten',
      lat: 51.219767,
      lng: 6.811831,
    },
    {
      id: 'sdf',
      name: 'Schwanenhöfe',
      description: 'Gegenüber von Hase & Igel',
      lat: 51.2197206,
      lng: 6.8157599,
    },
    {
      id: 's5334df',
      name: 'Oberwiehl',
      description: 'Am Dorfplatz im Pavillon',
      lat: 50.94694762218973,
      lng: 7.585239794815468,
    },
    {
      id: 's5334df',
      name: 'Angfurten',
      description: 'Auf der Scheune vom Bauer',
      lat: 50.94275567790995,
      lng: 7.596719702855772,
    },
    {
      id: 's53sdf34df',
      name: 'Dietrich-Bonhoeffer-Gymnasium',
      description: 'An der Aula (innen und außen)',
      lat: 50.94914500994642,
      lng: 7.557135940729041,
    },
    {
      id: 's5334df',
      name: 'TH Gummersbach',
      description: 'In der Mensa und der Bibliothek',
      lat: 51.022355817248574,
      lng: 7.562460376401844,
    },
    {
      id: 'asdasd',
      name: 'Aachen Hauptbahnhof',
      description: 'Auf der Telefonzelle bei den Bussen',
      lat: 50.7686224,
      lng: 6.0906221,
    },
    {
      id: 'asdasd',
      name: 'Köln Messe/Deutz',
      description: 'Am Aufenthaltsraum auf Gleis 5/6',
      lat: 50.940869,
      lng: 6.974926,
    },
    {
      id: 'asdasd',
      name: 'Walheim, Albert-Einstein-Straße',
      description: 'Innenseite der Wärmepumpe',
      lat: 50.7078160905014,
      lng: 6.175918119043731,
    },
    {
      id: 'asdasd',
      name: 'Friterie New-Quinta',
      description: 'Unter dem ersten Tisch rechts',
      lat: 50.7010755,
      lng: 6.0858870,
    },
    {
      id: 'asdasd',
      name: 'Vennbahntrasse',
      description: 'Auf dem Ortsschild "Hahn"',
      lat: 50.7124910,
      lng: 6.1951132,
    },
    {
      id: 'asdasd',
      name: 'Friterie New-Quinta',
      description: 'Auf dem Aufsteller draußen',
      lat: 50.7011058,
      lng: 6.0857653,
    },
    {
      id: 'asdasd',
      name: 'Mipri Grenzmarkt',
      description: 'Auf dem Einkaufswagenunterstand',
      lat: 50.7156092,
      lng: 6.1214910,
    },
    {
      id: 'asdasd',
      name: 'Walheim',
      description: 'Auf der Fußgängerampel',
      lat: 50.7074178,
      lng: 6.1825169,
    },
    {
      id: 'asdasd',
      name: 'Aachen Johanniterstraße',
      description: 'An der Laterne',
      lat: 50.7740433,
      lng: 6.0765542,
    },
    {
      id: 'asdasd',
      name: 'Walheim Hochrausring',
      description: 'Stromkasten an der Bushaltestellen',
      lat: 50.7095968,
      lng: 6.1776755,
    },
    {
      id: 'asdasd',
      name: 'Walheim Hochrausring',
      description: 'Auf dem Stoppschild (Rückseite)',
      lat: 50.7097024,
      lng: 6.1773349,
    },
    {
      id: 'asdasd',
      name: 'Mönchengladbach Hauptbahnhof',
      description: 'Anzeigetafel an Gleis 2',
      lat: 51.1967583,
      lng: 6.4467276,
    },
    {
      id: 'asdasd',
      name: 'Woyaya',
      description: 'Weg zur Toilette an der Wand',
      lat: 51.1853899,
      lng: 6.8205263,
    },
    {
      id: 'asdasd',
      name: 'Dartclub Lobberich',
      description: 'Tür auf der Herrentoilette',
      lat: 51.2569062,
      lng: 6.1706116,
    },
    {
      id: 'asdasd',
      name: 'SV Hösel',
      description: 'In der Schiedsrichterkabine',
      lat: 51.3307794,
      lng: 6.9023749,
    },
    {
      id: 'asdasd',
      name: 'Hautarztpraxis J. Franke',
      description: 'Auf dem Desinfektionsmittelspender',
      lat: 51.1420827,
      lng: 6.8947953,
    },
    {
      id: 'asdasd',
      name: 'Essen, Ruhrallee 6',
      description: 'Auf dem Kinderbett (Kopfseite)',
      lat: 51.44683126575422,
      lng: 7.024614748052559,
    },
    {
      id: 'asdasd',
      name: 'Glowing Rooms',
      description: 'Auf dem Poller vorm Eingang',
      lat: 51.22140000194226,
      lng: 6.809223924860989,
    },
    {
      id: 'asdasd',
      name: 'Ecke Ruhrtalstraße/Erkrather Str.',
      description: 'Auf dem Poller an der Kreuzung',
      lat: 51.2203752518005,
      lng: 6.810218581503558,
    },
    {
      id: 'asdasd',
      name: 'De Pier',
      description: 'Auf dem Bungeeturm',
      lat: 52.11769114660937,
      lng: 4.280026958122205,
    },
    {
      id: 'asdasd',
      name: 'Internationaler Gerichtshof',
      description: 'Auf der Bank vor der Flamme des Friedens',
      lat: 52.0868974602265,
      lng: 4.296087268559951,
    },
    {
      id: 'asdasd',
      name: 'Reiterstatue von Wilhelm I',
      description: 'Auf dem Sockel',
      lat: 52.081204362391865,
      lng: 4.307136050075477,
    },
    {
      id: 'asdasd',
      name: 'Binnenhof',
      description: 'Auf der dritten Parkbank',
      lat: 52.08009344636251,
      lng: 4.314317275314299,
    },
    {
      id: 'asdasd',
      name: 'Haagse Markt',
      description: 'Seitlich auf dem Kibbelingstand',
      lat: 52.06403825689157,
      lng: 4.299655828932263,
    },
    {
      id: 'asdasd',
      name: 'Den Haag Centraal',
      description: 'Tramhaltestelle',
      lat: 52.08108488810978,
      lng: 4.322597464284643,
    },
    {
      id: 'asdasd',
      name: 'Utrecht Centraal',
      description: 'Treppe zu Gleis 4',
      lat: 52.08948368985249,
      lng: 5.109546080657984,
    },
    {
      id: 'asdasd',
      name: 'Düsseldorf Stresemannstraße',
      description: 'Poller an der Ecke',
      lat: 51.2198383,
      lng: 6.7866547,
    },
    {
      id: 'asdasd',
      name: 'Restaurant Drei Chinesen',
      description: 'Das weiß nur Mona',
      lat: 51.2193849,
      lng: 6.7853531,
    },
    {
      id: 'asdasd',
      name: 'Legden Königstraße',
      description: 'Das weiß nur Mona',
      lat: 52.0317433,
      lng: 7.1060719,
    },
    {
      id: 'asdasd',
      name: 'PSD Bank Dome',
      description: 'Auf dem Fahnenmast',
      lat: 51.27272314112719,
      lng: 6.811698406515972,
    },
    {
      id: 'asdasd',
      name: 'Merkur Spiel-Arena',
      description: 'Eingang zu Block 139',
      lat: 51.2627072228073,
      lng: 6.733270510772401,
    },
    {
      id: 'asdasd',
      name: 'Checkpoint Darttreff Borken',
      description: 'Auf dem Zaun an der Straße',
      lat: 51.849537375834686,
      lng: 6.878952533846294,
    },
    {
      id: 'asdasd',
      name: '1. DC Werne',
      description: 'In dem Parkhaus',
      lat: 51.663760133444754,
      lng: 7.637067271481248,
    },
    {
      id: 'asdasd',
      name: 'Heidelberg Hauptbahnhof',
      description: 'An den Fahrradständern',
      lat: 49.404543661682595,
      lng: 8.67512632845155,
    },
    {
      id: 'asdasd',
      name: 'Duisburg Regattabahn',
      description: 'Auf der Laterne an der Tribüne',
      lat: 51.40574351491139,
      lng: 6.788900762502939,
    },
    {
      id: 'asdasd',
      name: 'SC Unterbach',
      description: 'In der Schiedsrichterkabine',
      lat: 51.19922357162843,
      lng: 6.9114393524448205,
    },
    {
      id: 'asdasd',
      name: 'Restaurant Cubana',
      description: 'Am Eingang zur Küche',
      lat: 50.928966625880875,
      lng: 6.94107957903879,
    },
    {
      id: 'asdasd',
      name: 'Köln Clarenbachkanal',
      description: 'Rückseite der Bank',
      lat: 50.935336422632936,
      lng: 6.917535737641161,
    },
    {
      id: 'asdasd',
      name: 'Düsseldorf Corneliusstraße',
      description: 'Auf dem Pfahl eines Schildes',
      lat: 51.2125854,
      lng: 6.7828768,
    },
    {
      id: 'asdasd',
      name: 'Düsseldorf Corneliusstraße',
      description: 'An der Ampel',
      lat: 51.2138296,
      lng: 6.7829328,
    },
    {
      id: 'asdasd',
      name: 'Düsseldorf Corneliusstraße',
      description: 'Am Mülleimer an der Ampel',
      lat: 51.2154055,
      lng: 6.7829767,
    },
    {
      id: 'asdasd',
      name: 'Düsseldorf Corneliusstraße',
      description: 'An den Papiermülltonnen',
      lat: 51.21575967132702,
      lng: 6.783027300400621,
    },
    {
      id: 'asdasd',
      name: 'Düsseldorf Luisenstraße',
      description: 'Vor dem Polizeipräsidium',
      lat: 51.2173604,
      lng: 6.7830569,
    },
    {
      id: 'asdasd',
      name: 'Düsseldorf Adersstraße',
      description: 'Vor Cindy Nails',
      lat: 51.2180716,
      lng: 6.7833773,
    },
    {
      id: 'asdasd',
      name: 'Düsseldorf Graf-Adolf-Straße',
      description: 'Auf dem Mülleimer vor Bang Me',
      lat: 51.2186420,
      lng: 6.7837508,
    },
    {
      id: 'asdasd',
      name: 'Mona\'s WG',
      description: 'Und auch auf ihrem Auto',
      lat: 51.219536701523054,
      lng: 6.785412291840453,
    },
    {
      id: 'asdasd',
      name: 'Oststraße U-Bahnhof',
      description: 'Ausgang, auf der linken Seite am Schild',
      lat: 51.22273470100844,
      lng: 6.786382111242809,
    },
    {
      id: 'asdasd',
      name: 'Düsseldorf Bismarckstraße',
      description: 'Keine Ahnung, weil Mona besoffen war',
      lat: 51.22223112513329,
      lng: 6.785876510673571,
    },
    {
      id: 'asdasd',
      name: 'Flughafen Frankfurt-Hahn',
      description: 'Wartehalle',
      lat: 49.9398181,
      lng: 7.2663322,
    },
    {
      id: 'asdasd',
      name: 'Pizzeria Regina',
      description: 'Auf dem Schaufenster',
      lat: 51.185592,
      lng: 6.820272,
    },
    {
      id: 'asdasd',
      name: 'SC Düsseldorf West',
      description: 'In der Schiedsrichterkabine',
      lat: 51.236731,
      lng: 6.749969,
    },
    {
      id: 'asdasd',
      name: 'SV Alemannia Kamp',
      description: 'An der Laterne am Eingang',
      lat: 51.501123,
      lng: 6.514050,
    },
    {
      id: 'asdasd',
      name: 'Düren Bahnhof',
      description: 'Treppe zu Gleis 4',
      lat: 50.809627,
      lng: 6.482491,
    },
    {
      id: 'asdasd',
      name: 'Düren Bahnhof',
      description: 'Treppe zu Gleis 4',
      lat: 50.809627,
      lng: 6.482491,
    },
    {
      id: 'asdasd',
      name: 'Kreuzau-Eifelstraße Bahnhof',
      description: 'Mülleimer am Bahnübergang',
      lat: 50.7427070,
      lng: 6.4920442,
    },
    {
      id: 'asdasd',
      name: 'Düsseldorf Südpark',
      description: 'Bank am See',
      lat: 51.19474274300728,
      lng: 6.807437178272812,
    },
    {
      id: 'asdasd',
      name: 'Düsseldorf Heidelberger Straße',
      description: 'An der Ampel',
      lat: 51.19700480882391,
      lng: 6.848030225075872,
    },
    {
      id: 'asdasd',
      name: 'Capaci Via Lipari',
      description: 'An der Kreuzung vor der Ferienwohnung',
      lat: 38.1728673,
      lng: 13.2313277,
    },
    {
      id: 'asdasd',
      name: 'Parcheggio Auto Etna',
      description: 'Laterne am Parkplatz',
      lat: 37.6986734,
      lng: 15.0049840,
    },
    {
      id: 'asdasd',
      name: 'Arco romano',
      description: 'An einer Laterne',
      lat: 37.8592511,
      lng: 15.2778518,
    },
    {
      id: 'asdasd',
      name: 'Giardino della Kolymbethra\n',
      description: 'An einer Laterne',
      lat: 37.2896520,
      lng: 13.5828355,
    },
    {
      id: 'asdasd',
      name: 'Belvedere Scala dei Turchi',
      description: 'Auf dem Holzzaun',
      lat: 37.29342186413656,
      lng: 13.470109671163943,
    },
    {
      id: 'asdasd',
      name: 'Aeroporto di Catania-Fontanarossa',
      description: 'Auf einer Laterne vorm Eingang',
      lat: 37.4705283,
      lng: 15.0683817,
    }
  ];
  get markers(): AmazingMarker[] {
    return this._markers;
  }
}
