// --- DATABASE (Berisi data-data untuk konten modul) ---
const capaianPerElemen = { 'Terampil Bergerak': { A: "Peserta didik mempraktikkan keterampilan gerak fundamental dan menerapkannya dalam berbagai situasi gerak yang berbeda. Peserta didik mengeksplorasi berbagai cara menggerakkan tubuh. Peserta didik memanipulasi objek dengan bagian tubuh dan dalam ruang yang berbeda, serta menyimpulkan efektivitasnya.", B: "Peserta didik menghaluskan keterampilan gerak fundamental dan menerapkannya dalam situasi gerak yang baru. Peserta didik menerapkan dan menyesuaikan strategi gerak untuk mendapatkan capaian keterampilan gerak. Peserta didik memeragakan konsep gerak yang dapat diterapkan dalam rangkaian gerak.", C: "Peserta didik menyesuaikan dan memodifikasi keterampilan gerak melintasi berbagai situasi gerak. Peserta didik mentransfer strategi gerak yang sudah dikuasai ke dalam berbagai situasi gerak yang berbeda. Peserta didik menginvestigasi berbagai konsep gerak yang dapat diterapkan untuk meningkatkan capaian keterampilan gerak." }, 'Belajar melalui Gerak': { A: "Peserta didik mentaati dan menerapkan peraturan untuk mengembangkan fair play di dalam berbagai aktivitas jasmani. Peserta didik menerapkan strategi kolaborasi ketika berpartisipasi dalam aktivitas jasmani.", B: "Peserta didik menerapkan strategi gerak sederhana dan memecahkan masalah gerak. Peserta didik menyusun bersama dan menerapkan peraturan untuk mengembangkan fair play ketika berpartisipasi atau merancang aktivitas jasmani. Peserta didik mempertunjukkan berbagai peran dengan cara yang terhormat untuk mendapatkan keberhasilan capaian di dalam aktivitas gerak kelompok atau tim.", C: "Peserta didik memprediksi dan menguji efektivitas penerapan strategi gerak dalam berbagai situasi gerak. Peserta didik merancang dan menguji peraturan alternatif dan modifikasi permainan untuk mendukung fair play dan partisipasi inklusif. Peserta didik berpartisipasi secara positif dalam kelompok atau tim dengan memberi kontribusi pada aktivitas kelompok, mendorong orang lain dan menegosiasikan peran dan tanggung jawab." }, 'Bergaya Hidup Aktif': { A: "Peserta didik berpartisipasi di dalam berbagai aktivitas jasmani dan mengeksplorasi manfaatnya.", B: "Peserta didik berpartisipasi dalam berbagai aktivitas jasmani dan mengenali faktor-faktor yang menyebabkan aktivitas jasmani menyenangkan.", C: "Peserta didik berpartisipasi dalam aktivitas jasmani untuk menggambarkan pengaruh aktivitas jasmani yang teratur terhadap kesehatan. Peserta didik berpartisipasi dalam aktivitas jasmani di luar ruang dan/atau lingkungan alam dan menggambarkan faktor-faktor yang mempengaruhi partisipasi, baik secara pribadi maupun kelompok. Peserta didik mengeksplorasi rekomendasi aktivitas jasmani serta pencegahan perilaku sedenter dan membahas strategi pencapaiannya." }, 'Memilih Hidup yang Menyehatkan': { A: "Peserta didik mengenali gaya hidup aktif dan sehat, manfaat komponen makanan bergizi seimbang dan informasi gizi pada produk makanan yang berdampak pada kesehatan, situasi dan potensi yang berisiko terhadap kesehatan dan keselamatan dan strategi mencari bantuan kepada orang dewasa terpercaya.", B: "Peserta didik mengenali risiko kesehatan akibat gaya hidup dan berbagai aktivitas jasmani untuk pencegahannya, mengeksplorasi pola makan sehat dan bergizi seimbang sesuai rekomendasi kesehatan untuk menunjang aktivitas sehari-hari, serta mempraktikkan penanganan cedera ringan sesuai pemahaman tentang prinsip pertolongan pertama.", C: "Peserta didik mengidentifikasi risiko kesehatan akibat gaya hidup dan pencegahan melalui aktivitas jasmani berdasarkan rekomendasi otoritas kesehatan, memilih makanan sehat untuk menunjang aktivitas jasmani berdasarkan informasi kandungan gizi pada makanan, dan mempraktikkan penanganan cedera sedang sesuai pemahaman tentang prinsip pertolongan pertama." } };
const materiByKelas = { '1': { 'lokomotor-1': { text: 'Aktivitas Pola Gerak Dasar Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'nonlokomotor-1': { text: 'Aktivitas Pola Gerak Dasar Nonlokomotor', elemenTerkait: 'Terampil Bergerak'}, 'manipulatif-1': { text: 'Aktivitas Pola Gerak Dasar Manipulatif', elemenTerkait: 'Terampil Bergerak'}, 'senam-1': { text: 'Aktivitas Senam', elemenTerkait: 'Terampil Bergerak'}, 'ritmik-1': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak'}, 'air-1': { text: 'Aktivitas Pengenalan Air', elemenTerkait: 'Terampil Bergerak'}, 'kebugaran-1': { text: 'Aktivitas Kebugaran Jasmani', elemenTerkait: 'Bergaya Hidup Aktif' }, 'hidup-sehat-1': { text: 'Mengenal Gaya Hidup Sehat', elemenTerkait: 'Memilih Hidup yang Menyehatkan'} }, '2': { 'lokomotor-2': { text: 'Aktivitas Pola Gerak Dasar Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'nonlokomotor-2': { text: 'Aktivitas Pola Gerak Dasar Nonlokomotor', elemenTerkait: 'Terampil Bergerak'}, 'manipulatif-2': { text: 'Aktivitas Pola Gerak Dasar Manipulatif', elemenTerkait: 'Terampil Bergerak'}, 'senam-2': { text: 'Aktivitas Gerak Dominan Senam', elemenTerkait: 'Terampil Bergerak'}, 'ritmik-2': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak'}, 'air-2': { text: 'Aktivitas Pengenalan Air', elemenTerkait: 'Terampil Bergerak'}, 'kebugaran-2': { text: 'Aktivitas Kebugaran Jasmani', elemenTerkait: 'Bergaya Hidup Aktif' }, 'fair-play-2': { text: 'Menerapkan Fair Play', elemenTerkait: 'Belajar melalui Gerak'} }, '3': { 'variasi-lokomotor-3': { text: 'Aktivitas Variasi Gerak Dasar Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'variasi-nonlokomotor-3': { text: 'Aktivitas Variasi Gerak Dasar Nonlokomotor', elemenTerkait: 'Terampil Bergerak'}, 'variasi-manipulatif-3': { text: 'Aktivitas Variasi Gerak Dasar Manipulatif', elemenTerkait: 'Terampil Bergerak'}, 'senam-3': { text: 'Aktivitas Gerak Dominan Senam', elemenTerkait: 'Terampil Bergerak'}, 'ritmik-3': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak'}, 'kebugaran-3': { text: 'Aktivitas Kebugaran untuk Kesehatan', elemenTerkait: 'Bergaya Hidup Aktif' }, 'makanan-bergizi-3': { text: 'Memilih Makanan Bergizi', elemenTerkait: 'Memilih Hidup yang Menyehatkan'} }, '4': { 'kombinasi-lokomotor-4': { text: 'Aktivitas Kombinasi Gerak Dasar Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'kombinasi-nonlokomotor-4': { text: 'Aktivitas Kombinasi Gerak Dasar Non-Lokomotor', elemenTerkait: 'Terampil Bergerak'}, 'kombinasi-manipulatif-4': { text: 'Aktivitas Kombinasi Gerak Dasar Manipulatif', elemenTerkait: 'Terampil Bergerak'}, 'senam-4': { text: 'Aktivitas Senam Lantai', elemenTerkait: 'Terampil Bergerak'}, 'ritmik-4': { text: 'Aktivitas Gerak Berirama', elemenTerkait: 'Terampil Bergerak'}, 'cedera-ringan-4': { text: 'Penanganan Cedera Ringan (P3K)', elemenTerkait: 'Memilih Hidup yang Menyehatkan'}, 'strategi-sederhana-4': { text: 'Strategi Gerak Sederhana', elemenTerkait: 'Belajar melalui Gerak' } }, '5': { 'kombinasi-invasi-5': { text: 'Kombinasi Gerak Spesifik Permainan Invasi', elemenTerkait: 'Terampil Bergerak' }, 'kombinasi-net-5': { text: 'Kombinasi Gerak Spesifik Permainan Net', elemenTerkait: 'Terampil Bergerak' }, 'kombinasi-lapangan-5': { text: 'Kombinasi Gerak Spesifik Permainan Lapangan', elemenTerkait: 'Terampil Bergerak' }, 'kebugaran-keterampilan-5': { text: 'Aktivitas Kebugaran Jasmani Terkait Keterampilan', elemenTerkait: 'Bergaya Hidup Aktif' }, 'modifikasi-permainan-5': { text: 'Merancang Modifikasi Permainan', elemenTerkait: 'Belajar melalui Gerak' }, 'senam-ketangkasan-5': { text: 'Senam Ketangkasan Sederhana', elemenTerkait: 'Terampil Bergerak' } }, '6': { 'koordinasi-invasi-6': { text: 'Koordinasi Gerak Spesifik Permainan Invasi', elemenTerkait: 'Terampil Bergerak' }, 'koordinasi-net-6': { text: 'Koordinasi Gerak Spesifik Permainan Net', elemenTerkait: 'Terampil Bergerak' }, 'koordinasi-lapangan-6': { text: 'Koordinasi Gerak Spesifik Permainan Lapangan', elemenTerkait: 'Terampil Bergerak' }, 'kebugaran-evaluasi-6': { text: 'Evaluasi Tingkat Kebugaran', elemenTerkait: 'Bergaya Hidup Aktif' }, 'prediksi-strategi-6': { text: 'Memprediksi dan Menguji Strategi', elemenTerkait: 'Belajar melalui Gerak' }, 'kesehatan-6': { text: 'Promosi Kesehatan melalui Aktivitas Jasmani', elemenTerkait: 'Memilih Hidup yang Menyehatkan' } } };
const modelPembelajaranDatabase = { 'Direct Instruction': { pendekatan: "Berpusat pada Guru (Teacher-Centered)", metode: ["Demonstrasi", "Latihan Terbimbing (Drill)", "Ceramah", "Imitasi"], deskripsi: "penjelasan dan peragaan langsung dari guru, diikuti oleh latihan yang terstruktur oleh siswa." }, 'Tactical Games Model': { pendekatan: "Berpusat pada Siswa (Student-Centered) dan Konstruktivis", metode: ["Permainan Taktis", "Diskusi Terbimbing", "Tanya Jawab", "Pemecahan Masalah"], deskripsi: "pengembangan pemahaman taktis dan pengambilan keputusan dalam konteks permainan." }, 'Cooperative Learning': { pendekatan: "Pembelajaran Kolaboratif dan Sosial", metode: ["Kerja Kelompok", "Jigsaw", "Think-Pair-Share", "Turnamen Tim"], deskripsi: "kerjasama siswa dalam kelompok kecil untuk mencapai tujuan belajar bersama." }, 'Project-Based Learning (PjBL)': { pendekatan: "Pembelajaran Berbasis Proyek dan Konstruktivis", metode: ["Proyek", "Penemuan (Discovery)", "Diskusi Kelompok", "Presentasi"], deskripsi: "pengorganisasian pembelajaran di sekitar proyek yang kompleks dan relevan bagi siswa." }, 'Problem-Based Learning (PBL)': { pendekatan: "Pembelajaran Berbasis Masalah dan Kontekstual", metode: ["Studi Kasus", "Pemecahan Masalah", "Diskusi", "Riset Mandiri"], deskripsi: "penyajian masalah nyata yang mendorong siswa untuk belajar secara mandiri." }, 'Inquiry Learning': { pendekatan: "Pembelajaran Penemuan (Inquiry-Based) dan Berpusat pada Siswa", metode: ["Eksplorasi", "Eksperimen", "Tanya Jawab", "Penemuan Terbimbing"], deskripsi: "siswa didorong untuk mengajukan pertanyaan dan menyelidiki untuk menemukan jawaban." } };
const deepLearningFrameworkDatabase = { A: { lingkungan: "Menciptakan lingkungan belajar yang aman, positif, dan menyenangkan, di mana siswa merasa nyaman untuk bergerak dan bereksplorasi tanpa takut membuat kesalahan.", kemitraan: "Membangun hubungan yang hangat antara guru dan siswa, serta melibatkan orang tua melalui komunikasi sederhana tentang aktivitas anak di sekolah.", teknologi: "Memanfaatkan teknologi digital sederhana seperti pemutar musik untuk mengiringi gerak berirama atau menampilkan video pendek sebagai contoh gerakan yang menarik." }, B: { lingkungan: "Mendesain lingkungan belajar yang mendorong kerja sama dan interaksi positif antar siswa dalam kelompok-kelompok kecil.", kemitraan: "Mengembangkan kemitraan antar siswa melalui tugas-tugas berpasangan atau kelompok, di mana mereka dapat saling memberikan umpan balik sederhana.", teknologi: "Menggunakan video tutorial sebagai referensi untuk variasi gerakan dan stopwatch digital untuk permainan yang melibatkan waktu." }, C: { lingkungan: "Menyediakan lingkungan belajar yang menantang namun tetap suportif, memungkinkan siswa untuk menerapkan taktik dan strategi dalam situasi permainan yang kompetitif secara sehat.", kemitraan: "Mendorong kemitraan yang lebih matang di mana siswa dapat mengambil peran sebagai pemimpin, wasit, atau pencatat skor dalam tim mereka (tutor sebaya).", teknologi: "Memperkenalkan penggunaan aplikasi sederhana untuk mencatat skor atau menggambar strategi permainan sebagai pengayaan pembelajaran." } };
const kegiatanIntiDatabase = { 'lokomotor-1': { 'Direct Instruction': [ ["Guru memberikan contoh gerak dasar berjalan dengan benar (pandangan lurus, ayunan tangan). <span class='principle-tag'>(Mindful)</span>", "Siswa secara klasikal menirukan gerak berjalan di tempat, kemudian maju. <span class='principle-tag'>(Joyful)</span>", "Guru memberikan contoh gerak dasar berlari dengan benar (lutut diangkat, tangan diayun). <span class='principle-tag'>(Mindful)</span>", "Siswa mencoba berlari pelan mengikuti garis lurus. <span class='principle-tag'>(Joyful)</span>"], ["Guru mendemonstrasikan variasi berjalan (berjalan jinjit, berjalan mundur). <span class='principle-tag'>(Mindful)</span>", "Siswa bermain 'Ikuti Pemimpin', di mana pemimpin melakukan variasi berjalan dan yang lain mengikuti. <span class='principle-tag'>(Joyful)</span>", "Guru mendemonstrasikan variasi lari (lari zig-zag, lari angkat paha). <span class='principle-tag'>(Mindful)</span>", "Siswa berlatih lari zig-zag melewati cone. <span class='principle-tag'>(Meaningful)</span>"], ["Guru menjelaskan permainan 'Kucing dan Tikus' yang mengombinasikan berjalan dan berlari. <span class='principle-tag'>(Meaningful)</span>", "Siswa bermain 'Kucing dan Tikus' dalam kelompok kecil. <span class='principle-tag'>(Joyful)</span>", "Guru memberikan tantangan: lari cepat ke garis finis, lalu berjalan santai kembali ke start. <span class='principle-tag'>(Mindful)</span>", "Siswa melakukan pendinginan dengan berjalan pelan sambil mengatur napas. <span class='principle-tag'>(Mindful)</span>"] ] }, default: { 'Direct Instruction': [ ["Guru mendemonstrasikan keterampilan dasar {materi_spesifik} dengan pemecahan gerakan (bagian per bagian). <span class='principle-tag'>(Mindful)</span>", "Siswa meniru setiap bagian gerakan secara klasikal dan perlahan. <span class='principle-tag'>(Joyful)</span>", "Guru memberikan umpan balik langsung untuk postur dan bentuk dasar. <span class='principle-tag'>(Meaningful)</span>"], ["Guru menggabungkan bagian-bagian gerakan menjadi satu alur utuh. <span class='principle-tag'>(Mindful)</span>", "Siswa berlatih melakukan gerakan {materi_spesifik} secara utuh dengan repetisi. <span class='principle-tag'>(Joyful)</span>", "Guru memperkenalkan variasi sederhana (misal: mengubah kecepatan atau arah) pada gerakan {materi_spesifik}. <span class='principle-tag'>(Meaningful)</span>"], ["Siswa mempraktikkan gerakan {materi_spesifik} dalam rangkaian gerak sederhana (misal: lari, lalu lakukan {materi_spesifik}). <span class='principle-tag'>(Meaningful)</span>", "Siswa melakukan latihan berpasangan, saling memberikan umpan balik sederhana. <span class='principle-tag'>(Joyful)</span>", "Guru melakukan evaluasi formatif melalui pengamatan dan memberikan koreksi akhir. <span class='principle-tag'>(Mindful)</span>"] ], 'Tactical Games Model': [ ["Guru memperkenalkan permainan sederhana yang dimodifikasi untuk menyoroti masalah taktis terkait {materi_spesifik}. <span class='principle-tag'>(Joyful)</span>", "Siswa bermain game tersebut dan mulai menyadari tantangannya (misal: 'sulit sekali mencetak skor'). <span class='principle-tag'>(Meaningful)</span>", "Diskusi singkat dipandu guru: 'Apa yang membuat kita sulit berhasil dalam permainan tadi?'. <span class='principle-tag'>(Mindful)</span>"], ["Guru mengajukan pertanyaan: 'Bagaimana jika kita mencoba {materi_spesifik} untuk menyelesaikan masalah tadi?'. <span class='principle-tag'>(Meaningful)</span>", "Siswa berlatih keterampilan {materi_spesifik} secara terpisah untuk membangun kepercayaan diri. <span class='principle-tag'>(Mindful)</span>", "Siswa memainkan kembali game awal, kini dengan instruksi untuk mencoba menerapkan {materi_spesifik}. <span class='principle-tag'>(Joyful)</span>"], ["Guru memodifikasi permainan menjadi sedikit lebih kompleks (misal: menambah jumlah pemain atau memperkecil area). <span class='principle-tag'>(Joyful)</span>", "Siswa bermain dengan fokus menerapkan strategi dan {materi_spesifik} yang telah dipelajari. <span class='principle-tag'>(Mindful)</span>", "Refleksi akhir: 'Kapan waktu yang tepat untuk menggunakan {materi_spesifik} dalam permainan?'. <span class='principle-tag'>(Meaningful)</span>"] ], 'Cooperative Learning': [ ["Siswa dibagi dalam kelompok kecil dan diberikan tujuan bersama yang sederhana terkait {materi_spesifik}. <span class='principle-tag'>(Joyful)</span>", "Setiap kelompok berdiskusi tentang cara terbaik untuk mencapai tujuan tersebut. <span class='principle-tag'>(Meaningful)</span>", "Siswa berlatih {materi_spesifik} dalam kelompok, saling membantu dan menyemangati. <span class='principle-tag'>(Mindful)</span>"], ["Guru memberikan peran dalam setiap kelompok (misal: pengamat, pemberi semangat, pencatat waktu). <span class='principle-tag'>(Meaningful)</span>", "Kelompok menjalankan 'tantangan' yang lebih kompleks yang membutuhkan semua anggota berkontribusi menggunakan {materi_spesifik}. <span class='principle-tag'>(Joyful)</span>", "Pengamat dari setiap kelompok berbagi apa yang sudah baik dan apa yang perlu ditingkatkan. <span class='principle-tag'>(Mindful)</span>"], ["Guru menyelenggarakan turnamen antar kelompok, di mana poin didasarkan pada kerjasama dan juga hasil. <span class='principle-tag'>(Joyful)</span>", "Setiap kelompok menyusun strategi mereka sebelum bertanding. <span class='principle-tag'>(Mindful)</span>", "Refleksi kelompok tentang pentingnya kerjasama untuk keberhasilan dalam aktivitas {materi}. <span class='principle-tag'>(Meaningful)</span>"] ], 'Project-Based Learning (PjBL)': [ ["Guru memperkenalkan proyek: 'Mari kita ciptakan sebuah permainan baru yang menggunakan {materi_spesifik}!'. <span class='principle-tag'>(Meaningful)</span>", "Siswa dibagi dalam kelompok dan melakukan curah pendapat tentang ide-ide permainan. <span class='principle-tag'>(Joyful)</span>", "Setiap kelompok mulai merancang aturan dasar dan sketsa lapangan permainan mereka. <span class='principle-tag'>(Mindful)</span>"], ["Sesi 'Skill Lab': Siswa berlatih dan mengasah keterampilan {materi_spesifik} yang akan menjadi inti dari permainan mereka. <span class='principle-tag'>(Mindful)</span>", "Kelompok melanjutkan pengembangan proyek: membuat alat sederhana (jika perlu) dan menuliskan aturan main secara detail. <span class='principle-tag'>(Meaningful)</span>", "Setiap kelompok melakukan uji coba internal untuk permainan mereka dan melakukan perbaikan. <span class='principle-tag'>(Joyful)</span>"], ["Hari presentasi: Setiap kelompok mendemonstrasikan permainan mereka kepada kelompok lain. <span class='principle-tag'>(Joyful)</span>", "Kelompok lain mencoba bermain game yang dibuat dan memberikan masukan yang membangun. <span class='princple-tag'>(Meaningful)</span>", "Guru memfasilitasi diskusi tentang kreativitas, aturan, dan kerjasama yang ditunjukkan setiap kelompok. <span class='principle-tag'>(Mindful)</span>"] ], 'Problem-Based Learning (PBL)': [ ["Guru menyajikan sebuah masalah nyata dalam bentuk video atau cerita: 'Tim kita selalu gagal melewati pertahanan lawan. Apa yang bisa kita lakukan?'. <span class='principle-tag'>(Meaningful)</span>", "Siswa dalam kelompok menganalisis masalah dan mengidentifikasi apa yang perlu mereka pelajari (keterampilan {materi_spesifik}). <span class='principle-tag'>(Mindful)</span>", "Kelompok mulai mencari informasi awal atau mencoba solusi hipotesis pertama. <span class='principle-tag'>(Joyful)</span>"], ["Siswa melakukan riset atau latihan terfokus pada {materi_spesifik} sebagai solusi potensial. <span class='principle-tag'>(Mindful)</span>", "Kelompok berdiskusi dan merumuskan beberapa strategi solusi menggunakan keterampilan {materi_spesifik}. <span class='principle-tag'>(Meaningful)</span>", "Siswa menguji strategi mereka dalam simulasi permainan kecil. <span class='principle-tag'>(Joyful)</span>"], ["Setiap kelompok mendemonstrasikan solusi paling efektif yang mereka temukan di depan kelas. <span class='principle-tag'>(Joyful)</span>", "Siswa menjelaskan alasan mengapa solusi mereka bekerja, menghubungkannya dengan konsep {materi}. <span class='principle-tag'>(Meaningful)</span>", "Diskusi kelas untuk membandingkan berbagai solusi dan menyimpulkan prinsip-prinsip kunci. <span class='principle-tag'>(Mindful)</span>"] ], 'Inquiry Learning': [ ["Guru mengajukan pertanyaan terbuka: 'Ada berapa cara berbeda kita bisa melakukan {materi_spesifik}?'. <span class='principle-tag'>(Meaningful)</span>", "Siswa diberi waktu untuk bereksplorasi secara bebas (sendiri atau berpasangan) untuk menemukan berbagai cara. <span class='principle-tag'>(Joyful)</span>", "Beberapa siswa diminta untuk menunjukkan penemuan mereka tanpa ada penilaian benar atau salah. <span class='principle-tag'>(Mindful)</span>"], ["Guru mempersempit pertanyaan: 'Dari semua cara tadi, mana yang paling efektif untuk {tujuan spesifik, misal: akurat/cepat}? Mengapa?'. <span class='principle-tag'>(Meaningful)</span>", "Siswa melakukan 'eksperimen' terstruktur untuk membandingkan beberapa teknik yang telah mereka temukan. <span class='principle-tag'>(Joyful)</span>", "Siswa mencatat atau mengingat temuan mereka tentang teknik yang paling efektif. <span class='principle-tag'>(Mindful)</span>"], ["Siswa berbagi kesimpulan dari eksperimen mereka dalam kelompok yang lebih besar. <span class='principle-tag'>(Meaningful)</span>", "Kelas bersama-sama merumuskan 'prinsip' atau 'teknik terbaik' untuk {materi_spesifik} berdasarkan bukti yang dikumpulkan. <span class='principle-tag'>(Mindful)</span>", "Siswa mencoba mempraktikkan teknik terbaik yang telah disepakati bersama. <span class='principle-tag'>(Joyful)</span>"] ] } };
const contentDatabase = { default: { pemahaman: "Dengan mampu melakukan gerak dasar secara benar, aku bisa bermain dengan lebih seru, aman, dan menyehatkan badan.", asesmen: { diagnostik: "Tanya jawab singkat atau permainan sederhana untuk melihat kemampuan awal siswa terkait {placeholder}.", formatif: "Observasi partisipasi aktif, semangat, dan kemauan siswa untuk mencoba selama kegiatan inti berlangsung.", sumatif: "Penilaian unjuk kerja kemampuan melakukan gerak dasar {placeholder} dan penilaian sikap.", rubrikPenilaian: `<h4>a. Rubrik Penilaian Unjuk Kerja (Psikomotor)</h4><table class="lkpd-table"><thead><tr><th>Skor</th><th>Deskripsi Kriteria</th></tr></thead><tbody><tr><td>4 (Sangat Baik)</td><td>Mampu melakukan gerak dasar {placeholder} dengan benar dan konsisten tanpa bantuan.</td></tr><tr><td>3 (Baik)</td><td>Mampu melakukan gerak dasar {placeholder} dengan benar, namun terkadang masih perlu diingatkan.</td></tr><tr><td>2 (Cukup)</td><td>Mampu melakukan gerak dasar {placeholder} namun masih dengan bantuan atau contoh.</td></tr><tr><td>1 (Perlu Bimbingan)</td><td>Masih kesulitan dalam melakukan gerak dasar {placeholder}.</td></tr></tbody></table><h4>b. Rubrik Penilaian Sikap (Afektif)</h4><table class="lkpd-table"><thead><tr><th>Predikat</th><th>Deskripsi Kriteria (Kolaborasi, Kemandirian)</th></tr></thead><tbody><tr><td>Sangat Berkembang</td><td>Selalu proaktif berkolaborasi, bersemangat, dan menunjukkan sportivitas tinggi.</td></tr><tr><td>Berkembang</td><td>Berpartisipasi aktif dalam kolaborasi dan permainan, menunjukkan sportivitas.</td></tr><tr><td>Mulai Berkembang</td><td>Berpartisipasi namun cenderung pasif, sesekali perlu diingatkan untuk sportif.</td></tr></tbody></table><h4>c. Pedoman Perhitungan Nilai Akhir</h4><p>Nilai Akhir = (Skor Unjuk Kerja x 70%) + (Konversi Skor Sikap x 30%)</p>` } } };
const saranaDatabase = { default: { media: ["Video contoh gerakan dari YouTube Kids", "Gambar/poster urutan gerakan", "Musik ceria untuk pemanasan"], alat: ["Peralatan sesuai materi", "Cone/penanda", "Peluit", "Papan tulis/spidol"] }, 'lokomotor-1': { media: ["<a href='https://www.youtube.com/results?search_query=contoh+gerak+lokomotor+untuk+anak+sd' target='_blank'>Video contoh gerak lokomotor</a>", "Lagu 'Naik Kereta Api'"], alat: ["Cone berwarna-warni", "Tali rafia", "Simpai", "Peluit"] }, 'senam-6': { media: ["<a href='https://www.youtube.com/results?search_query=tutorial+senam+lantai+untuk+anak+sd' target='_blank'>Video tutorial senam lantai dasar</a>", "Gambar urutan gerakan guling depan"], alat: ["Matras senam", "Balok titian rendah", "Simpai", "Peluit"] } };
const glosariumDatabase = { 'default': { "Gerak Lokomotor": "Gerakan berpindah tempat, seperti berjalan, berlari, melompat.", "Gerak Non-lokomotor": "Gerakan yang dilakukan di tempat, tanpa berpindah, seperti mengayun, membungkuk.", "Gerak Manipulatif": "Gerakan yang melibatkan objek di luar tubuh, seperti melempar, menangkap, menendang bola.", "Koordinasi": "Kemampuan untuk melakukan gerakan dengan berbagai bagian tubuh secara efisien dan harmonis.", "Fair Play": "Sikap sportif, jujur, dan menghormati aturan serta lawan dalam bermain." }, 'lokomotor-1': { "Berjalan": "Gerak melangkahkan kaki secara bergantian dengan salah satu kaki selalu menyentuh tanah.", "Berlari": "Gerak melangkahkan kaki dengan kecepatan tinggi di mana ada saat tubuh melayang di udara." }, 'nonlokomotor-1': { "Membungkuk": "Gerakan menekuk tubuh bagian atas ke bawah atau ke samping.", "Mengayun": "Gerakan anggota tubuh (lengan atau kaki) seperti bandul jam." }, 'manipulatif-1': { "Melempar": "Gerakan menolak suatu objek dengan tangan menjauhi tubuh.", "Menangkap": "Gerakan menghentikan laju objek dengan tangan." }, 'senam-4': { "Senam Lantai": "Cabang senam yang gerakannya dilakukan di atas matras.", "Guling Depan": "Gerakan berguling ke depan dengan menggunakan bagian belakang tubuh, dimulai dari tengkuk.", "Keseimbangan Statis": "Kemampuan mempertahankan posisi tubuh dalam keadaan diam." }, 'kebugaran-3': { "Kebugaran Jasmani": "Kesanggupan tubuh untuk melakukan aktivitas tanpa mengalami kelelahan yang berarti.", "Daya Tahan": "Kemampuan tubuh untuk bekerja dalam waktu yang lama tanpa lelah." }, 'kombinasi-invasi-5': { "Permainan Invasi": "Jenis permainan yang tujuannya adalah menyerang wilayah lawan untuk mencetak skor, contoh: sepak bola, bola basket.", "Menggiring (Dribbling)": "Gerak memantul-mantulkan bola (basket) atau membawanya dengan kaki (sepak bola) sambil bergerak.", "Passing": "Gerak mengoper atau memberikan bola kepada teman satu tim." }, 'kombinasi-net-5': { "Permainan Net": "Jenis permainan yang menggunakan net sebagai pemisah, contoh: bulu tangkis, voli.", "Servis": "Pukulan awal untuk memulai permainan.", "Smash": "Pukulan keras dan menukik ke area lawan." }, 'cedera-ringan-4': { "P3K": "Pertolongan Pertama Pada Kecelakaan; tindakan pertolongan awal yang diberikan kepada korban cedera.", "Kompres": "Metode penanganan cedera dengan menempelkan sesuatu (dingin atau panas) pada area yang sakit." } };
const pustakaDatabase = { 'default': [ "Muhajir. (2021). <i>Buku Panduan Guru Pendidikan Jasmani, Olahraga, dan Kesehatan untuk SD Kelas I</i>. Jakarta: Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi." ] };
const lkpdDatabase = { 'default': { title: "Lembar Kerja Pengamatan Keterampilan Gerak", tujuan: "Mengamati dan menilai kemampuan siswa dalam mempraktikkan keterampilan gerak dasar.", alat: ["Area/lapangan", "Alat tulis"], langkah: [ "Amati setiap siswa saat melakukan demonstrasi.", "Berikan tanda centang (✓) pada kolom yang sesuai dengan tingkat penguasaan siswa.", "Tuliskan catatan atau masukan spesifik pada kolom deskripsi." ], tabel: `<table class="lkpd-table"><thead><tr><th rowspan="2">Nama Siswa</th><th colspan="4">Aspek yang Diamati: Gerak Dasar {placeholder}</th><th rowspan="2">Catatan</th></tr><tr><th>Sikap Awal</th><th>Pelaksanaan</th><th>Sikap Akhir</th><th>Koordinasi</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>` } };
const profilLulusanDatabase = { base: ['Keimanan', 'Kemandirian', 'Kesehatan'], desc: { 'Keimanan': 'Terintegrasi melalui kegiatan berdoa sebelum dan sesudah pelajaran serta menumbuhkan rasa syukur atas kesehatan tubuh.', 'Kewargaan': 'Dikembangkan melalui sportivitas, kepatuhan pada aturan main, dan menghargai teman maupun lawan.', 'Penalaran Kritis': 'Diasah saat siswa menganalisis taktik, mengevaluasi gerakan, dan memecahkan masalah dalam situasi permainan.', 'Kreativitas': 'Didorong saat siswa merancang variasi latihan, strategi permainan, atau menciptakan rangkaian gerak baru.', 'Kolaborasi': 'Dibangun melalui kerja sama tim, komunikasi efektif, dan memberikan umpan balik konstruktif kepada rekan.', 'Kemandirian': 'Tumbuh saat siswa mengambil inisiatif untuk berlatih, mengelola peralatannya sendiri, dan bertanggung jawab atas kemajuan belajarnya.', 'Kesehatan': 'Menjadi fokus utama dengan memahami manfaat aktivitas fisik bagi tubuh dan menerapkan pola hidup sehat.', 'Komunikasi': 'Dilatih secara verbal dan non-verbal saat berinteraksi dengan teman satu tim, menyampaikan ide, dan memahami isyarat dalam permainan.' }, byElemen: { 'Terampil Bergerak': ['Kolaborasi', 'Komunikasi'], 'Belajar melalui Gerak': ['Penalaran Kritis', 'Kreativitas', 'Kewargaan'], 'Bergaya Hidup Aktif': ['Kesehatan', 'Kemandirian'], 'Memilih Hidup yang Menyehatkan': ['Penalaran Kritis', 'Kesehatan'] } };
const quotes = [ "Anak hebat, terus bergerak dan jadi kuat!", "Setiap lompatan membuatmu lebih tinggi, setiap lari membuatmu lebih cepat!", "Bermain bersama teman itu seru dan menyehatkan!", "Jangan takut salah, yang penting berani mencoba!", "Kamu adalah juara kecil hari ini!" ];

// --- DOM Elements (Seleksi elemen dari HTML) ---
const mainView = document.getElementById('main-view');
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

const kelasByFase = { A: [1, 2], B: [3, 4], C: [5, 6] };

// --- Fungsi Bantuan untuk Gemini API ---
async function callGemini(prompt) {
    const apiKey = "AIzaSyCwDaHuDQ0uRqOhuLuG5-zxjKZlCyd-buU"; 
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const payload = { contents: [{ parts: [{ text: prompt }] }] };
    try {
        const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        const result = await response.json();
        if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
            return result.candidates[0].content.parts[0].text;
        }
        throw new Error("Invalid API response format");
    } catch (error) {
        console.error("callGemini Error:", error);
        return `Terjadi kesalahan: ${error.message}. Coba lagi nanti.`;
    }
}

function showModal(title, content) {
    geminiModalTitle.innerText = title;
    geminiModalContent.innerHTML = content
        .replace(/\*\*(.*?)\*\*/g, '<h3>$1</h3>')
        .replace(/Tautan YouTube untuk (.*?): (https:\/\/.*)/g, 'Tautan YouTube untuk $1: <a href="$2" target="_blank" class="text-indigo-600 hover:underline">$2</a>')
        .replace(/\n/g, '<br>');
    geminiModal.classList.remove('hidden');
}

function hideModal() { geminiModal.classList.add('hidden'); }

function getFormContext() {
    const fase = faseSelect.value;
    const kelas = kelasSelect.value;
    const materiJudul = materiPembelajaranSelect.options[materiPembelajaranSelect.selectedIndex].text;
    const materiSpesifik = document.getElementById('materi-spesifik').value;
    const modelPembelajaran = document.getElementById('model-pembelajaran').value;
    return { fase, kelas, materiJudul, materiSpesifik, modelPembelajaran };
}

// --- Event Listeners untuk Fitur AI ---
geminiWarmupBtn.addEventListener('click', async () => {
    const { fase, kelas, materiJudul, materiSpesifik } = getFormContext();
    const title = "Ide Pemanasan Kreatif";
    showModal(title, '<p class="text-center">Meminta ide dari Asisten... 🧠</p>');
    const prompt = `Sebagai seorang ahli pedagogi PJOK untuk anak SD, berikan saya 3 ide permainan pemanasan yang kreatif, menyenangkan, dan relevan untuk materi "${materiJudul}" dengan fokus pada "${materiSpesifik}" untuk siswa kelas ${kelas} (Fase ${fase}). Untuk setiap ide, gunakan format berikut: **Nama Permainan**, **Cara Bermain** (langkah-langkah jelas), **Hubungan dengan Materi**, dan **Saran Visual** (deskripsi gambar yang bisa dicari guru).`;
    const result = await callGemini(prompt);
    showModal(title, result);
});

geminiMateriBtn.addEventListener('click', async () => {
    const { fase, kelas, materiJudul, materiSpesifik } = getFormContext();
    const title = "Materi Ajar Tambahan";
    showModal(title, '<p class="text-center">Menyusun naskah materi ajar dengan Asisten... ✍️</p>');
    const prompt = `Sebagai seorang guru PJOK yang pandai bercerita untuk anak-anak, buatkan saya sebuah naskah materi ajar yang menarik untuk disampaikan di kelas. Konteksnya adalah untuk siswa kelas ${kelas} (Fase ${fase}) dengan topik utama "${materiJudul}" dan fokus spesifik pada "${materiSpesifik}". Buatlah narasi yang mudah dipahami anak-anak, gunakan analogi yang relevan, dan sampaikan dalam bentuk cerita atau penjelasan langkah demi langkah yang imajinatif. Sertakan juga bagian **Ide Gambar & Visual** yang berisi 3 deskripsi gambar atau ide visual yang relevan dan menarik untuk ditampilkan kepada siswa.`;
    const result = await callGemini(prompt);
    showModal(title, result);
});

geminiQuizBtn.addEventListener('click', async () => {
    const { fase, kelas, materiJudul, materiSpesifik } = getFormContext();
    const title = "Kuis Interaktif";
    showModal(title, '<p class="text-center">Membuat kuis dengan Asisten... 📝</p>');
    let questionCount = 10;
    if (fase === 'B') questionCount = 15;
    if (fase === 'C') questionCount = 20;
    const prompt = `Sebagai ahli pembuat soal PJOK untuk anak SD, buatkan saya ${questionCount} soal kuis pilihan ganda yang interaktif dan menyenangkan. Kuis ini untuk siswa kelas ${kelas} (Fase ${fase}) mengenai materi "${materiJudul}" dengan fokus "${materiSpesifik}". Untuk setiap soal, berikan pertanyaan, 3 pilihan jawaban (A, B, C), dan tandai jawaban yang benar. Terakhir, buat bagian **Kunci Jawaban dan Penjelasan** yang menerangkan mengapa setiap jawaban benar dengan bahasa yang mudah dimengerti anak-anak.`;
    const result = await callGemini(prompt);
    showModal(title, result);
});

geminiCodingBtn.addEventListener('click', async () => {
    const { fase, kelas, materiJudul, materiSpesifik, modelPembelajaran } = getFormContext();
    const title = "Ide Pembelajaran Coding di PJOK";
    showModal(title, '<p class="text-center">Menghubungkan gerak dan logika... 🤖</p>');
    const prompt = `Sebagai seorang guru inovator yang ahli dalam mengintegrasikan teknologi dan _computational thinking_ (berpikir komputasi) ke dalam mata pelajaran non-IT seperti PJOK, berikan saya 3 ide konkret untuk mengintegrasikan pembelajaran coding melalui aktivitas fisik (_unplugged coding_).
    Konteksnya adalah untuk siswa kelas ${kelas} (Fase ${fase}), dengan materi utama "${materiJudul}" (fokus pada "${materiSpesifik}"), dan menggunakan model pembelajaran "${modelPembelajaran}".
    Pastikan ide-ide tersebut praktis, menyenangkan, tidak memerlukan perangkat digital yang rumit, dan sesuai dengan usia siswa.
    Untuk setiap ide, jelaskan dengan format berikut:
    **Nama Aktivitas:**
    **Konsep Coding yang Diajarkan:** (Contoh: Algoritma/Urutan, Kondisional/If-Then, Perulangan/Loop, Debugging)
    **Deskripsi Aktivitas:** (Jelaskan langkah-langkah praktis di lapangan secara rinci)
    **Kaitan dengan Materi PJOK & Model Pembelajaran:** (Jelaskan bagaimana aktivitas ini mencapai tujuan PJOK dan cocok dengan model pembelajaran yang dipilih)`;
    const result = await callGemini(prompt);
    showModal(title, result);
});

geminiModalClose.addEventListener('click', hideModal);
geminiModalCopy.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(geminiModalContent);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try { document.execCommand('copy'); geminiModalCopy.innerText = 'Tersalin!'; } catch (err) { console.error('Gagal menyalin'); }
    window.getSelection().removeAllRanges();
    setTimeout(() => { geminiModalCopy.innerText = 'Salin Teks'; }, 2000);
});

