//give scroll a smoth transition

$('#btnAbout').on('click', function(e){
  var target = document.getElementById('about');
  e.preventDefault();
  target.scrollIntoView({behavior: "smooth", block: "start" });
});

$('#btnSkills').on('click', function(e){
  var target = document.getElementById('skills');
  e.preventDefault();
  target.scrollIntoView({behavior: "smooth", block: "start" });
});

$('#btnPortf').on('click', function(e){
  var target = document.getElementById('portfolio');
  e.preventDefault();
  target.scrollIntoView({behavior: "smooth", block: "start"});
});

$('#btnCertif').on('click', function(e){
  var target = document.getElementById('certifications');
  e.preventDefault();
  target.scrollIntoView({behavior: "smooth", block: "start" });
});
