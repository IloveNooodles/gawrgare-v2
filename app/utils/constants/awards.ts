export type Award = {
  name: string;
  year: number;
  scope: string;
  url: string;
  place: number;
  organizer: string;
};

export const awards: Award[] = [
  {
    name: 'Cyber Jawara International Hacking Competition',
    year: 2023,
    scope: 'International',
    url: 'https://cyberjawara.id/2024',
    place: 5,
    organizer: 'CSIRTID',
  },
  {
    name: 'Hack A Day',
    year: 2023,
    scope: 'National',
    url: 'https://www.pwc.com/id/en/services/reimagine-digital/cybersecurity-and-cloud/hackaday.html',
    place: 2,
    organizer: 'PwC Hong Kong',
  },
  {
    name: 'Gemastik XVII Keamanan Siber',
    year: 2024,
    scope: 'National',
    url: 'https://gemastik.kemdikbud.go.id/',
    place: 2,
    organizer: 'Puspresnas',
  },
  {
    name: 'FindIT Capture The Flag Competition',
    year: 2024,
    scope: 'National',
    url: 'https://www.find-it.id/competition/capture-the-flag',
    place: 1,
    organizer: 'Universitas Brawijaya',
  },
  {
    name: 'Compfest 15 Capture The Flag Competition',
    year: 2023,
    scope: 'National',
    url: 'https://compfest.id/',
    place: 3,
    organizer: 'Universitas Indonesia',
  },
  {
    name: 'IFEST Capture The Flag Competition',
    year: 2023,
    scope: 'National',
    url: 'https://ifestunpad.com/',
    place: 3,
    organizer: 'Universitas Padjajaran',
  },
  {
    name: 'JOINTS Capture The Flag Competition',
    year: 2023,
    scope: 'National',
    url: 'https://www.instagram.com/jointsugm/?hl=en',
    place: 2,
    organizer: 'Universitas Gajah Mada',
  },
  {
    name: 'Techompfest Capture The Flag Competition',
    year: 2023,
    scope: 'National',
    url: 'https://techcomfest.ukmpcc.org/',
    place: 1,
    organizer: 'Politeknik Negeri Semarang',
  },
  {
    name: 'Hology 5.0 Capture The FLag Competition',
    year: 2022,
    scope: 'National',
    url: 'https://hology.ub.ac.id/',
    place: 1,
    organizer: 'Universitas Brawijaya',
  },
];
