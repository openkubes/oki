export type EpiloguePage = {
  readonly id: "earth-island" | "solar-family";
  readonly eyebrow: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly image: string;
  readonly alt: string;
};

type EpilogueLocale =
  | "de"
  | "en"
  | "es"
  | "fa"
  | "zh"
  | "ja"
  | "ar"
  | "fr"
  | "hi"
  | "pt";

export const epilogueCopy = {
  de: [
    {
      id: "earth-island",
      eyebrow: "Epilog",
      title: "Auch unsere Erde ist eine Insel.",
      paragraphs: [
        "Oki, Mio, Aia und ihre Freunde blickten in den Himmel.\nDort leuchtete die Erde wie eine blaue Insel im großen Meer der Sterne.",
        "„Auf dieser Insel leben wir alle“, sagte Oki.",
        "Mios Lichtkern pulsierte leise.\n„Dann gehören ihre Wege, ihre Versprechen und ihre Zukunft uns allen.“",
        "Aia lächelte.\n„Und niemand muss allein auf sie achten. Das können wir gemeinsam tun.“",
        "**Unsere Erde ist verschieden, lebendig und kostbar – und sie ist unser gemeinsames Zuhause.**",
      ],
      image: "/epilogue/earth-island.png",
      alt: "Oki, Mio, Aia und ihre vier Sensorfreunde stehen am Ufer einer Insel und betrachten die Erde im Meer der Sterne.",
    },
    {
      id: "solar-family",
      eyebrow: "Epilog",
      title: "Keine Insel ist ganz allein.",
      paragraphs: [
        "Die Erde zieht gemeinsam mit ihrem Mond um die Sonne.\nAuch Mars, Venus, Jupiter, Saturn und die anderen Planeten folgen ihren eigenen Bahnen.",
        "Jede Welt ist anders.\nJede hat ihren eigenen Platz und ihren eigenen Weg.\nUnd doch gehören sie alle zu derselben großen Familie rund um die Sonne.",
        "„Verbunden zu sein bedeutet nicht, gleich zu sein“, sagte Mio.",
        "Oki nickte.\n„Es bedeutet, den eigenen Weg zu kennen und trotzdem aufeinander zu achten.“",
        "Aia blickte zu den leuchtenden Bahnen.",
        "**Vielleicht beginnt jede gute Gemeinschaft mit dieser Erkenntnis: Wir sind verschieden – aber wir sind nicht allein.**",
      ],
      image: "/epilogue/solar-family.png",
      alt: "Die Sonne leuchtet in der Mitte, während Erde und Mond, Mars, Venus, Jupiter, Saturn und weitere Planeten durch sanfte Lichtbahnen verbunden sind.",
    },
  ],
  en: [
    {
      id: "earth-island",
      eyebrow: "Epilogue",
      title: "Our Earth is an island, too.",
      paragraphs: [
        "Oki, Mio, Aia, and their friends looked up at the sky.\nThere, Earth shone like a blue island in the great sea of stars.",
        "“We all live on this island,” said Oki.",
        "Mio’s light core pulsed softly.\n“Then its paths, its promises, and its future belong to all of us.”",
        "Aia smiled.\n“And no one has to look after it alone. We can do that together.”",
        "**Our Earth is diverse, alive, and precious—and it is our shared home.**",
      ],
      image: "/epilogue/earth-island.png",
      alt: "Oki, Mio, Aia, and their four sensor friends stand on an island shore and look toward Earth in the sea of stars.",
    },
    {
      id: "solar-family",
      eyebrow: "Epilogue",
      title: "No island is ever completely alone.",
      paragraphs: [
        "Together with its Moon, Earth travels around the Sun.\nMars, Venus, Jupiter, Saturn, and the other planets follow their own paths, too.",
        "Every world is different.\nEach has its own place and its own path.\nAnd yet they all belong to the same great family around the Sun.",
        "“Being connected does not mean being the same,” said Mio.",
        "Oki nodded.\n“It means knowing your own path and still looking out for one another.”",
        "Aia gazed at the glowing paths.",
        "**Perhaps every good community begins with this realization: We are different—but we are not alone.**",
      ],
      image: "/epilogue/solar-family.png",
      alt: "The Sun glows at the center while Earth and Moon, Mars, Venus, Jupiter, Saturn, and other planets are connected by gentle paths of light.",
    },
  ],
  es: [
    {
      id: "earth-island",
      eyebrow: "Epílogo",
      title: "Nuestra Tierra también es una isla.",
      paragraphs: [
        "Oki, Mio, Aia y sus amigos miraron al cielo.\nAllí, la Tierra brillaba como una isla azul en el gran mar de estrellas.",
        "«En esta isla vivimos todos», dijo Oki.",
        "El núcleo de luz de Mio palpitó suavemente.\n«Entonces sus caminos, sus promesas y su futuro nos pertenecen a todos.»",
        "Aia sonrió.\n«Y nadie tiene que cuidarla a solas. Podemos hacerlo juntos.»",
        "**Nuestra Tierra es diversa, está viva y es valiosa: es nuestro hogar compartido.**",
      ],
      image: "/epilogue/earth-island.png",
      alt: "Oki, Mio, Aia y sus cuatro amigos sensores contemplan la Tierra desde la orilla de una isla, en medio del mar de estrellas.",
    },
    {
      id: "solar-family",
      eyebrow: "Epílogo",
      title: "Ninguna isla está completamente sola.",
      paragraphs: [
        "La Tierra viaja alrededor del Sol junto con su Luna.\nMarte, Venus, Júpiter, Saturno y los demás planetas también siguen sus propios caminos.",
        "Cada mundo es diferente.\nCada uno tiene su lugar y su propio camino.\nY, aun así, todos pertenecen a la misma gran familia alrededor del Sol.",
        "«Estar conectados no significa ser iguales», dijo Mio.",
        "Oki asintió.\n«Significa conocer el propio camino y, aun así, cuidarnos unos a otros.»",
        "Aia contempló los caminos luminosos.",
        "**Quizá toda buena comunidad comience al comprender esto: somos diferentes, pero no estamos solos.**",
      ],
      image: "/epilogue/solar-family.png",
      alt: "El Sol brilla en el centro mientras la Tierra y la Luna, Marte, Venus, Júpiter, Saturno y otros planetas están unidos por suaves caminos de luz.",
    },
  ],
  fa: [
    {
      id: "earth-island",
      eyebrow: "پایان داستان",
      title: "زمین ما هم یک جزیره است.",
      paragraphs: [
        "اوکی، میو، آیا و دوستانشان به آسمان نگاه کردند.\nآنجا زمین مانند جزیره‌ای آبی در دریای بزرگ ستاره‌ها می‌درخشید.",
        "اوکی گفت: «همهٔ ما روی این جزیره زندگی می‌کنیم.»",
        "هستهٔ نور میو آرام تپید.\n«پس راه‌ها، قول‌ها و آیندهٔ آن به همهٔ ما تعلق دارد.»",
        "آیا لبخند زد.\n«و هیچ‌کس مجبور نیست به‌تنهایی از آن مراقبت کند. می‌توانیم با هم این کار را انجام دهیم.»",
        "**زمین ما گوناگون، زنده و ارزشمند است—و خانهٔ مشترک همهٔ ماست.**",
      ],
      image: "/epilogue/earth-island.png",
      alt: "اوکی، میو، آیا و چهار دوست حسگرشان کنار ساحل یک جزیره ایستاده‌اند و به زمین در دریای ستاره‌ها نگاه می‌کنند.",
    },
    {
      id: "solar-family",
      eyebrow: "پایان داستان",
      title: "هیچ جزیره‌ای کاملاً تنها نیست.",
      paragraphs: [
        "زمین همراه با ماه خود به دور خورشید می‌گردد.\nمریخ، زهره، مشتری، زحل و سیاره‌های دیگر نیز راه‌های خودشان را دنبال می‌کنند.",
        "هر جهان متفاوت است.\nهرکدام جای خود و راه خود را دارد.\nبا این حال، همه به یک خانوادهٔ بزرگ در پیرامون خورشید تعلق دارند.",
        "میو گفت: «پیوند داشتن یعنی شبیه هم بودن نیست.»",
        "اوکی سر تکان داد.\n«یعنی راه خودت را بشناسی و در عین حال مراقب یکدیگر باشی.»",
        "آیا به مسیرهای نورانی نگاه کرد.",
        "**شاید هر جامعهٔ خوب با این شناخت آغاز شود: ما متفاوتیم—اما تنها نیستیم.**",
      ],
      image: "/epilogue/solar-family.png",
      alt: "خورشید در مرکز می‌درخشد و زمین و ماه، مریخ، زهره، مشتری، زحل و سیاره‌های دیگر با مسیرهای نرم نور به هم پیوند خورده‌اند.",
    },
  ],
  zh: [
    {
      id: "earth-island",
      eyebrow: "尾声",
      title: "地球也是一座岛。",
      paragraphs: [
        "奥奇、米奥、艾娅和朋友们抬头望向天空。\n在那里，地球像一座蓝色的岛，闪耀在浩瀚的星海中。",
        "“我们都生活在这座岛上。”奥奇说。",
        "米奥胸前的光核轻轻跳动。\n“那么，它的道路、它的承诺和它的未来，就属于我们所有人。”",
        "艾娅笑了。\n“而且，没有人必须独自照顾它。我们可以一起做。”",
        "**我们的地球丰富多彩、生机勃勃而又珍贵——它是我们共同的家。**",
      ],
      image: "/epilogue/earth-island.png",
      alt: "奥奇、米奥、艾娅和四位传感器朋友站在岛岸上，望着星海中的地球。",
    },
    {
      id: "solar-family",
      eyebrow: "尾声",
      title: "没有一座岛真正孤单。",
      paragraphs: [
        "地球带着月球绕太阳运行。\n火星、金星、木星、土星和其他行星也沿着各自的轨道前行。",
        "每个世界都不一样。\n每个世界都有自己的位置和道路。\n但它们都属于太阳身边的同一个大家庭。",
        "“彼此相连，并不意味着必须相同。”米奥说。",
        "奥奇点点头。\n“这意味着，知道自己的道路，也依然愿意彼此照顾。”",
        "艾娅望着那些发光的轨道。",
        "**也许，每个美好的共同体都始于这样的领悟：我们彼此不同——但我们并不孤单。**",
      ],
      image: "/epilogue/solar-family.png",
      alt: "太阳在中央发光，地球和月球、火星、金星、木星、土星与其他行星由柔和的光之轨道相连。",
    },
  ],
  ja: [
    {
      id: "earth-island",
      eyebrow: "エピローグ",
      title: "地球も、ひとつの島。",
      paragraphs: [
        "オキ、ミオ、アイアと友だちは空を見上げました。\nそこには地球が、星の大きな海に浮かぶ青い島のように輝いていました。",
        "「この島には、ぼくたちみんなが暮らしている」と、オキが言いました。",
        "ミオの光の核が、そっと脈打ちました。\n「それなら、この島の道も、約束も、未来も、みんなのものだね」",
        "アイアは笑いました。\n「だれかひとりで守らなくてもいいの。みんなで大切にできるよ」",
        "**地球は、さまざまで、生きていて、かけがえのない、みんなの家です。**",
      ],
      image: "/epilogue/earth-island.png",
      alt: "オキ、ミオ、アイアと4人のセンサー仲間が島の岸辺に立ち、星の海に浮かぶ地球を見つめている。",
    },
    {
      id: "solar-family",
      eyebrow: "エピローグ",
      title: "どの島も、まったくひとりではない。",
      paragraphs: [
        "地球は月といっしょに、太陽のまわりを進みます。\n火星、金星、木星、土星、そしてほかの惑星も、それぞれの道を進んでいます。",
        "どの世界も違います。\nそれぞれに自分の場所と、自分の道があります。\nそれでも、みんな太陽を囲むひとつの大きな家族です。",
        "「つながっていることは、同じであることじゃない」と、ミオが言いました。",
        "オキはうなずきました。\n「自分の道を知りながら、おたがいを気づかうことなんだ」",
        "アイアは輝く道を見つめました。",
        "**きっと、よい仲間の輪は、この気づきから始まります。わたしたちは違う。でも、ひとりではありません。**",
      ],
      image: "/epilogue/solar-family.png",
      alt: "太陽が中央で輝き、地球と月、火星、金星、木星、土星、ほかの惑星がやわらかな光の道でつながっている。",
    },
  ],
  ar: [
    {
      id: "earth-island",
      eyebrow: "الخاتمة",
      title: "حتى أرضنا جزيرة.",
      paragraphs: [
        "نظر أوكي وميو وآيا وأصدقاؤهم إلى السماء.\nهناك أشرقت الأرض كجزيرة زرقاء في بحر النجوم الكبير.",
        "قال أوكي: «نعيش جميعًا على هذه الجزيرة.»",
        "نبض قلب ميو المضيء برفق.\n«إذن طرقها ووعودها ومستقبلها تخصنا جميعًا.»",
        "ابتسمت آيا.\n«ولا يجب أن يعتني بها أحد بمفرده. يمكننا أن نفعل ذلك معًا.»",
        "**أرضنا متنوعة وحية وثمينة—وهي بيتنا المشترك.**",
      ],
      image: "/epilogue/earth-island.png",
      alt: "يقف أوكي وميو وآيا وأصدقاؤهم المستشعرون الأربعة على شاطئ جزيرة وينظرون إلى الأرض في بحر النجوم.",
    },
    {
      id: "solar-family",
      eyebrow: "الخاتمة",
      title: "لا توجد جزيرة وحيدة تمامًا.",
      paragraphs: [
        "تدور الأرض مع قمرها حول الشمس.\nويتبع المريخ والزهرة والمشتري وزحل والكواكب الأخرى مساراتها الخاصة أيضًا.",
        "كل عالم مختلف.\nولكل عالم مكانه ومساره.\nومع ذلك تنتمي كلها إلى العائلة الكبيرة نفسها حول الشمس.",
        "قال ميو: «أن نكون مترابطين لا يعني أن نكون متشابهين.»",
        "أومأ أوكي.\n«بل يعني أن يعرف كل منا طريقه، ومع ذلك نهتم بعضنا ببعض.»",
        "نظرت آيا إلى المسارات المضيئة.",
        "**ربما يبدأ كل مجتمع جيد بهذه الحقيقة: نحن مختلفون—لكننا لسنا وحدنا.**",
      ],
      image: "/epilogue/solar-family.png",
      alt: "تضيء الشمس في المركز، بينما ترتبط الأرض والقمر والمريخ والزهرة والمشتري وزحل وكواكب أخرى بمسارات لطيفة من الضوء.",
    },
  ],
  fr: [
    {
      id: "earth-island",
      eyebrow: "Épilogue",
      title: "Notre Terre aussi est une île.",
      paragraphs: [
        "Oki, Mio, Aia et leurs amis levèrent les yeux vers le ciel.\nLà-haut, la Terre brillait comme une île bleue dans le grand océan des étoiles.",
        "« Nous vivons tous sur cette île », dit Oki.",
        "Le cœur lumineux de Mio pulsa doucement.\n« Alors, ses chemins, ses promesses et son avenir nous appartiennent à tous. »",
        "Aia sourit.\n« Et personne n’a besoin d’en prendre soin tout seul. Nous pouvons le faire ensemble. »",
        "**Notre Terre est diverse, vivante et précieuse — et elle est notre maison commune.**",
      ],
      image: "/epilogue/earth-island.png",
      alt: "Oki, Mio, Aia et leurs quatre amis capteurs se tiennent sur le rivage d’une île et contemplent la Terre dans l’océan des étoiles.",
    },
    {
      id: "solar-family",
      eyebrow: "Épilogue",
      title: "Aucune île n’est tout à fait seule.",
      paragraphs: [
        "La Terre voyage autour du Soleil avec sa Lune.\nMars, Vénus, Jupiter, Saturne et les autres planètes suivent elles aussi leur propre chemin.",
        "Chaque monde est différent.\nChacun a sa place et son chemin.\nEt pourtant, tous appartiennent à la même grande famille autour du Soleil.",
        "« Être reliés ne signifie pas être identiques », dit Mio.",
        "Oki acquiesça.\n« Cela signifie connaître son propre chemin tout en veillant les uns sur les autres. »",
        "Aia contempla les chemins lumineux.",
        "**Peut-être que toute belle communauté commence par cette évidence : nous sommes différents — mais nous ne sommes pas seuls.**",
      ],
      image: "/epilogue/solar-family.png",
      alt: "Le Soleil brille au centre tandis que la Terre et la Lune, Mars, Vénus, Jupiter, Saturne et d’autres planètes sont reliés par de doux chemins de lumière.",
    },
  ],
  hi: [
    {
      id: "earth-island",
      eyebrow: "उपसंहार",
      title: "हमारी पृथ्वी भी एक द्वीप है।",
      paragraphs: [
        "ओकी, मियो, आइया और उनके दोस्तों ने आकाश की ओर देखा।\nवहाँ पृथ्वी सितारों के विशाल सागर में एक नीले द्वीप की तरह चमक रही थी।",
        "ओकी ने कहा, “हम सब इसी द्वीप पर रहते हैं।”",
        "मियो का प्रकाश-केंद्र धीरे से धड़का।\n“तो इसके रास्ते, इसके वादे और इसका भविष्य हम सभी के हैं।”",
        "आइया मुस्कराई।\n“और किसी को अकेले इसकी देखभाल नहीं करनी है। हम यह काम मिलकर कर सकते हैं।”",
        "**हमारी पृथ्वी विविध, जीवित और अनमोल है—और यह हम सबका साझा घर है।**",
      ],
      image: "/epilogue/earth-island.png",
      alt: "ओकी, मियो, आइया और उनके चार सेंसर मित्र एक द्वीप के किनारे खड़े होकर सितारों के सागर में पृथ्वी को देख रहे हैं।",
    },
    {
      id: "solar-family",
      eyebrow: "उपसंहार",
      title: "कोई भी द्वीप पूरी तरह अकेला नहीं है।",
      paragraphs: [
        "पृथ्वी अपने चंद्रमा के साथ सूर्य की परिक्रमा करती है।\nमंगल, शुक्र, बृहस्पति, शनि और दूसरे ग्रह भी अपने-अपने रास्तों पर चलते हैं।",
        "हर दुनिया अलग है।\nहर एक की अपनी जगह और अपना रास्ता है।\nफिर भी, वे सभी सूर्य के चारों ओर एक ही बड़े परिवार का हिस्सा हैं।",
        "मियो ने कहा, “जुड़े होने का मतलब एक जैसा होना नहीं है।”",
        "ओकी ने सिर हिलाया।\n“इसका अर्थ है अपना रास्ता जानना और फिर भी एक-दूसरे का ध्यान रखना।”",
        "आइया ने चमकते रास्तों की ओर देखा।",
        "**शायद हर अच्छा समुदाय इसी समझ से शुरू होता है: हम अलग हैं—लेकिन हम अकेले नहीं हैं।**",
      ],
      image: "/epilogue/solar-family.png",
      alt: "सूर्य बीच में चमकता है और पृथ्वी व चंद्रमा, मंगल, शुक्र, बृहस्पति, शनि तथा दूसरे ग्रह हल्के प्रकाश-पथों से जुड़े हैं।",
    },
  ],
  pt: [
    {
      id: "earth-island",
      eyebrow: "Epílogo",
      title: "A nossa Terra também é uma ilha.",
      paragraphs: [
        "Oki, Mio, Aia e seus amigos olharam para o céu.\nLá, a Terra brilhava como uma ilha azul no grande mar de estrelas.",
        "“Todos nós vivemos nesta ilha”, disse Oki.",
        "O núcleo de luz de Mio pulsou suavemente.\n“Então os caminhos, as promessas e o futuro dela pertencem a todos nós.”",
        "Aia sorriu.\n“E ninguém precisa cuidar dela sozinho. Podemos fazer isso juntos.”",
        "**A nossa Terra é diversa, viva e preciosa — e é o nosso lar compartilhado.**",
      ],
      image: "/epilogue/earth-island.png",
      alt: "Oki, Mio, Aia e seus quatro amigos sensores estão na margem de uma ilha e contemplam a Terra no mar de estrelas.",
    },
    {
      id: "solar-family",
      eyebrow: "Epílogo",
      title: "Nenhuma ilha está completamente sozinha.",
      paragraphs: [
        "A Terra viaja ao redor do Sol junto com a sua Lua.\nMarte, Vênus, Júpiter, Saturno e os outros planetas também seguem seus próprios caminhos.",
        "Cada mundo é diferente.\nCada um tem o seu lugar e o seu caminho.\nAinda assim, todos pertencem à mesma grande família ao redor do Sol.",
        "“Estar conectado não significa ser igual”, disse Mio.",
        "Oki concordou.\n“Significa conhecer o próprio caminho e, mesmo assim, cuidar uns dos outros.”",
        "Aia contemplou os caminhos luminosos.",
        "**Talvez toda boa comunidade comece com esta descoberta: somos diferentes — mas não estamos sozinhos.**",
      ],
      image: "/epilogue/solar-family.png",
      alt: "O Sol brilha no centro enquanto a Terra e a Lua, Marte, Vênus, Júpiter, Saturno e outros planetas são ligados por suaves caminhos de luz.",
    },
  ],
} as const satisfies Record<
  EpilogueLocale,
  readonly [EpiloguePage, EpiloguePage]
>;