// --- Logika Inti Aplikasi ---
function populateKelas() {
    const fase = faseSelect.value;
    const kelasUntukFase = kelasByFase[fase];
    kelasSelect.innerHTML = '';
    kelasUntukFase.forEach(k => {
        const option = document.createElement('option');
        option.value = k;
        option.textContent = `Kelas ${k}`;
        kelasSelect.appendChild(option);
    });
    populateMateri();
}

function populateMateri() {
    const kelas = kelasSelect.value;
    const materiUntukKelas = materiByKelas[kelas];
    materiPembelajaranSelect.innerHTML = '';
    if (materiUntukKelas) {
        for (const key in materiUntukKelas) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = materiUntukKelas[key].text;
            materiPembelajaranSelect.appendChild(option);
        }
    }
    materiPembelajaranSelect.dispatchEvent(new Event('change'));
}

materiPembelajaranSelect.addEventListener('change', (e) => {
    const kelas = kelasSelect.value;
    const materiKey = e.target.value;
    if (materiByKelas[kelas] && materiByKelas[kelas][materiKey]) {
        const elemen = materiByKelas[kelas][materiKey].elemenTerkait;
        if (elemen) elemenCpSelect.value = elemen;
    }
});

faseSelect.addEventListener('change', populateKelas);
kelasSelect.addEventListener('change', populateMateri);
document.addEventListener('DOMContentLoaded', populateKelas);

