document.addEventListener("DOMContentLoaded", function() {
  const calendarDays = document.querySelector(".calendar-days");
  const currentMonthText = document.getElementById("currentMonth");
  const eventsContainer = document.getElementById("events");
  const mark__list=[3,9,"לייב פייסבוק בנושא חינוך",18,9," לייב פייסבוק בנושא תשתיות",1,10," לייב פייסבוק בנושא בטחון",15,10,"שאלות בווטסאפ",31,10,"יום הבחירות"]
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let cnt=0;
  const date = new Date();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();

  function updateCalendar() {
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      
      calendarDays.innerHTML = "";
       
      for (let i = 0; i < firstDay; i++) {
          const emptyDay = document.createElement("div");
          calendarDays.appendChild(emptyDay);
      }
      if(currentMonth===7){
        prevBtn.style.display="none"
      }
      else{
        prevBtn.style.display="block"
      }
      if(currentMonth===9){
        nextBtn.style.display="none"
      }
      else{
        nextBtn.style.display="block"
      }
      for (let i = 1; i <= daysInMonth; i++) {
          const dayElement = document.createElement("div");
          dayElement.innerText = i;
          dayElement.classList.add("calendar-day");
          
          const currentDate = new Date(currentYear, currentMonth, i);

          
          if (currentDate.toDateString() === new Date().toDateString()) {
              dayElement.classList.add("current-day");
          }
          const today = new Date();
          const todayDay = today.getDate();
          if(i<todayDay&&currentMonth===7){
            dayElement.style.background="#7e7272"
          }
          for (let j = 0; j < mark__list.length; j ++) {
           if (i === mark__list[j]&&currentMonth+1===mark__list[j+1]) {
                dayElement.style.background = "red";
              }
          }
          calendarDays.appendChild(dayElement);
      }
      

      const hebrewMonthNames = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
      currentMonthText.textContent = hebrewMonthNames[currentMonth] + " " + currentYear;
  }
  updateCalendar()
  for(let i=0; i<mark__list.length;i+=3){
    console.log("length: " +mark__list.length)
    console.log("i: "+(i+1))
    let event=document.createElement("div")
    event.innerHTML='<p>'+mark__list[i]+"."+mark__list[i+1]+".2023 : "+mark__list[i+2]+'</p>'+' <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXaSWnM_PftvqwaBjiwNK3ZLmvqCM0QniprIJU796vNjsvlw/viewform">להזמנה לאירוע</a>'
    event.className="events__child"
    if(i+3===mark__list.length){
      event.id="no__border__event"
    }
    eventsContainer.appendChild(event)
  }
  prevBtn.addEventListener("click", function() {
        prevBtn.style.display="block"
      currentMonth--;
      if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
      }
      updateCalendar();
    
  });

  nextBtn.addEventListener("click", function() {
        currentMonth++;
      if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
      }

      updateCalendar();
    
    });
  
  
  }

  
  
);