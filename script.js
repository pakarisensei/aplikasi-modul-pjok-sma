// --- DATABASE (SMA/SMK/MA Version) ---
const capaianPerElemen = {
    'Terampil Bergerak': {
        E: "Peserta didik merancang, menerapkan, dan menghaluskan keterampilan gerak spesifik di dalam berbagai situasi gerak yang menantang. Peserta didik menciptakan dan mengembangkan strategi gerak untuk mendapatkan keberhasilan capaian keterampilan gerak melintasi berbagai situasi gerak yang menantang. Peserta didik menerapkan konsep gerak di dalam situasi gerak baru yang menantang dan menganalisis dampak tiap konsep pada capaian keterampilan gerak.",
        F: "Peserta didik merancang, menerapkan, menghaluskan dan mengevaluasi keterampilan gerak spesifik di dalam berbagai situasi gerak yang menantang untuk meningkatkan kinerja gerak. Peserta didik menciptakan, mengembangkan, dan mengevaluasi strategi gerak untuk mendapatkan keberhasilan capaian keterampilan gerak melintasi berbagai situasi gerak yang menantang. Peserta didik menerapkan konsep gerak di dalam situasi gerak baru yang menantang dan mengevaluasi dampak tiap konsep pada capaian keterampilan gerak."
    },
    'Belajar melalui Gerak': {
        E: "Peserta didik mentransfer dan mengadaptasi strategi gerak yang telah dikuasai dalam situasi gerak yang berbeda. Peserta didik memeragakan fair play dan mengevaluasi pengaruh perilaku etis terhadap capaian aktivitas jasmani bagi individu dan kelompok. Peserta didik merencanakan, menerapkan, dan menyempurnakan strategi pengambilan keputusan dalam kerja tim yang mempertunjukkan keterampilan kepemimpinan dan kolaborasi.",
        F: "Peserta didik mengadaptasi dan mengevaluasi strategi gerak yang telah dikuasai dalam situasi gerak baru yang menantang. Peserta didik mengevaluasi fair play dan merefleksikan pengaruh perilaku etis terhadap capaian aktivitas jasmani bagi individu dan kelompok. Peserta didik merancang dan mengevaluasi strategi pengambilan keputusan dalam kerja tim yang mempertunjukkan keterampilan kepemimpinan dan kolaborasi."
    },
    'Bergaya Hidup Aktif': {
        E: "Peserta didik berpartisipasi dalam aktivitas kebugaran dan menginvestigasi dampak partisipasi yang teratur terhadap kesehatan. Peserta didik berpartisipasi dalam aktivitas kebugaran di luar ruang dan/atau lingkungan alam, dan merancang strategi peningkatan pemanfaatannya. Peserta didik merancang strategi peningkatan aktivitas kebugaran untuk kesehatan.",
        F: "Peserta didik berpartisipasi dalam aktivitas kebugaran dan mengevaluasi dampak partisipasi yang teratur terhadap kesehatan. Peserta didik berpartisipasi dalam aktivitas kebugaran di luar ruang dan/atau lingkungan alam, dan mengevaluasi strategi peningkatan pemanfaatannya. Peserta didik mengevaluasi efektivitas strategi peningkatan aktivitas kebugaran untuk kesehatan."
    },
    'Memilih Hidup yang Menyehatkan': {
        E: "Peserta didik mengevaluasi risiko kesehatan akibat gaya hidup dan tindakan pencegahan melalui aktivitas jasmani serta mempromosikannya menggunakan berbagai media. Peserta didik mengevaluasi pilihan makanan sehat berdasarkan analisis kandungan gizi sesuai kebutuhan aktivitas jasmani.",
        F: "Peserta didik mengadvokasi gaya hidup aktif dan sehat melalui aktivitas jasmani menggunakan berbagai media, mengadvokasi makanan sehat dan bergizi seimbang kepada orang lain sesuai kebutuhan aktivitas jasmaninya, dan mempraktikkan tindakan Resusitasi Jantung-Paru (RJP) sesuai Prosedur Operasional Standar (POS) sebagai upaya penyelamatan hidup."
    }
};

