const stations = [
  {
    name: "会津大塩",
    kana: "あいづおおしお",
    roman: "Aizu-Ōshio",
    lines: ["只見線"],
    file: "stations/aizuoshio.html"
  },
  {
    name: "会津蒲生",
    kana: "あいづがもう",
    roman: "Aizu-Gamō",
    lines: ["只見線"],
    file: "stations/aizugamo.html"
  },
  {
    name: "会津川口",
    kana: "あいづかわぐち",
    roman: "Aizu-Kawaguchi",
    lines: ["只見線"],
    file: "stations/aizukawaguchi.html"
  },
  {
    name: "会津越川",
    kana: "あいづこすがわ",
    roman: "Aizu-Kosugawa",
    lines: ["只見線"],
    file: "stations/aizukosugawa.html"
  },
  {
    name: "会津坂本",
    kana: "あいづさかもと",
    roman: "Aizu-Sakamoto",
    lines: ["只見線"],
    file: "stations/aizusakamoto.html"
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
    name: "市城",
    kana: "いちしろ",
    roman: "Ichishiro",
    lines: ["吾妻線"],
    file: "stations/ichishiro.html"
  },
  {
    name: "入広瀬",
    kana: "いりひろせ",
    roman: "Irihirose",
    lines: ["只見線"],
    file: "stations/irihirose.html"
  },
  {
    name: "魚沼田中",
    kana: "うおぬまたなか",
    roman: "Uonuma-Tanaka",
    lines: ["只見線"],
    file: "stations/uonumatanaka.html"
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
    name: "小野上温泉",
    kana: "おのがみおんせん",
    roman: "Onogami-Onsen",
    lines: ["吾妻線"],
    file: "stations/onogamionsen.html"
  },
  {
    name: "上条",
    kana: "かみじょう",
    roman: "Kamijō",
    lines: ["只見線"],
    file: "stations/kamijo.html"
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
    name: "早戸",
    kana: "はやと",
    roman: "Hayato",
    lines: ["只見線"],
    file: "stations/hayato.html"
  },
  {
    name: "本名",
    kana: "ほんな",
    roman: "Honna",
    lines: ["只見線"],
    file: "stations/honna.html"
  },
  {
    name: "藪神",
    kana: "やぶかみ",
    roman: "Yabukami",
    lines: ["只見線"],
    file: "stations/yabukami.html"
  },
  {
    name: "若宮",
    kana: "わかみや",
    roman: "Wakamiya",
    lines: ["只見線"],
    file: "stations/wakamiya.html"
  }
];
