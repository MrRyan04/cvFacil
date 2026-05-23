html2pdf().set({
    margin: 0,
    filename: "curriculo.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
        scale: 2,
        useCORS: true,
        scrollY: 0
    },
    jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait"
    }
}).from(document.querySelector(".cv")).save();