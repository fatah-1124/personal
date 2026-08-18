# Mengapa Saya Memilih Framework Tertentu untuk Membangun Website, Bukan Hanya Sekadar Memberikan Prompt pada AI

Beberapa bulan terakhir saya cukup sering ditanya, biasanya oleh sesama pelaut yang penasaran dengan "kesibukan darat" saya: *"Kenapa nggak tinggal minta AI aja bikinin website-nya? Kan sekarang tinggal ngetik prompt, jadi."*

Pertanyaan itu wajar. Alat-alat AI generatif memang sudah sangat mampu memuntahkan halaman HTML yang rapi hanya dari satu-dua kalimat perintah. Tapi setiap kali saya membangun sesuatu — entah itu landing page pribadi, portal kerja untuk pelaut, atau aplikasi kasir untuk UMKM — saya tetap memilih dan menetapkan framework terlebih dahulu, baru kemudian AI saya libatkan sebagai alat bantu di dalam struktur itu, bukan sebagai pengganti struktur itu sendiri.

Berikut alasan-alasannya.

## 1. Prompt Menghasilkan Output, Framework Menghasilkan Fondasi

Ketika saya meminta AI membuat sebuah halaman, yang saya dapatkan adalah *output* — sepotong kode yang bekerja untuk kondisi saat itu. Tapi sebuah website bukan artefak sekali jadi. Ia adalah sistem yang akan tumbuh: hari ini satu halaman blog, minggu depan integrasi API, bulan depan fitur pencarian dan otentikasi pengguna.

Framework menyediakan aturan main untuk pertumbuhan itu — bagaimana routing bekerja, bagaimana komponen saling berkomunikasi, bagaimana state dikelola. Tanpa fondasi itu, setiap prompt baru berpotensi menghasilkan pola yang berbeda dari prompt sebelumnya, dan saya yang harus menyatukan potongan-potongan yang tidak pernah dirancang untuk hidup berdampingan.

Untuk landing page pribadi saya, saya memilih Astro dipadukan dengan Bootstrap. Bukan karena itu satu-satunya pilihan yang "benar", tapi karena kebutuhannya jelas: situs yang sebagian besar berisi konten statis (blog dan portofolio), perlu cepat dimuat, dan tidak butuh kerumitan aplikasi interaktif penuh. Astro memberi saya arsitektur yang sesuai dengan kebutuhan itu sejak awal — bukan sesuatu yang saya susun ulang setiap kali meminta AI menambahkan halaman baru.

## 2. Kebutuhan Proyek yang Berbeda, Keputusan Arsitektur yang Berbeda

Ini yang menurut saya paling sering luput dari obrolan "AI vs framework": tidak semua proyek butuh solusi yang sama, dan memilih framework pada dasarnya adalah proses menerjemahkan kebutuhan bisnis menjadi keputusan teknis.

Portal kerja untuk pelaut yang sedang saya bangun jelas berbeda kebutuhannya dari landing page pribadi saya. Di sana ada alur pendaftaran anggota, formulir CV, sistem lowongan kerja, dan potensi ratusan pengguna aktif di tahun pertama. Untuk itu saya memilih kombinasi React di sisi frontend dan Laravel di backend, dengan MySQL sebagai basis data — kombinasi yang punya ekosistem matang untuk menangani otentikasi, validasi formulir kompleks, dan relasi data antara pelaut, perusahaan, dan lowongan.

Sementara untuk aplikasi kasir UMKM yang saya kembangkan sebagai portofolio, saya memilih CodeIgniter 4 di backend dan Vue di frontend — kombinasi yang lebih ringan dan cocok untuk kebutuhan transaksional sederhana tanpa overhead yang tidak perlu.

Kalau saya hanya mengandalkan prompt tanpa menetapkan arsitektur di awal, AI tidak tahu prioritas mana yang seharusnya saya ambil untuk masing-masing proyek ini. Ia hanya akan menjawab prompt demi prompt, dan keputusan arsitektural yang seharusnya saya ambil secara sadar malah menjadi konsekuensi tidak terencana dari urutan pertanyaan yang saya ajukan.

## 3. Saya Perlu Bisa Membaca dan Mempertanggungjawabkan Kodenya

Saya sedang menempuh S1 Ilmu Komputer sambil membangun praktik konsultasi data saya sendiri. Salah satu hal yang saya pegang adalah: saya tidak ingin menjadi orang yang hanya bisa menyalakan hasil kerja AI tanpa memahami mengapa hasil itu bekerja.

Ketika saya memilih framework terlebih dahulu, saya sedang memilih bahasa dan pola yang saya pahami secara sadar — sehingga ketika AI membantu menuliskan sebagian kode, saya tetap bisa membaca, mengevaluasi, dan memperbaikinya sendiri. Ini penting terutama untuk proyek yang melibatkan data pengguna, seperti data kontak pelaut di portal kerja. Saya perlu tahu persis bagaimana data itu disimpan dan diakses, bukan sekadar mempercayai bahwa "AI pasti sudah menanganinya dengan benar".

## 4. Prompt yang Baik Justru Butuh Konteks Framework yang Jelas

Ironisnya, semakin jelas framework dan arsitektur yang saya tetapkan di awal, semakin baik pula hasil yang saya dapatkan ketika meminta bantuan AI. Prompt seperti "buatkan komponen formulir pendaftaran perusahaan menggunakan Laravel dengan validasi nomor SIUPPAK" akan menghasilkan kode yang jauh lebih tepat guna dibanding prompt generik "buatkan formulir pendaftaran".

Dengan kata lain, menetapkan framework bukan langkah yang berlawanan dengan memakai AI — justru itu yang membuat AI bisa saya manfaatkan secara maksimal. Framework memberi AI batasan dan konteks; tanpa itu, AI hanya menebak-nebak preferensi saya dari nol setiap kali.

## Kesimpulan: AI Sebagai Alat, Bukan Arsitek

Saya tetap menggunakan AI hampir di setiap proyek yang saya kerjakan — untuk mempercepat penulisan boilerplate, mencari solusi bug, atau membantu menyusun query. Tapi keputusan tentang *apa* yang saya bangun dan *bagaimana* fondasinya disusun, itu tetap saya ambil sendiri terlebih dahulu.

Bagi saya, memilih framework adalah cara untuk tetap menjadi pengambil keputusan dalam proyek saya sendiri — bukan sekadar operator yang menunggu AI memutuskan arah, satu prompt pada satu waktu.
