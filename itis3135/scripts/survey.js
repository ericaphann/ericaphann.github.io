document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const courseContainer = document.getElementById("course-container");
    const resultContainer = document.getElementById("result-container");
    const introContent = document.getElementById("intro-content");
    const resetBtn = document.getElementById("reset-btn");

    let courseCount = 0;

    window.addCourse = function () {
        courseCount++;
        const courseDiv = document.createElement("div");
        courseDiv.className = "course-entry";
        courseDiv.innerHTML = `
            <input type="text" name="course${courseCount}" placeholder="Course ${courseCount}" required>
            <button type="button" onclick="this.parentElement.remove()">Delete</button>
        `;
        courseContainer.appendChild(courseDiv);
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        if (!form.checkValidity()) {
            alert("Please complete all required fields.");
            return;
        }
    
        const formData = new FormData(form);
        const name = formData.get("name");
        const mascot = formData.get("mascot");
        const caption = formData.get("caption");
        const personalb = formData.get("personalb");
        const professionalb = formData.get("professionalb");
        const academicb = formData.get("academicb");
        const background = formData.get("background");
        const platform = formData.get("platform");
        const funny = formData.get("funny");
        const elseText = formData.get("else");
        const imageFile = formData.get("image");
    
        const courses = Array.from(courseContainer.querySelectorAll("input")).map((input) => input.value);
    
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageURL = event.target.result;
    
            let html = `
                <h3>${name}’s Introduction</h3>
                <p><strong>Mascot:</strong> ${mascot}</p>
                <p><img src="${imageURL}" alt="Uploaded image of ${name}" style="max-width:200px;"></p>
                <p><em>${caption}</em></p>
                <p><strong>Personal Background:</strong> ${personalb}</p>
                <p><strong>Professional Background:</strong> ${professionalb}</p>
                <p><strong>Academic Background:</strong> ${academicb}</p>
                <p><strong>Web Dev Background:</strong> ${background}</p>
                <p><strong>Platform:</strong> ${platform}</p>
                <p><strong>Current Courses:</strong></p>
                <ul>${courses.map((course) => `<li>${course}</li>`).join("")}</ul>
                <p><strong>Funny/Interesting:</strong> ${funny}</p>
                <p><strong>Anything else:</strong> ${elseText}</p>
            `;
    
            form.style.display = "none";
            introContent.innerHTML = html;
            resultContainer.style.display = "block";
        };
    
        if (imageFile && imageFile.type.startsWith("image/")) {
            reader.readAsDataURL(imageFile);
        } else {
            alert("Please upload a valid image.");
        }
    });
    

    resetBtn.addEventListener("click", () => {
        form.reset();
        form.style.display = "block";
        resultContainer.style.display = "none";
        courseContainer.innerHTML = "";
        introContent.innerHTML = "";
        courseCount = 0;
    });
});
