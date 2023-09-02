function alert(any) {
  if (confirm(any + "\n\nLevel passed! (press OK to progress to the next level)")){
	  var url = window.location.pathname;
	  var filename = url.substring(url.lastIndexOf('/')+1);
	  
	  if (filename == "level1.html"){
		  window.location.href = "preLevel2.html"
	  }
	  else if (filename == "level2.html"){
		  window.location.href = "preLevel3.html"
	  }
	  
	  else if (filename == "level3.html"){
		  window.location.href = "preLevel4.html"
	  }
  }
}