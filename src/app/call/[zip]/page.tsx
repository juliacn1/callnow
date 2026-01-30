import { Metadata } from 'next';

// Types for representatives
interface Representative {
  name: string;
  party: string;
  phone: string;
  phoneDisplay: string;
  role: string;
  type: 'senator' | 'representative';
}

// All US Senators as of 2025 with DC office numbers
const SENATORS: Record<string, { name: string; party: string; phone: string; phoneDisplay: string }[]> = {
  AL: [
    { name: 'Tommy Tuberville', party: 'R', phone: '2022244124', phoneDisplay: '(202) 224-4124' },
    { name: 'Katie Britt', party: 'R', phone: '2022245744', phoneDisplay: '(202) 224-5744' },
  ],
  AK: [
    { name: 'Lisa Murkowski', party: 'R', phone: '2022246665', phoneDisplay: '(202) 224-6665' },
    { name: 'Dan Sullivan', party: 'R', phone: '2022243004', phoneDisplay: '(202) 224-3004' },
  ],
  AZ: [
    { name: 'Kyrsten Sinema', party: 'I', phone: '2022244521', phoneDisplay: '(202) 224-4521' },
    { name: 'Mark Kelly', party: 'D', phone: '2022242235', phoneDisplay: '(202) 224-2235' },
  ],
  AR: [
    { name: 'John Boozman', party: 'R', phone: '2022244843', phoneDisplay: '(202) 224-4843' },
    { name: 'Tom Cotton', party: 'R', phone: '2022242353', phoneDisplay: '(202) 224-2353' },
  ],
  CA: [
    { name: 'Alex Padilla', party: 'D', phone: '2022243553', phoneDisplay: '(202) 224-3553' },
    { name: 'Adam Schiff', party: 'D', phone: '2022243841', phoneDisplay: '(202) 224-3841' },
  ],
  CO: [
    { name: 'Michael Bennet', party: 'D', phone: '2022245852', phoneDisplay: '(202) 224-5852' },
    { name: 'John Hickenlooper', party: 'D', phone: '2022245941', phoneDisplay: '(202) 224-5941' },
  ],
  CT: [
    { name: 'Richard Blumenthal', party: 'D', phone: '2022242823', phoneDisplay: '(202) 224-2823' },
    { name: 'Chris Murphy', party: 'D', phone: '2022244041', phoneDisplay: '(202) 224-4041' },
  ],
  DE: [
    { name: 'Tom Carper', party: 'D', phone: '2022242441', phoneDisplay: '(202) 224-2441' },
    { name: 'Chris Coons', party: 'D', phone: '2022245042', phoneDisplay: '(202) 224-5042' },
  ],
  FL: [
    { name: 'Marco Rubio', party: 'R', phone: '2022243041', phoneDisplay: '(202) 224-3041' },
    { name: 'Rick Scott', party: 'R', phone: '2022245274', phoneDisplay: '(202) 224-5274' },
  ],
  GA: [
    { name: 'Jon Ossoff', party: 'D', phone: '2022243521', phoneDisplay: '(202) 224-3521' },
    { name: 'Raphael Warnock', party: 'D', phone: '2022246417', phoneDisplay: '(202) 224-6417' },
  ],
  HI: [
    { name: 'Brian Schatz', party: 'D', phone: '2022243934', phoneDisplay: '(202) 224-3934' },
    { name: 'Mazie Hirono', party: 'D', phone: '2022246361', phoneDisplay: '(202) 224-6361' },
  ],
  ID: [
    { name: 'Mike Crapo', party: 'R', phone: '2022246142', phoneDisplay: '(202) 224-6142' },
    { name: 'Jim Risch', party: 'R', phone: '2022242752', phoneDisplay: '(202) 224-2752' },
  ],
  IL: [
    { name: 'Dick Durbin', party: 'D', phone: '2022242152', phoneDisplay: '(202) 224-2152' },
    { name: 'Tammy Duckworth', party: 'D', phone: '2022242854', phoneDisplay: '(202) 224-2854' },
  ],
  IN: [
    { name: 'Todd Young', party: 'R', phone: '2022245623', phoneDisplay: '(202) 224-5623' },
    { name: 'Jim Banks', party: 'R', phone: '2022244814', phoneDisplay: '(202) 224-4814' },
  ],
  IA: [
    { name: 'Chuck Grassley', party: 'R', phone: '2022243744', phoneDisplay: '(202) 224-3744' },
    { name: 'Joni Ernst', party: 'R', phone: '2022243254', phoneDisplay: '(202) 224-3254' },
  ],
  KS: [
    { name: 'Jerry Moran', party: 'R', phone: '2022246521', phoneDisplay: '(202) 224-6521' },
    { name: 'Roger Marshall', party: 'R', phone: '2022244774', phoneDisplay: '(202) 224-4774' },
  ],
  KY: [
    { name: 'Mitch McConnell', party: 'R', phone: '2022242541', phoneDisplay: '(202) 224-2541' },
    { name: 'Rand Paul', party: 'R', phone: '2022244343', phoneDisplay: '(202) 224-4343' },
  ],
  LA: [
    { name: 'Bill Cassidy', party: 'R', phone: '2022245824', phoneDisplay: '(202) 224-5824' },
    { name: 'John Kennedy', party: 'R', phone: '2022244623', phoneDisplay: '(202) 224-4623' },
  ],
  ME: [
    { name: 'Susan Collins', party: 'R', phone: '2022242523', phoneDisplay: '(202) 224-2523' },
    { name: 'Angus King', party: 'I', phone: '2022245344', phoneDisplay: '(202) 224-5344' },
  ],
  MD: [
    { name: 'Ben Cardin', party: 'D', phone: '2022244524', phoneDisplay: '(202) 224-4524' },
    { name: 'Chris Van Hollen', party: 'D', phone: '2022244654', phoneDisplay: '(202) 224-4654' },
  ],
  MA: [
    { name: 'Elizabeth Warren', party: 'D', phone: '2022244543', phoneDisplay: '(202) 224-4543' },
    { name: 'Ed Markey', party: 'D', phone: '2022242742', phoneDisplay: '(202) 224-2742' },
  ],
  MI: [
    { name: 'Gary Peters', party: 'D', phone: '2022246221', phoneDisplay: '(202) 224-6221' },
    { name: 'Elissa Slotkin', party: 'D', phone: '2022244822', phoneDisplay: '(202) 224-4822' },
  ],
  MN: [
    { name: 'Amy Klobuchar', party: 'D', phone: '2022243244', phoneDisplay: '(202) 224-3244' },
    { name: 'Tina Smith', party: 'D', phone: '2022245641', phoneDisplay: '(202) 224-5641' },
  ],
  MS: [
    { name: 'Roger Wicker', party: 'R', phone: '2022246253', phoneDisplay: '(202) 224-6253' },
    { name: 'Cindy Hyde-Smith', party: 'R', phone: '2022245054', phoneDisplay: '(202) 224-5054' },
  ],
  MO: [
    { name: 'Josh Hawley', party: 'R', phone: '2022246154', phoneDisplay: '(202) 224-6154' },
    { name: 'Eric Schmitt', party: 'R', phone: '2022245721', phoneDisplay: '(202) 224-5721' },
  ],
  MT: [
    { name: 'Steve Daines', party: 'R', phone: '2022242651', phoneDisplay: '(202) 224-2651' },
    { name: 'Tim Sheehy', party: 'R', phone: '2022244644', phoneDisplay: '(202) 224-4644' },
  ],
  NE: [
    { name: 'Deb Fischer', party: 'R', phone: '2022246551', phoneDisplay: '(202) 224-6551' },
    { name: 'Pete Ricketts', party: 'R', phone: '2022244224', phoneDisplay: '(202) 224-4224' },
  ],
  NV: [
    { name: 'Catherine Cortez Masto', party: 'D', phone: '2022243542', phoneDisplay: '(202) 224-3542' },
    { name: 'Jacky Rosen', party: 'D', phone: '2022246244', phoneDisplay: '(202) 224-6244' },
  ],
  NH: [
    { name: 'Jeanne Shaheen', party: 'D', phone: '2022242841', phoneDisplay: '(202) 224-2841' },
    { name: 'Maggie Hassan', party: 'D', phone: '2022243324', phoneDisplay: '(202) 224-3324' },
  ],
  NJ: [
    { name: 'Cory Booker', party: 'D', phone: '2022243224', phoneDisplay: '(202) 224-3224' },
    { name: 'Andy Kim', party: 'D', phone: '2022244744', phoneDisplay: '(202) 224-4744' },
  ],
  NM: [
    { name: 'Martin Heinrich', party: 'D', phone: '2022245521', phoneDisplay: '(202) 224-5521' },
    { name: 'Ben Ray Luján', party: 'D', phone: '2022246621', phoneDisplay: '(202) 224-6621' },
  ],
  NY: [
    { name: 'Chuck Schumer', party: 'D', phone: '2022246542', phoneDisplay: '(202) 224-6542' },
    { name: 'Kirsten Gillibrand', party: 'D', phone: '2022244451', phoneDisplay: '(202) 224-4451' },
  ],
  NC: [
    { name: 'Thom Tillis', party: 'R', phone: '2022246342', phoneDisplay: '(202) 224-6342' },
    { name: 'Ted Budd', party: 'R', phone: '2022243154', phoneDisplay: '(202) 224-3154' },
  ],
  ND: [
    { name: 'John Hoeven', party: 'R', phone: '2022242551', phoneDisplay: '(202) 224-2551' },
    { name: 'Kevin Cramer', party: 'R', phone: '2022246513', phoneDisplay: '(202) 224-6513' },
  ],
  OH: [
    { name: 'Sherrod Brown', party: 'D', phone: '2022242315', phoneDisplay: '(202) 224-2315' },
    { name: 'Bernie Moreno', party: 'R', phone: '2022243353', phoneDisplay: '(202) 224-3353' },
  ],
  OK: [
    { name: 'James Lankford', party: 'R', phone: '2022245754', phoneDisplay: '(202) 224-5754' },
    { name: 'Markwayne Mullin', party: 'R', phone: '2022244721', phoneDisplay: '(202) 224-4721' },
  ],
  OR: [
    { name: 'Ron Wyden', party: 'D', phone: '2022245244', phoneDisplay: '(202) 224-5244' },
    { name: 'Jeff Merkley', party: 'D', phone: '2022243753', phoneDisplay: '(202) 224-3753' },
  ],
  PA: [
    { name: 'Bob Casey', party: 'D', phone: '2022246324', phoneDisplay: '(202) 224-6324' },
    { name: 'John Fetterman', party: 'D', phone: '2022244254', phoneDisplay: '(202) 224-4254' },
  ],
  RI: [
    { name: 'Jack Reed', party: 'D', phone: '2022244642', phoneDisplay: '(202) 224-4642' },
    { name: 'Sheldon Whitehouse', party: 'D', phone: '2022242921', phoneDisplay: '(202) 224-2921' },
  ],
  SC: [
    { name: 'Lindsey Graham', party: 'R', phone: '2022245972', phoneDisplay: '(202) 224-5972' },
    { name: 'Tim Scott', party: 'R', phone: '2022246121', phoneDisplay: '(202) 224-6121' },
  ],
  SD: [
    { name: 'John Thune', party: 'R', phone: '2022242321', phoneDisplay: '(202) 224-2321' },
    { name: 'Mike Rounds', party: 'R', phone: '2022245842', phoneDisplay: '(202) 224-5842' },
  ],
  TN: [
    { name: 'Marsha Blackburn', party: 'R', phone: '2022243344', phoneDisplay: '(202) 224-3344' },
    { name: 'Bill Hagerty', party: 'R', phone: '2022244944', phoneDisplay: '(202) 224-4944' },
  ],
  TX: [
    { name: 'John Cornyn', party: 'R', phone: '2022242934', phoneDisplay: '(202) 224-2934' },
    { name: 'Ted Cruz', party: 'R', phone: '2022245922', phoneDisplay: '(202) 224-5922' },
  ],
  UT: [
    { name: 'Mike Lee', party: 'R', phone: '2022245444', phoneDisplay: '(202) 224-5444' },
    { name: 'Mitt Romney', party: 'R', phone: '2022245251', phoneDisplay: '(202) 224-5251' },
  ],
  VT: [
    { name: 'Bernie Sanders', party: 'I', phone: '2022245141', phoneDisplay: '(202) 224-5141' },
    { name: 'Peter Welch', party: 'D', phone: '2022244242', phoneDisplay: '(202) 224-4242' },
  ],
  VA: [
    { name: 'Mark Warner', party: 'D', phone: '2022242023', phoneDisplay: '(202) 224-2023' },
    { name: 'Tim Kaine', party: 'D', phone: '2022244024', phoneDisplay: '(202) 224-4024' },
  ],
  WA: [
    { name: 'Patty Murray', party: 'D', phone: '2022242621', phoneDisplay: '(202) 224-2621' },
    { name: 'Maria Cantwell', party: 'D', phone: '2022243441', phoneDisplay: '(202) 224-3441' },
  ],
  WV: [
    { name: 'Joe Manchin', party: 'D', phone: '2022243954', phoneDisplay: '(202) 224-3954' },
    { name: 'Shelley Moore Capito', party: 'R', phone: '2022246472', phoneDisplay: '(202) 224-6472' },
  ],
  WI: [
    { name: 'Ron Johnson', party: 'R', phone: '2022245323', phoneDisplay: '(202) 224-5323' },
    { name: 'Tammy Baldwin', party: 'D', phone: '2022245653', phoneDisplay: '(202) 224-5653' },
  ],
  WY: [
    { name: 'John Barrasso', party: 'R', phone: '2022246441', phoneDisplay: '(202) 224-6441' },
    { name: 'Cynthia Lummis', party: 'R', phone: '2022243424', phoneDisplay: '(202) 224-3424' },
  ],
};