// --- Fungsi-fungsi Generator Konten ---
function generateProfilLulusan(elemenCP) {
    const profilSet = new Set(profilLulusanDatabase.base);
    if (profilLulusanDatabase.byElemen[elemenCP]) {
        profilLulusanDatabase.byElemen[elemenCP].forEach(p => profilSet.add(p));
    }
    return Array.from(profilSet);
}

function generateKegiatanInti(materiKey, model, pertemuanIndex, materiJudulSingkat, materiSpesifik) {
    const db = kegiatanIntiDatabase;
    let steps;
    const placeholderMateri = materiSpesifik || materiJudulSingkat;

    if (db[materiKey] && db[materiKey][model] && db[materiKey][model][pertemuanIndex]) {
        steps = db[materiKey][model][pertemuanIndex];
    } else if (db.default[model] && db.default[model][pertemuanIndex]) {
        steps = db.default[model][pertemuanIndex];
    } else if (db.default[model]) {
         steps = db.default[model][db.default[model].length - 1];
    } else {
        steps = ["Guru memfasilitasi aktivitas inti sesuai dengan materi dan model pembelajaran yang dipilih."];
    }
    
    return steps.map(step => step.replace(/{materi_spesifik}/g, placeholderMateri.toLowerCase()).replace(/{materi}/g, materiJudulSingkat.toLowerCase()));
}

