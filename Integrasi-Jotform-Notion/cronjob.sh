crontab -e
# Tambahkan baris berikut untuk menjalankan script setiap jam
0 * * * * /usr/bin/node /path/to/jotform_to_notion.js
