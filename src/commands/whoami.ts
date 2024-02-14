const whoamiObj = {
  "message": [
    [
      "Bir ben var bende benden içeri",
      "Severim ben Seni candan içeru",
      "Yolum vardır bu erkandan içeru",
      "Şeriat, tarikat yoldur varana",
      "Hakikat meyvası andan içeru",
      "Dinin terk edenin küfürdür işi",
      "Ol ne küfürdür, imandan içeru",
      "Beni bende demen, ben de değilim",
      "Bir ben vardır bende, benden içeru",
      "Beni benden alana ermez elim",
      "Kim kadem basa Sultandan içeru",
      "Süleyman kuş dilin bilir dediler",
      "Süleyman var, Süleyman'dan içeru",
      "Tecelliden nasip erdi kimine",
      "Kiminin maksudu bundan içeru",
      "Senin aşkın beni benden alıptır",
      "Ne şirin dert bu, dermandan içeru",
      "Miskin Yunus, gözü tuş oldu Sana",
      "Kapıda bir kuldur, Sultandan içeru",
    ],
    [
      "BEN, kimsesiz seyyahı, meçhuller caddesinin...",
      "BEN, yankısından kaçan çocuk kendi sesinin...",
      "BEN, sırtında taşıyan işlenmedik günahı;",
      "Allah'ın körebesi, cinlerin padişahı...",
      "BEN, usanmaz bekçisi, yolcu inmez hanların;",
      "BEN tükenmez ormanı, ısınmaz külhanların...",
      "BEN, kutup yelkenlisi, buz tutmuş kayalarda;",
      "Öksüzün altın bahtı, yıldızdan mahyalarda...",
      "BEN, başı ağır gelmiş, boşlukta düşen fikir;",
      "Benliğin dolabında, kör ve çilekeş beygir...",
      "BEN Allah diyenlerin boyunlarında vebal;",
      "BEN bugünküne mazi, yarinkine istikbal...",
      "BEN, BEN, BEN; haritada deniz görmüş, boğulmuş;",
      "Dokuz köyün sahibi, dokuz köyden kovulmuş...",
      "Hep BEN, ayna ve hayal, hep BEN, pervane ve mum;",
      "Ölü ve Münker-Nekir, başdönmesi uçurum...",
    ],
    [
      "Ben: Karlı dağların deli rüzgârı..",
      "Ben: Tozlu yolların demirbaşıyım.",
      "Ben: suyu kurumuş sevgi pınarı...",
      "Ben: Toprak bekçisi, mezar taşıyım.",
      "Ben: Hep yıllar yılı kanayan çıban...",
      "Ben: Fikir sürüsün yitiren çoban.",
      "Ben: Hayâl peşinde çarıksız taban...",
      "Ben: gurbet ağzında bulgur aşıyım.",
      "Ben: çürük bir gemi aşk denizinde..",
      "Ben: Yağmur damlası dostun izinde.",
      "Ben: Yanıp kül oldum aşkın közünde...",
      "Ben: Kara sevdanın dert yoldaşıyım.",
      "Ben: Koyu düşmanım yersiz gülüşe",
      "Ben: Düşüvermişim bitmez bir düşe",
      "Ben: Bıldır ağlarım bu yıl ölmüşe...",
      "Ben: Bensiz duygunun ilk savaşıyım.",
      "Ben: Gönlü aklına uymayan deli..",
      "Ben: Az düşünceden doymayan deli.",
      "Ben: Beni ben diye saymayan deli...",
      "Bırakın, ben benden uzaklaşayım."
    ]
  ]
};


export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele) => {
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