// ZIP code prefix to state mapping
const ZIP_TO_STATE: Record<string, string> = {
  '005': 'NY', '006': 'PR', '007': 'PR', '008': 'PR', '009': 'PR',
  '010': 'MA', '011': 'MA', '012': 'MA', '013': 'MA', '014': 'MA', '015': 'MA', '016': 'MA', '017': 'MA', '018': 'MA', '019': 'MA',
  '020': 'MA', '021': 'MA', '022': 'MA', '023': 'MA', '024': 'MA', '025': 'MA', '026': 'MA', '027': 'MA',
  '028': 'RI', '029': 'RI',
  '030': 'NH', '031': 'NH', '032': 'NH', '033': 'NH', '034': 'NH', '035': 'NH', '036': 'NH', '037': 'NH', '038': 'NH',
  '039': 'ME',
  '040': 'ME', '041': 'ME', '042': 'ME', '043': 'ME', '044': 'ME', '045': 'ME', '046': 'ME', '047': 'ME', '048': 'ME', '049': 'ME',
  '050': 'VT', '051': 'VT', '052': 'VT', '053': 'VT', '054': 'VT', '055': 'VT', '056': 'VT', '057': 'VT', '058': 'VT', '059': 'VT',
  '060': 'CT', '061': 'CT', '062': 'CT', '063': 'CT', '064': 'CT', '065': 'CT', '066': 'CT', '067': 'CT', '068': 'CT', '069': 'CT',
  '070': 'NJ', '071': 'NJ', '072': 'NJ', '073': 'NJ', '074': 'NJ', '075': 'NJ', '076': 'NJ', '077': 'NJ', '078': 'NJ', '079': 'NJ',
  '080': 'NJ', '081': 'NJ', '082': 'NJ', '083': 'NJ', '084': 'NJ', '085': 'NJ', '086': 'NJ', '087': 'NJ', '088': 'NJ', '089': 'NJ',
  '100': 'NY', '101': 'NY', '102': 'NY', '103': 'NY', '104': 'NY', '105': 'NY', '106': 'NY', '107': 'NY', '108': 'NY', '109': 'NY',
  '110': 'NY', '111': 'NY', '112': 'NY', '113': 'NY', '114': 'NY', '115': 'NY', '116': 'NY', '117': 'NY', '118': 'NY', '119': 'NY',
  '120': 'NY', '121': 'NY', '122': 'NY', '123': 'NY', '124': 'NY', '125': 'NY', '126': 'NY', '127': 'NY', '128': 'NY', '129': 'NY',
  '130': 'NY', '131': 'NY', '132': 'NY', '133': 'NY', '134': 'NY', '135': 'NY', '136': 'NY', '137': 'NY', '138': 'NY', '139': 'NY',
  '140': 'NY', '141': 'NY', '142': 'NY', '143': 'NY', '144': 'NY', '145': 'NY', '146': 'NY', '147': 'NY', '148': 'NY', '149': 'NY',
  '150': 'PA', '151': 'PA', '152': 'PA', '153': 'PA', '154': 'PA', '155': 'PA', '156': 'PA', '157': 'PA', '158': 'PA', '159': 'PA',
  '160': 'PA', '161': 'PA', '162': 'PA', '163': 'PA', '164': 'PA', '165': 'PA', '166': 'PA', '167': 'PA', '168': 'PA', '169': 'PA',
  '170': 'PA', '171': 'PA', '172': 'PA', '173': 'PA', '174': 'PA', '175': 'PA', '176': 'PA', '177': 'PA', '178': 'PA', '179': 'PA',
  '180': 'PA', '181': 'PA', '182': 'PA', '183': 'PA', '184': 'PA', '185': 'PA', '186': 'PA', '187': 'PA', '188': 'PA', '189': 'PA',
  '190': 'PA', '191': 'PA', '192': 'PA', '193': 'PA', '194': 'PA', '195': 'PA', '196': 'PA',
  '197': 'DE', '198': 'DE', '199': 'DE',
  '200': 'DC', '201': 'VA', '202': 'DC', '203': 'DC', '204': 'DC', '205': 'DC',
  '206': 'MD', '207': 'MD', '208': 'MD', '209': 'MD',
  '210': 'MD', '211': 'MD', '212': 'MD', '214': 'MD', '215': 'MD', '216': 'MD', '217': 'MD', '218': 'MD', '219': 'MD',
  '220': 'VA', '221': 'VA', '222': 'VA', '223': 'VA', '224': 'VA', '225': 'VA', '226': 'VA', '227': 'VA', '228': 'VA', '229': 'VA',
  '230': 'VA', '231': 'VA', '232': 'VA', '233': 'VA', '234': 'VA', '235': 'VA', '236': 'VA', '237': 'VA', '238': 'VA', '239': 'VA',
  '240': 'VA', '241': 'VA', '242': 'VA', '243': 'VA', '244': 'VA', '245': 'VA', '246': 'VA',
  '247': 'WV', '248': 'WV', '249': 'WV',
  '250': 'WV', '251': 'WV', '252': 'WV', '253': 'WV', '254': 'WV', '255': 'WV', '256': 'WV', '257': 'WV', '258': 'WV', '259': 'WV',
  '260': 'WV', '261': 'WV', '262': 'WV', '263': 'WV', '264': 'WV', '265': 'WV', '266': 'WV', '267': 'WV', '268': 'WV',
  '270': 'NC', '271': 'NC', '272': 'NC', '273': 'NC', '274': 'NC', '275': 'NC', '276': 'NC', '277': 'NC', '278': 'NC', '279': 'NC',
  '280': 'NC', '281': 'NC', '282': 'NC', '283': 'NC', '284': 'NC', '285': 'NC', '286': 'NC', '287': 'NC', '288': 'NC', '289': 'NC',
  '290': 'SC', '291': 'SC', '292': 'SC', '293': 'SC', '294': 'SC', '295': 'SC', '296': 'SC', '297': 'SC', '298': 'SC', '299': 'SC',
  '300': 'GA', '301': 'GA', '302': 'GA', '303': 'GA', '304': 'GA', '305': 'GA', '306': 'GA', '307': 'GA', '308': 'GA', '309': 'GA',
  '310': 'GA', '311': 'GA', '312': 'GA', '313': 'GA', '314': 'GA', '315': 'GA', '316': 'GA', '317': 'GA', '318': 'GA', '319': 'GA',
  '320': 'FL', '321': 'FL', '322': 'FL', '323': 'FL', '324': 'FL', '325': 'FL', '326': 'FL', '327': 'FL', '328': 'FL', '329': 'FL',
  '330': 'FL', '331': 'FL', '332': 'FL', '333': 'FL', '334': 'FL', '335': 'FL', '336': 'FL', '337': 'FL', '338': 'FL', '339': 'FL',
  '340': 'FL', '341': 'FL', '342': 'FL', '344': 'FL', '346': 'FL', '347': 'FL', '349': 'FL',
  '350': 'AL', '351': 'AL', '352': 'AL', '354': 'AL', '355': 'AL', '356': 'AL', '357': 'AL', '358': 'AL', '359': 'AL',
  '360': 'AL', '361': 'AL', '362': 'AL', '363': 'AL', '364': 'AL', '365': 'AL', '366': 'AL', '367': 'AL', '368': 'AL', '369': 'AL',
  '370': 'TN', '371': 'TN', '372': 'TN', '373': 'TN', '374': 'TN', '375': 'TN', '376': 'TN', '377': 'TN', '378': 'TN', '379': 'TN',
  '380': 'TN', '381': 'TN', '382': 'TN', '383': 'TN', '384': 'TN', '385': 'TN',
  '386': 'MS', '387': 'MS', '388': 'MS', '389': 'MS',
  '390': 'MS', '391': 'MS', '392': 'MS', '393': 'MS', '394': 'MS', '395': 'MS', '396': 'MS', '397': 'MS',
  '398': 'GA',
  '400': 'KY', '401': 'KY', '402': 'KY', '403': 'KY', '404': 'KY', '405': 'KY', '406': 'KY', '407': 'KY', '408': 'KY', '409': 'KY',
  '410': 'KY', '411': 'KY', '412': 'KY', '413': 'KY', '414': 'KY', '415': 'KY', '416': 'KY', '417': 'KY', '418': 'KY',
  '420': 'KY', '421': 'KY', '422': 'KY', '423': 'KY', '424': 'KY', '425': 'KY', '426': 'KY', '427': 'KY',
  '430': 'OH', '431': 'OH', '432': 'OH', '433': 'OH', '434': 'OH', '435': 'OH', '436': 'OH', '437': 'OH', '438': 'OH', '439': 'OH',
  '440': 'OH', '441': 'OH', '442': 'OH', '443': 'OH', '444': 'OH', '445': 'OH', '446': 'OH', '447': 'OH', '448': 'OH', '449': 'OH',
  '450': 'OH', '451': 'OH', '452': 'OH', '453': 'OH', '454': 'OH', '455': 'OH', '456': 'OH', '457': 'OH', '458': 'OH', '459': 'OH',
  '460': 'IN', '461': 'IN', '462': 'IN', '463': 'IN', '464': 'IN', '465': 'IN', '466': 'IN', '467': 'IN', '468': 'IN', '469': 'IN',
  '470': 'IN', '471': 'IN', '472': 'IN', '473': 'IN', '474': 'IN', '475': 'IN', '476': 'IN', '477': 'IN', '478': 'IN', '479': 'IN',
  '480': 'MI', '481': 'MI', '482': 'MI', '483': 'MI', '484': 'MI', '485': 'MI', '486': 'MI', '487': 'MI', '488': 'MI', '489': 'MI',
  '490': 'MI', '491': 'MI', '492': 'MI', '493': 'MI', '494': 'MI', '495': 'MI', '496': 'MI', '497': 'MI', '498': 'MI', '499': 'MI',
  '500': 'IA', '501': 'IA', '502': 'IA', '503': 'IA', '504': 'IA', '505': 'IA', '506': 'IA', '507': 'IA', '508': 'IA', '509': 'IA',
  '510': 'IA', '511': 'IA', '512': 'IA', '513': 'IA', '514': 'IA', '515': 'IA', '516': 'IA',
  '520': 'IA', '521': 'IA', '522': 'IA', '523': 'IA', '524': 'IA', '525': 'IA', '526': 'IA', '527': 'IA', '528': 'IA',
  '530': 'WI', '531': 'WI', '532': 'WI', '534': 'WI', '535': 'WI', '537': 'WI', '538': 'WI', '539': 'WI',
  '540': 'WI', '541': 'WI', '542': 'WI', '543': 'WI', '544': 'WI', '545': 'WI', '546': 'WI', '547': 'WI', '548': 'WI', '549': 'WI',
  '550': 'MN', '551': 'MN', '553': 'MN', '554': 'MN', '555': 'MN', '556': 'MN', '557': 'MN', '558': 'MN', '559': 'MN',
  '560': 'MN', '561': 'MN', '562': 'MN', '563': 'MN', '564': 'MN', '565': 'MN', '566': 'MN', '567': 'MN',
  '570': 'SD', '571': 'SD', '572': 'SD', '573': 'SD', '574': 'SD', '575': 'SD', '576': 'SD', '577': 'SD',
  '580': 'ND', '581': 'ND', '582': 'ND', '583': 'ND', '584': 'ND', '585': 'ND', '586': 'ND', '587': 'ND', '588': 'ND',
  '590': 'MT', '591': 'MT', '592': 'MT', '593': 'MT', '594': 'MT', '595': 'MT', '596': 'MT', '597': 'MT', '598': 'MT', '599': 'MT',
  '600': 'IL', '601': 'IL', '602': 'IL', '603': 'IL', '604': 'IL', '605': 'IL', '606': 'IL', '607': 'IL', '608': 'IL', '609': 'IL',
  '610': 'IL', '611': 'IL', '612': 'IL', '613': 'IL', '614': 'IL', '615': 'IL', '616': 'IL', '617': 'IL', '618': 'IL', '619': 'IL',
  '620': 'IL', '622': 'IL', '623': 'IL', '624': 'IL', '625': 'IL', '626': 'IL', '627': 'IL', '628': 'IL', '629': 'IL',
  '630': 'MO', '631': 'MO', '633': 'MO', '634': 'MO', '635': 'MO', '636': 'MO', '637': 'MO', '638': 'MO', '639': 'MO',
  '640': 'MO', '641': 'MO', '644': 'MO', '645': 'MO', '646': 'MO', '647': 'MO', '648': 'MO', '649': 'MO',
  '650': 'MO', '651': 'MO', '652': 'MO', '653': 'MO', '654': 'MO', '655': 'MO', '656': 'MO', '657': 'MO', '658': 'MO',
  '660': 'KS', '661': 'KS', '662': 'KS', '664': 'KS', '665': 'KS', '666': 'KS', '667': 'KS', '668': 'KS', '669': 'KS',
  '670': 'KS', '671': 'KS', '672': 'KS', '673': 'KS', '674': 'KS', '675': 'KS', '676': 'KS', '677': 'KS', '678': 'KS', '679': 'KS',
  '680': 'NE', '681': 'NE', '683': 'NE', '684': 'NE', '685': 'NE', '686': 'NE', '687': 'NE', '688': 'NE', '689': 'NE',
  '690': 'NE', '691': 'NE', '692': 'NE', '693': 'NE',
  '700': 'LA', '701': 'LA', '703': 'LA', '704': 'LA', '705': 'LA', '706': 'LA', '707': 'LA', '708': 'LA',
  '710': 'LA', '711': 'LA', '712': 'LA', '713': 'LA', '714': 'LA',
  '716': 'AR', '717': 'AR', '718': 'AR', '719': 'AR',
  '720': 'AR', '721': 'AR', '722': 'AR', '723': 'AR', '724': 'AR', '725': 'AR', '726': 'AR', '727': 'AR', '728': 'AR', '729': 'AR',
  '730': 'OK', '731': 'OK', '733': 'OK', '734': 'OK', '735': 'OK', '736': 'OK', '737': 'OK', '738': 'OK', '739': 'OK',
  '740': 'OK', '741': 'OK', '743': 'OK', '744': 'OK', '745': 'OK', '746': 'OK', '747': 'OK', '748': 'OK', '749': 'OK',
  '750': 'TX', '751': 'TX', '752': 'TX', '753': 'TX', '754': 'TX', '755': 'TX', '756': 'TX', '757': 'TX', '758': 'TX', '759': 'TX',
  '760': 'TX', '761': 'TX', '762': 'TX', '763': 'TX', '764': 'TX', '765': 'TX', '766': 'TX', '767': 'TX', '768': 'TX', '769': 'TX',
  '770': 'TX', '771': 'TX', '772': 'TX', '773': 'TX', '774': 'TX', '775': 'TX', '776': 'TX', '777': 'TX', '778': 'TX', '779': 'TX',
  '780': 'TX', '781': 'TX', '782': 'TX', '783': 'TX', '784': 'TX', '785': 'TX', '786': 'TX', '787': 'TX', '788': 'TX', '789': 'TX',
  '790': 'TX', '791': 'TX', '792': 'TX', '793': 'TX', '794': 'TX', '795': 'TX', '796': 'TX', '797': 'TX', '798': 'TX', '799': 'TX',
  '800': 'CO', '801': 'CO', '802': 'CO', '803': 'CO', '804': 'CO', '805': 'CO', '806': 'CO', '807': 'CO', '808': 'CO', '809': 'CO',
  '810': 'CO', '811': 'CO', '812': 'CO', '813': 'CO', '814': 'CO', '815': 'CO', '816': 'CO',
  '820': 'WY', '821': 'WY', '822': 'WY', '823': 'WY', '824': 'WY', '825': 'WY', '826': 'WY', '827': 'WY', '828': 'WY', '829': 'WY',
  '830': 'WY', '831': 'WY',
  '832': 'ID', '833': 'ID', '834': 'ID', '835': 'ID', '836': 'ID', '837': 'ID', '838': 'ID',
  '840': 'UT', '841': 'UT', '842': 'UT', '843': 'UT', '844': 'UT', '845': 'UT', '846': 'UT', '847': 'UT',
  '850': 'AZ', '851': 'AZ', '852': 'AZ', '853': 'AZ', '855': 'AZ', '856': 'AZ', '857': 'AZ',
  '859': 'AZ', '860': 'AZ', '863': 'AZ', '864': 'AZ', '865': 'AZ',
  '870': 'NM', '871': 'NM', '872': 'NM', '873': 'NM', '874': 'NM', '875': 'NM', '877': 'NM', '878': 'NM', '879': 'NM',
  '880': 'NM', '881': 'NM', '882': 'NM', '883': 'NM', '884': 'NM',
  '889': 'NV', '890': 'NV', '891': 'NV', '893': 'NV', '894': 'NV', '895': 'NV', '897': 'NV', '898': 'NV',
  '900': 'CA', '901': 'CA', '902': 'CA', '903': 'CA', '904': 'CA', '905': 'CA', '906': 'CA', '907': 'CA', '908': 'CA',
  '910': 'CA', '911': 'CA', '912': 'CA', '913': 'CA', '914': 'CA', '915': 'CA', '916': 'CA', '917': 'CA', '918': 'CA',
  '919': 'CA', '920': 'CA', '921': 'CA', '922': 'CA', '923': 'CA', '924': 'CA', '925': 'CA', '926': 'CA', '927': 'CA',
  '928': 'CA', '930': 'CA', '931': 'CA', '932': 'CA', '933': 'CA', '934': 'CA', '935': 'CA', '936': 'CA', '937': 'CA',
  '938': 'CA', '939': 'CA', '940': 'CA', '941': 'CA', '942': 'CA', '943': 'CA', '944': 'CA', '945': 'CA', '946': 'CA',
  '947': 'CA', '948': 'CA', '949': 'CA', '950': 'CA', '951': 'CA', '952': 'CA', '953': 'CA', '954': 'CA', '955': 'CA',
  '956': 'CA', '957': 'CA', '958': 'CA', '959': 'CA', '960': 'CA', '961': 'CA',
  '967': 'HI', '968': 'HI',
  '969': 'GU',
  '970': 'OR', '971': 'OR', '972': 'OR', '973': 'OR', '974': 'OR', '975': 'OR', '976': 'OR', '977': 'OR', '978': 'OR', '979': 'OR',
  '980': 'WA', '981': 'WA', '982': 'WA', '983': 'WA', '984': 'WA', '985': 'WA', '986': 'WA', '988': 'WA', '989': 'WA',
  '990': 'WA', '991': 'WA', '992': 'WA', '993': 'WA', '994': 'WA',
  '995': 'AK', '996': 'AK', '997': 'AK', '998': 'AK', '999': 'AK',
};