function generatePendekatanHTML(modelPembelajaran, fase) {
    const modelData = modelPembelajaranDatabase[modelPembelajaran] || {};
    const frameworkData = deepLearningFrameworkDatabase[fase] || deepLearningFrameworkDatabase['A'];
    const metode = modelData.metode ? modelData.metode.join(', ') : 'Tidak ada';
    return `<p>Modul ini dirancang menggunakan <strong>Pendekatan ${modelData.pendekatan}</strong>. Fokus utama adalah ${modelData.deskripsi}. Model yang digunakan adalah <strong>${modelPembelajaran}</strong>, dengan metode: <strong>${metode}</strong>.</p><div class="deep-learning-box"><p>Implementasi ini didasarkan pada kerangka <strong>Pembelajaran Mendalam (Deep Learning)</strong> yang mengintegrasikan:</p><ul><li><strong>Praktik Pedagogis:</strong> Fokus pada ${modelData.deskripsi}.</li><li><strong>Lingkungan Pembelajaran:</strong> ${frameworkData.lingkungan}</li><li><strong>Kemitraan Pembelajaran:</strong> ${frameworkData.kemitraan}</li><li><strong>Teknologi Digital:</strong> ${frameworkData.teknologi}</li></ul></div>`;
}

function generateTujuanPembelajaran(capaianText, materiText) {
    const sentences = capaianText.split('. ').filter(s => s.trim() !== '');
    const tujuanList = sentences.map(sentence => {
        let tujuan = `Peserta didik dapat ${sentence.charAt(0).toLowerCase() + sentence.slice(1)}`;
        if (!tujuan.endsWith('.')) tujuan += '.';
        if (tujuan.toLowerCase().includes("keterampilan gerak") || tujuan.toLowerCase().includes("aktivitas jasmani") || tujuan.toLowerCase().includes("situasi gerak")) {
            tujuan = tujuan.replace(/\.$/, `, khususnya dalam konteks ${materiText}.`);
        }
        return `<li>${tujuan}</li>`;
    });
    return {
        html: `<ul>${tujuanList.join('')}</ul>`,
        list: tujuanList.map(li => li.replace(/<li>|<\/li>/g, ''))
    };
}

