const stations = [
  {
    name: "会津大塩",
    kana: "あいづおおしお",
    roman: "Aizu-Ōshio",
    lines: ["只見線"],
    file: "stations/tadami/aizuoshio.html"
  },
  {
    name: "会津蒲生",
    kana: "あいづがもう",
    roman: "Aizu-Gamō",
    lines: ["只見線"],
    file: "stations/tadami/aizugamo.html"
  },
  {
    name: "会津川口",
    kana: "あいづかわぐち",
    roman: "Aizu-Kawaguchi",
    lines: ["只見線"],
    file: "stations/tadami/aizukawaguchi.html"
  },
  {
    name: "会津越川",
    kana: "あいづこすがわ",
    roman: "Aizu-Kosugawa",
    lines: ["只見線"],
    file: "stations/tadami/aizukosugawa.html"
  },
  {
    name: "会津坂本",
    kana: "あいづさかもと",
    roman: "Aizu-Sakamoto",
    lines: ["只見線"],
    file: "stations/tadami/aizusakamoto.html"
  },
  {
    name: "会津塩沢",
    kana: "あいづしおざわ",
    roman: "Aizu-Shiozawa",
    lines: ["只見線"],
    file: "stations/aizushiozawa.html"
  },
  {
    name: "会津高田",
    kana: "あいづたかだ",
    roman: "Aizu-Takada",
    lines: ["只見線"],
    file: "stations/aizutakada.html"
  },
  {
    name: "会津豊川",
    kana: "あいづとよかわ",
    roman: "Aizu-Toyokawa",
    lines: ["磐越西線"],
    file: "stations/aizutoyokawa.html"
  },
  {
    name: "会津中川",
    kana: "あいづなかがわ",
    roman: "Aizu-Nakagawa",
    lines: ["只見線"],
    file: "stations/aizunakagawa.html"
  },
  {
    name: "会津西方",
    kana: "あいづにしかた",
    roman: "Aizu-Nishikata",
    lines: ["只見線"],
    file: "stations/aizunishikata.html"
  },
  {
    name: "会津坂下",
    kana: "あいづばんげ",
    roman: "Aizu-Bange",
    lines: ["只見線"],
    file: "stations/aizubange.html"
  },
  {
    name: "会津桧原",
    kana: "あいづひのはら",
    roman: "Aizu-Hinohara",
    lines: ["只見線"],
    file: "stations/aizuhinohara.html"
  },
  {
    name: "会津本郷",
    kana: "あいづほんごう",
    roman: "Aizu-Hongō",
    lines: ["只見線"],
    file: "stations/aizuhongo.html"
  },
  {
    name: "会津水沼",
    kana: "あいづみずぬま",
    roman: "Aizu-Mizunuma",
    lines: ["只見線"],
    file: "stations/aizumizunuma.html"
  },
  {
    name: "会津宮下",
    kana: "あいづみやした",
    roman: "Aizu-Miyashita",
    lines: ["只見線"],
    file: "stations/aizumiyashita.html"
  },
  {
    name: "会津柳津",
    kana: "あいづやないづ",
    roman: "Aizu-Yanaizu",
    lines: ["只見線"],
    file: "stations/aizuyanaizu.html"
  },
  {
    name: "会津横田",
    kana: "あいづよこた",
    roman: "Aizu-Yokota",
    lines: ["只見線"],
    file: "stations/aizuyokota.html"
  },
  {
    name: "会津若松",
    kana: "あいづわかまつ",
    roman: "Aizu-Wakamatsu",
    lines: ["只見線","磐越西線"],
    file: "stations/aizuwakamatsu.html"
  },
  {
    name: "左沢",
    kana: "あてらざわ",
    roman: "Aterazawa",
    lines: ["左沢線"],
    file: "stations/aterazawa/aterazawa.html"
  },
  {
    name: "市城",
    kana: "いちしろ",
    roman: "Ichishiro",
    lines: ["吾妻線"],
    file: "stations/agatsuma/ichishiro.html"
  },
  {
    name: "入広瀬",
    kana: "いりひろせ",
    roman: "Irihirose",
    lines: ["只見線"],
    file: "stations/irihirose.html"
  },
  {
      name: "岩島",
    kana: "いわしま",
    roman: "Iwashima",
    lines: ["吾妻線"],
    file: "stations/agatsuma/iwashima.html"
  },
  {
    name: "魚沼田中",
    kana: "うおぬまたなか",
    roman: "Uonuma-Tanaka",
    lines: ["只見線"],
    file: "stations/uonumatanaka.html"
  },
  {
    name: "羽前金沢",
    kana: "うぜんかねざわ",
    roman: "Uzen-Kanezawa",
    lines: ["左沢線"],
    file: "stations/aterazawa/uzenkanezawa.html"
  },
  {
    name: "羽前高松",
    kana: "うぜんたかまつ",
    roman: "Uzen-Takamatsu",
    lines: ["左沢線"],
    file: "stations/aterazawa/uzentakamatsu.html"
  },
  {
    name: "羽前長崎",
    kana: "うぜんながさき",
    roman: "Uzen-Nagasaki",
    lines: ["左沢線"],
    file: "stations/aterazawa/uzennagasaki.html"
  },
  {
    name: "羽前山辺",
    kana: "うぜんやまべ",
    roman: "Uzen-Yamabe",
    lines: ["左沢線"],
    file: "stations/aterazawa/uzenyamabe.html"
  },
  {
    name: "祖母島",
    kana: "うばしま",
    roman: "Ubashima",
    lines: ["吾妻線"],
    file: "stations/agatsuma/ubashima.html"
  },
  {
    name: "越後須原",
    kana: "えちごすはら",
    roman: "Echigo-Suhara",
    lines: ["只見線"],
    file: "stations/echigosuhara.html"
  },
  {
    name: "越後広瀬",
    kana: "えちごひろせ",
    roman: "Echigo-Hirose",
    lines: ["只見線"],
    file: "stations/echigohirose.html"
  },
  {
    name: "大白川",
    kana: "おおしらかわ",
    roman: "Ōshirakawa",
    lines: ["只見線"],
    file: "stations/oshirakawa.html"
  },
  {
    name: "大前",
    kana: "おおまえ",
    roman: "Ōmae",
    lines: ["吾妻線"],
    file: "stations/agatsuma/omae.html"
  },
  {
    name: "小野上",
    kana: "おのがみ",
    roman: "Onogami",
    lines: ["吾妻線"],
    file: "stations/agatsuma/onogami.html"
  },
  {
    name: "小野上温泉",
    kana: "おのがみおんせん",
    roman: "Onogami-Onsen",
    lines: ["吾妻線"],
    file: "stations/agatsuma/onogamionsen.html"
  },
  {
    name: "金島",
    kana: "かなしま",
    roman: "Kanashima",
    lines: ["吾妻線"],
    file: "stations/agatsuma/kanashima.html"
  },
  {
    name: "上条",
    kana: "かみじょう",
    roman: "Kamijō",
    lines: ["只見線"],
    file: "stations/kamijo.html"
  },
  {
    name: "川原湯温泉",
    kana: "かわらゆおんせん",
    roman: "Kawarayu-Onsen",
    lines: ["吾妻線"],
    file: "stations/agatsuma/kawarayuonsen.html"
  },
  {
    name: "北山形",
    kana: "きたやまがた",
    roman: "Kita-Yamagata",
    lines: ["奥羽本線","左沢線","仙山線"],
    file: "stations/aterazawa/kitayamagata.html"
  },
  {
    name: "群馬大津",
    kana: "ぐんまおおつ",
    roman: "Gumma-Ōtsu",
    lines: ["吾妻線"],
    file: "stations/agatsuma/gummaotsu.html"
  },
  {
    name: "群馬原町",
    kana: "ぐんまはらまち",
    roman: "Gumma-Haramachi",
    lines: ["吾妻線"],
    file: "stations/agatsuma/gummaharamachi.html"
  },
  {
    name: "小出",
    kana: "こいで",
    roman: "Koide",
    lines: ["只見線","上越線"],
    file: "stations/koide.html"
  },
  {
    name: "郷戸",
    kana: "ごうど",
    roman: "Gōdo",
    lines: ["只見線"],
    file: "stations/godo.html"
  },
  {
    name: "郷原",
    kana: "ごうばら",
    roman: "Gōbara",
    lines: ["吾妻線"],
    file: "stations/agatsuma/gobara.html"
  },
  {
    name: "寒河江",
    kana: "さがえ",
    roman: "Sagae",
    lines: ["左沢線"],
    file: "stations/aterazawa/sagae.html"
  },
  {
    name: "柴橋",
    kana: "しばはし",
    roman: "Shibahashi",
    lines: ["左沢線"],
    file: "stations/aterazawa/shibahashi.html"
  },
  {
    name: "渋川（伊香保温泉・榛名湖口）",
    kana: "しぶかわ",
    roman: "Shibukawa",
    lines: ["上越線","吾妻線"],
    file: "stations/agatsuma/shibukawa.html"
  },
  {
    name: "滝谷",
    kana: "たきや",
    roman: "Takiya",
    lines: ["只見線"],
    file: "stations/takiya.html"
  },
  {
    name: "只見",
    kana: "ただみ",
    roman: "Tadami",
    lines: ["只見線"],
    file: "stations/tadami.html"
  },
  {
    name: "塔寺",
    kana: "とうでら",
    roman: "Tōdera",
    lines: ["只見線"],
    file: "stations/todera.html"
  },
  {
    name: "中之条（四万・沢渡温泉口）",
    kana: "なかのじょう",
    roman: "Nakanojō",
    lines: ["吾妻線"],
    file: "stations/agatsuma/nakanojo.html"
  },
  {
    name: "長野原草津口",
    kana: "ながのはらくさつぐち",
    roman: "Naganoharakusatsuguchi",
    lines: ["吾妻線"],
    file: "stations/agatsuma/naganoharakusatsuguchi.html"
  },
  {
    name: "七日町",
    kana: "なぬかまち",
    roman: "Aizu-Gamō",
    lines: ["只見線"],
    file: "stations/nanukamachi.html"
  },
  {
    name: "新鶴",
    kana: "にいつる",
    roman: "Niitsuru",
    lines: ["只見線"],
    file: "stations/nitsuru.html"
  },
  {
    name: "西寒河江",
    kana: "にしさがえ",
    roman: "Nishi-Sagae",
    lines: ["左沢線"],
    file: "stations/aterazawa/nishisagae.html"
  },
  {
    name: "西若松",
    kana: "にしわかまつ",
    roman: "Nishi-Wakamatsu",
    lines: ["只見線","会津鉄道会津線"],
    file: "stations/nishiwakamatsu.html"
  },
  {
    name: "根岸（福島県）",
    kana: "ねぎし",
    roman: "Negishi",
    lines: ["只見線"],
    file: "stations/negishifukushima.html"
  },
  {
    name: "羽根尾",
    kana: "はねお",
    roman: "Haneo",
    lines: ["吾妻線"],
    file: "stations/agatsuma/haneo.html"
  },
  {
    name: "早戸",
    kana: "はやと",
    roman: "Hayato",
    lines: ["只見線"],
    file: "stations/hayato.html"
  },
  {
    name: "東金井",
    kana: "ひがしかない",
    roman: "Higashi-Kanai",
    lines: ["左沢線"],
    file: "stations/aterazawa/higashikanai.html"
  },
  {
    name: "袋倉",
    kana: "ふくろぐら",
    roman: "Fukurogura",
    lines: ["吾妻線"],
    file: "stations/agatsuma/fukurogura.html"
  },
  {
    name: "本名",
    kana: "ほんな",
    roman: "Honna",
    lines: ["只見線"],
    file: "stations/honna.html"
  },
  {
    name: "万座・鹿沢口",
    kana: "まんざかざわぐち",
    roman: "Manza-Kazawaguchi",
    lines: ["吾妻線"],
    file: "stations/agatsuma/manzakazawaguchi.html"
  },
  {
    name: "南寒河江",
    kana: "みなみさがえ",
    roman: "Minami-Sagae",
    lines: ["左沢線"],
    file: "stations/aterazawa/minamisagae.html"
  },
  {
    name: "矢倉",
    kana: "やぐら",
    roman: "Yagura",
    lines: ["吾妻線"],
    file: "stations/agatsuma/yagura.html"
  },
  {
    name: "藪神",
    kana: "やぶかみ",
    roman: "Yabukami",
    lines: ["只見線"],
    file: "stations/yabukami.html"
  },
  {
    name: "山形",
    kana: "やまがた",
    roman: "Yamagata",
    lines: ["山形新幹線","奥羽本線","左沢線","仙山線"],
    file: "stations/aterazawa/yamagata.html"
  },
  {
    name: "若宮",
    kana: "わかみや",
    roman: "Wakamiya",
    lines: ["只見線"],
    file: "stations/wakamiya.html"
  }
];
