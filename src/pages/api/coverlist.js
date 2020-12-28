export default (req, res) => {
  res.statusCode = 200
  res.json({
    hospitalCovers: [
      {
        description:
          'Your accommodation costs (less any applicable excess/co-payment) will be covered when you are admitted to a shared room in an Agreement private hospital for covered services.',
        title:
          'Accommodation in shared room in a private hospital for included services. You can choose your own doctor.',
        label: 'private_hospital_shared',
        name: 'Private Hospital - Shared Room',
        sequence: 2,
        cover_type: 'popular_cover',
        sequence_basic_gold: 1,
        sequence_step2: 1,
        default_checked: true
      },
      {
        description:
          'Hospital treatment for investigation and treatment of conditions associated with pregnancy and child birth.  Treatment for the baby is covered under the clinical category relevant to their condition. For example, respiratory conditions are covered under Lung and chest.  Female reproductive conditions are listed separately under Gynaecology.  Fertility treatments are listed separately under Assisted reproductive services.  Miscarriage and termination of pregnancy is listed separately under Miscarriage and termination of pregnancy.',
        title: 'Pregnancy and Birth',
        label: 'pregnancy_birth',
        name: 'Pregnancy and Birth',
        sequence: 39,
        cover_type: 'popular_cover',
        sequence_basic_gold: 3,
        sequence_step2: 2,
        default_checked: false
      },
      {
        description:
          'Hospital treatment for the investigation and treatment of the heart, heart-related conditions and vascular system.  For example: heart failure and heart attack, monitoring of heart conditions, varicose veins and removal of plaque from arterial walls.  Chemotherapy and radiotherapy for cancer is listed separately under Chemotherapy, radiotherapy and immunotherapy for cancer.',
        title: 'Heart and Vascular System',
        label: 'heart_vascular',
        name: 'Heart and Vascular System',
        sequence: 28,
        cover_type: 'popular_cover',
        sequence_basic_gold: 5,
        sequence_step2: 3,
        default_checked: false
      },
      {
        description:
          'Emergency ambulance transport.\n\nWaiting Period:  1 day waiting period to be served before eligibility to make a claim.',
        title: 'Covers ambulance expenses incurred when treated by paramedics and transported in ambulances',
        label: 'ambulance',
        name: 'Ambulance',
        sequence: 4,
        cover_type: 'popular_cover',
        sequence_basic_gold: 0,
        sequence_step2: 4,
        default_checked: false
      },
      {
        description:
          'For example: psychoses such as schizophrenia, mood disorders such as depression, eating disorders and addiction therapy.',
        title: 'Hospital psychiatric services',
        label: 'hospital_psychiatric_service',
        name: 'Hospital psychiatric services',
        sequence: 8,
        cover_type: 'popular_cover',
        sequence_basic_gold: 39,
        sequence_step2: 5,
        default_checked: false
      },
      {
        description:
          'Physical therapies and exercise treatments when admitted to a rehabilitation facility that follow an inpatient admission. Services may include:\n\n<ul><li>Stroke recovery</li>\n\n<li>Strengthening of joints and limbs</li>\n\n<li>Cardiac rehabilitation</li></ul>',
        title: 'Help for those with substance abuse problems',
        label: 'rehabilitation',
        name: 'Rehabilitation',
        sequence: 7,
        cover_type: 'popular_cover',
        sequence_basic_gold: 7,
        sequence_step2: 6,
        default_checked: false
      },
      {
        description:
          'Inpatient services relating to egg retrieval and implantation. This includes IVF treatment and GIFT treatment. Consultations as an out-patient with an obstetrician or fertility specialist will attract a Medicare rebate only and will not be covered by any Private Health insurer.',
        title: 'Services to assist those in achieving a pregnancy',
        label: 'assisted_reproductive',
        name: 'Assisted Reproductive Services',
        sequence: 40,
        cover_type: 'additional_cover',
        sequence_basic_gold: 13,
        sequence_step2: 7,
        default_checked: false
      },
      {
        description:
          'Hospital treatment for the investigation and treatment of the eye and the contents of the eye socket.  For example: retinal detachment, tear duct conditions, eye infections and medically managed trauma to the eye.  Cataract procedures are listed separately under Cataracts.  Eyelid procedures are listed separately under Plastic and reconstructive surgery.  Chemotherapy and radiotherapy for cancer is listed separately under Chemotherapy, radiotherapy and immunotherapy for cancer.',
        title: 'Eye not cataracts',
        label: 'eye_not_cataracts',
        name: 'Eye (not cataracts)',
        sequence: 11,
        cover_type: 'additional_cover',
        sequence_basic_gold: 37,
        sequence_step2: 8,
        default_checked: false
      },
      {
        description: 'Hospital treatment for dialysis treatment for chronic kidney failure.',
        title: 'Dialysis for chronic kidney disease',
        label: 'dialysis_chronic_kidney',
        name: 'Dialysis for chronic kidney disease',
        sequence: 38,
        cover_type: 'additional_cover',
        sequence_basic_gold: 14,
        sequence_step2: 9,
        default_checked: false
      },
      {
        description:
          'Surgeries that replace a joint in the body with an artificial prosthesis. This can include the replacement of a component of a joint, or a replacement for the entire joint. This service may include the replacement of the:\n\n<ul><li>Hip</li>\n\n<li>Knee</li>\n\n<li>Shoulder</li></ul>',
        title: 'Surgical procedures that involve total or partial replacement of a joint',
        label: 'joint_replacement',
        name: 'Joint replacements',
        sequence: 37,
        cover_type: 'additional_cover',
        sequence_basic_gold: 2,
        sequence_step2: 10,
        default_checked: false
      },
      {
        description:
          'Hospital treatment to correct hearing loss, including implantation of a prosthetic hearing device.\nStapedectomy is listed separately under Ear, nose and throat.',
        title: 'Implantation of hearing devices',
        label: 'hearing_device',
        name: 'Implantation of hearing devices',
        sequence: 35,
        cover_type: 'additional_cover',
        sequence_basic_gold: 16,
        sequence_step2: 11,
        default_checked: false
      },
      {
        description:
          'Hospital treatment for the investigation and treatment of the male reproductive system including the prostate.',
        title: 'Male Reproductive System',
        label: 'male_reproductive_system',
        name: 'Male Reproductive System',
        sequence: 17,
        cover_type: 'additional_cover',
        sequence_basic_gold: 32,
        sequence_step2: 12,
        default_checked: false
      },
      {
        description:
          'Hospital treatment for surgery that is designed to reduce a person’s weight, remove excess skin due to weight loss and reversal of a bariatric procedure. For example: gastric banding, gastric bypass, sleeve gastrectomy.',
        title: 'Weight loss surgery',
        label: 'weight_loss_surgery',
        name: 'Weight loss surgery',
        sequence: 41,
        cover_type: 'additional_cover',
        sequence_basic_gold: 12,
        sequence_step2: 13,
        default_checked: false
      },
      {
        description: 'Hospital treatment for surgery to remove a cataract and replace with an artificial lens.',
        title: 'Cataracts',
        label: 'cataracts',
        name: 'Cataracts',
        sequence: 36,
        cover_type: 'additional_cover',
        sequence_basic_gold: 15,
        sequence_step2: 14,
        default_checked: false
      },
      {
        description:
          'Hospital treatment which is medically necessary for the investigation and treatment of any physical deformity, whether acquired as a result of illness or accident, or congenital.  For example: burns requiring a graft, cleft palate, club foot and angioma.  Plastic surgery that is medically necessary relating to the treatment of a skin-related condition is listed separately under Skin. Chemotherapy and radiotherapy for cancer is listed separately under Chemotherapy, radiotherapy and immunotherapy for cancer.',
        title: 'Plastic and Reconstructive Surgery (medically necessary)',
        label: 'plastic_reconstructive_surgery',
        name: 'Plastic and Reconstructive Surgery (medically necessary)',
        sequence: 32,
        cover_type: 'additional_cover',
        sequence_basic_gold: 19,
        sequence_step2: 15,
        default_checked: false
      }
    ],
    extraCovers: [
      {
        description:
          "Diagnostic (and other preventative) dental procedures (that are not covered under the service 'Preventative Dental') which are completed to help you keep on top of your oral health. This service doesn't include more complex treatments or procedures such as orthodontic work, endodontic treatment (root canal therapy), crowns or bridges. See 'Major Dental' for further information. This is routine dental procedures that may include: \n<ul><li>Fillings</li>\n<li>Basic extractions (excluding wisdom teeth)</li>\n<li>X-rays</li></ul>\nWaiting Period: 2 months if not previously insured for this service.",
        title: 'Regular check-ups, cleaning, fillings, preventative x-rays.',
        label: 'general_dental',
        name: 'General Dental',
        sequence: 48,
        cover_type: 'popular_cover',
        sequence_basic_gold: 0,
        sequence_step2: 1,
        default_checked: false
      },
      {
        description:
          "Includes complex dentistry procedures that are not covered by 'Preventative Dental' or 'General Dental'. This service may include procedures such as:<ul><li>Crowns and bridges</li><li>Root canal therapy</li><li>Removal of wisdom teeth (only if treated outside of a hospital.)</li><li>Dentures</li><li>Implants</li></ul>Waiting Period: 12 months if not previously insured for this service.",
        title: 'Restorations, crowns, bridgework, dentures.',
        label: 'major_dental',
        name: 'Major Dental',
        sequence: 49,
        cover_type: 'popular_cover',
        sequence_basic_gold: 2,
        sequence_step2: 2,
        default_checked: false
      },
      {
        description:
          'The correction of visual impairment by a registered optician, such as long or short sightedness. Examples of treatments may include:<ul> \n\n<li>Prescription glasses</li>\n\n<li>Prescription contact lenses</li>\n\n</ul>\n\nWaiting Period: 6 months if not previously insured for this service.',
        title:
          'The correction of visual impairment by a registered optician, such as long or short sightedness. Examples of treatments may include:<ul><li>Prescription glasses</li><li>Prescription contact lenses</li></ul>',
        label: 'optical',
        name: 'Optical',
        sequence: 51,
        cover_type: 'popular_cover',
        sequence_basic_gold: 3,
        sequence_step2: 3,
        default_checked: false
      },
      {
        description:
          'Annual Limit: <span>$300 per person (combined limit for physiotherapy &amp; other services)</span><br>\n                                                    Example Benefits:<br>\n                                                    <span>Initial visit - $25<br>\n                                                    sequent visit - $25</span><br>\n                                                    Waiting Period: <span>2 months</span>',
        title: 'Treatment of joint and muscle pain, sports injuries. Can also include pre- and post-natal care.',
        label: 'physiotherapy',
        name: 'Physiotherapy',
        sequence: 53,
        cover_type: 'popular_cover',
        sequence_basic_gold: 4,
        sequence_step2: 4,
        default_checked: false
      },
      {
        description:
          'If included in your health cover, you may receive a specified contribution towards the purchase cost of a hearing aid, which is a battery-powered, electronic device that makes listening easier for people who have suffered hearing loss. Benefits are payable for speech processors (the external component of a cochlear implant) when the processor is replaced as part of an out-patient procedure, however a benefit is never payable for cochlear speech processor. \n\nWaiting Period: 12 - 36 months if not previously insured for this service.',
        title: 'Help for those experiencing hearing loss.',
        label: 'hearing_aids',
        name: 'Hearing Aids',
        sequence: 63,
        cover_type: 'popular_cover',
        sequence_basic_gold: 5,
        sequence_step2: 5,
        default_checked: false
      },
      {
        description:
          'Includes chiropractic treatment that involves manipulation based therapy to treat conditions related to the nerves, skeleton and muscles. Benefits are only payable for consultations with a registered chiropractor. Chiropractic services are sometimes sought for:<ul> \n\n<li>Back and neck pain</li>\n\n<li>Sciatica</li>\n\n<li>Frequent headaches</li>\n\n<li>Joint pains and muscle strains</li>\n\n<li>Work-related, repetitive strain and sports-related injuries</li>\n\n</ul>\n\nWaiting Period: 2 months if not previously insured for this service.',
        title: 'Relieving back and neck pain and other musculoskeletal conditions.',
        label: 'chiropractic',
        name: 'Chiropractic and Osteopathy',
        sequence: 54,
        cover_type: 'popular_cover',
        sequence_basic_gold: 6,
        sequence_step2: 6,
        default_checked: false
      },
      {
        description:
          'If included in your health cover, you may receive a benefit towards the cost of approved prescription pharmaceutical items that are not part of the Medicare Pharmaceutical Benefits Scheme (PBS).\nWaiting Period: 2 months if not previously insured for this service.',
        title:
          'Help to lower the cost of prescribed medication approved by the fund and not subsidised under the Pharmaceutical Benefits Scheme.',
        label: 'pharmaceuticals',
        name: 'Pharmaceuticals',
        sequence: 64,
        cover_type: 'additional_cover',
        sequence_basic_gold: 21,
        sequence_step2: 7,
        default_checked: false
      },
      {
        description: 'Treatment for problems that affect your feet or lower legs',
        title: 'Treats sore, injured or diseased feet and ankles.',
        label: 'podiatry_therapy',
        name: 'Podiatry',
        sequence: 55,
        cover_type: 'additional_cover',
        sequence_basic_gold: 12,
        sequence_step2: 8,
        default_checked: false
      },
      {
        description: 'Laser Eye Surgery',
        title: 'Laser Eye Surgery',
        label: 'laser_eye_surgery',
        name: 'Laser Eye Surgery',
        sequence: 52,
        cover_type: 'additional_cover',
        sequence_basic_gold: 22,
        sequence_step2: 9,
        default_checked: false
      },
      {
        description:
          'A form of physical therapy used to treat or prevent soft tissue pain and restricted joint movement caused by muscle or myofascia dysfunction.',
        title: 'Myotherapy',
        label: 'myotherapy_therapy',
        name: 'Myotherapy',
        sequence: 59,
        cover_type: 'additional_cover',
        sequence_basic_gold: 16,
        sequence_step2: 10,
        default_checked: false
      },
      {
        description:
          'Consultations with an acupuncturist who specializes in the diagnosis and treatment of acute muscle pains through acupuncture therapy which involves penetration of the skin with needles to stimulate certain points on the body in order to relieve pain. If included in your health cover, benefits are only payable for consultations with a registered acupuncturist. Waiting Period: 2 months if not previously insured for this service.',
        title:
          'Consultation and treatment with a recognised acupuncturist. Involves the therapist inserting fine needles into certain pressure points in the body to restore health and well-being.',
        label: 'acupuncture',
        name: 'Acupuncture',
        sequence: 58,
        cover_type: 'additional_cover',
        sequence_basic_gold: 19,
        sequence_step2: 11,
        default_checked: false
      },
      {
        description:
          'The assessment and treatment of the muscles, tendons, ligaments and connective tissues of the body to assist in rehabilitation, pain and injury management',
        title: 'Massage treatments including therapeutic, sports and oriental to aid with muscular aches and pains.',
        label: 'remedial_massage',
        name: 'Remedial Massage',
        sequence: 57,
        cover_type: 'additional_cover',
        sequence_basic_gold: 7,
        sequence_step2: 12,
        default_checked: false
      },
      {
        description:
          'Group or individual consultations with a registered psychologist. A benefit is not payable for tests (e.g. psychometric testing). Psychology services are commonly sought for:<ul> \n\n<li>Marital, family or relationship problems</li>\n\n<li>Stress or pain management</li>\n\n<li>Overcoming fears, phobias, anxiety and panic attacks</li>\n\n<li>Sexual difficulties</li>\n\n<li>Eating and weight control problems</li>\n\n</ul>\n\nWaiting Period: 2 months if not previously insured for this service.',
        title: 'Diagnosis, treatment and prevention of conditions affecting the human mind and behaviour.',
        label: 'psychology',
        name: 'Psychology',
        sequence: 65,
        cover_type: 'additional_cover',
        sequence_basic_gold: 8,
        sequence_step2: 13,
        default_checked: false
      },
      {
        description:
          'A range of artificial health aids that may assist in everyday living that would otherwise be difficult or impossible. Examples may include:<ul> \n\n<li>Blood pressure monitor and coagulation checks (blood clots)</li>\n\n<li>Hip, knee, ankle, foot and ankle-foot orthoses</li>\n\n<li>Finger, hand, arm & elbow orthoses/splints</li>\n\n<li>Nebuliser and spacers (asthma)</li>\n\n<li>CPAP machines and parts</li>\n\n<li>Crutches</li>\n\n</ul>\n\nWaiting Period: 12 months if not previously insured for this service.',
        title: 'Used to better manage diabetes. Some policies may also cover supplies and medication.',
        label: 'glucose_monitor',
        name: 'Other Aids',
        sequence: 62,
        cover_type: 'additional_cover',
        sequence_basic_gold: 20,
        sequence_step2: 14,
        default_checked: false
      }
    ]
  })
}
