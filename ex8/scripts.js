function open_section(evt, section_name) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    
    if (section_name === "skills") {
      document.getElementById(section_name).style.display = "flex";
      evt.currentTarget.className += " active";
    } else {
      document.getElementById(section_name).style.display = "block";
      evt.currentTarget.className += " active";
    }
  }
  
document.getElementById("defaultopen").click();
  
  // codigo adaptado de https://www.w3schools.com/howto/howto_js_tabs.asp