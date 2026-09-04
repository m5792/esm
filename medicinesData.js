(function () {
    // 1. Medicines Reference Data Array
        const medicinesData = [
         // --- PAIN, FEVER & ANTI-INFLAMMATORY (1 - 35) ---
  {
    "salt": "Paracetamol (500mg / 650mg)",
    "description_hi": "बुखार कम करने, सिरदर्द, बदन दर्द और हल्के दांत दर्द में उपयोगी।",
    "description_en": "Used for lowering fever, headache, body ache, and mild toothache.",
    "group": "FEVER & PAIN KILLER",
    "brand_examples": "Dolo 650, Calpol, Crocin, Pacimol"
  },
  {
    "salt": "Aceclofenac + Paracetamol",
    "description_hi": "चोट का दर्द, सूजन, बदन दर्द, बुखार और गठिया के दर्द में राहत।",
    "description_en": "Provides relief in injury pain, inflammation, body ache, fever, and arthritis.",
    "group": "FEVER & PAIN KILLER",
    "brand_examples": "Zero-P, Zerodol-P, Hifenac-P, Acemiz"
  },
  {
  "salt": "Diclofenac + Dicyclomine",
  "description_hi": "पेट में मरोड़, पेट दर्द, मांसपेशियों के ऐंठन (Spasm) और सूजन से राहत।",
  "description_en": "Provides relief in abdominal cramps, stomach pain, muscle spasms, and inflammation.",
  "group": "STOMACH PAIN & ANTISPASMODIC",
  "brand_examples": "Cyclopam-D, Meftal-Spas D, Spasmo-Proxyvon, Colimex-D"
},
{
"salt": "Phenylephrine",
"description_hi": "बंद नाक, सिनुसाइटिस, एलर्जी और सांस लेने की परेशानी से राहत; रक्त वाहिकाओं को संकुचित करके नाक की सूजन कम करता है।",
"description_en": "Provides relief from nasal congestion, sinusitis, and allergies by constricting blood vessels to reduce nasal swelling.",
"group": "NASAL DECONGESTANT / SYMPATHOMIMETIC",
"brand_examples": "Nasivion (Drops/Spray), Sinarest (Combination), Cheston Cold (Combination), Maxtra (Combination)"
},
  {
    "salt": "Aceclofenac + Paracetamol + Serratiopeptidase",
    "description_hi": "गंभीर सूजन, चोट, ऑपरेशन के बाद का दर्द और घाव सुखाने में असरदार।",
    "description_en": "Effective for severe swelling, injury, post-surgery pain, and tissue healing.",
    "group": "PAIN KILLER + ANTI-INFLAMMATORY",
    "brand_examples": "Zerodol-SP, Hifenac-D, Acemiz-S, Signoflam"
  },
  {
  "salt": "Nifedipine",
  "description_hi": "उच्च रक्तचाप (High BP) को नियंत्रित करने और सीने के दर्द (Angina) को रोकने में मददगार।",
  "description_en": "Helps control high blood pressure (hypertension) and prevent chest pain (angina).",
  "group": "CALCIUM CHANNEL BLOCKER / ANTI-HYPERTENSIVE",
  "brand_examples": "Nicardia, Calcigard, Nifedine, Depin"
},
  {
    "salt": "Diclofenac + Paracetamol",
    "description_hi": "जोड़ों का दर्द, कमर दर्द, गर्दन दर्द, मांसपेशियों का खिंचाव और बुखार।",
    "description_en": "Relieves joint pain, backache, neck pain, muscle strain, and fever.",
    "group": "FEVER & PAIN KILLER",
    "brand_examples": "Voveran Plus, Reactin Plus, Dynapar PS, Oxalgin DP"
  },
  {
    "salt": "Diclofenac + Paracetamol + Serratiopeptidase",
    "description_hi": "हड्डी टूटने का दर्द, भारी सूजन, दांत का इंफेक्शन और तेज दर्द।",
    "description_en": "Used for fracture pain, heavy swelling, dental infections, and severe pain.",
    "group": "PAIN KILLER + ANTI-INFLAMMATORY",
    "brand_examples": "Dynapar S, Reactin SP, Exeflam SP"
  },
  {
    "salt": "Ibuprofen + Paracetamol",
    "description_hi": "बच्चों और बड़ों में दर्द, बुखार, दांत दर्द और कान दर्द का इलाज।",
    "description_en": "Treatment for pain, fever, toothache, and earache in adults and kids.",
    "group": "FEVER & PAIN KILLER",
    "brand_examples": "Combiflam, Flexon, Ibugesic Plus"
  },
  {
    "salt": "Nimesulide + Paracetamol",
    "description_hi": "तेज बुखार, सिरदर्द, दांत दर्द और शरीर का तेज दर्द तुरंत कम करता है।",
    "description_en": "Quickly reduces high fever, headache, toothache, and acute pain.",
    "group": "FEVER & PAIN KILLER",
    "brand_examples": "Sumo, Nicip Plus, Sumo Cold, Nimodex P"
  },
  {
    "salt": "Nimesulide (Single)",
    "description_hi": "अचानक होने वाला तेज दर्द, जोड़ों की सूजन और मोच।",
    "description_en": "Acute severe pain, joint inflammation, and sprains.",
    "group": "PAIN KILLER / NSAID",
    "brand_examples": "Nise, Nicip, Nimulid"
  },
  {
    "salt": "Mefenamic Acid + Paracetamol",
    "description_hi": "महिलाओं में पीरियड्स का दर्द, बच्चों में बुखार और कान/दांत का दर्द।",
    "description_en": "Menstrual pain in women, fever in children, and ear/dental pain.",
    "group": "PAIN KILLER + FEVER",
    "brand_examples": "Meftal-Spas, Mefkind-Fort, Spasmonil Plus"
  },
  {
    "salt": "Diclofenac Sodium / Potassium",
    "description_hi": "मांसपेशियों का दर्द, आर्थराइटिस, मोच और हड्डियों की चोट।",
    "description_en": "Muscle pain, arthritis, sprains, and bone injuries.",
    "group": "PAIN KILLER / NSAID",
    "brand_examples": "Voveran, Dynapar, Reactin, Diclogesic"
  },
  {
    "salt": "Ketorolac Tromethamine",
    "description_hi": "दांत का बहुत तेज दर्द और सर्जरी के बाद का असहनीय दर्द।",
    "description_en": "Severe dental pain and intense post-operative pain.",
    "group": "PAIN KILLER (NSAID)",
    "brand_examples": "Ketanov, Ketorol, Toradol"
  },
  {
    "salt": "Piroxicam",
    "description_hi": "गठिया (Gout/Arthritis) और जोड़ों की अकड़न में राहत।",
    "description_en": "Provides relief in Gout, arthritis, and joint stiffness.",
    "group": "PAIN KILLER / NSAID",
    "brand_examples": "Dolonex, Pirox, Felene"
  },
  {
    "salt": "Etoricoxib",
    "description_hi": "जोड़ों की पुरानी सूजन, ऑस्टियोआर्थराइटिस और रीढ़ की हड्डी का दर्द।",
    "description_en": "Chronic joint swelling, osteoarthritis, and spine pain.",
    "group": "PAIN KILLER / NSAID",
    "brand_examples": "Nucoxia, Arcoxia, Etody, Ezact"
  },
  {
    "salt": "Etoricoxib + Paracetamol",
    "description_hi": "गंभीर आर्थराइटिस दर्द के साथ बुखार और शरीर दर्द।",
    "description_en": "Severe arthritis pain accompanied by fever and body ache.",
    "group": "FEVER & PAIN KILLER",
    "brand_examples": "Nucoxia P, Etrik P, Etody P"
  },
  {
    "salt": "Etoricoxib + Thiocolchicoside",
    "description_hi": "कमर की नस दबना, मांसपेशियों की जकड़न और स्पॉन्डिलाइटिस।",
    "description_en": "Pinched nerve backache, muscle stiffness, and spondylitis.",
    "group": "MUSCLE RELAXANT + PAIN KILLER",
    "brand_examples": "Nucoxia MR, Myospaz-E, Etra MR"
  },
  {
    "salt": "Aceclofenac + Thiocolchicoside",
    "description_hi": "मांसपेशियों की ऐंठन, गर्दन में जकड़न और बैक पेन।",
    "description_en": "Muscle spasms, neck stiffness, and lower back pain.",
    "group": "MUSCLE RELAXANT + PAIN KILLER",
    "brand_examples": "Zerodol-TH, Hifenac-TH, Acemiz-TH"
  },
  {
    "salt": "Chlorzoxazone + Paracetamol + Diclofenac",
    "description_hi": "भारी वजन उठाने से मांसपेशियों में जकड़न, मोच और दर्द।",
    "description_en": "Muscle rigidity from heavy lifting, sprains, and pain.",
    "group": "MUSCLE RELAXANT + PAIN KILLER",
    "brand_examples": "Myospaz Forte, Mobizox, Musgard"
  },
  {
    "salt": "Tramadol + Paracetamol",
    "description_hi": "कैंसर, गंभीर एक्सीडेंट या मेजर ऑपरेशन का बहुत तेज दर्द।",
    "description_en": "Severe pain from cancer, major accidents, or surgery.",
    "group": "ANALGESIC / OPIOID COMBINATION",
    "brand_examples": "Ultracet, Tramazac-P, Calpol-T"
  },
  {
    "salt": "Lornoxicam + Paracetamol",
    "description_hi": "जोड़ों की सूजन, साइटिका का दर्द और बदन दर्द।",
    "description_en": "Joint inflammation, sciatica pain, and generalized pain.",
    "group": "FEVER & PAIN KILLER",
    "brand_examples": "Lornoxi-P, Lofecam-P, Flexilor-P"
  },
  {
    "salt": "Indomethacin",
    "description_hi": "यूरिक एसिड बढ़ने से यूरिक आर्थराइटिस (Gout) और जोड़ों का दर्द।",
    "description_en": "Uric acid pain (Gout) and acute joint swelling.",
    "group": "PAIN KILLER / NSAID",
    "brand_examples": "Indocap, Idicin, Inmecin"
  },
  {
    "salt": "Naproxen",
    "description_hi": "माइग्रेन का सिरदर्द, पीरियड क्रैम्प्स और जोड़ों का दर्द।",
    "description_en": "Migraine headaches, menstrual cramps, and joint pain.",
    "group": "PAIN KILLER / NSAID",
    "brand_examples": "Naprosyn, Xenobid, Artagen"
  },
  {
    "salt": "Naproxen + Domperidone",
    "description_hi": "माइग्रेन सिरदर्द के साथ उल्टी और मिचली आने पर।",
    "description_en": "Migraine headache accompanied by nausea and vomiting.",
    "group": "ANTI-MIGRAINE",
    "brand_examples": "NaprX-D, Dompan-N, Napra-D"
  },
  {
    "salt": "Flupirtine",
    "description_hi": "नसों का दर्द, मांसपेशियों की ऐंठन और सर्जरी के बाद का दर्द।",
    "description_en": "Nerve-related pain, muscle spasms, and post-surgery discomfort.",
    "group": "PAIN KILLER / ANALGESIC",
    "brand_examples": "Lupirtin, Flupagesic, Snipas"
  },
  {
    "salt": "Pregabalin + Methylcobalamin",
    "description_hi": "डायबिटीज में नसों का दर्द, हाथों-पैरों में झुनझुनी और सुन्नपन।",
    "description_en": "Diabetic nerve pain, tingling sensation, and numbness in limbs.",
    "group": "NEUROPATHIC PAIN",
    "brand_examples": "Pregabalin M, Pregabin M, Maxgalin M, Axogurd"
  },
  {
    "salt": "Gabapentin + Methylcobalamin",
    "description_hi": "नसों में खिंचाव, रीढ़ की हड्डी का दर्द और नसों की कमजोरी।",
    "description_en": "Nerve weakness, spine pain, and shooting nerve pain.",
    "group": "NEUROPATHIC PAIN",
    "brand_examples": "Gabapin ME, Gabamax, Re神经-G"
  },
  {
    "salt": "Tapentadol",
    "description_hi": "हड्डी के फ्रैक्चर और नसों से जुड़े गंभीर दर्द का इलाज।",
    "description_en": "Moderate to severe bone fracture and neuropathic pain.",
    "group": "ANALGESIC / OPIOID",
    "brand_examples": "Tydol, Tapal, Doltra"
  },
  {
    "salt": "Tolperisone Hydrochloride",
    "description_hi": "रीढ़ की हड्डी या नसों के कारण मांसपेशियों में अत्यधिक अकड़न।",
    "description_en": "Severe muscle stiffness due to spine or nervous conditions.",
    "group": "MUSCLE RELAXANT",
    "brand_examples": "Myotop, Tolifast, Myoplax"
  },
  {
    "salt": "Baclofen",
    "description_hi": "लकवा (Paralysis) या स्पाइनल इंजरी से मांसपेशियों में खिंचाव।",
    "description_en": "Muscle spasms caused by paralysis or spinal cord injuries.",
    "group": "MUSCLE RELAXANT",
    "brand_examples": "Lioresal, Baclof, Liofen"
  },
  {
    "salt": "Diclofenac + Paracetamol + Cetirizine",
    "description_hi": "सर्दी-जुकाम के साथ शरीर दर्द, बुखार और नाक बहना।",
    "description_en": "Body pain and fever combined with runny nose or allergies.",
    "group": "PAIN + FEVER + ALLERGY",
    "brand_examples": "Multiplus, Coldminus, Reactin Plus"
  },
  {
    "salt": "Paracetamol + Caffeine",
    "description_hi": "तेज सिरदर्द, सुस्ती और माइग्रेन की शुरुआत में।",
    "description_en": "Severe headache, fatigue, and early stage migraine.",
    "group": "ANALGESIC / HEADACHE",
    "brand_examples": "Crocin Pain Relief, Dolo Cold, Excedrin"
  },
  {
    "salt": "Trypsin Chymotrypsin",
    "description_hi": "चोट का घाव सुखाने, सूजन कम करने और पोस्ट-सर्जरी हीलिंग।",
    "description_en": "Wound healing, reduction of swelling, and post-surgical recovery.",
    "group": "ANTI-INFLAMMATORY ENZYME",
    "brand_examples": "Chymoral Forte, Chymowok, Enzomac"
  },
  {
    "salt": "Aceclofenac + Paracetamol + Rabeprazole",
    "description_hi": "जिन मरीजों को दर्द की दवा से पेट में गैस या एसिडिटी बनती है।",
    "description_en": "Pain relief for patients prone to acidity/gastric issues.",
    "group": "PAIN KILLER + ANTACID",
    "brand_examples": "Zerodol-SP, Hifenac-R, Acemiz-R"
  },
  {
    "salt": "Phenazone + Benzocaine (Ear Drops)",
    "description_hi": "कान दर्द, कान में सूजन और कान का इंफेक्शन।",
    "description_en": "Earache, inflammation, and ear canal infections.",
    "group": "EAR PREPARATION / ANALGESIC",
    "brand_examples": "Otogesic, Otocalm, Auralgan"
  },
  {
    "salt": "Methyl Salicylate + Menthol + Linseed Oil",
    "description_hi": "मांसपेशियों के दर्द, मोच और पीठ दर्द के लिए जेल/स्प्रे।",
    "description_en": "Topical gel/spray for muscle strain, sprains, and back pain.",
    "group": "TOPICAL PAIN RELIEF",
    "brand_examples": "Volini Gel, Moov Gel, Omnigel"
  },
  {
    "salt": "Capsaicin + Diclofenac + Menthol",
    "description_hi": "जोड़ों के दर्द और आर्थराइटिस के लिए पेन रिलीफ मलहम।",
    "description_en": "Topical pain relief ointment for joint pain and arthritis.",
    "group": "TOPICAL PAIN RELIEF",
    "brand_examples": "Capsigic, Dynapar Gel, Osteocare Gel"
  },
  {
    "salt": "Amoxicillin",
    "description_hi": "गले में इंफेक्शन, कान का इंफेक्शन, दांत में पस और फेफड़ों का इंफेक्शन।",
    "description_en": "Throat infection, ear infection, tooth abscess, and chest infection.",
    "group": "ANTIBIOTIC (PENICILLIN)",
    "brand_examples": "Mox, Novamox, Almox"
  },
  {
    "salt": "Amoxicillin + Clavulanic Acid (375mg / 625mg)",
    "description_hi": "निमोनिया, स्किन इंफेक्शन, घाव में मवाद (Pus), और कान/गले का गंभीर इंफेक्शन।",
    "description_en": "Pneumonia, skin infections, infected wounds, and severe ENT issues.",
    "group": "ANTIBIOTIC (PENICILLIN COMBINATION)",
    "brand_examples": "Augmentin, Moxikind-CV, Clamp"
  },
  {
    "salt": "Azithromycin (250mg / 500mg)",
    "description_hi": "टाइफाइड बुखार, गले में खराश (Tonsils), खांसी और फेफड़ों का इंफेक्शन।",
    "description_en": "Typhoid fever, sore throat, tonsillitis, cough, and lung infections.",
    "group": "ANTIBIOTIC (MACROLIDE)",
    "brand_examples": "Azithral, Azee, Zady"
  },
  {
    "salt": "Cefixime (100mg / 200mg)",
    "description_hi": "टाइफाइड बुखार, पेशाब में जलन (UTI), और सांस की नली का इंफेक्शन।",
    "description_en": "Typhoid fever, Urinary Tract Infections (UTI), and respiratory infection.",
    "group": "ANTIBIOTIC (CEPHALOSPORIN)",
    "brand_examples": "Taxim-O, Zifi, Cefolac"
  },
  {
    "salt": "Cefixime + Ofloxacin",
    "description_hi": "पुराना टाइफाइड, गंभीर दस्त, पेशाब का इंफेक्शन और पेट का इंफेक्शन।",
    "description_en": "Chronic typhoid, severe diarrhea, UTI, and abdominal infections.",
    "group": "ANTIBIOTIC COMBINATION",
    "brand_examples": "Taxim-O OF, Zifi-O, Cefolac-O"
  },
  {
    "salt": "Cefixime + Clavulanic Acid",
    "description_hi": "प्रतिरोधी (Resistant) बैक्टीरिया से होने वाले गंभीर इंफेक्शन।",
    "description_en": "Treatment for resistant bacterial infections.",
    "group": "ANTIBIOTIC (CEPHALOSPORIN)",
    "brand_examples": "Taxim-O CV, Zifi-CV, Cefolac-CV"
  },
  {
    "salt": "Cefpodoxime Proxetil",
    "description_hi": "बच्चों और बड़ों में छाती का इंफेक्शन, ब्रोंकाइटिस और साइनस।",
    "description_en": "Chest infection, bronchitis, and sinusitis in kids and adults.",
    "group": "ANTIBIOTIC (CEPHALOSPORIN)",
    "brand_examples": "Gudcef, Doxcef, Cepodem"
  },
  {
    "salt": "Cefpodoxime + Clavulanic Acid",
    "description_hi": "फेफड़ों का निमोनिया, पुरानी खांसी और गंभीर कान इंफेक्शन।",
    "description_en": "Pneumonia, chronic cough, and complicated ear infections.",
    "group": "ANTIBIOTIC COMBINATION",
    "brand_examples": "Gudcef-CV, Cepodem-XP, Doxcef-CV"
  },
  {
    "salt": "Cefadroxil",
    "description_hi": "त्वचा का इंफेक्शन, फोड़े-फुंसी, गले का इंफेक्शन और UTI।",
    "description_en": "Skin infections, boils, throat infections, and UTI.",
    "group": "ANTIBIOTIC (CEPHALOSPORIN)",
    "brand_examples": "Droxyl, Ceff, Odoxil"
  },
  {
    "salt": "Cephalexin",
    "description_hi": "त्वचा पर घाव, मवाद, हड्डियों का इंफेक्शन और दांत का इंफेक्शन।",
    "description_en": "Skin wounds, pus formation, bone infections, and dental infection.",
    "group": "ANTIBIOTIC (CEPHALOSPORIN)",
    "brand_examples": "Sporidex, Phexin, Cephadex"
  },
  {
    "salt": "Ciprofloxacin",
    "description_hi": "पेट का इंफेक्शन, दस्त, पेशाब में जलन और हड्डियों का इंफेक्शन।",
    "description_en": "Stomach infection, diarrhea, UTI, and bone infections.",
    "group": "ANTIBIOTIC (FLUOROQUINOLONE)",
    "brand_examples": "Ciplox, Cifran, Ciprobid"
  },
  {
    "salt": "Ciprofloxacin + Tinidazole",
    "description_hi": "पेचिश (Dysentery), खूनी दस्त और पेट के कीड़े/इंफेक्शन।",
    "description_en": "Dysentery, bloody diarrhea, and mixed stomach infections.",
    "group": "ANTIBIOTIC + ANTI-AMEBIC",
    "brand_examples": "Ciplox-TZ, Cifran-CT, Cipro TZ"
  },
  {
    "salt": "Ofloxacin",
    "description_hi": "टाइफाइड, दस्त, पेशाब में इंफेक्शन और आंख/कान का इंफेक्शन।",
    "description_en": "Typhoid, loose motion, UTI, and eye/ear infections.",
    "group": "ANTIBIOTIC (FLUOROQUINOLONE)",
    "brand_examples": "Oflox, Zanocin, Oflamac"
  },
  {
    "salt": "Ofloxacin + Ornidazole",
    "description_hi": "दस्त, पेचिश, पेट में मरोड़ और आंतों का इंफेक्शन।",
    "description_en": "Diarrhea, dysentery, stomach cramps, and intestinal infections.",
    "group": "ANTIBIOTIC + ANTI-AMEBIC",
    "brand_examples": "O2, Zenflox-OZ, Oflomac-OZ"
  },
  {
    "salt": "Norfloxacin",
    "description_hi": "पेशाब की नली में इंफेक्शन (UTI) और पेट खराब होना।",
    "description_en": "Urinary tract infection (UTI) and mild stomach upsets.",
    "group": "ANTIBIOTIC (FLUOROQUINOLONE)",
    "brand_examples": "Norflox, Norilet, Alflox"
  },
  {
    "salt": "Norfloxacin + Tinidazole",
    "description_hi": "बैक्टीरियल और प्रोटोजोआ से होने वाले दस्त और पेट इंफेक्शन।",
    "description_en": "Diarrhea and stomach infections caused by bacteria/protozoa.",
    "group": "ANTIBIOTIC + ANTI-AMEBIC",
    "brand_examples": "Norflox-TZ, Nor-TZ, Normax-TZ"
  },
  {
    "salt": "Levofloxacin",
    "description_hi": "फेफड़ों का निमोनिया, साइनस, और गंभीर पेशाब का इंफेक्शन।",
    "description_en": "Lung pneumonia, sinusitis, and severe urinary infections.",
    "group": "ANTIBIOTIC (FLUOROQUINOLONE)",
    "brand_examples": "Levoquin, Loxof, Glevo"
  },
  {
    "salt": "Metronidazole",
    "description_hi": "पतले दस्त, पेट में गैस/ऐंठन, दांत का मवाद और मसूड़ों का इंफेक्शन।",
    "description_en": "Loose stools, abdominal cramps, dental abscess, and gum infection.",
    "group": "ANTI-AMEBIC / ANTIBIOTIC",
    "brand_examples": "Flagyl, Metrogyl, Aristogyl"
  },
  {
    "salt": "Doxycycline",
    "description_hi": "चेहरे के मुंहासे (Acne), मलेरिया से बचाव, और छाती का इंफेक्शन।",
    "description_en": "Severe facial acne, malaria prophylaxis, and chest infections.",
    "group": "ANTIBIOTIC (TETRACYCLINE)",
    "brand_examples": "Doxypal, Microdox, Doxy-1"
  },
  {
    "salt": "Doxycycline + Lactic Acid Bacillus",
    "description_hi": "एंटीबायोटिक से पेट खराब न हो, इसलिए प्रोबायोटिक के साथ इंफेक्शन का इलाज।",
    "description_en": "Infection treatment paired with probiotics to prevent stomach upset.",
    "group": "ANTIBIOTIC + PROBIOTIC",
    "brand_examples": "Doxy-1 LDR, Microdox-LB, Doxt-SL"
  },
  {
    "salt": "Trimethoprim + Sulfamethoxazole (Co-trimoxazole)",
    "description_hi": "सांस की नली का इंफेक्शन, पेशाब का इंफेक्शन और दस्त।",
    "description_en": "Respiratory tract infections, UTI, and bacterial diarrhea.",
    "group": "ANTIBIOTIC (SULFA DRUG)",
    "brand_examples": "Septran, Bactrim, Ciplin"
  },
  {
    "salt": "Rifaximin",
    "description_hi": "ट्रैवलर्स डायरिया (यात्रा में दस्त) और IBS (आंतों की बीमारी)।",
    "description_en": "Traveler's diarrhea and Irritable Bowel Syndrome (IBS).",
    "group": "GUT ANTIBIOTIC",
    "brand_examples": "Rifagut, Torfix, Rcifax"
  },
  {
    "salt": "Co-trimoxazole (Trimethoprim + Sulfamethoxazole)",
    "description_hi": "यह एक कॉम्बिनेशन एंटीबायोटिक दवा है जो बैक्टीरिया के विकास को रोककर काम करती है। इसका उपयोग मुख्य रूप से पेशाब के रास्ते के संक्रमण (UTI), फेफड़ों के इंफेक्शन (जैसे ब्रोन्काइटिस, निमोनिया), कान के इंफेक्शन, आंतों के संक्रमण (जैसे पेट खराब होना या दस्त) और त्वचा के बैक्टीरिया जनित इन्फेक्शन का इलाज करने के लिए किया जाता है।",
    "description_en": "A combination antibiotic used to treat bacterial infections of the lungs, urinary tract (UTI), ears, intestines, and skin by stopping bacterial growth.",
    "group": "ANTIBACTERIAL & ANTIBIOTIC",
    "brand_examples": "Septran, Bactrim, Ciplin-DS"
  },
  {
    "salt": "Clindamycin",
    "description_hi": "चेहरे के गंभीर मुंहासे, दांत का मवाद और हड्डियों का इंफेक्शन।",
    "description_en": "Severe acne, dental pus, and deep bone infections.",
    "group": "ANTIBIOTIC (LINCOSAMIDE)",
    "brand_examples": "Dalacin C, Clindak-A, Cleocin"
  },
  {
    "salt": "Clarithromycin",
    "description_hi": "हेलीकोबैक्टर पाइलोरी (पेट का अल्सर) और गले का इंफेक्शन।",
    "description_en": "H. pylori bacterial peptic ulcer and respiratory infection.",
    "group": "ANTIBIOTIC (MACROLIDE)",
    "brand_examples": "Claribid, Crixan, Clariwin"
  },
  {
    "salt": "Erythromycin",
    "description_hi": "त्वचा के इंफेक्शन, आंखों के इंफेक्शन और सांस संबंधी इंफेक्शन।",
    "description_en": "Skin infections, eye infections, and respiratory issues.",
    "group": "ANTIBIOTIC (MACROLIDE)",
    "brand_examples": "Erythrocin, Althrocin, Acnederm"
  },
  {
    "salt": "Linezolid",
    "description_hi": "अस्पताल में होने वाले निमोनिया और गंभीर प्रतिरोधी त्वचा इंफेक्शन।",
    "description_en": "Hospital-acquired pneumonia and resistant skin infections.",
    "group": "ANTIBIOTIC (OXAZOLIDINONE)",
    "brand_examples": "Lizolid, Linox, Lizoforce"
  },
  {
    "salt": "Nitrofurantoin",
    "description_hi": "महिलाओं में बार-बार होने वाले पेशाब के इंफेक्शन (UTI) का इलाज।",
    "description_en": "Treatment for recurrent Urinary Tract Infections (UTI).",
    "group": "URINARY ANTIBIOTIC",
    "brand_examples": "Niftas, Furadantin, Niftran"
  },
  {
    "salt": "Faropenem",
    "description_hi": "गंभीर और जटिल बैक्टीरियल इंफेक्शन का उच्च स्तरीय इलाज।",
    "description_en": "Advanced treatment for complicated bacterial infections.",
    "group": "ANTIBIOTIC (PENEM)",
    "brand_examples": "Farobact, Faropen, Faronem"
  },
  {
    "salt": "Ampicillin + Cloxacillin",
    "description_hi": "सर्जरी के बाद का इंफेक्शन, घाव सुखाना और त्वचा इंफेक्शन।",
    "description_en": "Post-surgical infections, wound drying, and skin infections.",
    "group": "ANTIBIOTIC COMBINATION",
    "brand_examples": "Ampilox, Megapen, Blumox Plus"
  },
  {
    "salt": "Cefotaxime (Injection)",
    "description_hi": "अस्पताल में भर्ती मरीजों में निमोनिया, दिमागी बुखार और इंफेक्शन।",
    "description_en": "Injectable for hospital pneumonia, meningitis, and infections.",
    "group": "ANTIBIOTIC (INJECTABLE)",
    "brand_examples": "Taxim, Claforan, Cefotax"
  },
  {
    "salt": "Ceftriaxone (Injection)",
    "description_hi": "गंभीर टाइफाइड, एक्सीडेंट घाव, निमोनिया और ऑपरेशन से पहले।",
    "description_en": "Severe typhoid, accident wounds, pneumonia, and pre-surgery.",
    "group": "ANTIBIOTIC (INJECTABLE)",
    "brand_examples": "Monal, Monocef, Rocephin"
  },
  {
    "salt": "Ceftriaxone + Sulbactam (Injection)",
    "description_hi": "अत्यधिक गंभीर इंफेक्शन और एंटीबायोटिक रेजिस्टेंस को रोकने के लिए।",
    "description_en": "For highly severe infections resisting single antibiotics.",
    "group": "ANTIBIOTIC (INJECTABLE)",
    "brand_examples": "Monocef-SB, Oframax Forte, Cefzone-SB"
  },
  {
    "salt": "Ceftriaxone + Tazobactam (Injection)",
    "description_hi": "पेट की बड़ी सर्जरी, आईसीयू मरीज और गंभीर निमोनिया।",
    "description_en": "Major abdominal surgeries, ICU care, and severe pneumonia.",
    "group": "ANTIBIOTIC (INJECTABLE)",
    "brand_examples": "Supravir, Cefoclass-Tazo, Monocef-Tazo"
  },
  {
    "salt": "Piperacillin + Tazobactam (Injection)",
    "description_hi": "अस्पताल के आईसीयू मरीजों में गंभीर इंफेक्शन का इलाज।",
    "description_en": "Treatment of critical hospital/ICU bacterial infections.",
    "group": "ANTIBIOTIC (INJECTABLE)",
    "brand_examples": "Piptaz, Zosyn, Tazact"
  },
  {
    "salt": "Meropenem (Injection)",
    "description_hi": "अंतिम चरण का लाइफ-सेविंग एंटीबायोटिक - सेप्सिस और दिमागी बुखार।",
    "description_en": "Life-saving antibiotic for sepsis, meningitis, and severe infections.",
    "group": "ANTIBIOTIC (INJECTABLE)",
    "brand_examples": "Meronem, Meromac, Mopenem"
  },
  {
    "salt": "Amikacin (Injection)",
    "description_hi": "गुर्दे का इंफेक्शन, पेशाब का गंभीर इंफेक्शन और खून का इंफेक्शन।",
    "description_en": "Kidney infection, severe UTI, and bloodstream infections.",
    "group": "ANTIBIOTIC (INJECTABLE)",
    "brand_examples": "Amikin, Mikacin, Amistar"
  },
  {
    "salt": "Gentamicin (Injection)",
    "description_hi": "हड्डियों का इंफेक्शन, जलने के बाद का इंफेक्शन और घाव।",
    "description_en": "Bone infections, burn wounds, and systemic infection.",
    "group": "ANTIBIOTIC (INJECTABLE)",
    "brand_examples": "Garamycin, Genticyn, Gentak"
  },
  {
    "salt": "Albendazole",
    "description_hi": "पेट के कीड़े (Worms) मारना, पेट दर्द और भूख न लगना।",
    "description_en": "Deworming tablet for stomach worms and loss of appetite.",
    "group": "ANTHELMINTIC / ANTI-WORM",
    "brand_examples": "Zentel, Bandy, Alminth"
  },
  {
    "salt": "Ivermectin",
    "description_hi": "त्वचा में खाज-खुजली (Scabies) और पैरासाइट इंफेक्शन।",
    "description_en": "Treatment for Scabies and internal parasitic infections.",
    "group": "ANTI-PARASITIC",
    "brand_examples": "Ivermectol, Ivecop, Scaboma"
  },
  {
    "salt": "Albendazole + Ivermectin",
    "description_hi": "पेट के कीड़े और त्वचा की गंभीर खुजली का एक साथ इलाज।",
    "description_en": "Combined treatment for stomach worms and skin parasites.",
    "group": "ANTI-PARASITIC COMBINATION",
    "brand_examples": "Bandy-Plus, Zentel Plus, Iverfast-A"
  },
  {
    "salt": "Chloroquine Phosphate",
    "description_hi": "मलेरिया बुखार का इलाज और रोकथाम।",
    "description_en": "Treatment and prevention of Malaria fever.",
    "group": "ANTI-MALARIAL",
    "brand_examples": "Lariago, Nivaquine, Resochin"
  },
  {
    "salt": "Artemether + Lumefantrine",
    "description_hi": "गंभीर फालसीपेरम मलेरिया बुखार का तुरंत इलाज।",
    "description_en": "Treatment for acute uncomplicated Plasmodium falciparum malaria.",
    "group": "ANTI-MALARIAL",
    "brand_examples": "Coartem, Falcigo-Plus, Lumether"
  },
  {
    "salt": "Artesunate + Sulphadoxine Pyrimethamine",
    "description_hi": "प्रतिरोधी (Resistant) मलेरिया बुखार का कॉम्बिनेशन इलाज।",
    "description_en": "Combination drug for drug-resistant malaria cases.",
    "group": "ANTI-MALARIAL",
    "brand_examples": "Falcinil-LF, Pyralfin, Rezatrin"
  },
  {
    "salt": "Metronidazole + Diloxanide Furoate",
    "description_hi": "आंतों की पुरानी अमीबियासिस, पेचिश और पेट मरोड़।",
    "description_en": "Intestinal amoebiasis, chronic dysentery, and abdominal cramping.",
    "group": "ANTI-AMEBIC COMBINATION",
    "brand_examples": "Metrogyl Compound, Entamizole, Dependal-M"
  },
  {
    "salt": "Ofloxacin + Metronidazole",
    "description_hi": "लूज मोशन (दस्त), पेट में मरोड़ और आंतों का इंफेक्शन।",
    "description_en": "Loose motions, stomach cramps, and intestinal bacterial issue.",
    "group": "ANTIBIOTIC + ANTI-DIARRHOEAL",
    "brand_examples": "Oflomac-M, Oflox-M, Zenflox-M"
  },
  {
    "salt": "Cetirizine Hydrochloride",
    "description_hi": "छींक आना, नाक बहना, आंखों में पानी और त्वचा की खुजली।",
    "description_en": "Relieves sneezing, runny nose, watery eyes, and skin itching.",
    "group": "ANTI-ALLERGIC",
    "brand_examples": "Cetzine, Okacet, Alerid"
  },
  {
    "salt": "Levocetirizine",
    "description_hi": "बिना ज्यादा नींद आए एलर्जी, धूल से एलर्जी और खुजली कम करना।",
    "description_en": "Non-drowsy relief from dust allergy, sneezing, and hives.",
    "group": "ANTI-ALLERGIC",
    "brand_examples": "Levocet, Levocad, Teczine"
  },
  {
    "salt": "Montelukast + Levocetirizine",
    "description_hi": "अलर्जिक अस्थमा, रात में सांस फूलना, पुरानी छींक और एलर्जी।",
    "description_en": "Allergic asthma, nocturnal breathlessness, and chronic sneezing.",
    "group": "ANTI-ALLERGIC + ANTI-ASTHMATIC",
    "brand_examples": "Montair-LC, Telekast-L, Montek-LC"
  },
  {
    "salt": "Montelukast + Fexofenadine",
    "description_hi": "दिन में बिना सुस्ती आए पुरानी एलर्जी और सांस की एलर्जी का इलाज।",
    "description_en": "Non-sedating allergy control for rhinitis and asthma symptoms.",
    "group": "ANTI-ALLERGIC",
    "brand_examples": "Montair-FX, Histafree-M, Airway-FX"
  },
  {
    "salt": "Fexofenadine Hydrochloride",
    "description_hi": "स्किन एलर्जी, चकत्ते (Hives) और मौसमी जुकाम।",
    "description_en": "Skin allergies, hives, rashes, and seasonal allergic rhinitis.",
    "group": "ANTI-ALLERGIC",
    "brand_examples": "Allegra, Histafree, Fexova"
  },
  {
    "salt": "Pheniramine Maleate (Avil)",
    "description_hi": "कीड़े के काटने, दवा से एलर्जी और तेज खुजली का तुरंत इलाज।",
    "description_en": "Emergency relief for insect bites, drug allergy, and itching.",
    "group": "ANTI-ALLERGIC",
    "brand_examples": "Avil, Vilamin"
  },
  {
    "salt": "Chlorpheniramine Maleate (CPM)",
    "description_hi": "सर्दी-जुकाम, आंखों से पानी आना और छींकों की रोकथाम।",
    "description_en": "Common cold, watery eyes, and sneezing control.",
    "group": "ANTI-ALLERGIC",
    "brand_examples": "Piriton, Cadistin, Zeet"
  },
  {
    "salt": "Paracetamol + Phenylephrine + Chlorpheniramine",
    "description_hi": "सर्दी-जुकाम, बंद नाक, सिरदर्द और बुखार का कॉमन सिरप/टैबलेट।",
    "description_en": "Common formula for cold, blocked nose, headache, and fever.",
    "group": "COLD & FEVER PREPARATION",
    "brand_examples": "Cheston Cold, Sinarest, Dolo Cold"
  },
  {
    "salt": "Dextromethorphan + Phenylephrine + Chlorpheniramine Maleate",
    "description_hi": "सूखी खांसी, बंद नाक, छींकें और गले की खराश के लिए सिरप/टैबलेट।",
    "description_en": "Common formula for dry cough, blocked nose, sneezing, and cold symptoms.",
    "group": "DRY COUGH & COLD PREPARATION",
    "brand_examples": "Corex DX, Ascoril D, Alex Cough Syrup"
  },
  {
    "salt": "Mefenamic Acid + Dicyclomine",
    "description_hi": "पेट दर्द, मरोड़ (ऐंठन) और पीरियड्स के दर्द में राहत देने वाली टैबलेट।",
    "description_en": "Common formula for stomach pain, abdominal cramps, and menstrual pain.",
    "group": "ANTI-SPASMODIC & PAIN RELIEF",
    "brand_examples": "Meftal-Spas, Cyclopam, Colimex"
  },
  {
    "salt": "Prednisolone",
    "description_hi": "एलर्जी, सूजन, अस्थामा और ऑटोइम्यून समस्याओं का स्टेरॉयड सिरप/टैबलेट।",
    "description_en": "Steroid medicine used for allergies, inflammation, asthma, and severe immune conditions.",
    "group": "STEROID & ANTI-INFLAMMATORY",
    "brand_examples": "Wysolone, Omnacortil, Predmet"
  },
  {
    "salt": "Frusemide (Furosemide)",
    "description_hi": "शरीर से extra पानी और नमक (salt) बाहर निकालने में मदद करती है।, शरीर में सूजन (पैर, हाथ, चेहरे), दिल, किडनी या लिवर की बीमारी में पानी जमा होने पर और हाई ब्लड प्रेशर को कम करने वाली वॉटर पिल (मूत्रवर्धक)।",
    "description_en": "Diuretic (water pill) used to treat fluid retention (edema) and high blood pressure.",
    "group": "DIURETIC & ANTI-HYPERTENSIVE",
    "brand_examples": "Lasix, Frusenex, Frusi"
  },
  {
    "salt": "Paracetamol + Phenylephrine + Caffeine + Diphenhydramine",
    "description_hi": "तेज सर्दी, भारी सिर, जकड़ी हुई नाक और बुखार।",
    "description_en": "Severe cold, heavy head, nasal congestion, and body pain.",
    "group": "COLD & FEVER PREPARATION",
    "brand_examples": "Solvin Cold, Febrex Plus, Flucold"
  },

  {
    "salt": "Ambroxol Hydrochloride",
    "description_hi": "बलगम वाली खांसी (Wet Cough), छाती में जकड़न।",
    "description_en": "Thins mucus in wet cough and clears chest congestion.",
    "group": "COUGH & RESPIRATORY",
    "brand_examples": "Ambrodil, Mucolite, Axalin"
  },
  {
    "salt": "Dextromethorphan Hydrobromide",
    "description_hi": "सूखी खांसी (Dry Cough) और गले की खराश।",
    "description_en": "Suppresses dry irritating cough and throat tickle.",
    "group": "COUGH SUPPRESSANT",
    "brand_examples": "Benadryl DR, Lastuss, Alex"
  },
  {
    "salt": "Dextromethorphan + Chlorpheniramine + Phenylephrine",
    "description_hi": "सूखी खांसी, बंद नाक, छींकें और गले में जलन।",
    "description_en": "Dry cough, congested nose, sneezing, and throat discomfort.",
    "group": "COLD & COUGH PREPARATION",
    "brand_examples": "Ascoril D Plus, Corex DX, Zeet DX"
  },
  {
    "salt": "Ambroxol + Terbutaline + Guaiphenesin",
    "description_hi": "गाढ़ा बलगम, सांस फूलना और बलगम वाली खांसी का सीरप।",
    "description_en": "Expectorant syrup for thick mucus, wheezing, and wet cough.",
    "group": "EXPECTORANT / COUGH SYRUP",
    "brand_examples": "Ascoril Plus, Mucolite SR, Ventorlin Expectorant"
  },
  {
    "salt": "Levosalbutamol + Ambroxol + Guaiphenesin",
    "description_hi": "अस्थमा वाले मरीजों में बलगम वाली खांसी और सांस की नली खोलना।",
    "description_en": "Wet cough syrup that opens airways for asthmatic patients.",
    "group": "EXPECTORANT / BRONCHODILATOR",
    "brand_examples": "Ascoril LS, Bro-Zedex LS, Solvin LS"
  },
  {
    "salt": "Terbutaline + Bromhexine + Guaiphenesin + Menthol",
    "description_hi": "छाती में जमा बलगम निकालना, खांसी और गले को ठंडक देना।",
    "description_en": "Clears chest congestion, breaks phlegm, with cooling effect.",
    "group": "EXPECTORANT COUGH SYRUP",
    "brand_examples": "Grilinctus-BM, Benadryl Cough Formula, Tossex"
  },
  {
    "salt": "Salbutamol (Albuterol)",
    "description_hi": "अस्थमा अटैक, सांस फूलना और हवा की नली में रुकावट।",
    "description_en": "Asthma attacks, shortness of breath, and airway spasms.",
    "group": "BRONCHODILATOR",
    "brand_examples": "Asthalin, Ventorlin, Aerolin"
  },
  {
    "salt": "Levosalbutamol",
    "description_hi": "कम साइड इफेक्ट के साथ सांस फूलने और घबराहट में राहत।",
    "description_en": "Relieves breathlessness with fewer heart-palpitation side effects.",
    "group": "BRONCHODILATOR",
    "brand_examples": "Levolin, Levaspan, Salbair"
  },
  {
    "salt": "Formoterol + Budesonide (Inhaler/Rotacap)",
    "description_hi": "अस्थमा और दमा (COPD) के मरीजों के लिए सांस की मुख्य दवा।",
    "description_en": "Mainstay inhaler therapy for Asthma and COPD management.",
    "group": "RESPIRATORY / INHALER",
    "brand_examples": "Foracort, Symbicort, Budamate"
  },
  {
    "salt": "Salmeterol + Fluticasone (Inhaler)",
    "description_hi": "सांस की पुरानी बीमारी, अस्थमा अटैक रोकना।",
    "description_en": "Long-term control for chronic asthma and airway swelling.",
    "group": "RESPIRATORY / INHALER",
    "brand_examples": "Seroflo, Seretide, Airtec SF"
  },
  {
    "salt": "Ipratropium Bromide + Levosalbutamol (Respules)",
    "description_hi": "नेबुलाइजर (Inhaler) द्वारा सांस फूलने का तुरंत इलाज।",
    "description_en": "Nebulization solution for acute breathlessness emergency.",
    "group": "RESPIRATORY / NEBULIZER",
    "brand_examples": "Duolin Respules, IPRAvent Levo, Combimist L"
  },
  {
    "salt": "Budesonide (Respules)",
    "description_hi": "बच्चों और बड़ों में फेफड़ों की सूजन कम करने के लिए नेबुलाइजेशन।",
    "description_en": "Inhaled corticosteroid for lung inflammation via nebulant.",
    "group": "RESPIRATORY / STEROID",
    "brand_examples": "Budecort Respules, Pulmicort, Nebicort"
  },
  {
    "salt": "Deriphylline (Etofylline + Theophylline)",
    "description_hi": "सांस फूलना, सीने में जकड़न और दमा का सस्ता इलाज।",
    "description_en": "Relieves shortness of breath, chest tightness, and asthma.",
    "group": "BRONCHODILATOR",
    "brand_examples": "Deriphyllin, Eto-Theocar, Theo-Asthalin"
  },
  {
    "salt": "Xylometazoline (Nasal Drops)",
    "description_hi": "बंद नाक खोलने के लिए तुरंत असरदार नेज़ल ड्रॉप/स्प्रे।",
    "description_en": "Nasal spray for immediate relief from blocked nose.",
    "group": "NASAL DECONGESTANT",
    "brand_examples": "Otrivin, Otrivin Oxy, Nasivion"
  },
  {
    "salt": "Oxymetazoline (Nasal Spray)",
    "description_hi": "सर्दी-जुकाम और साइनस से बंद नाक को 12 घंटे तक खोलना।",
    "description_en": "Long-acting 12-hour nasal decongestant spray.",
    "group": "NASAL DECONGESTANT",
    "brand_examples": "Nasivion Classic, Sinarest Nasal, Afrin"
  },
  {
    "salt": "Fluticasone Nasal Spray",
    "description_hi": "एलर्जी की वजह से हमेशा नाक बंद रहना और छींक आना।",
    "description_en": "Steroid nasal spray for chronic allergic rhinitis.",
    "group": "NASAL STEROID",
    "brand_examples": "Flomist, Flonase, Furmist"
  },
  {
    "salt": "Azelastine + Fluticasone Nasal Spray",
    "description_hi": "गंभीर एलर्जी, नाक में सूजन और पुरानी छींकें।",
    "description_en": "Combined antihistamine & steroid spray for severe allergies.",
    "group": "NASAL SPRAY",
    "brand_examples": "Azel-FT, Dymista, Duonase"
  },
  {
    "salt": "Sodium Chloride (Saline Nasal Spray)",
    "description_hi": "छोटे बच्चों में सूखी नाक की सफाई और प्राकृतिक बंद नाक इलाज।",
    "description_en": "Safe saline spray for clear breathing in babies and adults.",
    "group": "NASAL CARE",
    "brand_examples": "Nasoclear, Otrivin S, Solspre"
  },
  {
    "salt": "Bilastine",
    "description_hi": "त्वचा की एलर्जी और लगातार छींकों के लिए नई आधुनिक दवा।",
    "description_en": "Modern non-drowsy antihistamine for allergic skin & rhinitis.",
    "group": "ANTI-ALLERGIC",
    "brand_examples": "Bilasure, Bilacal, Bilavert"
  },
  {
    "salt": "Bilastine + Montelukast",
    "description_hi": "आंख-नाक की तेज एलर्जी और सांस की रुकावट का पक्का इलाज।",
    "description_en": "Advanced dual action for persistent rhinitis and wheezing.",
    "group": "ANTI-ALLERGIC",
    "brand_examples": "Bilasure-M, Bilamont, Bilast-M"
  },
  {
    "salt": "Hydroxyzine Hydrochloride",
    "description_hi": "त्वचा पर लाल चकत्ते, बहुत तेज खुजली और एलर्जी के कारण तनाव।",
    "description_en": "Treats severe skin itching, hives, and allergy-induced anxiety.",
    "group": "ANTI-ALLERGIC / ANTIHISTAMINE",
    "brand_examples": "Atarax, Hicope, Hyzine"
  },
  {
    "salt": "Promethazine",
    "description_hi": "सफर में उल्टी (Motion Sickness), एलर्जी और हल्की नींद लाने हेतु।",
    "description_en": "Motion sickness, nausea, and allergic sedation.",
    "group": "ANTI-EMETIC / ANTIHISTAMINE",
    "brand_examples": "Phenergan, Avomine, Prometh"
  },
  {
    "salt": "Cyproheptadine",
    "description_hi": "भूख बढ़ाना (Appetite booster) और एलर्जी कम करना।",
    "description_en": "Appetite stimulant and anti-allergic medication.",
    "group": "APPETITE STIMULANT",
    "brand_examples": "Ciplactin, Practin, Apetamin"
  },
  {
    "salt": "Cyproheptadine + Tricholine Citrate",
    "description_hi": "बच्चों और बड़ों में भूख बढ़ाने और वजन बढ़ाने का सीरप।",
    "description_en": "Syrup combination to boost appetite and improve digestion.",
    "group": "APPETITE STIMULANT",
    "brand_examples": "Cipzer, Aptimust, Cypon, Aptimate, Apetamin"
  },
  {
    "salt": "Doxylamine Succinate + Pyridoxine (Vitamin B6)",
    "description_hi": "गर्भावस्था (Pregnancy) में सुबह होने वाली उल्टी और मिचली।",
    "description_en": "Treats morning sickness and nausea in pregnant women.",
    "group": "PREGNANCY CARE / ANTI-EMETIC",
    "brand_examples": "Doxinate, Pregnate, Vomitroy"
  },
  {
    "salt": "Codeine Phosphate + Chlorpheniramine",
    "description_hi": "अत्यधिक सूखी खांसी जो नॉर्मल सिरप से ठीक न हो (डॉक्टर पर्चा जरूरी)।",
    "description_en": "Prescription cough syrup for dry, persistent cough.",
    "group": "COUGH SYRUP (RESTRICTED)",
    "brand_examples": "Codostar, Codaliv, Phensedyl"
  },
  {
    "salt": "Omeprazole",
    "description_hi": "पेट में गैस, एसिडिटी, छाती में जलन और पेट का अल्सर।",
    "description_en": "Gas, acidity, heartburn, and stomach ulcer relief.",
    "group": "ACIDITY / ANTACID (PPI)",
    "brand_examples": "Omez, Omee, Omerazole"
  },
  {
    "salt": "Omeprazole + Domperidone",
    "description_hi": "एसिडिटी के साथ खट्टी डकारें, उल्टी जैसा लगना और पेट फूलना।",
    "description_en": "Acidity with nausea, belching, and bloated stomach.",
    "group": "ACIDITY + ANTI-EMETIC",
    "brand_examples": "Omez-D, Omee-D, Omecip-D"
  },
  {
    "salt": "Pantoprazole (40mg)",
    "description_hi": "गंभीर एसिडिटी, खाली पेट पेट दर्द, और गैस का सिरदर्द।",
    "description_en": "Severe acidity, empty-stomach pain, and acid headache.",
    "group": "ACIDITY / ANTACID (PPI)",
    "brand_examples": "Pan-40, Pantocid, Pantodac"
  },
  {
    "salt": "Pantoprazole + Domperidone (SR)",
    "description_hi": "दिनभर रहने वाली गैस, एसिडिटी, उल्टी और पेट का भारीपन।",
    "description_en": "Sustained relief from gas, heartburn, nausea, and bloating.",
    "group": "ACIDITY + ANTI-EMETIC",
    "brand_examples": "Pan-D, Pantocid-D SR, Pantodac-D SR"
  },
  {
    "salt": "Rabeprazole",
    "description_hi": "तुरंत असर करने वाली एसिडिटी और गले में तेजाब आने की दवा।",
    "description_en": "Fast-acting relief for hyperacidity and acid reflux (GERD).",
    "group": "ACIDITY / ANTACID (PPI)",
    "brand_examples": "Rabeloc, Rantac-R, Veloz"
  },
  {
    "salt": "Rabeprazole + Domperidone",
    "description_hi": "एसिडिटी, सीने में जलन और उल्टी का फास्ट रिलीफ कॉम्बिनेशन।",
    "description_en": "Fast combination relief for heartburn, gas, and nausea.",
    "group": "ACIDITY + ANTI-EMETIC",
    "brand_examples": "Rabekind-D, Rabeloc-RD, Happi-D"
  },
  {
    "salt": "Rabeprazole + Levosulpiride",
    "description_hi": "पुराना कब्ज, IBS, एसिडिटी और भोजन न पचना।",
    "description_en": "Chronic GERD, Irritable Bowel Syndrome, and indigestion.",
    "group": "ACIDITY + PROKINETIC",
    "brand_examples": "Rabekind Plus, Rabeloc Plus, Veloz L"
  },
  {
    "salt": "Esomeprazole",
    "description_hi": "पेट के छाले (Ulcers), GERD और पेनकिलर से बनने वाली एसिडिटी।",
    "description_en": "Stomach ulcers, severe acid reflux, and NSAID acidity.",
    "group": "ACIDITY / ANTACID (PPI)",
    "brand_examples": "Nexpro, Sompraz, Esomac"
  },
  {
    "salt": "Esomeprazole + Domperidone",
    "description_hi": "एसिड रिफ्लक्स के साथ उल्टी और पेट के ऊपरी हिस्से का दर्द।",
    "description_en": "Acid reflux paired with vomiting and upper stomach discomfort.",
    "group": "ACIDITY + ANTI-EMETIC",
    "brand_examples": "Nexpro-RD, Sompraz-D, Esomac-D"
  },
  {
    "salt": "Ranitidine",
    "description_hi": "पेट की गैस और तेजाब कम करने की पुरानी पॉपुलर दवा (H2 Blocker)।",
    "description_en": "H2 blocker for mild gas, acidity, and heartburn relief.",
    "group": "ACIDITY / ANTACID",
    "brand_examples": "Rantac, Aciloc, Zinetac"
  },
  {
    "salt": "Famotidine",
    "description_hi": "रात में होने वाली एसिडिटी और सीने की जलन कम करना।",
    "description_en": "Reduces night-time stomach acid production and heartburn.",
    "group": "ACIDITY / ANTACID",
    "brand_examples": "Famocid, Facid, Pepcid"
  },
  {
    "salt": "Magaldrate + Simethicone",
    "description_hi": "एसिडिटी, पेट में गैस के बुलबुले, और तुरंत राहत का एंटासिड सिरप।",
    "description_en": "Antacid liquid syrup for instant relief from acidity and gas.",
    "group": "ANTACID SYRUP",
    "brand_examples": "Digene, Gelusil, Ulgel"
  },
  {
    "salt": "Dried Aluminium Hydroxide + Magnesium Hydroxide + Simethicone",
    "description_hi": "पेट की तेजाबियत, सीने की जलन और बदहजमी का सिरप।",
    "description_en": "Neutralizes excess stomach acid and relieves gas/bloating.",
    "group": "ANTACID SYRUP",
    "brand_examples": "Cremaffin Plus, Mucaine Gel, Diovol"
  },
  {
    "salt": "Sucralfate",
    "description_hi": "पेट और आंतों के छालों (Ulcer) पर सुरक्षात्मक परत बनाना।",
    "description_en": "Forms a protective coating over stomach and intestinal ulcers.",
    "group": "ULCER PROTECTIVE",
    "brand_examples": "Sucrafil, Carafate, Sucral"
  },
  {
    "salt": "Sucralfate + Oxetacaine",
    "description_hi": "पेट के अल्सर का दर्द तुरंत सुन्न करके आराम देना।",
    "description_en": "Local anesthetic antacid syrup for burning ulcer pain.",
    "group": "ULCER PROTECTIVE / ANESTHETIC",
    "brand_examples": "Sucrafil-O, Sucral-O, Cofta Gel"
  },
  {
    "salt": "Ondansetron (4mg / 8mg)",
    "description_hi": "उल्टी (Vomiting) और मिचली (Nausea) को तुरंत रोकने की दवा।",
    "description_en": "Stops vomiting and nausea fast across all age groups.",
    "group": "ANTI-EMETIC",
    "brand_examples": "Emeset, Ondem, Vomikind"
  },
  {
    "salt": "Domperidone",
    "description_hi": "पेट भरा-भरा लगना, खाना ऊपर आना और हल्की उल्टी।",
    "description_en": "Prevents bloating, fullness feeling, and mild vomiting.",
    "group": "ANTI-EMETIC / PROKINETIC",
    "brand_examples": "Vomistop, Motilium, Domstal"
  },
  {
    "salt": "Metoclopramide",
    "description_hi": "माइग्रेन की उल्टी, पेट खाली न होना और भारी मिचली।",
    "description_en": "Migraine-related vomiting and delayed stomach emptying.",
    "group": "ANTI-EMETIC / PROKINETIC",
    "brand_examples": "Perinorm, Reglan, Maxeron"
  },
  {
    "salt": "Granisetron",
    "description_hi": "कैंसर की थेरेपी या बड़े ऑपरेशन के बाद होने वाली तेज उल्टी।",
    "description_en": "Prevents severe post-operative or chemotherapy vomiting.",
    "group": "ANTI-EMETIC",
    "brand_examples": "Graniforce, Kytril, Graniset"
  },
  {
    "salt": "Dicyclomine Hydrochloride",
    "description_hi": "पेट की नसों में ऐंठन, मरोड़ और पेट दर्द।",
    "description_en": "Relieves smooth muscle spasms and acute stomach cramps.",
    "group": "ANTISPASMODIC",
    "brand_examples": "Cyclopam, Colimex, Bentyl"
  },
  {
    "salt": "Dicyclomine + Paracetamol",
    "description_hi": "पेट दर्द के साथ बुखार और ऐंठन।",
    "description_en": "Stomach pain combined with fever and internal cramps.",
    "group": "ANTISPASMODIC + PAIN KILLER",
    "brand_examples": "Cyclopam-P, Colimex-DF, Spasmonil"
  },
  {
    "salt": "Drotaverine Hydrochloride",
    "description_hi": "किडनी स्टोन (पथरी) का दर्द, पित्त की थैली का दर्द और पीरियड दर्द।",
    "description_en": "Kidney stone pain, gallbladder colic, and menstrual pain.",
    "group": "ANTISPASMODIC",
    "brand_examples": "Drotin, Drotikind, No-Spa"
  },
  {
    "salt": "Drotaverine + Aceclofenac",
    "description_hi": "पथरी का तेज दर्द और मरोड़ वाला पेट दर्द।",
    "description_en": "Severe spasmodic pain due to stones or intestinal issues.",
    "group": "ANTISPASMODIC + PAIN KILLER",
    "brand_examples": "Drotin-A, Zerodol-Spas, Hifenac-D"
  },
  {
    "salt": "Drotaverine + Mefenamic Acid",
    "description_hi": "मासिक धर्म (Periods) का बहुत तेज असहनीय दर्द।",
    "description_en": "Severe menstrual cramp relief during period flow.",
    "group": "ANTISPASMODIC + PAIN KILLER",
    "brand_examples": "Drotin-M, Drotikind-M, Mefkind-Spas"
  },
  {
    "salt": "Mebeverine Hydrochloride",
    "description_hi": "IBS (आंतों की बीमारी) में पेट में दर्द, गैस और दस्त/कब्ज।",
    "description_en": "Relieves cramping in Irritable Bowel Syndrome (IBS).",
    "group": "ANTISPASMODIC",
    "brand_examples": "Colospa, Morease, Mebver"
  },
  {
    "salt": "Loperamide",
    "description_hi": "अचानक शुरू हुए दस्त (Loose Motions) की गति धीमी करना।",
    "description_en": "Slowing down intestinal movement in acute diarrhea.",
    "group": "ANTI-DIARRHOEAL",
    "brand_examples": "Imodium, Lopamide, Eldoper"
  },
  {
    "salt": "Racecadotril",
    "description_hi": "बच्चों और बड़ों में पतले पानी जैसे दस्त को कंट्रोल करना।",
    "description_en": "Reduces watery secretion in acute diarrhea for all ages.",
    "group": "ANTI-DIARRHOEAL",
    "brand_examples": "Redotil, Hidrasec, Enuff"
  },
  {
    "salt": "ORS (Oral Rehydration Salts)",
    "description_hi": "दस्त और उल्टी में शरीर से निकले पानी और इलेक्ट्रोलाइट्स की भरपाई।",
    "description_en": "Restores lost body fluids and salts during dehydration.",
    "group": "REHYDRATION / ELECTROLYTES",
    "brand_examples": "Electral, ORS-L, Enerzal"
  },
  {
    "salt": "Lactic Acid Bacillus (Probiotics)",
    "description_hi": "आंतों के अच्छे बैक्टीरिया बढ़ाना, एंटीबायोटिक दस्त से बचाव।",
    "description_en": "Restores gut flora and prevents antibiotic-induced diarrhea.",
    "group": "PROBIOTIC",
    "brand_examples": "Sporlac, LactoBacil, BIFILAC"
  },
  {
    "salt": "Saccharomyces Boulardii",
    "description_hi": "गंभीर दस्त और इंफेक्शन के बाद आंतों को स्वस्थ बनाना।",
    "description_en": "Probiotic yeast for severe diarrhea recovery and gut health.",
    "group": "PROBIOTIC",
    "brand_examples": "Econorm, Darolac, Florastor"
  },
  {
    "salt": "Lactulose",
    "description_hi": "पुराना कब्ज (Constipation) दूर करने और मल को मुलायम करने का सीरप।",
    "description_en": "Laxative syrup for chronic constipation and stool softening.",
    "group": "LAXATIVE",
    "brand_examples": "Duphalac, Cremaffin, Loose"
  },
  {
    "salt": "Liquid Paraffin + Milk of Magnesia + Sodium Picosulfate",
    "description_hi": "कब्ज और बवासीर (Piles) के मरीजों के लिए पेट साफ करने का सीरप।",
    "description_en": "Effective laxative syrup for constipation and piles patients.",
    "group": "LAXATIVE SYRUP",
    "brand_examples": "Cremaffin Plus, Laxocore Plus, Piclin Plus"
  },
  {
    "salt": "Bisacodyl",
    "description_hi": "कब्ज में रात को लेने वाली पेट साफ करने की गोली।",
    "description_en": "Overnight relief tablet for constipation.",
    "group": "LAXATIVE",
    "brand_examples": "Dulcolax, Gerbisa, Laxidyl"
  },
  {
    "salt": "Isabgol (Psyllium Husk)",
    "description_hi": "प्राकृतिक रूप से कब्ज दूर करना और पाचन बेहतर बनाना।",
    "description_en": "Natural dietary fiber for constipation and bowel movement.",
    "group": "NATURAL LAXATIVE",
    "brand_examples": "Dabur Isabgol, Softovac, Fybogel"
  },
  {
    "salt": "Digestive Enzymes (Fungal Diastase + Pepsin)",
    "description_hi": "खाना न पचना, भूख न लगना और पेट का भारीपन।",
    "description_en": "Syrup for indigestion, poor appetite, and fullness.",
    "group": "DIGESTIVE ENZYME",
    "brand_examples": "Aristozyme, Carmina, Unienzyme"
  },
  {
    "salt": "Fluconazole (150mg / 200mg)",
    "description_hi": "दाद, खाज, खुजली और फंगल इंफेक्शन की सबसे कॉमन गोली।",
    "description_en": "Oral antifungal tablet for ringworm, itching, and fungal infection.",
    "group": "ANTI-FUNGAL",
    "brand_examples": "Forcan, Zocon, Fluka"
  },
  {
    "salt": "Itraconazole (100mg / 200mg)",
    "description_hi": "पुराना जिद्दी फंगल इंफेक्शन, नाखूनों का फंगस और दाद।",
    "description_en": "Advanced antifungal for stubborn ringworm and nail infections.",
    "group": "ANTI-FUNGAL",
    "brand_examples": "Canditral, IT-Mac, Sporanox"
  },
  {
    "salt": "Terbinafine Hydrochloride",
    "description_hi": "जांघों की खुजली (Jock Itch), एथलीट फुट और त्वचा का फंगस।",
    "description_en": "Treats skin fungal infection, jock itch, and athlete's foot.",
    "group": "ANTI-FUNGAL",
    "brand_examples": "Sebifin, Terbinaforce, Lamisil"
  },
  {
    "salt": "Ketoconazole",
    "description_hi": "सिर का डैंड्रफ (Shampoo) और त्वचा के दाद-खाज की क्रीम।",
    "description_en": "Antifungal shampoo for dandruff and cream for ringworm.",
    "group": "ANTI-FUNGAL",
    "brand_examples": "Nizral, Ketocip, Danfree"
  },
  {
    "salt": "Clotrimazole",
    "description_hi": "गर्मी के चकत्ते (Ghamori), पसीने की खुजली और फंगस पाउडर/क्रीम।",
    "description_en": "Topical antifungal powder/cream for sweat rash and itching.",
    "group": "ANTI-FUNGAL TOPICAL",
    "brand_examples": "Candid, Clocip, Canesten"
  },
  {
    "salt": "Luliconazole",
    "description_hi": "दाद और खुजली पर दिन में एक बार लगाने वाली सबसे तेज असरदार क्रीम।",
    "description_en": "Fast-acting once-daily cream for skin ringworm and itch.",
    "group": "ANTI-FUNGAL TOPICAL",
    "brand_examples": "Lulican, Lulifin, Lulimac"
  },
  {
    "salt": "Clobetasol Propionate",
    "description_hi": "त्वचा का एग्जिमा, सोरायसिस और अत्यधिक लालिमा/खुजली।",
    "description_en": "Strong topical steroid for eczema, psoriasis, and rash.",
    "group": "CORTICOSTEROID TOPICAL",
    "brand_examples": "Tenovate, Dermovate, Powercort"
  },
  {
    "salt": "Clobetasol + Neomycin + Miconazole",
    "description_hi": "फंगल + बैक्टीरियल इंफेक्शन और खुजली की ऑल-इन-वन क्रीम।",
    "description_en": "Mix cream for fungal, bacterial skin infections and rash.",
    "group": "MIXED SKIN CREAM",
    "brand_examples": "Candid-B3, Panderm Plus, Dermikem OC"
  },
  {
    "salt": "Beclomethasone + Neomycin + Clotrimazole",
    "description_hi": "त्वचा में लाल चकत्ते, सूजन, बैक्टीरियल और फंगल खुजली।",
    "description_en": "Multi-combination cream for infected rashes and itching.",
    "group": "MIXED SKIN CREAM",
    "brand_examples": "Candid-B, Clocip-B, Quadriderm"
  },
  {
    "salt": "Betamethasone Valerate + Neomycin",
    "description_hi": "त्वचा की सूजन, एलर्जी और कटने/छिलने का इंफेक्शन।",
    "description_en": "Cream for skin inflammation and mild infected wounds.",
    "group": "TOPICAL STEROID + ANTIBIOTIC",
    "brand_examples": "Betnovate-N, Betneval-N, Walacort-N"
  },
  {
    "salt": "Permethrin (5%)",
    "description_hi": "स्कैबीज (रात में होने वाली बहुत तेज खुजली) और जूएं मारना।",
    "description_en": "Lotion/soap for Scabies itch mites and head lice.",
    "group": "ANTI-SCABIES / ECTOPARASITICIDE",
    "brand_examples": "Permite, Scabper, Scaboma"
  },
  {
    "salt": "Fusidic Acid",
    "description_hi": "बैक्टीरियल घाव, फोड़े-फुंसी और चेहरे के इंफेक्शन की क्रीम।",
    "description_en": "Topical antibiotic cream for bacterial skin wounds and boils.",
    "group": "TOPICAL ANTIBIOTIC",
    "brand_examples": "Fucidin, Fudic, Fusee"
  },
  {
    "salt": "Mupirocin",
    "description_hi": "बैक्टीरियल घाव, नाक के अंदर का इंफेक्शन और फोड़े।",
    "description_en": "Potent topical antibiotic ointment for skin infections & cuts.",
    "group": "TOPICAL ANTIBIOTIC",
    "brand_examples": "Bactroban, T-Bact, Mupirocin"
  },
  {
    "salt": "Povidone-Iodine (Betadine)",
    "description_hi": "चोट, घाव, जलने और ऑपरेशन के बाद का एंटीसेप्टिक लोशन/मलहम।",
    "description_en": "Antiseptic ointment/solution for cuts, burns, and wounds.",
    "group": "ANTISEPTIC",
    "brand_examples": "Betadine, Cipladine, Wokadine"
  },
  {
    "salt": "Silver Sulfadiazine",
    "description_hi": "आग से जले हुए घाव (Burns) का इलाज और इंफेक्शन से बचाव।",
    "description_en": "Burn wound care ointment to prevent severe infections.",
    "group": "BURN CARE TOPICAL",
    "brand_examples": "Burnol, Silverex, Silvadene"
  },
  {
    "salt": "Calamine Lotion + Light Liquid Paraffin",
    "description_hi": "चिकनपॉक्स के दाने, धूप से जली त्वचा (Sunburn) और खुजली में राहत।",
    "description_en": "Soothing lotion for chickenpox rash, sunburn, and itching.",
    "group": "SKIN SOOTHING LOTION",
    "brand_examples": "Lacto Calamine, Caladryl, Dermocalm"
  },
  {
    "salt": "Adapalene + Benzoyl Peroxide",
    "description_hi": "चेहरे के जिद्दी कील-मुंहासे (Acne/Pimples) की क्रीम।",
    "description_en": "Topical gel combination for severe acne pimples.",
    "group": "ANTI-ACNE",
    "brand_examples": "Epiduo, Deriva-BPO, Adaferin-BPO"
  },
  {
    "salt": "Hydroquinone + Tretinoin + Fluocinolone",
    "description_hi": "चेहरे के काले धब्बे, झाइयां (Melasma) साफ करने की क्रीम।",
    "description_en": "Skin lightening cream for hyperpigmentation and melasma.",
    "group": "DERMATOLOGY / SKIN LIGHTENING",
    "brand_examples": "Melacare, Skinlite, Tri-Luma"
  },
  {
    "salt": "Minoxidil (2% / 5%)",
    "description_hi": "बाल झड़ने से रोकना और सिर पर नए बाल उगाने का लोशन।",
    "description_en": "Topical solution for hair loss prevention and hair regrowth.",
    "group": "HAIR CARE / ALOPECIA",
    "brand_examples": "Tugain, Mintop, Morr"
  },
  {
    "salt": "Coal Tar + Salicylic Acid",
    "description_hi": "सिर में सोरायसिस की पपड़ी और जिद्दी डैंड्रफ का शैम्पू।",
    "description_en": "Shampoo for scalp psoriasis crusts and chronic dandruff.",
    "group": "ANTI-DANDRUFF / PSORIASIS",
    "brand_examples": "Ionil-T, Salytar, TarDozo"
  },
  {
    "salt": "Amlodipine (5mg / 10mg)",
    "description_hi": "हाई ब्लड प्रेशर (High BP) और सीने का दर्द (Angina) कंट्रोल करना।",
    "description_en": "Controls High Blood Pressure and prevents angina chest pain.",
    "group": "CARDIOVASCULAR",
    "brand_examples": "Amlong, Stamlo, Amlopin"
  },
  {
    "salt": "Amlodipine + Atenolol",
    "description_hi": "हाई बीपी के साथ दिल की धड़कन तेज होने पर कंट्रोल।",
    "description_en": "Dual control for High BP and elevated pulse rate.",
    "group": "CARDIOVASCULAR COMBINATION",
    "brand_examples": "Amlokind-AT, Stamlo Beta, Tenochek-A"
  },
  {
    "salt": "Amlodipine + Telmisartan",
    "description_hi": "हाई ब्लड प्रेशर का सबसे ज्यादा चलने वाला कॉम्बिनेशन।",
    "description_en": "Widely prescribed combination for hypertension control.",
    "group": "CARDIOVASCULAR COMBINATION",
    "brand_examples": "Telmikind-AM, Amlosafe-TM, Telma-AM"
  },
  {
    "salt": "Telmisartan (40mg / 80mg)",
    "description_hi": "हाई बीपी को कंट्रोल करना और दिल को सुरक्षित रखना।",
    "description_en": "Protects heart and maintains normal blood pressure levels.",
    "group": "CARDIOVASCULAR",
    "brand_examples": "Telma, Telmikind, Tazloc"
  },
  {
    "salt": "Telmisartan + Hydrochlorothiazide",
    "description_hi": "हाई बीपी जिसे कंट्रोल करने के लिए पेशाब बढ़ाने वाली दवा की जरूरत हो।",
    "description_en": "Blood pressure control combined with a mild diuretic.",
    "group": "CARDIOVASCULAR COMBINATION",
    "brand_examples": "Telma-H, Telmikind-H, Tazloc-H"
  },
  {
    "salt": "Enalapril / Ramipril",
    "description_hi": "हाई बीपी, हार्ट फेलियर और किडनी सुरक्षा।",
    "description_en": "High BP control, heart failure management, and renal protection.",
    "group": "CARDIOVASCULAR",
    "brand_examples": "Envas, Cardace, Ramihart"
  },
  {
    "salt": "Atorvastatin (10mg / 20mg)",
    "description_hi": "खून में बैड कोलेस्ट्रॉल कम करना और हार्ट अटैक से बचाना।",
    "description_en": "Lowers bad cholesterol (LDL) and reduces heart attack risk.",
    "group": "CHOLESTEROL LOWERING",
    "brand_examples": "Atorva, Lipivas, Tonact"
  },
  {
    "salt": "Rosuvastatin",
    "description_hi": "उच्च कोलेस्ट्रॉल और ट्राइग्लीसराइड्स को तेजी से घटाना।",
    "description_en": "High-potency statin for reducing cholesterol and triglycerides.",
    "group": "CHOLESTEROL LOWERING",
    "brand_examples": "Rosuvas, Crestor, Rosulip"
  },
  {
    "salt": "Clopidogrel + Aspirin",
    "description_hi": "खून को पतला रखना ताकि नसों में थक्का (Blood Clot) न बने।",
    "description_en": "Blood thinner to prevent clots, strokes, and heart attacks.",
    "group": "BLOOD THINNER / ANTI-PLATELET",
    "brand_examples": "Clavix-AS, Deplatt-A, Ecosprin-AV"
  },
  {
    "salt": "Metformin (500mg / 850mg / 1000mg)",
    "description_hi": "टाइप-2 शुगर (Diabetes) की पहली और मुख्य दवा।",
    "description_en": "First-line tablet for Type-2 Diabetes management.",
    "group": "ANTI-DIABETIC",
    "brand_examples": "Glycomet, Glyciphage, Cetapin"
  },
  {
    "salt": "Glimepiride + Metformin",
    "description_hi": "ब्लड शुगर लेवल को मजबूती से कंट्रोल करने का कॉम्बिनेशन।",
    "description_en": "Popular dual combination for controlling Type-2 Diabetes.",
    "group": "ANTI-DIABETIC COMBINATION",
    "brand_examples": "Glycomet-GP, Amaryl-M, Glimestar-M"
  },
  {
    "salt": "Teneligliptin + Metformin",
    "description_hi": "खाने के बाद बढ़ने वाली शुगर को कंट्रोल करने की आधुनिक दवा।",
    "description_en": "Modern anti-diabetic combination for post-meal sugar spikes.",
    "group": "ANTI-DIABETIC COMBINATION",
    "brand_examples": "Teneza-M, Tenepure-M, Zita Plus Met"
  },
  {
    "salt": "Vildagliptin + Metformin",
    "description_hi": "ब्लड शुगर कंट्रोल करना बिना वजन या लो-शुगर के खतरे के।",
    "description_en": "Controls blood glucose efficiently with lower hypoglycemia risk.",
    "group": "ANTI-DIABETIC COMBINATION",
    "brand_examples": "Galvus Met, Jalra-M, Zomelis Met"
  },
  {
    "salt": "Dapagliflozin",
    "description_hi": "पेशाब के जरिए अतिरिक्त शुगर बाहर निकालना और दिल/किडनी सुरक्षित रखना।",
    "description_en": "Excretes excess glucose via urine; offers heart/kidney care.",
    "group": "ANTI-DIABETIC",
    "brand_examples": "Forxiga, Oxra, Dapaglyn"
  },
  {
    "salt": "Dexamethasone",
    "description_hi": "गंभीर एलर्जी, अस्थमा अटैक और सूजन कम करने का स्टेरॉयड।",
    "description_en": "Potent corticosteroid for severe allergies and inflammation.",
    "group": "STEROID",
    "brand_examples": "Dexona, Decdan, Demisone"
  },
  {
    "salt": "Prednisolone",
    "description_hi": "एलर्जी, सांस की सूजन, त्वचा रोग और गठिया का स्टेरॉयड।",
    "description_en": "Steroid for asthma, skin conditions, and autoimmune issues.",
    "group": "STEROID",
    "brand_examples": "Wysolone, Omnacortil, Predmet"
  },
  {
    "salt": "Methylprednisolone",
    "description_hi": "गंभीर सूजन, जोड़ों में तेज दर्द और एलर्जी रिस्पॉन्स।",
    "description_en": "Anti-inflammatory steroid for joint pain and severe allergic reactions.",
    "group": "STEROID",
    "brand_examples": "Medrol, Solu-Medrol, Zempred"
  },
  {
    "salt": "Deflazacort",
    "description_hi": "कम साइड इफेक्ट्स वाला स्टेरॉयड - एलर्जी और सूजन के लिए।",
    "description_en": "Corticosteroid with fewer side-effects for long-term therapy.",
    "group": "STEROID",
    "brand_examples": "Defcort, Macpred, Decort"
  },
  {
    "salt": "Norethisterone",
    "description_hi": "पीरियड्स आगे बढ़ाना (Delay) और भारी ब्लीडिंग रोकना।",
    "description_en": "Used to delay periods and control heavy menstrual bleeding.",
    "group": "HORMONAL / GYNECOLOGY",
    "brand_examples": "Primolut-N, Regestrone, Norgest"
  },
  {
"salt": "Dill Oil + Fennel Oil",
"description_hi": "छोटे बच्चों और वयस्कों में पेट गैस, अपच, मरोड़ और पेट फूलने (Colic pain) से तुरंत राहत दिलाता है।",
"description_en": "Relieves stomach gas, indigestion, abdominal cramps, and bloating (colic pain) primarily in infants and adults.",
"group": "CARMINATIVE / DIGESTIVE AID",
"brand_examples": "Gripe Water (Woodward's), Colichead Drops, Bonnisan, Carmicide"
},
  {
    "salt": "Levonorgestrel",
    "description_hi": "इमरजेंसी में अनचाहे गर्भ से बचाव की गोली (72 घंटे के अंदर)।",
    "description_en": "Emergency contraceptive pill to prevent unwanted pregnancy.",
    "group": "CONTRACEPTIVE",
    "brand_examples": "i-Pill, Unwanted-72, Postinor-1"
  },
  {
    "salt": "Ofloxacin + Metronidazole",
    "description_hi": "पेट और आंतों के संक्रमण (जैसे दस्त/पेचिश) और बैक्टीरिया तथा प्रोटोजोआ से होने वाले इंफेक्शन के इलाज में इस्तेमाल।",
    "description_en": "Used to treat gastrointestinal infections (like diarrhea/dysentery) and combined bacterial and protozoal infections.",
    "group": "ANTIBIOTIC / ANTIPROTOZOAL",
    "brand_examples": "Oflomac-M, Oflox-M, Zenflox-M"
  },
  {
    "salt": "Etamsylate",
    "description_hi": "पीरियड्स की भारी ब्लीडिंग, चोट या ऑपरेशन का खून बहना रोकना।",
    "description_en": "Stops heavy bleeding during periods, injuries, or surgery.",
    "group": "BLEEDING CONTROL",
    "brand_examples": "Ethasyl, K-Stat, Dicynene"
  },
  {
    "salt": "Tranexamic Acid",
    "description_hi": "अत्यधिक रक्तस्राव (Bleeding) को तुरंत थक्का बनाकर रोकना।",
    "description_en": "Promotes blood clotting to halt severe hemorrhage.",
    "group": "BLEEDING CONTROL",
    "brand_examples": "Texakind, Trenaxa, Cyklokapron"
  },
  {
    "salt": "Tranexamic Acid + Mefenamic Acid",
    "description_hi": "मासिक धर्म में अत्यधिक खून बहना और तेज दर्द दोनों रोकना।",
    "description_en": "Stops heavy menstrual flow along with relieving period pain.",
    "group": "GYNECOLOGY / BLEEDING + PAIN",
    "brand_examples": "Texakind-MF, Trenaxa-MF, Trapic-MF"
  },
  {
    "salt": "Disodium Hydrogen Citrate Syrup",
    "description_hi": "पेशाब में जलन (Urinary Burning) और गुर्दे की पथरी में राहत।",
    "description_en": "Systemic alkalizer for burning urination and kidney stones.",
    "group": "URINARY ALKALIZER",
    "brand_examples": "Cital, Alkasol, Citralka"
  },
  {
    "salt": "Thyroxine Sodium (25mcg / 50mcg / 100mcg)",
    "description_hi": "थायरॉयड की कमी (Hypothyroidism) का रोजाना सुबह का इलाज।",
    "description_en": "Daily hormone replacement for Hypothyroidism management.",
    "group": "THYROID CARE",
    "brand_examples": "Thyronorm, Eltroxin, Thyrox"
  },
  {
    "salt": "Cholecalciferol (Vitamin D3 60,000 IU)",
    "description_hi": "हड्डियों की कमजोरी, जोड़ों में दर्द और विटामिन-डी की भारी कमी।",
    "description_en": "High dose weekly Vitamin D3 for bone strength and joints.",
    "group": "VITAMINS & SUPPLEMENTS",
    "brand_examples": "Uprise-D3, Calcirol, D-Rise"
  },
  {
    "salt": "Ferrous Ascorbate + Folic Acid + Zinc",
    "description_hi": "शरीर में खून की कमी (Anemia) दूर करना और हीमोग्लोबिन बढ़ाना।",
    "description_en": "Iron supplement to raise hemoglobin levels and cure anemia.",
    "group": "HAEMATINIC / BLOOD BUILDER",
    "brand_examples": "Orofer XT, Richar CR, Feronia XT"
  },
  {
    "salt": "Calcium Carbonate + Vitamin D3",
    "description_hi": "हड्डियों और दांतों को मजबूत बनाना, प्रेग्नेंसी में कैल्शियम।",
    "description_en": "Essential supplement for bone density and pregnancy care.",
    "group": "MINERAL SUPPLEMENT",
    "brand_examples": "Shelcal, Gemcal, Cipcal"
  },
  {
    "salt": "Multivitamins + Multiminerals + Antioxidants",
    "description_hi": "शारीरिक कमजोरी, थकान, बीमारी के बाद रिकवरी और इम्युनिटी।",
    "description_en": "Boosts daily energy, immune defense, and post-illness recovery.",
    "group": "NUTRITIONAL SUPPLEMENT",
    "brand_examples": "Becadexamin, Revital H, Supradyn"
  },
  {
    "salt": "Lignocaine + Adrenaline (Injection)",
    "description_hi": "छोटे ऑपरेशन या दांत निकालने में जगह को सुन्न करना और खून रोकना।",
    "description_en": "Local anesthesia with vasoconstrictor for minor surgeries.",
    "group": "LOCAL ANESTHETIC",
    "brand_examples": "Lox 2% Adrenaline, Xylocaine Heavy, Gesic"
  },
  {
    "salt": "Amoxicillin + Potassium Clavulanate",
    "description_hi": "बैक्टीरियल इंफेक्शन जैसे गले में खराश, निमोनिया और कान/दांत का दर्द।",
    "description_en": "Broad-spectrum antibiotic for respiratory, ear, and dental infections.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Moxikind-CV, Augmentin, Clavam"
  },
  {
    "salt": "Azithromycin",
    "description_hi": "गले में इंफेक्शन, टॉन्सिल, टाइफाइड और फेफड़ों का संक्रमण।",
    "description_en": "Macrolide antibiotic for throat, lung, and soft tissue infections.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Azee, Azithral, Zady"
  },
  {
    "salt": "Cefixime",
    "description_hi": "टाइफाइड बुखार, मूत्र मार्ग (UTI) और गले का इंफेक्शन।",
    "description_en": "Cephalosporin antibiotic for typhoid, UTI, and respiratory infection.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Taxim-O, Zifi, Cefolac"
  },
  {
    "salt": "Cefixime + Potassium Clavulanate",
    "description_hi": "जिद्दी बैक्टीरियल इंफेक्शन और टाइफाइड का पक्का इलाज।",
    "description_en": "Resistant bacterial infections, typhoid, and severe respiratory issues.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Zifi-CV, Taxim-O CV, Ceftas-CV"
  },
  {
    "salt": "Cefixime + Ofloxacin",
    "description_hi": "पेट के इंफेक्शन, टाइफाइड और जटिल दस्त/पेचिश।",
    "description_en": "Dual antibiotic for typhoid, severe diarrhea, and mixed infections.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Zifi-O, Taxim-O OF, Cefolac-O"
  },
  {
    "salt": "Cefpodoxime Proxetil",
    "description_hi": "त्वचा का इंफेक्शन, ब्रोंकाइटिस और फेफड़ों की बीमारी।",
    "description_en": "Advanced oral cephalosporin for skin, ear, and chest infections.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Gudcef, Doxcef, Cefoprox"
  },
  {
    "salt": "Cefpodoxime + Potassium Clavulanate",
    "description_hi": "गंभीर फेफड़ों के इंफेक्शन और एंटीबायोटिक रेजिस्टेंस से बचाव।",
    "description_en": "High-potency combination for resistant chest and skin infections.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Gudcef-CV, Doxcef-CV, Monocef-O CV"
  },
  {
    "salt": "Cefuroxime Axetil",
    "description_hi": "हड्डियों का इंफेक्शन, स्किन कट/घाव और निमोनिया।",
    "description_en": "Second-generation antibiotic for skin, bone, and lung infections.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Cefakind, Cetil, Forcef"
  },
  {
    "salt": "Ciprofloxacin",
    "description_hi": "दस्त, पेट का इंफेक्शन, पेशाब में जलन (UTI) और आंख का इंफेक्शन।",
    "description_en": "Fluoroquinolone for stomach, urinary, and skin infections.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Ciplox, Cifran, Ciprobid"
  },
  {
    "salt": "Levofloxacin",
    "description_hi": "टीबी, निमोनिया, साइनस और मूत्र मार्ग का गंभीर संक्रमण।",
    "description_en": "Potent broad-spectrum antibiotic for pneumonia, sinusitis, and UTI.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Levoquin, Factive, L-Cin"
  },
  {
    "salt": "Norfloxacin + Tinidazole",
    "description_hi": "पेट की मरोड़, पेचिश (Dysentery) और पानी जैसे पतले दस्त।",
    "description_en": "Effective combination for stomach cramps, dysentery, and loose motion.",
    "group": "ANTIBIOTICS / ANTI-AMOEBIC",
    "brand_examples": "Norflox-TZ, Tiniba-N, Ciplox-TZ"
  },
  {
    "salt": "Doxycycline",
    "description_hi": "चेहरे के मुंहासे (Pimples), मलेरिया, टाइफस और यौन रोग (STI)।",
    "description_en": "Tetracycline antibiotic for acne, STI, vector-borne infections.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Doxypal, Tetradox, Microdox"
  },
  {
    "salt": "Metronidazole",
    "description_hi": "पेट के कीड़े, अमीबियसिस, दांतों के मसूड़ों का इंफेक्शन।",
    "description_en": "Anti-protozoal for amoebiasis, giardiasis, and dental infections.",
    "group": "ANTIPROTOZOAL",
    "brand_examples": "Flagyl, Metrogyl, Aldazole"
  },
  {
    "salt": "Linezolid",
    "description_hi": "अत्यंत गंभीर बैक्टीरियल इंफेक्शन, डायबिटिक फुट अल्सर।",
    "description_en": "Oxazolidinone antibiotic reserved for severe hospital-acquired infections.",
    "group": "ANTIBIOTICS (HIGH-END)",
    "brand_examples": "Lizoforce, Lizolid, Linospan"
  },
  {
    "salt": "Rifaximin",
    "description_hi": "आईबीएस (IBS), ट्रैवलर्स डायरिया और यकृत रोग में पेट की सफाई।",
    "description_en": "Non-absorbable gut antibiotic for IBS and Traveler's Diarrhea.",
    "group": "GUT ANTIBIOTIC",
    "brand_examples": "Rifagut, Rifaxile, RCifax"
  },
  {
    "salt": "Nitrofurantoin",
    "description_hi": "पेशाब में बार-बार होने वाला इंफेक्शन (Recurrent UTI)।",
    "description_en": "Specific antibiotic choice for Urinary Tract Infections (UTI).",
    "group": "URINARY ANTIBIOTIC",
    "brand_examples": "Nifty-SR, Niftran, Martifur"
  },
  {
    "salt": "Clindamycin",
    "description_hi": "त्वचा का गंभीर इंफेक्शन, कील-मुंहासे और हड्डियों का दर्द।",
    "description_en": "Effective for dental, bone, skin infections, and severe acne.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Dalacin-C, Clilact, Clinscin"
  },
  {
    "salt": "Clarithromycin",
    "description_hi": "पेट के अल्सर (H. pylori) और फेफड़ों के इंफेक्शन की दवा।",
    "description_en": "Macrolide antibiotic used in chest infections and H. Pylori kits.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Claribid, Crixan, Clarigard"
  },
  {
    "salt": "Cotrimoxazole (Trimethoprim + Sulfamethoxazole)",
    "description_hi": "कान का इंफेक्शन, ब्रोंकाइटिस और फेफड़ों का संक्रमण।",
    "description_en": "Sulfate-based combined antibiotic for respiratory and ear issues.",
    "group": "ANTIBIOTICS",
    "brand_examples": "Bactrim, Septran, Ciplin"
  },
  {
    "salt": "Faropenem",
    "description_hi": "जब आम एंटीबायोटिक काम न करें (Resistant Infections)।",
    "description_en": "Oral penem antibiotic for resistant urinary and lung infections.",
    "group": "ANTIBIOTICS (ADVANCED)",
    "brand_examples": "Farobact, Faronem, Meropen-O"
  },
  {
    "salt": "Artemether + Lumefantrine",
    "description_hi": "मलेरिया का सबसे कारगर और मानक इलाज (ACT Treatment)।",
    "description_en": "Standard Artemisinin Combination Therapy (ACT) for Malaria.",
    "group": "ANTI-MALARIAL",
    "brand_examples": "Falcinil, Coartem, Arte Plus"
  },
  {
    "salt": "Chloroquine Phosphate",
    "description_hi": "साधारण मलेरिया के बुखार और जोड़ों की सूजन का इलाज।",
    "description_en": "Traditional anti-malarial medication and anti-rheumatic agent.",
    "group": "ANTI-MALARIAL",
    "brand_examples": "Lariago, Nivaquine, Resochin"
  },
  {
    "salt": "Hydroxychloroquine",
    "description_hi": "गठिया (Rheumatoid Arthritis) और लूपस (SLE) की मुख्य दवा।",
    "description_en": "Disease-Modifying Anti-Rheumatic Drug (DMARD) for Autoimmune issues.",
    "group": "ANTI-RHEUMATIC / IMMUNOMODULATOR",
    "brand_examples": "HCQS, Hycort, ZyQ"
  },
  {
    "salt": "Albendazole",
    "description_hi": "पेट के कीड़े मारना (Single Dose Worm Treatment)।",
    "description_en": "Single-dose anthelmintic for intestinal deworming.",
    "group": "ANTI-HELMINTIC",
    "brand_examples": "Zentel, Bandy, Bendex"
  },
  {
    "salt": "Ivermectin + Albendazole",
    "description_hi": "पेट के कीड़े और त्वचा की खुजली/परजीवी का कॉम्बिनेशन।",
    "description_en": "Broad-spectrum antiparasitic combination for worms and mites.",
    "group": "ANTI-HELMINTIC",
    "brand_examples": "Bandy-Plus, Ivecop-A, Zentel-I"
  },
  {
    "salt": "Pregabalin",
    "description_hi": "नसों का दर्द (Nerve Pain), साइटिका और हाथ-पैर में झनझनाहट।",
    "description_en": "Neuropathic pain reliever for sciatica, shingles, and diabetes.",
    "group": "NEUROPATHIC PAIN",
    "brand_examples": "Pregabid, Lyrica, Preganeuron"
  },
  {
    "salt": "Pregabalin + Methylcobalamin",
    "description_hi": "कमजोर नसों की मरम्मत और नसों की झनझनाहट/सुन्नपन का इलाज।",
    "description_en": "Combines neuropathic pain relief with nerve-regenerating Vitamin B12.",
    "group": "NEUROPATHIC PAIN",
    "brand_examples": "Pregabid-M, Maxgalin-M, Neugaba-M"
  },
  {
    "salt": "Gabapentin + Methylcobalamin",
    "description_hi": "डायबिटिक न्यूरोपैथी और रीढ़ की हड्डी के दर्द में आराम।",
    "description_en": "Relieves nerve burning, numbness, and tingling sensation.",
    "group": "NEUROPATHIC PAIN",
    "brand_examples": "Gabapin-ME, Reconstruct-G, Nurokind-G"
  },
  {
    "salt": "Methylcobalamin (Vitamin B12)",
    "description_hi": "विटामिन B12 की कमी, नसों की कमजोरी और खून की कमी।",
    "description_en": "Essential form of Vitamin B12 for nerve health and red blood cells.",
    "group": "VITAMINS / NEURO-NUTRITIONAL",
    "brand_examples": "Nurokind, Methycobal, Rejunuron"
  },
  {
    "salt": "Methylcobalamin + Alpha Lipoic Acid + Pyridoxine + Folic Acid",
    "description_hi": "नसों की कमजोरी, हाथ-पैरों के सुन्नपन का संपूर्ण सप्लीमेंट।",
    "description_en": "Comprehensive antioxidant and nerve rejuvenator formulation.",
    "group": "NEURO-NUTRITIONAL",
    "brand_examples": "Nurokind Plus, Rejunuron Forte, Nervijen"
  },
  {
    "salt": "Citicoline",
    "description_hi": "ब्रेन स्ट्रोक, सिर की चोट और याददाश्त की कमजोरी।",
    "description_en": "Brain cell protector used in stroke recovery and cognitive repair.",
    "group": "NEUROPROTECTIVE",
    "brand_examples": "Strocit, Citistar, Clinuran"
  },
  {
    "salt": "Citicoline + Piracetam",
    "description_hi": "दिमाग का काम बेहतर करना, स्ट्रोक रिकवरी और ध्यान केंद्रित करना।",
    "description_en": "Nootropic combination to improve memory, blood flow, and repair.",
    "group": "NEUROPROTECTIVE / NOOTROPIC",
    "brand_examples": "Strocit-Plus, Citistar-P, Clinuran-P"
  },
  {
    "salt": "Piracetam",
    "description_hi": "याददाश्त बढ़ाना, भूलने की बीमारी (Dementia) और चक्कर आना।",
    "description_en": "Cognitive enhancer for memory improvement and cerebral health.",
    "group": "NOOTROPIC",
    "brand_examples": "Nootropil, Neurocetam, Memotam"
  },
  {
    "salt": "Donepezil",
    "description_hi": "अल्जाइमर रोग (Alzheimer's) में याददाश्त की गिरावट रोकना।",
    "description_en": "Acetylcholinesterase inhibitor for Alzheimer's disease.",
    "group": "ANTI-ALZHEIMER",
    "brand_examples": "Donep, Alzil, Donamem"
  },
  {
    "salt": "Donepezil + Memantine",
    "description_hi": "गंभीर भूलने की बीमारी में दिमाग के सिग्नल्स सुधारना।",
    "description_en": "Dual action therapy for moderate to severe dementia.",
    "group": "ANTI-ALZHEIMER",
    "brand_examples": "Donep-M, Donamem Forte, Alzil-M"
  },
  {
    "salt": "Baclofen",
    "description_hi": "मांसपेशियों की ऐंठन, रीढ़ की हड्डी की अकड़न (Muscle Spasms)।",
    "description_en": "Centrally acting muscle relaxant for severe muscle stiffness.",
    "group": "MUSCLE RELAXANT",
    "brand_examples": "Lioresal, Baclof, Liofen"
  },
  {
    "salt": "Thiocolchicoside",
    "description_hi": "पीठ दर्द, गर्दन की जकड़न और मांसपेशियों का खिंचाव।",
    "description_en": "Muscle relaxant targeting painful muscle spasms.",
    "group": "MUSCLE RELAXANT",
    "brand_examples": "Myoril, Thiospad, Muscoril"
  },
  {
    "salt": "Thiocolchicoside + Aceclofenac",
    "description_hi": "मांसपेशियों में जकड़न और दर्द का असरदार कॉम्बिनेशन।",
    "description_en": "Combines muscle relaxant with a potent anti-inflammatory painkiller.",
    "group": "MUSCLE RELAXANT + NSAID",
    "brand_examples": "Zerodol-TH, Hifenac-TH, Mobiloc-TH"
  },
  {
    "salt": "Thiocolchicoside + Etoricoxib",
    "description_hi": "जोड़ों के दर्द के साथ मांसपेशियों में भारी खिंचाव।",
    "description_en": "Powerful dual relief for joint stiffness and muscle sprains.",
    "group": "MUSCLE RELAXANT + NSAID",
    "brand_examples": "Nucoxia-TH, Etrobax-TH, Etoshine-TH"
  },
  {
    "salt": "Tolperisone Hydrochloride",
    "description_hi": "बिना सुस्ती (No Drowsiness) के मांसपेशियों की जकड़न दूर करना।",
    "description_en": "Non-sedative muscle relaxant for painful spasms.",
    "group": "MUSCLE RELAXANT",
    "brand_examples": "Tolifast, Myotop, Tolperitas"
  },
  {
    "salt": "Tolperisone + Paracetamol",
    "description_hi": "कमर दर्द और नसों/मांसपेशियों का ऐंठन वाला दर्द।",
    "description_en": "Combines non-drowsy muscle relaxant with antipyretic painkiller.",
    "group": "MUSCLE RELAXANT + PAINKILLER",
    "brand_examples": "Tolifast-P, Myotop-P, Myoflex"
  },
  {
    "salt": "Chlorzoxazone + Paracetamol + Aceclofenac",
    "description_hi": "मोच, खिंचाव और स्पोर्ट्स इंजरी का ट्रिपल एक्शन दर्द निवारक।",
    "description_en": "Triple combination for sprains, sports injuries, and muscle pain.",
    "group": "MUSCLE RELAXANT + PAINKILLER",
    "brand_examples": "Zerodol-MR, Hifenac-MR, ACU-MR"
  },
  {
    "salt": "Flunarizine",
    "description_hi": "माइग्रेन (Migraine) के दौरे रोकना और चक्कर आने की रोकथाम।",
    "description_en": "Prophylaxis for migraine attacks and vertigo prevention.",
    "group": "ANTI-MIGRAINE",
    "brand_examples": "Sibelium, Flunarin, Migon"
  },
  {
    "salt": "Propranolol + Flunarizine",
    "description_hi": "आधे सिर में दर्द (Migraine) और धड़कन तेज होने से रोकना।",
    "description_en": "Gold standard combination for chronic migraine prevention.",
    "group": "ANTI-MIGRAINE",
    "brand_examples": "Inderal-F, Ciplar-Plus, Betacap-TR Plus"
  },
  {
    "salt": "Sumatriptan + Naproxen",
    "description_hi": "माइग्रेन दर्द का दौरा शुरू होते ही उसे तुरंत रोकना।",
    "description_en": "Acute migraine abortive therapy combining triptan with NSAID.",
    "group": "ANTI-MIGRAINE",
    "brand_examples": "Sumatript, Napra-D, Suminat-N"
  },
  {
    "salt": "Betahistine Dihydrochloride",
    "description_hi": "चक्कर आना (Vertigo), सिर घूमना और कान में सीटी बजना।",
    "description_en": "Increases inner ear blood flow to cure vertigo and Meniere's disease.",
    "group": "ANTI-VERTIGO",
    "brand_examples": "Vertin, Vertipress, Betavert"
  },
  {
    "salt": "Cinnarizine",
    "description_hi": "सफर में उल्टी/चक्कर आना (Motion Sickness) और संतुलन की समस्या।",
    "description_en": "Antihistamine used for motion sickness, dizziness, and vertigo.",
    "group": "ANTI-VERTIGO",
    "brand_examples": "Stugeron, Cinzan, Vertiron"
  },
  {
    "salt": "Cinnarizine + Dimenhydrinate",
    "description_hi": "गंभीर चक्कर और मतली का दोहरा असरदार इलाज।",
    "description_en": "Dual action for fast control of acute vertigo and nausea.",
    "group": "ANTI-VERTIGO",
    "brand_examples": "Stugeron Plus, Vertizine, Diznil"
  },
  {
    "salt": "Escitalopram",
    "description_hi": "डिप्रेशन, तनाव, चिंता (Anxiety) और घबराहट होना।",
    "description_en": "SSRI for major depressive disorder and general anxiety.",
    "group": "ANTI-DEPRESSANT / ANTI-ANXIETY",
    "brand_examples": "Nexitra, Nexito, Cilentra"
  },
  {
    "salt": "Escitalopram + Clonazepam",
    "description_hi": "तेज चिंता, पैनिक अटैक, नींद न आना और अवसाद।",
    "description_en": "Synergistic combination for severe anxiety and panic attacks.",
    "group": "ANTI-ANXIETY / SEDATIVE",
    "brand_examples": "Nexito-Plus, Depran-L, Clonotril-Plus"
  },
  {
    "salt": "Sertraline",
    "description_hi": "डिप्रेशन, बहुत अधिक सोच विचार करना (OCD) और पैनिक होना।",
    "description_en": "SSRI for depression, OCD, and post-traumatic stress.",
    "group": "ANTI-DEPRESSANT",
    "brand_examples": "Sertima, Serlift, Dacopa"
  },
  {
    "salt": "Fluoxetine",
    "description_hi": "मानसिक तनाव, ईटिंग डिसऑर्डर और प्रीमेंस्ट्रुअल तनाव।",
    "description_en": "SSRI antidepressant used for mood elevation and OCD.",
    "group": "ANTI-DEPRESSANT",
    "brand_examples": "Fludac, Prodep, Nuzac"
  },
  {
    "salt": "Alprazolam",
    "description_hi": "अचानक तेज घबराहट, पैनिक होना और नींद न आने की अल्पकालिक दवा।",
    "description_en": "Short-acting benzodiazepine for anxiety and panic disorders.",
    "group": "ANTI-ANXIETY / ANXIOLYTIC",
    "brand_examples": "Alprax, Restyl, Trika"
  },
  {
    "salt": "Clonazepam",
    "description_hi": "मिर्गी के दौरे (Seizures), बहुत तेज घबराहट और नींद की कमी।",
    "description_en": "Anticonvulsant and powerful anti-anxiety medication.",
    "group": "ANTI-EPILEPTIC / ANXIOLYTIC",
    "brand_examples": "Clonotril, Epitril, Lonazep"
  },
  {
    "salt": "Etizolam",
    "description_hi": "अत्यधिक तनाव, घबराहट और नींद न आने का इलाज।",
    "description_en": "Thienodiazepine for short-term treatment of severe anxiety.",
    "group": "ANXIOLYTIC / SEDATIVE",
    "brand_examples": "Etilaam, Etizola, Etizex"
  },
  {
    "salt": "Etizolam + Propranolol",
    "description_hi": "स्टेज फियर, हाथ कांपना, दिल की धड़कन तेज होना और घबराहट।",
    "description_en": "Controls physical and mental symptoms of performance anxiety.",
    "group": "ANXIOLYTIC + BETA BLOCKER",
    "brand_examples": "Etilaam-Pro, Etizola-Beta, Solopose-Beta"
  },
  {
    "salt": "Zolpidem",
    "description_hi": "अनिद्रा (Insomnia) - रात को नींद न आने की दवा।",
    "description_en": "Non-benzodiazepine hypnotic for short-term sleep initiation.",
    "group": "SEDATIVE / HYPNOTIC",
    "brand_examples": "Nitrest, Stilnoct, Zolfresh"
  },
  {
    "salt": "Melatonin",
    "description_hi": "नेचुरल नींद की साइकिल सुधारना (Jet Lag और अनिद्रा हेतु)।",
    "description_en": "Hormonal supplement to restore natural sleep-wake cycle.",
    "group": "SLEEP AID / SUPPLEMENT",
    "brand_examples": "Meloset, Nite-Rest, Melacon"
  },
  {
    "salt": "Sodium Valproate / Divalproex Sodium",
    "description_hi": "मिर्गी के दौरे (Epilepsy), माइग्रेन और मूड स्विंग्स।",
    "description_en": "Mainstay anticonvulsant for seizures and bipolar disorder.",
    "group": "ANTI-EPILEPTIC",
    "brand_examples": "Encorate, Epival, Valparin"
  },
  {
    "salt": "Levetiracetam",
    "description_hi": "मिर्गी और झटके आने से रोकने की सुरक्षित आधुनिक दवा।",
    "description_en": "Broad-spectrum modern anticonvulsant with fewer side effects.",
    "group": "ANTI-EPILEPTIC",
    "brand_examples": "Levipil, Torleva, Levepsy"
  },
  {
    "salt": "Carbamazepine",
    "description_hi": "मिर्गी के दौरे और ट्राइजेमिनल न्यूराल्जिया (चेहरे का तेज नसों का दर्द)।",
    "description_en": "Anticonvulsant for seizures and nerve pain of the face.",
    "group": "ANTI-EPILEPTIC / NEUROPATHIC",
    "brand_examples": "Tegretol, Mazetol, Zeptol"
  },
  {
    "salt": "Phenytoin Sodium",
    "description_hi": "मिर्गी और झटके (Fits) आने से रोकने की पारम्परिक दवा।",
    "description_en": "Traditional anticonvulsant to prevent tonic-clonic seizures.",
    "group": "ANTI-EPILEPTIC",
    "brand_examples": "Dilantin, Eptoin, Epsolin"
  },
  {
    "salt": "Clobazam",
    "description_hi": "मिर्गी के दौरों में सहायक दवा और तेज घबराहट कम करना।",
    "description_en": "Adjunctive therapy for resistant epilepsy and severe anxiety.",
    "group": "ANTI-EPILEPTIC",
    "brand_examples": "Frisium, Cloba, Frisec"
  },
  {
    "salt": "Haloperidol",
    "description_hi": "अत्यधिक मानसिक असंतुलन, वहम होना (Schizophrenia) और हिंसक व्यवहार।",
    "description_en": "Typical antipsychotic for severe agitation, mania, and psychosis.",
    "group": "ANTIPSYCHOTIC",
    "brand_examples": "Serenace, Haloper, Halidol"
  },
  {
    "salt": "Olanzapine",
    "description_hi": "बाइपोलर डिसऑर्डर, वहम होना, शक करना और बहुत तेज गुस्सा।",
    "description_en": "Atypical antipsychotic for schizophrenia and bipolar mania.",
    "group": "ANTIPSYCHOTIC",
    "brand_examples": "Oleanz, Olan, Olanex"
  },
  {
    "salt": "Quetiapine",
    "description_hi": "मूड में भारी बदलाव, नींद की कमी और मानसिक भ्रम।",
    "description_en": "Atypical antipsychotic used in bipolar, schizophrenia, and depression.",
    "group": "ANTIPSYCHOTIC",
    "brand_examples": "Seroquin, Qutipin, Quel"
  },
  {
    "salt": "Risperidone",
    "description_hi": "चिड़चिड़ापन, बच्चों में ऑटिज्म का व्यवहार और मानसिक बीमारियां।",
    "description_en": "Antipsychotic for schizophrenia, bipolar, and autism irritability.",
    "group": "ANTIPSYCHOTIC",
    "brand_examples": "Respidon, Sizodon, Rispond"
  },
  {
    "salt": "Lithium Carbonate",
    "description_hi": "बाइपोलर डिसऑर्डर में मूड को नियंत्रित (Mood Stabilizer) रखना।",
    "description_en": "Classic mood stabilizer for bipolar affective disorder.",
    "group": "MOOD STABILIZER",
    "brand_examples": "Lithosun, Licarb, Monolith"
  },
  {
    "salt": "Propranolol (10mg / 40mg)",
    "description_hi": "हाथों की कंपकंपी (Tremors), स्टेज का डर, तेज धड़कन और माइग्रेन।",
    "description_en": "Beta-blocker for essential tremors, anxiety pulse, and migraine.",
    "group": "BETA BLOCKER / CARDIO",
    "brand_examples": "Ciplar, Inderal, Betacap"
  },
  {
    "salt": "Atenolol (25mg / 50mg)",
    "description_hi": "हाई ब्लड प्रेशर और दिल की तेज धड़कन (Arrhythmia)।",
    "description_en": "Beta-blocker for hypertension and pulse rate reduction.",
    "group": "CARDIOVASCULAR",
    "brand_examples": "Aten, Tenormin, Betacard"
  },
  {
    "salt": "Metoprolol Succinate (ER)",
    "description_hi": "हार्ट अटैक के बाद बचाव, हाई बीपी और दिल की मजबूती।",
    "description_en": "Extended-release beta-blocker for BP, angina, and heart failure.",
    "group": "CARDIOVASCULAR",
    "brand_examples": "Metolar XR, Seloken, Betaloc"
  },
  {
    "salt": "Metoprolol + Amlodipine",
    "description_hi": "हाई बीपी जिसे अकेली दवा से कंट्रोल करना मुश्किल हो।",
    "description_en": "Dual BP control combining beta-blocker and calcium channel blocker.",
    "group": "CARDIOVASCULAR COMBINATION",
    "brand_examples": "Metolar-AM, Seloken-AM, Starpress-AM"
  },
  {
    "salt": "Metoprolol + Telmisartan",
    "description_hi": "हाई बीपी, डायबिटिक दिल के मरीज और धड़कन कंट्रोल।",
    "description_en": "Advanced dual antihypertensive for comprehensive cardiac care.",
    "group": "CARDIOVASCULAR COMBINATION",
    "brand_examples": "Metolar-TL, Starpress-T, Metosartan"
  },
  {
    "salt": "Bisoprolol",
    "description_hi": "हार्ट फेलियर और हाई ब्लड प्रेशर का सुरक्षित इलाज।",
    "description_en": "Cardioselective beta-blocker for hypertension and heart failure.",
    "group": "CARDIOVASCULAR",
    "brand_examples": "Concor, Corbis, Bisosafe"
  },
  {
    "salt": "Bisoprolol + Hydrochlorothiazide",
    "description_hi": "हाई बीपी कंट्रोल करने हेतु बीटा ब्लॉकर + पेशाब बढ़ाने का कॉम्बिनेशन।",
    "description_en": "Combines selective beta-blocker with a diuretic for hypertension.",
    "group": "CARDIOVASCULAR COMBINATION",
    "brand_examples": "Concor-AM, Corbis-H, Lodoz"
  },
  {
    "salt": "Nebivolol",
    "description_hi": "हाई बीपी कंट्रोल करना बिना थकावट या पुरुषों की कमजोरी के।",
    "description_en": "Modern beta-blocker with vasodilator properties and high safety.",
    "group": "CARDIOVASCULAR",
    "brand_examples": "Nebicard, Nebistar, Nodon"
  },
  {
    "salt": "Cilnidipine",
    "description_hi": "हाई बीपी कंट्रोल करना (पैरों में सूजन की शिकायत के बिना)।",
    "description_en": "Novel calcium channel blocker with lower incidence of pedal edema.",
    "group": "CARDIOVASCULAR",
    "brand_examples": "Cilacar, Cilan T, Niftran"
  },
  {
    "salt": "Cilnidipine + Telmisartan",
    "description_hi": "किडनी और दिल को सुरक्षित रखते हुए हाई बीपी कंट्रोल।",
    "description_en": "Popular combination for hypertension with kidney protection.",
    "group": "CARDIOVASCULAR COMBINATION",
    "brand_examples": "Cilacar-T, Telista-CL, Metosartan-CL"
  },
  {
    "salt": "Olmesartan Medoxomil",
    "description_hi": "हाई बीपी को 24 घंटे लगातार नॉर्मल रखना।",
    "description_en": "Potent long-acting ARB for essential hypertension.",
    "group": "CARDIOVASCULAR",
    "brand_examples": "Olmy, Olmetrack, Olmax"
  },
  {
    "salt": "Olmesartan + Amlodipine",
    "description_hi": "जिद्दी हाई बीपी को कंट्रोल करने की शक्तिशाली दवा।",
    "description_en": "Synergistic therapy for severe or uncontrolled blood pressure.",
    "group": "CARDIOVASCULAR COMBINATION",
    "brand_examples": "Olmy-A, Olmetrack-AM, Triolmesar"
  },
  {
    "salt": "Olmesartan + Hydrochlorothiazide",
    "description_hi": "हाई बीपी और शरीर में जमे अतिरिक्त पानी को निकालना।",
    "description_en": "ARB combined with a diuretic to effectively reduce high BP.",
    "group": "CARDIOVASCULAR COMBINATION",
    "brand_examples": "Olmy-H, Olmetrack-H, Olmax-H"
  },
  {
    "salt": "Losartan Potassium",
    "description_hi": "हाई बीपी और शुगर के मरीजों में किडनी को बचाना।",
    "description_en": "ARB for hypertension with renal protection in diabetic patients.",
    "group": "CARDIOVASCULAR",
    "brand_examples": "Zaart, Repace, Losar"
  },
  {
    "salt": "Losartan + Hydrochlorothiazide",
    "description_hi": "हाई बीपी कंट्रोल करने हेतु वाटर पिल का कॉम्बिनेशन।",
    "description_en": "First-line combination therapy for resistant blood pressure.",
    "group": "CARDIOVASCULAR COMBINATION",
    "brand_examples": "Zaart-H, Repace-H, Losar-H"
  },
  {
    "salt": "Nitroglycerin / Glyceryl Trinitrate",
    "description_hi": "सीने का तेज दर्द (Angina) - जीभ के नीचे रखने वाली इमरजेंसी दवा।",
    "description_en": "Emergency sublingual nitrate for acute chest pain/angina attack.",
    "group": "EMERGENCY CARDIO",
    "brand_examples": "Angiplat, Sorbitrate-G, Nitrolong"
  },
  {
    "salt": "Isosorbide Mononitrate",
    "description_hi": "सीने के दर्द (Angina Attack) को आने से रोकना।",
    "description_en": "Long-acting nitrate for prevention of chest pain (angina).",
    "group": "CARDIOVASCULAR",
    "brand_examples": "Ismo, Monotrate, Imdur"
  },
  {
    "salt": "Nicorandil",
    "description_hi": "हार्ट की नसों में खून का प्रवाह बढ़ाना और सीने के दर्द से बचाना।",
    "description_en": "Potassium channel opener for severe refractory angina.",
    "group": "CARDIOVASCULAR",
    "brand_examples": "Korandil, Nicostar, Nikoran"
  },
  {
    "salt": "Ivabradine",
    "description_hi": "बिना बीपी घटाए दिल की तेज धड़कन को सामान्य करना।",
    "description_en": "Lowers heart rate selectively without lowering blood pressure.",
    "group": "CARDIOVASCULAR",
    "brand_examples": "Ivanode, Bradia, Ivabrad"
  },
  {
    "salt": "Furosemide (Lasix)",
    "description_hi": "शरीर/पैरों की सूजन (Edema) और फेफड़ों में पानी भरना (Water Pill)।",
    "description_en": "Potent loop diuretic for fluid overload, heart failure, and edema.",
    "group": "DIURETIC",
    "brand_examples": "Lasix, Frusemide, Frusenex"
  },
  {
    "salt": "Furosemide + Spironolactone",
    "description_hi": "लिवर सिरोसिस या हार्ट की बीमारी में पेट में पानी भरना (Ascites)।",
    "description_en": "Potassium-sparing combination diuretic for severe edema.",
    "group": "DIURETIC COMBINATION",
    "brand_examples": "Lasilactone, Fruson-S, Spiromide"
  },
  {
    "salt": "Torsemide",
    "description_hi": "हार्ट/किडनी की बीमारी के कारण शरीर और पैरों में जमा पानी निकालना।",
    "description_en": "Long-acting loop diuretic for heart failure and leg swelling.",
    "group": "DIURETIC",
    "brand_examples": "Dytor, Torlev, Torsine"
  },
  {
    "salt": "Torsemide + Spironolactone",
    "description_hi": "पोटेशियम का लेवल बनाए रखते हुए सूजन दूर करने की दवा।",
    "description_en": "Effective dual diuretic to remove excess water and maintain potassium.",
    "group": "DIURETIC COMBINATION",
    "brand_examples": "Dytor-Plus, Torlactone, Dytor-S"
  },
  {
    "salt": "Spironolactone",
    "description_hi": "हार्ट फेलियर, हाई बीपी, और महिलाओं में चेहरे के बाल/PCOS।",
    "description_en": "Potassium-sparing diuretic and anti-androgen for PCOS and edema.",
    "group": "DIURETIC / HORMONAL",
    "brand_examples": "Aldactone, Lactone, Spirocard"
  },
  {
    "salt": "Chlorthalidone",
    "description_hi": "लंबे समय तक असर करने वाली बीपी कम करने की वाटर पिल।",
    "description_en": "Long-acting thiazide-like diuretic for hypertension.",
    "group": "DIURETIC",
    "brand_examples": "Chlorthal, CTD, Thalitone"
  },
  {
    "salt": "Fenofibrate",
    "description_hi": "खून में ट्राइग्लीसराइड्स (Triglycerides/Fat) को कम करना।",
    "description_en": "Fibrate derivative for reducing high blood triglycerides.",
    "group": "CHOLESTEROL LOWERING",
    "brand_examples": "Lipicard, Fenolip, TriCor"
  },
  {
    "salt": "Atorvastatin + Fenofibrate",
    "description_hi": "हाई कोलेस्ट्रॉल और ट्राइग्लीसराइड्स दोनों को एक साथ कम करना।",
    "description_en": "Combined therapy for mixed dyslipidemia (High cholesterol + TG).",
    "group": "CHOLESTEROL LOWERING",
    "brand_examples": "Atorva-F, Lipikind-F, Tonact-TG"
  },
  {
    "salt": "Rosuvastatin + Fenofibrate",
    "description_hi": "गंभीर हाई कोलेस्ट्रॉल और ट्राइग्लीसराइड्स का इलाज।",
    "description_en": "Potent dual lipid-lowering combination for high cardiac risk.",
    "group": "CHOLESTEROL LOWERING",
    "brand_examples": "Rosuvas-F, Rozucor-F, Rosulip-F"
  },
  {
    "salt": "Ezetimibe + Atorvastatin",
    "description_hi": "आंतों में कोलेस्ट्रॉल का अवशोषण रोकना और लिवर में बनने से रोकना।",
    "description_en": "Dual-mechanism therapy for tough-to-lower cholesterol levels.",
    "group": "CHOLESTEROL LOWERING",
    "brand_examples": "Atorva-E, Lipicure-EZ, Ezactor"
  },
  {
    "salt": "Acenocoumarol",
    "description_hi": "हार्ट वाल्व बदलने के बाद या नसों में खून जमने (DVT) पर खून पतला रखना।",
    "description_en": "Oral anticoagulant for DVT prevention and mechanical heart valves.",
    "group": "ANTICOAGULANT (BLOOD THINNER)",
    "brand_examples": "Acitrom, Syncom, Thrombostat"
  },
  {
    "salt": "Warfarin Sodium",
    "description_hi": "खून का थक्का जमने से रोकना (Blood Thinner)।",
    "description_en": "Traditional oral anticoagulant requiring regular INR monitoring.",
    "group": "ANTICOAGULANT",
    "brand_examples": "Warf, Coumadin, Uniwarfin"
  },
  {
    "salt": "Rivaroxaban",
    "description_hi": "बिना बार-बार ब्लड टेस्ट कराए खून पतला रखने की आधुनिक दवा।",
    "description_en": "Novel Oral Anticoagulant (NOAC) for stroke & DVT prevention.",
    "group": "ANTICOAGULANT (NOAC)",
    "brand_examples": "Xarelto, Ixarola, Roxa"
  },
  {
    "salt": "Apixaban",
    "description_hi": "स्ट्रोक से बचाव और नसों में थक्का बनने (Blood Clotting) को रोकना।",
    "description_en": "Advanced blood thinner with low risk of major bleeding.",
    "group": "ANTICOAGULANT (NOAC)",
    "brand_examples": "Eliquis, Apigat, Apixar"
  },
  {
    "salt": "Prasugrel",
    "description_hi": "हार्ट में स्टेंट (Stent) डलने के बाद नसों को ब्लॉक होने से बचाना।",
    "description_en": "Potent antiplatelet drug for patients undergoing angioplasty.",
    "group": "ANTI-PLATELET",
    "brand_examples": "Prasita, Effient, Prax"
  },
  {
    "salt": "Ticagrelor",
    "description_hi": "हार्ट अटैक के बाद नसों में दोबारा थक्का बनने से रोकना।",
    "description_en": "Reversible antiplatelet agent for acute coronary syndrome.",
    "group": "ANTI-PLATELET",
    "brand_examples": "Brilinta, Axcer, Ticaflo"
  },
  {
    "salt": "Glimepiride (1mg / 2mg / 3mg)",
    "description_hi": "पैनक्रियाज से इंसुलिन बनाकर टाइप-2 शुगर कम करना।",
    "description_en": "Sulfonylurea to stimulate insulin secretion in Type-2 Diabetes.",
    "group": "ANTI-DIABETIC",
    "brand_examples": "Amaryl, Glimestar, GP"
  },
  {
    "salt": "Gliclazide",
    "description_hi": "ब्लड शुगर कंट्रोल करना और आंखों/किडनी को डायबिटीज के असर से बचाना।",
    "description_en": "Sulfonylurea for glycemic control with low cardiovascular risk.",
    "group": "ANTI-DIABETIC",
    "brand_examples": "Diamicron, Glycinorm, Reclide"
  },
  {
    "salt": "Gliclazide + Metformin",
    "description_hi": "टाइप-2 शुगर कंट्रोल करने की लंबे समय से इस्तेमाल की जाने वाली दवा।",
    "description_en": "Popular dual combination for controlling Type-2 Diabetes.",
    "group": "ANTI-DIABETIC COMBINATION",
    "brand_examples": "Glycinorm-M, Diamicron-XR Mex, Reclide-MR Met"
  },
  {
    "salt": "Pioglitazone",
    "description_hi": "शरीर की कोशिकाओं में इंसुलिन की संवेदनशीलता (Insulin Sensitivity) बढ़ाना।",
    "description_en": "Thiazolidinedione that improves systemic insulin sensitivity.",
    "group": "ANTI-DIABETIC",
    "brand_examples": "Pioz, Pioglit, Pionorm"
  },
  {
    "salt": "Glimepiride + Metformin + Pioglitazone",
    "description_hi": "गंभीर और पुरानी डायबिटीज के लिए ट्रिपल कॉम्बिनेशन।",
    "description_en": "Triple combination therapy for resistant Type-2 Diabetes.",
    "group": "ANTI-DIABETIC COMBINATION",
    "brand_examples": "Glycomet-Trio, Amaryl-M3, Glimestar-PM"
  },
  {
    "salt": "Sitagliptin",
    "description_hi": "बिना वजन बढ़ाए या बिना अचानक शुगर लो किए शुगर कंट्रोल।",
    "description_en": "DPP-4 inhibitor for weight-neutral blood sugar control.",
    "group": "ANTI-DIABETIC",
    "brand_examples": "Januvia, Istavel, Sita"
  },
  {
    "salt": "Sitagliptin + Metformin",
    "description_hi": "खाने के बाद और खाली पेट की शुगर का संतुलित कॉम्बिनेशन।",
    "description_en": "Combines DPP-4 inhibitor with metformin for effective control.",
    "group": "ANTI-DIABETIC COMBINATION",
    "brand_examples": "Janumet, Istamet, Sita-M"
  },
  {
    "salt": "Empagliflozin",
    "description_hi": "पेशाब से अतिरिक्त शुगर बाहर निकालना और हार्ट फेलियर से बचाना।",
    "description_en": "SGLT2 inhibitor for blood sugar control and cardiovascular safety.",
    "group": "ANTI-DIABETIC",
    "brand_examples": "Jardiance, Empaglyn, Gibtulio"
  },
  {
    "salt": "Empagliflozin + Metformin",
    "description_hi": "डायबिटीज के साथ वजन और ब्लड प्रेशर कंट्रोल में मदद।",
    "description_en": "SGLT2 inhibitor and metformin combination for dual management.",
    "group": "ANTI-DIABETIC COMBINATION",
    "brand_examples": "Jardiance-Met, Empaglyn-M, Gibtulio-Met"
  },
  {
    "salt": "Empagliflozin + Linagliptin",
    "description_hi": "शुगर कम करने की एडवांस बिना-इंसुलिन वाली दोहरी दवा।",
    "description_en": "Synergistic dual action targeting multiple mechanisms of diabetes.",
    "group": "ANTI-DIABETIC COMBINATION",
    "brand_examples": "Glyxambi, Ajaduo"
  },
  {
    "salt": "Voglibose (0.2mg / 0.3mg)",
    "description_hi": "खाना खाने के तुरंत बाद अचानक बढ़ने वाली शुगर (Post-Prandial) रोकना।",
    "description_en": "Alpha-glucosidase inhibitor to prevent post-meal glucose spikes.",
    "group": "ANTI-DIABETIC",
    "brand_examples": "Vobose, Volibo, PPG"
  },
  {
    "salt": "Metformin + Voglibose",
    "description_hi": "खाली पेट और खाने के बाद की शुगर का दोहरा नियंत्रण।",
    "description_en": "Controls both fasting and post-meal blood glucose levels.",
    "group": "ANTI-DIABETIC COMBINATION",
    "brand_examples": "Glycomet-V, Volibo-M, PPG-Met"
  },
  {
    "salt": "Glimepiride + Metformin + Voglibose",
    "description_hi": "तीनों मुख्य तरीकों से डायबिटीज कंट्रोल करने की ट्रिपल दवा।",
    "description_en": "Popular triple drug regimen for comprehensive Type-2 diabetes control.",
    "group": "ANTI-DIABETIC COMBINATION",
    "brand_examples": "Glycomet-Trio V, Amaryl-MV, Glimestar-V"
  },
  {
    "salt": "Insulin Glargine (Long-Acting)",
    "description_hi": "24 घंटे लगातार ब्लड शुगर कंट्रोल रखने वाला इंसुलिन इंजेक्शन।",
    "description_en": "Basal long-acting insulin analog providing 24-hour coverage.",
    "group": "INSULIN",
    "brand_examples": "Lantus, Basaglar, Toujeo"
  },
  {
    "salt": "Insulin Human (Soluble / Rapid)",
    "description_hi": "खाना खाने से पहले तुरंत शुगर कंट्रोल करने का इंसुलिन।",
    "description_en": "Short-acting insulin for mealtime blood sugar management.",
    "group": "INSULIN",
    "brand_examples": "Actrapid, Huminsulin R, Insuman"
  },
  {
    "salt": "Biphasic Isophane Insulin (Premix 30/70)",
    "description_hi": "फास्ट और लॉन्ग-एक्टिंग इंसुलिन का कॉम्बिनेशन (दिन में 2 बार)।",
    "description_en": "Premixed insulin combination for twice-daily administration.",
    "group": "INSULIN",
    "brand_examples": "Mixtard 30/70, Huminsulin 30/70, Wosulin 30/70"
  },
  {
    "salt": "Insulin Aspart (Ultra-Fast)",
    "description_hi": "खाना खाते ही तुरंत काम शुरू करने वाला आधुनिक इंसुलिन।",
    "description_en": "Rapid-acting insulin analog for mealtime glucose control.",
    "group": "INSULIN",
    "brand_examples": "NovoMix, NovoRapid, Fiasp"
  },
  {
    "salt": "Semaglutide (Oral / Injection)",
    "description_hi": "डायबिटीज कंट्रोल और तेजी से वजन घटाने (Weight Loss) की क्रांति।",
    "description_en": "GLP-1 receptor agonist for diabetes and significant weight loss.",
    "group": "ANTI-DIABETIC / WEIGHT LOSS",
    "brand_examples": "Rybelsus, Ozempic, Wegovy"
  },
  {
    "salt": "Allopurinol",
    "description_hi": "यूरिक एसिड कम करना और गाउट (Gout) जोड़ों के दर्द से बचाना।",
    "description_en": "Xanthine oxidase inhibitor to reduce blood uric acid levels.",
    "group": "ANTI-GOUT",
    "brand_examples": "Zyloric, Zyrik, Alloric"
  },
  {
    "salt": "Febuxostat",
    "description_hi": "हाई यूरिक एसिड और पैरों के अंगूठे का तेज दर्द (Gout)।",
    "description_en": "Modern xanthine oxidase inhibitor for managing chronic gout.",
    "group": "ANTI-GOUT",
    "brand_examples": "Feburic, Febustat, Zurig"
  },
  {
    "salt": "Colchicine",
    "description_hi": "गाउट (Gout Attack) का अचानक शुरू हुआ असहनीय दर्द तुरंत रोकना।",
    "description_en": "Provides fast relief during acute painful gout flare-ups.",
    "group": "ANTI-GOUT",
    "brand_examples": "Zycolchin, Colchipan, Goutnil"
  },
  {
    "salt": "Alendronate Sodium",
    "description_hi": "हड्डियां खोखली होना (Osteoporosis) और फ्रैक्चर से बचाव।",
    "description_en": "Bisphosphonate taken weekly to build bone density.",
    "group": "BONE HEALTH / OSTEOPOROSIS",
    "brand_examples": "Osteofos, Alendros, Fosamax"
  },
  {
    "salt": "Zoledronic Acid (IV Infusion)",
    "description_hi": "साल में एक बार ड्रिप द्वारा हड्डियों को अत्यधिक मजबूत बनाना।",
    "description_en": "Once-yearly IV bisphosphonate for severe osteoporosis.",
    "group": "BONE HEALTH",
    "brand_examples": "Zoledro, Aclasta, Blazere"
  },
  {
    "salt": "Calcium Citrate + Vitamin D3 + Magnesium + Zinc",
    "description_hi": "बिना एसिडिटी बनाए हड्डियों के लिए सबसे सुपाच्य कैल्शियम।",
    "description_en": "Highly absorbable calcium formulation gentle on the stomach.",
    "group": "MINERAL SUPPLEMENT",
    "brand_examples": "Calcimax, Supracal, Citracal"
  },
  {
    "salt": "Calcitriol + Calcium Carbonate + Vitamin K2-7",
    "description_hi": "कैल्शियम को सीधे हड्डियों तक पहुंचाना और नसों में जमने से रोकना।",
    "description_en": "Advanced bone formula directing calcium straight to the bones.",
    "group": "BONE HEALTH",
    "brand_examples": "Gemcal-DS, Shelcal-KT, Calcinol-CZ"
  },
  {
    "salt": "Glucosamine Sulfate + Chondroitin",
    "description_hi": "घुटनों का घिसना (Osteoarthritis) और ग्रीस/कार्टिलेज की मरम्मत।",
    "description_en": "Joint cartilage repair and mobility supplement for knee arthritis.",
    "group": "JOINT CARE",
    "brand_examples": "Jointace, Cartigen, Kondro"
  },
  {
    "salt": "Collagen Peptide + Sodium Hyaluronate + Vitamin C",
    "description_hi": "घुटनों के दर्द, ग्रीस खत्म होने और लचक के लिए ड्रिंक/पाउडर।",
    "description_en": "Sachets for joint lubrication, cartilage rebirth, and knee pain.",
    "group": "JOINT CARE",
    "brand_examples": "Cartilamine, Collaflex, Rosehip-C"
  },
  {
    "salt": "Diacerein + Glucosamine",
    "description_hi": "घुटनों की सूजन घटाना और जोड़ों के घिसने की गति धीमी करना।",
    "description_en": "Slow-acting drug for osteoarthritis to protect joint structure.",
    "group": "JOINT CARE / NSAID ALTERNATIVE",
    "brand_examples": "Cartilamine-D, Dycerin-G, Osil-D"
  },
  {
    "salt": "Trypsin + Chymotrypsin",
    "description_hi": "चोट, सूजन, ऑपरेशन के घाव और नीले निशान (Bruises) तेजी से भरना।",
    "description_en": "Enzymatic anti-inflammatory to speed healing of wounds & swelling.",
    "group": "ANTI-INFLAMMATORY ENZYME",
    "brand_examples": "Chymoral Forte, Chymowok, Enzomac"
  },
  {
    "salt": "Trypsin + Bromelain + Rutoside + Diclofenac",
    "description_hi": "सर्जरी या एक्सीडेंट की भारी सूजन और दर्द का तेजी से इलाज।",
    "description_en": "Powerful enzymatic painkiller blend for severe post-traumatic edema.",
    "group": "ANTI-INFLAMMATORY ENZYME",
    "brand_examples": "Enzomac Plus, Inflachem, Chymoral-D"
  },
  {
    "salt": "Serratiopeptidase",
    "description_hi": "सूजन पघलाना, थक्के साफ करना और दर्द में राहत।",
    "description_en": "Proteolytic enzyme that reduces tissue swelling and fluid buildup.",
    "group": "ANTI-INFLAMMATORY ENZYME",
    "brand_examples": "Bifilac, Serrapep, Seroace"
  },
  {
    "salt": "Tamsulosin Hydrochloride (0.4mg)",
    "description_hi": "गदूद (Prostate/BPH) बढ़ना और पेशाब में रुकावट/बार-बार जाना।",
    "description_en": "Alpha-blocker to relax prostate muscles for smooth urination.",
    "group": "UROLOGY / BPH",
    "brand_examples": "Urimax, Veltam, Contiflo"
  },
  {
    "salt": "Tamsulosin + Dutasteride",
    "description_hi": "बढ़े हुए गदूद (Prostate) का आकार छोटा करना और पेशाब खोलना।",
    "description_en": "Combination that relaxes prostate muscles and shrinks gland size.",
    "group": "UROLOGY / BPH",
    "brand_examples": "Urimax-D, Veltam-Plus, Urilosa-D"
  },
  {
    "salt": "Silodosin",
    "description_hi": "प्रोस्टेट (Prostate) की वजह से पेशाब रुकने का सबसे तेज इलाज।",
    "description_en": "Highly selective alpha-blocker for Benign Prostatic Hyperplasia.",
    "group": "UROLOGY / BPH",
    "brand_examples": "Silodal, Rapilif, Silofast"
  },
  {
    "salt": "Silodosin + Dutasteride",
    "description_hi": "गंभीर प्रोस्टेट समस्या और रात में बार-बार पेशाब आने का इलाज।",
    "description_en": "Advanced therapy for severe BPH symptoms and enlarged prostate.",
    "group": "UROLOGY / BPH",
    "brand_examples": "Silodal-D, Rapilif-D, Silofast-D"
  },
  {
    "salt": "Finasteride (1mg / 5mg)",
    "description_hi": "1mg: बाल झड़ना रोकना (Hair Loss); 5mg: प्रोस्टेट छोटा करना।",
    "description_en": "5-alpha reductase inhibitor for male pattern baldness & BPH.",
    "group": "UROLOGY / HAIR CARE",
    "brand_examples": "Finast, Finax, Proscar"
  },
  {
    "salt": "Alfuzosin Hydrochloride",
    "description_hi": "प्रोस्टेट ग्रंथि की सूजन से पेशाब का अटकना।",
    "description_en": "Alpha-1 blocker used to treat enlarged prostate symptoms.",
    "group": "UROLOGY",
    "brand_examples": "Alfusin, Xatral, Zosta"
  },
  {
    "salt": "Solifenacin Succinate",
    "description_hi": "पेशाब न रोक पाना, बार-बार टॉयलेट भागना (Overactive Bladder)।",
    "description_en": "Anticholinergic drug for Overactive Bladder (OAB) and urgency.",
    "group": "UROLOGY",
    "brand_examples": "Solicept, Bispec, Soliact"
  },
  {
    "salt": "Mirabegron",
    "description_hi": "बिना मुंह सुखाए पेशाब की अवांछित इच्छा (Urgency) को रोकना।",
    "description_en": "Beta-3 adrenergic agonist for Overactive Bladder management.",
    "group": "UROLOGY",
    "brand_examples": "Mirago, Lupigron, Bladapress"
  },
  {
    "salt": "Flavoxate Hydrochloride",
    "description_hi": "पेशाब की नली में ऐंठन, मरोड़, जलन और पेट के निचले हिस्से का दर्द।",
    "description_en": "Antispasmodic for urinary tract pain and bladder cramps.",
    "group": "UROLOGY / ANTISPASMODIC",
    "brand_examples": "Urispas, Flavocip, Utispas"
  },
  {
    "salt": "Sildenafil Citrate (50mg / 100mg)",
    "description_hi": "नपुंसकता / लिंग में तनाव की कमी (Erectile Dysfunction)।",
    "description_en": "PDE5 inhibitor for Erectile Dysfunction and Pulmonary Hypertension.",
    "group": "SEXUAL HEALTH / UROLOGY",
    "brand_examples": "Viagra, Penegra, Caverta"
  },
  {
    "salt": "Tadalafil (5mg / 20mg)",
    "description_hi": "36 घंटे तक असरदार तनाव की गोली और गदूद का इलाज (5mg Daily)।",
    "description_en": "Long-acting PDE5 inhibitor for ED and daily BPH symptom relief.",
    "group": "SEXUAL HEALTH / UROLOGY",
    "brand_examples": "Cialis, Megalis, Tadacip"
  },
  {
    "salt": "Dapoxetine",
    "description_hi": "शीघ्रपतन (Premature Ejaculation) की समस्या दूर करना।",
    "description_en": "Short-acting SSRI specifically designed for premature ejaculation.",
    "group": "SEXUAL HEALTH",
    "brand_examples": "Sustinex, Duratia, Poxet"
  },
  {
    "salt": "Sildenafil + Dapoxetine",
    "description_hi": "इरेक्टाइल डिस्फंक्शन और शीघ्रपतन का एक साथ इलाज।",
    "description_en": "Combined solution for hardness and climax control.",
    "group": "SEXUAL HEALTH",
    "brand_examples": "Super P-Force, Penegra-X, Manforce Staylong"
  },
  {
    "salt": "Ursodeoxycholic Acid (UDCA - 150mg / 300mg)",
    "description_hi": "फैटी लिवर (Fatty Liver), पित्त की पथरी गलाना और पीलिया (Jaundice)।",
    "description_en": "Dissolves gallstones and treats fatty liver/cholestatic jaundice.",
    "group": "HEPATOLOGY / LIVER CARE",
    "brand_examples": "Udiliv, Ursocol, Urso"
  },
  {
    "salt": "L-Ornithine L-Aspartate (LOLA)",
    "description_hi": "लिवर की गंभीर बीमारी, हेपेटाइटिस और अमोनिया लेवल घटाना।",
    "description_en": "Protects liver cells and treats hepatic encephalopathy.",
    "group": "LIVER CARE",
    "brand_examples": "Hepa-Merz, Analiv, Lornit"
  },
  {
    "salt": "Silymarin (Milk Thistle) + Vitamin B-Complex",
    "description_hi": "शराब या दवाओं से डैमेज हुए लिवर का प्राकृतिक बचाव व सुधार।",
    "description_en": "Antioxidant complex to rejuvenate damaged liver tissue.",
    "group": "LIVER CARE / SUPPLEMENT",
    "brand_examples": "Silybon, Hepagard, Silybin"
  },
  {
    "salt": "Metadoxine",
    "description_hi": "फैटी लिवर और अल्कोहल से लिवर में आई सूजन का इलाज।",
    "description_en": "Accelerates alcohol clearance and treats alcoholic fatty liver.",
    "group": "LIVER CARE",
    "brand_examples": "Metadoxil, Viboliv, Alcodox"
  },
  {
    "salt": "L-Carnitine + Coenzyme Q10 + Zinc",
    "description_hi": "पुरुषों में स्पर्म काउंट (Sperm Count) और मोबिलिटी बढ़ाना।",
    "description_en": "Antioxidant blend to enhance male fertility and sperm parameters.",
    "group": "INFERTILITY / SUPPLEMENT",
    "brand_examples": "CoQ, Oligocare, Carnisure"
  },
  {
    "salt": "Clomiphene Citrate",
    "description_hi": "महिलाओं में अंडे (Ovulation) न बनने की समस्या और बांझपन का इलाज।",
    "description_en": "Ovulation stimulant for female infertility management.",
    "group": "GYNECOLOGY / INFERTILITY",
    "brand_examples": "Clofert, Fertomid, Ovipreg"
  },
  {
    "salt": "Letrozole",
    "description_hi": "ब्रेस्ट कैंसर और महिलाओं में अंडा बनाने (Ovulation Induction) की दवा।",
    "description_en": "Aromatase inhibitor used in breast cancer and ovulation induction.",
    "group": "ONCOLOGY / GYNECOLOGY",
    "brand_examples": "Femara, Letronis, Stimulet"
  },
  {
    "salt": "Myo-Inositol + D-Chiro-Inositol + Folic Acid",
    "description_hi": "PCOS / PCOD की वजह से पीरियड्स की अनियमितता और वजन बढ़ना।",
    "description_en": "First-line therapy to restore hormonal balance in PCOS.",
    "group": "GYNECOLOGY / PCOS",
    "brand_examples": "Ovasitol, Follihair, Ovral-L"
  },
  {
    "salt": "Natural Micronized Progesterone (200mg / 300mg)",
    "description_hi": "प्रेग्नेंसी को सुरक्षित रखना (Miscarriage Prevention) और पीरियड्स लाना।",
    "description_en": "Hormone support to sustain pregnancy and regulate cycles.",
    "group": "GYNECOLOGY / HORMONAL",
    "brand_examples": "Susten, Gestone, Naturogest"
  },
  {
    "salt": "Dydrogesterone",
    "description_hi": "गर्भपात का खतरा रोकना, एंडोमेट्रियोसिस और अनियमित पीरियड्स।",
    "description_en": "Synthetic progesterone with high safety for pregnancy retention.",
    "group": "GYNECOLOGY / HORMONAL",
    "brand_examples": "Duphaston, Dydrofem, Dydroboon"
  },
  {
    "salt": "Cabergoline",
    "description_hi": "स्तनों में अनावश्यक दूध बनना (Prolactin Level) कम करना।",
    "description_en": "Dopamine agonist to lower high prolactin hormone levels.",
    "group": "GYNECOLOGY / HORMONAL",
    "brand_examples": "Caberlin, Dostinex, Cabgolin"
  },
  {
    "salt": "Combined Oral Contraceptive (Ethinylestradiol + Levonorgestrel)",
    "description_hi": "अनचाहे गर्भ से बचाव (21 दिन की नियमित गोली) और चक्र सुधार।",
    "description_en": "Standard 21-day birth control pill for pregnancy prevention.",
    "group": "CONTRACEPTIVE",
    "brand_examples": "Mala-D, Ovral-G, Unwanted-21"
  },
  {
    "salt": "Ethinylestradiol + Drospirenone",
    "description_hi": "गर्भनिरोधक गोली जिससे मुहांसे और वजन न बढ़े।",
    "description_en": "Modern contraceptive pill that reduces acne and water retention.",
    "group": "CONTRACEPTIVE",
    "brand_examples": "Yaz, Yasmin, Drosun"
  },
  {
    "salt": "Isoxsuprine Hydrochloride",
    "description_hi": "प्रेग्नेंसी में समय से पहले दर्द (Premature Labor) और गर्भपात रोकना।",
    "description_en": "Uterine relaxant to prevent premature labor pains and miscarriage.",
    "group": "GYNECOLOGY / PREGNANCY CARE",
    "brand_examples": "Duvadilan, Tidilan, Isoxsure"
  },
  {
    "salt": "Mifepristone",
    "description_hi": "डॉक्टर की देखरेख में शुरुआती अवांछित गर्भसमापन (Medical Abortion)।",
    "description_en": "Progesterone receptor antagonist used for medical termination.",
    "group": "GYNECOLOGY (RESTRICTED)",
    "brand_examples": "MTP Pill, Mifegest, Termipil"
  },
  {
    "salt": "Misoprostol",
    "description_hi": "बच्चेदानी की सफाई और पेट के अल्सर से बचाव।",
    "description_en": "Prostaglandin analog for uterine contraction and ulcer protection.",
    "group": "GYNECOLOGY (RESTRICTED)",
    "brand_examples": "Cytolog, Misoprost, Isovent"
  },
  {
    "salt": "Mifepristone + Misoprostol (Kit)",
    "description_hi": "अवांछित प्रेगनेंसी खत्म करने की कम्प्लीट किट (केवल पर्चे पर)।",
    "description_en": "Complete medical abortion kit under strict medical guidance.",
    "group": "GYNECOLOGY (RESTRICTED)",
    "brand_examples": "MTP Kit, Unwanted Kit, Khushi Kit"
  },
  {
    "salt": "Methotrexate",
    "description_hi": "गंभीर गठिया (Rheumatoid Arthritis), सोरायसिस और कैंसर दवा।",
    "description_en": "Immunosuppressant DMARD for severe arthritis and psoriasis.",
    "group": "IMMUNOSUPPRESSANT / DMARD",
    "brand_examples": "Folitrax, Imutrex, Mexate"
  },
  {
    "salt": "Leflunomide",
    "description_hi": "गठिया (Rheumatoid Arthritis) में जोड़ों का विनाश रोकना।",
    "description_en": "DMARD to reduce joint damage and systemic inflammation.",
    "group": "IMMUNOSUPPRESSANT / DMARD",
    "brand_examples": "Lefno, Arava, Ccategory"
  },
  {
    "salt": "Sulfasalazine",
    "description_hi": "आंतों की सूजन (Ulcerative Colitis) और जोड़ों का गठिया।",
    "description_en": "Used in Inflammatory Bowel Disease and Rheumatoid Arthritis.",
    "group": "GASTROENTEROLOGY / DMARD",
    "brand_examples": "Saaz, Salazopyrin, SSZ"
  },
  {
    "salt": "Mesalamine / 5-ASA",
    "description_hi": "अल्सरेटिव कोलाइटिस (Ulcerative Colitis) में आंतों के छाले सुखाना।",
    "description_en": "Mainstay anti-inflammatory treatment for Ulcerative Colitis.",
    "group": "GASTROENTEROLOGY",
    "brand_examples": "Mesacol, Pentasa, Asacol"
  },
  {
    "salt": "Azathioprine",
    "description_hi": "अंग प्रत्यारोपण (Organ Transplant) और ऑटोइम्यून बीमारियों का इलाज।",
    "description_en": "Immunosuppressant for organ transplant and autoimmune diseases.",
    "group": "IMMUNOSUPPRESSANT",
    "brand_examples": "Azoran, Imuran, Azapress"
  },
  {
    "salt": "Cyclosporine",
    "description_hi": "अंग रिजेक्शन रोकना, गंभीर सोरायसिस और ड्राई आई (Eye Drops)।",
    "description_en": "Potent immunosuppressive agent for transplants and dry eye.",
    "group": "IMMUNOSUPPRESSANT",
    "brand_examples": "Cyclophil, Restasis, Panimun"
  },
  {
    "salt": "Tacrolimus (Topical / Oral)",
    "description_hi": "त्वचा का एग्जिमा, सफेद दाग (Vitiligo) और ऑर्गन ट्रांसप्लांट।",
    "description_en": "Calcineurin inhibitor ointment for eczema and vitiligo.",
    "group": "DERMATOLOGY / IMMUNOSUPPRESSANT",
    "brand_examples": "Tacroz, Protopic, Pangraf"
  },
  {
    "salt": "Isotretinoin (10mg / 20mg)",
    "description_hi": "चेहरे के गंभीर पस वाले गड्ढेदार कील-मुंहासे (Severe Acne)।",
    "description_en": "Oral retinoid for treatment-resistant cystic acne.",
    "group": "DERMATOLOGY / ANTI-ACNE",
    "brand_examples": "Isotroin, Sotret, Accutane"
  },
  {
    "salt": "Benzoyl Peroxide Gel (2.5% / 5%)",
    "description_hi": "पिंपल्स/मुंहासे के बैक्टीरिया मारना और चेहरा साफ करना।",
    "description_en": "Topical antibacterial gel for active acne pimples.",
    "group": "DERMATOLOGY / ANTI-ACNE",
    "brand_examples": "Persol, Brevoxyl, Galderma BPO"
  },
  {
    "salt": "Clindamycin + Nicotinamide (Gel)",
    "description_hi": "लाल मुहासे, सूजन और पिंपल्स के दाग धब्बे।",
    "description_en": "Topical antibiotic with anti-inflammatory Vitamin B3 for acne.",
    "group": "DERMATOLOGY / ANTI-ACNE",
    "brand_examples": "Clinka-N, Nioclean, Erytop-N"
  },
  {
    "salt": "Clindamycin + Adapalene (Gel)",
    "description_hi": "काले-सफेद हेड्स (Blackheads/Whiteheads) और पिंपल्स का जेल।",
    "description_en": "Combines retinoid with antibiotic for comprehensive acne gel.",
    "group": "DERMATOLOGY / ANTI-ACNE",
    "brand_examples": "Deriva-CMS, Clin-Adapalene, Acnesol-A"
  },
  {
    "salt": "Salicylic Acid + Glycolic Acid (Face Wash/Gel)",
    "description_hi": "ऑयली स्किन, बंद रोमकूप (Pores) और डेड स्किन हटाना।",
    "description_en": "Exfoliating wash for oily skin, clogged pores, and glow.",
    "group": "DERMATOLOGY / SKINCARE",
    "brand_examples": "Ahaglow, Saslic-DS, Glyco-6"
  },
  {
    "salt": "Azelaic Acid (10% / 20%)",
    "description_hi": "मुंहासे के काले दाग, झाइयां (Hyperpigmentation) और रोसासिया।",
    "description_en": "Topical cream for acne marks, melasma, and skin brightening.",
    "group": "DERMATOLOGY",
    "brand_examples": "Aziderm, Picspot, Ezanic"
  },
  {
    "salt": "Kojic Acid + Vitamin C + Arbutin",
    "description_hi": "त्वचा की रंगत निखारना और काले धब्बे (Dark Spots) हटाना।",
    "description_en": "Skin lightening cream for hyperpigmentation and spots.",
    "group": "DERMATOLOGY / COSMETIC",
    "brand_examples": "Kojivit, Kozimax, Demelan"
  },
  {
    "salt": "Eberconazole / Amorolfine (Cream/Nail Lacquer)",
    "description_hi": "नाखूनों का फंगस (Nail Fungus) और जिद्दी त्वचा का दाद।",
    "description_en": "Advanced topical antifungal for skin and brittle nail fungus.",
    "group": "DERMATOLOGY / ANTI-FUNGAL",
    "brand_examples": "Ebernet, Loceryl, Amorolfine"
  },
  {
    "salt": "Ciclopirox Olamine",
    "description_hi": "दाद-खाज और छाती पर सफेद/भूरे पसीने वाले धब्बे (Tinea Versicolor)।",
    "description_en": "Broad-spectrum antifungal cream & shampoo for skin rash.",
    "group": "DERMATOLOGY / ANTI-FUNGAL",
    "brand_examples": "Sebiprox, Olamin, Ciclopirox"
  },
  {
    "salt": "Tacrolimus + Clobetasol",
    "description_hi": "सफेद दाग (Vitiligo) पर दोबारा रंगत वापस लाने का जेल।",
    "description_en": "Combines steroid with immunomodulator for vitiligo patches.",
    "group": "DERMATOLOGY",
    "brand_examples": "Tacroz-C, Clobet-T"
  },
  {
    "salt": "Halobetasol Propionate",
    "description_hi": "त्वचा की अत्यधिक जिद्दी सूजन, रेडनेस और सोरायसिस।",
    "description_en": "Ultra-high potency topical corticosteroid for plaque psoriasis.",
    "group": "DERMATOLOGY / STEROID",
    "brand_examples": "Halovate, Halox, Ultravex"
  },
  {
    "salt": "Halobetasol + Salicylic Acid",
    "description_hi": "सोरायसिस की मोटी सूखी पपड़ी (Plaques) उतारना और आराम।",
    "description_en": "Removes thick hyperkeratotic scales in skin psoriasis.",
    "group": "DERMATOLOGY",
    "brand_examples": "Halovate-S, Halox-S, Habicor-S"
  },
  {
    "salt": "Mometasone Furoate",
    "description_hi": "बच्चों और बड़ों में त्वचा की एलर्जी, खुजली और दाने।",
    "description_en": "Medium-potency safe topical steroid for allergic dermatitis.",
    "group": "DERMATOLOGY / STEROID",
    "brand_examples": "Elocon, Momate, Metosalic"
  },
  {
    "salt": "Fluticasone Propionate (Cream)",
    "description_hi": "एटोपिक डर्मेटाइटिस, त्वचा की तेज जलन और खुजली।",
    "description_en": "Topical corticosteroid for inflammatory skin conditions.",
    "group": "DERMATOLOGY",
    "brand_examples": "Flutivate, Flutoson"
  },
  {
    "salt": "Minoxidil + Finasteride (Topical Solution)",
    "description_hi": "पुरुषों में बाल झड़ने से रोकना और नए बाल उगाने का बेस्ट स्प्रे।",
    "description_en": "Gold standard combination spray for androgenetic alopecia.",
    "group": "HAIR CARE / ALOPECIA",
    "brand_examples": "Tugain-F, Morr-F, Mintop-Pro"
  },
  {
    "salt": "Procapil + Redensyl + Anagain (Hair Serum)",
    "description_hi": "बिना साइड इफेक्ट के कमजोर बालों की जड़ों को मजबूत करना।",
    "description_en": "Advanced non-prescription serum to stop hair shedding.",
    "group": "HAIR CARE",
    "brand_examples": "Bontress Pro, Densita, Hair4U Serum"
  },
  {
    "salt": "Biotin + Amino Acids + Vitamins + Minerals",
    "description_hi": "बालों को घना करना, नाखून मजबूत बनाना और हेयर फॉल रोकना।",
    "description_en": "Oral hair-nutritional supplement for keratin synthesis.",
    "group": "HAIR CARE / SUPPLEMENT",
    "brand_examples": "Follihair, Keraglo-EVA, Hairbless"
  },
  {
    "salt": "Sodium Hyaluronate (Eye Drops 0.1% / 0.18%)",
    "description_hi": "स्क्रीन टाइम से सूखी आंखें (Dry Eyes) और आंखों की चुभन।",
    "description_en": "Artificial tears for dry eye syndrome and screen strain.",
    "group": "OPHTHALMOLOGY / LUBRICANT",
    "brand_examples": "Hymoist, Teardrops, Lacrimart"
  },
  {
    "salt": "Carboxymethylcellulose (CMC - 0.5% / 1%)",
    "description_hi": "आंखों का सूखापन, थकावट और धूल/धुएं की जलन।",
    "description_en": "Standard lubricating eye drops for dry and tired eyes.",
    "group": "OPHTHALMOLOGY / LUBRICANT",
    "brand_examples": "Refresh Tears, EcoTears, Celluvisc"
  },
  {
    "salt": "Moxifloxacin (Eye Drops)",
    "description_hi": "आंख आना (Conjunctivitis/Eye Flu), लाल आंखें और इंफेक्शन।",
    "description_en": "Potent fluoroquinolone eye drop for bacterial conjunctivitis.",
    "group": "OPHTHALMOLOGY / ANTIBIOTIC",
    "brand_examples": "Moxi-K, Mahaflox, Vigamox"
  },
  {
    "salt": "Moxifloxacin + Prednisolone (Eye Drops)",
    "description_hi": "मोतियाबिंद ऑपरेशन के बाद या आंखों की गंभीर सूजन व इंफेक्शन।",
    "description_en": "Post-cataract surgery antibiotic and steroid combination.",
    "group": "OPHTHALMOLOGY",
    "brand_examples": "Mahaflox-P, Moxi-P, Pred-Moxi"
  },
  {
    "salt": "Moxifloxacin + Ketorolac (Eye Drops)",
    "description_hi": "आंखों में इंफेक्शन के साथ दर्द और चुभन कम करना।",
    "description_en": "Combines antibiotic with NSAID for painful eye infections.",
    "group": "OPHTHALMOLOGY",
    "brand_examples": "Mahaflox-KT, Moxi-KT, Moxicip-KT"
  },
  {
    "salt": "Tobramycin + Dexamethasone (Eye Drops)",
    "description_hi": "आंखों में सूजन, एलर्जी और बैक्टीरिया का इंफेक्शन।",
    "description_en": "Steroid and antibiotic combination for inflammatory eye issues.",
    "group": "OPHTHALMOLOGY",
    "brand_examples": "Tobradex, Tobrabact-D, Toba-D"
  },
  {
    "salt": "Olopatadine (Eye Drops)",
    "description_hi": "आंखों में एलर्जी, पानी आना, खुजली और लालिमा।",
    "description_en": "Antihistamine eye drop for allergic conjunctivitis.",
    "group": "OPHTHALMOLOGY / ANTI-ALLERGIC",
    "brand_examples": "Pataday, Olopat, Oloblu"
  },
  {
    "salt": "Nepafenac (Eye Drops)",
    "description_hi": "मोतियाबिंद (Cataract) सर्जरी के बाद दर्द और सूजन की ड्रॉप।",
    "description_en": "NSAID eye drop to prevent pain after eye surgery.",
    "group": "OPHTHALMOLOGY / PAIN",
    "brand_examples": "Nevanac, Nepaflam, Nepazox"
  },
  {
    "salt": "Bimatoprost / Latanoprost (Eye Drops)",
    "description_hi": "काला मोतिया (Glaucoma) - आंखों का प्रेशर/दबाव कम करना।",
    "description_en": "Prostaglandin analog to reduce Intraocular Pressure (IOP).",
    "group": "OPHTHALMOLOGY / GLAUCOMA",
    "brand_examples": "Latanoprost, Lumigan, Xalatan"
  },
  {
    "salt": "Timolol Maleate (Eye Drops)",
    "description_hi": "ग्लाकोमा में आंख का बढ़ता दबाव घटाने की क्लासिक ड्रॉप।",
    "description_en": "Beta-blocker eye drops for high intraocular pressure.",
    "group": "OPHTHALMOLOGY / GLAUCOMA",
    "brand_examples": "Glucomol, Timptol, Iotim"
  },
  {
    "salt": "Brimonidine + Timolol (Eye Drops)",
    "description_hi": "काला मोतिया के मरीजों में तेजी से दबाव कम करने का कॉम्बिनेशन।",
    "description_en": "Dual action eye drop to control ocular hypertension.",
    "group": "OPHTHALMOLOGY / GLAUCOMA",
    "brand_examples": "Combigan, Brimocom, Alphagan-P"
  },
  {
    "salt": "Paradichlorobenzene + Benzocaine + Chlorbutol (Ear Drops)",
    "description_hi": "कान का मैल (Ear Wax) ढीला करना और कान दर्द सुन्न करना।",
    "description_en": "Ear drops to dissolve impacted wax and relieve pain.",
    "group": "OTOLOGY / EAR CARE",
    "brand_examples": "Waxolve, Clearwax, Otorex"
  },
  {
    "salt": "Ofloxacin + Clotrimazole + Beclomethasone + Lignocaine (Ear Drops)",
    "description_hi": "कान में दर्द, फंगस, पानी जाने से इंफेक्शन और खुजली।",
    "description_en": "4-in-1 ear drop for bacterial, fungal infections & severe pain.",
    "group": "OTOLOGY / EAR CARE",
    "brand_examples": "Candibiotic, Otocin, Candid-Ear"
  },
  {
    "salt": "Chloramphenicol + Hydrocortisone (Ear/Eye Drops)",
    "description_hi": "कान/आंख का पुराना बैक्टीरियल इंफेक्शन और सूजन।",
    "description_en": "Broad-spectrum ear/eye drops for mixed infections.",
    "group": "OTOLOGY / OPHTHALMOLOGY",
    "brand_examples": "Chloromycetin, Corti-Optiset"
  },
  {
    "salt": "Benzocaine + Choline Salicylate (Mouth Gel)",
    "description_hi": "मुंह के छाले (Mouth Ulcers) सुन्न करना और दर्द से राहत।",
    "description_en": "Analgesic gel for fast relief from painful mouth ulcers.",
    "group": "ORAL CARE",
    "brand_examples": "Orajel, Zytee, Mucopain"
  },
  {
    "salt": "Triamcinolone Acetonide (Oral Paste)",
    "description_hi": "मुंह के जिद्दी और बड़े छालों (Canker Sores) पर लगाने वाला मरहम।",
    "description_en": "Steroid mouth paste that adheres to ulcers for fast healing.",
    "group": "ORAL CARE",
    "brand_examples": "Kenacort N, Tess, Orastep"
  },
  {
    "salt": "Chlorhexidine Gluconate (Mouthwash)",
    "description_hi": "मसूड़ों से खून आना (Gingivitis), मुंह की बदबू और एंटीसेप्टिक कुल्ला।",
    "description_en": "Gold standard antiseptic mouthwash for gum disease.",
    "group": "ORAL CARE",
    "brand_examples": "Clohex, Hexidine, Rexidin"
  },
  {
    "salt": "Potassium Nitrate + Sodium Monofluorophosphate (Toothpaste)",
    "description_hi": "दांतों में ठंडा-गरम लगना (Tooth Sensitivity) दूर करना।",
    "description_en": "Desensitizing toothpaste for hypersensitive teeth.",
    "group": "ORAL CARE",
    "brand_examples": "Sensodyne, Thermoseal, Sensoform"
  },
  {
    "salt": "Lactulose + Wheat Dextrin",
    "description_hi": "आंतों में फाइबर बढ़ाकर प्राकृतिक रूप से पेट साफ करना।",
    "description_en": "Laxative syrup with natural fiber for chronic constipation.",
    "group": "LAXATIVE",
    "brand_examples": "Looz-Fib, Duphalac-F"
  },
  {
    "salt": "Polyethylene Glycol (PEG 3350)",
    "description_hi": "बच्चों और बड़ों में बिना पेट मरोड़ के कब्ज दूर करने का पाउडर।",
    "description_en": "Osmotic laxative powder for gentle bowel clearance.",
    "group": "LAXATIVE",
    "brand_examples": "Pegmove, Movicol, Laxopeg"
  },
  {
    "salt": "Prunitop / Prucalopride",
    "description_hi": "गंभीर पुराना कब्ज जब साधारण सिरप/गोलियां काम न करें।",
    "description_en": "Prokinetic drug for chronic idiopathic constipation.",
    "group": "LAXATIVE / PROKINETIC",
    "brand_examples": "Prudict, Pruvict, Resotran"
  },
  {
    "salt": "Prochlorperazine Maleate",
    "description_hi": "चक्कर आना, माइग्रेन की उल्टी और बहुत तेज घबराहट।",
    "description_en": "Treats severe nausea, vertigo, and anxiety disorders.",
    "group": "ANTI-EMETIC / ANTI-VERTIGO",
    "brand_examples": "Stemetil, Stemil, Emidodox"
  },
  {
    "salt": "Aprepitant",
    "description_hi": "कीमोथेरेपी (कैंसर इलाज) के बाद होने वाली तेज उल्टी से बचाव।",
    "description_en": "NK1 receptor antagonist for severe chemotherapy-induced vomiting.",
    "group": "ANTI-EMETIC (HIGH-END)",
    "brand_examples": "Aprecap, Emend, Apritang"
  },
  {
    "salt": "L-Arginine + Progesterone (Sachet)",
    "description_hi": "प्रेग्नेंसी में बच्चे की ग्रोथ और गंदे पानी (Amniotic Fluid) की मात्रा बढ़ाना।",
    "description_en": "Improves fetal growth and placental blood flow in pregnancy.",
    "group": "PREGNANCY SUPPLEMENT",
    "brand_examples": "Argipreg, R-Gin, Encefol"
  },
  {
    "salt": "Folic Acid (5mg)",
    "description_hi": "प्रेग्नेंसी प्लान करते समय और शुरुआती 3 महीने (जन्मजात दोष से बचाव)।",
    "description_en": "Essential pre-conception vitamin to prevent neural tube defects.",
    "group": "PREGNANCY CARE / VITAMIN",
    "brand_examples": "Folvite, Fol5, Folinal"
  },
  {
    "salt": "L-Methylfolate + Pyridoxal-5-Phosphate + Methylcobalamin",
    "description_hi": "एक्टिव फॉलिक एसिड - बार-बार गर्भपात और खून की भारी कमी हेतु।",
    "description_en": "Active form of B-vitamins for recurrent pregnancy loss & anemia.",
    "group": "PREGNANCY CARE",
    "brand_examples": "Folgard-OS, Metformin-F, Folvite-Active"
  },
  {
    "salt": "Iron Sucrose (IV Injection)",
    "description_hi": "प्रेग्नेंसी या इमरजेंसी में बहुत कम हीमोग्लोबिन को तेजी से बढ़ाना।",
    "description_en": "Intravenous iron for severe anemia when oral iron fails.",
    "group": "HAEMATINIC / INJECTABLE",
    "brand_examples": "Orofer, Encrate, Rubrafer"
  },
  {
    "salt": "Ferric Carboxymaltose (FCM Injection)",
    "description_hi": "केवल 15 मिनट की ड्रिप से हीमोग्लोबिन में भारी सुधार।",
    "description_en": "High-dose single IV iron infusion for rapid anemia correction.",
    "group": "HAEMATINIC / INJECTABLE",
    "brand_examples": "Injectafer, Ferium 1K, Orofer FCM"
  },
  {
    "salt": "Epoetin Alfa / Erythropoietin (Injection)",
    "description_hi": "किडनी फेलियर या कैंसर मरीजों में लाल रक्त कोशिकाएं (RBC) बनाना।",
    "description_en": "Hormone injection to stimulate RBC production in kidney disease.",
    "group": "NEPHROLOGY / HEMATOLOGY",
    "brand_examples": "Eprex, EPOFIT, Wepox"
  },
  {
    "salt": "Alpha Ketoanalogue",
    "description_hi": "क्रोनिक किडनी डिसीज (CKD) में डायलिसिस की जरूरत को टालना।",
    "description_en": "Amino acid supplement to reduce urea load in kidney disease.",
    "group": "NEPHROLOGY",
    "brand_examples": "Ketosteril, Alfa-Keto, Nefrogard"
  },
  {
    "salt": "Sevelamer Carbonate",
    "description_hi": "डायलिसिस मरीजों के खून में फॉस्फेट का खतरनाक लेवल घटाना।",
    "description_en": "Phosphate binder for chronic kidney disease patients on dialysis.",
    "group": "NEPHROLOGY",
    "brand_examples": "Renvela, Sevcar, Sevelam"
  },
  {
    "salt": "Febuxostat + Hydrochlorothiazide",
    "description_hi": "गुर्दे की बीमारी से जुड़ा यूरिक एसिड और बीपी कंट्रोल।",
    "description_en": "Dual control for gout and hypertension in renal-compromised cases.",
    "group": "NEPHROLOGY / UROLOGY",
    "brand_examples": "Zurig-H, Febustat-H"
  },
  {
    "salt": "Coenzyme Q10 (100mg / 300mg)",
    "description_hi": "हार्ट सेल्स को ताकत देना, स्पर्म/एग क्वालिटी बढ़ाना, और माइग्रेन।",
    "description_en": "Cellular energy booster and antioxidant for heart & fertility.",
    "group": "SUPPLEMENT / ANTIOXIDANT",
    "brand_examples": "CoQ10, Q-Gold, Ubicar"
  },
  {
    "salt": "Omega-3 Fatty Acids (EPA + DHA - Fish Oil)",
    "description_hi": "दिल को सुरक्षित रखना, कोलेस्ट्रॉल कम करना, जोड़ों का लचीलापन।",
    "description_en": "Essential fatty acids for cardiac, brain, and joint health.",
    "group": "SUPPLEMENT / CARDIO",
    "brand_examples": "Maxepa, Salmon Omega, TrueBasics Omega"
  },
  {
    "salt": "L-Glutathione (500mg)",
    "description_hi": "शरीर के टॉक्सिन्स बाहर निकालना और त्वचा में निखार (Skin Brightening)।",
    "description_en": "Master antioxidant used for detoxification and skin lightening.",
    "group": "SUPPLEMENT / COSMETIC",
    "brand_examples": "Glutone, Maxilook, Oxynex"
  },
  {
    "salt": "Alpha Lipoic Acid",
    "description_hi": "डायबिटीज के मरीजों में नसों के डैमेज होने और सुन्नपन का बचाव।",
    "description_en": "Potent antioxidant for diabetic neuropathy protection.",
    "group": "SUPPLEMENT / NEUROLOGY",
    "brand_examples": "ALA 300, Thioctacid, Alpha-Lip"
  },
  {
    "salt": "Probiotics (Multi-Strain 10-30 Billion CFU)",
    "description_hi": "गंभीर पेट खराब, एंटीबायोटिक के बाद आंतों को रीसेट करना।",
    "description_en": "High-CFU multi-strain gut health and immunity builder.",
    "group": "PROBIOTIC",
    "brand_examples": "VSL#3, Gutgermina, Bifilac HP"
  },
  {
    "salt": "Ginkgo Biloba + Piracetam",
    "description_hi": "उम्र के साथ दिमाग की नसें कमजोर होना, चक्कर आना, भूलना।",
    "description_en": "Herbal-neuro combination to boost brain oxygen and memory.",
    "group": "NOOTROPIC",
    "brand_examples": "Ginkocer-P, Bilovas-P, Gingium"
  },
  {
    "salt": "Aspirin (75mg / 150mg)",
    "description_hi": "हार्ट अटैक और स्ट्रोक से बचाव के लिए रोज ली जाने वाली खून पतली दवा।",
    "description_en": "Low-dose antiplatelet therapy for cardiovascular protection.",
    "group": "BLOOD THINNER",
    "brand_examples": "Ecosprin, Delisprin, Loprin"
  },
  {
    "salt": "Dipyridamole + Aspirin",
    "description_hi": "ब्रेन स्ट्रोक (Brain Stroke) का दोबारा अटैक आने से रोकना।",
    "description_en": "Secondary stroke prevention combining two antiplatelets.",
    "group": "BLOOD THINNER / NEUROLOGY",
    "brand_examples": "Aggrenox, Asasantin"
  },
  {
    "salt": "Tranexamic Acid + Adrenochrome Monosemicarbazone",
    "description_hi": "दांत उखाड़ने या चोट के बाद लगातार खून बहना रोकना।",
    "description_en": "Hemostatic agent combination to halt acute bleeding.",
    "group": "BLEEDING CONTROL",
    "brand_examples": "Styptovit, Styptocid, Traxage"
  },
  {
    "salt": "Factor VIII / Factor IX",
    "description_hi": "हीमोफिलिया (Hemophilia) बीमारी में ब्लीडिंग रोकना।",
    "description_en": "Essential clotting factor concentrate for Hemophilia patients.",
    "group": "SPECIALTY / HEMATOLOGY",
    "brand_examples": "Hemofil, Benefix, Factorate"
  },
  {
    "salt": "Human Albumin (20% / 25% Injection)",
    "description_hi": "लिवर सिरोसिस या जलने पर शरीर में प्रोटीन/प्लाज्मा का लेवल बढ़ाना।",
    "description_en": "IV blood plasma protein expander for liver failure & burns.",
    "group": "CRITICAL CARE",
    "brand_examples": "Alburel, Human Albumin, Plasmanate"
  },
  {
    "salt": "Mannitol (20% IV Infusion)",
    "description_hi": "सिर की चोट या स्ट्रोक में दिमाग की सूजन/प्रेशर घटाना।",
    "description_en": "Osmotic diuretic used to decrease intracranial pressure.",
    "group": "CRITICAL CARE / NEUROLOGY",
    "brand_examples": "Manitol, Osmitrol, Mannitol"
  },
  {
    "salt": "Glycerin (Suppository)",
    "description_hi": "छोटे बच्चों या बुजुर्गों में तुरंत शौच/पेट साफ कराने की बत्ती।",
    "description_en": "Rectal suppository for rapid constipation relief.",
    "group": "LAXATIVE / RECTAL",
    "brand_examples": "Hallens, Supposicon, Babyneema"
  },
  {
    "salt": "Anusol / Hydrocortisone + Lidocaine (Suppository/Cream)",
    "description_hi": "बवासीर (Piles) और भगंदर का दर्द, खुजली व सूजन कम करना।",
    "description_en": "Rectal cream/suppository for hemorrhoids relief.",
    "group": "PROCTOLOGY / PILES CARE",
    "brand_examples": "Anovate, Hadensa, Shield Cream"
  },
  {
    "salt": "Calcium Dobesilate",
    "description_hi": "बवासीर (Piles) की नसों से खून बहना और पैरों की सूजी नसें (Varicose Veins)।",
    "description_en": "Protects micro-blood vessels in piles and varicose veins.",
    "group": "PROCTOLOGY / VASCULAR",
    "brand_examples": "Doxium, Dobesil, Osil"
  },
  {
    "salt": "Flavocip / Micronized Purified Flavonoid Fraction (Diosmin + Hesperidin)",
    "description_hi": "पैरों की सूजी नसों (Varicose Veins) और बवासीर का पक्का इलाज।",
    "description_en": "Venotonic drug to strengthen veins in piles and varicose veins.",
    "group": "VASCULAR / PILES CARE",
    "brand_examples": "Daflon, Venusmin, Dosmin"
  },
  {
    "salt": "Esculin + Proctosedyl (Cream)",
    "description_hi": "बवासीर के मसों का दर्द, जलन और ब्लीडिंग रोकने का मरहम।",
    "description_en": "Topical piles ointment for numbing pain and reducing swelling.",
    "group": "PILES CARE",
    "brand_examples": "Proctosedyl, Pilex, Anovate"
  },
  {
    "salt": "Permethrin + Cetrimide (Soap/Lotion)",
    "description_hi": "स्कैबीज (Scabies), शरीर की जूएं और घाव का एंटीसेप्टिक इलाज।",
    "description_en": "Antiseptic & anti-parasitic soap for itch and scabies.",
    "group": "DERMATOLOGY",
    "brand_examples": "Scabper-C, Cetrile"
  },
  {
    "salt": "Luliconazole + Clobetasol",
    "description_hi": "जांघों/त्वचा का अत्यधिक जिद्दी फंगस और लालिमा।",
    "description_en": "Strong combination cream for refractory fungal itching.",
    "group": "DERMATOLOGY",
    "brand_examples": "Lulican-XL, Lulimax-C"
  },
  {
    "salt": "Amorolfine (Cream)",
    "description_hi": "त्वचा का पुराना दाद और एथलीट फुट।",
    "description_en": "Topical antifungal cream for skin ringworm.",
    "group": "DERMATOLOGY",
    "brand_examples": "Amorolf, Loceryl Cream, Amrosys"
  },
  {
    "salt": "Sertaconazole Nitrate",
    "description_hi": "त्वचा का ड्राई फंगल इंफेक्शन और पसीने की फंगल खुजली।",
    "description_en": "Broad-spectrum topical antifungal cream.",
    "group": "DERMATOLOGY",
    "brand_examples": "Onabet, Onasert, Sertacide"
  },
  {
    "salt": "Tacrolimus + Deflazacort",
    "description_hi": "गंभीर स्किन एलर्जी और ऑटोइम्यून रैश।",
    "description_en": "Oral and topical regimen for severe inflammatory skin issues.",
    "group": "DERMATOLOGY",
    "brand_examples": "Tacroz Forte Kit"
  },
  {
    "salt": "Nintedanib",
    "description_hi": "फेफड़े सख्त होना (Pulmonary Fibrosis) बीमारी की रोकथाम।",
    "description_en": "Tyrosine kinase inhibitor for Idiopathic Pulmonary Fibrosis.",
    "group": "RESPIRATORY (SPECIALTY)",
    "brand_examples": "Nintena, Cyendiv, Fibronip"
  },
  {
    "salt": "Pirfenidone",
    "description_hi": "फेफड़ों में स्कार/घाव बनने (Lungs Fibrosis) की गति धीमी करना।",
    "description_en": "Anti-fibrotic agent used in Idiopathic Pulmonary Fibrosis.",
    "group": "RESPIRATORY (SPECIALTY)",
    "brand_examples": "Pirfenex, Fibrodone, Pulmopirf"
  },
  {
    "salt": "Acetylcysteine (600mg Effervescent)",
    "description_hi": "फेफड़ों का बहुत गाढ़ा बलगम पिघलाकर बाहर निकालना।",
    "description_en": "Mucolytic tablet that dissolves thick mucus in lungs.",
    "group": "RESPIRATORY",
    "brand_examples": "Fluimucil, Nac-Fil, Mucinac"
  },
  {
    "salt": "Acebrophylline",
    "description_hi": "दमा/अस्थमा में बलगम ढीला करना और सांस की नली फैलाना।",
    "description_en": "Bronchodilator and mucolytic for COPD and asthma.",
    "group": "RESPIRATORY",
    "brand_examples": "AB-Flo, Acebrobid, Ventidox"
  },
  {
    "salt": "Acebrophylline + Montelukast + Fexofenadine",
    "description_hi": "अस्थमा, बलगम, सांस फूलना और एलर्जी का 3-इन-1 इलाज।",
    "description_en": "Triple action combination for severe allergic asthma.",
    "group": "RESPIRATORY COMBINATION",
    "brand_examples": "AB-Flo M, Acebrobid-FX, Ventidox-M"
  },
  {
    "salt": "Doxofylline",
    "description_hi": "अस्थमा और सीओपीडी (COPD) में बिना घबराहट के सांस खोलना।",
    "description_en": "Newer xanthine bronchodilator with better safety profile.",
    "group": "RESPIRATORY",
    "brand_examples": "Doxolin, Doxoril, Synasma"
  },
  {
    "salt": "Doxofylline + Montelukast",
    "description_hi": "रात में होने वाले अस्थमा के दौरे और एलर्जी वाली सांस फूलना।",
    "description_en": "Dual control for nocturnal asthma and allergic dyspnea.",
    "group": "RESPIRATORY COMBINATION",
    "brand_examples": "Doxolin-M, Doxoril-M, Synasma-M"
  },
  {
    "salt": "Tiotropium Bromide (Inhaler/Rotacap)",
    "description_hi": "सीओपीडी (COPD) - धूम्रपान या उम्र से फेफड़े कमजोर होने पर 24 घंटे सांस खोलना।",
    "description_en": "Long-acting anticholinergic inhaler for 24-hour COPD management.",
    "group": "RESPIRATORY / INHALER",
    "brand_examples": "Tiova, Spiriva, Tiobact"
  },
  {
    "salt": "Tiotropium + Formoterol",
    "description_hi": "गंभीर दमा/सीओपीडी के मरीजों के लिए पावरफुल सांस की इनहेलर।",
    "description_en": "Dual bronchodilator combination inhaler for severe COPD.",
    "group": "RESPIRATORY / INHALER",
    "brand_examples": "Tiova-F, Duova, Foracort-T"
  },
  {
    "salt": "Glycopyrrolate + Formoterol (Inhaler)",
    "description_hi": "फेफड़ों की वायुमार्ग की नलियों को चौड़ा रखना।",
    "description_en": "Modern dual bronchodilator inhaler for long-term COPD care.",
    "group": "RESPIRATORY / INHALER",
    "brand_examples": "Bevespi, Glyco-F"
  },
  {
    "salt": "Fluticasone Furoate + Vilanterol (Inhaler)",
    "description_hi": "दिन में सिर्फ एक बार लेने वाला आधुनिक अस्थमा/सीओपीडी इनहेलर।",
    "description_en": "Once-daily combination inhaler for persistent asthma.",
    "group": "RESPIRATORY / INHALER",
    "brand_examples": "Relvar Ellipta, Breo"
  },
  {
    "salt": "Sildenafil (20mg - Revatio)",
    "description_hi": "फेफड़ों की नसों का उच्च रक्तचाप (Pulmonary Hypertension)।",
    "description_en": "Low-dose formulation specifically for Pulmonary Arterial Hypertension.",
    "group": "CARDIO-RESPIRATORY",
    "brand_examples": "Revatio, Silvita"
  },
  {
    "salt": "Bosentan",
    "description_hi": "फेफड़ों की धमनियों में दबाव कम करना।",
    "description_en": "Endothelin receptor antagonist for pulmonary hypertension.",
    "group": "CARDIO-RESPIRATORY",
    "brand_examples": "Bosentas, Tracleer"
  },

  //------------------------------- syrup for woman ----------------------------------
  
  {
    "salt": "Iron, Folic Acid, Vitamin B12, Zinc",
    "description_hi": "खून की कमी (Anemia), कमजोरी और थकान को दूर करने के लिए अति उपयोगी।",
    "description_en": "Treats iron deficiency anemia and boosts energy levels.",
    "group": "GYNAECOLOGY / HEMATINIC",
    "brand_examples": "Dexorange, Autrin"
  },
  {
    "salt": "Ayurvedic Uterine Tonic (Ashoka, Lodhra, Dashmool, Shatavari)",
    "description_hi": "मासिक धर्म की अनियमितता, पेट दर्द, हार्मोनल असंतुलन और शारीरिक थकान में राहत।",
    "description_en": "Regulates menstrual cycles and supports overall uterine health.",
    "group": "AYURVEDIC / WOMEN'S HEALTH",
    "brand_examples": "Hempushpa, M2 Tone, Eves Care"
  },
  {
    "salt": "Ayurvedic Liver Care Formula (Kasani, Kakamachi, Arjuna, Bhringraj)",
    "description_hi": "फैटी लिवर, पाचन की समस्या, भूख न लगना और पीलिया से बचाव।",
    "description_en": "Supports liver function, improves digestion, and appetite.",
    "group": "AYURVEDIC / HEPATOLOGY",
    "brand_examples": "Liv 52, Liv 52 DS, Amlycure DS"
  },
  {
    "salt": "Dashmool, Ashwagandha, Draksha, Shatavari Extract",
    "description_hi": "डिलीवरी के बाद कमजोरी दूर करने, गर्भाशय की सफाई और ताकत बढ़ाने के लिए।",
    "description_en": "Post-delivery recovery tonic, restores strength and uterine health.",
    "group": "AYURVEDIC / POSTNATAL CARE",
    "brand_examples": "Dashmularishta, Ashwagandharishta"
  },
  {
    "salt": "Disodium Hydrogen Citrate",
    "description_hi": "पेशाब में जलन (UTI), यूरिक एसिड कम करने और गुर्दे की पथरी के प्रभाव को रोकने में।",
    "description_en": "Alkalinizes urine to relieve burning sensation during urination (UTI).",
    "group": "UROLOGY / URINARY ALKALIZER",
    "brand_examples": "Alka-Seltzer, Cital, Alkasol"
  },
  {
    "salt": "Ayurvedic Blood Purifying Herbs (Neem, Chirata, Senna, Tulsi)",
    "description_hi": "खून साफ करने, कील-मुहांसे (Acne) हटाने और त्वचा पर निखार लाने के लिए।",
    "description_en": "Purifies blood, reduces acne, and improves skin complexion.",
    "group": "AYURVEDIC / DERMATOLOGY",
    "brand_examples": "Safi, Purim, Hemoclean"
  },
  {
    "salt": "Ferric Ammonium Citrate, Folic Acid, Cyanocobalamin",
    "description_hi": "गर्भावस्था (Pregnancy) और पीरियड्स के दौरान खून की मात्रा बढ़ाने के लिए।",
    "description_en": "Prevents and treats iron deficiency, crucial during pregnancy.",
    "group": "GYNAECOLOGY / HEMATINIC",
    "brand_examples": "Orofer XT, Cherry, RB Tone"
  },
  {
    "salt": "Ayurvedic Uterine Care Herbs (Ashoka, Shatavari, Lodhra)",
    "description_hi": "पीरियड्स के दौरान अत्यधिक रक्तस्राव (Heavy Bleeding) और कमर दर्द में राहत।",
    "description_en": "Manages heavy menstrual bleeding and abdominal cramps.",
    "group": "AYURVEDIC / WOMEN'S HEALTH",
    "brand_examples": "Ashokarishta, Menstoc"
  },
  {
    "salt": "Calcium, Vitamin D3, Vitamin B12",
    "description_hi": "महिलाओं में हड्डियों की कमजोरी (Osteoporosis) और जोड़ों का दर्द दूर करने हेतु।",
    "description_en": "Strengthens bones and improves calcium absorption.",
    "group": "ORTHOPEDICS / NUTRITIONAL",
    "brand_examples": "Shelcal, Ostocalcium, Gemcal"
  },
  {
    "salt": "L-Carnitine, L-Arginine, Coenzyme Q10, Zinc, Folic Acid",
    "description_hi": "महिलाओं में फर्टिलिटी (Fertility) और एग (Egg) क्वालिटी बेहतर करने के लिए।",
    "description_en": "Improves female fertility and reproductive health.",
    "group": "GYNAECOLOGY / FERTILITY",
    "brand_examples": "Overlap, Evatone, Ovoutin"
  },
  {
    "salt": "Myo-Inositol, D-Chiro-Inositol, L-Methylfolate",
    "description_hi": "PCOS/PCOD की समस्या, चेहरे पर अनचाहे बाल और अनियमित पीरियड ठीक करने में।",
    "description_en": "Helps manage symptoms of PCOS/PCOD and restores ovulation.",
    "group": "GYNAECOLOGY / ENDOCRINOLOGY",
    "brand_examples": "Ovasitol, Ovares, Cystelia"
  },
  {
    "salt": "Ayurvedic Digestion & Digestive Enzymes (Draksha, Vidanga)",
    "description_hi": "गैस, एसिडिटी, अपच और पेट फूलने (Bloating) की समस्या में राहत।",
    "description_en": "Relieves indigestion, bloating, and improves gut health.",
    "group": "AYURVEDIC / GASTROENTEROLOGY",
    "brand_examples": "Drakshasava, Zandu Pancharishta"
  },
  {
    "salt": "Fungal Diastase, Pepsin",
    "description_hi": "खाना ठीक से न पचना, भारीपन और पेट दर्द ठीक करने के लिए डाइजेस्टिव सिरप।",
    "description_en": "Digestive enzyme combination that helps digest carbohydrates and proteins.",
    "group": "GASTROENTEROLOGY",
    "brand_examples": "Aristozyme, Aristozyme Liquid, Digene"
  },
  {
    "salt": "Multivitamins, Multiminerals, Antioxidants",
    "description_hi": "दिनभर की थकान, सुस्ती, कमजोरी दूर करने और इम्युनिटी बढ़ाने के लिए।",
    "description_en": "Fills nutritional gaps, boosts daily energy and immunity.",
    "group": "NUTRITIONAL / GENERAL HEALTH",
    "brand_examples": "Zincovit, Revital H Woman, A to Z NS"
  },
  {
    "salt": "Lactulose",
    "description_hi": "पुरानी कब्ज (Constipation) से मुक्ति पाने और पेट आसानी से साफ करने के लिए।",
    "description_en": "Osmotic laxative used for the treatment of constipation.",
    "group": "GASTROENTEROLOGY / LAXATIVE",
    "brand_examples": "Duphalac, Cremaffin, Smuth"
  },
  {
    "salt": "Magnesium Hydroxide, Liquid Paraffin, Sodium Picosulfate",
    "description_hi": "पेट की सख्त कब्जियत और मल त्याग में होने वाले दर्द में आराम।",
    "description_en": "Provides effective relief from hard stool and acute constipation.",
    "group": "GASTROENTEROLOGY / LAXATIVE",
    "brand_examples": "Cremaffin Plus, Laxocon"
  },
  {
    "salt": "B-Complex (Thiamine, Riboflavin, Niacinamide, Pyridoxine, Cyanocobalamin)",
    "description_hi": "मुंह के छाले (Mouth Ulcers), कमजोरी और नसों की ताकत के लिए।",
    "description_en": "Treats Vitamin B deficiency, relieves mouth ulcers, and supports nervous system.",
    "group": "VITAMINS / NUTRITIONAL",
    "brand_examples": "Becosules, Cobadex CZS"
  },
  {
    "salt": "Ayurvedic Leucorrhea Formula (Lodhra, Daruharidra, Shatavari)",
    "description_hi": "महिलाओं में लिकोरिया/सफेद पानी (White Discharge) और जननांगों में खुजली।",
    "description_en": "Treats excessive vaginal discharge (leucorrhea) and keeps vaginal health intact.",
    "group": "AYURVEDIC / GYNAECOLOGY",
    "brand_examples": "Lukol, Femiforte, Leucocare"
  },
  {
    "salt": "Shatavari Extract",
    "description_hi": "स्तनपान कराने वाली माताओं में दूध (Breast Milk) की मात्रा बढ़ाने के लिए।",
    "description_en": "Galactagogue syrup that improves breast milk production in lactating mothers.",
    "group": "AYURVEDIC / LACTATION",
    "brand_examples": "Shatavari Syrup, Galact, Lactare"
  },
  {
    "salt": "Protein, Iron, Folic Acid, Vitamins",
    "description_hi": "गर्भवती और स्तनपान कराने वाली महिलाओं के पोषण और बच्चे के विकास हेतु।",
    "description_en": "Nutritional supplement supporting protein and micronutrient needs during pregnancy.",
    "group": "NUTRITIONAL / PREGNANCY",
    "brand_examples": "Protinules Liquid, Mother's Horlicks (Syrup format variants)"
  },
  
  {
    "salt": "Sodium Alginate, Sodium Bicarbonate, Calcium Carbonate",
    "description_hi": "सीने में जलन (Heartburn), प्रेगनेंसी की एसिडिटी और खट्टी डकारों से राहत।",
    "description_en": "Forms a protective barrier to treat acid reflux and indigestion.",
    "group": "GASTROENTEROLOGY / ANTACID",
    "brand_examples": "Gaviscon, Mucaine Gel"
  },
  {
    "salt": "Magaldrate, Simethicone",
    "description_hi": "पेट की तेज जलन, गैस का फटना और एसिड रिफ्लक्स का तुरंत इलाज।",
    "description_en": "Provides fast relief from acidity, gas, and stomach upset.",
    "group": "GASTROENTEROLOGY / ANTACID",
    "brand_examples": "Gelusil, Digene, Aciloc S"
  },
  {
    "salt": "Ayurvedic Immunity & Anti-Stress Herbs (Ashwagandha, Tulsi, Giloy)",
    "description_hi": "मानसिक तनाव, चिंता, अनिद्रा और काम के दबाव से राहत पाने के लिए।",
    "description_en": "Reduces stress, mental fatigue, and enhances natural immunity.",
    "group": "AYURVEDIC / NEUROLOGY",
    "brand_examples": "Stresscom Syrup, Shankhpushpi, Dabur Stress Relief"
  },
  {
    "salt": "Cranberry Extract, D-Mannose",
    "description_hi": "बार-बार होने वाले यूरिन इन्फेक्शन (UTI) और मूत्राशय की सूजन को रोकने के लिए।",
    "description_en": "Prevents UTI recurrences by clearing harmful bacteria from the urinary tract.",
    "group": "UROLOGY / SUPPLEMENT",
    "brand_examples": "Cranpac, Uticran, Urilyser Cran"
  },
  {
    "salt": "Potassium Citrate, Citric Acid",
    "description_hi": "किडनी की पथरी को गलाने और यूरिन का pH स्तर संतुलित करने के लिए।",
    "description_en": "Prevents formation of kidney stones and alkalinizes urine.",
    "group": "UROLOGY / NEPHROLOGY",
    "brand_examples": "Potrate, K-Cit"
  },
  {
    "salt": "L-Ornithine L-Aspartate, Silymarin",
    "description_hi": "शराब या दवाओं के असर से डैमेज लिवर को ठीक करने और खून डिटॉक्स करने के लिए।",
    "description_en": "Protects and rejuvenates damaged liver cells.",
    "group": "HEPATOLOGY",
    "brand_examples": "Hepamerz, Silybon, Hepagard"
  },
  {
    "salt": "Ayurvedic Renal Care (Pashanbhed, Punarnava, Varun)",
    "description_hi": "गुर्दे की पथरी निकालने और मूत्र मार्ग के संक्रमण को ठीक करने के लिए आयुर्वेदिक सिरप।",
    "description_en": "Ayurvedic medicine to break and flush out kidney stones naturally.",
    "group": "AYURVEDIC / UROLOGY",
    "brand_examples": "Neeri, Cystone, Stonex"
  },
  {
    "salt": "Ayurvedic Memory & Brain Tonic (Brahmi, Shankhpushpi, Jyotishmati)",
    "description_hi": "याददाश्त बढ़ाने, दिमागी थकान दूर करने और फोकस बेहतर करने के लिए।",
    "description_en": "Brain tonic that enhances memory, concentration, and relieves mental fatigue.",
    "group": "AYURVEDIC / NEUROLOGY",
    "brand_examples": "Shankhpushpi, Mentat, Brahmi Rasayana"
  },
  {
    "salt": "Coenzyme Q10, Omega-3 Fatty Acids, Multivitamins",
    "description_hi": "30 की उम्र के बाद दिल की सेहत, त्वचा की सुंदरता और ऊर्जा बनाए रखने के लिए।",
    "description_en": "Antioxidant syrup for cardiovascular health and anti-aging benefits.",
    "group": "CARDIOLOGY / NUTRITIONAL",
    "brand_examples": "CoQ10 Liquid, Oxaquint"
  },
  {
    "salt": "Levosalbutamol, Ambroxol, Guaiphenesin",
    "description_hi": "छाती में जमे बलगम को बाहर निकालने और गीली खांसी ठीक करने के लिए।",
    "description_en": "Mucolytic and bronchodilator for productive/wet cough and asthma relief.",
    "group": "PULMONOLOGY / COUGH",
    "brand_examples": "Ascoril LS, Asthalin AX, Mucolite"
  },
  {
    "salt": "Dextromethorphan Hydrobromide, Chlorpheniramine Maleate",
    "description_hi": "सूखी खांसी, गले में खराश और एलर्जी की वजह से आ रही खांसी में आराम।",
    "description_en": "Cough suppressant for dry cough and allergy symptoms.",
    "group": "PULMONOLOGY / COUGH",
    "brand_examples": "Corex DX, Benadryl, Alex"
  },
  {
    "salt": "Ayurvedic Anti-Cough Herbs (Tulsi, Mulethi, Vasaka, Sunthi)",
    "description_hi": "बिना नींद या सुस्ती के बिना हर तरह की खांसी और गले की खराश का इलाज।",
    "description_en": "Non-drowsy herbal cough syrup for sore throat and respiratory relief.",
    "group": "AYURVEDIC / PULMONOLOGY",
    "brand_examples": "Honitus, Koflet, Kasani"
  },
  {
    "salt": "Carbonyl Iron, Folic Acid, Zinc Sulfate",
    "description_hi": "बिना पेट खराब किए बॉडी में तेजी से आयरन का स्तर बढ़ाने के लिए।",
    "description_en": "Gentle iron supplement that raises hemoglobin without gastric irritation.",
    "group": "HEMATINIC",
    "brand_examples": "Feosol, Carboron"
  },
  {
    "salt": "Ayurvedic Weight Loss Herbs (Guggulu, Vrikshamla, Triphala)",
    "description_hi": "मोटापे से परेशान महिलाओं में मेटाबॉलिज्म तेज कर चर्बी घटाने के लिए।",
    "description_en": "Natural metabolism booster that aids weight loss and lipid management.",
    "group": "AYURVEDIC / METABOLIC",
    "brand_examples": "Ayurslim, Vrikshamla Syrup, Lipovedic"
  },
  {
    "salt": "Tricholine Citrate, Sorbitol",
    "description_hi": "लिवर में वसा (Fat) जमने से रोकने और कब्ज की शिकायत दूर करने के लिए।",
    "description_en": "Lipotropic syrup used for fatty liver disease and digestive disorders.",
    "group": "HEPATOLOGY",
    "brand_examples": "Sorbiline, Trikos"
  },
  {
    "salt": "L-Lysine, Vitamin B-Complex, Zinc",
    "description_hi": "बीमारी के बाद आई शारीरिक कमजोरी और भूख की कमी को दूर करने के लिए।",
    "description_en": "Promotes growth, repairs tissues, and stimulates appetite.",
    "group": "NUTRITIONAL",
    "brand_examples": "Lysivit, Cobadex Z"
  },
  {
    "salt": "Dicyclomine Hydrochloride, Simethicone",
    "description_hi": "मासिक धर्म का दर्द (Period Cramps) और पेट में ऐंठन से राहत के लिए।",
    "description_en": "Relieves abdominal cramps, spasmodic pain, and gas.",
    "group": "GASTROENTEROLOGY / GYNAECOLOGY",
    "brand_examples": "Cyclopam, Meftal-Spas Syrup"
  },
  {
    "salt": "Zinc Sulfate Monohydrate",
    "description_hi": "दस्त (Diarrhea) के दौरान शरीर में पानी और मिनरल्स का संतुलन बनाए रखने हेतु।",
    "description_en": "Zinc supplement to reduce duration and severity of diarrhea.",
    "group": "PEDIATRIC / GENERAL",
    "brand_examples": "Zinconia, Zincoline"
  },
  {
    "salt": "Sucralfate, Oxetacaine",
    "description_hi": "पेट और आंतों के अल्सर के दर्द और जलन को तुरंत सुन्न कर आराम देने में।",
    "description_en": "Forms a protective coating over stomach ulcers and provides local anesthesia.",
    "group": "GASTROENTEROLOGY",
    "brand_examples": "Sucrafil O, Sucral O"
  },
  {
    "salt": "Ayurvedic Diabetes Care Herbs (Karela, Jamun, Gurmar, Vijaysar)",
    "description_hi": "महिलाओं में ब्लड शुगर लेवल को नियंत्रित रखने और शुगर की कमजोरी दूर करने के लिए।",
    "description_en": "Herbal formulation to manage blood glucose levels and insulin sensitivity.",
    "group": "AYURVEDIC / ENDOCRINOLOGY",
    "brand_examples": "BGR-34, Diabecon, Karela Jamun Juice Syrup"
  },
  {
    "salt": "Ferrous Glycine Sulphate, Folic Acid",
    "description_hi": "आयरन का सबसे सुरक्षित रूप जो पेट में जलन और कब्ज पैदा नहीं करता।",
    "description_en": "Highly absorbable form of iron suitable for sensitive stomachs.",
    "group": "HEMATINIC",
    "brand_examples": "Fefol Liquid, Hemfer"
  },
  {
    "salt": "Multivitamin with Ginseng Extract",
    "description_hi": "वर्किंग महिलाओं और गृहिणियों में ऊर्जा, सहनशक्ति और फोकस बढ़ाने के लिए।",
    "description_en": "Combines essential vitamins with adaptogens to combat fatigue.",
    "group": "NUTRITIONAL",
    "brand_examples": "Revital Woman Liquid, Ginseng Syrup"
  },
  {
    "salt": "Ayurvedic Skin Lightening Herbs (Manjistha, Khadir, Chandan)",
    "description_hi": "चेहरे के काले धब्बे (Pigmentation), झाइयां और त्वचा का कालापन दूर करने में।",
    "description_en": "Promotes clear skin by reducing pigmentation and flushing toxins.",
    "group": "AYURVEDIC / DERMATOLOGY",
    "brand_examples": "Manjisthadi Kwath, Mahamanjisthadi"
  },
  {
    "salt": "Ayurvedic Joint Care Herbs (Shallaki, Guggulu, Rasna)",
    "description_hi": "घुटनों के दर्द, गठिया (Arthritis) और जोड़ों की जकड़न से राहत दिलाने के लिए।",
    "description_en": "Herbal anti-inflammatory syrup for joint mobility and arthritis relief.",
    "group": "AYURVEDIC / ORTHOPEDICS",
    "brand_examples": "Rumalaya, Orthofit Syrup, Peandex"
  },
  {
    "salt": "Ambroxol, Terbutaline, Guaiphenesin",
    "description_hi": "सांस की नली की सूजन और अस्थमा/एलर्जी के कारण होने वाली सांस की तकलीफ में।",
    "description_en": "Bronchodilator and expectorant for chest congestion and tightness.",
    "group": "PULMONOLOGY",
    "brand_examples": "Mucolite SR, Ventorlin Expectorant"
  },
  {
    "salt": "Folic Acid, Vitamin B12",
    "description_hi": "गर्भावस्था के शुरुआती महीनों में बच्चे के दिमागी विकास और न्यूरल डिफेक्ट से बचाव हेतु।",
    "description_en": "Essential B-vitamins for fetal brain development and anemia prevention.",
    "group": "GYNAECOLOGY / PRENATAL",
    "brand_examples": "Folvite Liquid, Fol12"
  },
  {
    "salt": "Piracetam",
    "description_hi": "माइग्रेन, सिरचक्कर (Vertigo) और तंत्रिका तंत्र (Nervous System) सुधार के लिए।",
    "description_en": "Nootropic syrup to improve cognitive function and microcirculation.",
    "group": "NEUROLOGY",
    "brand_examples": "Nootropil, Normabrain"
  },
  {
    "salt": "Ayurvedic Thyroid Balance Herbs (Kanchanar, Varun, Guggulu)",
    "description_hi": "हाइपोथायराइड (Hypothyroidism) के लक्षणों, वजन बढ़ने और गले की सूजन को कम करने में।",
    "description_en": "Herbal support for healthy thyroid gland function and metabolic rate.",
    "group": "AYURVEDIC / ENDOCRINOLOGY",
    "brand_examples": "Kanchanar Guggulu Liquid, Thyrocare Herbal Syrup"
  },
  {
    "salt": "Magnesium Hydroxide, Liquid Paraffin",
    "description_hi": "गर्भावस्था के दौरान सुरक्षित रूप से मल को नरम कर कब्ज दूर करने के लिए।",
    "description_en": "Safe laxative combination used during pregnancy for constipation.",
    "group": "GASTROENTEROLOGY / PREGNANCY CARE",
    "brand_examples": "Cremaffin Neutral, Laxil"
  },
  //---------------------------------- Himalaya product List ---------------------------------
  
  {
    "salt": "Ayurvedic Uterine Care Herbs (Ashoka, Lodhra, Shatavari)",
    "description_hi": "मासिक धर्म की अनियमितता, पेट दर्द, और हार्मोनल असंतुलन को ठीक करने में मददगार।",
    "description_en": "Regulates menstrual cycles and supports overall uterine health.",
    "group": "AYURVEDIC / WOMEN'S HEALTH",
    "brand_examples": "Himalaya EvesCare (Tab & Syrup), M2 Tone (Tab & Syrup)"
  },
  {
    "salt": "Ayurvedic Leucorrhea Formula (Woodfordia, Asparagus, Boerhaavia)",
    "description_hi": "महिलाओं में सफेद पानी (Leucorrhea) और कमर दर्द की समस्या में राहत।",
    "description_en": "Treats excessive vaginal discharge and associated backache.",
    "group": "AYURVEDIC / GYNAECOLOGY",
    "brand_examples": "Himalaya Lukol (Tab & Syrup)"
  },
  {
    "salt": "Shatavari (Asparagus racemosus) Extract",
    "description_hi": "स्तनपान कराने वाली माताओं में दूध का उत्पादन बढ़ाने और हार्मोन संतुलित करने हेतु।",
    "description_en": "Galactagogue that improves lactation in breast-feeding mothers.",
    "group": "AYURVEDIC / LACTATION & WOMEN'S HEALTH",
    "brand_examples": "Himalaya Shatavari (Tab & Syrup)"
  },
  {
    "salt": "Ayurvedic Liver Care Formula (Caper Bush, Chicory, Arjuna, Kasani)",
    "description_hi": "फैटी लिवर, पाचन सुधारने, भूख बढ़ाने और लिवर को डिटॉक्स करने के लिए।",
    "description_en": "Protects the liver, improves digestion, and stimulates appetite.",
    "group": "AYURVEDIC / HEPATOLOGY",
    "brand_examples": "Himalaya Liv.52 (Tab & Syrup)"
  },
  {
    "salt": "Ayurvedic Concentrated Liver Care Formula",
    "description_hi": "लिवर के गंभीर विकारों, पीलिया और दवाओं के दुष्प्रभाव से लिवर बचाने हेतु।",
    "description_en": "Double strength formula for enhanced liver protection and recovery.",
    "group": "AYURVEDIC / HEPATOLOGY",
    "brand_examples": "Himalaya Liv.52 DS (Tab & Syrup)"
  },
  {
    "salt": "Ayurvedic Renal Care Formula (Pashanbheda, Shilapushpa, Punarnava)",
    "description_hi": "गुर्दे की पथरी को गलाने और यूरिन इन्फेक्शन (UTI) में जलन दूर करने के लिए।",
    "description_en": "Helps break down kidney stones and relieves urinary tract infections.",
    "group": "AYURVEDIC / UROLOGY",
    "brand_examples": "Himalaya Cystone (Tab & Syrup), Cystone Forte (Tab)"
  },
  {
    "salt": "Ayurvedic Natural Blood Purifier (Neem, Indian Madder, Bakuchi)",
    "description_hi": "खून साफ करने, कील-मुहांसे (Acne) और त्वचा के दाग-धब्बे ठीक करने के लिए।",
    "description_en": "Purifies blood, detoxifies the body, and improves skin clarity.",
    "group": "AYURVEDIC / DERMATOLOGY",
    "brand_examples": "Himalaya Purim (Tab & Syrup)"
  },
  {
    "salt": "Ayurvedic Anti-Cough Formula (Tulsi, Mulethi, Vasaka)",
    "description_hi": "बिना सुस्ती/नींद के सूखी और बलगम वाली दोनों तरह की खांसी में तुरंत आराम।",
    "description_en": "Non-drowsy natural formula for relief from dry and wet cough.",
    "group": "AYURVEDIC / PULMONOLOGY",
    "brand_examples": "Himalaya Koflet (Tab & Syrup), Koflet Lozenges"
  },
  {
    "salt": "Ayurvedic Memory & Brain Tonic (Thyme-Leaved Gratiola, Indian Pennywort)",
    "description_hi": "मानसिक थकान, तनाव कम करने, याददाश्त और ध्यान केंद्रित करने की क्षमता बढ़ाने में।",
    "description_en": "Enhances memory, concentration, and reduces mental fatigue.",
    "group": "AYURVEDIC / NEUROLOGY",
    "brand_examples": "Himalaya Mentat (Tab & Syrup)"
  },
  {
    "salt": "Ayurvedic Joint Care Formula (Shallaki, Guggulu, Rasna)",
    "description_hi": "जोड़ों के दर्द, गठिया (Arthritis) और शरीर की जकड़न में आराम देने हेतु।",
    "description_en": "Relieves joint pain, inflammation, and restores mobility.",
    "group": "AYURVEDIC / ORTHOPEDICS",
    "brand_examples": "Himalaya Rumalaya (Tab & Syrup), Rumalaya Forte (Tab)"
  },
  {
    "salt": "Ayurvedic Natural Antacid & Anti-Ulcer (Guduchi, Yashtimadhu)",
    "description_hi": "पेट की तेज जलन, खट्टी डकारें, एसिडिटी और गैस की समस्या से राहत।",
    "description_en": "Soothes acid reflux, heartburn, and promotes gastric health.",
    "group": "AYURVEDIC / GASTROENTEROLOGY",
    "brand_examples": "Himalaya Himcocid (Tab & Syrup)"
  },
  {
    "salt": "Ayurvedic Laxative & Bowel Regulator (Senna, Haritaki, Fennel)",
    "description_hi": "पुरानी कब्ज, पेट भारी रहने और आंतों की सफाई के लिए।",
    "description_en": "Relieves chronic constipation and promotes smooth bowel movement.",
    "group": "AYURVEDIC / LAXATIVE",
    "brand_examples": "Himalaya Herbolax (Tab & Syrup)"
  },
  {
    "salt": "Ashwagandha (Withania somnifera) Extract",
    "description_hi": "दिनभर की थकान, तनाव, चिंता और कमजोरी दूर कर इम्युनिटी बढ़ाने हेतु।",
    "description_en": "Rejuvenates mind and body, reduces stress, and boosts immunity.",
    "group": "AYURVEDIC / GENERAL WELLNESS",
    "brand_examples": "Himalaya Ashwagandha (Tab & Syrup)"
  },
  {
    "salt": "Brahmi (Bacopa monnieri) Extract",
    "description_hi": "दिमाग को शांत रखने, चिंता कम करने और सीखने की क्षमता को बेहतर करने के लिए।",
    "description_en": "Improves cognitive health, alertness, and reduces anxiety.",
    "group": "AYURVEDIC / NEUROLOGY",
    "brand_examples": "Himalaya Brahmi (Tab & Syrup)"
  },
  {
    "salt": "Ayurvedic Anti-Diabetic Herbs (Meshashringi, Karela, Vijaysar)",
    "description_hi": "ब्लड शुगर के स्तर को नियंत्रित करने और मिठास की तलब कम करने हेतु।",
    "description_en": "Helps manage glucose levels and improves pancreatic health.",
    "group": "AYURVEDIC / ENDOCRINOLOGY",
    "brand_examples": "Himalaya Diabecon (Tab & Syrup), Diabecon DS (Tab)"
  },
  {
    "salt": "Ayurvedic Lipid & Weight Management Herbs (Vrikshamla, Guggulu)",
    "description_hi": "मेटाबॉलिज्म बढ़ाकर वजन नियंत्रित करने और कोलेस्ट्रॉल कम करने में मददगार।",
    "description_en": "Promotes weight management and healthy cholesterol levels.",
    "group": "AYURVEDIC / METABOLIC CARE",
    "brand_examples": "Himalaya AyurSlim (Cap/Tab & Syrup)"
  },
  {
    "salt": "Ayurvedic Anti-Diarrheal Formula (Kutaja, Dhataki, Musta)",
    "description_hi": "बार-बार दस्त, पेट में मरोड़ और आंतों के इन्फेक्शन को ठीक करने के लिए।",
    "description_en": "Relieves diarrhea, dysentery, and soothes intestinal lining.",
    "group": "AYURVEDIC / GASTROENTEROLOGY",
    "brand_examples": "Himalaya Diarex (Tab & Syrup)"
  },
  {
    "salt": "Ayurvedic Digestive Enzymes (Triphala, Ginger, Pipali)",
    "description_hi": "खाना ठीक से न पचना, पेट फूलना (Bloating) और भूख न लगने की शिकायत दूर करने में।",
    "description_en": "Enhances digestion and eliminates flatulence and abdominal discomfort.",
    "group": "AYURVEDIC / GASTROENTEROLOGY",
    "brand_examples": "Himalaya Gasex (Tab & Syrup)"
  },
  {
    "salt": "Ayurvedic Immunity & Anti-Viral Herbs (Guduchi/Giloy Extract)",
    "description_hi": "बार-बार होने वाले बुखार, इन्फेक्शन से बचाव और इम्युनिटी सुधारने में।",
    "description_en": "Immune booster that builds resistance against recurrent infections.",
    "group": "AYURVEDIC / IMMUNOLOGY",
    "brand_examples": "Himalaya Guduchi (Tab & Syrup)"
  },
  {
    "salt": "Ayurvedic Skin Allergy Relief Herbs (Haridra/Turmeric Extract)",
    "description_hi": "त्वचा की एलर्जी, खुजली और चकत्तों को अंदर से ठीक करने के लिए।",
    "description_en": "Natural anti-allergic formulation for chronic skin conditions.",
    "group": "AYURVEDIC / DERMATOLOGY",
    "brand_examples": "Himalaya Haridra (Tab & Syrup)"
  },
  {
    "salt": "Amalaki (Emblica officinalis/Amla) Extract",
    "description_hi": "विटामिन C का प्राकृतिक स्रोत, जो त्वचा में चमक लाता है और इम्युनिटी बढ़ाता है।",
    "description_en": "Rich source of Vitamin C, acts as an antioxidant and skin tonic.",
    "group": "AYURVEDIC / NUTRITIONAL",
    "brand_examples": "Himalaya Amalaki (Tab & Syrup)"
  },
  {
    "salt": "Neem (Azadirachta indica) Extract",
    "description_hi": "बैक्टीरियल इन्फेक्शन से बचाव, खून की सफाई और त्वचा की रंगत सुधारने के लिए।",
    "description_en": "Antibacterial and blood purifier, keeps skin healthy and acne-free.",
    "group": "AYURVEDIC / DERMATOLOGY",
    "brand_examples": "Himalaya Neem (Tab & Syrup)"
  },
  {
    "salt": "Gokshura (Tribulus terrestris) Extract",
    "description_hi": "यूरिनरी इन्फेक्शन, पथरी और शारीरिक स्टैमिना/ऊर्जा बढ़ाने में उपयोगी।",
    "description_en": "Supports urinary tract health and improves overall vitality.",
    "group": "AYURVEDIC / UROLOGY",
    "brand_examples": "Himalaya Gokshura (Tab & Syrup)"
  },
  {
    "salt": "Ayurvedic Stress Relief & Sleep Care (Tagara Extract)",
    "description_hi": "अनिद्रा (Insomnia), मानसिक घबराहट और चिंता की समस्या दूर करने के लिए।",
    "description_en": "Promotes natural sleep patterns and relieves nervous anxiety.",
    "group": "AYURVEDIC / NEUROLOGY",
    "brand_examples": "Himalaya Tagara (Tab & Syrup)"
  },
  {
    "salt": "Lasuna (Garlic/Allium sativum) Extract",
    "description_hi": "कोलेस्ट्रॉल नियंत्रित करने, ब्लड प्रेशर संतुलित रखने और दिल की सेहत के लिए।",
    "description_en": "Supports cardiovascular health and helps maintain healthy cholesterol.",
    "group": "AYURVEDIC / CARDIOLOGY",
    "brand_examples": "Himalaya Lasuna (Tab & Syrup)"
  },

//----------------------------  डाबर (Dabur) के सबसे प्रमुख और मार्केट में नियमित रूप से बिकने वाले 30 आयुर्वेदिक व हेल्थ प्रोडक्ट्स की सूची


  {
    "salt": "Amla, Giloy, Ashwagandha, Pippali & 40+ Herbs",
    "description_hi": "रोग प्रतिरोधक क्षमता (Immunity) बढ़ाता है, मौसमी बीमारियों से बचाव करता है और शारीरिक शक्ति देता है।",
    "description_en": "Boosts immunity, protects against seasonal infections, and enhances overall physical strength and vitality.",
    "group": "IMMUNITY & GENERAL HEALTH / RASAYANA",
    "brand_examples": "Dabur Chyawanprash (Awaleha)"
  },
  {
    "salt": "Shuddha Shilajit, Chandraprabha, Lauh Bhasma",
    "description_hi": "यूरिनरी ट्रैक्ट इंफेक्शन (UTI), मूत्र संबंधी विकार, गुर्दे की कार्यप्रणाली और कमजोरी दूर करने में सहायक।",
    "description_en": "Helps in treating urinary tract infections (UTI), urinary disorders, kidney function support, and general debility.",
    "group": "URINARY & RENAL CARE / GUTIKA",
    "brand_examples": "Dabur Chandraprabha Vati"
  },
  {
    "salt": "Honey, Tulsi, Mulethi, Banapsha, Sunthi",
    "description_hi": "सूखी और गीली खांसी, गले की खराश और श्वसन संक्रमण से बिना सुस्ती लाए प्राकृतिक राहत प्रदान करता है।",
    "description_en": "Provides natural relief from dry and wet cough, throat irritation, and chest congestion without drowsiness.",
    "group": "COUGH & COLD / AYURVEDIC COUGH SYRUP",
    "brand_examples": "Dabur Honitus Cough Syrup"
  },
  {
    "salt": "Raw Purified Honey (100% Pure)",
    "description_hi": "वजन नियंत्रण, पाचन क्रिया में सुधार, इम्युनिटी बढ़ाने और प्राकृतिक मिठास के रूप में उपयोगी।",
    "description_en": "Aids in weight management, improves digestion, boosts immunity, and serves as a natural health sweetener.",
    "group": "NUTRITION & HEALTH FOOD",
    "brand_examples": "Dabur Honey"
  },
  {
    "salt": "Purified Shilajit Extract",
    "description_hi": "शारीरिक ऊर्जा, सहनशक्ति, पुरुषों की जीवन शक्ति और कमजोरी दूर करने के लिए अति उत्तम।",
    "description_en": "Enhances stamina, physical energy, vigor, and helps overcome chronic weakness and fatigue.",
    "group": "STAMINA & VITALITY / MINERALS",
    "brand_examples": "Dabur Shilajit Gold / Pure Shilajit Capsules"
  },
  {
    "salt": "Ashwagandha, Gold, Kesar, Shilajit",
    "description_hi": "पुरुषों में कमजोरी, तनाव दूर करने, शारीरिक शक्ति और जीवन शक्ति (Vigor & Vitality) बढ़ाने में सहायक।",
    "description_en": "Combats stress, weakness, and fatigue while restoring energy, stamina, and physical vitality in men.",
    "group": "MEN'S HEALTH & REJUVENATOR",
    "brand_examples": "Dabur Stresscom / Shilajit Gold Capsules"
  },
  {
    "salt": "Ashwagandha Extract (Withania somnifera)",
    "description_hi": "तनाव, चिंता और मानसिक थकान को कम करता है तथा नींद और मांसपेशियों की ताकत में सुधार करता है।",
    "description_en": "Reduces stress, anxiety, and fatigue; improves muscle strength, focus, and overall vitality.",
    "group": "STRESS RELIEF & ADAPTOGEN",
    "brand_examples": "Dabur Ashwagandha Churna / Tablets"
  },
  {
    "salt": "Ashwagandha, Chitrak, Musli, Rasna (Self-generated Alcohol)",
    "description_hi": "तंत्रिका तंत्र की कमजोरी, मानसिक तनाव, थकान और थकान के बाद रिकवरी में उपयोगी।",
    "description_en": "Relieves nervous debility, mental stress, physical exhaustion, and acts as a tonic for recovery.",
    "group": "NERVINE TONIC / ASAVA ARISHTA",
    "brand_examples": "Dabur Ashwagandharishta"
  },
  {
    "salt": "Dashamoola (10 Roots Complex), Draksha, Honey",
    "description_hi": "महिलाओं में प्रसव के बाद की कमजोरी, थकान, कमर दर्द और शारीरिक शक्ति बढ़ाने में सहायक।",
    "description_en": "Restores strength in women post-childbirth, reduces backache, fatigue, and acts as a health tonic.",
    "group": "POST-PARTUM & WOMEN'S HEALTH TONIC",
    "brand_examples": "Dabur Dashmularishta"
  },
  {
    "salt": "Ashoka Bark, Lodhra, Dhataki, Chandan",
    "description_hi": "महिलाओं में मासिक धर्म की अनियमितता, अत्यधिक रक्तस्राव और ऐंठन से राहत दिलाता है।",
    "description_en": "Helps regulate menstrual cycles, manages heavy bleeding, and reduces abdominal cramps in women.",
    "group": "WOMEN'S UTERINE TONIC",
    "brand_examples": "Dabur Ashokarishta"
  },
  {
    "salt": "Castor Oil, Senna, Haritaki, Ajwain",
    "description_hi": "पुरानी कब्ज, पेट साफ न होना और पेट की गैस से रात भर में सुरक्षित राहत देता है।",
    "description_en": "Provides overnight relief from chronic constipation, hard stools, and promotes smooth bowel movement.",
    "group": "LAXATIVE & DIGESTIVE HEALTH",
    "brand_examples": "Dabur Nityam Churna / Tablets"
  },
  {
    "salt": "Pudina Satva (Mentha Oil Extract)",
    "description_hi": "पेट दर्द, गैस, अपच, एसिडिटी और पेट फूलने की समस्या में तुरंत राहत प्रदान करता है।",
    "description_en": "Provides quick action relief from stomach ache, gas, indigestion, acidity, and bloating.",
    "group": "CARMINATIVE & CARDIAC DIGESTIVE",
    "brand_examples": "Dabur Pudin Hara (Capsules / Liquid)"
  },
  {
    "salt": "Svarjikshtara, Nimbukamlam, Ayurvedic Digestive Salts",
    "description_hi": "एसिडिटी, पेट की जलन और खट्टी डकारों से मात्र 6 सेकंड में राहत देता है।",
    "description_en": "Provides fast relief from acidity, heartburn, and sour stomach in seconds.",
    "group": "ANTACID / EFFERVESCENT GRANULES",
    "brand_examples": "Dabur Hajmola Fizzy / Dabur Nature Care"
  },
  {
    "salt": "Kadam (Fermented Digestive Ayurvedic Herbs)",
    "description_hi": "पाचन शक्ति बढ़ाता है, भूख में सुधार करता है और भारी भोजन के बाद पेट को हल्का रखता है।",
    "description_en": "Stimulates appetite, aids digestion, and prevents heaviness after meals.",
    "group": "DIGESTIVE TONIC / ASAVA",
    "brand_examples": "Dabur Abhayarishta"
  },
  {
    "salt": "Haritaki, Bibhitaki, Amalaki (Equal Parts)",
    "description_hi": "पाचन तंत्र को ठीक करता है, कब्ज दूर करता है, आंखों और त्वचा की सेहत में सुधार करता है।",
    "description_en": "Supports digestive cleansing, relieves mild constipation, and promotes eye and skin health.",
    "group": "DIGESTIVE CLEANSER & DETOX / CHURNA",
    "brand_examples": "Dabur Triphala Churna / Juice"
  },
  {
    "salt": "Giloy Extract (Tinospora cordifolia)",
    "description_hi": "बार-बार होने वाले बुखार, इंफेक्शन से बचाव, इम्युनिटी बढ़ाने और प्लेटलेट्स सुधारने में मददगार।",
    "description_en": "Helps manage recurrent fevers, boosts immunity, improves platelet count, and purifies blood.",
    "group": "IMMUNOMODULATOR & ANTIPYRETIC",
    "brand_examples": "Dabur Giloy Ghanvati / Neem-Giloy Juice"
  },
  {
    "salt": "Guggulu, Triphala, Piperine",
    "description_hi": "वजन घटाने, कोलेस्ट्रॉल नियंत्रित करने और शरीर से टॉक्सिन्स बाहर निकालने में सहायक।",
    "description_en": "Aids in weight management, supports healthy lipid/cholesterol levels, and promotes metabolic detox.",
    "group": "WEIGHT MANAGEMENT & METABOLISM",
    "brand_examples": "Dabur Triphala Guggulu"
  },
  {
    "salt": "Guggulu, Rasna, Eranda, Ashwagandha",
    "description_hi": "जोड़ों के दर्द, गठिया (Arthritis), सूजन और जकड़न को कम करने में असरदार।",
    "description_en": "Relieves joint pain, stiffness, inflammation, and symptoms associated with osteoarthritis and gout.",
    "group": "ANTI-INFLAMMATORY & JOINT CARE",
    "brand_examples": "Dabur Yograj Guggulu"
  },
  {
    "salt": "Gandhak (Purified Sulphur), Herbs",
    "description_hi": "त्वचा के रोग, खुजली, मुहांसे, दाद और रक्त शोधन (Blood purification) के लिए।",
    "description_en": "Useful in skin disorders, chronic itching, eczema, acne, and acts as an internal blood purifier.",
    "group": "SKIN CARE & BLOOD PURIFIER",
    "brand_examples": "Dabur Gandhak Rasayan"
  },
  {
    "salt": "Brahmi (Bacopa monnieri) Extract",
    "description_hi": "याददाश्त बढ़ाने, एकाग्रता में सुधार करने, और मानसिक तनाव को कम करने में उपयोगी।",
    "description_en": "Enhances memory retention, improves focus, alertness, and calms the central nervous system.",
    "group": "BRAIN TONIC & NOOTROPIC",
    "brand_examples": "Dabur Shankhpushpi / Brahmi Tablets"
  },
  {
    "salt": "Shankhpushpi, Brahmi, Nimbu Extract",
    "description_hi": "बच्चों और वयस्कों में मानसिक एकाग्रता, याददाश्त बढ़ाने और मानसिक थकान दूर करने में मददगार।",
    "description_en": "Improves memory power, learning ability, and mental sharpness in children and students.",
    "group": "MEMORY ENHANCER / SYRUP",
    "brand_examples": "Dabur Shankhpushpi Syrup"
  },
  {
    "salt": "Kalyanaka Ghrita, Brahmi, Vacha",
    "description_hi": "याददाश्त, वाणी में स्पष्टता, और न्यूरोलॉजिकल स्वास्थ्य के सुधार के लिए औषधीय घी।",
    "description_en": "Medicated ghee used for memory improvement, cognitive health, speech clarity, and nervous support.",
    "group": "MEDICATED GHEE / BRAIN HEALTH",
    "brand_examples": "Dabur Brahmi Ghrit"
  },
  {
    "salt": "Amla, Bhringraj, Brahmi Oil",
    "description_hi": "बालों को झड़ने से रोकता है, समय से पहले सफेद होने से बचाता है और बालों को मजबूत बनाता है।",
    "description_en": "Strengthens hair roots, reduces hair fall, delays premature greying, and nourishes scalp.",
    "group": "HAIR CARE & SCALP HEALTH",
    "brand_examples": "Dabur Amla Hair Oil"
  },
  {
    "salt": "Laung (Clove) Oil, Pudina, Tomar, Babul",
    "description_hi": "दांतों के दर्द, मसूड़ों की सूजन, सांसों की बदबू और कैविटी से प्राकृतिक सुरक्षा प्रदान करता है।",
    "description_en": "Protects against toothache, bleeding gums, bad breath, and plaque with antibacterial herbal ingredients.",
    "group": "ORAL HYGIENE & DENTAL CARE",
    "brand_examples": "Dabur Red Paste / Red Tooth Powder"
  },
  {
    "salt": "100% Pure Steam-Distilled Damask Rose Water",
    "description_hi": "त्वचा को प्राकृतिक नमी देता है, क्लींजिंग करता है और आंखों की जलन दूर करने में सहायक।",
    "description_en": "Natural skin toner, cleanses pores, hydrates skin, and acts as a soothing agent for face and eyes.",
    "group": "PERSONAL CARE & SKIN HYDRATION",
    "brand_examples": "Dabur Gulabari Rose Water"
  },
  {
    "salt": "Arjuna Bark Extract (Terminalia arjuna)",
    "description_hi": "हृदय की मांसपेशियों को मजबूत करता है, ब्लड प्रेशर को नियंत्रित रखता है और हार्ट केयर में मदद करता है।",
    "description_en": "Supports cardiovascular health, strengthens heart muscles, and aids in maintaining normal blood pressure.",
    "group": "CARDIAC CARE / HERBAL TABLET",
    "brand_examples": "Dabur Arjunarishta / Arjuna Tablets"
  },
  {
    "salt": "Anantamul, Manjistha, Neem, Khadir",
    "description_hi": "खून साफ करता है, चेहरे के कील-मुंहासों और फुंसियों को खत्म कर प्राकृतिक निखार लाता है।",
    "description_en": "Purifies blood internally, eliminates acne, boils, and improves overall skin clarity and complexion.",
    "group": "BLOOD PURIFIER & ANTI-ACNE",
    "brand_examples": "Dabur Saribadyasava"
  },
  {
    "salt": "Punarnava, Daruharidra, Haritaki",
    "description_hi": "फैटी लिवर, पीलिया (Jaundice), और लिवर के इन्फेक्शन से बचाव और पाचन सुधार में कारगर।",
    "description_en": "Protects against fatty liver, jaundice, sluggish liver, and aids in detoxification of hepatic cells.",
    "group": "HEPATOPROTECTIVE / LIVER CARE",
    "brand_examples": "Dabur Punarnavarishta / Hepano"
  },
  {
    "salt": "Karela (Bitter Gourd) & Jamun (Black Plum) Juice",
    "description_hi": "ब्लड शुगर लेवल (Diabetes) को प्राकृतिक रूप से नियंत्रित करने और पाचन दुरुस्त करने में सहायक।",
    "description_en": "Helps manage glucose levels naturally, supports pancreatic function, and improves digestion.",
    "group": "DIABETIC CARE & METABOLIC HEALTH",
    "brand_examples": "Dabur Karela Jamun Juice"
  },
  {
    "salt": "Draksha (Raisins), Self-generated Fermented Alcohol",
    "description_hi": "शारीरिक कमजोरी, खून की कमी (Anemia), भूख न लगना और सांस की बीमारियों में फ़ायदेमंद।",
    "description_en": "Helps relieve physical exhaustion, mild anemia, loss of appetite, and improves respiratory strength.",
    "group": "GENERAL TONIC / ASAVA",
    "brand_examples": "Dabur Drakshasava"
  },

  //---------------------------मैनकाइंड फार्मा (Mankind Pharma) के सबसे प्रमुख और मार्केट में नियमित रूप से बिकने वाले 30 एलोपैथिक व ओवर-द-काउंटर (OTC) प्रोडक्ट्स की सूची

  {
    "salt": "Sildenafil Citrate",
    "description_hi": "पुरुषों में इरेक्टाइल डिस्फंक्शन (लिंग में तनाव की कमी) के इलाज और रक्त प्रवाह बढ़ाने में सहायक।",
    "description_en": "Used for the treatment of erectile dysfunction in men by increasing blood flow to the penile region.",
    "group": "MEN'S HEALTH / PDE5 INHIBITOR",
    "brand_examples": "Manforce 50mg / 100mg"
  },
  {
    "salt": "Levonorgestrel (1.5mg)",
    "description_hi": "असुरक्षित यौन संबंध के 72 घंटे के भीतर अवांछित गर्भ से बचाव के लिए आपातकालीन गर्भनिरोधक गोली।",
    "description_en": "Emergency contraceptive pill used within 72 hours of unprotected sex to prevent unintended pregnancy.",
    "group": "CONTRACEPTIVE / WOMEN'S HEALTH",
    "brand_examples": "Unwanted-72"
  },
  {
    "salt": "Telmisartan (40mg)",
    "description_hi": "उच्च रक्तचाप (High Blood Pressure) को नियंत्रित करने और दिल के दौरे व स्ट्रोक के जोखिम को कम करने के लिए।",
    "description_en": "Used to treat high blood pressure (hypertension) and reduce the risk of cardiovascular events.",
    "group": "ANTIHYPERTENSIVE / ARB",
    "brand_examples": "Telmikind 40"
  },
  {
    "salt": "Telmisartan + Amlodipine",
    "description_hi": "उन मरीजों के लिए संयोजन दवा जिनका ब्लड प्रेशर एक दवा से नियंत्रित नहीं होता।",
    "description_en": "Combination medication for effective control of high blood pressure when monotherapy is insufficient.",
    "group": "ANTIHYPERTENSIVE COMBINATION",
    "brand_examples": "Telmikind-AM"
  },
  {
    "salt": "Amlodipine (5mg)",
    "description_hi": "हाई ब्लड प्रेशर और सीने के दर्द (एंजाइना) के इलाज के लिए इस्तेमाल होने वाली दवा।",
    "description_en": "Calcium channel blocker used to treat high blood pressure and chest pain (angina).",
    "group": "ANTIHYPERTENSIVE / CALCIUM CHANNEL BLOCKER",
    "brand_examples": "Amlokind 5"
  },
  {
    "salt": "Atorvastatin (10mg)",
    "description_hi": "शरीर में खराब कोलेस्ट्रॉल (LDL) को कम करने और हृदय रोगों से बचाव में सहायक।",
    "description_en": "Statins used to lower bad cholesterol (LDL) and triglycerides to prevent heart attacks.",
    "group": "LIPID-LOWERING / STATIN",
    "brand_examples": "Atorkind 10"
  },
  {
    "salt": "Pantoprazole (40mg)",
    "description_hi": "पेट में अत्यधिक एसिड, एसिडिटी, सीने में जलन और पेप्टिक अल्सर से राहत दिलाता है।",
    "description_en": "Proton pump inhibitor (PPI) that reduces stomach acid, treating acidity, GERD, and ulcers.",
    "group": "ANTACID / PPI",
    "brand_examples": "Panakind 40 / Pantokind"
  },
  {
    "salt": "Rabeprazole + Domperidone",
    "description_hi": "एसिडिटी, सीने में जलन, पेट फूलने और मतली/उल्टी की समस्या के लिए संयोजन कैप्सूल।",
    "description_en": "Relieves severe acidity, GERD, bloating, nausea, and acid reflux.",
    "group": "ANTACID & ANTIEMETIC COMBINATION",
    "brand_examples": "Rabekind-DSR"
  },
  {
    "salt": "Voglibose (0.2mg / 0.3mg)",
    "description_hi": "टाइप-2 डायबिटीज के मरीजों में भोजन के बाद अचानक बढ़ने वाली शुगर को नियंत्रित करता है।",
    "description_en": "Anti-diabetic drug used to control post-meal blood glucose levels in Type-2 diabetes.",
    "group": "ANTI-DIABETIC / ALPHA-GLUCOSIDASE INHIBITOR",
    "brand_examples": "Voglikind 0.2 / 0.3"
  },
  {
    "salt": "Glimepiride + Metformin",
    "description_hi": "टाइप-2 डायबिटीज के मरीजों में ब्लड शुगर के स्तर को प्रभावी ढंग से कम करने वाली संयोजन दवा।",
    "description_en": "Combination medication used to effectively lower blood sugar levels in Type-2 diabetes.",
    "group": "ANTI-DIABETIC COMBINATION",
    "brand_examples": "Glimekind-M"
  },
  {
    "salt": "Montelukast + Levocetirizine",
    "description_hi": "एलर्जी, बहती नाक, छींकने, खुजली और अस्थमा के लक्षणों से राहत प्रदान करता है।",
    "description_en": "Provides relief from allergic rhinitis, sneezing, runny nose, watery eyes, and asthma symptoms.",
    "group": "ANTI-ALLERGIC & ANTI-ASTHMATIC",
    "brand_examples": "Monticope / Mahagraf"
  },
  {
    "salt": "Levocetirizine (5mg)",
    "description_hi": "त्वचा की एलर्जी, पित्ती (Urticaria), छींक और सर्दी-जुकाम के लक्षणों को कम करता है।",
    "description_en": "Antihistamine used to relieve allergy symptoms such as hives, runny nose, and itching.",
    "group": "ANTIHISTAMINE / ANTI-ALLERGIC",
    "brand_examples": "Lecope"
  },
  {
    "salt": "Paracetamol (650mg)",
    "description_hi": "तेज बुखार और हर तरह के शारीरिक दर्द (सिरदर्द, शरीर दर्द) से तुरंत राहत देता है।",
    "description_en": "Analgesic and antipyretic used to reduce high fever and mild-to-moderate body pain.",
    "group": "ANALGESIC & ANTIPYRETIC",
    "brand_examples": "Paramax 650 / Parakind 650"
  },
  {
    "salt": "Aceclofenac + Paracetamol + Serratiopeptidase",
    "description_hi": "मांसपेशियों के दर्द, जोड़ों के दर्द, चोट, सूजन और घाव के दर्द को कम करने वाली दवा।",
    "description_en": "Combination pill for fast relief from severe pain, swelling, and inflammation post-injury or surgery.",
    "group": "PAIN RELIEVER & ANTI-INFLAMMATORY",
    "brand_examples": "Zeroadol-SP / Aceclo-S"
  },
  {
    "salt": "Cefixime (200mg)",
    "description_hi": "टाइफाइड, कान-गले का इंफेक्शन, ब्रोंकाइटिस और यूटीआई (UTI) के लिए एंटीबायोटिक।",
    "description_en": "Cephalosporin antibiotic used to treat bacterial infections like UTI, typhoid, and throat infections.",
    "group": "ANTIBIOTIC / CEPHALOSPORIN",
    "brand_examples": "Mahacef 200"
  },
  {
    "salt": "Ofloxacin + Ornidazole",
    "description_hi": "पेट के इंफेक्शन, दस्त (Diarrhea), पेचिश और दांतों के बैक्टीरियल इंफेक्शन में उपयोगी।",
    "description_en": "Used for the treatment of stomach infections, infectious diarrhea, dysentery, and mixed bacterial infections.",
    "group": "ANTIBIOTIC & ANTI-AMOEBIC",
    "brand_examples": "Oflokind-OZ"
  },
  {
    "salt": "Amoxicillin + Clavulanic Acid (625mg)",
    "description_hi": "फेफड़ों, दांतों, त्वचा, गले और छाती में होने वाले गंभीर बैक्टीरियल संक्रमण का इलाज।",
    "description_en": "Broad-spectrum antibiotic used for respiratory tract, dental, skin, and urinary infections.",
    "group": "PENICILLIN ANTIBIOTIC",
    "brand_examples": "Moxikind-CV 625"
  },
  {
    "salt": "Azithromycin (500mg)",
    "description_hi": "गले में खराश, टॉन्सिल, श्वसन तंत्र (RTI) और त्वचा संक्रमण की 3 से 5 दिन की एंटीबायोटिक।",
    "description_en": "Macrolide antibiotic commonly prescribed for respiratory tract, throat, and skin infections.",
    "group": "ANTIBIOTIC / MACROLIDE",
    "brand_examples": "Aziwok 500"
  },
  {
    "salt": "Dydrogesterone (10mg)",
    "description_hi": "गर्भावस्था को बनाए रखने, बार-बार गर्भपात रोकने और अनियमित पीरियड्स के इलाज के लिए।",
    "description_en": "Progestogen hormone used to support pregnancy, prevent recurrent miscarriages, and treat menstrual disorders.",
    "group": "HORMONAL / PROGESTIN",
    "brand_examples": "Dydrokind 10"
  },
  {
    "salt": "Luliconazole (1% w/w)",
    "description_hi": "दाद, खाज, खुजली और जांघों के बीच होने वाले फंगल इंफेक्शन (Jock Itch) के इलाज के लिए क्रीम।",
    "description_en": "Topical antifungal cream effective against ringworm, athlete's foot, and skin fungal infections.",
    "group": "ANTIFUNGAL CREAM",
    "brand_examples": "Lulikind Cream"
  },
  {
    "salt": "Fluconazole (150mg)",
    "description_hi": "त्वचा, नखों और वजाइनल यीस्ट इंफेक्शन को खत्म करने वाली फंगल-विरोधी गोली।",
    "description_en": "Oral antifungal single-dose tablet used for vaginal candidiasis, ringworm, and severe fungal infections.",
    "group": "ANTIFUNGAL TABLET",
    "brand_examples": "Fluka 150"
  },
  {
    "salt": "Ondansetron (4mg)",
    "description_hi": "उल्टी, मतली, जी मिचलाने और मोशन सिकनेस (सफर में उल्टी) को तुरंत रोकता है।",
    "description_en": "Antiemetic drug used to prevent and control nausea and vomiting caused by stomach upset or illness.",
    "group": "ANTIEMETIC",
    "brand_examples": "Ondakind 4"
  },
  {
    "salt": "Vitamin D3 / Cholecalciferol (60,000 IU)",
    "description_hi": "हड्डियों को मजबूत बनाने, जोड़ों के दर्द और विटामिन D की कमी को दूर करने के लिए साप्ताहिक खुराक।",
    "description_en": "High-dose Vitamin D3 supplement used to treat Vitamin D deficiency and improve bone density.",
    "group": "VITAMIN SUPPLEMENT / BONE HEALTH",
    "brand_examples": "D3-Must 60K"
  },
  {
    "salt": "Multivitamins, Minerals & Antioxidants",
    "description_hi": "शरीर में दैनिक पोषण संबंधी कमी को पूरा करने, इम्युनिटी बढ़ाने और ऊर्जा बनाए रखने के लिए।",
    "description_en": "Daily health supplement that combats weakness, boosts immunity, and improves overall vitality.",
    "group": "NUTRITIONAL SUPPLEMENT",
    "brand_examples": "Healthok Capsules / Syrup"
  },
  {
    "salt": "Iron (Ferrous Ascorbate) + Folic Acid",
    "description_hi": "खून की कमी (Anemia) दूर करने, हीमोग्लोबिन बढ़ाने और गर्भावस्था में पोषण के लिए।",
    "description_en": "Iron and folic acid supplement used to treat iron-deficiency anemia and support pregnancy.",
    "group": "HAEMATINIC / IRON SUPPLEMENT",
    "brand_examples": "Ferrokind-M"
  },
  {
    "salt": "hCG (Human Chorionic Gonadotropin) Detection Kit",
    "description_hi": "घर पर ही केवल 5 मिनट में मूत्र के नमूने से सटीक गर्भावस्था जांच (Pregnancy Test)।",
    "description_en": "Home pregnancy test kit that detects hCG hormone in urine for rapid and accurate results.",
    "group": "DIAGNOSTIC / OTC KIT",
    "brand_examples": "Prega News"
  },
  {
    "salt": "Natural Rubber Latex (Textured Condom)",
    "description_hi": "गर्भनिरोधक और यौन संचारित रोगों (STDs) से सुरक्षा के साथ यौन आनंद बढ़ाने के लिए।",
    "description_en": "Provides effective protection against unintended pregnancies and STIs during intercourse.",
    "group": "OTC / CONTRACEPTIVE barrier",
    "brand_examples": "Manforce Condoms (Flavored/Dot Series)"
  },
  {
    "salt": "Polyethylene Glycol + Propylene Glycol Eye Drops",
    "description_hi": "कंप्यूटर/मोबाइल देखने से आंखों में सूखापन (Dry Eyes), जलन और थकावट से राहत।",
    "description_en": "Lubricating eye drops for temporary relief from burning, irritation, and dryness of eyes.",
    "group": "OPHTHALMIC LUBRICANT",
    "brand_examples": "Tearkind Eye Drops"
  },
  {
    "salt": "Diclofenac + Linseed Oil + Menthol + Methyl Salicylate",
    "description_hi": "पीठ दर्द, गर्दन दर्द, जोड़ों के दर्द और मांसपेशियों के खिंचाव से तुरंत राहत देने वाला स्प्रे/जेल।",
    "description_en": "Topical pain relief spray/gel for quick action on muscle pain, sprains, and joint discomfort.",
    "group": "TOPICAL ANALGESIC / PAIN RELIEF",
    "brand_examples": "Kandpaain Relief Gel / Spray"
  },
  {
    "salt": "Chlorhexidine Gluconate (0.2% w/v)",
    "description_hi": "मसूड़ों की सूजन, दांतों में कीड़ा/पायरिया और मुंह के छालों से सुरक्षा के लिए एंटीसेप्टिक माउथवॉश।",
    "description_en": "Antiseptic mouthwash for plaque control, gingivitis, and prevention of mouth infections.",
    "group": "ORAL CARE / ANTISEPTIC MOUTHWASH",
    "brand_examples": "Kinewash Mouthwash"
  },

  //----------------------- मेडिकल स्टोर पर सबसे अधिक बिकने वाले 100 जनरल, कॉस्मेटिक, पर्सनल केयर और बेबी केयर (Non-Medicine) प्रोडक्ट्स की सूची

  {
    "salt": "Diaper Rash Cream (Zinc Oxide + Calendula)",
    "description_hi": "छोटे बच्चों के जांघों पर डायपर की वजह से होने वाले लाल चकत्ते (रैशेज) और जलन से बचाव।",
    "description_en": "Protects baby's sensitive skin from diaper rash, redness, and chafing.",
    "group": "BABY CARE / SKIN PROTECTION",
    "brand_examples": "Himalaya Baby Rash Cream, Sebamed Rash Cream, Desitin"
  },
  {
    "salt": "Absorbent Cotton Wool (Sterilized)",
    "description_hi": "चोट या घाव को साफ करने, ड्रेसिंग करने और कॉस्मेटिक इस्तेमाल के लिए शुद्ध रुई।",
    "description_en": "High-absorbency cotton used for wound dressing, cleaning, and cosmetic use.",
    "group": "SURGICAL & FIRST AID / COTTON",
    "brand_examples": "Dettol Cotton, Tulip Cotton, Local Surgical Cotton Roller"
  },
  {
    "salt": "Baby Feeding Bottle (BPA-Free Polypropylene)",
    "description_hi": "छोटे बच्चों को दूध या पानी पिलाने के लिए सुरक्षित और हानिरहित बीपीए-फ्री बोतल।",
    "description_en": "BPA-free bottle for safe milk and water feeding to infants.",
    "group": "BABY CARE / FEEDING ACCESSORIES",
    "brand_examples": "Pigeon, Mee Mee, Chicco, Philips Avent"
  },
  {
    "salt": "Silicone Baby Nipple (Anti-Colic)",
    "description_hi": "दूध की बोतल के लिए सॉफ्ट सिलिकॉन निप्पल, जो पेट में हवा जाने (Colic) से रोकता है।",
    "description_en": "Soft silicone teats designed to prevent air swallowing and colic in babies.",
    "group": "BABY CARE / FEEDING ACCESSORIES",
    "brand_examples": "Pigeon Nipples, Mee Mee Anti-Colic Nipple"
  },
  {
    "salt": "Baby Wipes (Aloe Vera + Water-Based)",
    "description_hi": "डायपर बदलते समय बच्चे की नाजुक त्वचा को साफ करने के लिए गीली एल्कोहल-मुक्त पट्टियां।",
    "description_en": "Alcohol-free wet wipes for cleaning infant skin during diaper changes.",
    "group": "BABY CARE / HYGIENE",
    "brand_examples": "Himalaya Gentle Wipes, Johnson's Baby Wipes, Pampers Wipes"
  },
  {
    "salt": "Baby Pants / Diapers (Absorbent Polymers)",
    "description_hi": "बच्चों को सूखा रखने और रिसाव रोकने के लिए रातों-रात इस्तेमाल होने वाला पैंट डायपर।",
    "description_en": "High-absorbency disposable diapers for leak protection and baby comfort.",
    "group": "BABY CARE / HYGIENE",
    "brand_examples": "Pampers, MamyPoko Pants, Huggies"
  },
  {
    "salt": "No-Tears Baby Shampoo (Mild Surfactants)",
    "description_hi": "बच्चों के बालों को बिना आंखों में जलन दिए धीरे से साफ करने वाला शैम्पू।",
    "description_en": "Gentle, tear-free shampoo formulation for cleansing infant hair.",
    "group": "BABY CARE / HAIR CARE",
    "brand_examples": "Johnson's Baby Shampoo, Himalaya Gentle Baby Shampoo"
  },
  {
    "salt": "Baby Bath Soap (Mild Moisturizing)",
    "description_hi": "शिशु की कोमल त्वचा की नमी बनाए रखते हुए सफाई करने वाला माइल्ड साबुन।",
    "description_en": "Ultra-mild moisturizing soap bar formulated for delicate baby skin.",
    "group": "BABY CARE / BATH",
    "brand_examples": "Sebamed Baby Cleansing Bar, Johnson's Blossom Soap, Himalaya Baby Soap"
  },
  {
    "salt": "Baby Powder (Talc / Cornstarch Based)",
    "description_hi": "पसीने को सोखने और त्वचा को ताज़ा व सूखा रखने के लिए सुरक्षित बेबी पाउडर।",
    "description_en": "Absorbs excess moisture to keep baby skin cool, soft, and dry.",
    "group": "BABY CARE / SKIN CARE",
    "brand_examples": "Himalaya Baby Powder, Johnson's Baby Powder"
  },
  {
    "salt": "Baby Nourishing Body Lotion",
    "description_hi": "बच्चों की त्वचा को रुखेपन से बचाने और दिनभर नमी बनाए रखने के लिए लोशन।",
    "description_en": "Nourishing daily lotion to prevent dryness in infant skin.",
    "group": "BABY CARE / SKIN CARE",
    "brand_examples": "Chicco Baby Lotion, Himalaya Baby Lotion, Sebamed Lotion"
  },
  {
    "salt": "Adult Diapers (High Absorbency Polymer)",
    "description_hi": "बुजुर्गों या यूरिन न रोक पाने वाले (Incontinence) मरीजों के लिए पैंट या टेप डायपर।",
    "description_en": "Disposable adult diapers for urinary or fecal incontinence management.",
    "group": "PERSONAL HYGIENE / ELDERLY CARE",
    "brand_examples": "Friends Adult Diaper, Lifree, Dignity"
  },
  {
    "salt": "Underpads / Bed Protector Sheets",
    "description_hi": "बिस्तर और गद्दे को नमी व दाग-धब्बों से बचाने वाली डिस्पोजेबल सोखने वाली शीट।",
    "description_en": "Absorbent disposable sheets to protect mattresses from fluids.",
    "group": "PERSONAL HYGIENE / HOSPITAL CARE",
    "brand_examples": "Friends Underpads, Dignity Matte Bed Protector"
  },
  {
    "salt": "Sanitary Pads (XL / XXL Ultra Absorbent)",
    "description_hi": "महिलाओं के मासिक धर्म (Periods) में स्वच्छता और रिसाव से बचाव के लिए नेपकिन।",
    "description_en": "Absorbent sanitary napkins for menstrual hygiene management.",
    "group": "WOMEN HYGIENE / SANITARY CARE",
    "brand_examples": "Whisper Choice / Ultra, Stayfree Secure, Sofy"
  },
  {
    "salt": "Menstrual Cup (Medical Grade Silicone)",
    "description_hi": "पीरियड्स में दोबारा इस्तेमाल होने वाला और इको-फ्रेंडली मेडिकल सिलिकॉन कप।",
    "description_en": "Reusable medical-grade silicone cup for hygienic period protection.",
    "group": "WOMEN HYGIENE / SUSTAINABLE CARE",
    "brand_examples": "Pee Safe Cup, Sirona Menstrual Cup"
  },
  {
    "salt": "Intimate Wash (Lactic Acid + Tea Tree Oil)",
    "description_hi": "महिलाओं के अंतरंग क्षेत्रों का सही pH संतुलन (3.5) बनाए रखने वाला वॉश।",
    "description_en": "Maintains acidic pH balance (3.5) in intimate areas to prevent infections.",
    "group": "WOMEN HYGIENE / INTIMATE CARE",
    "brand_examples": "VWash Plus, Everteen Intimate Wash"
  },
  {
    "salt": "Panty Liners (Cotton Soft Top-sheet)",
    "description_hi": "डेली डिस्चार्ज और पीरियड्स के हल्के दिनों में सूखापन बनाए रखने के लिए पतले पैड।",
    "description_en": "Thin absorbent liners for daily vaginal discharge and light spotting.",
    "group": "WOMEN HYGIENE / DAILY CARE",
    "brand_examples": "Bella Panty Liners, Carefree, Whisper Liners"
  },
  {
    "salt": "Pee Funnel / Female Urination Device",
    "description_hi": "महिलाओं को गंदे सार्वजनिक शौचालयों में खड़े होकर पेशाब करने में मदद करने वाला फनल।",
    "description_en": "Funnel device allowing women to urinate while standing in dirty toilets.",
    "group": "WOMEN HYGIENE / TRAVEL CARE",
    "brand_examples": "PeeBuddy, Sirona Peebuddy"
  },
  {
    "salt": "Toilet Seat Sanitizer Spray",
    "description_hi": "सार्वजनिक शौचालय की सीट पर कीटाणुओं को नष्ट कर UTI संक्रमण से बचाने वाला स्प्रे।",
    "description_en": "Disinfectant spray to sanitize toilet seats before use.",
    "group": "PERSONAL HYGIENE / TRAVEL CARE",
    "brand_examples": "Pee Safe Toilet Seat Spray, Safe4U"
  },
  {
    "salt": "Calamine + Liquid Paraffin Lotion",
    "description_hi": "घमौरी, कीड़े के काटने, धूप की कालिमा और त्वचा की खुजली में ठंडक देने वाला लोशन।",
    "description_en": "Soothing lotion for prickly heat, sunburns, hives, and skin irritation.",
    "group": "COSMETIC SKIN CARE / SOOTHING",
    "brand_examples": "Lacto Calamine, Caladryl Lotion"
  },
  {
    "salt": "Aloe Vera Gel (99% Pure Extract)",
    "description_hi": "चेहरे की नमी, मुंहासों की लाली और सनबर्न को प्राकृतिक रूप से ठीक करने वाला जेल।",
    "description_en": "Multi-purpose gel for hydrating skin, soothing burns, and conditioning hair.",
    "group": "COSMETIC SKIN CARE / NATURAL",
    "brand_examples": "UrbanBotany Aloe Vera, Patanjali Aloe Vera Gel, Wow Aloe Gel"
  },
  {
    "salt": "Sunscreen Lotion / Gel (SPF 50 PA+++)",
    "description_hi": "त्वचा को सूरज की हानिकारक UVA/UVB किरणों से बचाने और टैनिंग रोकने के लिए।",
    "description_en": "Broad-spectrum sunscreen protecting skin against sun damage and tanning.",
    "group": "COSMETIC SKIN CARE / SUN PROTECTION",
    "brand_examples": "Neutrogena UltraSheer, Lotus Herbals Sunblock, La Shield"
  },
  {
    "salt": "Face Wash for Acne (Salicylic Acid 2%)",
    "description_hi": "कील-मुंहासों और तैलीय त्वचा से अतिरिक्त तेल और गंदगी साफ करने वाला फेस वॉश।",
    "description_en": "Exfoliating acne cleanser that cleans pores and reduces excess sebum.",
    "group": "COSMETIC SKIN CARE / FACE WASH",
    "brand_examples": "Cipla Saslic DS, Himalaya Purifying Neem Face Wash, Derma Co"
  },
  {
    "salt": "Gentle Skin Cleanser (Cetyl Alcohol)",
    "description_hi": "संवेदनशील और सूखी त्वचा के लिए बिना साबुन वाला हल्का क्लीन्ज़र।",
    "description_en": "Non-comedogenic, soap-free mild cleanser for sensitive or dry skin.",
    "group": "DERMA CARE / FACE WASH",
    "brand_examples": "Cetaphil Gentle Skin Cleanser, Episoft Cleanser"
  },
  {
    "salt": "Moisturizing Cream (Ceramides + Hyaluronic Acid)",
    "description_hi": "सूखी त्वचा को गहराई से नमी देने और स्किन बैरियर की मरम्मत करने वाली क्रीम।",
    "description_en": "Deep barrier repair moisturizer for dry and damaged skin.",
    "group": "COSMETIC SKIN CARE / MOISTURIZER",
    "brand_examples": "CeraVe Moisturizing Cream, Venice Skin Cream, Venusia Max"
  },
  {
    "salt": "Anti-Dandruff Shampoo (Ketoconazole 2% / Zinc Pyrithione)",
    "description_hi": "सिर की रूसी (डैंड्रफ), फंगल इंफेक्शन और खुजली को दूर करने वाला शैम्पू।",
    "description_en": "Medicated and cosmetic anti-dandruff shampoo for flaking and scalp itching.",
    "group": "COSMETIC HAIR CARE / SCALP CARE",
    "brand_examples": "Scalpe Plus, Head & Shoulders, Nizral Shampoo"
  },
  {
    "salt": "Hair Fall Control Onion Oil",
    "description_hi": "बालों की जड़ों को मजबूत करने और बाल झड़ने से रोकने के लिए तेल।",
    "description_en": "Herbal hair oil formulated to nourish roots and prevent hair fall.",
    "group": "COSMETIC HAIR CARE / HAIR OIL",
    "brand_examples": "Mamaearth Onion Hair Oil, Wow Skin Science Oil"
  },
  {
    "salt": "Lip Balm (Shea Butter + SPF)",
    "description_hi": "फटे और सूखे होंठों को नमी देने और मुलायम बनाए रखने वाली लिप बाम।",
    "description_en": "Hydrating balm to repair chapped lips and protect from sun damage.",
    "group": "COSMETIC LIP CARE",
    "brand_examples": "Nivea Lip Care, Maybelline Baby Lips, Vaseline Lip Therapy"
  },
  {
    "salt": "Petroleum Jelly (100% Pure)",
    "description_hi": "रूखी त्वचा, फटी एड़ियों और होंठों को नमी देने वाली बहुउपयोगी जेली।",
    "description_en": "Triple-purified petroleum jelly for skin repair and moisture locking.",
    "group": "SKIN CARE / PERSONAL CARE",
    "brand_examples": "Vaseline Pure Petroleum Jelly"
  },
  {
    "salt": "Crack Care Foot Cream (Urea + Salicylic Acid)",
    "description_hi": "फटी एड़ियों की गहरी दरारों को भरने और त्वचा को मुलायम बनाने वाली क्रीम।",
    "description_en": "Intensive foot cream for repairing deeply cracked heels and dry feet.",
    "group": "FOOT CARE / DERMA COSMETIC",
    "brand_examples": "Krack Cream, Footex Cream"
  },
  {
    "salt": "Depilatory Hair Removal Cream",
    "description_hi": "हाथ-पैर और अंडरआर्म्स के अनचाहे बालों को बिना दर्द के हटाने वाली क्रीम।",
    "description_en": "Painless hair removal cream for smooth skin on arms, legs, and underarms.",
    "group": "PERSONAL CARE / BEAUTY",
    "brand_examples": "Veet Hair Removal Cream, Anne French"
  },
  {
    "salt": "Wax Strips for Body (Cold Wax)",
    "description_hi": "घर पर ही आसानी से अनचाहे बालों को जड़ से हटाने के लिए रेडी-टू-यूज़ स्ट्रिप्स।",
    "description_en": "Ready-to-use cold wax strips for body hair removal.",
    "group": "PERSONAL CARE / BEAUTY",
    "brand_examples": "Veet Ready-To-Use Wax Strips"
  },
  {
    "salt": "Hand Sanitizer (70% Isopropyl Alcohol)",
    "description_hi": "बिना पानी के हाथों के 99.9% कीटाणुओं को नष्ट करने वाला अल्कोहल जेल।",
    "description_en": "Rinse-free alcohol gel for instant hand sanitization.",
    "group": "HYGIENE & DISINFECTANT",
    "brand_examples": "Dettol Instant Hand Sanitizer, Lifebuoy Sanitizer, Sterillium"
  },
  {
    "salt": "Germ Protection Handwash Refill",
    "description_hi": "हाथों की गंदगी और कीटाणुओं से सुरक्षा देने वाला लिक्विड सोप।",
    "description_en": "Liquid soap refill for daily hand hygiene and germ protection.",
    "group": "HYGIENE & SANITATION",
    "brand_examples": "Dettol Liquid Handwash, Lifebuoy Handwash, Savlon"
  },
  {
    "salt": "Antiseptic Bathing Soap",
    "description_hi": "त्वचा को कीटाणुओं, पसीने की बदबू और इंफेक्शन से बचाने वाला साबुन।",
    "description_en": "Antibacterial bathing bar for daily body hygiene and germ protection.",
    "group": "HYGIENE & BATHING",
    "brand_examples": "Dettol Original Soap, Savlon Soap, Godrej No.1 Germ Protection"
  },
  {
    "salt": "Moisturizing Bathing Bar (Syndet Bar)",
    "description_hi": "त्वचा के प्राकृतिक तेलों को नुकसान पहुंचाए बिना सफाई करने वाला pH 5.5 साबुन।",
    "description_en": "Soap-free syndet bar for maintaining skin's natural pH 5.5 level.",
    "group": "DERMA CARE / BATHING",
    "brand_examples": "Dove Beauty Bar, Sebamed Cleansing Bar"
  },
  {
    "salt": "Body Wash / Shower Gel",
    "description_hi": "त्वचा को ताज़गी देने और गंदगी साफ करने वाला खुशबूदार लिक्विड बॉडी वॉश।",
    "description_en": "Liquid cleansing gel for refreshing daily body bath.",
    "group": "PERSONAL CARE / BATHING",
    "brand_examples": "Nivea Shower Gel, Palmolive Body Wash, Fiama Shower Gel"
  },
  {
    "salt": "Adult Body Talcum Powder",
    "description_hi": "गर्मी में पसीने की बदबू और घमौरी से राहत देने वाला खुशबूदार पाउडर।",
    "description_en": "Fragrant body powder to absorb sweat and prevent body odor.",
    "group": "PERSONAL CARE / GROOMING",
    "brand_examples": "Pond's Dreamflower, Nycil Cooling Powder, Dermicool"
  },
  {
    "salt": "Cooling Prickly Heat Powder (Menthol Based)",
    "description_hi": "गर्मी में घमौरी, जलन और खुजली से तुरंत ठंडक पहुंचाने वाला पाउडर।",
    "description_en": "Mentholated cooling powder for instant relief from prickly heat.",
    "group": "PERSONAL CARE / COOLING",
    "brand_examples": "Dermicool Powder, Nycil Cool"
  },
  {
    "salt": "Sensitive Teeth Toothpaste (Potassium Nitrate 5%)",
    "description_hi": "ठंडा-गरम पानी लगने और दांतों की संवेदनशीलता (Sensitivity) से राहत।",
    "description_en": "Desensitizing toothpaste that relieves tooth pain from hot/cold food.",
    "group": "ORAL CARE / DENTAL",
    "brand_examples": "Sensodyne Rapid Relief, Colgate Sensitive Pro-Relief, Thermoseal"
  },
  {
    "salt": "Gum Care Herbal Toothpaste",
    "description_hi": "मसूड़ों से खून आना रोकने और दांतों को मजबूत बनाने वाला टूथपेस्ट।",
    "description_en": "Herbal formula toothpaste for gum bleeding and overall oral health.",
    "group": "ORAL CARE / DENTAL",
    "brand_examples": "Himalaya Dental Cream, Dabur Red Paste, Meswak"
  },
  {
    "salt": "Whitening Toothpaste (Activated Charcoal)",
    "description_hi": "दांतों के पीलेपन और दाग-धब्बों को हटाकर प्राकृतिक सफेदी लाने वाला पेस्ट।",
    "description_en": "Stain-removal toothpaste for teeth whitening and fresh breath.",
    "group": "ORAL CARE / COSMETIC DENTAL",
    "brand_examples": "Colgate Visible White, Close-Up Diamond Attraction"
  },
  {
    "salt": "Soft / Ultra-Soft Toothbrush",
    "description_hi": "मसूड़ों और इनेमल को नुकसान पहुंचाए बिना दांतों की सफाई करने वाला ब्रश।",
    "description_en": "Soft-bristled toothbrush designed for gentle tooth cleaning.",
    "group": "ORAL CARE / ACCESSORIES",
    "brand_examples": "Oral-B UltraSoft, Sensodyne Toothbrush, Colgate Gentle"
  },
  {
    "salt": "Battery Powered / Electric Toothbrush",
    "description_hi": "दांतों की बेहतर और स्वचालित सफाई के लिए ऑसिलेटिंग इलेक्ट्रिक ब्रश।",
    "description_en": "Motorized toothbrush for automated and superior plaque removal.",
    "group": "ORAL CARE / ACCESSORIES",
    "brand_examples": "Oral-B Vitality Electric Brush, Caresmith Spark"
  },
  {
    "salt": "Dental Floss (Waxed Mint Thread)",
    "description_hi": "दांतों के बीच फंसे खाने के कणों और प्लाक को साफ करने वाला धागा।",
    "description_en": "Interdental thread for cleaning food debris between teeth.",
    "group": "ORAL CARE / ACCESSORIES",
    "brand_examples": "Oral-B Dental Floss, Colgate Floss"
  },
  {
    "salt": "Interdental Brushes",
    "description_hi": "ब्रेसेस (Braces) या दांतों के बड़े गैप के बीच सफाई करने वाले छोटे ब्रश।",
    "description_en": "Tiny brushes specialized for cleaning under dental braces and wide gaps.",
    "group": "ORAL CARE / SPECIALTY DENTAL",
    "brand_examples": "ThermoSeal Interdental, Stim Interdental Brushes"
  },
  {
    "salt": "Denture Adhesive Cream",
    "description_hi": "नकली दांतों की बत्तीसी (Denture) को मसूड़ों पर मजबूती से चिपकाए रखने वाली क्रीम।",
    "description_en": "Adhesive paste to hold dentures securely in place all day.",
    "group": "ORAL CARE / DENTURE CARE",
    "brand_examples": "Fixodent, Fittydent, Polident"
  },
  {
    "salt": "Denture Cleansing Tablets",
    "description_hi": "नकली दांतों की बदबू, बैक्टीरिया और दाग-धब्बों को साफ करने वाली गोलियां।",
    "description_en": "Effervescent cleaning tablets to sanitize and de-stain dentures.",
    "group": "ORAL CARE / DENTURE CARE",
    "brand_examples": "Polident Cleansing Tablets, Clident"
  },
  {
    "salt": "Tongue Cleaner (Copper / Stainless Steel)",
    "description_hi": "जीभ की परतों को साफ कर सांसों की बदबू दूर करने वाला मैटल टंग क्लीनर।",
    "description_en": "Metal cleaner for scraping tongue coating and maintaining fresh breath.",
    "group": "ORAL CARE / ACCESSORIES",
    "brand_examples": "GUM Tongue Cleaner, Local Surgical Steel Cleaners"
  },
  {
    "salt": "Digital Thermometer (Flexible Tip)",
    "description_hi": "शरीर का तापमान (बुखार) सटीक और डिजिटल रूप से नापने का यंत्र।",
    "description_en": "Digital device for accurate and quick body temperature measurement.",
    "group": "MEDICAL DEVICES / DIAGNOSTIC",
    "brand_examples": "Omron Digital Thermometer, Dr. Morepen, Hicks"
  },
  {
    "salt": "Infrared Non-Contact Forehead Thermometer",
    "description_hi": "बिना त्वचा को छुए माथे से तुरंत तापमान नापने वाली इन्फ्रारेड गन।",
    "description_en": "Touchless IR thermometer for instant body temperature reading.",
    "group": "MEDICAL DEVICES / DIAGNOSTIC",
    "brand_examples": "Omron IR Thermometer, Dr. Trust Infrared"
  },
  {
    "salt": "Digital Blood Pressure Monitor (Fully Automatic)",
    "description_hi": "घर पर ही आसानी से ब्लड प्रेशर (BP) और पल्स रेट नापने का ऑटोमैटिक यंत्र।",
    "description_en": "Automatic upper arm blood pressure monitor for home monitoring.",
    "group": "MEDICAL DEVICES / DIAGNOSTIC",
    "brand_examples": "Omron HEM-7120, Dr. Morepen BP Monitor"
  },
  {
    "salt": "Fingertip Pulse Oximeter",
    "description_hi": "उंगली लगाकर खून में ऑक्सीजन का स्तर (SpO2) और पल्स रेट नापने का मीटर।",
    "description_en": "Compact device to measure blood oxygen saturation level and pulse rate.",
    "group": "MEDICAL DEVICES / DIAGNOSTIC",
    "brand_examples": "Dr. Trust Pulse Oximeter, BPL Oximeter, Beurer"
  },
  {
    "salt": "Blood Glucose Monitor (Glucometer Kit)",
    "description_hi": "शुगर (डायबिटीज) के मरीजों के लिए घर पर ही तुरंत ब्लड शुगर नापने की मशीन।",
    "description_en": "Self-testing kit to measure blood sugar levels at home.",
    "group": "MEDICAL DEVICES / DIAGNOSTIC",
    "brand_examples": "Accu-Chek Active / Instant, Dr. Morepen GlucoOne, OneTouch"
  },
  {
    "salt": "Blood Glucose Test Strips",
    "description_hi": "ग्लूकोमीटर मशीन में इस्तेमाल होने वाली टेस्ट पट्टियां (स्ट्रिप्स)।",
    "description_en": "Disposable test strips designed for blood glucose meters.",
    "group": "MEDICAL CONSUMABLES / DIAGNOSTIC",
    "brand_examples": "Accu-Chek Active Strips, Dr. Morepen BG-03 Strips"
  },
  {
    "salt": "Compressor Nebulizer Machine",
    "description_hi": "अस्थमा और सांस की बीमारी में दवा को भाप बनाकर फेफड़ों तक पहुंचाने वाली मशीन।",
    "description_en": "Aerosol therapy device to deliver liquid medication into lungs.",
    "group": "MEDICAL DEVICES / RESPIRATORY",
    "brand_examples": "Omron Nebulizer, Dr. Trust Compressor Nebulizer"
  },
  {
    "salt": "Vaporizer / Steam Inhaler (3-in-1)",
    "description_hi": "सर्दी-जुकाम में चेहरे की भाप लेने और सांस की नाली खोलने वाला स्टीमर।",
    "description_en": "Electric steam inhaler for cold, sinus congestion, and facial sauna.",
    "group": "MEDICAL DEVICES / RESPIRATORY",
    "brand_examples": "Asst. Health Vaporizer, Newgen Steam Inhaler"
  },
  {
    "salt": "Hot Water Rubber Bag",
    "description_hi": "मांसपेशियों के दर्द, कमर दर्द और पीरियड्स के ऐंठन में गर्म पानी से सिकाई का बैग।",
    "description_en": "Rubber hot water bottle for heat therapy and pain relief.",
    "group": "PAIN MANAGEMENT / HEAT THERAPY",
    "brand_examples": "Coronation Hot Water Bag, Eagle Hot Bag"
  },
  {
    "salt": "Electric Heating Gel Pad / Bag",
    "description_hi": "बिना पानी भरे चार्ज होकर तुरंत गर्म सिकाई देने वाला इलेक्ट्रिक बैग।",
    "description_en": "Rechargeable gel heating pad for quick localized pain therapy.",
    "group": "PAIN MANAGEMENT / HEAT THERAPY",
    "brand_examples": "Carepeutic Electric Bag, Dr. Ortho Heating Pad"
  },
  {
    "salt": "Ice Bag / Cold Gel Pack",
    "description_hi": "चोट, सूजन, मोच और मोच के बाद ठंडी सिकाई (Cold Compress) के लिए फ्लेक्सिबल बैग।",
    "description_en": "Reusable gel pack for cold therapy to reduce swelling and injury inflammation.",
    "group": "PAIN MANAGEMENT / COLD THERAPY",
    "brand_examples": "Flamingo Cool Pack, Tynor Ortho Ice Bag"
  },
  {
    "salt": "Adhesive First Aid Bandages (Band-Aid)",
    "description_hi": "छोटी-मोटी खरोंच और कट को धूल व बैक्टीरिया से बचाने वाली वाटरप्रूफ पट्टी।",
    "description_en": "Strip bandages with absorbent pad for minor cuts and wounds.",
    "group": "FIRST AID / BANDAGES",
    "brand_examples": "Band-Aid (Johnson & Johnson), Hansaplast"
  },
  {
    "salt": "Elastic Crepe Bandage (10cm / 15cm)",
    "description_hi": "मोच, जोड़ों के दर्द और सूजन वाले स्थान पर कसकर बांधने वाली लोचदार पट्टी।",
    "description_en": "Elastic compression bandage for sprains, strains, and joint support.",
    "group": "FIRST AID / COMPRESSION",
    "brand_examples": "Hansaplast Crepe Bandage, Flamingo, BSN Medical"
  },
  {
    "salt": "Sterile Gauze Swabs (Gauze Pad)",
    "description_hi": "घाव की ड्रेसिंग करने, खून रोकने और मलहम लगाने वाली कीटाणुरहित जालीदार पट्टी।",
    "description_en": "Sterilized woven gauze pads for wound dressing and absorption.",
    "group": "FIRST AID / SURGICAL",
    "brand_examples": "Dettol Gauze, Local Surgical Sterile Gauze"
  },
  {
    "salt": "Surgical Microporous Paper Tape",
    "description_hi": "ड्रेसिंग और कॉटन की पट्टी को त्वचा पर चिपकाने वाली स्किन-फ्रेंडली पेपर टेप।",
    "description_en": "Breathable hypoallergenic paper tape to secure wound dressings.",
    "group": "FIRST AID / TAPES",
    "brand_examples": "3M Micropore Tape, Hansaplast Paper Tape"
  },
  {
    "salt": "Antiseptic Wound Wash Liquid",
    "description_hi": "कटे-फटे घाव और चोट को साफ कर इंफेक्शन से बचाने वाला एंटीसेप्टिक घोल।",
    "description_en": "Antiseptic liquid used for cleansing wounds, cuts, and insect bites.",
    "group": "FIRST AID / ANTISEPTIC",
    "brand_examples": "Dettol Antiseptic Liquid, Savlon Antiseptic"
  },
  {
    "salt": "Povidone Iodine Ointment (5% w/w)",
    "description_hi": "जले, कटे और घाव पर बैक्टीरियल इन्फेक्शन रोकने वाला एंटीसेप्टिक मलम।",
    "description_en": "Topical microbicidal ointment for prevention of infection in cuts and burns.",
    "group": "FIRST AID / ANTISEPTIC OINTMENT",
    "brand_examples": "Betadine Ointment, Cipladine"
  },
  {
    "salt": "Burn Relief Cream (Silver Sulfadiazine + Chlorhexidine)",
    "description_hi": "आग, गर्म पानी या तेल से जली हुई त्वचा पर जलन कम करने और छाले रोकने वाली क्रीम।",
    "description_en": "First-aid burn cream providing cooling relief and infection protection.",
    "group": "FIRST AID / BURN CARE",
    "brand_examples": "Burnol, Silverex Ionic Gel"
  },
  {
    "salt": "Lumbosacral Back Support Belt",
    "description_hi": "कमर दर्द, स्लिप डिस्क और रीढ़ की हड्डी को सहारा देने वाली एडजस्टेबल बेल्ट।",
    "description_en": "Orthopedic support belt for lower back pain and spinal stabilization.",
    "group": "ORTHOPEDIC CARE / BELTS",
    "brand_examples": "Tynor LS Belt, Flamingo Lumbar Belt, Vissco"
  },
  {
    "salt": "Cervical Collar (Soft Support)",
    "description_hi": "गर्दन दर्द, सर्वाइकल और गर्दन में अकड़न के समय मोशन को सीमित करने वाली कॉलर।",
    "description_en": "Soft neck brace used to support cervical spine and relieve neck pain.",
    "group": "ORTHOPEDIC CARE / NECK SUPPORT",
    "brand_examples": "Tynor Cervical Collar, Flamingo Soft Collar"
  },
  {
    "salt": "Knee Support Cap (Neoprene Elastic)",
    "description_hi": "घुटने के दर्द, आर्थराइटिस और खेलकूद के दौरान घुटने को सहारा देने वाली कैप।",
    "description_en": "Compression sleeve providing warmth and support to painful knees.",
    "group": "ORTHOPEDIC CARE / JOINT SUPPORT",
    "brand_examples": "Tynor Knee Cap, Flamingo Knee Support"
  },
  {
    "salt": "Ankle Binder / Support Brace",
    "description_hi": "टखने की मोच, सूजन और लिगामेंट की चोट को सपोर्ट देने वाली एंकल ग्रिप।",
    "description_en": "Support brace to immobilize and heal sprained or injured ankles.",
    "group": "ORTHOPEDIC CARE / JOINT SUPPORT",
    "brand_examples": "Tynor Ankle Binder, Vissco Ankle Support"
  },
  {
    "salt": "Wrist Splint / Elastic Support",
    "description_hi": "कलाई के दर्द, खिंचाव और कीबोर्ड चलाने से होने वाले दर्द (Carpal Tunnel) में राहत।",
    "description_en": "Wrist support strap for sprains, strains, and repetitive strain injuries.",
    "group": "ORTHOPEDIC CARE / HAND SUPPORT",
    "brand_examples": "Tynor Wrist Brace, Flamingo Wrist Binder"
  },
  {
    "salt": "Silicon Heel Cups / Heel Cushions",
    "description_hi": "एड़ी के दर्द (Plantar Fasciitis) और हड्डी बढ़ने पर जूतों में लगाने वाला सॉफ्ट पैड।",
    "description_en": "Shock-absorbing silicone insoles to relieve heel pressure and pain.",
    "group": "ORTHOPEDIC CARE / FOOT CARE",
    "brand_examples": "Tynor Heel Cup, Dr. Scholl's Gel Cushions"
  },
  {
    "salt": "Walking Stick (Adjustable Aluminum)",
    "description_hi": "बुजुर्गों और मरीजों के चलने के लिए हल्की व मजबूत लंबाई बदलने वाली छड़ी।",
    "description_en": "Height-adjustable lightweight aluminum cane for walking support.",
    "group": "MOBILITY AIDS / ELDERLY CARE",
    "brand_examples": "Tynor Walking Stick, Vissco Cane"
  },
  {
    "salt": "Hand Exercise Ball (Gel Squeeze Ball)",
    "description_hi": "लकवा (Paralysis), फिजियोथेरेपी और ग्रिप मजबूत करने की सिलिकॉन बॉल।",
    "description_en": "Squeezable gel ball for hand rehabilitation and stress relief.",
    "group": "PHYSIOTHERAPY / EXERCISE AID",
    "brand_examples": "Tynor Gel Ball, Flamingo Hand Exerciser"
  },
  {
    "salt": "N95 Respiratory Face Mask (FFP2 Filter)",
    "description_hi": "प्रदूषण, बैक्टीरिया, वायरस और धूल कणों (PM 2.5) से 95% सुरक्षा देने वाला मास्क।",
    "description_en": "High-filtration mask protecting against airborne particulate matter and infections.",
    "group": "PERSONAL PROTECTION / MASKS",
    "brand_examples": "3M N95 Mask, Savlon N95, Venus Mask"
  },
  {
    "salt": "3-Ply Surgical Disposable Face Mask",
    "description_hi": "धूल, बूंदों (Droplets) और संक्रमण से बचाव के लिए 3-परत वाला डिस्पोजेबल मास्क।",
    "description_en": "3-layer fluid-resistant disposable mask for basic hygienic protection.",
    "group": "PERSONAL PROTECTION / MASKS",
    "brand_examples": "Care View 3-Ply, Local Certified Surgical Mask"
  },
  {
    "salt": "Nitrile Disposable Surgical Gloves (Powder-Free)",
    "description_hi": "मरीजों की जांच, ड्रेसिंग और सफाई के लिए नॉन-एलर्जिक डिस्पोजेबल दस्ताने।",
    "description_en": "Powder-free durable gloves for medical examination and infection control.",
    "group": "PERSONAL PROTECTION / GLOVES",
    "brand_examples": "Kanam Latex Gloves, Sutures India Nitrile Gloves"
  },
  {
    "salt": "Latex Examination Gloves (Pre-Powdered)",
    "description_hi": "अस्पताल, क्लीनिक और घर पर मरीज की देखभाल के लिए रबर के डिस्पोजेबल दस्ताने।",
    "description_en": "Standard rubber latex examination gloves for clinical hygiene.",
    "group": "PERSONAL PROTECTION / GLOVES",
    "brand_examples": "Ambi-tech Latex Gloves, Gammex Gloves"
  },
  {
    "salt": "Condom (Textured Natural Rubber Latex)",
    "description_hi": "गर्भनिरोधक और यौन संचारित रोगों (STDs) से सुरक्षा के लिए बैरियर प्रोटेक्शन।",
    "description_en": "Latex contraceptive barrier preventing unintended pregnancy and STIs.",
    "group": "OTC CONTRACEPTIVE / PERSONAL CARE",
    "brand_examples": "Durex, Moods, Skore, Manforce"
  },
  {
    "salt": "Personal Water-Based Lubricant Gel",
    "description_hi": "यौन क्रिया के दौरान सूखापन दूर करने और घर्षण कम करने वाला सुरक्षित जेल।",
    "description_en": "Smooth water-based gel to reduce friction and dryness during intimacy.",
    "group": "OTC PERSONAL CARE / LUBRICANTS",
    "brand_examples": "Durex Play Gel, Skore Warm Gel"
  },
  {
    "salt": "Pregnancy Test Kit (hCG Urine Strip)",
    "description_hi": "घर पर ही केवल 5 मिनट में पेशाब की जांच से गर्भावस्था का पता लगाने वाली किट।",
    "description_en": "Rapid home urine test kit detecting hCG hormone for early pregnancy test.",
    "group": "DIAGNOSTIC KITS / OTC KITS",
    "brand_examples": "Prega News, Velvet, I-Can"
  },
  {
    "salt": "Ovulation Detection Kit (LH Surge Test)",
    "description_hi": "महिलाओं में गर्भधारण के सबसे उपजाऊ दिनों (Fertile Days) का पता लगाने वाली किट।",
    "description_en": "Urine test kit detecting LH surge to identify peak fertility days.",
    "group": "DIAGNOSTIC KITS / OTC KITS",
    "brand_examples": "i-know Ovulation Kit"
  },
  {
    "salt": "Anti-Lice Hair Oil / Lotion",
    "description_hi": "सिर में जुओं (Lice) और उनके अंडों (Nits) को मारकर बाहर निकालने वाला तेल।",
    "description_en": "Specialized hair lotion formulated to eliminate head lice and nits.",
    "group": "HAIR CARE / ANTI-LICE",
    "brand_examples": "Mediker Anti-Lice Oil, Licel Lotion"
  },
  {
    "salt": "Fine-Toothed Lice Comb (Metal Pins)",
    "description_hi": "बालों से जुओं और लीखों (अंडों) को खींचकर बाहर निकालने वाली बारीक कंगी।",
    "description_en": "Close-toothed comb designed to extract lice and nits from hair.",
    "group": "HAIR CARE / ACCESSORIES",
    "brand_examples": "Mediker Lice Comb, Local Steel Lice Comb"
  },
  {
    "salt": "Weight Scale (Personal Digital Body Scale)",
    "description_hi": "घर पर ही अपना शरीर का वजन सटीक रूप से नापने वाली डिजिटल वेइंग मशीन।",
    "description_en": "Glass-top electronic digital scale for monitoring personal body weight.",
    "group": "HEALTH & WELLNESS / MONITORING",
    "brand_examples": "Dr. Trust Electronic Scale, Omron Digital Weight Scale"
  },
  {
    "salt": "BMI / Body Fat Analyzer Scale",
    "description_hi": "वजन के साथ-साथ शरीर की चर्बी, पानी की मात्रा और BMI नापने का एडवांस्ड मीटर।",
    "description_en": "Smart scale measuring weight, fat percentage, muscle mass, and BMI.",
    "group": "HEALTH & WELLNESS / MONITORING",
    "brand_examples": "Omron Body Composition Monitor, HealthSense Scale"
  },
  {
    "salt": "Kinesiology Elastic Athletic Tape",
    "description_hi": "खिलाड़ियों के मांसपेशियों के खिंचाव, लिगामेंट सपोर्ट और दर्द में चिपकने वाली टेप।",
    "description_en": "Therapeutic elastic tape used by athletes for muscle support and recovery.",
    "group": "SPORTS CARE / REHABILITATION",
    "brand_examples": "RockTape, Mueller Kinesiology Tape"
  },
  {
    "salt": "Sports Pain Relief Spray (Fast Cooling)",
    "description_hi": "खेल के दौरान लगी चोट, मोच और मांसपेशियों के खिंचाव से तुरंत राहत देने वाला स्प्रे।",
    "description_en": "Topical spray offering instant cooling and pain relief for sports injuries.",
    "group": "SPORTS CARE / PAIN RELIEF",
    "brand_examples": "Volini Spray, Moov Spray, Relispray"
  },
  {
    "salt": "Pill Organizer / Daily Medicine Box",
    "description_hi": "हफ्ते भर की सुबह-शाम की दवाइयों को अलग-अलग तारीख और समय के हिसाब से रखने का बॉक्स।",
    "description_en": "7-day compartment box to organize daily medicine dosages.",
    "group": "HEALTH ACCESSORIES / STORAGE",
    "brand_examples": "PillPro Organizer, Local Weekly Medicine Box"
  },
  {
    "salt": "Waterproof Pill Cutter & Crusher",
    "description_hi": "बड़ी गोलियों को आसानी से दो टुकड़ों में काटने या पीसकर पाउडर बनाने का छोटा गैजेट।",
    "description_en": "Compact tool for cutting tablets precisely or crushing them into powder.",
    "group": "HEALTH ACCESSORIES / TOOLS",
    "brand_examples": "Safe & Sound Pill Splitter, Apex Pill Crusher"
  },
  {
    "salt": "Herbal Eye Wash Cup (Plastic / Glass)",
    "description_hi": "गुलाबजल या पानी से आंखों की जलन, धूल और थकान साफ करने वाला आई-कप।",
    "description_en": "Anatomically shaped cup for washing and flushing eyes with saline or water.",
    "group": "EYE CARE / ACCESSORIES",
    "brand_examples": "Tresi Eye Wash Cup, Local Surgical Eye Wash Cup"
  },
  {
    "salt": "Contoured Eye Patch (Sterile Pad)",
    "description_hi": "मोतियाबिंद (Cataract) के ऑपरेशन या आंख की चोट के बाद सुरक्षा के लिए आई पैच।",
    "description_en": "Protective sterile eye shield used post-eye surgery or injury.",
    "group": "SURGICAL ACCESSORIES / EYE CARE",
    "brand_examples": "3M Opticlude Eye Patch, Local Surgical Eye Shield"
  },
  {
    "salt": "Ear Wax Removal Bulb Syringe",
    "description_hi": "आसानी से कान की जमी हुई खूंट/वैक्स को गुनगुने पानी से बाहर निकालने वाला रबर बल्ब।",
    "description_en": "Soft rubber bulb used for gentle ear irrigation and wax removal.",
    "group": "PERSONAL HYGIENE / EAR CARE",
    "brand_examples": "Surgical Ear Syringe Bulb"
  },
  {
    "salt": "Ear Cleaning Cotton Swabs (100% Pure Cotton)",
    "description_hi": "कान के बाहरी हिस्से और मेकअप की सफाई के लिए दोनों तरफ रुई लगी स्टिक्स।",
    "description_en": "Paper-stemmed cotton buds for safe outer ear cleaning and cosmetics.",
    "group": "PERSONAL HYGIENE / COTTON BUDS",
    "brand_examples": "Tulip Cotton Buds, Johnson's Buds"
  },
  {
    "salt": "Silicone Ear Plugs for Noise Reduction / Swimming",
    "description_hi": "तेज आवाज से बचने, सोने के लिए और स्विमिंग के दौरान कान में पानी जाने से रोकने के प्लग।",
    "description_en": "Reusable silicone plugs to block noise and prevent water entry during swimming.",
    "group": "PERSONAL PROTECTION / EAR CARE",
    "brand_examples": "3M Ear Plugs, Mack's Silicone Earplugs"
  },
  {
    "salt": "Soft Foam Sleep Eye Mask",
    "description_hi": "सोते समय या सफर में आंखों पर रोशनी आने से रोकने वाला आरामदेह आई मास्क।",
    "description_en": "Light-blocking padded blindfold for restful sleep during travel or daytime.",
    "group": "TRAVEL & SLEEP CARE",
    "brand_examples": "Frido Sleep Mask, FlightMode Eye Mask"
  },
  {
    "salt": "Handheld Body Massager (Vibrating Electric)",
    "description_hi": "घर पर ही पीठ, कंधों और पैरों की मांसपेशियों का तनाव व दर्द दूर करने वाली मसाज मशीन।",
    "description_en": "Portable electric vibratory massager for relieving muscle fatigue.",
    "group": "HEALTH & WELLNESS / MASSAGERS",
    "brand_examples": "Dr. Physio Massager, Agaro Handheld Massager"
  },
  {
    "salt": "Acupressure Foot Mat / Roller",
    "description_hi": "पैरों के तलवों के पॉइंट्स को दबाकर रक्त संचार और ताजगी बढ़ाने वाला एक्यूप्रेशर रोलर।",
    "description_en": "Spiked mat/roller designed to stimulate foot reflexology points.",
    "group": "WELLNESS & ALTERNATIVE CARE",
    "brand_examples": "Acu-Life Foot Mat, Local Acupressure Roller"
  },
  {
    "salt": "Inflatable Neck Travel Pillow",
    "description_hi": "लंबे सफर में या कुर्सी पर बैठते समय गर्दन को सीधा रखने और झुकाव से बचाने वाला पिलो।",
    "description_en": "Ergonomic neck support pillow for comfortable travel and spine alignment.",
    "group": "TRAVEL CARE / ORTHO COMFORT",
    "brand_examples": "Tynor Travel Pillow, Furlenco Support Pillow"
  },
  {
    "salt": "Hypoallergenic Facial Tissues (2-Ply Soft)",
    "description_hi": "चेहरे के पसीने, तेल और जुकाम में बहती नाक को साफ करने वाले बेहद मुलायम टिशू पेपर।",
    "description_en": "Ultra-soft absorbent facial tissue papers for hygienic personal use.",
    "group": "PERSONAL HYGIENE / TISSUES",
    "brand_examples": "Paseo Facial Tissues, Premier Tissues, Kleenex"
  },

  //------------------------------- मेडिकल स्टोर पर रोज़ाना बिकने वाले 100 अन्य लोकप्रिय OTC, कॉस्मेटिक, आयुर्वेदिक तेल, दर्द निवारक, और पर्सनल केयर प्रोडक्ट्स की सूची EXTRA

  {
    "salt": "Ayurvedic Antacid Granules (Jeera / Pudina Flavor)",
    "description_hi": "पेट की गैस, एसिडिटी और भारीपन से मात्र 6 सेकंड में तुरंत राहत देने वाला फॉर्मूला।",
    "description_en": "Fast-acting Ayurvedic effervescent granules for instant relief from acidity, gas, and bloating.",
    "group": "ANTACID & DIGESTIVE / OTC",
    "brand_examples": "Gas-O-Fast (Jeera / Pudina), ENO"
  },
  {
    "salt": "Unani Herbal Cold & Cough Syrup (Tulsi, Amaltas, Unnab)",
    "description_hi": "सर्दी, जुकाम, गले की खराश और बहती नाक से बिना सुस्ती लाए राहत दिलाने वाला हर्बल सिरप।",
    "description_en": "Herbal Unani formulation for natural relief from cold, cough, and sore throat.",
    "group": "COUGH & COLD / HERBAL SYRUP",
    "brand_examples": "Hamdard Joshina"
  },
  {
    "salt": "Kshir Pak Vidhi Hair Growth Oil (Bhringraj, Til Oil, Sesame)",
    "description_hi": "बालों के झड़ने, असमय सफेदी और गंजेपन की समस्या दूर करने के लिए आयुर्वेदिक क्षीर पाक तेल।",
    "description_en": "Ayurvedic hair nourishment oil processed with milk and herbs to prevent hair fall and scalp problems.",
    "group": "HAIR CARE / AYURVEDIC OIL",
    "brand_examples": "Sesa Ayurvedic Hair Oil"
  },
  {
    "salt": "Turmeric + Sandalwood Antiseptic Skin Cream",
    "description_hi": "हल्दी और चंदन के गुणों से युक्त त्वचा के कील-मुंहासे, दाग-धब्बे और घाव ठीक करने वाली क्रीम।",
    "description_en": "Antiseptic Ayurvedic skin cream that heals acne, blemishes, cuts, and improves complexion.",
    "group": "SKIN CARE / ANTISEPTIC CREAM",
    "brand_examples": "Vicco Turmeric Skin Cream"
  },
  {
    "salt": "Cooling Ayurvedic Oil (Menthol, Camphor, Amla, Sesame)",
    "description_hi": "सिरदर्द, तनाव, थकावट, अनिद्रा और जोड़ों के दर्द में ठंडक व राहत देने वाला आयुर्वेदिक तेल।",
    "description_en": "Therapeutic cooling oil providing instant relief from headache, stress, mental fatigue, and body ache.",
    "group": "PAIN RELIEF & COOLING OIL",
    "brand_examples": "Navratna Cool Oil, Himani Navratna"
  },
  {
    "salt": "Ayurvedic Pain Relief Oil (Gandhapura, Camphor, Til Oil)",
    "description_hi": "घुटनों के दर्द, जोड़ों की अकड़न, साइटिका और कमर दर्द में मालिश के लिए आयुर्वेदिक तेल।",
    "description_en": "Herbal pain relief oil formulated to treat joint pain, arthritis stiffness, and muscular strains.",
    "group": "PAIN RELIEF / ORTHO OIL",
    "brand_examples": "Dr. Ortho Oil, Ortho Herb"
  },
  {
    "salt": "Ayurvedic Pain Relief Capsule (Guggulu, Ashwagandha)",
    "description_hi": "जोड़ों के दर्द, गठिया (Arthritis) और सूजन को अंदर से ठीक करने के लिए आयुर्वेदिक कैप्सूल।",
    "description_en": "Ayurvedic capsules for chronic joint pain, inflammation, and mobility improvement.",
    "group": "PAIN RELIEF / ORTHO CARE",
    "brand_examples": "Dr. Ortho Capsules, Jointed-Care"
  },
  {
    "salt": "Deep Moisturizing All-Season Cream (Eucerit)",
    "description_hi": "रूखी त्वचा, कोहनी और गालों को नमी देकर पूरे दिन मुलायम रखने वाली मल्टीपर्पज क्रीम।",
    "description_en": "All-purpose rich moisturizing cream for dry skin nourishment and protection.",
    "group": "COSMETIC SKIN CARE / MOISTURIZER",
    "brand_examples": "Nivea Creme (Blue Tin), Nivea Soft"
  },
  {
    "salt": "Skin Brightening Face Cream (Niacinamide + Vitamin B3)",
    "description_hi": "त्वचा का कालापन दूर कर प्राकृतिक निखार और सूरज की धूप से सुरक्षा देने वाली फेयरनेस क्रीम।",
    "description_en": "Daily skin brightening cream that evens skin tone and protects from sun damage.",
    "group": "COSMETIC BEAUTY / FAIRNESS CREAM",
    "brand_examples": "Glow & Lovely (Fair & Lovely), Nivea Men Dark Spot Reduction"
  },
  {
    "salt": "Cooling Pain Relief Spray (Menthol + Wintergreen)",
    "description_hi": "खेलकूद या मोच के तुरंत बाद तेज ठंडक देकर दर्द और सूजन को सुन्न करने वाला स्प्रे।",
    "description_en": "Instant cooling pain relief spray designed for sudden sports injuries, sprains, and muscle pulls.",
    "group": "PAIN RELIEF / COOLING SPRAY",
    "brand_examples": "Himgange Spray, Ice Power Spray"
  },
  {
    "salt": "Ayurvedic Memory Boost Syrup (Shankhpushpi, Brahmi)",
    "description_hi": "बच्चों में याददाश्त, दिमागी एकाग्रता और मानसिक क्षमता बढ़ाने वाला प्राकृतिक टॉनिक।",
    "description_en": "Herbal brain tonic that enhances memory, alertness, and mental stamina in students.",
    "group": "BRAIN TONIC / AYURVEDIC",
    "brand_examples": "Baidyanath Shankhpushpi, Dabur Shankhpushpi"
  },
  {
    "salt": "Antiseptic Skin Cream (Zinc Oxide, Boric Acid, Neem)",
    "description_hi": "फटी एड़ियों, रूखी त्वचा, छोटे कट-छिलने और कीड़े के काटने पर काम आने वाली ऑल-राउंडर क्रीम।",
    "description_en": "Multi-benefit antiseptic cream for minor cuts, cracked heels, burns, and dry skin rashes.",
    "group": "SKIN CARE / ANTISEPTIC",
    "brand_examples": "Boroline, BoroPlus Antiseptic Cream"
  },
  {
    "salt": "Ayurvedic Blood Purifier Syrup (Neem, Chirata, Senna)",
    "description_hi": "खून साफ करके चेहरे के मुंहासे, कील और त्वचा के इंफेक्शन को जड़ से मिटाने वाला सिरप।",
    "description_en": "Ayurvedic blood purifier syrup that clears acne, blemishes, and improves skin radiance.",
    "group": "SKIN CARE / BLOOD PURIFIER",
    "brand_examples": "Hamdard Safi, Baidyanath Surakta"
  },
  {
    "salt": "Natural Herbal Henna / Mehendi Powder",
    "description_hi": "बालों को बिना केमिकल के प्राकृतिक रंग, चमक और ठंडक देने वाली आयुर्वेदिक मेंहदी।",
    "description_en": "Natural henna powder for chemical-free hair coloring, conditioning, and scalp cooling.",
    "group": "HAIR CARE / NATURAL COLOR",
    "brand_examples": "Godrej Nupur Mehendi, Shahnaz Husain Henna"
  },
  {
    "salt": "Natural Hair Color Powder (Ammonia Free)",
    "description_hi": "सफेद बालों को 100% काला करने के लिए बिना अमोनिया वाली आसान हेयर डाई।",
    "description_en": "Ammonia-free powder hair color for blackening grey hair without damaging scalp.",
    "group": "HAIR CARE / HAIR DYE",
    "brand_examples": "Godrej Expert Powder Hair Color, Nisha Color"
  },
  {
    "salt": "Nourishing Cream Hair Color (Crème Base)",
    "description_hi": "बालों को रेशमी चमक और मनचाहा रंग (काला, भूरा) देने वाला क्रीमी हेयर कलर।",
    "description_en": "Cream-based rich hair color that provides long-lasting grey coverage and soft hair.",
    "group": "HAIR CARE / COSMETIC COLOR",
    "brand_examples": "Garnier Color Naturals, L'Oreal Paris Excellence, Godrej Expert Rich Crème"
  },
  {
    "salt": "Hair Removal Soap / Powder",
    "description_hi": "बिना दर्द और बिना रेजर के शरीर के अनचाहे बालों को साफ करने वाला आयुर्वेदिक पाउडर।",
    "description_en": "Ayurvedic herbal hair removal powder for easy and painless body hair removal.",
    "group": "PERSONAL CARE / BEAUTY",
    "brand_examples": "Softmela Hair Removal, Roofa Herbal Powder"
  },
  {
    "salt": "Moisturizing Cream Bathing Soap (1/4th Moisturizing Milk)",
    "description_hi": "त्वचा की नमी बनाए रखकर उसे रेशमी और मुलायम बनाने वाला साबुन।",
    "description_en": "Ultra-moisturizing bath bar enriched with cleanser and skin lotion.",
    "group": "COSMETIC BATHING / BEAUTY SOAP",
    "brand_examples": "Dove Cream Beauty Bar, Pears Soft & Fresh"
  },
  {
    "salt": "Pure Glycerin Soap (Transparent)",
    "description_hi": "सर्दियों में त्वचा का रूखापन दूर करने वाला 100% ग्लिसरीन युक्त पारदर्शी साबुन।",
    "description_en": "Gentle transparent glycerin soap bar formulated to lock skin moisture in winters.",
    "group": "SKIN CARE / GLYCERIN SOAP",
    "brand_examples": "Pears Pure & Gentle, Fiama Gel Bar"
  },
  {
    "salt": "Herbal Neem Bathing Soap",
    "description_hi": "त्वचा के घमौरी, पिंपल्स और पसीने के इंफेक्शन से बचाने वाला नीम साबुन।",
    "description_en": "Antibacterial herbal soap enriched with neem and turmeric for problem-free skin.",
    "group": "AYURVEDIC BATHING / SKIN HYGIENE",
    "brand_examples": "Margo Soap, Himalaya Neem Soap, Medimix"
  },
  {
    "salt": "Ayurvedic 18-Herb Skin Soap",
    "description_hi": "त्वचा के चकत्ते, बदबू और पिंपल्स को दूर करने वाला 18 जड़ी-बूटियों का आयुर्वेदिक साबुन।",
    "description_en": "Traditional Ayurvedic soap containing 18 herbal extracts for skin protection.",
    "group": "AYURVEDIC BATHING / DERMA CARE",
    "brand_examples": "Medimix Ayurvedic Soap, Chandrika Soap"
  },
  {
    "salt": "Herbal Charcoal Face Wash",
    "description_hi": "त्वचा के रोमछिद्रों से गहरी गंदगी, प्रदूषण और अतिरिक्त तेल को खींचकर साफ करने वाला वॉश।",
    "description_en": "Activated charcoal face wash that draws out deep-seated dirt, pollution, and oil.",
    "group": "COSMETIC SKIN CARE / FACE WASH",
    "brand_examples": "Pond's Pure Detox, Bombay Shaving Co. Charcoal Face Wash"
  },
  {
    "salt": "Anti-Pollution Brightening Face Wash",
    "description_hi": "धूल-मिट्टी और धूप से थकी त्वचा को तुरंत ताजगी और निखार देने वाला फेस वॉश।",
    "description_en": "Brightening cleanser formulated to remove tan and pollution dullness from skin.",
    "group": "COSMETIC SKIN CARE / FACE WASH",
    "brand_examples": "Garnier Skin Naturals Bright Complete, Himalaya Tan Removal"
  },
  {
    "salt": "Natural Rose Water Facial Spray",
    "description_hi": "चेहरे को ठंडक, नमी और प्राकृतिक गुलाब की खुशबू देने वाला टोनर और स्प्रे।",
    "description_en": "Refreshing rose water mist that tones skin and hydrates pores naturally.",
    "group": "COSMETIC CARE / FACIAL MIST",
    "brand_examples": "Dabur Gulabari Spray, VLCC Rose Water"
  },
  {
    "salt": "Ayurvedic Ubtan Face Scrub / Pack",
    "description_hi": "हल्दी, बेसन और केसर के पारंपरिक गुणों से टैनिंग और मृत त्वचा (Dead Skin) हटाने वाला उबटन।",
    "description_en": "Traditional herbal Ubtan scrub for deep exfoliation, tan removal, and glowing skin.",
    "group": "COSMETIC CARE / FACE PACK",
    "brand_examples": "Mamaearth Ubtan Face Wash / Scrub, Wow Ubtan Pack"
  },
  {
    "salt": "Vitamin C Skin Brightening Serum",
    "description_hi": "चेहरे के काले धब्बों, झाइयों और बेजान त्वचा को चमकदार बनाने वाला हल्का सीरम।",
    "description_en": "Concentrated Vitamin C serum to reduce dark spots, pigmentation, and boost skin radiance.",
    "group": "DERMA COSMETIC / SERUM",
    "brand_examples": "Garnier Vitamin C Serum, Minimalist Vitamin C, Derma Co"
  },
  {
    "salt": "Under-Eye Dark Circle Gel / Cream",
    "description_hi": "आंखों के नीचे के काले घेरों (Dark Circles) और सूजन को कम करने वाली क्रीम।",
    "description_en": "Nourishing under-eye cream formulated to lighten dark circles and reduce puffiness.",
    "group": "COSMETIC SKIN CARE / EYE CARE",
    "brand_examples": "Himalaya Under Eye Cream, Mamaearth Bye Bye Dark Circles"
  },
  {
    "salt": "Anti-Aging Wrinkle Lift Cream (Retinol / Collagen)",
    "description_hi": "उम्र के असर, झुर्रियों और ढीली त्वचा को कसने व निखारने वाली नाइट क्रीम।",
    "description_en": "Anti-aging cream that reduces fine lines, firms skin, and promotes cell renewal.",
    "group": "COSMETIC BEAUTY / ANTI-AGING",
    "brand_examples": "Olay Total Effects 7-in-1, Pond's Age Miracle"
  },
  {
    "salt": "Cold Cream with Vitamin E & Honey",
    "description_hi": "सर्दियों की ठंडी हवा से त्वचा को कटने-फटने से बचाने वाली पोषण युक्त कोल्ड क्रीम।",
    "description_en": "Rich winter cold cream that protects skin against harsh cold wind and dryness.",
    "group": "WINTER CARE / COLD CREAM",
    "brand_examples": "Pond's Cold Cream, Dabur Gulabari Cold Cream"
  },
  {
    "salt": "Body Lotion with Cocoa Butter",
    "description_hi": "रूखी त्वचा को 48 घंटे तक नमी और कोकोआ की मीठी खुशबू देने वाला बॉडी लोशन।",
    "description_en": "Intensive moisturizing lotion infused with cocoa butter for soft and glowing skin.",
    "group": "COSMETIC CARE / BODY LOTION",
    "brand_examples": "Vaseline Cocoa Glow, Nivea Cocoa Nourish"
  },
  {
    "salt": "Deep Restore Body Lotion (Vaseline Jelly Drops)",
    "description_hi": "त्वचा की सबसे अंदरूनी परत तक नमी पहुंचाकर रूखापन दूर करने वाला डेली लोशन।",
    "description_en": "Non-greasy daily lotion that heals dry skin from deep within.",
    "group": "COSMETIC CARE / BODY LOTION",
    "brand_examples": "Vaseline Daily Brightening / Deep Restore"
  },
  {
    "salt": "Body Milk Lotion for Extremely Dry Skin",
    "description_hi": "बहुत अधिक सूखी और खिंचने वाली त्वचा के लिए अत्यधिक पोषण देने वाला बॉडी मिल्क।",
    "description_en": "Ultra-rich body milk providing long-lasting hydration for extra dry skin.",
    "group": "WINTER CARE / BODY LOTION",
    "brand_examples": "Nivea Body Milk (Dark Blue), Parachute Advansed Body Lotion"
  },
  {
    "salt": "Pure Coconut Hair Oil",
    "description_hi": "बालों को जड़ों से मजबूत, काला और घना बनाने वाला 100% शुद्ध नारियल तेल।",
    "description_en": "Pure edible-grade coconut oil for hair strength, scalp massage, and skin hydration.",
    "group": "HAIR CARE / DAILY OIL",
    "brand_examples": "Parachute Coconut Oil, Maxcare Virgin Coconut Oil"
  },
  {
    "salt": "Light Hair Oil with Vitamin E (Non-Sticky)",
    "description_hi": "चिपचिपाहट रहित हल्का तेल जो बालों को बिना भारी किए पोषण और चमक देता है।",
    "description_en": "Non-sticky light hair oil enriched with Vitamin E for daily grooming.",
    "group": "HAIR CARE / LIGHT OIL",
    "brand_examples": "Bajaj Almond Drops, Hair & Care Non-Sticky Oil"
  },
  {
    "salt": "Jasmine Perfumed Light Hair Oil",
    "description_hi": "चमेली की मनमोहक सुगंध के साथ बालों को मुलायम और खुशबूदार बनाने वाला तेल।",
    "description_en": "Perfumed light hair oil infused with jasmine extracts for soft, fragrant hair.",
    "group": "HAIR CARE / PERFUMED OIL",
    "brand_examples": "Parachute Advansed Jasmine, Dabur Jasmine"
  },
  {
    "salt": "Onion Hair Serum for Frizz Control",
    "description_hi": "बालों की उलझन (Frizz) तुरंत दूर करने, चमक लाने और टूटने से बचाने वाला सीरम।",
    "description_en": "Post-wash hair smoothing serum that controls frizz and adds instant shine.",
    "group": "COSMETIC HAIR CARE / SERUM",
    "brand_examples": "Livon Hair Serum, Streax Hair Serum"
  },
  {
    "salt": "Shampoo + Conditioner 2-in-1 Formula",
    "description_hi": "बालों की सफाई के साथ-साथ उन्हें मुलायम बनाने वाला 2-इन-1 शैम्पू।",
    "description_en": "Dual-action formula that cleanses scalp and conditions hair in a single wash.",
    "group": "HAIR CARE / SHAMPOO",
    "brand_examples": "Clinic Plus Strong & Long, Sunsilk Stunning Black Shine"
  },
  {
    "salt": "Smooth & Silky Hair Conditioner",
    "description_hi": "शैम्पू के बाद बालों को रेशमी, उलझन-मुक्त और चमकदार बनाने वाली क्रीम।",
    "description_en": "Post-wash hair conditioner that restores moisture and tames rough hair.",
    "group": "HAIR CARE / CONDITIONER",
    "brand_examples": "Dove Intense Repair Conditioner, Pantene Silk & Shiny"
  },
  {
    "salt": "Herbal Hair Cleanser (Shikakai, Reetha, Amla)",
    "description_hi": "शिकाकाई और अरीठा के प्राकृतिक झाग से बिना केमिकल बालों की सफाई करने वाला शैम्पू।",
    "description_en": "Sulfate-free traditional Ayurvedic hair wash enriched with herbal cleansers.",
    "group": "AYURVEDIC HAIR CARE / SHAMPOO",
    "brand_examples": "Kesh King Herbal Shampoo, Patanjali Kesh Kanti"
  },
  {
    "salt": "Ayurvedic Hair Fall Solution Oil (Kesh King)",
    "description_hi": "21 आयुर्वेदिक जड़ी-बूटियों से बना तेल जो नए बाल उगाने और बाल झड़ना रोकने में मददगार है।",
    "description_en": "Ayurvedic medicinal oil formulated to control severe hair fall and stimulate growth.",
    "group": "AYURVEDIC HAIR CARE / MEDICINAL OIL",
    "brand_examples": "Kesh King Medicinal Oil, Indulekha Bhingha Hair Oil"
  },
  {
    "salt": "Self-Applier Comb Hair Growth Oil",
    "description_hi": "तेल को सीधे बालों की जड़ों तक पहुंचाने के लिए इन-बिल्ट कंगी वाला आयुर्वेदिक तेल।",
    "description_en": "Ayurvedic oil with a comb applicator that delivers oil directly to scalp roots.",
    "group": "AYURVEDIC HAIR CARE / SPECIALTY OIL",
    "brand_examples": "Indulekha Bringha Oil, Mamaearth Comb Oil"
  },
  {
    "salt": "Shaving Cream with Menthol & Aloe Vera",
    "description_hi": "दाढ़ी बनाते समय त्वचा को कटने से बचाने और भरपूर झाग व ठंडक देने वाली क्रीम।",
    "description_en": "Lather-rich shaving cream for smooth razor glide and skin protection.",
    "group": "MEN'S GROOMING / SHAVING",
    "brand_examples": "Gillette Guard Shaving Cream, Dettol Lather Shaving Cream, Vi-John"
  },
  {
    "salt": "Shaving Foam / Gel (Ultra Comfort)",
    "description_hi": "त्वचा को तुरंत नमी देकर बिना जलन के जल्दी शेविंग करने वाला रेडीमेड फोम।",
    "description_en": "Ready-to-use instant shaving foam providing hydration and friction-free shave.",
    "group": "MEN'S GROOMING / SHAVING",
    "brand_examples": "Gillette Foamy Lemon / Menthol, Nivea Men Shaving Gel"
  },
  {
    "salt": "After Shave Splash / Lotion (Alcohol Based)",
    "description_hi": "शेविंग के बाद त्वचा के छोटे कटों को डिसइन्फेक्ट करने और ताजगी देने वाला लोशन।",
    "description_en": "Antiseptic after-shave lotion that cools, disinfects, and prevents razor burn.",
    "group": "MEN'S GROOMING / AFTER SHAVE",
    "brand_examples": "Old Spice After Shave, Park Avenue After Shave"
  },
  {
    "salt": "Safety Razor / Cartridge Blade System",
    "description_hi": "कम समय में सुरक्षित और क्लोज शेविंग देने वाला रेजर और ब्लेड सेट।",
    "description_en": "Precision shaving razor with safety blades for daily men's grooming.",
    "group": "MEN'S GROOMING / RAZORS",
    "brand_examples": "Gillette Mach3, Gillette Vector, Gillette Guard"
  },
  {
    "salt": "Stainless Steel Double Edge Razor Blades",
    "description_hi": "पारंपरिक शेविंग रेजर में इस्तेमाल होने वाली धारदार स्टेनलेस स्टील ब्लेड।",
    "description_en": "Classic double-edged stainless steel blades for traditional shaving razors.",
    "group": "MEN'S GROOMING / BLADES",
    "brand_examples": "7 O'Clock Super Stainless, Topaz Blades, Laser Ultra"
  },
  {
    "salt": "Beard Growth Oil (Argan Oil + Jojoba Oil)",
    "description_hi": "दाढ़ी के बालों को घना, मुलायम, चमकदार और एक समान बढ़ाने वाला तेल।",
    "description_en": "Nourishing beard oil that conditions facial hair, reduces itchiness, and promotes growth.",
    "group": "MEN'S GROOMING / BEARD CARE",
    "brand_examples": "Beardo Beard Growth Oil, Ustraa Beard Oil"
  },
  {
    "salt": "Beard Wash / Cleanser",
    "description_hi": "दाढ़ी के बालों के नीचे छुपी त्वचा की गंदगी और डैंड्रफ साफ करने वाला शैम्पू।",
    "description_en": "Specialized beard shampoo that cleans facial hair without drying skin.",
    "group": "MEN'S GROOMING / BEARD CARE",
    "brand_examples": "Beardo Beard Wash, The Man Company Wash"
  },
  {
    "salt": "Men's Deodorant Body Spray (Gas / Non-Gas)",
    "description_hi": "दिनभर पसीने की बदबू से दूर रखकर तरोताजा महसूस कराने वाला बॉडी स्प्रे।",
    "description_en": "Long-lasting perfumed body spray to eliminate odor and keep fresh.",
    "group": "GROOMING / DEODORANT",
    "brand_examples": "Axe Dark Temptation, Fogg Impression / Marco, Wild Stone Code"
  },
  {
    "salt": "Women's Perfume Body Spray (Floral / Fruity)",
    "description_hi": "महिलाओं के लिए फूलों की मीठी खुशबू वाला हल्का और ताजा डिओडोरेंट।",
    "description_en": "Gentle daily deodorant spray formulated with refreshing floral fragrance for women.",
    "group": "GROOMING / WOMEN DEODORANT",
    "brand_examples": "Envy Women Deo, Secret Temptation, Nivea Pearl & Beauty"
  },
  {
    "salt": "Roll-On Anti-Perspirant Underarm Deodorant",
    "description_hi": "कांख (Underarm) के पसीने और बदबू को 48 घंटे तक रोकने वाला रोल-ऑन।",
    "description_en": "Anti-perspirant roll-on that reduces underarm sweat, odor, and skin darkening.",
    "group": "PERSONAL HYGIENE / ROLL-ON",
    "brand_examples": "Nivea Men Protect & Care Roll-On, Rexona Roll-On"
  },
  {
    "salt": "Pocket Perfume Spray (Compact 20ml)",
    "description_hi": "जेब में आसानी से आ जाने वाला 250+ स्प्रे की क्षमता वाला छोटा इत्र/परफ्यूम।",
    "description_en": "Compact travel-friendly pocket perfume delivering fresh burst of fragrance.",
    "group": "PERSONAL GROOMING / PERFUME",
    "brand_examples": "Engage Pocket Perfume, Fogg Mini"
  },
  {
    "salt": "Ayurvedic Pain Relief Ointment (Nilgiri, Gandhapura)",
    "description_hi": "कमर दर्द, जोड़ों का दर्द और मांसपेशियों के खिंचाव में तुरंत गरमाहट देने वाली बाम/क्रीम।",
    "description_en": "Fast-acting Ayurvedic pain relief ointment generating deep warmth to soothe ache.",
    "group": "PAIN RELIEF / BALM & OINTMENT",
    "brand_examples": "Moov Pain Relief Cream, Volini Gel"
  },
  {
    "salt": "Strong Ayurvedic Pain Balm (Camphor, Menthol)",
    "description_hi": "तेज सिरदर्द, सर्दी से जकड़न और मांसपेशियों के दर्द में काम आने वाली बाम।",
    "description_en": "Analgesic pain balm that relieves severe headache, cold congestion, and body pain.",
    "group": "PAIN RELIEF / BALM",
    "brand_examples": "Zandu Balm, Amrutanjan Strong Balm, Tiger Balm"
  },
  {
    "salt": "Clear Liquid Cold & Headache Balm",
    "description_hi": "बिना चिपचिपाहट सिरदर्द और बंद नाक खोलने वाला पारदर्शी जेल बाम।",
    "description_en": "Non-greasy clear balm liquid providing swift relief from stress headache and cold.",
    "group": "PAIN RELIEF / HEADACHE BALM",
    "brand_examples": "Amrutanjan Faster Relaxation Roll-On, Zandu Ultra Balm"
  },
  {
    "salt": "Vapor Rub / Inhaler Ointment (Menthol, Eucalyptus)",
    "description_hi": "बच्चों और बड़ों की बंद नाक खोलने, छाती की जकड़न और खांसी में भाप/मालिश की बाम।",
    "description_en": "Medicated vaporizing ointment for nasal decongestion and relief from cold symptoms.",
    "group": "COLD RELIEF / VAPOR RUB",
    "brand_examples": "Vicks VapoRub, Amrutanjan Relief"
  },
  {
    "salt": "Nasal Inhaler Keyring Stick (Camphor + Menthol)",
    "description_hi": "सफर में बंद नाक को तुरंत सूंघकर खोलने वाली छोटी नेज़ल स्टिक।",
    "description_en": "Pocket-sized nasal inhaler stick for quick relief from blocked nose.",
    "group": "COLD RELIEF / INHALER",
    "brand_examples": "Vicks Inhaler, Otrivin Breathe Clean Inhaler"
  },
  {
    "salt": "Ayurvedic Cough Drops / Lozenges",
    "description_hi": "गले की खराश, खिचखिच और खांसी को तुरंत शांत करने वाली चूसने की गोली।",
    "description_en": "Soothing herbal throat lozenges that suppress cough and clear throat irritation.",
    "group": "COUGH RELIEF / LOZENGES",
    "brand_examples": "Vicks Cough Drops, Strepsils, Honitus Cough Drops"
  },
  {
    "salt": "Ayurvedic Digestives Tablets (Imli, Anardana, Hing)",
    "description_hi": "खाने के बाद पाचन सुधारने और मुंह का स्वाद अच्छा करने वाली चटपटी गोलियां।",
    "description_en": "Tangy Ayurvedic digestive candy tablets that aid post-meal digestion.",
    "group": "DIGESTIVE CARE / CANDY",
    "brand_examples": "Hajmola Tablets (Regular / Imli), Dabur Yummy Digestive"
  },
  {
    "salt": "Ayurvedic Digestive Churna (Ajwain, Kala Namak, Hing)",
    "description_hi": "पेट की गैस, भारीपन और कब्ज को तुरंत दूर करने वाला पारंपरिक चूर्ण।",
    "description_en": "Traditional Ayurvedic digestive powder for fast relief from gas and indigestion.",
    "group": "DIGESTIVE CARE / CHURNA",
    "brand_examples": "Kayam Churna, Pet Saffa Natural Granules"
  },
  {
    "salt": "Herbal Constipation Relief Tablets",
    "description_hi": "रात में लेने पर सुबह पेट की पुरानी कब्ज को बिना मरोड़ के साफ करने वाली गोलियां।",
    "description_en": "Herbal laxative tablets for smooth and easy morning bowel evacuation.",
    "group": "LAXATIVE / DIGESTIVE HEALTH",
    "brand_examples": "Kayam Tablets, Pet Saffa Tablets"
  },
  {
    "salt": "Isabgol Husk (Psyllium Husk 100% Natural)",
    "description_hi": "कब्ज, बवासीर और दस्त दोनों स्थितियों में आंतों को साफ करने वाला प्राकृतिक फाइबर।",
    "description_en": "Pure psyllium husk soluble fiber for bowel regularity and digestive health.",
    "group": "LAXATIVE / FIBER SUPPLEMENT",
    "brand_examples": "Telephone Brand Sat-Isabgol, Dabur Nature Care"
  },
  {
    "salt": "Glucose Powder with Vitamin C & Zinc (Orange / Mango)",
    "description_hi": "गर्मी में डिहाइड्रेशन, कमजोरी और थकावट को तुरंत दूर करने वाला एनर्जी ड्रिंक।",
    "description_en": "Instant energy drink powder enriched with Vitamin C to fight summer fatigue.",
    "group": "HEALTH DRINK / ENERGY",
    "brand_examples": "Glucon-D (Orange / Lime), Dabur Glucose"
  },
  {
    "salt": "Electrolyte Energy Drink Powder",
    "description_hi": "दस्त, उल्टी या वर्कआउट के बाद शरीर में पानी और नमक की कमी पूरी करने वाला घोल।",
    "description_en": "Oral rehydration electrolyte formula to restore vital salts and fluids.",
    "group": "HEALTH & ENERGY / REHYDRATION",
    "brand_examples": "Enerzal Powder, Electral Powder"
  },
  {
    "salt": "Malted Health Food Drink for Kids",
    "description_hi": "बच्चों के दूध में मिलाकर पिलाने से शारीरिक विकास और ऊंचाई बढ़ाने वाला हेल्थ ड्रिंक।",
    "description_en": "Malted nutritional chocolate/vanilla drink mix supporting growth in children.",
    "group": "NUTRITION / HEALTH DRINKS",
    "brand_examples": "Bournvita, Horlicks, Complan, Boost"
  },
  {
    "salt": "Malted Nutritional Drink for Women",
    "description_hi": "महिलाओं में हीमोग्लोबिन, कैल्शियम और हड्डियों की ताकत बनाए रखने के लिए विशेष न्यूट्रिशन।",
    "description_en": "Specialized health food drink formulated with iron and calcium for women.",
    "group": "NUTRITION / WOMEN'S HEALTH",
    "brand_examples": "Women's Horlicks, Protinex Mama"
  },
  {
    "salt": "High Protein Drink Powder (Whey / Soy Protein)",
    "description_hi": "बीमारी के बाद रिकवरी, बुजुर्गों की मांसपेशियों और कमजोरी दूर करने का प्रोटीन पाउडर।",
    "description_en": "High-protein nutritional supplement for strength, recovery, and muscle maintenance.",
    "group": "NUTRITION / PROTEIN POWDER",
    "brand_examples": "Protinex (Original / Chocolate), Ensure Powder"
  },
  {
    "salt": "Diabetic Special Protein Powder (Zero Sugar)",
    "description_hi": "डायबिटीज के मरीजों के लिए बिना चीनी वाला सुरक्षित प्रोटीन व न्यूट्रिशन सप्लीमेंट।",
    "description_en": "Sugar-free nutritional supplement designed specifically for blood sugar management.",
    "group": "NUTRITION / DIABETIC CARE",
    "brand_examples": "Resource Diabetic, Vidavance, Protinex Diabetes Care"
  },
  {
    "salt": "Pure Apple Cider Vinegar with Mother",
    "description_hi": "वजन घटाने, पाचन सुधारने और कोलेस्ट्रॉल नियंत्रित करने के लिए प्राकृतिक सेब का सिरका।",
    "description_en": "Raw unfiltered apple cider vinegar with 'mother' for weight management and digestion.",
    "group": "HEALTH & WELLNESS / JUICE",
    "brand_examples": "Wow Apple Cider Vinegar, Kapiva ACV"
  },
  {
    "salt": "Herbal Amla Juice (100% Pure)",
    "description_hi": "आंखों की रोशनी, इम्युनिटी और बालों के स्वास्थ्य के लिए विटामिन सी युक्त आंवला जूस।",
    "description_en": "Natural Amla juice rich in Vitamin C for immune support and hair vitality.",
    "group": "AYURVEDIC HEALTH / JUICE",
    "brand_examples": "Patanjali Amla Juice, Kapiva Amla Juice"
  },
  {
    "salt": "Herbal Aloe Vera Juice with Pulp",
    "description_hi": "पेट की सफाई, डिटॉक्स और स्किन पर चमक लाने के लिए एलोवेरा का रस।",
    "description_en": "Pure Aloe Vera juice for internal cleansing, gut health, and skin glow.",
    "group": "AYURVEDIC HEALTH / JUICE",
    "brand_examples": "Patanjali Aloe Vera Juice, Baidyanath Aloe Vera"
  },
  {
    "salt": "Sugar Free Sweetener Tablets (Sucralose / Stevia)",
    "description_hi": "डायबिटीज के मरीजों और वजन घटाने वालों के लिए चाय-कॉफी की मिठास गोलियां।",
    "description_en": "Zero-calorie artificial/natural sweetener drops or tablets for diabetic sugar replacement.",
    "group": "DIABETIC CARE / SWEETENER",
    "brand_examples": "Sugar Free Natura, Sugar Free Gold, Zydus"
  },
  {
    "salt": "Herbal Green Tea Bags (Antioxidant Rich)",
    "description_hi": "शरीर के टॉक्सिन्स बाहर निकालने और मेटाबॉलिज्म बढ़ाकर वजन नियंत्रित करने वाली ग्रीन टी।",
    "description_en": "Antioxidant-rich green tea bags for metabolism boost and detoxification.",
    "group": "HEALTH TEA / WELLNESS",
    "brand_examples": "Lipton Green Tea, Tetley Green Tea, Organic India Tulsi Green"
  },
  {
    "salt": "Tulsi Herbal Tea Drops (5 Type Tulsi Extract)",
    "description_hi": "पानी या चाय में मिलाकर इम्युनिटी बढ़ाने और कफ-सर्दी से बचाने वाला अर्क।",
    "description_en": "Concentrated liquid extract of 5 varieties of Tulsi for immunity enhancement.",
    "group": "AYURVEDIC IMMUNITY / DROPS",
    "brand_examples": "Dabur Tulsi Drops, Organic India Tulsi Drops"
  },
  {
    "salt": "Anti-Mosquito Repellent Fabric Roll-On",
    "description_hi": "कपड़ों पर 4 बिंदु लगाने से बच्चों को मच्छर काटने और डेंगू से बचाने वाला प्राकृतिक लिक्विड।",
    "description_en": "100% natural fabric roll-on protecting children against mosquito bites and dengue.",
    "group": "MOSQUITO REPELLENT / PERSONAL CARE",
    "brand_examples": "Goodknight Fabric Roll-On, Mamaearth Mosquito Roll-On"
  },
  {
    "salt": "Mosquito Repellent Skin Cream (Aloe Vera Based)",
    "description_hi": "त्वचा पर लगाने से मच्छरों को दूर रखने वाली सुरक्षित और खुशबूदार क्रीम।",
    "description_en": "Mosquito repellent lotion that safely protects exposed skin from insect bites.",
    "group": "MOSQUITO REPELLENT / CREAM",
    "brand_examples": "Odomos Mosquito Repellent Cream / Gel"
  },
  {
    "salt": "Mosquito Repellent Patches for Kids",
    "description_hi": "छोटे बच्चों के कपड़ों या पालने पर चिपकाने वाले मच्छर दूर भगाने वाले स्टिकर।",
    "description_en": "Non-toxic herbal patches stickable on clothing to ward off mosquitoes.",
    "group": "BABY CARE / MOSQUITO REPELLENT",
    "brand_examples": "Goodknight Patches, Bodyguard Mosquito Patches"
  },
  {
    "salt": "Hand Wipes / Sanitizing Cleansing Tissues",
    "description_hi": "सफर के दौरान बिना पानी के हाथ और चेहरा साफ करने वाले कीटाणुनाशक टिशू।",
    "description_en": "Germ-killing wet wipes for instant hand hygiene and facial cleaning on the go.",
    "group": "HYGIENE / TRAVEL CARE",
    "brand_examples": "Dettol Anti-Bacterial Wipes, Savlon Wet Wipes"
  },
  {
    "salt": "Makeup Remover Cleansing Water (Micellar)",
    "description_hi": "चेहरे के वाटरप्रूफ मेकअप और गंदगी को बिना रगड़े आसानी से साफ करने वाला पानी।",
    "description_en": "Gentle micellar water that removes makeup, dirt, and oil without harsh rubbing.",
    "group": "COSMETIC BEAUTY / CLEANSER",
    "brand_examples": "Garnier Micellar Cleansing Water, Bioderma"
  },
  {
    "salt": "Nail Polish Remover Wipes / Liquid (Acetone-Free)",
    "description_hi": "नाखूनों की नमी चुराए बिना पुरानी नेल पॉलिश को आसानी से पोंछने वाले पैड्स।",
    "description_en": "Nourishing acetone-free tissue wipes for effortless nail polish removal.",
    "group": "COSMETIC NAIL CARE",
    "brand_examples": "Colorbar Nail Wipe, Kara Nail Polish Remover Wipes"
  },
  {
    "salt": "Cotton Makeup Remover Pads (100% Pure Cotton)",
    "description_hi": "मेकअप हटाने, टोनर लगाने और चेहरे की सफाई के लिए बने गोल कॉटन पैड्स।",
    "description_en": "Soft double-faced round cotton pads for delicate facial cleansing and toner application.",
    "group": "COSMETIC ACCESSORIES / COTTON",
    "brand_examples": "Tulip Cotton Pads, Bella Cotton Rounds"
  },
  {
    "salt": "Pimple Patch (Hydrocolloid Absorbing Cover)",
    "description_hi": "रातभर में पिंपल के मवाद को सोखकर उसे छोटा और गायब करने वाला पारदर्शी स्टिकर।",
    "description_en": "Hydrocolloid spot patch that absorbs acne pus and speeds up acne healing overnight.",
    "group": "DERMA CARE / ACNE PATCH",
    "brand_examples": "Priveda Acne Patch, Spot Patch, Derma Co Pimple Patch"
  },
  {
    "salt": "Nose Pore Cleansing Strips",
    "description_hi": "नाक के ऊपर जमे जिद्दी ब्लैकहेड्स (Blackheads) और सफेदी को तुरंत खींचकर निकालने वाली पट्टी।",
    "description_en": "Deep cleansing charcoal nose strips that pull out blackheads and unclog pores.",
    "group": "COSMETIC SKIN CARE / PORE STRIPS",
    "brand_examples": "HipHop Nose Strip, Biore Nose Charcoal Strips"
  },
  {
    "salt": "Epsom Salt (Magnesium Sulfate)",
    "description_hi": "पैरों के दर्द, सूजन और थकावट दूर करने के लिए गुनगुने पानी में मिलाने वाला बाथ साल्ट।",
    "description_en": "Magnesium rich salt for relaxing muscle soak, foot bath, and soothing inflammation.",
    "group": "HEALTH & WELLNESS / SOAK",
    "brand_examples": "Organix Epsom Salt, WishCare Epsom Salt"
  },
  {
    "salt": "Sterile Normal Saline Nasal Spray (0.9% NaCl)",
    "description_hi": "छोटे बच्चों और बड़ों की सूखी या बंद नाक को साफ करने वाला सुरक्षित नमकीन पानी का स्प्रे।",
    "description_en": "Isotonic saline nasal mist for moistening dry nasal passages and clearing mucus.",
    "group": "NASAL CARE / SALINE DROPS",
    "brand_examples": "Nasoclear Spray, Otrivin S Nasal Spray"
  },
  {
    "salt": "Waterproof Cast & Bandage Protector Cover",
    "description_hi": "हाथ या पैर पर प्लास्टर (Cast) बंधे होने पर नहाते समय पानी से बचाने वाला प्लास्टिक कवर।",
    "description_en": "Reusable waterproof sleeve to keep leg or arm bone casts dry while bathing.",
    "group": "SURGICAL ACCESSORIES / CAST CARE",
    "brand_examples": "Tynor Cast Protector, Medisure Cover"
  },
  {
    "salt": "Medicated Heel Anti-Crack Socks (Silicone Gel)",
    "description_hi": "फटी एड़ियों की क्रीम लगाने के बाद नमी को लॉक करने वाले सिलिकॉन जेल मोजे।",
    "description_en": "Silicone gel heel socks designed to lock moisture and heal severe cracked heels.",
    "group": "FOOT CARE / GEL ACCESSORIES",
    "brand_examples": "Frido Heel Gel Socks, Careway Silicone Socks"
  },
  {
    "salt": "Medicated Compression Stockings (Class 1/2)",
    "description_hi": "पैरों की उभरी हुई नीली नसों (Varicose Veins) और सूजन में आराम देने वाले लंबे मोजे।",
    "description_en": "Graduated compression stockings to improve blood circulation in varicose veins.",
    "group": "ORTHOPEDIC CARE / COMPRESSION",
    "brand_examples": "Tynor Compression Stockings, Jobst, Flamingo"
  },
  {
    "salt": "Posture Corrector Belt for Spine & Shoulders",
    "description_hi": "झुककर बैठने की आदत सुधारने और पीठ के ऊपरी हिस्से के दर्द को ठीक करने वाली बेल्ट।",
    "description_en": "Clavicle support brace to correct slouching posture and realign spine.",
    "group": "ORTHOPEDIC CARE / POSTURE",
    "brand_examples": "Tynor Posture Corrector, Dr. Ortho Posture Belt"
  },
  {
    "salt": "Orthopedic Cervical Memory Foam Pillow",
    "description_hi": "गर्दन दर्द और सर्वाइकल के मरीजों के लिए सोने का विशेष आकार वाला तकिया।",
    "description_en": "Ergonomic memory foam pillow contoured to relieve cervical spine strain during sleep.",
    "group": "ORTHOPEDIC CARE / PILLOW",
    "brand_examples": "Tynor Cervical Pillow, Contour Pillow"
  },
  {
    "salt": "Coccyx Tailbone Orthopedic Seat Cushion",
    "description_hi": "कुर्सी पर लंबे समय बैठने से टेलबोन (रीढ़ का निचला हिस्सा) और बवासीर के दर्द से राहत देने वाली गद्दी।",
    "description_en": "Cut-out memory foam seat cushion that reduces pressure on tailbone and coccyx.",
    "group": "ORTHOPEDIC CARE / SEAT CUSHION",
    "brand_examples": "Frido Coccyx Cushion, Dr. Trust Seat Cushion"
  },
  {
    "salt": "Silicone Toe Separator / Bunion Corrector",
    "description_hi": "पैर के अंगूठे की टेढ़ी हड्डी (Bunion) और चढ़ी हुई उंगलियों को सीधा करने वाला सिलिकॉन पैड।",
    "description_en": "Soft gel spacers to realign crooked toes and relieve bunion pressure.",
    "group": "FOOT CARE / ORTHO PADS",
    "brand_examples": "Tynor Toe Separator, Frido Bunion Guard"
  },
  {
    "salt": "Medical Surgical Face Shield (Anti-Fog)",
    "description_hi": "डॉक्टरों व तीमारदारों के लिए चेहरे को थूक और तरल बूंदों से बचाने वाला पारदर्शी शील्ड।",
    "description_en": "Transparent full-face protective visor shield against liquid splashes and droplets.",
    "group": "PERSONAL PROTECTION / SHIELD",
    "brand_examples": "3M Face Shield, Local Medical Face Shield"
  },
  {
    "salt": "Sterile Disposable Surgical Gown / PPE Kit",
    "description_hi": "ऑपरेशन थिएटर या इंफेक्शन से बचाव के लिए डॉक्टर और स्टाफ का डिस्पोजेबल कोट।",
    "description_en": "Fluid-resistant sterile protective gown for OT surgeries and infection safety.",
    "group": "SURGICAL APPAREL / PPE",
    "brand_examples": "Kimberly-Clark Gown, Local Surgical Gowns"
  },
  {
    "salt": "Non-Woven Disposable Bouffant Mob Cap",
    "description_hi": "अस्पताल, लैब या किचन में बालों को झड़ने और ढककर रखने की डिस्पोजेबल टोपी।",
    "description_en": "Disposable elasticated hair cover caps for cleanrooms, OTs, and food safety.",
    "group": "SURGICAL APPAREL / CAPS",
    "brand_examples": "Care View Mob Caps, Surgical Caps"
  },
  {
    "salt": "Disposable Plastic Shoe Covers",
    "description_hi": "अस्पताल के आईसीयू या लैब में बाहर के जूतों की गंदगी और इंफेक्शन जाने से रोकने का कवर।",
    "description_en": "Slip-on plastic shoe covers to maintain sterile room environments.",
    "group": "SURGICAL APPAREL / SHOE COVER",
    "brand_examples": "Surgical Plastic Shoe Covers"
  },
  {
    "salt": "Automatic Shoe Cover Dispenser Machine",
    "description_hi": "क्लीनिक और पैथोलॉजी लैब के प्रवेश द्वार पर बिना झुके जूते का कवर पहनाने की मशीन।",
    "description_en": "Mechanical hands-free dispenser for fast shoe cover application.",
    "group": "MEDICAL HYGIENE / EQUIPMENT",
    "brand_examples": "Sanctuary Shoe Cover Machine"
  },
  {
    "salt": "UV Sterilizer Box for Mobiles & Accessories",
    "description_hi": "मोबाइल, चाबी और चश्मे को पराबैंगनी किरणों (UV Light) से 3 मिनट में सैनिटाइज करने वाला बॉक्स।",
    "description_en": "Ultraviolet light box designed to kill 99.9% germs on small daily gadgets.",
    "group": "SANITIZATION / GADGETS",
    "brand_examples": "Godrej ViroShield, Philips UV Sterilizer"
  },
  {
    "salt": "Ultrasound Transmission Gel (Acoustic Gel)",
    "description_hi": "अल्ट्रासाउंड जांच और ईसीजी (ECG) टेस्ट के समय मशीन की प्रोब पर लगाने वाला ट्रांसपेरेंट जेल।",
    "description_en": "Conductive water-soluble gel for ultrasound imaging and diagnostic procedures.",
    "group": "DIAGNOSTIC CONSUMABLES / GEL",
    "brand_examples": "Ultragel, Sonogel"
  },
  {
    "salt": "Surgical Lubricating Jelly (Sterile)",
    "description_hi": "कैथेटर (नली) डालने या डॉक्टरी जांच के दौरान घर्षण कम करने वाली चिकनी जेल।",
    "description_en": "Sterile water-soluble lubricant for catheters, endoscopes, and speculum insertion.",
    "group": "SURGICAL CONSUMABLES / JELLY",
    "brand_examples": "KY Jelly, LOX 2% Jelly"
  },
  {
    "salt": "Disposable Urine Specimen Container Cup",
    "description_hi": "लैब टेस्ट के लिए पेशाब का नमूना जमा करने वाली स्टरलाइज्ड ढक्कनदार प्लास्टिक डिब्बी।",
    "description_en": "Sterile leak-proof plastic container for collecting pathology urine samples.",
    "group": "LAB CONSUMABLES / CONTAINER",
    "brand_examples": "Local Surgical Specimen Cups"
  }






    ];

   function cleanStr(str) {
        return (str || "").toLowerCase().trim();
    }

    // 👉 Updated Helper Function to Highlight Full Word (Matched=Dark Red, Remaining=Light Red)
    function highlightText(text, query) {
        if (!text) return "";
        if (!query) return text;

        const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const qEscaped = escapeRegExp(query);
        
        // Match the full word containing the query
        const wordRegex = new RegExp(`(\\b[\\w-]*${qEscaped}[\\w-]*\\b)`, 'gi');

        return String(text).replace(wordRegex, (fullWord) => {
            const innerRegex = new RegExp(`(${qEscaped})`, 'gi');
            const highlightedWord = fullWord.replace(innerRegex, '<span style="color: #dc2626; font-weight: 800;">$1</span>');
            return `<span style="color: #ef4444; font-weight: 600; background-color: #fef2f2; padding: 0 3px; border-radius: 4px;">${highlightedWord}</span>`;
        });
    }

    let shadowRoot = null;
    let lastSearchQuery = ""; // Query tracker for highlighting

    // UI Inject function
    function injectModalUI() {
        let hostDiv = document.getElementById('altf-search-host');
        if (!hostDiv) {
            hostDiv = document.createElement('div');
            hostDiv.id = 'altf-search-host';
            document.body.appendChild(hostDiv);
            shadowRoot = hostDiv.attachShadow({ mode: 'open' });
        }

        const styleContent = `
            .altf-modal-overlay { 
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; 
                background: rgba(15, 23, 42, 0.65); backdrop-filter: blur(4px);
                display: flex; justify-content: center; align-items: center; 
                z-index: 999999; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
            }
            .altf-modal-content { 
                background: #ffffff; width: 90%; max-width: 1700px; max-height: 75vh; 
                border-radius: 12px; padding: 24px; 
                box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1); 
                display: flex; flex-direction: column; border: 1px solid #e2e8f0;
                box-sizing: border-box;
            }
            .altf-header { 
                display: flex; justify-content: space-between; align-items: center; 
                margin-bottom: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; 
            }
            .altf-title {
                margin: 0; font-size: 18px; font-weight: 600; color: #0f172a; display: flex; align-items: center; gap: 8px;
            }
            .altf-search-input { 
                width: 100%; padding: 12px 16px; border: 1.5px solid #cbd5e1; border-radius: 8px; 
                font-size: 15px; color: #1e293b; outline: none; transition: border-color 0.2s, box-shadow 0.2s;
                box-sizing: border-box; background: #f8fafc;
            }
            .altf-search-input:focus {
                border-color: #3b82f6; background: #ffffff; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
            }
            .altf-placeholder-msg {
                text-align: center; color: #64748b; padding: 40px 20px; font-size: 14px;
            }
            .altf-table-container { 
                overflow-y: auto; flex-grow: 1; border: 1px solid #e2e8f0; border-radius: 8px; margin-top: 10px;
            }
            table.altf-table { 
                width: 100%; border-collapse: collapse; font-size: 13.5px; text-align: left; background: #ffffff; margin: 0;
            }
            table.altf-table th { 
                background-color: #f8fafc; color: #475569; font-weight: 600; padding: 12px 14px; 
                position: sticky; top: 0; border-bottom: 1px solid #e2e8f0; z-index: 2;
            }
            table.altf-table td { 
                padding: 12px 14px; border-bottom: 1px solid #f1f5f9; color: #334155; vertical-align: top; line-height: 1.4;
            }
            table.altf-table tr:hover { background-color: #f8fafc; }
            .altf-badge {
                display: inline-block; background: #f1f5f9; color: #475569; padding: 3px 8px; 
                border-radius: 6px; font-size: 11px; font-weight: 600; border: 1px solid #e2e8f0;
            }
            .altf-badge-danger {
                background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; font-weight: 700;
            }
            .altf-badge-ok {
                background: #dcfce7; color: #166534; border: 1px solid #86efac;
            }
            .altf-close-btn, .altf-print-btn { 
                background: #f1f5f9; color: #64748b; border: none; padding: 0 10px; height: 32px;
                border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: bold;
                display: flex; align-items: center; justify-content: center; transition: all 0.2s; gap: 4px;
            }
            .altf-close-btn:hover { background: #fee2e2; color: #ef4444; }
            .altf-print-btn:hover { background: #e0f2fe; color: #0284c7; }
            .altf-item-link {
                color: #2563eb; text-decoration: underline; cursor: pointer; font-weight: 600;
            }
            .altf-item-link:hover { color: #1d4ed8; }
            .altf-back-btn {
                background: #e2e8f0; color: #334155; border: none; padding: 6px 12px;
                border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; margin-right: 10px;
            }
            .altf-back-btn:hover { background: #cbd5e1; }
            /* Enable text selection inside modal */
.altf-modal-content, 
.altf-modal-content * {
    user-select: text !important;
    -webkit-user-select: text !important;
    -moz-user-select: text !important;
    -ms-user-select: text !important;
}
        `;

        const modalHTML = `
            <style>${styleContent}</style>
            <div id="altf-search-modal" class="altf-modal-overlay">
                <div class="altf-modal-content">
                    <div class="altf-header">
                        <div style="display:flex; align-items:center;">
                            <button class="altf-back-btn" id="altf-back-btn" style="display:none;">← Back</button>
                            <h3 class="altf-title" id="altf-modal-title">Medicine Information Dialog</h3>
                        </div>
                        <div style="display:flex; gap: 8px;">
                            <button class="altf-print-btn" id="altf-print-modal" title="Print Current View">🖨️ Print</button>
                            <button class="altf-close-btn" id="altf-close-modal" title="Close (Esc)">✕</button>
                        </div>
                    </div>

                    <!-- SEARCH VIEW -->
                    <div id="altf-view-search" style="display:flex; flex-direction:column; flex-grow:1; overflow:hidden;">
                        <input type="text" id="altf-search-input" class="altf-search-input" placeholder="Search by name, salt, symptom (e.g. heartburn)..." autocomplete="off" />
                        <div class="altf-table-container" id="altf-table-wrapper" style="display: none;">
                            <table class="altf-table">
                                <thead>
                                    <tr>
                                        <th style="width: 20%;">AFI Medicine</th>
                                        <th style="width: 20%;">Matched Salt</th>
                                        <th style="width: 25%;">Description</th>
                                        <th style="width: 15%;">Group</th>
                                        <th style="width: 20%;">Brand & Product</th>
                                    </tr>
                                </thead>
                                <tbody id="altf-table-body"></tbody>
                            </table>
                        </div>
                        <div id="altf-prompt-msg" class="altf-placeholder-msg">
                            Start typing above to view matching medicine details.
                        </div>
                    </div>

                    <!-- PURCHASE HISTORY VIEW -->
                    <div id="altf-view-history" style="display:none; flex-direction:column; flex-grow:1; overflow:hidden;">
                        <div class="altf-table-container">
                            <table class="altf-table">
                                <thead>
                                    <tr>
                                        <th style="width: 12%;">Date</th>
                                        <th style="width: 10%;">Invoice No</th>
                                        <th style="width: 20%;">Party Name</th>
                                        <th style="width: 27%;">Details (MRP / Exp / Pack)</th>
                                        <th style="width: 10%;">Qty</th>
                                        <th style="width: 10%;">Rate</th>
                                        <th style="width: 11%;">Expiry Alert</th>
                                    </tr>
                                </thead>
                                <tbody id="altf-history-tbody"></tbody>
                            </table>
                        </div>
                        <div id="altf-history-msg" class="altf-placeholder-msg" style="display:none;">
                            No purchase transaction records found for this item.
                        </div>
                    </div>

                </div>
            </div>
        `;

        shadowRoot.innerHTML = modalHTML;

        shadowRoot.getElementById('altf-close-modal').addEventListener('click', closeMedicineModal);
        shadowRoot.getElementById('altf-print-modal').addEventListener('click', printCurrentTable);
        shadowRoot.getElementById('altf-search-input').addEventListener('input', handleSearch);
        shadowRoot.getElementById('altf-back-btn').addEventListener('click', showSearchView);
        shadowRoot.getElementById('altf-search-input').addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'a' || e.key === 'C' || e.key === 'A')) {
                return; 
            }
            e.stopPropagation();
        });
    }

    // Print Functionality
    function printCurrentTable() {
        if (!shadowRoot) return;

        const isSearchView = shadowRoot.getElementById('altf-view-search').style.display !== 'none';
        const modalTitle = shadowRoot.getElementById('altf-modal-title').innerText;
        let activeTableHTML = "";

        if (isSearchView) {
            const wrapper = shadowRoot.getElementById('altf-table-wrapper');
            if (wrapper && wrapper.style.display !== 'none') {
                activeTableHTML = wrapper.innerHTML;
            } else {
                alert("No table data to print.");
                return;
            }
        } else {
            const historyContainer = shadowRoot.querySelector('#altf-view-history .altf-table-container');
            if (historyContainer) {
                activeTableHTML = historyContainer.innerHTML;
            }
        }

        const printWindow = window.open('', '_blank', 'width=1000,height=700');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>AfI Cure Medical Store - Print</title>
                <style>
                    body { font-family: sans-serif; padding: 20px; color: #1e293b; }
                    .print-header { text-align: center; border-bottom: 2px solid #0f172a; padding-bottom: 10px; margin-bottom: 20px; }
                    .print-header h1 { margin: 0; font-size: 26px; color: #0f172a; text-transform: uppercase; letter-spacing: 1px; }
                    .print-header p { margin: 5px 0 0 0; font-size: 14px; color: #64748b; font-weight: bold; }
                    .meta-info { display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 15px; color: #475569; }
                    table { width: 100%; border-collapse: collapse; font-size: 12px; }
                    th, td { border: 1px solid #cbd5e1; padding: 8px 10px; text-align: left; vertical-align: top; }
                    th { background-color: #f1f5f9; color: #0f172a; font-weight: bold; }
                    tr:nth-child(even) { background-color: #f8fafc; }
                    .altf-badge { border: 1px solid #ccc; padding: 2px 5px; border-radius: 4px; font-size: 10px; }
                    .altf-item-link { color: #000; text-decoration: none; font-weight: bold; }
                    @media print {
                        body { padding: 0; }
                    }
                </style>
            </head>
            <body>
                <div class="print-header">
                    <h1>AfI Cure MEdical Store</h1>
                    <p>${modalTitle}</p>
                </div>
                <div class="meta-info">
                    <span>Printed Date: ${new Date().toLocaleString()}</span>
                    ${lastSearchQuery ? `<span>Filter Query: "${lastSearchQuery}"</span>` : ''}
                </div>
                ${activeTableHTML}
                <script>
                    window.onload = function() {
                        window.print();
                        window.close();
                    };
                <\/script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    function showSearchView() {
        if (!shadowRoot) return;
        shadowRoot.getElementById('altf-view-search').style.display = 'flex';
        shadowRoot.getElementById('altf-view-history').style.display = 'none';
        shadowRoot.getElementById('altf-back-btn').style.display = 'none';
        shadowRoot.getElementById('altf-modal-title').innerText = 'Medicine Information Dialog';
    }

    function parseDate(dateStr) {
        if (!dateStr) return new Date(0);
        const parts = dateStr.split('-');
        if (parts.length === 3) {
            const day = parseInt(parts[0], 10);
            const monthStr = parts[1];
            const year = parseInt(parts[2], 10);
            const months = { "Jan":0, "Feb":1, "Mar":2, "Apr":3, "May":4, "Jun":5, "Jul":6, "Aug":7, "Sep":8, "Oct":9, "Nov":10, "Dec":11 };
            const month = months[monthStr] !== undefined ? months[monthStr] : 0;
            return new Date(year, month, day);
        }
        return new Date(dateStr);
    }

    function calculateExpiryCountdown(fullDetailsStr) {
        if (!fullDetailsStr) return { badge: '-', days: null };

        const expMatch = fullDetailsStr.match(/Exp\.\s*Date:\s*([0-9]{1,2}-[A-Za-z]{3}-[0-9]{4})/i);
        if (!expMatch) return { badge: '-', days: null };

        const expDate = parseDate(expMatch[1]);
        const today = new Date();

        const diffTime = expDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays <= 0) {
            return { badge: `<span class="altf-badge altf-badge-danger">Expired</span>`, days: diffDays };
        } else if (diffDays <= 60) {
            return { badge: `<span class="altf-badge altf-badge-danger">⚠️ ${diffDays} days left</span>`, days: diffDays };
        } else {
            return { badge: `<span class="altf-badge altf-badge-ok">-</span>`, days: diffDays };
        }
    }

    function showPurchaseHistory(itemName) {
        if (!shadowRoot) return;

        let purchaseData = [];
        const scriptTag = document.getElementById('voucherDataJSON');
        if (scriptTag) {
            try {
                const parsedJSON = JSON.parse(scriptTag.textContent);
                purchaseData = (parsedJSON.vouchersGrouped && parsedJSON.vouchersGrouped.purchase) 
                                || parsedJSON.purchase 
                                || [];
            } catch (err) {
                console.error("voucherDataJSON Parsing Error:", err);
            }
        }

        const historyItems = [];

        purchaseData.forEach(p => {
            const pDate = p.date || '';
            const invNo = p.invoiceNo || '';
            const party = p.partyName || '';

            if (p.items && Array.isArray(p.items)) {
                p.items.forEach(it => {
                    if (cleanStr(it.desc) === cleanStr(itemName)) {
                        historyItems.push({
                            date: pDate,
                            parsedDate: parseDate(pDate),
                            invoiceNo: invNo,
                            partyName: party,
                            desc: it.desc,
                            fullDetails: it.fullDetails || '',
                            qty: it.qty || 0,
                            unit: it.unit || '',
                            rate: it.rate || 0,
                            amount: it.amount || 0
                        });
                    }
                });
            }
        });

        // Descending Date Sorting
        historyItems.sort((a, b) => b.parsedDate - a.parsedDate);

        shadowRoot.getElementById('altf-view-search').style.display = 'none';
        shadowRoot.getElementById('altf-view-history').style.display = 'flex';
        shadowRoot.getElementById('altf-back-btn').style.display = 'inline-block';
        shadowRoot.getElementById('altf-modal-title').innerText = `Purchase History: ${itemName}`;

        const tbody = shadowRoot.getElementById('altf-history-tbody');
        const historyMsg = shadowRoot.getElementById('altf-history-msg');

        if (historyItems.length === 0) {
            tbody.innerHTML = '';
            historyMsg.style.display = 'block';
        } else {
            historyMsg.style.display = 'none';
            tbody.innerHTML = historyItems.map(row => {
                const expInfo = calculateExpiryCountdown(row.fullDetails);
                return `
                    <tr>
                        <td><strong>${row.date}</strong></td>
                        <td>${row.invoiceNo}</td>
                        <td>${row.partyName}</td>
                        <td><small style="color:#2563eb; font-weight:600;">[${row.desc}]</small><br><small>${row.fullDetails}</small></td>
                        <td>${row.qty} ${row.unit}</td>
                        <td>₹${row.rate}</td>
                        <td>${expInfo.badge}</td>
                    </tr>
                `;
            }).join('');
        }
    }

    // Global function to open Expiry Alert Dialog 
    // Show items expiring in next 60 days, and expired items up to 15 days past expiration
    window.openExpiryModal = function() {
        injectModalUI();

        let purchaseData = [];
        const scriptTag = document.getElementById('voucherDataJSON');
        if (scriptTag) {
            try {
                const parsedJSON = JSON.parse(scriptTag.textContent);
                purchaseData = (parsedJSON.vouchersGrouped && parsedJSON.vouchersGrouped.purchase) 
                                || parsedJSON.purchase 
                                || [];
            } catch (err) {
                console.error("voucherDataJSON Parsing Error:", err);
            }
        }

        const expiringItems = [];

        purchaseData.forEach(p => {
            const pDate = p.date || '';
            const invNo = p.invoiceNo || '';
            const party = p.partyName || '';

            if (p.items && Array.isArray(p.items)) {
                p.items.forEach(it => {
                    const expInfo = calculateExpiryCountdown(it.fullDetails || '');
                    if (expInfo.days !== null && expInfo.days <= 60 && expInfo.days >= -15) {
                        expiringItems.push({
                            date: pDate,
                            parsedDate: parseDate(pDate),
                            invoiceNo: invNo,
                            partyName: party,
                            desc: it.desc || '',
                            fullDetails: it.fullDetails || '',
                            qty: it.qty || 0,
                            unit: it.unit || '',
                            rate: it.rate || 0,
                            expBadge: expInfo.badge,
                            daysLeft: expInfo.days
                        });
                    }
                });
            }
        });

        // Sort by nearest expiring days first
        expiringItems.sort((a, b) => a.daysLeft - b.daysLeft);

        shadowRoot.getElementById('altf-view-search').style.display = 'none';
        shadowRoot.getElementById('altf-view-history').style.display = 'flex';
        shadowRoot.getElementById('altf-back-btn').style.display = 'inline-block';
        shadowRoot.getElementById('altf-modal-title').innerText = `⚠️ Items Expiring Soon / Recently Expired (Last 15 Days)`;

        const tbody = shadowRoot.getElementById('altf-history-tbody');
        const historyMsg = shadowRoot.getElementById('altf-history-msg');

        if (expiringItems.length === 0) {
            tbody.innerHTML = '';
            historyMsg.style.display = 'block';
            historyMsg.innerText = 'Good news! No items are expiring soon or expired within the last 15 days.';
        } else {
            historyMsg.style.display = 'none';
            tbody.innerHTML = expiringItems.map(row => {
                return `
                    <tr>
                        <td><strong>${row.date}</strong></td>
                        <td>${row.invoiceNo}</td>
                        <td>${row.partyName}</td>
                        <td><small style="color:#2563eb; font-weight:600;">[${row.desc}]</small><br><small>${row.fullDetails}</small></td>
                        <td>${row.qty} ${row.unit}</td>
                        <td>₹${row.rate}</td>
                        <td>${row.expBadge}</td>
                    </tr>
                `;
            }).join('');
        }
    };

    window.openMedicineModal = function() {
        injectModalUI();
        showSearchView();
        const input = shadowRoot.getElementById('altf-search-input');
        input.focus();
    };

    window.closeMedicineModal = function() {
        const hostDiv = document.getElementById('altf-search-host');
        if (hostDiv) {
            hostDiv.remove();
            shadowRoot = null;
        }
    };

    function renderTableData(data) {
        if (!shadowRoot) return;
        const tbody = shadowRoot.getElementById('altf-table-body');
        const tableWrapper = shadowRoot.getElementById('altf-table-wrapper');
        const promptMsg = shadowRoot.getElementById('altf-prompt-msg');

        if (!tbody) return;

        if (data.length === 0) {
            tableWrapper.style.display = 'none';
            promptMsg.style.display = 'block';
            promptMsg.innerHTML = 'No matching records found.';
            return;
        }

        tbody.innerHTML = data.map(row => {
            const hName = highlightText(row.name, lastSearchQuery);
            const hSalt = highlightText(row.salt, lastSearchQuery);
            const hDescHi = highlightText(row.description_hi, lastSearchQuery);
            const hDescEn = highlightText(row.description_en, lastSearchQuery);
            const hGroup = highlightText(row.group, lastSearchQuery);
            const hBrands = highlightText(row.brand_examples, lastSearchQuery);

            const descCell = hDescHi 
                ? `${hDescHi}<br><span style="color:#64748b; font-size: 12px;">${hDescEn}</span>` 
                : '';
            
            const groupCell = hGroup 
                ? `<span class="altf-badge">${hGroup}</span>` 
                : '';

            const itemNameHtml = (row.name && row.name !== 'N/A')
                ? `<span class="altf-item-link" data-itemname="${row.name}">${hName}</span>`
                : '<strong style="color:#0f172a;">N/A</strong>';

            return `
                <tr>
                    <td>${itemNameHtml}</td>
                    <td style="color:#2563eb; font-weight:500;">${hSalt || 'N/A'}</td>
                    <td>${descCell}</td>
                    <td>${groupCell}</td>
                    <td><small style="color:#475569; font-weight:500;">${hBrands || '-'}</small></td>
                </tr>
            `;
        }).join('');

        tbody.querySelectorAll('.altf-item-link').forEach(el => {
            el.addEventListener('click', function() {
                const itemName = this.getAttribute('data-itemname');
                showPurchaseHistory(itemName);
            });
        });

        promptMsg.style.display = 'none';
        tableWrapper.style.display = 'block';
    }

    function handleSearch(e) {
        if (!shadowRoot) return;
        const query = cleanStr(e.target.value);
        lastSearchQuery = query;
        const tableWrapper = shadowRoot.getElementById('altf-table-wrapper');
        const promptMsg = shadowRoot.getElementById('altf-prompt-msg');

        if (query === '') {
            tableWrapper.style.display = 'none';
            promptMsg.style.display = 'block';
            promptMsg.innerHTML = 'Start typing above to view matching medicine details.';
            return;
        }

        let itemlist = [];
        const scriptTag = document.getElementById('voucherDataJSON');
        if (scriptTag) {
            try {
                const parsedJSON = JSON.parse(scriptTag.textContent);
                itemlist = parsedJSON.Itemlist 
                        || (parsedJSON.vouchersGrouped && parsedJSON.vouchersGrouped.Itemlist) 
                        || [];
            } catch (err) {
                console.error("voucherDataJSON Parsing Error:", err);
            }
        }

        const results = [];
        const matchedMedIndices = new Set();

        itemlist.forEach(item => {
            const rawName = item.name ? item.name.trim() : (item.desc ? item.desc.trim() : '');
            const rawIh1 = item.ih1 ? item.ih1.trim() : '';

            const cName = cleanStr(rawName);
            const cIh1 = cleanStr(rawIh1);

            let matchedMedIdx = medicinesData.findIndex(med => {
                const cMedSalt = cleanStr(med.salt);
                return (cIh1 && (cIh1.includes(cMedSalt) || cMedSalt.includes(cIh1))) ||
                       (cName && (cName.includes(cMedSalt) || cMedSalt.includes(cName)));
            });

            const matchedMed = matchedMedIdx !== -1 ? medicinesData[matchedMedIdx] : null;

            const matchesQuery = 
                cName.includes(query) ||
                cIh1.includes(query) ||
                (matchedMed && (
                    cleanStr(matchedMed.description_hi).includes(query) ||
                    cleanStr(matchedMed.description_en).includes(query) ||
                    cleanStr(matchedMed.group).includes(query) ||
                    cleanStr(matchedMed.salt).includes(query) ||
                    cleanStr(matchedMed.brand_examples).includes(query)
                ));

            if (matchesQuery) {
                if (matchedMedIdx !== -1) matchedMedIndices.add(matchedMedIdx);
                results.push({
                    name: rawName || 'N/A',
                    salt: rawIh1 || (matchedMed ? matchedMed.salt : ''),
                    description_hi: matchedMed ? matchedMed.description_hi : '',
                    description_en: matchedMed ? matchedMed.description_en : '',
                    group: matchedMed ? matchedMed.group : '',
                    brand_examples: matchedMed ? matchedMed.brand_examples : ''
                });
            }
        });

        medicinesData.forEach((med, idx) => {
            if (!matchedMedIndices.has(idx)) {
                const matchesQuery = 
                    cleanStr(med.description_hi).includes(query) ||
                    cleanStr(med.description_en).includes(query) ||
                    cleanStr(med.group).includes(query) ||
                    cleanStr(med.salt).includes(query) ||
                    cleanStr(med.brand_examples).includes(query);

                if (matchesQuery) {
                    results.push({
                        name: 'N/A',
                        salt: med.salt,
                        description_hi: med.description_hi,
                        description_en: med.description_en,
                        group: med.group,
                        brand_examples: med.brand_examples || ''
                    });
                }
            }
        });

        renderTableData(results);
    }
})();
