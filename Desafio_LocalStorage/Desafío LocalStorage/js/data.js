window.onload = function() {
    const saveData= localStorage.getItem("dato");
    if (saveData) {
        const dataContainer = document.getElementById("data");
        dataContainer.innerHTML = saveData;
    }
};