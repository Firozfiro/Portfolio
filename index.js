const words = ["Frontend Developer", "Video Editor", "Web Designer", "Photo Editor"];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  function type() {
    currentWord = words[i];
    
    if (isDeleting) {
        document.getElementById("typing").textContent = currentWord.substring(0, j);
        j--
    } else {
      document.getElementById("typing").textContent = currentWord.substring(0, j);
      j++
    }

    if (!isDeleting && j === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(type, 500); // Wait before deleting
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length; // Move to next word
      setTimeout(type, 200); // Short delay before typing next word
    } else {
      setTimeout(type, isDeleting ? 50 : 100); // Speed for typing and deleting
    }
  }

  type();