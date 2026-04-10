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
    name: "秋川",
    kana: "あきがわ",
    roman: "Akigawa",
    lines: ["五日市線"],
    file: "stations/itsukaichi/akigawa.html"
  },
  {
    name: "足滝",
    kana: "あしだき",
    roman: "Ashidaki",
    lines: ["飯山線"],
    file: "stations/iiyama/ashidaki.html"
  },
  {
    name: "網代",
    kana: "あじろ",
    roman: "Ajiro",
    lines: ["伊東線"],
    file: "stations/ito/ajiro.html"
  },
  {
    name: "熱海",
    kana: "あたみ",
    roman: "Atami",
    lines: ["東海道線(JR東日本,JR東海)","伊東線","東海道新幹線"],
    file: "stations/tokaido/atami.html"
  },
  {
    name: "左沢",
    kana: "あてらざわ",
    roman: "Aterazawa",
    lines: ["左沢線"],
    file: "stations/aterazawa/aterazawa.html"
  },
  {
    name: "飯山",
    kana: "いいやま",
    roman: "Iiyama",
    lines: ["北陸新幹線","飯山線"],
    file: "stations/iiyama/iiyama.html"
  },
  {
    name: "石巻",
    kana: "いしのまき",
    roman: "Ishinomaki",
    lines: ["仙石東北ライン","仙石線","石巻線"],
    file: "stations/ishinomaki/ishinomaki.html"
  },
  {
    name: "伊豆多賀",
    kana: "いずたが",
    roman: "Izu-Taga",
    lines: ["伊東線"],
    file: "stations/ito/izutaga.html"
  },
  {
    name: "市城",
    kana: "いちしろ",
    roman: "Ichishiro",
    lines: ["吾妻線"],
    file: "stations/agatsuma/ichishiro.html"
  },
  {
    name: "伊東",
    kana: "いとう",
    roman: "Itō",
    lines: ["伊東線","伊豆急行線"],
    file: "stations/ito/ito.html"
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
    name: "魚沼中条",
    kana: "うおぬまなかじょう",
    roman: "Uonuma-Nakajō",
    lines: ["飯山線"],
    file: "stations/iiyama/uonumanakajo.html"
  },
  {
    name: "宇佐美",
    kana: "うさみ",
    roman: "Usami",
    lines: ["伊東線"],
    file: "stations/ito/usami.html"
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
    name: "内ケ巻",
    kana: "うちがまき",
    roman: "Uchigamaki",
    lines: ["飯山線"],
    file: "stations/iiyama/uchigamaki.html"
  },
  {
    name: "祖母島",
    kana: "うばしま",
    roman: "Ubashima",
    lines: ["吾妻線"],
    file: "stations/agatsuma/ubashima.html"
  },
  {
    name: "浦宿",
    kana: "うらしゅく",
    roman: "Urashuku",
    lines: ["仙石東北ライン","石巻線"],
    file: "stations/ishinomaki/urashuku.html"
  },
  {
    name: "越後岩沢",
    kana: "えちごいわさわ",
    roman: "Echigo-Iwasawa",
    lines: ["飯山線"],
    file: "stations/iiyama/echigoiwasawa.html"
  },
  {
    name: "越後川口",
    kana: "えちごかわぐち",
    roman: "Echigo-Kawaguchi",
    lines: ["飯山線","上越線"],
    file: "stations/iiyama/echigokawaguchi.html"
  },
  {
    name: "越後鹿渡",
    kana: "えちごしかわたり",
    roman: "Echigo-Shikawatari",
    lines: ["飯山線"],
    file: "stations/iiyama/echigoshikawatari.html"
  },
  {
    name: "越後須原",
    kana: "えちごすはら",
    roman: "Echigo-Suhara",
    lines: ["只見線"],
    file: "stations/echigosuhara.html"
  },
  {
    name: "越後田沢",
    kana: "えちごたざわ",
    roman: "Echigo-Tazawa",
    lines: ["飯山線"],
    file: "stations/iiyama/echigotazawa.html"
  },
  {
    name: "越後田中",
    kana: "えちごたなか",
    roman: "Echigo-Tanaka",
    lines: ["飯山線"],
    file: "stations/iiyama/echigotanaka.html"
  },
  {
    name: "越後広瀬",
    kana: "えちごひろせ",
    roman: "Echigo-Hirose",
    lines: ["只見線"],
    file: "stations/echigohirose.html"
  },
  {
    name: "越後水沢",
    kana: "えちごみずさわ",
    roman: "Echigo-Mizusawa",
    lines: ["飯山線"],
    file: "stations/iiyama/echigomizusawa.html"
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
    name: "女川",
    kana: "おながわ",
    roman: "Onagawa",
    lines: ["仙石東北ライン","石巻線"],
    file: "stations/ishinomaki/onagawa.html"
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
    name: "替佐",
    kana: "かえさ",
    roman: "Kaesa",
    lines: ["飯山線"],
    file: "stations/iiyama/kaesa.html"
  },
  {
    name: "佳景山",
    kana: "かけやま",
    roman: "Kakeyama",
    lines: ["石巻線"],
    file: "stations/ishinomaki/kakeyama.html"
  },
  {
    name: "金島",
    kana: "かなしま",
    roman: "Kanashima",
    lines: ["吾妻線"],
    file: "stations/agatsuma/kanashima.html"
  },
  {
    name: "鹿又",
    kana: "かのまた",
    roman: "Kanomata",
    lines: ["石巻線"],
    file: "stations/ishinomaki/kanomata.html"
  },
  {
    name: "上今井",
    kana: "かみいまい",
    roman: "Kami-Imai",
    lines: ["飯山線"],
    file: "stations/iiyama/kamiimai.html"
  },
  {
    name: "上桑名川",
    kana: "かみくわながわ",
    roman: "Kami-Kuwanagawa",
    lines: ["飯山線"],
    file: "stations/iiyama/kamikuwanagawa.html"
  },
  {
    name: "上境",
    kana: "かみさかい",
    roman: "Kami-Sakai",
    lines: ["飯山線"],
    file: "stations/iiyama/kamisakai.html"
  },
  {
    name: "上条",
    kana: "かみじょう",
    roman: "Kamijō",
    lines: ["只見線"],
    file: "stations/kamijo.html"
  },
  {
    name: "上涌谷",
    kana: "かみわくや",
    roman: "Kami-Wakuya",
    lines: ["石巻線","気仙沼線"],
    file: "stations/ishinomaki/kamiwakuya.html"
  },
  {
    name: "川原湯温泉",
    kana: "かわらゆおんせん",
    roman: "Kawarayu-Onsen",
    lines: ["吾妻線"],
    file: "stations/agatsuma/kawarayuonsen.html"
  },
  {
    name: "北飯山",
    kana: "きたいいやま",
    roman: "Kita-Iiyama",
    lines: ["飯山線"],
    file: "stations/iiyama/kitaiiyama.html"
  },
  {
    name: "北長野",
    kana: "きたながの",
    roman: "Kita-Nagano",
    lines: ["北しなの線","飯山線"],
    file: "stations/iiyama/kitanagano.html"
  },
  {
    name: "北山形",
    kana: "きたやまがた",
    roman: "Kita-Yamagata",
    lines: ["奥羽本線","左沢線","仙山線"],
    file: "stations/aterazawa/kitayamagata.html"
  },
  {
    name: "来宮",
    kana: "きのみや",
    roman: "Kinomiya",
    lines: ["伊東線"],
    file: "stations/ito/kinomiya.html"
  },
  {
    name: "熊川",
    kana: "くまがわ",
    roman: "Kumagawa",
    lines: ["五日市線"],
    file: "stations/itsukaichi/kumagawa.html"
  },
  {
    name: "桑名川",
    kana: "くわながわ",
    roman: "Kuwanagawa",
    lines: ["飯山線"],
    file: "stations/iiyama/kuwanagawa.html"
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
    name: "下条",
    kana: "げじょう",
    roman: "Gejō",
    lines: ["飯山線"],
    file: "stations/iiyama/gejo.html"
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
    name: "小牛田",
    kana: "こごた",
    roman: "Kogota",
    lines: ["東北本線","陸羽東線","石巻線","気仙沼線"],
    file: "stations/ishinomaki/tategahana.html"
  },
  {
    name: "寒河江",
    kana: "さがえ",
    roman: "Sagae",
    lines: ["左沢線"],
    file: "stations/aterazawa/sagae.html"
  },
  {
    name: "沢田",
    kana: "さわだ",
    roman: "Sawada",
    lines: ["仙石東北ライン","石巻線"],
    file: "stations/ishinomaki/sawada.html"
  },
  {
    name: "三才",
    kana: "さんさい",
    roman: "Sansai",
    lines: ["北しなの線","飯山線"],
    file: "stations/iiyama/sansai.html"
  },
  {
    name: "信濃浅野",
    kana: "しなのあさの",
    roman: "Shinano-Asano",
    lines: ["飯山線"],
    file: "stations/iiyama/shinanoasano.html"
  },
  {
    name: "信濃白鳥",
    kana: "しなのしらとり",
    roman: "Shinano-Shiratori",
    lines: ["飯山線"],
    file: "stations/iiyama/shinanoshiratori.html"
  },
  {
    name: "信濃平",
    kana: "しなのたいら",
    roman: "Shinano-Taira",
    lines: ["飯山線"],
    file: "stations/iiyama/tategahana.html"
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
    name: "曽波神",
    kana: "そばのかみ",
    roman: "Sobanokami",
    lines: ["石巻線"],
    file: "stations/ishinomaki/sobanokami.html"
  },
  {
    name: "立ケ花",
    kana: "たてがはな",
    roman: "Tategahana",
    lines: ["飯山線"],
    file: "stations/iiyama/tategahana.html"
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
    name: "津南",
    kana: "つなん",
    roman: "Tsunan",
    lines: ["飯山線"],
    file: "stations/iiyama/tsunan.html"
  },
  {
    name: "土市",
    kana: "どいち",
    roman: "Doichi",
    lines: ["飯山線"],
    file: "stations/iiyama/doichi.html"
  },
  {
    name: "塔寺",
    kana: "とうでら",
    roman: "Tōdera",
    lines: ["只見線"],
    file: "stations/todera.html"
  },
  {
    name: "十日町",
    kana: "とおかまち",
    roman: "Tōkamachi",
    lines: ["飯山線","北越急行ほくほく線"],
    file: "stations/iiyama/tokamachi.html"
  },
  {
    name: "戸狩野沢温泉",
    kana: "とがりのざわおんせん",
    roman: "Togarinozawa-Onsen",
    lines: ["飯山線"],
    file: "stations/iiyama/togarinozawaonsen.html"
  },
  {
    name: "豊野",
    kana: "とよの",
    roman: "Toyono",
    lines: ["北しなの線","飯山線"],
    file: "stations/iiyama/toyono.html"
  },
  {
    name: "中之条（四万・沢渡温泉口）",
    kana: "なかのじょう",
    roman: "Nakanojō",
    lines: ["吾妻線"],
    file: "stations/agatsuma/nakanojo.html"
  },
  {
    name: "長野",
    kana: "ながの",
    roman: "Nagano",
    lines: ["北陸新幹線","信越本線","篠ノ井線","しなの鉄道線","北しなの線","飯山線","長野電鉄長野線"],
    file: "stations/iiyama/nagano.html"
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
    name: "西大滝",
    kana: "にしおおたき",
    roman: "Nishi-Ōtaki",
    lines: ["飯山線"],
    file: "stations/iiyama/nishiotaki.html"
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
    name: "拝島",
    kana: "はいじま",
    roman: "Haijima",
    lines: ["青梅線","五日市線","八高線","西武拝島線"],
    file: "stations/itsukaichi/haijima.html"
  },
  {
    name: "蓮",
    kana: "はちす",
    roman: "Hachisu",
    lines: ["飯山線"],
    file: "stations/iiyama/hachisu.html"
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
    name: "東秋留",
    kana: "ひがしあきる",
    roman: "Higashi-Akiru",
    lines: ["五日市線"],
    file: "stations/itsukaichi/higashiakiru.html"
  },
  {
    name: "東金井",
    kana: "ひがしかない",
    roman: "Higashi-Kanai",
    lines: ["左沢線"],
    file: "stations/aterazawa/higashikanai.html"
  },
  {
    name: "平滝",
    kana: "ひらたき",
    roman: "Hirataki",
    lines: ["飯山線"],
    file: "stations/iiyama/hirataki.html"
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
    name: "前谷地",
    kana: "まえやち",
    roman: "Maeyachi",
    lines: ["石巻線","気仙沼線","気仙沼線BRT"],
    file: "stations/ishinomaki/maeyachi.html"
  },
  {
    name: "万石浦",
    kana: "まんごくうら",
    roman: "Mangokuura",
    lines: ["仙石東北ライン","石巻線"],
    file: "stations/ishinomaki/mangokuura.html"
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
    name: "熊川",
    kana: "くまがわ",
    roman: "Kumagawa",
    lines: ["五日市線"],
    file: "stations/itsukaichi/kumagawa.html"
  },
  {
    name: "武蔵五日市",
    kana: "むさしいつかいち",
    roman: "Musashi-Itsukaichi",
    lines: ["五日市線"],
    file: "stations/itsukaichi/musashiitsukaichi.html"
  },
  {
    name: "武蔵引田",
    kana: "むさしひきだ",
    roman: "Musashi-Hikida",
    lines: ["五日市線"],
    file: "stations/itsukaichi/musashihikida.html"
  },
  {
    name: "武蔵増戸",
    kana: "むさしますこ",
    roman: "Musashi-Masuko",
    lines: ["五日市線"],
    file: "stations/itsukaichi/musashimasuko.html"
  },
  {
    name: "森宮野原",
    kana: "もりみやのはら",
    roman: "Morimiyanohara",
    lines: ["飯山線"],
    file: "stations/iiyama/morimiyanohara.html"
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
    name: "横倉",
    kana: "よこくら",
    roman: "Yokokura",
    lines: ["飯山線"],
    file: "stations/iiyama/yokokura.html"
  },
  {
    name: "陸前稲井",
    kana: "りくぜんいない",
    roman: "Rikuzen-Inai",
    lines: ["仙石東北ライン","石巻線"],
    file: "stations/ishinomaki/rikuzeninai.html"
  },
  {
    name: "若宮",
    kana: "わかみや",
    roman: "Wakamiya",
    lines: ["只見線"],
    file: "stations/wakamiya.html"
  },
  {
    name: "涌谷",
    kana: "わくや",
    roman: "Wakuya",
    lines: ["石巻線","気仙沼線"],
    file: "stations/ishinomaki/wakuya.html"
  },
  {
    name: "渡波",
    kana: "わたのは",
    roman: "Watanoha",
    lines: ["仙石東北ライン","石巻線"],
    file: "stations/ishinomaki/watanoha.html"
  }
];
