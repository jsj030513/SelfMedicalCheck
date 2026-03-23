const DATA = {
    head: {
      name: "머리",
      conditions: [
        { id:"tension-headache", name:"긴장성 두통", severity:"mild",
          desc:"스트레스나 피로로 인해 발생하는 가장 흔한 두통 유형입니다.",
          symptoms:["머리가 조이는 느낌","양쪽 머리 통증","목 뒤 뻐근함","압박감"] },

        { id:"migraine", name:"편두통", severity:"moderate",
          desc:"한쪽 머리에 박동성 통증이 나타나는 신경학적 질환입니다.",
          symptoms:["한쪽 머리 박동성 통증","구역질","빛에 예민함","소리에 예민함"] },

        { id:"dizziness", name:"어지럼증", severity:"mild",
          desc:"귀 안의 균형 기관 문제, 혈압 변화, 빈혈 등으로 발생할 수 있습니다.",
          symptoms:["빙빙 도는 느낌","균형 잡기 어려움","메스꺼움"] },

        { id:"cold-headache", name:"감기로 인한 두통", severity:"mild",
          desc:"감기 바이러스 감염으로 인한 두통입니다.",
          symptoms:["두통","발열","코막힘","몸살"] },

        { id:"cluster-headache", name:"군발성 두통", serverity:"mild",
          desc:"짧은 시간안에 강한 두통이 느껴진느 두통입니다.",
          symptoms:["한쪽 눈 주변 극심한 통증", "눈물","코막힘","야간에 심해짐"] },

        { id:"brain-fatigue", name:"뇌 피로 (집중력 저하)", severity:"mild",
            desc:"과도한 학습, 스트레스로 인한 뇌 피로 상태입니다.",
            symptoms:["집중력 저하","멍한 느낌","두통","피로감"] }
      ],
      medicines: [
        { name:"타이레놀 (아세트아미노펜)", category:"해열진통제",
          dosage:"1회 500~1000mg, 4~6시간 간격. 1일 최대 4000mg", caution:"간 질환자, 음주 중 복용 주의" },
        { name:"이부프로펜 (부루펜)", category:"소염진통제",
          dosage:"1회 200~400mg, 4~6시간 간격. 식후 복용", caution:"위장장애 주의. 공복 복용 금지" },
        { name:"베타히스틴 (메니에르정)", category:"어지럼증 치료제",
          dosage:"1회 8~16mg, 하루 3회 식후", caution:"기관지 천식 환자 주의" }
      ]
    },
    eye: { name:"눈", conditions:[
      { id:"conjunctivitis", name:"결막염", severity:"mild", 
        desc:"눈의 흰자위를 덮는 결막에 염증이 생기는 질환입니다.", 
        symptoms:["눈 충혈","눈물 과다","눈곱","가려움","이물감"] },
      { id:"dry-eye", name:"안구건조증", severity:"mild", 
        desc:"눈물이 부족하거나 눈 표면이 건조해지는 상태입니다.", 
        symptoms:["눈 건조함","이물감","따가움","시야 흐림"] },
      { id:"stye", name:"다래끼", severity:"mild", 
        desc:"눈꺼풀의 피지선에 세균이 감염되어 생기는 급성 염증입니다.", 
        symptoms:["눈꺼풀 부종","통증","붉어짐"] },
      { id:"eye-strain", name:"눈 피로", severity:"mild",
        desc:"장시간 화면 사용으로 발생하는 눈의 피로입니다.",
        symptoms:["눈 뻑뻑함","두통","시야 흐림","눈 따가움"] },
      { id:"blepharitis", name:"안검염", severity:"mild",
        desc:"눈꺼풀 가장자리에 염증이 생기는 질환입니다.",
        symptoms:["눈꺼풀 붓기","가려움","눈곱","충혈"] }  
    ], medicines:[
      { name:"인공눈물 (히알루론산)", category:"점안액", 
        dosage:"1회 1~2방울, 하루 3~5회", caution:"개봉 후 1개월 이내 사용" },
      { name:"나파졸린 점안액", category:"충혈제거 점안액", 
        dosage:"1회 1~2방울, 하루 3~4회", caution:"3일 이상 연속 사용 금지" },
      { name:"테라마이신 안연고", category:"항생제 안연고", 
        dosage:"하루 2~4회, 눈꺼풀 안쪽에 소량", caution:"7일 이상 사용 금지" }
    ]},

    ear: { name:"귀", conditions:[
      { id:"earache", name:"귀통증", severity:"mild", 
        desc:"감기, 수영 후 물이 들어간 경우, 기압 변화 등으로 발생합니다.", 
        symptoms:["귀 통증","먹먹한 느낌","청력 저하"] },
      
        { id:"tinnitus", name:"이명", severity:"moderate", 
        desc:"외부 소리 없이 귀에서 소리가 나는 증상입니다.", 
        symptoms:["귀에서 삐 소리","웅웅 거리는 소리","청력 저하"] },
      
        { id:"ear-clog", name:"귀 막힘", severity:"mild", 
          desc:"귀지 누적, 감기 후 이관 기능 장애로 발생합니다.", 
          symptoms:["먹먹한 느낌","자기 목소리가 크게 들림","청력 저하"] },

      { id:"otitis-media", name:"중이염", severity:"moderate",
        desc:"귀 안쪽에 염증이 생기는 질환으로 감기 후 자주 발생합니다.",
        symptoms:["귀 통증","발열","청력 저하","귀 먹먹함"] }
    ], medicines:[
      { name:"오티텍 귀 세정액", category:"귀 세정제", 
        dosage:"하루 2~3회, 귀에 3~4방울", caution:"고막 손상 시 사용 금지" },
      { name:"이부프로펜 (부루펜)", category:"소염진통제", 
        dosage:"1회 200~400mg, 4~6시간 간격 식후", caution:"위장장애 주의" }
    ]},

    nose: { name:"코", conditions:[
      { id:"rhinitis", name:"비염", severity:"mild", 
        desc:"코 점막의 염증으로, 재채기·콧물·코막힘이 특징입니다.", 
        symptoms:["재채기","맑은 콧물","코막힘","눈 가려움"] },
        
      { id:"sinusitis", name:"부비동염 (축농증)", severity:"moderate", 
        desc:"코 주변 공기 공간에 염증이 생기는 질환입니다.", 
        symptoms:["누런 콧물","코막힘","안면 통증","두통","발열"] },

      { id:"nosebleed", name:"코피", severity:"mild", 
        desc:"건조한 날씨, 코 풀기 등으로 코 안의 혈관이 터지는 증상입니다.", 
        symptoms:["코 출혈","혈액이 목으로 넘어가는 느낌"] },

      { id:"allergic-rhinitis", name:"알레르기 비염", severity:"mild",
        desc:"꽃가루, 먼지 등에 의해 발생하는 비염입니다.",
        symptoms:["재채기","맑은 콧물","코막힘","눈 가려움"] }

    ], medicines:[
      { name:"오트리빈 (자일로메타졸린)", category:"비강 충혈제거 스프레이", 
        dosage:"1회 1~2회 분무, 하루 최대 3회", caution:"3일 이상 연속 사용 금지" },
      { name:"세티리진 (지르텍)", category:"항히스타민제", 
        dosage:"성인 10mg, 하루 1회 취침 전", caution:"졸음 유발 가능" },
      { name:"생리식염수 비강 스프레이", category:"비강 세정제", 
        dosage:"하루 수시로 사용 가능", caution:"임산부, 소아도 사용 가능" }
    ]},

    throat: { name:"목", conditions:[
      { id:"pharyngitis", name:"인두염 (목 통증)", severity:"mild", 
        desc:"바이러스 또는 세균 감염으로 인한 목 안쪽의 염증입니다.", 
        symptoms:["목 통증","삼킬 때 통증","목 가려움","발열"] },

      { id:"tonsillitis", name:"편도염", severity:"moderate", 
        desc:"편도에 발생하는 감염성 염증으로, 심한 목 통증과 고열이 특징입니다.", 
        symptoms:["심한 목 통증","고열","편도 흰 반점","삼키기 어려움"] },

      { id:"hoarseness", name:"쉰 목소리 (후두염)", severity:"mild", 
        desc:"성대의 염증으로 쉰 목소리가 나는 증상입니다.", 
        symptoms:["목소리 변화","목 통증","마른 기침","목 이물감"] },
      
      { id:"laryngitis", name:"후두염", severity:"mild",
        desc:"성대에 염증이 생겨 목소리가 변하는 질환입니다.",
        symptoms:["쉰 목소리","목 통증","기침","목 건조"] }
    ], medicines:[
      { name:"탄툼 베르데 (스프레이)", category:"구강인두 항염 스프레이", 
        dosage:"4~6시간마다 목 안에 2~4회 분무", caution:"12세 미만 주의" },
      { name:"스트렙실 목캔디", category:"항균 구강 함유제", 
        dosage:"2시간마다 1정, 1일 최대 8정", caution:"6세 미만 금지" },
      { name:"이부프로펜 (부루펜)", category:"소염진통제", 
        dosage:"1회 200~400mg, 4~6시간 간격 식후", caution:"위궤양 환자 금지" }
    ]},

    chest: { name:"가슴", conditions:[
      { id:"cough", name:"기침 (기관지염)", severity:"mild", 
        desc:"바이러스 감염, 알레르기 등으로 인한 기침입니다.", 
        symptoms:["기침","가래","가슴 불편감"] },

      { id:"heartburn", name:"가슴 쓰림 (역류성 식도염)", severity:"mild", 
        desc:"위산이 식도로 역류하여 발생하는 타는 듯한 느낌입니다.", 
        symptoms:["가슴이 타는 느낌","신물 올라옴","식후 증상 악화","누우면 악화"] },
      
        { id:"chest-muscle", name:"근육성 흉통", severity:"mild", 
        desc:"과도한 운동이나 무리한 자세로 인한 가슴 근육 통증입니다.", 
        symptoms:["가슴 근육 통증","숨 쉴 때 통증 증가"] },
      
      { id:"asthma", name:"천식", severity:"moderate",
        desc:"기관지가 좁아지면서 호흡이 어려워지는 질환입니다.",
        symptoms:["호흡곤란","쌕쌕거림","기침","가슴 답답함"] }
    ], medicines:[
      { name:"용각산 쿨", category:"진해거담제", 
        dosage:"성인 1회 1포, 하루 3회", caution:"고령자는 의사 상담 후 복용" },
      { name:"겔포스 (제산제)", category:"제산제", 
        dosage:"1회 1포 식후 1~2시간 후, 취침 전", caution:"신장 질환자 주의" },
      { name:"오메프라졸 (오메드)", category:"위산분비억제제", 
        dosage:"1회 20mg, 하루 1회 식전", caution:"2주 이상 사용 시 의사 상담" }
    ]},
    
    stomach: { name:"배", conditions:[
      { id:"indigestion", name:"소화불량", severity:"mild", 
        desc:"식사 후 배가 더부룩하고 불편한 증상입니다.", 
        symptoms:["상복부 불편감","더부룩함","조기 포만감","구역질"] },
      
      { id:"gastroenteritis", name:"장염", severity:"moderate", 
        desc:"바이러스나 세균에 의한 위장관 감염입니다.", 
        symptoms:["설사","구역질","구토","복통","발열"] },
      
      { id:"constipation", name:"변비", severity:"mild", 
        desc:"배변 횟수가 줄거나 배변이 어려운 상태입니다.", 
        symptoms:["배변 곤란","딱딱한 변","복부 팽만"] },
      
      { id:"stomachache", name:"복통", severity:"mild", 
        desc:"스트레스, 과식, 가스 등으로 인한 배 통증입니다.", 
        symptoms:["배 통증","경련성 통증","가스 팽만"] },

      { id:"gastritis", name:"위염", severity:"moderate",
        desc:"위 점막에 염증이 생긴 상태입니다.",
        symptoms:["속쓰림","복통","구역질","식욕 감소"] },

      { id:"acid-reflux", name:"위산 역류", severity:"mild",
        desc:"위산이 식도로 올라오는 증상입니다.",
        symptoms:["신물 올라옴","가슴 쓰림","목 이물감"] }
    ], medicines:[
      { name:"베아제 (소화효소제)", category:"소화제", 
        dosage:"식후 1회 1정, 하루 3회", caution:"과민 반응 시 중단" },
      { name:"로페라마이드 (로페민)", category:"지사제", 
        dosage:"처음 2정, 이후 1정씩 설사 후. 1일 최대 8정", caution:"발열 동반 설사, 혈변 시 금지" },
      { name:"부스코판", category:"진경제", 
        dosage:"1회 10mg, 하루 3회", caution:"녹내장 환자 주의" }
    ]},

    back: { name:"허리/등", conditions:[
      { id:"back-pain", name:"요통 (허리 통증)", severity:"mild", 
        desc:"근육 과긴장, 잘못된 자세, 무거운 물건 들기 등으로 발생합니다.", 
        symptoms:["허리 통증","뻐근함","움직일 때 통증"] },

      { id:"muscle-strain", name:"근육 긴장/좌상", severity:"moderate", 
        desc:"갑작스러운 동작이나 과도한 사용으로 인한 근육 및 인대 손상입니다.", 
        symptoms:["날카로운 통증","움직임 제한","근육 경직","압통"] },

      { id:"upper-back-pain", name:"등 통증", severity:"mild", 
        desc:"장시간 앉아 있거나 잘못된 자세로 인한 등 근육 긴장입니다.", 
        symptoms:["등 뻐근함","어깨 통증","목 뻐근함"] },

      { id:"herniated-disc", name:"허리 디스크", severity:"severe",
        desc:"디스크가 탈출하여 신경을 압박하는 질환입니다.",
        symptoms:["허리 통증","다리 저림","방사통","움직임 제한"] }

    ], medicines:[
      { name:"나프록센 (낙센)", category:"소염진통제", 
        dosage:"1회 250~500mg, 하루 2~3회 식후", caution:"위장장애 주의" },
      { name:"에페리손", category:"근이완제", 
        dosage:"1회 50mg, 하루 3회 식후", caution:"졸음 유발 가능. 운전 주의" },
      { name:"케토프로펜 파스", category:"외용 소염진통제", 
        dosage:"환부에 1일 2회 부착", caution:"피부 알레르기 시 중단" }
    ]},

    shoulder: { name:"어깨", conditions:[
      { id:"shoulder-pain", name:"어깨 통증", severity:"mild", 
        desc:"근육 과긴장, 장시간 같은 자세, 과도한 운동으로 인한 통증입니다.", 
        symptoms:["어깨 통증","팔 들기 어려움","뻐근함","움직임 제한"] },

      { id:"frozen-shoulder", name:"오십견 (유착성 관절낭염)", severity:"moderate", 
        desc:"어깨 관절낭이 두꺼워지고 딱딱해지는 질환으로 40~60대에 흔합니다.", 
        symptoms:["어깨 운동 범위 감소","심한 어깨 통증","야간 통증","팔 올리기 어려움"] },

      { id:"rotator-cuff", name:"회전근개 손상", severity:"moderate",
        desc:"어깨 근육과 힘줄이 손상된 상태입니다.",
        symptoms:["어깨 통증","팔 들기 어려움","야간 통증"] }
    ], medicines:[
      { name:"디클로페낙 파스 (볼타렌)", category:"외용 소염진통제", 
        dosage:"환부에 1일 1~2회 부착, 최대 12시간", caution:"손상된 피부 금지" },
      { name:"이부프로펜 (부루펜)", category:"소염진통제", 
        dosage:"1회 200~400mg, 4~6시간 간격 식후", caution:"위장장애 주의" }
    ]},

    arm: { name:"팔", conditions:[
      { id:"arm-pain", name:"팔 통증", severity:"mild", 
        desc:"근육 과사용, 타박, 신경 압박 등으로 인한 팔 통증입니다.", 
        symptoms:["팔 통증","뻐근함","저림","쑤시는 느낌"] }
    ], medicines:[
      { name:"케토프로펜 파스", category:"외용 소염진통제", 
        dosage:"환부에 1일 2회 부착", caution:"피부 알레르기 시 중단" },
      { name:"이부프로펜 (부루펜)", category:"소염진통제", 
        dosage:"1회 200~400mg, 4~6시간 간격 식후", caution:"위장장애 주의" }
    ]},

    elbow: { name:"팔꿈치", conditions:[
      { id:"tennis-elbow", name:"테니스 엘보 (외상과염)", severity:"moderate", 
        desc:"팔꿈치 바깥쪽 근육과 힘줄의 과사용으로 발생하는 염증입니다.", 
        symptoms:["팔꿈치 바깥쪽 통증","물건 잡기 어려움","손목 굴신 시 통증"] },
      { id:"golfers-elbow", name:"골퍼 엘보 (내상과염)", severity:"mild", 
        desc:"팔꿈치 안쪽 힘줄의 과사용으로 발생하는 염증입니다.", 
        symptoms:["팔꿈치 안쪽 통증","손목 굽힐 때 통증","악력 약화"] }
    ], medicines:[
      { name:"볼타렌 겔", category:"외용 소염진통제", 
        dosage:"1일 3~4회 환부에 도포", caution:"눈·점막 접촉 금지" },
      { name:"나프록센 (낙센)", category:"소염진통제", 
        dosage:"1회 250~500mg, 하루 2~3회 식후", caution:"위장장애 주의" }
    ]},

    wrist: { name:"손목", conditions:[
      { id:"wrist-pain", name:"손목 통증", severity:"mild", 
        desc:"반복적인 손목 사용, 타이핑, 스마트폰 사용 등으로 인한 통증입니다.", 
        symptoms:["손목 통증","부종","뻐근함","힘 빠짐"] },

      { id:"carpal-tunnel", name:"손목 터널 증후군", severity:"moderate", 
        desc:"정중신경이 압박을 받아 발생하는 신경증상입니다.", 
        symptoms:["손가락 저림","무감각","야간 통증","악력 감소"] },

      { id:"tendonitis", name:"손목 건염", severity:"mild",
        desc:"반복적인 사용으로 힘줄에 염증이 생긴 상태입니다.",
        symptoms:["손목 통증","부종","움직일 때 통증"] }
    ], medicines:[
      { name:"케토프로펜 파스", category:"외용 소염진통제", 
        dosage:"환부에 1일 2회 부착", caution:"피부 알레르기 시 중단" },
      { name:"비타민 B6 (피리독신)", category:"신경 영양제", 
        dosage:"1일 100~200mg", caution:"과다 복용 시 신경 독성" }
    ]},

    hand: { name:"손", conditions:[
      { id:"hand-pain", name:"손 통증", severity:"mild", 
        desc:"관절염, 힘줄 손상, 타박상 등으로 인한 손 통증입니다.", 
        symptoms:["손 통증","부종","관절 뻐근함","악력 감소"] },

      { id:"trigger-finger", name:"방아쇠 손가락", severity:"mild", 
        desc:"손가락 힘줄의 염증으로 굽혔다 펼 때 딸깍 소리가 납니다.", 
        symptoms:["손가락 굽힐 때 통증","딸깍 소리","손가락 잠김"] }
    ], medicines:[
      { name:"볼타렌 겔", category:"외용 소염진통제", 
        dosage:"1일 3~4회 환부에 도포", caution:"눈·점막 접촉 금지" },
      { name:"이부프로펜 (부루펜)", category:"소염진통제", 
        dosage:"1회 200~400mg, 4~6시간 간격 식후", caution:"위장장애 주의" }
    ]},

    hip: { name:"엉덩이", conditions:[
      { id:"hip-pain", name:"고관절 통증", severity:"mild", 
        desc:"장시간 앉거나 과도한 운동, 근육 긴장으로 인한 통증입니다.", 
        symptoms:["엉덩이 통증","다리 방사통","걸을 때 통증","뻐근함"] },
        
      { id:"sciatica", name:"좌골신경통", severity:"moderate", 
        desc:"좌골신경이 압박되어 엉덩이에서 다리로 뻗치는 통증이 발생합니다.", 
        symptoms:["엉덩이에서 다리로 뻗치는 통증","저림","무감각","앉을 때 악화"] }
    ], medicines:[
      { name:"나프록센 (낙센)", category:"소염진통제", 
        dosage:"1회 250~500mg, 하루 2~3회 식후", caution:"위장장애 주의" },
      { name:"에페리손", category:"근이완제", 
        dosage:"1회 50mg, 하루 3회 식후", caution:"졸음 유발 가능" }
    ]},

    thigh: { name:"허벅지", conditions:[
      { id:"thigh-pain", name:"허벅지 근육통", severity:"mild", 
        desc:"과도한 운동, 근육 과사용으로 인한 허벅지 통증입니다.", 
        symptoms:["허벅지 통증","근육 뻐근함","압통"] },
      { id:"muscle-cramp", name:"근육 경련", severity:"mild", 
        desc:"수분 부족, 전해질 불균형으로 인한 근육 수축입니다.", 
        symptoms:["갑작스러운 근육 수축","심한 통증","근육이 딱딱하게 굳음"] }
    ], medicines:[
      { name:"마그네슘 영양제", category:"전해질 보충제", 
        dosage:"1일 200~400mg", caution:"신장 질환자 주의. 설사 유발 가능" },
      { name:"케토프로펜 파스", category:"외용 소염진통제", 
        dosage:"환부에 1일 2회 부착", caution:"피부 알레르기 시 중단" }
    ]},

    knee: { name:"무릎", conditions:[
      { id:"knee-pain", name:"무릎 통증", severity:"moderate", 
        desc:"연골 마모, 인대 손상, 근육 약화 등으로 인한 무릎 통증입니다.", 
        symptoms:["무릎 통증","부종","무릎 소리","계단 오르내리기 어려움"] },

      { id:"knee-arthritis", name:"슬관절 염증", severity:"moderate", 
        desc:"무릎 관절의 염증으로 통증, 부종, 경직이 나타납니다.", 
        symptoms:["무릎 통증","아침 경직","부종","따뜻한 느낌"] },

      { id:"meniscus-tear", name:"반월상연골 손상", severity:"moderate",
        desc:"무릎 연골이 찢어지는 부상입니다.",
        symptoms:["무릎 통증","걸림 현상","부종","운동 제한"] }

    ], medicines:[
      { name:"나프록센 (낙센)", category:"소염진통제", 
        dosage:"1회 250~500mg, 하루 2~3회 식후", caution:"위장장애 주의" },
      { name:"볼타렌 겔", category:"외용 소염진통제", 
        dosage:"1일 3~4회 환부에 도포", caution:"손상된 피부 금지" },
      { name:"글루코사민", category:"관절 영양제", 
        dosage:"1일 1500mg, 식사 중 분할 복용", caution:"갑각류 알레르기 주의" }
    ]},

    calf: { name:"종아리", conditions:[
      { id:"calf-pain", name:"종아리 근육통", severity:"mild", 
        desc:"과도한 운동, 오래 서 있거나 걷기, 수분 부족으로 인한 통증입니다.", 
        symptoms:["종아리 통증","근육 뻐근함","저림"] },
      { id:"calf-cramp", name:"종아리 경련 (쥐)", severity:"mild", 
        desc:"수분/전해질 불균형, 과도한 사용으로 인한 경련입니다.", 
        symptoms:["갑작스러운 종아리 통증","근육이 딱딱하게 굳음","야간에 잘 발생"] }
    ], medicines:[
      { name:"마그네슘 영양제", category:"전해질 보충제", dosage:"1일 200~400mg", caution:"신장 질환자 주의" },
      { name:"케토프로펜 파스", category:"외용 소염진통제", dosage:"환부에 1일 2회 부착", caution:"피부 알레르기 시 중단" }
    ]},

    ankle: { name:"발목", conditions:[
      { id:"ankle-sprain", name:"발목 염좌", severity:"moderate", 
        desc:"발목 인대가 늘어나거나 부분적으로 찢어지는 흔한 부상입니다.", 
        symptoms:["발목 통증","부종","멍","걷기 어려움","불안정감"] },

      { id:"ankle-pain", name:"발목 통증", severity:"mild", 
        desc:"과도한 사용, 잘못된 신발로 인한 발목 통증입니다.", 
        symptoms:["발목 통증","부종","뻐근함"] }
    ], medicines:[
      { name:"볼타렌 겔", category:"외용 소염진통제", 
        dosage:"1일 3~4회 환부에 도포", caution:"손상된 피부 금지" },
      { name:"이부프로펜 (부루펜)", category:"소염진통제", 
        dosage:"1회 200~400mg, 4~6시간 간격 식후", caution:"위장장애 주의" }
    ]},

    foot: { name:"발", conditions:[
      { id:"plantar-fasciitis", name:"족저근막염", severity:"moderate", 
        desc:"발바닥 근막의 염증으로, 아침 첫 발자국에 심한 통증이 특징입니다.", 
        symptoms:["발뒤꿈치 통증","아침 첫 발자국 시 심한 통증","오래 서 있으면 악화"] },

      { id:"athletes-foot", name:"무좀 (발 백선)", severity:"mild", 
        desc:"곰팡이균 감염으로 발생하는 피부 질환입니다.", 
        symptoms:["발 가려움","각질","물집","악취","피부 갈라짐"] },

      { id:"foot-pain", name:"발 통증", severity:"mild", 
        desc:"잘못된 신발, 오래 걷기, 과체중 등으로 인한 발 통증입니다.", 
        symptoms:["발 통증","부종","피로감"] },

      { id:"flat-foot", name:"평발", severity:"mild",
        desc:"발바닥 아치가 낮아져 통증이 발생하는 상태입니다.",
        symptoms:["발 피로","발 통증","장시간 걷기 어려움"] }

    ], medicines:[
      { name:"라미실 (테르비나핀)", category:"항진균제", 
        dosage:"감염 부위에 1일 1~2회 도포, 1~2주", caution:"눈·점막 접촉 금지" },
      { name:"볼타렌 겔", category:"외용 소염진통제", 
        dosage:"1일 3~4회 환부에 도포", caution:"손상된 피부 금지" },
      { name:"이부프로펜 (부루펜)", category:"소염진통제", 
        dosage:"1회 200~400mg, 4~6시간 간격 식후", caution:"위장장애 주의" }
    ]}
  };
  
  const LABELS = {
    front: [
      {part:"head",label:"머리"},{part:"eye",label:"눈"},{part:"ear",label:"귀"},
      {part:"nose",label:"코"},{part:"throat",label:"목"},{part:"shoulder",label:"어깨"},
      {part:"chest",label:"가슴"},{part:"stomach",label:"배"},{part:"arm",label:"팔"},
      {part:"elbow",label:"팔꿈치"},{part:"wrist",label:"손목"},{part:"hand",label:"손"},
      {part:"hip",label:"엉덩이"},{part:"thigh",label:"허벅지"},{part:"knee",label:"무릎"},
      {part:"calf",label:"종아리"},{part:"ankle",label:"발목"},{part:"foot",label:"발"}
    ],
    back: [
      {part:"head",label:"머리"},{part:"ear",label:"귀"},{part:"throat",label:"목"},
      {part:"shoulder",label:"어깨"},{part:"back",label:"허리/등"},{part:"arm",label:"팔"},
      {part:"elbow",label:"팔꿈치"},{part:"wrist",label:"손목"},{part:"hand",label:"손"},
      {part:"hip",label:"엉덩이"},{part:"thigh",label:"허벅지"},{part:"knee",label:"무릎"},
      {part:"calf",label:"종아리"},{part:"ankle",label:"발목"},{part:"foot",label:"발"}
    ]
  };
  
  let currentView = 'front';
  let selectedPart = null;
  
  function setView(view) {
    currentView = view;
    document.getElementById('front-view').style.display = view === 'front' ? '' : 'none';
    document.getElementById('back-view').style.display  = view === 'back'  ? '' : 'none';
    document.getElementById('btn-front').classList.toggle('active', view === 'front');
    document.getElementById('btn-back').classList.toggle('active',  view === 'back');
    renderLabels();
    if (selectedPart) selectPart(selectedPart);
  }
  
  function renderLabels() {
    const container = document.getElementById('label-buttons');
    container.innerHTML = '';
    LABELS[currentView].forEach(({part, label}) => {
      const btn = document.createElement('button');
      btn.className = 'label-btn' + (selectedPart === part ? ' active' : '');
      btn.textContent = label;
      btn.onclick = () => selectPart(part);
      container.appendChild(btn);
    });
  }
  
  function selectPart(part) {
    selectedPart = part;
    document.querySelectorAll('.region').forEach(el => {
      el.classList.toggle('selected', el.dataset.part === part);
    });
    document.querySelectorAll('.label-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent === (LABELS[currentView].find(l => l.part === part)?.label));
    });
    showResult(part);
  }
  
  const SEVERITY_CFG = {
    mild:     { label:'경증', cls:'badge-mild',     icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>' },
    moderate: { label:'중등', cls:'badge-moderate', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' },
    serious:  { label:'주의', cls:'badge-serious',  icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' }
  };
  
  function showResult(part) {
    const d = DATA[part];
    if (!d) return;
    document.getElementById('empty-state').style.display = 'none';
    const rc = document.getElementById('result-content');
    rc.style.display = 'flex';
    rc.classList.add('show');
    document.getElementById('result-title').innerHTML = `${d.name} <span>증상 분석</span>`;
  
    const pillIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18.5 2.5a5.5 5.5 0 0 1 0 7.78L7.28 21.5A5.5 5.5 0 1 1-.22 13L11 1.78a5.5 5.5 0 0 1 7.5.72z"/><line x1="10" y1="14" x2="14" y2="10"/></svg>`;
    const warnIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  
    document.getElementById('conditions-list').innerHTML = d.conditions.map(c => {
      const sev = SEVERITY_CFG[c.severity];
      return `<div class="condition-card">
        <div class="condition-top">
          <div class="condition-name">${c.name}</div>
          <span class="severity-badge ${sev.cls}">${sev.icon}${sev.label}</span>
        </div>
        <p class="condition-desc">${c.desc}</p>
        <div class="symptom-tags">${c.symptoms.map(s => `<span class="symptom-tag">${s}</span>`).join('')}</div>
      </div>`;
    }).join('');
  
    document.getElementById('medicines-grid').innerHTML = d.medicines.map(m => `
      <div class="medicine-card">
        <div class="med-top">
          <div class="med-icon">${pillIcon}</div>
          <div><div class="med-name">${m.name}</div><span class="med-category">${m.category}</span></div>
        </div>
        <div class="med-dosage"><div class="med-dosage-label">복용법</div><p>${m.dosage}</p></div>
        <div class="med-caution"><div class="med-caution-label">${warnIcon} 주의사항</div><p>${m.caution}</p></div>
      </div>`).join('');
  }
  
  document.querySelectorAll('.region').forEach(el => {
    el.addEventListener('click', () => selectPart(el.dataset.part));
  });
  
  setView('front');


  // 검색 기능 추가
const searchInput = document.getElementById('disease-search');

searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.trim();
    
    // 검색어가 없으면 결과창을 비우거나 초기 상태로 (선택 사항)
    if (keyword === '') {
        document.getElementById('empty-state').style.display = 'flex';
        document.getElementById('result-content').style.display = 'none';
        return;
    }

    // DATA 객체 전체를 돌면서 검색어가 포함된 질환 찾기
    for (const partKey in DATA) {
        const partData = DATA[partKey];
        // 질환 이름(name) 중에 검색어가 포함된 것이 있는지 확인
        const hasMatch = partData.conditions.some(c => c.name.includes(keyword));
        
        if (hasMatch) {
            // 일치하는 질환을 찾으면 해당 부위(partKey)를 선택한 것처럼 처리
            selectPart(partKey);
            
            // 검색어로 필터링된 질환만 강조하고 싶다면 아래 로직 추가 (선택 사항)
            // (지금은 해당 부위의 전체 질환을 보여주는 방식입니다)
            return; // 하나라도 찾으면 종료 (가장 유사한 첫 번째 부위 노출)
        }
    }
});