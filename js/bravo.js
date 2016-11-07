var demoApp = angular.module('demoApp', []);  
   demoApp.controller('myCtrl', function($scope) {
    $scope.players = [
        {
            name:'Anand Kannan',
            imageUrl:'images/blankImage.gif',
            status:'active'
        },
        {
            name:'Anirudh Nagesh',
            imageUrl:'images/blankImage.gif',
            status:'active'
        },
        {
            name:'Anoop Dhaliwal',
            imageUrl:'images/blankImage.gif',
            status:'inactive'
        },
        {
            name:'Arun Muniswamy',
            imageUrl:'images/blankImage.gif',
            status:'inactive'
        },
        {
            name: 'Arun Kumar Kasa',
            imageUrl: 'images/blankImage.gif',
            status:'inactive'
        },
        {
            name: 'Ashok Kumar',
            imageUrl: 'images/blankImage.gif',
            status:'active'
        },
        {
            name: 'Barry Manogaran',
            imageUrl: 'images/players/Barry.jpg',
            status:'active'
        },
        {
            name: 'Biju Nair',
            imageUrl: 'images/blankImage.gif',
            status:'active'
        },
        {
            name: 'Brahmam Chunduri',
            imageUrl: 'images/blankImage.gif',
            status:'inactive'
        },
        {
            name: 'Devaraj Marichamy',
            imageUrl: 'images/blankImage.gif',
            status:'inactive'
        },
        {
            name: 'Dhiva Muruganatham',
            imageUrl: 'images/blankImage.gif',
            status:'active'
        },
        {
            name: 'Dilip Tummala',
            imageUrl: 'images/players/DilipTummala.jpg',
            status:'active'
        },
        {
            name: 'Giri Iyer',
            imageUrl: 'images/blankImage.gif',
            status:'inactive'
        },
        {
            name: 'Harshit Kapoor',
            imageUrl: 'images/blankImage.gif',
            status:'inactive'
        },
        {
            name: 'Jaideep Shah',
            imageUrl: 'images/blankImage.gif',
            status:'active'
        },
        {
            name: 'Karthik Rayala',
            imageUrl: 'images/players/KarthikRayala.jpg',
            status:'active'
        },
        {
            name: 'Karthik Bhatt',
            imageUrl: 'images/players/KarthikBhatt.jpg',
            status:'active'
        },
        {
            name: 'Kashyap Ananth',
            imageUrl: 'images/blankImage.gif',
            status:'inactive'
        },
        {
            name: 'Kishore Katukam',
            imageUrl: 'images/blankImage.gif',
            status:'inactive'
        },
        {
            name: 'Krishnan Sasikumar',
            imageUrl: 'images/blankImage.gif',
            status:'active'
        },
        {
            name: 'Lokesh',
            imageUrl: 'images/blankImage.gif',
            status:'inactive'
        },
        {
            name: 'Midhun Krothapalli',
            imageUrl: 'images/blankImage.gif',
            status:'active'
        },
        {
            name: 'Masi Mohammed',
            imageUrl: 'images/blankImage.gif',
            status:'inactive'
        },
        {
            name: 'Muthukumar Chakravarthy',
            imageUrl: 'images/blankImage.gif',
            status:'inactive'
        },
        {
            name: 'Nanda Kishore',
            imageUrl: 'images/blankImage.gif',
            status:'active'
        },
        {
            name: 'Nikhil Yerragonda',
            imageUrl: 'images/blankImage.gif',
            status:'active'
        },  
        {
            name: 'NishabB',
            imageUrl: 'images/blankImage.gif',
            status:'inactive'
        },
        {
            name: 'Paneer Selvam',
            imageUrl: 'images/blankImage.gif',
            status:'inactive'
        },
        {
            name: 'Pradeep Reddy',
            imageUrl: 'images/blankImage.gif',
            status:'active'
        },
        {
            name: 'Prafful Cherukumalli',
            imageUrl: 'images/players/prafful.jpg',
            status:'inactive'
},
{
    name: 'Prasad Kakani',
    imageUrl: 'images/blankImage.gif',
    status:'active'
},
{
    name: 'Pratik Sonawala',
    imageUrl: 'images/blankImage.gif',
    status:'active'
},
        {
    name: 'Rad Desiraju',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Raghav Varadarajan',
    imageUrl: 'images/players/RaghavVaradarajan.jpg',
    status:'inactive'
},
{
    name: 'Rajuv Sharma',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Rajiv Onat',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Ram Reddy',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Ram Prasad',
    imageUrl: 'images/players/RamPrasad.jpg',
    status:'active'
},
{
    name: 'Ramakrishna Batchala',
    imageUrl: 'images/players/RamakrishnaBatchala.jpg',
    status:'active'
},
        {
    name: 'Ramkumar Karunanidi',
    imageUrl: 'images/blankImage.gif',
    status:'active'
},
{
    name: 'Ramesh Ravichandran',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Ravi Porandla',
    imageUrl: 'images/blankImage.gif',
    status:'active'
},
{
    name: 'Riaz Mohammed',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Rushabh Shah',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Rutwik Chunduri',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},{
    name: 'Sai Giridhar',
    imageUrl: 'images/players/SaiGiridhar.jpg',
    status:'active'
},
{
    name: 'SaiRaju Yata',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Saikiran Todusu',
    imageUrl: 'images/blankImage.gif',
    status:'active'
},
{
    name: 'Sajit Krishnan',
    imageUrl: 'images/blankImage.gif',
    status:'active'
},
{
    name: 'Sameer Khurana',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Sandeep Mehta',
    imageUrl: 'images/players/SandeepMehta.jpg',
    status:'active'
},
{
    name: 'Santosh Narayan',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Sarath Tammineni',
    imageUrl: 'images/blankImage.gif',
    status:'active'
},
{
    name: 'Sreekar Yallapragada',
    imageUrl: 'images/blankImage.gif',
    status:'active'
},
{
    name: 'Sridar Rajagopalan',
    imageUrl: 'images/blankImage.gif',
    status:'active'
},
{
    name: 'Srini Salver',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Sudhakar Arumugham',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Sudhakar Hebbar',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Sudheer Malladi',
    imageUrl: 'images/blankImage.gif',
    status:'active'
},
{
    name: 'Sunny Rohith Nandi',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Sunny Moza',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Suresh Pachaiappan',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Suresh Chirukuri',
    imageUrl: 'images/blankImage.gif',
    status:'active'
},
{
    name: 'Sushil Dhar',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Tarun Khanna',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Tushar Desai',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Vaibhav Mankame',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Vaibhav Shukla',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
},
{
    name: 'Vinod Gattu',
    imageUrl: 'images/blankImage.gif',
    status:'active'
},
{
    name: 'Vishal Gandhi',
    imageUrl: 'images/blankImage.gif',
    status:'inactive'
}
        
    ]
        
});
    
 
demoApp.controller('highlights', function($scope) {
    $scope.highlights = [
         {
            highlight: "Bravos Promoted to Elite Division 2017"
         },
         {
            highlight: "Karthik Rayala selected for NWR T20 for US Nationals 2016"
         },
         {
            highlight: "Highest Team score 431 in 45 Overs against United CCD"
         }
        
    ]
});


demoApp.controller('trophies', function($scope) {
    $scope.trophies = [
         {
            name: "NCCA T20 Winter Platinum 2015 Runners"
         },
         {
            name: "NCCA T20 Summer 2016 Runners"
         },
         {
            name: "NCCA Premier Prestige 2016 Toppers"
         }
    ]
});
