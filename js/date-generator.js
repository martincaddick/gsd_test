// Last Modified
    function readDate() {
        let mod_date = document.lastModified;
        var date = new Date(mod_date);
        var day = date.getDate();
        var year = date.getFullYear();
        var month = date.getMonth();
        switch(month) {
            case 0: m = "January";
                break;   
            case 1: m = "February";
                break; 
            case 2: m = "March";
                break;   
            case 3: m = "April";
                break;  
            case 4: m = "May";
                break;   
            case 5: m = "June";
                break; 
            case 6: m = "July";
                break;   
            case 7: m = "August";
                break; 
            case 8: m = "September";
                break;   
            case 9: m = "October";
                break; 
            case 10: m = "November";
                break;   
            case 11: m = "December";
                break;             
        }
        let text = day + " " + m + " " + year;
        var lastMod = document.getElementById("lastModified");
        if (lastMod) {
            lastMod.innerHTML = text;
        }
    }
    readDate();
      
    // Calculate Reading Time 
    function readTime() {
        const text = document.querySelector("article").innerText;
        const wpm = 200;
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        var rtime = document.getElementById("time");
        if (rtime) {
            rtime.innerText = time;
        }
    }
    readTime();
     
    /** Place HTML in Markdown to generate Date and Time **/
    // <p id="date-and-time"><span id="time"></span> minutes to read - <span id="lastModified"></span></p> 