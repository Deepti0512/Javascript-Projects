const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click",() =>{
    const blob = new Blob([textarea.value],{type:selectMenu.value});
    const fileUrl = URL.createObjectURL(blob);
    console.log(fileUrl);
    const link = document.createElement("a");
    console.log(fileNameInput);
    link.download = fileNameInput.value;
    link.href = fileUrl;
    link.click();
})