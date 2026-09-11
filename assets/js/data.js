// ============================================================================
// Politeness project — topic detail pages (politeness.html / impoliteness.html /
// gesture.html). This file previously held leftover data from the unrelated
// Punya Bandh project this repo was cloned from; removed per user request since
// no current page used it.
//
// Per user request: video path, dialogue-box position, title, and content
// (content/contenthi/contentgj) for every slide, on every topic page, live here.
// assets/js/topic-page.js reads this object (keyed by the page's own
// data-topic-key attribute on <body>) and renders the slides/dialogue/captions.
//
// dialogues[].position is "left" or "right" — matches .dialogue-bubble--left/
// --right in politeness.css. Slides with no dialogue just omit the key.
// ============================================================================
const topicPagesData = {
    politeness: {
    title: "What is Politeness?",
    titlehi: "विनम्रता क्या है?",
    titlegj: "નમ્રતા શું છે?",

    slides: [
        {
            video: "./assets/videos/1/1.mp4",

            content: "Politeness is a form of respect toward others.",
            contenthi: "विनम्रता दूसरों के प्रति आदर का एक रूप है।",
            contentgj: "વિનમ્રતા એ બીજા લોકો પ્રત્યે આદરનું એક સ્વરૂપ છે."
        },

        {
            video: "./assets/videos/1/2.mp4",

            content: "Politeness means speaking softly.",
            contenthi: "मृदुता से बोलना विनम्रता है।",
            contentgj: "નરમાશથી બોલવું એ વિનમ્રતા છે.",

            dialogues: [
                {
                    position: "left",
                    left: "4%",
                    top: "15%",
                    width: "25%",
                    text: "Thank you for helping me in studies",
                    texthi: "पढ़ाई में मेरी मदद करने के लिए धन्यवाद।",
                    textgj: " મને ભણવામાં મદદ કરવા બદલ  આભાર."
                },
                {
                    position: "right",
                    left: "76%",
                    top: "12%",
                    width: "19.5%",
                    text: "I am glad, I could help",
                    texthi: "मुझे खुशी है कि मैं मदद कर सका/सकी।",
                    textgj: "મને ખુશી છે કે હું મદદ કરી શક્યો/શકી."
                }
            ]
        },

        {
            video: "./assets/videos/1/3.mp4",

            content: "Politeness means having good behavior and manners.",
            contenthi: "विनम्रता का अर्थ है अच्छा व्यवहार और अच्छा आचरण रखना।",
            contentgj: "વિનમ્રતા એટલે સારો વ્યવહાર અને સારું આચરણ રાખવું.",

            dialogues: [
                {
                    position: "left",
                    left: "4.5%",
                    top: "10%",
                    width: "17.5%",
                    text: "Have a seat, sir",
                    texthi: "बैठिए, सर",
                    textgj: "બેસો, સર "
                },
                {
                    position: "right",
                    left: "85%",
                    top: "12%",
                    width: "15%",
                    text: "Thank you",
                    texthi: "धन्यवाद",
                    textgj: "આભાર"
                }
            ]
        }
    ]
},
impoliteness: {
    title: "What is Impoliteness?",
    titlehi: "असभ्यता क्या है?",
    titlegj: "અસભ્યતા શું છે?",

    slides: [
        {
            video: "./assets/videos/2/1.mp4",
            content: "Back-answering to elders",
            contenthi: "बड़ों को उल्टा जवाब देना।",
            contentgj: "વડીલોને સામે જવાબ આપવો.",
            dialogues: [
                {
                    position: "left",
                    left: "4.5%",
                    top: "10%",
                    width: "21%",
                    text: "I will do whatever I want to",
                    texthi: "मैं जो चाहूँ वो करूँगा/करूँगी।",
                    textgj: "મારે જે કરવું હોય તે કરીશ."
                },

                    {
                        position: "right",
                    left: "90%",
                    top: "8%",
                    width: "24.5%",
                        text: "You should concentrate on your studies",
                        texthi: "तुम्हें अपनी पढ़ाई पर ध्यान देना चाहिए।",
                        textgj: "તારે તારા ભણવા ઉપર ધ્યાન આપવું જોઈએ."
                    }
                ]
        },

        {
            video: "./assets/videos/2/2.mp4",
            content: "Speaking loudly to elders.",
            contenthi: "बड़ों से ऊँची आवाज में बात करना।",
            contentgj: "વડીલો સાથે મોટા અવાજે વાત કરવી."
        },

        {
            video: "./assets/videos/2/3.mp4",
            content: "Ignoring or not responding to elders / parents",
            contenthi: "माता - पिता / बड़ों की उपेक्षा करना या उन्हें उत्तर न देना।",
            contentgj: "માતા - પિતા / વડીલોને અવગણવું કે જવાબ ન આપવો.",
            dialogues: [
                    {
                        position: "right",
                    left: "16%",
                    top: "10%",
                    width: "30%",
                        text: "I called you for dinner thrice, but you didn’t respond",
                        texthi: "मैंने तीन बार खाने के लिए बुलाया, लेकिन तुमने जवाब नहीं दिया।",
                        textgj: "મેં ત્રણ વાર જમવા માટે બોલાવ્યા, પણ તે જવાબ નહીં આપ્યો."
                    }
                ]
        },

        {
            video: "./assets/videos/2/4.mp4",
            content: "Talking rudely to others",
            contenthi: "दूसरों से अभद्रता से बात करना।",
            contentgj: "બીજા લોકો સાથે ઉદ્ધતાઈથી વાત કરવી."
        },

        {
            video: "./assets/videos/2/5.mp4",
            content: "Mocking other's imperfection",
            contenthi: "दूसरों की कमियों का उपहास / मज़ाक बनाना उड़ाना।",
            contentgj: "બીજાની ખામીઓની મજાક ઉડાવવી."
        }
    ]
},
   gesture: {
    title: "Impolite gestures",
    titlehi: "असभ्य हाव - भाव",
    titlegj: "અવિનયી હાવભાવ",

    slides: [
        {
            video: "./assets/videos/3/1.mp4",
            content: "Talking to elders with folded hands.",
            contenthi: "हाथ भींचकर बड़ों से बात करना।",
            contentgj: "અદબ વાળીને રૂબાબથી વડીલો સાથે વાત કરવી.",

          dialogues: [
                {
                    position: "left",
                    left: "4.5%",
                    top: "10%",
                    width: "17.5%",
                    text: "How are you beta?",
                    texthi: "कैसे हो, बेटा",
                    textgj: "કેમ છે, બેટા?"
                },

                    {
                        position: "right",
                    left: "76%",
                    top: "12%",
                    width: "15%",
                        text: "I am fine",
                        texthi: "मैं ठीक हूँ।",
                        textgj: " હું મજામાં છું."
                    }
                ]
        },

        {
            video: "./assets/videos/3/2.mp4",
            content: "Talking to elders with your hands in pockets.",
            contenthi: "जेब में हाथ डालकर बड़ों से बात करना।",
            contentgj: "ખિસ્સામાં હાથ રાખીને વડીલો સાથે વાત કરવી.",

             dialogues: [
                {
                    position: "left",
                    left: "4.5%",
                    top: "10%",
                    width: "17.5%",
                    text: "How are you beta?",
                    texthi: "कैसे हो, बेटा",
                    textgj: "કેમ છે, બેટા?"
                },

                    {
                        position: "right",
                    left: "76%",
                    top: "12%",
                    width: "15%",
                        text: "I am fine",
                        texthi: "मैं ठीक हूँ।",
                        textgj: " હું મજામાં છું."
                    }
                ]
        },

        {
            video: "./assets/videos/3/3.mp4",
            content: "Not looking at the person while talking.",
            contenthi: "बात करते समय व्यक्ति की ओर न देखना।",
            contentgj: "વાત કરતી વખતે વ્યક્તિ તરફ ન જોવું."
        },

        {
            video: "./assets/videos/3/4.mp4",
            content: "Watching videos or playing games on a mobile while talking.",
            contenthi: "बात करते हुए मोबाइल पर वीडियो देखना या गेम खेलना।",
            contentgj: "વાત કરતી વખતે વીડિયો જોવો કે મોબાઈલમાં ગેમ રમવી."
        },

        {
            video: "./assets/videos/3/5.mp4",
            content: "Talking to others while wearing headphones.",
            contenthi: "हेडफ़ोन पहने होने पर भी बात करना।",
            contentgj: "હેડફોન પહેરીને વાત કરવી."
        },

        {
            video: "./assets/videos/3/6.mp4",
            content: "Sitting with legs stretched towards the elders.",
            contenthi: "बड़ो की ओर पैर करके बैठना।",
            contentgj: "વડીલો તરફ પગ લંબાવીને બેસવું."
        }
    ]
},
    how: {
    title: "How can we be Polite?",
    titlehi: "हम विनम्र कैसे बन सकते हैं?",
    titlegj: "આપણે વિનમ્ર કેવી રીતે બની શકીએ?",

    slides: [
        {
            video: "./assets/videos/4/1.mp4",
            content: "Meet and greet people with a smile",
            contenthi: "लोगों से मुस्कराकर मिलें व उनका अभिवादन करें।",
            contentgj: "લોકોને હસીને મળો અને તેમને આવકાર આપો."
        },

        {
            video: "./assets/videos/4/2.mp4",
            content: "Stay calm and never shout when speaking",
            contenthi: "बोलते समय शांत रहें और कभी चिल्लाकर बात ना करें।",
            contentgj: "શાંત રહો અને બોલતી વખતે ક્યારેય બૂમો ન પાડો."
        },

        {
            video: "./assets/videos/4/3.mp4",
            content: "Treat others the way we want to be treated",
            contenthi: "दूसरों से वैसा ही व्यवहार करें, जैसा हम अपने साथ चाहते हैं।",
            contentgj: "આપણે બીજા લોકો સાથે એવું વર્તન કરવું જોઈએ જેવું વર્તન આપણે આપણી સાથે ઇચ્છીએ છીએ."
        },

        {
            video: "./assets/videos/4/4.mp4",
            content: "Greet elders with 'pranam'",
            contenthi: "बड़ों का 'प्रणाम' से अभिवादन करें।",
            contentgj: "વડીલોનું 'પ્રણામ' સાથે સ્વાગત કરો.",

            dialogues: [
               
               {
    position: "left",
                    left: "4.5%",
                    top: "10%",
                    width: "22.5%",
    text: "Pranam! aunty, hope you are good",
    texthi: "प्रणाम! आँटी, आशा है आप अच्छी होंगी",
    textgj: "પ્રણામ! આન્ટી, આશા છે કે તમે મજામાં હશો."
},
{
    position: "right",
                    left: "76%",
                    top: "12%",
                    width: "15%",
    text: "Yes, beta",
    texthi: "हाँ बेटा",
    textgj: "હા બેટા"
},
            ]
        },

        {
            video: "./assets/videos/4/5.mp4",
            content: "Say ‘Thank you’ when someone helps you.",
            contenthi: "जब कोई तुम्हारी मदद करे, तब उसे 'धन्यवाद' कहें।",
            contentgj: "જ્યારે કોઈ તમારી મદદ કરે ત્યારે ‘ધન્યવાદ' કહો.",

            dialogues: [
               {
                position: "left",
                    left: "4.5%",
                    top: "10%",
                    width: "23%",
                text: "I will help you carry some books.",
                texthi: "मैं आपको कुछ किताबें ले जाने में मदद करूँगा/करुँगी।",
                textgj: "હું તને અમુક પુસ્તકો લઈ જવામાં મદદ કરીશ."
                },
                {
                    position: "right",
                    left: "76%",
                    top: "12%",
                    width: "15%",
                    text: "thank you",
                    texthi: "धन्यवाद।",
                    textgj: "આભાર"
                }
            ]
        },

        {
            video: "./assets/videos/4/6.mp4",
            content: "Say ‘Thank You’ when someone gives you something.",
            contenthi: "जब कोई तुम्हें कुछ दे, तो 'धन्यवाद' कहें।",
            contentgj: "જ્યારે કોઈ તમને કંઈક આપે, ત્યારે ‘ધન્યવાદ' કહો.",

            dialogues: [
               {
    position: "left",
                    left: "-10%",
                    top: "6%",
                    width: "19.5%",
    text: "thank you for the gift ",
    texthi: "गिफ्ट के लिए धन्यवाद।",
    textgj: "ગિફ્ટ માટે આભાર."
},
{
    position: "right",
                    left: "76%",
                    top: "12%",
                    width: "14.5%",
    text: "Welcome",
    texthi: "वेलकम",
    textgj: "વેલકમ"
}
            ]
        },

        {
            video: "./assets/videos/4/7.mp4",
            content: "Say ‘Please’ when you ask for something.",
            contenthi: "कुछ माँगते समय 'कृपया' बोलें।",
            contentgj: "કંઈક માંગો ત્યારે \"કૃપા કરીને\" કહો.",

           dialogues: [
    {
        position: "left",
                    left: "-3%",
                    top: "10%",
                    width: "29%",
        text: "May I please borrow some of your books for a while?",
        texthi: "क्या मैं आपसे कुछ पुस्तकें कुछ समय के लिए ले सकता/सकती हूँ प्लीज?",
        textgj: "પ્લીઝ, શું હું તમારી અમુક પુસ્તકો થોડા સમય માટે લઈ શકું છું?"
    },

    {
        position: "right",
                    left: "76%",
                    top: "12%",
                    width: "15%",
        text: "Yes, sure",
        texthi: "हाँ ज़रूर",
        textgj: "હા, જરૂર."
    }
]
        },

        {
            video: "./assets/videos/4/8.mp4",
            content: "Say ‘Sorry’ when you hurt someone.",
            contenthi: "जब आपके कारण किसी को दुःख पहुँचे, तो ‘सॉरी' कहें।",
            contentgj: "જ્યારે તમે કોઈને દુઃખ પહોંચાડો ત્યારે 'સોરી' કહો.",

            dialogues: [
                {
                    position: "left",
                    left: "4.5%",
                    top: "10%",
                    width: "21%",
                    text: "I am sorry for pushing you.",
                    texthi: "आपको धक्का देने के लिए मुझे माफ़ कीजिए।",
                    textgj: "તમને ધક્કો મારવા બદલ મને માફ કરજો."
                }
            ]
        },

        {
            video: "./assets/videos/4/9.mp4",
            content: "Say ‘Sorry’ when you make a mistake.",
            contenthi: "जब आपसे कोई गलती हो जाए, तो ‘सॉरी’ कहें।",
            contentgj: "જ્યારે તમે ભૂલ કરો, ત્યારે 'સોરી' કહો.",

            dialogues: [
              {
    position: "left",
                    left: "4.5%",
                    top: "10%",
                    width: "25.5%",
    text: "Sorry Dadaji! I will not talk back again.",
    texthi: "सॉरी दादाजी! मैं दोबारा जुबान नहीं लड़ाऊँगा/लड़ाऊँगी।",
    textgj: "મને માફ કરો, દાદાજી! હું ફરી સામે નહી બોલું."
}
            ]
        },

        {
            video: "./assets/videos/4/10.mp4",
            content: "Help others when they are in need.",
            contenthi: "जब दूसरों को जरूरत हो, तब उनकी मदद करें।",
            contentgj: "જ્યારે બીજા લોકોને જરૂર હોય ત્યારે તેમને મદદ કરો."
        },

        {
            video: "./assets/videos/4/11.mp4",
            content: "Talk positively to people",
            contenthi: "लोगों से सकारात्मक बातें करें।",
            contentgj: "લોકો સાથે સકારાત્મક વાત કરો."
        },

        {
            video: "./assets/videos/4/12.mp4",
            content: "Accept mistakes",
            contenthi: "गलतियों को स्वीकार करें।",
            contentgj: "ભૂલનો સ્વીકાર કરો.",

            dialogues: [
              {
    position: "left",
                    left: "4.5%",
                    top: "10%",
                    width: "22.5%",
    text: "Sorry I didn’t mean to hurt you ",
    texthi: "माफ़ कीजिए, मेरा मतलब आपको दुःख पहुँचाना नहीं था।",
    textgj: "માફ કરજો, મારો મતલબ તમને દુઃખ પહોંચાડવાનો નહોતો."
}
            ]
        },

        {
            video: "./assets/videos/4/13.mp4",
            content: "Do not back-answer to parents or elders.",
            contenthi: "माता - पिता या बड़ो से जबान ना लड़ाएँ।",
            contentgj: "માતા - પિતા કે વડીલો સામે બોલવું નહીં.",

          dialogues: [
    {
        position: "left",
                    left: "4.5%",
                    top: "10%",
                    width: "24.5%",
        text: "Why did you not finish your homework ?",
        texthi: "तुमने अपना होमवर्क पूरा क्यों नहीं किया ?",
        textgj: "તે તારું ઘરકામ પુરું કેમ નથી કર્યું ?"
    },

    {
        position: "right",
                    left: "76%",
                    top: "12%",
                    width: "15.5%",
        text: "Sorry Papa!",
        texthi: "सॉरी पापा!",
        textgj: "સોરી પપ્પા!"
    }
]
        },

        {
            video: "./assets/videos/4/14.mp4",
            content: "We must listen and obey our elders.",
            contenthi: "बड़ों की बात ध्यान से सुनें और उनकी बात मानें।",
            contentgj: "વડીલોને ધ્યાનથી સાંભળો અને તેમની વાત માનો."
        },

        {
            video: "./assets/videos/4/15.mp4",
            content: "Share things with friends and siblings.",
            contenthi: "दोस्तों और भाई - बहनों के साथ चीज़ें बाँटें।",
            contentgj: "મિત્રો અને ભાઈ - બહેનો સાથે વસ્તુઓ શેર કરો."
        },

        {
            video: "./assets/videos/4/16.mp4",
            content: "Bow down to your parents and elders everyday.",
            contenthi: "प्रतिदिन माता - पिता और बड़ों को नमन करें।",
            contentgj: "રોજ માતા - પિતા અને વડીલોને નમન કરો."
        },

        {
            video: "./assets/videos/4/17.mp4",
            content: "Do not dislike kids having lower rank or grades.",
            contenthi: "निम्न श्रेणी या ग्रेड वाले बच्चों को नापसंद न करें।",
            contentgj: "ઓછા ક્રમાંક અથવા ગુણ મેળવનારા બાળકોને નાપસંદ ન કરો.",

            dialogues: [
                {
                    position: "left",
                    left: "2%",
                    top: "5%",
                    width: "35%",
                    text: "Hey, don’t worry! You will get better grades next time ",
                    texthi: " अरे, चिंता मत करो। अगली बार तुम्हें बेहतर अंक  मिलेंगे।",
                    textgj: "અરે ચિંતા નહીં કર, બીજી વખત તમને વધુ સારા ગુણ મળશે."
                }
            ]
        }
    ]
},
  benefits: {
    title: "What are the benefits of being Polite?",
    titlehi: "विनम्र होने के क्या लाभ होते हैं?",
    titlegj: "વિનમ્ર બનવાના ફાયદા શું છે?",

    slides: [
        {
            video: "./assets/videos/5/1.mp4",
            content: "Everyone appreciates people who are polite.",
            contenthi: "विनम्र व्यक्ति की हर कोई सराहना करता है।",
            contentgj: "દરેક વ્યક્તિ નમ્ર વ્યક્તિની કદર કરે છે."
        },

        {
            video: "./assets/videos/5/2.mp4",
            content: "People will trust you more than others.",
            contenthi: "लोग दूसरों से ज्यादा तुम पर भरोसा करेंगे।",
            contentgj: "લોકો બીજા કરતાં વધુ તમારા પર વિશ્વાસ કરશે."
        },

        {
            video: "./assets/videos/5/3.mp4",
            content: "A polite person makes many friends.",
            contenthi: "विनम्र व्यक्ति के दोस्त बहुत बनते हैं।",
            contentgj: "વિનમ્ર વ્યક્તિ ઘણા મિત્રો બનાવે છે."
        },

        {
            video: "./assets/videos/5/4.mp4",
            content: "Parents will be proud of you.",
            contenthi: "माता - पिता को तुम पर गर्व होगा।",
            contentgj: "માતા - પિતાને તમારા પર ગર્વ થશે."
        },

        {
            video: "./assets/videos/5/5.mp4",
            content: "Enemies turn into friends by being polite.",
            contenthi: "विनम्र होने से दुश्मन भी दोस्त बन जाते हैं।",
            contentgj: "વિનમ્રતાથી દુશ્મન પણ મિત્ર બની જાય છે."
        },

        {
            video: "./assets/videos/5/6.mp4",
            content: "It makes us a better person.",
            contenthi: "यह हमें बेहतर व्यक्ति बनाता है।",
            contentgj: "તે આપણને વધુ સારી વ્યક્તિ બનાવે છે."
        }
    ]
},
   when: {
    title: "When should we be Polite?",
    titlehi: "हमें विनम्र कब रहना चाहिए?",
    titlegj: "આપણે ક્યારે વિનમ્ર રહેવું જોઈએ?",

    slides: [
        {
            video: "./assets/videos/6/1.mp4",
            content: "When the other person is angry with us",
            contenthi: "जब दूसरा व्यक्ति हमसे नाराज़ हो।",
            contentgj: "જ્યારે સામેની વ્યક્તિ આપણાથી નારાજ હોય ​​છે."
        },

        {
            video: "./assets/videos/6/2.mp4",
            content: "When someone is not listening to us.",
            contenthi: "जब कोई हमारी बात नहीं सुन रहा हो।",
            contentgj: "જ્યારે કોઈ આપણી વાત સાંભળતું નથી."
        },

        {
            video: "./assets/videos/6/3.mp4",
            content: "When someone points out our mistakes.",
            contenthi: "जब कोई हमारी गलतियां निकाल रहा हो।",
            contentgj: "જ્યારે કોઈ આપણી ભૂલો કાઢે."
        },

        {
            video: "./assets/videos/6/4.mp4",
            content: "When we disagree with someone",
            contenthi: "जब हम किसी से असहमत होते हैं।",
            contentgj: "જ્યારે આપણે કોઈની સાથે અસહમત હોઈએ."
        },

        {
            video: "./assets/videos/6/5.mp4",
            content: "When someone doesn’t understand us.",
            contenthi: "जब कोई हमें नहीं समझता।",
            contentgj: "જ્યારે કોઈ આપણને સમજતું નથી."
        },

        {
            video: "./assets/videos/6/6.mp4",
            content: "When we are angry",
            contenthi: "जब हमें गुस्सा आए।",
            contentgj: "જ્યારે આપણે ગુસ્સે હોઈએ"
        },

        {
            video: "./assets/videos/6/7.mp4",
            content: "We must be polite irrespective of the behavior of the other person.",
            contenthi: "हमें दूसरे व्यक्ति के व्यवहार की परवाह किए बिना विनम्र रहना चाहिए।",
            contentgj: "બીજા વ્યક્તિના વર્તનને ધ્યાનમાં લીધા વગર આપણે વિનમ્ર બનવું જોઈએ."
        }
    ]
}
};
