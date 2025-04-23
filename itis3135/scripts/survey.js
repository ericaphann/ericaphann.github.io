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
                <h2>ITIS 3135 Introduction</h2>
                <h3>${name} || ${mascot}</h3>
                <div class="centered-box">
                    <figure>
                        <img src="${imageURL}" alt="User uploaded image: ${caption}">
                        <figcaption class="caption">${caption}</figcaption>
                    </figure>
                    <ul class="bullets">
                        <li><strong>Personal Background:</strong> ${personalb}</li>
                        <li><strong>Professional Background:</strong> ${professionalb}</li>
                        <li><strong>Academic Background:</strong> ${academicb}</li>
                        <li><strong>Background in this Subject:</strong> ${background}</li>
                        <li><strong>Primary Computer Platform:</strong> ${platform}</li>
                    </ul>
                    <ul class="bullets">
                        <li><strong>Courses Currently Taking:</strong>
                            <ul>
                                ${courses.length > 0 
                                    ? courses.map((course) => `<li>${course}</li>`).join("")
                                    : "<li>No courses listed.<br><br></li>"
                                }
                            </ul>
                        </li>
                        ${funny ? `<li><strong>Funny/Interesting thing about yourself:</strong> ${funny}</li>` : ""}
                        ${elseText ? `<li><strong>Anything Else:</strong> ${elseText}</li>` : ""}
                    </ul>
                </div>
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
