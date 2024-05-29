import { getSubmissions } from '../jotform.mjs';
import { createPage } from '../notion.mjs';

async function jotformToNotion() {
    try {
        const submissions = await getSubmissions();
        console.log('Submissions:', submissions);
        
        submissions.forEach(async (submission) => {
            const data = {
                //name: submission.answers['21']?.answer,
                name: `${submission.answers['21']?.answer?.first} ${submission.answers['21']?.answer?.last}`,
                email: submission.answers['15']?.answer,
                phone: submission.answers['5']?.answer,
                submissionDate: submission.created_at,
                approvalStatus: submission.status
            };

            console.log('Data yang akan dikirim ke Notion', data); //log the data
            await createPage(data);
        });
        
        console.log('Data Kirim ke Notion');
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}

// Ekspor fungsi jika diperlukan di tempat lain
export { jotformToNotion };