// Shorter, targeted scripts for House vs Senate
const SCRIPTS = {
  house: {
    title: 'Oppose ICE Funding',
    script: `Hi, I'm [NAME], a constituent from [CITY]. I'm calling to urge the Representative to oppose any DHS funding bill that increases ICE enforcement. The House controls the budget - please vote NO on expanded ICE funding. Thank you.`,
    emailSubject: 'Oppose ICE Funding in DHS Budget',
    emailBody: `Dear Representative,\n\nAs your constituent, I urge you to oppose any DHS funding bill that expands ICE enforcement operations.\n\nThe House controls the federal budget. Please use that power to protect our communities by voting NO on increased ICE funding.\n\nThank you for your time.\n\nSincerely,\n[Your Name]\n[Your Address]`,
  },
  senate: {
    title: 'Protect Communities from ICE',
    script: `Hi, I'm [NAME], a constituent from [CITY]. I'm calling to urge the Senator to oppose ICE enforcement in sensitive locations and support immigrant families. Please demand accountability from ICE and protect due process. Thank you.`,
    emailSubject: 'Protect Our Community from ICE Enforcement',
    emailBody: `Dear Senator,\n\nAs your constituent, I urge you to:\n\n• Oppose ICE enforcement in sensitive locations (schools, hospitals, courthouses)\n• Support legislation protecting immigrant families\n• Demand accountability and transparency from ICE\n\nOur community is stronger when families can stay together.\n\nThank you for your time.\n\nSincerely,\n[Your Name]\n[Your Address]`,
  },
};