function generateATP(tpList) {
    if (!tpList || tpList.length === 0) return "<p>Alur Tujuan Pembelajaran akan dirangkai setelah Tujuan Pembelajaran spesifik ditentukan.</p>";
    let atpHtml = `<p>Alur Tujuan Pembelajaran (ATP) ini dirancang secara sistematis untuk memandu peserta didik mencapai Capaian Pembelajaran. Berikut adalah alur yang akan ditempuh:</p><ol>`;
    tpList.forEach((tp, index) => {
        let stepLabel = (index === 0) ? '<strong>Langkah Awal (Fondasi):</strong> ' : (index === tpList.length - 1) ? '<strong>Puncak Pembelajaran (Aplikasi):</strong> ' : `<strong>Langkah ${index + 1} (Pengembangan):</strong> `;
        atpHtml += `<li>${stepLabel}${tp}</li>`;
    });
    atpHtml += `</ol>`;
    return atpHtml;
}

// --- Event Listener Tombol Utama: Generate Modul ---
generateBtn.addEventListener('click', () => {
    placeholder.classList.add('hidden');
    outputContainer.innerHTML = '<p class="text-center">Menyusun Modul Ajar, mohon tunggu... ⚙️</p>';
    actionButtons.classList.add('hidden');
    geminiFeaturesSection.classList.add('hidden');
    
    setTimeout(() => {
        // Mengambil semua nilai dari form
        const { fase, kelas, materiJudul, materiSpesifik, modelPembelajaran } = getFormContext();
        const namaPenyusun = document.getElementById('nama-penyusun').value;
        const guruNip = document.getElementById('guru-nip').value;
        const kepsekNama = document.getElementById('kepsek-nama').value;
        const kepsekNip = document.getElementById('kepsek-nip').value;
        const institusi = document.getElementById('institusi').value;
        const semester = document.getElementById('semester').value;
        const elemenCP = document.getElementById('elemen-cp').value;
        const materiKey = document.getElementById('materi-pembelajaran').value;
        const jumlahPertemuan = parseInt(document.getElementById('jumlah-pertemuan').value);
        const jpPerPertemuan = parseInt(document.getElementById('jp-per-pertemuan').value);
        const menitPerJP = parseInt(document.getElementById('menit-per-jp').value);
        const lokasiTtd = document.getElementById('lokasi-ttd').value;
        const tanggalTtd = document.getElementById('tanggal-ttd').value;
        const totalJP = jumlahPertemuan * jpPerPertemuan;
        const alokasiWaktuText = `${totalJP} JP (${jumlahPertemuan} Pertemuan @ ${jpPerPertemuan} JP x ${menitPerJP} Menit)`;
        const menitTotalPerPertemuan = jpPerPertemuan * menitPerJP;
        const menitPendahuluan = 10;
        const menitPenutup = 10;
        const menitInti = menitTotalPerPertemuan - menitPendahuluan - menitPenutup > 0 ? menitTotalPerPertemuan - menitPendahuluan - menitPenutup : 50;
        const materiJudulSingkat = materiJudul.replace(/Aktivitas.*?:\s*|Permainan\s*|Kesehatan:\s*/, '').replace(/\s*\(.*\)/, '').trim();
        const placeholderMateri = materiSpesifik || materiJudulSingkat;

        // Memanggil fungsi-fungsi generator
        const content = contentDatabase.default;
        const capaianPembelajaran = capaianPerElemen[elemenCP] ? capaianPerElemen[elemenCP][fase] : "Capaian tidak ditemukan.";
        const tujuanData = generateTujuanPembelajaran(capaianPembelajaran, placeholderMateri);
        const generatedTujuanHTML = tujuanData.html;
        const generatedATPHTML = generateATP(tujuanData.list);
        const generatedPertanyaanHTML = `<ul><li>Apa yang kamu ketahui tentang ${placeholderMateri.toLowerCase()}?</li><li>Mengapa penting bisa melakukan ${placeholderMateri.toLowerCase()}?</li></ul>`;
        
        let kegiatanHTML = '';
        for (let i = 0; i < jumlahPertemuan; i++) {
            const pendahuluanItems = [ "Guru menyapa siswa, mengajak berdoa, dan mengecek kehadiran. <span class='principle-tag'>(Meaningful)</span>", `Guru mengajak siswa bernyanyi atau tepuk semangat. <span class='principle-tag'>(Joyful)</span>`, `Guru bertanya: "<i>Siapa yang suka ${materiJudulSingkat.toLowerCase()}?</i>". <span class='principle-tag'>(Meaningful)</span>`, "Pemanasan dengan permainan sederhana. <span class='principle-tag'>(Joyful)</span>" ];
            const intiItems = generateKegiatanInti(materiKey, modelPembelajaran, i, materiJudulSingkat, materiSpesifik);
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            const penutupItems = [ "Pendinginan dengan peregangan ringan. <span class='principle-tag'>(Mindful)</span>", "Refleksi singkat: '<i>Bagian mana yang paling kalian sukai?</i>'. <span class='principle-tag'>(Meaningful)</span>", "Apresiasi kepada semua siswa. <span class='principle-tag'>(Joyful)</span>", `Pesan singkat: "<i>${randomQuote}</i>", lalu doa dan salam. <span class='principle-tag'>(Meaningful)</span>` ];
            kegiatanHTML += `<h4>Pertemuan Ke-${i + 1}</h4><p><strong>a. Pendahuluan (${menitPendahuluan} Menit):</strong></p><ol>${pendahuluanItems.map(item => `<li>${item}</li>`).join('')}</ol><p><strong>b. Inti (${menitInti} Menit) - Model: ${modelPembelajaran}:</strong></p><ol>${intiItems.map(item => `<li>${item}</li>`).join('')}</ol><p><strong>c. Penutup (${menitPenutup} Menit):</strong></p><ol>${penutupItems.map(item => `<li>${item}</li>`).join('')}</ol>`;
        }
        
        const lkpdSpesifik = lkpdDatabase[materiKey] || lkpdDatabase['default'];
        const saranaSpesifik = saranaDatabase[materiKey] || saranaDatabase['default'];
        const pendekatanHTML = generatePendekatanHTML(modelPembelajaran, fase);
        const signatureTableHTML = `<table style="width:100%;border:none;margin-top:4rem;page-break-inside:avoid;"><tbody style="border:none;"><tr style="border:none;"><td style="width:50%;text-align:left;vertical-align:top;border:none;padding:0;">Mengetahui,<br>Kepala Sekolah<br><br><br><br><strong><u>${kepsekNama}</u></strong><br>NIP. ${kepsekNip}</td><td style="width:50%;text-align:left;vertical-align:top;border:none;padding:0;">${lokasiTtd}, ${tanggalTtd}<br>Guru Mata Pelajaran<br><br><br><br><strong><u>${namaPenyusun}</u></strong><br>NIP. ${guruNip}</td></tr></tbody></table>`;
        const lkpdHTML = `<h4>a. ${lkpdSpesifik.title}</h4><p><strong>Tujuan:</strong> ${lkpdSpesifik.tujuan}</p><p><strong>Alat & Bahan:</strong> ${lkpdSpesifik.alat.join(', ')}</p><p><strong>Langkah Kerja:</strong></p><ol>${lkpdSpesifik.langkah.map(l => `<li>${l}</li>`).join('')}</ol>${lkpdSpesifik.tabel.replace(/{placeholder}/g, placeholderMateri.toLowerCase())}`;
        const bahanBacaanHTML = `<p>- Buku Teks PJOK Kurikulum Merdeka (<a href="https://buku.kemdikbud.go.id/katalog" target="_blank" class="text-indigo-600 hover:underline">buku.kemdikbud.go.id</a>)<br>- Video pembelajaran di YouTube</p>`;
        
        const finalGlossary = { ...glosariumDatabase.default, ...(glosariumDatabase[materiKey] || {}) };
        const glosariumHTML = Object.entries(finalGlossary).map(([istilah, definisi]) => `<p><strong>${istilah}:</strong> ${definisi}</p>`).join('');
        const pustakaHTML = pustakaDatabase.default.map(sumber => `<p>- ${sumber.replace('Kelas I', `Kelas ${kelas}`)}</p>`).join('');
        const profilLulusan = generateProfilLulusan(elemenCP);
        const profilLulusanHTML = `<ul>${profilLulusan.map(p => `<li><strong>${p}:</strong> ${profilLulusanDatabase.desc[p] || ''}</li>`).join('')}</ul>`;
        const saranaHTML = `<p><strong>Media Pembelajaran:</strong></p><ul>${saranaSpesifik.media.map(m => `<li>${m}</li>`).join('')}</ul><p><strong>Alat dan Bahan:</strong></p><ul>${saranaSpesifik.alat.map(a => `<li>${a}</li>`).join('')}</ul>`;
        const pemahamanBermaknaHTML = (content.pemahaman).replace(/{placeholder}/g, materiJudulSingkat.toLowerCase());
        const asesmenHTML = `<ul><li><strong>Asesmen Diagnostik:</strong> ${content.asesmen.diagnostik.replace(/{placeholder}/g, placeholderMateri.toLowerCase())}</li><li><strong>Formatif:</strong> ${content.asesmen.formatif}</li><li><strong>Sumatif:</strong> ${content.asesmen.sumatif.replace(/{placeholder}/g, placeholderMateri.toLowerCase())}</li></ul>${content.asesmen.rubrikPenilaian.replace(/{placeholder}/g, placeholderMateri.toLowerCase())}`;
        
        // Merakit semua bagian menjadi HTML akhir
        const modulHTML = `<h1 class="text-2xl font-bold text-center mb-6">MODUL AJAR PJOK</h1> <h2 class="text-xl font-semibold text-center mb-8">${materiJudul.toUpperCase()} (${materiSpesifik})</h2> <h2>A. INFORMASI UMUM</h2> <table class="w-full text-left mb-6"><tr><td class="font-semibold p-2 w-1/3">Nama Penyusun</td><td class="p-2">: ${namaPenyusun}</td></tr><tr><td class="font-semibold p-2 w-1/3">Institusi</td><td class="p-2">: ${institusi}</td></tr><tr><td class="font-semibold p-2 w-1/3">Tahun Ajaran</td><td class="p-2">: 2025/2026</td></tr><tr><td class="font-semibold p-2 w-1/3">Jenjang Sekolah</td><td class="p-2">: Sekolah Dasar</td></tr><tr><td class="font-semibold p-2 w-1/3">Fase / Kelas</td><td class="p-2">: ${fase} / ${kelas}</td></tr><tr><td class="font-semibold p-2 w-1/3">Semester</td><td class="p-2">: ${semester}</td></tr><tr><td class="font-semibold p-2 w-1/3">Elemen</td><td class="p-2">: ${elemenCP}</td></tr><tr><td class="font-semibold p-2 w-1/3 align-top">Capaian</td><td class="p-2 align-top">: ${capaianPembelajaran}</td></tr><tr><td class="font-semibold p-2 w-1/3">Alokasi Waktu</td><td class="p-2">: ${alokasiWaktuText}</td></tr></table><h2>B. KOMPONEN INTI</h2><h3>1. Tujuan Pembelajaran</h3>${generatedTujuanHTML}<h3>2. Alur Tujuan Pembelajaran</h3>${generatedATPHTML}<h3>3. Pemahaman Bermakna</h3><p>${pemahamanBermaknaHTML}</p><h3>4. Pertanyaan Pemantik</h3>${generatedPertanyaanHTML}<h3>5. Pendekatan, Model, Metode</h3>${pendekatanHTML}<h3>6. Profil Lulusan</h3><p>Aktivitas ini mengembangkan dimensi berikut:</p>${profilLulusanHTML}<h3>7. Sarana dan Prasarana</h3>${saranaHTML}<h3>8. Kegiatan Pembelajaran</h3>${kegiatanHTML}<h3>9. Asesmen / Penilaian</h3>${asesmenHTML}<h2>C. LAMPIRAN</h2><h3>1. Lembar Kerja Peserta Didik</h3>${lkpdHTML}<h3>2. Bahan Bacaan</h3>${bahanBacaanHTML}<h3>3. Glosarium</h3>${glosariumHTML}<h3>4. Daftar Pustaka</h3>${pustakaHTML}${signatureTableHTML}`;
        
        // Menampilkan hasil di halaman
        outputContainer.innerHTML = modulHTML;
        actionButtons.classList.remove('hidden');
        geminiFeaturesSection.classList.remove('hidden');
    }, 500);
});

// --- Event Listeners untuk Tombol Aksi Lainnya ---
copyBtn.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(document.getElementById('output-modul'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try {
        document.execCommand('copy');
        copyBtn.innerText = 'Disalin!';
    } catch (err) {
        console.error('Gagal menyalin');
    }
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        copyBtn.innerText = 'Salin Teks & Format';
    }, 2000);
});

backBtn.addEventListener('click', () => {
    location.reload();
});
