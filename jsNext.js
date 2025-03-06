let currentStep = 1;

function nextStep() {
    if (currentStep < 2) {
        const currentElement = document.getElementById(`step${currentStep}`);
        currentElement.classList.add("hide"); // เพิ่มคลาส hide เพื่อซ่อนด้วยแอนิเมชั่น

        setTimeout(() => {
            currentElement.style.display = 'none'; // ซ่อนจริง ๆ หลังจากแอนิเมชั่น
            currentStep++;
            const nextElement = document.getElementById(`step${currentStep}`);
            nextElement.style.display = 'block';
            setTimeout(() => nextElement.classList.remove("hide"), 10); // เริ่มแอนิเมชั่นแสดง
        }, 500); // รอจนกว่าจะจบแอนิเมชั่น
    }
}

function prevStep() {
    if (currentStep > 1) {
        const currentElement = document.getElementById(`step${currentStep}`);
        currentElement.classList.add("hide");

        setTimeout(() => {
            currentElement.style.display = 'none';
            currentStep--;
            const prevElement = document.getElementById(`step${currentStep}`);
            prevElement.style.display = 'block';
            setTimeout(() => prevElement.classList.remove("hide"), 10);
        }, 500);
    }
}
