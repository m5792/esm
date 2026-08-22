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
    "salt": "Aceclofenac + Paracetamol + Serratiopeptidase",
    "description_hi": "गंभीर सूजन, चोट, ऑपरेशन के बाद का दर्द और घाव सुखाने में असरदार।",
    "description_en": "Effective for severe swelling, injury, post-surgery pain, and tissue healing.",
    "group": "PAIN KILLER + ANTI-INFLAMMATORY",
    "brand_examples": "Zerodol-SP, Hifenac-D, Acemiz-S, Signoflam"
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
    "brand_examples": "Cipzer, Aptimust, Cypon"
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
    "salt": "Norethisterone (5mg)",
    "description_hi": "पीरियड्स आगे बढ़ाना (Delay) और भारी ब्लीडिंग रोकना।",
    "description_en": "Used to delay periods and control heavy menstrual bleeding.",
    "group": "HORMONAL / GYNECOLOGY",
    "brand_examples": "Primolut-N, Regestrone, Norgest"
  },
  {
    "salt": "Levonorgestrel (1.5mg)",
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
  }


    ];

    function cleanStr(str) {
        return (str || "").toLowerCase().trim();
    }

    let shadowRoot = null;

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
            .altf-close-btn { 
                background: #f1f5f9; color: #64748b; border: none; width: 32px; height: 32px;
                border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: bold;
                display: flex; align-items: center; justify-content: center; transition: all 0.2s;
            }
            .altf-close-btn:hover { background: #fee2e2; color: #ef4444; }
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
                        <button class="altf-close-btn" id="altf-close-modal" title="Close (Esc)">✕</button>
                    </div>

                    <!-- SEARCH VIEW -->
                    <div id="altf-view-search" style="display:flex; flex-direction:column; flex-grow:1; overflow:hidden;">
                        <input type="text" id="altf-search-input" class="altf-search-input" placeholder="Search by name, salt, symptom (e.g. heartburn)..." autocomplete="off" />
                        <div class="altf-table-container" id="altf-table-wrapper" style="display: none;">
                            <table class="altf-table">
                                <thead>
                                    <tr>
                                        <th style="width: 20%;">Medicine Name</th>
                                        <th style="width: 20%;">Matched Salt</th>
                                        <th style="width: 25%;">Description</th>
                                        <th style="width: 15%;">Group</th>
                                        <th style="width: 20%;">Brand Examples</th>
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
        shadowRoot.getElementById('altf-search-input').addEventListener('input', handleSearch);
        shadowRoot.getElementById('altf-back-btn').addEventListener('click', showSearchView);
        // 👉 FIX ADDED HERE
shadowRoot.getElementById('altf-search-input').addEventListener('keydown', function(e) {
    // Allow Ctrl+C, Ctrl+A, Cmd+C, Cmd+A for copy/select operations
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'a' || e.key === 'C' || e.key === 'A')) {
        return; 
    }
    e.stopPropagation();
});
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

    // NEW FEATURE: Global function to open Expiry Alert Dialog for all items expiring in next 60 days
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
                    // Filter items expiring in 60 days or already expired
                    if (expInfo.days !== null && expInfo.days <= 60) {
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
        shadowRoot.getElementById('altf-modal-title').innerText = `⚠️ Items Expiring in Next 60 Days`;

        const tbody = shadowRoot.getElementById('altf-history-tbody');
        const historyMsg = shadowRoot.getElementById('altf-history-msg');

        if (expiringItems.length === 0) {
            tbody.innerHTML = '';
            historyMsg.style.display = 'block';
            historyMsg.innerText = 'Good news! No items are expiring within the next 60 days.';
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
            const descCell = row.description_hi 
                ? `${row.description_hi}<br><span style="color:#64748b; font-size: 12px;">${row.description_en}</span>` 
                : '';
            
            const groupCell = row.group 
                ? `<span class="altf-badge">${row.group}</span>` 
                : '';

            const itemNameHtml = (row.name && row.name !== 'N/A')
                ? `<span class="altf-item-link" data-itemname="${row.name}">${row.name}</span>`
                : '<strong style="color:#0f172a;">N/A</strong>';

            return `
                <tr>
                    <td>${itemNameHtml}</td>
                    <td style="color:#2563eb; font-weight:500;">${row.salt || 'N/A'}</td>
                    <td>${descCell}</td>
                    <td>${groupCell}</td>
                    <td><small style="color:#475569; font-weight:500;">${row.brand_examples || '-'}</small></td>
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