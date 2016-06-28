//Information in JSON //

var bio ={
    "name": "Jay Ko",
    "role": "Web developer",
    "contacts": {
        "mobile": "123-456-7890",
	"email": "fake@example.com",
	"github": "github",
	"location": "NewYork",
	"twitter": "twitter"
    },
    "welcomemMessage": "Welcome to my resume!",
    "skills": [
	"Python","HTML","CSS","Javascript"
	    ],
    "bioPic": "images/fry.jpg",
    "display":"function"
};
var education = {
   "schools":[
	{
	  "name": "University of Nonexistence",
	  "location": "NotonEarth",
	  "degree": "BS",
	  "majors": ["Brewery"],
	  "dates": "06-26-2016",
	  "url": "https://www.udacity.com"
	}
    ],
    "onlineCourses": [
    	{
	 "title": "Javascript Crash Course",
	 "school": "Udacity",
	 "dates": 2016,
	 "url": "https://www.udacity.com"

    }
    ]
};
var work ={
    "jobs":[
	{
	 "employer": "Example Inc",
	 "title": "Manager",
	 "location": "NewYork, NY",
	 "dates":2016,
	 "description": "Works like dog"
	}
     ]
};
var projects={
    "projects"=[
      {
        "title": "Interactive Resume",
	      "dates": 2016,
	      "description": "Hello Resume!",
	      "images": ["http://placekitten.com/300/300"],
        "url": "http://www.udacity.com"
	   }
    ]
};
//run display functions
displayBio();
displayWork();
displayEducation();
displayProjects();

// display functions //

function displayBio(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  //watch out prepend! have to prepend role first then name can be placed ahead
  $("#header").prepend(HTMLheaderRole);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(HTMLheaderName);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemMessage);
  $("#header").append(formattedWelcomeMsg);
  //skills
  $("#header").append(HTMLskillsStart);
  for(skill in bio.skills){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  };
};

function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
    $(".work-entry:last").append(formattedWorkDate);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	};
};

function displayEducation(){
  if(eduction.schools.length>0 || education.onlineCourses.length>0){
    for(elem in education.schools){
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[elem].name).replace("#", education.schools[elem].url);
      var formmatedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[elem].degree);
      $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[elem].major);
      $(".education-entry:last").append(formattedSchoolMajor);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[elem].dates);
      $(".edcuation-entry").append(formattedSchoolDates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[elem].location);
    };
    if(education.onlineCourses.length>0){
      for(elem in education.onlineCourses){
        $("#education").append(HTMLonlineClasses);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[elem].title).replace("#",education.onlineCourses[elem].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[elem].school);
        $(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[elem].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineUrl =
        HTMLonlineURL.replace("%data%",education.onlineCourses[elem].url).replace("#", education.onlineCourses[elem].url);
        $(".education-entry:last").append(formattedOnlineUrl);
      };
    }
  }
};

function displayProjects(){
  for(elem in projects.projects){
    $('#projects').append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("#", projects.project[elem].url).replace("%data%", projects.project[elem].title);
    $(".project-entry:last").append(formaformattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[elem].dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[elem].description);
    $(".project-entry:last").append(formattedProjectDescription);
    for(img in projects.projects[elem].images){
      var formattedProjectImg = HTMLprojectImage.replace("%data%", projects.projects[elem].images[img]);
      $(".project-entry").append(formattformattedProjectImg);
    };
  };
};
