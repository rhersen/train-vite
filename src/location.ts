const locations: Record<string, string> = {
  Abb: "Abborrträsk",
  Alä: "Almnäs",
  Alv: "Astrid Lindgrens värld",
  Am: "Almedal",
  Amk: "Arnemark",
  Any: "Aneby",
  An: "Arvån",
  Anö: "Anundsjö",
  Ap: "Aspeå",
  Apd: "Aplared",
  Apn: "Aspen",
  Ara: "Arnäsvall",
  Arnc: "Arlanda",
  Apt: "Aptas",
  Ar: "Arvika",
  Arb: "Arboga",
  Arns: "Arlanda S",
  Asd: "Aspedalen",
  Arnn: "Arlanda N",
  Atp: "Attarp",
  Asb: "Assberg",
  Arne: "Arlanda nedre",
  Av: "Alvesta",
  Ava: "Avaviken",
  Avk: "Almvik",
  Avky: "Avesta Krylbo",
  Ax: "Axmarby",
  Aä: "Alväng",
  Ay: "Alby",
  B: "Björnlunda",
  Baa: "Barkåkra",
  Bad: "Badsta",
  Bbe: "Blyberg",
  Baö: "Backsjön",
  Bda: "Blidstena",
  Bdb: "Badabruk",
  Bdf: "Bodafors",
  Bds: "Bodens södra",
  Bdo: "Broddbo",
  Bdn: "Boden",
  Bdy: "Bredaryd",
  Be: "Backe",
  Bef: "Bengtsfors",
  Ben: "Bredviken",
  Bet: "Bruksberget",
  Bf: "Brunflo",
  Bfo: "Billingsfors",
  Bfs: "Bergfors",
  Bg: "Berga",
  Bgm: "Berghem",
  Bgs: "Bryngenäs",
  Bgv: "Bälgviken",
  Bhb: "Bräkne-Hoby",
  Bhs: "Bohus",
  Bia: "Birsta",
  Bib: "Billeberga",
  Bih: "Billesholm",
  Bj: "Björna",
  Bja: "Bjästa",
  Bjb: "Björneborg",
  Bjh: "Bjurhem",
  Bjm: "Bjärnum",
  Bjn: "Björnkulla",
  Bjo: "Björketorp",
  Bjuv: "Bjuv",
  Bjy: "Björköby",
  Bjö: "Björnsjö",
  Bl: "Ballingslöv",
  Bkb: "Barkarby",
  Bld: "Blädinge",
  Blg: "Borlänge",
  Bln: "Björkliden",
  Blv: "Burlöv",
  Bma: "Blomstermåla",
  Bml: "Bromölla",
  Bmo: "Båramo",
  Bmb: "Blomberg",
  Bn: "Bollnäs",
  Bna: "Brunna",
  Boa: "Borgstena",
  Bnk: "Blattnicksele",
  Boda: "Boda",
  Bof: "Bofors",
  Bog: "Bodaborg",
  Bom: "Bomansberget",
  Bop: "Botorp",
  Bor: "Bor",
  Boy: "Bollebygd",
  Born: "Born",
  Brd: "Brännland",
  Bp: "Brännarp",
  Bra: "Brista",
  Bre: "Bränninge",
  Brh: "Brattheden",
  Brg: "Brännberg",
  Agb: "Agnesberg",
  Brin: "Brinellskolan",
  Brk: "Brokind",
  Brl: "Brålanda",
  Brny: "Bro Nygård",
  Brn: "Brånan",
  Bro: "Bro",
  Bt: "Baggetorp",
  Brs: "Brattsbacka",
  Bry: "Bankeryd",
  Btb: "Brattby",
  Brå: "Bjurå",
  Btg: "Bratteborg",
  Bth: "Basthagen",
  Brö: "Bredsjö",
  Bs: "Borås",
  Btp: "Biskopstorp",
  Btå: "Betåsen",
  Bsa: "Brastad",
  Bud: "Buddbyn",
  Bsb: "Bensjöbacken",
  Bu: "Brunsbergstunneln",
  Agg: "Algutsgården",
  Bsg: "Bispgården",
  Bsd: "Brunnsgård",
  Buk: "Brunsberg",
  Bur: "Buresjön",
  But: "Buterud",
  Bsp: "Bestorp",
  Bva: "Barva",
  Bst: "Bastuträsk",
  Bvr: "Blackvreten",
  Bsä: "Bjärka-Säby",
  Bym: "Byarum",
  Byä: "Byälven",
  Dfl: "Dala-Floda",
  Bx: "Boxholm",
  Båa: "Bergåsa",
  Bz: "Bruzaholm",
  Dgm: "Degermyr",
  By: "Byvalla",
  Dg: "Degerfors",
  Diö: "Diö Norra",
  Dgn: "Dalgränsen",
  Dgö: "Daglösen",
  Dj: "Dala-Järna",
  Bål: "Bålsta",
  Aik: "Aitik",
  Dis: "Diö",
  Bån: "Båstad",
  Båp: "Brågarp",
  "Dk.hg": "Helsingör",
  Dk: "Dockmyr",
  Dn: "Dagarn",
  "Dk.cph": "Cph Airport",
  "Dk.kk": "Österport",
  "Dk.tåt": "Tårnby",
  "Dk.øre": "Örestad",
  "Dk.kh": "Köpenhamn H",
  Dns: "Dynäs",
  Bä: "Bräcke",
  Dl: "Dingle",
  Bäb: "Bäckebron",
  Dre: "Derome",
  Dta: "Dorotea",
  Bäf: "Bäckefors",
  Dld: "Dals Långed",
  Dt: "Dingtuna",
  Bäl: "Bällsta",
  Dma: "Dannemora",
  Du: "Duved",
  Bög: "Brännögård",
  Dtc: "Dorotea camping",
  Duo: "Duvbo",
  Bök: "Björkhult",
  Bön: "Bodsjön",
  Dy: "Dysjön",
  E: "Eslöv",
  Ea: "Eldsberga",
  Ebg: "Enstaberga",
  Då: "Djurås",
  Dån: "Dånviken",
  Cas: "Callans såg",
  Böo: "Björbo",
  Edv: "Edsbyverken",
  Ebk: "Edsbjörke",
  Ed: "Ed",
  Döe: "Drömme",
  Eby: "Ekeby",
  Cg: "Charlottenberg",
  Drt: "Dals Rostock",
  Döl: "Döljebro",
  Dös: "Dösjebro",
  Edn: "Edsbyn",
  El: "Edsvalla",
  Em: "Emmaboda",
  Ei: "Erikslund",
  Eky: "Ekeryd",
  Eko: "Ekolsund",
  Eds: "Edsbyns södra",
  Era: "Eneryda",
  Et: "Eskilstuna",
  En: "Edane",
  Ek: "Eksjö",
  Erk: "Erikstad",
  Esn: "Ekenässjön",
  Etk: "Ekträsk",
  Ens: "Enafors",
  Fa: "Finnerödja",
  Ep: "Enköping",
  F: "Falköping",
  Faa: "Flodala",
  Fc: "Framnäs city",
  Fabg: "Falkenberg godsstation",
  Ajr: "Arvidsjaur",
  Fad: "Fästad",
  Fabp: "Falkenberg",
  Feb: "Fellingsbro",
  Fdl: "Fredriksdal",
  Fda: "Furudal",
  Aal: "Annedal",
  Feö: "Fågelsjö",
  Fd: "Floda",
  Er: "Ervalla",
  Fal: "Falerum",
  Fg: "Finspång",
  Fgc: "Fagersta",
  Fas: "Farsta strand",
  Fb: "Forsbacka",
  Fgl: "Fågelsta",
  Flb: "Flemingsberg",
  Fgn: "Fagersta N",
  Fdf: "Frändefors",
  Ffl: "Frufällan",
  Ffs: "Finnforsfallet",
  Frd: "Frinnaryd",
  Fby: "Floby",
  Fle: "Flen",
  Fnö: "Frånö",
  Flgd: "Friluftsgården",
  Fgs: "Fagersanna",
  Fod: "Forsheda",
  Fok: "Folkesta",
  Fgå: "Fagerås",
  Fgö: "Fångsjöbacken",
  Fln: "Falun",
  Fre: "Fredrikslund",
  Fsö: "Flens övre",
  Frl: "Fritsla",
  Fi: "Fiskeby",
  Fhm: "Forshem",
  Fur: "Furet",
  Flp: "Flackarp",
  Fls: "Flisby",
  Frå: "Frykåsen",
  Fra: "Fristad",
  Foo: "Foodia",
  Ft: "Fränsta",
  Acm: "Avesta centrum",
  Få: "Frillesås",
  Fv: "Frövi",
  Fs: "Fors",
  Fm: "Forserum",
  Fär: "Fliskär",
  Fsb: "Fosieby",
  Gau: "Garnudden",
  Fsm: "Forsmo",
  Fid: "Filipstad",
  För: "Förslöv",
  Fvk: "Furuvik",
  Akt: "Abisko turist",
  Gb: "Göteborg Norra",
  Gib: "Grillby",
  Ga: "Graninge",
  Gdl: "Geijersdal",
  G: "Göteborg",
  Gg: "Grängesberg",
  Fin: "Finja",
  Gdö: "Gårdsjö",
  Fil: "Fillan",
  Gdv: "Gröndalsviken",
  Ggm: "Grängesbergs malmbangård",
  Gbco: "Göteborg Combiterminal",
  Gen: "Gåsträsken",
  Gim: "Gimonäs",
  Gad: "Granstanda",
  Gbm: "Göteborg Marieholm",
  Ghu: "Gula huset",
  Ge: "Gottne",
  Gmo: "Gimo",
  Ahm: "Aleholm",
  Glv: "Glumslöv",
  Gal: "Gamleby",
  Gnp: "Gnarp",
  Ghy: "Grythyttan",
  Gnö: "Gnosjö",
  Ghyn: "Grythyttan norra",
  Gm: "Gemla",
  Gmp: "Gamlarp",
  Gk: "Göteborg Kville",
  Gan: "Gantofta",
  Aft: "Alfta",
  Gi: "Gistad",
  Gnå: "Grönåsen",
  Fiä: "Filsbäck",
  Go: "Godegård",
  Gas: "Gamlestaden",
  Gia: "Gideåbacka",
  Gms: "Grums",
  Gpc: "Geogr. Polcirkeln",
  Gp: "Gripenberg",
  Gse: "Gunsen",
  Al: "Arlöv",
  Glk: "Glommersträsk",
  Gop: "Grästorp",
  Grd: "Grevaryd",
  Gn: "Gnesta",
  Gvo: "Göteborg Volvo",
  Gsh: "Göteborg Skandiahamnen",
  Gsn: "Gastsjön",
  Glt: "Gullträsk",
  Gnb: "Gunnesbo",
  Grm: "Grimsås",
  Gån: "Gålnäs",
  Gy: "Gäddmyr",
  Gyt: "Gyttorp",
  Gss: "Gärsnäs",
  Gä: "Gävle",
  Ag: "Anneberg",
  Gyo: "Grycksbo",
  Gäg: "Gräsberg",
  Gr: "Granbergsdal",
  Gö: "Gällö",
  Grn: "Göringen",
  Har: "Harrå",
  Gåp: "Gåvetorp",
  Gäd: "Gärdala",
  Alh: "Alvhem",
  Hal: "Hallinden",
  Gnd: "Genevad",
  Gnf: "Gagnef",
  Hb: "Helsingborg",
  Gsv: "Göteborg Sävenäs",
  Hbd: "Högboda",
  Han: "Harasjön",
  Gön: "Gårdsjön",
  Gst: "Gammelstad",
  Gng: "Gullringen",
  Gro: "Gubbero",
  "Gä.f": "Tåghallen",
  Gså: "Garsås",
  "Gä.h": "Gävle hamn",
  Hge: "Hagge",
  Hd: "Halmstad",
  Hfj: "Hamrångefjärden",
  "Gä.j": "Järnvägsmuseum",
  "Gä.g": "Gasklockorna",
  Haa: "Hamra",
  Hg: "Hagaström",
  Hgv: "Häggvik",
  Ak: "Abisko Ö",
  Hak: "Hallstavik",
  Hfa: "Hemfosa",
  Hdm: "Hedemora",
  Hdn: "Holmsveden",
  Gt: "Grimstorp",
  Hbgb: "Ramlösa",
  Hdr: "Halmstad rangerbangård",
  Gttu: "Gamla Tortuna",
  Hbr: "Holsbybrunn",
  Hbä: "Högbränna",
  Grs: "Gransjö",
  Gru: "Grundbro",
  Gäb: "Gävle godsbangård",
  Gtf: "Gustafs",
  Hgl: "Hagalund",
  Hl: "Horndal",
  Gry: "Gryttje",
  He: "Heberg",
  Hlm: "Helgum",
  Hgö: "Högsjö",
  Hil: "Hillared",
  Hj: "Hjulsbro",
  Gua: "Gullberna",
  Hlp: "Hasslarp",
  Hfs: "Holmfors",
  Hgs: "Häggenås",
  Hfr: "Hofors",
  Hh: "Hallstahammar",
  Gtå: "Getå",
  Hlf: "Hällefors",
  Hlt: "Herrhult",
  Hls: "Hällnäs",
  Hel: "Helenelund",
  Hm: "Hässleholm",
  Grö: "Grötingen",
  Hlv: "Hällevadsholm",
  Gui: "Gussi",
  Hjp: "Hjärup",
  Hlk: "Hällekis",
  Hly: "Hilleby",
  Hlr: "Horndal",
  Hmfs: "Hissmofors",
  Hie: "Hyllie",
  Hma: "Hökmora",
  Hes: "Helmershus",
  Hka: "Huskvarna",
  Hnä: "Hälleforsnäs",
  Hmr: "Hammar",
  Hkl: "Hudiksvall",
  Hs: "Hasselfors",
  Hlö: "Hölö",
  Ht: "Hednoret",
  Hsk: "Hanaskog",
  Hsa: "Hovsta",
  Hto: "Hillerstorp",
  Het: "Hestra",
  Ho: "Habo",
  Htg: "Hoting",
  Hmö: "Holmsjö",
  Hnb: "Hälsingenybo",
  Hsr: "Hasslerör",
  Hud: "Hulingsryd",
  Hsd: "Härnösand",
  Hu: "Huddinge",
  Hnd: "Handen",
  Hsy: "Hussjöby",
  Huv: "Huvudsta",
  Hod: "Holmsund",
  Hf: "Hultsfred",
  Hks: "Hackås",
  Hsb: "Hedensbyn",
  Hv: "Hästveda",
  Hsö: "Hörnsjö",
  Hok: "Hok",
  A: "Alingsås",
  Hkö: "Hökön",
  Huö: "Hundsjön",
  Hul: "Hult",
  Hä: "Hästbo",
  Hnl: "Hällenyland",
  Hum: "Husum",
  Häp: "Häljarp",
  Hnn: "Hennan",
  Höja: "Höja",
  Häb: "Hämrasviken",
  Hvd: "Hjältevad",
  Hyl: "Hyllstofta",
  Häy: "Härryda",
  Igt: "Ingatorp",
  Hå: "Håsjö",
  Hö: "Höör",
  Humn: "Husums norra",
  Imr: "Ingmår",
  Hön: "Högdalen",
  Häd: "Härad",
  Hova: "Hova",
  Håg: "Harmånger",
  Jb: "Järbo",
  Hvp: "Hovmantorp",
  Jk: "Jokkmokk",
  Hno: "Hinsnoret",
  In: "Insjön",
  Ist: "Isätra",
  Hän: "Häggsjön",
  Hoå: "Holmån",
  Höf: "Hörnefors",
  Hvr: "Håverud",
  Hög: "Högbysjön",
  Jbg: "Johannisberg",
  Hös: "Hössjön",
  J: "Jonsered östra",
  Jpn: "Järpen",
  Håk: "Håmojåkk",
  Js: "Jämtlands Sikås",
  Hål: "Hållsta",
  Jps: "Järpås",
  Hp: "Haparanda",
  Höy: "Högsby",
  Ip: "Igelstorp",
  Jkb: "Jakobsberg",
  Jbk: "Jädersbruk",
  Jv: "Jonsered",
  Jr: "Järvsö",
  Hås: "Hindås",
  Kaä: "Kattisträsk",
  Jår: "Jönåker",
  Ju: "Jularbo",
  Jy: "Jenny",
  Jn: "Järna",
  Hvs: "Hovslätt",
  Jli: "Jamtli",
  Ka: "Kattarp",
  Hpn: "Hallsberg Posten",
  Id: "Iggesund",
  Hy: "Heby",
  Jrn: "Jörn",
  Ibe: "Ivarsbjörke",
  Jla: "Järlåsa",
  Kat: "Kattisavan",
  K: "Katrineholm",
  Hr: "Herrljunga",
  Håp: "Håkantorp",
  Jå: "Juån",
  Kas: "Kalmar södra",
  Jbo: "Jordbro",
  Kia: "Kirunavaara",
  Hpbg: "Hallsberg",
  Kac: "Kalmar",
  Hrbg: "Hallsbergs rangerbangård",
  Jögb: "Jönköpings godsbangård",
  Jlo: "Järlebo",
  Kap: "Karpalund",
  Kb: "Kungsbacka",
  Jnt: "Järneträsk",
  Kasd: "Karlskoga Dalbacksgatan",
  Jäf: "Järnforsen",
  Kaa: "Koijuvaara",
  Jho: "Jakobshyttan",
  Hyb: "Hyltebruk",
  Kid: "Kinnared",
  Knl: "Knalleland",
  Kde: "Kode",
  Kba: "Korsberga",
  Hre: "Horred",
  Klx: "Kalix Östra",
  Kos: "Koskullskulle",
  Kin: "Kinna",
  Ke: "Karlberg",
  Keb: "Kejsarbäcken",
  Kisa: "Kisa",
  Hrl: "Hörle",
  Kil: "Kil",
  Kbg: "Karlsborg",
  Kpg: "Kopparberg",
  Knp: "Knapptorp",
  Koä: "Korsnäs",
  Kpm: "Köpmannebro",
  Kei: "Keräsjoki",
  Krd: "Kållered",
  Kbn: "Karbenning",
  Kpkv: "Korpklev",
  Kf: "Kortfors",
  Jäy: "Järlövsby",
  Kp: "Köping",
  Km: "Kilsmo",
  Jö: "Jönköping",
  Knä: "Knäred",
  Kns: "Kolsnäs",
  Hrm: "Hargshamn",
  Hrt: "Harrträsk",
  Kr: "Killeberg",
  Krf: "Kramfors",
  Kv: "Krokvik",
  Kbä: "Kolbäck",
  Kpe: "Kaisepakte",
  Kju: "Kjula",
  Kms: "Kimstad",
  Kfn: "Kolforsen",
  Kmb: "Kiruna",
  Kri: "Karungi",
  Kd: "Kågeröd",
  Krm: "Krokom",
  Koe: "Kolke",
  Koj: "Kosjärv",
  Kjå: "Katterjåkk",
  Kg: "Kävlinge",
  Kda: "Krigslida",
  Kå: "Kopparåsen",
  Kva: "Koskivaara",
  Kmy: "Kummelby",
  Krn: "Krampen",
  Krl: "Kringlan",
  Kåb: "Kåbdalis",
  Kgd: "Kungsgården",
  Kvf: "Kvillsfors",
  Kroj: "Krokom OJ",
  Kär: "Kärrgruvan",
  Kla: "Kumla",
  Kl: "Klippan",
  Köp: "Köpingebro",
  Kn: "Knivsta",
  Kvh: "Klevshult",
  Kon: "Kolmården",
  Le: "Luleå",
  Lb: "Lingbo",
  Kröb: "Krökesbo",
  Lea: "Leksboda",
  Krb: "Karsbäcken",
  Kör: "Kungsör",
  Kgs: "Kragenäs",
  Käv: "Kälvattnet",
  Köa: "Könsa",
  Kä: "Källeryd",
  Kvi: "Kvidinge",
  Klbn: "Klockarbäcken",
  Ksac: "Karlskoga centrum",
  Ld: "Lindesberg",
  Lgb: "Långbron",
  Lj: "Ljungskile",
  Kvä: "Välsviken",
  Kh: "Karlshamn",
  Klh: "Kallholsfors",
  Käb: "Kärreberga",
  Len: "Lene",
  Lek: "Lekarekulle",
  Ks: "Karlstad",
  Lju: "Ljung",
  Käe: "Källene",
  Ksg: "Karlsberg",
  Let: "Lilla Edet",
  Lg: "Läggesta",
  Kvö: "Kvarnsjö",
  Kll: "Källby",
  Les: "Lödöse Södra",
  Lkp: "Lidköping",
  Ljun: "Ljungaverks lastplats",
  La: "Ludvika",
  Kx: "Kalixfors",
  Kst: "Kistinge",
  Lmo: "Löcknamon",
  Lgm: "Linghem",
  Lab: "Lappberg",
  Ldl: "Lidlund",
  Ab: "Arbrå",
  Ksu: "Kvicksund",
  Lgd: "Ledsgård",
  Kän: "Kungsängen",
  Ldo: "Lindome",
  Ljv: "Ljungaverk",
  Ksus: "Kvicksund",
  Lre: "Lästringe",
  Lms: "Lomselenäs",
  Laov: "Laholm",
  Lkä: "Lakaträsk",
  Loka: "Loka",
  Kln: "Kälarne",
  Lh: "Lammhult",
  Ksö: "Karsjö",
  Lrg: "Laduberg",
  Lom: "Lomsmyren",
  Lkö: "Landskrona",
  Ltr: "Loster",
  Lrp: "Lockarp",
  Kt: "Kapellet",
  Lu: "Lund",
  Lrt: "Lerot",
  Klr: "Koler",
  Lhr: "Lillhamra",
  Ktm: "Kaitum",
  Lnk: "Lernacken",
  Lln: "Linddalen",
  Lia: "Lillaryd",
  Lot: "Lottefors",
  Lkm: "Lökom",
  Lkn: "Lindekullen",
  Lub: "Lundby",
  Kls: "Kilafors",
  Lp: "Linköping",
  Ls: "Ljusdal",
  Låk: "Låktatjåkka",
  Lr: "Lerum",
  Lpk: "Lappträsk",
  Lm: "Liljeholmen",
  Lsd: "Leksand",
  Lnv: "Långvattnet",
  Lme: "Limmared",
  Lsb: "Ljusne bruk",
  Kud: "Klingerud",
  Ktä: "Korsträsk",
  Lns: "Lidnäs",
  Lup: "Lunnarp",
  Lö: "Lörstrand",
  Klv: "Kilvo",
  Lin: "Linaälv",
  Lrd: "Landeryd",
  Lmm: "Lemmeströ",
  M: "Malmö",
  Lis: "Liseberg",
  Löb: "Lövberga",
  Lmn: "Långviksmon",
  Lse: "Ljusne",
  Khe: "Hede",
  Ml: "Mellerud",
  Mkln: "Munkedals nedre",
  Lo: "Lessebo",
  Lvd: "Lövliden",
  Ma: "Mattmar",
  Lve: "Lovene",
  Khn: "Kristinehamn",
  Maa: "Marma",
  Lsn: "Losesjön",
  Lit: "Lit",
  Mfj: "Mockfjärd",
  Mfn: "Munkflohögen",
  Khy: "Klenshyttan",
  Mru: "Mörrum",
  Lsj: "Långsjön",
  Lnå: "Lugnås",
  Luä: "Lubboträsk",
  Lsl: "Långsele",
  Lön: "Lönneberga",
  Mon: "Mon",
  Maj: "Maj",
  Mlf: "Meselefors",
  Ms: "Mosås",
  Lså: "Ljuså",
  Mlb: "Mellby",
  Morp: "Munktorp",
  Löö: "Lödöse",
  Lsp: "Lycksele industrispår",
  Khä: "Kallhäll",
  Ly: "Lycksele",
  Msb: "Mönsterås bruk",
  Mos: "Moskosel",
  Mfs: "Malungsfors",
  Mar: "Marieholm",
  Möa: "Mörlunda",
  Msö: "Mellansjö",
  Mb: "Mobodarne",
  Mgb: "Malmö godsbangård",
  Lyd: "Lyrestad",
  Mst: "Mariestad",
  Msj: "Malmsjö",
  Lye: "Lyse",
  Mlg: "Malung",
  Mot: "Motala",
  Mlgf: "Malung Folkh",
  Mbv: "Murbergsviken",
  Mt: "Mantorp",
  Ltk: "Långträsk",
  Mlgg: "Malung Gymn",
  Möl: "Mörtsal",
  Msn: "Medskogsheden",
  Lyg: "Lyckselesågen",
  Lys: "Lysekil",
  Mtn: "Mertainen",
  Mby: "Malmby",
  Msl: "Mellansel",
  Mtm: "Maitum",
  Mh: "Moholm",
  Moy: "Mollaryd",
  Mhn: "Myrheden",
  Mp: "Mölltorp",
  Mlö: "Mellösa",
  Mör: "Mörarp",
  Mbä: "Malmbäck",
  Nbg: "Norberg",
  Mu: "Mullsjö",
  Mdl: "Moradal",
  Mpb: "Persborg",
  Mr: "Märsta",
  Mnd: "Mariannelund",
  Mud: "Mosselund",
  Nkp: "Närkes Kvarntorp",
  Mi: "Mörsil",
  Mss: "Mönsterås",
  Mia: "Maria",
  Nb: "Näsberg",
  Nbt: "Norra bantorget",
  Nbr: "Nybybruk",
  Mra: "Mora",
  Lyt: "Lycksele timmer",
  N: "Nässjö",
  Lyv: "Lysvik",
  Mo: "Moheda",
  My: "Mjölby",
  Nkr: "Norra Kikkejaur",
  Mdm: "Mariedamm",
  Nba: "Nyboda",
  Mim: "Mimer",
  Mrai: "Mora kommuns industrispår",
  Lå: "Laxå",
  Mog: "Mo grindar",
  Mras: "Morastrand",
  "No.sbo": "Sarpsborg",
  Ndt: "Norrsundet",
  Nsö: "Nedansjö",
  Myn: "Myrbacken",
  Nkt: "Näverkärret",
  Myk: "Mölnlycke",
  Mjv: "Morjärv",
  Mip: "Milletorp",
  Nd: "Nässundet",
  Nks: "Nyköping södra",
  Mdn: "Mölndal",
  "No.sms": "Straumsnes",
  Mdö: "Mölndals övre",
  Myra: "Myra",
  Ndv: "Norsesund västra",
  Ck: "Karlskrona",
  Nte: "Nuorttagievlle",
  Mk: "Murjek",
  Mkl: "Munkedal",
  Ntv: "Nattavaara",
  "No.sös": "Sösterbekk",
  Me: "Marmaverken",
  Ngd: "Nynäsgård",
  "No.tnd": "Trondheim",
  Meh: "Mehedeby",
  Mklh: "Munkedals hamn",
  Må: "Morgongåva",
  Nvk: "Norrviken",
  Måa: "Målilla",
  O: "Osby",
  Ng: "Norrhög",
  Crgb: "Kristianstad GBG",
  Noe: "Norrmjöle",
  Cr: "Kristianstad",
  Os: "Orrskog",
  Ob: "Ockelbo",
  Nog: "Nordmaling",
  Måp: "Månsarp",
  Nh: "Norsholm",
  Mäk: "Märbäck",
  Nol: "Nol",
  Nvn: "Notviken",
  Nvl: "Norra Valbo",
  Mö: "Mölnbo",
  Nhr: "Norrahammar",
  Crs: "Kristianstads södra",
  Of: "Olofström",
  Ny: "Nyhem",
  Nyb: "Nybro",
  Cst: "Stockholm C",
  Non: "Norrsjön",
  Nyh: "Nynäshamn",
  D: "Degerön",
  Ras: "Ralingsås",
  Dat: "Dammstorp",
  Ran: "Rian",
  Nyf: "Nyfors",
  Rgn: "Riksgränsen",
  Nkv: "Nykvarn",
  Dbn: "Degerbäcken",
  Nyå: "Nyåker",
  Oh: "Oskarshamn",
  Nk: "Nyköping",
  Ram: "Ramlösa",
  Nka: "Nykroppa",
  Nosk: "Nordskogen",
  Nr: "Norrköping",
  Norl: "Nordlunda",
  Ros: "Rossön",
  Rps: "Ripats",
  Rb: "Ronneby",
  Riks: "Riksgräns Swe-Dk.",
  Ol: "Oleby",
  Nås: "Nås",
  Rbh: "Rabbalshede",
  Nrs: "Norrfors",
  Rs: "Rosersberg",
  Rjn: "Röjan",
  "De.ber": "Berlin",
  Nrt: "Nuortikon",
  Rbk: "Råbäck",
  Rsi: "Råtsi",
  Rsn: "Rensjön",
  Rby: "Rockneby",
  Ns: "Norsesund",
  Rv: "Rättvik",
  Rbo: "Röstbo",
  Om: "Oskarström",
  "Rjn.vd": "Vemdalen",
  Nsj: "Nyckelsjön",
  Sbl: "Skärblacka",
  Ope: "Ope",
  Rt: "Ransta",
  Nml: "Niemisel",
  Nl: "Nelhammar",
  Rk: "Rörvik",
  Rte: "Röste",
  Nst: "Stockholms norra",
  Ryb: "Ryssjöbrink",
  Rsö: "Ramsjö",
  Rbä: "Repbäcken",
  Rd: "Rävlanda",
  Ry: "Rosshyttan",
  Rka: "Rinkaby",
  Oph: "Opphem",
  Rts: "Rottneros",
  Rye: "Rynge",
  Or: "Olskroken",
  Rdg: "Rydsgård",
  Nld: "Nyland",
  Ryg: "Ryggen",
  Rke: "Rekarne",
  Ryk: "Rydöbruk",
  Rym: "Rydaholm",
  Sby: "Norra Sunderbyn",
  Rf: "Rimforsa",
  Rkö: "Rocksjön",
  Sbu: "Strömsnäsbruk",
  Rlå: "Rällså",
  Rmh: "Rämshyttan",
  Ryr: "Ryr",
  Rfb: "Rimforsa brygga",
  Sbä: "Sågbäcken",
  Rft: "Reftele",
  Ryä: "Rydebäck",
  Rmn: "Ramnäs",
  Ru: "Ragunda",
  Sen: "Stavreviken",
  "No.hld": "Halden",
  Set: "Stensundberget",
  Rum: "Runemo",
  Sdm: "Sandmon",
  Rud: "Ruda",
  Sci: "Stockholm City",
  Rmtp: "Regumatorp",
  Ruk: "Rundvik",
  Rån: "Råsjön",
  Orn: "Ornäs",
  Rob: "Roback",
  Sf: "Storfors",
  Sde: "Sköldinge",
  Ors: "Orsa",
  Råg: "Rågsveden",
  "No.kat": "Katterat",
  Sfl: "Säffle",
  "No.kvg": "Kongsvinger",
  Rås: "Råskogen",
  Skl: "Skellefteå",
  Rus: "Runsala",
  Sfn: "Storflon",
  Sdnä: "Sandsjönäs",
  Sg: "Stehag",
  Ory: "Ormaryd",
  Råö: "Rågön",
  Rut: "Rautas",
  "No.lil": "Lilleström",
  Sdr: "Smålandsstenar",
  Räp: "Räppe",
  Skm: "Stenkumla",
  Slj: "Selsjön",
  Sop: "Skorped",
  "No.lls": "Lilleström",
  Skms: "Skymossen",
  "No.nk": "Narvik",
  Sgm: "Segmon",
  Rö: "Rödberg",
  Skn: "Skänninge",
  Slm: "Solum",
  Sdy: "Smedby",
  Sgs: "Strängnäs",
  Skog: "Skoghall",
  Sea: "Svedala",
  "No.osl": "Oslo",
  Sp: "Sparreholm",
  See: "Skene",
  Soö: "Storsjö",
  Rön: "Rönninge",
  Röp: "Rörstorp",
  Sae: "Sandared",
  Slnä: "Sellnäs",
  Sph: "Skeppshult",
  Std: "Stöde",
  Sel: "Sävedalen",
  "No.rom": "Rombak",
  Spj: "Spjutsbygd",
  Skr: "Skåre",
  Sh: "Stjärnhov",
  Skrt: "Skäret",
  Shm: "Söderhamn",
  Skrp: "Skogstorp",
  Sege: "Sege",
  Ste: "Svarte",
  Sgä: "Slagnäs",
  S: "Sveg",
  Stu: "Stugsund",
  Shr: "Surahammar",
  Sten: "Stegsskogen",
  Skru: "Skållerud",
  Saf: "Staffanstorp",
  Skv: "Skebokvarn",
  Spjb: "Spjutbäcken",
  Stv: "Stavre",
  Stä: "Sandträsk",
  Sak: "Sandbäck",
  Smd: "Strömstad",
  Shv: "Söderhamn",
  Sm: "Sandhem",
  Skä: "Skästra",
  Stå: "Sollefteå",
  Sti: "Storbergets industrispår",
  Sam: "Samnan",
  Sth: "Stora Höga",
  Spk: "Sprängsviken",
  Si: "Simrishamn",
  Sarp: "Sannarp",
  Sl: "Sala",
  Sic: "Silverdalen",
  Sas: "Salsta",
  Stö: "Strångsjö",
  Stje: "Stjerneskolan",
  Suc: "Sundsvall",
  Sub: "Sundbyberg",
  Sid: "Silverdalens bruk",
  Sif: "Sikfors",
  Stk: "Sikträsk",
  Spn: "Stolpstugan",
  Sau: "Stora Tuna",
  Slbk: "Solbacka",
  Saö: "Skabersjö",
  Smj: "Smedjebacken",
  Spy: "Spännarhyttan",
  Sii: "Silinge",
  Smn: "Sommen",
  Sle: "Slätte",
  Stl: "Ställdalen",
  Sue: "Surte",
  Spå: "Spånga",
  Suf: "Sturefors",
  Sir: "Sorsele industrispår",
  Stlv: "Stora Levene",
  Smp: "Smedstorp",
  Sus: "Sunderby sjh",
  Sre: "Söderbärke",
  Sui: "Skuckuviken",
  Smo: "Strömsbro",
  Smu: "Smålands Burseryd",
  Slg: "Sällinge",
  Sbe: "Saluböle",
  Sjka: "Sjisjka",
  Sr: "Storå",
  Sba: "Spannarboda",
  Sto: "Storträsk",
  Sik: "Svartvik",
  Suv: "Sundsvall V",
  Smt: "Simonstorp",
  Ston: "Stockviksverkens nedre",
  Små: "Simeå",
  Sum: "Storuman",
  Sbi: "Storblåliden",
  Stp: "Svågertorp",
  Srn: "Sörtjärn",
  Sn: "Stenkullen",
  Sro: "Storebro",
  Sun: "Sunne",
  Str: "Storlien",
  Sv: "Storvik",
  Sk: "Skövde",
  Sbk: "Stenbacken",
  Snb: "Snickarbo",
  Skb: "Skinnskatteberg",
  Södy: "Söderby",
  Sur: "Skutskär",
  Srp: "Skurup",
  Svc: "Svenstavik c",
  Sög: "Sölvesborg",
  Skbl: "Skälebol",
  Srr: "Skattkärr",
  Sts: "Storsund",
  Sne: "Sandarne",
  Skby: "Skavstaby",
  Sve: "Säve",
  Ske: "Skee",
  Sngå: "Singsån",
  Söka: "Södertälje kanal",
  Svg: "Svenshögen",
  Trm: "Trolmen",
  Srt: "Strömtorp",
  Söla: "Sösdala",
  Sök: "Stöcke",
  Trå: "Timrå",
  Srs: "Sorsele",
  Skg: "Skogås",
  Ty: "Tyringe",
  Snl: "Skanlog",
  Svi: "Södra Vi",
  Srv: "Storvreta",
  Ts: "Tungelsta",
  Söu: "Södertälje Syd",
  Svj: "Svedje",
  Söv: "Skelleftehamns övre",
  Ss: "Stenstorp",
  Tsg: "Tågsjöberg",
  Skk: "Skönvik",
  Tye: "Tyllered",
  Uåö: "Umeå östra",
  Ssa: "Sjösa",
  Svk: "Svenstavik",
  Tså: "Torsåker",
  Tsl: "Tisselskog",
  Snt: "Snyten",
  Tåd: "Trångsund",
  Uågb: "Umeå godsbangård",
  Svt: "Sävast",
  Söö: "Södertälje S",
  Snu: "Stenungsund",
  Ttu: "Tortuna",
  Ssh: "Strömsholm",
  T: "Töreboda",
  Uö: "Uddevalla Ö",
  Snv: "Sandviken",
  Sst: "Stockholms Södra",
  Svv: "Svappavaara",
  Tu: "Tumba",
  V: "Värnamo",
  Tag: "Taberg",
  Vaa: "Vara",
  Tåv: "Trångsviken",
  Tud: "Tunadal",
  Svö: "Skytts Vemmerlöv",
  Vad: "Vad",
  Tb: "Tillberga",
  Svå: "Svartå",
  Sy: "Stockaryd",
  Tul: "Tullinge",
  Tba: "Tystberga",
  Ssä: "Segersäng",
  Vag: "Vargön",
  Tun: "Tunneby",
  Syd: "Skillingaryd",
  Sta: "Stuvsta",
  Stb: "Stångby",
  Tvb: "Tväråbäck",
  Tvd: "Torved",
  Vaj: "Varjisträsk",
  Syt: "Skyttorp",
  wAga: "Aga",
  wAll: "Alléparken",
  Täl: "Tälle",
  St: "Säter",
  Tö: "Tjörnarp",
  wAlv: "Alvik",
  Vfa: "Vissefjärda",
  Tvä: "Tvärålund",
  Sån: "Stenåsen",
  Vg: "Vänersborg",
  Vfo: "Viskafors",
  Töv: "Töva",
  Sårs: "Söråkers södra",
  Vb: "Varberg",
  wBag: "Baggeby",
  Töe: "Tösse",
  wKlv: "Klövervägen",
  Vgd: "Vaggeryd",
  wKoa: "Kottla",
  Vga: "Vega",
  U: "Uppsala",
  Vbd: "Västra Bodarne",
  wKäp: "Käppala",
  Vl: "Vallsta",
  wBod: "Bodal",
  Vgå: "Vårgårda",
  Udl: "Ulriksdal",
  wLab: "Larsberg",
  wGåh: "Gåshaga",
  wBvi: "Brevik",
  Vld: "Vinlidsberg",
  Vh: "Vegeholm",
  Vby: "Vännäsby",
  Uf: "Ulriksfors",
  Vlb: "Vilhelmsborg",
  wGåb: "Gåshaga brygga",
  Vln: "Vallnäs",
  Uly: "Ulvshyttan",
  Vha: "Vattholma",
  Un: "Undersåker",
  Una: "Uppsala norra",
  Vdb: "Värmlands Bro",
  Vhd: "Vagnhärad",
  Vdn: "Vindeln",
  wHlt: "Höglandstorget",
  Vhe: "Västerhaninge",
  Vdi: "Veddige",
  Upv: "Upplands Väsby",
  Ve: "Väse",
  Vdv: "Vedevåg",
  Utp: "Ulvstorp",
  Vhy: "Vikmanshyttan",
  Uv: "Uddevalla",
  Uts: "Utsikten",
  wHöb: "Högberga",
  Via: "Via",
  Veas: "Velanda södra",
  Wibe: "Wibe",
  Vib: "Vimmerby",
  Ved: "Vedum",
  Uå: "Umeå",
  Uvn: "Ursviken",
  Vs: "Vislanda",
  Vibh: "Vimmerby Hamra",
  wSa: "Skara",
  Vsd: "Vikingstad",
  Vsg: "Valskog",
  Vid: "V. Ingelstad",
  Vik: "Vikersvik",
  Vät: "Västra Ämtervik",
  Vf: "Vartofta",
  Väy: "Västeraspby",
  Vsk: "Vuonoskogen",
  Vip: "Viarp",
  Vö: "Växjö",
  Vim: "Vimnarp",
  Vsj: "Vittsjö",
  wSkr: "Skärsätra",
  Vöv: "Vinslöv",
  xA: "Anten",
  wSms: "Smedslätten",
  xAlp: "Altorp",
  xAlg: "Almunge",
  xAkm: "Ankarsrum",
  wSsu: "Sissehult",
  Vso: "Virsbo",
  xArl: "Arelid",
  Vsö: "Viresjö",
  xAsk: "Aska",
  xB: "Bärby",
  Vt: "Vretstorp",
  xBlä: "Blägda",
  Vto: "Västra Torup",
  Vtn: "Vattnäs",
  Vta: "Vetlanda",
  xBb: "Brobacka",
  xBvv: "Bråvallavägen",
  Vtå: "Vitåfors",
  xBöp: "Brösarp",
  wTov: "Torsvik",
  xBäl: "Bällsta",
  xBn: "Bor Norra",
  Vtv: "Vitvattnet",
  wTås: "Tallås Grusgropsväxel",
  xBös: "Brösarp södra",
  Vå: "Västerås",
  xDir: "Dirhuvden",
  Vv: "Vallvik",
  wÅlG: "Ålstens Gård",
  xDje: "Djursholms Ekeby",
  xDkn: "Dala kvarn",
  Våb: "Vålberg",
  Våk: "Vallåkra",
  xDjö: "Djursholms Ösby",
  xEkg: "Ekskogen",
  wÅls: "Ålstensgatan",
  Vån: "Västerås norra",
  xDo: "Delsbo",
  Vä: "Väring",
  Våv: "Västerås västra",
  xEkh: "Ekebohult",
  xEkn: "Eken",
  xEnb: "Enebyberg",
  Vän: "Vännäs norra",
  xErn: "Ervalla NBVJ",
  xF: "Faringe",
  xEvb: "Erstaviksbadet",
  Väd: "Vätteryd",
  xEsa: "Ensta",
  xFgr: "Fagerrör",
  xFb: "Funbo",
  xHhn: "Hjorthagen",
  xEyd: "Elgaryd",
  xHjm: "Hjortöström",
  xFia: "Finkelboda",
  xFl: "Fyrislund",
  xHjt: "Hjorted",
  xFie: "Fiskåsen",
  xFla: "Flaten",
  xFmö: "Forsmöllan",
  xFsa: "Forsa",
  xFos: "Fredriksfors",
  xFsu: "Frösunda",
  xFsd: "Fagersand",
  xGby: "Gimarpsby",
  xGa: "Gunsta",
  xFåt: "Fårhult",
  xFsä: "Fisksätra",
  xGhn: "Gripsholmsviken",
  xGnl: "Gnötteln",
  xGim: "Gimarp",
  xGr: "Gräfsnäs",
  xGyb: "Gyllebosjö",
  xGpf: "Galoppfältet",
  Xgu: "Gudå",
  xGyt: "Gyttorp",
  Xhel: "Hell",
  xGåv: "Gårdveda",
  xHdt: "Hedlandet",
  xHap: "Hultarp",
  xHbo: "Hybo",
  xHed: "Henriksdal",
  xHgä: "Hägernäs",
  xRdb: "Rydbo",
  Xrhm: "Ranheim",
  xRnb: "Roslags Näsby",
  xRav: "Ravlundabro",
  xRaä: "Ravlunda bränneri",
  xRok: "Roma kungsgård",
  xSa: "Skölsta",
  xRvä: "Ringvägen",
  xSac: "Skara camping",
  Xrom: "Rombakk",
  xScs: "Scoutstugan",
  xSbn: "Saltsjöbaden",
  xSdn: "Saltsjö-Duvnäs",
  xSdu: "Sandudden",
  xSjl: "Saltsjö-Järla",
  xSik: "Sickla",
  xSjv: "Sjövägen",
  xSln: "Solsidan",
  xSlu: "Slussen",
  xSlä: "Selknä",
  xSm: "Stora Mon",
  xSn: "Stensjön",
  xSmk: "Skogsmark",
  xSpä: "Spångenäs",
  xSoo: "S:t Olof",
  xSvb: "Svartbäcken Nedre",
  xSsu: "Stocksund",
  xStä: "Storängen",
  xTab: "Tattby",
  xSöy: "Sjöbygget",
  xTe: "Tule",
  xTeg: "Tule grusgrop",
  xTbl: "Tibble",
  xTna: "Tuna",
  xTip: "Tippen",
  xTib: "Triabo",
  Xtnd: "Trondheim",
  xTug: "Tunagård",
  xTp: "Torpa",
  xTog: "Tomtskog",
  xTob: "Totebo",
  xTsk: "Trollskogen",
  xTve: "Tveta",
  xTäl: "Täljö",
  xTås: "Tallås",
  xTx: "Taxinge-Näsby",
  xTäc: "Täby Centrum",
  xTäb: "Täby kyrkby",
  xUö: "Uppsala Östra",
  xUnv: "Universitetet",
  xVas: "Valstad",
  xVbm: "Viggbyholm",
  xVbä: "Verkebäck",
  xVen: "Vena",
  xVev: "Vendevägen",
  xVht: "Värdshuset",
  xVlt: "Vallentuna",
  xVis: "Visinge",
  xVsm: "Virserum",
  xVir: "Virestad",
  xVst: "Vadstena",
  xVtk: "Vitaby kyrka",
  xVäm: "Väderum",
  xVty: "Vitaby",
  xÅbo: "Åbo",
  xÅru: "Åkers Runö",
  xÅs: "Årsta",
  xÅtp: "Åtorp",
  xÅbg: "Åkersberga",
  xÄp: "Älvstorp",
  xÖga: "Östberga",
  xÖdh: "Ödhult",
  xÖsv: "Östervik",
  xÖsk: "Österskär",
  xÖst: "Stockholms östra",
  Yb: "Ytterby",
  Yl: "Ytterhogdal",
  xÖvl: "Östra Vemmerlöv",
  Y: "Ystad",
  Yö: "Yttersjön",
  Ym: "Yttermalung",
  Zgae: "Espergaerde",
  Zdro: "Drogden",
  Zklv: "Kalvebod",
  Zkl: "Klampenborg",
  Zhg: "Helsingör",
  Zkk: "Österport",
  Zhl: "Hellerup",
  Zhum: "Humlebaek",
  Zni: "Nivå",
  Zok: "Kokkedal",
  Zkn: "Nörreport",
  Zru: "Rungsted",
  Ztåt: "Tårnby",
  Zsq: "Snekkersten",
  Zvb: "Vedbaek",
  Zså: "Skodsborg",
  Zöre: "Örestad",
  Å: "Åsbro",
  Åb: "Åsensbruk",
  Åa: "Åseda",
  Åba: "Ålberga",
  Åbe: "Årstaberg",
  Åbyg: "Åby godsbangård",
  Åd: "Ådalsliden",
  Åg: "Ånge",
  Ågy: "Ångebyn",
  Åggb: "Ånge godsbangård",
  Åhus: "Åhus",
  Åkg: "Årskogen",
  Åk: "Åkarp",
  Åh: "Åshammar",
  Åks: "Åkers styckebruk",
  Åkt: "Åskott",
  Ål: "Åmål",
  Ålg: "Ålsäng",
  Åm: "Åmsele",
  Åmy: "Åmyran",
  Ånm: "Ånimskog",
  Åmn: "Ångsågsmossen",
  Åre: "Åre",
  Ård: "Åryd",
  Åp: "Åstorp",
  Ånn: "Ånn",
  Ås: "Ås",
  Åsa: "Åsa",
  Åsal: "Åsarna central",
  Åvg: "Åtvidaberg",
  Åst: "Åsträsk",
  Åt: "Åmotfors",
  Åsra: "Åsarna Södra",
  Ä: "Ängelholm",
  Äbgb: "Ängelsbergs bruk",
  Äh: "Älmhult",
  Äba: "Älvboda",
  Äbg: "Ängelsberg",
  Äfs: "Äggfors",
  Äl: "Älgarås",
  Äkb: "Älvkarleby",
  Älo: "Älvho",
  Äls: "Älvros",
  Än: "Älvängen",
  Äs: "Älvsjö",
  Äng: "Äng",
  Äp: "Äppelbo",
  Äsb: "Älandsbro",
  Änö: "Ängersjö",
  Äy: "Älvsbyn",
  Äsg: "Älvsjö godsbangård",
  Äsr: "Äskekärr",
  Ätk: "Ättekulla",
  Ö: "Örtofta",
  Öb: "Örebro S",
  Öal: "Österalnö",
  Öa: "Ökna",
  Öbn: "Örabäcken",
  Öda: "Ödåkra",
  Ög: "Ö. Grevie",
  Öbl: "Ösjöbol",
  Öh: "Örbyhus",
  Ögd: "Övergård",
  Öhl: "Överhogdal",
  Öj: "Östansjö",
  Öhlg: "Överhogdals grusgrop",
  Ökn: "Örnsköldsvik norra",
  Öjr: "Öjervik",
  Ök: "Örnsköldsvik",
  Örs: "Örsjö",
  Öna: "Önaskogen",
  Öl: "Ölme",
  Önd: "Önnestad",
  Ör: "Örebro",
  Ösv: "Östersund V",
  Ös: "Östersund",
  Öso: "Ösmo",
  Övb: "Överby",
  Öv: "Östavall",
  Öså: "Österås",
  Öte: "Östertälje",
  Övn: "Östervärn",
  Övm: "Överum",
  Övö: "Övsjö",
  Övmb: "Överums Bruk",
  Öx: "Öxnered",
  Öä: "Öreälv",
  Öäg: "Österäng",
  Snö: "Stensjön",
  So: "Solna",
  Soa: "Stordalen",
  Sod: "Sthlm Odenplan",
  Sol: "Sollentuna",
  Som: "Stormyran",
  Soe: "Stolpen",
  Visk: "Viskan",
  Vjm: "Vojmån",
  Vka: "Vika",
  Vj: "Vassijaure",
  Vk: "Västervik",
  xHkl: "Hudiksvall (xHkl)",
  Xhra: "Hegra",
  xHy: "Hesselby",
  xIgb: "Igelboda",
  xHön: "Härnön",
  xHöo: "Hösjömo",
  xJ: "Järle",
  xIpr: "Impregneringen",
  xHäs: "Hultanäs",
  xJbn: "Jagbacken",
  xJås: "Jädraås",
  xKgl: "Kragstalund",
  Xkat: "Katterat",
  xKh: "Källarhalsen",
  xKht: "Kambshagtorp",
  xKpr: "Kopperå",
  xKår: "Kårsta",
  xL: "Löth",
  xLba: "Långbacka",
  xLjd: "Ljungbyheds grusgrop",
  xLgn: "Läggesta nedre",
  xLiä: "Lillängen",
  xLdm: "Lindholmen",
  xLh: "Lövstahagen",
  xLhl: "Lahäll",
  xLbr: "Länna bruk",
  xLm: "Lilla Mon",
  xLåö: "Långsjön",
  Xmag: "Magnor",
  xLnb: "Lundsbrunn",
  Xmer: "Meråker",
  xLna: "Länna",
  xLöt: "Löt",
  xLäe: "Länninge",
  xMfd: "Mariefred",
  xMfå: "Mariefreds ångbåtsstation",
  xMg: "Moga",
  xMop: "Mosstorp",
  xMsa: "Målilla Sanatorium",
  xMl: "Marielund",
  xMln: "Marielund",
  xMnb: "Molnby",
  xMus: "Munkebos",
  xMyå: "Myråsen",
  xMöb: "Mörby",
  xN: "Nora stad",
  xNbe: "Näsbyallé",
  xNbp: "Näsbypark",
  xNeg: "Neglinge",
  Xnk: "Narvik",
  xNka: "Nacka",
  xNv: "Näsviken",
  xNys: "Nygårds Stall Dalhem",
  xPgn: "Pershyttevägen",
  xOta: "Ormsta",
  xOhs: "Ohs Bruk",
  xPh: "Pershyttan",
  xPte: "Pallanite",
  xRa: "Roma",
  xQo: "Kvarnabo",
  Osö: "Ovansjö",
  Osl: "Oslättfors",
  Ot: "Ottebol",
  Ox: "Oxie",
  Oxd: "Oxelösund",
  P: "Partille",
  Oxm: "Oxmyran",
  Pbg: "Persberg",
  Pb: "Prässebo",
  Pc: "Polcirkeln",
  Pea: "Peuravaara",
  Phm: "Peberholm",
  Pj: "Porjus",
  Pii: "Pitkäjärvi",
  Pl: "Pilgrimstad",
  Plm: "Pauliström",
  Pm: "Prästmon",
  Pt: "Perstorp",
  Ptå: "Piteå",
  På: "Pålsboda",
  Påa: "Påarp",
  Päb: "Piteälvsbron",
  Pöb: "Pölsebo",
  R: "Rotebro",
  Säg: "Söräng",
  Sä: "Sävsjö",
  Sän: "Sävastklinten",
  Säp: "Skärpan",
  Säu: "Sunnäsbruk",
  Sär: "Sävenäs rangerbangård",
  Säv: "Sävenäs",
  Säy: "Säby",
  Söc: "Södertälje C",
  Söd: "Södertälje hamn",
  Gun: "Gunnarn",
  Gv: "Gällivare",
  wLnb: "Lundsbrunn kurort",
  Vma: "Vilhelmina",
  Vm: "Vattjom",
  Vman: "Vilhelmina norra",
  Vmat: "Vilhelmina timmer",
  Vme: "VME",
  Vn: "Värtan",
  Vna: "Voxna",
  wNob: "Nockeby",
  Vns: "Vännäs",
  wNot: "Nockeby torg",
  Vnt: "Vackernäset",
  Vnö: "Vinnö",
  wOll: "Olovslund",
  Vo: "Vansbro",
  Vpm: "Varpemossen",
  Vr: "Vingåker",
  Vre: "Vrena",
  wRos: "Ropsten",
  Vrn: "Verveln",
  Vru: "Vekerum",
  Vrö: "Värö",
  Tbn: "Torbacken",
  Tbo: "Tobo",
  Tbr: "Tibro",
  Tby: "Tandsbyn",
  Tdj: "Trödje",
  Teo: "Torebo",
  Tgp: "Tågarp",
  Tet: "Tolikberget",
  Th: "Tenhult",
  Tgs: "Trångstad",
  Thd: "Tallhed",
  Thl: "Tornhill",
  Thm: "Träskholm",
  Thö: "Trehörningsjö",
  Thn: "Trollhättan",
  Tip: "Tierp",
  Tim: "Timsfors",
  Tj: "Tjunnaryd",
  Tjs: "Tjugonde slussen",
  Tjsk: "Tjustskolan",
  Tl: "Tallåsen",
  Tjä: "Tjärnvik",
  Tlt: "Tolita",
  Tli: "Tomelilla",
  Tm: "Tomteboda bangård",
  Tmö: "Tomteboda övre",
  Tlg: "Tällberg",
  Tns: "Tranås",
  Tn: "Tannefors",
  Tnk: "Torneträsk",
  Tnu: "Tanum",
  To: "Torpshammar",
  Tof: "Tofta",
  Top: "Torpåkra",
  Tot: "Toresta",
  Tou: "Torup",
  Toy: "Torsby",
  Trg: "Trelleborg",
  Trd: "Traryd",
  Tpu: "Tappudden",
  Tre: "Trekanten",
  Tp: "Teckomatorp",
  Tri: "Triangeln",
  Fki: "Fjälkinge",
  Fkr: "Fåker",
  Fjå: "Fjällåsen",
  Nä: "Nälden",
  Fl: "Flädie",
  Nät: "Nättraby",
  Mrd: "Markaryd",
  Mrh: "Marsvinsholm",
  Nöe: "Nödinge",
  "Mrd.ax": "Axhult",
  Mrm: "Marma",
  Mrs: "Morshyttan",
  Sru: "Skruv",
  "Ax.br": "Axmar Bruk",
  "G.ls": "Lejonspåret",
  "Le.k": "Karlsvik",
  Rog: "Rosengård",
  Kng: "Kvarnängen",
  xOxb: "Oxberg",
  xÅa: "Åseda (xÅa)",
  Vmu: "Villersmuren",
  "It.bol": "Bolzano",
  "It.ven": "Venedig",
  Fn: "Falköpings norra",
  Auk: "Auktsjaur",
  Mrl: "Mora lasarett",
  Håb: "Hålbergsliden",
  Bjf: "Bjørnfjell",
  Cph: "Copenhagen Airport",
  Ko: "Kornsjö gränsen",
  zKöp: "f.d. Köpingebro",
  xAre: "Arninge",
  Nly: "Nolby",
  Njb: "Njurundabommen",
  Omb: "Ombenning",
  Lma: "Lomma",
  Sie: "Stävie",
  Ghd: "Grohed",
  Nta: "Nacksta",
  Fud: "Furulund",
  xHfh: "Hultsfreds Hembygdspark",
  xHfp: "Hultsfred smalspår (xHfp)",
  Åbs: "Åby södra",
  Åby: "Åby södra",
  Nyc: "Nynäshamn",
  Klxv: "Kalix Västra",
  Sal: "Svalöv",
  Kgå: "Klostergården",
  "De.ham": "Hamburg",
  "Dk.höj": "Höje Taastrup",
  "Dk.rin": "Ringsted",
  xBäo: "Bläse kalkbrott",
  xBäu: "Bläse kalkbruk",
  Söt: "Södra utmarken",
  Tbg: "Tureberg",
  "Nl.ams": "Amsterdam",
  "Pt.lis": "Lissabon",
};

export default locations;
