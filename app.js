function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".content-section section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  const removeActive = document.querySelectorAll('.nav-link')
  removeActive.forEach((link) => {
    link.classList.remove('active')
  })

  // Show the selected section
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "block";
  }

  const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Update the section title
  const sectionTitle = document.getElementById("section-title");
  sectionTitle.textContent = activeLink.textContent;


}

function calculateAge() {
  const dob = new Date("04/06/2002");
  const month_diff = Date.now() - dob.getTime();
  const new_date = new Date(month_diff);
  const year = new_date.getUTCFullYear();
  const age = Math.abs(1970 - year);
  document.getElementById("age").innerHTML = age;
}

calculateAge();
