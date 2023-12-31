export default DATA = () => {
    let currentUser = {
        id: 'u1',
        name: "Nguyễn Văn A",
        dob: "01/01/2000",
        sex: "Nam",
        email: "blaaaaa@gmail.com",
        phone: "0123456789",
        address: "Hà Nội",
        avatar: require('../assets/images/placeholder.jpg'),
        intro: "Tôi là Nguyễn Văn A, tôi đến từ Hà Nội",
        major: "IT",
        exp: [
            {
                from: "01/01/2021",
                to: "01/01/2021",
                company: "Công ty TNHH ABC",
            },
            {
                from: "01/01/2021",
                to: "01/01/2021",
                company: "Công ty TNHH ABC",
            },
            {
                from: "01/01/2021",
                to: "01/01/2021",
                company: "Công ty TNHH ABC",
            },
        ],
        disable: ["blaaa",],
        image: [
            require('../assets/images/placeholder.jpg'),
            require('../assets/images/placeholder.jpg'),
            require('../assets/images/placeholder.jpg'),
        ],
        joinDate: "01/01/2021",
        education: ['thpt', 'đại học'],
        wishness: 'bla bla bla',
        jobSave: ['j3', 'j7'],
        skill: ['skill1', 'skill2', 'skill3'],
        isAvailable: true,
        letCompanyContact: true,
        jobAttempt: ['j1', 'j2',],
        followCompany: ['c1', 'c2',],
        companyViewCount: 2,

    }

    let company = [
        {
            id: 'c1',
            nameCompany: "Công ty TNHH ABC",
            addressCompany: "Hà Nội",
            introCompany: "Công ty TNHH ABC là công ty chuyên về ABC",
            logoCompany: require('../assets/images/placeholder.jpg'),
            imageCompany: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
            telCompany: "0123456789",
            emailCompany: "bla@bla.com",
            websiteCompany: "www.abc.com",
            majorCompany: "IT",
            fullUnitCompany: "Công ty TNHH ABC blablabla",
            jobIdList: ['j1']
        },
        {
            id: 'c2',
            nameCompany: "Công ty TNHH XZY",
            addressCompany: "Hà Nội",
            introCompany: "Công ty TNHH ABC là công ty chuyên về ABC",
            logoCompany: require('../assets/images/placeholder.jpg'),
            imageCompany: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
            telCompany: "0123456789",
            emailCompany: "bla@bla.com",
            websiteCompany: "www.abc.com",
            majorCompany: "IT",
            fullUnitCompany: "Công ty TNHH ABC blablabla",
            jobIdList: ['j2, j3, j5, j6,']
        },
        {
            id: 'c3',
            nameCompany: "Công ty TNHH XZY",
            addressCompany: "Hà Nội",
            introCompany: "Công ty TNHH ABC là công ty chuyên về ABC",
            logoCompany: require('../assets/images/placeholder.jpg'),
            imageCompany: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
            telCompany: "0123456789",
            emailCompany: "bla@bla.com",
            websiteCompany: "www.abc.com",
            majorCompany: "IT",
            fullUnitCompany: "Công ty TNHH ABC blablabla",
            jobIdList: ['j7']
        },
        {
            id: 'c4',
            nameCompany: "Công ty TNHH XZY",
            addressCompany: "Hà Nội",
            introCompany: "Công ty TNHH ABC là công ty chuyên về ABC",
            logoCompany: require('../assets/images/placeholder.jpg'),
            imageCompany: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
            telCompany: "0123456789",
            emailCompany: "bla@bla.com",
            websiteCompany: "www.abc.com",
            majorCompany: "IT",
            fullUnitCompany: "Công ty TNHH ABC blablabla",
            jobIdList: ['j4']
        }

    ]

    let job = [
        {
            id: 'j1',
            companyId: 'c1',
            nameCompany: "Công ty TNHH ABC",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameJob: "Nhân viên IT",
            typeJob: "Fulltime",
            salaryJob: "10.000.000",
            locationJob: "Hà Nội",
            discripJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            requirementJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            benefitJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            majorJob: "IT",
            expJob: "1 năm",
            acceptDisable: [
                'deaf',
                'blind',
                'blaaa',
                'heehehe',
            ],
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: 'j2',
            companyId: 'c2',
            nameCompany: "Công ty TNHH XZY",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameJob: "Nhân viên IT blabla",
            typeJob: "Fulltime",
            salaryJob: "10.000.000",
            locationJob: "Hà Nội",
            discripJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            requirementJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            benefitJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            majorJob: "IT",
            expJob: "1 năm",
            acceptDisable: [
                'deaf',
                'blind',
            ],
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: 'j3',
            companyId: 'c2',
            nameCompany: "Công ty TNHH XZY",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameJob: "Nhân viên IT blabla",
            typeJob: "Fulltime",
            salaryJob: "10.000.000",
            locationJob: "Hà Nội",
            discripJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            requirementJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            benefitJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            majorJob: "IT",
            expJob: "1 năm",
            acceptDisable: [
                'deaf',
                'blind',
            ],
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: 'j4',
            companyId: 'c2',
            nameCompany: "Công ty TNHH XZY",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameJob: "Nhân viên IT blabla",
            typeJob: "Fulltime",
            salaryJob: "10.000.000",
            locationJob: "Hà Nội",
            discripJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            requirementJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            benefitJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            majorJob: "IT",
            expJob: "1 năm",
            acceptDisable: [
                'deaf',
                'blind',
            ],
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: 'j5',
            companyId: 'c2',
            nameCompany: "Công ty TNHH XZY",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameJob: "Nhân viên IT blabla",
            typeJob: "Fulltime",
            salaryJob: "10.000.000",
            locationJob: "Hà Nội",
            discripJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            requirementJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            benefitJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            majorJob: "IT",
            expJob: "1 năm",
            acceptDisable: [
                'eye'
            ],
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: 'j6',
            companyId: 'c2',
            nameCompany: "Công ty TNHH XZY",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameJob: "Nhân viên IT blabla",
            typeJob: "Fulltime",
            salaryJob: "10.000.000",
            locationJob: "Hà Nội",
            discripJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            requirementJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            benefitJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            majorJob: "IT",
            expJob: "1 năm",
            acceptDisable: [
                'deaf',
                'blind',
            ],
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
        {
            id: 'j7',
            companyId: 'c2',
            nameCompany: "Công ty TNHH XZY",
            imageCompany: require('../assets/images/placeholder.jpg'),
            nameJob: "Nhân viên IT blabla",
            typeJob: "Fulltime",
            salaryJob: "10.000.000",
            locationJob: "Hà Nội",
            discripJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            requirementJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            benefitJob: [
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
                "Công ty TNHH ABC là công ty chuyên về ABC",
            ],
            majorJob: "IT",
            expJob: "1 năm",
            acceptDisable: [
                'deaf',
                'blind',
            ],
            imageJob: [
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
                require('../assets/images/placeholder.jpg'),
            ],
        },
    ]
    return { company, job, currentUser }
}