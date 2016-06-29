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
    "biopic": "images/fry.jpg",
    "display": function(){
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        //watch out prepend! have to prepend role first then name can be placed ahead
        $("#header").prepend(formattedRole);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedName);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemMessage);
        $("#header").append(formattedWelcomeMsg);
        //skills
        $("#header").append(HTMLskillsStart);
        for(var i=0; i<bio.skills.length; i++){
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
          $("#skills").append(formattedSkill);
            }//close skill for loop
          }//close display function
        };//close var bio
var education = {
   "schools":[
	{
	  "name": "University of Nonexistence",
	  "location": "NotonEarth",
	  "degree": "BS",
	  "majors": "Brewery",
	  "dates": "06-26-2016",
	  "url": "https://www.udacity.com"
	}
    ],
    "onlineCourses": [
    	{
	 "title": "Javascript Crash Course",
	 "school": "Udacity",
	 "dates": "2015-2016",
	 "url": "https://www.udacity.com"
      }
    ],
    "display": function() {
      if(education.schools.length>0 || education.onlineCourses.length>0){
        for(var i=0; i<education.schools.length; i++){
          $("#education").append(HTMLschoolStart);
          var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
          var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
          $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
          var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
          $(".education-entry:last").append(formattedSchoolMajor);
          var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
          $(".edcuation-entry").append(formattedSchoolDates);
          var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
        }
        if(education.onlineCourses.length>0){
          $("#education").append(HTMLonlineClasses);
          for(var i=0; i<education.onlineCourses.length; i++){
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title).replace("#",education.onlineCourses[i].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
            $(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineUrl =
            HTMLonlineURL.replace("%data%",education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedOnlineUrl);
          }
        }
      }
    }
};
var work ={
    "jobs":[
      	{
      	 "employer": "Example Inc",
      	 "title": "Manager",
      	 "location": "NewYork, NY",
      	 "dates":"2015-2016",
      	 "description": "Works like dog"
      	}
      ],
    "display":function(){
      for(var i=0; i<work.jobs.length; i++){
    		$("#workExperience").append(HTMLworkStart);
    		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
    		var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[i].date);
        $(".work-entry:last").append(formattedWorkDate);
    		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedWorkLocation);
    		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    		$(".work-entry:last").append(formattedWorkDescription);
    	 }
     }
};
var projects={
  "projects":[
    {
      "title": "Interactive Resume",
      "dates": "2015-2016",
      "description": "Hello Resume!",
      "images": ["http://placekitten.com/300/300"],
      "url": "http://www.udacity.com"
       }
     ],
  "display": function(){
    for(var i=0; i<projects.projects.length; i++){
      $('#projects').append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace("#", projects.projects[i].url).replace("%data%", projects.projects[i].title);
      $(".project-entry:last").append(formattedProjectTitle);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      $(".project-entry:last").append(formattedProjectDates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      $(".project-entry:last").append(formattedProjectDescription);
      for(var img in projects.projects[i].images){
        var formattedProjectImg = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
        $(".project-entry").append(formattedProjectImg);
      }
    }
  }
};

//run display functions
bio.display();
work.display();
education.display();
projects.display();

//Add google map
$("#mapDiv").append(googleMap);
