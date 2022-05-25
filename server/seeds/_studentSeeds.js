const mongoose = require("mongoose");
const Student = require("../models/Student");

const students = [{
    "studentName": "Modesta Temple",
    "gender": "Female",
    "birthday": "11/03/2021",
    "experience": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    "instrumentsPlayed": "nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in",
    "instrumentsToPlay": "Electric Guitar",
    "sing": "No, but I'd like to!",
    "howHear": "Search Engine (Google, yahoo, etc.)",
    "howHearDetails": "In blandit ultrices enim.",
    "parentNames": {
        "parent1": "Robbi Roelofs",
        "parent2": "Dedra Purvis"
    },
    "email": "mwarrener0@blogspot.com",
    "emergencyContacts": {
        "emC1Name": "Doralin MacGilrewy",
        "emC1Relationship": "morbi odio odio",
        "emC1Ph": "632-616-8306"
    },
    "contactNumbers": {
        "phone1": "669-518-4575",
        "phone2": "196-456-4034"
    },
    "physicianContact": {
        "name": "Marrissa Warrener",
        "phone": "135-808-1825"
    },
    "medical": {
        "conditions": null,
        "medications": null
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJcSURBVDjLpZPtT5JhFMafrW997I9rscA+FFu2QRurtlw5cQ4InLpwBogIPNFSiNJ4C+JVkj0QTBHQKFPQlJfwlanY1tXz3ARkn2jd27Wz++yc33XOvd0UAOp/RNGR/X5zeH9rOlTDVKAK3fsqJrxlqN27GHPuYHh+G4rXRQzZNjEws47Hli/oo/PxNsAU3qvWT3/gX3TPuHrWBhiC30nSktXDtKLB1NI4NKkxqBMqjDByPFkcxNBCPwbCfXgUeEBq705m0AZM+qsk2e3hau88W+4ANOy+XPLFQrkrcbW31KkOYJx9rBaAOzPR0gVHW6x593q9cDgcqB6e4sZoogMYdXzD0ck5ZhfLsHGKVfAqVoadKcMdzcLr82PuwwZCoRACgQCWVzdhoK2gaVpDAMNzWzhkAXamQpze/I4t13w+j2AwiFwuh7W1NXg8HmQyGSgUCshkssuU3F7AQf0c84kK3n68KFc4hXQ6DavVCqlUCqVSSdaIx+NQq9UGMsHg7Ab2jxtwp5rOvqUqia3CUqnEObWn0mp1KBaLcLlckMvloPpfrhOAl230/SGLxQK3241CoQC9Xg9nskKk1emQzWZZkBZCoRBU3/NP2GMBgXTTObjSjI1GA8lkEgzDwO/3E4iObXY6nYhEIhCJRHoWcIW6b1pF7egMlYNT7NROUKzU8XX3GJ+3D2E0GgmAm4Zbh2s0mUyIRqMcAGKx+BIlMeSiYu1K/fbEMm4+TaFnJIHrSgZX5TFIZNPo7e1Fj9QOs9kMlUqFaw9pCASCnzwe7x15xG6/rUQiAZ/Px9/5XyhZOMVGKlOdAAAAAElFTkSuQmCC",
    "paymentMethod": "Check / Cheque",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Humberto Bloxam",
    "gender": "Male",
    "birthday": "05/21/2021",
    "experience": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    "instrumentsPlayed": "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero",
    "instrumentsToPlay": "Acoustic Guitar",
    "sing": "Yes, but I'm shy!",
    "howHear": "Recommended by friend",
    "howHearDetails": "In quis justo. Maecenas rhoncus aliquam lacus.",
    "parentNames": {
        "parent1": "Riley McQuillin",
        "parent2": "Gavan Beatey"
    },
    "email": "lwharmby1@bizjournals.com",
    "emergencyContacts": {
        "emC1Name": "Bennett Desvignes",
        "emC1Relationship": "amet",
        "emC1Ph": "493-356-2231"
    },
    "contactNumbers": {
        "phone1": "952-689-4970",
        "phone2": "862-825-3711"
    },
    "physicianContact": {
        "name": "Lothaire Wharmby",
        "phone": "687-629-5844"
    },
    "medical": {
        "conditions": "tortor risus",
        "medications": "Lioresal"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHaSURBVDjLlZO7a1NRHMfzfzhIKQ5OHR1ddRRBLA6lg4iTd5PSas37YR56Y2JiHgg21uoFxSatCVFjbl5iNBBiMmUJgWwZhCB4pR9/V4QKfSQdDufF5/v7nu85xwJYprV0Oq0kk8luIpEw4vG48f/eVDiVSikCTobDIePxmGg0yokEBO4OBgNGoxH5fJ5wOHwygVgsZpjVW60WqqqWzbVgMIjf78fn8xlTBcTy736/T7VaJRQKfQoEArqmafR6Pdxu9/ECkUjkglje63Q6NBoNisUihUKBcrlMpVLB6XR2D4df3VQnmRstsWzU63WazSZmX6vV0HWdUqmEw+GY2Gw25SC8dV1l1wrZNX5s3qLdbpPL5fB6vXumZalq2O32rtVqVQ6GuGnCd+HbFnx9AZrC+MkSHo/np8vlmj/M7f4ks6yysyawgB8fwPv70HgKG8v8cp/7fFRO/+AllewqNJ/DhyBsi9A7J1QTkF4E69mXRws8u6ayvSJwRqoG4K2Md+ygxyF5FdbPaMfdlIXUZfiyAUWx/OY25O4JHBP4CtyZ16a9EwuRi1CXs+5K1ew6lB9DXERX517P8tEsPDzfNIP6C5YeQewSrJyeCd4P0bnwXYISy3MCn5oZNtsf3pH46e7XBJcAAAAASUVORK5CYII=",
    "paymentMethod": "Credit / Debit card",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Ibby Cannavan",
    "gender": "Female",
    "birthday": "10/14/2021",
    "experience": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    "instrumentsPlayed": "interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam",
    "instrumentsToPlay": "Ukelele",
    "sing": "No, but I'd like to!",
    "howHear": "Other (please explain)",
    "howHearDetails": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    "parentNames": {
        "parent1": "Esta Pellington",
        "parent2": "Katusha Seywood"
    },
    "email": "sshadfourth2@storify.com",
    "emergencyContacts": {
        "emC1Name": "Isa Hegdonne",
        "emC1Relationship": "lectus pellentesque",
        "emC1Ph": "814-490-1915"
    },
    "contactNumbers": {
        "phone1": "651-105-8737",
        "phone2": "209-476-0980"
    },
    "physicianContact": {
        "name": "Sandye Shadfourth",
        "phone": "817-497-9809"
    },
    "medical": {
        "conditions": "proin risus",
        "medications": "NEUROSPORA INTERMEDIA"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALVSURBVDjLpVO7T1NRGP/dR18iF+iTQktEkHdDCjHgIGAX40AMMhrkD3AxcWBxMnExTigDPhYJcdFFHHxEo5HBVKlaCk1bFJJiaQuhpbS0ve29x3Ov0jiweZLf+ZKT7/t9v+9xGEII/ufwyjU7O3urUCh4SqWSQZIkplgsavL5vFaxsiwzOp1ONBqNL6ampq4p/hMTE/3UrM/Nze0yMzMzNRzHpd1uNxQ1NEBF8OsbXBk9BfHnI0y/64Bg60Q4HJlMpVJ3abBAoUgf4FpaWgI9PT1Gm82GaDSKeDyOnZ0dNDR14P3SNkL7fejtPwuGYbC1tTXGsqxOr9eD53kmk8kM8TRrqyAICAQCsFqtcLlcoKWAlgKLxYJgMIjFxUWYTCZ4PB4kEgmk02nVJxQKtfOKYzKZhNlsRqmqCXfe5pErM5CpPh2jwbDjJIz7+1R+GIpKJTASicBut6ulssqVy+XgdDqxsCyiSFjoNRRaFhKrwYfNKnQ4JYwNboNIWYiiCNrgikqVgHZbRVZiaW0cBQsN+wccR2Dl/ejuuwgLG1T96MRUqypQWA5ZlUOIDGU1GBag8RgUPsF2YhiC3Y065geq2JTqWyE4VEA7Ci0RUZZp/TKh8giMbBJu7UdUm2shZZ6jsXcSrcIGyqWiWkKFQGH0+/1w18TBlQ9QpG8SxWnNazi7LwEFH7yP53G8Ng8Ll0CbtVQh4JXse3t76nhMqRQGmpvV5lQjBredoLrugGZfp7VR0uxnNI9cx4Xd23jyPasScA6HI722tjYci8U4umXKPjCrK8sYaoqifWAUnOwDKe+ioctMOQ6gPaaDQd+FoPcVWf1Veskc9Zl890eumjsv3qtvM9CsXtpUEUvPgugf7wTD1QCG8/jy8EaSyPK5Iwm802c2XZfnGzl2g2ZP/V37w0NHa2hHYuUbwgs3n/JHfdFyUdT7HoznCZ0GzfIPSMVCsYTU/wbkK6iCy8xjQgAAAABJRU5ErkJggg==",
    "paymentMethod": "Check / Cheque",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Chick Fitzroy",
    "gender": "Male",
    "birthday": "12/01/2021",
    "experience": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    "instrumentsPlayed": "felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui",
    "instrumentsToPlay": "Vocals",
    "sing": "No!",
    "howHear": "Recommended by friend",
    "howHearDetails": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    "parentNames": {
        "parent1": "Curran Van der Hoeven",
        "parent2": "Hamilton Mitkin"
    },
    "email": "yjackett3@cloudflare.com",
    "emergencyContacts": {
        "emC1Name": "Towny Pineaux",
        "emC1Relationship": "mattis egestas metus",
        "emC1Ph": "642-327-0525"
    },
    "contactNumbers": {
        "phone1": "509-412-3800",
        "phone2": "920-369-6307"
    },
    "physicianContact": {
        "name": "Yurik Jackett",
        "phone": "814-607-6979"
    },
    "medical": {
        "conditions": "nam",
        "medications": "Dicyclomine Hydrochloride"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKySURBVDjLjZNbSNNRHMcXuoceFHrzpQdfsjd9FOzBMimIkWUKYT5Y5gVT0ES7EIqSWq2XZROJIHTd9hBDWKhbMJssbU1D527t4q4Onbvo7pv7ds6hiemLB76c3/nx+37O75z//3AAcA5KpVKVKRSKUZlMtiSVSrckEklALBYbRSLR2PvJsfLD9fuBWq3OI2YhMScdDgf8fj92dnYQiUQQCoWg1+sw9vppalw4ODkqGMn/D/DPPG2xWJDJZBCLxUAhdrsdPp8P6XQamXQUqagRCvkHvHjWqxwZfpK/D6A7U3MymQQdqVQKdG02mxEMBhk0EfUgHtZhL/4Hs1/fYaCvfZIBiLmUtL0XDoeZYXd3l0HcbjcMBgNoPp1OIRIyIBHWsy6SRF2dLXvd99vKOMQsdDqdoDIajcxEz0xBGxsbLE7EQwSgJUYHibdJhwkolUo0NzcLOSUlJTiu6N1QcCAQgNVqRUNDw28G0Gq1MJlMmJ+fx8TEBCums8vlYvlsjl6szWbD+vo6vF4v6urqfAxAi7ImCqGiuWw+O6vWbFjUmpkMdg+uVdduHwFQZc0HAT0VZ6GoL4K8govZ2tOY4Xfj8tUbuiNHyILonD3CVF8jNJ2liElfIqObRuRTF37eK8bwpTOqY13ix/MnESVmCHhA7ylgqBBbz8shvch1sx9JIBAI5+bm4A2ST+legc6+jFXrLyybFqExqFjbGc0XHByBvgLIL+RmGIDP5+cNDg3IP0+JYN3UMwgFLJkWoDH+gKymAOG3dwBiivdw4Ceyt+RgpjLHtf+Y+vv78x487nnT2tGUksyIsbD6nUFWLGooBW1YuFsET28hNh9yYWk8gW+83PR0Zc4jzuHn2dHRfq6ptXG8/vYtbc3N6/6qap6fV3VF+6q6eFFayfXQtsnOTmqm9X8BjufboeKd+1kAAAAASUVORK5CYII=",
    "paymentMethod": "Credit / Debit card",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Lorianne Ruperti",
    "gender": "Female",
    "birthday": "07/19/2021",
    "experience": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    "instrumentsPlayed": "odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae",
    "instrumentsToPlay": "Bass Guitar",
    "sing": "No!",
    "howHear": "Search Engine (Google, yahoo, etc.)",
    "howHearDetails": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    "parentNames": {
        "parent1": "Georgina Sivil",
        "parent2": "Patsy Stannering"
    },
    "email": "pdumbare4@hhs.gov",
    "emergencyContacts": {
        "emC1Name": "Kaela Meneely",
        "emC1Relationship": "neque aenean",
        "emC1Ph": "403-214-5709"
    },
    "contactNumbers": {
        "phone1": "335-770-5606",
        "phone2": "410-274-0793"
    },
    "physicianContact": {
        "name": "Phaidra Dumbare",
        "phone": "162-431-1847"
    },
    "medical": {
        "conditions": "vehicula consequat",
        "medications": "AzaSITE"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIfSURBVDjLjZNNSJRRFIafcRJSnGEszTQddQZUJCGTCiGjXLkaiIKgTUhECK6K1oGroE20adEmQnfVIqEYhKRgyiwlFBkcqVzYHzNiVo7f982957QQpxk08cDhcA+c57735R5Uld3kt+5u3a5fwi5jtL9/275PVfOHZDKp1lqMMWxWYwzpdJpEIkFdXR3RaJRYLObbnNlTSMvlckQiEQAKwapKb28vqko8Hi9SUAQwxgAwPr/xMqtgBUQFa6Gv3eC67v8Bnuehqhw9uLKtkRDaHWBiqRJRwciGgko7Tb0dI9hxBcdxdgYAHKvN/LvZOujSY0LhHrJf4jsrcF0XVeXl4j6sKkagMTdKZ/g4wdpO0uM3KfOFiwBF/2DV/kRVOdmQ5lRDmjM1szS4zwhUhbC/nnKg/SLR4Cdmh/tKtwBuTAw0zYXeo6qICCPDwyy8uU9161lwppl8OEJFaJ0afwbjeLEtABFpLin1k1ydRVWpDfymrfkQgcos4n4GFeyfdzSfvs6a692ZvNsdyAOuJa4Gsb4X+0urGFt6jtgcLRUfCYWPINkZVNbpOteKeF/ZuzdFuONC/XfP3MoDrLEDrufpQnqeteUsM2/v0dTWQ3kgg5pl8PmZepICBHFSVLc0UuZ4l18NHW73qSqDg4NaaOb5yAwnLj3AX7KImhVAi3z3l7XyY+4DqdGhR0XLtBmvb3dl1Eq5iqIiBan5igiqOvUX9fhxNiezxvQAAAAASUVORK5CYII=",
    "paymentMethod": "Check / Cheque",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Alexandra Pallesen",
    "gender": "Agender",
    "birthday": "12/04/2021",
    "experience": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    "instrumentsPlayed": "eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    "instrumentsToPlay": "Piano",
    "sing": "Yes!",
    "howHear": "Recommended by friend",
    "howHearDetails": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    "parentNames": {
        "parent1": "Claudelle Rennison",
        "parent2": "Moses Smullen"
    },
    "email": "bfagge5@google.pl",
    "emergencyContacts": {
        "emC1Name": "Bronnie Haryngton",
        "emC1Relationship": "curae",
        "emC1Ph": "123-750-6855"
    },
    "contactNumbers": {
        "phone1": "614-654-9105",
        "phone2": "686-121-2124"
    },
    "physicianContact": {
        "name": "Breanne Fagge",
        "phone": "248-935-9723"
    },
    "medical": {
        "conditions": "vestibulum rutrum rutrum",
        "medications": "up and up allergy relief"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHYSURBVDjLlVLPS1RxHJynpVu7KEn0Vt+2l6IO5qGCIsIwCPwD6hTUaSk6REoUHeoQ0qVAMrp0COpY0SUIPVRgSl7ScCUTst6zIoqg0y7lvpnPt8MWKuuu29w+hxnmx8dzzmE5+l7mxk1u/a3Dd/ejDjSsII/m3vjJ9MF0yt93ZuTkdD0CnnMO/WOnmsxsJp3yd2zfvA3mHOa+zuHTjy/zojrvHX1YqunAZE9MlpUcZAaZQBNIZUg9XdPBP5wePuEO7eyGQXg29QL3jz3y1oqwbvkhCuYEOQMp/HeJohCbICMUVwr0DvZcOnK9u7GmQNmBQLJCgORxkneqRmAs0BFmDi0bW9E72PPda/BikwWi0OEHkNR14MrewsTAZF+lAAWZEH6LUCwUkUlntrS1tiG5IYlEc6LcjYjSYuncngtdhakbM5dXlhgTNEMYLqB9q49MKgsPjTBXntVgkDNIgmI1VY2Q7QzgJ9rx++ci3ofziBYiiELQEUAyhB/D29M3Zy+uIkDIhGYvgeKvIkbHxz6Tevzq6ut+ANh9fldetMn80OzZVVdgLFjBQ0tpEz68jcB4ifx3pQeictVXIEETnBPCKMLEwBIZAPJD767V/ETGwsjzYYiC6vzEP9asLo3SGuQvAAAAAElFTkSuQmCC",
    "paymentMethod": "Check / Cheque",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Sile Jarrold",
    "gender": "Female",
    "birthday": "04/07/2022",
    "experience": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    "instrumentsPlayed": "lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum",
    "instrumentsToPlay": "Electric Guitar",
    "sing": "No, but I'd like to!",
    "howHear": "Blog or publication",
    "howHearDetails": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    "parentNames": {
        "parent1": "Kevina Maynell",
        "parent2": "Caitrin Trewartha"
    },
    "email": "mhaldin6@china.com.cn",
    "emergencyContacts": {
        "emC1Name": "Consuela Ranns",
        "emC1Relationship": "porta volutpat quam",
        "emC1Ph": "725-864-7920"
    },
    "contactNumbers": {
        "phone1": "135-285-0656",
        "phone2": "927-504-5938"
    },
    "physicianContact": {
        "name": "Malanie Haldin",
        "phone": "500-937-4989"
    },
    "medical": {
        "conditions": "sollicitudin mi",
        "medications": "GolfersSkin Face Sunscreen"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI/SURBVBgZpcFdaI1xHMDx7/Oc/3ms8xiZxLxcGIXF3cnN5KWUXIrc4EZcSC5QKC+1xjLKW5ELLzfIS8iNS0qUtxqllkYstllsNufsPKc9z+/3s/9q5Vb7fAIzYyKCDXvv7F6xutg2ULHYDFDFVBEVTA01xURQM0wEUWVKlA53dHQffHBm80VXbCpeyNfE4cwa/kc8XJELwEVXSS2sDJT5l8uGaeptYSRLSRLlw6LjZLmYfyWphYxyJsaJLQsZlyZ/eHejhXx9HaVywuyGOqJPR1m//wb5mlrG7TjZhReaKd5IJgyXB3l/ax+hM4ZKVWoa1vLr+1em18/lYetWvnb18OVHCU9U8ELM8IIw4OP9Q4RRQClR6tccYMmqbcxZuYdvnZ0UptTy5Nx2CnmHp5ngOVHBC4FqdYhUI+avP8a0GXNIK7+Z19iE2RGeXj5Mlma4KMRTUTxnaowJApbvvMnjR/eZNbeB022tDA4OEccxzc3N3L5X5EDLaVDGqApeqCqMC4KAVAM0HSGfj2hsbCQIAjAjF9fhchDmGKOqeC5LU7xXvS94/e0Nn8odLO1fRm1cS6FQYFJ+Eu0Dbykt7+H8szYWTl3MpuJGsjTDcyaKd/PldZJKwkDvENcuXyWnjr6ffVSrVa5cuoosqPK5/zntSTubihsxVTynqngt606RiVDuL2NqiAiqiqemOOeYPG0yURThqRme6/7SdXfX2XSziqCiiAiqiqQpqoqaYSqYGGqKqaKKd5dRgZkxESET9BfqVjgB6mRiLwAAAABJRU5ErkJggg==",
    "paymentMethod": "Check / Cheque",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Wanda Southerton",
    "gender": "Female",
    "birthday": "02/25/2022",
    "experience": "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "instrumentsPlayed": "non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci",
    "instrumentsToPlay": "Bass Guitar",
    "sing": "No, but I'd like to!",
    "howHear": "Social Media",
    "howHearDetails": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "parentNames": {
        "parent1": "Augustine Pourveer",
        "parent2": "Gabey Kingsmill"
    },
    "email": "rferraresi7@cpanel.net",
    "emergencyContacts": {
        "emC1Name": "Krissy Dillimore",
        "emC1Relationship": "dolor",
        "emC1Ph": "875-582-2116"
    },
    "contactNumbers": {
        "phone1": "985-180-5756",
        "phone2": "215-600-6568"
    },
    "physicianContact": {
        "name": "Ranee Ferraresi",
        "phone": "685-583-4051"
    },
    "medical": {
        "conditions": "platea dictumst morbi",
        "medications": "Donepezil hydrochloride"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJDSURBVDjLpZNLSNRRFMZ/f53UUoc0SnyQhYRmRWVFYrvKQqpt0KaIiKDcRBs3BUGQSNGiMhJ6rIoWQiVtJlDDmXDRWx1c2EOQIXqJKI3ee869LeafCQUJns13v8X5OOf77gm89yykslhgRYbvnh5T1XLnFFVB1SJiETGzaK1BxMT2X+jd+5eAqpav2NGE94pXh3eCc4pXwavFqeBVeNV1e88/JxCxOCfMTKTwKjixOLUZFIMTQ260lJuFbdw43+NVFBVVsXIyfmlfR0TEUFJ74L+7am835w7Voc4z9nUq+2rny4tARuDskw8MpyZR4xCjqFFkRmd5TVk+YgUjnnWVRWxeXcSV+/3FABFrZzixPM7PrNFwZIuGo//mS5ZVcnxsG9HFAaOfx6muKMIay6yAswY16bDRzjY6MRkjxWKNxYojOTZF2ugfAWOmUTHkFJZkHJfQeSdhAooXS9nSQTp7HjGVHqfvhSFasBI4QnBw9ybvvcM5h/cOH6LzPsO9J1pbQvXeGras3UpF8Rp6hh7SP9jHp5Fvl7MePH0dDKbsx6KqesrW72T4a5CurGsiumo7Iz9yursS74PsqvzpTTUb0SxlY2kjGljqNzQAnIqEKR1OJBJtQBq4FYvFmsP3SYDxqe95i4ICmtYeA+DMrg66BtqBx3kRgGQyGQca5sR+b+4f+D7xZXoo9TzvbSpOS+MdWmNHycvOBZie1zE57y73v3tODhG6BtrJCSLE3zwDuB7M95zrm8taw5UKgUmgvf9aquUXPDCAeT1Y9gAAAAAASUVORK5CYII=",
    "paymentMethod": "Credit / Debit card",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Sidonnie Palphramand",
    "gender": "Female",
    "birthday": "12/12/2021",
    "experience": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    "instrumentsPlayed": "erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus",
    "instrumentsToPlay": "Electric Guitar",
    "sing": "Yes!",
    "howHear": "Other (please explain)",
    "howHearDetails": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    "parentNames": {
        "parent1": "Gillie Rodgier",
        "parent2": "Eleen Leschelle"
    },
    "email": "dkingswood8@amazonaws.com",
    "emergencyContacts": {
        "emC1Name": "Lina Allnutt",
        "emC1Relationship": "id mauris",
        "emC1Ph": "734-837-8345"
    },
    "contactNumbers": {
        "phone1": "981-778-9049",
        "phone2": "341-668-8511"
    },
    "physicianContact": {
        "name": "Delcine Kingswood",
        "phone": "212-414-3011"
    },
    "medical": {
        "conditions": "vitae mattis",
        "medications": "Constipation Symptom Formula"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJCSURBVDjLlZO7a9RBFIW/+e1ms0kMmOCbRKKGaCBBUCsttNM/wU4UsRQUQQSblIKWFpGIiLVYWQgWsRIRxFc0PhOMhSjRDZFkZ+5jLFazWWx04HKq883cw5mQc+Z/z9T105fc7ayZLpb/x/j6xpl37jZYWb+JmdkpeouKrgDGxsayu/NnzGxFT4xkCpzKuk2s2TaIm5NnXiASWQGYGX19fQCEEFo055f07DsABOLPeUwiOTsiSrEakMlM1u+tmP+MmeFm1GufkaUFXBLZ7e8X3F++y0KqETqbZgDVhJtgmnBNQCC7k1K9CZjufcqWjZvpsbXc+jiBqaFimBpX+/eQVXFJmCbIDYDKb8CRK4eeD/QPMDo0irqya3An4oqYcPv2HeT3zSaRrHU2rv/K+6ykFCkfvnzw5sCWgdHRoRFq9RpLsoSYkFzoKq9B1RBJmCqWIt1dP+hdO09baZlFqVPcO/fg2JuPb6cePXtMEUq0l6pUyx1USx1ES6gYInVcIyaR2vcSs7PriKmtGeLkxYcjB8/vz8v1ZVSVDx9mMHVMDTcnpYir4BIxEeZjGdwRSc0Qt3/dyUx4S5FLnNt7oaUL+upaIwMVTCMhlHF3VFOzB6rK8eFTZMstHQghkCQ2zBJxSY0e5AagvBpQFAUndp9q6UAIAZHGCp09/bgKGpcgf8FMCePj43l6epq5ubmW/q/Wo9tn6erupr3aRaXaSVulncWfNT69efIt/Mt3nji5dYOZ7jCTYTMdcre+olw5ahIXfgHcTaP3d3vNvQAAAABJRU5ErkJggg==",
    "paymentMethod": "Credit / Debit card",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Raimundo McClounan",
    "gender": "Male",
    "birthday": "09/20/2021",
    "experience": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "instrumentsPlayed": "pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium",
    "instrumentsToPlay": "Bass Guitar",
    "sing": "No!",
    "howHear": "Social Media",
    "howHearDetails": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    "parentNames": {
        "parent1": "Sebastien Pegden",
        "parent2": "Elisha de Werk"
    },
    "email": "amacguffie9@zdnet.com",
    "emergencyContacts": {
        "emC1Name": "Claiborne Shutte",
        "emC1Relationship": "fusce posuere felis",
        "emC1Ph": "777-356-0418"
    },
    "contactNumbers": {
        "phone1": "786-285-8713",
        "phone2": "180-192-7355"
    },
    "physicianContact": {
        "name": "Alistair MacGuffie",
        "phone": "678-409-5547"
    },
    "medical": {
        "conditions": "justo",
        "medications": "Medicated Wipes"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKLSURBVDjLY/j//z8DJRhMmJQd+x89/W4IRQbY1x5L8590dzmy5PuIqC4gfvA+PPIyEMfhNqD06H+L9gfG9p33/jr23OMEiX30DTj8yT/oFxCf+hAYfBeIfwPxIyBWwjSg5Mh/tYZHzDr1D34aND7Y9tXOsf2Lg/O/z85uNjCFn908lT56eH985xXwzXvygwYUA4yLD/9Xcm+QlS572JWesP7XVyOL79/MLKci22Rc/6DXvPH+X8um+79t2u7/tOu4/w9ugFHxof8wha+1LP89NHT9iaxZIf/BCpWie7/Vi+/N/25kqvrN2Oz/suiO6QgDig6ADfgtJrX0p6TMb1u/Xd+5Eh9M4k16yCyQdH+HYOK9H6JJd+tgBv7U0j3wXVvvA9wAg8J9/6sNAvT/8gr++8Mn1MYQ8aCFIfzBf6bwB3+Zwx/8Ywu7H44e+j8VVX4hDMjf+/8/I6v/fya2OyghHHCn3GuRw3TvJTZn4mZ7P82dEv4trc//f2SLw6cp/mrX4Abo5+3+/5OBJeQ3A4s4TLPXTEsvj5mWLzxmmT+ImuJ+rXF14v8tV6b+v/Bs1//+3Vn/w/t1/5tnS/aAFevl7vw/R1TDAabZscNommOn0UeHLsNFDj2GPLHtLt83Xp7wf+O1SaCw+t+zJ/V//550kAHfwRp0s7f/tyzRkbQo1Z5pXqr7CEi/tSjTyYAZ6FNt+H/blTn/kcGmS1NBBkAU6GZt+2+UoelvmKHuph5g6QqkwalRWMNDFkRb5kh/796V9L99VwJYc/vOBFQXaGdu+a+dsfm/VsYmIN74XyttAxCv/68Jwqnr/htkJP4P7tH437srBWwziAbx4WFADAYq7gDiTyBnQ+kOkDgAwll4PHHRgLAAAAAASUVORK5CYII=",
    "paymentMethod": "Credit / Debit card",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Marta Beernt",
    "gender": "Female",
    "birthday": "07/11/2021",
    "experience": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "instrumentsPlayed": "nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate",
    "instrumentsToPlay": "Drums",
    "sing": "Yes!",
    "howHear": "Other (please explain)",
    "howHearDetails": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    "parentNames": {
        "parent1": "Anatola Macy",
        "parent2": "Julia Jindacek"
    },
    "email": "lmohana@merriam-webster.com",
    "emergencyContacts": {
        "emC1Name": "Lelia Bartlett",
        "emC1Relationship": "integer",
        "emC1Ph": "732-327-5224"
    },
    "contactNumbers": {
        "phone1": "988-305-2840",
        "phone2": "561-958-7781"
    },
    "physicianContact": {
        "name": "Lynnette Mohan",
        "phone": "852-119-5698"
    },
    "medical": {
        "conditions": "eget",
        "medications": "Eszopiclone"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJGSURBVBgZpcFLaFVXFIDh/5yc5EZJhN6E+koziC/UtqgIUYOIbZWGgkNLUVAcOHToRBCU6qygExGHQmfViSCCD0RQELVQCoW2UDW2iimlJrnn7rP3WnstMxA66UDI9xXuzkKULFDJAlWnfvjb+R9qhogRVRGBoE6IShQlJKcWIwSlYt74mkX8x1FzcnbUHM2OqCNmiDiihmQjqXHpzmsq3pntKtlAzdFspOyIGqJOUiNqJokT1UhitAcqQkcpmWfu7Pl0kCiZrzYPsn/7BxycaHN41xAT6wboqwq+2TFMf1/Bkd0f0omZbsxYEMqoiqjRqgqiGK3ekos3pykK+O7aK0aGelm7vMWFu18yNbuPlW2om0wQw2qlrKPSqNHqLTiwc4iqLKij4u50YsYMxtcMEDUxMryeo5e30E2BKBmvM1UnODEZIRnnr7/m2ORSuo1x4upuDOHM9UwSZUV7NeuXjTPX1PwUJunKDSwmqpmQaNIi3KGOijt0okJfYs/GQ2Q3smUM5+XMCz4ZmaCTAk+mtlPYZao3XSGkzOkrf5LEOP79M6I4PWUiu/H8n98RU9QEycJsnGPTRzvpSJc3X3xNNTunhJQZ7O8h9Rb0S4G0nOnUoFlZumQUtUx249XMFO2BZfz44j4P//iFf++do1h17Ik3QXFxLBqeFBdjYvIITUokSzSaWDW8gW1je3k89YBbPz+ifngG74xSuDvv4+Nvy3rr6GeL7/52+69kfP7yrP/KvMLdeR9jJ4s6W8/iYHls+qw/5Z23QlWChZhP1DoAAAAASUVORK5CYII=",
    "paymentMethod": "Credit / Debit card",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Ianthe Lafrentz",
    "gender": "Female",
    "birthday": "02/20/2022",
    "experience": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    "instrumentsPlayed": "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst",
    "instrumentsToPlay": "Ukelele",
    "sing": "Yes!",
    "howHear": "Other (please explain)",
    "howHearDetails": "Donec semper sapien a libero.",
    "parentNames": {
        "parent1": "Carolee Hainning",
        "parent2": "Pamella Tall"
    },
    "email": "bquartermaineb@usda.gov",
    "emergencyContacts": {
        "emC1Name": "Briny Fitzroy",
        "emC1Relationship": "rutrum nulla",
        "emC1Ph": "732-771-5629"
    },
    "contactNumbers": {
        "phone1": "836-618-4847",
        "phone2": "744-860-0644"
    },
    "physicianContact": {
        "name": "Bea Quartermaine",
        "phone": "759-242-1352"
    },
    "medical": {
        "conditions": null,
        "medications": null
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKOSURBVDjLbVLNS+JRFP3BwPwJLWY9BLMI5j+IGEmQWlSLdrPScnAVbapFRB8DUi0qIitSShIsKyJaTFL0BS5KxaKMhj5Ew5Ssnz+nyVI7885jksnpwYHLffeec959VwGglGJ7e/v7yspKbGZm5plgzNxbtf8lFhYWytxu9xNKDnMul+vDmwR/FS+EWkEAy8vLOD4+RqFQQD6fx+HhoczxjjWsfXEkCQR79l+1y8tLeDwehEIhifn5eZkrcZSVBIuLiw4BHB0dSUXC5/NhdXUVTqdTgjFzdJPL5XBwcAD2TE1NuRShlDs5OYHf70cgEJCKVC89L4729/extbWFjY0NTE5O5hRhT81kMkgkEjg7O8P5+TnE+3B6elp0xHhnZwfhcBher1ciGAxiYmJCVebm5iRBOp3G7e0tIpGItLu3t1ecAVU5RDZubm5K0O34+LjKAUoCVVVxc3ODZDKJWCwmVfm03d1d2UjLdEYnJKCAzWZTFfG3j/f399A0DfF4XD5DkKK/vx92ux29vb1YWlrC2toa+vr6ZM5qtXKAGBoayiqzs7NeskejUaRSKYyMjPAC19fXkowDY8PAwIB0xBxdscZsNkcV8U3vxXKYpqenf46OjqKjowMBsTidnZ2ora2FyWTC8PAw2tvbZVxTU8PG3yRpbW1NF1fS4XCUNTQ0+Hp6ep5JcHV1Bb1ej/X1dTkwvl+sOaqqqp66uro+kqC7u/vh1V5XVFR8E+waCZqamqDT6VBdXY26ujoJxiSor6//QYLm5ua7VwSfxBG2w4ODg3fiezVu29jYGFpaWtDW1iZj5sRdijWsfUVQXl7+rrKy8rPBYLgwGo2/LBbLg8BjY2PjV4EvItaY4x1rWPsHDKf5+VmuapYAAAAASUVORK5CYII=",
    "paymentMethod": "Check / Cheque",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Lawton Couves",
    "gender": "Male",
    "birthday": "02/28/2022",
    "experience": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "instrumentsPlayed": "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in",
    "instrumentsToPlay": "Electric Guitar",
    "sing": "Yes, but I'm shy!",
    "howHear": "Search Engine (Google, yahoo, etc.)",
    "howHearDetails": "Phasellus sit amet erat.",
    "parentNames": {
        "parent1": "Husain Alexandrou",
        "parent2": "Stillmann Lebreton"
    },
    "email": "tunsteadc@senate.gov",
    "emergencyContacts": {
        "emC1Name": "Cobb Akast",
        "emC1Relationship": "lectus",
        "emC1Ph": "878-903-7547"
    },
    "contactNumbers": {
        "phone1": "698-978-2707",
        "phone2": "385-864-2266"
    },
    "physicianContact": {
        "name": "Thom Unstead",
        "phone": "232-436-9453"
    },
    "medical": {
        "conditions": null,
        "medications": null
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFGSURBVDjLY/j//z8DJZhhcBtwa5ou062Zhp0PV7udvjVNO5lkA25M1Cx4czL//+/PJ/8/3xX+9myrqgfRBtycppf26mDs398fFv//cKXh/5vjdf/vLg74ui1PMZIoA+4utF7/893K/z+e1f3/8WLW/w8X6/5/e9Tw/+YM+w9EGXBrpknbl7ud/789yPr//VHx/2/34/9/uxX6/2y9xWe8BtycqmvycJXbqac7Au59uhn3/9ttv//f70b//3oDqLlB7/uiCAXcXrg1wyDm7jyrc98ezfz/9U7w/2833f6fmWD+5Xyz6YtLLWYvlscpBOMNxIerPc7/eLbw/6dLFv+/XXP/f3aK9deZ0cpJO4KleA/EyfISjMbH6zxO/nzZ9v/rTd//ZyZZfZ6bqBJLUkI62WvSenW+68vTvVYPlqarhg2DvEAMBgD1ZuZTUbWrEgAAAABJRU5ErkJggg==",
    "paymentMethod": "Check / Cheque",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Emilee Perceval",
    "gender": "Bigender",
    "birthday": "09/27/2021",
    "experience": "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "instrumentsPlayed": "massa tempor convallis nulla neque libero convallis eget eleifend luctus",
    "instrumentsToPlay": "Electric Guitar",
    "sing": "No!",
    "howHear": "Search Engine (Google, yahoo, etc.)",
    "howHearDetails": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    "parentNames": {
        "parent1": "Trenton Despenser",
        "parent2": "Pia Broseman"
    },
    "email": "jprantonid@netvibes.com",
    "emergencyContacts": {
        "emC1Name": "Sioux Coupland",
        "emC1Relationship": "morbi odio",
        "emC1Ph": "695-242-7463"
    },
    "contactNumbers": {
        "phone1": "893-920-9572",
        "phone2": "396-358-5382"
    },
    "physicianContact": {
        "name": "Jamey Prantoni",
        "phone": "754-991-4383"
    },
    "medical": {
        "conditions": "ipsum",
        "medications": "No7 Protect and Perfect Foundation Sunscreen Broad Spectrum SPF 15 Cool Vanilla"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALFSURBVDjLjZPfS1phGMeFXdef0bVXMeiiQS0hNeeCuuhKUFzKEnU/lDEKxZazaEop20Ub1QpaRhdrjFVgGY4RyEYuj80y7SfMNH9l/vzufV9mrO1mBx7Oc77n+X7e533OeXkAeH+Gz+dr8ng8Y8vLy/6lpaWfi4uLybm5udD09LTr7ZTr1t/1V8nm5mYdMTuJuRiLxZBIJJBOp5HL5ZBKpRAMbsM1bim9dJqnxhxD9dcAv80fd3d3Ua1Wkc/nQSHRaBTxeBzlchnV8gVKFyF4VmZgsz72Dj17Wn8FoCtTc7FYBL1KpRLoczgcxvn5OYMWLo5xmd1G5fIHPn14A1P//SkGIOabpO1KNptlhkwmwyBHR0fgOA5UL5dLyKU4FLJB1kWRhE57r/JAr27iEbPz4OAANEKhEDPRPVPQyckJywuXKQIIEGOM5GekwwK8Xi+USqWTx+fz8b9BZ0PByWQSe3t7kMlkXxkgEAhgZ2cHGxsbmJycZMX0fnh4yPSaRgcbiUSwv7+P09NT9PT0xBmAFtVMFEKDajW9dvd9j+BLIMyCix5D2tl19g9gYmICs7OzsNlsLNfr9VhfX0djYyMsQ1amWZ/bMP56BoKOTu7aFtbW1tDc3Ay73c5apJ+SahaLBb29veDIkKlGO6Q1QpH42z9D1Gg08G9tQSwWQygUQqFQwOFwwGg0slxEdGO/mUF0Ol2G/UikwElXGrSa2WoU4Oc+o63tNlZXV+H3+9k23G43BAIBLPZXDGAymfIMMDw8XGceNK08eqJHn6aPAR4a9GhtbSWQNkilUhY0b2lpgUQiiVMA+Q+SV4dpYGCgTqGUv5PelVZHX4xi3j2PhYUFuFwuaLVaGAwGllONnM7EyMhIkmwzeO1oNjQ03Oju7pKJRKK0XC6vqNSqqkqlIp/rzqFE2vFerVbnSOTJu2x7e3uEDJz/C4Myz4QSsAdYAAAAAElFTkSuQmCC",
    "paymentMethod": "Credit / Debit card",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Judie Laxston",
    "gender": "Female",
    "birthday": "06/11/2021",
    "experience": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    "instrumentsPlayed": "potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes",
    "instrumentsToPlay": "Ukelele",
    "sing": "No, but I'd like to!",
    "howHear": "Blog or publication",
    "howHearDetails": "Proin eu mi. Nulla ac enim.",
    "parentNames": {
        "parent1": "Ernestine Freyn",
        "parent2": "Elnora Neeve"
    },
    "email": "cgilbodye@constantcontact.com",
    "emergencyContacts": {
        "emC1Name": "Amaleta Leaves",
        "emC1Relationship": "tempus vel",
        "emC1Ph": "594-815-3613"
    },
    "contactNumbers": {
        "phone1": "582-123-3301",
        "phone2": "685-619-0792"
    },
    "physicianContact": {
        "name": "Carlynn Gilbody",
        "phone": "955-513-0594"
    },
    "medical": {
        "conditions": null,
        "medications": null
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFxSURBVDjLpZO/S1ZRGMc/5/aqIFhYKCKBOGTttYT1JziJsw26uQit/gHOOgQR7tHi0tjmWIGDPyIoGgQd1BCqe+8532/Dfd/7evEtFR84nOE853O+z/c5T7DNTaIF8GL98zIwATwDHoONCchkWSALIAklTvta/vrw/u0nyLycfRSwzfzap9e+Zqy+3bHtSgHwHODN1nEt7X+FLUzfZe/HaV6XgDzWOXwwOgBACL0v7x/mAPz+U/bXANuDnVe/HOVXMs8phS5AbnWkXTWUxHlAAFh6v4iUkM2rmQ2+HfzseXly/A5WAiCrABWtKApGxu5R5GWdPDTY31h1CbEBqDwviwhAnheNF8tkytTsixS7gFArKNug8nITY3HOg3bXY4ztPTWS+25d7KkduwBFGQgpJrY/7mGrTjz7VfRWoGqIWgBJ+g5MvlvYvOD2P0uwT7o/MWlzbuXDlO2nSMNSBAsrYUVwwhLV5NqgM8h2AcJNx/kvz3X5EBChVawAAAAASUVORK5CYII=",
    "paymentMethod": "Check / Cheque",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Eddy Fotheringham",
    "gender": "Male",
    "birthday": "02/20/2022",
    "experience": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    "instrumentsPlayed": "vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est",
    "instrumentsToPlay": "Electric Guitar",
    "sing": "Yes!",
    "howHear": "Other (please explain)",
    "howHearDetails": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "parentNames": {
        "parent1": "Nobie Bartles",
        "parent2": "Timoteo Goldberg"
    },
    "email": "csmeadf@bloglines.com",
    "emergencyContacts": {
        "emC1Name": "Kristoforo Rozec",
        "emC1Relationship": "tellus nulla",
        "emC1Ph": "466-209-7227"
    },
    "contactNumbers": {
        "phone1": "821-855-4901",
        "phone2": "558-158-3928"
    },
    "physicianContact": {
        "name": "Collin Smead",
        "phone": "109-233-9089"
    },
    "medical": {
        "conditions": "pharetra",
        "medications": "GIANVI"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJMSURBVDjL3ZJfaJJRGMaFYBdF910XSSukaRdFF7Mxkpozc0UI1UXksNQ7V0O0QocshElqTYL4ilhjzE0oahT4ZToHFWUb5Za5zyWNsk3dYNvxX/R0zgJZsHXTXQdezuE9z/N73/dwRABE/xKi/wjQ2Ni4xWAwXHI6nQWO42Cz2TImk2k/jW30LLAcu2Mapv0DIJPJ6lpbW10ejwfZbBaCICASicBut6etVms0mUyWWC4Wi4FpmJZ5agCpVHrMbDYvJhKJglarHVEqlT/a29vh9XphsVjg7jqP8APtzws6bWhgYCDDtMyztgOXw+Eo+nw+vVqt3iyXy5d4nkc8HsdoNITEUz3yqQAmH53yMA3TMk8NIJFILur1+oXe3t6Otra2Z01NTRWFQgGNRoNbXScwP9WH6vI0JgKa6jBn8zAt89QA9XSpVKqpnp6ehcHBwXwwGITf74fDZsJ44CRK849R+upGQXiC8N0zleNq1UfmqQHEYvEm2nZDS0vLjE6nWzYajUWTyVgO31GP5ZJDKH1xIHp9Hyr5IcS5ZvTbD5mZ56//4H3/0SMzvBXlufsg0+cQ7ZaimOnEYnoEr28enHzlObB1Q8D4vcN177jmNwv04YqfO7DySfs7UmfpKDeQiXgx5pJd3RDw9rbcmIm6Uc76V6uvpE7TEWSrO0kbQL49RLRL8j1i37N7XQBtb5bkBJQLPEpz9A3mAmtiGNWlD5h92YfnVnFgXQBtLxfrbiCjzr2EViK0EnlxrZ6Er+wi1ER4y07Cd+4gocvbR38Bt2OvTVFKHBsAAAAASUVORK5CYII=",
    "paymentMethod": "Check / Cheque",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Cole Barnhart",
    "gender": "Male",
    "birthday": "04/02/2022",
    "experience": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "instrumentsPlayed": "convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero",
    "instrumentsToPlay": "Piano",
    "sing": "Yes!",
    "howHear": "Blog or publication",
    "howHearDetails": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    "parentNames": {
        "parent1": "Maximo Scaysbrook",
        "parent2": "Davide Blaze"
    },
    "email": "jkunathg@macromedia.com",
    "emergencyContacts": {
        "emC1Name": "Timmie Swiffan",
        "emC1Relationship": "libero nullam sit",
        "emC1Ph": "498-195-8808"
    },
    "contactNumbers": {
        "phone1": "450-455-7663",
        "phone2": "533-459-9407"
    },
    "physicianContact": {
        "name": "Jacques Kunath",
        "phone": "376-523-8368"
    },
    "medical": {
        "conditions": "dictumst morbi vestibulum",
        "medications": "Junior Strength Pain and Fever Relief Wild Grape Flavor"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHuSURBVDjLpZM7iyJBFIXnR/V/6nADdaINOprWDUQUFEETE0VxDIwEkRJEEUR8lY/AwLeirbYPFBXv1ilmWmSHWZZtuHR1dZ2vzr236oWIXv4n/pjo9XpKt9vVOp0Oa7fbBufcaDabrNFoaLVaTfkWIMSqEPPlcknH45Fut5uMw+FA8/mcqtUqr1Qq6peAD7F5Pp8JD9673Y5M06TT6STnAC2Xy2apVFKfAB+2+acYDlarFRmGIQPjfD5vQRhjPJfLKRZA5KtBhAc7Ohyv5HL9ehLrupMWi4Vc0+/3KZ1OaxZAFIuBDKvb7VYAHBIAKGN5+mH/KQGoA+qxXq8pkUgwC9BqtQwUC+LNZkN2u4OcThclk0k5RgAwnU6li8vlQtFo1LAAok0SADHCZrNLwft76gkwmUwsF5FI5AGo1+sMFUcasGez2aRgNptJV5+A8XgsOzMYDCgcDj9SEP3V8PN+v8vC6bpOb2+63BEBVwAMh0O6Xq9ULBYpGAw+iij6qhQKBY7dsOCzfaPRSAaE+MYGGAsxF6E8HaRsNqtmMhkTbcPC/X4v80UaaC3AsC6Eps/nU788yqlUSo3H41ykJCuOmiBn9F0cHhJC7vF41G8vUywWU0KhkBYIBJjf7ze8Xq8hRMztdmtirPz1Nv5r/AZMKDFYuHxjqwAAAABJRU5ErkJggg==",
    "paymentMethod": "Credit / Debit card",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Eric Pottery",
    "gender": "Male",
    "birthday": "04/30/2022",
    "experience": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    "instrumentsPlayed": "magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum",
    "instrumentsToPlay": "Acoustic Guitar",
    "sing": "No!",
    "howHear": "Recommended by friend",
    "howHearDetails": "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    "parentNames": {
        "parent1": "Vernen Busen",
        "parent2": "Damien Prestedge"
    },
    "email": "gprovenh@imgur.com",
    "emergencyContacts": {
        "emC1Name": "Obadiah Boyfield",
        "emC1Relationship": "ipsum",
        "emC1Ph": "951-522-9314"
    },
    "contactNumbers": {
        "phone1": "271-755-7814",
        "phone2": "901-552-6298"
    },
    "physicianContact": {
        "name": "Granville Proven",
        "phone": "819-311-7100"
    },
    "medical": {
        "conditions": "ipsum dolor",
        "medications": "Monodox"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALQSURBVDjLbZNdSFNhGMf/55xtx6P7aG1rbiSbORwpm/QJQeGQPq/SFmiFFZjBQiiF6CboUrxIUqioKIO66SYRQVAiBIkiilJGyJQGrjl1pq42c+ecnfUcEQrdgd/Fed/n/3+e533el2lvbw8riuIiFnp7eytQ4AsGg98kSaqQZfn70NDQ7v/3NCT05HK5F8SVpqamfCEDEqt0Eyc372lIyBNnyF2ytXTLRSwPUc5DVIBW232U6YHmG+81JK4lqjYbsCScIB4SkY/ax0JGSAlssVXIC1YhCr9gEuYEURSniefE+JYKSGgkagnZpP2Kscwn7Ofugs15MbzUgPEVH0TxskzZGwlTIQOJiNKmz84DByx6rIjXkF71Yyl1HJHfNrV/hVBj7FsMaFHcMKg+Ya+AjimGjHJkTEnA+RIKI+GpKGLDYG8hAyNx2m631wzfjBeYAUstiJVqjBpbyOAXMRCNRmXvnYF9Ak1BygEiDbTF+gg79QwOBT5PUpWDFBfcYkDuOtooJ7gP2U7sQSN0U3HYlyfwxWbGm4VpGI1GfTqdrqqvr6/s6+vLJxKJ5Xg83hkOhx9wbre7QxUTvOFoqjTxdgSHtUZcvHAOTqcTBtMO0D0xOBwOVygUEjweD2OxWNTRHiMTrdpCinhFhIqn1uCXqnGkrg4d924hFf4Jp8MBn8+n4zhO19PTg9nZ2ZzBYBhpa2s7NTMzc1VtoYbE5wm3NV6EbXrzem8HLyn5wetphq43zGYzqAUkk0nQe/mj0WjOUkjGZDLxqgFppSc6ne5Z7N0aOPePdYOx26uMIjHo6upCSUnJ+lomkwHLsjxV06/+UwtrjN/vnySDXcSEVqttph5fBwKB0rKyMoUybZ+fn0ckEgHP83C5XKBxgyayFIvF2NHR0Tkmn//3AL1eL0eH5aOM/XSANhJx6kVYXFxsVRNarVY1szabzeboLJJUUcNfnRWk+01xXkAAAAAASUVORK5CYII=",
    "paymentMethod": "Check / Cheque",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Elana Shire",
    "gender": "Female",
    "birthday": "05/09/2021",
    "experience": "Pellentesque at nulla.",
    "instrumentsPlayed": "eleifend donec ut dolor morbi vel lectus in quam fringilla",
    "instrumentsToPlay": "Vocals",
    "sing": "Yes, but I'm shy!",
    "howHear": "Search Engine (Google, yahoo, etc.)",
    "howHearDetails": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "parentNames": {
        "parent1": "Eleanore Ralph",
        "parent2": "Jerry Gallon"
    },
    "email": "apickancei@yolasite.com",
    "emergencyContacts": {
        "emC1Name": "Adriane Insole",
        "emC1Relationship": "et",
        "emC1Ph": "406-801-7356"
    },
    "contactNumbers": {
        "phone1": "479-428-7622",
        "phone2": "206-178-9618"
    },
    "physicianContact": {
        "name": "Alvera Pickance",
        "phone": "622-175-4902"
    },
    "medical": {
        "conditions": "rutrum nulla tellus",
        "medications": "Oxytocin"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEUSURBVCjPXdFNSsMAEIbh0Su4teAdIgEvJB5C14K4UexCEFQEKfivtKIIIlYQdKPiDUTRKtb0x6ZJ+volraEJ3+zmycwkMczGzTE3lwkbxeLE5XTqQfTIjhIm6bCy9E/icoOoyR4v7PLDN+8ibxQHxGzE3JBfHrgUalDnQ6BNk1WRFPjs66kDNTxqg0Uh5qYg4IkrjrS9pTWfmvKaBaGaNU4EY+Lpkq88eKZKmTAhbd3i5UFZg0+TzV1d1FZy4FCpJCAQ8DUnA86ZpciiXjbQhK7aObDOGnNsUkra/WRAiQXdvSwWpBkGvQpnbHHMRvqRlCgBqkm/dd2745YbtofafsOcPiiMTc1fzNzHma4O/XLHCtgfTLBbxm6KrMIAAAAASUVORK5CYII=",
    "paymentMethod": "Check / Cheque",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Dotty Clatworthy",
    "gender": "Female",
    "birthday": "01/17/2022",
    "experience": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    "instrumentsPlayed": "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in",
    "instrumentsToPlay": "Acoustic Guitar",
    "sing": "No!",
    "howHear": "Search Engine (Google, yahoo, etc.)",
    "howHearDetails": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "parentNames": {
        "parent1": "Hynda Mundee",
        "parent2": "Carena Flye"
    },
    "email": "lcargenj@disqus.com",
    "emergencyContacts": {
        "emC1Name": "Sandye Woodvine",
        "emC1Relationship": "nulla mollis",
        "emC1Ph": "340-780-5245"
    },
    "contactNumbers": {
        "phone1": "701-403-1945",
        "phone2": "695-728-6725"
    },
    "physicianContact": {
        "name": "Lyn Cargen",
        "phone": "230-453-2385"
    },
    "medical": {
        "conditions": null,
        "medications": null
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALWSURBVBgZBcHLi1V1AADg73fuuXMd5947jzuO+WgSylIhdROEJNFIkBptclmEuza1yPBfyHWLKBcJLdq0KFBMEotKxCBSNDVJ0xzHxzyqM/ec+z739H3hwKH95xozjblSqQQAAgCAIAACBvnQ8uLy93FjpjH3+ccnhCgYDPsACIJCIYBWP0VQFJFiWCjkPjx6ZC4ulUpyA6H/pezsJZPnWpaOzhqrVd28ecGN7LgHS4lare7xSqIUl61mHe8cKJTjkgggSVYk20espqnWmevS9KE0TYXuJd12U7vV1Gun2u3UoJMJYYggDoDx8XUUfWvfn+Kj31TenDazYaPR/m3twVa1iZqRUiQuj0hbHSF0EURAkCSJNG36bya3OjnQ/uoW+VDR+lm/m2o1M/1uS7eT6XVbQihADDA+PkPRNzFel7y7w+SnKwYvb1CZ7prtrShXn7S2UlIeKWu2elglEBFAp9OVpS3JaqI5lvv3WTpf/KXIO6LeaZ12qtfNdLLUsJcJIIgDYHR0QrWeGa/XQfmtLUY/OC/On7KxcU1ntG1T9YrKyJJe+65S9LaAOACaSSZNu8j8uvDIvX5k/TO5507ctHAw83j+M1fvzUvbbb120ws7KgJiIQioTzxhddB1udVyt1c2NTnl0b5g3+mBk38OtWvL5vbutXlqqx+ufeOn37+WDesiKIrCL/N3nLp13f1/VnQ6HWmaSbtdF7cVbjx6YPe2XfIot2vDq/LQ9+LzeywP74oCWoPMUt5XGakaGx23pjKmuqZqy3xi8/0FS9mKcqh6Y/t74Mi+456e2akwFBGEEKmpq4aaSj5qbahaf2PRxoW2O3t2Sporrj244NjZw+DYd4fdXrwiEokHg1ye5zZN7bapQQBB2IpXmA7B/seJi1dO2bPzJSevfmIkxM5f/tGUWeH1Qwe/XTcz/VqpHCMIgAAAeDj8w/Lwb0MDkVjDrGhx8sz/ABdNCpr3mlcAAAAASUVORK5CYII=",
    "paymentMethod": "Credit / Debit card",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Bethanne Feldfisher",
    "gender": "Female",
    "birthday": "10/30/2021",
    "experience": "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "instrumentsPlayed": "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque",
    "instrumentsToPlay": "Vocals",
    "sing": "Yes!",
    "howHear": "Other (please explain)",
    "howHearDetails": "Morbi a ipsum. Integer a nibh.",
    "parentNames": {
        "parent1": "Amii Ishaki",
        "parent2": "Trudy Sudron"
    },
    "email": "laristidek@auda.org.au",
    "emergencyContacts": {
        "emC1Name": "Phylys Haldane",
        "emC1Relationship": "ut",
        "emC1Ph": "846-275-5030"
    },
    "contactNumbers": {
        "phone1": "557-122-2534",
        "phone2": "388-878-9902"
    },
    "physicianContact": {
        "name": "Lola Aristide",
        "phone": "101-434-4949"
    },
    "medical": {
        "conditions": null,
        "medications": null
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAF2SURBVDjLlZLNK4RhFMXPaMzU+EhJLyUKjYUSykeRsRCWUnbKzpTd8AfYWGPNRtnJQorNbMdsJ8xiForYSFNKM2Pe9zn3PhYoTfN56m5uPef+7n2Oz1qLctq5jSZUtPlo/mQaVdRUrhlLbKWcgDPrBJ2p7fjmXTUD33+C3dtoQFUfnGB3eKB9CGoVmWwGrx8vj0IZOV0796oSCOWKlD4RgehvkaDHXuPxuibBn6I3G3auPwKringmjrP1C1+lFfzlmjQ/01UF9IiGj2g8QkRASzhtDlaPV2INGhjQEjk3h872LhjXrC0fLsQaIqAQ2UIWbaFWjA9PzPV09hxE9mfs7N6krZsg/5XH88cT/EE/woNhLEaWYEpuUt7AJYwIMulHfL7lUSy4MDQQS9Cw9i8Yz0BUMDE6hkQyifv0/Tt86CAlINT6DKhEqCUE1ytCRPtTB+li3TkwLkFLqCqMISo9rkLwkwOxWjNIFZJIXF5eQSjQkp1L9Q34mO6FTUohDAAAAABJRU5ErkJggg==",
    "paymentMethod": "Check / Cheque",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Desmond Freeburn",
    "gender": "Male",
    "birthday": "12/27/2021",
    "experience": "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "instrumentsPlayed": "vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus",
    "instrumentsToPlay": "Drums",
    "sing": "No!",
    "howHear": "Blog or publication",
    "howHearDetails": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "parentNames": {
        "parent1": "Stephan Clever",
        "parent2": "Bill Rouse"
    },
    "email": "rdarbenl@amazonaws.com",
    "emergencyContacts": {
        "emC1Name": "Lennard Graith",
        "emC1Relationship": "donec",
        "emC1Ph": "353-177-6552"
    },
    "contactNumbers": {
        "phone1": "398-427-5793",
        "phone2": "614-390-9159"
    },
    "physicianContact": {
        "name": "Reider Darben",
        "phone": "424-493-6648"
    },
    "medical": {
        "conditions": "vulputate luctus",
        "medications": "PRIME ASTHMA RELIEF"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJcSURBVDjLfVPPaxNBFP5mtzVL0nhIA4mUmBaqB/WSUy459FBs6amIIv0DJBcR9GIOWqSI9JSjesjFi1eDoNBEsdEaEFsRD0EPLYKxNMREyY/NbvbH+GbdTdOWOvB4M7Pvfe9735tlnHOIZd24znHuAsxiEdw0wS0LtmHAdv3o/Dz4q3UEXq8xDK0RbzOcxIcSbXHv+b6Bw2sfwDAdEFvXnWAHSHh3P3IMgDQAoI+ckhGPwxIgZMJbmgY2PQ1b7VFM/z8M+saKpmnLzctX0AmOQZNlGIJ6uw3lVwORN28RpJhjAbbv3qlyVe2EJibGFDrbtg1PYALGJ1nuqLMz1aVDAEwEVSqVpGma+UgkEm1TxV6v5wAIkyQJPp/PsVKptKfr+mI6nf5wQAOimgmHw9FWqwVVVWHRBIQJANFGp9Nx7hOJRJTYZI6ISEEpwURUNoXqbnVhHli320UgEAAxSB1poVwuW7FYTKrX604ShjQYnD/mwbfy0Ks7sGT+g64eXiyYq46IfRqPFzzsB/ut5zhZfY+zV9PwTZ1H70shVnlXvF+cHe06LRCt5uBJu7179IXvbTzFmZlLULbXwZ4swb/zDJPxcZkzfnPEBdig/heF0s7sDzGRGjUo0Slg4db+/O+dgmyzScmd8+rm5uaeoijw+/0HNGCMgYfCUD+/AChJv83wm6xVqwstdplHPZfLXSMmK8lkMhoMBv+9TpdF4+VjnPi2htPj9E9IVbTrJr7XZMvQ+PIAQKxsNpskkAyJmiILCXGppSbZxtyf0q5S/7ogWyxOlX9S1qO5gvngL9401yPDHgg9AAAAAElFTkSuQmCC",
    "paymentMethod": "Credit / Debit card",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Franciska Fido",
    "gender": "Female",
    "birthday": "06/16/2021",
    "experience": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "instrumentsPlayed": "justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare",
    "instrumentsToPlay": "Piano",
    "sing": "No!",
    "howHear": "Recommended by friend",
    "howHearDetails": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "parentNames": {
        "parent1": "Trudi Butchart",
        "parent2": "Angeline Bonny"
    },
    "email": "jscrivnerm@businesswire.com",
    "emergencyContacts": {
        "emC1Name": "Rycca Boobier",
        "emC1Relationship": "orci luctus",
        "emC1Ph": "238-224-2777"
    },
    "contactNumbers": {
        "phone1": "828-237-2973",
        "phone2": "295-449-1492"
    },
    "physicianContact": {
        "name": "Jesselyn Scrivner",
        "phone": "207-311-9664"
    },
    "medical": {
        "conditions": null,
        "medications": null
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIaSURBVDjLY/j//z8DLqyaNVPLrnr5PMnESay41DDgM8Cuellm+7rTT0RiJ3Aii4snTGIiygDnupV5c/dc/QF0AT9MTCl9hq5P67qtRBng3ri6ZN2Je/9lU6bKgfgSCZPVJ2+7+CR9+u5tRBng07K2+sCVZ//lUqepCMX0y87cefnO9B2XH4rGTZQgyoCA9vUt5+69/a+QNj25f/O504evPf+jkDbNmuhADOna1Hn50cf/fZvPf7vz8ut/87JFOUTFAq9tHDiUI/u3dd8Fatxy9tH/xCk7FxCMRiGXNCmjzLmrneo2XtLJmLckffqesxcefPgfP3HbUcHgRha8Bgg5p0kANd5OWHXnf8i8C59TN7/6P3PXjf8PX//4H965bg+vZbgjXgOMsuasiVt67a+Ub4GdhHeef8LaJ/9n773zf+nZ9//Tt7//H7vsxn9Zz7QUnAZ4de375Fi3Ahy/RnnTpqdteP6/ZNGpf+kbn/7XjZty0Ld3x2XrgvVfuA08ObAa4NK09XnUkmsvHJvWHU3b9ua/Wd7yG+Y5a14HTj3yGSSvHlZW5lCx/b+QRZA0VgPkgsvDAqcffxO17MY/s5xlp7lMAyVMM1Y8DF9w8RenlqOcWVbfHPvSLX94jX0FcMaCiGu6hJhHlgKMrx83/1jypuf//Sftf5q0+u5/o6RFN0jKjTyGXuyGiQuu25dt+26SuuQBj5G3CLoaAMk4ntedg7qJAAAAAElFTkSuQmCC",
    "paymentMethod": "Credit / Debit card",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Ora Josovitz",
    "gender": "Female",
    "birthday": "07/06/2021",
    "experience": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "instrumentsPlayed": "aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
    "instrumentsToPlay": "Electric Guitar",
    "sing": "No!",
    "howHear": "Other (please explain)",
    "howHearDetails": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "parentNames": {
        "parent1": "Aprilette Lorenzo",
        "parent2": "Jacklyn Prichard"
    },
    "email": "spodsn@artisteer.com",
    "emergencyContacts": {
        "emC1Name": "Maye Clyne",
        "emC1Relationship": "donec",
        "emC1Ph": "406-771-4178"
    },
    "contactNumbers": {
        "phone1": "949-253-8002",
        "phone2": "777-275-7753"
    },
    "physicianContact": {
        "name": "Sonni Pods",
        "phone": "132-746-9572"
    },
    "medical": {
        "conditions": "consequat",
        "medications": "Fast Freeze"
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALVSURBVDjLfZJNaFxlGIWf7853597JTJzQzDi9U6chPxCaOmi78idIlglEsEJJqFmIaDddlEK7EF3pKmJcdiUU3bmwXQiiGxsQQdBaF9HYUFucZP6SNHWS3uncO9+PiyDNGPDs3s3DOec94rOvflkyRrzRjo0fKQ7L9p6uBN/l2tuvnb4EII0VC7Mvl/K+7wshEvyfOga06nL9u7tvAvuAdmQ8z/PF58sP6fCAPXGH4cImKbeFsoad3RS/3c3SZ08gGeTy2WG0EeJfqIwVOE4CR0DsNBjObeIl/6IV7aG0QnoeI6WA+/fSDCRzGNPrSgIYwHEEkd0i6T7k78ctIt0hVgplQzzPI4xSDKYcLLanmCcAIbDKEOkuHRXxuBsRG4U2gOhijUY6Amt7W3UArN0H+OTZC9NYXCKjiZRGiCThXoZMskgi4YAVhyNYux8hkzhGtdEk69fpSzt4QvFop49mIyDIjiAdcegz0h4EuE9TTJ1i4/ZNBjI1hNa4nTzHRxfI+AHamP/O4omDOw/Oo42hG2uOtCTSfYVc4Rk27q9S2/wAIyMGt07xze5JdpvbT1248OmVlZWVq9JaiwCmT19CK833X/9A//EB5ubmCMOQjdFRfvw5R8JxmD33Kq50qdfr4tYt76NKpZKX4sBeV3/9g/ZWm9lzr/PJ1SV+v71KcDSgXC5Tr9dZ+niJRqPBsZGTauHsrKxUKucd3xUtTJfnCi/waD2ivz8LwOWL79GNFfPz80xOTjIzM8P09DRxHPPsS2dCgGw268mkFF98efPei7G25T83VTLRrvuAePf9D5VSSi4uLpJOpwEIwxCtDT99e631/FsL2Wq12hEHhzExMXFibGzs+tTU1NFSqWSklEeazSZra2t4nsfQ0BCFQgGl1M76+rqzvLzc6AGMj48ngiAop9PpG8ViMe95XgJwtre33wGquVzuBuBGUaRrtdpWGIZn/gGotkJJF2DBHwAAAABJRU5ErkJggg==",
    "paymentMethod": "Check / Cheque",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}, {
    "studentName": "Boyce Felten",
    "gender": "Male",
    "birthday": "12/15/2021",
    "experience": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    "instrumentsPlayed": "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id",
    "instrumentsToPlay": "Ukelele",
    "sing": "No, but I'd like to!",
    "howHear": "Other (please explain)",
    "howHearDetails": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    "parentNames": {
        "parent1": "Brucie Geroldini",
        "parent2": "Stanly Leachman"
    },
    "email": "atwelvetreeso@ning.com",
    "emergencyContacts": {
        "emC1Name": "Roderigo Griffoen",
        "emC1Relationship": "dictumst aliquam augue",
        "emC1Ph": "823-368-1455"
    },
    "contactNumbers": {
        "phone1": "622-418-8198",
        "phone2": "817-236-2698"
    },
    "physicianContact": {
        "name": "Augy Twelvetrees",
        "phone": "689-980-2126"
    },
    "medical": {
        "conditions": null,
        "medications": null
    },
    "liabilityCheck": true,
    "signature": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADMSURBVDjLY/z//z8DJYCJgUKAYUBE+440IHYh1gAWLGIzgXgPFINBVFTU/1+/fjH8/v2bAUSD8N69exlBcozIYQCyHUgZAzGIdl1R6bGHVBeEAjW5Qr1QDnOFj4/Pf5jNMHzmzBlUFwA1hQIpkMZ7QKxErCtYoJqVoDaGATXcg/JBBnQAsYmdnR2GC27duoUZBuQAeBhERkZi2IKOYbEAop8/f05lF3h7e/8nZDsy/vz5M5VdYGtr+//nz59Y/QvDf/78QcbUcQHFuREAOJ3Rs6CmnfsAAAAASUVORK5CYII=",
    "paymentMethod": "Credit / Debit card",
    "weeksInterested": "626b0e2d232f396397e17c3b"
}]


mongoose.connect('mongodb://127.0.0.1/rockademy_db')
    .then(() => {
        console.log('connect to mongodb')
        return Student.insertMany(students)
    })
    .then(data => console.log(data))
    .catch((err) => { console.error(err.name, err.message) })