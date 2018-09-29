const workers = [
    {
        id:1,
        name:'Rayner Ockwell',
        gender:'Male',
        contactInformation:'7698580140',
        date:'2018-09-02T09:15:03Z',
        salary:4591,
        position:'Sales Representative'
    },
    {
        id:2,
        name:'Hewett Jorczyk',
        gender:'Male',
        contactInformation:'9322112620',
        date:'2018-09-02T20:38:49Z',
        salary:1037,
        position:'Actuary'
    },
    {
        id:3,
        name:'Pippo Bartlet',
        gender:'Male',
        contactInformation:'8591439393',
        date:'2018-09-27T05:14:19Z',
        salary:2391,
        position:'Occupational Therapist'
    },
    {
        id:4,
        name:'Bil Smoote',
        gender:'Male',
        contactInformation:'3824148567',
        date:'2018-09-08T23:15:56Z',
        salary:3817,
        position:'Senior Sales Associate'
    },
    {
        id:5,
        name:'Lillis Puckring',
        gender:'Female',
        contactInformation:'6505941052',
        date:'2018-09-14T12:47:29Z',
        salary:4134,
        position:'Sales Representative'
    },
    {
        id:6,
        name:'Drew Wardale',
        gender:'Male',
        contactInformation:'7671113763',
        date:'2018-09-20T08:15:13Z',
        salary:2417,
        position:'Help Desk Operator'
    },
    {
        id:7,
        name:'Kathrine Le Prevost',
        gender:'Female',
        contactInformation:'9627952822',
        date:'2018-09-23T14:41:06Z',
        salary:4922,
        position:'Help Desk Technician'
    },
    {
        id:8,
        name:'Reena Baldock',
        gender:'Female',
        contactInformation:'8483697850',
        date:'2018-09-24T14:12:05Z',
        salary:3286,
        position:'Speech Pathologist'
    },
    {
        id:9,
        name:'Maximo Paliser',
        gender:'Male',
        contactInformation:'9536367151',
        date:'2018-09-06T02:49:32Z',
        salary:3144,
        position:'Account Executive'
    },
    {
        id:10,
        name:'Genvieve Drawmer',
        gender:'Female',
        contactInformation:'1113715860',
        date:'2018-09-10T01:08:44Z',
        salary:363,
        position:'Financial Advisor'
    },
    {
        id:11,
        name:'Darrin Dowden',
        gender:'Male',
        contactInformation:'9576256176',
        date:'2018-09-12T07:53:55Z',
        salary:2400,
        position:'Engineer III'
    },
    {
        id:12,
        name:'Egan Romero',
        gender:'Male',
        contactInformation:'6125842572',
        date:'2018-09-21T17:39:27Z',
        salary:1688,
        position:'Accountant I'
    },
    {
        id:13,
        name:'Hillier Worland',
        gender:'Male',
        contactInformation:'7218414782',
        date:'2018-09-27T19:00:12Z',
        salary:4648,
        position:'Analyst Programmer'
    },
    {
        id:14,
        name:'Luci de Najera',
        gender:'Female',
        contactInformation:'1961483277',
        date:'2018-09-20T15:41:31Z',
        salary:2232,
        position:'Chief Design Engineer'
    },
    {
        id:15,
        name:'Lorrie Naisby',
        gender:'Female',
        contactInformation:'5754831250',
        date:'2018-09-09T16:20:35Z',
        salary:1280,
        position:'Software Test Engineer IV'
    },
    {
        id:16,
        name:'Darya Frammingham',
        gender:'Female',
        contactInformation:'7728690256',
        date:'2018-09-24T12:47:22Z',
        salary:2352,
        position:'Data Coordiator'
    },
    {
        id:17,
        name:'Bendicty Ovett',
        gender:'Male',
        contactInformation:'6106379596',
        date:'2018-09-04T18:36:31Z',
        salary:2060,
        position:'Junior Executive'
    },
    {
        id:18,
        name:'Donna Blamphin',
        gender:'Female',
        contactInformation:'5647462897',
        date:'2018-09-04T14:58:06Z',
        salary:261,
        position:'Safety Technician I'
    },
    {
        id:19,
        name:'Lukas Dillicate',
        gender:'Male',
        contactInformation:'6547450932',
        date:'2018-09-17T01:15:25Z',
        salary:160,
        position:'Human Resources Assistant IV'
    },
    {
        id:20,
        name:'Jacinta Wreak',
        gender:'Female',
        contactInformation:'8815952074',
        date:'2018-09-01T19:45:53Z',
        salary:3567,
        position:'Help Desk Technician'
    },
    {
        id:21,
        name:'Ariel Ballister',
        gender:'Female',
        contactInformation:'7776297091',
        date:'2018-09-20T19:30:16Z',
        salary:4051,
        position:'Electrical Engineer'
    },
    {
        id:22,
        name:'Adara Bishopp',
        gender:'Female',
        contactInformation:'7147916624',
        date:'2018-09-09T17:26:47Z',
        salary:3669,
        position:'Associate Professor'
    },
    {
        id:23,
        name:'Pamelina Paulley',
        gender:'Female',
        contactInformation:'4663520770',
        date:'2018-09-24T17:23:11Z',
        salary:989,
        position:'Staff Accountant III'
    },
    {
        id:24,
        name:'Dickie Peare',
        gender:'Male',
        contactInformation:'7412051216',
        date:'2018-09-10T03:20:13Z',
        salary:107,
        position:'Nurse'
    },
    {
        id:25,
        name:'Lynde Greathead',
        gender:'Female',
        contactInformation:'7205998104',
        date:'2018-09-06T00:07:56Z',
        salary:181,
        position:'Executive Secretary'
    },
    {
        id:26,
        name:'Melody Hentze',
        gender:'Female',
        contactInformation:'3172032378',
        date:'2018-09-01T18:41:17Z',
        salary:4131,
        position:'VP Marketing'
    },
    {
        id:27,
        name:'Gregoor Ruddick',
        gender:'Male',
        contactInformation:'4304096656',
        date:'2018-09-03T21:36:32Z',
        salary:742,
        position:'Staff Accountant III'
    },
    {
        id:28,
        name:'Annalee Print',
        gender:'Female',
        contactInformation:'7095556870',
        date:'2018-09-12T21:24:03Z',
        salary:2227,
        position:'Design Engineer'
    },
    {
        id:29,
        name:'Steve Hallgath',
        gender:'Male',
        contactInformation:'4557853586',
        date:'2018-09-13T10:02:26Z',
        salary:2694,
        position:'Internal Auditor'
    },
    {
        id:30,
        name:'Milly Domeny',
        gender:'Female',
        contactInformation:'4575891279',
        date:'2018-09-06T09:27:19Z',
        salary:1599,
        position:'Project Manager'
    },
    {
        id:31,
        name:'Fairlie Ganning',
        gender:'Male',
        contactInformation:'2115035291',
        date:'2018-09-22T14:59:01Z',
        salary:1049,
        position:'Geologist I'
    },
    {
        id:32,
        name:'Nicolas Dugdale',
        gender:'Male',
        contactInformation:'9168842629',
        date:'2018-09-25T12:22:25Z',
        salary:1155,
        position:'Data Coordiator'
    },
    {
        id:33,
        name:'Chrisse Mulchrone',
        gender:'Male',
        contactInformation:'4341220754',
        date:'2018-09-07T20:02:19Z',
        salary:4400,
        position:'Software Consultant'
    },
    {
        id:34,
        name:'Sandie Sudlow',
        gender:'Female',
        contactInformation:'9093280477',
        date:'2018-09-16T03:58:48Z',
        salary:2518,
        position:'Marketing Assistant'
    },
    {
        id:35,
        name:'Yance Jaggi',
        gender:'Male',
        contactInformation:'1423727805',
        date:'2018-09-11T05:55:29Z',
        salary:2102,
        position:'Senior Developer'
    },
    {
        id:36,
        name:'Elwood Doddemeade',
        gender:'Male',
        contactInformation:'9073828706',
        date:'2018-09-14T13:20:11Z',
        salary:4781,
        position:'Help Desk Technician'
    },
    {
        id:37,
        name:'Reuven Guilford',
        gender:'Male',
        contactInformation:'9619019289',
        date:'2018-09-20T03:46:32Z',
        salary:4984,
        position:'VP Sales'
    },
    {
        id:38,
        name:'Timotheus Arundel',
        gender:'Male',
        contactInformation:'8151138096',
        date:'2018-09-21T21:06:37Z',
        salary:1617,
        position:'Safety Technician IV'
    },
    {
        id:39,
        name:'Rosalinde Fontanet',
        gender:'Female',
        contactInformation:'3283705588',
        date:'2018-09-26T02:12:36Z',
        salary:975,
        position:'Geological Engineer'
    },
    {
        id:40,
        name:'Allen Glaister',
        gender:'Male',
        contactInformation:'2763686600',
        date:'2018-09-08T18:15:29Z',
        salary:4947,
        position:'Legal Assistant'
    },
    {
        id:41,
        name:'Graeme Toy',
        gender:'Male',
        contactInformation:'8153556000',
        date:'2018-09-20T14:18:09Z',
        salary:2370,
        position:'Marketing Assistant'
    },
    {
        id:42,
        name:'Lesley Odney',
        gender:'Male',
        contactInformation:'9662201865',
        date:'2018-09-02T15:55:59Z',
        salary:3212,
        position:'Compensation Analyst'
    },
    {
        id:43,
        name:'Sandy Bolzmann',
        gender:'Female',
        contactInformation:'4185836571',
        date:'2018-09-08T12:10:19Z',
        salary:1231,
        position:'Electrical Engineer'
    },
    {
        id:44,
        name:'Hermon Bambery',
        gender:'Male',
        contactInformation:'7976206820',
        date:'2018-09-16T00:29:02Z',
        salary:3111,
        position:'Senior Cost Accountant'
    },
    {
        id:45,
        name:'Gusti Snoddin',
        gender:'Female',
        contactInformation:'1037302325',
        date:'2018-09-20T05:47:17Z',
        salary:3994,
        position:'Help Desk Operator'
    },
    {
        id:46,
        name:'Eben Housecraft',
        gender:'Male',
        contactInformation:'4864633243',
        date:'2018-09-16T14:41:23Z',
        salary:4262,
        position:'Sales Associate'
    },
    {
        id:47,
        name:'Flinn Leal',
        gender:'Male',
        contactInformation:'8584917660',
        date:'2018-09-27T02:22:07Z',
        salary:268,
        position:'Business Systems Development Analyst'
    },
    {
        id:48,
        name:'Taddeo Saltern',
        gender:'Male',
        contactInformation:'1007095794',
        date:'2018-09-20T08:37:59Z',
        salary:1009,
        position:'Executive Secretary'
    },
    {
        id:49,
        name:'Erl Ferraresi',
        gender:'Male',
        contactInformation:'1588465425',
        date:'2018-09-17T03:38:07Z',
        salary:3092,
        position:'Geological Engineer'
    },
    {
        id:50,
        name:'Tirrell Auchterlonie',
        gender:'Male',
        contactInformation:'6758774991',
        date:'2018-09-27T16:24:14Z',
        salary:1238,
        position:'Account Representative III'
    }
];

export { workers };