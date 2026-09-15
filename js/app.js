document.addEventListener("DOMContentLoaded", () => {
    const profileCard = document.getElementById("profileCard");
    const profileName = document.getElementById("profileName");
    const profileProgram = document.getElementById("profileProgram");
    const profileYear = document.getElementById("profileYear");
    const profileStatus = document.getElementById("profileStatus");
    const detailsPanel = document.getElementById("detailsPanel");
    const studentIdDisplay = document.getElementById("studentIdDisplay");
    const formMessage = document.getElementById("formMessage");
  
    const nameInput = document.getElementById("nameInput");
    const programInput = document.getElementById("programInput");
    const yearInput = document.getElementById("yearInput");
    const statusInput = document.getElementById("statusInput");
  
    const updateBtn = document.getElementById("updateBtn");
    const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
    const themeBtn = document.getElementById("themeBtn");
    const resetBtn = document.getElementById("resetBtn");
  
    const appBody = document.querySelector("body");
  
    const INITIAL_VALUES = {
      name: "Maria Santos",
      program: "BS Information Technology",
      year: "3rd Year",
      status: "active",
      studentId: "2026-001"
    };
  
    function isValidStudentName(name) {
      if (typeof name !== "string") return false;
      return name.trim().length >= 2;
    }
  
    function formatStudentStatus(status) {
      return status === "active" ? "Active" : "Inactive";
    }
  
    function setStatus(status) {
      if (!profileCard || !profileStatus) return;
  
      profileCard.dataset.status = status;
      profileStatus.textContent = formatStudentStatus(status);
  
      if (status === "active") {
        profileCard.classList.add("active");
        profileCard.classList.remove("inactive");
      } else {
        profileCard.classList.add("inactive");
        profileCard.classList.remove("active");
      }
    }
  
    function updateProfile() {
      if (!nameInput || !formMessage || !profileName || !profileProgram || !profileYear) return;
  
      const enteredName = nameInput.value;
  
      if (!isValidStudentName(enteredName)) {
        formMessage.textContent = "Student name is required";
        return;
      }
  
      formMessage.textContent = "";
  
      profileName.textContent = enteredName.trim();
      if (programInput) profileProgram.textContent = programInput.value;
      if (yearInput) profileYear.textContent = yearInput.value;
  
      if (statusInput) {
        setStatus(statusInput.value);
      }
    }
  
    function toggleDetails() {
      if (!detailsPanel) return;
      detailsPanel.classList.toggle("hidden");
    }
  
    function toggleTheme() {
      if (!appBody) return;
      appBody.classList.toggle("dark-theme");
    }
  
    function resetProfile() {
      if (profileName) profileName.textContent = INITIAL_VALUES.name;
      if (profileProgram) profileProgram.textContent = INITIAL_VALUES.program;
      if (profileYear) profileYear.textContent = INITIAL_VALUES.year;
      
      if (profileCard) {
        profileCard.dataset.studentId = INITIAL_VALUES.studentId;
      }
  
      if (studentIdDisplay && profileCard) {
        studentIdDisplay.textContent = `Student ID: ${profileCard.dataset.studentId}`;
      }
  
      setStatus(INITIAL_VALUES.status);
  
      if (nameInput) nameInput.value = INITIAL_VALUES.name;
      if (programInput) programInput.value = INITIAL_VALUES.program;
      if (yearInput) yearInput.value = INITIAL_VALUES.year;
      if (statusInput) statusInput.value = INITIAL_VALUES.status;
  
      if (formMessage) formMessage.textContent = "";
  
      if (detailsPanel) detailsPanel.classList.remove("hidden");
      if (appBody) appBody.classList.remove("dark-theme");
    }
  
    if (updateBtn) updateBtn.addEventListener("click", updateProfile);
    if (toggleDetailsBtn) toggleDetailsBtn.addEventListener("click", toggleDetails);
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
    if (resetBtn) resetBtn.addEventListener("click", resetProfile);
  
    if (studentIdDisplay && profileCard) {
      studentIdDisplay.textContent = `Student ID: ${profileCard.dataset.studentId}`;
    }
  
    window.isValidStudentName = isValidStudentName;
    window.formatStudentStatus = formatStudentStatus;
    window.updateProfile = updateProfile;
    window.setStatus = setStatus;
    window.toggleDetails = toggleDetails;
    window.toggleTheme = toggleTheme;
    window.resetProfile = resetProfile;
  });