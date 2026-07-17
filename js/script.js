const heroHeadline = document.querySelector("#hero-headline");

if (heroHeadline) {
  const headlines = [
    "Building the foundations for a stronger tomorrow.",
    "Quality infrastructure. Lasting impact.",
    "Turning vision into dependable construction.",
    "Building progress, one project at a time.",
    "Creating infrastructure communities can rely on."
  ];
  let currentHeadline = Math.floor(Math.random() * headlines.length);
  heroHeadline.textContent = headlines[currentHeadline];

  setInterval(() => {
    currentHeadline = (currentHeadline + 1) % headlines.length;
    heroHeadline.textContent = headlines[currentHeadline];
  }, 30 * 60 * 1000);
}

const enquiryForm = document.querySelector("#enquiry-form");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitButton = enquiryForm.querySelector('button[type="submit"]');
    const status = document.querySelector("#form-status");
    submitButton.disabled = true;
    submitButton.textContent = "Sending enquiry...";
    status.textContent = "";
    status.classList.remove("error");

    try {
      const response = await fetch("https://formsubmit.co/ajax/gwenaniprojects@gmail.com", {
        method: "POST",
        body: new FormData(enquiryForm),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Unable to send enquiry");
      window.location.href = "thank-you.html";
    } catch (error) {
      status.textContent = "We could not send your enquiry. Please email us directly at gwenaniprojects@gmail.com.";
      status.classList.add("error");
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send enquiry <i class="fa-solid fa-arrow-right"></i>';
    }
  });
}
