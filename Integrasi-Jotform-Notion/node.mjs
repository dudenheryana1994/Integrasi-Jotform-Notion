import { jotformToNotion } from "./src/jotformToNotion.mjs";

// Jalankan fungsi utama
jotformToNotion().then(() => {
    console.log('Data berhasil dikirim ke Notion');
}).catch(error => {
    console.error('Terjadi Kesalahan Data Tidak Terkirim:', error);
});