// --- UPDATED MATERI DATABASE ---
const materiByKelas = {
    '10': {
        'invasi-basket-10': { text: 'Permainan Invasi (Permainan Bola Basket)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'melempar dan menangkap bola, dribbling, shooting' },
        'invasi-sepakbola-10': { text: 'Permainan Invasi (Permainan Sepak Bola)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'passing, stopping, dribbling, shooting' },
        'invasi-bolatangan-10': { text: 'Permainan Invasi (Permainan Bola Tangan)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'melempar dan menangkap, menggiring bola, menembak' },
        'net-voli-10': { text: 'Permainan Net (Permainan Bola Voli)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'passing bawah, passing atas, spike, block' },
        'net-bulutangkis-10': { text: 'Permainan Net (Permainan Bulutangkis)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'pukulan smash, pukulan lob, variasi pukulan' },
        'atletik-10': { text: 'Aktivitas Atletik (Lari, Lompat, Lempar)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'sprint, lompat jauh, lempar lembing' },
        'senam-lantai-10': { text: 'Aktivitas Senam (Senam Lantai)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'guling depan, guling belakang, sikap lilin, handstand' },
        'gerak-berirama-10': { text: 'Aktivitas Gerak Berirama (Senam Irama)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'kombinasi gerak langkah dan ayunan, koreografi' }
    },
    '11': {
        'invasi-basket-11': { text: 'Permainan Invasi (Permainan Bola Basket)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'keterampilan melempar, menggiring, menembak' },
        'net-voli-11': { text: 'Permainan Net/Wall (Permainan Bola Voli)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'passing dalam formasi, servis bawah dan atas' },
        'lapangan-sofbol-11': { text: 'Permainan Lapangan (Permainan Sofbol)', elemenTerkait: 'Belajar melalui Gerak', contohSpesifik: 'formasi pemain, melempar, menangkap, memukul' },
        'beladiri-silat-11': { text: 'Beladiri (Pencak Silat)', elemenTerkait: 'Belajar melalui Gerak', contohSpesifik: 'rangkaian gerak, tangkisan, pukulan, elakan' },
        'senam-lantai-11': { text: 'Aktivitas Senam (Senam Lantai)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'handstand, meroda, loncat harimau' },
        'gerak-berirama-11': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'merancang rangkaian gerak berirama kelompok' },
        'kebugaran-11': { text: 'Aktivitas Kebugaran Jasmani', elemenTerkait: 'Bergaya Hidup Aktif', contohSpesifik: 'tes kebugaran, menyusun program latihan' },
        'pencegahan-hiv-11': { text: 'Pencegahan HIV/AIDS', elemenTerkait: 'Memilih Hidup yang Menyehatkan', contohSpesifik: 'analisis risiko, upaya pencegahan, studi kasus' }
    },
    '12': {
        'invasi-basket-12': { text: 'Permainan Invasi (Permainan Bola Basket)', elemenTerkait: 'Belajar melalui Gerak', contohSpesifik: 'pola penyerangan, pola pertahanan, evaluasi strategi' },
        'net-voli-12': { text: 'Permainan Net (Permainan Bola Voli)', elemenTerkait: 'Belajar melalui Gerak', contohSpesifik: 'pola penyerangan dan pertahanan 3v3 atau 4v4' },
        'lapangan-sofbol-12': { text: 'Permainan Lapangan (Permainan Sofbol)', elemenTerkait: 'Belajar melalui Gerak', contohSpesifik: 'pola penyerangan, force out, double play' },
        'atletik-lompat-12': { text: 'Atletik (Lompat Tinggi)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'gerak awalan, tolakan, melayang, mendarat' },
        'beladiri-silat-12': { text: 'Aktivitas Bela Diri (Pencak Silat)', elemenTerkait: 'Belajar melalui Gerak', contohSpesifik: 'pola penyerangan (pukulan, tendangan), pola pertahanan' },
        'senam-ketangkasan-12': { text: 'Aktivitas Senam (Senam Ketangkasan)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'rangkaian guling depan, guling belakang, handstand' },
        'gerak-berirama-12': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'kombinasi gerak ritmik dengan musik' },
        'renang-punggung-12': { text: 'Renang (Gaya Punggung)', elemenTerkait: 'Terampil Bergerak', contohSpesifik: 'teknik dasar renang gaya punggung, penilaian performa' },
        'kebugaran-12': { text: 'Aktivitas Kebugaran Jasmani', elemenTerkait: 'Bergaya Hidup Aktif', contohSpesifik: 'menyusun, mempraktikkan, mengevaluasi program' },
        'pencegahan-pms-12': { text: 'Pencegahan PMS dan HIV/AIDS', elemenTerkait: 'Memilih Hidup yang Menyehatkan', contohSpesifik: 'diskusi penyebab, kampanye sosialisasi' }
    }
};

const kerangkaDatabase = {
    "Direct Instruction": { praktik: "Guru secara eksplisit mengajarkan konsep atau keterampilan secara langkah-demi-langkah (I do, We do, You do).", lingkungan: "Terstruktur dan berorientasi pada tugas, memastikan semua siswa mendapatkan informasi dasar yang sama.", kemitraan: "Hubungan yang jelas di mana guru adalah ahli yang mentransfer pengetahuan kepada siswa.", teknologi: "Digunakan untuk mendukung demonstrasi guru (presentasi, video) dan latihan siswa (simulasi, kuis)." },
    "Tactical Games Model": { praktik: "Siswa belajar melalui skenario permainan nyata untuk memahami 'mengapa' sebuah teknik diperlukan sebelum 'bagaimana' melakukannya, mendorong pemikiran taktis.", lingkungan: "Lapangan dibagi menjadi zona-zona permainan kecil (small-sided games) untuk memaksimalkan keterlibatan dan jumlah sentuhan bola setiap siswa.", kemitraan: "Siswa berkolaborasi dalam tim kecil untuk merancang strategi, dan guru bertindak sebagai fasilitator yang mengajukan pertanyaan kunci.", teknologi: "Memanfaatkan video-feedback untuk analisis gerak dan aplikasi papan taktik untuk merancang strategi." },
    "Project-Based Learning (PjBL)": { praktik: "Siswa secara aktif membangun pemahaman melalui proyek jangka panjang yang kompleks dan berpusat pada pertanyaan esensial.", lingkungan: "Kelas menjadi sebuah 'bengkel kerja' di mana siswa berkolaborasi, bereksperimen, dan menciptakan produk nyata.", kemitraan: "Guru berperan sebagai manajer proyek dan fasilitator, sementara siswa bertanggung jawab atas kemajuan belajar mereka sendiri.", teknologi: "Digunakan untuk riset, kolaborasi (dokumen bersama), pembuatan produk (desain, video), dan presentasi hasil." },
    "Problem-Based Learning (PBL)": { praktik: "Pembelajaran dimulai dengan masalah dunia nyata yang tidak terstruktur, mendorong siswa untuk menyelidiki dan menemukan solusi.", lingkungan: "Suasana belajar yang mendorong penyelidikan, debat sehat, dan toleransi terhadap ambiguitas.", kemitraan: "Guru menyajikan masalah dan membimbing proses penyelidikan, bukan memberikan jawaban langsung.", teknologi: "Sebagai alat utama untuk riset, pengumpulan data, dan presentasi solusi yang didukung oleh bukti." },
    "Cooperative Learning": { praktik: "Siswa bekerja dalam kelompok kecil untuk memaksimalkan pembelajaran mereka sendiri dan satu sama lain (Positive Interdependence).", lingkungan: "Struktur yang mendorong akuntabilitas individu dan kelompok, serta pengembangan keterampilan sosial.", kemitraan: "Guru merancang tugas-tugas kolaboratif dan memfasilitasi interaksi kelompok yang efektif.", teknologi: "Platform kolaboratif online (seperti Google Docs/Slides) dapat digunakan untuk kerja kelompok." },
    "Inquiry Learning": { praktik: "Pembelajaran berpusat pada pertanyaan yang dirumuskan oleh siswa, mendorong rasa ingin tahu dan penyelidikan mandiri.", lingkungan: "Lingkungan yang kaya akan sumber daya yang memungkinkan siswa untuk mengeksplorasi dan menemukan jawaban.", kemitraan: "Guru bertindak sebagai rekan pembelajar, membimbing proses penyelidikan daripada memberikan jawaban.", teknologi: "Sebagai alat vital untuk mengakses informasi, mengumpulkan data, dan berbagi temuan." },
    "Sport Education Model": { praktik: "Siswa berpartisipasi dalam 'musim kompetisi' yang terstruktur, mengambil berbagai peran (pemain, pelatih, wasit, jurnalis) untuk pengalaman otentik.", lingkungan: "Menciptakan budaya tim yang positif, di mana setiap anggota memiliki kontribusi dan rasa memiliki.", kemitraan: "Guru bertindak sebagai 'Komisioner Liga', mengelola musim, sementara siswa mengambil alih pengelolaan tim mereka.", teknologi: "Digunakan untuk mencatat statistik, membuat jadwal pertandingan, dan mempublikasikan hasil atau berita tim." },
    "Discovery Learning": { praktik: "Siswa membangun pengetahuan mereka sendiri dengan menemukan konsep dan prinsip melalui eksplorasi langsung.", lingkungan: "Menyediakan masalah atau skenario yang memungkinkan siswa untuk bereksperimen dengan berbagai pendekatan.", kemitraan: "Guru merancang pengalaman belajar dan memberikan petunjuk minimal agar siswa dapat melakukan penemuan.", teknologi: "Simulasi atau lingkungan virtual dapat menyediakan platform yang aman untuk penemuan." },
    default: { praktik: "Fokus pada pengalaman belajar autentik melalui praktik nyata, mendorong siswa menjadi pusat pembelajaran (student-centered).", lingkungan: "Menciptakan ruang belajar (fisik dan psikologis) yang aman, nyaman, dan inklusif untuk mendorong kolaborasi, eksplorasi, dan refleksi.", kemitraan: "Membangun hubungan dinamis antara guru dan siswa untuk menciptakan ekosistem belajar yang solid.", teknologi: "Memanfaatkan teknologi digital sebagai alat untuk memperkaya sumber belajar dan menciptakan pengalaman interaktif." }
};
const deepLearningDatabase = {
    'kebugaran-10': {
        "Project-Based Learning (PjBL)": {
            '1': [
                { text: "Pertanyaan esensial: 'Bagaimana kita bisa merancang program latihan sirkuit untuk meningkatkan kebugaran pribadi kita secara terukur?'", label: 'Meaningful' },
                { text: "Siswa melakukan tes kebugaran awal (misal: push-up, sit-up, lari) untuk mendapatkan data baseline.", label: 'Mindful' },
                { text: "Secara individu, siswa meneliti komponen kebugaran dan jenis latihan yang sesuai.", label: 'Meaningful' },
                { text: "Siswa menyusun draf program latihan pribadi dalam proposal proyek.", label: 'Mindful' }
            ],
            '2': [
                { text: "Siswa mempraktikkan draf program latihan sirkuit mereka di bawah pengawasan guru.", label: 'Joyful' },
                { text: "Fokus pada teknik yang benar. Siswa saling mengamati dan memberikan umpan balik (peer feedback) pada form dan postur tubuh.", label: 'Meaningful' },
                { text: "Berdasarkan pengalaman dan umpan balik, siswa merevisi program mereka (misal: menyesuaikan durasi, repetisi).", label: 'Mindful' },
                { text: "Siswa mencatat beban kerja dan perasaan mereka setelah latihan di jurnal kebugaran.", label: 'Meaningful' }
            ],
            '3': [
                { text: "Siswa melakukan tes kebugaran akhir untuk mengukur peningkatan secara kuantitatif.", label: 'Mindful' },
                { text: "Siswa menganalisis data perbandingan antara tes awal dan akhir, lalu membuat visualisasi data (misal: grafik).", label: 'Meaningful' },
                { text: "Siswa mempresentasikan laporan akhir proyek mereka: 'Program Latihan Saya: Dari Data ke Aksi'.", label: 'Joyful' },
                { text: "Refleksi akhir: 'Apa dampak proyek ini pada pemahamanku tentang gaya hidup sehat? Apa komitmenku selanjutnya?'.", label: 'Meaningful' }
            ]
        }
    },
    "Direct Instruction": {
        '1': [
            { text: "Guru mendemonstrasikan teknik {materiSpesifik} secara jelas dan bertahap (I Do).", label: 'Mindful' },
            { text: "Siswa menirukan gerakan {materiSpesifik} dengan panduan langsung dari guru (We Do).", label: 'Meaningful' },
            { text: "Siswa berlatih {materiSpesifik} secara mandiri atau berpasangan, sementara guru memberikan umpan balik korektif (You Do).", label: 'Mindful' },
            { text: "Siswa mencoba menerapkan {materiSpesifik} dalam permainan sederhana atau tantangan.", label: 'Joyful' }
        ]
    },
    "Tactical Games Model": {
        '1': [
            { text: "Siswa bermain game 1 (misal 3 vs 1) fokus pada {materiSpesifik} untuk menemukan masalah taktis.", label: 'Joyful' },
            { text: "Guru memfasilitasi diskusi singkat (time-out taktis): 'Mengapa {materiSpesifik} kita belum efektif dalam permainan tadi?'.", label: 'Meaningful' },
            { text: "Siswa berlatih keterampilan teknis pendukung untuk {materiSpesifik} dalam latihan terisolasi (skill drill).", label: 'Mindful' },
            { text: "Siswa kembali bermain Game 1, mencoba menerapkan pemahaman dan perbaikan teknis yang baru.", label: 'Joyful' }
        ]
    },
    "Project-Based Learning (PjBL)": {
        '1': [
            { text: "Pertanyaan esensial: 'Bagaimana kita bisa membuat proyek (misal: kampanye, video tutorial) yang efektif terkait {materiSpesifik}?'", label: 'Meaningful' },
            { text: "Siswa membentuk kelompok, melakukan brainstorming, dan menyusun proposal proyek.", label: 'Meaningful' },
            { text: "Kelompok melakukan riset mendalam tentang komponen kunci dari {materiSpesifik} dan target audiens proyek.", label: 'Mindful' },
            { text: "Guru dan kelompok lain memberikan umpan balik terhadap proposal proyek.", label: 'Meaningful' }
        ]
    },
    "Problem-Based Learning (PBL)": {
        '1': [
            { text: "Guru menyajikan sebuah masalah/skenario autentik yang kompleks terkait {materiSpesifik}.", label: 'Meaningful' },
            { text: "Siswa dalam kelompok menganalisis masalah, mengidentifikasi fakta, dan merumuskan hipotesis.", label: 'Mindful' },
            { text: "Siswa menentukan apa yang perlu mereka pelajari dan membagi tugas riset untuk menemukan solusi.", label: 'Meaningful' },
            { text: "Kelompok bekerja sama untuk mensintesis informasi dan merumuskan solusi.", label: 'Joyful' }
        ]
    },
     "Cooperative Learning": {
        '1': [
            { text: "Guru menyajikan tugas kompleks terkait {materiSpesifik} dan membentuk kelompok heterogen dengan peran yang jelas.", label: 'Meaningful' },
            { text: "Siswa bekerja sama dalam kelompok untuk memecahkan masalah atau menguasai materi (positive interdependence).", label: 'Joyful' },
            { text: "Setiap siswa bertanggung jawab untuk menjelaskan bagiannya kepada anggota kelompok lain (individual accountability).", label: 'Mindful' },
            { text: "Guru memfasilitasi dan menilai keterampilan kolaborasi selama proses berlangsung.", label: 'Meaningful' }
        ]
    },
     "Inquiry Learning": {
        '1': [
            { text: "Guru menyajikan sebuah fenomena atau pertanyaan besar terkait {materiSpesifik} untuk memancing rasa ingin tahu.", label: 'Meaningful' },
            { text: "Siswa secara individu atau kelompok merumuskan pertanyaan-pertanyaan spesifik yang ingin mereka selidiki.", label: 'Mindful' },
            { text: "Siswa melakukan penyelidikan atau eksperimen untuk mengumpulkan data dan bukti.", label: 'Joyful' },
            { text: "Siswa menganalisis data, menarik kesimpulan, dan mempresentasikannya.", label: 'Meaningful' }
        ]
    },
    "Sport Education Model": {
        '1': [
            { text: "Guru membagi siswa ke dalam tim-tim tetap untuk satu 'musim kompetisi'.", label: 'Meaningful' },
            { text: "Setiap tim menentukan nama, logo, dan menunjuk peran (kapten, pelatih, dll).", label: 'Joyful' },
            { text: "Tim melakukan sesi latihan awal untuk membangun kekompakan dan strategi dasar terkait {materiSpesifik}.", label: 'Mindful' },
            { text: "Guru bertindak sebagai komisioner liga, menjelaskan aturan dan jadwal.", label: 'Meaningful' }
        ]
    },
    "Discovery Learning": {
        '1': [
            { text: "Guru menyajikan sebuah tantangan atau pertanyaan terbuka terkait {materiSpesifik} tanpa memberikan solusi.", label: 'Meaningful' },
            { text: "Siswa didorong untuk mengeksplorasi berbagai cara untuk mengatasi tantangan menggunakan peralatan yang disediakan.", label: 'Joyful' },
            { text: "Siswa secara individu atau kelompok kecil mencoba berbagai pendekatan dan mengamati hasilnya.", label: 'Mindful' },
            { text: "Guru mengamati dan hanya memberikan petunjuk minimal agar siswa dapat melakukan penemuan.", label: 'Meaningful' }
        ]
    }
};
const tujuanPembelajaranDatabase = {
    'Terampil Bergerak': {
        'E': {
            'default': ["menerapkan keterampilan {fokusMateri} dalam berbagai situasi.", "menganalisis konsep gerak yang relevan dengan {fokusMateri}.", "merancang strategi sederhana menggunakan {fokusMateri}."],
            'Direct Instruction': ["menerapkan konsep dan prinsip gerak untuk melakukan {fokusMateri} dengan benar.", "menganalisis urutan gerak yang efisien dalam keterampilan {fokusMateri}.", "menghaluskan detail teknis pada {fokusMateri} untuk meningkatkan konsistensi."],
            'Tactical Games Model': ["menerapkan {fokusMateri} dalam situasi permainan yang dimodifikasi.", "menganalisis kapan dan mengapa {fokusMateri} digunakan dalam sebuah strategi.", "merancang strategi sederhana yang mengintegrasikan penggunaan {fokusMateri}."],
            'Project-Based Learning (PjBL)': ["merancang sebuah proyek untuk mendemonstrasikan penguasaan {fokusMateri}.", "menerapkan {fokusMateri} secara kreatif dalam produk proyek.", "menganalisis dan menghaluskan performa {fokusMateri} melalui rekaman video."]
        },
        'F': {
            'default': ["mengevaluasi efektivitas penerapan {fokusMateri} dalam situasi kompleks.", "menciptakan strategi gerak lanjutan yang melibatkan {fokusMateri}.", "mengevaluasi dampak konsep gerak terhadap peningkatan kinerja {fokusMateri}."],
            'Direct Instruction': ["mengevaluasi efektivitas berbagai teknik {fokusMateri} berdasarkan prinsip gerak.", "merancang variasi latihan untuk menghaluskan dan meningkatkan kinerja {fokusMateri}.", "menerapkan keterampilan {fokusMateri} yang telah dievaluasi dalam berbagai situasi kompleks."],
            'Tactical Games Model': ["mengevaluasi efektivitas strategi berbasis {fokusMateri} dalam pertandingan.", "menciptakan dan mengembangkan strategi gerak yang kompleks menggunakan {fokusMateri}.", "mengevaluasi dampak keputusan taktis terkait {fokusMateri} pada hasil permainan."],
            'Project-Based Learning (PjBL)': ["merancang dan melaksanakan proyek evaluasi kinerja {fokusMateri} pada diri sendiri atau orang lain.", "menciptakan sebuah program latihan inovatif untuk meningkatkan keterampilan {fokusMateri}.", "mengevaluasi dampak proyek terhadap peningkatan kinerja gerak."]
        }
    },
    'Belajar melalui Gerak': {
        'E': {
            'default': ["mengadaptasi strategi gerak {materiJudul} dalam situasi baru.", "mengevaluasi perilaku etis (fair play) dalam tim.", "merencanakan strategi pengambilan keputusan sebagai sebuah tim."],
            'Cooperative Learning': ["menerapkan strategi pengambilan keputusan dalam kerja tim saat bermain {materiJudul}.", "memeragakan fair play dan kolaborasi untuk mencapai tujuan bersama.", "mengevaluasi efektivitas komunikasi dan kepemimpinan dalam kelompok."],
            'Sport Education Model': ["mengadaptasi strategi tim dalam sebuah musim kompetisi {materiJudul}.", "memeragakan berbagai peran dan tanggung jawab (wasit, kapten, pencatat skor) secara etis.", "menyempurnakan strategi tim berdasarkan hasil dan evaluasi pertandingan."]
        },
        'F': {
            'default': ["mengevaluasi adaptasi strategi {materiJudul} dalam konteks yang menantang.", "merefleksikan pengaruh perilaku etis terhadap capaian tim.", "merancang dan mengevaluasi strategi pengambilan keputusan dalam kerja tim."],
            'Cooperative Learning': ["merancang strategi pengambilan keputusan yang kompleks untuk tim dalam {materiJudul}.", "mengevaluasi dan merefleksikan pengaruh perilaku etis terhadap keberhasilan tim.", "mengevaluasi efektivitas kepemimpinan dan kolaborasi dalam memecahkan masalah taktis."],
            'Sport Education Model': ["mengevaluasi efektivitas strategi tim sepanjang musim kompetisi {materiJudul}.", "merefleksikan dampak perilaku etis pada dinamika dan prestasi tim.", "merancang program pembinaan untuk meningkatkan pengambilan keputusan dan kolaborasi tim."]
        }
    },
    'Bergaya Hidup Aktif': {
        'E': {
            'default': ["menginvestigasi dampak partisipasi teratur dalam {fokusMateri} terhadap kesehatan.", "merancang strategi peningkatan aktivitas kebugaran pribadi.", "berpartisipasi aktif dalam aktivitas kebugaran di luar ruang."],
            'Project-Based Learning (PjBL)': ["merancang sebuah proyek investigasi dampak latihan {fokusMateri} terhadap komponen kebugaran tertentu.", "merancang dan menerapkan strategi peningkatan aktivitas kebugaran pribadi selama periode waktu tertentu.", "mempresentasikan hasil investigasi dan rancangan strategi kepada teman sekelas."]
        },
        'F': {
            'default': ["mengevaluasi dampak partisipasi teratur dalam {fokusMateri} terhadap kesehatan.", "mengevaluasi efektivitas strategi peningkatan aktivitas kebugaran.", "mengevaluasi strategi pemanfaatan lingkungan alam untuk aktivitas kebugaran."],
            'Project-Based Learning (PjBL)': ["merancang dan melaksanakan proyek evaluasi dampak program latihan {fokusMateri} terhadap kesehatan.", "mengevaluasi efektivitas strategi peningkatan aktivitas kebugaran yang telah diterapkan.", "membuat sebuah kampanye atau presentasi yang mengevaluasi pemanfaatan lingkungan alam untuk kebugaran."]
        }
    },
     'Memilih Hidup yang Menyehatkan': {
        'E': {
            'default': ["mengevaluasi risiko kesehatan akibat gaya hidup.", "mempromosikan tindakan pencegahan penyakit melalui media.", "mengevaluasi pilihan makanan sehat sesuai kebutuhan aktivitas jasmani."],
             'Project-Based Learning (PjBL)': ["merancang proyek media promosi untuk mencegah risiko kesehatan dari {materiJudul}.", "mengevaluasi kandungan gizi makanan untuk mendukung aktivitas {fokusMateri}.", "membuat sebuah panduan makanan sehat berdasarkan hasil evaluasi gizi."]
        },
        'F': {
            'default': ["mengadvokasi gaya hidup aktif dan sehat melalui berbagai media.", "mengadvokasi makanan sehat dan bergizi seimbang kepada orang lain.", "mempraktikkan tindakan Resusitasi Jantung-Paru (RJP)."],
            'Problem-Based Learning (PBL)': ["merancang sebuah kampanye advokasi gaya hidup sehat untuk mengatasi masalah kesehatan terkait {materiJudul}.", "mengadvokasi menu makanan sehat kepada teman atau keluarga berdasarkan analisis kebutuhan aktivitas jasmani.", "mempraktikkan skenario simulasi RJP dalam situasi darurat."]
        }
    }
};
const alurTujuanPembelajaranDatabase = {
    'default': [
        "Peserta didik mengawali dengan menerapkan konsep dasar {fokusMateri} (TP1).",
        "Selanjutnya, mereka akan dibimbing untuk melakukan analisis kritis terhadap pelaksanaannya (TP2).",
        "Alur diakhiri dengan kemampuan merancang strategi atau variasi yang efektif, menunjukkan penguasaan yang komprehensif (TP3)."
    ],
    'Direct Instruction': [
        "Alur pembelajaran dimulai dengan pemahaman dan penerapan konsep dan prinsip gerak {fokusMateri} (TP1).",
        "Selanjutnya, peserta didik akan dibimbing untuk menganalisis urutan gerak secara kritis demi efisiensi (TP2).",
        "Puncaknya adalah saat peserta didik mampu menghaluskan detail teknis untuk meningkatkan performa secara konsisten (TP3)."
    ],
    'Tactical Games Model': [
        "Pembelajaran berawal dari penerapan {fokusMateri} dalam situasi permainan sederhana untuk mengidentifikasi masalah (TP1).",
        "Dari sana, peserta didik akan menganalisis solusi taktis (TP2).",
        "Puncaknya adalah mampu merancang strategi permainan yang efektif menggunakan keterampilan tersebut (TP3)."
    ],
    'Project-Based Learning (PjBL)': [
        "Alur pembelajaran dimulai dengan merancang sebuah proyek yang relevan dengan {fokusMateri} (TP1).",
        "Proses dilanjutkan dengan penerapan kreatif keterampilan dalam pelaksanaan proyek (TP2).",
        "Alur diakhiri dengan analisis serta evaluasi hasil proyek untuk perbaikan (TP3)."
    ],
    'Cooperative Learning': [
        "Alur pembelajaran dimulai dengan penerapan strategi pengambilan keputusan dalam kelompok kecil (TP1).",
        "Selanjutnya, peserta didik fokus pada perilaku etis dan fair play untuk mencapai tujuan bersama (TP2).",
        "Alur diakhiri dengan evaluasi efektivitas kerja sama tim secara keseluruhan (TP3)."
    ],
    'Sport Education Model': [
        "Alur pembelajaran disusun seperti sebuah musim kompetisi, diawali dengan kemampuan mengadaptasi strategi tim (TP1).",
        "Kemudian, peserta didik akan memeragakan berbagai peran dengan etis (TP2).",
        "Puncaknya adalah mampu menyempurnakan strategi tim berdasarkan evaluasi berkelanjutan (TP3)."
    ]
};
const contentDatabase = {
    default: {
        pemahaman: "Dengan menguasai {placeholder}, saya belajar pentingnya presisi, strategi, dan adaptasi, yang berguna tidak hanya di lapangan tetapi juga dalam memecahkan masalah kehidupan sehari-hari.",
        pertanyaan: ["Bagaimana cara melakukan {placeholder} yang benar dan efektif?", "Dalam situasi permainan seperti apa {placeholder} paling dibutuhkan?", "Bagaimana kita bisa tahu bahwa {placeholder} yang kita lakukan sudah baik dan benar?"]
    },
    'kebugaran-10': {
        pemahaman: "Dengan merancang dan mengevaluasi program kebugaran untuk diri sendiri, saya belajar mengambil tanggung jawab atas kesehatan saya, menetapkan tujuan yang realistis, dan memahami bahwa kemajuan membutuhkan proses, data, dan konsistensi.",
        pertanyaan: ["Komponen kebugaran apa yang paling penting untuk tujuan pribadimu?", "Bagaimana prinsip F.I.T.T. dapat membantumu merancang program yang efektif?", "Data apa yang bisa kamu gunakan untuk membuktikan bahwa programmu berhasil?"]
    }
};
const saranaDatabase = { 'default': { media: ["Video tutorial dari YouTube", "Papan tulis/spidol"], alat: ["Peralatan sesuai materi", "Cone/penanda", "Peluit"] }, 'sepakbola-10': { media: ["<a href='https://www.youtube.com/results?search_query=analisis+taktik+sepak+bola' target='_blank'>Video analisis taktik sepak bola</a>", "Aplikasi papan taktik (misal: TacticalPad)"], alat: ["Bola sepak", "Gawang", "Cone", "Rompi tim"] }, 'kebugaran-10': { media: ["<a href='https://www.youtube.com/results?search_query=contoh+latihan+circuit+training' target='_blank'>Contoh video Circuit Training</a>", "Aplikasi stopwatch/timer"], alat: ["Matras", "Stopwatch", "Cone", "Tali skipping", "Beban ringan (opsional)"] }, 'narkoba-10': { media: ["<a href='https://www.youtube.com/results?search_query=video+studi+kasus+bahaya+narkoba' target='_blank'>Video studi kasus BNN</a>", "Artikel berita online"], alat: ["Proyektor", "Kertas plano", "Spidol"] } };
const glosariumDatabase = { 'default': { "Evaluasi": "Proses penilaian sistematis terhadap efektivitas atau nilai sesuatu.", "Analisis": "Penyelidikan mendalam terhadap suatu subjek untuk memahami bagian-bagiannya.", "Strategi": "Rencana tingkat tinggi untuk mencapai satu atau lebih tujuan." }, 'sepakbola-10': { "Build-up play": "Proses membangun serangan dari lini pertahanan.", "Zonal Marking": "Sistem pertahanan di mana setiap pemain bertanggung jawab atas area tertentu di lapangan.", "Counter-attack": "Serangan balik cepat yang dilancarkan segera setelah merebut bola dari lawan." }, 'kebugaran-10': { "Circuit Training": "Bentuk latihan yang terdiri dari serangkaian pos latihan yang dilakukan secara berurutan dengan sedikit atau tanpa istirahat.", "Repetisi": "Jumlah pengulangan satu gerakan dalam satu set.", "Set": "Sekelompok repetisi yang diikuti dengan periode istirahat." } };
const pustakaDatabase = { 'default': [ "Muhajir. (2024). <i>Buku Guru Pendidikan Jasmani, Olahraga, dan Kesehatan SMA/SMK/MA</i>. Jakarta: Kemendikbudristek." ], 'sepakbola-10': [ "Muhajir. (2024). <i>Buku Guru PJOK Kelas X SMA/MA</i>. Jakarta: Kemendikbudristek.", "Wilson, Jonathan. (2013). <i>Inverting the Pyramid: The History of Football Tactics</i>." ], 'kebugaran-10': [ "Muhajir. (2024). <i>Buku Guru PJOK Kelas X SMA/MA</i>. Jakarta: Kemendikbudristek.", "Bompa, Tudor O. (2009). <i>Periodization: Theory and Methodology of Training</i>." ] };
const lkpdDatabase = { 'default': { title: "Lembar Kerja Observasi Keterampilan", tujuan: "Mengevaluasi penerapan keterampilan spesifik dalam aktivitas.", alat: ["Area/lapangan", "Alat tulis"], langkah: [ "Amati rekanmu saat melakukan keterampilan yang ditugaskan.", "Fokus pada komponen kunci dari gerakan yang benar.", "Berikan umpan balik (feedback) yang konstruktif menggunakan tabel di bawah." ], tabel: `<table class="lkpd-table"><thead><tr><th>Nama Siswa</th><th>Keterampilan</th><th>Komponen Gerak yang Sudah Baik</th><th>Komponen yang Perlu Ditingkatkan</th><th>Saran Perbaikan</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>` }, 'kebugaran-10': { title: "LKPD Jurnal & Evaluasi Program Latihan", tujuan: "Mencatat, memonitor, dan mengevaluasi kemajuan program latihan pribadi.", alat: ["Buku catatan/jurnal", "Alat tulis"], langkah: [ "Setiap selesai sesi latihan, isilah jurnal ini.", "Jujurlah pada diri sendiri mengenai tingkat kesulitan dan perasaanmu.", "Gunakan data ini untuk memutuskan apakah program latihanmu perlu disesuaikan." ], tabel: `<table class="lkpd-table"><thead><tr><th>Tanggal</th><th>Pos Latihan</th><th>Set x Repetisi/Durasi</th><th>Tingkat Kesulitan (1-5)</th><th>Catatan/Perasaan</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>` } };

// UPDATED PROFIL LULUSAN DATABASE (8 Dimensi Pembelajaran Mendalam)
const profilLulusanDatabase = {
    base: ['Keimanan dan Ketakwaan kepada Tuhan YME', 'Kemandirian'],
    desc: {
        'Keimanan dan Ketakwaan kepada Tuhan YME': 'Dimensi ini menekankan pentingnya nilai-nilai spiritual dalam kehidupan, serta penerapan ajaran agama dalam tindakan sehari-hari.',
        'Kewargaan': 'Dimensi ini mencakup rasa cinta tanah air, kepedulian terhadap lingkungan dan masyarakat, serta tanggung jawab sosial sebagai warga negara yang baik.',
        'Penalaran Kritis': 'Siswa diharapkan mampu berpikir kritis, menganalisis informasi, mengevaluasi argumen, dan mengambil keputusan yang tepat.',
        'Kreativitas': 'Dimensi ini mendorong siswa untuk berpikir kreatif, inovatif, dan mampu menghasilkan solusi baru dalam menghadapi berbagai tantangan.',
        'Kolaborasi': 'Siswa dilatih untuk bekerja sama dalam tim, berbagi peran, dan mencapai tujuan bersama.',
        'Kemandirian': 'Dimensi ini menekankan pentingnya kemampuan belajar mandiri, bertanggung jawab atas proses belajar, dan memiliki inisiatif.',
        'Kesehatan': 'Dimensi ini mencakup kesehatan fisik dan mental, serta pentingnya menjaga gaya hidup sehat.',
        'Komunikasi': 'Siswa diharapkan memiliki kemampuan komunikasi yang efektif, baik secara lisan maupun tulisan, serta mampu mendengarkan dengan baik.'
    },
    byElemen: {
        'Terampil Bergerak': ['Penalaran Kritis', 'Kreativitas', 'Kesehatan'],
        'Belajar melalui Gerak': ['Kolaborasi', 'Komunikasi', 'Kewargaan', 'Penalaran Kritis'],
        'Bergaya Hidup Aktif': ['Kesehatan', 'Kemandirian', 'Kewargaan'],
        'Memilih Hidup yang Menyehatkan': ['Kesehatan', 'Penalaran Kritis', 'Komunikasi', 'Kewargaan']
    }
};

// --- DOM Elements ---
const generateBtn = document.getElementById('generate-btn');
const outputContainer = document.getElementById('output-modul');
const placeholder = document.getElementById('placeholder');
const actionButtons = document.getElementById('action-buttons');
const copyBtn = document.getElementById('copy-btn');
const backBtn = document.getElementById('back-btn');
const faseSelect = document.getElementById('fase');
const kelasSelect = document.getElementById('kelas');
const materiPembelajaranSelect = document.getElementById('materi-pembelajaran');
const elemenCpSelect = document.getElementById('elemen-cp');

// --- Gemini AI Elements ---
const geminiFeaturesSection = document.getElementById('gemini-features');
const geminiModal = document.getElementById('gemini-modal');
const geminiModalTitle = document.getElementById('gemini-modal-title');
const geminiModalContent = document.getElementById('gemini-modal-content');
const geminiModalClose = document.getElementById('gemini-modal-close');
const geminiModalCopy = document.getElementById('gemini-modal-copy');
const geminiWarmupBtn = document.getElementById('gemini-warmup-btn');
const geminiMateriBtn = document.getElementById('gemini-materi-btn');
const geminiQuizBtn = document.getElementById('gemini-quiz-btn');
const geminiCodingBtn = document.getElementById('gemini-coding-btn');

const kelasByFase = { E: [10], F: [11, 12] };
const quotes = [ "Juara dibuat dari sesuatu yang mereka miliki jauh di dalam diri mereka: sebuah keinginan, sebuah impian, sebuah visi.", "Kemenangan sejati bukanlah tentang tidak pernah jatuh, tetapi tentang bangkit setiap kali kita jatuh.", "Satu-satunya batasan adalah yang kamu tetapkan untuk dirimu sendiri. Teruslah bergerak maju!" ];

// --- Gemini API Helper ---
async function callGemini(prompt) {
    geminiModalContent.innerHTML = '<p class="text-center">Memproses permintaan Anda dengan Asisten... 🧠</p>';
    // PERINGATAN: Kunci API sebaiknya tidak diletakkan langsung di kode sisi klien.
    // Untuk keamanan, gunakan environment variables di Netlify dan panggil melalui Netlify Functions.
    const apiKey = ""; // <-- Masukkan Kunci API Google Anda di sini.
    if (!apiKey) {
        geminiModalContent.innerHTML = '<p class="text-center text-red-600 font-bold">Kunci API belum diatur. Harap masukkan kunci API di file script.js.</p>';
        return;
    }
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const payload = { contents: [{ parts: [{ text: prompt }] }] };
    try {
        const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        if (!response.ok) throw new Error(`Error dari API: ${response.status} ${response.statusText}`);
        const result = await response.json();
        if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
            return result.candidates[0].content.parts[0].text;
        }
        throw new Error("Respons API tidak valid atau kosong.");
    } catch (error) {
        console.error("Kesalahan saat memanggil Gemini:", error);
        return `Terjadi kesalahan saat menghubungi Asisten AI: ${error.message}. Mohon coba lagi nanti.`;
    }
}

function showModal(title, content) {
    geminiModalTitle.innerText = title;
    // Menggunakan regex untuk konversi Markdown sederhana ke HTML
    let htmlContent = content
        .replace(/\*\*(.*?)\*\*/g, '<h3>$1</h3>') // **Bold** -> <h3>
        .replace(/\*(.*?)\*/g, '<strong>$1</strong>')   // *Italic* -> <strong>
        .replace(/\n/g, '<br>'); // Newline -> <br>
    geminiModalContent.innerHTML = htmlContent;
    geminiModal.classList.remove('hidden');
}

function hideModal() { 
    geminiModal.classList.add('hidden'); 
    geminiModalContent.innerHTML = ''; // Hapus konten saat modal ditutup
}

function getFormContext() {
    const fase = faseSelect.value;
    const kelas = kelasSelect.value;
    const materiJudul = materiPembelajaranSelect.options[materiPembelajaranSelect.selectedIndex].text;
    const materiSpesifik = document.getElementById('materi-spesifik').value || 'fokus umum';
    const modelPembelajaran = document.getElementById('model-pembelajaran').value;
    return { fase, kelas, materiJudul, materiSpesifik, modelPembelajaran };
}

// --- Event Listeners for AI Features ---
if (geminiWarmupBtn) {
    geminiWarmupBtn.addEventListener('click', async () => {
        const { fase, kelas, materiJudul, materiSpesifik, modelPembelajaran } = getFormContext();
        const title = "Ide Pemanasan untuk SMA/SMK/MA";
        showModal(title, '<p class="text-center">Memproses permintaan Anda dengan Asisten... 🧠</p>');
        const prompt = `Sebagai seorang pelatih dan ahli pedagogi PJOK untuk tingkat SMA/SMK/MA, rancang 3 ide pemanasan (warm-up) yang inovatif dan relevan untuk materi '${materiJudul}' dengan fokus pada '${materiSpesifik}'. Targetnya adalah siswa kelas ${kelas} Fase ${fase} yang menggunakan model pembelajaran ${modelPembelajaran}. Untuk setiap ide, jelaskan: **Nama Permainan**, **Tujuan Fisiologis** (misal: meningkatkan detak jantung, aktivasi otot spesifik), **Instruksi yang Jelas**, dan **Koneksi ke Kegiatan Inti**.`;
        const result = await callGemini(prompt);
        showModal(title, result);
    });
}

if(geminiMateriBtn) {
    geminiMateriBtn.addEventListener('click', async () => {
        const { fase, kelas, materiJudul, materiSpesifik } = getFormContext();
        const title = "Materi Ajar Mendalam";
        showModal(title, '<p class="text-center">Memproses permintaan Anda dengan Asisten... 🧠</p>');
        const prompt = `Sebagai seorang ahli materi PJOK untuk SMA/SMK/MA, buatkan saya sebuah naskah materi ajar mendalam untuk topik '${materiJudul}' dengan fokus spesifik pada '${materiSpesifik}'. Naskah ini harus cocok untuk siswa kelas ${kelas} Fase ${fase}. Jelaskan **Konsep Kunci**, **Prinsip Biomekanik** yang mendasari, **Analisis Kesalahan Umum** yang sering terjadi, dan **Tips untuk Perbaikan**. Gunakan bahasa yang teknis namun mudah dipahami oleh remaja.`;
        const result = await callGemini(prompt);
        showModal(title, result);
    });
}

if (geminiQuizBtn) {
    geminiQuizBtn.addEventListener('click', async () => {
        const { fase, kelas, materiJudul, materiSpesifik } = getFormContext();
        const title = "Kuis Analitis";
        showModal(title, '<p class="text-center">Memproses permintaan Anda dengan Asisten... 🧠</p>');
        const prompt = `Sebagai seorang ahli evaluasi pembelajaran PJOK untuk tingkat SMA/SMK/MA, buatkan saya 5 soal kuis pilihan ganda (A, B, C, D) yang menguji pemahaman tingkat tinggi (analisis, evaluasi, penerapan strategi) untuk materi '${materiJudul}' dengan fokus pada '${materiSpesifik}'. Targetnya adalah siswa kelas ${kelas} Fase ${fase}. Sertakan **Kunci Jawaban** dan berikan **Penjelasan Singkat** mengapa jawaban tersebut benar untuk setiap soal.`;
        const result = await callGemini(prompt);
        showModal(title, result);
    });
}

if (geminiCodingBtn) {
    geminiCodingBtn.addEventListener('click', async () => {
        const { fase, kelas, materiJudul, materiSpesifik, modelPembelajaran } = getFormContext();
        const title = "Ide Pembelajaran Coding PJOK";
        showModal(title, '<p class="text-center">Memproses permintaan Anda dengan Asisten... 🧠</p>');
        const prompt = `Sebagai seorang ahli inovasi pendidikan yang menggabungkan teknologi dan PJOK untuk tingkat SMA/SMK/MA, rancang 2 ide konkret untuk mengintegrasikan konsep *computational thinking* atau *coding* sederhana ke dalam materi pelajaran '${materiJudul}' dengan fokus pada '${materiSpesifik}'. Targetnya adalah siswa kelas ${kelas} Fase ${fase} yang menggunakan model pembelajaran ${modelPembelajaran}. Untuk setiap ide, jelaskan: **Nama Aktivitas**, **Konsep Coding/Computational Thinking** yang diajarkan (misal: sekuens, loop, kondisional, analisis data), **Langkah-langkah Implementasi di Lapangan** (bagaimana melakukannya tanpa/dengan teknologi minimal), dan **Tujuan Pembelajaran Ganda** (PJOK & Digital).`;
        const result = await callGemini(prompt);
        showModal(title, result);
    });
}


if (geminiModalClose) {
    geminiModalClose.addEventListener('click', hideModal);
}

if (geminiModalCopy) {
    geminiModalCopy.addEventListener('click', () => {
        const contentToCopy = geminiModalContent.innerHTML;
        const plainText = geminiModalContent.innerText;
        const listener = function(ev) {
            ev.preventDefault();
            ev.clipboardData.setData('text/html', contentToCopy);
            ev.clipboardData.setData('text/plain', plainText);
        };
        document.addEventListener('copy', listener);
        try {
            document.execCommand('copy');
            geminiModalCopy.innerText = 'Tersalin!';
        } catch (err) {
            console.error('Gagal menyalin di modal:', err);
            geminiModalCopy.innerText = 'Gagal Menyalin';
        } finally {
            document.removeEventListener('copy', listener);
        }
        setTimeout(() => { geminiModalCopy.innerText = 'Salin Teks'; }, 2000);
    });
}

// --- Logika dan Populasi Form ---
function populateKelas() {
    const selectedFase = faseSelect.value;
    const kelasUntukFase = kelasByFase[selectedFase] || [];
    kelasSelect.innerHTML = '';
    kelasUntukFase.forEach(k => {
        const option = document.createElement('option');
        option.value = k;
        option.textContent = `Kelas ${k}`;
        kelasSelect.appendChild(option);
    });
}

function populateMateri() {
    const selectedKelas = kelasSelect.value;
    const materiUntukKelas = materiByKelas[selectedKelas] || {};
    materiPembelajaranSelect.innerHTML = '';
    for (const key in materiUntukKelas) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = materiUntukKelas[key].text;
        materiPembelajaranSelect.appendChild(option);
    }
    updateMateriSpesifik();
}

function updateMateriSpesifik() {
    const selectedKelas = kelasSelect.value;
    const selectedMateriKey = materiPembelajaranSelect.value;
    const materiSpesifikInput = document.getElementById('materi-spesifik');

    if (selectedKelas && materiByKelas[selectedKelas] && materiByKelas[selectedKelas][selectedMateriKey]) {
        const materiData = materiByKelas[selectedKelas][selectedMateriKey];
        elemenCpSelect.value = materiData.elemenTerkait || 'Terampil Bergerak';
        materiSpesifikInput.placeholder = materiData.contohSpesifik ? `Contoh: ${materiData.contohSpesifik}` : 'Isi materi spesifik di sini...';
        materiSpesifikInput.value = ''; // Hapus nilai lama
    } else {
         materiSpesifikInput.placeholder = 'Isi materi spesifik di sini...';
    }
}

function setDynamicDate() {
    const today = new Date();
    const day = today.getDate();
    const year = today.getFullYear();
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const monthName = monthNames[today.getMonth()];
    document.getElementById('tanggal-ttd').value = `${day} ${monthName} ${year}`;
}

// --- Inisialisasi Saat Halaman Dimuat ---
document.addEventListener('DOMContentLoaded', () => {
    faseSelect.addEventListener('change', () => {
        populateKelas();
        populateMateri();
    });
    kelasSelect.addEventListener('change', populateMateri);
    materiPembelajaranSelect.addEventListener('change', updateMateriSpesifik);

    populateKelas();
    populateMateri();
    setDynamicDate();
});

function generateProfilLulusan(elemenCP) {
    const profilSet = new Set(profilLulusanDatabase.base);
    if (profilLulusanDatabase.byElemen[elemenCP]) {
        profilLulusanDatabase.byElemen[elemenCP].forEach(p => profilSet.add(p));
    }
    return Array.from(profilSet).sort();
}

function generateTujuanPembelajaran(elemen, fase, model, fokusMateri, materiJudul) {
   const db = tujuanPembelajaranDatabase;
   let objectives = [];
   if (db[elemen] && db[elemen][fase]) {
         objectives = db[elemen][fase][model] || db[elemen][fase]['default'];
   }
   if (!objectives || objectives.length === 0) {
         return "<ul><li>Peserta didik mampu menjelaskan dan mempraktikkan " + fokusMateri + " sesuai dengan konsep dan prinsip gerak yang benar.</li></ul>";
   }
   return `<ul>${objectives.map(t => `<li>Peserta didik mampu ${t.replace(/{fokusMateri}/g, `<strong>${fokusMateri}</strong>`).replace(/{materiJudul}/g, `<strong>${materiJudul}</strong>`)}</li>`).join('')}</ul>`;
 }

function generateAlurTujuanPembelajaran(model, fokusMateri) {
    const templates = alurTujuanPembelajaranDatabase[model] || alurTujuanPembelajaranDatabase['default'];
    const listItems = templates.map(template => `<li>${template.replace(/{fokusMateri}/g, `<strong>${fokusMateri}</strong>`)}</li>`).join('');
    return `<ol>${listItems}</ol>`;
}

if (generateBtn) {
    generateBtn.addEventListener('click', () => {
        const namaPenyusun = document.getElementById('nama-penyusun').value;
        const guruNip = document.getElementById('guru-nip').value;
        const kepsekNama = document.getElementById('kepsek-nama').value;
        const kepsekNip = document.getElementById('kepsek-nip').value;
        const institusi = document.getElementById('institusi').value;
        const fase = document.getElementById('fase').value;
        const kelas = document.getElementById('kelas').value;
        const semester = document.getElementById('semester').value;
        const elemenCP = document.getElementById('elemen-cp').value;
        const materiKey = document.getElementById('materi-pembelajaran').value;
        const materiSpesifik = document.getElementById('materi-spesifik').value;
        const modelPembelajaran = document.getElementById('model-pembelajaran').value;
        const jumlahPertemuan = parseInt(document.getElementById('jumlah-pertemuan').value);
        const jpPerPertemuan = parseInt(document.getElementById('jp-per-pertemuan').value);
        const menitPerJP = parseInt(document.getElementById('menit-per-jp').value);
        const lokasiTtd = document.getElementById('lokasi-ttd').value;
        const tanggalTtd = document.getElementById('tanggal-ttd').value;
        
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth(); // 0-11
        const tahunAjaran = currentMonth < 6 ? `${currentYear - 1}/${currentYear}` : `${currentYear}/${currentYear + 1}`;

        const alokasiWaktuText = `${jumlahPertemuan * jpPerPertemuan} JP (${jumlahPertemuan} Pertemuan @ ${jpPerPertemuan} JP x ${menitPerJP} Menit)`;
        const menitTotalPerPertemuan = jpPerPertemuan * menitPerJP;
        const menitPendahuluan = Math.round(menitTotalPerPertemuan * 0.15);
        const menitPenutup = Math.round(menitTotalPerPertemuan * 0.15);
        const menitInti = menitTotalPerPertemuan - menitPendahuluan - menitPenutup;

        const materiJudul = materiPembelajaranSelect.options[materiPembelajaranSelect.selectedIndex].text;
        const materiInfo = { key: materiKey, nama: materiJudul.replace(/Aktivitas.*?:\s*|Permainan\s*|Kesehatan:\s*/, '').replace(/\s*\(.*\)/, '').trim() };
        const fokusMateri = materiSpesifik.trim() !== '' ? materiSpesifik : materiInfo.nama;

        const content = contentDatabase[materiInfo.key] || contentDatabase.default;
        const capaianPembelajaran = capaianPerElemen[elemenCP] ? capaianPerElemen[elemenCP][fase] : "Capaian per elemen tidak ditemukan.";
        
        let modelInti = (deepLearningDatabase[materiKey] && deepLearningDatabase[materiKey][modelPembelajaran])
                        ? deepLearningDatabase[materiKey][modelPembelajaran]
                        : deepLearningDatabase[modelPembelajaran] || deepLearningDatabase["Direct Instruction"];

        const lkpdSpesifik = lkpdDatabase[materiInfo.key] || lkpdDatabase.default;
        const glosariumSpesifik = glosariumDatabase[materiInfo.key] || glosariumDatabase.default;
        const pustakaSpesifik = pustakaDatabase[materiInfo.key] || pustakaDatabase.default;
        const saranaSpesifik = saranaDatabase[materiInfo.key] || saranaDatabase.default;
        
        let kegiatanHTML = '';
        for (let i = 0; i < jumlahPertemuan; i++) {
            const pertemuanKe = i + 1;
            const meetingKeys = Object.keys(modelInti);
            const planKey = meetingKeys.includes(pertemuanKe.toString()) ? pertemuanKe.toString() : meetingKeys[meetingKeys.length - 1];
            const intiItems = modelInti[planKey] || [{ text: "Guru memfasilitasi latihan {materiSpesifik} sesuai tujuan.", label: "Mindful" }];
            
            const pertanyaanPemantikPertemuan = content.pertanyaan[i % content.pertanyaan.length];

            const pendahuluanItems = [
                "Guru membuka pelajaran dengan salam, doa, dan presensi.",
                `Guru melakukan apersepsi dan mengajukan pertanyaan pemantik: "<i>${pertanyaanPemantikPertemuan.replace(/{placeholder}/g, fokusMateri.toLowerCase())}</i>"`,
                `Guru menyampaikan tujuan pembelajaran pertemuan ini.`,
                "Siswa melakukan pemanasan dinamis yang relevan dengan materi dalam bentuk permainan."
            ];
            
            const penutupItems = [
                "Siswa melakukan pendinginan dan peregangan statis untuk mengembalikan kondisi tubuh.",
                "Guru dan siswa melakukan refleksi bersama: 'Apa tantangan terbesar hari ini?' dan 'Apa yang berhasil kita capai?'.",
                "Guru memberikan apresiasi (pujian/tepuk tangan) kepada semua siswa atas semangat belajarnya.",
                `Guru menutup pelajaran dengan motivasi: "<i>${quotes[i % quotes.length]}</i>", dan doa.`
            ];

            kegiatanHTML += `
                <h4>Pertemuan Ke-${pertemuanKe}</h4>
                <p><strong>a. Kegiatan Pendahuluan (${menitPendahuluan} Menit):</strong></p>
                <ol>${pendahuluanItems.map(item => `<li>${item}</li>`).join('')}</ol>
                <p><strong>b. Kegiatan Inti (${menitInti} Menit):</strong></p>
                <ol>${intiItems.map(item => `<li>${item.text.replace(/{materiSpesifik}/g, `<strong>${fokusMateri}</strong>`)} <strong>(${item.label})</strong></li>`).join('')}</ol>
                <p><strong>c. Kegiatan Penutup (${menitPenutup} Menit):</strong></p>
                <ol>${penutupItems.map(item => `<li>${item}</li>`).join('')}</ol>
            `;
        }

        const signatureTableHTML = `<table style="width: 100%; border-collapse: collapse; margin-top: 4rem; page-break-inside: avoid; border: none;"><tbody><tr><td style="width: 50%; text-align: left; vertical-align: top; border: none; padding: 0;">Mengetahui,<br>Kepala Sekolah<br><br><br><br><strong><u>${kepsekNama}</u></strong><br>NIP. ${kepsekNip}</td><td style="width: 50%; text-align: left; vertical-align: top; border: none; padding: 0;">${lokasiTtd}, ${tanggalTtd}<br>Guru Mata Pelajaran<br><br><br><br><strong><u>${namaPenyusun}</u></strong><br>NIP. ${guruNip}</td></tr></tbody></table>`;
        const generatedTujuanHTML = generateTujuanPembelajaran(elemenCP, fase, modelPembelajaran, fokusMateri, materiInfo.nama);
        const generatedAlurHTML = generateAlurTujuanPembelajaran(modelPembelajaran, fokusMateri);
        const pemahamanBermaknaHTML = `<p>${content.pemahaman.replace(/{placeholder}/g, fokusMateri.toLowerCase())}</p>`;
        const generatedPertanyaanHTML = `<ul>${content.pertanyaan.map(p => `<li>${p.replace(/{placeholder}/g, fokusMateri.toLowerCase())}</li>`).join('')}</ul>`;
        
        const profilLulusan = generateProfilLulusan(elemenCP);
        const profilLulusanList = `<ul>${profilLulusan.map(p => `<li><strong>${p}:</strong> ${profilLulusanDatabase.desc[p] || ''}</li>`).join('')}</ul>`;
        const profilLulusanHTML = `<p>Aktivitas ini dirancang untuk menumbuhkembangkan 8 Dimensi Profil Lulusan Pembelajaran Mendalam:</p>${profilLulusanList}`;

        const saranaHTML = `<p><strong>Media Pembelajaran:</strong></p><ul>${saranaSpesifik.media.map(m => `<li>${m}</li>`).join('')}</ul><p><strong>Alat dan Bahan:</strong></p><ul>${saranaSpesifik.alat.map(a => `<li>${a}</li>`).join('')}</ul>`;
        const lkpdHTML = `<h4>a. ${lkpdSpesifik.title}</h4><p><strong>Tujuan:</strong> ${lkpdSpesifik.tujuan.replace('keterampilan spesifik', `<strong>${fokusMateri}</strong>`)}</p><p><strong>Alat & Bahan:</strong> ${lkpdSpesifik.alat.join(', ')}</p><p><strong>Langkah Kerja:</strong></p><ol>${lkpdSpesifik.langkah.map(l => `<li>${l}</li>`).join('')}</ol>${lkpdSpesifik.tabel.replace(/<td><\/td><td><\/td>/, `<td></td><td>${fokusMateri}</td>`)}`;
        const bahanBacaanHTML = `<p>- Buku Teks PJOK Kurikulum Merdeka (dapat diakses di <a href="https://buku.kemdikbud.go.id/katalog" target="_blank" class="text-indigo-600 hover:underline">buku.kemdikbud.go.id</a>)<br>- Video pembelajaran relevan di YouTube (Cari dengan kata kunci: "cara melakukan ${fokusMateri.toLowerCase()}")</p>`;
        const glosariumHTML = Object.entries(glosariumSpesifik).map(([istilah, definisi]) => `<p><strong>${istilah}:</strong> ${definisi}</p>`).join('');
        const pustakaHTML = pustakaSpesifik.map(sumber => `<p>- ${sumber}</p>`).join('');
        const kerangkaData = kerangkaDatabase[modelPembelajaran] || kerangkaDatabase.default;
        const kerangkaPMHTML = `<div class="deep-learning-box">
            <p>Modul ini dirancang dengan kerangka Pembelajaran Mendalam (PM) yang mengintegrasikan 4 komponen utama, disesuaikan dengan model <strong>${modelPembelajaran}</strong>:</p>
            <ul>
                <li><strong>Praktik Pedagogis:</strong> ${kerangkaData.praktik}</li>
                <li><strong>Lingkungan Pembelajaran:</strong> ${kerangkaData.lingkungan}</li>
                <li><strong>Kemitraan Pembelajaran:</strong> ${kerangkaData.kemitraan}</li>
                <li><strong>Pemanfaatan Teknologi Digital:</strong> ${kerangkaData.teknologi}</li>
            </ul>
        </div>`;
        
        const assessableDimensions = profilLulusan.filter(p => !['Keimanan dan Ketakwaan kepada Tuhan YME', 'Kemandirian'].includes(p));
        const sikapTitle = assessableDimensions.slice(0, 2).join(', ');

        const asesmenHTML = `<p>Penilaian mencakup tiga aspek: <strong>diagnostik</strong> (awal), <strong>formatif</strong> (proses), dan <strong>sumatif</strong> (akhir).</p><h4>a. Rubrik Penilaian Unjuk Kerja (Psikomotor & Kognitif)</h4><table><thead><tr><th>Skor</th><th>Deskripsi Kriteria</th></tr></thead><tbody><tr><td>4 (Sangat Mahir)</td><td>Mampu menerapkan/menganalisis/merancang secara konsisten, efektif, dan mandiri dalam berbagai situasi.</td></tr><tr><td>3 (Mahir)</td><td>Mampu menerapkan/menganalisis/merancang dengan baik dalam situasi yang familiar, terkadang butuh sedikit bimbingan.</td></tr><tr><td>2 (Cukup)</td><td>Mampu melakukan teknik/konsep dasar, namun kesulitan dalam penerapan yang kompleks.</td></tr><tr><td>1 (Perlu Bimbingan)</td><td>Masih memerlukan bimbingan intensif untuk melakukan konsep dasar.</td></tr></tbody></table><h4>b. Rubrik Penilaian Sikap (${sikapTitle})</h4><table><thead><tr><th>Predikat</th><th>Deskripsi Kriteria</th></tr></thead><tbody><tr><td>Sangat Berkembang</td><td>Selalu proaktif berkolaborasi, memberikan umpan balik konstruktif, dan konsisten mencoba berbagai solusi untuk tantangan.</td></tr><tr><td>Berkembang</td><td>Berpartisipasi aktif dalam kolaborasi dan diskusi, mampu memberikan ide atau solusi.</td></tr><tr><td>Mulai Berkembang</td><td>Ikut berpartisipasi namun cenderung pasif, memerlukan dorongan untuk memberikan ide.</td></tr></tbody></table>`;

        const modulHTML = `
            <h1 class="text-2xl font-bold text-center mb-6">MODUL AJAR PJOK</h1>
            <h2 class="text-xl font-semibold text-center mb-8">${materiJudul.toUpperCase()}</h2>
            <h2>A. INFORMASI UMUM</h2>
            <table><tbody><tr><td class="font-semibold p-2 w-1/3">Nama Penyusun</td><td class="p-2">: ${namaPenyusun}</td></tr><tr><td class="font-semibold p-2 w-1/3">Institusi</td><td class="p-2">: ${institusi}</td></tr><tr><td class="font-semibold p-2 w-1/3">Tahun Ajaran</td><td class="p-2">: ${tahunAjaran}</td></tr><tr><td class="font-semibold p-2 w-1/3">Jenjang Sekolah</td><td class="p-2">: SMA/SMK/MA</td></tr><tr><td class="font-semibold p-2 w-1/3">Fase / Kelas</td><td class="p-2">: ${fase} / Kelas ${kelas}</td></tr><tr><td class="font-semibold p-2 w-1/3">Semester</td><td class="p-2">: ${semester}</td></tr><tr><td class="font-semibold p-2 w-1/3">Elemen</td><td class="p-2">: ${elemenCP}</td></tr><tr><td class="font-semibold p-2 w-1/3">Capaian Pembelajaran</td><td class="p-2">: ${capaianPembelajaran}</td></tr><tr><td class="font-semibold p-2 w-1/3">Alokasi Waktu</td><td class="p-2">: ${alokasiWaktuText}</td></tr></tbody></table>
            <h2>B. KOMPONEN INTI</h2>
            <h3>1. Tujuan Pembelajaran (TP)</h3>${generatedTujuanHTML}
            <h3>2. Alur Tujuan Pembelajaran (ATP)</h3>${generatedAlurHTML}
            <h3>3. Pemahaman Bermakna</h3>${pemahamanBermaknaHTML}
            <h3>4. Pertanyaan Pemantik</h3>${generatedPertanyaanHTML}
            <h3>5. Pendekatan & Model Pembelajaran</h3><p>Modul ini menggunakan <strong>Pendekatan Pembelajaran Mendalam (Deep Learning)</strong> dengan model pembelajaran <strong>${modelPembelajaran}</strong>.</p>${kerangkaPMHTML}
            <h3>6. 8 Dimensi Profil Lulusan Pembelajaran Mendalam</h3>${profilLulusanHTML}
            <h3>7. Sarana dan Prasarana</h3>${saranaHTML}
            <h3>8. Kegiatan Pembelajaran (Rincian per Pertemuan)</h3>${kegiatanHTML}
            <h3>9. Asesmen / Penilaian</h3>${asesmenHTML}
            <h2>C. LAMPIRAN</h2>
            <h3>1. Lembar Kerja Peserta Didik (LKPD)</h3>${lkpdHTML}
            <h3>2. Bahan Bacaan Guru dan Peserta Didik</h3>${bahanBacaanHTML}
            <h3>3. Glosarium</h3>${glosariumHTML}
            <h3>4. Daftar Pustaka</h3>${pustakaHTML}
            ${signatureTableHTML}`;
        
        placeholder.classList.add('hidden');
        outputContainer.innerHTML = modulHTML;
        actionButtons.classList.remove('hidden');
        geminiFeaturesSection.classList.remove('hidden');
    });
}

// --- Logika Tombol Lain ---
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const contentToCopy = document.getElementById('output-modul').innerHTML;
        const plainText = document.getElementById('output-modul').innerText;
        
        const listener = function(ev) {
            ev.preventDefault();
            ev.clipboardData.setData('text/html', contentToCopy);
            ev.clipboardData.setData('text/plain', plainText);
        };

        document.addEventListener('copy', listener);
        try {
            document.execCommand('copy');
            copyBtn.innerText = 'Format berhasil disalin!';
        } catch (e) {
            console.error('Gagal menyalin:', e);
            copyBtn.innerText = 'Gagal Menyalin';
        } finally {
            document.removeEventListener('copy', listener);
        }

        setTimeout(() => {
            copyBtn.innerText = 'Salin Teks & Format';
        }, 2000);
    });
}

if (backBtn) {
    backBtn.addEventListener('click', () => {
        outputContainer.innerHTML = '';
        placeholder.classList.remove('hidden');
        actionButtons.classList.add('hidden');
        geminiFeaturesSection.classList.add('hidden');
        document.getElementById('modul-form').reset();
        
        populateKelas();
        populateMateri();
        setDynamicDate();
    });
}
