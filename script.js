document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const loginForm = document.getElementById("loginForm");
    const controlPanel = document.getElementById("controlPanel");
    const loginButton = document.getElementById("loginButton");
    const logoutButton = document.getElementById("logoutButton");
    const updateTextButton = document.getElementById("updateTextButton");
    const newScrollingText = document.getElementById("newScrollingText");
  
    // Mock Credentials
    const credentials = { username: "admin", password: "password123" };
  
    // Load Scrolling Text
    function loadScrollingText() {
      const scrollingText = localStorage.getItem("scrollingText") || "89 auto drivers took their own lives due to the loss of livelihood caused by the introduction of the free bus scheme.   49 Gurukula students were reported deceased due to incidents such as food poisoning and snake bites. 27 weavers took their lives due to a lack of government assistance. 603 farmers took their lives.";
      const scrollingTextElement = document.getElementById("scrollingText");
      if (scrollingTextElement) {
        scrollingTextElement.textContent = scrollingText;
      }
    }
  
    // Login Functionality
    loginButton?.addEventListener("click", () => {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (username === credentials.username && password === credentials.password) {
        alert("Login successful!");
        loginForm.style.display = "none";
        controlPanel.style.display = "block";
      } else {
        alert("Invalid credentials!");
      }
    });
  
    // Logout Functionality
    logoutButton?.addEventListener("click", () => {
      alert("Logged out!");
      controlPanel.style.display = "none";
      loginForm.style.display = "block";
    });
  
    // Update Scrolling Text
    updateTextButton?.addEventListener("click", () => {
      const newText = newScrollingText.value.trim();
      if (newText) {
        localStorage.setItem("scrollingText", newText);
        alert("Scrolling text updated!");
      } else {
        alert("Please enter valid text.");
      }
    });
  
    // Initialize Scrolling Text
    loadScrollingText();
  
    // Slideshow Initialization
    const folderPath = "./images1/";
    const slideshowContainer = document.querySelector(".slides-container");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const imageFiles = [
    "image 1 (1).jPG",
    "image 1 (2).jPG",
    "image 1 (3).jPG",
    "image 1 (4).JPEG",
    "1.PNG",
    "2.PNG",
    "3.PNG",
    "4.PNG"
    
    
    ];
  
    function initSlideshow() {
      if (!slideshowContainer) return;
  
      // Add slides dynamically
      imageFiles.forEach((fileName, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide-card");
        if (index === 0) slide.classList.add("active");
  
        const img = document.createElement("img");
        img.src = folderPath + fileName;
        img.alt = `Slide ${index + 1}`;
        slide.appendChild(img);
  
        slideshowContainer.appendChild(slide);
      });
  
      const slides = document.querySelectorAll(".slide-card");
      let currentIndex = 0;
  
      // Update Active Slide
      const updateSlidePosition = () => {
        slides.forEach((slide, index) => {
          slide.classList.toggle("active", index === currentIndex);
        });
        slideshowContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      };
  
      // Navigation Buttons
      prevButton?.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
      });
  
      nextButton?.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
      });
  
      // Auto-Slide Change
      setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
      }, 5000);
    }
  
    initSlideshow();
  });
  