function getStateFromZip(zip: string): string | null {
  const prefix = zip.substring(0, 3);
  return ZIP_TO_STATE[prefix] || null;
}

function getSenators(zip: string): Representative[] {
  const state = getStateFromZip(zip);
  if (!state || !SENATORS[state]) {
    return [];
  }
  return SENATORS[state].map(s => ({
    ...s,
    role: 'U.S. Senator',
    type: 'senator' as const,
  }));
}

// Fetch House Representatives from Google Civic API
async function getHouseReps(zip: string): Promise<Representative[]> {
  const apiKey = process.env.GOOGLE_CIVIC_API_KEY;

  if (!apiKey) {
    // No API key - return empty (senators-only mode)
    return [];
  }

  try {
    // Use full address format for better geocoding
    const address = encodeURIComponent(zip);
    const response = await fetch(
      `https://www.googleapis.com/civicinfo/v2/representatives?address=${address}&key=${apiKey}`,
      { next: { revalidate: 86400 } } // Cache for 24 hours
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Civic API error:', response.status, errorText);
      return [];
    }

    const data = await response.json();
    console.log('Civic API response for', zip, ':', JSON.stringify(data).substring(0, 500));

    if (!data.officials || !Array.isArray(data.officials) || !data.offices) {
      console.error('No officials in response:', data);
      return [];
    }

    // Find House rep offices and their official indices
    const houseReps: Representative[] = [];
    for (const office of data.offices) {
      if (office.name?.includes('United States House') ||
          office.name?.includes('U.S. Representative') ||
          office.roles?.includes('legislatorLowerBody')) {
        for (const idx of office.officialIndices || []) {
          const official = data.officials[idx];
          if (official) {
            const phone = official.phones?.[0]?.replace(/\D/g, '') || '';
            const phoneDisplay = official.phones?.[0] || 'No phone listed';
            const party = official.party?.charAt(0) || '?';
            houseReps.push({
              name: official.name,
              party,
              phone,
              phoneDisplay,
              role: 'U.S. Representative',
              type: 'representative' as const,
            });
          }
        }
      }
    }
    return houseReps;
  } catch (error) {
    console.error('Error fetching house reps:', error);
    return [];
  }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Call Your Rep | CallNow',
    description: 'Make your voice heard. Call your representatives about ICE enforcement in your community.',
    openGraph: {
      title: 'Call Your Rep | CallNow',
      description: 'Make your voice heard. Takes 2 minutes.',
    },
  };
}

