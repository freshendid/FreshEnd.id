function showDetail(type) {
    const title = document.getElementById("detailTitle");
    const text = document.getElementById("detailText");
    const modal = document.getElementById("detailModal");

    if (type === "basic") {
        title.innerText = "Basic Cleaning";
        text.innerText = 
            "- Penyapuan\n- Pel lantai\n- Angkut sampah\n- Rapihkan meja & kursi\n- Waktu pengerjaan: 45–90 menit";
    } 
    else if (type === "deep") {
        title.innerText = "Deep Cleaning";
        text.innerText = 
            "- Pembersihan mendalam seluruh area\n- Pengangkatan noda minuman\n- Pencucian area dapur\n- Penyedot debu lengkap\n- Waktu pengerjaan: 2–3 jam";
    } 
    else if (type === "emergency") {
        title.innerText = "Emergency Cleaning";
        text.innerText = 
            "- Layanan cepat\n- Respon maksimal 1 jam\n- Fokus area kritis\n- Tim datang dengan peralatan lengkap";
    } 
    else if (type === "aroma") {
        title.innerText = "Fresh Aroma Treatment";
        text.innerText = 
            "- Menghilangkan bau rokok/alkohol\n- Pengharum ruangan premium\n- Anti-bacterial spray\n- Aromatherapy finish";
    }

    modal.style.display = "block";
}

function closeDetail() {
    document.getElementById("detailModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("detailModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}