export default async function CallPage({ params }: { params: Promise<{ zip: string }> }) {
  const { zip } = await params;
  const senators = getSenators(zip);
  const houseReps = await getHouseReps(zip);
  const allReps = [...senators, ...houseReps];
  const state = getStateFromZip(zip);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="px-4 py-6 border-b border-slate-700">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold">CallNow</h1>
          <p className="text-slate-400 text-sm">Your voice matters. Make it heard.</p>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Who to call - explanation */}
        <section className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl border border-amber-800 p-4">
          <h3 className="font-semibold text-amber-200 mb-2">Who should you call?</h3>
          <p className="text-sm text-slate-300 mb-2">
            <strong className="text-amber-200">Both matter</strong>, but your <strong>House Representative</strong> has the most direct impact on ICE funding. The House controls the budget for DHS and ICE.
          </p>
          <p className="text-sm text-slate-300">
            <strong className="text-amber-200">Our recommendation:</strong> Call your House Rep first, then call both Senators. Takes about 5 minutes total.
          </p>
        </section>

        {/* Representatives */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-slate-300">
            Your Representatives {state ? `(${state})` : `(ZIP: ${zip})`}
          </h2>
          <div className="space-y-3">
            {allReps.length > 0 ? (
              <>
                {/* House Reps first (most impact) */}
                {houseReps.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-amber-400 uppercase tracking-wide mb-2 font-semibold">House Representative (Call First)</p>
                    {houseReps.map((rep) => (
                      <a
                        key={rep.phone}
                        href={`tel:${rep.phone}`}
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-900/20 to-slate-800 rounded-xl border border-amber-700 hover:border-amber-500 transition-all active:scale-98"
                      >
                        <div className="w-14 h-14 rounded-full bg-slate-700 overflow-hidden flex-shrink-0 flex items-center justify-center text-2xl">
                          {rep.party === 'D' ? '🔵' : rep.party === 'R' ? '🔴' : '⚪'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold">{rep.name}</div>
                          <div className="text-sm text-slate-400">{rep.role} ({rep.party})</div>
                          <div className="text-blue-400 font-mono text-sm">{rep.phoneDisplay}</div>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
                {/* Senators */}
                {senators.length > 0 && (
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-2 font-semibold">U.S. Senators</p>
                    {senators.map((senator) => (
                      <a
                        key={senator.phone}
                        href={`tel:${senator.phone}`}
                        className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-750 transition-all active:scale-98 mb-3"
                      >
                        <div className="w-14 h-14 rounded-full bg-slate-700 overflow-hidden flex-shrink-0 flex items-center justify-center text-2xl">
                          {senator.party === 'D' ? '🔵' : senator.party === 'R' ? '🔴' : '⚪'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold">{senator.name}</div>
                          <div className="text-sm text-slate-400">{senator.role} ({senator.party})</div>
                          <div className="text-blue-400 font-mono text-sm">{senator.phoneDisplay}</div>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 text-center">
                <p className="text-slate-400">No representatives found for ZIP code {zip}</p>
                <p className="text-sm text-slate-500 mt-2">Please check your ZIP code and try again.</p>
              </div>
            )}
          </div>
        </section>

        {/* House Script */}
        {houseReps.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold mb-3 text-amber-300">Script for House Rep</h2>
            <div className="bg-slate-800 rounded-xl border border-amber-700 p-4 space-y-4">
              <div className="bg-amber-900/30 border border-amber-800 rounded-lg p-3">
                <p className="text-amber-200 font-medium">{SCRIPTS.house.title}</p>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                {SCRIPTS.house.script}
              </p>
              <a
                href={`mailto:?subject=${encodeURIComponent(SCRIPTS.house.emailSubject)}&body=${encodeURIComponent(SCRIPTS.house.emailBody)}`}
                className="flex items-center justify-center gap-2 w-full p-3 bg-amber-600 hover:bg-amber-500 rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email Instead
              </a>
            </div>
          </section>
        )}

        {/* Senate Script */}
        {senators.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold mb-3 text-slate-300">Script for Senators</h2>
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 space-y-4">
              <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-3">
                <p className="text-blue-200 font-medium">{SCRIPTS.senate.title}</p>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                {SCRIPTS.senate.script}
              </p>
              <a
                href={`mailto:?subject=${encodeURIComponent(SCRIPTS.senate.emailSubject)}&body=${encodeURIComponent(SCRIPTS.senate.emailBody)}`}
                className="flex items-center justify-center gap-2 w-full p-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email Instead
              </a>
            </div>
          </section>
        )}

        {/* Tips */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-slate-300">Tips for Your Call</h2>
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>Be polite but firm - staffers tally constituent calls</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>State your name and that you&apos;re a constituent</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>You&apos;ll likely speak to a staffer, not your rep</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>It&apos;s OK to read from the script - they expect it</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>Call takes about 2 minutes</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Share */}
        <section className="pb-8">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl border border-blue-800 p-4 text-center">
            <p className="font-semibold mb-2">Made your call?</p>
            <p className="text-sm text-slate-300 mb-3">Share this with others. Every call counts.</p>
            <p className="text-blue-400 font-mono text-sm">callnow-iota.vercel.app</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 px-4 py-6">
        <div className="max-w-lg mx-auto text-center text-xs text-slate-500">
          <p>CallNow is an open-source project.</p>
          <p className="mt-1">One call per person. Real voices, real impact.</p>
        </div>
      </footer>
    </div>
  );
}
